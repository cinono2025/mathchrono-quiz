/* ===== MQ_SOM : modules de problèmes sommatifs — 1ère D et 1ère C (guides de mathématiques de Première D / Première C) ===== */
(function(G){
  'use strict';
  var M=G.MQ_SOM_MOD, MOD=M.MOD, fmt=M.fmt, money=M.money, ri=M.ri, pick=M.pick, gcd=M.gcd;
  function fixMinus(t){ return String(t).replace(/([\s(\[{;,]|^)-(?=\d)/g,'$1\u2212'); }
  function K(t,s,A,Mm,O){ return M.K(fixMinus(t),fixMinus(s),A.map(fixMinus),Mm.map(fixMinus),O.map(fixMinus)); }
  var MN='\u2212';
  function par(v,d){ return v<0?'('+fmt(v,d||0)+')':fmt(v,d||0); }
  function fac(g){ return g===0?'x':'('+(g<0?'x + '+fmt(-g,0):'x '+MN+' '+fmt(g,0))+')'; }
  function lin(g){ return g===0?'x':(g<0?'x + '+fmt(-g,0):'x '+MN+' '+fmt(g,0)); }
  function qStr(a,b,c){ var o=''; [[a,'x²'],[b,'x'],[c,'']].forEach(function(t){ var k=t[0]; if(!k) return; var ab=Math.abs(k), body=t[1]?((ab===1?'':fmt(ab,0))+t[1]):fmt(ab,0); if(!o) o=(k<0?MN:'')+body; else o+=(k<0?' '+MN+' ':' + ')+body; }); return o; }
  function cubStr(b,c,d){ var o='x³'; [[b,'x²'],[c,'x'],[d,'']].forEach(function(t){ var k=t[0]; if(!k) return; var ab=Math.abs(k), body=t[1]?((ab===1?'':fmt(ab,0))+t[1]):fmt(ab,0); o+=(k<0?' '+MN+' ':' + ')+body; }); return o; }
  function eqSym(v,d){ var r=Math.round(v*Math.pow(10,d))/Math.pow(10,d); return Math.abs(v-r)<1e-9?'=':'≈'; }

  /* ================= Second degré : bénéfice ================= */
  var LSD={jardin:'le bénéfice (en milliers de francs) de la vente de x dizaines de kilogrammes de légumes',sport:'le bénéfice (en milliers de francs) de la vente de x dizaines de billets du tournoi',coop:'le bénéfice (en milliers de francs) de la vente de x dizaines de cahiers'};
  function gSD(x){
    var r=x.rnd, A=pick(r,[1,2,3]), r1=ri(r,1,6), r2=r1+ri(r,4,9), b=A*(r1+r2), c=A*r1*r2, Bf=qStr(-A,b,-c);
    var D=b*b-4*A*c, sd=A*(r2-r1), al=(r1+r2)/2, Bmax=A*(r2-r1)*(r2-r1)/4, s1=ri(r,r1+1,Math.floor((r1+r2-1)/2)), s2=r1+r2-s1, kk=-A*s1*s1+b*s1-c, C2=c+kk, D2=b*b-4*A*C2, sd2=A*(s2-s1);
    var intro='Le comité modélise '+LSD[x.W.id]+' par B(x) = '+Bf+', pour x ≥ 0.';
    var p1=[K('Calcule le discriminant de B(x) puis résous l’équation B(x) = 0.',
      'Pour B(x) = '+Bf+' : a = '+MN+A+', b = '+b+' et c = '+MN+c+'. Δ = b² '+MN+' 4ac = '+b+'² '+MN+' 4 × ('+MN+A+') × ('+MN+c+') = '+(b*b)+' '+MN+' '+(4*A*c)+' = '+D+'. Comme Δ > 0, il y a deux solutions : x₁ = ('+MN+b+' '+MN+' '+sd+') ÷ (2 × ('+MN+A+')) = ('+fmt(-b-sd,0)+') ÷ ('+fmt(-2*A,0)+') = '+r2+' et x₂ = ('+MN+b+' + '+sd+') ÷ (2 × ('+MN+A+')) = ('+fmt(-b+sd,0)+') ÷ ('+fmt(-2*A,0)+') = '+r1+'. L’ensemble des solutions est {'+r1+' ; '+r2+'}.',
      ['Identifier les coefficients a, b et c du trinôme.','Identifier la méthode : discriminant puis formules des racines.'],
      ['Écrire Δ = b² '+MN+' 4ac avec les valeurs de a, b et c.','Écrire les formules x = (−b ± √Δ) ÷ (2a).'],
      ['Calculer Δ = '+D+'.','Calculer √Δ = '+sd+'.','Calculer les deux racines : '+r1+' et '+r2+'.','Conclure : S = {'+r1+' ; '+r2+'}.']),
     K('Factorise B(x), dresse son tableau de signes et détermine les valeurs de x pour lesquelles le bénéfice est strictement positif.',
      'B(x) = a(x '+MN+' x₁)(x '+MN+' x₂) = '+MN+A+'('+lin(r1)+')('+lin(r2)+'). Comme a = '+MN+A+' < 0, B(x) est du signe de a à l’extérieur des racines et du signe contraire entre les racines : B(x) < 0 pour x < '+r1+', B(x) > 0 pour '+r1+' < x < '+r2+', B(x) < 0 pour x > '+r2+'. Le bénéfice est strictement positif pour x ∈ ]'+r1+' ; '+r2+'[.',
      ['Identifier la forme factorisée a(x − x₁)(x − x₂) du trinôme.','Identifier le signe du coefficient a.'],
      ['Écrire la factorisation à l’aide des racines.','Dresser le tableau de signes de B(x).'],
      ['Écrire B(x) = '+MN+A+'('+lin(r1)+')('+lin(r2)+').','Déterminer le signe de B(x) sur chaque intervalle.','Conclure : B(x) > 0 sur ]'+r1+' ; '+r2+'[.'])];
    var i2=(x.standalone2?'On rappelle que B(x) = '+Bf+' (en milliers de francs), pour x ≥ 0. ':'')+'Le comité cherche à optimiser ce bénéfice.';
    var p2=[K('Détermine la valeur de x pour laquelle le bénéfice est maximal, puis ce bénéfice maximal.',
      'La parabole de B(x) a pour sommet le point d’abscisse α = '+MN+'b ÷ (2a) = '+MN+b+' ÷ (2 × ('+MN+A+')) = '+fmt(al,1)+'. Le bénéfice maximal est B(α) = '+MN+A+' × '+fmt(al*al,2)+' + '+b+' × '+fmt(al,1)+' '+MN+' '+c+' = '+fmt(-A*al*al,2)+' + '+fmt(b*al,2)+' '+MN+' '+c+' = '+fmt(Bmax,2)+' (milliers de francs), atteint pour x = '+fmt(al,1)+'.',
      ['Identifier que a < 0 : la parabole admet un maximum.','Identifier la formule de l’abscisse du sommet.'],
      ['Écrire α = −b ÷ (2a).','Écrire B(α) en remplaçant x par α.'],
      ['Calculer α = '+fmt(al,1)+'.','Calculer B(α) = '+fmt(Bmax,2)+'.','Conclure avec l’unité (milliers de francs).']),
     K('Détermine les valeurs de x pour lesquelles le bénéfice est supérieur ou égal à '+fmt(kk,0)+' milliers de francs.',
      'B(x) ≥ '+fmt(kk,0)+' équivaut à '+Bf+' '+MN+' '+fmt(kk,0)+' ≥ 0, soit '+qStr(-A,b,-C2)+' ≥ 0. Le discriminant est Δ′ = '+b+'² '+MN+' 4 × ('+MN+A+') × ('+MN+C2+') = '+(b*b)+' '+MN+' '+(4*A*C2)+' = '+D2+', donc √Δ′ = '+sd2+' et les racines sont ('+fmt(-b-sd2,0)+') ÷ ('+fmt(-2*A,0)+') = '+s2+' et ('+fmt(-b+sd2,0)+') ÷ ('+fmt(-2*A,0)+') = '+s1+'. Comme a < 0, le trinôme est positif entre les racines : B(x) ≥ '+fmt(kk,0)+' pour x ∈ ['+s1+' ; '+s2+'].',
      ['Identifier qu’il faut résoudre une inéquation du second degré.','Identifier qu’on se ramène à un trinôme comparé à 0.'],
      ['Écrire l’inéquation sous la forme ax² + bx + c ≥ 0.','Calculer le discriminant et les racines.'],
      ['Calculer Δ′ = '+D2+'.','Calculer les racines '+s1+' et '+s2+'.','Utiliser le signe de a pour conclure.','Écrire l’ensemble des solutions : ['+s1+' ; '+s2+'].'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{A:A,b:b,c:c,r1:r1,r2:r2,k:kk,s1:s1,s2:s2}}; }

  /* ================= Suites numériques ================= */
  var LSU={jardin:{ar:'la production hebdomadaire de tomates du jardin (en kg)',un:'kg',ge:'le nombre de pucerons sur une plante',gp:'chaque semaine'},sport:{ar:'le nombre de licenciés du club de la classe',un:'licenciés',ge:'le nombre de visites de la page du tournoi',gp:'chaque jour'},coop:{ar:'le chiffre d’affaires mensuel de la boutique (en milliers de francs)',un:'milliers de francs',ge:'le nombre de clients inscrits au programme de fidélité',gp:'chaque mois'}};
  function gSU(x){
    var L=LSU[x.W.id], r=x.rnd, u0=ri(r,20,80), rr=ri(r,3,12), u10=u0+10*rr, S=11*(u0+u10)/2, q=pick(r,[2,3]), v0=pick(r,[2,3,4,5]), k=ri(r,3,6), T=v0*Math.pow(q,k)+ri(r,1,Math.floor(v0*Math.pow(q,k)/2)), v=[]; for(var i=0;i<12;i++) v.push(v0*Math.pow(q,i));
    var m=0; while(v[m]<=T) m++; var T6=v0*(1-Math.pow(q,6))/(1-q), terms=v.slice(0,m+1);
    var intro='Soit (uₙ) la suite qui donne '+L.ar+' au bout de n mois (ou périodes) : u₀ = '+u0+' et, chaque période, la valeur augmente de '+rr+' ('+L.un+').';
    var p1=[K('Montre que la suite (uₙ) est arithmétique, précise sa raison et exprime uₙ en fonction de n.',
      'Pour tout entier n, uₙ₊₁ '+MN+' uₙ = '+rr+'. Cette différence est constante : (uₙ) est une suite arithmétique de raison '+rr+' et de premier terme u₀ = '+u0+'. Donc uₙ = u₀ + n × r = '+u0+' + '+rr+'n.',
      ['Identifier la relation de récurrence : uₙ₊₁ = uₙ + '+rr+'.','Identifier la définition d’une suite arithmétique.'],
      ['Écrire uₙ₊₁ '+MN+' uₙ pour tout n.','Écrire la formule du terme général uₙ = u₀ + nr.'],
      ['Calculer uₙ₊₁ '+MN+' uₙ = '+rr+'.','Conclure : suite arithmétique de raison '+rr+'.','Écrire uₙ = '+u0+' + '+rr+'n.']),
     K('Calcule u₁₀ puis la somme S = u₀ + u₁ + … + u₁₀.',
      'u₁₀ = '+u0+' + '+rr+' × 10 = '+u0+' + '+(10*rr)+' = '+u10+'. La somme de 11 termes consécutifs d’une suite arithmétique est S = (nombre de termes) × (premier terme + dernier terme) ÷ 2 = 11 × ('+u0+' + '+u10+') ÷ 2 = 11 × '+(u0+u10)+' ÷ 2 = '+(11*(u0+u10))+' ÷ 2 = '+fmt(S,0)+'.',
      ['Identifier le nombre de termes de la somme : 11.','Identifier la formule de la somme des termes d’une suite arithmétique.'],
      ['Écrire u₁₀ = u₀ + 10r.','Écrire S = (nombre de termes) × (premier + dernier) ÷ 2.'],
      ['Calculer u₁₀ = '+u10+'.','Calculer 11 × '+(u0+u10)+' ÷ 2.','Conclure : S = '+fmt(S,0)+'.'])];
    var i2='Par ailleurs, '+L.ge+' est multiplié par '+q+' '+L.gp+'. On note (vₙ) la suite correspondante, avec v₀ = '+v0+'.';
    var p2=[K('Montre que la suite (vₙ) est géométrique, précise sa raison et exprime vₙ en fonction de n.',
      'Pour tout entier n, vₙ₊₁ = '+q+' × vₙ. (vₙ) est donc une suite géométrique de raison q = '+q+' et de premier terme v₀ = '+v0+'. Le terme général est vₙ = v₀ × qⁿ = '+v0+' × '+q+'ⁿ.',
      ['Identifier que chaque terme est le précédent multiplié par '+q+'.','Identifier la définition d’une suite géométrique.'],
      ['Écrire vₙ₊₁ = q × vₙ.','Écrire la formule vₙ = v₀ × qⁿ.'],
      ['Conclure : suite géométrique de raison '+q+'.','Écrire vₙ = '+v0+' × '+q+'ⁿ.']),
     K('Calcule la somme T₆ = v₀ + v₁ + … + v₅, puis détermine le plus petit entier n tel que vₙ > '+fmt(T,0)+'.',
      'On a q⁶ = '+Math.pow(q,6)+'. La somme des 6 premiers termes est T₆ = v₀ × (1 '+MN+' q⁶) ÷ (1 '+MN+' q) = '+v0+' × (1 '+MN+' '+Math.pow(q,6)+') ÷ (1 '+MN+' '+q+') = '+v0+' × ('+fmt(1-Math.pow(q,6),0)+') ÷ ('+fmt(1-q,0)+') = '+fmt(T6,0)+'. Les premiers termes sont '+terms.map(function(t,i){ return 'v'+String(i).replace(/\d/g,function(d){ return '₀₁₂₃₄₅₆₇₈₉'[d]; })+' = '+fmt(t,0); }).join(', ')+'. Comme v'+String(m-1).replace(/\d/g,function(d){ return '₀₁₂₃₄₅₆₇₈₉'[d]; })+' = '+fmt(v[m-1],0)+' ≤ '+fmt(T,0)+' et v'+String(m).replace(/\d/g,function(d){ return '₀₁₂₃₄₅₆₇₈₉'[d]; })+' = '+fmt(v[m],0)+' > '+fmt(T,0)+', le plus petit entier est n = '+m+'.',
      ['Identifier la formule de la somme des termes d’une suite géométrique.','Identifier qu’on cherche un seuil : la suite est croissante.'],
      ['Écrire T₆ = v₀ × (1 − q⁶) ÷ (1 − q).','Calculer les termes successifs jusqu’à dépasser le seuil.'],
      ['Calculer q⁶ = '+Math.pow(q,6)+'.','Calculer T₆ = '+fmt(T6,0)+'.','Comparer les termes au seuil '+fmt(T,0)+'.','Conclure : n = '+m+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{u0:u0,r:rr,q:q,v0:v0,T:T,n:m,S:S,T6:T6}}; }

  /* ================= Dérivation ================= */
  function gDR(x){
    var r=x.rnd, p,q,c0,a,it;
    for(it=0;it<400;it++){ p=ri(r,-3,3); q=p+2*ri(r,1,3); c0=ri(r,0,9); a=ri(r,-2,4); if(a===p||a===q) continue; break; }
    var bb=3*(p+q)/2, cc=3*p*q, f=function(t){ return t*t*t-bb*t*t+cc*t+c0; }, fp=function(t){ return 3*(t-p)*(t-q); };
    var Fs=cubStr(-bb,cc,c0), fpS=qStr(3,-3*(p+q),3*p*q), m1=p-1, M1=q+1, fa=f(a), fpa=fp(a), vals=[[m1,f(m1)],[p,f(p)],[q,f(q)],[M1,f(M1)]];
    var mx=Math.max.apply(null,vals.map(function(v){ return v[1]; })), mn=Math.min.apply(null,vals.map(function(v){ return v[1]; }));
    var xmax=vals.filter(function(v){ return v[1]===mx; }).map(function(v){ return v[0]; }), xmin=vals.filter(function(v){ return v[1]===mn; }).map(function(v){ return v[0]; });
    var ev=function(t){ var tt=par(t,0); return tt+'³ '+MN+' '+par(bb,0)+' × '+tt+'² + '+par(cc,0)+' × '+tt+' + '+c0; };
    var intro='Pour modéliser l’évolution d’un stock, le comité utilise la fonction f définie sur ℝ par f(x) = '+Fs+'.';
    var p1=[K('Calcule f′(x), puis vérifie que f′(x) = 3'+fac(p)+fac(q)+' et résous l’équation f′(x) = 0.',
      'f est un polynôme : on dérive chaque terme, ce qui donne f′(x) = '+fpS+'. Par ailleurs 3'+fac(p)+fac(q)+' = 3('+qStr(1,-(p+q),p*q)+') = '+fpS+'. Donc f′(x) = 3'+fac(p)+fac(q)+' et f′(x) = 0 équivaut à x = '+p+' ou x = '+q+'.',
      ['Identifier la règle de dérivation d’un polynôme terme à terme.','Identifier qu’un produit est nul si l’un des facteurs est nul.'],
      ['Dériver chaque terme de f(x).','Développer 3'+fac(p)+fac(q)+' pour comparer.'],
      ['Calculer f′(x) = '+fpS+'.','Vérifier la factorisation.','Résoudre f′(x) = 0 : x = '+p+' ou x = '+q+'.']),
     K('Étudie le signe de f′(x), dresse le tableau de variations de f et calcule f('+p+') et f('+q+').',
      'f′(x) = 3'+fac(p)+fac(q)+' avec '+p+' < '+q+' : f′(x) > 0 pour x < '+p+' ou x > '+q+', et f′(x) < 0 pour '+p+' < x < '+q+'. Donc f est croissante sur ]'+MN+'∞ ; '+p+'], décroissante sur ['+p+' ; '+q+'] et croissante sur ['+q+' ; +∞[. De plus f('+p+') = '+ev(p)+' = '+fmt(f(p),0)+' et f('+q+') = '+ev(q)+' = '+fmt(f(q),0)+'.',
      ['Identifier que le signe de f′ donne le sens de variation de f.','Identifier les valeurs de x où f′ s’annule.'],
      ['Dresser le tableau de signes de f′(x).','Placer les flèches de variation de f.'],
      ['Étudier le signe de f′ sur chaque intervalle.','Calculer f('+p+') = '+fmt(f(p),0)+'.','Calculer f('+q+') = '+fmt(f(q),0)+'.'])];
    var i2=x.standalone2?'On rappelle que f(x) = '+Fs+' et f′(x) = 3'+fac(p)+fac(q)+'.':'';
    var p2=[K('Détermine l’équation réduite de la tangente (T) à la courbe de f au point d’abscisse '+a+'.',
      'f('+a+') = '+ev(a)+' = '+fmt(fa,0)+'. f′('+a+') = 3 × ('+fmt(a-p,0)+') × ('+fmt(a-q,0)+') = '+fmt(fpa,0)+'. La tangente a pour équation y = f′('+a+')(x '+MN+' '+par(a,0)+') + f('+a+') = '+par(fpa,0)+'(x '+MN+' '+par(a,0)+') + '+par(fa,0)+', soit y = '+fmt(fpa,0)+'x + ('+fmt(fa,0)+' '+MN+' '+par(fpa,0)+' × '+par(a,0)+') = '+fmt(fpa,0)+'x'+((fa-fpa*a)===0?'':((fa-fpa*a)<0?' '+MN+' '+fmt(-(fa-fpa*a),0):' + '+fmt(fa-fpa*a,0)))+'.',
      ['Identifier la formule de l’équation de la tangente en un point.','Identifier les deux nombres à calculer : f(a) et f′(a).'],
      ['Écrire y = f′(a)(x − a) + f(a).','Remplacer par les valeurs numériques.'],
      ['Calculer f('+a+') = '+fmt(fa,0)+'.','Calculer f′('+a+') = '+fmt(fpa,0)+'.','Développer et conclure : y = '+fmt(fpa,0)+'x'+((fa-fpa*a)===0?'':((fa-fpa*a)<0?' '+MN+' '+fmt(-(fa-fpa*a),0):' + '+fmt(fa-fpa*a,0)))+'.']),
     K('Détermine le maximum et le minimum de f sur l’intervalle ['+m1+' ; '+M1+'].',
      'D’après les variations de f, les extremums sont à chercher parmi les valeurs aux bornes et aux points où f′ s’annule : f('+m1+') = '+fmt(f(m1),0)+', f('+p+') = '+fmt(f(p),0)+', f('+q+') = '+fmt(f(q),0)+' et f('+M1+') = '+fmt(f(M1),0)+'. Le maximum de f sur ['+m1+' ; '+M1+'] est '+fmt(mx,0)+' (atteint en x = '+xmax.map(function(v){ return fmt(v,0); }).join(' et en x = ')+') et le minimum est '+fmt(mn,0)+' (atteint en x = '+xmin.map(function(v){ return fmt(v,0); }).join(' et en x = ')+').',
      ['Identifier que les extremums sont atteints aux bornes ou en p et q.','Identifier les quatre valeurs à comparer.'],
      ['Écrire le tableau de variations sur l’intervalle donné.','Dresser la liste des valeurs candidates.'],
      ['Calculer f('+m1+') et f('+M1+').','Reprendre f('+p+') et f('+q+').','Comparer les quatre valeurs.','Conclure : maximum '+fmt(mx,0)+' et minimum '+fmt(mn,0)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{p:p,q:q,c0:c0,bb:bb,cc:cc,a:a,m:m1,M:M1,mx:mx,mn:mn}}; }

  /* ================= Limites : fonction homographique ================= */
  function gLI(x){
    var r=x.rnd, a=ri(r,2,5), x0=ri(r,1,4), b, N0, it; for(it=0;it<200;it++){ b=ri(r,-6,6); N0=a*x0+b; if(N0!==0&&b!==0) break; }
    var fS='('+fmt(a,0)+'x '+(b<0?MN+' '+fmt(-b,0):'+ '+fmt(b,0))+') ÷ ('+lin(x0)+')', right=N0>0?'+∞':MN+'∞', left=N0>0?MN+'∞':'+∞', inc=(-N0>0);
    var intro='Pour modéliser le coût moyen de production d’un article, le comité utilise la fonction f définie par f(x) = '+fS+'.';
    var p1=[K('Détermine l’ensemble de définition de f, puis calcule les limites de f en +∞ et en '+MN+'∞.',
      'f(x) existe si et seulement si x '+MN+' '+x0+' ≠ 0, c’est-à-dire x ≠ '+x0+' : D_f = ℝ \\ {'+x0+'}. Pour x ≠ 0, f(x) = ('+a+(b<0?' '+MN+' '+fmt(-b,0):' + '+fmt(b,0))+' ÷ x) ÷ (1 '+MN+' '+x0+' ÷ x). Comme '+fmt(Math.abs(b),0)+' ÷ x et '+x0+' ÷ x tendent vers 0 quand x tend vers +∞ ou '+MN+'∞, on obtient lim(x→+∞) f(x) = '+a+' ÷ 1 = '+a+' et lim(x→'+MN+'∞) f(x) = '+a+'.',
      ['Identifier la valeur interdite : celle qui annule le dénominateur.','Identifier la méthode : factoriser par le terme de plus haut degré.'],
      ['Écrire la condition d’existence x − '+x0+' ≠ 0.','Mettre x en facteur au numérateur et au dénominateur.'],
      ['Donner D_f = ℝ \\ {'+x0+'}.','Calculer la limite en +∞ : '+a+'.','Calculer la limite en −∞ : '+a+'.']),
     K('Calcule les limites de f en '+x0+' à gauche et à droite.',
      'Quand x tend vers '+x0+', le numérateur tend vers '+a+' × '+x0+' + '+par(b,0)+' = '+N0+' (nombre '+(N0>0?'positif':'négatif')+') et le dénominateur x '+MN+' '+x0+' tend vers 0, en restant positif pour x > '+x0+' et négatif pour x < '+x0+'. Donc lim(x→'+x0+', x > '+x0+') f(x) = '+right+' et lim(x→'+x0+', x < '+x0+') f(x) = '+left+'.',
      ['Identifier que le dénominateur tend vers 0 et que le numérateur tend vers une valeur non nulle.','Identifier la règle des signes pour un quotient.'],
      ['Calculer la limite du numérateur en '+x0+'.','Étudier le signe du dénominateur de chaque côté de '+x0+'.'],
      ['Calculer le numérateur : '+a+' × '+x0+' + '+par(b,0)+' = '+N0+'.','Conclure à droite : '+right+'.','Conclure à gauche : '+left+'.'])];
    var i2=x.standalone2?'On rappelle que f(x) = '+fS+', définie sur ℝ \\ {'+x0+'}.':'';
    var p2=[K('Donne les équations des asymptotes à la courbe représentative de f.',
      'Comme lim(x→±∞) f(x) = '+a+', la droite d’équation y = '+a+' est asymptote horizontale à la courbe. Comme les limites en '+x0+' sont infinies, la droite d’équation x = '+x0+' est asymptote verticale.',
      ['Identifier le lien entre une limite finie en l’infini et une asymptote horizontale.','Identifier le lien entre une limite infinie en un réel et une asymptote verticale.'],
      ['Reprendre les limites calculées précédemment.'],
      ['Donner l’asymptote horizontale : y = '+a+'.','Donner l’asymptote verticale : x = '+x0+'.']),
     K('Calcule f′(x), étudie son signe et déduis-en le sens de variation de f.',
      'f est dérivable sur ℝ \\ {'+x0+'} et f′(x) = ['+a+'('+lin(x0)+') '+MN+' ('+a+'x + '+par(b,0)+')] ÷ ('+lin(x0)+')² = ('+MN+a+' × '+x0+' '+MN+' '+par(b,0)+') ÷ ('+lin(x0)+')² = '+fmt(-N0,0)+' ÷ ('+lin(x0)+')². Comme ('+lin(x0)+')² > 0, f′(x) est du signe de '+fmt(-N0,0)+', donc f′(x) '+(inc?'> 0':'< 0')+' : f est strictement '+(inc?'croissante':'décroissante')+' sur chacun des intervalles ]'+MN+'∞ ; '+x0+'[ et ]'+x0+' ; +∞[.',
      ['Identifier la formule de la dérivée d’un quotient.','Identifier que le carré du dénominateur est positif.'],
      ['Écrire f′(x) = (u′v − uv′) ÷ v².','Simplifier le numérateur.'],
      ['Calculer le numérateur : '+MN+a+' × '+x0+' '+MN+' '+par(b,0)+' = '+fmt(-N0,0)+'.','Étudier le signe de f′(x).','Conclure sur le sens de variation.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,x0:x0,N0:N0,inc:inc}}; }

  /* ================= Dénombrement ================= */
  function A(n,k){ var s=1; for(var i=0;i<k;i++) s*=(n-i); return s; }
  function C(n,k){ var s=1; for(var i=0;i<k;i++) s=s*(n-i)/(i+1); return Math.round(s); }
  function prodStr(n,k){ var o=[]; for(var i=0;i<k;i++) o.push(n-i); return o.join(' × '); }
  function factStr(k){ var o=[]; for(var i=k;i>=1;i--) o.push(i); return o.join(' × '); }
  var LDN={jardin:'du comité de gestion du jardin',sport:'du comité sportif',coop:'du bureau de la coopérative'};
  function gDN(x){
    var r=x.rnd, g=ri(r,3,5), b=ri(r,4,6), n=g+b, k=pick(r,[3,4]); if(b<k) b=k, n=g+b;
    var P3=A(n,3), Ck=C(n,k), Cb=C(b,k), Len=pick(r,[3,4]), tot=A(10,Len), mid=A(8,Len-2), n1=9*mid, n2=4*8*mid;
    var intro='Le comité compte '+n+' membres : '+g+' filles et '+b+' garçons.';
    var p1=[K('De combien de façons peut-on choisir un bureau de trois postes distincts (président, secrétaire, trésorier) parmi les '+n+' membres ?',
      'L’ordre des trois personnes compte (les postes sont distincts) et une personne ne peut occuper qu’un poste : on compte les arrangements de 3 éléments parmi '+n+'. A = '+n+' × '+(n-1)+' × '+(n-2)+' = '+fmt(P3,0)+'.',
      ['Identifier que l’ordre compte (postes distincts).','Identifier qu’il s’agit d’un arrangement sans répétition.'],
      ['Écrire le nombre d’arrangements A(n ; 3) = n × (n − 1) × (n − 2).'],
      ['Compter les choix pour chaque poste : '+n+', '+(n-1)+' puis '+(n-2)+'.','Calculer le produit : '+fmt(P3,0)+'.','Conclure avec une phrase.']),
     K('On forme un comité de '+k+' membres. Combien de comités différents peut-on former ? Combien comportent au moins une fille ?',
      'L’ordre ne compte pas : on compte les combinaisons de '+k+' éléments parmi '+n+'. C = ('+prodStr(n,k)+') ÷ ('+factStr(k)+') = '+fmt(prodStr(n,k).split(' × ').reduce(function(a,c){ return a*Number(c); },1),0)+' ÷ '+fmt(factStr(k).split(' × ').reduce(function(a,c){ return a*Number(c); },1),0)+' = '+fmt(Ck,0)+'. Les comités sans aucune fille sont formés uniquement de garçons : ('+prodStr(b,k)+') ÷ ('+factStr(k)+') = '+fmt(prodStr(b,k).split(' × ').reduce(function(a,c){ return a*Number(c); },1),0)+' ÷ '+fmt(factStr(k).split(' × ').reduce(function(a,c){ return a*Number(c); },1),0)+' = '+fmt(Cb,0)+'. Il y a donc '+fmt(Ck,0)+' '+MN+' '+fmt(Cb,0)+' = '+fmt(Ck-Cb,0)+' comités comportant au moins une fille.',
      ['Identifier que l’ordre ne compte pas : combinaisons.','Identifier la méthode du complémentaire pour « au moins une fille ».'],
      ['Écrire C(n ; k) = A(n ; k) ÷ k!.','Écrire « au moins une fille = tous les comités − comités sans fille ».'],
      ['Calculer le nombre total de comités : '+fmt(Ck,0)+'.','Calculer le nombre de comités sans fille : '+fmt(Cb,0)+'.','Soustraire : '+fmt(Ck-Cb,0)+'.'])];
    var i2='Le comité choisit un code d’accès de '+Len+' chiffres distincts, pris parmi les chiffres 0, 1, 2, …, 9 (un code peut commencer par 0).';
    var p2=[K('Combien de codes de '+Len+' chiffres distincts peut-on former ?',
      'Le premier chiffre se choisit parmi 10, le suivant parmi 9, etc. : '+prodStr(10,Len)+' = '+fmt(tot,0)+' codes.',
      ['Identifier que les chiffres doivent être distincts et que l’ordre compte.'],
      ['Écrire le nombre d’arrangements A(10 ; '+Len+').'],
      ['Compter les choix pour chaque position.','Calculer le produit : '+fmt(tot,0)+'.']),
     K('Parmi ces codes, combien forment un nombre pair dont le premier chiffre est différent de 0 ?',
      'On distingue deux cas selon le dernier chiffre. Dernier chiffre 0 : le premier chiffre se choisit parmi 9 (1 à 9)'+(Len>2?', puis les chiffres du milieu parmi les 8 restants : '+prodStr(8,Len-2):'')+', soit 9 × '+mid+' = '+fmt(n1,0)+' codes. Dernier chiffre 2, 4, 6 ou 8 (4 choix) : le premier chiffre se choisit parmi 8 (non nul et différent du dernier)'+(Len>2?', puis les chiffres du milieu parmi les 8 restants : '+prodStr(8,Len-2):'')+', soit 4 × 8 × '+mid+' = '+fmt(n2,0)+' codes. Au total : '+fmt(n1,0)+' + '+fmt(n2,0)+' = '+fmt(n1+n2,0)+' codes.',
      ['Identifier qu’il faut séparer les cas selon le dernier chiffre (0 ou non).','Identifier les contraintes : nombre pair, premier chiffre non nul, chiffres distincts.'],
      ['Distinguer le cas « dernier chiffre 0 » et le cas « dernier chiffre pair non nul ».'],
      ['Calculer le nombre de codes dans le premier cas : '+fmt(n1,0)+'.','Calculer le nombre de codes dans le second cas : '+fmt(n2,0)+'.','Additionner les deux cas : '+fmt(n1+n2,0)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{g:g,b:b,n:n,k:k,P3:P3,Ck:Ck,Cb:Cb,Len:Len,tot:tot,even:n1+n2}}; }

  var DEF=[
    {id:'SD',label:'Second degré',w1:1,build:gSD,D:['1D — Équations du second degré','1D — Inéquations du second degré & systèmes linéaires'],C:['1C — Équations du second degré','1C — Inéquations du second degré & systèmes linéaires']},
    {id:'SU',label:'Suites numériques',w1:1,build:gSU,D:['1D — Suites numériques'],C:['1C — Suites numériques']},
    {id:'DR',label:'Dérivation',w1:2,build:gDR,D:['1D — Dérivation & primitives'],C:['1C — Dérivation & primitives']},
    {id:'LI',label:'Limites et asymptotes',w1:1,build:gLI,D:['1D — Limites & continuité'],C:['1C — Limites & continuité']},
    {id:'DN',label:'Dénombrement',w1:1,build:gDN,D:['1D — Dénombrement'],C:['1C — Dénombrement']}
  ];
  M.reg14=function(def){ if(def.D) MOD['1D-'+def.id]={cls:'1ère D',theme:def.D[0],themes:def.D,label:def.label,w1:def.w1,build:def.build}; if(def.C) MOD['1C-'+def.id]={cls:'1ère C',theme:def.C[0],themes:def.C,label:def.label,w1:def.w1,build:def.build}; };
  DEF.forEach(M.reg14);
  M.helpers14={par:par,lin:lin,qStr:qStr,eqSym:eqSym,A:A,C:C};
})(typeof globalThis!=='undefined'?globalThis:this);
