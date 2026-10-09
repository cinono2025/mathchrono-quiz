/* ===== Évaluations : QCM imprimable (sujet + corrigé) ===== */
(function(){
  var BANK = '1';                       // version de la banque (fait partie de la référence)
  var WA = '2290197890952';             // WhatsApp du porteur du projet
  var st = { cyc:null, cls:null, th:[], n:10, dur:null, ab:false, seed:null, diff:false, kind:'F' };

  /* ---- en-tête du sujet (rempli par l'enseignant) ---- */
  var ENTK='mq_ent';
  function autoYear(){ var d=new Date(), y=d.getFullYear(); return (d.getMonth()>=8)?(y+'-'+(y+1)):((y-1)+'-'+y); }
  st.ent={etab:'',annee:autoYear(),matiere:'Math\u00e9matiques',coef:'',classe:''};
  try{ var sv=JSON.parse(localStorage.getItem(ENTK)||'null'); if(sv){ ['etab','annee','matiere','coef'].forEach(function(k){ if(typeof sv[k]==='string') st.ent[k]=sv[k]; }); } }catch(e){}
  function entOf(cls){ var e=st.ent; return {etab:(e.etab||'').trim(),annee:(e.annee||'').trim(),matiere:(e.matiere||'').trim()||'Math\u00e9matiques',coef:(e.coef||'').trim(),classe:(e.classe||'').trim()||cls}; }
  window.evEnt=function(k,v){ st.ent[k]=v; try{ localStorage.setItem(ENTK,JSON.stringify({etab:st.ent.etab,annee:st.ent.annee,matiere:st.ent.matiere,coef:st.ent.coef})); }catch(e){} };
  window.entFormHTML=function(cls){ var e=st.ent, f=function(k,ph,type){ return '<div><div style="font-size:11px;color:var(--text-muted);margin-bottom:2px;">'+ph+'</div><input class="theme-select" style="width:100%;" '+(type?'inputmode="'+type+'" ':'')+'value="'+evEsc(e[k]||'').replace(/"/g,'&quot;')+'" oninput="evEnt(\''+k+'\',this.value)"></div>'; };
    return '<div class="theme-label">En-t\u00eate du sujet <span style="font-weight:400;color:var(--text-muted);">(rempli par l\u2019enseignant)</span></div>'+
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:4px;"><div style="grid-column:1/3;">'+f('etab','\u00c9tablissement')+'</div>'+f('annee','Ann\u00e9e scolaire')+f('matiere','Mati\u00e8re')+f('classe','Classe (ex. : '+cls+' M1)')+f('coef','Coefficient','numeric')+'</div>'+
      '<div style="font-size:11px;color:var(--text-muted);line-height:1.45;margin-bottom:10px;">Ces informations sont m\u00e9moris\u00e9es sur ton t\u00e9l\u00e9phone. Un champ laiss\u00e9 vide devient une ligne \u00e0 remplir \u00e0 la main.</div>'; };


  function evEsc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function rich(s){ return vecHTML(evEsc(s)); }
  function D(cyc){ return cyc===2 ? {TH:THEMES_C2, CL:CLASSES_C2} : {TH:THEMES_C1, CL:CLASSES_C1}; }
  function short(t){ return t.replace(/^[^\u2014]+\u2014\s*/,''); }

  /* ---- hasard reproductible ---- */
  function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; var t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
  function shuffle(arr,rnd){ var a=arr.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(rnd()*(i+1)); var x=a[i]; a[i]=a[j]; a[j]=x; } return a; }

  /* ---- tirage des questions (identique pour une même référence) ---- */
  function pick(p){
    var d=D(p.cyc), rnd=mulberry32(p.seed), k=p.th.length;
    var pools=p.th.map(function(t){ return shuffle((d.TH[t]||[]).map(function(q){ return {q:q.q,c:q.c.slice(),a:q.a,exp:q.exp,theme:t}; }),rnd); });
    var taken=pools.map(function(pl,i){ var quota=Math.floor(p.n/k)+(i<p.n%k?1:0); return pl.slice(0,Math.min(quota,pl.length)); });
    var total=taken.reduce(function(s,a){ return s+a.length; },0);
    for(var r=0;total<p.n&&r<500;r++){ var prog=false; for(var i=0;i<k&&total<p.n;i++){ if(taken[i].length<pools[i].length){ taken[i].push(pools[i][taken[i].length]); total++; prog=true; } } if(!prog) break; }
    return shuffle([].concat.apply([],taken),rnd);
  }
  function versionB(list,seed){
    var rnd=mulberry32((seed^0x5bd1e995)>>>0);
    return shuffle(list,rnd).map(function(q){ var sh=shuffle([0,1,2,3],rnd); return {q:q.q,exp:q.exp,theme:q.theme,c:sh.map(function(i){ return q.c[i]; }),a:sh.indexOf(q.a)}; });
  }


  /* ---- niveaux cognitifs (estimation automatique) : 1 = je retiens, 2 = j'applique, 3 = je raisonne ---- */
  var CALC=/\b(calcul\w*|r\u00e9sou\w*|d\u00e9termin\w*|simplifi\w*|d\u00e9velopp\w*|factoris\w*|d\u00e9riv\w*|int\u00e9gr\w*|combien|trouv\w*|\u00e9valu\w*|exprim\w*|convertis\w*|arrondi\w*)\b/i;
  var RECALL=/^(D\u00e9finition|Propri\u00e9t\u00e9|Th\u00e9or\u00e8me|Formule|M\u00e9thode|Crit\u00e8re|Convention|Notation|R\u00e9ciproque)\b|(que signifie|s'appelle|appelle-t-on|est de la forme|est dite?|sont dites?|se note|on dit|le nom|quel(le)? est (la |le )?(d\u00e9finition|nom|propri\u00e9t\u00e9|formule)|lequel de ces|laquelle de ces|est un exemple|quelle propri\u00e9t\u00e9|la propri\u00e9t\u00e9 (du|de la|de l'|des) )/i;
  var lvCache={};
  function lvl(q,theme){
    var key=theme+'|'+q.q; if(lvCache[key]) return lvCache[key];
    var s=q.q, c=q.c, nums=(s.match(/\d+([.,]\d+)?/g)||[]).length, numCh=c.filter(function(x){ return /\d/.test(x); }).length,
        sym=/[=\u00b2\u00b3\u221a\u222b]|\^|\/|[+\u2212\u00d7\u00f7]/.test(s), calc=CALC.test(s), r;
    if(/Prop\. & D/.test(theme)) r=1;
    else if(RECALL.test(s)&&nums<=1) r=1;
    else if(nums>=3||(nums>=2&&numCh>=3)||(calc&&(nums>=2||sym)&&numCh>=2)||s.length>150) r=3;
    else if(nums===0&&!calc&&!sym&&numCh===0) r=1;
    else r=2;
    lvCache[key]=r; return r;
  }
  var PROF={1:[0.6,0.3,0.1],2:[0.25,0.5,0.25],3:[0.1,0.3,0.6]};
  var PARCOURS={1:{sym:'\u25b2',nom:'Parcours 1',cle:'Je retiens',but:'Consolider les connaissances de base (d\u00e9finitions, propri\u00e9t\u00e9s, vocabulaire, calculs simples).'},
                2:{sym:'\u25a0',nom:'Parcours 2',cle:'J\u2019applique',but:'Appliquer les notions du cours dans des situations directes.'},
                3:{sym:'\u25cf',nom:'Parcours 3',cle:'Je raisonne',but:'Approfondir : calculs en plusieurs \u00e9tapes, raisonnement, transfert.'}};
  function quotas(n,g){ var pr=PROF[g], q1=Math.round(n*pr[0]), q3=Math.round(n*pr[2]), q2=n-q1-q3; if(q2<0){ q2=0; q3=n-q1; } return [q1,q2,q3]; }
  function pickDiffAll(p){
    var d=D(p.cyc), usedG={}, out={};
    [1,2,3].forEach(function(g){
      var rnd=mulberry32((p.seed+g*7919)>>>0), themes=shuffle(p.th,rnd), by={}, used={}, list=[];
      themes.forEach(function(t){ by[t]=[[],[],[]]; shuffle(d.TH[t]||[],rnd).forEach(function(q){ var L=lvl(q,t); by[t][L-1].push({q:q.q,c:q.c.slice(),a:q.a,exp:q.exp,theme:t,lv:L}); }); });
      var rr=0;
      function take(L){
        for(var pass=0;pass<2;pass++){
          for(var k=0;k<themes.length;k++){
            var t=themes[(rr+k)%themes.length], arr=by[t][L-1];
            for(var i=0;i<arr.length;i++){ var q=arr[i]; if(used[q.q]) continue; if(pass===0&&usedG[q.q]) continue; used[q.q]=1; rr=(rr+k+1)%themes.length; return q; }
          }
        } return null;
      }
      var order={1:[1,2,3],2:g===3?[2,3,1]:[2,1,3],3:[3,2,1]}, qu=quotas(p.n,g);
      [1,2,3].forEach(function(L){ for(var c=0;c<qu[L-1];c++){ var got=null, o=order[L]; for(var j=0;j<o.length&&!got;j++) got=take(o[j]); if(got) list.push(got); } });
      // complète si le total n'est pas atteint (thèmes pauvres)
      for(var L2=1;list.length<p.n&&L2<=3;L2++){ var x; while(list.length<p.n&&(x=take(L2))) list.push(x); }
      list=shuffle(list,rnd).map(function(q,i){ return {q:q,i:i}; }).sort(function(a,b){ return a.q.lv-b.q.lv||a.i-b.i; }).map(function(o){ return o.q; });
      list.forEach(function(q){ usedG[q.q]=1; });
      out[g]=list;
    });
    return out;
  }

  /* ---- référence : encode / décode ---- */
  function checksum(s){ var t=0; for(var i=0;i<s.length;i++) t+=s.charCodeAt(i); return (t%36).toString(36).toUpperCase(); }
  function encode(p,mode){
    var d=D(p.cyc), names=d.CL[p.cls]||[], ci=Object.keys(d.CL).indexOf(p.cls), mask=0;
    p.th.forEach(function(t){ var i=names.indexOf(t); if(i>=0) mask=(mask|(1<<i))>>>0; });
    var body='MQ'+BANK+'-'+(mode||'F')+p.cyc+ci.toString(36).toUpperCase()+String(p.n).padStart(2,'0')+'-'+mask.toString(36).toUpperCase()+'-'+(p.seed>>>0).toString(36).toUpperCase().padStart(7,'0');
    return body+'-'+checksum(body);
  }
  /* Extrait la référence MQ1-… d'un texte quelconque : copie d'une ligne entière d'un PDF/Word (« Réf. … »), code HTML,
     retours à la ligne ou espaces dans la référence, tirets typographiques. Renvoie '' si aucune référence n'est trouvée. */
  function cleanRef(txt){
    var t=String(txt==null?'':txt).replace(/<[^>]*>/g,' ').replace(/&nbsp;|&#160;/gi,' ').replace(/[\u2010-\u2015\u2212\u00ad]/g,'-').replace(/[\u200b-\u200f\u2060\ufeff]/g,'').toUpperCase();
    var sq=t.replace(/\s+/g,'');
    var m=/MQ\d-[FSD][12][0-9A-Z]\d{2}-[0-9A-Z]+-[0-9A-Z]{7}-[0-9A-Z]/.exec(sq);
    return m?m[0]:'';
  }
  function decode(ref){
    ref=cleanRef(ref);
    var m=/^MQ(\d)-([FSD])([12])([0-9A-Z])(\d{2})-([0-9A-Z]+)-([0-9A-Z]{7})-([0-9A-Z])$/.exec(ref);
    if(!m) return null;
    var body=ref.slice(0,-2); if(checksum(body)!==m[8]) return null;
    if(m[1]!==BANK) return {error:'Cette référence vient d\u2019une autre version de la banque de questions.'};
    var cyc=+m[3], d=D(cyc), keys=Object.keys(d.CL), cls=keys[parseInt(m[4],36)]; if(!cls) return null;
    var names=d.CL[cls], mask=parseInt(m[6],36), th=[]; names.forEach(function(t,i){ if((mask>>>i)&1) th.push(t); });
    return {mode:m[2],cyc:cyc,cls:cls,n:+m[5],th:th,seed:parseInt(m[7],36)};
  }

  /* ---- documents imprimables ---- */
  var LET=['A','B','C','D'];
  function themeLabel(p){ return p.th.map(short).join(' ; '); }
  function questionHTML(q,i){
    var maxc=Math.max.apply(null,q.c.map(function(c){ return c.length; })), two=maxc<=30;
    var ch=q.c.map(function(c,j){ return '<div class="ev-ch"><span class="ev-box"></span><b>'+LET[j]+'.</b> '+rich(c)+'</div>'; }).join('');
    return '<div class="ev-q"><div class="ev-qt"><span class="ev-n">'+(i+1)+'</span> '+rich(q.q)+'</div><div class="ev-chs'+(two?' two':'')+'">'+ch+'</div></div>';
  }
  function sujetHTML(p,list,ver,ref,opt){
    var N=list.length, pc=opt&&opt.g?PARCOURS[opt.g]:null, vtag=(pc?' \u00b7 '+pc.sym+' '+pc.nom:'')+(ver?' \u00b7 Version '+ver:'');
    return '<div class="ev-doc">'+
      '<div class="ev-top"><b>MathChrono-Quiz</b><span>R\u00e9f. '+ref+vtag+'</span></div>'+
      '<div class="ev-title">\u00c9VALUATION FORMATIVE \u2014 '+evEsc(window.MQ_SOM.matUp(p.ent))+(pc?' <span class="ev-pc">'+pc.sym+' '+pc.nom+'</span>':'')+'</div>'+
      '<div class="ev-sub">Classe de '+evEsc(p.ent&&p.ent.classe?p.ent.classe:p.cls)+' \u00b7 '+evEsc(themeLabel(p))+'</div>'+
      '<table class="ev-head"><tr><td class="ev-id">'+window.MQ_SOM.idHTML(p.ent,p.dur)+'</td><td class="ev-teach">'+
        '<div class="ev-th">R\u00e9serv\u00e9 \u00e0 l\u2019enseignant</div>'+
        '<div>Note : <span class="ev-line w14"></span> / <b>'+N+'</b></div>'+
        '<div class="ev-lvl">Niveau de ma\u00eetrise :<br><span class="nw"><span class="ev-box"></span>Acquis</span> &nbsp; <span class="nw"><span class="ev-box"></span>En cours</span> &nbsp; <span class="nw"><span class="ev-box"></span>Non acquis</span></div>'+
        '<div>Appr\u00e9ciation :</div><div class="ev-ln"></div><div class="ev-ln"></div><div class="ev-ln"></div>'+
      '</td></tr></table>'+
      '<div class="ev-cons"><b>Consigne :</b> pour chaque question, coche <b>une seule</b> case : celle de la bonne r\u00e9ponse. Bar\u00e8me : 1 point par bonne r\u00e9ponse, soit '+N+' points.</div>'+
      list.map(questionHTML).join('')+
      '<div class="ev-foot">G\u00e9n\u00e9r\u00e9 par MathChrono-Quiz \u00b7 R\u00e9f. '+ref+vtag+'</div>'+
    '</div>';
  }
  function corrigeHTML(p,list,ver,ref,opt){
    var N=list.length, pc=opt&&opt.g?PARCOURS[opt.g]:null, vtag=(pc?' \u00b7 '+pc.sym+' '+pc.nom+' ('+pc.cle+')':'')+(ver?' \u00b7 Version '+ver:'');
    var cells=list.map(function(q,i){ return '<td><div class="g1">'+(i+1)+'</div><div class="g2">'+LET[q.a]+'</div></td>'; });
    var rows=[]; for(var r0=0;r0<cells.length;r0+=10) rows.push('<tr>'+cells.slice(r0,r0+10).join('')+'</tr>');
    var grid='<table class="ev-grid">'+rows.join('')+'</table>';
    var det=list.map(function(q,i){
      var lv=q.lv||lvl({q:q.q,c:q.c},q.theme);
      return '<div class="ev-q ev-cq"><div class="ev-qt"><span class="ev-n">'+(i+1)+'</span> '+rich(q.q)+' <span class="ev-lv">niveau '+lv+'</span></div>'+
        '<div class="ev-ans">\u2714 Bonne r\u00e9ponse : <b>'+LET[q.a]+'.</b> '+rich(q.c[q.a])+'</div>'+
        (q.exp?'<div class="ev-exp">\u2192 '+rich(q.exp)+'</div>':'')+'</div>';
    }).join('');
    return '<div class="ev-doc">'+
      '<div class="ev-top"><b>MathChrono-Quiz</b><span>R\u00e9f. '+ref+vtag+'</span></div>'+
      '<div class="ev-title">CORRIG\u00c9 \u2014 \u00c9VALUATION FORMATIVE'+(pc?' <span class="ev-pc">'+pc.sym+' '+pc.nom+'</span>':'')+'</div>'+
      '<div class="ev-sub">Classe de '+evEsc(p.ent&&p.ent.classe?p.ent.classe:p.cls)+' \u00b7 '+evEsc(themeLabel(p))+vtag+'</div>'+(window.MQ_SOM.infoLine(p.ent,p.dur)?'<div class="ev-sub" style="margin-top:-4px">'+evEsc(window.MQ_SOM.infoLine(p.ent,p.dur))+'</div>':'')+
      '<div class="ev-cons"><b>Grille de correction</b> \u2014 bar\u00e8me : 1 point par bonne r\u00e9ponse, total '+N+' points.</div>'+grid+
      '<div class="ev-cons" style="margin-top:8px"><b>Rep\u00e8res sugg\u00e9r\u00e9s :</b> Non acquis : moins de '+Math.ceil(N*0.5)+' points \u00b7 En cours d\u2019acquisition : de '+Math.ceil(N*0.5)+' \u00e0 '+(Math.ceil(N*0.75)-1)+' points \u00b7 Acquis : '+Math.ceil(N*0.75)+' points et plus.</div>'+
      det+
      '<div class="ev-foot">G\u00e9n\u00e9r\u00e9 par MathChrono-Quiz \u00b7 R\u00e9f. '+ref+vtag+'</div>'+
    '</div>';
  }

  /* ---- fiche enseignant (parcours) ---- */
  function guideHTML(p,sets,ref){
    var rows=[1,2,3].map(function(g){ var L=sets[g], c=[0,0,0]; L.forEach(function(q){ c[q.lv-1]++; }); var pc=PARCOURS[g];
      return '<tr><td><b>'+pc.sym+' '+pc.nom+'</b><br><span class="ev-lv">'+pc.cle+'</span></td><td>'+pc.but+'</td><td style="text-align:center">'+c[0]+' \u00b7 '+c[1]+' \u00b7 '+c[2]+'</td></tr>'; }).join('');
    return '<div class="ev-doc"><div class="ev-top"><b>MathChrono-Quiz</b><span>R\u00e9f. '+ref+'</span></div>'+
      '<div class="ev-title">FICHE ENSEIGNANT \u2014 \u00c9VALUATION DIFF\u00c9RENCI\u00c9E</div>'+
      '<div class="ev-sub">Classe de '+evEsc(p.cls)+' \u00b7 '+evEsc(themeLabel(p))+' \u00b7 '+sets[1].length+' questions par parcours \u00b7 '+p.dur+' min</div>'+
      '<div class="ev-cons"><b>Principe :</b> les trois parcours \u00e9valuent les m\u00eames th\u00e8mes ; ils diff\u00e8rent par la demande cognitive des questions. Sur les sujets des \u00e9l\u00e8ves, les parcours portent un simple symbole (\u25b2 \u25a0 \u25cf) : aucune mention de niveau.</div>'+
      '<table class="ev-gt"><tr><th>Parcours</th><th>Objectif</th><th>Questions niveau 1 \u00b7 2 \u00b7 3</th></tr>'+rows+'</table>'+
      '<div class="ev-cons"><b>Affectation sugg\u00e9r\u00e9e :</b> parcours 1 pour les \u00e9l\u00e8ves qui ont besoin de consolider ; parcours 2 pour ceux qui ont atteint le niveau attendu ; parcours 3 pour ceux qui sont \u00e0 l\u2019aise. Appuie-toi sur tes observations et sur les derni\u00e8res \u00e9valuations, et laisse l\u2019\u00e9l\u00e8ve passer d\u2019un parcours \u00e0 l\u2019autre d\u2019une s\u00e9quence \u00e0 l\u2019autre.</div>'+
      '<div class="ev-cons"><b>Lecture des r\u00e9sultats :</b> chaque sujet est not\u00e9 sur '+sets[1].length+' points ; les notes de parcours diff\u00e9rents <u>ne sont pas comparables</u>. Utilise le niveau de ma\u00eetrise (acquis / en cours / non acquis) pour rendre compte.</div>'+
      '<div class="ev-cons" style="border-left-color:#999;background:#f3f3f3"><b>Attention :</b> les niveaux (1, 2, 3) sont estim\u00e9s automatiquement \u00e0 partir de l\u2019\u00e9nonc\u00e9 des questions. Ils sont indiqu\u00e9s dans les corrig\u00e9s : v\u00e9rifie-les et retire un sujet qui ne te convient pas en g\u00e9n\u00e9rant un autre tirage.</div>'+
      '<div class="ev-foot">G\u00e9n\u00e9r\u00e9 par MathChrono-Quiz \u00b7 R\u00e9f. '+ref+'</div></div>';
  }

  /* ---- Word : sujets et corrigés formatifs ---- */
  function wSpec(p,list,ver,ref,opt,corr){
    var D=window.MQ_DOCX, P=D.para, R=D.run, F=function(t,o){ return D.rich(t,o); }, N=list.length, pc=opt&&opt.g?PARCOURS[opt.g]:null, UW=10206, o=[];
    var title='\u00c9VALUATION FORMATIVE \u2014 '+window.MQ_SOM.matUp(p.ent); if(corr) title='CORRIG\u00c9 \u2014 \u00c9VALUATION FORMATIVE';
    o.push(P([R(title,{b:true,color:'1F3864',sz:30})].concat(pc?[R('    '+pc.sym+' '+pc.nom+(corr?' ('+pc.cle+')':''),{b:true,color:'1F3864',sz:24})]:[]),{align:'center',after:20}));
    o.push(P(R('Classe de '+(p.ent&&p.ent.classe?p.ent.classe:p.cls)+' \u00b7 '+themeLabel(p)+(ver?' \u00b7 Version '+ver:''),{color:'5A6675',sz:19}),{align:'center',after:corr?20:120}));
    if(corr&&window.MQ_SOM.infoLine(p.ent,p.dur)) o.push(P(R(window.MQ_SOM.infoLine(p.ent,p.dur),{color:'5A6675',sz:17}),{align:'center',after:120}));
    function idRow(parts){ var tabs=[],c=[]; parts.forEach(function(x){ c.push(R(x.l,{sz:20})); c.push(D.tab()); tabs.push({type:'right',leader:'underscore',pos:x.p}); }); return P(c,{tabs:tabs,before:80,after:40}); }
    if(!corr){
      var left=window.MQ_SOM.idWord(p.ent,p.dur);
      var right=P(R('R\u00c9SERV\u00c9 \u00c0 L\u2019ENSEIGNANT',{b:true,color:'1F3864',sz:17}),{after:60})+P([R('Note : ',{sz:20}),D.tab(),R(' / '+N,{sz:20,b:true})],{tabs:[{type:'right',leader:'underscore',pos:2400}],before:40,after:80})+
        P(R('Niveau de ma\u00eetrise :',{sz:18}),{after:20})+P(R('\u2610 Acquis   \u2610 En cours',{sz:18}),{after:20})+P(R('\u2610 Non acquis',{sz:18}),{after:60})+P([R('Appr\u00e9ciation : ',{sz:18}),D.tab()],{tabs:[{type:'right',leader:'underscore',pos:3450}],before:40,after:40})+P([D.tab()],{tabs:[{type:'right',leader:'underscore',pos:3450}],before:120})+P([D.tab()],{tabs:[{type:'right',leader:'underscore',pos:3450}],before:120});
      var bd={sz:6,color:'444444'};
      o.push(D.table([[D.cell(left,{w:6200,borders:{top:bd,left:bd,bottom:bd,right:bd}}),D.cell(right,{w:UW-6200,shade:'F4F6FA',borders:{top:bd,left:bd,bottom:bd,right:bd}})]],[6200,UW-6200],{borders:false,padV:50,padH:110}));
      o.push(P([R('Consigne : ',{b:true,sz:18}),R('pour chaque question, coche une seule case : celle de la bonne r\u00e9ponse. Bar\u00e8me : 1 point par bonne r\u00e9ponse, soit '+N+' points.',{sz:18})],{shade:'FFF6EE',border:{left:{sz:18,color:'E65C00',space:4}},before:140,after:140,ind:{left:100}}));
      list.forEach(function(q,i){
        o.push(P([R((i+1)+'.',{b:true,color:'1F3864',sz:21}),D.tab(),F(q.q,{b:true,sz:21})],{ind:{left:560,hanging:560},tabs:[{type:'left',pos:560}],keepNext:true,keepLines:true,before:100,after:50}));
        var maxc=Math.max.apply(null,q.c.map(function(c){ return c.length; }));
        if(maxc<=30){ var cl=function(j){ return D.cell(P([R('\u2610  ',{sz:21,font:'Segoe UI Symbol'}),R(LET[j]+'.  ',{b:true,sz:21}),F(q.c[j],{sz:21})],{keepNext:j<2,keepLines:true}),{w:4400}); };
          o.push(D.table([[D.cell(P('',{}),{w:560}),cl(0),cl(1)],[D.cell(P('',{}),{w:560}),cl(2),cl(3)]],[560,4400,4400],{borders:false,padV:20,padH:60})); }
        else q.c.forEach(function(c,j){ o.push(P([R('\u2610  ',{sz:21,font:'Segoe UI Symbol'}),R(LET[j]+'.  ',{b:true,sz:21}),F(c,{sz:21})],{ind:{left:560},keepNext:j<3,keepLines:true,after:20})); });
      });
    } else {
      o.push(P([R('Grille de correction',{b:true,sz:20}),R(' \u2014 bar\u00e8me : 1 point par bonne r\u00e9ponse, total '+N+' points.',{sz:19})],{shade:'FFF6EE',border:{left:{sz:18,color:'E65C00',space:4}},before:60,after:100,ind:{left:100}}));
      var rows=[]; for(var s0=0;s0<N;s0+=10){ var cs=[]; for(var j2=s0;j2<s0+10;j2++){ if(j2<N) cs.push(D.cell(P(R(String(j2+1),{sz:16,color:'5A6675'}),{align:'center'})+P(R(LET[list[j2].a],{b:true,sz:26}),{align:'center'}),{w:1000,shade:j2%2?null:'F4F6FA'})); else cs.push(D.cell(P(''),{w:1000})); } rows.push(cs); }
      o.push(D.table(rows,Array(10).fill(1000),{center:true,padV:30}));
      o.push(P([R('Rep\u00e8res sugg\u00e9r\u00e9s : ',{b:true,sz:18}),R('Non acquis : moins de '+Math.ceil(N*0.5)+' points \u00b7 En cours d\u2019acquisition : de '+Math.ceil(N*0.5)+' \u00e0 '+(Math.ceil(N*0.75)-1)+' points \u00b7 Acquis : '+Math.ceil(N*0.75)+' points et plus.',{sz:18})],{before:140,after:120}));
      list.forEach(function(q,i){ var lv=q.lv||lvl({q:q.q,c:q.c},q.theme);
        o.push(P([R((i+1)+'.',{b:true,color:'1F3864',sz:20}),D.tab(),F(q.q,{b:true,sz:20}),R('   [niveau '+lv+']',{sz:15,color:'7A4A00'})],{ind:{left:560,hanging:560},tabs:[{type:'left',pos:560}],keepNext:true,keepLines:true,before:100,after:30}));
        o.push(P([R('\u2714 Bonne r\u00e9ponse : ',{color:'1B5E20',sz:19}),R(LET[q.a]+'.  ',{b:true,color:'1B5E20',sz:19}),F(q.c[q.a],{color:'1B5E20',sz:19})],{ind:{left:560},keepNext:!!q.exp,after:20}));
        if(q.exp) o.push(P(F('\u2192 '+q.exp,{sz:18,color:'444444'}),{ind:{left:560},after:60,keepLines:true})); });
    }
    return o.join('');
  }
  function wBuild(body,p,ref,corr){ var D=window.MQ_DOCX; return D.build({title:(corr?'Corrig\u00e9 ':'Sujet ')+'\u2014 \u00e9valuation formative '+p.cls,body:body,images:[],footer:'MathChrono-Quiz \u00b7 '+(corr?'Corrig\u00e9 de l\u2019\u00e9valuation formative':'\u00c9valuation formative')+' \u00b7 Classe de '+p.cls+' \u00b7 R\u00e9f. '+ref,headerL:'MathChrono-Quiz',headerR:'R\u00e9f. '+ref}); }
  var PGBRK='<w:p><w:r><w:br w:type="page"/></w:r></w:p>';
  function download(bytes,name,mime){ var blob=new Blob([bytes],{type:mime||'application/octet-stream'}), url=URL.createObjectURL(blob), a=document.createElement('a'); a.href=url; a.download=name; document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(url); a.remove(); },4000); }
  var DOCX_MIME='application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  window.evWord=function(kind,g){
    var p=params(); if(st.seed==null||!p.th.length||!window.MQ_DOCX) return; var corr=(kind==='corrige'), tag=p.cls.replace(/[^A-Za-z0-9]/g,''), ref, body;
    if(st.diff){ ref=encode(p,'D'); var sets=pickDiffAll(p), gs=g?[g]:[1,2,3], parts=[];
      if(corr&&!g) parts.push(guideWord(p,sets,ref));
      gs.forEach(function(x){ parts.push(wSpec(p,sets[x],'',ref,{g:x},corr)); }); body=parts.join(PGBRK); }
    else { ref=encode(p,'F'); var A=pick(p); body=wSpec(p,A,st.ab?'A':'',ref,null,corr); if(st.ab) body+=PGBRK+wSpec(p,versionB(A,p.seed),'B',ref,null,corr); }
    var bytes=wBuild(body,p,ref,corr); download(bytes,'MathChrono-Quiz_'+(corr?'Corrige':'Sujet')+(st.diff?(g?'_Parcours'+g:'s'):'')+'_'+tag+'_'+ref.replace(/[^A-Z0-9-]/g,'')+'.docx',DOCX_MIME);
  };
  function guideWord(p,sets,ref){ var D=window.MQ_DOCX, P=D.para, R=D.run, o=[];
    o.push(P(R('FICHE ENSEIGNANT \u2014 \u00c9VALUATION DIFF\u00c9RENCI\u00c9E',{b:true,color:'1F3864',sz:30}),{align:'center',after:20}));
    o.push(P(R('Classe de '+p.cls+' \u00b7 '+themeLabel(p)+' \u00b7 '+sets[1].length+' questions par parcours \u00b7 '+p.dur+' min',{color:'5A6675',sz:19}),{align:'center',after:140}));
    o.push(P([R('Principe : ',{b:true,sz:19}),R('les trois parcours \u00e9valuent les m\u00eames th\u00e8mes ; ils diff\u00e8rent par la demande cognitive des questions. Sur les sujets des \u00e9l\u00e8ves, les parcours portent un simple symbole (\u25b2 \u25a0 \u25cf) : aucune mention de niveau.',{sz:19})],{shade:'FFF6EE',border:{left:{sz:18,color:'E65C00',space:4}},after:120,ind:{left:100}}));
    var rows=[{header:true,cells:['Parcours','Objectif','Questions niveau 1 \u00b7 2 \u00b7 3'].map(function(h,i){ return D.cell(P(R(h,{b:true,color:'FFFFFF',sz:19}),{align:i===2?'center':'left'}),{w:[2400,5400,2406][i],shade:'1F3864'}); })}];
    [1,2,3].forEach(function(g){ var c=[0,0,0]; sets[g].forEach(function(q){ c[q.lv-1]++; }); var pc=PARCOURS[g]; rows.push({cantSplit:true,cells:[D.cell(P(R(pc.sym+' '+pc.nom,{b:true,sz:19}))+P(R(pc.cle,{sz:16,color:'7A4A00'})),{w:2400}),D.cell(P(R(pc.but,{sz:19})),{w:5400}),D.cell(P(R(c[0]+' \u00b7 '+c[1]+' \u00b7 '+c[2],{sz:19}),{align:'center'}),{w:2406,valign:'center'})]}); });
    o.push(D.table(rows,[2400,5400,2406]));
    ['Affectation sugg\u00e9r\u00e9e : parcours 1 pour les \u00e9l\u00e8ves qui ont besoin de consolider ; parcours 2 pour ceux qui ont atteint le niveau attendu ; parcours 3 pour ceux qui sont \u00e0 l\u2019aise. Appuie-toi sur tes observations et sur les derni\u00e8res \u00e9valuations, et laisse l\u2019\u00e9l\u00e8ve passer d\u2019un parcours \u00e0 l\u2019autre d\u2019une s\u00e9quence \u00e0 l\u2019autre.',
     'Lecture des r\u00e9sultats : chaque sujet est not\u00e9 sur '+sets[1].length+' points ; les notes de parcours diff\u00e9rents ne sont pas comparables. Utilise le niveau de ma\u00eetrise (acquis / en cours / non acquis) pour rendre compte.',
     'Attention : les niveaux (1, 2, 3) sont estim\u00e9s automatiquement \u00e0 partir de l\u2019\u00e9nonc\u00e9 des questions. Ils sont indiqu\u00e9s dans les corrig\u00e9s : v\u00e9rifie-les et g\u00e9n\u00e8re un autre tirage si un sujet ne te convient pas.'].forEach(function(t){ o.push(P(R(t,{sz:19}),{before:120,align:'both'})); });
    return o.join(''); }
  window.evKind=function(k){ st.kind=k; renderEvalPage(); };

  /* ---- impression (enregistrer en PDF) ---- */
  function root(){ var r=document.getElementById('print-root'); if(!r){ r=document.createElement('div'); r.id='print-root'; document.body.appendChild(r); } return r; }
  function printDoc(html,title){
    var r=root(); r.innerHTML=html; var old=document.title; document.title=title;
    document.body.classList.add('printing'); window.__mqPrinting=true;
    var finished=false, onAfter;
    var done=function(){ if(finished) return; finished=true; document.body.classList.remove('printing'); document.title=old; r.innerHTML=''; window.__mqPrinting=false; window.removeEventListener('afterprint',onAfter); };
    /* sur mobile, l'aperçu PDF est construit après coup : on garde le document imprimable un moment après « afterprint » */
    onAfter=function(){ setTimeout(done,2000); };
    window.addEventListener('afterprint',onAfter);
    setTimeout(function(){ try{ window.print(); }catch(e){ done(); } },60);
    setTimeout(done,180000);
  }

  /* ---- page de l'enseignant ---- */
  function themesOf(){ return (D(st.cyc).CL[st.cls]||[]); }
  function avail(){ var d=D(st.cyc); return st.th.reduce(function(s,t){ return s+(d.TH[t]||[]).length; },0); }
  function curDur(){ return st.dur!=null ? st.dur : Math.ceil(st.n*1.5); }
  function canon(cyc,cls,th){ var nm=(D(cyc).CL[cls]||[]); return th.slice().sort(function(a,b){ return nm.indexOf(a)-nm.indexOf(b); }); }
  function params(){ return {cyc:st.cyc,cls:st.cls,th:canon(st.cyc,st.cls,st.th),n:Math.min(st.n,avail()),seed:st.seed,dur:curDur(),ent:entOf(st.cls)}; }

  window.renderEvalPage = function(){
    if(st.kind==='S'&&window.renderSomPage) return window.renderSomPage();
    var y=window.scrollY||0, app=document.getElementById('app');
    if(st.cyc==null){ st.cyc=currentCycle; st.cls=currentClass; }
    var d=D(st.cyc), clsOpts='';
    [1,2].forEach(function(c){ clsOpts+='<optgroup label="'+(c===1?'1er cycle':'2nd cycle')+'">'+Object.keys(D(c).CL).map(function(k){ return '<option value="'+c+'|'+k+'" '+(st.cyc===c&&st.cls===k?'selected':'')+'>'+k+'</option>'; }).join('')+'</optgroup>'; });
    var th=themesOf().map(function(t,i){ var on=st.th.indexOf(t)>=0; return '<label style="display:flex;gap:8px;align-items:flex-start;padding:7px 0;border-bottom:1px solid var(--border);font-size:13px;color:var(--text);cursor:pointer;"><input type="checkbox" '+(on?'checked':'')+' onchange="evTheme('+i+')" style="margin-top:3px;"><span style="flex:1;">'+evEsc(short(t))+' <span style="color:var(--text-muted);">('+(d.TH[t]||[]).length+')</span></span></label>'; }).join('');
    var ok=st.th.length>0, p=params(), ready=ok&&st.seed!=null;
    var nOpts=[5,8,10,12,15,20,25,30].map(function(v){ return '<option value="'+v+'" '+(st.n===v?'selected':'')+'>'+v+'</option>'; }).join('');
    var btn='width:100%;padding:12px;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;';
    var res='';
    if(ready){
      var ref=encode(p,st.diff?'D':'F');
      res='<div style="background:var(--accent-bg);border-radius:10px;padding:12px;margin-top:12px;">'+
        '<div style="font-size:12px;color:var(--accent-text);font-weight:700;">R\u00e9f\u00e9rence de l\u2019\u00e9valuation</div>'+
        '<div style="font-family:monospace;font-size:14px;font-weight:700;color:var(--accent-text);word-break:break-all;margin:4px 0 8px;">'+ref+'</div>'+
        '<div style="font-size:12px;color:var(--text-sec);margin-bottom:8px;">'+p.n+' questions \u00b7 '+p.dur+' min \u00b7 '+evEsc(p.cls)+(st.diff?' \u00b7 3 parcours':(st.ab?' \u00b7 versions A et B':''))+'</div>'+
        (st.diff?
          [1,2,3].map(function(g){ var pc=PARCOURS[g]; return '<div style="border:1px solid var(--border);border-radius:10px;padding:8px;margin-bottom:8px;background:var(--surface);"><div style="font-size:13px;font-weight:800;color:var(--text);margin-bottom:6px;">'+pc.sym+' '+pc.nom+' <span style="font-weight:500;color:var(--text-muted);">\u00b7 '+pc.cle+'</span></div><div style="display:flex;gap:6px;"><button onclick="evPrint(\'sujet\','+g+')" style="flex:1;padding:9px;border:none;border-radius:8px;background:var(--accent);color:#fff;font-weight:700;font-size:12.5px;font-family:inherit;cursor:pointer;">\u2b07 Sujet</button><button onclick="evPrint(\'corrige\','+g+')" style="flex:1;padding:9px;border:none;border-radius:8px;background:var(--success);color:#fff;font-weight:700;font-size:12.5px;font-family:inherit;cursor:pointer;">\u2b07 Corrig\u00e9</button></div></div>'; }).join('')+
          '<button onclick="evPrint(\'sujet\',0)" style="'+btn+'background:var(--accent);color:#fff;margin-bottom:8px;">\u2b07 Les 3 sujets en un seul PDF</button>'+
          '<button onclick="evPrint(\'corrige\',0)" style="'+btn+'background:var(--success);color:#fff;margin-bottom:8px;">\u2b07 Fiche enseignant + 3 corrig\u00e9s</button>'
        :
          '<button onclick="evPrint(\'sujet\')" style="'+btn+'background:var(--accent);color:#fff;margin-bottom:8px;">\u2b07 T\u00e9l\u00e9charger le sujet (PDF)</button>'+
          '<button onclick="evPrint(\'corrige\')" style="'+btn+'background:var(--success);color:#fff;margin-bottom:8px;">\u2b07 T\u00e9l\u00e9charger le corrig\u00e9 (PDF)</button>')+
        (st.diff?
          '<div style="display:flex;gap:6px;margin-bottom:8px;"><button onclick="evWord(\'sujet\',0)" style="flex:1;padding:10px;border:1px solid var(--accent);border-radius:10px;background:transparent;color:var(--accent-text);font-weight:700;font-size:12.5px;font-family:inherit;cursor:pointer;">\u2b07 3 sujets (Word)</button><button onclick="evWord(\'corrige\',0)" style="flex:1;padding:10px;border:1px solid var(--success);border-radius:10px;background:transparent;color:var(--success);font-weight:700;font-size:12.5px;font-family:inherit;cursor:pointer;">\u2b07 Fiche + corrig\u00e9s (Word)</button></div>':
          '<div style="display:flex;gap:6px;margin-bottom:8px;"><button onclick="evWord(\'sujet\')" style="flex:1;padding:10px;border:1px solid var(--accent);border-radius:10px;background:transparent;color:var(--accent-text);font-weight:700;font-size:12.5px;font-family:inherit;cursor:pointer;">\u2b07 Sujet (Word)</button><button onclick="evWord(\'corrige\')" style="flex:1;padding:10px;border:1px solid var(--success);border-radius:10px;background:transparent;color:var(--success);font-weight:700;font-size:12.5px;font-family:inherit;cursor:pointer;">\u2b07 Corrig\u00e9 (Word)</button></div>')+
        '<button onclick="evCopy()" style="'+btn+'background:transparent;border:1px solid var(--border-strong);color:var(--text-sec);font-weight:600;font-size:13px;">\ud83d\udccb Copier la r\u00e9f\u00e9rence</button>'+
        '<div style="font-size:11px;color:var(--text-muted);margin-top:8px;line-height:1.5;">Dans la fen\u00eatre qui s\u2019ouvre, choisis <b>Enregistrer au format PDF</b> comme imprimante. Le nom du fichier contient la r\u00e9f\u00e9rence.</div>'+
        '</div>';
    }
    var wa='https://wa.me/'+WA+'?text='+encodeURIComponent('Bonjour, je souhaite acc\u00e9der \u00e0 l\u2019\u00e9valuation sommative (format examen) de MathChrono-Quiz pour la classe de '+st.cls+'.');
    app.innerHTML =
      '<div class="card" style="padding:1.1rem;">'+
        '<div style="font-size:17px;font-weight:800;color:var(--text);margin-bottom:2px;">\ud83d\udcdd \u00c9valuation \u00e0 imprimer</div>'+
        '<div style="font-size:12px;color:var(--text-muted);margin-bottom:12px;line-height:1.5;">G\u00e9n\u00e8re un sujet de QCM et son corrig\u00e9 \u00e0 partir de la banque de questions.</div>'+
        '<div style="display:flex;gap:6px;margin-bottom:12px;">'+
          '<div style="flex:1;padding:9px;border-radius:10px;text-align:center;background:var(--accent);color:#fff;font-size:13px;font-weight:700;">Formative</div>'+
          '<button onclick="evKind(\'S\')" style="flex:1;padding:9px;border-radius:10px;border:1px solid var(--border-strong);background:transparent;color:var(--text-sec);font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">Sommative \u00b7 format examen</button>'+
        '</div>'+
        '<div class="theme-label">Classe</div>'+
        '<select class="theme-select" onchange="evClass(this.value)" style="margin-bottom:10px;">'+clsOpts+'</select>'+
        '<div class="theme-label" style="display:flex;justify-content:space-between;align-items:center;"><span>Th\u00e8mes de l\u2019\u00e9valuation</span><span><a href="#" onclick="evAll(true);return false;" style="font-size:12px;color:var(--accent);">Tout</a> \u00b7 <a href="#" onclick="evAll(false);return false;" style="font-size:12px;color:var(--accent);">Aucun</a></span></div>'+
        '<div style="max-height:260px;overflow:auto;border:1px solid var(--border);border-radius:10px;padding:0 10px;margin-bottom:10px;">'+th+'</div>'+
        '<div style="display:flex;gap:10px;margin-bottom:10px;">'+
          '<div style="flex:1;"><div class="theme-label">Questions</div><select class="theme-select" onchange="evN(this.value)">'+nOpts+'</select></div>'+
          '<div style="flex:1;"><div class="theme-label">Dur\u00e9e (min)</div><input type="number" min="5" max="120" value="'+curDur()+'" onchange="evDur(this.value)" class="theme-select" style="width:100%;"></div>'+
        '</div>'+
        window.entFormHTML(st.cls)+'<div class="theme-label">Diff\u00e9renciation</div>'+
        '<div style="display:flex;gap:6px;margin-bottom:8px;">'+
          '<button onclick="evDiff(false)" style="flex:1;padding:8px;border-radius:8px;font-family:inherit;font-size:12.5px;font-weight:700;cursor:pointer;border:1px solid var(--border-strong);'+(!st.diff?'background:var(--accent);color:#fff;':'background:transparent;color:var(--text-sec);')+'">Un seul sujet</button>'+
          '<button onclick="evDiff(true)" style="flex:1;padding:8px;border-radius:8px;font-family:inherit;font-size:12.5px;font-weight:700;cursor:pointer;border:1px solid var(--border-strong);'+(st.diff?'background:var(--accent);color:#fff;':'background:transparent;color:var(--text-sec);')+'">3 parcours \u25b2 \u25a0 \u25cf</button>'+
        '</div>'+
        (st.diff?'<div style="font-size:12px;color:var(--text-sec);line-height:1.5;background:var(--surface2);border-radius:8px;padding:8px 10px;margin-bottom:12px;">M\u00eames th\u00e8mes, trois sujets : <b>\u25b2 je retiens</b> (bases), <b>\u25a0 j\u2019applique</b> (attendu), <b>\u25cf je raisonne</b> (approfondissement). Les \u00e9l\u00e8ves ne voient qu\u2019un symbole, sans mention de niveau.</div>':
          '<label style="display:flex;gap:8px;align-items:center;font-size:13px;color:var(--text);margin-bottom:12px;cursor:pointer;"><input type="checkbox" '+(st.ab?'checked':'')+' onchange="evAB(this.checked)"> Pr\u00e9parer aussi une <b>version B</b> (ordre diff\u00e9rent)</label>')+
        (ok&&p.n<st.n?'<div style="font-size:12px;color:var(--danger);margin-bottom:8px;">Seulement '+avail()+' questions disponibles : le sujet en contiendra '+p.n+'.</div>':'')+
        '<button onclick="evGen()" '+(ok?'':'disabled')+' style="'+btn+'background:'+(ok?'var(--accent-text)':'var(--border-strong)')+';color:#fff;">\ud83c\udfb2 '+(ready?'G\u00e9n\u00e9rer un autre tirage':'G\u00e9n\u00e9rer l\u2019\u00e9valuation')+'</button>'+
        res+
        '<div style="border-top:1px solid var(--border);margin-top:16px;padding-top:12px;">'+
          '<div class="theme-label">Retrouver une \u00e9valuation avec sa r\u00e9f\u00e9rence</div>'+
          '<div style="display:flex;gap:6px;"><input id="ev-ref" oninput="evCleanRef(this)" placeholder="MQ1-F13..." class="theme-select" style="flex:1;font-family:monospace;text-transform:uppercase;"><button onclick="evFind()" style="padding:0 14px;border-radius:8px;border:1px solid var(--border-strong);background:transparent;color:var(--text);font-weight:700;cursor:pointer;">OK</button></div>'+
          '<div id="ev-msg" style="font-size:12px;color:var(--danger);margin-top:6px;"></div>'+
        '</div>'+
      '</div>';
    window.scrollTo(0,y);
  };

  window.evClass=function(v){ var a=v.split('|'); st.cyc=+a[0]; st.cls=a[1]; st.th=[]; st.seed=null; renderEvalPage(); };
  window.evTheme=function(i){ var t=themesOf()[i], k=st.th.indexOf(t); if(k>=0) st.th.splice(k,1); else st.th.push(t); st.seed=null; renderEvalPage(); };
  window.evAll=function(on){ st.th=on?themesOf().slice():[]; st.seed=null; renderEvalPage(); };
  window.evN=function(v){ st.n=+v; st.dur=null; st.seed=null; renderEvalPage(); };
  window.evDur=function(v){ var n=Math.max(5,Math.min(120,+v||15)); st.dur=n; renderEvalPage(); };
  window.evAB=function(on){ st.ab=!!on; renderEvalPage(); };
  window.evDiff=function(on){ st.diff=!!on; if(on) st.ab=false; st.seed=null; renderEvalPage(); };
  window.evGen=function(){ if(!st.th.length) return; st.seed=(Math.floor(Math.random()*4294967295)>>>0); renderEvalPage(); };
  window.evCleanRef=function(el){ var c=cleanRef(el.value); if(c&&c!==el.value) el.value=c; };
  window.evCopy=function(){ var r=encode(params(),'F'); copyText(r); var b=window.event&&window.event.target; if(b){ var o=b.textContent; b.textContent='\u2705 R\u00e9f\u00e9rence copi\u00e9e'; setTimeout(function(){ b.textContent=o; },1600); } };
  window.evFind=function(){
    var v=document.getElementById('ev-ref').value, p=decode(v), m=document.getElementById('ev-msg');
    if(!p||p.error){ m.textContent=(p&&p.error)||'R\u00e9f\u00e9rence invalide : v\u00e9rifie qu\u2019elle est recopi\u00e9e en entier.'; return; }
    if(p.mode==='S'){ st.kind='S'; if(window.somLoad) window.somLoad(p); return; }
    st.cyc=p.cyc; st.cls=p.cls; st.th=p.th; st.n=p.n; st.dur=null; st.seed=p.seed; st.diff=(p.mode==='D'); if(st.diff) st.ab=false; renderEvalPage();
  };
  window.evPrint=function(kind,g){
    var p=params(); if(st.seed==null||!p.th.length) return;
    var tag=p.cls.replace(/[^A-Za-z0-9]/g,'');
    if(st.diff){
      var ref=encode(p,'D'), safe=ref.replace(/[^A-Z0-9-]/g,''), sets=pickDiffAll(p), html='', gs=(g?[g]:[1,2,3]);
      if(kind==='sujet'){ html=gs.map(function(x){ return sujetHTML(p,sets[x],'',ref,{g:x}); }).join('<div class="ev-pb"></div>'); }
      else { html=(g?'':guideHTML(p,sets,ref)+'<div class="ev-pb"></div>')+gs.map(function(x){ return corrigeHTML(p,sets[x],'',ref,{g:x}); }).join('<div class="ev-pb"></div>'); }
      printDoc(html,'MathChrono-Quiz_'+(kind==='sujet'?'Sujets':'Corriges')+'_'+tag+'_'+safe+(g?'_P'+g:''));
      return;
    }
    var ref=encode(p,'F'), A=pick(p), html='', safe=ref.replace(/[^A-Z0-9-]/g,'');
    if(kind==='sujet'){
      html=sujetHTML(p,A,st.ab?'A':'',ref);
      if(st.ab) html+='<div class="ev-pb"></div>'+sujetHTML(p,versionB(A,p.seed),'B',ref);
    } else {
      html=corrigeHTML(p,A,st.ab?'A':'',ref);
      if(st.ab) html+='<div class="ev-pb"></div>'+corrigeHTML(p,versionB(A,p.seed),'B',ref);
    }
    printDoc(html,'MathChrono-Quiz_'+(kind==='sujet'?'Sujet':'Corrige')+'_'+tag+'_'+safe);
  };
  // pour les tests
  window.__EV={entOf:entOf,cleanRef:cleanRef,printDoc:printDoc,download:download,pickDiffAll:pickDiffAll,lvl:lvl,guideHTML:guideHTML,PARCOURS:PARCOURS,pick:pick,versionB:versionB,encode:encode,decode:decode,sujetHTML:sujetHTML,corrigeHTML:corrigeHTML,state:st};
})();


