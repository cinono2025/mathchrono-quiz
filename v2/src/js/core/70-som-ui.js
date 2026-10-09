/* ===== Évaluation sommative : interface, code enseignant signé, en-tête du sujet ===== */
(function(){
  var PUB={"kty": "EC", "crv": "P-256", "x": "mcuMAjczdv4fga_RPtvefmgofGSNHE3nsZTmFOiEs5A", "y": "Njh8oIEuwagGGsKdrH4ThAuCnSqRhtotIRitCgkbZ-s"}, WA='2290197890952', LSK='mq_lic', SOMV=2; /* version du moteur : champ « n » de la référence = SOMV × 10 + consignes par problème (la version 1 = 4 consignes) */
  window.__MQ_PUB=PUB;
  var ss={cls:'3e',th:[],seed:null,msg:'',dur:120,lic:null,chk:false,calc:null};
  function EVX(){ return window.__EV; }
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function two(n){ return ('0'+n).slice(-2); }
  function today(){ var d=new Date(); return d.getFullYear()+'-'+two(d.getMonth()+1)+'-'+two(d.getDate()); }
  var VALID_MONTHS=2; /* un code est valable au plus 2 mois après sa délivrance, quelle que soit la date inscrite */
  function addMonths(iso,n){ var p=String(iso).split('-').map(Number); var y=p[0], m=p[1]-1+n; y+=Math.floor(m/12); m=((m%12)+12)%12; var dim=new Date(y,m+1,0).getDate(); return y+'-'+two(m+1)+'-'+two(Math.min(p[2],dim)); }
  function effExp(p){ if(!p||!p.e) return ''; if(p.i&&/^\d{4}-\d{2}-\d{2}$/.test(p.i)){ var cap=addMonths(p.i,VALID_MONTHS); return cap<p.e?cap:p.e; } return p.e; }
  function frDate(iso){ var p=String(iso).split('-'); return p.length===3?p[2]+'/'+p[1]+'/'+p[0]:iso; }
  function b64u(s){ s=s.replace(/-/g,'+').replace(/_/g,'/'); while(s.length%4) s+='='; var bin=atob(s), u=new Uint8Array(bin.length); for(var i=0;i<bin.length;i++) u[i]=bin.charCodeAt(i); return u; }
  /* ---- vérification d'un code (signature ECDSA P-256 + date d'expiration) ---- */
  function verify(code){
    code=String(code||'').replace(/\s+/g,'');
    var m=/^MQ1\.([A-Za-z0-9_-]+)\.([A-Za-z0-9_-]+)$/.exec(code);
    if(!m) return Promise.resolve({ok:false,err:'Code invalide : copie-le en entier, sans rien ajouter ni retirer.'});
    if(!(window.crypto&&window.crypto.subtle)) return Promise.resolve({ok:false,soft:true,err:'Ce navigateur ne permet pas de v\u00e9rifier le code. Ouvre le site avec Chrome, en connexion s\u00e9curis\u00e9e.'});
    var pb,sg; try{ pb=b64u(m[1]); sg=b64u(m[2]); }catch(e){ return Promise.resolve({ok:false,err:'Code invalide.'}); }
    return crypto.subtle.importKey('jwk',PUB,{name:'ECDSA',namedCurve:'P-256'},false,['verify']).then(function(k){ return crypto.subtle.verify({name:'ECDSA',hash:'SHA-256'},k,sg,pb); }).then(function(ok){
      if(!ok) return {ok:false,err:'Code incorrect. V\u00e9rifie-le ou demande-le \u00e0 nouveau sur WhatsApp.'};
      var p; try{ p=JSON.parse(new TextDecoder().decode(pb)); }catch(e){ return {ok:false,err:'Code invalide.'}; }
      if(p&&p.t) return {ok:false,err:'Ceci est un code \u00e9l\u00e8ve (classe). Il se colle sur l\u2019\u00e9cran de la classe, pas ici.'};
      var dv=window.mqDeviceCheck(p); if(dv) return dv;
      var ex=effExp(p);
      if(!ex||ex<today()) return {ok:false,expired:true,name:p&&p.n,exp:ex,err:'Ce code a expir\u00e9'+(ex?' le '+frDate(ex):'')+'. Demande-en un nouveau sur WhatsApp.'};
      return {ok:true,name:p.n||'',exp:ex,code:code};
    }).catch(function(){ return {ok:false,soft:true,err:'Code invalide.'}; });
  }
  function unlocked(){ return !!(ss.lic&&ss.lic.ok&&ss.lic.exp>=today()); }
  function stored(){ try{ return localStorage.getItem(LSK)||''; }catch(e){ return ''; } }
  function ensure(cb){
    if(unlocked()){ cb(); return; } ss.lic=null; var c=stored(); if(!c||ss.chk){ cb(); return; }
    ss.chk=true; verify(c).then(function(r){ ss.chk=false; if(r.ok) ss.lic=r; else { ss.msg=r.err||''; if(!r.expired&&!r.soft){ try{ localStorage.removeItem(LSK); }catch(e){} } } cb(); });
  }
  function themes(){ return window.MQ_SOM.availableThemes(ss.cls); }
  function modOf(t){ var l=themes(); for(var i=0;i<l.length;i++) if(l[i].theme===t) return l[i].mod; return null; }
  function mods(){ var m=[]; ss.th.forEach(function(t){ var k=modOf(t); if(k&&m.indexOf(k)<0) m.push(k); }); return m; }
  function cycOf(c){ return ['6e','5e','4e','3e'].indexOf(c)>=0?1:2; }
  function ref(){ return EVX().encode({cyc:cycOf(ss.cls),cls:ss.cls,th:ss.th,n:SOMV*10+window.MQ_SOM.sizing(ss.dur,ss.cls).per,seed:ss.seed},'S'); }
  function build(){ return window.MQ_SOM.buildEpreuve({cls:ss.cls,themes:ss.th,seed:ss.seed,ent:EVX().entOf(ss.cls),dur:ss.dur,calc:calcOn()}); }
  function calcDefault(c){ return !(c==='6e'||c==='5e'); }
  function calcOn(){ return ss.calc===null?calcDefault(ss.cls):!!ss.calc; }
  function short(t){ return t.replace(/^[^\u2014]+\u2014\s*/,''); }
  var BTN='width:100%;padding:12px;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;';
  var INP='width:100%;';

  function draw(){
    var y=window.scrollY||0, app=document.getElementById('app');
    var tiles='<div style="display:flex;gap:6px;margin-bottom:12px;"><button onclick="evKind(\'F\')" style="flex:1;padding:9px;border-radius:10px;border:1px solid var(--border-strong);background:transparent;color:var(--text-sec);font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">Formative</button><div style="flex:1;padding:9px;border-radius:10px;text-align:center;background:var(--accent);color:#fff;font-size:13px;font-weight:700;">Sommative \u00b7 format examen</div></div>';
    var head='<div style="font-size:17px;font-weight:800;color:var(--text);margin-bottom:2px;">\ud83d\udcdd \u00c9valuation sommative</div><div style="font-size:12px;color:var(--text-muted);margin-bottom:12px;line-height:1.5;">Un support, une t\u00e2che et trois probl\u00e8mes ind\u00e9pendants (deux dans les s\u00e9ries litt\u00e9raires), selon le format officiel du guide du programme.</div>';
    if(!unlocked()){
      var ent=EVX().state.ent||{};
      app.innerHTML='<div class="card" style="padding:1.1rem;">'+head+tiles+
        '<div style="background:var(--surface2);border-radius:10px;padding:12px;margin-bottom:12px;"><div style="font-size:14px;font-weight:800;color:var(--text);margin-bottom:4px;">\ud83d\udd12 Acc\u00e8s r\u00e9serv\u00e9 aux parents et enseignants</div><div style="font-size:12.5px;color:var(--text-sec);line-height:1.55;">Les \u00e9valuations \u00e0 imprimer (formatives et sommatives, avec corrig\u00e9s) sont accessibles avec le <b>code Parent / Enseignant</b> : <b>2 000 F</b>, valable 2 mois. Il d\u00e9bloque aussi <b>toute l\u2019application</b> (toutes les classes).</div></div>'+
        '<div class="theme-label">1. Obtenir le code</div>'+
        '<button onclick="goParentOffer()" style="'+BTN+'background:var(--success);color:#fff;margin-bottom:14px;">\ud83d\udcb3 Obtenir mon code Parent / Enseignant (2 000 F)</button>'+
        '<div class="theme-label">2. Saisir le code re\u00e7u</div>'+
        '<textarea id="som-code" rows="3" placeholder="Colle ici le code (commence par MQ1.)" autocomplete="off" class="theme-select" style="'+INP+'margin-bottom:8px;font-family:monospace;font-size:12px;"></textarea>'+
        '<button onclick="somUnlock()" style="'+BTN+'background:var(--accent-text);color:#fff;">D\u00e9verrouiller</button>'+
        '<div id="som-msg" style="font-size:12.5px;color:var(--danger);min-height:18px;margin-top:8px;line-height:1.4;">'+esc(ss.msg)+'</div></div>';
      window.scrollTo(0,y); return; }
    var cls=window.MQ_SOM.classes().map(function(c){ return '<button onclick="somCls(\''+c+'\')" style="flex:1;padding:10px;border-radius:10px;font-family:inherit;font-size:14px;font-weight:800;cursor:pointer;border:1px solid var(--border-strong);'+(ss.cls===c?'background:var(--accent);color:#fff;':'background:transparent;color:var(--text-sec);')+'">'+c+'</button>'; }).join('');
    var th=themes().map(function(o,i){ var on=ss.th.indexOf(o.theme)>=0; return '<label style="display:flex;gap:8px;align-items:flex-start;padding:7px 0;border-bottom:1px solid var(--border);font-size:13px;color:var(--text);cursor:pointer;"><input type="checkbox" '+(on?'checked':'')+' onchange="somTheme('+i+')" style="margin-top:3px;"><span style="flex:1;">'+esc(short(o.theme))+'</span></label>'; }).join('');
    var nm=mods().length, ready=ss.th.length>0&&ss.seed!=null, info, SZ=window.MQ_SOM.sizing(ss.dur,ss.cls);
    if(nm===0) info='Choisis les th\u00e8mes de l\u2019\u00e9valuation ('+SZ.need+' recommand\u00e9s, '+SZ.cap+' au maximum).';
    else if(nm<SZ.need) info=nm+' th\u00e8me'+(nm>1?'s':'')+' choisi'+(nm>1?'s':'')+' : l\u2019\u00e9preuve sera compl\u00e9t\u00e9e automatiquement avec d\u2019autres th\u00e8mes de la classe ('+SZ.need+' th\u00e8mes sont n\u00e9cessaires pour cette dur\u00e9e).';
    else if(nm===SZ.need&&SZ.need===SZ.np) info=nm+' th\u00e8mes choisis : un th\u00e8me par probl\u00e8me.';
    else if(nm===SZ.need) info=nm+' th\u00e8mes choisis : ils couvrent les '+SZ.per+' consignes de chaque probl\u00e8me.';
    else info=nm+' th\u00e8mes choisis : certains probl\u00e8mes comporteront plusieurs parties (A, B, C\u2026), une par th\u00e8me.';
    info+=' \u00c9preuve de '+window.MQ_SOM.fmtDur(ss.dur)+' : '+SZ.np+' probl\u00e8mes de '+SZ.per+' consignes ('+SZ.total+' au total).';
    var res='';
    if(ready){ var E=build(), r=ref(), en=E.ent||{}, miss=[]; if(!en.etab) miss.push('l\u2019\u00e9tablissement'); if(!en.annee) miss.push('l\u2019ann\u00e9e scolaire'); if(!en.coef) miss.push('le coefficient');
      res='<div style="background:var(--accent-bg);border-radius:10px;padding:12px;margin-top:12px;">'+
        '<div style="font-size:12px;color:var(--accent-text);font-weight:700;">R\u00e9f\u00e9rence de l\u2019\u00e9preuve</div><div style="font-family:monospace;font-size:14px;font-weight:700;color:var(--accent-text);word-break:break-all;margin:4px 0 8px;">'+r+'</div>'+
        '<div style="font-size:12.5px;color:var(--text-sec);line-height:1.6;margin-bottom:10px;"><b>'+esc(E.support.titre)+'</b><br>'+E.problems.map(function(p,i){ return 'Probl\u00e8me '+(i+1)+' : '+esc(p.themes.join(' + ')); }).join('<br>')+(E.auto.length?'<br><i>Compl\u00e9t\u00e9 avec : '+esc(E.auto.join(', '))+'</i>':'')+'</div>'+
        (miss.length?'<div style="font-size:12px;color:#8a5a00;background:#fff4dc;border-radius:8px;padding:7px 9px;margin-bottom:10px;line-height:1.45;">En-t\u00eate incomplet : '+miss.join(', ')+' ne '+(miss.length>1?'seront':'sera')+' pas imprim\u00e9'+(miss.length>1?'s':'')+' (ligne \u00e0 remplir \u00e0 la main).</div>':'')+
        '<div style="display:flex;gap:6px;margin-bottom:6px;"><button onclick="somPrint(\'sujet\')" style="flex:1;padding:11px;border:none;border-radius:10px;background:var(--accent);color:#fff;font-weight:700;font-size:13px;font-family:inherit;cursor:pointer;">\u2b07 Sujet PDF</button><button onclick="somWord(\'sujet\')" style="flex:1;padding:11px;border:none;border-radius:10px;background:var(--accent);color:#fff;font-weight:700;font-size:13px;font-family:inherit;cursor:pointer;">\u2b07 Sujet Word</button></div>'+
        '<div style="display:flex;gap:6px;margin-bottom:8px;"><button onclick="somPrint(\'corrige\')" style="flex:1;padding:11px;border:none;border-radius:10px;background:var(--success);color:#fff;font-weight:700;font-size:13px;font-family:inherit;cursor:pointer;">\u2b07 Corrig\u00e9 PDF</button><button onclick="somWord(\'corrige\')" style="flex:1;padding:11px;border:none;border-radius:10px;background:var(--success);color:#fff;font-weight:700;font-size:13px;font-family:inherit;cursor:pointer;">\u2b07 Corrig\u00e9 Word</button></div>'+
        '<button onclick="somCopy(this)" style="'+BTN+'background:transparent;border:1px solid var(--border-strong);color:var(--text-sec);font-weight:600;font-size:13px;">\ud83d\udccb Copier la r\u00e9f\u00e9rence</button>'+
        '<div style="font-size:11px;color:var(--text-muted);margin-top:8px;line-height:1.5;">PDF : dans la fen\u00eatre d\u2019impression, choisis \u00ab Enregistrer au format PDF \u00bb. Word : le fichier se t\u00e9l\u00e9charge et reste modifiable.</div></div>'; }
    app.innerHTML='<div class="card" style="padding:1.1rem;">'+head+tiles+
      '<div style="display:flex;justify-content:space-between;align-items:center;font-size:11.5px;color:var(--text-muted);margin-bottom:10px;"><span>\u2705 Acc\u00e8s Parent / Enseignant : <b style="color:var(--text);">'+esc(ss.lic.name||'')+'</b> \u00b7 valable jusqu\u2019au '+frDate(ss.lic.exp)+'</span><a href="#" onclick="somLogout();return false;" style="color:var(--accent);">Quitter</a></div>'+
      '<div class="theme-label">Classe</div><div style="display:flex;gap:6px;margin-bottom:4px;">'+cls+'</div><div style="font-size:11px;color:var(--text-muted);margin-bottom:10px;">Les autres classes seront ajout\u00e9es progressivement.</div>'+
      '<div class="theme-label" style="display:flex;justify-content:space-between;"><span>Th\u00e8mes de l\u2019\u00e9valuation</span><span style="color:var(--text-muted);">'+nm+' / '+SZ.cap+'</span></div>'+
      '<div style="border:1px solid var(--border);border-radius:10px;padding:0 10px;margin-bottom:8px;">'+th+'</div>'+
      '<div style="font-size:12px;color:var(--text-sec);line-height:1.5;margin-bottom:10px;">'+info+'</div>'+
      window.entFormHTML(ss.cls)+
      '<div class="theme-label">Dur\u00e9e (minutes) <span style="font-weight:400;color:var(--muted);">\u2014 habituelle en '+esc(ss.cls)+' : '+window.MQ_SOM.fmtDur(window.MQ_SOM.defaultDur(ss.cls))+'</span></div><input type="number" min="30" max="240" value="'+ss.dur+'" onchange="somDur(this.value)" class="theme-select" style="width:100%;margin-bottom:8px;">'+
      '<label style="display:flex;gap:8px;align-items:center;font-size:13px;color:var(--text);margin-bottom:10px;cursor:pointer;"><input type="checkbox" '+(calcOn()?'checked':'')+' onchange="somCalc(this.checked)"> Calculatrice autoris\u00e9e pour cette \u00e9preuve</label>'+
      '<div style="font-size:11.5px;color:var(--text-muted);line-height:1.5;background:var(--surface2);border-radius:8px;padding:8px 10px;margin-bottom:12px;">Bar\u00e8me officiel : Analyser 20 + Math\u00e9matiser 30 + Op\u00e9rer 40 + Perfectionnement 10 = 100 points, soit une note sur 20.</div>'+
      '<button onclick="somGen()" '+(ss.th.length?'':'disabled')+' style="'+BTN+'background:'+(ss.th.length?'var(--accent-text)':'var(--border-strong)')+';color:#fff;">\ud83c\udfb2 '+(ready?'G\u00e9n\u00e9rer une autre \u00e9preuve':'G\u00e9n\u00e9rer l\u2019\u00e9preuve')+'</button>'+res+
      '<div style="border-top:1px solid var(--border);margin-top:16px;padding-top:12px;"><div class="theme-label">Retrouver une \u00e9preuve avec sa r\u00e9f\u00e9rence</div><div style="display:flex;gap:6px;"><input id="som-ref" oninput="evCleanRef(this)" placeholder="MQ1-S13..." class="theme-select" style="flex:1;font-family:monospace;text-transform:uppercase;"><button onclick="somFind()" style="padding:0 14px;border-radius:8px;border:1px solid var(--border-strong);background:transparent;color:var(--text);font-weight:700;cursor:pointer;">OK</button></div><div id="som-msg" style="font-size:12px;color:var(--danger);margin-top:6px;">'+esc(ss.msg)+'</div></div></div>';
    window.scrollTo(0,y);
  }
  window.renderSomPage=function(){
    var app=document.getElementById('app');
    if(!unlocked()&&stored()&&!ss.chk&&!ss.lic){ app.innerHTML='<div class="card" style="padding:1.1rem;font-size:13px;color:var(--text-muted);">V\u00e9rification de ton code\u2026</div>'; }
    ensure(draw);
  };
  window.somAsk=function(){ var n=document.getElementById('som-nom').value.trim(), e=document.getElementById('som-etab').value.trim(), m=document.getElementById('som-msg'); ss.askNom=n; ss.askEtab=e;
    if(!n){ m.textContent='Indique ton nom pour que je sache \u00e0 qui envoyer le code.'; return; }
    var txt='Bonjour, je suis '+n+', enseignant(e) de math\u00e9matiques'+(e?' \u00e0 '+e:'')+'. Je souhaite recevoir mon code d\u2019acc\u00e8s \u00e0 l\u2019\u00e9valuation sommative de MathChrono-Quiz. Identifiant de mon appareil : '+window.mqDeviceId()+'. Merci.';
    var url='https://wa.me/'+WA+'?text='+encodeURIComponent(txt); try{ window.open(url,'_blank'); }catch(x){ location.href=url; } };
  window.somUnlock=function(){ var v=document.getElementById('som-code').value, m=document.getElementById('som-msg'); if(!v.trim()){ m.textContent='Colle le code re\u00e7u sur WhatsApp.'; return; } m.style.color='var(--text-muted)'; m.textContent='V\u00e9rification\u2026';
    verify(v).then(function(r){ if(r.ok){ try{ localStorage.setItem(LSK,r.code); }catch(e){} ss.lic=r; ss.msg=''; if(window.MQ_ACCES) MQ_ACCES.refresh(); draw(); } else { m.style.color='var(--danger)'; m.textContent=r.err; } }); };
  window.somLogout=function(){ try{ localStorage.removeItem(LSK); }catch(e){} ss.lic=null; ss.msg=''; if(window.MQ_ACCES) MQ_ACCES.refresh(); draw(); };
  window.somCls=function(c){ ss.cls=c; ss.th=[]; ss.seed=null; ss.msg=''; ss.calc=null; ss.dur=window.MQ_SOM.defaultDur(c); draw(); };
  window.somCalc=function(on){ ss.calc=!!on; draw(); };
  window.somTheme=function(i){ var o=themes()[i], k=ss.th.indexOf(o.theme); if(k>=0) ss.th.splice(k,1); else { var m=mods(); var cap=window.MQ_SOM.sizing(ss.dur,ss.cls).cap; if(m.indexOf(o.mod)<0&&m.length>=cap){ ss.msg=cap+' th\u00e8mes au maximum pour une \u00e9preuve de '+window.MQ_SOM.fmtDur(ss.dur)+'.'; draw(); return; } ss.th.push(o.theme); } ss.msg=''; ss.seed=null; draw(); };
  window.somDur=function(v){ var n=Math.max(30,Math.min(240,parseInt(v,10)||120)); ss.dur=n; ss.seed=null; var cap=window.MQ_SOM.sizing(n,ss.cls).cap, cut=false; while(mods().length>cap&&ss.th.length){ ss.th.pop(); cut=true; } ss.msg=cut?'Dur\u00e9e modifi\u00e9e : '+cap+' th\u00e8mes au maximum, les derniers ont \u00e9t\u00e9 retir\u00e9s.':''; draw(); };
  window.somGen=function(){ if(!ss.th.length) return; ss.seed=(Math.floor(Math.random()*4294967295)>>>0); ss.msg=''; draw(); };
  function safe(r){ return r.replace(/[^A-Z0-9-]/g,''); }
  window.somPrint=function(kind){ if(ss.seed==null||!unlocked()) return; var E=build(), r=ref(); EVX().printDoc(kind==='sujet'?window.MQ_SOM.sujetHTML(E,r):window.MQ_SOM.corrigeHTML(E,r),'MathChrono-Quiz_'+(kind==='sujet'?'Sujet':'Corrige')+'_Sommative_'+ss.cls.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^A-Za-z0-9]/g,'')+'_'+safe(r)); };
  window.somWord=function(kind){ if(ss.seed==null||!unlocked()) return; var E=build(), r=ref(), p=(kind==='sujet')?window.MQ_SOM.sujetDocx(E,r):window.MQ_SOM.corrigeDocx(E,r);
    return p.then(function(bytes){ EVX().download(bytes,'MathChrono-Quiz_'+(kind==='sujet'?'Sujet':'Corrige')+'_Sommative_'+ss.cls.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^A-Za-z0-9]/g,'')+'_'+safe(r)+'.docx','application/vnd.openxmlformats-officedocument.wordprocessingml.document'); }); };
  window.somCopy=function(btn){ copyText(ref()); var b=btn||(window.event&&window.event.target); if(b){ var o=b.textContent; b.textContent='\u2705 R\u00e9f\u00e9rence copi\u00e9e'; setTimeout(function(){ b.textContent=o; },1600); } };
  window.somLoad=function(p){ var ver=p.n===1?1:Math.floor(p.n/10), per=p.n===1?4:p.n%10; if(ver!==1&&ver!==SOMV||per<3||per>8){ ss.msg='Cette \u00e9preuve vient d\u2019une autre version de la banque de probl\u00e8mes.'; window.renderSomPage(); return; } ss.cls=p.cls; ss.th=p.th.slice(); ss.seed=p.seed; ss.msg=''; var dd=window.MQ_SOM.defaultDur(p.cls); ss.dur=(window.MQ_SOM.perProb(dd,p.cls)===per)?dd:window.MQ_SOM.durOfPer(per,p.cls); window.renderSomPage(); };
  window.somFind=function(){ var v=document.getElementById('som-ref').value, d=EVX().decode(v), m=document.getElementById('som-msg'); if(!d||d.error){ m.textContent=(d&&d.error)||'R\u00e9f\u00e9rence invalide : v\u00e9rifie qu\u2019elle est recopi\u00e9e en entier.'; return; } if(d.mode!=='S'){ m.textContent='Cette r\u00e9f\u00e9rence concerne une \u00e9valuation formative.'; return; } window.somLoad(d); };
  /* ---- ouverture par lien : https://.../?code=MQ1.... ---- */
  window.somFromUrl=function(){ try{ var q=new URLSearchParams(location.search), c=q.get('code'); if(!c) return Promise.resolve(null); if(window.MQ_ACCES&&MQ_ACCES.peekType(c)==='E') return Promise.resolve(null);
    return verify(c).then(function(r){ if(r.ok){ try{ localStorage.setItem(LSK,r.code); }catch(e){} ss.lic=r; ss.msg=''; if(window.MQ_ACCES) MQ_ACCES.refresh(); } else ss.msg=r.err; try{ history.replaceState(null,'',location.pathname); }catch(e){} EVX().state.kind='S'; setTimeout(function(){ if(window.renderEvalPage) window.renderEvalPage(); },700); return r; }); }catch(e){ return Promise.resolve(null); } };
  window.__SOM={state:ss,build:build,ref:ref,verify:verify,unlocked:unlocked,today:today};
  if(typeof document!=='undefined'&&document.readyState!=='loading') setTimeout(window.somFromUrl,300); else if(typeof document!=='undefined') document.addEventListener('DOMContentLoaded',function(){ setTimeout(window.somFromUrl,300); });
})();

