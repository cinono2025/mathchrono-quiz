/* ===== MQ_SOM : modules sommatifs complémentaires — 1ère D et 1ère C (espace, applications, isométries, fonctions associées, similitudes) ===== */
(function(G){
  'use strict';
  var M=G.MQ_SOM_MOD, fmt=M.fmt, ri=M.ri, pick=M.pick, gcd=M.gcd, H=M.hA;
  var MN=H.MN, par=H.par, fr=H.fr, tm=H.tm, aff=H.aff, K=H.K, who=H.who, Who=H.Who;
  function P3(v){ return '('+v.map(function(c){ return fmt(c,0); }).join(' ; ')+')'; }
  function P2(v){ return '('+v.map(function(c){ return fmt(c,0); }).join(' ; ')+')'; }
  function xm(v){ return v===0?'x':(v<0?'x + '+(-v):'x '+MN+' '+v); }
  function sub3(a,b){ return [b[0]-a[0],b[1]-a[1],b[2]-a[2]]; }
  function sq(n){ var r=Math.round(Math.sqrt(n)); return r*r===n?String(r):'√'+n; }
  function rad(n){ /* écrit √n simplifié */ var o=1,i=n; for(var d=2;d*d<=i;d++) while(i%(d*d)===0){ o*=d; i/=d*d; } return i===1?String(o):(o===1?'':o)+'√'+i; }

  /* ================= Vecteurs de l'espace ================= */
  function gVE(x){
    var r=x.rnd, A,B,C,u,kc,xx,yy,D,it;
    for(it=0;it<300;it++){ A=[ri(r,-3,3),ri(r,-3,3),ri(r,-3,3)]; B=[ri(r,-4,4),ri(r,-4,4),ri(r,-4,4)]; C=[ri(r,-4,4),ri(r,-4,4),ri(r,-4,4)];
      var ab=sub3(A,B), ac=sub3(A,C), cr=[ab[1]*ac[2]-ab[2]*ac[1],ab[2]*ac[0]-ab[0]*ac[2],ab[0]*ac[1]-ab[1]*ac[0]];
      if(cr[0]===0&&cr[1]===0&&cr[2]===0) continue; if((A[0]+B[0])%2||(A[1]+B[1])%2||(A[2]+B[2])%2) continue; break; }
    var AB=sub3(A,B), AC=sub3(A,C), I=[(A[0]+B[0])/2,(A[1]+B[1])/2,(A[2]+B[2])/2]; kc=pick(r,[2,-2,3,-1]); var colin=r()<0.5, jj=AB.findIndex(function(c){ return c!==0; }), ii=(jj+1)%3, U=AB.map(function(c){ return kc*c; }); if(!colin) U[ii]+=1;
    xx=pick(r,[1,2,-1,3]); yy=pick(r,[1,-1,2,-2]); D=[A[0]+xx*AB[0]+yy*AC[0],A[1]+xx*AB[1]+yy*AC[1],A[2]+xx*AB[2]+yy*AC[2]];
    var intro='L’espace est muni d’un repère (O, I, J, K). On considère les points A'+P3(A)+', B'+P3(B)+' et C'+P3(C)+', ainsi que le vecteur →u'+P3(U)+'.';
    var colTxt=colin?'On a →u = '+kc+' →AB : '+U.map(function(c,i){ return fmt(c,0)+' = '+kc+' × '+par(AB[i]); }).join(', ')+'. Les vecteurs →u et →AB sont donc colinéaires.':'Si →u était colinéaire à →AB, on aurait →u = k →AB pour un réel k. La coordonnée n° '+(jj+1)+' donne k = '+fmt(U[jj],0)+' ÷ '+par(AB[jj])+' = '+fmt(kc,0)+' ; mais alors la coordonnée n° '+(ii+1)+' devrait valoir '+kc+' × '+par(AB[ii])+' = '+fmt(kc*AB[ii],0)+', alors qu’elle vaut '+fmt(U[ii],0)+'. Les vecteurs →u et →AB ne sont donc pas colinéaires.';
    var p1=[K('Calcule les coordonnées des vecteurs →AB et →AC, puis celles du milieu M du segment [AB].',
      '→AB'+P3(AB)+' car '+[0,1,2].map(function(i){ return fmt(B[i],0)+' '+MN+' '+par(A[i])+' = '+fmt(AB[i],0); }).join(' ; ')+'. De même →AC'+P3(AC)+'. Le milieu M de [AB] a pour coordonnées les demi-sommes : M('+[0,1,2].map(function(i){ return '('+fmt(A[i],0)+' + '+par(B[i])+') ÷ 2'; }).join(' ; ')+') = M'+P3(I)+'.',
      ['Identifier la formule des coordonnées d’un vecteur →AB(x_B − x_A ; y_B − y_A ; z_B − z_A).','Identifier la formule des coordonnées du milieu.'],
      ['Appliquer les formules coordonnée par coordonnée.'],
      ['Calculer →AB'+P3(AB)+'.','Calculer →AC'+P3(AC)+'.','Calculer M'+P3(I)+'.']),
     K('Les vecteurs →u et →AB sont-ils colinéaires ? Justifie.',
      colTxt,
      ['Identifier la définition : →u et →AB colinéaires s’il existe un réel k tel que →u = k →AB.','Identifier les coordonnées de →AB.'],
      ['Comparer les rapports des coordonnées correspondantes.'],
      ['Chercher le réel k avec une coordonnée.','Tester les autres coordonnées.','Conclure.'])];
    var i2=(x.standalone2?'Dans un repère de l’espace, A'+P3(A)+', B'+P3(B)+' et C'+P3(C)+' ; →AB'+P3(AB)+' et →AC'+P3(AC)+'. ':'')+'On considère le point D'+P3(D)+'.';
    var p2=[K('Justifie que les points A, B et C ne sont pas alignés.',
      'A, B, C sont alignés si et seulement si →AB et →AC sont colinéaires. Or '+(AB[0]*AC[1]!==AB[1]*AC[0]?par(AB[0])+' × '+par(AC[1])+' '+MN+' '+par(AB[1])+' × '+par(AC[0])+' = '+fmt(AB[0]*AC[1]-AB[1]*AC[0],0)+' ≠ 0':(AB[0]*AC[2]!==AB[2]*AC[0]?par(AB[0])+' × '+par(AC[2])+' '+MN+' '+par(AB[2])+' × '+par(AC[0])+' = '+fmt(AB[0]*AC[2]-AB[2]*AC[0],0)+' ≠ 0':par(AB[1])+' × '+par(AC[2])+' '+MN+' '+par(AB[2])+' × '+par(AC[1])+' = '+fmt(AB[1]*AC[2]-AB[2]*AC[1],0)+' ≠ 0'))+' : les coordonnées ne sont pas proportionnelles, donc →AB et →AC ne sont pas colinéaires et A, B, C ne sont pas alignés ; ils définissent un plan (ABC).',
      ['Identifier le lien entre alignement et colinéarité de →AB et →AC.','Identifier les coordonnées de →AB et →AC.'],
      ['Tester la proportionnalité de deux coordonnées (produit en croix).'],
      ['Calculer un produit en croix non nul.','Conclure à la non-colinéarité.','Conclure : A, B, C non alignés.']),
     K('Montre que →AD = '+tm(xx,'→AB',true)+tm(yy,'→AC',false)+'. Que peut-on en déduire pour le point D ?',
      '→AD'+P3(sub3(A,D))+'. Par ailleurs '+tm(xx,'→AB',true)+tm(yy,'→AC',false)+' a pour coordonnées ('+[0,1,2].map(function(i){ return par(xx)+' × '+par(AB[i])+' + '+par(yy)+' × '+par(AC[i]); }).join(' ; ')+') = '+P3(sub3(A,D))+'. Donc →AD = '+tm(xx,'→AB',true)+tm(yy,'→AC',false)+' : il existe deux réels x et y tels que →AD = x →AB + y →AC, donc D appartient au plan (ABC) (les vecteurs →AB, →AC et →AD sont coplanaires).',
      ['Identifier la caractérisation d’un point du plan (ABC) : →AM = x →AB + y →AC.','Identifier les coordonnées de →AB, →AC et D.'],
      ['Calculer →AD et la combinaison linéaire, puis comparer.'],
      ['Calculer →AD'+P3(sub3(A,D))+'.','Calculer la combinaison linéaire.','Conclure : D ∈ (ABC).'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{A:A,B:B,C:C,AB:AB,AC:AC,I:I,U:U,colin:colin,xx:xx,yy:yy,D:D}}; }

  /* ================= Orthogonalité dans l'espace & projections orthogonales (cube) ================= */
  function gOP(x){
    var r=x.rnd, a=ri(r,2,7), alt=r()<0.5;
    /* cube ABCDEFGH, E au-dessus de A, F au-dessus de B, etc. */
    var top=alt?['F','H']:['E','G'], bot=alt?['B','D']:['A','C'], mid=alt?'N':'M';
    var intro='ABCDEFGH est un cube d’arête '+a+' cm ; E, F, G et H sont situés respectivement au-dessus de A, B, C et D. On note (P) le plan (ABCD).';
    var p1=[K('Démontre que la droite (AE) est orthogonale au plan (ABCD). Déduis-en que (AE) est orthogonale à la droite (BD).',
      'ABFE et ADHE sont des carrés, donc (AE) ⊥ (AB) et (AE) ⊥ (AD). Les droites (AB) et (AD) sont sécantes en A et contenues dans le plan (ABCD). Une droite orthogonale à deux droites sécantes d’un plan est orthogonale à ce plan : (AE) est orthogonale à (ABCD). Une droite orthogonale à un plan est orthogonale à toute droite de ce plan ; comme (BD) est contenue dans (ABCD), (AE) est orthogonale à (BD).',
      ['Identifier les faces carrées ABFE et ADHE.','Identifier le critère d’orthogonalité d’une droite et d’un plan.'],
      ['Utiliser deux droites sécantes du plan (ABCD), puis la définition de l’orthogonalité droite-plan.'],
      ['Établir (AE) ⊥ (AB) et (AE) ⊥ (AD).','Conclure (AE) ⊥ (ABCD).','Déduire (AE) ⊥ (BD).']),
     K('Démontre que les plans (ABFE) et (ABCD) sont perpendiculaires, puis que (BF) est orthogonale au plan (ABCD).',
      'Le plan (ABFE) contient la droite (AE), qui est orthogonale au plan (ABCD) : deux plans sont perpendiculaires lorsque l’un contient une droite orthogonale à l’autre, donc (ABFE) ⊥ (ABCD). Par ailleurs (BF) est parallèle à (AE) (côtés opposés du carré ABFE) ; si deux droites sont parallèles, tout plan orthogonal à l’une est orthogonal à l’autre : (BF) ⊥ (ABCD).',
      ['Identifier la définition de deux plans perpendiculaires.','Identifier que (BF) // (AE).'],
      ['Réutiliser le résultat (AE) ⊥ (ABCD).'],
      ['Conclure (ABFE) ⊥ (ABCD).','Établir (BF) // (AE).','Conclure (BF) ⊥ (ABCD).'])];
    var d2=2*a*a, d3=3*a*a;
    var i2=(x.standalone2?'ABCDEFGH est un cube d’arête '+a+' cm (E, F, G, H au-dessus de A, B, C, D) ; on sait que les arêtes verticales sont orthogonales au plan (P) = (ABCD). ':'')+'On note p la projection orthogonale sur le plan (P). Le point '+mid+' est le milieu du segment ['+top[0]+top[1]+'].';
    var p2=[K('Détermine les projetés orthogonaux sur (P) des points '+top[0]+', '+top[1]+' et '+mid+'. Quelle est l’image du segment ['+top[0]+top[1]+'] ?',
      'L’arête ['+bot[0]+top[0]+'] est orthogonale à (P) et '+bot[0]+' ∈ (P), donc p('+top[0]+') = '+bot[0]+' ; de même p('+top[1]+') = '+bot[1]+'. La projection orthogonale conserve le milieu (le support de ['+top[0]+top[1]+'] n’étant pas orthogonal à (P)) : p('+mid+') est le milieu de ['+bot[0]+bot[1]+'], c’est-à-dire le centre O du carré ABCD. L’image du segment ['+top[0]+top[1]+'] est le segment ['+bot[0]+bot[1]+'].',
      ['Identifier la définition du projeté orthogonal sur un plan.','Identifier que la projection conserve le milieu et transforme un segment en segment.'],
      ['Utiliser les arêtes verticales, orthogonales à (P).'],
      ['Donner p('+top[0]+') = '+bot[0]+' et p('+top[1]+') = '+bot[1]+'.','Donner p('+mid+') = O, centre de ABCD.','Donner l’image du segment.']),
     K('Calcule les longueurs '+top[0]+top[1]+', '+bot[0]+top[1]+' et '+bot[0]+bot[1]+'. Compare la longueur de chacun des segments ['+top[0]+top[1]+'] et ['+bot[0]+top[1]+'] à celle de son projeté sur (P).',
      top[0]+top[1]+' est une diagonale de carré : '+top[0]+top[1]+' = √('+a+'² + '+a+'²) = √'+d2+' = '+rad(d2)+' cm, et '+bot[0]+bot[1]+' = '+rad(d2)+' cm aussi. Dans le triangle '+bot[0]+bot[1]+top[1]+' rectangle en '+bot[1]+' : '+bot[0]+top[1]+' = √('+bot[0]+bot[1]+'² + '+bot[1]+top[1]+'²) = √('+d2+' + '+(a*a)+') = √'+d3+' = '+rad(d3)+' cm. Le projeté de ['+top[0]+top[1]+'] est ['+bot[0]+bot[1]+'] : même longueur, car ('+top[0]+top[1]+') est parallèle à (P). Le projeté de ['+bot[0]+top[1]+'] est aussi ['+bot[0]+bot[1]+'] et '+rad(d2)+' < '+rad(d3)+' : la projection raccourcit ce segment, car ('+bot[0]+top[1]+') n’est pas parallèle à (P).',
      ['Identifier les triangles rectangles utiles.','Identifier la propriété : A′B′ = AB si (AB) // (P), A′B′ < AB sinon.'],
      ['Appliquer le théorème de Pythagore deux fois.'],
      ['Calculer '+top[0]+top[1]+' = '+rad(d2)+' cm.','Calculer '+bot[0]+top[1]+' = '+rad(d3)+' cm.','Comparer avec le projeté ['+bot[0]+bot[1]+'].'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,alt:alt,d2:d2,d3:d3}}; }

  /* ================= Applications & fonctions numériques ================= */
  function gAP(x){
    var r=x.rnd, a=pick(r,[2,3,-2,4]), b=pick(r,[-5,-4,-3,-2,-1,1,2,3,4,5]), c=ri(r,-4,4), x0=ri(r,1,3), y1=ri(r,-6,8);
    var fs=aff(a,b), gs='x²'+tm(c,'',false), gof=function(v){ return (a*v+b)*(a*v+b)+c; }, fog=function(v){ return a*(v*v+c)+b; };
    var intro='On considère les applications f et g de ℝ dans ℝ définies par f(x) = '+fs+' et g(x) = '+gs+'.';
    var fx=(a===1?'':(a===-1?MN:a))+'('+'x²'+tm(c,'',false)+')'+tm(b,'',false);
    var p1=[K('Détermine (g ∘ f)(x) et (f ∘ g)(x), puis calcule (g ∘ f)(0) et (f ∘ g)(0). La composition est-elle commutative ?',
      '(g ∘ f)(x) = g(f(x)) = ('+fs+')²'+tm(c,'',false)+' et (f ∘ g)(x) = f(g(x)) = '+fx+'. (g ∘ f)(0) = '+par(b)+'²'+tm(c,'',false)+' = '+fmt(gof(0),0)+' et (f ∘ g)(0) = '+par(a)+' × '+par(c)+tm(b,'',false)+' = '+fmt(fog(0),0)+'. '+(gof(0)!==fog(0)?'Comme '+fmt(gof(0),0)+' ≠ '+fmt(fog(0),0)+', g ∘ f ≠ f ∘ g : la composition des applications n’est pas commutative.':'Ces deux valeurs sont égales, mais (g ∘ f)(1) = '+fmt(gof(1),0)+' et (f ∘ g)(1) = '+fmt(fog(1),0)+' : g ∘ f ≠ f ∘ g, la composition n’est pas commutative.'),
      ['Identifier la définition de la composée : (g ∘ f)(x) = g(f(x)).','Identifier l’ordre d’application des fonctions.'],
      ['Substituer f(x) dans g, puis g(x) dans f.'],
      ['Écrire (g ∘ f)(x) et (f ∘ g)(x).','Calculer les valeurs en 0.','Conclure sur la commutativité.']),
     K('Montre que f est une bijection de ℝ sur ℝ et détermine sa bijection réciproque f⁻¹. Vérifie que (f⁻¹ ∘ f)('+x0+') = '+x0+'.',
      'Pour tout réel y, l’équation '+fs+' = y équivaut à x = (y'+tm(-b,'',false)+') ÷ '+par(a)+' : elle a une solution unique, donc f est bijective et f⁻¹(x) = (x'+tm(-b,'',false)+') ÷ '+par(a)+'. f('+x0+') = '+par(a)+' × '+x0+tm(b,'',false)+' = '+fmt(a*x0+b,0)+' puis f⁻¹('+fmt(a*x0+b,0)+') = ('+fmt(a*x0+b,0)+tm(-b,'',false)+') ÷ '+par(a)+' = '+x0+' : on retrouve bien '+x0+' (f⁻¹ ∘ f = Id_ℝ).',
      ['Identifier la caractérisation d’une bijection : f(x) = y a une unique solution pour tout y.','Identifier que f⁻¹ ∘ f est l’identité.'],
      ['Résoudre f(x) = y d’inconnue x.'],
      ['Résoudre l’équation.','Écrire f⁻¹(x).','Vérifier sur '+x0+'.'])];
    var m=pick(r,[-3,-2,-1,1,2,3]), k=ri(r,-4,5), hs='('+xm(m)+')²'+tm(k,'',false);
    var i2='Soit h la fonction définie par h(x) = '+hs+', étudiée sur l’intervalle E = ['+fmt(m-1,0)+' ; '+fmt(m+2,0)+'].';
    var p2=[K('Démontre que h est bornée sur E : précise un minorant et un majorant.',
      'Pour x ∈ E, '+fmt(m-1,0)+' ≤ x ≤ '+fmt(m+2,0)+', donc '+MN+'1 ≤ x '+(m<0?'+ '+(-m):MN+' '+m)+' ≤ 2 et 0 ≤ ('+xm(m)+')² ≤ 4. Ainsi '+fmt(k,0)+' ≤ h(x) ≤ '+fmt(k+4,0)+' pour tout x de E : '+fmt(k,0)+' est un minorant et '+fmt(k+4,0)+' un majorant de h sur E ; h est bornée sur E.',
      ['Identifier la définition d’une fonction bornée (minorée et majorée).','Identifier l’encadrement de '+xm(m)+' sur E.'],
      ['Encadrer ('+xm(m)+')² puis h(x).'],
      ['Encadrer '+xm(m)+'.','Encadrer le carré.','Conclure : '+fmt(k,0)+' ≤ h(x) ≤ '+fmt(k+4,0)+'.']),
     K('Détermine l’image directe h(E), puis l’ensemble des antécédents de '+fmt(k+1,0)+' par h dans E.',
      'h('+fmt(m,0)+') = '+fmt(k,0)+' et h('+fmt(m+2,0)+') = 2²'+tm(k,'',false)+' = '+fmt(k+4,0)+' ; h est continue et prend toutes les valeurs entre son minimum et son maximum sur E : h(E) = ['+fmt(k,0)+' ; '+fmt(k+4,0)+']. On résout h(x) = '+fmt(k+1,0)+' : ('+xm(m)+')² = 1, donc x = '+fmt(m+1,0)+' ou x = '+fmt(m-1,0)+' ; ces deux nombres sont dans E. L’ensemble cherché est {'+fmt(m-1,0)+' ; '+fmt(m+1,0)+'}.',
      ['Identifier la définition de l’image directe d’une partie.','Identifier la définition d’un antécédent.'],
      ['Utiliser les extremums de h sur E, puis résoudre une équation.'],
      ['Calculer h('+fmt(m,0)+') et h('+fmt(m+2,0)+').','Écrire h(E).','Résoudre h(x) = '+fmt(k+1,0)+' dans E.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,c:c,x0:x0,m:m,k:k}}; }

  /* ================= Isométries & composition de transformations ================= */
  var ANG=[[1,6],[1,4],[1,3],[1,2],[2,3],[3,4],[5,6]];
  function angS(n,d){ var g=gcd(n,d); n/=g; d/=g; return (n===1?'':n)+'π'+(d===1?'':'/'+d); }
  function gIS(x){
    var r=x.rnd, A=[ri(r,-4,4),ri(r,-4,4)], u=[pick(r,[-3,-2,-1,1,2,3]),pick(r,[-3,-2,-1,1,2,3])];
    var rot=function(P){ return [-P[1],P[0]]; }, tr=function(P){ return [P[0]+u[0],P[1]+u[1]]; };
    var rt=rot(tr(A)), trr=tr(rot(A));
    var al=pick(r,ANG), be=pick(r,ANG), sn=al[0]*12/al[1]+be[0]*12/be[1]; /* en douzièmes de π */
    var sred=sn>=24?sn-24:sn, sStr=angS(sred,12);
    var intro='Le plan est muni d’un repère orthonormé direct d’origine O. On note t la translation de vecteur →u'+P2(u)+' et r la rotation de centre O et d’angle π/2 (qui transforme M(x ; y) en M′('+MN+'y ; x)). Soit A'+P2(A)+'.';
    var p1=[K('Calcule les coordonnées de (r ∘ t)(A) et de (t ∘ r)(A). Les transformations r ∘ t et t ∘ r sont-elles égales ?',
      't(A) = ('+fmt(A[0],0)+' + '+par(u[0])+' ; '+fmt(A[1],0)+' + '+par(u[1])+') = '+P2(tr(A))+', puis (r ∘ t)(A) = r(t(A)) = '+P2(rt)+'. r(A) = '+P2(rot(A))+', puis (t ∘ r)(A) = t(r(A)) = '+P2(trr)+'. '+(rt[0]!==trr[0]||rt[1]!==trr[1]?'Les deux points sont différents, donc r ∘ t ≠ t ∘ r : la composition des transformations n’est pas commutative.':'Les deux points coïncident ici, mais en général r ∘ t ≠ t ∘ r.')+' Chacune de ces composées est une isométrie (composée de deux isométries) ; ce sont des rotations d’angle π/2.',
      ['Identifier les expressions analytiques de t et de r.','Identifier l’ordre de composition (on applique d’abord la transformation de droite).'],
      ['Appliquer successivement les deux transformations dans chaque ordre.'],
      ['Calculer (r ∘ t)(A) = '+P2(rt)+'.','Calculer (t ∘ r)(A) = '+P2(trr)+'.','Comparer et conclure.']),
     K('On note r₁ la rotation de centre O et d’angle '+angS(al[0],al[1])+' et r₂ la rotation de centre O et d’angle '+angS(be[0],be[1])+'. Quelle est la nature de r₂ ∘ r₁ ? Précise son angle.',
      'La composée de deux rotations de même centre O, d’angles θ₁ et θ₂, est la rotation de centre O et d’angle θ₁ + θ₂. Ici, la somme de '+angS(al[0],al[1])+' et de '+angS(be[0],be[1])+' vaut '+angS(sn,12)+(sn>=24?', soit '+sStr+' à 2π près':'')+'. Donc r₂ ∘ r₁ est la rotation de centre O et d’angle '+(sred===0?'0 (c’est l’identité)':sStr)+'.',
      ['Identifier la propriété de la composée de deux rotations de même centre.','Identifier les angles des deux rotations.'],
      ['Additionner les angles (réduire au même dénominateur).'],
      ['Énoncer la propriété.','Calculer la somme des angles : '+angS(sn,12)+'.','Conclure.'])];
    var KP=pick(r,[[2,3],[-2,3],[3,-2],[2,1/2],[-2,-1/2],[3,-1],[-1,2],[-3,-2],[2,-1/2]]), k1=KP[0], k2=KP[1], kk=k1*k2, B=[ri(r,-3,3),ri(r,-3,3)], C=[ri(r,-3,3),ri(r,-3,3)]; if(B[0]===C[0]&&B[1]===C[1]) C=[C[0]+1,C[1]];
    var ks=function(v){ return Number.isInteger(v)?fmt(v,0):(v<0?MN:'')+'1/'+Math.round(1/Math.abs(v)); }, BC2=(C[0]-B[0])*(C[0]-B[0])+(C[1]-B[1])*(C[1]-B[1]), B2=[kk*B[0],kk*B[1]];
    var i2='On considère les homothéties h₁ de centre O et de rapport '+ks(k1)+', et h₂ de centre O et de rapport '+ks(k2)+'. Soient B'+P2(B)+' et C'+P2(C)+'.';
    var p2=[K('Quelle est la nature de h₂ ∘ h₁ ? Calcule les coordonnées de l’image B′ de B par h₂ ∘ h₁.',
      'La composée de deux homothéties de même centre O et de rapports k et k′ est l’homothétie de centre O et de rapport kk′ : ici '+(k1<0?'('+ks(k1)+')':ks(k1))+' × '+(k2<0?'('+ks(k2)+')':ks(k2))+' = '+ks(kk)+'. Donc →OB′ = '+ks(kk)+' →OB et B′'+P2(B2)+'.',
      ['Identifier la propriété de la composée de deux homothéties de même centre.','Identifier les rapports '+ks(k1)+' et '+ks(k2)+'.'],
      ['Multiplier les rapports, puis appliquer →OB′ = k →OB.'],
      ['Calculer le rapport '+ks(kk)+'.','Calculer les coordonnées de B′.','Conclure.']),
     K('h₂ ∘ h₁ est-elle une isométrie ? Calcule BC puis B′C′, C′ étant l’image de C.',
      'BC = √(('+fmt(C[0],0)+' '+MN+' '+par(B[0])+')² + ('+fmt(C[1],0)+' '+MN+' '+par(B[1])+')²) = √'+BC2+(rad(BC2)!=='√'+BC2?' = '+rad(BC2):'')+'. Une homothétie de rapport k multiplie les distances par |k| : B′C′ = '+fmt(Math.abs(kk),0)+' × '+rad(BC2)+(Math.abs(kk)===1?' = '+rad(BC2):'')+'. '+(Math.abs(kk)===1?'Comme |'+ks(kk)+'| = 1, h₂ ∘ h₁ conserve les distances : c’est une isométrie (ici '+(kk===1?'l’identité du plan':'la symétrie centrale de centre O')+').':'Comme |'+ks(kk)+'| ≠ 1, B′C′ ≠ BC : h₂ ∘ h₁ ne conserve pas les distances, ce n’est pas une isométrie.'),
      ['Identifier la définition d’une isométrie (conservation des distances).','Identifier l’effet d’une homothétie sur les distances.'],
      ['Calculer BC avec la formule de la distance, puis appliquer le rapport.'],
      ['Calculer BC = '+rad(BC2)+'.','Calculer B′C′.','Conclure sur l’isométrie.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{A:A,u:u,rt:rt,trr:trr,al:al,be:be,sred:sred,k1:k1,k2:k2,kk:kk,B:B,C:C,B2:B2,BC2:BC2}}; }

  /* ================= Fonctions associées & transformations de courbes ================= */
  function gFC(x){
    var r=x.rnd, a=pick(r,[-3,-2,-1,1,2,3]), b=ri(r,-4,5), gs='x²'+tm(-2*a,'x',false)+tm(a*a+b,'',false);
    var intro='Dans un repère orthonormé, (𝒫) est la parabole représentant la fonction carrée x ↦ x². On considère la fonction g définie sur ℝ par g(x) = '+gs+' et sa courbe (C_g).';
    var p1=[K('Montre que g(x) = ('+xm(a)+')²'+tm(b,'',false)+'. Déduis-en que (C_g) est l’image de (𝒫) par une translation dont tu préciseras le vecteur, puis donne le sommet et l’axe de symétrie de (C_g).',
      '('+xm(a)+')²'+tm(b,'',false)+' = x²'+tm(-2*a,'x',false)+' + '+(a*a)+tm(b,'',false)+' = '+gs+' = g(x). La courbe de x ↦ f(x '+MN+' a) + b se déduit de celle de f par la translation de vecteur (a ; b) : (C_g) est l’image de (𝒫) par la translation de vecteur →v'+P2([a,b])+'. Le sommet O de (𝒫) a pour image S'+P2([a,b])+' et l’axe de symétrie de (C_g) est la droite d’équation x = '+fmt(a,0)+'.',
      ['Identifier la forme f(x '+MN+' a) + b.','Identifier le sommet O(0 ; 0) et l’axe (Oy) de la parabole (𝒫).'],
      ['Développer la forme proposée ; utiliser la translation de vecteur (a ; b).'],
      ['Développer et retrouver g(x).','Donner le vecteur →v'+P2([a,b])+'.','Donner S'+P2([a,b])+' et l’axe x = '+fmt(a,0)+'.']),
     K('Soit k la fonction définie par k(x) = g('+MN+'x). Par quelle transformation obtient-on (C_k) à partir de (C_g) ? Donne le sommet et l’axe de (C_k).',
      'La courbe de x ↦ g('+MN+'x) est la symétrique de (C_g) par rapport à l’axe des ordonnées. Le sommet S'+P2([a,b])+' a pour symétrique S′'+P2([-a,b])+' et l’axe x = '+fmt(a,0)+' a pour symétrique la droite x = '+fmt(-a,0)+'. Vérification : k(x) = ('+MN+'x'+(a>0?' '+MN+' '+a:' + '+(-a))+')²'+tm(b,'',false)+' = ('+xm(-a)+')²'+tm(b,'',false)+'.',
      ['Identifier la fonction associée x ↦ f('+MN+'x).','Identifier le sommet et l’axe de (C_g).'],
      ['Appliquer la symétrie d’axe (Oy) au sommet et à l’axe.'],
      ['Nommer la symétrie.','Donner S′'+P2([-a,b])+'.','Donner l’axe x = '+fmt(-a,0)+'.'])];
    var c=pick(r,[-3,-2,-1,1,2,3]), d=pick(r,[-4,-3,-2,2,3,4,1,-1]), e=pick(r,[-3,-2,-1,1,2,3]), hc=d-e*c;
    var hs='('+aff(e,hc)+') ÷ ('+xm(c)+')';
    if(e===0) hs=d+' ÷ ('+xm(c)+')';
    var i2='Soit h la fonction définie sur ℝ ∖ {'+fmt(c,0)+'} par h(x) = '+hs+' et (C_h) sa courbe.';
    var p2=[K('Montre que h(x) = '+fmt(e,0)+' + '+par(d)+'/('+xm(c)+'). Déduis-en que (C_h) est l’image de l’hyperbole d’équation y = '+d+'/x par une translation ; donne le centre de symétrie et les asymptotes de (C_h).',
      fmt(e,0)+' + '+par(d)+'/('+xm(c)+') = ['+par(e)+'('+xm(c)+') + '+par(d)+'] ÷ ('+xm(c)+') = ('+aff(e,hc)+') ÷ ('+xm(c)+') = h(x). Ainsi h(x) = φ(x '+MN+' '+par(c)+') + '+par(e)+' avec φ(x) = '+d+'/x : (C_h) est l’image de l’hyperbole y = '+d+'/x par la translation de vecteur '+P2([c,e])+'. Le centre O de l’hyperbole a pour image Ω'+P2([c,e])+', centre de symétrie de (C_h) ; ses asymptotes sont les droites d’équations x = '+fmt(c,0)+' et y = '+fmt(e,0)+'.',
      ['Identifier la forme b + d/(x '+MN+' a).','Identifier le centre O et les asymptotes (axes) de l’hyperbole y = '+d+'/x.'],
      ['Réduire au même dénominateur ; utiliser la translation de vecteur (a ; b).'],
      ['Retrouver h(x).','Donner le vecteur '+P2([c,e])+'.','Donner Ω et les asymptotes.']),
     K('Calcule h('+fmt(c+1,0)+') et h('+fmt(c-1,0)+'), puis vérifie que les points correspondants de (C_h) sont symétriques par rapport à Ω.',
      'h('+fmt(c+1,0)+') = '+fmt(e,0)+' + '+par(d)+'/1 = '+fmt(e+d,0)+' et h('+fmt(c-1,0)+') = '+fmt(e,0)+' + '+par(d)+'/('+MN+'1) = '+fmt(e-d,0)+'. Le milieu des points ('+fmt(c+1,0)+' ; '+fmt(e+d,0)+') et ('+fmt(c-1,0)+' ; '+fmt(e-d,0)+') a pour coordonnées (('+fmt(c+1,0)+' + '+par(c-1)+') ÷ 2 ; ('+fmt(e+d,0)+' + '+par(e-d)+') ÷ 2) = '+P2([c,e])+' : c’est Ω. Les deux points sont symétriques par rapport à Ω.',
      ['Identifier la caractérisation de la symétrie centrale (Ω milieu).','Identifier l’écriture réduite de h(x).'],
      ['Calculer les deux images, puis le milieu.'],
      ['Calculer h('+fmt(c+1,0)+') = '+fmt(e+d,0)+'.','Calculer h('+fmt(c-1,0)+') = '+fmt(e-d,0)+'.','Calculer le milieu : Ω'+P2([c,e])+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,c:c,d:d,e:e}}; }

  /* ================= Similitudes planes & triangles semblables (1ère C) ================= */
  function gSM(x){
    var r=x.rnd, T=pick(r,[[3,4,5],[5,12,13],[6,8,10],[8,15,17]]), m=ri(r,1,3), s=T.map(function(v){ return v*m; }), kq=pick(r,[[3,2],[2,1],[5,2],[3,1]]), k=kq[0]/kq[1];
    var t=s.map(function(v){ return v*k; }), A1=s[0]*s[1]/2, A2=A1*k*k;
    var fk=kq[1]===1?String(kq[0]):kq[0]+'/'+kq[1];
    var intro='Le triangle ABC a pour côtés AB = '+s[0]+' cm, AC = '+s[1]+' cm et BC = '+s[2]+' cm. Le triangle DEF a pour côtés DE = '+fmt(t[0],1)+' cm, DF = '+fmt(t[1],1)+' cm et EF = '+fmt(t[2],1)+' cm.';
    var p1=[K('Démontre que les triangles ABC et DEF sont semblables et donne le rapport de similitude (de ABC vers DEF).',
      'On compare les côtés homologues : DE ÷ AB = '+fmt(t[0],1)+' ÷ '+s[0]+' = '+fmt(k,2)+' ; DF ÷ AC = '+fmt(t[1],1)+' ÷ '+s[1]+' = '+fmt(k,2)+' ; EF ÷ BC = '+fmt(t[2],1)+' ÷ '+s[2]+' = '+fmt(k,2)+'. Les longueurs des côtés sont proportionnelles : les triangles sont semblables, de rapport '+fk+'.',
      ['Identifier les côtés homologues.','Identifier qu’un rapport commun des côtés caractérise des triangles semblables.'],
      ['Calculer les trois rapports.'],
      ['Calculer les rapports.','Constater qu’ils sont égaux à '+fk+'.','Conclure.']),
     K('Montre que ABC est rectangle, calcule son aire, puis déduis-en l’aire de DEF.',
      'AB² + AC² = '+s[0]+'² + '+s[1]+'² = '+(s[0]*s[0])+' + '+(s[1]*s[1])+' = '+(s[2]*s[2])+' = BC² : d’après la réciproque du théorème de Pythagore, ABC est rectangle en A. Aire de ABC : '+s[0]+' × '+s[1]+' ÷ 2 = '+fmt(A1,1)+' cm². Une similitude de rapport k multiplie les aires par k² : aire de DEF = ('+fk+')² × '+fmt(A1,1)+' = '+fmt(A2,2)+' cm².',
      ['Identifier la réciproque du théorème de Pythagore.','Identifier l’effet d’une similitude sur les aires (k²).'],
      ['Vérifier l’égalité de Pythagore, puis appliquer k².'],
      ['Montrer que ABC est rectangle en A.','Calculer l’aire de ABC : '+fmt(A1,1)+' cm².','Calculer l’aire de DEF : '+fmt(A2,2)+' cm².'])];
    var q=pick(r,[2,3]), P=[ri(r,-3,3),ri(r,-3,3)], Q=[ri(r,-3,3),ri(r,-3,3)]; if(P[0]===Q[0]&&P[1]===Q[1]) Q=[Q[0]+1,Q[1]+1];
    var S=function(V){ return [-q*V[1],q*V[0]]; }, PQ2=(Q[0]-P[0])*(Q[0]-P[0])+(Q[1]-P[1])*(Q[1]-P[1]), Om=[ri(r,-2,2),ri(r,-2,2)], R=ri(r,1,4);
    var i2='Dans un repère orthonormé direct d’origine O, s est la composée de l’homothétie de centre O et de rapport '+q+' suivie de la rotation de centre O et d’angle π/2 : s associe à M(x ; y) le point M′('+MN+q+'y ; '+q+'x). Soient P'+P2(P)+' et Q'+P2(Q)+'.';
    var p2=[K('Calcule les coordonnées de P′ = s(P) et Q′ = s(Q), puis vérifie que P′Q′ = '+q+' × PQ.',
      'P′'+P2(S(P))+' et Q′'+P2(S(Q))+'. PQ² = ('+fmt(Q[0],0)+' '+MN+' '+par(P[0])+')² + ('+fmt(Q[1],0)+' '+MN+' '+par(P[1])+')² = '+PQ2+' et P′Q′² = ('+fmt(S(Q)[0],0)+' '+MN+' '+par(S(P)[0])+')² + ('+fmt(S(Q)[1],0)+' '+MN+' '+par(S(P)[1])+')² = '+(q*q*PQ2)+' = '+(q*q)+' × '+PQ2+'. Donc P′Q′ = '+q+' × PQ : s est une similitude de rapport '+q+'.',
      ['Identifier l’expression analytique de s.','Identifier qu’une similitude de rapport k multiplie les distances par k.'],
      ['Calculer les images, puis comparer les carrés des distances.'],
      ['Calculer P′ et Q′.','Calculer PQ² et P′Q′².','Conclure : P′Q′ = '+q+' PQ.']),
     K('Le cercle (Γ) a pour centre Ω'+P2(Om)+' et pour rayon '+R+'. Détermine son image par s (centre et rayon). Par combien l’aire du disque est-elle multipliée ?',
      'Une similitude de rapport k transforme un cercle de centre Ω et de rayon R en un cercle de centre s(Ω) et de rayon kR. s(Ω) = '+P2(S(Om))+' et le rayon image vaut '+q+' × '+R+' = '+(q*R)+'. L’image de (Γ) est le cercle de centre Ω′'+P2(S(Om))+' et de rayon '+(q*R)+'. Les aires sont multipliées par k² = '+(q*q)+' (π × '+(q*R)+'² = '+(q*q)+' × π × '+R+'²).',
      ['Identifier l’image d’un cercle par une similitude.','Identifier l’effet sur les aires.'],
      ['Calculer s(Ω) et multiplier le rayon par '+q+'.'],
      ['Calculer Ω′'+P2(S(Om))+'.','Calculer le rayon '+(q*R)+'.','Donner le coefficient '+(q*q)+' pour les aires.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{s:s,t:t,k:k,A1:A1,A2:A2,q:q,P:P,Q:Q,PQ2:PQ2,Om:Om,R:R}}; }

  var D=function(s){ return '1D — '+s; }, C=function(s){ return '1C — '+s; };
  M.reg14({id:'VE',D:[D('Vecteurs de l\'espace')],label:'Vecteurs de l’espace',w1:1,build:gVE});
  M.reg14({id:'OP',D:[D('Orthogonalité dans l\'espace'),D('Projections orthogonales')],label:'Orthogonalité et projections dans l’espace',w1:1,build:gOP});
  M.reg14({id:'AP',D:[D('Applications & fonctions numériques')],C:[C('Applications & fonctions numériques')],label:'Applications et fonctions numériques',w1:1,build:gAP});
  M.reg14({id:'IS',D:[D('Isométries & composition de transformations')],C:[C('Isométries & composition de transformations')],label:'Isométries et composition de transformations',w1:1,build:gIS});
  M.reg14({id:'FC',D:[D('Fonctions associées & transformations de courbes')],C:[C('Fonctions associées & transformations de courbes')],label:'Fonctions associées et transformations de courbes',w1:1,build:gFC});
  M.reg14({id:'SM',C:[C('Similitudes planes & triangles semblables')],label:'Similitudes et triangles semblables',w1:2,build:gSM});
})(typeof globalThis!=='undefined'?globalThis:this);
