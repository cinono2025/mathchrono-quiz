/* ===== MQ_SOM : modules de problèmes sommatifs — Terminale D et Terminale C (1re partie) ===== */
(function(G){
  'use strict';
  var M=G.MQ_SOM_MOD, MOD=M.MOD, fmt=M.fmt, ri=M.ri, pick=M.pick, gcd=M.gcd, H=M.helpers14, par=H.par, eqSym=H.eqSym;
  var MN='\u2212';
  function fixMinus(t){ return String(t).replace(/([\s(\[{;,]|^)-(?=\d)/g,'$1\u2212'); }
  function K(t,s,A,Mm,O){ return M.K(fixMinus(t),fixMinus(s),A.map(fixMinus),Mm.map(fixMinus),O.map(fixMinus)); }
  function safe(v,d){ var q=v*Math.pow(10,d); return Math.abs(q-Math.floor(q)-0.5)>0.06; }
  function r2(v){ return Math.round(v*100)/100; }
  function cS(re,im){ if(im===0) return fmt(re,0); var ib=(Math.abs(im)===1?'':fmt(Math.abs(im),0))+'i'; if(re===0) return (im<0?MN:'')+ib; return fmt(re,0)+(im<0?' '+MN+' ':' + ')+ib; }
  function sg(v){ return v<0?MN:''; }
  function sq(N){ var k=1; for(var i=2;i*i<=N;i++) if(N%(i*i)===0) k=i; var m=N/(k*k); return k===1?'√'+N:(m===1?String(k):k+'√'+m); }

  /* ================= Nombres complexes : forme algébrique ================= */
  function gCX1(x){
    var r=x.rnd, c,d,p,q,it; for(it=0;it<300;it++){ c=ri(r,-3,3); d=ri(r,-3,3); p=ri(r,-3,3); q=ri(r,-3,3); if(c===0||d===0||q===0) continue; if(c*p-d*q===0||c*q+d*p===0) continue; break; }
    var a=c*p-d*q, b=c*q+d*p, N2=c*c+d*d, N1=a*a+b*b, Nw=p*p+q*q, m=ri(r,1,3), k=1+m*m;
    var X=a*c-b*d, Y=a*d+b*c, X1=a*c+b*d, Y1=b*c-a*d;
    var intro='On considère les nombres complexes z₁ = '+cS(a,b)+' et z₂ = '+cS(c,d)+'.';
    var p1=[K('Écris sous forme algébrique z₁ + z₂ et z₁ × z₂.',
      'z₁ + z₂ = ('+fmt(a,0)+' + '+par(c,0)+') + ('+fmt(b,0)+' + '+par(d,0)+')i = '+cS(a+c,b+d)+'. Pour le produit : z₁ × z₂ = (a + bi)(c + di) = (ac '+MN+' bd) + (ad + bc)i car i² = '+MN+'1. Partie réelle : '+par(a,0)+' × '+par(c,0)+' '+MN+' '+par(b,0)+' × '+par(d,0)+' = '+fmt(X,0)+'. Partie imaginaire : '+par(a,0)+' × '+par(d,0)+' + '+par(b,0)+' × '+par(c,0)+' = '+fmt(Y,0)+'. Donc z₁ × z₂ = '+cS(X,Y)+'.',
      ['Identifier la forme algébrique de chaque nombre.','Identifier la règle i² = −1 pour le produit.'],
      ['Écrire la somme partie réelle + partie imaginaire.','Développer le produit (a + bi)(c + di).'],
      ['Calculer la somme : '+cS(a+c,b+d)+'.','Calculer la partie réelle du produit : '+fmt(X,0)+'.','Calculer la partie imaginaire du produit : '+fmt(Y,0)+'.']),
     K('Écris sous forme algébrique le quotient z₁ ÷ z₂.',
      'On multiplie le numérateur et le dénominateur par le conjugué de z₂ : z̄₂ = '+cS(c,-d)+'. Alors |z₂|² = '+par(c,0)+'² + '+par(d,0)+'² = '+N2+'. Le produit z₁ × z̄₂ a pour partie réelle '+par(a,0)+' × '+par(c,0)+' + '+par(b,0)+' × '+par(d,0)+' = '+fmt(X1,0)+' et pour partie imaginaire '+par(b,0)+' × '+par(c,0)+' '+MN+' '+par(a,0)+' × '+par(d,0)+' = '+fmt(Y1,0)+'. Donc z₁ ÷ z₂ = ('+cS(X1,Y1)+') ÷ '+N2+' = '+fmt(X1,0)+' ÷ '+N2+' + ('+fmt(Y1,0)+' ÷ '+N2+')i = '+cS(p,q)+'.',
      ['Identifier la méthode : multiplier par le conjugué du dénominateur.','Identifier que z z̄ = |z|² est un réel.'],
      ['Écrire z₁ ÷ z₂ = z₁ z̄₂ ÷ |z₂|².','Calculer le conjugué de z₂ et |z₂|².'],
      ['Calculer |z₂|² = '+N2+'.','Calculer z₁ z̄₂ : '+cS(X1,Y1)+'.','Diviser par '+N2+' : '+cS(p,q)+'.'])];
    var i2=x.standalone2?'On rappelle que z₁ = '+cS(a,b)+' et z₂ = '+cS(c,d)+'.':'';
    var p2=[K('Calcule les modules |z₁| et |z₂| (valeurs exactes).',
      '|z₁| = √(a² + b²) = √('+par(a,0)+'² + '+par(b,0)+'²) avec '+par(a,0)+'² + '+par(b,0)+'² = '+N1+', donc |z₁| = √'+N1+(sq(N1)!=='√'+N1?' = '+sq(N1):'')+'. De même |z₂| = √('+par(c,0)+'² + '+par(d,0)+'²) avec '+par(c,0)+'² + '+par(d,0)+'² = '+N2+', donc |z₂| = √'+N2+(sq(N2)!=='√'+N2?' = '+sq(N2):'')+'. Vérification : |z₁|² = |z₂|² × |z₁ ÷ z₂|², soit '+N2+' × '+Nw+' = '+N1+'.',
      ['Identifier la formule du module d’un nombre complexe.','Identifier que le module d’un quotient est le quotient des modules.'],
      ['Écrire |z| = √(a² + b²).'],
      ['Calculer a² + b² pour z₁ : '+N1+'.','Calculer c² + d² pour z₂ : '+N2+'.','Vérifier la relation sur les modules.']),
     K('Résous dans ℂ l’équation z² + 2z + '+k+' = 0.',
      'Δ = 2² '+MN+' 4 × 1 × '+k+' = 4 '+MN+' '+(4*k)+' = '+fmt(4-4*k,0)+' < 0. Comme '+fmt(4-4*k,0)+' = ('+(2*m)+'i)², les deux solutions sont complexes conjuguées : z₁ = ('+MN+'2 + '+(2*m)+'i) ÷ 2 = '+MN+'1 + '+(m===1?'':m)+'i et z₂ = '+MN+'1 '+MN+' '+(m===1?'':m)+'i. S = {'+MN+'1 + '+(m===1?'':m)+'i ; '+MN+'1 '+MN+' '+(m===1?'':m)+'i}.',
      ['Identifier une équation du second degré à coefficients réels.','Identifier que Δ < 0 donne deux solutions complexes conjuguées.'],
      ['Écrire Δ = b² − 4ac.','Écrire Δ sous la forme (ki)².'],
      ['Calculer Δ = '+fmt(4-4*k,0)+'.','Écrire les deux racines.','Conclure avec l’ensemble des solutions.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,c:c,d:d,p:p,q:q,m:m,k:k}}; }

  /* ================= Nombres complexes : forme trigonométrique et exponentielle ================= */
  var CR={2:[1,3],3:[1,2],4:[1,1],6:[0,1],8:[-1,1],9:[-1,2],10:[-1,3]}, SR={2:[1,1],3:[1,2],4:[1,3],6:[2,1],8:[1,3],9:[1,2],10:[1,1]};
  function radT(co,rad){ if(co===0) return '0'; var a=Math.abs(co), s=co<0?MN:''; return rad===1?s+a:s+(a===1?'':a)+'√'+rad; }
  function imT(co,rad){ var a=Math.abs(co), s=co<0?MN:''; return rad===1?s+(a===1?'':a)+'i':s+(a===1?'':a)+'i√'+rad; }
  function expI(th){ return th.charAt(0)==='\u2212'?'\u2212i'+th.slice(1):'i'+th; }
  function angS(k){ if(k===0) return '0'; var s=k<0?MN:'', a=Math.abs(k), g=gcd(a,12), n=a/g, d=12/g; return s+(n===1?'':n)+'π'+(d===1?'':'/'+d); }
  function zStr(re,rr,im,ir){ // re, im : coefficients ; rr, ir : radicands
    var A=radT(re,rr), B=imT(im,ir); if(re===0) return B; return A+(im<0?' '+MN+' ':' + ')+B.replace(/^\u2212/,''); }
  function expKin(k,n){ var kk=((k*n)%24+24)%24; return kk; }
  function gCX2(x){
    var r=x.rnd, ks=[2,3,4,6,8,9,10], k0=pick(r,ks), sgn=pick(r,[1,-1]), k=sgn*k0, rho=(k0===6)?pick(r,[1,2,3,4]):pick(r,[2,4]), half=rho/2;
    var cr=CR[k0], sr=SR[k0], reCo=(k0===6)?0:half*cr[0], imCo=(k0===6)?rho*sgn:half*sr[0]*sgn, reRad=(k0===6)?1:cr[1], imRad=(k0===6)?1:sr[1];
    var zs=(k0===6)?imT(imCo,1):zStr(reCo,reRad,imCo,imRad), th=angS(k);
    var n=2; while((n*k)%6!==0||n>8) n++;
    var kn=((n*k)%24+24)%24, val=[[1,0],[0,1],[-1,0],[0,-1]][kn/6]; var mod=Math.pow(rho,n), alg=cS(val[0]*mod,val[1]*mod);
    var cc=pick(r,[1,2,3]), c3=cc*cc*cc;
    var intro='On considère le nombre complexe z = '+zs+'.';
    var modTxt=(k0===6)?'|z| = '+rho:'|z|² = ('+radT(reCo,reRad)+')² + ('+radT(Math.abs(imCo),imRad)+')² = '+(reCo*reCo*reRad)+' + '+(imCo*imCo*imRad)+' = '+(rho*rho)+', donc |z| = '+rho;
    var p1=[K('Calcule le module de z.',
      modTxt+'.',
      ['Identifier la partie réelle et la partie imaginaire de z.','Identifier la formule du module.'],
      ['Écrire |z|² = (partie réelle)² + (partie imaginaire)².'],
      ['Calculer le carré de chaque partie.','Additionner et extraire la racine carrée.','Conclure : |z| = '+rho+'.']),
     K('Détermine un argument de z, puis écris z sous forme trigonométrique et sous forme exponentielle.',
      'On a |z| = '+rho+'. En divisant par le module : cos θ = '+(k0===6?'0':radT(reCo,reRad)+' ÷ '+rho)+' et sin θ = '+radT(imCo,imRad)+' ÷ '+rho+'. Ces valeurs correspondent à θ = '+th+'. Donc z = '+rho+'(cos('+th+') + i sin('+th+')) = '+rho+'e^('+expI(th)+').',
      ['Identifier la méthode : diviser z par son module.','Identifier les valeurs usuelles du cosinus et du sinus.'],
      ['Écrire z = |z|(cos θ + i sin θ).','Déterminer θ à partir de cos θ et sin θ.'],
      ['Calculer cos θ et sin θ.','Reconnaître l’angle : '+th+'.','Écrire la forme trigonométrique puis exponentielle.'])];
    var i2=x.standalone2?'On rappelle que z = '+zs+', de module '+rho+' et d’argument '+th+'.':'';
    var cr2=function(kv){ return kv===0?'':''; };
    var p2=[K('Calcule z^'+n+' sous forme exponentielle, puis sous forme algébrique.',
      'D’après la formule de Moivre, z^'+n+' = '+rho+'^'+n+' × e^(i × '+n+' × '+(th.charAt(0)==='\u2212'?'('+th+')':th)+') = '+mod+' e^('+expI(angS(((k*n+11)%24+24)%24-11))+'). '+'Or '+angS(((k*n+11)%24+24)%24-11)+' correspond à un point de l’axe : cos = '+val[0]+' et sin = '+val[1]+', donc z^'+n+' = '+mod+' × ('+val[0]+' + '+val[1]+'i) = '+alg+'.',
      ['Identifier la formule de Moivre : (re^(iθ))ⁿ = rⁿ e^(inθ).','Identifier qu’on cherche l’angle n × θ modulo 2π.'],
      ['Écrire z^n sous forme exponentielle.','Réduire l’angle n × θ.'],
      ['Calculer le module : '+rho+'^'+n+' = '+mod+'.','Calculer l’argument et le réduire.','Écrire la forme algébrique : '+alg+'.']),
     K('Résous dans ℂ l’équation z³ = '+c3+'.',
      'On écrit '+c3+' = '+cc+'³ e^(i0). Les solutions sont z = '+cc+' e^(2ikπ/3) pour k = 0, 1, 2 : z₀ = '+cc+' ; z₁ = '+cc+'(cos(2π/3) + i sin(2π/3)) = '+(cc%2===0?MN+(cc/2)+' + '+(cc/2===1?'':(cc/2))+'i√3':MN+cc+'/2 + '+(cc===1?'':cc)+'i√3/2')+' ; z₂ = '+(cc%2===0?MN+(cc/2)+' '+MN+' '+(cc/2===1?'':(cc/2))+'i√3':MN+cc+'/2 '+MN+' '+(cc===1?'':cc)+'i√3/2')+'.',
      ['Identifier une équation de la forme zⁿ = a.','Identifier la méthode : forme exponentielle et racines n-ièmes.'],
      ['Écrire le second membre sous forme exponentielle.','Écrire les solutions z_k = r^(1/n) e^(i(θ + 2kπ)/n).'],
      ['Déterminer le module des solutions : '+cc+'.','Déterminer leurs arguments : 0, 2π/3 et −2π/3.','Écrire les trois solutions sous forme algébrique.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{k:k,rho:rho,n:n,cc:cc,reCo:reCo,reRad:reRad,imCo:imCo,imRad:imRad,alg:alg}}; }

  /* ================= Nombres complexes et géométrie plane ================= */
  function gCX3(x){
    var r=x.rnd, a1=ri(r,-3,3), a2=ri(r,-3,3), u1,u2,it; for(it=0;it<200;it++){ u1=ri(r,-3,3); u2=ri(r,-3,3); if(u1===0&&u2===0) continue; if(u1===0||u2===0) continue; break; }
    var B=[a1+u1,a2+u2], C=[a1-u2,a2+u1], N=u1*u1+u2*u2, rr=ri(r,2,4);
    var zA=cS(a1,a2), zB=cS(B[0],B[1]), zC=cS(C[0],C[1]);
    var intro='Dans le plan complexe, on considère les points A, B et C d’affixes respectives z_A = '+zA+', z_B = '+zB+' et z_C = '+zC+'.';
    var p1=[K('Calcule les affixes des vecteurs →AB et →AC, puis les longueurs AB et AC.',
      'z_AB = z_B '+MN+' z_A = ('+zB+') '+MN+' ('+zA+') = '+cS(u1,u2)+' et z_AC = z_C '+MN+' z_A = ('+zC+') '+MN+' ('+zA+') = '+cS(-u2,u1)+'. Alors AB = |z_AB| = √('+par(u1,0)+'² + '+par(u2,0)+'²) avec '+par(u1,0)+'² + '+par(u2,0)+'² = '+N+', donc AB = √'+N+(sq(N)!=='√'+N?' = '+sq(N):'')+'. De même AC = √('+par(-u2,0)+'² + '+par(u1,0)+'²) avec '+par(-u2,0)+'² + '+par(u1,0)+'² = '+N+', donc AC = √'+N+(sq(N)!=='√'+N?' = '+sq(N):'')+'.',
      ['Identifier que l’affixe d’un vecteur est la différence des affixes.','Identifier que la longueur est le module de l’affixe du vecteur.'],
      ['Écrire z_AB = z_B − z_A et z_AC = z_C − z_A.','Écrire AB = |z_AB|.'],
      ['Calculer les affixes des deux vecteurs.','Calculer AB² = '+N+'.','Calculer AC² = '+N+'.']),
     K('Calcule le quotient (z_C '+MN+' z_A) ÷ (z_B '+MN+' z_A) et déduis-en la nature du triangle ABC.',
      '(z_C '+MN+' z_A) ÷ (z_B '+MN+' z_A) = ('+cS(-u2,u1)+') ÷ ('+cS(u1,u2)+'). En multipliant par le conjugué du dénominateur, la partie réelle du numérateur est '+par(-u2,0)+' × '+par(u1,0)+' + '+par(u1,0)+' × '+par(u2,0)+' = 0 et la partie imaginaire est '+par(u1,0)+' × '+par(u1,0)+' '+MN+' '+par(-u2,0)+' × '+par(u2,0)+' = '+N+'. Le dénominateur vaut '+par(u1,0)+'² + '+par(u2,0)+'² = '+N+'. Le quotient est donc '+N+'i ÷ '+N+' = i. Son module est 1 : AC = AB. Son argument est π/2 : (AB) ⊥ (AC). Le triangle ABC est rectangle isocèle en A.',
      ['Identifier que le quotient donne le rapport des longueurs et l’angle.','Identifier les caractérisations du triangle rectangle isocèle.'],
      ['Écrire le quotient de deux nombres complexes.','Interpréter son module et son argument.'],
      ['Calculer le quotient : i.','Interpréter le module : AC = AB.','Interpréter l’argument : angle droit en A.'])];
    var i2=x.standalone2?'Dans le plan complexe, A a pour affixe z_A = '+zA+', B a pour affixe z_B = '+zB+' et C a pour affixe z_C = '+zC+'.':'';
    var p2=[K('Détermine l’ensemble (E) des points M(z) du plan tels que |z '+MN+' z_A| = '+rr+'.',
      'Si M a pour affixe z, alors |z '+MN+' z_A| = AM. La condition s’écrit AM = '+rr+'. L’ensemble (E) est donc le cercle de centre A('+fmt(a1,0)+' ; '+fmt(a2,0)+') et de rayon '+rr+'.',
      ['Identifier le lien entre module d’une différence et distance.'],
      ['Traduire la condition en une distance AM.'],
      ['Reconnaître la définition d’un cercle.','Donner son centre A et son rayon '+rr+'.']),
     K('Soit ρ la rotation de centre A et d’angle π/2. Écris son expression complexe et détermine l’image de B.',
      'L’expression complexe de la rotation de centre A et d’angle π/2 est z′ '+MN+' z_A = i(z '+MN+' z_A). L’image de B a pour affixe z′ = i × ('+cS(u1,u2)+') + ('+zA+'). On calcule i × ('+cS(u1,u2)+') = '+cS(-u2,u1)+', donc z′ = '+cS(-u2,u1)+' + ('+zA+') = '+zC+'. L’image de B par ρ est le point C.',
      ['Identifier la formule de l’écriture complexe d’une rotation.','Identifier que e^(iπ/2) = i.'],
      ['Écrire z′ − z_A = e^(iθ)(z − z_A).','Remplacer z par z_B.'],
      ['Écrire l’expression complexe de ρ.','Calculer i × z_AB = '+cS(-u2,u1)+'.','Conclure : ρ(B) = C.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a1:a1,a2:a2,u1:u1,u2:u2,r:rr,B:B,C:C,N:N}}; }

  /* ================= Fonction logarithme népérien ================= */
  function gLN(x){
    var r=x.rnd, a=pick(r,[2,3,4]), fmin=a-a*Math.log(a), pp=ri(r,1,3), qq=ri(r,1,3), s=ri(r,pp+1,pp+4), kk=(s-pp)*(s+qq);
    if(!safe(fmin,2)) fmin=fmin; var Fs='x '+MN+' '+a+' ln x';
    var intro='Pour modéliser une quantité en fonction de x, le comité utilise la fonction f définie sur ]0 ; +∞[ par f(x) = '+Fs+'.';
    var p1=[K('Calcule les limites de f en 0 et en +∞.',
      'Quand x tend vers 0 par valeurs positives, ln x tend vers '+MN+'∞, donc '+MN+a+' ln x tend vers +∞ et x tend vers 0 : lim(x→0⁺) f(x) = +∞. En +∞ : f(x) = x(1 '+MN+' '+a+' × (ln x ÷ x)). Comme ln x ÷ x tend vers 0 (croissances comparées), le facteur entre parenthèses tend vers 1 et x tend vers +∞ : lim(x→+∞) f(x) = +∞.',
      ['Identifier la limite de ln x en 0⁺.','Identifier la limite de référence ln x ÷ x en +∞.'],
      ['Mettre x en facteur pour lever l’indétermination en +∞.'],
      ['Calculer la limite en 0⁺ : +∞.','Calculer la limite en +∞ : +∞.']),
     K('Calcule f′(x), étudie son signe et dresse le tableau de variations de f.',
      'f est dérivable sur ]0 ; +∞[ et f′(x) = 1 '+MN+' '+a+' ÷ x = (x '+MN+' '+a+') ÷ x. Comme x > 0, f′(x) est du signe de x '+MN+' '+a+' : f′(x) < 0 sur ]0 ; '+a+'[ et f′(x) > 0 sur ]'+a+' ; +∞[. Donc f est décroissante sur ]0 ; '+a+'] puis croissante sur ['+a+' ; +∞[. Son minimum est f('+a+') = '+a+' '+MN+' '+a+' ln '+a+' '+eqSym(fmin,2)+' '+fmt(r2(fmin),2)+'.',
      ['Identifier la dérivée de ln x : 1 ÷ x.','Identifier que le signe de f′ donne les variations de f.'],
      ['Mettre f′(x) sous la forme (x − a) ÷ x.','Dresser le tableau de signes puis de variations.'],
      ['Calculer f′(x).','Étudier son signe.','Calculer le minimum f('+a+') ≈ '+fmt(r2(fmin),2)+'.'])];
    var i2=x.standalone2?'On rappelle que f(x) = '+Fs+' sur ]0 ; +∞[.':'';
    var rt=2*s+qq-pp, D=rt*rt;
    var p2=[K('Détermine l’équation réduite de la tangente (T) à la courbe de f au point d’abscisse 1.',
      'f(1) = 1 '+MN+' '+a+' ln 1 = 1 car ln 1 = 0. f′(1) = 1 '+MN+' '+a+' ÷ 1 = '+fmt(1-a,0)+'. La tangente a pour équation y = f′(1)(x '+MN+' 1) + f(1) = '+par(1-a,0)+'(x '+MN+' 1) + 1, soit y = '+fmt(1-a,0)+'x + '+a+'.',
      ['Identifier la formule de l’équation de la tangente.','Identifier que ln 1 = 0.'],
      ['Calculer f(1) et f′(1).','Écrire y = f′(1)(x − 1) + f(1).'],
      ['Calculer f(1) = 1.','Calculer f′(1) = '+fmt(1-a,0)+'.','Développer pour conclure.']),
     K('Résous dans ]'+pp+' ; +∞[ l’équation ln(x '+MN+' '+pp+') + ln(x + '+qq+') = ln '+kk+'.',
      'L’équation a un sens pour x > '+pp+'. Elle équivaut à ln[(x '+MN+' '+pp+')(x + '+qq+')] = ln '+kk+', soit (x '+MN+' '+pp+')(x + '+qq+') = '+kk+', c’est-à-dire '+H.qStr(1,qq-pp,-(pp*qq+kk))+' = 0. Le discriminant est Δ = '+par(qq-pp,0)+'² + 4 × '+(pp*qq+kk)+' = '+D+', donc √Δ = '+rt+'. Les racines sont ('+MN+par(qq-pp,0)+' + '+rt+') ÷ 2 = '+s+' et ('+MN+par(qq-pp,0)+' '+MN+' '+rt+') ÷ 2 = '+fmt(pp-qq-s,0)+'. Seule '+s+' est supérieure à '+pp+'. S = {'+s+'}.',
      ['Identifier le domaine de définition de l’équation.','Identifier que ln u = ln v équivaut à u = v (u, v > 0).'],
      ['Regrouper les logarithmes en un seul.','Se ramener à une équation du second degré.'],
      ['Écrire l’équation du second degré.','Calculer Δ = '+D+' et les racines.','Écarter la racine hors du domaine.','Conclure : S = {'+s+'}.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,p:pp,q:qq,s:s,k:kk}}; }

  /* ================= Fonction exponentielle ================= */
  function gEX(x){
    var r=x.rnd, b=pick(r,[-2,-1,0,1,2,3]), x0=1-b, fmx=Math.exp(b-1), pq=pick(r,[[1,2],[1,3],[2,3],[1,4],[2,4],[1,5],[3,4],[2,5],[3,5],[2,6]]), p=pq[0], q=pq[1], S=p+q, P=p*q;
    var bs=(b===0?'x':(b<0?'(x '+MN+' '+(-b)+')':'(x + '+b+')')), Fs=bs+'e^(−x)';
    var intro='Le comité modélise l’évolution d’une grandeur par la fonction f définie sur ℝ par f(x) = '+Fs+'.';
    var p1=[K('Calcule les limites de f en +∞ et en '+MN+'∞.',
      'En +∞ : f(x) = x e^(−x) + '+par(b,0)+' e^(−x). Par croissances comparées, x e^(−x) tend vers 0, et e^(−x) tend vers 0, donc lim(x→+∞) f(x) = 0 (la droite y = 0 est asymptote). En '+MN+'∞ : x + '+par(b,0)+' tend vers '+MN+'∞ et e^(−x) tend vers +∞, donc lim(x→'+MN+'∞) f(x) = '+MN+'∞.',
      ['Identifier la limite de référence x e^(−x) en +∞.','Identifier la forme du produit en −∞.'],
      ['Développer f(x) pour faire apparaître x e^(−x).'],
      ['Calculer la limite en +∞ : 0.','Calculer la limite en −∞ : −∞.','Interpréter : asymptote y = 0.']),
     K('Calcule f′(x), dresse le tableau de variations de f et donne son maximum (valeur arrondie au centième).',
      'f est de la forme uv avec u(x) = x + '+par(b,0)+' et v(x) = e^(−x). f′(x) = u′v + uv′ = e^(−x) '+MN+' (x + '+par(b,0)+')e^(−x) = ('+fmt(1-b,0)+' '+MN+' x)e^(−x). Comme e^(−x) > 0, f′(x) est du signe de '+fmt(1-b,0)+' '+MN+' x : f′(x) > 0 pour x < '+fmt(x0,0)+' et f′(x) < 0 pour x > '+fmt(x0,0)+'. Donc f est croissante sur ]'+MN+'∞ ; '+fmt(x0,0)+'] puis décroissante sur ['+fmt(x0,0)+' ; +∞[. Son maximum est f('+fmt(x0,0)+') = ('+fmt(x0,0)+' + '+par(b,0)+')e^('+fmt(-x0,0)+') = e^('+fmt(b-1,0)+') '+eqSym(fmx,2)+' '+fmt(r2(fmx),2)+'.',
      ['Identifier la dérivée d’un produit et celle de e^(−x).','Identifier que e^(−x) > 0 pour tout x.'],
      ['Écrire f′ = u′v + uv′.','Étudier le signe de 1 − b − x.'],
      ['Calculer f′(x).','Dresser le tableau de signes puis de variations.','Calculer f('+fmt(x0,0)+') ≈ '+fmt(r2(fmx),2)+'.'])];
    var i2=x.standalone2?'On rappelle que f(x) = '+Fs+' sur ℝ.':'';
    var p2=[K('Détermine l’équation réduite de la tangente à la courbe de f au point d’abscisse 0.',
      'f(0) = '+par(b,0)+' × e⁰ = '+fmt(b,0)+'. f′(0) = ('+fmt(1-b,0)+' '+MN+' 0) × e⁰ = '+fmt(1-b,0)+'. La tangente a pour équation y = f′(0)x + f(0), soit y = '+fmt(1-b,0)+'x '+(b<0?MN+' '+(-b):'+ '+b)+'.',
      ['Identifier la formule de la tangente en 0.','Identifier que e⁰ = 1.'],
      ['Calculer f(0) et f′(0).'],
      ['Calculer f(0) = '+fmt(b,0)+'.','Calculer f′(0) = '+fmt(1-b,0)+'.','Écrire l’équation de la tangente.']),
     K('Résous dans ℝ l’équation e^(2x) '+MN+' '+S+'eˣ + '+P+' = 0.',
      'On pose X = eˣ avec X > 0. L’équation devient X² '+MN+' '+S+'X + '+P+' = 0. Son discriminant est Δ = '+S+'² '+MN+' 4 × '+P+' = '+(S*S)+' '+MN+' '+(4*P)+' = '+((q-p)*(q-p))+', donc √Δ = '+(q-p)+'. Les solutions sont X₁ = ('+S+' '+MN+' '+(q-p)+') ÷ 2 = '+p+' et X₂ = ('+S+' + '+(q-p)+') ÷ 2 = '+q+', toutes deux strictement positives. Donc eˣ = '+p+' ou eˣ = '+q+', c’est-à-dire x = '+(p===1?'0':'ln '+p)+' ou x = ln '+q+'. S = {'+(p===1?'0':'ln '+p)+' ; ln '+q+'}.',
      ['Identifier le changement de variable X = eˣ.','Identifier que X doit être strictement positif.'],
      ['Se ramener à une équation du second degré en X.','Résoudre puis revenir à x avec le logarithme.'],
      ['Calculer Δ = '+((q-p)*(q-p))+'.','Calculer X₁ = '+p+' et X₂ = '+q+'.','Revenir à x : ln.','Écrire S.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{b:b,x0:x0,p:p,q:q}}; }

  /* ================= Calcul intégral ================= */
  function gIN(x){
    var r=x.rnd, al=pick(r,[3,6]), be=pick(r,[-4,-2,0,2,4,6]), ga=ri(r,-3,5), lo=pick(r,[0,1]), hi=ri(r,2,4);
    var A3=al/3, B2=be/2, Hf=function(t){ return A3*t*t*t+B2*t*t+ga*t; }, I=Hf(hi)-Hf(lo);
    var hS=(al+'x²'+(be===0?'':(be<0?' '+MN+' '+(-be):' + '+be)+'x')+(ga===0?'':(ga<0?' '+MN+' '+(-ga):' + '+ga)));
    var Hs=(A3===1?'x³':A3+'x³')+(B2===0?'':(B2<0?' '+MN+' '+(-B2)+'x²':' + '+(B2===1?'':B2)+'x²'))+(ga===0?'':(ga<0?' '+MN+' '+(-ga)+'x':' + '+(ga===1?'':ga)+'x'));
    var pe,qe,Jv,jt=0; do{ pe=ri(r,1,3); qe=pick(r,[-2,-1,1,2,3]); Jv=qe*Math.E+(pe-qe); jt++; }while(!safe(Jv,2)&&jt<60); var cst=pe-qe;
    var s=pick(r,[3,6,9]), area=s*s*s/6, areaCm=4*area, mean=s*s/6;
    var intro='Le comité étudie la fonction h définie sur ℝ par h(x) = '+hS+'.';
    var evH=function(t){ var o=[]; if(A3) o.push(A3+' × '+par(t,0)+'³'); if(B2) o.push(par(B2,0)+' × '+par(t,0)+'²'); if(ga) o.push(par(ga,0)+' × '+par(t,0)); return o.length?o.join(' + '):'0'; };
    var p1=[K('Calcule l’intégrale I = ∫ de '+lo+' à '+hi+' de h(x) dx.',
      'Une primitive de h est H(x) = '+Hs+'. Alors I = H('+hi+') '+MN+' H('+lo+'). H('+hi+') = '+evH(hi)+' = '+fmt(Hf(hi),0)+' et H('+lo+') = '+evH(lo)+' = '+fmt(Hf(lo),0)+'. Donc I = '+fmt(Hf(hi),0)+' '+MN+' '+par(Hf(lo),0)+' = '+fmt(I,0)+'.',
      ['Identifier la formule ∫ de a à b de h = H(b) − H(a).','Identifier les primitives de x², x et des constantes.'],
      ['Déterminer une primitive H de h.','Écrire I = H(b) − H(a).'],
      ['Calculer une primitive H.','Calculer H('+hi+') et H('+lo+').','Soustraire : I = '+fmt(I,0)+'.']),
     K('À l’aide d’une intégration par parties, calcule J = ∫ de 0 à 1 de ('+pe+'x '+(qe<0?MN+' '+(-qe):'+ '+qe)+')eˣ dx (valeur exacte puis valeur arrondie au centième).',
      'On pose u(x) = '+pe+'x '+(qe<0?MN+' '+(-qe):'+ '+qe)+' et v′(x) = eˣ, donc u′(x) = '+pe+' et v(x) = eˣ. Alors J = [u v]₀¹ '+MN+' ∫₀¹ u′ v dx = [('+pe+'x '+(qe<0?MN+' '+(-qe):'+ '+qe)+')eˣ]₀¹ '+MN+' '+pe+'∫₀¹ eˣ dx = (('+(pe+qe)+'e '+MN+' '+par(qe,0)+') '+MN+' '+pe+'(e '+MN+' 1) = '+(qe===1?'':(qe===-1?MN:qe))+'e'+(cst===0?'':(cst<0?' '+MN+' '+(-cst):' + '+cst))+' '+eqSym(Jv,2)+' '+fmt(r2(Jv),2)+'.',
      ['Identifier la formule d’intégration par parties.','Identifier le choix de u et de v′.'],
      ['Écrire ∫ u v′ = [uv] − ∫ u′v.','Calculer u′ et v.'],
      ['Calculer le crochet [uv]₀¹.','Calculer l’intégrale restante.','Simplifier et donner la valeur approchée.'])];
    var i2=(x.standalone2?'On rappelle que h(x) = '+hS+'. ':'')+'Par ailleurs, le comité étudie la fonction g définie par g(x) = '+MN+'x² + '+s+'x, dans un repère où l’unité d’aire (u.a.) vaut 4 cm².';
    var p2=[K('Calcule l’aire du domaine délimité par la courbe de g et l’axe des abscisses, en u.a. puis en cm².',
      'g(x) = x('+s+' '+MN+' x) s’annule en 0 et en '+s+', et g(x) ≥ 0 sur [0 ; '+s+']. L’aire est A = ∫ de 0 à '+s+' de g(x) dx = ['+MN+'x³ ÷ 3 + '+s+'x² ÷ 2]₀^'+s+' = '+MN+fmt(s*s*s,0)+' ÷ 3 + '+s+' × '+(s*s)+' ÷ 2 = '+fmt(-s*s*s/3,2)+' + '+fmt(s*s*s/2,2)+' = '+fmt(area,2)+' u.a. En cm² : '+fmt(area,2)+' × 4 '+eqSym(areaCm,2)+' '+fmt(r2(areaCm),2)+' cm².',
      ['Identifier les points d’intersection avec l’axe des abscisses.','Identifier que l’aire est l’intégrale d’une fonction positive.'],
      ['Factoriser g(x) pour trouver ses zéros.','Écrire A = ∫ g(x) dx entre les zéros.'],
      ['Calculer les zéros : 0 et '+s+'.','Calculer l’intégrale : '+fmt(area,2)+' u.a.','Convertir en cm².']),
     K('Calcule la valeur moyenne de g sur l’intervalle [0 ; '+s+'].',
      'La valeur moyenne de g sur [0 ; '+s+'] est μ = (1 ÷ ('+s+' '+MN+' 0)) × ∫ de 0 à '+s+' de g(x) dx = (1 ÷ '+s+') × '+fmt(area,2)+' '+eqSym(mean,2)+' '+fmt(r2(mean),2)+'.',
      ['Identifier la formule de la valeur moyenne.','Identifier l’intégrale déjà calculée.'],
      ['Écrire μ = (1 ÷ (b − a)) ∫ g.'],
      ['Reprendre l’intégrale : '+fmt(area,2)+'.','Diviser par la longueur de l’intervalle.','Conclure : μ ≈ '+fmt(r2(mean),2)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{al:al,be:be,ga:ga,lo:lo,hi:hi,I:I,pe:pe,qe:qe,J:Jv,s:s,area:area,mean:mean}}; }

  M.defs67=(M.defs67||[]).concat([
    {id:'CX1',label:'Nombres complexes : calculs',w1:1,build:gCX1,D:['TleD — Nombres complexes : forme algébrique','TleD — Conjugué & module'],C:['TleC — Nombres complexes : forme algébrique','TleC — Conjugué & module']},
    {id:'CX2',label:'Nombres complexes : forme trigonométrique',w1:1,build:gCX2,D:['TleD — Forme trigonométrique & exponentielle','TleD — Équations dans ℂ & racines n-ièmes'],C:['TleC — Forme trigonométrique & exponentielle','TleC — Équations dans ℂ & racines n-ièmes']},
    {id:'CX3',label:'Nombres complexes et géométrie',w1:1,build:gCX3,D:['TleD — Nombres complexes & géométrie plane','TleD — Complexes & transformations du plan'],C:['TleC — Nombres complexes & géométrie plane']},
    {id:'LN',label:'Fonction logarithme népérien',w1:2,build:gLN,D:['TleD — Fonction logarithme népérien'],C:['TleC — Fonction logarithme népérien']},
    {id:'EX',label:'Fonction exponentielle',w1:2,build:gEX,D:['TleD — Fonction exponentielle népérienne'],C:['TleC — Fonction exponentielle népérienne']},
    {id:'IN',label:'Calcul intégral',w1:1,build:gIN,D:['TleD — Calcul intégral','TleD — Compléments sur les primitives'],C:['TleC — Calcul intégral','TleC — Compléments sur les primitives']}
  ]);
})(typeof globalThis!=='undefined'?globalThis:this);
