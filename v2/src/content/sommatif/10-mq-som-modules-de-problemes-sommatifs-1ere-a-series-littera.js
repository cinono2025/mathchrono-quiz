/* ===== MQ_SOM : modules de problèmes sommatifs — 1ère A (séries littéraires : 2 problèmes, 1 h 30) ===== */
(function(G){
  'use strict';
  var M=G.MQ_SOM_MOD, MOD=M.MOD, fmt=M.fmt, ri=M.ri, pick=M.pick, gcd=M.gcd, money=M.money, H=M.hA;
  var MN=H.MN, par=H.par, fr=H.fr, tm=H.tm, aff=H.aff, who=H.who, Who=H.Who, K=H.K;
  var SB='₀₁₂₃₄₅₆₇₈₉', SP='⁰¹²³⁴⁵⁶⁷⁸⁹';
  function sub(n){ return String(n).split('').map(function(c){ return SB[+c]; }).join(''); }
  function sup(n){ return String(n).split('').map(function(c){ return SP[+c]; }).join(''); }
  function eqs(v,d){ var q=Math.pow(10,d); return Math.abs(v*q-Math.round(v*q))<1e-7?'=':'≈'; }
  function quad(a,b,c){ var s=tm(a,'x²',true)+tm(b,'x',false)+tm(c,'',false); return s; }
  function xm(v){ return v===0?'x':(v<0?'x + '+(-v):'x '+MN+' '+v); }
  function cpre(a){ return a===1?'':(a===-1?MN:fmt(a,0)); }
  function fact(n){ var f=1; for(var i=2;i<=n;i++) f*=i; return f; }
  function arr(n,p){ var f=1; for(var i=0;i<p;i++) f*=n-i; return f; }
  function comb(n,p){ return arr(n,p)/fact(p); }
  M.hA.sub=sub; M.hA.sup=sup; M.hA.eqs=eqs; M.hA.quad=quad; M.hA.fact=fact; M.hA.arr=arr; M.hA.comb=comb;

  /* ================= Polynôme du second degré, discriminant & équations ================= */
  function gPD(x){
    var r=x.rnd, a=pick(r,[1,2,-1]), al=pick(r,[-3,-2,-1,1,2,3,4]), d=ri(r,1,4), r1=al-d, r2=al+d, b=-a*(r1+r2), c=a*r1*r2, D=b*b-4*a*c, be=-a*d*d;
    var P=quad(a,b,c), can=cpre(a)+'('+xm(al)+')²'+(be<0?' '+MN+' '+(-be):' + '+be);
    var intro='Pour une étude de rentabilité, '+who(x)+' utilise le polynôme P(x) = '+P+'.';
    var p1=[K('Écris P(x) sous forme canonique.',
      'On factorise '+(a===1?'':fmt(a,0)+' ')+'dans les termes en x : P(x) = '+cpre(a)+(a===1?'':'(')+'x² '+(al>0?MN+' '+fmt(2*al,0):'+ '+fmt(-2*al,0))+'x'+(a===1?'':')')+tm(c,'',false)+'. Or x² '+(al>0?MN+' '+fmt(2*al,0):'+ '+fmt(-2*al,0))+'x = ('+xm(al)+')² '+MN+' '+(al*al)+'. Donc P(x) = '+cpre(a)+'('+xm(al)+')² '+MN+' '+par(a)+' × '+(al*al)+tm(c,'',false)+' = '+can+'. C’est la forme canonique a(x '+MN+' α)² + β avec α = '+fmt(al,0)+' et β = '+fmt(be,0)+'.',
      ['Identifier les coefficients a = '+fmt(a,0)+', b = '+fmt(b,0)+', c = '+fmt(c,0)+'.','Identifier la forme canonique a(x '+MN+' α)² + β.'],
      ['Compléter le carré (ou utiliser α = '+MN+'b/(2a) et β = P(α)).'],
      ['Calculer α = '+fmt(al,0)+'.','Calculer β = P('+fmt(al,0)+') = '+fmt(be,0)+'.','Écrire P(x) = '+can+'.']),
     K('Calcule le discriminant de P, puis résous l’équation P(x) = 0 et factorise P(x).',
      'Δ = b² '+MN+' 4ac = '+par(b)+'² '+MN+' 4 × '+par(a)+' × '+par(c)+' = '+D+'. Comme Δ > 0, l’équation a deux solutions : x₁ = ('+fmt(-b,0)+' '+MN+' √'+D+') ÷ '+par(2*a)+' = ('+fmt(-b,0)+' '+MN+' '+Math.sqrt(D)+') ÷ '+par(2*a)+' = '+fmt((-b-Math.sqrt(D))/(2*a),0)+' et x₂ = ('+fmt(-b,0)+' + '+Math.sqrt(D)+') ÷ '+par(2*a)+' = '+fmt((-b+Math.sqrt(D))/(2*a),0)+'. S = {'+fmt(r1,0)+' ; '+fmt(r2,0)+'} et P(x) = '+cpre(a)+'('+xm(r1)+')('+xm(r2)+').',
      ['Identifier la formule du discriminant Δ = b² '+MN+' 4ac.','Identifier le nombre de solutions selon le signe de Δ.'],
      ['Calculer Δ et appliquer les formules x = ('+MN+'b ± √Δ) ÷ (2a).','Écrire P(x) = a(x '+MN+' x₁)(x '+MN+' x₂).'],
      ['Calculer Δ = '+D+'.','Calculer les deux racines.','Factoriser P(x).'])];
    var l=ri(r,4,15), L=l+ri(r,2,12), S=L+l, Pr=L*l, D2=S*S-4*Pr;
    var i2='Un terrain rectangulaire a un périmètre de '+(2*S)+' m et une aire de '+Pr+' m². On note L sa longueur et l sa largeur.';
    var p2=[K('Montre que L + l = '+S+' et L × l = '+Pr+', puis que L et l sont solutions de l’équation X² '+MN+' '+S+'X + '+Pr+' = 0.',
      'Le périmètre vaut 2(L + l) = '+(2*S)+', donc L + l = '+(2*S)+' ÷ 2 = '+S+'. L’aire vaut L × l = '+Pr+'. Deux nombres de somme s et de produit p sont les solutions de X² '+MN+' sX + p = 0 : en effet (X '+MN+' L)(X '+MN+' l) = X² '+MN+' (L + l)X + Ll = X² '+MN+' '+S+'X + '+Pr+'.',
      ['Identifier les formules du périmètre et de l’aire d’un rectangle.','Identifier la propriété somme et produit des racines.'],
      ['Traduire les données par L + l = '+S+' et Ll = '+Pr+'.','Développer (X '+MN+' L)(X '+MN+' l).'],
      ['Calculer L + l = '+S+'.','Écrire Ll = '+Pr+'.','Conclure sur l’équation.']),
     K('Résous cette équation et déduis-en les dimensions du terrain.',
      'Δ = '+S+'² '+MN+' 4 × '+Pr+' = '+(S*S)+' '+MN+' '+(4*Pr)+' = '+D2+', √Δ = '+Math.sqrt(D2)+'. X₁ = ('+S+' + '+Math.sqrt(D2)+') ÷ 2 = '+L+' et X₂ = ('+S+' '+MN+' '+Math.sqrt(D2)+') ÷ 2 = '+l+'. La longueur est L = '+L+' m et la largeur l = '+l+' m. Vérification : '+L+' × '+l+' = '+Pr+'.',
      ['Identifier l’équation à résoudre.','Identifier que la longueur est la plus grande solution.'],
      ['Calculer Δ et appliquer les formules des racines.'],
      ['Calculer Δ = '+D2+'.','Calculer X₁ = '+L+' et X₂ = '+l+'.','Conclure et vérifier.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,c:c,al:al,be:be,r1:r1,r2:r2,D:D,S:S,Pr:Pr,L:L,l:l}}; }

  /* ================= Inéquations du second degré ================= */
  function gIQ(x){
    var r=x.rnd, a=pick(r,[1,2,-1,-2]), r1=ri(r,-5,2), r2=ri(r,r1+1,r1+6), b=-a*(r1+r2), c=a*r1*r2, D=b*b-4*a*c, wantNeg=r()<0.5;
    var P=quad(a,b,c), inside=a>0?'négatif':'positif', sym=wantNeg?'≤':'>';
    var inS=(a>0)===wantNeg; /* solutions entre les racines ? */
    var Sset=inS?(wantNeg?'['+fmt(r1,0)+' ; '+fmt(r2,0)+']':']'+fmt(r1,0)+' ; '+fmt(r2,0)+'['):(wantNeg?']'+MN+'∞ ; '+fmt(r1,0)+'] ∪ ['+fmt(r2,0)+' ; +∞[':']'+MN+'∞ ; '+fmt(r1,0)+'[ ∪ ]'+fmt(r2,0)+' ; +∞[');
    var intro='On considère le polynôme Q(x) = '+P+'.';
    var p1=[K('Calcule les racines de Q, puis dresse le tableau de signes de Q(x).',
      'Δ = '+par(b)+'² '+MN+' 4 × '+par(a)+' × '+par(c)+' = '+D+' > 0 et √Δ = '+Math.sqrt(D)+'. Les racines sont x₁ = '+fmt(r1,0)+' et x₂ = '+fmt(r2,0)+'. Q(x) est du signe de a = '+fmt(a,0)+' à l’extérieur des racines et du signe contraire entre les racines : Q(x) est '+(a>0?'positif':'négatif')+' sur ]'+MN+'∞ ; '+fmt(r1,0)+'[ et sur ]'+fmt(r2,0)+' ; +∞[, '+inside+' sur ]'+fmt(r1,0)+' ; '+fmt(r2,0)+'[, et nul en '+fmt(r1,0)+' et en '+fmt(r2,0)+'.',
      ['Identifier les coefficients de Q.','Identifier la règle : signe de a à l’extérieur des racines.'],
      ['Calculer Δ et les racines.','Dresser le tableau de signes.'],
      ['Calculer Δ = '+D+'.','Calculer les racines '+fmt(r1,0)+' et '+fmt(r2,0)+'.','Compléter le tableau de signes.']),
     K('Résous dans ℝ l’inéquation Q(x) '+sym+' 0.',
      'D’après le tableau de signes, Q(x) '+sym+' 0 '+(inS?'entre les racines':'à l’extérieur des racines')+(wantNeg?' (racines comprises)':' (racines exclues)')+'. Donc S = '+Sset+'.',
      ['Identifier le tableau de signes obtenu.','Identifier si les racines sont solutions (inégalité large ou stricte).'],
      ['Lire dans le tableau les intervalles où Q(x) '+sym+' 0.'],
      ['Repérer le signe voulu.','Décider pour les racines.','Écrire S = '+Sset+'.'])];
    var q1=ri(r,1,4), q2=q1+2*ri(r,2,5), s=q1+q2, p=q1*q2, xm=s/2, Bm=xm*xm-p;
    var i2='Le bénéfice réalisé par '+who(x)+' pour la vente de x dizaines d’objets est B(x) = '+MN+'x² + '+s+'x '+MN+' '+p+' (en milliers de francs), avec 0 ≤ x ≤ '+(q2+3)+'.';
    var p2=[K('Pour quelles quantités le bénéfice est-il positif ou nul ?',
      'On résout '+MN+'x² + '+s+'x '+MN+' '+p+' ≥ 0. Δ = '+s+'² '+MN+' 4 × ('+MN+'1) × ('+MN+p+') = '+(s*s-4*p)+', √Δ = '+(q2-q1)+'. Racines : ('+MN+s+' '+MN+' '+(q2-q1)+') ÷ ('+MN+'2) = '+q2+' et ('+MN+s+' + '+(q2-q1)+') ÷ ('+MN+'2) = '+q1+'. Comme a = '+MN+'1 < 0, B(x) ≥ 0 entre les racines : x ∈ ['+q1+' ; '+q2+']. Le bénéfice est positif ou nul pour une vente comprise entre '+(q1*10)+' et '+(q2*10)+' objets.',
      ['Identifier l’inéquation B(x) ≥ 0.','Identifier le signe de a = '+MN+'1.'],
      ['Calculer les racines et utiliser la règle des signes.'],
      ['Calculer Δ et les racines.','Écrire l’intervalle ['+q1+' ; '+q2+'].','Interpréter en nombre d’objets.']),
     K('Montre que B(x) = '+MN+'(x '+MN+' '+fmt(xm,0)+')² + '+fmt(Bm,0)+' et déduis-en le bénéfice maximal.',
      MN+'(x '+MN+' '+fmt(xm,0)+')² + '+fmt(Bm,0)+' = '+MN+'(x² '+MN+' '+fmt(2*xm,0)+'x + '+fmt(xm*xm,0)+') + '+fmt(Bm,0)+' = '+MN+'x² + '+s+'x '+MN+' '+fmt(xm*xm,0)+' + '+fmt(Bm,0)+' = '+MN+'x² + '+s+'x '+MN+' '+p+' = B(x). Comme '+MN+'(x '+MN+' '+fmt(xm,0)+')² ≤ 0, on a B(x) ≤ '+fmt(Bm,0)+', avec égalité pour x = '+fmt(xm,0)+'. Le bénéfice maximal est '+fmt(Bm,0)+' milliers de francs, soit '+money(Bm*1000)+', obtenu pour '+fmt(xm*10,0)+' objets vendus.',
      ['Identifier la forme canonique proposée.','Identifier qu’un carré est toujours positif ou nul.'],
      ['Développer la forme proposée.','Majorer B(x).'],
      ['Développer et retrouver B(x).','Déduire B(x) ≤ '+fmt(Bm,0)+'.','Conclure : maximum '+money(Bm*1000)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,c:c,r1:r1,r2:r2,wantNeg:wantNeg,q1:q1,q2:q2,s:s,p:p,xm:xm,Bm:Bm}}; }

  /* ================= Systèmes d'équations & d'inéquations linéaires ================= */
  var LSL={jardin:['plants de manguier','plants d’oranger','paniers de mangues','paniers d’oranges','un panier de mangues','un panier d’oranges','plants'],sport:['billets en tribune','billets en pelouse','fanions','banderoles','un fanion','une banderole','billets'],coop:['cahiers de 100 pages','cahiers de 200 pages','petits cahiers','grands cahiers','un petit cahier','un grand cahier','cahiers']};
  function gSL(x){
    var r=x.rnd, L=LSL[x.W.id], pa=ri(r,3,9)*100, pb=pa+ri(r,1,6)*100, X=ri(r,10,40), Y=ri(r,10,40), N=X+Y, R=pa*X+pb*Y;
    var intro=Who(x)+' a acheté '+N+' '+L[6]+' : des '+L[0]+' à '+money(pa)+' l’unité et des '+L[1]+' à '+money(pb)+' l’unité. La dépense totale est de '+money(R)+'.';
    var p1=[K('On note x le nombre de '+L[0]+' et y celui de '+L[1]+'. Écris un système de deux équations vérifié par x et y.',
      'Le nombre total de '+L[6]+' donne x + y = '+N+'. La dépense donne '+pa+'x + '+pb+'y = '+fmt(R,0)+'. Le système est { x + y = '+N+' ; '+pa+'x + '+pb+'y = '+fmt(R,0)+' }.',
      ['Identifier les deux inconnues.','Identifier les deux informations : le nombre total et la dépense.'],
      ['Traduire chaque information par une équation.'],
      ['Écrire l’équation du nombre total.','Écrire l’équation de la dépense.','Présenter le système.']),
     K('Résous ce système par substitution et conclus.',
      'De la 1re équation, y = '+N+' '+MN+' x. Dans la 2e : '+pa+'x + '+pb+'('+N+' '+MN+' x) = '+fmt(R,0)+', soit '+pa+'x + '+fmt(pb*N,0)+' '+MN+' '+pb+'x = '+fmt(R,0)+', donc '+MN+(pb-pa)+'x = '+fmt(R,0)+' '+MN+' '+fmt(pb*N,0)+' = '+fmt(R-pb*N,0)+' et x = '+fmt(R-pb*N,0)+' ÷ ('+MN+(pb-pa)+') = '+X+'. Puis y = '+N+' '+MN+' '+X+' = '+Y+'. '+Who(x)+' a acheté '+X+' '+L[0]+' et '+Y+' '+L[1]+'.',
      ['Identifier le système obtenu.','Identifier la méthode de substitution.'],
      ['Exprimer y en fonction de x, puis substituer.'],
      ['Résoudre l’équation en x : x = '+X+'.','Calculer y = '+Y+'.','Conclure.'])];
    var A=ri(r,6,12), B=ri(r,A+2,2*A-2); if((B%2)!==0) B++; if(B>=2*A) B=2*A-2;
    var sx=B-A, sy=2*A-B, g1=ri(r,2,5), g2=ri(r,1,g1+2), V=[[0,0],[B/2,0],[sx,sy],[0,A]], vals=V.map(function(v){ return g1*v[0]+g2*v[1]; }), best=vals.indexOf(Math.max.apply(null,vals));
    var tests=[[ri(r,1,sx),ri(r,0,Math.max(0,sy-1))],[ri(r,A-1,A+2),ri(r,1,3)],[ri(r,1,3),A+ri(r,1,2)]];
    var okp=function(t){ return t[0]>=0&&t[1]>=0&&t[0]+t[1]<=A&&2*t[0]+t[1]<=B; };
    var i2=Who(x)+' prépare x '+L[2]+' et y '+L[3]+' par semaine (x et y entiers naturels). Les contraintes de production sont : x + y ≤ '+A+' et 2x + y ≤ '+B+'. '+L[4].charAt(0).toUpperCase()+L[4].slice(1)+' rapporte '+g1+' milliers de francs et '+L[5]+' '+g2+' millier'+(g2>1?'s':'')+' de francs.';
    var p2=[K('Les productions (x ; y) = '+tests.map(function(t){ return '('+t[0]+' ; '+t[1]+')'; }).join(', ')+' respectent-elles toutes les contraintes ? Justifie.',
      tests.map(function(t){ var s1=t[0]+t[1], s2=2*t[0]+t[1]; return '('+t[0]+' ; '+t[1]+') : '+t[0]+' + '+t[1]+' = '+s1+(s1<=A?' ≤ ':' > ')+A+' et 2 × '+t[0]+' + '+t[1]+' = '+s2+(s2<=B?' ≤ ':' > ')+B+(okp(t)?' : contraintes respectées':' : contraintes non respectées'); }).join(' ; ')+'.',
      ['Identifier le système d’inéquations : x ≥ 0, y ≥ 0, x + y ≤ '+A+', 2x + y ≤ '+B+'.','Identifier que chaque production est un point (x ; y).'],
      ['Tester chaque couple dans les deux inéquations.'],
      ['Tester le premier couple.','Tester les deux autres couples.','Conclure pour chacun.']),
     K('Détermine le point d’intersection S des droites d’équations x + y = '+A+' et 2x + y = '+B+'. Parmi les sommets O(0 ; 0), ('+fmt(B/2,0)+' ; 0), S et (0 ; '+A+') de la région des contraintes, lequel donne le gain le plus élevé ?',
      'En soustrayant les deux équations : (2x + y) '+MN+' (x + y) = '+B+' '+MN+' '+A+', soit x = '+sx+', puis y = '+A+' '+MN+' '+sx+' = '+sy+' : S('+sx+' ; '+sy+'). Gain G = '+g1+'x + '+tm(g2,'y',true)+' : '+V.map(function(v,i){ return 'G('+fmt(v[0],0)+' ; '+v[1]+') = '+g1+' × '+fmt(v[0],0)+' + '+g2+' × '+v[1]+' = '+fmt(vals[i],0); }).join(' ; ')+'. Le gain le plus élevé est obtenu au point ('+fmt(V[best][0],0)+' ; '+V[best][1]+') : '+fmt(vals[best],0)+' milliers de francs.',
      ['Identifier les droites frontières de la région.','Identifier l’expression du gain.'],
      ['Résoudre le système des deux équations de droites.','Calculer le gain à chaque sommet.'],
      ['Calculer S('+sx+' ; '+sy+').','Calculer le gain aux quatre sommets.','Conclure : sommet ('+fmt(V[best][0],0)+' ; '+V[best][1]+').'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{pa:pa,pb:pb,X:X,Y:Y,N:N,R:R,A:A,B:B,sx:sx,sy:sy,g1:g1,g2:g2,best:best,vals:vals,tests:tests}}; }

  /* ================= Suites arithmétiques ================= */
  function gSA(x){
    var r=x.rnd, u1=ri(r,40,80)*1000, rr=ri(r,2,8)*1000, n=pick(r,[8,10,12]), un=u1+(n-1)*rr, T=u1+ri(r,6,15)*rr, nT=(T-u1)/rr+1, Sn=n*(u1+un)/2;
    var v1=u1+ri(r,2,6)*1000, rv=rr-pick(r,[1000,2000]); if(rv<=0) rv=1000; var vn=v1+(n-1)*rv, Sv=n*(v1+vn)/2;
    var intro='Un agent recruté par '+who(x)+' perçoit '+money(u1)+' par mois la 1re année, puis son salaire mensuel augmente de '+money(rr)+' chaque année. On note uₙ le salaire mensuel de la n-ième année (u₁ = '+fmt(u1,0)+').';
    var p1=[K('Quelle est la nature de la suite (uₙ) ? Exprime uₙ en fonction de n, puis calcule u'+sub(n)+'.',
      'On passe d’un terme au suivant en ajoutant '+fmt(rr,0)+' : (uₙ) est une suite arithmétique de premier terme u₁ = '+fmt(u1,0)+' et de raison '+fmt(rr,0)+'. Donc uₙ = u₁ + (n '+MN+' 1) × '+fmt(rr,0)+' = '+fmt(u1,0)+' + '+fmt(rr,0)+'(n '+MN+' 1). u'+sub(n)+' = '+fmt(u1,0)+' + '+(n-1)+' × '+fmt(rr,0)+' = '+money(un)+'.',
      ['Identifier l’augmentation constante de '+money(rr)+'.','Identifier la définition d’une suite arithmétique.'],
      ['Écrire uₙ = u₁ + (n '+MN+' 1)r.'],
      ['Donner la nature, le premier terme et la raison.','Écrire uₙ en fonction de n.','Calculer u'+sub(n)+' = '+money(un)+'.']),
     K('À partir de quelle année le salaire mensuel atteint-il '+money(T)+' ?',
      'On résout '+fmt(u1,0)+' + '+fmt(rr,0)+'(n '+MN+' 1) = '+fmt(T,0)+' : '+fmt(rr,0)+'(n '+MN+' 1) = '+fmt(T-u1,0)+', n '+MN+' 1 = '+fmt(T-u1,0)+' ÷ '+fmt(rr,0)+' = '+(nT-1)+', donc n = '+nT+'. Le salaire atteint '+money(T)+' la '+nT+'e année.',
      ['Identifier le salaire à atteindre.','Identifier que l’inconnue est le rang n.'],
      ['Traduire par l’équation uₙ = '+fmt(T,0)+'.'],
      ['Isoler n '+MN+' 1.','Calculer n = '+nT+'.','Conclure.'])];
    var i2=(x.standalone2?'Le salaire mensuel uₙ de la n-ième année d’un agent forme une suite arithmétique de premier terme u₁ = '+fmt(u1,0)+' et de raison '+fmt(rr,0)+'. ':'')+'Une autre proposition offre un salaire mensuel de '+money(v1)+' la 1re année, augmenté de '+money(rv)+' chaque année.';
    var p2=[K('Calcule la somme u₁ + u₂ + … + u'+sub(n)+' des salaires mensuels des '+n+' premières années (un mois par année).',
      'C’est la somme de '+n+' termes consécutifs d’une suite arithmétique : S = nombre de termes × (premier terme + dernier terme) ÷ 2 = '+n+' × ('+fmt(u1,0)+' + '+fmt(un,0)+') ÷ 2 = '+money(Sn)+'.',
      ['Identifier le nombre de termes et le premier et le dernier terme.','Identifier la formule de la somme de termes consécutifs.'],
      ['Écrire S = n × (u₁ + u'+sub(n)+') ÷ 2.'],
      ['Rappeler u'+sub(n)+' = '+fmt(un,0)+'.','Calculer la somme.','Conclure : '+money(Sn)+'.']),
     K('Calcule la somme correspondante pour la seconde proposition. Quelle proposition est la plus avantageuse sur '+n+' ans ?',
      'Le dernier terme est v'+sub(n)+' = '+fmt(v1,0)+' + '+(n-1)+' × '+fmt(rv,0)+' = '+fmt(vn,0)+'. Somme : '+n+' × ('+fmt(v1,0)+' + '+fmt(vn,0)+') ÷ 2 = '+money(Sv)+'. '+(Sv>Sn?'La seconde proposition est la plus avantageuse ('+money(Sv)+' > '+money(Sn)+').':(Sv<Sn?'La première proposition est la plus avantageuse ('+money(Sn)+' > '+money(Sv)+').':'Les deux propositions sont équivalentes.')),
      ['Identifier la nouvelle suite arithmétique (premier terme, raison).','Identifier la comparaison à faire.'],
      ['Calculer le dernier terme puis la somme.'],
      ['Calculer v'+sub(n)+' = '+fmt(vn,0)+'.','Calculer la somme '+money(Sv)+'.','Comparer et conclure.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{u1:u1,r:rr,n:n,un:un,T:T,nT:nT,Sn:Sn,v1:v1,rv:rv,vn:vn,Sv:Sv}}; }

  /* ================= Suites géométriques ================= */
  var LSG={jardin:'Le nombre de plants dans la pépinière',sport:'Le nombre d’abonnés à la page du tournoi',coop:'Le nombre de clients de la boutique'};
  function gSG(x){
    var r=x.rnd, t=pick(r,[10,20,50]), q=1+t/100, v0=pick(r,[1000,2000,5000,10000]), n=3, v=[v0]; for(var i=0;i<14;i++) v.push(v0*Math.pow(q,i+1));
    var seuil=Math.round(v0*(t===10?2:pick(r,[2,3]))), nS=0; while(v0*Math.pow(q,nS)<seuil) nS++;
    var vv=function(k){ return v0*Math.pow(q,k); };
    var intro=LSG[x.W.id]+' augmente de '+t+' % chaque mois. Au départ, il y en a '+fmt(v0,0)+'. On note vₙ ce nombre au bout de n mois (v₀ = '+fmt(v0,0)+').';
    var p1=[K('Montre que (vₙ) est une suite géométrique ; précise sa raison, puis calcule v₁, v₂ et v₃.',
      'Augmenter de '+t+' % revient à multiplier par 1 + '+t+'/100 = '+fmt(q,1)+' : vₙ₊₁ = '+fmt(q,1)+' × vₙ. (vₙ) est donc géométrique de raison '+fmt(q,1)+' et de premier terme v₀ = '+fmt(v0,0)+'. v₁ = '+fmt(v0,0)+' × '+fmt(q,1)+' = '+fmt(vv(1),0)+' ; v₂ = '+fmt(vv(1),0)+' × '+fmt(q,1)+' = '+fmt(vv(2),0)+' ; v₃ = '+fmt(vv(2),0)+' × '+fmt(q,1)+' = '+fmt(vv(3),0)+'.',
      ['Identifier qu’une hausse de '+t+' % correspond au coefficient '+fmt(q,1)+'.','Identifier la définition d’une suite géométrique.'],
      ['Écrire vₙ₊₁ = q × vₙ.'],
      ['Donner la raison '+fmt(q,1)+'.','Calculer v₁ et v₂.','Calculer v₃.']),
     K('Exprime vₙ en fonction de n. Au bout de combien de mois le nombre dépassera-t-il '+fmt(seuil,0)+' ?',
      'vₙ = v₀ × qⁿ = '+fmt(v0,0)+' × '+fmt(q,1)+'ⁿ. On calcule les termes successifs : '+v.slice(0,nS+1).map(function(val,k){ return 'v'+sub(k)+' '+eqs(val,0)+' '+fmt(val,0); }).join(' ; ')+'. On a v'+sub(nS-1)+' < '+fmt(seuil,0)+' ≤ v'+sub(nS)+' : le nombre atteint ou dépasse '+fmt(seuil,0)+' au bout de '+nS+' mois.',
      ['Identifier la formule explicite d’une suite géométrique.','Identifier le seuil à atteindre.'],
      ['Écrire vₙ = v₀ × qⁿ.','Calculer les termes jusqu’à dépasser le seuil.'],
      ['Écrire vₙ = '+fmt(v0,0)+' × '+fmt(q,1)+'ⁿ.','Calculer les termes successifs.','Conclure : '+nS+' mois.'])];
    var a=pick(r,[100,200,250,500]), qq=pick(r,[2,3]), k=pick(r,[5,6,7]), ak=a*Math.pow(qq,k-1), Sk=a*(Math.pow(qq,k)-1)/(qq-1);
    var i2=Who(x)+' constitue une caisse de solidarité : la 1re semaine, il dépose '+money(a)+', puis chaque semaine il dépose '+(qq===2?'le double':'le triple')+' de la semaine précédente.';
    var p2=[K('Quelle somme dépose-t-il la '+k+'e semaine ?',
      'Les dépôts forment une suite géométrique de premier terme a = '+fmt(a,0)+' et de raison '+qq+'. Le dépôt de la '+k+'e semaine est a × '+qq+'^('+k+' '+MN+' 1) = '+fmt(a,0)+' × '+qq+'^'+(k-1)+' = '+fmt(a,0)+' × '+Math.pow(qq,k-1)+' = '+money(ak)+'.',
      ['Identifier la suite géométrique des dépôts.','Identifier le rang du terme cherché.'],
      ['Écrire le terme général a × q^(n '+MN+' 1).'],
      ['Donner la raison '+qq+'.','Calculer '+qq+'^'+(k-1)+' = '+Math.pow(qq,k-1)+'.','Conclure : '+money(ak)+'.']),
     K('Calcule la somme totale déposée au bout de '+k+' semaines.',
      'C’est la somme de '+k+' termes consécutifs d’une suite géométrique de raison '+qq+' ≠ 1 : S = a × (1 '+MN+' qⁿ) ÷ (1 '+MN+' q) = '+fmt(a,0)+' × (1 '+MN+' '+qq+'^'+k+') ÷ (1 '+MN+' '+qq+') = '+fmt(a,0)+' × ('+MN+(Math.pow(qq,k)-1)+') ÷ ('+MN+(qq-1)+') = '+money(Sk)+'.',
      ['Identifier le nombre de termes '+k+' et la raison '+qq+'.','Identifier la formule de la somme des termes d’une suite géométrique.'],
      ['Écrire S = a(1 '+MN+' qⁿ) ÷ (1 '+MN+' q).'],
      ['Calculer '+qq+'^'+k+' = '+Math.pow(qq,k)+'.','Calculer la somme.','Conclure : '+money(Sk)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{t:t,q:q,v0:v0,seuil:seuil,nS:nS,a:a,qq:qq,k:k,ak:ak,Sk:Sk}}; }

  /* ================= Statistique ================= */
  var LST={jardin:['la masse (en kg) des récoltes de','parcelles'],sport:['le temps de jeu (en minutes) de','joueurs'],coop:['le montant (en centaines de francs) des achats de','clients']};
  function gST(x){
    var r=x.rnd, L=LST[x.W.id], w=10, nc=pick(r,[4,5]), N=pick(r,[20,25,50]), lo=pick(r,[0,10,20]), eff, it;
    for(it=0;it<2000;it++){ eff=[]; var tot=0, top=Math.floor(2*N/nc); for(var i=0;i<nc-1;i++){ var v=ri(r,1,top-1); eff.push(v); tot+=v; } var last=N-tot; if(last<1||last>top) continue; eff.push(last); var mx=Math.max.apply(null,eff); if(eff.filter(function(e){ return e===mx; }).length===1) break; }
    var cl=eff.map(function(e,i){ return [lo+i*w,lo+(i+1)*w]; }), ce=cl.map(function(c){ return (c[0]+c[1])/2; });
    var cum=[], s=0; eff.forEach(function(e){ s+=e; cum.push(s); });
    var Sx=eff.reduce(function(a,e,i){ return a+e*ce[i]; },0), mean=Sx/N, Sx2=eff.reduce(function(a,e,i){ return a+e*ce[i]*ce[i]; },0), V=Sx2/N-mean*mean, sd=Math.sqrt(V);
    var mi=eff.indexOf(Math.max.apply(null,eff)), kM=cum.findIndex(function(c){ return c>=N/2; }), before=kM?cum[kM-1]:0, Me=cl[kM][0]+(N/2-before)/eff[kM]*w;
    var tab={type:'table',head:['Classe'].concat(cl.map(function(c){ return '['+c[0]+' ; '+c[1]+'['; })),rows:[['Effectif'].concat(eff.map(String))]};
    var intro='Une enquête porte sur '+L[0]+' '+N+' '+L[1]+'. Les résultats sont regroupés dans le tableau ci-dessous.';
    var p1=[K('Calcule les effectifs cumulés croissants et donne la classe modale de cette série.',
      'Effectifs cumulés croissants : '+cum.join(' ; ')+' (le dernier est bien l’effectif total '+N+'). La classe modale est la classe de plus grand effectif : ['+cl[mi][0]+' ; '+cl[mi][1]+'[ (effectif '+eff[mi]+').',
      ['Identifier la définition de l’effectif cumulé croissant.','Identifier la définition de la classe modale.'],
      ['Additionner les effectifs de proche en proche.','Repérer l’effectif maximal.'],
      ['Calculer les effectifs cumulés.','Vérifier que le dernier vaut '+N+'.','Donner la classe modale.']),
     K('Calcule la moyenne x̄ de cette série en utilisant les centres des classes.',
      'Les centres des classes sont '+ce.join(' ; ')+'. x̄ = ('+eff.map(function(e,i){ return e+' × '+ce[i]; }).join(' + ')+') ÷ '+N+' = '+fmt(Sx,0)+' ÷ '+N+' '+eqs(mean,2)+' '+fmt(mean,2)+'.',
      ['Identifier les centres des classes.','Identifier la formule de la moyenne pondérée.'],
      ['Écrire x̄ = (Σ nᵢ cᵢ) ÷ N.'],
      ['Calculer les centres.','Calculer la somme des produits : '+fmt(Sx,0)+'.','Calculer x̄ = '+fmt(mean,2)+'.'])];
    var i2=(x.standalone2?'On reprend la série du tableau ci-dessous (effectif total '+N+', moyenne x̄ '+eqs(mean,2)+' '+fmt(mean,2)+'). ':'')+Who(x)+' souhaite mesurer la dispersion de la série et déterminer sa médiane.';
    var p2=[K('Calcule la variance V puis l’écart-type σ de cette série (arrondis au centième).',
      'V = (Σ nᵢ cᵢ²) ÷ N '+MN+' x̄² = ('+eff.map(function(e,i){ return e+' × '+ce[i]+'²'; }).join(' + ')+') ÷ '+N+' '+MN+' '+fmt(mean,2)+'² = '+fmt(Sx2,0)+' ÷ '+N+' '+MN+' '+fmt(mean*mean,4)+' '+eqs(V,2)+' '+fmt(V,2)+'. σ = √V ≈ '+fmt(sd,2)+'.',
      ['Identifier la formule de la variance : moyenne des carrés moins carré de la moyenne.','Identifier que l’écart-type est la racine carrée de la variance.'],
      ['Écrire V = (Σ nᵢ cᵢ²) ÷ N '+MN+' x̄² et σ = √V.'],
      ['Calculer Σ nᵢ cᵢ² = '+fmt(Sx2,0)+'.','Calculer V '+eqs(V,2)+' '+fmt(V,2)+'.','Calculer σ ≈ '+fmt(sd,2)+'.']),
     K('Détermine la classe qui contient la médiane, puis une valeur approchée de la médiane par interpolation linéaire.',
      'La moitié de l’effectif est '+N+' ÷ 2 = '+fmt(N/2,1)+'. D’après les effectifs cumulés, '+(kM?cum[kM-1]+' < '+fmt(N/2,1)+' ≤ '+cum[kM]:fmt(N/2,1)+' ≤ '+cum[0])+' : la médiane est dans la classe ['+cl[kM][0]+' ; '+cl[kM][1]+'[. Par interpolation linéaire : Me = '+cl[kM][0]+' + ('+fmt(N/2,1)+' '+MN+' '+before+') ÷ '+eff[kM]+' × '+w+' '+eqs(Me,2)+' '+fmt(Me,2)+'.',
      ['Identifier la définition de la médiane (partage l’effectif en deux).','Identifier les effectifs cumulés croissants.'],
      ['Repérer la classe médiane.','Appliquer l’interpolation linéaire.'],
      ['Calculer N ÷ 2 = '+fmt(N/2,1)+'.','Repérer la classe ['+cl[kM][0]+' ; '+cl[kM][1]+'[.','Calculer Me '+eqs(Me,2)+' '+fmt(Me,2)+'.'])];
    return {parts:[{intro:intro,cons:p1,table:tab},{intro:i2,cons:p2,table:x.standalone2?tab:null}],_g:{eff:eff,cl:cl,N:N,mean:mean,V:V,sd:sd,Me:Me,mi:mi,kM:kM}}; }

  /* ================= Dénombrement ================= */
  function gDE(x){
    var r=x.rnd, n=pick(r,[5,6,7,8,9,10]), p=pick(r,[3,4]), np=Math.pow(n,p), Anp=arr(n,p);
    var intro='Pour sécuriser son local, '+who(x)+' choisit un code de '+p+' chiffres pris parmi les '+n+' chiffres '+(n===10?'0 à 9':'1 à '+n)+'.';
    var p1=[K('Combien de codes différents peut-on former si les chiffres peuvent se répéter ?',
      'Un code est une liste ordonnée de '+p+' chiffres (un '+p+'-uplet), chaque chiffre pouvant être choisi de '+n+' façons. Nombre de codes : '+Array(p).fill(n).join(' × ')+' = '+n+'^'+p+' = '+fmt(np,0)+'.',
      ['Identifier que l’ordre compte et que les répétitions sont permises.','Identifier le nombre de choix pour chaque chiffre.'],
      ['Traduire par le nombre de '+p+'-uplets d’un ensemble à '+n+' éléments : '+n+'^'+p+'.'],
      ['Écrire le produit.','Calculer '+n+'^'+p+'.','Conclure : '+fmt(np,0)+' codes.']),
     K('Combien de codes peut-on former si les '+p+' chiffres doivent être deux à deux distincts ?',
      'C’est un arrangement de '+p+' éléments parmi '+n+' : A'+sub(n)+sup(p)+' = '+Array.apply(null,Array(p)).map(function(_,i){ return n-i; }).join(' × ')+' = '+fmt(Anp,0)+'.',
      ['Identifier que l’ordre compte et que les répétitions sont interdites.','Identifier la notion d’arrangement.'],
      ['Traduire par A'+sub(n)+sup(p)+' = n(n '+MN+' 1)…(n '+MN+' p + 1).'],
      ['Écrire le produit des '+p+' facteurs.','Calculer A'+sub(n)+sup(p)+' = '+fmt(Anp,0)+'.','Conclure.'])];
    var N=pick(r,[8,9,10,12]), k=pick(r,[3,4]), A3=arr(N,3), Ck=comb(N,k);
    var i2='Le bureau de l’association compte '+N+' membres. Il faut élire un président, un secrétaire et un trésorier (trois personnes différentes), puis désigner une délégation de '+k+' membres pour une rencontre.';
    var p2=[K('De combien de façons peut-on élire le président, le secrétaire et le trésorier ?',
      'Les postes sont différents, donc l’ordre compte, et une personne ne peut occuper qu’un poste : c’est un arrangement de 3 éléments parmi '+N+'. A'+sub(N)+sup(3)+' = '+N+' × '+(N-1)+' × '+(N-2)+' = '+fmt(A3,0)+'.',
      ['Identifier que les postes sont distincts (l’ordre compte).','Identifier qu’il n’y a pas de répétition.'],
      ['Traduire par un arrangement A'+sub(N)+sup(3)+'.'],
      ['Écrire A'+sub(N)+sup(3)+' = '+N+' × '+(N-1)+' × '+(N-2)+'.','Calculer : '+fmt(A3,0)+'.','Conclure.']),
     K('De combien de façons peut-on désigner la délégation de '+k+' membres ?',
      'Dans une délégation, l’ordre ne compte pas : c’est une combinaison de '+k+' éléments parmi '+N+'. C'+sub(N)+sup(k)+' = A'+sub(N)+sup(k)+' ÷ '+k+'! = '+fmt(arr(N,k),0)+' ÷ '+fact(k)+' = '+fmt(Ck,0)+'.',
      ['Identifier que l’ordre ne compte pas.','Identifier la notion de combinaison.'],
      ['Traduire par C'+sub(N)+sup(k)+' = A'+sub(N)+sup(k)+' ÷ '+k+'!.'],
      ['Calculer A'+sub(N)+sup(k)+' = '+fmt(arr(N,k),0)+'.','Calculer '+k+'! = '+fact(k)+'.','Calculer C'+sub(N)+sup(k)+' = '+fmt(Ck,0)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{n:n,p:p,np:np,Anp:Anp,N:N,k:k,A3:A3,Ck:Ck}}; }

  /* ================= Parité, symétrie & fonctions associées ================= */
  function gPS(x){
    var r=x.rnd, even=r()<0.5, a=pick(r,[1,2,3,-1]), b=ri(r,1,6)*(r()<0.5?-1:1), kk=ri(r,1,3), fs, fk, fmk;
    if(even){ fs=tm(a,'x²',true)+tm(b,'',false); fk=a*kk*kk+b; fmk=fk; } else { fs=tm(a,'x³',true)+tm(b,'x',false); fk=a*kk*kk*kk+b*kk; fmk=-fk; }
    var intro='On considère la fonction f définie sur ℝ par f(x) = '+fs+'.';
    var p1=[K('Étudie la parité de f.',
      'D_f = ℝ est symétrique par rapport à 0. Pour tout réel x, f('+MN+'x) = '+(even?tm(a,'('+MN+'x)²',true)+tm(b,'',false)+' = '+fs+' = f(x) : f est paire.':tm(a,'('+MN+'x)³',true)+tm(b,'('+MN+'x)',false)+' = '+tm(-a,'x³',true)+tm(-b,'x',false)+' = '+MN+'('+fs+') = '+MN+'f(x) : f est impaire.'),
      ['Identifier la condition sur l’ensemble de définition (symétrique par rapport à 0).','Identifier les définitions de fonction paire et impaire.'],
      ['Calculer f('+MN+'x) et le comparer à f(x).'],
      ['Vérifier que D_f est symétrique.','Calculer f('+MN+'x).','Conclure : f est '+(even?'paire':'impaire')+'.']),
     K('Interprète graphiquement ce résultat. Sachant que f('+kk+') = '+fk+', déduis-en f('+MN+kk+') sans calcul.',
      'La courbe de f est symétrique par rapport '+(even?'à l’axe des ordonnées':'à l’origine O du repère')+'. Comme f est '+(even?'paire, f('+MN+kk+') = f('+kk+') = '+fk:'impaire, f('+MN+kk+') = '+MN+'f('+kk+') = '+fmt(fmk,0))+'. Vérification : f('+MN+kk+') = '+fmt(fmk,0)+'.',
      ['Identifier l’interprétation graphique de la parité.','Identifier la valeur f('+kk+') = '+fk+'.'],
      ['Utiliser la relation f('+MN+'x) = '+(even?'f(x)':MN+'f(x)')+'.'],
      ['Donner l’élément de symétrie de la courbe.','Calculer f('+MN+kk+') = '+fmt(fmk,0)+'.','Vérifier.'])];
    var al=pick(r,[-3,-2,-1,1,2,3]), gm=ri(r,-4,6), be=gm-al*al, m=pick(r,[-2,-1,1,2,3]), kv=pick(r,[-3,-2,-1,1,2,4]);
    var gs='x² '+(al>0?MN+' '+(2*al)+'x':'+ '+(-2*al)+'x')+tm(gm,'',false);
    var i2='Soit g la fonction définie sur ℝ par g(x) = '+gs+' et (C) sa courbe représentative.';
    var p2=[K('Démontre que la droite (Δ) d’équation x = '+fmt(al,0)+' est un axe de symétrie de (C).',
      'Pour tout réel h, '+fmt(al,0)+' + h et '+fmt(al,0)+' '+MN+' h sont dans D_g = ℝ. g('+fmt(al,0)+' + h) = ('+fmt(al,0)+' + h)² '+(al>0?MN+' '+(2*al):'+ '+(-2*al))+'('+fmt(al,0)+' + h)'+tm(gm,'',false)+' = h²'+tm(be,'',false)+' et g('+fmt(al,0)+' '+MN+' h) = ('+fmt(al,0)+' '+MN+' h)² '+(al>0?MN+' '+(2*al):'+ '+(-2*al))+'('+fmt(al,0)+' '+MN+' h)'+tm(gm,'',false)+' = h²'+tm(be,'',false)+'. Donc g('+fmt(al,0)+' + h) = g('+fmt(al,0)+' '+MN+' h) : la droite x = '+fmt(al,0)+' est un axe de symétrie de (C).',
      ['Identifier la condition : g(a + h) = g(a '+MN+' h) pour tout h.','Identifier a = '+fmt(al,0)+'.'],
      ['Calculer g('+fmt(al,0)+' + h) et g('+fmt(al,0)+' '+MN+' h).'],
      ['Développer g('+fmt(al,0)+' + h).','Développer g('+fmt(al,0)+' '+MN+' h).','Comparer et conclure.']),
     K('On note k la fonction définie par k(x) = g(x '+(m>0?MN+' '+m:'+ '+(-m))+')'+(kv<0?' '+MN+' '+(-kv):' + '+kv)+'. Par quelle transformation obtient-on la courbe de k à partir de (C) ? Donne l’axe de symétrie de la courbe de k et les coordonnées de son sommet.',
      'La courbe de k est l’image de (C) par la translation de vecteur de coordonnées ('+fmt(m,0)+' ; '+fmt(kv,0)+'). Le sommet de (C) est S('+fmt(al,0)+' ; '+fmt(be,0)+') car g('+fmt(al,0)+') = '+fmt(be,0)+'. Son image est S′('+fmt(al,0)+' + '+par(m)+' ; '+fmt(be,0)+' + '+par(kv)+') = S′('+fmt(al+m,0)+' ; '+fmt(be+kv,0)+'). L’axe de symétrie de la courbe de k est la droite d’équation x = '+fmt(al+m,0)+'.',
      ['Identifier la fonction associée x ↦ g(x '+MN+' a) + b.','Identifier le sommet de (C) sur l’axe x = '+fmt(al,0)+'.'],
      ['Utiliser la translation de vecteur (a ; b) pour transformer le sommet et l’axe.'],
      ['Nommer la translation.','Calculer g('+fmt(al,0)+') = '+fmt(be,0)+'.','Donner S′('+fmt(al+m,0)+' ; '+fmt(be+kv,0)+') et l’axe x = '+fmt(al+m,0)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{even:even,a:a,b:b,kk:kk,fk:fk,fmk:fmk,al:al,gm:gm,be:be,m:m,kv:kv}}; }

  /* ================= Limites & continuité ================= */
  function gLC(x){
    var r=x.rnd, a=pick(r,[-3,-2,-1,1,2,3,4]), b=pick(r,[-4,-3,-2,-1,1,2,3,5].filter(function(v){ return v!==a; })), lim=a-b;
    var num='x²'+tm(-(a+b),'x',false)+tm(a*b,'',false), den='x '+(a>0?MN+' '+a:'+ '+(-a));
    var p=pick(r,[2,3,4,5]), q=pick(r,[-5,-4,-3,-2,-1,1,2,3,4,5]), rr=pick(r,[1,2]), s=ri(r,1,6);
    var intro='On considère les fonctions f et φ définies par f(x) = ('+num+') ÷ ('+den+') et φ(x) = ('+p+'x² '+(q<0?MN+' '+(-q):'+ '+q)+') ÷ ('+tm(rr,'x²',true)+' + '+s+').';
    var p1=[K('Détermine l’ensemble de définition de f, puis calcule la limite de f en '+fmt(a,0)+'.',
      'f(x) existe si '+den+' ≠ 0, donc D_f = ℝ ∖ {'+fmt(a,0)+'}. En '+fmt(a,0)+', numérateur et dénominateur s’annulent (forme indéterminée 0/0). Or '+num+' = (x '+(a>0?MN+' '+a:'+ '+(-a))+')(x '+(b>0?MN+' '+b:'+ '+(-b))+'), donc pour x ≠ '+fmt(a,0)+', f(x) = x '+(b>0?MN+' '+b:'+ '+(-b))+'. Ainsi, quand x tend vers '+fmt(a,0)+', f(x) tend vers '+fmt(a,0)+' '+(b>0?MN+' '+b:'+ '+(-b))+', c’est-à-dire '+fmt(lim,0)+'.',
      ['Identifier la valeur interdite '+fmt(a,0)+'.','Identifier la forme indéterminée 0/0.'],
      ['Factoriser le numérateur pour simplifier f(x).'],
      ['Écrire D_f = ℝ ∖ {'+fmt(a,0)+'}.','Simplifier f(x) = x '+(b>0?MN+' '+b:'+ '+(-b))+' pour x ≠ '+fmt(a,0)+'.','Calculer la limite : '+fmt(lim,0)+'.']),
     K('Calcule la limite de φ en +∞. Qu’en déduis-tu pour la courbe de φ ?',
      'En +∞, la limite d’une fonction rationnelle est celle du quotient des monômes de plus haut degré : '+p+'x² ÷ '+(rr===1?'x²':rr+'x²')+' = '+fr(p,rr)+'. Donc lim φ(x) = '+fr(p,rr)+' quand x tend vers +∞. La droite d’équation y = '+fr(p,rr)+' est asymptote horizontale à la courbe de φ en +∞.',
      ['Identifier une fonction rationnelle.','Identifier la règle des monômes de plus haut degré.'],
      ['Traduire la limite par le quotient '+p+'x² ÷ '+(rr===1?'x²':rr+'x²')+'.'],
      ['Simplifier le quotient.','Donner la limite '+fr(p,rr)+'.','Conclure : asymptote y = '+fr(p,rr)+'.'])];
    var c=pick(r,[1,2,3]), k=pick(r,[-3,-2,-1,1,2,3,4]), m=pick(r,[2,3,-1,4]), gl=c*c+k, n=gl-m*c, v=c+ri(r,1,3);
    var i2='Soit g la fonction définie par g(x) = x² '+(k<0?MN+' '+(-k):'+ '+k)+' si x ≤ '+c+' et g(x) = '+tm(m,'x',true)+' + n si x > '+c+', où n est un nombre réel.';
    var p2=[K('Calcule les limites de g à gauche et à droite en '+c+' (en fonction de n).',
      'À gauche (x < '+c+') : g(x) = x² '+(k<0?MN+' '+(-k):'+ '+k)+', donc la limite vaut '+c+'² '+(k<0?MN+' '+(-k):'+ '+k)+' = '+gl+'. À droite (x > '+c+') : g(x) = '+tm(m,'x',true)+' + n, donc la limite vaut '+par(m)+' × '+c+' + n = '+fmt(m*c,0)+' + n.',
      ['Identifier les deux expressions de g selon la position de x par rapport à '+c+'.','Identifier que les fonctions polynômes sont continues.'],
      ['Calculer chaque limite en remplaçant x par '+c+' dans la bonne expression.'],
      ['Calculer la limite à gauche : '+gl+'.','Calculer la limite à droite : '+fmt(m*c,0)+' + n.','Présenter les résultats.']),
     K('Détermine n pour que g soit continue en '+c+', puis calcule g('+v+') pour cette valeur de n.',
      'g est continue en '+c+' si les limites à gauche et à droite sont égales à g('+c+') = '+gl+' : '+fmt(m*c,0)+' + n = '+gl+', donc n = '+gl+' '+MN+' '+par(m*c)+' = '+fmt(n,0)+'. Alors g('+v+') = '+par(m)+' × '+v+' + '+par(n)+' = '+fmt(m*v+n,0)+'.',
      ['Identifier la condition de continuité en un point.','Identifier g('+c+') = '+gl+'.'],
      ['Traduire par l’équation '+fmt(m*c,0)+' + n = '+gl+'.'],
      ['Résoudre : n = '+fmt(n,0)+'.','Choisir la bonne expression pour x = '+v+'.','Calculer g('+v+') = '+fmt(m*v+n,0)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,lim:lim,p:p,rr:rr,c:c,k:k,m:m,gl:gl,n:n,v:v}}; }

  /* ================= Dérivation & sens de variation ================= */
  function gDV(x){
    var r=x.rnd, a=pick(r,[1,2,-1]), b=ri(r,-5,5), c=ri(r,-4,6), x0=ri(r,-2,3); if(2*a*x0+b===0) x0=x0+1; var f0=a*x0*x0+b*x0+c, d0=2*a*x0+b;
    var fs=quad(a,b,c);
    var intro='On considère la fonction f définie sur ℝ par f(x) = '+fs+'.';
    var p1=[K('Pour h ≠ 0, calcule le taux de variation [f('+fmt(x0,0)+' + h) '+MN+' f('+fmt(x0,0)+')] ÷ h, puis déduis-en le nombre dérivé f′('+fmt(x0,0)+').',
      'f('+fmt(x0,0)+') = '+fmt(f0,0)+'. f('+fmt(x0,0)+' + h) = '+cpre(a)+'('+fmt(x0,0)+' + h)²'+(b?(b<0?' '+MN+' '+(-b):' + '+b)+'('+fmt(x0,0)+' + h)':'')+tm(c,'',false)+' = '+tm(a,'h²',true)+tm(d0,'h',false)+tm(f0,'',false)+'. Donc [f('+fmt(x0,0)+' + h) '+MN+' f('+fmt(x0,0)+')] ÷ h = ('+tm(a,'h²',true)+tm(d0,'h',false)+') ÷ h = '+tm(a,'h',true)+tm(d0,'',false)+'. Quand h tend vers 0, ce taux tend vers '+fmt(d0,0)+' : f′('+fmt(x0,0)+') = '+fmt(d0,0)+'.',
      ['Identifier la définition du nombre dérivé comme limite du taux de variation.','Identifier f('+fmt(x0,0)+') = '+fmt(f0,0)+'.'],
      ['Développer f('+fmt(x0,0)+' + h) puis simplifier le taux de variation.'],
      ['Calculer f('+fmt(x0,0)+' + h).','Simplifier le taux : '+tm(a,'h',true)+tm(d0,'',false)+'.','Passer à la limite : f′('+fmt(x0,0)+') = '+fmt(d0,0)+'.']),
     K('Retrouve f′('+fmt(x0,0)+') à l’aide de la fonction dérivée f′, puis écris une équation de la tangente (T) à la courbe de f au point d’abscisse '+fmt(x0,0)+'.',
      'f′(x) = '+tm(2*a,'x',true)+tm(b,'',false)+', donc f′('+fmt(x0,0)+') = '+par(2*a)+' × '+par(x0)+tm(b,'',false)+' = '+fmt(d0,0)+'. La tangente a pour équation y = f′('+fmt(x0,0)+')(x '+MN+' '+par(x0)+') + f('+fmt(x0,0)+'), soit '+(x0===0?'(T) : y = '+aff(d0,f0)+'.':'y = '+cpre(d0)+'('+xm(x0)+')'+tm(f0,'',false)+', c’est-à-dire (T) : y = '+aff(d0,f0-d0*x0)+'.'),
      ['Identifier les formules de dérivation (x² ↦ 2x, x ↦ 1).','Identifier la formule de l’équation de la tangente.'],
      ['Calculer f′(x) puis appliquer y = f′(x₀)(x '+MN+' x₀) + f(x₀).'],
      ['Calculer f′(x).','Calculer f′('+fmt(x0,0)+') = '+fmt(d0,0)+'.','Écrire (T) : y = '+aff(d0,f0-d0*x0)+'.'])];
    var p=pick(r,[1,2,3]), q=ri(r,-5,5), gp=-2*p*p*p+q, gm=2*p*p*p+q;
    var i2='Soit g la fonction définie sur ℝ par g(x) = x³ '+MN+' '+(3*p*p)+'x'+tm(q,'',false)+'.';
    var p2=[K('Calcule g′(x), puis étudie son signe.',
      'g′(x) = 3x² '+MN+' '+(3*p*p)+' = 3(x² '+MN+' '+(p*p)+') = 3(x '+MN+' '+p+')(x + '+p+'). g′(x) s’annule en '+MN+p+' et en '+p+' ; c’est un polynôme du second degré de coefficient 3 > 0 : g′(x) > 0 sur ]'+MN+'∞ ; '+MN+p+'[ et sur ]'+p+' ; +∞[, g′(x) < 0 sur ]'+MN+p+' ; '+p+'[.',
      ['Identifier les formules de dérivation des fonctions puissances.','Identifier la règle des signes d’un trinôme.'],
      ['Dériver puis factoriser g′(x).'],
      ['Calculer g′(x).','Factoriser g′(x).','Donner le signe de g′(x).']),
     K('Dresse le tableau de variation de g et précise ses extremums.',
      'g est croissante sur ]'+MN+'∞ ; '+MN+p+'], décroissante sur ['+MN+p+' ; '+p+'] et croissante sur ['+p+' ; +∞[. g('+MN+p+') = ('+MN+p+')³ '+MN+' '+(3*p*p)+' × ('+MN+p+')'+tm(q,'',false)+' = '+fmt(gm,0)+' est un maximum relatif ; g('+p+') = '+p+'³ '+MN+' '+(3*p*p)+' × '+p+tm(q,'',false)+' = '+fmt(gp,0)+' est un minimum relatif.',
      ['Identifier le lien entre signe de la dérivée et sens de variation.','Identifier les points où la dérivée change de signe.'],
      ['Construire le tableau de variation.','Calculer les valeurs aux points '+MN+p+' et '+p+'.'],
      ['Donner les variations.','Calculer g('+MN+p+') = '+fmt(gm,0)+'.','Calculer g('+p+') = '+fmt(gp,0)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,c:c,x0:x0,f0:f0,d0:d0,p:p,q:q,gm:gm,gp:gp}}; }

  /* ================= Étude de fonctions & représentations graphiques ================= */
  function gEF(x){
    var r=x.rnd, a=pick(r,[1,2,-1,3]), c=pick(r,[-3,-2,-1,1,2,3]), b, it; for(it=0;it<50;it++){ b=ri(r,-6,6); if(b!==-a*c&&b!==0&&b%a===0) break; }
    var nd=-a*c-b, fs='('+aff(a,b)+') ÷ (x '+(c>0?MN+' '+c:'+ '+(-c))+')', z=-b/a, f0n=-b, f0d=c;
    var intro='On considère la fonction f définie par f(x) = '+fs+' et (C) sa courbe représentative dans un repère orthonormé.';
    var p1=[K('Détermine l’ensemble de définition de f et les limites de f aux bornes de cet ensemble. Déduis-en les asymptotes à (C).',
      'D_f = ℝ ∖ {'+fmt(c,0)+'} = ]'+MN+'∞ ; '+fmt(c,0)+'[ ∪ ]'+fmt(c,0)+' ; +∞['+'. En '+MN+'∞ et en +∞, f(x) a la limite du quotient '+tm(a,'x',true)+' ÷ x = '+fmt(a,0)+' : la droite y = '+fmt(a,0)+' est asymptote horizontale. En '+fmt(c,0)+', le numérateur tend vers '+par(a)+' × '+par(c)+tm(b,'',false)+' = '+fmt(a*c+b,0)+' ≠ 0 et le dénominateur tend vers 0 : f(x) tend vers '+((a*c+b)>0?'+∞':MN+'∞')+' quand x tend vers '+fmt(c,0)+' par valeurs supérieures et vers '+((a*c+b)>0?MN+'∞':'+∞')+' par valeurs inférieures. La droite x = '+fmt(c,0)+' est asymptote verticale.',
      ['Identifier la valeur interdite '+fmt(c,0)+'.','Identifier les règles de calcul des limites d’une fonction rationnelle.'],
      ['Calculer les limites en ±∞ et en '+fmt(c,0)+' (à gauche et à droite).'],
      ['Écrire D_f.','Calculer les limites en ±∞ : '+fmt(a,0)+'.','Calculer les limites en '+fmt(c,0)+' et conclure sur les asymptotes.']),
     K('Calcule f′(x) et dresse le tableau de variation de f.',
      'f′(x) = ['+fmt(a,0)+'(x '+(c>0?MN+' '+c:'+ '+(-c))+') '+MN+' ('+aff(a,b)+') × 1] ÷ (x '+(c>0?MN+' '+c:'+ '+(-c))+')² = '+fmt(nd,0)+' ÷ (x '+(c>0?MN+' '+c:'+ '+(-c))+')². Comme (x '+(c>0?MN+' '+c:'+ '+(-c))+')² > 0, f′(x) a le signe de '+fmt(nd,0)+' : f est strictement '+(nd>0?'croissante':'décroissante')+' sur ]'+MN+'∞ ; '+fmt(c,0)+'[ et sur ]'+fmt(c,0)+' ; +∞[.',
      ['Identifier la formule de dérivation d’un quotient (u/v)′ = (u′v '+MN+' uv′) ÷ v².','Identifier qu’un carré non nul est strictement positif.'],
      ['Dériver puis étudier le signe de f′(x).'],
      ['Calculer f′(x) = '+fmt(nd,0)+' ÷ (x '+(c>0?MN+' '+c:'+ '+(-c))+')².','Donner le signe de f′(x).','Dresser le tableau de variation.'])];
    var h=ri(r,1,4);
    var i2=(x.standalone2?'On rappelle que f(x) = '+fs+' ; (C) est sa courbe représentative. ':'')+'On veut préciser l’allure de (C) avant de la tracer.';
    var p2=[K('Démontre que le point Ω('+fmt(c,0)+' ; '+fmt(a,0)+') est centre de symétrie de (C).',
      'Pour h ≠ 0 : f('+fmt(c,0)+' + h) = ('+cpre(a)+'('+fmt(c,0)+' + h)'+tm(b,'',false)+') ÷ h = '+fmt(a,0)+' + '+par(a*c+b)+'/h et f('+fmt(c,0)+' '+MN+' h) = '+fmt(a,0)+' '+MN+' '+par(a*c+b)+'/h. Donc [f('+fmt(c,0)+' + h) + f('+fmt(c,0)+' '+MN+' h)] ÷ 2 vaut (2 × '+par(a)+') ÷ 2 = '+fmt(a,0)+' : Ω('+fmt(c,0)+' ; '+fmt(a,0)+') est centre de symétrie de (C).',
      ['Identifier la condition [f(a + h) + f(a '+MN+' h)] ÷ 2 = b.','Identifier les coordonnées de Ω.'],
      ['Calculer f('+fmt(c,0)+' + h) et f('+fmt(c,0)+' '+MN+' h).'],
      ['Calculer f('+fmt(c,0)+' + h).','Calculer f('+fmt(c,0)+' '+MN+' h).','Calculer la demi-somme et conclure.']),
     K('Détermine les points d’intersection de (C) avec les axes du repère.',
      'Avec l’axe des abscisses : f(x) = 0 ⟺ '+aff(a,b)+' = 0 et x ≠ '+fmt(c,0)+', soit x = '+fmt(z,0)+' : point A('+fmt(z,0)+' ; 0). Avec l’axe des ordonnées : f(0) = '+fmt(b,0)+' ÷ '+par(-c)+' = '+fr(f0n,f0d)+' : point B(0 ; '+fr(f0n,f0d)+').',
      ['Identifier qu’un point de l’axe des abscisses a une ordonnée nulle.','Identifier qu’un point de l’axe des ordonnées a une abscisse nulle.'],
      ['Résoudre f(x) = 0 puis calculer f(0).'],
      ['Résoudre '+aff(a,b)+' = 0.','Calculer f(0) = '+fr(f0n,f0d)+'.','Donner les points A et B.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,c:c,nd:nd,z:z,f0:f0n/f0d}}; }

  M.b1A={PS:gPS,LC:gLC,DV:gDV,EF:gEF,ST:gST,IQ:gIQ};
  var reg=function(id,themes,label,w1,build){ MOD['1A-'+id]={cls:'1ère A',theme:themes[0],themes:themes,label:label,w1:w1,build:build}; };
  var T=function(s){ return '1A — '+s; };
  reg('PD',[T('Polynôme du second degré & discriminant'),T('Équations du second degré')],'Polynôme et équations du second degré',1,gPD);
  reg('IQ',[T('Inéquations du second degré')],'Inéquations du second degré',2,gIQ);
  reg('SL',[T("Systèmes d'équations & d'inéquations linéaires")],'Systèmes d’équations et d’inéquations linéaires',2,gSL);
  reg('SA',[T('Suites arithmétiques')],'Suites arithmétiques',2,gSA);
  reg('SG',[T('Suites géométriques')],'Suites géométriques',2,gSG);
  reg('ST',[T('Statistique')],'Statistique',2,gST);
  reg('DE',[T('Dénombrement')],'Dénombrement',2,gDE);
  reg('PS',[T('Fonctions : parité, symétrie, périodicité & fonctions associées')],'Parité, symétrie et fonctions associées',1,gPS);
  reg('LC',[T('Limites & continuité')],'Limites et continuité',1,gLC);
  reg('DV',[T('Dérivation & sens de variation')],'Dérivation et sens de variation',1,gDV);
  reg('EF',[T('Étude de fonctions & représentations graphiques')],'Étude d’une fonction homographique',1,gEF);
})(typeof globalThis!=='undefined'?globalThis:this);
