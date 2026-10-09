/* ===== MQ_SOM : modules de problèmes sommatifs — Terminale D et Terminale C (2e partie) ===== */
(function(G){
  'use strict';
  var M=G.MQ_SOM_MOD, MOD=M.MOD, fmt=M.fmt, ri=M.ri, pick=M.pick, gcd=M.gcd, H=M.helpers14, par=H.par, eqSym=H.eqSym;
  var MN='\u2212';
  function fixMinus(t){ return String(t).replace(/([\s(\[{;,]|^)-(?=\d)/g,'$1\u2212'); }
  function K(t,s,A,Mm,O){ return M.K(fixMinus(t),fixMinus(s),A.map(fixMinus),Mm.map(fixMinus),O.map(fixMinus)); }
  function safe(v,d){ var q=v*Math.pow(10,d); return Math.abs(q-Math.floor(q)-0.5)>0.06; }
  function rd(v,d){ var q=Math.pow(10,d); return Math.round(v*q)/q; }
  function tm(c,v,first){ if(!c) return ''; var ab=Math.abs(c), b=v?((ab===1?'':fmt(ab,0))+v):fmt(ab,0); return first?((c<0?MN:'')+b):((c<0?' '+MN+' ':' + ')+b); }
  function eS(rr){ if(rr===0) return '1'; if(rr===1) return 'eˣ'; return 'e^('+(rr<0?MN:'')+(Math.abs(rr)===1?'':Math.abs(rr))+'x)'; }
  function cS(re,im){ if(im===0) return fmt(re,0); var ib=(Math.abs(im)===1?'':fmt(Math.abs(im),0))+'i'; if(re===0) return (im<0?MN:'')+ib; return fmt(re,0)+(im<0?' '+MN+' ':' + ')+ib; }

  /* ================= Équations différentielles ================= */
  function gED(x){
    var r=x.rnd, a=pick(r,[1,2,3]), m=ri(r,2,5)*pick(r,[1,-1]), b=a*m, y0=m+ri(r,2,6)*pick(r,[1,-1]), C=y0-m;
    var pr=pick(r,[[1,2],[-1,3],[2,3],[1,3],[-2,1],[-1,2],[-2,3],[1,4]]), r1=Math.min(pr[0],pr[1]), r2=Math.max(pr[0],pr[1]), S=r1+r2, P=r1*r2;
    var c1=ri(r,-3,3), c2=ri(r,-3,3); if(c1===0) c1=2; if(c2===0) c2=-1;
    var A0=c1+c2, B0=r1*c1+r2*c2, C2=(B0-r1*A0)/(r2-r1), C1=A0-C2;
    var Es='y′ + '+(a===1?'':a)+'y = '+b, Eh='y′ + '+(a===1?'':a)+'y = 0';
    var intro='Le comité étudie une grandeur y(x) qui vérifie l’équation différentielle (E) : '+Es+'.';
    var p1=[K('Résous l’équation différentielle homogène '+Eh+'.',
      'L’équation s’écrit y′ = '+MN+(a===1?'':a)+'y. Ses solutions sont les fonctions y(x) = λ e^('+MN+(a===1?'':a)+'x), où λ est une constante réelle.',
      ['Identifier une équation de la forme y′ = ky.','Identifier la forme des solutions λe^(kx).'],
      ['Écrire y′ = −ay avec a = '+a+'.'],
      ['Déterminer k = −'+a+'.','Écrire les solutions : λ e^(−'+(a===1?'':a)+'x).']),
     K('Résous (E), puis détermine la solution f vérifiant f(0) = '+y0+'.',
      'Une solution constante y = k vérifie '+(a===1?'':a)+'k = '+b+', donc k = '+fmt(b,0)+' ÷ '+a+' = '+fmt(m,0)+'. Les solutions de (E) sont donc y(x) = λ e^('+MN+(a===1?'':a)+'x) + '+par(m,0)+'. La condition f(0) = '+y0+' donne λ + '+par(m,0)+' = '+y0+', soit λ = '+y0+' '+MN+' '+par(m,0)+' = '+fmt(C,0)+'. Donc f(x) = '+fmt(C,0)+' e^('+MN+(a===1?'':a)+'x) + '+par(m,0)+'.',
      ['Identifier que la solution générale est la somme d’une solution particulière et de la solution homogène.','Identifier la solution particulière constante.'],
      ['Chercher une solution constante.','Écrire la solution générale puis utiliser la condition initiale.'],
      ['Calculer la solution constante k = '+fmt(m,0)+'.','Écrire la solution générale.','Calculer λ = '+fmt(C,0)+'.','Conclure : f(x).'])];
    var i2='Par ailleurs, une autre grandeur y(x) vérifie l’équation différentielle (F) : y″'+tm(-S,'y′',false)+tm(P,'y',false)+' = 0.';
    var p2=[K('Résous l’équation différentielle (F).',
      'L’équation caractéristique est r²'+tm(-S,'r',false)+tm(P,'',false)+' = 0. Son discriminant est Δ = '+par(-S,0)+'² '+MN+' 4 × '+par(P,0)+' = '+(S*S)+' '+MN+' '+par(4*P,0)+' = '+((r2-r1)*(r2-r1))+', donc √Δ = '+(r2-r1)+'. Les racines sont r₁ = ('+S+' '+MN+' '+(r2-r1)+') ÷ 2 = '+fmt(r1,0)+' et r₂ = ('+S+' + '+(r2-r1)+') ÷ 2 = '+fmt(r2,0)+'. Les solutions de (F) sont y(x) = α '+eS(r1)+' + β '+eS(r2)+', où α et β sont des constantes réelles.',
      ['Identifier une équation différentielle linéaire du second ordre à coefficients constants.','Identifier l’équation caractéristique.'],
      ['Écrire l’équation caractéristique r² − Sr + P = 0.','Calculer son discriminant et ses racines.'],
      ['Calculer Δ = '+((r2-r1)*(r2-r1))+'.','Calculer r₁ = '+fmt(r1,0)+' et r₂ = '+fmt(r2,0)+'.','Écrire la solution générale.']),
     K('Détermine la solution g de (F) vérifiant g(0) = '+A0+' et g′(0) = '+B0+'.',
      'On a g(x) = α '+eS(r1)+' + β '+eS(r2)+' et g′(x) = '+par(r1,0)+'α '+eS(r1)+' + '+par(r2,0)+'β '+eS(r2)+'. Les conditions donnent le système α + β = '+A0+' et '+par(r1,0)+'α + '+par(r2,0)+'β = '+B0+'. On en déduit β = ('+B0+' '+MN+' '+par(r1,0)+' × '+par(A0,0)+') ÷ ('+par(r2,0)+' '+MN+' '+par(r1,0)+') = '+fmt(C2,0)+', puis α = '+A0+' '+MN+' '+par(C2,0)+' = '+fmt(C1,0)+'. Donc g(x) = '+fmt(C1,0)+' '+eS(r1)+' + '+par(C2,0)+' '+eS(r2)+'.',
      ['Identifier qu’il faut calculer g′ pour utiliser la seconde condition.','Identifier un système de deux équations à deux inconnues.'],
      ['Écrire g(0) et g′(0) en fonction de α et β.','Résoudre le système.'],
      ['Écrire le système.','Calculer β = '+fmt(C2,0)+'.','Calculer α = '+fmt(C1,0)+'.','Conclure : g(x).'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,m:m,y0:y0,C:C,r1:r1,r2:r2,S:S,P:P,A0:A0,B0:B0,C1:C1,C2:C2}}; }

  /* ================= Probabilités ================= */
  var LPB={jardin:{src:'deux pépinières F₁ et F₂',d:'un plant défectueux',it:'plants'},sport:{src:'deux fournisseurs F₁ et F₂ de ballons',d:'un ballon défectueux',it:'ballons'},coop:{src:'deux fournisseurs F₁ et F₂ de cahiers',d:'un cahier défectueux',it:'cahiers'}};
  function gPB(x){
    var L=LPB[x.W.id], r=x.rnd, pA,dA,dB,pD,pAD,pBD,bay,n,p0,p1r,ok=false,it;
    for(it=0;it<400&&!ok;it++){ pA=pick(r,[0.4,0.5,0.6,0.7]); dA=pick(r,[1,2,3,4])/100; dB=pick(r,[2,3,5,6])/100; if(dA===dB) continue; var pB=Math.round((1-pA)*10)/10; pAD=Math.round(pA*dA*10000)/10000; pBD=Math.round(pB*dB*10000)/10000; pD=Math.round((pAD+pBD)*10000)/10000; bay=pAD/pD; n=pick(r,[5,6,8]); var p0e=Math.pow(1-pD,n); if(!safe(bay,3)||!safe(p0e,3)) continue; p0=rd(p0e,3); p1r=rd(1-p0e,3); if(Math.abs((1-p0)-p1r)>1e-9) continue; ok=true; }
    var pB2=Math.round((1-pA)*10)/10, F=function(v,d){ return fmt(v,d); };
    var intro='Le comité s’approvisionne auprès de '+L.src+'. F₁ fournit '+F(pA*100,0)+' % des articles et F₂ le reste. Parmi les articles de F₁, '+F(dA*100,0)+' % sont défectueux ; parmi ceux de F₂, '+F(dB*100,0)+' % sont défectueux. On prélève un article au hasard et on note D l’événement « l’article est défectueux ».';
    var p1=[K('Calcule P(F₁ ∩ D) et P(F₂ ∩ D).',
      'D’après la formule des probabilités composées : P(F₁ ∩ D) = P(F₁) × P_F₁(D) = '+F(pA,1)+' × '+F(dA,2)+' = '+F(pAD,4)+' et P(F₂ ∩ D) = P(F₂) × P_F₂(D) = '+F(pB2,1)+' × '+F(dB,2)+' = '+F(pBD,4)+'.',
      ['Identifier les probabilités des événements F₁ et F₂ et les probabilités conditionnelles.','Identifier la formule P(A ∩ B) = P(A) × P_A(B).'],
      ['Construire l’arbre pondéré de la situation.','Écrire P(F ∩ D) = P(F) × P_F(D).'],
      ['Calculer P(F₁ ∩ D) = '+F(pAD,4)+'.','Calculer P(F₂ ∩ D) = '+F(pBD,4)+'.']),
     K('Calcule la probabilité P(D) qu’un article soit défectueux.',
      'F₁ et F₂ forment une partition de l’ensemble des articles. D’après la formule des probabilités totales : P(D) = P(F₁ ∩ D) + P(F₂ ∩ D) = '+F(pAD,4)+' + '+F(pBD,4)+' = '+F(pD,4)+'.',
      ['Identifier que F₁ et F₂ forment une partition.','Identifier la formule des probabilités totales.'],
      ['Écrire P(D) = P(F₁ ∩ D) + P(F₂ ∩ D).'],
      ['Reprendre les deux probabilités calculées.','Additionner : P(D) = '+F(pD,4)+'.'])];
    var i2=x.standalone2?'On rappelle que P(F₁) = '+F(pA,1)+', P(F₁ ∩ D) = '+F(pAD,4)+' et P(D) = '+F(pD,4)+'. ':'';
    i2+='On suppose les prélèvements indépendants. On prélève '+n+' '+L.it+' et on note X le nombre d’articles défectueux obtenus.';
    var p2=[K('Sachant que l’article est défectueux, calcule la probabilité qu’il vienne de F₁ (arrondie à 10⁻³).',
      'On cherche P_D(F₁) = P(F₁ ∩ D) ÷ P(D) = '+F(pAD,4)+' ÷ '+F(pD,4)+' '+eqSym(bay,3)+' '+F(rd(bay,3),3)+'.',
      ['Identifier qu’on cherche une probabilité conditionnelle « à l’envers ».','Identifier la formule de Bayes.'],
      ['Écrire P_D(F₁) = P(F₁ ∩ D) ÷ P(D).'],
      ['Reprendre P(F₁ ∩ D) et P(D).','Calculer le quotient : '+F(rd(bay,3),3)+'.']),
     K('Justifie que X suit une loi binomiale, puis calcule P(X = 0), P(X ≥ 1) et E(X) (arrondis à 10⁻³).',
      'Chaque prélèvement est une épreuve de Bernoulli de succès « défectueux » de probabilité p = '+F(pD,4)+', et les '+n+' prélèvements sont indépendants : X suit la loi binomiale B('+n+' ; '+F(pD,4)+'). P(X = 0) = (1 '+MN+' '+F(pD,4)+')^'+n+' = '+F(1-pD,4)+'^'+n+' ≈ '+F(p0,3)+'. P(X ≥ 1) = 1 '+MN+' P(X = 0) ≈ 1 '+MN+' '+F(p0,3)+' = '+F(p1r,3)+'. E(X) = n × p = '+n+' × '+F(pD,4)+' = '+F(n*pD,4)+'.',
      ['Identifier le schéma de Bernoulli : épreuves indépendantes à deux issues.','Identifier les formules de P(X = 0) et de E(X) pour une loi binomiale.'],
      ['Écrire les paramètres n et p de la loi.','Utiliser l’événement contraire pour P(X ≥ 1).'],
      ['Calculer P(X = 0) ≈ '+F(p0,3)+'.','Calculer P(X ≥ 1) ≈ '+F(p1r,3)+'.','Calculer E(X) = '+F(n*pD,4)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{pA:pA,dA:dA,dB:dB,pAD:pAD,pBD:pBD,pD:pD,bay:bay,n:n,p0:p0,p1:p1r}}; }

  /* ================= Suites : u(n+1) = a u(n) + b ================= */
  function gSU2(x){
    var r=x.rnd, fa=pick(r,[[1,2],[1,3],[2,3],[3,4]]), nu=fa[0], de=fa[1], a=nu/de, l=de*ri(r,2,6), b=l*(de-nu)/de, dd=de*de*ri(r,1,3)*pick(r,[1,-1]), u0=l+dd;
    var eps=pick(r,[0.01,0.001]), N=0; while(Math.abs(dd)*Math.pow(a,N)>=eps) N++;
    var u1=a*u0+b, u2=a*u1+b, vN1=Math.abs(dd)*Math.pow(a,N-1), vN=Math.abs(dd)*Math.pow(a,N);
    var fr=nu+'/'+de, ft=function(v){ return fmt(v,0); };
    var intro='Le comité étudie l’évolution d’une quantité par la suite (uₙ) définie par u₀ = '+u0+' et, pour tout entier naturel n, uₙ₊₁ = '+fr+' uₙ + '+ft(b)+'.';
    var p1=[K('Calcule u₁ et u₂.',
      'u₁ = '+fr+' × '+par(u0,0)+' + '+ft(b)+' = '+ft(u1)+'. u₂ = '+fr+' × '+par(u1,0)+' + '+ft(b)+' = '+ft(u2)+'.',
      ['Identifier la relation de récurrence.','Identifier la valeur de départ u₀.'],
      ['Remplacer n par 0 puis par 1 dans la relation.'],
      ['Calculer u₁ = '+ft(u1)+'.','Calculer u₂ = '+ft(u2)+'.']),
     K('On pose vₙ = uₙ '+MN+' '+l+'. Montre que (vₙ) est une suite géométrique dont tu préciseras la raison et le premier terme.',
      'Pour tout n, vₙ₊₁ = uₙ₊₁ '+MN+' '+l+' = '+fr+' uₙ + '+ft(b)+' '+MN+' '+l+' = '+fr+' uₙ '+MN+' '+ft(l-b)+'. Or '+ft(l-b)+' = '+fr+' × '+l+', donc vₙ₊₁ = '+fr+'(uₙ '+MN+' '+l+') = '+fr+' vₙ. La suite (vₙ) est géométrique de raison '+fr+'. Son premier terme est v₀ = u₀ '+MN+' '+l+' = '+u0+' '+MN+' '+l+' = '+ft(dd)+'.',
      ['Identifier la définition d’une suite géométrique.','Identifier la méthode : exprimer vₙ₊₁ en fonction de vₙ.'],
      ['Écrire vₙ₊₁ = uₙ₊₁ − l.','Remplacer uₙ₊₁ puis factoriser.'],
      ['Calculer vₙ₊₁ en fonction de uₙ.','Reconnaître '+fr+' vₙ.','Calculer v₀ = '+ft(dd)+'.'])];
    var i2=x.standalone2?'On rappelle que uₙ₊₁ = '+fr+' uₙ + '+ft(b)+', u₀ = '+u0+', et que vₙ = uₙ '+MN+' '+l+' est géométrique de raison '+fr+' et de premier terme '+ft(dd)+'.':'';
    var p2=[K('Exprime vₙ puis uₙ en fonction de n.',
      'Comme (vₙ) est géométrique de raison '+fr+' et de premier terme '+ft(dd)+', vₙ = '+ft(dd)+' × ('+fr+')ⁿ. Donc uₙ = vₙ + '+l+' = '+l+' + '+ft(dd)+' × ('+fr+')ⁿ.',
      ['Identifier la formule du terme général d’une suite géométrique.','Identifier le lien uₙ = vₙ + l.'],
      ['Écrire vₙ = v₀ × qⁿ.','Écrire uₙ = vₙ + l.'],
      ['Écrire vₙ.','Écrire uₙ.']),
     K('Détermine la limite de (uₙ), puis le plus petit entier n tel que |uₙ '+MN+' '+l+'| < '+fmt(eps,3)+'.',
      'Comme 0 < '+fr+' < 1, ('+fr+')ⁿ tend vers 0, donc vₙ tend vers 0 et lim uₙ = '+l+'. On cherche n tel que |vₙ| = '+Math.abs(dd)+' × ('+fr+')ⁿ < '+fmt(eps,3)+'. Pour n = '+(N-1)+', |vₙ| ≈ '+fmt(rd(vN1,5),5)+' ≥ '+fmt(eps,3)+' et pour n = '+N+', |vₙ| ≈ '+fmt(rd(vN,5),5)+' < '+fmt(eps,3)+'. Comme (|vₙ|) est décroissante, le plus petit entier est n = '+N+'.',
      ['Identifier qu’une suite géométrique de raison comprise entre 0 et 1 tend vers 0.','Identifier la décroissance de |vₙ| pour conclure.'],
      ['Écrire la condition |vₙ| < ε.','Tester les valeurs successives de n.'],
      ['Donner la limite : '+l+'.','Tester n = '+(N-1)+' puis n = '+N+'.','Conclure : n = '+N+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{nu:nu,de:de,l:l,b:b,u0:u0,dd:dd,eps:eps,N:N,u1:u1,u2:u2}}; }

  /* ================= Étude d'une fonction rationnelle ================= */
  function gET(x){
    var r=x.rnd, s=pick(r,[1,2]), c=s*s, d=ri(r,1,3), b=ri(r,-2,2), m0=d+b+2*s, k=m0+ri(r,2,6);
    var f=function(t){ return t+b+c/(t-d); }, n=d+s+1; while(f(n)<k) n++;
    var fS='x'+(b<0?' '+MN+' '+(-b):(b>0?' + '+b:''))+' + '+c+' ÷ (x '+MN+' '+d+')';
    var intro='Pour modéliser un coût moyen, le comité utilise la fonction f définie sur ℝ \\ {'+d+'} par f(x) = '+fS+'.';
    var p1=[K('Calcule les limites de f en +∞, en '+MN+'∞ et en '+d+' (à gauche et à droite).',
      'Quand x tend vers +∞ ou '+MN+'∞, '+c+' ÷ (x '+MN+' '+d+') tend vers 0, donc f(x) se comporte comme x '+(b<0?MN+' '+(-b):'+ '+b)+' : lim(x→+∞) f(x) = +∞ et lim(x→'+MN+'∞) f(x) = '+MN+'∞. En '+d+' : x '+(b<0?MN+' '+(-b):'+ '+b)+' tend vers '+fmt(d+b,0)+' et '+c+' ÷ (x '+MN+' '+d+') tend vers +∞ pour x > '+d+' et vers '+MN+'∞ pour x < '+d+'. Donc lim(x→'+d+', x > '+d+') f(x) = +∞ et lim(x→'+d+', x < '+d+') f(x) = '+MN+'∞.',
      ['Identifier la limite de x en ±∞ et celle du quotient.','Identifier le signe de x − d de chaque côté de d.'],
      ['Séparer f(x) en une partie affine et un quotient.'],
      ['Calculer les limites en +∞ et en −∞.','Calculer les limites à gauche et à droite de '+d+'.']),
     K('Montre que la droite (Δ) d’équation y = x '+(b<0?MN+' '+(-b):'+ '+b)+' est asymptote oblique à la courbe de f, puis étudie la position de la courbe par rapport à (Δ).',
      'Pour tout x ≠ '+d+', f(x) '+MN+' (x '+(b<0?MN+' '+(-b):'+ '+b)+') = '+c+' ÷ (x '+MN+' '+d+'). Cette différence tend vers 0 en +∞ et en '+MN+'∞ : (Δ) est asymptote oblique. De plus '+c+' ÷ (x '+MN+' '+d+') est du signe de x '+MN+' '+d+' : la courbe est au-dessus de (Δ) pour x > '+d+' et au-dessous pour x < '+d+'.',
      ['Identifier la définition d’une asymptote oblique.','Identifier que la position se lit dans le signe de f(x) − (ax + b).'],
      ['Calculer f(x) − (x + b).','Étudier le signe de la différence.'],
      ['Calculer la différence : '+c+' ÷ (x − '+d+').','Calculer sa limite : 0.','Conclure sur la position relative.'])];
    var i2=x.standalone2?'On rappelle que f(x) = '+fS+' sur ℝ \\ {'+d+'}.':'';
    var p2=[K('Calcule f′(x), étudie son signe et dresse le tableau de variations de f.',
      'f′(x) = 1 '+MN+' '+c+' ÷ (x '+MN+' '+d+')² = ((x '+MN+' '+d+')² '+MN+' '+c+') ÷ (x '+MN+' '+d+')² = '+(d-s===0?'x('+H.lin(d+s)+')':'('+H.lin(d-s)+')('+H.lin(d+s)+')')+' ÷ (x '+MN+' '+d+')². Le dénominateur est positif : f′(x) est du signe de '+(d-s===0?'x('+H.lin(d+s)+')':'('+H.lin(d-s)+')('+H.lin(d+s)+')')+'. Donc f est croissante sur ]'+MN+'∞ ; '+(d-s)+'], décroissante sur ['+(d-s)+' ; '+d+'[ et sur ]'+d+' ; '+(d+s)+'], croissante sur ['+(d+s)+' ; +∞[. De plus f('+(d-s)+') = '+fmt(d+b-2*s,0)+' et f('+(d+s)+') = '+fmt(d+b+2*s,0)+'.',
      ['Identifier la dérivée de c ÷ (x − d) : −c ÷ (x − d)².','Identifier la factorisation par une différence de carrés.'],
      ['Calculer f′(x) et la mettre sous forme factorisée.','Dresser le tableau de signes puis de variations.'],
      ['Calculer f′(x).','Étudier son signe.','Calculer f('+(d-s)+') et f('+(d+s)+').']),
     K('Montre que l’équation f(x) = '+k+' admet une unique solution α dans ]'+(d+s)+' ; +∞[, puis détermine l’entier n tel que n '+MN+' 1 < α ≤ n.',
      'Sur ]'+(d+s)+' ; +∞[, f est continue et strictement croissante, de f('+(d+s)+') = '+fmt(m0,0)+' jusqu’à +∞. Comme '+fmt(m0,0)+' < '+k+', le théorème des valeurs intermédiaires (appliqué à une fonction strictement monotone) assure qu’il existe une unique solution α. On calcule f('+(n-1)+') = '+(n-1)+' + '+par(b,0)+' + '+c+' ÷ ('+(n-1)+' '+MN+' '+d+') '+eqSym(f(n-1),2)+' '+fmt(f(n-1),2)+' < '+k+' et f('+n+') = '+n+' + '+par(b,0)+' + '+c+' ÷ ('+n+' '+MN+' '+d+') '+eqSym(f(n),2)+' '+fmt(f(n),2)+' ≥ '+k+'. Donc '+(n-1)+' < α ≤ '+n+'.',
      ['Identifier les hypothèses du théorème des valeurs intermédiaires : continuité et stricte monotonie.','Identifier l’intervalle image de f.'],
      ['Justifier la continuité et la stricte croissance sur l’intervalle.','Encadrer α par des valeurs entières de f.'],
      ['Justifier l’existence et l’unicité de α.','Calculer f('+(n-1)+') = '+fmt(f(n-1),2)+'.','Calculer f('+n+') = '+fmt(f(n),2)+'.','Conclure : '+(n-1)+' < α ≤ '+n+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{s:s,c:c,d:d,b:b,k:k,n:n,m0:m0}}; }

  /* ================= Produit vectoriel (espace) ================= */
  var NORM=[{n:[1,2,2],N:3,e:[[2,-1,0],[2,0,-1]]},{n:[2,3,6],N:7,e:[[3,-2,0],[3,0,-1]]},{n:[2,6,9],N:11,e:[[3,-1,0],[9,0,-2]]},{n:[4,4,7],N:9,e:[[1,-1,0],[7,0,-4]]},{n:[1,4,8],N:9,e:[[4,-1,0],[8,0,-1]]}];
  function cross(u,v){ return [u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]]; }
  function dot(u,v){ return u[0]*v[0]+u[1]*v[1]+u[2]*v[2]; }
  var LPV={jardin:'un panneau solaire triangulaire',sport:'une voile d’ombrage triangulaire',coop:'une enseigne triangulaire'};
  function gPV(x){
    var r=x.rnd, nm=pick(r,NORM), n=nm.n, e1=nm.e[0], e2=nm.e[1], s1,t1,s2,t2,det,w1,w2,lam,it;
    for(it=0;it<400;it++){ s1=ri(r,-2,2); t1=ri(r,-2,2); s2=ri(r,-2,2); t2=ri(r,-2,2); det=s1*t2-s2*t1; if(det===0||Math.abs(det)>3) continue; w1=ri(r,-2,2); w2=ri(r,-2,2); lam=ri(r,-2,2); if(lam===0) continue; break; }
    var A=[ri(r,-3,3),ri(r,-3,3),ri(r,-3,3)], comb=function(s,t){ return [A[0]+s*e1[0]+t*e2[0],A[1]+s*e1[1]+t*e2[1],A[2]+s*e1[2]+t*e2[2]]; };
    var B=comb(s1,t1), C=comb(s2,t2), D0=comb(w1,w2), D=[D0[0]+lam*n[0],D0[1]+lam*n[1],D0[2]+lam*n[2]];
    var AB=[B[0]-A[0],B[1]-A[1],B[2]-A[2]], AC=[C[0]-A[0],C[1]-A[1],C[2]-A[2]], AD=[D[0]-A[0],D[1]-A[1],D[2]-A[2]], cp=cross(AB,AC);
    var P3=function(v){ return '('+v.map(function(c){ return fmt(c,0); }).join('\u00a0;\u00a0')+')'; }, K2=cp[0]*cp[0]+cp[1]*cp[1]+cp[2]*cp[2], nrm=Math.abs(det)*nm.N, aire=nrm/2;
    var d0=-(n[0]*A[0]+n[1]*A[1]+n[2]*A[2]), val=dot(cp,AD), vol=Math.abs(val)/6;
    var cf=function(c,v,first){ return tm(c,v,first); }, plane=cf(n[0],'x',true)+cf(n[1],'y',!n[0])+cf(n[2],'z',!n[0]&&!n[1])+(d0===0?'':(d0<0?' '+MN+' '+(-d0):' + '+d0))+' = 0';
    var intro='Dans l’espace muni d’un repère orthonormé (unité : 1 m), '+LPV[x.W.id]+' a pour sommets A'+P3(A)+', B'+P3(B)+' et C'+P3(C)+'.';
    var p1=[K('Calcule les coordonnées des vecteurs →AB et →AC, puis celles du vecteur →AB ∧ →AC.',
      '→AB '+P3(AB)+' et →AC '+P3(AC)+'. Les coordonnées de →AB ∧ →AC sont : x = '+par(AB[1],0)+' × '+par(AC[2],0)+' '+MN+' '+par(AB[2],0)+' × '+par(AC[1],0)+' = '+fmt(cp[0],0)+' ; y = '+par(AB[2],0)+' × '+par(AC[0],0)+' '+MN+' '+par(AB[0],0)+' × '+par(AC[2],0)+' = '+fmt(cp[1],0)+' ; z = '+par(AB[0],0)+' × '+par(AC[1],0)+' '+MN+' '+par(AB[1],0)+' × '+par(AC[0],0)+' = '+fmt(cp[2],0)+'. Donc →AB ∧ →AC '+P3(cp)+'.',
      ['Identifier la formule des coordonnées du produit vectoriel.','Identifier les coordonnées des vecteurs →AB et →AC.'],
      ['Calculer les coordonnées de →AB et de →AC.','Écrire les trois composantes du produit vectoriel.'],
      ['Calculer →AB et →AC.','Calculer la composante x : '+fmt(cp[0],0)+'.','Calculer les composantes y et z : '+fmt(cp[1],0)+' et '+fmt(cp[2],0)+'.']),
     K('Déduis-en l’aire du triangle ABC (en m²).',
      'L’aire du triangle ABC est (1 ÷ 2) × ‖→AB ∧ →AC‖. On a '+par(cp[0],0)+'² + '+par(cp[1],0)+'² + '+par(cp[2],0)+'² = '+K2+', donc ‖→AB ∧ →AC‖ = √'+K2+' = '+fmt(nrm,0)+'. L’aire vaut '+fmt(nrm,0)+' ÷ 2 = '+fmt(aire,1)+' m².',
      ['Identifier le lien entre l’aire d’un triangle et la norme du produit vectoriel.','Identifier la formule de la norme.'],
      ['Écrire Aire = ‖→AB ∧ →AC‖ ÷ 2.','Calculer la norme.'],
      ['Calculer la somme des carrés : '+K2+'.','Calculer la norme : '+fmt(nrm,0)+'.','Calculer l’aire : '+fmt(aire,1)+' m².'])];
    var i2=(x.standalone2?'On rappelle que le triangle ABC a pour sommets A'+P3(A)+', B'+P3(B)+' et C'+P3(C)+', avec →AB ∧ →AC '+P3(cp)+'. ':'')+'Un point D a pour coordonnées D'+P3(D)+'.';
    var p2=[K('Détermine une équation cartésienne du plan (ABC).',
      'Le vecteur →AB ∧ →AC '+P3(cp)+' est normal au plan (ABC). Il est colinéaire à →n '+P3(n)+' (on a →AB ∧ →AC = '+fmt(det,0)+' →n). Une équation du plan est donc '+n[0]+'x + '+n[1]+'y + '+n[2]+'z + d = 0. Comme A appartient au plan : '+n[0]+' × '+par(A[0],0)+' + '+n[1]+' × '+par(A[1],0)+' + '+n[2]+' × '+par(A[2],0)+' + d = 0, soit '+fmt(-d0,0)+' + d = 0, donc d = '+fmt(d0,0)+'. Le plan (ABC) a pour équation '+plane+'.',
      ['Identifier qu’un produit vectoriel de deux vecteurs du plan est normal au plan.','Identifier la forme d’une équation de plan.'],
      ['Choisir un vecteur normal colinéaire plus simple.','Utiliser un point du plan pour trouver d.'],
      ['Écrire le vecteur normal.','Calculer d = '+fmt(d0,0)+'.','Écrire l’équation du plan.']),
     K('Calcule le volume du tétraèdre ABCD (arrondi au centième si nécessaire).',
      'Le volume est V = |(→AB ∧ →AC) ⋅ →AD| ÷ 6. On a →AD '+P3(AD)+', donc (→AB ∧ →AC) ⋅ →AD = '+par(cp[0],0)+' × '+par(AD[0],0)+' + '+par(cp[1],0)+' × '+par(AD[1],0)+' + '+par(cp[2],0)+' × '+par(AD[2],0)+' = '+fmt(val,0)+'. Donc V = '+Math.abs(val)+' ÷ 6 '+eqSym(vol,2)+' '+fmt(rd(vol,2),2)+' m³.',
      ['Identifier la formule du volume d’un tétraèdre avec le produit mixte.','Identifier les coordonnées de →AD.'],
      ['Calculer →AD.','Écrire le produit scalaire (→AB ∧ →AC) ⋅ →AD.'],
      ['Calculer →AD '+P3(AD)+'.','Calculer le produit mixte : '+fmt(val,0)+'.','Diviser par 6 : '+fmt(rd(vol,2),2)+' m³.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{A:A,B:B,C:C,D:D,n:n,cp:cp,aire:aire,val:val,vol:vol,d0:d0}}; }

  /* ================= Arithmétique : congruences ================= */
  function gAR1(x){
    var r=x.rnd, m=pick(r,[7,9,11,13]), a,it; for(it=0;it<200;it++){ a=ri(r,2,m-2); if(gcd(a,m)===1) break; }
    var nn=ri(r,50,2030), cyc=[], v=1, L=0; do{ v=(v*a)%m; cyc.push(v); L++; }while(v!==1&&L<40);
    var rho=nn%L===0?L:nn%L, rem=cyc[rho-1], q=Math.floor((nn-rho)/L);
    var mp=pick(r,[7,11,13]), a2=ri(r,2,mp-1), b2=ri(r,1,mp-1), inv=0; for(var k=1;k<mp;k++) if((a2*k)%mp===1) inv=k;
    var x0=(inv*b2)%mp, prodInv=a2*inv, qInv=(prodInv-1)/mp, prodB=inv*b2, qB=Math.floor(prodB/mp);
    var ex=pick(r,[0,1,2]), exprs=[{s:'n³ '+MN+' n',f:function(n){ return n*n*n-n; }},{s:'n(n + 1)(n + 2)',f:function(n){ return n*(n+1)*(n+2); }},{s:'n³ + 5n',f:function(n){ return n*n*n+5*n; }}], E6=exprs[ex];
    var tab=[0,1,2,3,4,5].map(function(k){ return {k:k,v:E6.f(k),res:E6.f(k)%6}; });
    var ad=ri(r,2,9), nd=ri(r,100,2025), cyc10=[], w=ad%10; do{ cyc10.push(w); w=(w*ad)%10; }while(w!==ad%10&&cyc10.length<12); var per=cyc10.length;
    var rho2=nd%per===0?per:nd%per, last=cyc10[rho2-1], q2=Math.floor((nd-rho2)/per);
    var intro='Le comité étudie des nombres entiers à l’aide de congruences. Dans ce problème, on note a ≡ b [m] lorsque m divise a − b.';
    var p1=[K('Détermine le reste de la division euclidienne de '+a+'^'+nn+' par '+m+'.',
      'On calcule les restes des premières puissances de '+a+' modulo '+m+' : '+cyc.map(function(c,i){ return a+'^'+(i+1)+' ≡ '+c; }).join(', ')+' ['+m+']. Comme '+a+'^'+L+' ≡ 1 ['+m+'], la suite des restes est périodique de période '+L+'. On écrit '+nn+' = '+L+' × '+q+' + '+rho+'. Alors '+a+'^'+nn+' = ('+a+'^'+L+')^'+q+' × '+a+'^'+rho+' ≡ 1 × '+cyc[rho-1]+' ≡ '+rem+' ['+m+']. Le reste est donc '+rem+'.',
      ['Identifier la méthode : chercher la période des puissances modulo m.','Identifier la compatibilité des congruences avec la puissance.'],
      ['Calculer les restes des puissances successives.','Écrire l’exposant sous la forme L × q + ρ.'],
      ['Déterminer la période : '+L+'.','Effectuer la division de '+nn+' par '+L+'.','Conclure : le reste est '+rem+'.']),
     K('Résous dans ℤ l’équation '+a2+'x ≡ '+b2+' ['+mp+'].',
      'On cherche un inverse de '+a2+' modulo '+mp+' : '+a2+' × '+inv+' = '+prodInv+' = '+mp+' × '+qInv+' + 1, donc '+a2+' × '+inv+' ≡ 1 ['+mp+']. En multipliant l’équation par '+inv+' : x ≡ '+inv+' × '+b2+' ['+mp+']. Or '+inv+' × '+b2+' = '+prodB+' = '+mp+' × '+qB+' + '+x0+'. Donc x ≡ '+x0+' ['+mp+']. L’ensemble des solutions est {'+x0+' + '+mp+'k, k ∈ ℤ}.',
      ['Identifier qu’on cherche l’inverse de '+a2+' modulo '+mp+'.','Identifier que '+mp+' est premier, donc l’inverse existe.'],
      ['Multiplier les deux membres par l’inverse.','Réduire le résultat modulo '+mp+'.'],
      ['Trouver l’inverse : '+inv+'.','Calculer '+inv+' × '+b2+' modulo '+mp+'.','Écrire l’ensemble des solutions.'])];
    var i2='Par ailleurs, le comité s’intéresse à l’expression E(n) = '+E6.s+', où n est un entier naturel.';
    var p2=[K('Montre que, pour tout entier naturel n, E(n) est divisible par 6.',
      'On étudie E(n) modulo 6 selon le reste de n modulo 6 : '+tab.map(function(t){ return 'si n ≡ '+t.k+', alors E(n) ≡ '+t.res; }).join(' ; ')+' [6]. Dans tous les cas E(n) ≡ 0 [6]. Donc 6 divise E(n) pour tout entier naturel n.',
      ['Identifier la méthode : disjonction des cas selon le reste modulo 6.','Identifier que tout entier est congru à 0, 1, 2, 3, 4 ou 5 modulo 6.'],
      ['Dresser un tableau des restes de n modulo 6.','Calculer E(n) modulo 6 dans chaque cas.'],
      ['Traiter les six cas.','Constater que le reste est toujours 0.','Conclure.']),
     K('Quel est le chiffre des unités de '+ad+'^'+nd+' ?',
      'Les chiffres des unités des premières puissances de '+ad+' sont : '+cyc10.map(function(c,i){ return ad+'^'+(i+1)+' → '+c; }).join(', ')+'. Ils se répètent avec une période '+per+'. On écrit '+nd+' = '+per+' × '+q2+' + '+rho2+'. Le chiffre des unités de '+ad+'^'+nd+' est donc celui de '+ad+'^'+rho2+', c’est-à-dire '+last+'.',
      ['Identifier qu’on cherche '+ad+'^'+nd+' modulo 10.','Identifier la périodicité des chiffres des unités.'],
      ['Lister les chiffres des unités des premières puissances.','Utiliser la division euclidienne de l’exposant.'],
      ['Déterminer la période : '+per+'.','Effectuer la division de '+nd+' par '+per+'.','Conclure : '+last+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{m:m,a:a,n:nn,rem:rem,L:L,mp:mp,a2:a2,b2:b2,x0:x0,ex:ex,ad:ad,nd:nd,last:last,per:per}}; }

  /* ================= Arithmétique : PGCD, Bézout, Gauss ================= */
  function egcd(a,b){ if(b===0) return [a,1,0]; var t=egcd(b,a%b); return [t[0],t[2],t[1]-Math.floor(a/b)*t[2]]; }
  function gAR2(x){
    var r=x.rnd, g,m1,m2,a,b,it; for(it=0;it<400;it++){ g=ri(r,1,4); m1=ri(r,4,19); m2=ri(r,2,m1-1); if(gcd(m1,m2)!==1) continue; a=g*m1; b=g*m2; if(a<=90&&a>b&&b>=8) break; }
    var steps=[], aa=a, bb=b; while(bb){ steps.push([aa,bb,Math.floor(aa/bb),aa%bb]); var t=aa%bb; aa=bb; bb=t; }
    var eg=egcd(a,b), u=eg[1], v=eg[2], gg=eg[0];
    var tt,cc,x0,y0,al=a/gg,be=b/gg, ks;
    var best=null; for(tt=2;tt<=60;tt++){ cc=gg*tt; var sols=[]; for(var xx=0;xx<=Math.floor(cc/a);xx++){ if((cc-a*xx)%b===0) sols.push([xx,(cc-a*xx)/b]); } if(sols.length>=1&&sols.length<=3&&tt>=6) { if(!best||r()<0.35) best=[tt,cc,sols]; } }
    if(!best){ tt=6; cc=gg*tt; best=[tt,cc,[]]; for(var x1=0;x1<=Math.floor(cc/a);x1++) if((cc-a*x1)%b===0) best[2].push([x1,(cc-a*x1)/b]); }
    tt=best[0]; cc=best[1]; var sols2=best[2]; x0=u*tt; y0=v*tt;
    var intro='Le comité cherche à répartir des articles. On considère les entiers a = '+a+' et b = '+b+'.';
    var p1=[K('Calcule le PGCD de '+a+' et '+b+' à l’aide de l’algorithme d’Euclide.',
      'On effectue les divisions euclidiennes successives : '+steps.map(function(s){ return s[0]+' = '+s[1]+' × '+s[2]+' + '+s[3]; }).join(' ; ')+'. Le dernier reste non nul est '+gg+'. Donc PGCD('+a+' ; '+b+') = '+gg+'.',
      ['Identifier l’algorithme d’Euclide : divisions successives.','Identifier que le PGCD est le dernier reste non nul.'],
      ['Écrire les divisions euclidiennes successives.'],
      ['Effectuer les divisions.','Repérer le dernier reste non nul.','Conclure : PGCD = '+gg+'.']),
     K('Détermine deux entiers relatifs u et v tels que '+a+'u + '+b+'v = '+gg+' (identité de Bézout).',
      'En remontant l’algorithme d’Euclide, on obtient les coefficients u = '+fmt(u,0)+' et v = '+fmt(v,0)+'. Vérification : '+a+' × '+par(u,0)+' + '+b+' × '+par(v,0)+' = '+fmt(a*u,0)+' + '+par(b*v,0)+' = '+fmt(a*u+b*v,0)+'. On a bien '+a+'u + '+b+'v = '+gg+'.',
      ['Identifier le théorème de Bézout.','Identifier la méthode : remonter les divisions d’Euclide.'],
      ['Exprimer chaque reste en fonction de a et b.','Remonter jusqu’au PGCD.'],
      ['Remonter l’algorithme.','Lire u = '+fmt(u,0)+' et v = '+fmt(v,0)+'.','Vérifier l’égalité.'])];
    var i2=(x.standalone2?'On rappelle que a = '+a+', b = '+b+', PGCD(a ; b) = '+gg+' et '+a+' × '+par(u,0)+' + '+b+' × '+par(v,0)+' = '+gg+'. ':'')+'On considère l’équation (E) : '+a+'x + '+b+'y = '+cc+', d’inconnues les entiers relatifs x et y.';
    var p2=[K('Résous (E) dans ℤ².',
      'Comme PGCD('+a+' ; '+b+') = '+gg+' divise '+cc+' ('+cc+' = '+gg+' × '+tt+'), l’équation admet des solutions. En multipliant l’identité de Bézout par '+tt+' : '+a+' × '+par(x0,0)+' + '+b+' × '+par(y0,0)+' = '+cc+', donc (x₀ ; y₀) = ('+fmt(x0,0)+' ; '+fmt(y0,0)+') est une solution particulière. Les solutions sont les couples (x ; y) = ('+fmt(x0,0)+' + '+be+'k ; '+fmt(y0,0)+' '+MN+' '+al+'k), k ∈ ℤ.',
      ['Identifier la condition d’existence : le PGCD divise le second membre.','Identifier la structure des solutions : solution particulière + solutions homogènes.'],
      ['Multiplier la relation de Bézout par '+tt+'.','Appliquer le théorème de Gauss pour la forme générale.'],
      ['Vérifier que '+gg+' divise '+cc+'.','Trouver une solution particulière.','Écrire la solution générale.']),
     K('Détermine tous les couples (x ; y) d’entiers naturels solutions de (E).',
      'On cherche les valeurs de k telles que '+fmt(x0,0)+' + '+be+'k ≥ 0 et '+fmt(y0,0)+' '+MN+' '+al+'k ≥ 0. Par énumération des couples (x ; y) d’entiers naturels vérifiant '+a+'x + '+b+'y = '+cc+', on obtient : '+(sols2.length?sols2.map(function(s){ return '('+s[0]+' ; '+s[1]+')'; }).join(' ; '):'aucun couple')+'. Les solutions en entiers naturels sont donc '+sols2.length+' couple'+(sols2.length>1?'s':'')+'.',
      ['Identifier les contraintes x ≥ 0 et y ≥ 0.','Identifier que x est borné par '+Math.floor(cc/a)+'.'],
      ['Écrire les inégalités sur k.','Tester les valeurs possibles.'],
      ['Déterminer l’encadrement de x.','Vérifier chaque valeur possible.','Lister les couples solutions.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,g:gg,u:u,v:v,c:cc,t:tt,sols:sols2}}; }

  /* ================= Similitudes planes ================= */
  var SA=[[1,1],[1,-1],[-1,1],[-1,-1],[0,1],[0,-1],[2,0],[-2,0],[0,2],[0,-2]];
  function cmul(p,q){ return [p[0]*q[0]-p[1]*q[1],p[0]*q[1]+p[1]*q[0]]; }
  function gSIM(x){
    var r=x.rnd, a=pick(r,SA), om=[ri(r,-3,3),ri(r,-3,3)], one_a=[1-a[0],-a[1]], bb=cmul(om,one_a), zp=[ri(r,-3,3),ri(r,-3,3)], za=cmul(a,zp), zimg=[za[0]+bb[0],za[1]+bb[1]];
    var N=a[0]*a[0]+a[1]*a[1], rho=Math.sqrt(N), real=(a[1]===0), argS=real?(a[0]>0?'0':'π'):(a[0]===0?(a[1]>0?'π/2':MN+'π/2'):(a[0]>0?(a[1]>0?'π/4':MN+'π/4'):(a[1]>0?'3π/4':MN+'3π/4')));
    var pre=[ri(r,-3,3),ri(r,-3,3)], bimg=cmul(a,pre); bimg=[bimg[0]+bb[0],bimg[1]+bb[1]];
    var aS=cS(a[0],a[1]), bS=cS(bb[0],bb[1]), N1=one_a[0]*one_a[0]+one_a[1]*one_a[1], num=cmul(bb,[one_a[0],-one_a[1]]), nS=function(c){ return cS(c[0],c[1]); };
    var rhoS=(N===1?'1':(N===2?'√2':(N===4?'2':'√'+N)));
    var intro='Dans le plan complexe, on considère la transformation s qui, à tout point M d’affixe z, associe le point M′ d’affixe z′ = ('+aS+')z + ('+bS+').';
    var p1=[K('Montre que s admet un unique point invariant Ω et détermine son affixe.',
      'Un point est invariant si z = ('+aS+')z + ('+bS+'), soit z(1 '+MN+' ('+aS+')) = '+bS+', c’est-à-dire z × ('+cS(one_a[0],one_a[1])+') = '+bS+'. Comme 1 '+MN+' a = '+cS(one_a[0],one_a[1])+' ≠ 0, il existe un unique point invariant d’affixe ω = ('+bS+') ÷ ('+cS(one_a[0],one_a[1])+'). On multiplie par le conjugué du dénominateur : |1 '+MN+' a|² = '+par(one_a[0],0)+'² + '+par(one_a[1],0)+'² = '+N1+', la partie réelle du numérateur vaut '+par(bb[0],0)+' × '+par(one_a[0],0)+' + '+par(bb[1],0)+' × '+par(one_a[1],0)+' = '+fmt(num[0],0)+' et la partie imaginaire vaut '+par(bb[1],0)+' × '+par(one_a[0],0)+' '+MN+' '+par(bb[0],0)+' × '+par(one_a[1],0)+' = '+fmt(num[1],0)+'. Donc ω = ('+cS(num[0],num[1])+') ÷ '+N1+' = '+cS(om[0],om[1])+'.',
      ['Identifier qu’un point invariant vérifie z′ = z.','Identifier que 1 − a ≠ 0.'],
      ['Écrire l’équation z = az + b et isoler z.','Diviser par un complexe en utilisant le conjugué.'],
      ['Écrire ω = b ÷ (1 − a).','Calculer le numérateur et le dénominateur.','Conclure : ω = '+cS(om[0],om[1])+'.']),
     K('Précise la nature de s et ses éléments caractéristiques.',
      'Le coefficient de z est a = '+aS+'. On a |a|² = '+par(a[0],0)+'² + '+par(a[1],0)+'² = '+N+', donc |a| = '+rhoS+', et un argument de a est '+argS+'. '+(real?'Comme a est réel, s est l’homothétie de centre Ω('+cS(om[0],om[1])+') et de rapport '+fmt(a[0],0)+'.':(N===1?'Comme |a| = 1, s est la rotation de centre Ω('+cS(om[0],om[1])+') et d’angle '+argS+'.':'s est la similitude directe de centre Ω('+cS(om[0],om[1])+'), de rapport '+rhoS+' et d’angle '+argS+'.')),
      ['Identifier le lien entre le coefficient a et la nature de la transformation.','Identifier le module et l’argument de a.'],
      ['Calculer |a| et arg(a).','Reconnaître homothétie, rotation ou similitude.'],
      ['Calculer |a|² = '+N+'.','Déterminer un argument de a.','Conclure sur la nature de s.'])];
    var i2=x.standalone2?'On rappelle que s est la transformation d’écriture complexe z′ = ('+aS+')z + ('+bS+').':'';
    var p2=[K('Calcule l’affixe de l’image du point P d’affixe '+cS(zp[0],zp[1])+' par s.',
      'z′ = ('+aS+')('+cS(zp[0],zp[1])+') + ('+bS+'). La partie réelle de ('+aS+')('+cS(zp[0],zp[1])+') est '+par(a[0],0)+' × '+par(zp[0],0)+' '+MN+' '+par(a[1],0)+' × '+par(zp[1],0)+' = '+fmt(za[0],0)+' et sa partie imaginaire est '+par(a[0],0)+' × '+par(zp[1],0)+' + '+par(a[1],0)+' × '+par(zp[0],0)+' = '+fmt(za[1],0)+'. Donc z′ = ('+cS(za[0],za[1])+') + ('+bS+') = '+cS(zimg[0],zimg[1])+'.',
      ['Identifier la formule z′ = az + b.','Identifier la règle de multiplication de deux nombres complexes.'],
      ['Calculer le produit a × z.','Ajouter b.'],
      ['Calculer a × z : '+cS(za[0],za[1])+'.','Ajouter b.','Conclure : z′ = '+cS(zimg[0],zimg[1])+'.']),
     K('Détermine l’antécédent par s du point B d’affixe '+cS(bimg[0],bimg[1])+'.',
      'On cherche z tel que ('+aS+')z + ('+bS+') = '+cS(bimg[0],bimg[1])+', soit ('+aS+')z = '+cS(bimg[0]-bb[0],bimg[1]-bb[1])+'. Donc z = ('+cS(bimg[0]-bb[0],bimg[1]-bb[1])+') ÷ ('+aS+'). On a |a|² = '+N+'. La partie réelle de ('+cS(bimg[0]-bb[0],bimg[1]-bb[1])+') × ('+cS(a[0],-a[1])+') est '+par(bimg[0]-bb[0],0)+' × '+par(a[0],0)+' + '+par(bimg[1]-bb[1],0)+' × '+par(a[1],0)+' = '+fmt((bimg[0]-bb[0])*a[0]+(bimg[1]-bb[1])*a[1],0)+' et sa partie imaginaire est '+par(bimg[1]-bb[1],0)+' × '+par(a[0],0)+' '+MN+' '+par(bimg[0]-bb[0],0)+' × '+par(a[1],0)+' = '+fmt((bimg[1]-bb[1])*a[0]-(bimg[0]-bb[0])*a[1],0)+'. Donc z = ('+cS((bimg[0]-bb[0])*a[0]+(bimg[1]-bb[1])*a[1],(bimg[1]-bb[1])*a[0]-(bimg[0]-bb[0])*a[1])+') ÷ '+N+' = '+cS(pre[0],pre[1])+'.',
      ['Identifier qu’on résout l’équation az + b = z_B.','Identifier que a ≠ 0.'],
      ['Isoler z puis diviser par a en utilisant le conjugué.'],
      ['Calculer z_B − b.','Diviser par a.','Conclure : l’antécédent est '+cS(pre[0],pre[1])+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:bb,om:om,zp:zp,zimg:zimg,pre:pre,bimg:bimg,N:N}}; }

  /* ================= Coniques ================= */
  var ELL=[[5,4,3],[5,3,4],[13,12,5],[10,6,8],[10,8,6],[17,15,8],[13,5,12],[25,24,7]], HYP=[[3,4,5],[4,3,5],[5,12,13],[12,5,13],[8,15,17]];
  function gCO(x){
    var r=x.rnd, p=ri(r,1,4), t=pick(r,[1,2,3,-1,-2]), x0=p*t*t, y0=2*p*t, ell=r()<0.55, T=ell?pick(r,ELL):pick(r,HYP), a=T[0], b=T[1], c=T[2];
    var intro='Dans le plan muni d’un repère orthonormé, le comité étudie la parabole (P) d’équation y² = '+(4*p)+'x.';
    var p1=[K('Détermine le foyer F et la directrice (D) de la parabole (P).',
      'La parabole (P) a une équation de la forme y² = 4p′x avec 4p′ = '+(4*p)+', donc p′ = '+p+'. Son foyer est F('+p+' ; 0) et sa directrice est la droite (D) d’équation x = '+MN+p+'.',
      ['Identifier la forme réduite y² = 4px d’une parabole.','Identifier les éléments : foyer et directrice.'],
      ['Comparer avec y² = 4px.'],
      ['Déterminer p = '+p+'.','Donner le foyer F('+p+' ; 0).','Donner la directrice x = −'+p+'.']),
     K('Vérifie que le point M₀('+x0+' ; '+fmt(y0,0)+') appartient à (P), puis détermine l’équation de la tangente à (P) en M₀.',
      'On a y₀² = '+par(y0,0)+'² = '+(y0*y0)+' et 4 × '+x0+' × '+p+' = '+(4*p*x0)+', donc M₀ ∈ (P). La tangente en M₀(x₀ ; y₀) à la parabole y² = 4px a pour équation y₀y = 2p(x + x₀), soit '+fmt(y0,0)+'y = '+(2*p)+'(x + '+x0+'). En divisant par '+(2*p)+' : '+(t===1?'':(t===-1?MN:t))+'y = x + '+x0+'.',
      ['Identifier la condition d’appartenance : les coordonnées vérifient l’équation.','Identifier la formule de la tangente en un point d’une parabole.'],
      ['Vérifier y₀² = 4px₀.','Écrire y₀y = 2p(x + x₀) puis simplifier.'],
      ['Vérifier l’appartenance.','Écrire l’équation de la tangente.','Simplifier : '+(t===1?'':(t===-1?MN:t))+'y = x + '+x0+'.'])];
    var i2=(x.standalone2?'On rappelle que (P) est la parabole d’équation y² = '+(4*p)+'x. ':'')+'Le comité étudie aussi '+(ell?'l’ellipse (E) d’équation x² ÷ '+(a*a)+' + y² ÷ '+(b*b)+' = 1.':'l’hyperbole (H) d’équation x² ÷ '+(a*a)+' '+MN+' y² ÷ '+(b*b)+' = 1.');
    var p2=[K('Détermine les coordonnées des foyers de '+(ell?'(E)':'(H)')+'.',
      (ell?'L’ellipse a pour demi-axes a = '+a+' et b = '+b+' avec a > b. On pose c² = a² '+MN+' b² = '+(a*a)+' '+MN+' '+(b*b)+' = '+(c*c)+', donc c = √'+(c*c)+' = '+c+'. Les foyers sont F('+c+' ; 0) et F′('+MN+c+' ; 0).':'L’hyperbole a pour paramètres a = '+a+' et b = '+b+'. On pose c² = a² + b² = '+(a*a)+' + '+(b*b)+' = '+(c*c)+', donc c = √'+(c*c)+' = '+c+'. Les foyers sont F('+c+' ; 0) et F′('+MN+c+' ; 0).'),
      ['Identifier les paramètres a et b de la conique.','Identifier la relation entre a, b et c.'],
      ['Écrire c² en fonction de a² et b².','Calculer c.'],
      ['Calculer c² = '+(c*c)+'.','Calculer c = '+c+'.','Donner les coordonnées des foyers.']),
     K(ell?'Détermine les sommets de (E) et son excentricité.':'Détermine les équations des asymptotes de (H) et son excentricité.',
      ell?'Les sommets de (E) sont A('+a+' ; 0), A′('+MN+a+' ; 0), B(0 ; '+b+') et B′(0 ; '+MN+b+'). L’excentricité est e = c ÷ a = '+c+' ÷ '+a+' '+eqSym(c/a,2)+' '+fmt(rd(c/a,2),2)+'.':'Les asymptotes de (H) sont les droites d’équations y = ±(b ÷ a)x, soit y = '+b+'x ÷ '+a+' et y = '+MN+b+'x ÷ '+a+'. L’excentricité est e = c ÷ a = '+c+' ÷ '+a+' '+eqSym(c/a,2)+' '+fmt(rd(c/a,2),2)+'.',
      ell?['Identifier les sommets sur les axes de l’ellipse.','Identifier la définition de l’excentricité.']:['Identifier la forme des asymptotes d’une hyperbole.','Identifier la définition de l’excentricité.'],
      ell?['Lire les sommets sur les axes.','Écrire e = c ÷ a.']:['Écrire y = ±(b ÷ a)x.','Écrire e = c ÷ a.'],
      ell?['Donner les quatre sommets.','Calculer e = c ÷ a.','Conclure : e < 1.']:['Donner les asymptotes.','Calculer e = c ÷ a.','Conclure : e > 1.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{p:p,t:t,x0:x0,y0:y0,ell:ell,a:a,b:b,c:c}}; }

  var DEFS=(M.defs67||[]).concat([
    {id:'ED',label:'Équations différentielles',w1:1,build:gED,D:['TleD — Équations différentielles'],C:['TleC — Équations différentielles']},
    {id:'PB',label:'Probabilités',w1:2,build:gPB,D:['TleD — Probabilités : événements & probabilité conditionnelle','TleD — Variables aléatoires & loi binomiale'],C:['TleC — Probabilités : événements & probabilité conditionnelle','TleC — Variables aléatoires & loi binomiale']},
    {id:'SU2',label:'Suites numériques',w1:1,build:gSU2,D:['TleD — Suites numériques'],C:['TleC — Suites numériques']},
    {id:'ET',label:'Étude de fonction rationnelle',w1:1,build:gET,D:['TleD — Limites & continuité','TleD — Dérivation & étude de fonctions'],C:['TleC — Limites & continuité','TleC — Dérivation & étude de fonctions']},
    {id:'PV',label:'Produit vectoriel et espace',w1:1,build:gPV,D:["TleD — Produit vectoriel","TleD — Produit scalaire & orthogonalité dans l'espace","TleD — Plans, droites & distances dans l'espace"],C:['TleC — Produit vectoriel']},
    {id:'S2',label:'Statistique à deux variables',w1:2,build:function(x){ return M.gS2(x); },D:['TleD — Statistiques à deux variables']},
    {id:'AR1',label:'Congruences',w1:1,build:gAR1,C:['TleC — Divisibilité & congruences','TleC — Arithmétique : ℤ, division euclidienne & numération','TleC — Nombres premiers & ℤ/nℤ']},
    {id:'AR2',label:'PGCD, Bézout et Gauss',w1:1,build:gAR2,C:['TleC — PGCD, PPCM, Bézout & Gauss']},
    {id:'SIM',label:'Similitudes et isométries',w1:1,build:gSIM,C:['TleC — Similitudes planes directes & indirectes','TleC — Isométries du plan']},
    {id:'CO',label:'Coniques',w1:1,build:gCO,C:["TleC — Coniques : définition & parabole","TleC — Ellipse & hyperbole"]}
  ]);
  M.regT=function(def){ if(def.D) MOD['TD-'+def.id]={cls:'Tle D',theme:def.D[0],themes:def.D,label:def.label,w1:def.w1,build:def.build}; if(def.C) MOD['TC-'+def.id]={cls:'Tle C',theme:def.C[0],themes:def.C,label:def.label,w1:def.w1,build:def.build}; };
  DEFS.forEach(M.regT);
})(typeof globalThis!=='undefined'?globalThis:this);
