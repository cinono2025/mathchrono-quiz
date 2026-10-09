/* ===== MQ_SOM : modules de problèmes sommatifs — 1ère D et 1ère C (suite : trigonométrie, cercle, statistique, espace) ===== */
(function(G){
  'use strict';
  var M=G.MQ_SOM_MOD, MOD=M.MOD, fmt=M.fmt, ri=M.ri, pick=M.pick, gcd=M.gcd, H=M.helpers14, par=H.par, eqSym=H.eqSym;
  function fixMinus(t){ return String(t).replace(/([\s(\[{;,]|^)-(?=\d)/g,'$1\u2212'); }
  function K(t,s,A,Mm,O){ return M.K(fixMinus(t),fixMinus(s),A.map(fixMinus),Mm.map(fixMinus),O.map(fixMinus)); }
  var MN='\u2212';
  var SUB='₀₁₂₃₄₅₆₇₈₉';
  function sub(n){ return String(n).replace(/\d/g,function(d){ return SUB[d]; }); }
  function term(k,v,first){ if(!k) return ''; var ab=Math.abs(k), b=v?((ab===1?'':fmt(ab,0))+v):fmt(ab,0); return first?((k<0?MN:'')+b):((k<0?' '+MN+' ':' + ')+b); }
  function lineStr(a,b,c){ return term(a,'x',true)+term(b,'y',!a)+term(c,'',!a&&!b)+' = 0'; }
  function planeStr(a,b,c,d){ return term(a,'x',true)+term(b,'y',!a)+term(c,'z',!a&&!b)+term(d,'',false)+' = 0'; }

  /* ================= Trigonométrie ================= */
  function angStr(k){ if(k===0) return '0'; var s=k<0?MN:'', a=Math.abs(k), g=gcd(a,12), n=a/g, d=12/g; return s+(n===1?'':String(n))+'π'+(d===1?'':'/'+d); }
  var COSX={0:'1',2:'√3/2',3:'√2/2',4:'1/2',6:'0',8:MN+'1/2',9:MN+'√2/2',10:MN+'√3/2',12:MN+'1'}, SINX={0:'0',2:'1/2',3:'√2/2',4:'√3/2',6:'1',8:'√3/2',9:'√2/2',10:'1/2',12:'0'};
  function cosK(k){ return COSX[Math.abs(k)]; }
  function sinK(k){ var s=SINX[Math.abs(k)]; if(k<0&&s!=='0') return MN+s; return s; }
  var LTG={jardin:'La roue d’une pompe d’irrigation du jardin tourne autour de son axe.',sport:'Un athlète court sur une piste circulaire.',coop:'L’aiguille de la balance de la boutique tourne autour de son axe.'};
  function gTG(x){
    var r=x.rnd, d=pick(r,[3,4,6]), m, ka, kp, it; for(it=0;it<300;it++){ m=ri(r,-45,45); if(Math.abs(m)<7||gcd(Math.abs(m),d)!==1) continue; ka=m*(12/d); kp=(((ka+11)%24)+24)%24-11; if(kp===0||kp===12) continue; break; }
    var T=(ka-kp)/24, num=m-2*T*d, p1s=angStr(kp), as=(m<0?MN:'')+(Math.abs(m)===1?'':Math.abs(m))+'π/'+d;
    var k0c=pick(r,[2,3,4,8,9,10]), cs=COSX[k0c], s2=pick(r,[2,3,4,-2,-3,-4]), ss=sinK(s2), th=angStr(s2);
    var intro=LTG[x.W.id]+' On repère sa position par un angle orienté de mesure a = '+as+' radians.';
    var p1=[K('Détermine la mesure principale de l’angle a (c’est-à-dire sa mesure appartenant à l’intervalle ]'+MN+'π ; π]).',
      'On cherche un entier t tel que a '+MN+' 2tπ ∈ ]'+MN+'π ; π]. Avec t = '+T+' : a '+MN+' 2tπ = '+(m<0?MN:'')+Math.abs(m)+'π/'+d+' '+MN+' 2 × '+par(T,0)+'π = ('+fmt(m,0)+' '+MN+' 2 × '+par(T,0)+' × '+d+')π/'+d+' = '+fmt(num,0)+'π/'+d+' = '+p1s+'. Comme '+p1s+' ∈ ]'+MN+'π ; π], la mesure principale de a est '+p1s+'.',
      ['Identifier qu’on cherche la mesure à 2π près dans ]−π ; π].','Identifier la méthode : retrancher un multiple entier de 2π.'],
      ['Écrire a − 2tπ avec un entier t à déterminer.','Mettre les fractions sur le même dénominateur.'],
      ['Déterminer l’entier t : '+T+'.','Calculer '+fmt(m,0)+' '+MN+' 2 × '+par(T,0)+' × '+d+' = '+fmt(num,0)+'.','Simplifier : '+p1s+'.']),
     K('Déduis-en les valeurs exactes de cos a et de sin a.',
      'Les angles a et '+p1s+' ont les mêmes cosinus et sinus (ils diffèrent d’un multiple de 2π). cos a = cos('+p1s+') = '+cosK(kp)+' et sin a = sin('+p1s+') = '+sinK(kp)+(kp<0?' (car sin(−θ) = −sin θ et cos(−θ) = cos θ)':'')+'.',
      ['Identifier qu’on peut remplacer a par sa mesure principale.','Identifier les valeurs usuelles du cosinus et du sinus.'],
      ['Écrire cos a = cos(mesure principale) et sin a = sin(mesure principale).'],
      ['Lire cos('+p1s+') = '+cosK(kp)+'.','Lire sin('+p1s+') = '+sinK(kp)+'.'])];
    var i2='Pour déterminer d’autres positions de ce mobile, on résout des équations trigonométriques.';
    var xs1=[-k0c,k0c].sort(function(a,b){ return a-b; }), s2sol=[]; for(var kk=0;kk<24;kk++){ var vv=Math.sin(kk*Math.PI/12); if(Math.abs(vv-Math.sin(s2*Math.PI/12))<1e-9&&[0,2,3,4,6,8,9,10,12,14,15,16,18,20,21,22].indexOf(kk)>=0) s2sol.push(kk); }
    var p2=[K('Résous dans ]'+MN+'π ; π] l’équation cos x = '+cs+'.',
      'On a cos('+angStr(k0c)+') = '+cs+'. L’équation cos x = '+cs+' s’écrit cos x = cos('+angStr(k0c)+'), donc x = '+angStr(k0c)+' + 2kπ ou x = '+MN+angStr(k0c)+' + 2kπ (k entier). Dans ]'+MN+'π ; π], on ne retient que k = 0 : S = {'+MN+angStr(k0c)+' ; '+angStr(k0c)+'}.',
      ['Identifier la valeur usuelle : cos('+angStr(k0c)+') = '+cs+'.','Identifier les deux familles de solutions de cos x = cos α.'],
      ['Écrire l’équation sous la forme cos x = cos α.','Écrire x = α + 2kπ ou x = −α + 2kπ.'],
      ['Donner les solutions générales.','Sélectionner celles qui appartiennent à ]−π ; π].','Écrire l’ensemble des solutions.']),
     K('Résous dans [0 ; 2π[ l’équation sin x = '+ss+'.',
      'On a sin('+th+') = '+ss+'. L’équation s’écrit sin x = sin('+th+'), donc x = '+th+' + 2kπ ou x = π '+MN+' ('+th+') + 2kπ (k entier). Dans [0 ; 2π[, on obtient x = '+angStr(s2sol[0])+' ou x = '+angStr(s2sol[1])+' : S = {'+angStr(s2sol[0])+' ; '+angStr(s2sol[1])+'}.',
      ['Identifier la valeur usuelle : sin('+th+') = '+ss+'.','Identifier les deux familles de solutions de sin x = sin α.'],
      ['Écrire l’équation sous la forme sin x = sin α.','Écrire x = α + 2kπ ou x = π − α + 2kπ.'],
      ['Donner les solutions générales.','Ajouter 2π si nécessaire pour être dans [0 ; 2π[.','Écrire l’ensemble des solutions.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{d:d,m:m,kp:kp,k0c:k0c,s2:s2,s2sol:s2sol}}; }

  /* ================= Cercle et barycentre ================= */
  function gCB(x){
    var r=x.rnd, a, b; do{ a=ri(r,-3,3); b=ri(r,-3,3); }while(a===0||b===0); var t=pick(r,[[3,4,5],[4,3,5],[-3,4,5],[3,-4,5],[5,0,5],[0,5,5],[6,8,10],[8,6,10]]), u=t[0], v=t[1], R=t[2], s=a*a+b*b-R*R, xt=a+u, yt=b+v;
    var circ='x² + y²'+term(-2*a,'x',false)+term(-2*b,'y',false)+term(s,'',false)+' = 0', tang=lineStr(u,v,-(u*xt+v*yt));
    var LCB={jardin:'Le bassin du jardin est délimité',sport:'Le rond central du terrain est délimité',coop:'Le bassin décoratif de la cour de la coopérative est délimité'};
    var intro='Le plan est muni d’un repère orthonormé (unité : 1 m). '+LCB[x.W.id]+' par la courbe (C) d’équation '+circ+'.';
    var p1=[K('Montre que (C) est un cercle et détermine son centre et son rayon.',
      circ+' équivaut à (x² '+(a>0?MN+' ':'+ ')+Math.abs(2*a)+'x) + (y² '+(b>0?MN+' ':'+ ')+Math.abs(2*b)+'y) = '+fmt(-s,0)+', soit (x '+(a>0?MN+' ':'+ ')+Math.abs(a)+')² '+MN+' '+(a*a)+' + (y '+(b>0?MN+' ':'+ ')+Math.abs(b)+')² '+MN+' '+(b*b)+' = '+fmt(-s,0)+', c’est-à-dire (x '+(a>=0?MN+' ':'+ ')+Math.abs(a)+')² + (y '+(b>=0?MN+' ':'+ ')+Math.abs(b)+')² = '+fmt(-s,0)+' + '+(a*a)+' + '+(b*b)+' = '+(R*R)+' = '+R+'². C’est l’équation du cercle de centre Ω('+fmt(a,0)+' ; '+fmt(b,0)+') et de rayon '+R+' m.',
      ['Identifier la forme canonique d’une équation de cercle.','Identifier la méthode : compléter les carrés.'],
      ['Regrouper les termes en x et en y.','Écrire chaque groupe sous la forme (x − a)² − a².'],
      ['Compléter le carré en x : (x '+(a>=0?MN+' ':'+ ')+Math.abs(a)+')².','Compléter le carré en y : (y '+(b>=0?MN+' ':'+ ')+Math.abs(b)+')².','Calculer le second membre : '+(R*R)+' = '+R+'².','Conclure : centre Ω('+fmt(a,0)+' ; '+fmt(b,0)+'), rayon '+R+'.']),
     K('Vérifie que le point T('+fmt(xt,0)+' ; '+fmt(yt,0)+') appartient à (C) puis détermine l’équation de la tangente à (C) en T.',
      'Vérification : ('+fmt(xt,0)+' '+MN+' '+par(a,0)+')² + ('+fmt(yt,0)+' '+MN+' '+par(b,0)+')² = '+(u*u)+' + '+(v*v)+' = '+(R*R)+' = '+R+'², donc T ∈ (C). La tangente en T est perpendiculaire au rayon [ΩT], avec →ΩT('+fmt(u,0)+' ; '+fmt(v,0)+'). Un point M(x ; y) appartient à la tangente si et seulement si →TM ⋅ →ΩT = 0, soit '+[u?par(u,0)+'(x '+MN+' '+par(xt,0)+')':null,v?par(v,0)+'(y '+MN+' '+par(yt,0)+')':null].filter(Boolean).join(' + ')+' = 0, c’est-à-dire '+tang+' (car '+[u?par(u,0)+' × '+par(xt,0):null,v?par(v,0)+' × '+par(yt,0):null].filter(Boolean).join(' + ')+' = '+fmt(u*xt+v*yt,0)+').',
      ['Identifier qu’un point appartient à un cercle si sa distance au centre vaut le rayon.','Identifier que la tangente est orthogonale au rayon au point de contact.'],
      ['Calculer (xT − a)² + (yT − b)².','Écrire →TM ⋅ →ΩT = 0.'],
      ['Vérifier l’égalité avec '+R+'².','Calculer les coordonnées de →ΩT : ('+fmt(u,0)+' ; '+fmt(v,0)+').','Développer et conclure : '+tang+'.'])];
    // barycentre
    var w=pick(r,[[1,2],[2,1],[1,3],[3,1],[2,3],[3,2]]), al=w[0], be=w[1], sm=al+be, mm,nn; do{ mm=ri(r,-2,2); nn=ri(r,-2,2); }while(mm===0&&nn===0);
    var xa=ri(r,-4,4), ya=ri(r,-4,4), xb=xa+sm*mm, yb=ya+sm*nn, xg=xa+be*mm, yg=ya+be*nn, ga2=be*be*(mm*mm+nn*nn), gb2=al*al*(mm*mm+nn*nn), rho=ri(r,2,5), kk=al*ga2+be*gb2+sm*rho*rho;
    var i2='Dans ce même repère, on considère les points A('+fmt(xa,0)+' ; '+fmt(ya,0)+') et B('+fmt(xb,0)+' ; '+fmt(yb,0)+'), et l’ensemble (Γ) des points M du plan tels que '+al+'MA² + '+be+'MB² = '+kk+'.';
    var p2=[K('Détermine les coordonnées du barycentre G des points pondérés (A ; '+al+') et (B ; '+be+').',
      'Comme '+al+' + '+be+' = '+sm+' ≠ 0, le barycentre G existe. x_G = ('+al+' × '+par(xa,0)+' + '+be+' × '+par(xb,0)+') ÷ '+sm+' = ('+fmt(al*xa+be*xb,0)+') ÷ '+sm+' = '+fmt(xg,0)+' et y_G = ('+al+' × '+par(ya,0)+' + '+be+' × '+par(yb,0)+') ÷ '+sm+' = ('+fmt(al*ya+be*yb,0)+') ÷ '+sm+' = '+fmt(yg,0)+'. Donc G('+fmt(xg,0)+' ; '+fmt(yg,0)+').',
      ['Identifier que la somme des coefficients doit être non nulle.','Identifier la formule des coordonnées d’un barycentre.'],
      ['Écrire x_G = (αx_A + βx_B) ÷ (α + β) et y_G de même.'],
      ['Calculer '+al+' + '+be+' = '+sm+'.','Calculer x_G = '+fmt(xg,0)+'.','Calculer y_G = '+fmt(yg,0)+'.']),
     K('Détermine la nature et les éléments caractéristiques de l’ensemble (Γ).',
      'Pour tout point M, '+al+'MA² + '+be+'MB² = ('+al+' + '+be+')MG² + '+al+'GA² + '+be+'GB². Ici GA² = ('+fmt(xa,0)+' '+MN+' '+par(xg,0)+')² + ('+fmt(ya,0)+' '+MN+' '+par(yg,0)+')² = '+ga2+' et GB² = ('+fmt(xb,0)+' '+MN+' '+par(xg,0)+')² + ('+fmt(yb,0)+' '+MN+' '+par(yg,0)+')² = '+gb2+'. La condition équivaut à '+sm+'MG² + '+al+' × '+ga2+' + '+be+' × '+gb2+' = '+kk+', soit MG² = ('+kk+' '+MN+' '+al+' × '+ga2+' '+MN+' '+be+' × '+gb2+') ÷ '+sm+' = '+fmt(kk-al*ga2-be*gb2,0)+' ÷ '+sm+' = '+(rho*rho)+'. (Γ) est donc le cercle de centre G('+fmt(xg,0)+' ; '+fmt(yg,0)+') et de rayon '+rho+'.',
      ['Identifier la formule de réduction de αMA² + βMB².','Identifier que le résultat est une constante égale à MG².'],
      ['Écrire αMA² + βMB² en fonction de MG².','Isoler MG².'],
      ['Calculer GA² = '+ga2+' et GB² = '+gb2+'.','Calculer MG² = '+(rho*rho)+'.','Reconnaître un cercle : centre G, rayon '+rho+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,R:R,u:u,v:v,al:al,be:be,xa:xa,ya:ya,xb:xb,yb:yb,xg:xg,yg:yg,k:kk,rho:rho}}; }

  /* ================= Statistique en classes (1ère D) ================= */
  var LSG={jardin:{phr:'la taille (en cm) des plants de tomates du jardin',lo:[20,30],w:[5,10]},sport:{phr:'le temps (en secondes) mis par les élèves sur 100 m',lo:[12,14],w:[2]},coop:{phr:'la dépense (en centaines de francs) des clients de la boutique',lo:[5,10],w:[5]}};
  function gSG(x){
    var Lx=LSG[x.W.id], r=x.rnd, lo=pick(r,Lx.lo), w=pick(r,Lx.w), N, e, it, ok=false, res;
    for(it=0;it<5000&&!ok;it++){ N=pick(r,[40,50,60]); e=[]; var left=N; for(var k=0;k<4;k++){ var mx=left-3*(4-k); var v=ri(r,3,Math.min(mx,Math.round(N/2.6))); if(mx<3){ e=null; break; } e.push(v); left-=v; } if(!e) continue; e.push(left); if(left<3) continue;
      var cen=e.map(function(_,i){ return lo+w*(i+0.5); }), s1=0,s2=0; e.forEach(function(v,i){ s1+=v*cen[i]; s2+=v*cen[i]*cen[i]; }); var mean=s1/N, vr=s2/N-mean*mean; if(vr<1) continue;
      var cum=[],c=0; e.forEach(function(v){ c+=v; cum.push(c); }); var kc=0; while(cum[kc]<N/2) kc++; var prev=kc?cum[kc-1]:0, med=lo+w*kc+(N/2-prev)/e[kc]*w;
      var b=function(x){ var q=x*100-Math.floor(x*100); return Math.abs(q-0.5)<0.08; }; if(b(mean)||b(vr)||b(Math.sqrt(vr))||b(med)) continue; var r2=function(z){ return Math.round(z*100)/100; }; if(r2(Math.sqrt(vr))!==r2(Math.sqrt(r2(vr)))) continue;
      var j=ri(r,1,3); res={N:N,e:e,cen:cen,s1:s1,s2:s2,mean:mean,vr:vr,sd:Math.sqrt(vr),cum:cum,kc:kc,prev:prev,med:med,j:j,t:lo+w*j+w/2,cnt:(j?cum[j-1]:0)+e[j]/2}; ok=true; }
    var edges=[]; for(var i=0;i<=5;i++) edges.push(lo+w*i);
    var tab={type:'table',head:['Classes'].concat(res.e.map(function(_,i){ return '['+edges[i]+' ; '+edges[i+1]+'['; })),rows:[['Effectif'].concat(res.e.map(String))]};
    var g=res, m2=function(z){ return Math.round(z*100)/100; };
    var intro='Le comité a relevé '+Lx.phr+'. Les résultats, regroupés en classes de même amplitude, sont donnés dans le tableau ci-dessous.';
    var prodTxt=g.e.map(function(v,i){ return fmt(g.cen[i],1)+' × '+v; }).join(' + ');
    var p1=[K('Calcule l’effectif total, puis la moyenne de cette série (arrondie au centième), en utilisant les centres des classes.',
      'L’effectif total est '+g.e.join(' + ')+' = '+g.N+'. Les centres des classes sont '+g.cen.map(function(c){ return fmt(c,1); }).join(' ; ')+'. La moyenne est x̄ = ('+prodTxt+') ÷ '+g.N+' = '+fmt(g.s1,1)+' ÷ '+g.N+' '+eqSym(g.mean,2)+' '+fmt(m2(g.mean),2)+'.',
      ['Identifier que, pour des classes, on utilise les centres des classes.','Identifier la formule de la moyenne d’une série à effectifs.'],
      ['Calculer le centre de chaque classe.','Écrire x̄ = (somme des effectifs × centres) ÷ N.'],
      ['Calculer l’effectif total : '+g.N+'.','Calculer la somme des produits : '+fmt(g.s1,1)+'.','Calculer la moyenne : '+fmt(m2(g.mean),2)+'.']),
     K('Calcule la variance puis l’écart-type de cette série (arrondis au centième).',
      'V = (somme des effectifs × centre²) ÷ N '+MN+' x̄² = '+fmt(g.s2,2)+' ÷ '+g.N+' '+MN+' ('+fmt(g.s1,1)+' ÷ '+g.N+')² '+eqSym(g.vr,2)+' '+fmt(m2(g.vr),2)+'. L’écart-type est σ = √V = √'+fmt(m2(g.vr),2)+' '+eqSym(Math.sqrt(m2(g.vr)),2)+' '+fmt(m2(Math.sqrt(m2(g.vr))),2)+'.',
      ['Identifier la formule de la variance.','Identifier le lien entre variance et écart-type.'],
      ['Écrire V = (Σ nᵢcᵢ²) ÷ N − x̄².','Écrire σ = √V.'],
      ['Calculer Σ nᵢcᵢ² = '+fmt(g.s2,2)+'.','Calculer V ≈ '+fmt(m2(g.vr),2)+'.','Calculer σ ≈ '+fmt(m2(Math.sqrt(m2(g.vr))),2)+'.'])];
    var i2=x.standalone2?'On rappelle la série statistique relevée par le comité (tableau ci-dessous).':'';
    var p2=[K('Détermine la classe médiane, puis la médiane par interpolation linéaire (arrondie au centième).',
      'N ÷ 2 = '+g.N+' ÷ 2 = '+fmt(g.N/2,1)+'. Les effectifs cumulés croissants sont '+g.cum.join(' ; ')+'. La classe médiane est ['+edges[g.kc]+' ; '+edges[g.kc+1]+'[ car '+(g.kc?g.cum[g.kc-1]+' < '+fmt(g.N/2,1)+' ≤ ':'')+g.cum[g.kc]+'. Par interpolation linéaire : Me = '+edges[g.kc]+' + ('+fmt(g.N/2,1)+' '+MN+' '+g.prev+') ÷ '+g.e[g.kc]+' × '+w+' = '+edges[g.kc]+' + '+fmt(g.N/2-g.prev,1)+' ÷ '+g.e[g.kc]+' × '+w+' '+eqSym(g.med,2)+' '+fmt(m2(g.med),2)+'.',
      ['Identifier la définition de la classe médiane (effectif cumulé atteignant N ÷ 2).','Identifier la formule d’interpolation linéaire.'],
      ['Dresser les effectifs cumulés croissants.','Écrire Me = borne inférieure + (N ÷ 2 − cumul précédent) ÷ effectif × amplitude.'],
      ['Calculer N ÷ 2 = '+fmt(g.N/2,1)+'.','Repérer la classe médiane.','Calculer la médiane : '+fmt(m2(g.med),2)+'.']),
     K('Estime, par interpolation linéaire, le nombre d’observations inférieures à '+fmt(g.t,1)+'.',
      fmt(g.t,1)+' est le milieu de la classe ['+edges[g.j]+' ; '+edges[g.j+1]+'[. Avant cette classe, on compte '+(g.j?g.cum[g.j-1]:0)+' observations. On suppose les '+g.e[g.j]+' observations de la classe réparties uniformément : la moitié se trouve avant le milieu de la classe. On estime donc le nombre d’observations inférieures à '+fmt(g.t,1)+' à '+(g.j?g.cum[g.j-1]:0)+' + '+g.e[g.j]+' ÷ 2 = '+fmt(g.cnt,1)+'.',
      ['Identifier la classe contenant la valeur donnée.','Identifier l’hypothèse de répartition uniforme dans la classe.'],
      ['Écrire effectif estimé = cumul précédent + part de la classe.'],
      ['Repérer le cumul avant la classe : '+(g.j?g.cum[g.j-1]:0)+'.','Calculer la part de la classe : '+g.e[g.j]+' ÷ 2.','Additionner : '+fmt(g.cnt,1)+'.'])];
    return {table:tab,parts:[{intro:intro,cons:p1,table:tab},{intro:i2,cons:p2,table:x.standalone2?tab:null}],_g:g}; }

  /* ================= Statistique à deux caractères (1ère C) ================= */
  var LS2={jardin:{yl:'quantité de légumes vendus (en dizaines de kg)',ph:'la quantité de légumes vendus (en dizaines de kg)',xl:'Rang du mois'},sport:{yl:'nombre de spectateurs (en dizaines)',ph:'le nombre de spectateurs (en dizaines)',xl:'Rang du match'},coop:{yl:'ventes de cahiers (en dizaines)',ph:'les ventes de cahiers (en dizaines)',xl:'Rang du mois'}};
  function gS2(x){
    var Lx=LS2[x.W.id], r=x.rnd, ys, it, res;
    for(it=0;it<3000;it++){ var y0=ri(r,10,30), sl=ri(r,2,6); ys=[1,2,3,4,5].map(function(i){ return y0+sl*i+ri(r,-2,2); });
      var Sy=ys.reduce(function(a,b){ return a+b; },0), Sxy=ys.reduce(function(a,y,i){ return a+(i+1)*y; },0), Sy2=ys.reduce(function(a,y){ return a+y*y; },0), yb=Sy/5, cov=Sxy/5-3*yb, a=cov/2, b=yb-3*a, vy=Sy2/5-yb*yb;
      if(cov<=0||vy<=0) continue; var rr=cov/(Math.sqrt(2)*Math.sqrt(vy)), q=rr*100-Math.floor(rr*100); if(Math.abs(q-0.5)<0.1) continue; if(rr<0.8||rr>0.995) continue;
      var r2=function(z){ return Math.round(z*100)/100; }; if(Math.abs(Math.sqrt(vy)*100-Math.floor(Math.sqrt(vy)*100)-0.5)<0.1) continue;
      res={ys:ys,Sy:Sy,Sxy:Sxy,Sy2:Sy2,yb:yb,cov:cov,a:a,b:b,vy:vy,r:rr,y7:7*a+b}; break; }
    var g=res, tab={type:'table',head:[Lx.xl+' xᵢ','1','2','3','4','5'],rows:[['yᵢ : '+Lx.yl].concat(g.ys.map(String))]}, m2=function(z){ return Math.round(z*100)/100; };
    var intro='Le comité a relevé, sur cinq périodes, '+Lx.ph+' en fonction du rang xᵢ de la période. Les résultats sont donnés dans le tableau ci-dessous.';
    var xy=g.ys.map(function(y,i){ return (i+1)+' × '+y; }).join(' + ');
    var p1=[K('Calcule x̄, ȳ, la variance V(x) et la covariance Cov(x ; y).',
      'x̄ = (1 + 2 + 3 + 4 + 5) ÷ 5 = 15 ÷ 5 = 3. ȳ = ('+g.ys.join(' + ')+') ÷ 5 = '+g.Sy+' ÷ 5 = '+fmt(g.yb,1)+'. V(x) = (1² + 2² + 3² + 4² + 5²) ÷ 5 '+MN+' 3² = 55 ÷ 5 '+MN+' 9 = 2. Cov(x ; y) = (Σ xᵢyᵢ) ÷ 5 '+MN+' x̄ȳ = ('+xy+') ÷ 5 '+MN+' 3 × '+fmt(g.yb,1)+' = '+g.Sxy+' ÷ 5 '+MN+' '+fmt(3*g.yb,1)+' = '+fmt(g.cov,1)+'.',
      ['Identifier les formules de la moyenne, de la variance et de la covariance.','Identifier les données utiles : les cinq couples (xᵢ ; yᵢ).'],
      ['Écrire x̄, ȳ, V(x) et Cov(x ; y) avec leurs formules.','Organiser les calculs des sommes.'],
      ['Calculer x̄ = 3 et ȳ = '+fmt(g.yb,1)+'.','Calculer V(x) = 2.','Calculer Σ xᵢyᵢ = '+g.Sxy+'.','Calculer Cov(x ; y) = '+fmt(g.cov,1)+'.']),
     K('Détermine l’équation de la droite de régression de y en x, sous la forme y = ax + b.',
      'a = Cov(x ; y) ÷ V(x) = '+fmt(g.cov,1)+' ÷ 2 = '+fmt(g.a,2)+'. b = ȳ '+MN+' a × x̄ = '+fmt(g.yb,1)+' '+MN+' '+fmt(g.a,2)+' × 3 = '+fmt(g.yb,1)+' '+MN+' '+fmt(3*g.a,2)+' = '+fmt(g.b,2)+'. La droite de régression de y en x a pour équation y = '+fmt(g.a,2)+'x '+(g.b<0?MN+' '+fmt(-g.b,2):'+ '+fmt(g.b,2))+'.',
      ['Identifier la formule du coefficient directeur a = Cov ÷ V(x).','Identifier que la droite passe par le point moyen.'],
      ['Écrire a = Cov(x ; y) ÷ V(x) et b = ȳ − a x̄.'],
      ['Calculer a = '+fmt(g.a,2)+'.','Calculer b = '+fmt(g.b,2)+'.','Écrire l’équation de la droite.'])];
    var i2=x.standalone2?'On rappelle les données du tableau et la droite de régression de y en x : y = '+fmt(g.a,2)+'x '+(g.b<0?MN+' '+fmt(-g.b,2):'+ '+fmt(g.b,2))+'.':'';
    var p2=[K('Calcule V(y) puis le coefficient de corrélation linéaire r (arrondi au centième). Que peut-on conclure ?',
      'V(y) = (Σ yᵢ²) ÷ 5 '+MN+' ȳ² = '+fmt(g.Sy2,0)+' ÷ 5 '+MN+' '+fmt(g.yb,1)+'² = '+fmt(g.vy,2)+'. Alors r = Cov(x ; y) ÷ (σₓ × σᵧ) = '+fmt(g.cov,1)+' ÷ (√2 × √'+fmt(g.vy,2)+') '+eqSym(g.r,2)+' '+fmt(m2(g.r),2)+'. Comme r est proche de 1, la corrélation linéaire est forte et positive : un ajustement affine est justifié.',
      ['Identifier la formule du coefficient de corrélation linéaire.','Identifier que |r| proche de 1 traduit une forte corrélation linéaire.'],
      ['Écrire V(y) = (Σ yᵢ²) ÷ N − ȳ².','Écrire r = Cov ÷ (σₓσᵧ).'],
      ['Calculer V(y) = '+fmt(g.vy,2)+'.','Calculer r ≈ '+fmt(m2(g.r),2)+'.','Interpréter la valeur de r.']),
     K('Utilise la droite de régression pour estimer la valeur de y lorsque x = 7.',
      'Pour x = 7 : y = '+fmt(g.a,2)+' × 7 '+(g.b<0?MN+' '+fmt(-g.b,2):'+ '+fmt(g.b,2))+' = '+fmt(7*g.a,2)+' '+(g.b<0?MN+' '+fmt(-g.b,2):'+ '+fmt(g.b,2))+' = '+fmt(g.y7,2)+'. On peut donc prévoir une valeur d’environ '+fmt(g.y7,1)+' ('+Lx.yl.replace(/^[^(]*/,'').replace(/[()]/g,'').trim()+').',
      ['Identifier qu’une prévision consiste à remplacer x dans l’équation de la droite.'],
      ['Écrire y = ax + b avec x = 7.'],
      ['Calculer a × 7 = '+fmt(7*g.a,2)+'.','Ajouter b pour obtenir y = '+fmt(g.y7,2)+'.','Conclure avec l’unité.'])];
    return {table:tab,parts:[{intro:intro,cons:p1,table:tab},{intro:i2,cons:p2,table:x.standalone2?tab:null}],_g:g}; }

  /* ================= Géométrie dans l'espace (1ère C) ================= */
  var NORM=[{n:[1,2,2],N:3,e:[[2,-1,0],[2,0,-1]]},{n:[2,3,6],N:7,e:[[3,-2,0],[3,0,-1]]},{n:[2,6,9],N:11,e:[[3,-1,0],[9,0,-2]]},{n:[4,4,7],N:9,e:[[1,-1,0],[7,0,-4]]},{n:[1,4,8],N:9,e:[[4,-1,0],[8,0,-1]]}];
  var LES={jardin:'un panneau solaire plan',sport:'un filet de protection plan',coop:'une enseigne plane'};
  function gES(x){
    var r=x.rnd, nm=pick(r,NORM), n=nm.n, e1=nm.e[0], e2=nm.e[1], N2=nm.N*nm.N, s1,t1,s2,t2,w1,w2,lam, it;
    for(it=0;it<300;it++){ s1=ri(r,-2,2); t1=ri(r,-2,2); s2=ri(r,-2,2); t2=ri(r,-2,2); if(s1*t2-s2*t1===0) continue; w1=ri(r,-2,2); w2=ri(r,-2,2); lam=ri(r,-2,2); if(lam===0) continue; break; }
    var A=[ri(r,-3,3),ri(r,-3,3),ri(r,-3,3)], comb=function(s,t){ return [A[0]+s*e1[0]+t*e2[0],A[1]+s*e1[1]+t*e2[1],A[2]+s*e1[2]+t*e2[2]]; };
    var B=comb(s1,t1), Cc=comb(s2,t2), Hp=comb(w1,w2), D=[Hp[0]+lam*n[0],Hp[1]+lam*n[1],Hp[2]+lam*n[2]];
    var AB=[B[0]-A[0],B[1]-A[1],B[2]-A[2]], AC=[Cc[0]-A[0],Cc[1]-A[1],Cc[2]-A[2]], dd=-(n[0]*A[0]+n[1]*A[1]+n[2]*A[2]), val=n[0]*D[0]+n[1]*D[1]+n[2]*D[2]+dd, dist=Math.abs(lam)*nm.N;
    var P3=function(v){ return '('+v.map(function(c){ return fmt(c,0); }).join('\u00a0;\u00a0')+')'; }, pl=planeStr(n[0],n[1],n[2],dd);
    var minor=[[0,1],[0,2],[1,2]].map(function(p){ return {p:p,v:AB[p[0]]*AC[p[1]]-AB[p[1]]*AC[p[0]]}; }).filter(function(m){ return m.v!==0; })[0], nm3=['x','y','z'];
    var dotAB=n[0]*AB[0]+n[1]*AB[1]+n[2]*AB[2], dotAC=n[0]*AC[0]+n[1]*AC[1]+n[2]*AC[2];
    var cx=function(c,v){ return c===1?v:(c===-1?MN+v:fmt(c,0)+v); }, cp=function(c,e){ return c===1?'('+e+')':fmt(c,0)+'('+e+')'; }, eqn=cx(n[0],'x')+' + '+cx(n[1],'y')+' + '+cx(n[2],'z');
    var intro='Dans l’espace muni d’un repère orthonormé (unité : 1 m), trois fixations A'+P3(A)+', B'+P3(B)+' et C'+P3(Cc)+' maintiennent '+LES[x.W.id]+'. Un drone se trouve au point D'+P3(D)+'.';
    var p1=[K('Calcule les coordonnées des vecteurs →AB et →AC, puis montre que les points A, B et C ne sont pas alignés.',
      '→AB a pour coordonnées ('+fmt(B[0],0)+' '+MN+' '+par(A[0],0)+' ; '+fmt(B[1],0)+' '+MN+' '+par(A[1],0)+' ; '+fmt(B[2],0)+' '+MN+' '+par(A[2],0)+') = '+P3(AB)+' et →AC a pour coordonnées ('+fmt(Cc[0],0)+' '+MN+' '+par(A[0],0)+' ; '+fmt(Cc[1],0)+' '+MN+' '+par(A[1],0)+' ; '+fmt(Cc[2],0)+' '+MN+' '+par(A[2],0)+') = '+P3(AC)+'. Si A, B et C étaient alignés, →AB et →AC seraient colinéaires, donc leurs coordonnées seraient proportionnelles. Or '+par(AB[minor.p[0]],0)+' × '+par(AC[minor.p[1]],0)+' '+MN+' '+par(AB[minor.p[1]],0)+' × '+par(AC[minor.p[0]],0)+' = '+fmt(minor.v,0)+' ≠ 0 (coordonnées '+nm3[minor.p[0]]+' et '+nm3[minor.p[1]]+'). Les vecteurs ne sont pas colinéaires : A, B et C ne sont pas alignés.',
      ['Identifier la formule des coordonnées d’un vecteur.','Identifier le critère de colinéarité de deux vecteurs.'],
      ['Écrire les coordonnées de →AB et de →AC.','Écrire la condition de proportionnalité des coordonnées.'],
      ['Calculer les coordonnées de →AB : '+P3(AB)+'.','Calculer les coordonnées de →AC : '+P3(AC)+'.','Calculer un déterminant non nul : '+fmt(minor.v,0)+'.','Conclure : points non alignés.']),
     K('Vérifie que le vecteur →n('+n.join(' ; ')+') est orthogonal à →AB et à →AC, puis détermine une équation cartésienne du plan (ABC).',
      '→n ⋅ →AB = '+n[0]+' × '+par(AB[0],0)+' + '+n[1]+' × '+par(AB[1],0)+' + '+n[2]+' × '+par(AB[2],0)+' = '+fmt(dotAB,0)+' et →n ⋅ →AC = '+n[0]+' × '+par(AC[0],0)+' + '+n[1]+' × '+par(AC[1],0)+' + '+n[2]+' × '+par(AC[2],0)+' = '+fmt(dotAC,0)+'. Le vecteur →n, orthogonal à deux vecteurs non colinéaires du plan (ABC), est un vecteur normal à ce plan. Une équation de (ABC) est donc '+eqn+' + d = 0. Comme A appartient au plan : '+n[0]+' × '+par(A[0],0)+' + '+n[1]+' × '+par(A[1],0)+' + '+n[2]+' × '+par(A[2],0)+' + d = 0, soit '+fmt(-dd,0)+' + d = 0, donc d = '+fmt(dd,0)+'. Le plan (ABC) a pour équation '+pl+'.',
      ['Identifier le critère d’orthogonalité : produit scalaire nul.','Identifier qu’un vecteur orthogonal à deux vecteurs non colinéaires d’un plan est normal à ce plan.'],
      ['Écrire →n ⋅ →AB = 0 et →n ⋅ →AC = 0.','Écrire l’équation ax + by + cz + d = 0 d’un plan de vecteur normal →n.'],
      ['Calculer →n ⋅ →AB = 0.','Calculer →n ⋅ →AC = 0.','Utiliser le point A pour trouver d = '+fmt(dd,0)+'.','Écrire l’équation du plan.'])];
    var i2=(x.standalone2?'On rappelle que le plan (ABC) a pour vecteur normal →n('+n.join(' ; ')+') et pour équation '+pl+', et que le drone est en D'+P3(D)+'. ':'')+'Le drone doit rejoindre le plan en suivant le chemin le plus court.';
    var p2=[K('Calcule la distance du point D au plan (ABC).',
      'La distance de D au plan d’équation ax + by + cz + d = 0 est |ax_D + by_D + cz_D + d| ÷ √(a² + b² + c²). On calcule '+n[0]+' × '+par(D[0],0)+' + '+n[1]+' × '+par(D[1],0)+' + '+n[2]+' × '+par(D[2],0)+' + '+par(dd,0)+' = '+fmt(val,0)+' et √('+n[0]+'² + '+n[1]+'² + '+n[2]+'²) = √'+N2+' = '+nm.N+'. La distance est donc '+Math.abs(val)+' ÷ '+nm.N+' = '+fmt(dist,0)+' m.',
      ['Identifier la formule de la distance d’un point à un plan.','Identifier le vecteur normal et le terme constant d de l’équation.'],
      ['Écrire d(D ; plan) = |ax_D + by_D + cz_D + d| ÷ √(a² + b² + c²).','Remplacer par les valeurs numériques.'],
      ['Calculer le numérateur : '+fmt(val,0)+'.','Calculer le dénominateur : '+nm.N+'.','Conclure : '+fmt(dist,0)+' m.']),
     K('Détermine une représentation paramétrique de la droite (Δ) passant par D et orthogonale au plan (ABC), puis les coordonnées du projeté orthogonal H de D sur ce plan.',
      'La droite (Δ) a pour vecteur directeur le vecteur normal →n : (Δ) : x = '+fmt(D[0],0)+' + '+cx(n[0],'t')+', y = '+fmt(D[1],0)+' + '+cx(n[1],'t')+', z = '+fmt(D[2],0)+' + '+cx(n[2],'t')+', t ∈ ℝ. Le projeté H est le point de (Δ) situé dans le plan : '+cp(n[0],fmt(D[0],0)+' + '+cx(n[0],'t'))+' + '+cp(n[1],fmt(D[1],0)+' + '+cx(n[1],'t'))+' + '+cp(n[2],fmt(D[2],0)+' + '+cx(n[2],'t'))+' + '+par(dd,0)+' = 0, soit '+fmt(val,0)+' + '+N2+'t = 0, donc t = '+fmt(-lam,0)+'. Alors H a pour coordonnées ('+fmt(D[0],0)+' + '+n[0]+' × '+par(-lam,0)+' ; '+fmt(D[1],0)+' + '+n[1]+' × '+par(-lam,0)+' ; '+fmt(D[2],0)+' + '+n[2]+' × '+par(-lam,0)+') = '+P3(Hp)+'.',
      ['Identifier que (Δ) est dirigée par le vecteur normal au plan.','Identifier que H est l’intersection de (Δ) et du plan.'],
      ['Écrire la représentation paramétrique de (Δ).','Remplacer x, y, z dans l’équation du plan.'],
      ['Écrire les trois équations paramétriques.','Résoudre l’équation en t : t = '+fmt(-lam,0)+'.','Calculer les coordonnées de H : '+P3(Hp)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{A:A,B:B,C:Cc,D:D,n:n,d:dd,H:Hp,dist:dist,lam:lam,N:nm.N}}; }

  var DEF2=[
    {id:'TG',label:'Trigonométrie',w1:1,build:gTG,D:['1D — Angles orientés & fonctions circulaires','1D — Formules trigonométriques & équations'],C:['1C — Angles orientés & fonctions circulaires','1C — Formules trigonométriques & équations']},
    {id:'CB',label:'Cercle et barycentre',w1:1,build:gCB,D:['1D — Cercle : équation, représentation paramétrique & tangente','1D — Barycentre & lignes de niveau'],C:['1C — Cercle : équation, représentation paramétrique & tangente','1C — Barycentre & lignes de niveau']},
    {id:'SG',label:'Statistique en classes',w1:2,build:gSG,D:['1D — Statistique : séries groupées en classes']},
    {id:'S2',label:'Statistique à deux caractères',w1:2,build:gS2,C:['1C — Statistique à deux caractères']},
    {id:'ES',label:'Géométrie dans l’espace',w1:1,build:gES,C:["1C — Géométrie analytique de l'espace","1C — Produit scalaire dans l'espace","1C — Orthogonalité dans l'espace","1C — Projections orthogonales","1C — Vecteurs de l'espace"]}
  ];
  M.gS2=gS2;
  DEF2.forEach(M.reg14);
})(typeof globalThis!=='undefined'?globalThis:this);
