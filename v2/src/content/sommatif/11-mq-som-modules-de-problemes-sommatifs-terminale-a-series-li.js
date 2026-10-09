/* ===== MQ_SOM : modules de problèmes sommatifs — Terminale A (séries littéraires : 2 problèmes, 1 h 30) ===== */
(function(G){
  'use strict';
  var M=G.MQ_SOM_MOD, MOD=M.MOD, fmt=M.fmt, ri=M.ri, pick=M.pick, gcd=M.gcd, money=M.money, H=M.hA, B1=M.b1A;
  var MN=H.MN, par=H.par, fr=H.fr, tm=H.tm, aff=H.aff, who=H.who, Who=H.Who, K=H.K, sub=H.sub, sup=H.sup, eqs=H.eqs;
  function dec(v,d){ return eqs(v,d)+' '+fmt(v,d); }

  /* ================= Fonction logarithme népérien ================= */
  function gLN(x){
    var r=x.rnd, P=pick(r,[[6,4,3],[12,3,4],[10,6,5],[15,4,6],[8,9,6],[20,3,5]]), k=P[0]*P[1]/P[2], m=ri(r,2,5), n=ri(r,1,4), pw=pick(r,[2,3]);
    var sols, a1, b1, a2, b2, it; for(it=0;it<200;it++){ a1=pick(r,[2,3,4]); a2=pick(r,[1,2]); if(a1===a2) continue; sols=ri(r,1,6); b1=ri(r,-5,5); b2=(a1-a2)*sols+b1; if(a1*sols+b1>0&&b2!==0&&Math.abs(b2)<=20) break; }
    var lhs=aff(a1,b1), rhs=aff(a2,b2), dom1=fr(-b1,a1), dom2=fr(-b2,a2), loF=(-b1/a1>=-b2/a2)?fr(-b1,a1):fr(-b2,a2);
    var intro='Dans un calcul de croissance, '+who(x)+' rencontre les nombres A = ln '+P[0]+' + ln '+P[1]+' '+MN+' ln '+P[2]+' et B = ln('+pw+'^'+m+') + '+n+' ln '+pw+'.';
    var p1=[K('Écris A sous la forme ln k (k entier naturel) et B sous la forme p ln '+pw+' (p entier naturel).',
      'Pour a > 0 et b > 0 : ln a + ln b = ln(ab) et ln a '+MN+' ln b = ln(a/b). Donc A = ln('+P[0]+' × '+P[1]+' ÷ '+P[2]+') = ln '+k+'. Par ailleurs ln('+pw+'^'+m+') = '+m+' ln '+pw+', donc B = '+m+' ln '+pw+' + '+n+' ln '+pw+' = '+(m+n)+' ln '+pw+'.',
      ['Identifier les propriétés algébriques du logarithme népérien.','Identifier la propriété ln(aⁿ) = n ln a.'],
      ['Regrouper les logarithmes en un seul.'],
      ['Calculer '+P[0]+' × '+P[1]+' ÷ '+P[2]+' = '+k+'.','Écrire A = ln '+k+'.','Écrire B = '+(m+n)+' ln '+pw+'.']),
     K('Résous dans ℝ l’équation ln('+lhs+') = ln('+rhs+').',
      'L’équation a un sens si '+lhs+' > 0 et '+rhs+' > 0, c’est-à-dire x > '+dom1+' et x > '+dom2+', soit x > '+loF+'. Comme ln est strictement croissante (donc injective), ln a = ln b équivaut à a = b : '+lhs+' = '+rhs+', soit '+aff(a1-a2,0)+' = '+fmt(b2-b1,0)+', donc x = '+sols+'. Comme '+sols+' > '+loF+', S = {'+sols+'}.',
      ['Identifier les conditions d’existence : les expressions doivent être strictement positives.','Identifier que ln a = ln b ⟺ a = b pour a, b > 0.'],
      ['Déterminer l’ensemble de validité, puis résoudre l’équation du premier degré.'],
      ['Écrire les conditions d’existence.','Résoudre : x = '+sols+'.','Vérifier que '+sols+' convient et conclure.'])];
    var a=pick(r,[2,3,4,5]), fa=a*Math.log(a)-a;
    var i2='Soit f la fonction définie sur ]0 ; +∞[ par f(x) = '+a+' ln x '+MN+' x.';
    var p2=[K('Calcule f′(x) et étudie son signe sur ]0 ; +∞[.',
      'La dérivée de ln est x ↦ 1/x, donc f′(x) = '+a+'/x '+MN+' 1 = ('+a+' '+MN+' x)/x. Sur ]0 ; +∞[, x > 0, donc f′(x) a le signe de '+a+' '+MN+' x : f′(x) > 0 sur ]0 ; '+a+'[, f′('+a+') = 0 et f′(x) < 0 sur ]'+a+' ; +∞[.',
      ['Identifier la dérivée de ln : x ↦ 1/x.','Identifier que x > 0 sur l’intervalle d’étude.'],
      ['Réduire f′(x) au même dénominateur, puis étudier le signe du numérateur.'],
      ['Calculer f′(x) = ('+a+' '+MN+' x)/x.','Étudier le signe de '+a+' '+MN+' x.','Conclure sur le signe de f′(x).']),
     K('Dresse le tableau de variation de f et donne la valeur exacte puis une valeur approchée au centième du maximum de f.',
      'f est croissante sur ]0 ; '+a+'] et décroissante sur ['+a+' ; +∞[. Elle admet un maximum en x = '+a+' : f('+a+') = '+a+' ln '+a+' '+MN+' '+a+' ≈ '+fmt(fa,2)+'.',
      ['Identifier le lien entre signe de f′ et sens de variation.','Identifier le point où f′ s’annule en changeant de signe.'],
      ['Construire le tableau de variation et calculer f('+a+').'],
      ['Donner les variations.','Écrire f('+a+') = '+a+' ln '+a+' '+MN+' '+a+'.','Donner la valeur approchée '+fmt(fa,2)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{P:P,k:k,m:m,n:n,pw:pw,a1:a1,b1:b1,a2:a2,b2:b2,sol:sols,a:a,fa:fa}}; }

  /* ================= Fonction exponentielle népérienne ================= */
  var LEX={jardin:['plants de haricot','jours','du','jour'],sport:['visiteurs de la page du tournoi','jours','du','jour'],coop:['clients inscrits à la carte de fidélité','semaines','de la','semaine']};
  function gEX(x){
    var r=x.rnd, m=ri(r,2,6), n=ri(r,1,5), p=ri(r,1,6), kk=pick(r,[2,3]), a1=pick(r,[2,3]), b1=ri(r,-4,4), a2=1, sol=ri(r,-3,5), b2=(a1-a2)*sol+b1, al=ri(r,-3,4);
    var intro='On considère les nombres A = (e^'+m+' × e^'+n+') ÷ e^'+p+' et B = (e^'+m+')^'+kk+'.';
    var p1=[K('Écris A et B sous la forme e^q, q étant un entier relatif.',
      'Pour tous réels a et b : eᵃ × eᵇ = e^(a + b), eᵃ ÷ eᵇ = e^(a − b) et (eᵃ)ᵏ = e^(ka). Donc A = e^('+m+' + '+n+' '+MN+' '+p+') = e^'+(m+n-p)+' et B = e^('+kk+' × '+m+') = e^'+(kk*m)+'.',
      ['Identifier les propriétés algébriques de la fonction exponentielle.','Identifier les exposants à combiner.'],
      ['Appliquer les règles sur les exposants.'],
      ['Calculer l’exposant de A : '+(m+n-p)+'.','Calculer l’exposant de B : '+(kk*m)+'.','Conclure.']),
     K('Résous dans ℝ l’équation e^('+aff(a1,b1)+') = e^('+aff(a2,b2)+'), puis l’inéquation e^('+aff(1,-al)+') > 1.',
      'La fonction exponentielle est strictement croissante sur ℝ, donc eᵃ = eᵇ ⟺ a = b : '+aff(a1,b1)+' = '+aff(a2,b2)+', soit '+aff(a1-a2,0)+' = '+fmt(b2-b1,0)+' et x = '+fmt(sol,0)+' : S = {'+fmt(sol,0)+'}. Comme 1 = e⁰, e^('+aff(1,-al)+') > e⁰ ⟺ '+aff(1,-al)+' > 0 ⟺ x > '+fmt(al,0)+' : S = ]'+fmt(al,0)+' ; +∞[.',
      ['Identifier que exp est strictement croissante sur ℝ.','Identifier que 1 = e⁰.'],
      ['Ramener l’équation et l’inéquation à des comparaisons d’exposants.'],
      ['Résoudre l’équation : x = '+fmt(sol,0)+'.','Écrire 1 = e⁰.','Résoudre l’inéquation : x > '+fmt(al,0)+'.'])];
    var L=LEX[x.W.id], N0=pick(r,[200,500,1000,2000]), k=pick(r,[0.05,0.1,0.2]), t1=pick(r,[5,10,15]), Nt=N0*Math.exp(k*t1), td=Math.log(2)/k, tdi=Math.ceil(td);
    var i2='Le nombre de '+L[0]+' est modélisé, au bout de t '+L[1]+', par N(t) = '+fmt(N0,0)+' × e^('+fmt(k,2)+'t).';
    var p2=[K('Calcule N(0) et N('+t1+') (arrondi à l’unité). Interprète N(0).',
      'N(0) = '+fmt(N0,0)+' × e⁰ = '+fmt(N0,0)+' : c’est le nombre initial de '+L[0]+'. N('+t1+') = '+fmt(N0,0)+' × e^('+fmt(k,2)+' × '+t1+') = '+fmt(N0,0)+' × e^'+fmt(k*t1,2)+' ≈ '+fmt(Math.round(Nt),0)+'.',
      ['Identifier que e⁰ = 1.','Identifier la valeur de t à remplacer.'],
      ['Remplacer t par 0 puis par '+t1+' dans N(t).'],
      ['Calculer N(0) = '+fmt(N0,0)+'.','Calculer N('+t1+') ≈ '+fmt(Math.round(Nt),0)+'.','Interpréter N(0).']),
     K('Au bout de combien de '+L[1]+' le nombre initial aura-t-il doublé ? Résous l’équation N(t) = '+fmt(2*N0,0)+'.',
      fmt(N0,0)+' × e^('+fmt(k,2)+'t) = '+fmt(2*N0,0)+' ⟺ e^('+fmt(k,2)+'t) = 2 ⟺ '+fmt(k,2)+'t = ln 2 ⟺ t = ln 2 ÷ '+fmt(k,2)+' ≈ '+fmt(td,2)+'. Le nombre initial aura doublé au cours '+L[2]+' '+tdi+'e '+L[3]+' (après environ '+fmt(td,2)+' '+L[1]+').',
      ['Identifier l’équation N(t) = 2N(0).','Identifier que eᵃ = b ⟺ a = ln b (b > 0).'],
      ['Isoler l’exponentielle puis appliquer ln.'],
      ['Se ramener à e^('+fmt(k,2)+'t) = 2.','Calculer t = ln 2 ÷ '+fmt(k,2)+' ≈ '+fmt(td,2)+'.','Conclure.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{m:m,n:n,p:p,kk:kk,a1:a1,b1:b1,a2:a2,b2:b2,sol:sol,al:al,N0:N0,k:k,t1:t1,Nt:Nt,td:td}}; }

  /* ================= Équations, inéquations & systèmes ================= */
  var LEQ={jardin:['adulte','enfant','la visite du jardin'],sport:['adulte','élève','le match de gala'],coop:['adulte','élève','la kermesse de la coopérative']};
  function gEQ(x){
    var r=x.rnd, rs=pick(r,[[1,2],[1,3],[2,3],[1,4],[2,5],[1,6],[3,4]]), S=rs[0]+rs[1], P=rs[0]*rs[1], D=S*S-4*P;
    var intro='On considère les équations (E₁) : X² '+MN+' '+S+'X + '+P+' = 0 et (E₂) : e^(2x) '+MN+' '+S+'e^x + '+P+' = 0.';
    var lnS=function(v){ return v===1?'0':'ln '+v; };
    var p1=[K('Résous dans ℝ l’équation (E₁).',
      'Δ = '+par(-S)+'² '+MN+' 4 × 1 × '+P+' = '+(S*S)+' '+MN+' '+(4*P)+' = '+D+' > 0 et √Δ = '+Math.sqrt(D)+'. X₁ = ('+S+' '+MN+' '+Math.sqrt(D)+') ÷ 2 = '+rs[0]+' et X₂ = ('+S+' + '+Math.sqrt(D)+') ÷ 2 = '+rs[1]+'. S = {'+rs[0]+' ; '+rs[1]+'}.',
      ['Identifier une équation du second degré.','Identifier la formule du discriminant.'],
      ['Calculer Δ puis appliquer les formules des racines.'],
      ['Calculer Δ = '+D+'.','Calculer X₁ = '+rs[0]+'.','Calculer X₂ = '+rs[1]+'.']),
     K('En posant X = e^x, déduis-en les solutions de (E₂).',
      'Comme e^(2x) = (e^x)², en posant X = e^x l’équation (E₂) devient X² '+MN+' '+S+'X + '+P+' = 0, soit (E₁). Donc e^x = '+rs[0]+' ou e^x = '+rs[1]+'. Ces nombres sont strictement positifs, donc x = '+lnS(rs[0])+' ou x = '+lnS(rs[1])+'. S = {'+lnS(rs[0])+' ; '+lnS(rs[1])+'}'+(rs[0]===1?'':' (x ≈ '+fmt(Math.log(rs[0]),2)+' ou x ≈ '+fmt(Math.log(rs[1]),2)+')')+(rs[0]===1?' (ln '+rs[1]+' ≈ '+fmt(Math.log(rs[1]),2)+')':'')+'.',
      ['Identifier que e^(2x) = (e^x)².','Identifier que e^x = a ⟺ x = ln a, pour a > 0.'],
      ['Effectuer le changement d’inconnue X = e^x.'],
      ['Se ramener à (E₁).','Écrire e^x = '+rs[0]+' ou e^x = '+rs[1]+'.','Conclure avec ln.'])];
    var L=LEQ[x.W.id], pa=ri(r,4,10)*100, pe=ri(r,1,pa/100-1)*100, Na=ri(r,30,90), Ne=ri(r,40,150), N=Na+Ne, R=pa*Na+pe*Ne, obj=R+ri(r,5,20)*pe, nmin=Math.ceil((obj-R)/pe);
    var i2='Pour '+L[2]+', le billet '+L[0]+' coûte '+money(pa)+' et le billet '+L[1]+' '+money(pe)+'. On a vendu '+N+' billets pour une recette de '+money(R)+'.';
    var p2=[K('Combien de billets de chaque sorte a-t-on vendus ? Écris et résous un système.',
      'Soit x le nombre de billets '+L[0]+' et y le nombre de billets '+L[1]+' : { x + y = '+N+' ; '+pa+'x + '+pe+'y = '+fmt(R,0)+' }. De la 1re équation, y = '+N+' '+MN+' x ; dans la 2e : '+pa+'x + '+pe+'('+N+' '+MN+' x) = '+fmt(R,0)+', soit '+(pa-pe)+'x = '+fmt(R,0)+' '+MN+' '+fmt(pe*N,0)+' = '+fmt(R-pe*N,0)+', donc x = '+Na+' et y = '+N+' '+MN+' '+Na+' = '+Ne+'. On a vendu '+Na+' billets '+L[0]+' et '+Ne+' billets '+L[1]+'.',
      ['Identifier les deux inconnues et les deux informations (nombre de billets, recette).','Identifier une méthode de résolution (substitution).'],
      ['Traduire par un système de deux équations.'],
      ['Écrire le système.','Calculer x = '+Na+'.','Calculer y = '+Ne+' et conclure.']),
     K('L’objectif est une recette d’au moins '+money(obj)+'. Combien de billets '+L[1]+' supplémentaires faut-il vendre au minimum ? Résous une inéquation.',
      'Soit n le nombre de billets '+L[1]+' supplémentaires : '+fmt(R,0)+' + '+pe+'n ≥ '+fmt(obj,0)+', soit '+pe+'n ≥ '+fmt(obj-R,0)+' et n ≥ '+fmt(obj-R,0)+' ÷ '+pe+(Number.isInteger((obj-R)/pe)?' = ':' ≈ ')+fmt((obj-R)/pe,2)+'. Comme n est un entier naturel, il faut vendre au minimum '+nmin+' billets '+L[1]+' supplémentaires.',
      ['Identifier la recette actuelle et l’objectif.','Identifier que « au moins » se traduit par ≥.'],
      ['Traduire par l’inéquation '+fmt(R,0)+' + '+pe+'n ≥ '+fmt(obj,0)+'.'],
      ['Isoler n.','Calculer la borne.','Conclure avec un entier : '+nmin+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{rs:rs,S:S,P:P,pa:pa,pe:pe,Na:Na,Ne:Ne,N:N,R:R,obj:obj,nmin:nmin}}; }

  /* ================= Entiers naturels, numération & récurrence ================= */
  function toBase(n,b){ var d=[]; if(n===0) return '0'; while(n>0){ d.unshift(n%b); n=Math.floor(n/b); } return d.join(''); }
  function divs(n,b){ var o=[]; while(n>0){ o.push(n+' = '+b+' × '+Math.floor(n/b)+' + '+(n%b)); n=Math.floor(n/b); } return o; }
  function gNU(x){
    var r=x.rnd, N=ri(r,40,250), bin=toBase(N,2), oct=toBase(N,8), B=ri(r,33,127), Bs=toBase(B,2), O=ri(r,70,500), Os=toBase(O,8);
    var intro='Pour coder des informations sur ordinateur, '+who(x)+' utilise la base deux et la base huit.';
    var p1=[K('Écris le nombre '+N+' (écrit en base dix) en base deux, puis en base huit.',
      'Divisions successives par 2 : '+divs(N,2).join(' ; ')+'. En lisant les restes de bas en haut : '+N+' = '+bin+' (base deux). Divisions successives par 8 : '+divs(N,8).join(' ; ')+'. Donc '+N+' = '+oct+' (base huit).',
      ['Identifier la méthode des divisions euclidiennes successives.','Identifier que les restes sont lus du dernier au premier.'],
      ['Effectuer les divisions successives par 2 puis par 8.'],
      ['Faire les divisions par 2.','Écrire '+N+' en base deux.','Écrire '+N+' en base huit.']),
     K('Écris en base dix le nombre '+Bs+' (base deux) et le nombre '+Os+' (base huit).',
      Bs+' (base deux) = '+Bs.split('').map(function(c,i){ return c+' × 2^'+(Bs.length-1-i); }).join(' + ')+' = '+B+'. '+Os+' (base huit) = '+Os.split('').map(function(c,i){ return c+' × 8^'+(Os.length-1-i); }).join(' + ')+' = '+O+'.',
      ['Identifier la valeur de position de chaque chiffre (puissances de la base).','Identifier les bases deux et huit.'],
      ['Écrire chaque nombre comme somme de produits par des puissances de la base.'],
      ['Développer '+Bs+' en base deux.','Calculer : '+B+'.','Développer '+Os+' en base huit et calculer : '+O+'.'])];
    var h=ri(r,1,3), mn=ri(r,1,59), sc=ri(r,1,59), T=h*3600+mn*60+sc;
    var F=pick(r,[{s:'1 + 3 + 5 + … + (2n '+MN+' 1) = n²',i:'1 = 1²',h:'1 + 3 + … + (2n '+MN+' 1) + (2n + 1) = n² + 2n + 1 = (n + 1)²',nx:'(n + 1)²'},
                  {s:'1 + 2 + 3 + … + n = n(n + 1) ÷ 2',i:'1 = 1 × 2 ÷ 2',h:'1 + 2 + … + n + (n + 1) = n(n + 1) ÷ 2 + (n + 1) = (n + 1)(n + 2) ÷ 2',nx:'(n + 1)(n + 2) ÷ 2'},
                  {s:'2 + 4 + 6 + … + 2n = n(n + 1)',i:'2 = 1 × 2',h:'2 + 4 + … + 2n + 2(n + 1) = n(n + 1) + 2(n + 1) = (n + 1)(n + 2)',nx:'(n + 1)(n + 2)'}]);
    var i2='La durée d’une activité, mesurée par un chronomètre, est de '+fmt(T,0)+' secondes.';
    var p2=[K('Exprime cette durée en heures, minutes et secondes (système sexagésimal, base soixante).',
      fmt(T,0)+' = 60 × '+Math.floor(T/60)+' + '+sc+' : '+fmt(T,0)+' s = '+Math.floor(T/60)+' min '+sc+' s. Puis '+Math.floor(T/60)+' = 60 × '+h+' + '+mn+' : '+Math.floor(T/60)+' min = '+h+' h '+mn+' min. La durée est '+h+' h '+mn+' min '+sc+' s.',
      ['Identifier que 1 min = 60 s et 1 h = 60 min.','Identifier la division euclidienne par 60.'],
      ['Effectuer deux divisions euclidiennes successives par 60.'],
      ['Diviser '+fmt(T,0)+' par 60.','Diviser '+Math.floor(T/60)+' par 60.','Conclure : '+h+' h '+mn+' min '+sc+' s.']),
     K('Démontre par récurrence que, pour tout entier naturel n ≥ 1, '+F.s+'.',
      'Initialisation : pour n = 1, '+F.i+' : l’égalité est vraie. Hérédité : supposons l’égalité vraie pour un entier n ≥ 1. Alors '+F.h+' : l’égalité est vraie au rang n + 1. Conclusion : d’après le principe de récurrence, '+F.s+' pour tout entier n ≥ 1.',
      ['Identifier les trois étapes d’un raisonnement par récurrence.','Identifier la propriété à démontrer au rang n + 1 (membre de droite '+F.nx+').'],
      ['Vérifier l’initialisation, puis utiliser l’hypothèse de récurrence.'],
      ['Vérifier pour n = 1.','Démontrer l’hérédité.','Conclure.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{N:N,bin:bin,oct:oct,B:B,Bs:Bs,O:O,Os:Os,T:T,h:h,mn:mn,sc:sc}}; }

  /* ================= Suites numériques (intérêts simples et composés) ================= */
  function gSU(x){
    var r=x.rnd, C0=ri(r,2,10)*100000, t=pick(r,[4,5,8,10]), I=C0*t/100, n=pick(r,[3,5,6]), Cn=C0+n*I, goal=C0+ri(r,7,15)*I, ng=(goal-C0)/I;
    var q=1+t/100, D5=C0*Math.pow(q,5), nd=Math.ceil(Math.log(2)/Math.log(q));
    var intro=Who(x)+' place un capital de '+money(C0)+' à intérêts simples au taux annuel de '+t+' %. On note Cₙ la valeur acquise au bout de n années (C₀ = '+fmt(C0,0)+').';
    var p1=[K('Montre que (Cₙ) est une suite arithmétique dont tu préciseras la raison, puis calcule C'+sub(n)+'.',
      'À intérêts simples, l’intérêt annuel est constant : '+fmt(C0,0)+' × '+t+' ÷ 100 = '+fmt(I,0)+'. Donc Cₙ₊₁ = Cₙ + '+fmt(I,0)+' : (Cₙ) est arithmétique de raison '+fmt(I,0)+' et Cₙ = '+fmt(C0,0)+' + '+fmt(I,0)+'n. C'+sub(n)+' = '+fmt(C0,0)+' + '+fmt(I,0)+' × '+n+' = '+money(Cn)+'.',
      ['Identifier que l’intérêt simple est calculé chaque année sur le capital initial.','Identifier la définition d’une suite arithmétique.'],
      ['Calculer l’intérêt annuel puis écrire Cₙ = C₀ + nr.'],
      ['Calculer l’intérêt annuel : '+fmt(I,0)+'.','Donner la raison et la formule.','Calculer C'+sub(n)+' = '+money(Cn)+'.']),
     K('Au bout de combien d’années la valeur acquise atteindra-t-elle '+money(goal)+' ?',
      'On résout '+fmt(C0,0)+' + '+fmt(I,0)+'n = '+fmt(goal,0)+' : '+fmt(I,0)+'n = '+fmt(goal-C0,0)+', donc n = '+fmt(goal-C0,0)+' ÷ '+fmt(I,0)+' = '+ng+'. La valeur acquise atteindra '+money(goal)+' au bout de '+ng+' ans.',
      ['Identifier la valeur à atteindre.','Identifier la formule explicite de Cₙ.'],
      ['Traduire par une équation d’inconnue n.'],
      ['Isoler n.','Calculer n = '+ng+'.','Conclure.'])];
    var i2='Une banque propose de placer le même capital de '+money(C0)+' à intérêts composés au taux annuel de '+t+' %. On note Dₙ la valeur acquise au bout de n années (D₀ = '+fmt(C0,0)+').';
    var p2=[K('Justifie que (Dₙ) est une suite géométrique, puis calcule D₅ (arrondi au franc).',
      'Chaque année, le capital est multiplié par 1 + '+t+'/100 = '+fmt(q,2)+' : Dₙ₊₁ = '+fmt(q,2)+' × Dₙ. (Dₙ) est géométrique de raison '+fmt(q,2)+' et Dₙ = '+fmt(C0,0)+' × '+fmt(q,2)+'ⁿ. D₅ = '+fmt(C0,0)+' × '+fmt(q,2)+'^5 ≈ '+money(Math.round(D5))+'.',
      ['Identifier qu’à intérêts composés les intérêts s’ajoutent au capital chaque année.','Identifier la définition d’une suite géométrique.'],
      ['Écrire Dₙ = D₀ × qⁿ.'],
      ['Donner la raison '+fmt(q,2)+'.','Écrire Dₙ en fonction de n.','Calculer D₅ ≈ '+money(Math.round(D5))+'.']),
     K('Au bout de combien d’années le capital placé à intérêts composés aura-t-il doublé ? Utilise la fonction ln.',
      'On cherche le plus petit entier n tel que '+fmt(C0,0)+' × '+fmt(q,2)+'ⁿ ≥ '+fmt(2*C0,0)+', soit '+fmt(q,2)+'ⁿ ≥ 2. La fonction ln étant croissante : n × ln '+fmt(q,2)+' ≥ ln 2, donc n ≥ ln 2 ÷ ln '+fmt(q,2)+' ≈ '+fmt(Math.log(2)/Math.log(q),2)+' (car ln '+fmt(q,2)+' > 0). Le capital aura doublé au bout de '+nd+' ans.',
      ['Identifier l’inéquation Dₙ ≥ 2D₀.','Identifier que ln est strictement croissante et que ln(qⁿ) = n ln q.'],
      ['Appliquer ln aux deux membres et isoler n.'],
      ['Se ramener à '+fmt(q,2)+'ⁿ ≥ 2.','Calculer ln 2 ÷ ln '+fmt(q,2)+' ≈ '+fmt(Math.log(2)/Math.log(q),2)+'.','Conclure : '+nd+' ans.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{C0:C0,t:t,I:I,n:n,Cn:Cn,goal:goal,ng:ng,q:q,D5:D5,nd:nd}}; }

  /* ================= Statistique à deux caractères (méthode de Mayer) ================= */
  var LS2={jardin:['la production de tomates (en kg)','l’année'],sport:['le nombre de spectateurs (en centaines)','l’édition'],coop:['le chiffre d’affaires (en milliers de francs)','le mois']};
  function gS2(x){
    var r=x.rnd, L=LS2[x.W.id], a=ri(r,2,6), b=ri(r,5,20), ys, it;
    for(it=0;it<500;it++){ ys=[1,2,3,4,5,6].map(function(t){ return a*t+b+ri(r,-2,2); }); var s1=ys[0]+ys[1]+ys[2], s2=ys[3]+ys[4]+ys[5]; if(s1%3===0&&s2%3===0&&((s2-s1)/3)%3===0) break; }
    var Y1=(ys[0]+ys[1]+ys[2])/3, Y2=(ys[3]+ys[4]+ys[5])/3, sl=(Y2-Y1)/3, ic=Y1-2*sl, Ym=(Y1+Y2)/2, x8=pick(r,[8,9,10]);
    var tab={type:'table',head:['Rang xᵢ','1','2','3','4','5','6'],rows:[['Valeur yᵢ'].concat(ys.map(String))]};
    var intro='Le tableau ci-dessous donne '+L[0]+' selon le rang de '+L[1]+'.';
    var p1=[K('Calcule les coordonnées du point moyen G du nuage de points.',
      'x̄ = (1 + 2 + 3 + 4 + 5 + 6) ÷ 6 = 21 ÷ 6 = 3,5 et ȳ = ('+ys.join(' + ')+') ÷ 6 = '+ys.reduce(function(s,v){ return s+v; },0)+' ÷ 6 '+dec(Ym,2)+'. Donc G(3,5 ; '+fmt(Ym,2)+').',
      ['Identifier que le point moyen a pour coordonnées les moyennes des xᵢ et des yᵢ.','Identifier l’effectif : 6 points.'],
      ['Écrire x̄ = (Σ xᵢ) ÷ 6 et ȳ = (Σ yᵢ) ÷ 6.'],
      ['Calculer x̄ = 3,5.','Calculer ȳ '+dec(Ym,2)+'.','Donner G.']),
     K('Méthode de Mayer : partage le nuage en deux sous-nuages de 3 points (rangs 1 à 3 et rangs 4 à 6) et calcule les coordonnées de leurs points moyens G₁ et G₂.',
      'G₁ : x = (1 + 2 + 3) ÷ 3 = 2 et y = ('+ys[0]+' + '+ys[1]+' + '+ys[2]+') ÷ 3 = '+fmt(Y1,0)+', donc G₁(2 ; '+fmt(Y1,0)+'). G₂ : x = (4 + 5 + 6) ÷ 3 = 5 et y = ('+ys[3]+' + '+ys[4]+' + '+ys[5]+') ÷ 3 = '+fmt(Y2,0)+', donc G₂(5 ; '+fmt(Y2,0)+').',
      ['Identifier le partage du nuage en deux sous-nuages de même effectif.','Identifier la notion de point moyen d’un sous-nuage.'],
      ['Calculer les moyennes des abscisses et des ordonnées de chaque sous-nuage.'],
      ['Calculer G₁(2 ; '+fmt(Y1,0)+').','Calculer G₂(5 ; '+fmt(Y2,0)+').','Présenter les résultats.'])];
    var i2=(x.standalone2?'Pour une série de 6 points, les points moyens des deux sous-nuages de Mayer sont G₁(2 ; '+fmt(Y1,0)+') et G₂(5 ; '+fmt(Y2,0)+'). ':'')+'On ajuste le nuage par la droite de Mayer (G₁G₂).';
    var p2=[K('Détermine une équation de la droite (G₁G₂) sous la forme y = ax + b.',
      'Coefficient directeur : a = ('+fmt(Y2,0)+' '+MN+' '+fmt(Y1,0)+') ÷ (5 '+MN+' 2) = '+fmt(Y2-Y1,0)+' ÷ 3 = '+fmt(sl,0)+'. La droite passe par G₁ : '+fmt(Y1,0)+' = '+fmt(sl,0)+' × 2 + b, donc b = '+fmt(Y1,0)+' '+MN+' '+fmt(2*sl,0)+' = '+fmt(ic,0)+'. Équation : y = '+aff(sl,ic)+'.',
      ['Identifier les coordonnées de G₁ et G₂.','Identifier la formule du coefficient directeur.'],
      ['Calculer a puis b en utilisant un point de la droite.'],
      ['Calculer a = '+fmt(sl,0)+'.','Calculer b = '+fmt(ic,0)+'.','Écrire y = '+aff(sl,ic)+'.']),
     K('À l’aide de cet ajustement, estime la valeur correspondant au rang '+x8+'.',
      'Pour x = '+x8+' : y = '+fmt(sl,0)+' × '+x8+' + '+par(ic)+' = '+fmt(sl*x8+ic,0)+'. On peut estimer la valeur à environ '+fmt(sl*x8+ic,0)+' pour le rang '+x8+', en supposant que la tendance se poursuit.',
      ['Identifier l’équation de la droite d’ajustement.','Identifier le rang '+x8+'.'],
      ['Remplacer x par '+x8+' dans l’équation de la droite.'],
      ['Calculer '+fmt(sl,0)+' × '+x8+'.','Calculer y = '+fmt(sl*x8+ic,0)+'.','Conclure (estimation).'])];
    return {parts:[{intro:intro,cons:p1,table:tab},{intro:i2,cons:p2}],_g:{ys:ys,Y1:Y1,Y2:Y2,sl:sl,ic:ic,Ym:Ym,x8:x8}}; }

  /* ================= Probabilités ================= */
  function gPB(x){
    var r=x.rnd, R=ri(r,2,7), V=ri(r,2,6), Bl=ri(r,1,5), N=R+V+Bl;
    var intro='Pour une tombola, '+who(x)+' place dans une urne '+R+' boules rouges, '+V+' boules vertes et '+Bl+' boule'+(Bl>1?'s':'')+' blanche'+(Bl>1?'s':'')+', indiscernables au toucher. On tire une boule au hasard.';
    var p1=[K('Combien y a-t-il d’éventualités ? Calcule la probabilité de chacun des événements R : « la boule est rouge », V : « la boule est verte » et B : « la boule est blanche ».',
      'L’univers est l’ensemble des '+N+' boules ; les boules étant indiscernables au toucher, il y a équiprobabilité. P(R) = '+R+'/'+N+(fr(R,N)!==R+'/'+N?' = '+fr(R,N):'')+' ; P(V) = '+V+'/'+N+(fr(V,N)!==V+'/'+N?' = '+fr(V,N):'')+' ; P(B) = '+Bl+'/'+N+(fr(Bl,N)!==Bl+'/'+N?' = '+fr(Bl,N):'')+'.',
      ['Identifier l’univers et son cardinal '+N+'.','Identifier l’hypothèse d’équiprobabilité.'],
      ['Utiliser P(A) = nombre de cas favorables ÷ nombre de cas possibles.'],
      ['Calculer P(R).','Calculer P(V).','Calculer P(B).']),
     K('Calcule la probabilité de l’événement « la boule n’est pas blanche » et celle de l’événement « la boule est rouge ou verte ». Compare.',
      'L’événement « la boule n’est pas blanche » est le contraire de B : P = 1 '+MN+' '+Bl+'/'+N+' = '+(N-Bl)+'/'+N+'. R et V sont incompatibles : P(R ∪ V) = P(R) + P(V) = '+R+'/'+N+' + '+V+'/'+N+' = '+(R+V)+'/'+N+'. Les deux probabilités sont égales car « la boule est rouge ou verte » et « la boule n’est pas blanche » sont le même événement.',
      ['Identifier l’événement contraire de B.','Identifier que R et V sont incompatibles.'],
      ['Utiliser P(contraire de A) = 1 '+MN+' P(A) et P(A ∪ B) = P(A) + P(B) pour A, B incompatibles.'],
      ['Calculer 1 '+MN+' P(B) = '+(N-Bl)+'/'+N+'.','Calculer P(R ∪ V) = '+(R+V)+'/'+N+'.','Comparer et justifier.'])];
    var s=pick(r,[4,5,6,7,8,9,10]), cs=0, pairs=[]; for(var i=1;i<=6;i++) for(var j=1;j<=6;j++) if(i+j===s){ cs++; pairs.push('('+i+' ; '+j+')'); }
    var both=(s%2===0&&s/2<=6)?1:0, uni=cs+6-both;
    var i2='Lors d’un jeu, on lance deux dés équilibrés, l’un rouge et l’autre bleu, numérotés de 1 à 6. On note A : « la somme des deux numéros est égale à '+s+' » et D : « les deux numéros sont égaux ».';
    var p2=[K('Combien y a-t-il de résultats possibles ? Calcule P(A) et P(D).',
      'Un résultat est un couple (numéro du dé rouge ; numéro du dé bleu) : il y a 6 × 6 = 36 résultats équiprobables. A = {'+pairs.join(', ')+'}, donc P(A) = '+cs+'/36'+(fr(cs,36)!==cs+'/36'?' = '+fr(cs,36):'')+'. D = {(1 ; 1), (2 ; 2), (3 ; 3), (4 ; 4), (5 ; 5), (6 ; 6)}, donc P(D) = 6/36 = 1/6.',
      ['Identifier l’univers : les couples de numéros.','Identifier l’équiprobabilité (dés équilibrés).'],
      ['Dénombrer les cas favorables à A et à D.'],
      ['Calculer le cardinal de l’univers : 36.','Lister A et calculer P(A).','Calculer P(D) = 1/6.']),
     K('Décris l’événement A ∩ D, puis calcule P(A ∪ D).',
      (both?'A ∩ D = {('+(s/2)+' ; '+(s/2)+')} : P(A ∩ D) = 1/36.':'Aucun double n’a pour somme '+s+' : A ∩ D = ∅ et P(A ∩ D) = 0.')+' P(A ∪ D) = P(A) + P(D) '+MN+' P(A ∩ D) = '+cs+'/36 + 6/36 '+MN+' '+both+'/36 = '+uni+'/36'+(fr(uni,36)!==uni+'/36'?' = '+fr(uni,36):'')+'.',
      ['Identifier l’intersection de deux événements.','Identifier la formule P(A ∪ D) = P(A) + P(D) '+MN+' P(A ∩ D).'],
      ['Chercher les doubles de somme '+s+', puis appliquer la formule.'],
      ['Décrire A ∩ D.','Calculer P(A ∩ D).','Calculer P(A ∪ D) = '+fr(uni,36)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{R:R,V:V,Bl:Bl,N:N,s:s,cs:cs,both:both,uni:uni}}; }

  var reg=function(id,themes,label,w1,build){ MOD['TA-'+id]={cls:'Tle A',theme:themes[0],themes:themes,label:label,w1:w1,build:build}; };
  var T=function(s){ return 'TleA — '+s; };
  reg('PS',[T('Parité & éléments de symétrie')],'Parité et éléments de symétrie',1,B1.PS);
  reg('LC',[T('Limites & continuité')],'Limites et continuité',1,B1.LC);
  reg('DV',[T('Dérivation & sens de variation')],'Dérivation et sens de variation',1,B1.DV);
  reg('EF',[T('Fonctions polynômes, homographiques & asymptotes')],'Fonction homographique et asymptotes',1,B1.EF);
  reg('LN',[T('Fonction logarithme népérien')],'Fonction logarithme népérien',1,gLN);
  reg('EX',[T('Fonction exponentielle népérienne')],'Fonction exponentielle népérienne',2,gEX);
  reg('EQ',[T('Équations, inéquations & systèmes')],'Équations, inéquations et systèmes',2,gEQ);
  reg('NU',[T('Entiers naturels, numération & récurrence')],'Numération et récurrence',1,gNU);
  reg('SU',[T('Suites numériques')],'Suites numériques',2,gSU);
  reg('ST',[T('Statistique à un caractère')],'Statistique à un caractère',2,B1.ST);
  reg('S2',[T('Statistique à deux caractères')],'Statistique à deux caractères',2,gS2);
  reg('PB',[T('Probabilités')],'Probabilités',2,gPB);
})(typeof globalThis!=='undefined'?globalThis:this);
