/* ===== MQ_SOM : modules de problèmes sommatifs — Terminale D et C : notions complémentaires ===== */
(function(G){
  'use strict';
  var M=G.MQ_SOM_MOD, MOD=M.MOD, fmt=M.fmt, ri=M.ri, pick=M.pick, gcd=M.gcd, H=M.helpers14, par=H.par, eqSym=H.eqSym;
  var MN='\u2212';
  function fixMinus(t){ return String(t).replace(/([\s(\[{;,]|^)-(?=\d)/g,'$1\u2212'); }
  function K(t,s,A,Mm,O){ return M.K(fixMinus(t),fixMinus(s),A.map(fixMinus),Mm.map(fixMinus),O.map(fixMinus)); }
  function f2(v){ return (Math.round(v*100)/100).toFixed(2).replace('.',','); }
  function rd(v,d){ var q=Math.pow(10,d); return Math.round(v*q)/q; }
  function tm(c,v,first){ if(!c) return ''; var ab=Math.abs(c), b=v?((ab===1?'':fmt(ab,0))+v):fmt(ab,0); return first?((c<0?MN:'')+b):((c<0?' '+MN+' ':' + ')+b); }
  function eq3(row,rhs,vars){ vars=vars||['x','y','z']; var o='',first=true; row.forEach(function(c,i){ if(c){ o+=tm(c,vars[i],first); first=false; } }); return (o||'0')+' = '+fmt(rhs,0); }
  function dot(u,v){ return u[0]*v[0]+u[1]*v[1]+u[2]*v[2]; }
  function P3(v){ return '('+v.map(function(c){ return fmt(c,0); }).join('\u00a0;\u00a0')+')'; }
  function lc(b0,pairs){ var o=fmt(b0,0); pairs.forEach(function(p){ if(p[0]) o+=' '+MN+' '+par(p[0],0)+' × '+par(p[1],0); }); return o; }

  /* ================= Systèmes linéaires : pivot de Gauss ================= */
  function gSY(x){
    var r=x.rnd, sol=[ri(r,-3,4),ri(r,-3,4),ri(r,-3,4)], p=ri(r,-2,2), q=ri(r,-2,2), u2=pick(r,[1,-1,2]), rr=ri(r,-2,2), u3=pick(r,[1,-1,2,-2]), L=[-3,-2,-1,1,2,3], l21=pick(r,L), l31=pick(r,L), l32=pick(r,L);
    var R1=[1,p,q], R2=[l21,l21*p+u2,l21*q+rr], R3=[l31,l31*p+l32*u2,l31*q+l32*rr+u3], b=[dot(R1,sol),dot(R2,sol),dot(R3,sol)];
    var b2=b[1]-l21*b[0], b3=b[2]-l31*b[0], b3b=b3-l32*b2, R3a=[0,R3[1]-l31*p,R3[2]-l31*q], zz=b3b/u3, yy=(b2-rr*zz)/u2, xx=b[0]-p*yy-q*zz;
    var sg=function(c){ return c<0?'+ '+fmt(-c,0):'− '+fmt(c,0); };
    var SB=['₀','₁','₂','₃'], op=function(l,a,bn){ var ab=Math.abs(a); return 'L'+SB[l]+' ← L'+SB[l]+(a<0?' + ':' − ')+(ab===1?'':ab+' ')+'L'+SB[bn]; };
    var intro='Le comité cherche trois quantités x, y et z qui vérifient le système (S) : ('+eq3(R1,b[0])+') ; ('+eq3(R2,b[1])+') ; ('+eq3(R3,b[2])+').';
    var p1=[K('Applique la méthode du pivot de Gauss pour transformer (S) en un système triangulaire équivalent.',
      'On garde L₁ comme pivot. '+op(2,l21,1)+' donne '+eq3([0,u2,rr],b2)+'. '+op(3,l31,1)+' donne '+eq3(R3a,b3)+'. On prend alors L₂ comme pivot : '+op(3,l32,2)+' donne '+eq3([0,0,u3],b3b)+'. Le système triangulaire équivalent est donc : ('+eq3(R1,b[0])+') ; ('+eq3([0,u2,rr],b2)+') ; ('+eq3([0,0,u3],b3b)+').',
      ['Identifier le principe du pivot : éliminer x puis y.','Identifier que les opérations sur les lignes donnent un système équivalent.'],
      ['Choisir le pivot de la première colonne.','Écrire les opérations sur les lignes.'],
      ['Calculer la nouvelle ligne L₂.','Calculer la nouvelle ligne L₃ (deux étapes).','Écrire le système triangulaire.']),
     K('Résous le système triangulaire obtenu, puis vérifie la solution dans (S).',
      'On résout en remontant. Dernière équation : '+eq3([0,0,u3],b3b)+', donc z = '+fmt(b3b,0)+' ÷ '+par(u3,0)+' = '+fmt(zz,0)+'. Deuxième équation : '+eq3([0,u2,rr],b2)+(rr===0?', donc y = '+fmt(b2,0)+(u2===1?'':' ÷ '+par(u2,0))+' = '+fmt(yy,0)+'.':', donc '+(u2===1?'y':par(u2,0)+' y')+' = '+lc(b2,[[rr,zz]])+' = '+fmt(b2-rr*zz,0)+' et y = '+fmt(yy,0)+'.')+' Première équation : x = '+lc(b[0],[[p,yy],[q,zz]])+' = '+fmt(xx,0)+'. La solution est (x ; y ; z) = ('+fmt(xx,0)+' ; '+fmt(yy,0)+' ; '+fmt(zz,0)+'). Vérification dans la troisième équation de (S) : '+par(R3[0],0)+' × '+par(xx,0)+' + '+par(R3[1],0)+' × '+par(yy,0)+' + '+par(R3[2],0)+' × '+par(zz,0)+' = '+fmt(b[2],0)+'.',
      ['Identifier qu’un système triangulaire se résout par remontées successives.','Identifier la nécessité de vérifier la solution.'],
      ['Résoudre d’abord la dernière équation.','Remonter pour trouver y puis x.'],
      ['Calculer z = '+fmt(zz,0)+'.','Calculer y = '+fmt(yy,0)+'.','Calculer x = '+fmt(xx,0)+'.','Vérifier dans une équation de (S).'])];
    // 2e partie : système compatible indéterminé
    var s0=[ri(r,-3,4),ri(r,-3,4),ri(r,-3,4)], p2=ri(r,-2,2), q2=ri(r,-2,2), v2=pick(r,[1,-1]), r2=ri(r,-2,2), m21=pick(r,L), m31=pick(r,L), m32=pick(r,L);
    var S1=[1,p2,q2], S2=[m21,m21*p2+v2,m21*q2+r2], S3=[m31,m31*p2+m32*v2,m31*q2+m32*r2], c=[dot(S1,s0),dot(S2,s0),dot(S3,s0)];
    var c2=c[1]-m21*c[0], c3=c[2]-m31*c[0], c3b=c3-m32*c2, S3a=[0,S3[1]-m31*p2,S3[2]-m31*q2];
    var yb=v2*c2, yt=-v2*r2, xb=c[0]-p2*yb, xt=-p2*yt-q2;
    var i2='Le comité étudie aussi le système (S′) : ('+eq3(S1,c[0])+') ; ('+eq3(S2,c[1])+') ; ('+eq3(S3,c[2])+').';
    var p2s=[K('Applique la méthode du pivot de Gauss à (S′) et interprète la dernière ligne obtenue.',
      op(2,m21,1)+' donne '+eq3([0,v2,r2],c2)+'. '+op(3,m31,1)+' donne '+eq3(S3a,c3)+'. Puis '+op(3,m32,2)+' donne 0 = '+fmt(c3b,0)+'. Cette dernière équation est toujours vraie : le système est compatible, mais il ne comporte plus que deux équations indépendantes pour trois inconnues. Il admet donc une infinité de solutions.',
      ['Identifier qu’une ligne 0 = 0 traduit une équation redondante.','Identifier que le système est alors indéterminé.'],
      ['Appliquer les opérations sur les lignes.','Interpréter la ligne nulle.'],
      ['Calculer les nouvelles lignes L₂ et L₃.','Obtenir la ligne 0 = 0.','Conclure : infinité de solutions.']),
     K('Résous (S′) en prenant z = t comme paramètre.',
      'On pose z = t. La deuxième équation s’écrit '+eq3([0,v2,r2],c2)+', donc y = '+fmt(yb,0)+tm(yt,'t',false)+'. La première équation donne alors x = '+fmt(c[0],0)+(p2?' '+MN+' '+par(p2,0)+' × y':'')+(q2?' '+MN+' '+par(q2,0)+' × t':'')+', c’est-à-dire x = '+fmt(xb,0)+tm(xt,'t',false)+' après remplacement de y. L’ensemble des solutions est donc {('+fmt(xb,0)+tm(xt,'t',false)+' ; '+fmt(yb,0)+tm(yt,'t',false)+' ; t), t ∈ ℝ}. Géométriquement, les trois plans ont en commun une droite.',
      ['Identifier le choix d’un paramètre pour les inconnues libres.','Identifier que les solutions forment une droite de l’espace.'],
      ['Exprimer y puis x en fonction de t.'],
      ['Écrire y en fonction de t.','Écrire x en fonction de t.','Écrire l’ensemble des solutions.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2s}],_g:{R1:R1,R2:R2,R3:R3,b:b,sol:sol,S1:S1,S2:S2,S3:S3,c:c,xb:xb,xt:xt,yb:yb,yt:yt}}; }

  /* ================= Barycentre de trois points et fonction de Leibniz ================= */
  function gBC(x){
    var r=x.rnd, al=pick(r,[1,2,3]), be=pick(r,[1,2,3]), s=al+be+1;
    var Gc=[ri(r,-2,2),ri(r,-2,2),ri(r,-2,2)], A=[ri(r,-3,3),ri(r,-3,3),ri(r,-3,3)], B=[ri(r,-3,3),ri(r,-3,3),ri(r,-3,3)], C=[0,1,2].map(function(i){ return s*Gc[i]-al*A[i]-be*B[i]; });
    var d2=function(U,V){ return (U[0]-V[0])*(U[0]-V[0])+(U[1]-V[1])*(U[1]-V[1])+(U[2]-V[2])*(U[2]-V[2]); };
    var GA=d2(Gc,A), GB=d2(Gc,B), GC=d2(Gc,C), fG=al*GA+be*GB+GC, rho=ri(r,1,4), k=fG+s*rho*rho;
    var coef=function(w){ return w===1?'':w; };
    var intro='Dans l’espace muni d’un repère orthonormé, on considère les points A'+P3(A)+', B'+P3(B)+' et C'+P3(C)+'.';
    var comp=['x','y','z'];
    var p1=[K('Justifie que le barycentre G des points pondérés (A ; '+al+'), (B ; '+be+') et (C ; 1) existe, puis calcule ses coordonnées.',
      'La somme des coefficients est '+al+' + '+be+' + 1 = '+s+' ≠ 0 : le barycentre G existe. Ses coordonnées sont : '+[0,1,2].map(function(i){ return comp[i]+'_G = ('+al+' × '+par(A[i],0)+' + '+be+' × '+par(B[i],0)+' + 1 × '+par(C[i],0)+') ÷ '+s+' = '+fmt(al*A[i]+be*B[i]+C[i],0)+' ÷ '+s+' = '+fmt(Gc[i],0); }).join(' ; ')+'. Donc G'+P3(Gc)+'.',
      ['Identifier la condition d’existence : somme des coefficients non nulle.','Identifier la formule des coordonnées d’un barycentre.'],
      ['Calculer la somme des coefficients.','Écrire x_G = (αx_A + βx_B + γx_C) ÷ (α + β + γ), et de même pour y et z.'],
      ['Calculer la somme des coefficients : '+s+'.','Calculer x_G, y_G et z_G.','Écrire G'+P3(Gc)+'.']),
     K('Vérifie que '+coef(al)+'→GA + '+coef(be)+'→GB + →GC = →0.',
      'On a →GA '+P3([0,1,2].map(function(i){ return A[i]-Gc[i]; }))+', →GB '+P3([0,1,2].map(function(i){ return B[i]-Gc[i]; }))+' et →GC '+P3([0,1,2].map(function(i){ return C[i]-Gc[i]; }))+'. Pour chaque coordonnée : '+[0,1,2].map(function(i){ return comp[i]+' : '+al+' × '+par(A[i]-Gc[i],0)+' + '+be+' × '+par(B[i]-Gc[i],0)+' + 1 × '+par(C[i]-Gc[i],0)+' = '+fmt(al*(A[i]-Gc[i])+be*(B[i]-Gc[i])+(C[i]-Gc[i]),0); }).join(' ; ')+'. Le vecteur est bien le vecteur nul.',
      ['Identifier la définition vectorielle du barycentre.','Identifier les coordonnées de →GA, →GB et →GC.'],
      ['Calculer les coordonnées des trois vecteurs.','Calculer la combinaison coordonnée par coordonnée.'],
      ['Calculer →GA, →GB et →GC.','Calculer la combinaison pour x, y et z.','Conclure : vecteur nul.'])];
    var i2=(x.standalone2?'On rappelle que G'+P3(Gc)+' est le barycentre de (A ; '+al+'), (B ; '+be+') et (C ; 1) pour A'+P3(A)+', B'+P3(B)+' et C'+P3(C)+'. ':'')+'Pour tout point M de l’espace, on pose f(M) = '+coef(al)+'MA² + '+coef(be)+'MB² + MC².';
    var p2=[K('Montre que, pour tout point M, f(M) = '+s+'MG² + f(G), puis calcule f(G).',
      'D’après la relation de Chasles, MA² = (→MG + →GA)² = MG² + 2 →MG ⋅ →GA + GA², et de même pour B et C. En additionnant avec les coefficients : f(M) = ('+al+' + '+be+' + 1)MG² + 2 →MG ⋅ ('+coef(al)+'→GA + '+coef(be)+'→GB + →GC) + f(G). Comme '+coef(al)+'→GA + '+coef(be)+'→GB + →GC = →0, on obtient f(M) = '+s+'MG² + f(G). On a GA² = '+GA+', GB² = '+GB+' et GC² = '+GC+', donc f(G) = '+al+' × '+GA+' + '+be+' × '+GB+' + '+GC+' = '+fmt(fG,0)+'.',
      ['Identifier la relation de Chasles et le développement d’un carré scalaire.','Identifier la propriété caractéristique du barycentre.'],
      ['Décomposer chaque vecteur →MA, →MB, →MC avec G.','Utiliser la relation vectorielle du barycentre.'],
      ['Écrire la formule de Leibniz.','Calculer GA², GB² et GC².','Calculer f(G) = '+fmt(fG,0)+'.']),
     K('Détermine l’ensemble (Σ) des points M tels que f(M) = '+k+'.',
      'D’après la question précédente, f(M) = '+k+' équivaut à '+s+'MG² + '+fmt(fG,0)+' = '+k+', soit MG² = ('+k+' '+MN+' '+fmt(fG,0)+') ÷ '+s+' = '+fmt(k-fG,0)+' ÷ '+s+' = '+(rho*rho)+'. Donc MG = '+rho+'. L’ensemble (Σ) est la sphère de centre G'+P3(Gc)+' et de rayon '+rho+'.',
      ['Identifier la formule de Leibniz comme outil pour les lignes de niveau.','Identifier qu’une distance constante à un point définit une sphère.'],
      ['Isoler MG².','Reconnaître une sphère.'],
      ['Calculer MG² = '+(rho*rho)+'.','Calculer MG = '+rho+'.','Conclure : sphère de centre G, rayon '+rho+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{al:al,be:be,A:A,B:B,C:C,G:Gc,fG:fG,k:k,rho:rho}}; }

  /* ================= Exponentielles de base a et fonctions puissances ================= */
  function gEXA(x){
    var r=x.rnd, a=pick(r,[2,3,5]), m=ri(r,3,5), c=ri(r,1,2), lna=Math.log(a), am=Math.pow(a,m), x0=pick(r,[4,9,16]), sq=Math.sqrt(x0), h0=sq*sq*sq, hp=1.5*sq;
    var intro='Le comité étudie des phénomènes de croissance modélisés par la fonction f définie sur ℝ par f(x) = '+a+'ˣ, c’est-à-dire f(x) = e^(x ln '+a+').';
    var p1=[K('Résous dans ℝ l’équation '+a+'^(x + '+c+') = '+am+'.',
      'On remarque que '+am+' = '+a+'^'+m+'. L’équation s’écrit '+a+'^(x + '+c+') = '+a+'^'+m+'. Comme la fonction t ↦ '+a+'ᵗ est strictement croissante ('+a+' > 1), donc injective, on en déduit x + '+c+' = '+m+', soit x = '+m+' '+MN+' '+c+' = '+(m-c)+'. S = {'+(m-c)+'}.',
      ['Identifier qu’on peut écrire le second membre comme une puissance de '+a+'.','Identifier l’injectivité de la fonction exponentielle de base a > 1.'],
      ['Écrire '+am+' = '+a+'^'+m+'.','Égaler les exposants.'],
      ['Reconnaître '+am+' = '+a+'^'+m+'.','Égaler les exposants : x + '+c+' = '+m+'.','Conclure : x = '+(m-c)+'.']),
     K('Résous dans ℝ l’inéquation (1 ÷ '+a+')ˣ ≤ 1 ÷ '+am+'.',
      'On a 1 ÷ '+am+' = (1 ÷ '+a+')^'+m+'. L’inéquation s’écrit (1 ÷ '+a+')ˣ ≤ (1 ÷ '+a+')^'+m+'. Comme 0 < 1 ÷ '+a+' < 1, la fonction t ↦ (1 ÷ '+a+')ᵗ est strictement décroissante : elle inverse l’ordre. Donc x ≥ '+m+'. S = ['+m+' ; +∞[.',
      ['Identifier le sens de variation de l’exponentielle de base comprise entre 0 et 1.','Identifier qu’une fonction décroissante inverse les inégalités.'],
      ['Écrire le second membre comme une puissance de 1 ÷ '+a+'.','Comparer les exposants en changeant le sens.'],
      ['Reconnaître la puissance m = '+m+'.','Changer le sens de l’inégalité.','Écrire l’ensemble des solutions.'])];
    var i2=(x.standalone2?'On rappelle que f(x) = '+a+'ˣ = e^(x ln '+a+'). ':'')+'Le comité étudie aussi la fonction g définie sur ]0 ; +∞[ par g(x) = x^(3/2) = x√x.';
    var p2=[K('Détermine l’équation réduite de la tangente à la courbe de f au point d’abscisse 0 (coefficient arrondi au centième).',
      'f(x) = e^(x ln '+a+'), donc f′(x) = ln '+a+' × e^(x ln '+a+') = ln '+a+' × '+a+'ˣ. On a f(0) = '+a+'⁰ = 1 et f′(0) = ln '+a+' × 1 '+eqSym(lna,2)+' '+f2(lna)+'. La tangente a pour équation y = f′(0)x + f(0), soit y '+eqSym(lna,2)+' '+f2(lna)+'x + 1.',
      ['Identifier la dérivée de aˣ : ln a × aˣ.','Identifier la formule de la tangente.'],
      ['Écrire aˣ = e^(x ln a) puis dériver.','Calculer f(0) et f′(0).'],
      ['Calculer f′(x).','Calculer f(0) = 1 et f′(0) ≈ '+fmt(rd(lna,2),2)+'.','Écrire la tangente.']),
     K('Détermine l’équation réduite de la tangente à la courbe de g au point d’abscisse '+x0+'.',
      'g(x) = x^(3/2), donc g′(x) = (3 ÷ 2) × x^(1/2) = (3 ÷ 2)√x. On a g('+x0+') = '+x0+'^(3/2) = ('+sq+')³ = '+h0+' et g′('+x0+') = (3 ÷ 2) × √'+x0+' = (3 ÷ 2) × '+sq+' = '+fmt(hp,2)+'. La tangente a pour équation y = g′('+x0+')(x '+MN+' '+x0+') + g('+x0+') = '+fmt(hp,2)+'(x '+MN+' '+x0+') + '+h0+', soit y = '+fmt(hp,2)+'x '+(h0-hp*x0<0?MN+' '+fmt(-(h0-hp*x0),2):'+ '+fmt(h0-hp*x0,2))+'.',
      ['Identifier la dérivée d’une fonction puissance : (xᵅ)′ = α xᵅ⁻¹.','Identifier que x^(3/2) = x√x.'],
      ['Calculer g′(x).','Calculer g('+x0+') et g′('+x0+').'],
      ['Calculer g′(x) = (3 ÷ 2)√x.','Calculer g('+x0+') = '+h0+' et g′('+x0+') = '+fmt(hp,2)+'.','Écrire l’équation de la tangente.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,m:m,c:c,x0:x0,h0:h0,hp:hp}}; }

  /* ================= Translations et homothéties de l'espace ================= */
  function gTH(x){
    var r=x.rnd, k1=pick(r,[2,3,-1,-2]), k2=2, u=[ri(r,-3,3),ri(r,-3,3),ri(r,-3,3)], O1=[ri(r,-2,2),ri(r,-2,2),ri(r,-2,2)], A=[ri(r,-3,3),ri(r,-3,3),ri(r,-3,3)], B=[ri(r,-3,3),ri(r,-3,3),ri(r,-3,3)];
    var O3=[ri(r,-2,2),ri(r,-2,2),ri(r,-2,2)], O2=[0,1,2].map(function(i){ return -((1-k1*k2)*O3[i]-k2*(1-k1)*O1[i]); });
    var tA=[0,1,2].map(function(i){ return A[i]+u[i]; }), hA=[0,1,2].map(function(i){ return O1[i]+k1*(A[i]-O1[i]); }), hB=[0,1,2].map(function(i){ return O1[i]+k1*(B[i]-O1[i]); }), cm=['x','y','z'];
    var h2=function(Y){ return [0,1,2].map(function(i){ return O2[i]+k2*(Y[i]-O2[i]); }); }, comp=function(X){ return h2(X.map(function(_,i){ return O1[i]+k1*(X[i]-O1[i]); })); };
    var kk=k1*k2;
    var intro='Dans l’espace muni d’un repère orthonormé, on considère le vecteur →u'+P3(u)+', le point Ω₁'+P3(O1)+', les points A'+P3(A)+' et B'+P3(B)+', la translation t de vecteur →u et l’homothétie h₁ de centre Ω₁ et de rapport '+k1+'.';
    var p1=[K('Calcule les coordonnées de A′ = t(A) et de A″ = h₁(A).',
      'A′ = t(A) est défini par →AA′ = →u, donc A′ '+P3(tA)+' avec '+[0,1,2].map(function(i){ return cm[i]+' = '+par(A[i],0)+' + '+par(u[i],0)+' = '+fmt(tA[i],0); }).join(' ; ')+'. A″ = h₁(A) est défini par →Ω₁A″ = '+k1+' →Ω₁A, donc '+[0,1,2].map(function(i){ return cm[i]+'_A″ = '+par(O1[i],0)+' + '+par(k1,0)+' × ('+par(A[i],0)+' '+MN+' '+par(O1[i],0)+') = '+fmt(hA[i],0); }).join(' ; ')+'. Donc A″'+P3(hA)+'.',
      ['Identifier la définition vectorielle d’une translation et d’une homothétie.','Identifier les coordonnées de →Ω₁A.'],
      ['Écrire →AA′ = →u puis x′ = x + u₁, etc.','Écrire →Ω₁A″ = k →Ω₁A coordonnée par coordonnée.'],
      ['Calculer les coordonnées de A′.','Calculer les coordonnées de A″.','Écrire A′ et A″.']),
     K('Calcule les coordonnées de B″ = h₁(B), puis vérifie que →A″B″ = '+k1+' →AB.',
      'On a B″ '+P3(hB)+' (même calcul que pour A″). Alors →A″B″ '+P3([0,1,2].map(function(i){ return hB[i]-hA[i]; }))+' et →AB '+P3([0,1,2].map(function(i){ return B[i]-A[i]; }))+'. Pour chaque coordonnée : '+[0,1,2].map(function(i){ return par(k1,0)+' × '+par(B[i]-A[i],0)+' = '+fmt(k1*(B[i]-A[i]),0); }).join(' ; ')+', ce qui est égal à la coordonnée de →A″B″. Donc →A″B″ = '+k1+' →AB et A″B″ = '+Math.abs(k1)+' × AB.',
      ['Identifier qu’une homothétie multiplie les vecteurs par son rapport.','Identifier le lien entre rapport et longueurs.'],
      ['Calculer →A″B″ et →AB.','Comparer coordonnée par coordonnée.'],
      ['Calculer B″.','Calculer →A″B″ et k × →AB.','Conclure sur les longueurs.'])];
    var i2=(x.standalone2?'On considère toujours l’homothétie h₁ de centre Ω₁'+P3(O1)+' et de rapport '+k1+'. ':'')+'On considère aussi l’homothétie h₂ de centre Ω₂'+P3(O2)+' et de rapport '+k2+', et la transformation s = h₂ ∘ h₁.';
    var p2=[K('Détermine la nature et le rapport de la transformation s = h₂ ∘ h₁.',
      'Pour tout point M, h₁(M) = M₁ avec →Ω₁M₁ = '+k1+' →Ω₁M, puis s(M) = h₂(M₁) avec →Ω₂s(M) = '+k2+' →Ω₂M₁. En exprimant les vecteurs, →OM′ = ('+k2+' × '+par(k1,0)+') →OM + →c pour un vecteur constant →c (O désigne l’origine du repère). Le rapport est donc '+k2+' × '+par(k1,0)+' = '+kk+', différent de 1 : s est une homothétie de rapport '+kk+'.',
      ['Identifier que la composée de deux homothéties est une homothétie ou une translation.','Identifier que les rapports se multiplient.'],
      ['Écrire la composée de deux transformations vectorielles.','Calculer le produit des rapports.'],
      ['Calculer k₁ × k₂ = '+kk+'.','Comparer avec 1.','Conclure : homothétie de rapport '+kk+'.']),
     K('Détermine les coordonnées du centre Ω₃ de s.',
      'Le centre Ω₃ est le point invariant de s : h₂(h₁(Ω₃)) = Ω₃. Pour tout X, h₁(X) = (1 '+MN+' '+par(k1,0)+')Ω₁ + '+par(k1,0)+' X et h₂(Y) = (1 '+MN+' '+par(k2,0)+')Ω₂ + '+par(k2,0)+' Y. On obtient s(X) = '+kk+' X + '+k2+'(1 '+MN+' '+par(k1,0)+')Ω₁ + (1 '+MN+' '+k2+')Ω₂. Le point invariant vérifie Ω₃ = ['+k2+'(1 '+MN+' '+par(k1,0)+')Ω₁ + (1 '+MN+' '+k2+')Ω₂] ÷ (1 '+MN+' '+par(kk,0)+'). Coordonnée par coordonnée : '+[0,1,2].map(function(i){ return cm[i]+' = ('+k2+' × '+par(1-k1,0)+' × '+par(O1[i],0)+' + '+par(1-k2,0)+' × '+par(O2[i],0)+') ÷ '+fmt(1-kk,0)+' = '+fmt(k2*(1-k1)*O1[i]+(1-k2)*O2[i],0)+' ÷ '+fmt(1-kk,0)+' = '+fmt(O3[i],0); }).join(' ; ')+'. Donc Ω₃'+P3(O3)+'.',
      ['Identifier que le centre d’une homothétie est son unique point invariant.','Identifier l’écriture de h₁ et h₂ avec leurs centres.'],
      ['Écrire s(X) = k X + c.','Résoudre s(X) = X.'],
      ['Écrire la formule de s.','Calculer chaque coordonnée de Ω₃.','Conclure : Ω₃'+P3(O3)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{k1:k1,k2:k2,u:u,O1:O1,O2:O2,O3:O3,A:A,B:B}}; }

  /* ================= Réflexions et compositions dans l'espace ================= */
  var NORM=[{n:[1,2,2],N:3},{n:[2,3,6],N:7},{n:[2,6,9],N:11},{n:[4,4,7],N:9},{n:[1,4,8],N:9}];
  function gRF(x){
    var r=x.rnd, nm=pick(r,NORM), n=nm.n, N2=nm.N*nm.N, Hp=[ri(r,-2,2),ri(r,-2,2),ri(r,-2,2)], d1=-dot(n,Hp), lam=pick(r,[-2,-1,1,2]), M=[Hp[0]+lam*n[0],Hp[1]+lam*n[1],Hp[2]+lam*n[2]], Mp=[Hp[0]-lam*n[0],Hp[1]-lam*n[1],Hp[2]-lam*n[2]];
    var plane=function(d){ return tm(n[0],'x',true)+tm(n[1],'y',false)+tm(n[2],'z',false)+(d===0?'':(d<0?' '+MN+' '+(-d):' + '+d))+' = 0'; };
    var val=dot(n,M)+d1, cm=['x','y','z'], dist=Math.abs(lam)*nm.N;
    var mm=pick(r,[-1,1]); if(lam+mm===0) mm=-mm; var d2=d1-mm*N2, M1=Mp, t2=(dot(n,M1)+d2)/N2, M2=[M1[0]-2*t2*n[0],M1[1]-2*t2*n[1],M1[2]-2*t2*n[2]], v=[M2[0]-M[0],M2[1]-M[1],M2[2]-M[2]], vexp=[2*mm*n[0],2*mm*n[1],2*mm*n[2]];
    var intro='Dans l’espace muni d’un repère orthonormé, on considère le plan (P₁) d’équation '+plane(d1)+' et le point M'+P3(M)+'. On note s₁ la réflexion (symétrie orthogonale) par rapport au plan (P₁).';
    var p1=[K('Détermine le projeté orthogonal H de M sur (P₁), puis l’image M′ = s₁(M).',
      'Le vecteur →n'+P3(n)+' est normal à (P₁). H est le point tel que →MH = t →n avec H ∈ (P₁). On a '+n[0]+' × '+par(M[0],0)+' + '+n[1]+' × '+par(M[1],0)+' + '+n[2]+' × '+par(M[2],0)+' + '+par(d1,0)+' = '+fmt(val,0)+' et '+n[0]+'² + '+n[1]+'² + '+n[2]+'² = '+N2+', donc t = '+MN+par(val,0)+' ÷ '+N2+' = '+fmt(-lam,0)+'. Alors H = M + t →n a pour coordonnées '+[0,1,2].map(function(i){ return cm[i]+'_H = '+par(M[i],0)+' + '+par(-lam,0)+' × '+par(n[i],0)+' = '+fmt(Hp[i],0); }).join(' ; ')+'. Donc H'+P3(Hp)+'. Par définition de la réflexion, H est le milieu de [MM′] : M′ = 2H '+MN+' M, soit '+[0,1,2].map(function(i){ return cm[i]+'_M′ = 2 × '+par(Hp[i],0)+' '+MN+' '+par(M[i],0)+' = '+fmt(Mp[i],0); }).join(' ; ')+'. Donc M′'+P3(Mp)+'.',
      ['Identifier que →MH est colinéaire au vecteur normal.','Identifier que H est le milieu de [MM′].'],
      ['Écrire H = M + t →n avec H dans le plan.','Calculer t puis M′ = 2H − M.'],
      ['Calculer t = '+fmt(-lam,0)+'.','Calculer les coordonnées de H.','Calculer les coordonnées de M′.']),
     K('Calcule la distance MM′ et justifie que s₁ conserve les distances en vérifiant que (P₁) est bien le plan médiateur de [MM′].',
      '→MM′ '+P3([0,1,2].map(function(i){ return Mp[i]-M[i]; }))+', donc MM′ = '+fmt(2*Math.abs(lam),0)+' × ‖→n‖ avec ‖→n‖ = √'+N2+' = '+nm.N+', soit MM′ = '+fmt(dist*2,0)+'. Le milieu de [MM′] est H, qui appartient à (P₁), et →MM′ est colinéaire à →n, donc orthogonal à (P₁) : (P₁) est le plan médiateur de [MM′]. La réflexion est ainsi l’isométrie qui échange M et M′ et laisse les points de (P₁) invariants.',
      ['Identifier qu’une réflexion est une isométrie.','Identifier la définition du plan médiateur.'],
      ['Calculer les coordonnées de →MM′ et sa norme.','Vérifier milieu et orthogonalité.'],
      ['Calculer →MM′.','Calculer MM′ = '+fmt(dist*2,0)+'.','Conclure sur le plan médiateur.'])];
    var i2=(x.standalone2?'On rappelle que (P₁) a pour équation '+plane(d1)+' et que M′'+P3(Mp)+' est l’image de M par s₁. ':'')+'On considère aussi le plan (P₂) d’équation '+plane(d2)+', parallèle à (P₁), et la réflexion s₂ par rapport à (P₂).';
    var p2=[K('Calcule l’image M″ = s₂(M′) du point M′.',
      'Pour (P₂) : '+n[0]+' × '+par(M1[0],0)+' + '+n[1]+' × '+par(M1[1],0)+' + '+n[2]+' × '+par(M1[2],0)+' + '+par(d2,0)+' = '+fmt(dot(n,M1)+d2,0)+', et '+n[0]+'² + '+n[1]+'² + '+n[2]+'² = '+N2+'. Le projeté de M′ sur (P₂) est M′ '+MN+' t →n avec t = '+fmt(dot(n,M1)+d2,0)+' ÷ '+N2+' = '+fmt(t2,0)+', et M″ = M′ '+MN+' 2t →n. Coordonnées : '+[0,1,2].map(function(i){ return cm[i]+'_M″ = '+par(M1[i],0)+' '+MN+' 2 × '+par(t2,0)+' × '+par(n[i],0)+' = '+fmt(M2[i],0); }).join(' ; ')+'. Donc M″'+P3(M2)+'.',
      ['Identifier la méthode : projection puis symétrie.','Identifier le vecteur normal commun aux deux plans.'],
      ['Calculer n ⋅ M′ + d₂ et ‖n‖².','Calculer M″ = M′ − 2t →n.'],
      ['Calculer t = '+fmt(t2,0)+'.','Calculer les coordonnées de M″.','Écrire M″'+P3(M2)+'.']),
     K('Montre que s₂ ∘ s₁ est une translation dont tu préciseras le vecteur, puis vérifie-le sur le point M.',
      'Pour tout point X, s₁(X) = X '+MN+' 2 (→n ⋅ X + '+par(d1,0)+') ÷ '+N2+' →n. En composant avec s₂, les termes en →n ⋅ X s’annulent et il reste s₂(s₁(X)) = X + 2('+fmt(d1,0)+' '+MN+' '+par(d2,0)+') ÷ '+N2+' →n = X + 2 × '+par(mm,0)+' →n, car '+fmt(d1,0)+' '+MN+' '+par(d2,0)+' = '+fmt(d1-d2,0)+' = '+par(mm,0)+' × '+N2+'. C’est la translation de vecteur '+fmt(2*mm,0)+' →n '+P3(vexp)+'. Vérification sur M : →MM″ '+P3(v)+', ce qui est bien égal à '+fmt(2*mm,0)+' →n.',
      ['Identifier la formule de la réflexion par rapport à un plan.','Identifier que la composée de deux réflexions de plans parallèles est une translation.'],
      ['Écrire s₂ ∘ s₁ avec les deux formules.','Simplifier pour obtenir X + →v.'],
      ['Calculer d₁ − d₂ = '+fmt(d1-d2,0)+'.','Écrire le vecteur de translation.','Vérifier avec les coordonnées de M et M″.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{n:n,N2:N2,H:Hp,M:M,Mp:Mp,d1:d1,d2:d2,M2:M2,mm:mm}}; }

  /* ================= Applications affines et affinités ================= */
  var UNI=[[1,1,0,1],[2,1,1,1],[1,2,1,3],[3,1,2,1],[1,1,1,2],[2,3,1,2],[1,0,2,1]];
  function gAF(x){
    var r=x.rnd, mt=pick(r,UNI), a=mt[0], b=mt[1], c=mt[2], d=mt[3], e=ri(r,-3,3), g=ri(r,-3,3), det=a*d-b*c, P=[ri(r,-3,3),ri(r,-3,3)], Q=[a*P[0]+b*P[1]+e,c*P[0]+d*P[1]+g];
    var X=ri(r,-4,4), Y=ri(r,-4,4), inv=[d*(X-e)-b*(Y-g),-c*(X-e)+a*(Y-g)];
    var kk=pick(r,[2,3,-2]), rr=pick(r,[2,3,4,5]), B=[ri(r,-3,3),ri(r,-3,3)], Bp=[B[0],kk*B[1]];
    var fx=tm(a,'x',true)+tm(b,'y',false)+(e===0?'':(e<0?' '+MN+' '+(-e):' + '+e)), fy=tm(c,'x',true)+tm(d,'y',false)+(g===0?'':(g<0?' '+MN+' '+(-g):' + '+g));
    var intro='Dans le plan muni d’un repère orthonormé, on considère l’application affine f qui, au point M(x ; y), associe le point M′(x′ ; y′) défini par x′ = '+fx+' et y′ = '+fy+'.';
    var p1=[K('Calcule le déterminant de la partie linéaire de f et justifie que f est bijective. Détermine l’image du point P('+fmt(P[0],0)+' ; '+fmt(P[1],0)+').',
      'La partie linéaire de f a pour matrice ('+a+' '+b+' ; '+c+' '+d+'). Son déterminant est '+a+' × '+d+' '+MN+' '+b+' × '+c+' = '+fmt(a*d,0)+' '+MN+' '+fmt(b*c,0)+' = '+fmt(det,0)+'. Ce déterminant est non nul : f est bijective. L’image de P est le point P′ de coordonnées x′ = '+a+' × '+par(P[0],0)+' + '+b+' × '+par(P[1],0)+' + '+par(e,0)+' = '+fmt(Q[0],0)+' et y′ = '+c+' × '+par(P[0],0)+' + '+d+' × '+par(P[1],0)+' + '+par(g,0)+' = '+fmt(Q[1],0)+'. Donc P′('+fmt(Q[0],0)+' ; '+fmt(Q[1],0)+').',
      ['Identifier qu’une application affine est bijective si le déterminant de sa partie linéaire est non nul.','Identifier la formule du déterminant.'],
      ['Calculer ad − bc.','Remplacer les coordonnées de P dans les formules.'],
      ['Calculer le déterminant : '+fmt(det,0)+'.','Calculer x′ puis y′ pour P.','Écrire P′.']),
     K('Détermine l’expression analytique de la bijection réciproque f⁻¹, puis l’antécédent du point A′('+fmt(X,0)+' ; '+fmt(Y,0)+').',
      'On résout le système x′ = '+fx+', y′ = '+fy+' d’inconnues x et y. Comme le déterminant vaut '+fmt(det,0)+', on obtient x = '+par(d,0)+'(x′ '+MN+' '+par(e,0)+') '+MN+' '+par(b,0)+'(y′ '+MN+' '+par(g,0)+') et y = '+MN+par(c,0)+'(x′ '+MN+' '+par(e,0)+') + '+par(a,0)+'(y′ '+MN+' '+par(g,0)+'). Pour A′('+fmt(X,0)+' ; '+fmt(Y,0)+') : x = '+par(d,0)+' × ('+fmt(X-e,0)+') '+MN+' '+par(b,0)+' × ('+fmt(Y-g,0)+') = '+fmt(inv[0],0)+' et y = '+MN+par(c,0)+' × ('+fmt(X-e,0)+') + '+par(a,0)+' × ('+fmt(Y-g,0)+') = '+fmt(inv[1],0)+'. L’antécédent de A′ est donc le point ('+fmt(inv[0],0)+' ; '+fmt(inv[1],0)+').',
      ['Identifier qu’on résout un système linéaire pour inverser f.','Identifier l’utilisation de la matrice inverse (déterminant égal à 1 ou −1 ici).'],
      ['Résoudre le système en x et y.','Remplacer par les coordonnées de A′.'],
      ['Écrire les formules de f⁻¹.','Calculer x pour A′.','Calculer y pour A′.'])];
    var i2=(x.standalone2?'On rappelle que le plan est muni d’un repère orthonormé. ':'')+'Le comité considère aussi l’affinité orthogonale s d’axe (Ox) et de rapport '+kk+', qui au point M(x ; y) associe le point M′(x ; '+kk+'y), ainsi que le cercle (C) d’équation x² + y² = '+(rr*rr)+'.';
    var p2=[K('Détermine l’image du point B('+fmt(B[0],0)+' ; '+fmt(B[1],0)+') par s, puis l’image du cercle (C).',
      'L’image de B est B′('+fmt(B[0],0)+' ; '+kk+' × '+par(B[1],0)+') = B′('+fmt(Bp[0],0)+' ; '+fmt(Bp[1],0)+'). Soit M′(X ; Y) l’image de M(x ; y) ∈ (C) : X = x et Y = '+kk+'y, donc x = X et y = Y ÷ '+par(kk,0)+'. Le point M(x ; y) appartient à (C) : on remplace x et y dans l’équation du cercle x² + y² = '+(rr*rr)+'. On obtient X² + Y² ÷ '+(kk*kk)+' = '+(rr*rr)+'. Après division par '+(rr*rr)+', cette équation s’écrit X² ÷ '+(rr*rr)+' + Y² ÷ '+(kk*kk*rr*rr)+' = 1. L’image de (C) est l’ellipse d’équation x² ÷ '+(rr*rr)+' + y² ÷ '+(kk*kk*rr*rr)+' = 1, de demi-axes '+rr+' et '+(Math.abs(kk)*rr)+'.',
      ['Identifier la définition d’une affinité orthogonale.','Identifier que l’image d’un cercle par une affinité est une ellipse.'],
      ['Écrire les formules inverses x = X, y = Y ÷ k.','Substituer dans l’équation du cercle.'],
      ['Calculer l’image de B : B′('+fmt(Bp[0],0)+' ; '+fmt(Bp[1],0)+').','Substituer dans l’équation.','Écrire l’équation de l’ellipse.']),
     K('Calcule l’aire du disque limité par (C), puis celle de l’ellipse image, et compare-les.',
      'L’aire du disque de rayon '+rr+' est π × '+rr+'² = '+(rr*rr)+'π. L’aire d’une ellipse de demi-axes a et b est πab ; ici a = '+rr+' et b = '+(Math.abs(kk)*rr)+', donc l’aire de l’ellipse est π × '+rr+' × '+(Math.abs(kk)*rr)+' = '+(Math.abs(kk)*rr*rr)+'π. Le rapport des aires est '+(Math.abs(kk)*rr*rr)+' ÷ '+(rr*rr)+' = '+Math.abs(kk)+', c’est-à-dire la valeur absolue du rapport de l’affinité.',
      ['Identifier la formule de l’aire d’un disque et d’une ellipse.','Identifier que l’affinité multiplie les aires par |k|.'],
      ['Écrire les deux aires en fonction de π.','Calculer leur rapport.'],
      ['Calculer l’aire du disque : '+(rr*rr)+'π.','Calculer l’aire de l’ellipse : '+(Math.abs(kk)*rr*rr)+'π.','Calculer le rapport : '+Math.abs(kk)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,c:c,d:d,e:e,g:g,det:det,P:P,Q:Q,X:X,Y:Y,inv:inv,kk:kk,rr:rr,B:B,Bp:Bp}}; }

  var DEFS8=[
    {id:'SY',label:'Systèmes linéaires (pivot de Gauss)',w1:1,build:gSY,D:["TleD — Systèmes d'équations linéaires (pivot de Gauss)"],C:["TleC — Systèmes d'équations linéaires (pivot de Gauss)"]},
    {id:'BC',label:'Barycentre et fonction de Leibniz',w1:1,build:gBC,D:["TleD — Vecteurs de l'espace & barycentre"],C:['TleC — Barycentre de n points, fonctions de Leibniz & lignes de niveau']},
    {id:'EXA',label:'Exponentielles de base a et puissances',w1:2,build:gEXA,D:['TleD — Exponentielles de base a & fonctions puissances'],C:['TleC — Exponentielles de base a & fonctions puissances']},
    {id:'TH',label:'Translations et homothéties de l’espace',w1:1,build:gTH,C:["TleC — Translations & homothéties de l'espace"]},
    {id:'RF',label:'Réflexions et compositions dans l’espace',w1:1,build:gRF,C:['TleC — Réflexions, demi-tours & compositions dans l\'espace']},
    {id:'AF',label:'Applications affines et affinités',w1:2,build:gAF,C:['TleC — Applications affines & affinités']}
  ];
  DEFS8.forEach(M.regT);
})(typeof globalThis!=='undefined'?globalThis:this);
