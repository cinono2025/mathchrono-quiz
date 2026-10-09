/* ===== MQ_SOM : moteur d'épreuve sommative (structure officielle) ===== */
(function(G){
  'use strict';
  var M=G.MQ_SOM_MOD, MOD=M.MOD, WORLDS=M.WORLDS, fmt=M.fmt, D=G.MQ_DOCX;
  function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; var t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function vecH(s){ return s.replace(/\u2192([A-Za-z0-9'][A-Za-z0-9']{0,3})/g,'<span class="vec"><span>$1</span></span>'); }
  function pts(x){ return (Math.round(x*2)/2%1===0)?String(Math.round(x*2)/2):String(Math.round(x*2)/2).replace('.',','); }


  function fmtTxt(E){ var n=E.problems.length; return n===2?
      'Un support, une t\u00e2che et deux probl\u00e8mes ind\u00e9pendants : m\u00eame structure que l\u2019\u00e9preuve de math\u00e9matiques au BEPC, ramen\u00e9e \u00e0 deux probl\u00e8mes pour les s\u00e9ries litt\u00e9raires. Le probl\u00e8me 1 contr\u00f4le la compr\u00e9hension du support ; le probl\u00e8me 2 apporte des compl\u00e9ments d\u2019information.':
      'Un support, une t\u00e2che et trois probl\u00e8mes ind\u00e9pendants (format de l\u2019\u00e9preuve de math\u00e9matiques au BEPC, guide du programme). Le probl\u00e8me 1 contr\u00f4le la compr\u00e9hension du support ; les probl\u00e8mes 2 et 3 apportent des compl\u00e9ments d\u2019information.'; }
  function partsWord(n){ return ['','une','deux','trois','quatre','cinq','six','sept','huit'][n]||String(n); }
  function fmtDur(m){ m=+m||0; if(!m) return ''; var h=Math.floor(m/60), r=m%60; if(!h) return m+' min'; if(!r) return h+' h'; return h+' h '+(r<10?'0':'')+r; }
  function fld(v,w){ return v?'<span class="ev-fill">'+esc(v)+'</span>':'<span class="ev-line" style="width:'+w+'mm"></span>'; }
  function idHTML(ent,dur){ ent=ent||{}; var L=function(w){ return '<span class="ev-line" style="width:'+w+'mm"></span>'; };
    return '<div>\u00c9tablissement : '+fld(ent.etab,62)+'</div>'+
      '<div>Ann\u00e9e scolaire : '+fld(ent.annee,24)+' &nbsp; Mati\u00e8re : '+fld(ent.matiere,32)+'</div>'+
      '<div>Classe : '+fld(ent.classe,20)+' &nbsp; Coefficient : '+fld(ent.coef,12)+' &nbsp; Dur\u00e9e : <b>'+esc(fmtDur(dur))+'</b></div>'+
      '<div>Nom : '+L(58)+'</div><div>Pr\u00e9nom : '+L(58)+'</div>'+
      '<div>Date : '+L(24)+' &nbsp; D\u00e9but : '+L(9)+' h '+L(7)+' &nbsp; Fin : '+L(9)+' h '+L(7)+'</div>'; }
  function idWord(ent,dur){ ent=ent||{}; var P=D.para, R=D.run, u=function(n){ return '_'.repeat(n); };
    var wf=function(v,n){ return v?R(v,{b:true,u:true,sz:20}):R(u(n),{sz:20}); }, row=function(parts){ return P(parts,{before:70,after:30}); };
    return row([R('\u00c9tablissement : ',{sz:20}),wf(ent.etab,30)])+
      row([R('Ann\u00e9e scolaire : ',{sz:20}),wf(ent.annee,11),R('    Mati\u00e8re : ',{sz:20}),wf(ent.matiere,13)])+
      row([R('Classe : ',{sz:20}),wf(ent.classe,9),R('    Coefficient : ',{sz:20}),wf(ent.coef,5),R('    Dur\u00e9e : ',{sz:20}),R(fmtDur(dur),{b:true,sz:20})])+
      row([R('Nom : ',{sz:20}),R(u(36),{sz:20})])+row([R('Pr\u00e9nom : ',{sz:20}),R(u(34),{sz:20})])+
      row([R('Date : ',{sz:20}),R(u(11),{sz:20}),R('   D\u00e9but : ',{sz:20}),R(u(4)+' h '+u(3),{sz:20}),R('   Fin : ',{sz:20}),R(u(4)+' h '+u(3),{sz:20})]); }
  function infoLine(ent,dur){ ent=ent||{}; var a=[]; if(ent.matiere) a.push('Mati\u00e8re : '+ent.matiere); if(ent.coef) a.push('Coefficient : '+ent.coef); if(dur) a.push('Dur\u00e9e : '+fmtDur(dur)); if(ent.etab) a.push(ent.etab); if(ent.annee) a.push('Ann\u00e9e scolaire '+ent.annee); return a.join(' \u00b7 '); }
  function matUp(ent){ return ((ent&&ent.matiere)||'Math\u00e9matiques').toUpperCase(); }

  /* ---------- modules disponibles ---------- */
  /* durée habituelle de l’épreuve (minutes) : 1er cycle (5e, 4e, 3e) 2 h ; 6e 1 h 30 ; 2nde et 1ère C/D 3 h ; Tle C/D 4 h ; séries littéraires 1 h 30 avec 2 problèmes */
  var DUR={'6e':90,'5e':120,'4e':120,'3e':120,'2nde A':90,'2nde C':180,'2nde D':180,'1\u00e8re A':90,'1\u00e8re C':180,'1\u00e8re D':180,'Tle A':90,'Tle C':240,'Tle D':240};
  function defaultDur(c){ return DUR[c]||120; }
  /* nombre de consignes PAR PROBLÈME selon la durée : 1 consigne par problème toutes les 30 min (2 h : 4 ; 3 h : 6 ; 4 h : 8 ; 1 h 30 : 3) */
  /* nombre de problèmes : 3 partout, 2 dans les séries littéraires. Le nombre total de consignes reste d’environ une toutes les 10 min :
     3 problèmes → dur/30 consignes par problème ; 2 problèmes → 1,5 × dur/30 (1 h 30 : 2 × 5 = 10 consignes) */
  var NPROB={'2nde A':2,'1\u00e8re A':2,'Tle A':2};
  function nProb(c){ return NPROB[c]||3; }
  function perProb(dur,cls){ var np=nProb(cls); return Math.max(3,Math.min(8,Math.round(3*(+dur||120)/(30*np)))); }
  function durOfPer(per,cls){ return per*10*nProb(cls); }
  function sizing(dur,cls){ var np=nProb(cls), per=perProb(dur,cls), pp=Math.ceil(per/2), N=np*pp, need=Math.ceil(N/2); return {np:np,per:per,pp:pp,N:N,need:need,cap:Math.min(N,need+1),total:np*per}; }
  var ALIAS={'2nde C':'2nde D'}, ORDER=['6e','5e','4e','3e','2nde A','2nde D','2nde C','1\u00e8re D','1\u00e8re C','1\u00e8re A','Tle D','Tle C','Tle A'];
  function baseCls(c){ return ALIAS[c]||c; }
  function toBank(cls,t){ return ALIAS[cls]?t.replace(/^2C \u2014/,'2D \u2014'):t; }
  function fromBank(cls,t){ return ALIAS[cls]?t.replace(/^2D \u2014/,'2C \u2014'):t; }
  function modulesOf(cls){ var b=baseCls(cls); return Object.keys(MOD).filter(function(k){ return MOD[k].cls===b; }); }
  function modOfTheme(cls,theme){ var ks=modulesOf(cls), th=toBank(cls,theme); for(var i=0;i<ks.length;i++){ var m=MOD[ks[i]]; if(m.theme===th||(m.themes&&m.themes.indexOf(th)>=0)) return ks[i]; } return null; }
  function availableThemes(cls){ var out=[]; modulesOf(cls).forEach(function(k){ var m=MOD[k]; (m.themes||[m.theme]).forEach(function(t){ out.push({theme:fromBank(cls,t),mod:k,label:m.label}); }); }); return out; }
  function classes(){ var I=(G.MQ_INDEX&&G.MQ_INDEX.som)||{}; return ORDER.filter(function(c){ return modulesOf(c).length>0||!!I[baseCls(c)]; }); }

  /* ---------- répartition des points (règle de trois, au demi-point) ---------- */
  function alloc(counts,total){ var S=counts.reduce(function(a,b){ return a+b; },0), T=total*2; if(!S) return counts.map(function(){ return 0; });
    var raw=counts.map(function(c){ return c*T/S; }), fl=raw.map(Math.floor), rem=T-fl.reduce(function(a,b){ return a+b; },0),
        ord=raw.map(function(v,i){ return {i:i,f:v-Math.floor(v)}; }).sort(function(a,b){ return b.f-a.f||a.i-b.i; });
    for(var k=0;k<rem;k++) fl[ord[k].i]++; return fl.map(function(v){ return v/2; }); }

  /* ---------- construction de l'épreuve ---------- */
  function buildEpreuve(o){
    var cls=o.cls, seed=o.seed>>>0, rnd=mulberry32(seed), W=WORLDS[Math.floor(rnd()*WORLDS.length)], T=M.genTerrain(rnd);
    var order=availableThemes(cls).map(function(x){ return x.theme; }), tl=(o.themes||[]).slice().sort(function(a,b){ return order.indexOf(a)-order.indexOf(b); }); /* ordre canonique : ne d\u00e9pend pas de l\u2019ordre des clics */
    var keys=[]; tl.forEach(function(t){ var k=modOfTheme(cls,t); if(k&&keys.indexOf(k)<0) keys.push(k); });
    var dur=o.dur||defaultDur(cls), SZ=sizing(dur,cls), per=SZ.per, NP=SZ.np, pp=SZ.pp, N=SZ.N, need=SZ.need;
    keys=keys.slice(0,SZ.cap); var auto=[], pool=M.shuffle(rnd,modulesOf(cls).filter(function(k){ return keys.indexOf(k)<0; }));
    while(keys.length<need&&pool.length){ var k=pool.shift(); keys.push(k); auto.push(k); }
    // ordre : P1 = module le plus adapté à un support ; le reste mélangé
    var wk=keys.map(function(k){ return {k:k,w:MOD[k].w1+rnd()*1.2}; }).sort(function(a,b){ return b.w-a.w; }).map(function(x){ return x.k; });
    var ordered=wk.slice(0,1).concat(M.shuffle(rnd,wk.slice(1)));
    // parties retenues par module (chaque module offre 2 parties de 2 consignes)
    var S=ordered.length, take={}, units=[];
    if(S<=need){ var rem=N; ordered.forEach(function(k){ take[k]=Math.max(0,Math.min(2,rem)); rem-=take[k]; }); }
    else { ordered.forEach(function(k){ take[k]=1; }); var extra=N-S; ordered.forEach(function(k){ if(extra>0){ take[k]=2; extra--; } }); }
    ordered.forEach(function(k){ for(var pi=0;pi<take[k];pi++) units.push({k:k,pi:pi}); });
    var chunkOf=function(idx){ return Math.min(NP-1,Math.floor(idx/pp)); }, split={};
    ordered.forEach(function(k){ if(take[k]===2){ var i0=units.findIndex(function(u){ return u.k===k&&u.pi===0; }), i1=units.findIndex(function(u){ return u.k===k&&u.pi===1; }); split[k]=chunkOf(i0)!==chunkOf(i1); } });
    var fixMin=function(t){ return String(t).replace(/([\s(\[{;,]|^)-(?=\d)/g,'$1\u2212'); };
    var built={}; ordered.forEach(function(k,i){ if(!take[k]) return; built[k]=MOD[k].build({rnd:mulberry32(seed+977*(i+1)),W:W,T:T,standalone2:!!split[k]}); built[k].parts.forEach(function(pt){ if(pt.intro) pt.intro=fixMin(pt.intro); }); });
    var probs=[];
    for(var j=0;j<NP;j++){
      var remain=per, cps=[];
      units.slice(j*pp,(j+1)*pp).forEach(function(u){ var b=built[u.k], pt=b.parts[u.pi], cs=pt.cons.slice(0,Math.max(0,remain)); if(!cs.length) return; remain-=cs.length; cps.push({k:u.k,pi:u.pi,b:b,part:pt,cons:cs}); });
      if(!cps.length) continue;
      var mods=[]; cps.forEach(function(c){ if(mods.indexOf(c.k)<0) mods.push(c.k); });
      var allCons=[]; cps.forEach(function(c){ allCons=allCons.concat(c.cons); });
      if(mods.length>1){
        var LAB='ABCDEFGH', blocks=[]; cps.forEach(function(c){ var last=blocks[blocks.length-1]; if(last&&last.k===c.k) last.items.push(c); else blocks.push({k:c.k,items:[c]}); });
        var mp=blocks.map(function(bk,bi){ var sq=bk.items.map(function(c,ii){ return {intro:c.part.intro||'',table:c.part.table||null,fig:c.part.fig||((ii===0&&(c.pi===0||split[c.k]))?(c.b.fig||null):null)}; }).filter(function(q){ return q.intro||q.table||q.fig; }), cs=[]; bk.items.forEach(function(c){ cs=cs.concat(c.cons); });
          return {label:'Partie '+LAB[bi],seq:sq,intros:sq.map(function(q){ return q.intro; }).filter(Boolean),fig:sq.length?sq[0].fig:null,tables:sq.map(function(q){ return q.table; }).filter(Boolean),cons:cs}; });
        var flat=[]; mp.forEach(function(pt){ if(!pt.seq.length) flat.push({label:pt.label,intro:'',table:null,fig:null}); pt.seq.forEach(function(q,qi){ flat.push({label:qi===0?pt.label:'',intro:q.intro,table:q.table,fig:q.fig}); }); });
        probs.push({themes:mods.map(function(k){ return MOD[k].label; }),intros:[],figs:[],tables:[],cons:allCons,mixedParts:mp,seq:flat,gs:mods.map(function(k){ return built[k]._g; })});
      } else {
        var b=cps[0].b;
        probs.push({themes:[MOD[mods[0]].label],gs:[cps[0].b._g],intros:cps.map(function(c){ return c.part.intro; }).filter(Boolean),figs:[b.fig].filter(Boolean),tables:cps.map(function(c){ return c.part.table; }).filter(Boolean),cons:allCons,
          seq:cps.map(function(c){ return {intro:c.part.intro||'',table:c.part.table||null,fig:c.part.fig||(c.pi===0?(b.fig||null):null)}; }).filter(function(q){ return q.intro||q.table||q.fig; })});
      }
    }
    // numérotation
    var all=[]; probs.forEach(function(p,i){ p.cons.forEach(function(c,j){ c.id=(i+1)+'.'+(j+1); c.na=c.A.length; c.nm=c.M.length; c.no=c.O.length; all.push(c); }); });
    var pa=alloc(all.map(function(c){ return c.na; }),20), pm=alloc(all.map(function(c){ return c.nm; }),30), po=alloc(all.map(function(c){ return c.no; }),40);
    all.forEach(function(c,i){ c.pa=pa[i]; c.pm=pm[i]; c.po=po[i]; c.pt=pa[i]+pm[i]+po[i]; });
    probs.forEach(function(p){ p.pa=p.cons.reduce(function(s,c){ return s+c.pa; },0); p.pm=p.cons.reduce(function(s,c){ return s+c.pm; },0); p.po=p.cons.reduce(function(s,c){ return s+c.po; },0); p.pt=p.pa+p.pm+p.po; });
    var org=W.org, Org=org.charAt(0).toUpperCase()+org.slice(1);
    var E={cls:cls,seed:seed,world:W,terrain:T,auto:auto.map(function(k){ return MOD[k].label; }),mixed:probs.some(function(p){ return !!p.mixedParts; }),sz:SZ,
      support:{titre:W.titre,texte:Org+' souhaite '+W.projet+'. Pour mener à bien ce projet, il doit répondre à plusieurs préoccupations, présentées dans les '+partsWord(NP)+' problèmes ci-dessous. Les informations nécessaires au premier problème sont rassemblées dans le document 1.'},
      tache:'Tu es élève de '+cls+'. '+Org+' a besoin de ton aide : résous les '+partsWord(NP)+' problèmes suivants pour répondre à ses préoccupations.',
      problems:probs,all:all,tot:{A:20,M:30,O:40,P:10},dur:dur,ent:o.ent||{},calc:(o.calc===undefined||o.calc===null)?(cls!=='6e'&&cls!=='5e'):!!o.calc};
    return E;
  }

  /* ---------- figures : scène commune SVG / PNG ---------- */
  function triScene(f){
    var A=[350,50],B=[70,365],C=[630,365], navy='#1F3864', or='#E65C00', sh=[];
    sh.push({t:'poly',pts:[A,B,C],fill:'#F6F9FD'}); [[A,B],[B,C],[C,A]].forEach(function(s){ sh.push({t:'line',a:s[0],b:s[1],w:3.2,c:navy}); });
    sh.push({t:'text',s:'A',x:350,y:36,z:26,m:'middle'},{t:'text',s:'B',x:44,y:392,z:26,m:'middle'},{t:'text',s:'C',x:656,y:392,z:26,m:'middle'});
    var u=f.unit?' '+f.unit:'';
    if(f.a!=null) sh.push({t:'text',s:f.a+u,x:158,y:214,z:20,m:'middle'}); if(f.b!=null) sh.push({t:'text',s:f.b+u,x:545,y:214,z:20,m:'middle'}); if(f.c!=null) sh.push({t:'text',s:f.c+u,x:350,y:398,z:20,m:'middle'});
    if(f.angA) sh.push({t:'text',s:f.angA,x:350,y:112,z:18,m:'middle'});
    if(f.mn){ var k=f.mn.p/f.mn.q, Mp=[A[0]+k*(B[0]-A[0]),A[1]+k*(B[1]-A[1])], Np=[A[0]+k*(C[0]-A[0]),A[1]+k*(C[1]-A[1])];
      sh.push({t:'line',a:Mp,b:Np,w:4,c:or},{t:'dot',p:Mp,r:5,c:or},{t:'dot',p:Np,r:5,c:or},{t:'text',s:'M',x:Mp[0]-24,y:Mp[1]+8,z:24,m:'middle'},{t:'text',s:'N',x:Np[0]+24,y:Np[1]+8,z:24,m:'middle'},{t:'text',s:'AM = '+f.mn.AM+u,x:350,y:Mp[1]-30,z:18,m:'middle'}); }
    if(f.ij){ var I=[(A[0]+B[0])/2,(A[1]+B[1])/2], J=[(A[0]+C[0])/2,(A[1]+C[1])/2];
      sh.push({t:'line',a:I,b:J,w:4,c:or},{t:'dot',p:I,r:5,c:or},{t:'dot',p:J,r:5,c:or},{t:'text',s:'I',x:I[0]-22,y:I[1]+8,z:24,m:'middle'},{t:'text',s:'J',x:J[0]+22,y:J[1]+8,z:24,m:'middle'}); }
    return {w:700,h:420,shapes:sh};
  }
  function sceneSVG(sc){ var o='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+sc.w+' '+sc.h+'" width="100%" style="max-width:360px">';
    sc.shapes.forEach(function(s){ if(s.t==='poly') o+='<polygon points="'+s.pts.map(function(p){ return p.join(','); }).join(' ')+'" fill="'+s.fill+'"/>';
      else if(s.t==='line') o+='<line x1="'+s.a[0]+'" y1="'+s.a[1]+'" x2="'+s.b[0]+'" y2="'+s.b[1]+'" stroke="'+s.c+'" stroke-width="'+s.w+'" stroke-linecap="round"/>';
      else if(s.t==='dot') o+='<circle cx="'+s.p[0]+'" cy="'+s.p[1]+'" r="'+s.r+'" fill="'+s.c+'"/>';
      else if(s.t==='text') o+='<text x="'+s.x+'" y="'+s.y+'" font-family="Arial,Helvetica,sans-serif" font-size="'+(s.z*1.45)+'" font-weight="'+(s.z>22?'700':'400')+'" text-anchor="'+s.m+'" fill="#111">'+esc(s.s)+'</text>'; });
    return o+'</svg>'; }
  function hex(c){ return [parseInt(c.substr(1,2),16),parseInt(c.substr(3,2),16),parseInt(c.substr(5,2),16)]; }
  function sceneRaster(sc){ var R=new D.Raster(sc.w,sc.h); sc.shapes.forEach(function(s){ if(s.t==='poly') R.poly(s.pts,hex(s.fill)); });
    sc.shapes.forEach(function(s){ if(s.t==='line') R.line(s.a[0],s.a[1],s.b[0],s.b[1],s.w,hex(s.c)); else if(s.t==='dot') R.dot(s.p[0],s.p[1],s.r,hex(s.c)); else if(s.t==='text') R.text(s.s,s.x,s.y,s.z,[17,17,17],s.m==='middle'?'middle':'start'); });
    return R.toPNG(); }
  function repScene(f){ // repère orthonormé : points et segments
    var W=700,H=420,mx=44,my=34, xs=f.pts.map(function(p){ return p.x; }), ys=f.pts.map(function(p){ return p.y; }),
        x0=Math.min(0,Math.min.apply(null,xs))-1, x1=Math.max(0,Math.max.apply(null,xs))+1, y0=Math.min(0,Math.min.apply(null,ys))-1, y1=Math.max(0,Math.max.apply(null,ys))+1,
        asp=(W-2*mx)/(H-2*my);
    if((x1-x0)<asp*(y1-y0)){ var need=Math.ceil(asp*(y1-y0)), add=need-(x1-x0); x0-=Math.floor(add/2); x1+=Math.ceil(add/2); } else if((y1-y0)<(x1-x0)/asp){ var needy=Math.ceil((x1-x0)/asp), addy=needy-(y1-y0); y0-=Math.floor(addy/2); y1+=Math.ceil(addy/2); }
    var k=Math.min((W-2*mx)/(x1-x0),(H-2*my)/(y1-y0)), ox=(W-k*(x1-x0))/2, oy=(H-k*(y1-y0))/2,
        X=function(x){ return ox+(x-x0)*k; }, Y=function(y){ return H-(oy+(y-y0)*k); }, sh=[];
    for(var gx=Math.ceil(x0);gx<=Math.floor(x1);gx++) sh.push({t:'line',a:[X(gx),Y(y0)],b:[X(gx),Y(y1)],w:1,c:'#D5DCE8'});
    for(var gy=Math.ceil(y0);gy<=Math.floor(y1);gy++) sh.push({t:'line',a:[X(x0),Y(gy)],b:[X(x1),Y(gy)],w:1,c:'#D5DCE8'});
    sh.push({t:'line',a:[X(x0),Y(0)],b:[X(x1),Y(0)],w:2.4,c:'#333333'},{t:'line',a:[X(0),Y(y0)],b:[X(0),Y(y1)],w:2.4,c:'#333333'});
    for(var tx=Math.ceil(x0);tx<=Math.floor(x1);tx++) if(tx!==0&&(x1-x0<=14||tx%2===0)) sh.push({t:'text',s:String(tx),x:X(tx),y:Y(0)+20,z:11,m:'middle'});
    for(var ty=Math.ceil(y0);ty<=Math.floor(y1);ty++) if(ty!==0&&(y1-y0<=14||ty%2===0)) sh.push({t:'text',s:String(ty),x:X(0)-8,y:Y(ty)+5,z:11,m:'end'});
    sh.push({t:'text',s:'O',x:X(0)-10,y:Y(0)+18,z:12,m:'end'});
    (f.edges||[]).forEach(function(e){ var a=f.pts[e[0]], b=f.pts[e[1]]; sh.push({t:'line',a:[X(a.x),Y(a.y)],b:[X(b.x),Y(b.y)],w:3.2,c:'#1F3864'}); });
    f.pts.forEach(function(p){ sh.push({t:'dot',p:[X(p.x),Y(p.y)],r:5.5,c:'#E65C00'},{t:'text',s:p.n,x:X(p.x)+(p.dx||14),y:Y(p.y)+(p.dy||-12),z:20,m:'middle'}); });
    return {w:W,h:H,shapes:sh};
  }
  function sectScene(f){ // secteur circulaire d'angle f.deg
    var cx=350,cy=345,R=250, th=f.deg*Math.PI/180, sh=[], pts=[], n=64;
    for(var i=0;i<=n;i++){ var a=th*i/n; pts.push([cx+R*Math.cos(a),cy-R*Math.sin(a)]); }
    sh.push({t:'poly',pts:[[cx,cy]].concat(pts),fill:'#FFF3E6'});
    for(i=0;i<n;i++) sh.push({t:'line',a:pts[i],b:pts[i+1],w:4,c:'#E65C00'});
    sh.push({t:'line',a:[cx,cy],b:pts[0],w:3,c:'#1F3864'},{t:'line',a:[cx,cy],b:pts[n],w:3,c:'#1F3864'},{t:'dot',p:[cx,cy],r:5,c:'#1F3864'});
    sh.push({t:'text',s:'O',x:cx-20,y:cy+22,z:22,m:'middle'},{t:'text',s:'A',x:pts[0][0]+22,y:pts[0][1]+8,z:22,m:'middle'},{t:'text',s:'B',x:pts[n][0]+(f.deg>90?-22:22),y:pts[n][1]-8,z:22,m:'middle'});
    sh.push({t:'text',s:f.deg+'\u00b0',x:cx+Math.cos(th/2)*80,y:cy-Math.sin(th/2)*80+8,z:20,m:'middle'},{t:'text',s:'R = '+f.R+' m',x:cx+Math.cos(th/2)*(R*0.6),y:cy-Math.sin(th/2)*(R*0.6)-14,z:18,m:'middle'});
    return {w:700,h:420,shapes:sh};
  }
  function crossScene(f){ // deux droites sécantes en O, angle AOC = f.x
    var cx=350,cy=205,R=165,a0=200,x=f.x,navy='#1F3864',or='#E65C00',sh=[],P=function(deg,r){ var t=deg*Math.PI/180; return [cx+r*Math.cos(t),cy-r*Math.sin(t)]; };
    [['A',a0],['C',a0+x],['B',a0+180],['D',a0+x+180]].forEach(function(d){ var en=P(d[1],R), lb=P(d[1],R+30); sh.push({t:'line',a:[cx,cy],b:en,w:3.2,c:navy},{t:'text',s:d[0],x:lb[0],y:lb[1]+9,z:24,m:'middle'}); });
    sh.push({t:'dot',p:[cx,cy],r:5,c:navy},{t:'text',s:'O',x:cx+22,y:cy+32,z:22,m:'middle'});
    for(var g=a0;g<a0+x;g+=3) sh.push({t:'line',a:P(g,58),b:P(Math.min(g+3,a0+x),58),w:3.2,c:or});
    var lbl=P(a0+x/2,94); sh.push({t:'text',s:x+'\u00b0',x:lbl[0],y:lbl[1]+7,z:19,m:'middle'});
    return {w:700,h:420,shapes:sh};
  }
  function figScene(f){ return f?(f.type==='tri'?triScene(f):(f.type==='rep'?repScene(f):(f.type==='sect'?sectScene(f):(f.type==='cross'?crossScene(f):null)))):null; }

  /* ---------- HTML (impression / PDF) ---------- */
  function tableHTML(t){ return '<table class="sm-tab"><tr>'+t.head.map(function(h,i){ return '<th>'+vecH(esc(h))+'</th>'; }).join('')+'</tr>'+t.rows.map(function(r){ return '<tr>'+r.map(function(c,i){ return (i===0?'<th>':'<td>')+esc(c)+(i===0?'</th>':'</td>'); }).join('')+'</tr>'; }).join('')+'</table>'; }
  function line(w){ return '<span class="ev-line" style="width:'+w+'mm"></span>'; }
  function headHTML(E,ref,corr){
    return '<div class="ev-top"><b>MathChrono-Quiz</b><span>R\u00e9f. '+ref+'</span></div>'+
      '<div class="ev-title">DEVOIR SURVEILL\u00c9 DE '+esc(matUp(E.ent))+(corr?' \u2014 CORRIG\u00c9 ET BAR\u00c8ME':'')+'</div>'+
      '<div class="ev-sub">Classe de '+esc(E.ent&&E.ent.classe?E.ent.classe:E.cls)+' \u00b7 Dur\u00e9e : '+esc(fmtDur(E.dur))+' \u00b7 Calculatrice '+(E.calc?'autoris\u00e9e':'non autoris\u00e9e')+'</div>'+(corr&&infoLine(E.ent,E.dur)?'<div class="ev-sub" style="margin-top:-4px">'+esc(infoLine(E.ent,E.dur))+'</div>':'');
  }
  function sujetHTML(E,ref){
    var h='<div class="ev-doc sm-doc">'+headHTML(E,ref,false);
    h+='<table class="ev-head"><tr><td class="ev-id">'+idHTML(E.ent,E.dur)+'</td>'+
      '<td class="ev-teach"><div class="ev-th">R\u00e9serv\u00e9 \u00e0 l\u2019enseignant</div>'+
      '<table class="sm-note"><tr><td>Analyser (Ca)</td><td></td><td>/ 20</td></tr><tr><td>Math\u00e9matiser (Cm)</td><td></td><td>/ 30</td></tr><tr><td>Op\u00e9rer (Co)</td><td></td><td>/ 40</td></tr><tr><td>Perfectionnement (Cp)</td><td></td><td>/ 10</td></tr><tr><td><b>Total</b></td><td></td><td>/ 100</td></tr><tr><td><b>Note</b></td><td></td><td>/ 20</td></tr></table>'+
      '<div class="ev-lvl">Niveau de ma\u00eetrise :<br><span class="nw"><span class="ev-box"></span>Non atteint</span> &nbsp; <span class="nw"><span class="ev-box"></span>Partielle</span><br><span class="nw"><span class="ev-box"></span>Minimale</span> &nbsp; <span class="nw"><span class="ev-box"></span>Maximale</span></div>'+
      '<div>Appr\u00e9ciation :</div><div class="ev-ln"></div><div class="ev-ln"></div></td></tr></table>';
    h+='<div class="ev-cons"><b>Consignes :</b> r\u00e9dige tes r\u00e9ponses sur ta copie, en num\u00e9rotant chaque r\u00e9ponse comme dans le sujet. Justifie tes calculs et soigne la pr\u00e9sentation : elle est prise en compte dans la notation. Les '+partsWord(E.problems.length)+' probl\u00e8mes sont ind\u00e9pendants.</div>';
    var P1=E.problems[0], sc=figScene(P1.seq[0]&&P1.seq[0].fig);
    h+='<div class="sm-h2">SITUATION D\u2019\u00c9VALUATION : '+esc(E.support.titre.toUpperCase())+'</div>';
    h+='<p class="sm-p"><b>Support.</b> '+vecH(esc(E.support.texte))+'</p>';
    h+='<div class="sm-doc1"><div class="sm-doc1t">Document 1</div>'+(sc?'<div class="sm-fig">'+sceneSVG(sc)+'<div class="sm-cap">Figure \u00e0 main lev\u00e9e, non \u00e0 l\u2019\u00e9chelle.</div></div>':'')+P1.seq.map(function(q,qi){ var f2=(qi>0&&q.fig)?figScene(q.fig):null; return (q.intro?'<p class="sm-p">'+(q.label?'<b>'+esc(q.label)+'.</b> ':'')+vecH(esc(q.intro))+'</p>':'')+(f2?'<div class="sm-fig sm-fig2">'+sceneSVG(f2)+'<div class="sm-cap">Figure \u00e0 main lev\u00e9e, non \u00e0 l\u2019\u00e9chelle.</div></div>':'')+(q.table?tableHTML(q.table):''); }).join('')+'</div>';
    h+='<p class="sm-p"><b>T\u00e2che.</b> '+esc(E.tache)+'</p>';
    E.problems.forEach(function(p,i){
      h+='<div class="sm-pb"><div class="sm-h2">PROBL\u00c8ME '+(i+1)+'</div>';
      var consH=function(cs){ return cs.map(function(c){ return '<div class="sm-c"><b>'+c.id+'</b><span>'+vecH(esc(c.t))+'</span></div>'; }).join(''); };
      if(p.mixedParts&&i>0){ h+='<p class="sm-p"><i>Ce probl\u00e8me comporte '+partsWord(p.mixedParts.length)+' parties ind\u00e9pendantes.</i></p>'; p.mixedParts.forEach(function(pt){ h+='<div class="sm-part"><div class="sm-partt">'+pt.label+'</div>'+pt.seq.map(function(q,qi){ var s3=figScene(q.fig); return (q.intro?'<p class="sm-p">'+(qi===0?'<b>Compl\u00e9ment d\u2019information.</b> ':'')+vecH(esc(q.intro))+'</p>':'')+(s3?'<div class="sm-fig sm-fig2">'+sceneSVG(s3)+'<div class="sm-cap">Figure \u00e0 main lev\u00e9e, non \u00e0 l\u2019\u00e9chelle.</div></div>':'')+(q.table?tableHTML(q.table):''); }).join('')+consH(pt.cons)+'</div>'; }); }
      else {
      if(i>0){ h+=p.seq.map(function(q,qi){ var s2=figScene(q.fig); return (q.intro?'<p class="sm-p">'+(qi===0?'<b>Compl\u00e9ment d\u2019information.</b> ':'')+vecH(esc(q.intro))+'</p>':'')+(s2?'<div class="sm-fig sm-fig2">'+sceneSVG(s2)+'<div class="sm-cap">Figure \u00e0 main lev\u00e9e, non \u00e0 l\u2019\u00e9chelle.</div></div>':'')+(q.table?tableHTML(q.table):''); }).join(''); }
      else h+='<p class="sm-p"><i>Exploite les informations du document 1.</i></p>';
      if(p.mixedParts&&i===0) h+=p.mixedParts.map(function(pt){ return '<div class="sm-part"><div class="sm-partt">'+pt.label+'</div>'+consH(pt.cons)+'</div>'; }).join(''); else h+=consH(p.cons); }
      h+='</div>';
    });
    return h+'<div class="ev-foot">G\u00e9n\u00e9r\u00e9 par MathChrono-Quiz \u00b7 R\u00e9f. '+ref+'</div></div>';
  }
  function corrigeHTML(E,ref){
    var h='<div class="ev-doc sm-doc">'+headHTML(E,ref,true);
    h+='<div class="sm-h2">1. Structure de l\u2019\u00e9preuve</div><table class="sm-info"><tr><th>Format</th><td>'+esc(fmtTxt(E))+'</td></tr>'+
      '<tr><th>Situation</th><td>'+esc(E.support.titre)+'</td></tr><tr><th>Th\u00e8mes \u00e9valu\u00e9s</th><td>'+E.problems.map(function(p,i){ return 'Probl\u00e8me '+(i+1)+' : '+esc(p.themes.join(' + ')); }).join(' \u00b7 ')+(E.auto.length?'<br><i>Compl\u00e9t\u00e9 automatiquement avec : '+esc(E.auto.join(', '))+'.</i>':'')+'</td></tr></table>';
    h+='<div class="sm-h2">2. R\u00e9partition des points</div><p class="sm-p">Les points de chaque crit\u00e8re (Analyser 20, Math\u00e9matiser 30, Op\u00e9rer 40) sont r\u00e9partis, par la r\u00e8gle de trois, selon le nombre de d\u00e9marches attendues dans chaque consigne ; le perfectionnement vaut 10 points.</p>';
    h+='<table class="sm-bar"><tr><th>Probl\u00e8me</th><th>Analyser</th><th>Math\u00e9matiser</th><th>Op\u00e9rer</th><th>Total</th></tr>'+E.problems.map(function(p,i){ return '<tr><td>Probl\u00e8me '+(i+1)+'</td><td>'+pts(p.pa)+'</td><td>'+pts(p.pm)+'</td><td>'+pts(p.po)+'</td><td><b>'+pts(p.pt)+'</b></td></tr>'; }).join('')+
      '<tr class="sm-tot"><td>Total crit\u00e8res minimaux</td><td>20</td><td>30</td><td>40</td><td>90</td></tr><tr><td colspan="4">Perfectionnement (Cp) : concision 3 pts, propret\u00e9 4 pts, lisibilit\u00e9 3 pts</td><td>10</td></tr><tr class="sm-tot"><td colspan="4">TOTAL G\u00c9N\u00c9RAL</td><td>100</td></tr></table>';
    h+='<p class="sm-note2"><b>Note sur 20 = total sur 100 \u00f7 5.</b> Exemple : 74 points sur 100 donnent 14,8 sur 20.</p>';
    h+='<div class="sm-h2">3. Appr\u00e9ciation des niveaux de ma\u00eetrise</div><table class="sm-bar"><tr><th>Niveau</th><th>Ca</th><th>Cm</th><th>Co</th><th>Total (sur 90)</th></tr><tr><td>Aucune ma\u00eetrise</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>Ma\u00eetrise partielle</td><td>7</td><td>10</td><td>13</td><td>30</td></tr><tr><td>Ma\u00eetrise minimale</td><td>13</td><td>20</td><td>27</td><td>60</td></tr><tr><td>Ma\u00eetrise maximale</td><td>20</td><td>30</td><td>40</td><td>90</td></tr></table>';
    h+='<p class="sm-note2">R\u00e8gle des 3/4 appliqu\u00e9e au total x des crit\u00e8res minimaux (sur 90) : x &lt; 23 : niveau partiel non atteint \u00b7 23 \u2264 x &lt; 45 : ma\u00eetrise partielle \u00b7 45 \u2264 x &lt; 68 : ma\u00eetrise minimale \u00b7 68 \u2264 x \u2264 90 : ma\u00eetrise maximale.</p>';
    h+='<div class="ev-pb"></div><div class="sm-h2">4. Corrig\u00e9 d\u00e9taill\u00e9</div>';
    E.problems.forEach(function(p,i){
      h+='<div class="sm-h3">Probl\u00e8me '+(i+1)+' \u2014 '+esc(p.themes.join(' + '))+'</div>';
      p.cons.forEach(function(c){
        h+='<div class="sm-cc"><div class="sm-ct"><b>'+c.id+'</b> '+vecH(esc(c.t))+'</div><div class="sm-sol"><b>Solution.</b> '+vecH(esc(c.s))+'</div>'+
        '<table class="sm-dem"><tr><th>Crit\u00e8re</th><th>D\u00e9marches attendues</th><th>Pts</th></tr>'+
        [['Analyser',c.A,c.pa],['Math\u00e9matiser',c.M,c.pm],['Op\u00e9rer',c.O,c.po]].map(function(r){ return '<tr><th>'+r[0]+'</th><td>'+r[1].map(function(x){ return '\u2022 '+vecH(esc(x)); }).join('<br>')+'</td><td>'+pts(r[2])+'</td></tr>'; }).join('')+
        '<tr class="sm-tot"><td colspan="2">Total de la consigne '+c.id+'</td><td>'+pts(c.pt)+'</td></tr></table></div>'; });
    });
    h+='<div class="ev-pb"></div><div class="sm-h2">5. Fiche de notation \u00e0 remplir pour chaque \u00e9l\u00e8ve</div><table class="sm-bar sm-fiche"><tr><th>Consigne</th><th>Ca</th><th>Cm</th><th>Co</th><th>Total</th><th>Observations</th></tr>';
    E.problems.forEach(function(p,i){ p.cons.forEach(function(c){ h+='<tr><td><b>'+c.id+'</b></td><td>\u2026 / '+pts(c.pa)+'</td><td>\u2026 / '+pts(c.pm)+'</td><td>\u2026 / '+pts(c.po)+'</td><td>\u2026 / '+pts(c.pt)+'</td><td></td></tr>'; });
      h+='<tr class="sm-sub"><td><b>Probl\u00e8me '+(i+1)+'</b></td><td>\u2026 / '+pts(p.pa)+'</td><td>\u2026 / '+pts(p.pm)+'</td><td>\u2026 / '+pts(p.po)+'</td><td>\u2026 / '+pts(p.pt)+'</td><td></td></tr>'; });
    h+='<tr class="sm-sub"><td><b>Crit\u00e8res minimaux</b></td><td>\u2026 / 20</td><td>\u2026 / 30</td><td>\u2026 / 40</td><td>\u2026 / 90</td><td></td></tr><tr><td><b>Perfectionnement</b></td><td></td><td></td><td></td><td>\u2026 / 10</td><td>concision \u2026/3 \u00b7 propret\u00e9 \u2026/4 \u00b7 lisibilit\u00e9 \u2026/3</td></tr><tr class="sm-tot"><td><b>TOTAL</b></td><td></td><td></td><td></td><td>\u2026 / 100</td><td>Note : \u2026 / 20 \u00b7 Niveau : \u2610 non atteint \u2610 partiel \u2610 minimal \u2610 maximal</td></tr></table>';
    return h+'<div class="ev-foot">G\u00e9n\u00e9r\u00e9 par MathChrono-Quiz \u00b7 R\u00e9f. '+ref+'</div></div>';
  }
  var CSS='  .ev-fill{display:inline-block;border-bottom:1px solid #222;font-weight:700;padding:0 2mm;min-width:10mm}\n  .sm-h2{background:#1f3864;color:#fff;font-weight:700;font-size:10.5pt;padding:3px 8px;margin:10px 0 6px;break-after:avoid;page-break-after:avoid}\n  .sm-h3{color:#1f3864;font-weight:700;font-size:11pt;margin:10px 0 4px;border-bottom:1px solid #1f3864;break-after:avoid;page-break-after:avoid}\n  .sm-p{margin:4px 0 6px;text-align:justify;font-size:10.5pt}\n  .sm-doc1{border:1px solid #8896b0;padding:6px 10px;margin:6px 0;break-inside:avoid;page-break-inside:avoid}\n  .sm-doc1t{font-weight:700;color:#1f3864;font-size:10pt;text-transform:uppercase;margin-bottom:3px}\n  .sm-fig{text-align:center;margin:4px 0}.sm-fig svg{width:80mm;height:auto}.sm-fig2 svg{width:72mm}\n  .sm-cap{font-size:8pt;color:#555}\n  .sm-pb{break-inside:auto}\n  .sm-part{border-left:3px solid #e65c00;padding-left:8px;margin:6px 0 8px;break-inside:avoid;page-break-inside:avoid}.sm-partt{font-weight:700;color:#e65c00;font-size:10pt;margin-bottom:2px}\n  .sm-c{margin:3px 0 5px 0;padding-left:11mm;text-indent:-11mm;font-size:10.5pt;break-inside:avoid;page-break-inside:avoid}.sm-c b{display:inline-block;width:9mm;text-indent:0}.sm-c span{display:inline}\n  table.sm-tab{border-collapse:collapse;margin:5px auto;font-size:10pt}table.sm-tab th,table.sm-tab td{border:1px solid #444;padding:3px 9px;text-align:center}table.sm-tab th{background:#eef2f8}\n  table.sm-note{border-collapse:collapse;width:100%;margin:3px 0}table.sm-note td{border:1px solid #999;padding:2px 5px;font-size:9pt}table.sm-note td:nth-child(2){width:15mm}table.sm-note td:nth-child(3){width:13mm;text-align:center}\n  table.sm-info,table.sm-bar,table.sm-dem{border-collapse:collapse;width:100%;margin:4px 0;font-size:9.5pt}table.sm-info th,table.sm-info td,table.sm-bar th,table.sm-bar td,table.sm-dem th,table.sm-dem td{border:1px solid #8896b0;padding:3px 6px;vertical-align:top;text-align:left}\n  table.sm-bar th,table.sm-dem tr:first-child th{background:#1f3864;color:#fff}table.sm-info th,table.sm-dem tr th{background:#eef2f8;width:28mm}table.sm-dem tr:first-child th:nth-child(3){width:12mm}table.sm-dem td:last-child{width:12mm;text-align:center}table.sm-bar td:not(:first-child){text-align:center}\n  tr.sm-tot td{background:#dce6f5;font-weight:700}tr.sm-sub td{background:#eef2f8}table.sm-fiche td{padding:6px 6px;white-space:nowrap}table.sm-fiche td:last-child{white-space:normal}.sm-h2+.sm-p{break-before:avoid;page-break-before:avoid}\n  .sm-cc{margin:0 0 9px;break-inside:avoid;page-break-inside:avoid}.sm-ct{font-weight:700;color:#1f3864;font-size:10pt;margin-bottom:2px}.sm-sol{color:#1b5e20;font-size:9.5pt;margin:0 0 3px 4mm}.sm-note2{font-size:8.5pt;color:#555;margin:2px 0 6px}\n';

  /* ---------- Word ---------- */
  var P=D.para, R=D.run, UW=10206;
  function F(t,o){ return D.rich(t,o); }
  function banner(t){ return P(R(t,{b:true,color:'FFFFFF',sz:21}),{shade:'1F3864',before:200,after:100,keepNext:true,ind:{left:60}}); }
  function h3(t){ return P(R(t,{b:true,color:'1F3864',sz:22}),{before:200,after:80,keepNext:true,border:{bottom:{sz:6,color:'1F3864',space:2}}}); }
  function wTable(t){ var n=t.head.length, w0=2600, w=Math.floor((UW-w0)/ (n-1)), widths=[w0].concat(t.head.slice(1).map(function(){ return w; }));
    var rows=[{header:true,cells:t.head.map(function(h,i){ return D.cell(P(R(h,{b:true,color:'FFFFFF',sz:19}),{align:i?'center':'left'}),{w:widths[i],shade:'1F3864'}); })}].concat(t.rows.map(function(r){ return {cantSplit:true,cells:r.map(function(c,i){ return D.cell(P(R(c,{b:i===0,sz:19}),{align:i?'center':'left'}),{w:widths[i],shade:i===0?'EEF2F8':null}); })}; }));
    return D.table(rows,widths,{center:false}); }
  function underline(label,pos,more){ return {label:label,pos:pos}; }
  function idRow(parts){ var tabs=[],cont=[]; parts.forEach(function(p){ cont.push(R(p.label,{sz:20})); cont.push(D.tab()); tabs.push({type:'right',leader:'underscore',pos:p.pos}); }); return P(cont,{tabs:tabs,before:80,after:40}); }
  function critLine(label,max){ return P([R(label,{sz:18}),D.tab(),R(' / '+max,{sz:18})],{tabs:[{type:'right',leader:'underscore',pos:2250}],before:30,after:30}); }
  function wHead(E,ref,corr){
    var o=[]; o.push(P(R('DEVOIR SURVEILL\u00c9 DE '+matUp(E.ent)+(corr?' \u2014 CORRIG\u00c9 ET BAR\u00c8ME':''),{b:true,color:'1F3864',sz:30}),{align:'center',after:20}));
    o.push(P(R('Classe de '+(E.ent&&E.ent.classe?E.ent.classe:E.cls)+' \u00b7 Dur\u00e9e : '+fmtDur(E.dur)+' \u00b7 Calculatrice '+(E.calc?'autoris\u00e9e':'non autoris\u00e9e'),{color:'5A6675',sz:19}),{align:'center',after:corr&&infoLine(E.ent,E.dur)?20:120}));
    if(corr&&infoLine(E.ent,E.dur)) o.push(P(R(infoLine(E.ent,E.dur),{color:'5A6675',sz:17}),{align:'center',after:120})); return o.join(''); }
  function sujetDocx(E,ref){
    var imgs=[], body=wHead(E,ref,false), left=idWord(E.ent,E.dur);
    var right=P(R('R\u00c9SERV\u00c9 \u00c0 L\u2019ENSEIGNANT',{b:true,color:'1F3864',sz:17}),{after:40})+critLine('Analyser (Ca)',20)+critLine('Math\u00e9matiser (Cm)',30)+critLine('Op\u00e9rer (Co)',40)+critLine('Perfectionnement (Cp)',10)+critLine('Total',100)+critLine('Note',20)+
      P([R('Niveau : \u2610 Non atteint  \u2610 Partielle',{sz:17})],{before:60})+P([R('\u2610 Minimale  \u2610 Maximale',{sz:17})],{})+P([R('Appr\u00e9ciation : ',{sz:18}),D.tab()],{tabs:[{type:'right',leader:'underscore',pos:3450}],before:80,after:40})+P([D.tab()],{tabs:[{type:'right',leader:'underscore',pos:3450}],before:120});
    var bd={sz:6,color:'444444'};
    body+=D.table([[D.cell(left,{w:6200,borders:{top:bd,left:bd,bottom:bd,right:bd}}),D.cell(right,{w:UW-6200,shade:'F4F6FA',borders:{top:bd,left:bd,bottom:bd,right:bd}})]],[6200,UW-6200],{borders:false,padV:50,padH:110});
    body+=P([R('Consignes : ',{b:true,sz:18}),R('r\u00e9dige tes r\u00e9ponses sur ta copie, en num\u00e9rotant chaque r\u00e9ponse comme dans le sujet. Justifie tes calculs et soigne la pr\u00e9sentation : elle est prise en compte dans la notation. Les '+partsWord(E.problems.length)+' probl\u00e8mes sont ind\u00e9pendants.',{sz:18})],{shade:'FFF6EE',border:{left:{sz:18,color:'E65C00',space:4}},before:140,after:80,ind:{left:100}});
    body+=banner('SITUATION D\u2019\u00c9VALUATION : '+E.support.titre.toUpperCase());
    body+=P([R('Support. ',{b:true}),F(E.support.texte)],{align:'both',after:80});
    var fid=2, P1=E.problems[0], sc=figScene(P1.seq[0]&&P1.seq[0].fig), docCell=P(R('DOCUMENT 1',{b:true,color:'1F3864',sz:18}),{after:60});
    if(P1.seq[0]&&P1.seq[0].intro) docCell+=P((P1.seq[0].label?[R(P1.seq[0].label+'. ',{b:true}),F(P1.seq[0].intro)]:F(P1.seq[0].intro)),{align:'both',after:60});
    var rows1;
    if(sc){ imgs.push({rid:'rIdFig1',scene:sc}); var figP=P([D.image('rIdFig1',7.2,4.32,1,'Figure du document 1')],{align:'center'})+P(R('Figure \u00e0 main lev\u00e9e, non \u00e0 l\u2019\u00e9chelle.',{i:true,sz:15,color:'5A6675'}),{align:'center'});
      rows1=[[D.cell(figP,{w:4700,valign:'center'}),D.cell(docCell,{w:UW-4700,valign:'center'})]]; body+=D.table(rows1,[4700,UW-4700],{padV:80,padH:120}); }
    else body+=D.table([[D.cell(docCell,{w:UW})]],[UW],{padV:80,padH:120});
    P1.seq.forEach(function(q,qi){ if(qi>0&&q.intro) body+=P((q.label?[R(q.label+'. ',{b:true}),F(q.intro)]:F(q.intro)),{align:'both',before:80,after:60,keepNext:!!q.fig}); if(qi>0&&q.fig){ var sx=figScene(q.fig); if(sx){ var rid1='rIdFig'+fid; imgs.push({rid:rid1,scene:sx}); body+=P([D.image(rid1,6.8,4.08,fid,'Figure du document 1')],{align:'center',keepNext:true})+P(R('Figure \u00e0 main lev\u00e9e, non \u00e0 l\u2019\u00e9chelle.',{i:true,sz:15,color:'5A6675'}),{align:'center'}); fid++; } } if(q.table) body+=P('',{after:60})+wTable(q.table)+P('',{after:60}); });
    body+=P([R('T\u00e2che. ',{b:true}),R(E.tache)],{align:'both',before:120,after:80});
    E.problems.forEach(function(p,i){
      body+=banner('PROBL\u00c8ME '+(i+1));
      var consW=function(cs){ return cs.map(function(c){ return P([R(c.id,{b:true}),D.tab(),F(c.t)],{ind:{left:640,hanging:640},tabs:[{type:'left',pos:640}],after:100,keepLines:true}); }).join(''); };
      var figW=function(f){ var s2=figScene(f); if(!s2) return ''; var rid='rIdFig'+fid; imgs.push({rid:rid,scene:s2}); var x=P([D.image(rid,6.8,4.08,fid,'Figure du probl\u00e8me '+(i+1))],{align:'center',keepNext:true})+P(R('Figure \u00e0 main lev\u00e9e, non \u00e0 l\u2019\u00e9chelle.',{i:true,sz:15,color:'5A6675'}),{align:'center'}); fid++; return x; };
      if(p.mixedParts&&i>0){ body+=P(R('Ce probl\u00e8me comporte '+partsWord(p.mixedParts.length)+' parties ind\u00e9pendantes.',{i:true}),{after:80,keepNext:true}); p.mixedParts.forEach(function(pt){ body+=P(R(pt.label,{b:true,color:'E65C00',sz:21}),{before:80,after:40,keepNext:true,border:{left:{sz:18,color:'E65C00',space:4}},ind:{left:100}}); pt.seq.forEach(function(q,qi){ if(q.intro) body+=P((qi===0?[R('Compl\u00e9ment d\u2019information. ',{b:true}),F(q.intro)]:[F(q.intro)]),{align:'both',after:80,keepNext:true}); body+=figW(q.fig); if(q.table) body+=wTable(q.table)+P('',{after:60}); }); body+=consW(pt.cons); }); }
      else {
      if(i>0){ p.seq.forEach(function(q,qi){ if(q.intro) body+=P((qi===0?[R('Compl\u00e9ment d\u2019information. ',{b:true}),F(q.intro)]:[F(q.intro)]),{align:'both',after:80,before:qi?60:0,keepNext:(qi===0||!!q.table||!!q.fig)}); body+=figW(q.fig); if(q.table) body+=wTable(q.table)+P('',{after:60}); }); }
      else body+=P(R('Exploite les informations du document 1.',{i:true}),{after:80});
      if(p.mixedParts&&i===0) p.mixedParts.forEach(function(pt){ body+=P(R(pt.label,{b:true,color:'E65C00',sz:21}),{before:80,after:40,keepNext:true,border:{left:{sz:18,color:'E65C00',space:4}},ind:{left:100}})+consW(pt.cons); }); else body+=consW(p.cons); }
    });
    return {body:body,images:imgs,footer:'MathChrono-Quiz \u00b7 Devoir surveill\u00e9 de math\u00e9matiques \u00b7 Classe de '+E.cls+' \u00b7 R\u00e9f. '+ref,headerL:'MathChrono-Quiz',headerR:'R\u00e9f. '+ref,title:'Devoir surveill\u00e9 de math\u00e9matiques \u2014 '+E.cls};
  }
  function infoRow(k,v){ return {cantSplit:true,cells:[D.cell(P(R(k,{b:true,sz:18})),{w:2200,shade:'EEF2F8'}),D.cell(P(F(v,{sz:18}),{align:'both'}),{w:UW-2200})]}; }
  function barTable(head,rows,widths,totRows){ var rr=[{header:true,cells:head.map(function(h,i){ return D.cell(P(R(h,{b:true,color:'FFFFFF',sz:18}),{align:i?'center':'left'}),{w:widths[i],shade:'1F3864'}); })}].concat(rows.map(function(r,ri){ var tot=totRows&&totRows.indexOf(ri)>=0; return {cantSplit:true,cells:r.map(function(c,i){ return D.cell(P(R(c,{b:tot||i===0&&false,sz:18}),{align:i?'center':'left'}),{w:widths[i],shade:tot?'DCE6F5':null}); })}; })); return D.table(rr,widths); }
  function corrigeDocx(E,ref){
    var body=wHead(E,ref,true);
    body+=banner('1. Structure de l\u2019\u00e9preuve')+D.table([infoRow('Format',fmtTxt(E)),infoRow('Situation',E.support.titre),infoRow('Th\u00e8mes \u00e9valu\u00e9s',E.problems.map(function(p,i){ return 'Probl\u00e8me '+(i+1)+' : '+p.themes.join(' + '); }).join(' \u00b7 ')+(E.auto.length?' (compl\u00e9t\u00e9 automatiquement avec : '+E.auto.join(', ')+')':''))],[2200,UW-2200]);
    body+=banner('2. R\u00e9partition des points')+P(R('Les points de chaque crit\u00e8re (Analyser 20, Math\u00e9matiser 30, Op\u00e9rer 40) sont r\u00e9partis, par la r\u00e8gle de trois, selon le nombre de d\u00e9marches attendues dans chaque consigne ; le perfectionnement vaut 10 points.',{sz:19}),{align:'both',after:80});
    var rowsB=E.problems.map(function(p,i){ return ['Probl\u00e8me '+(i+1),pts(p.pa),pts(p.pm),pts(p.po),pts(p.pt)]; }); rowsB.push(['Total crit\u00e8res minimaux','20','30','40','90']); rowsB.push(['Perfectionnement (concision 3, propret\u00e9 4, lisibilit\u00e9 3)','','','','10']); rowsB.push(['TOTAL G\u00c9N\u00c9RAL','','','','100']);
    body+=barTable(['Probl\u00e8me','Analyser','Math\u00e9matiser','Op\u00e9rer','Total'],rowsB,[3800,1600,1800,1500,1506],[3,5])+P(R('Note sur 20 = total sur 100 \u00f7 5. Exemple : 74 points sur 100 donnent 14,8 sur 20.',{b:true,sz:17,color:'5A6675'}),{before:60,after:80});
    body+=banner('3. Appr\u00e9ciation des niveaux de ma\u00eetrise')+barTable(['Niveau','Ca','Cm','Co','Total (sur 90)'],[['Aucune ma\u00eetrise','0','0','0','0'],['Ma\u00eetrise partielle','7','10','13','30'],['Ma\u00eetrise minimale','13','20','27','60'],['Ma\u00eetrise maximale','20','30','40','90']],[3800,1400,1400,1400,2206])+
      P(R('R\u00e8gle des 3/4 appliqu\u00e9e au total x des crit\u00e8res minimaux (sur 90) : x < 23 : niveau partiel non atteint \u00b7 23 \u2264 x < 45 : ma\u00eetrise partielle \u00b7 45 \u2264 x < 68 : ma\u00eetrise minimale \u00b7 68 \u2264 x \u2264 90 : ma\u00eetrise maximale.',{sz:16,color:'5A6675'}),{before:60,after:80});
    body+=P(R('4. Corrig\u00e9 d\u00e9taill\u00e9',{b:true,color:'FFFFFF',sz:21}),{shade:'1F3864',before:200,after:100,pageBreakBefore:true,keepNext:true,ind:{left:60}});
    E.problems.forEach(function(p,i){
      body+=h3('Probl\u00e8me '+(i+1)+' \u2014 '+p.themes.join(' + '));
      p.cons.forEach(function(c){
        body+=P([R(c.id+'  ',{b:true,color:'1F3864',sz:20}),F(c.t,{b:true,color:'1F3864',sz:20})],{keepNext:true,before:140,after:40});
        body+=P([R('Solution. ',{b:true,color:'1B5E20',sz:19}),F(c.s,{color:'1B5E20',sz:19})],{keepNext:true,ind:{left:200},after:60,align:'both'});
        var hd=[D.cell(P(R('Crit\u00e8re',{b:true,color:'FFFFFF',sz:17}),{keepNext:true}),{w:1700,shade:'1F3864'}),D.cell(P(R('D\u00e9marches attendues',{b:true,color:'FFFFFF',sz:17}),{keepNext:true}),{w:UW-1700-900,shade:'1F3864'}),D.cell(P(R('Pts',{b:true,color:'FFFFFF',sz:17}),{align:'center',keepNext:true}),{w:900,shade:'1F3864'})];
        var rr=[{header:true,cells:hd}]; [['Analyser',c.A,c.pa],['Math\u00e9matiser',c.M,c.pm],['Op\u00e9rer',c.O,c.po]].forEach(function(r){ rr.push({cantSplit:true,cells:[D.cell(P(R(r[0],{b:true,sz:17}),{keepNext:true}),{w:1700,shade:'EEF2F8'}),D.cell(r[1].map(function(x){ return P([R('\u2022 ',{sz:17}),F(x,{sz:17})],{ind:{left:200,hanging:200},keepNext:true}); }).join(''),{w:UW-1700-900}),D.cell(P(R(pts(r[2]),{b:true,sz:17}),{align:'center',keepNext:true}),{w:900,valign:'center'})]}); });
        rr.push({cantSplit:true,cells:[D.cell(P(R('Total de la consigne '+c.id,{b:true,sz:17})),{w:UW-900,span:2,shade:'DCE6F5'}),D.cell(P(R(pts(c.pt),{b:true,sz:17}),{align:'center'}),{w:900,shade:'DCE6F5'})]});
        body+=D.table(rr,[1700,UW-1700-900,900],{padV:30,padH:80})+P('',{after:60}); });
    });
    body+=P(R('5. Fiche de notation \u00e0 remplir pour chaque \u00e9l\u00e8ve',{b:true,color:'FFFFFF',sz:21}),{shade:'1F3864',before:200,after:100,pageBreakBefore:true,keepNext:true,ind:{left:60}});
    var fr=[],tt=[],idx=0; E.problems.forEach(function(p,i){ p.cons.forEach(function(c){ fr.push([c.id,'\u2026 / '+pts(c.pa),'\u2026 / '+pts(c.pm),'\u2026 / '+pts(c.po),'\u2026 / '+pts(c.pt),'']); idx++; }); fr.push(['Probl\u00e8me '+(i+1),'\u2026 / '+pts(p.pa),'\u2026 / '+pts(p.pm),'\u2026 / '+pts(p.po),'\u2026 / '+pts(p.pt),'']); tt.push(fr.length-1); idx++; });
    fr.push(['Crit\u00e8res minimaux','\u2026 / 20','\u2026 / 30','\u2026 / 40','\u2026 / 90','']); tt.push(fr.length-1); fr.push(['Perfectionnement','','','','\u2026 / 10','concision \u2026/3 \u00b7 propret\u00e9 \u2026/4 \u00b7 lisibilit\u00e9 \u2026/3']); fr.push(['TOTAL','','','','\u2026 / 100','Note : \u2026 / 20']); tt.push(fr.length-1);
    body+=barTable(['Consigne','Ca','Cm','Co','Total','Observations'],fr,[2100,1300,1300,1300,1300,2906],tt);
    return {body:body,images:[],footer:'MathChrono-Quiz \u00b7 Corrig\u00e9 et bar\u00e8me \u00b7 Classe de '+E.cls+' \u00b7 R\u00e9f. '+ref,headerL:'MathChrono-Quiz',headerR:'R\u00e9f. '+ref,title:'Corrig\u00e9 et bar\u00e8me \u2014 '+E.cls};
  }
  function toDocx(spec){ // r\u00e9sout les images (PNG) puis assemble
    return Promise.all((spec.images||[]).map(function(im){ return sceneRaster(im.scene).then(function(png){ return {rid:im.rid,data:png}; }); })).then(function(imgs){ return D.build({title:spec.title,body:spec.body,images:imgs,footer:spec.footer,headerL:spec.headerL,headerR:spec.headerR}); }); }

  G.MQ_SOM={baseCls:baseCls,perProb:perProb,sizing:sizing,nProb:nProb,durOfPer:durOfPer,defaultDur:defaultDur,classes:classes,idHTML:idHTML,idWord:idWord,infoLine:infoLine,matUp:matUp,fmtDur:fmtDur,buildEpreuve:buildEpreuve,availableThemes:availableThemes,modulesOf:modulesOf,sujetHTML:sujetHTML,corrigeHTML:corrigeHTML,sujetDocx:function(E,ref){ return toDocx(sujetDocx(E,ref)); },corrigeDocx:function(E,ref){ return toDocx(corrigeDocx(E,ref)); },CSS:CSS,alloc:alloc,pts:pts,sceneSVG:sceneSVG,figScene:figScene};
})(typeof globalThis!=='undefined'?globalThis:this);


