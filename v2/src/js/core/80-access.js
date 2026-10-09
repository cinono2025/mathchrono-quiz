/* ===== Accès élève : code personnel par classe (200 F, 30 jours), thème d'essai gratuit ===== */
(function(){
  var PUB=window.__MQ_PUB, LSK='mq_acc';
  var PAY={ MONTANT:200, JOURS:30, WHATSAPP:'2290197890952',
    CODE_MOOV:'*855*41*258051*{M}*1#', CODE_MTN:'*880*41*171251*{M}#' };
  var ACC={};            /* classe -> {exp,name,code} : codes élèves valides */
  var teacherExp='';     /* fin de validité d'un code enseignant valide (accès à toutes les classes) */
  var ready=false;

  function two(n){ return ('0'+n).slice(-2); }
  function today(){ var d=new Date(); return d.getFullYear()+'-'+two(d.getMonth()+1)+'-'+two(d.getDate()); }
  function addDays(iso,n){ var p=String(iso).split('-').map(Number); var d=new Date(Date.UTC(p[0],p[1]-1,p[2]+n)); return d.getUTCFullYear()+'-'+two(d.getUTCMonth()+1)+'-'+two(d.getUTCDate()); }
  function frDate(iso){ var p=String(iso).split('-'); return p.length===3?p[2]+'/'+p[1]+'/'+p[0]:iso; }
  function daysLeft(iso){ var a=today().split('-').map(Number), b=String(iso).split('-').map(Number); return Math.round((Date.UTC(b[0],b[1]-1,b[2])-Date.UTC(a[0],a[1]-1,a[2]))/86400000); }
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function b64u(s){ s=s.replace(/-/g,'+').replace(/_/g,'/'); while(s.length%4) s+='='; var bin=atob(s), u=new Uint8Array(bin.length); for(var i=0;i<bin.length;i++) u[i]=bin.charCodeAt(i); return u; }
  function allClasses(){ return Object.keys(CLASSES_C1).concat(Object.keys(CLASSES_C2)); }
  function themesOf(cls){ return CLASSES_C1[cls]||CLASSES_C2[cls]||[]; }
  function trial(cls){ var l=themesOf(cls); for(var i=0;i<l.length;i++) if(!/Prop\. & D/.test(l[i])) return l[i]; return l[0]||'Tous'; }
  function label(t){ return String(t).replace(/^[\w]+ — /,'').replace(/^[36]e — /,''); }

  /* type d'un code sans le vérifier : 'E' = élève, sinon enseignant */
  function peekType(code){ try{ var m=/^MQ1\.([A-Za-z0-9_-]+)\./.exec(String(code||'').replace(/\s+/g,'')); if(!m) return ''; return (JSON.parse(new TextDecoder().decode(b64u(m[1])))||{}).t||''; }catch(e){ return ''; } }

  /* ---- vérification d'un code élève (signature ECDSA P-256 + classe + date) ---- */
  function verify(code){
    code=String(code||'').replace(/\s+/g,'');
    var m=/^MQ1\.([A-Za-z0-9_-]+)\.([A-Za-z0-9_-]+)$/.exec(code);
    if(!m) return Promise.resolve({ok:false,err:'Code invalide : copie-le en entier, sans rien ajouter ni retirer.'});
    if(!(window.crypto&&window.crypto.subtle)) return Promise.resolve({ok:false,soft:true,err:'Ce navigateur ne permet pas de vérifier le code. Ouvre le site avec Chrome, en connexion sécurisée.'});
    var pb,sg; try{ pb=b64u(m[1]); sg=b64u(m[2]); }catch(e){ return Promise.resolve({ok:false,err:'Code invalide.'}); }
    return crypto.subtle.importKey('jwk',PUB,{name:'ECDSA',namedCurve:'P-256'},false,['verify']).then(function(k){ return crypto.subtle.verify({name:'ECDSA',hash:'SHA-256'},k,sg,pb); }).then(function(ok){
      if(!ok) return {ok:false,err:'Code incorrect. Vérifie-le ou demande-le à nouveau sur WhatsApp.'};
      var p; try{ p=JSON.parse(new TextDecoder().decode(pb)); }catch(e){ return {ok:false,err:'Code invalide.'}; }
      if(p.t!=='E'){ return {ok:false,teacher:true,err:'Ceci est un code enseignant. Il se colle dans « Évaluation à imprimer » puis « Sommative ».'}; }
      if(allClasses().indexOf(p.c)<0) return {ok:false,err:'Code invalide.'};
      var dv=window.mqDeviceCheck(p); if(dv) return dv;
      var ex=(p.i&&/^\d{4}-\d{2}-\d{2}$/.test(p.i))?addDays(p.i,PAY.JOURS):'';
      if(p.e&&p.e<ex) ex=p.e;
      if(!ex) return {ok:false,err:'Code invalide.'};
      if(ex<today()) return {ok:false,expired:true,cls:p.c,exp:ex,err:'Ce code (classe '+p.c+') a expiré le '+frDate(ex)+'. Pour continuer, paie à nouveau 200 F et demande un nouveau code.'};
      return {ok:true,cls:p.c,name:p.n||'',exp:ex,code:code};
    }).catch(function(){ return {ok:false,soft:true,err:'Code invalide.'}; });
  }

  /* ---- mémoire des codes sur le téléphone ---- */
  function loadStore(){ try{ var a=JSON.parse(localStorage.getItem(LSK)||'[]'); return Array.isArray(a)?a:[]; }catch(e){ return []; } }
  function saveStore(a){ try{ localStorage.setItem(LSK,JSON.stringify(a)); }catch(e){} }
  function addToStore(code){ var a=loadStore(); if(a.indexOf(code)<0){ a.push(code); saveStore(a); } }
  function refresh(){
    var codes=loadStore(); ACC={}; window.__mqDevE=false; window.__mqDevT=false;
    return Promise.all(codes.map(verify)).then(function(rs){
      var keep=[]; rs.forEach(function(r,i){ if(r.unbound||r.wrongDevice) window.__mqDevE=true; if(r.ok){ var old=ACC[r.cls]; if(!old||old.exp<r.exp) ACC[r.cls]={exp:r.exp,name:r.name,code:r.code}; keep.push(codes[i]); } else if(r.soft){ keep.push(codes[i]); } });
      if(keep.length!==codes.length) saveStore(keep);
      var st=null; try{ st=localStorage.getItem('mq_lic'); }catch(e){}
      if(st&&window.__SOM&&window.__SOM.verify) return window.__SOM.verify(st).then(function(r){ teacherExp=(r&&r.ok)?r.exp:''; if(r&&(r.unbound||r.wrongDevice)) window.__mqDevT=true; }); teacherExp='';
    }).then(function(){ ready=true; });
  }

  /* ---- droits d'accès ---- */
  function isTeacher(){ return !!(teacherExp&&teacherExp>=today()); }
  function canClass(cls){ if(isTeacher()) return true; var a=ACC[cls]; return !!(a&&a.exp>=today()); }
  function canTheme(cls,theme){ return canClass(cls)||theme===trial(cls); }

  /* ---- changement de classe (ouverture par lien, après activation) ---- */
  function goClass(cls){
    var c=CLASSES_C1[cls]?1:2;
    if(currentCycle!==c){ setCycle(c); }
    if(c===2){ Object.keys(SERIES).forEach(function(s){ if(SERIES[s].indexOf(cls)>=0) currentSerie=s; }); }
    currentClass=cls; currentTheme='Tous'; startQuiz();
  }

  /* ---- barre d'état sous le choix du thème ---- */
  var BTN='width:100%;margin-bottom:8px;padding:9px;border-radius:8px;font-family:inherit;font-size:12.5px;font-weight:700;cursor:pointer;';
  window.mqAccesBar=function(){
    var cls=currentClass;
    if(isTeacher()) return '<div style="margin-bottom:8px;font-size:12px;color:var(--success);font-weight:700;">✅ Accès Parent / Enseignant : toute l\'application</div>';
    var a=ACC[cls];
    if(a&&a.exp>=today()){ var d=daysLeft(a.exp); return '<div style="margin-bottom:8px;font-size:12px;color:var(--success);font-weight:700;">✅ Classe de '+esc(cls)+' débloquée jusqu\'au '+frDate(a.exp)+' ('+d+' jour'+(d>1?'s':'')+' restant'+(d>1?'s':'')+')</div>'; }
    return '<div style="margin-bottom:8px;font-size:12px;color:var(--text-sec);">Thème d\'essai gratuit : <b>'+esc(label(trial(cls)))+'</b></div>'+
      '<button onclick="mqPay()" style="'+BTN+'border:none;background:var(--accent);color:#fff;">🔓 Débloquer la classe de '+esc(cls)+' · '+PAY.MONTANT+' F pour '+PAY.JOURS+' jours</button>';
  };

  /* ---- porte d'entrée du quiz : appelée au début de startQuiz() ; renvoie true si elle a pris la main ---- */
  window.mqAccesGate=function(){
    var cls=currentClass; if(canClass(cls)) return false;
    var t=trial(cls);
    if(currentTheme==='Tous'){ currentTheme=t; return false; }
    if(currentTheme===t) return false;
    mqPayPage(currentTheme); return true;
  };

  function codeAvec(m,n){ return m.replace('{M}',String(n||PAY.MONTANT)); }
  function lienTel(c){ return 'tel:'+c.replace(/#/g,'%23'); }

  function mqPayPage(theme){
    var app=document.getElementById('app'), cls=currentClass; if(!app) return;
    try{ clearInterval(timer); }catch(e){}
    var moov=codeAvec(PAY.CODE_MOOV), mtn=codeAvec(PAY.CODE_MTN), t=trial(cls);
    var ENS=window.MQ_CFG.MONTANT_ENS, moovE=codeAvec(PAY.CODE_MOOV,ENS), mtnE=codeAvec(PAY.CODE_MTN,ENS), dev=window.mqDeviceId(), cryptoOk=!!(window.crypto&&window.crypto.subtle), pending=loadStore().length;
    var B='display:block;width:100%;box-sizing:border-box;text-align:center;text-decoration:none;padding:13px;border:0;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;margin-top:8px;font-family:inherit;';
    var I='width:100%;box-sizing:border-box;padding:11px;border:1px solid var(--border-strong);border-radius:8px;font-size:15px;margin-top:6px;font-family:inherit;background:var(--surface);color:var(--text-primary);';
    var CD='font-family:monospace;background:var(--surface2);border-radius:8px;padding:7px;font-size:12.5px;word-break:break-all;margin-top:5px;';
    var H='font-weight:800;color:var(--accent-text);margin-top:16px;';
    app.innerHTML='<div class="theme-section" id="theme-bar"></div>'+
      '<div class="card" style="padding:1rem;font-size:14px;line-height:1.5;">'+
      '<div style="font-size:18px;font-weight:800;margin-bottom:4px;">🔒 Classe de '+esc(cls)+(theme&&theme!=='Tous'?' · '+esc(label(theme)):'')+'</div>'+
      '<p style="margin:4px 0;">Pour accéder à toute la classe de <b>'+esc(cls)+'</b> (quiz et résumés de cours), il faut un <b>code personnel valable '+PAY.JOURS+' jours</b>, après un paiement de <b>'+PAY.MONTANT+' FCFA</b> par MTN MoMo ou Moov Money.</p>'+
      '<button onclick="mqTrial()" style="'+B+'background:transparent;border:1px solid var(--accent);color:var(--accent-text);">▶ Essayer gratuitement : '+esc(label(t))+'</button>'+
      '<div style="'+H+'">Étape 1 · Payer '+PAY.MONTANT+' F</div>'+
      '<p style="margin:4px 0;">Touche ton opérateur : le code de paiement s\'ouvre dans le clavier du téléphone. Valide, puis entre ton code secret.</p>'+
      '<a id="mqPayMoov" data-ussd="'+esc(moov)+'" href="'+lienTel(moov)+'" style="'+B+'background:#6a2c91;color:#fff;">🟣 Payer avec Moov Money</a><div style="'+CD+'">Moov : '+esc(moov)+'</div>'+
      '<a id="mqPayMtn" data-ussd="'+esc(mtn)+'" href="'+lienTel(mtn)+'" style="'+B+'background:#d89a00;color:#222;">🟡 Payer avec MTN MoMo</a><div style="'+CD+'">MTN : '+esc(mtn)+'</div>'+
      '<p style="font-size:12px;color:var(--text-muted);margin:6px 0;">Si le clavier ne s\'ouvre pas, copie le code ci-dessus et compose-le à la main.</p>'+
      '<div style="'+H+'">Étape 2 · Demander ton code</div>'+
      '<input id="mqNom" placeholder="Ton nom et prénom" autocomplete="name" style="'+I+'">'+
      '<input id="mqRef" placeholder="Référence du SMS de paiement" style="'+I+'">'+
      '<a id="mqWa" href="#" onclick="return mqWhatsapp(this)" style="'+B+'background:#1a5c1f;color:#fff;">📲 J\'ai payé : envoyer la preuve sur WhatsApp</a>'+
      '<div style="font-size:12px;color:var(--text-muted);margin-top:6px;">Tu reçois ton code après vérification du paiement.</div>'+
      '<div style="'+H+'">Étape 3 · Entrer ton code</div>'+
      '<textarea id="mqCode" rows="3" placeholder="Colle ici le code reçu (il commence par MQ1.)" autocomplete="off" style="'+I+'font-family:monospace;font-size:12px;"></textarea>'+
      '<button onclick="mqActivate()" style="'+B+'background:var(--accent);color:#fff;">🔓 Activer mon code</button>'+
      '<div id="mqMsg" style="font-size:13px;color:var(--danger);margin-top:8px;min-height:18px;"></div>'+
      ((window.__mqDevE||window.__mqDevT)?'<div style="margin-top:10px;padding:10px 12px;border:1px solid var(--danger);border-radius:var(--radius);background:var(--danger-bg);font-size:13px;line-height:1.5;"><b>Ton ancien code n\'est plus accepté.</b> Les codes sont désormais liés à un seul appareil. <b>Si tu as déjà payé, ne repaie pas</b> : écris ton nom à l\'étape 2 (le même que lors de ton paiement), puis demande ton nouveau code gratuit.'+(window.__mqDevE?'<a href="#" onclick="return mqWhatsappRenew(this,\'E\')" style="'+B+'background:#1a5c1f;color:#fff;">📲 Demander mon nouveau code (déjà payé)</a>':'')+(window.__mqDevT?'<a href="#" onclick="return mqWhatsappRenew(this,\'T\')" style="'+B+'background:#1a5c1f;color:#fff;">📲 Code Parent / Enseignant : demander mon nouveau code</a>':'')+'<div style="font-size:12px;margin-top:8px;">Identifiant de cet appareil : <b style="font-family:monospace;">'+esc(dev)+'</b></div></div>':'')+
      (pending&&!cryptoOk?'<div style="font-size:12.5px;color:var(--danger);margin-top:6px;">Un code est enregistré sur cet appareil, mais ce navigateur ne peut pas le vérifier. Ouvre le site avec Chrome (lien https) : ton code est conservé.</div>':'')+
      '<div id="mqParent" style="'+H+'">👨‍👩‍👧 Parent ou enseignant ?</div>'+
      '<p style="margin:4px 0;">Le <b>code Parent / Enseignant</b> ('+ENS+' FCFA, valable 2 mois) débloque <b>toute l\'application</b> : toutes les classes (quiz, résumés de cours, mode classe) et les <b>évaluations à imprimer</b> (formatives et sommatives, avec corrigés). Colle-le à l\'étape 3.</p>'+
      '<a data-ussd="'+esc(moovE)+'" href="'+lienTel(moovE)+'" style="'+B+'background:#6a2c91;color:#fff;">🟣 Payer '+ENS+' F avec Moov Money</a>'+
      '<a data-ussd="'+esc(mtnE)+'" href="'+lienTel(mtnE)+'" style="'+B+'background:#d89a00;color:#222;">🟡 Payer '+ENS+' F avec MTN MoMo</a>'+
      '<a id="mqWaEns" href="#" onclick="return mqWhatsappEns(this)" style="'+B+'background:#1a5c1f;color:#fff;">📲 J\'ai payé '+ENS+' F : demander mon code Parent / Enseignant</a>'+
      '<div style="font-size:12px;color:var(--text-muted);margin-top:12px;">Identifiant de cet appareil (joint automatiquement à ta demande) : <b style="font-family:monospace;color:var(--text);">'+esc(dev)+'</b></div>'+
      '</div>';
    try{ renderThemeBar(); }catch(e){} try{ window.scrollTo(0,0); }catch(e){}
  }
  window.mqPay=function(){ mqPayPage(currentTheme); };
  window.mqTrial=function(){ currentTheme=trial(currentClass); startQuiz(); };

  window.mqWhatsapp=function(el){
    var n=document.getElementById('mqNom').value.trim(), r=document.getElementById('mqRef').value.trim(), m=document.getElementById('mqMsg');
    if(!n){ m.style.color='var(--danger)'; m.textContent='Écris ton nom.'; return false; }
    if(!r){ m.style.color='var(--danger)'; m.textContent='Écris la référence de la transaction (SMS de confirmation).'; return false; }
    m.textContent='';
    var txt='Bonjour, j\'ai payé '+PAY.MONTANT+' FCFA pour : accès à la classe de '+currentClass+' ('+PAY.JOURS+' jours).\nNom : '+n+'\nClasse : '+currentClass+'\nRéférence de la transaction : '+r+'\nIdentifiant de mon appareil : '+window.mqDeviceId()+'\nMerci de m\'envoyer mon code d\'accès.';
    el.href='https://wa.me/'+PAY.WHATSAPP+'?text='+encodeURIComponent(txt); el.target='_blank'; return true;
  };

  /* ancien client : demande d'un nouveau code (déjà payé), avec l'identifiant de l'appareil */
  function storedClasses(){
    var out=[]; loadStore().forEach(function(c){ try{ var q=JSON.parse(atob(c.split('.')[1].replace(/-/g,'+').replace(/_/g,'/'))); if(q&&q.c&&out.indexOf(q.c)<0) out.push(q.c); }catch(e){} });
    return out;
  }
  window.mqWhatsappRenew=function(el,kind){
    var n=document.getElementById('mqNom').value.trim(), m=document.getElementById('mqMsg');
    if(!n){ m.style.color='var(--danger)'; m.textContent='Écris ton nom à l\'étape 2 (le même que lors de ton paiement).'; return false; }
    m.textContent='';
    var id=window.mqDeviceId(), txt;
    if(kind==='T'){
      txt='Bonjour, j\'ai déjà payé mon code Parent / Enseignant. Il n\'est plus accepté : merci de m\'envoyer un nouveau code lié à mon appareil.\nNom : '+n+'\nRéférence de la transaction : RENOUVELLEMENT\nIdentifiant de mon appareil : '+id+'\nMerci.';
    } else {
      var cl=storedClasses(); if(!cl.length) cl=[currentClass];
      txt='Bonjour, j\'ai déjà payé mon accès. Mon ancien code n\'est plus accepté : merci de m\'envoyer un nouveau code lié à mon appareil.\nNom : '+n+'\nClasse : '+cl.join(' / ')+'\nRéférence de la transaction : RENOUVELLEMENT\nIdentifiant de mon appareil : '+id+'\nMerci.';
    }
    el.href='https://wa.me/'+PAY.WHATSAPP+'?text='+encodeURIComponent(txt); el.target='_blank'; return true;
  };
  window.mqWhatsappEns=function(el){
    var n=document.getElementById('mqNom').value.trim(), r=document.getElementById('mqRef').value.trim(), m=document.getElementById('mqMsg'), ENS=window.MQ_CFG.MONTANT_ENS;
    if(!n){ m.style.color='var(--danger)'; m.textContent='Écris ton nom (étape 2).'; return false; }
    if(!r){ m.style.color='var(--danger)'; m.textContent='Écris la référence de la transaction (étape 2).'; return false; }
    m.textContent='';
    var txt='Bonjour, j\'ai payé '+ENS+' FCFA pour un code Parent / Enseignant (toute l\'application et les évaluations à imprimer).\nNom : '+n+'\nRéférence de la transaction : '+r+'\nIdentifiant de mon appareil : '+window.mqDeviceId()+'\nMerci de m\'envoyer mon code Parent / Enseignant.';
    el.href='https://wa.me/'+PAY.WHATSAPP+'?text='+encodeURIComponent(txt); el.target='_blank'; return true;
  };
  document.addEventListener('click',function(e){
    var a=e.target&&e.target.closest?e.target.closest('a[data-ussd]'):null; if(!a) return;
    if(!/Android/i.test(navigator.userAgent)){ e.preventDefault(); try{ prompt('Compose ce code depuis le clavier de ton téléphone :',a.getAttribute('data-ussd')); }catch(x){} }
  });
  /* code enseignant collé sur l'écran de paiement : il est enregistré comme dans « Évaluation sommative » */
  function activateTeacher(code){
    if(!(window.__SOM&&window.__SOM.verify)) return Promise.resolve({ok:false,err:'Module enseignant indisponible.'});
    return window.__SOM.verify(code).then(function(r){
      if(r.ok){ try{ localStorage.setItem('mq_lic',r.code); }catch(e){} try{ window.__SOM.state.lic=r; }catch(e){} return refresh().then(function(){ r.teacher=true; return r; }); }
      return r;
    });
  }
  function activate(code,fromUrl){
    return verify(code).then(function(r){
      if(r.ok){ addToStore(r.code); return refresh().then(function(){ return r; }); }
      return r;
    });
  }
  window.mqActivate=function(){
    var v=document.getElementById('mqCode').value, m=document.getElementById('mqMsg');
    if(!v.trim()){ m.style.color='var(--danger)'; m.textContent='Colle le code reçu sur WhatsApp.'; return; }
    m.style.color='var(--text-muted)'; m.textContent='Vérification…';
    var job=(peekType(v)==='E')?activate(v):activateTeacher(v);
    job.then(function(r){
      if(!r.ok){ m.style.color='var(--danger)'; m.textContent=r.err; return; }
      if(r.teacher){ currentTheme='Tous'; startQuiz(); return; }
      if(r.cls!==currentClass){ goClass(r.cls); } else { currentTheme='Tous'; startQuiz(); }
    });
  };

  /* ---- ouverture par lien : https://.../?code=MQ1.... (codes élèves seulement) ---- */
  window.mqAccesFromUrl=function(){
    try{ var c=new URLSearchParams(location.search).get('code'); if(!c||peekType(c)!=='E') return Promise.resolve(null);
      return activate(c).then(function(r){ try{ history.replaceState(null,'',location.pathname); }catch(e){}
        if(r.ok) goClass(r.cls); else { try{ currentTheme='Tous'; mqPayPage('Tous'); var m=document.getElementById('mqMsg'); if(m) m.textContent=r.err; }catch(e){} }
        return r; });
    }catch(e){ return Promise.resolve(null); }
  };

  window.MQ_ACCES={canClass:canClass,canTheme:canTheme,trial:trial,verify:verify,refresh:refresh,state:function(){ return {ACC:ACC,teacherExp:teacherExp,ready:ready}; },PAY:PAY,addDays:addDays,peekType:peekType};

  /* évaluation formative (PDF) : réservée aux classes débloquées, hors thème d'essai */
  function evAllowed(){
    if(window.MQ_CFG&&window.MQ_CFG.GATE_EVAL===false) return true;
    var E=window.__EV&&window.__EV.state; if(!E||!E.cls) return true;
    if(E.kind==='S') return true;
    var C=window.MQ_CFG||{};
    if(isTeacher()) return true;                                  /* code Parent / Enseignant : tout est ouvert */
    if(C.EVAL_REQUIRES_TEACHER===false&&canClass(E.cls)) return true;
    if(C.EVAL_TRIAL===false) return false;
    var tr=trial(E.cls);
    return E.th.length>0&&E.th.every(function(x){ return x===tr; });   /* essai gratuit : thème d'essai de la classe */
  }
  /* ===== « Évaluation à imprimer » (page d'accueil) : débloquée par le code Parent / Enseignant ===== */
  function somLicOK(){ try{ return !!(window.__SOM&&window.__SOM.state&&window.__SOM.state.lic); }catch(e){ return false; } }
  window.mqEvLocked=function(){
    var C=window.MQ_CFG||{};
    if(C.GATE_EVAL===false||C.EVAL_TRIAL!==false) return false;
    if(isTeacher()||somLicOK()) return false;
    if(C.EVAL_REQUIRES_TEACHER===false&&canClass(currentClass)) return false;
    return true;
  };
  function renderEvalLock(){
    var app=document.getElementById('app'); if(!app) return;
    var ENS=(window.MQ_CFG||{}).MONTANT_ENS, B='width:100%;padding:11px;border-radius:10px;border:none;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;';
    app.innerHTML='<div class="card" style="padding:1.1rem;">'+
      '<div style="font-size:17px;font-weight:800;color:var(--text);margin-bottom:2px;">📝 Évaluations à imprimer</div>'+
      '<div style="font-size:12px;color:var(--text-muted);margin-bottom:12px;line-height:1.5;">Sujets et corrigés prêts à imprimer ou à télécharger (PDF et Word), formatifs et sommatifs.</div>'+
      '<div style="background:var(--surface2);border-radius:10px;padding:12px;margin-bottom:12px;"><div style="font-size:14px;font-weight:800;color:var(--text);margin-bottom:4px;">🔒 Accès réservé aux parents et enseignants</div><div style="font-size:12.5px;color:var(--text-sec);line-height:1.55;">Les évaluations se débloquent avec le <b>code Parent / Enseignant</b> : <b>'+ENS+' F</b>, valable 2 mois. Ce code débloque aussi <b>toute l\'application</b> (toutes les classes).</div></div>'+
      '<div class="theme-label">1. Obtenir le code</div>'+
      '<button onclick="goParentOffer()" style="'+B+'background:var(--success);color:#fff;margin-bottom:14px;">💳 Obtenir mon code Parent / Enseignant ('+ENS+' F)</button>'+
      '<div class="theme-label">2. Saisir le code reçu</div>'+
      '<textarea id="mqEvCode" rows="3" placeholder="Colle ici le code (commence par MQ1.)" autocomplete="off" class="theme-select" style="width:100%;margin-bottom:8px;font-family:monospace;font-size:12px;"></textarea>'+
      '<button onclick="mqEvUnlock()" style="'+B+'background:var(--accent-text);color:#fff;">Déverrouiller</button>'+
      '<div id="mqEvMsg" style="font-size:12.5px;color:var(--danger);min-height:18px;margin-top:8px;line-height:1.4;"></div></div>';
  }
  window.mqEvUnlock=function(){
    var v=(document.getElementById('mqEvCode')||{}).value||'', m=document.getElementById('mqEvMsg');
    if(!m) return;
    if(!v.trim()){ m.style.color='var(--danger)'; m.textContent='Colle le code reçu sur WhatsApp.'; return; }
    if(peekType(v)==='E'){ m.style.color='var(--danger)'; m.textContent='Ceci est un code élève de classe : il ne débloque pas les évaluations à imprimer. Il faut le code Parent / Enseignant.'; return; }
    m.style.color='var(--text-muted)'; m.textContent='Vérification…';
    activateTeacher(v).then(function(r){
      if(!r.ok){ m.style.color='var(--danger)'; m.textContent=r.err; return; }
      window.renderEvalPage();
    });
  };
  (function(){ var f=window.renderEvalPage; if(typeof f!=='function') return;
    window.renderEvalPage=function(){ if(window.mqEvLocked()){ renderEvalLock(); return; } return f.apply(this,arguments); }; })();
  /* bandeau « évaluations à imprimer » sur la page formative */
  function evBanner(){
    var C=window.MQ_CFG||{}, E=window.__EV&&window.__EV.state, app=document.getElementById('app');
    var old=document.getElementById('mqEvBanner');
    var show=!!(app&&E&&E.kind!=='S'&&document.getElementById('ev-ref')&&C.GATE_EVAL!==false&&!isTeacher()&&!(C.EVAL_REQUIRES_TEACHER===false&&E.cls&&canClass(E.cls)));
    if(!show){ if(old&&old.parentNode) old.parentNode.removeChild(old); return; }
    if(old) return;
    app.insertAdjacentHTML('afterbegin','<div id="mqEvBanner" style="margin-bottom:10px;padding:10px 12px;border:1px solid var(--accent);border-radius:var(--radius);background:var(--accent-bg);color:var(--accent-text);font-size:12.5px;line-height:1.5;">🔒 <b>Évaluations à imprimer</b> : réservées au <b>code Parent / Enseignant</b> ('+C.MONTANT_ENS+' F, 2 mois), qui débloque aussi toute l\'application.'+(C.EVAL_TRIAL===false?'':' Un thème d\'essai par classe est gratuit.')+' <a href="#" onclick="goParentOffer();return false;" style="font-weight:700;color:var(--accent-text);text-decoration:underline;">Obtenir mon code</a></div>');
  }
  /* l'évaluation se redessine à chaque clic : on surveille #app pour garder le bandeau affiché */
  (function(){ var app=document.getElementById('app'); if(!app||!window.MutationObserver) return;
    new MutationObserver(function(){ try{ evBanner(); }catch(e){} }).observe(app,{childList:true}); })();
  window.goParentOffer=function(){
    try{ startQuiz(); clearInterval(timer); }catch(e){}
    currentTheme='Tous'; mqPayPage('Tous');
    setTimeout(function(){ var el=document.getElementById('mqParent'); if(el&&el.scrollIntoView) el.scrollIntoView({behavior:'smooth',block:'start'}); },80);
  };
  function evDeny(){
    var C=window.MQ_CFG||{};
    if(confirm('Les évaluations à imprimer sont réservées au code Parent / Enseignant ('+C.MONTANT_ENS+' F, valable 2 mois), qui débloque aussi toute l\'application.'+(C.EVAL_TRIAL===false?'':' Seul le thème d\'essai de la classe est libre.')+' Voir comment l\'obtenir ?')){ window.goParentOffer(); }
  }
  ['evGen','evPrint','evWord'].forEach(function(n){
    var f=window[n]; if(typeof f!=='function') return;
    window[n]=function(){ if(!evAllowed()){ evDeny(); return; } return f.apply(this,arguments); };
  });

  /* démarrage : le premier quiz n'est lancé qu'après la lecture des codes (plus de quiz « Tous thèmes » affiché une seconde) */
  function init(){
    refresh().catch(function(){}).then(function(){
      var qc=null; try{ qc=new URLSearchParams(location.search).get('code'); }catch(e){}
      var teacherLink=!!(qc&&peekType(qc)!=='E');
      if(!teacherLink){ try{ startQuiz(); }catch(e){} }
      return window.mqAccesFromUrl();
    });
    setTimeout(function(){ var a=document.getElementById('app'); if(a&&!a.innerHTML.trim()){ try{ startQuiz(); }catch(e){} } },3500);
  }
  init();
})();

