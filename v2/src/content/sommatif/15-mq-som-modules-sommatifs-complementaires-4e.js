/* ===== MQ_SOM : modules sommatifs complémentaires — 4e ===== */
(function(G){
  'use strict';
  var M=G.MQ_SOM_MOD, MOD=M.MOD, fmt=M.fmt, ri=M.ri, pick=M.pick, gcd=M.gcd, H=M.hA;
  var MN=H.MN, par=H.par, fr=H.fr, frR=H.frR, tm=H.tm, aff=H.aff, K=H.K, who=H.who, Who=H.Who;
  var SP='⁰¹²³⁴⁵⁶⁷⁸⁹'; function sup(n){ return (n<0?'⁻':'')+String(Math.abs(n)).split('').map(function(c){ return SP[+c]; }).join(''); }
  function P2(v){ return '('+v.map(function(c){ return fmt(c,0); }).join(' ; ')+')'; }
  function f2(v){ return fmt(v,2); }

  /* ================= Angles au centre, cordes & polygones réguliers ================= */
  function gCA(x){
    var r=x.rnd, a1=pick(r,[40,60,90,120,150]), l1=pick(r,[6,8,10,12,15]), k=pick(r,[[1,2],[3,2],[2,1],[1,3],[2,3]]), a2=a1*k[0]/k[1], l2=l1*k[0]/k[1];
    while(!Number.isInteger(a2)||a2>=360){ k=[1,2]; a2=a1/2; l2=l1/2; }
    var intro='Sur le cercle (C) de centre O, l’angle au centre AÔB = '+a1+'° intercepte un arc AB de '+fmt(l1,1)+' cm. Les angles au centre CÔD et EÔF mesurent respectivement '+fmt(a2,0)+'° et '+a1+'°.';
    var p1=[K('Calcule la longueur de l’arc CD intercepté par l’angle au centre CÔD.',
      'Dans un même cercle, la longueur d’un arc est proportionnelle à la mesure de l’angle au centre qui l’intercepte. '+fmt(a2,0)+' ÷ '+a1+' = '+fr(a2,a1)+', donc l’arc CD mesure '+fmt(l1,1)+' × '+fr(a2,a1)+' = '+fmt(l2,2)+' cm.',
      ['Identifier la proportionnalité entre longueur d’arc et angle au centre.','Identifier les données : '+a1+'° pour '+fmt(l1,1)+' cm.'],
      ['Utiliser le coefficient '+fr(a2,a1)+' entre les angles.'],
      ['Calculer le rapport des angles.','Calculer la longueur de l’arc CD.','Conclure : '+fmt(l2,2)+' cm.']),
     K('Compare les cordes [AB] et [EF]. Justifie.',
      'Les angles au centre AÔB et EÔF ont la même mesure ('+a1+'°) : dans un même cercle, ils interceptent des arcs de même longueur. Deux arcs de même longueur sont sous-tendus par des cordes de même longueur : AB = EF.',
      ['Identifier l’égalité des angles au centre AÔB et EÔF.','Identifier la propriété liant arcs et cordes.'],
      ['Enchaîner les deux propriétés (angles → arcs → cordes).'],
      ['Comparer les angles.','En déduire l’égalité des arcs.','Conclure : AB = EF.'])];
    var n=pick(r,[5,6,8,9,10,12]), le={5:'le pentagone',6:'l’hexagone',8:'l’octogone',9:'l’ennéagone',10:'le décagone',12:'le dodécagone'}[n], nm={5:'pentagone',6:'hexagone',8:'octogone',9:'ennéagone',10:'décagone',12:'dodécagone'}[n], R=ri(r,3,9), s=ri(r,3,9);
    var i2='Un '+nm+' régulier est inscrit dans un cercle de rayon '+R+' cm ; on note s la longueur de son côté. On étudie aussi un hexagone régulier inscrit dans un cercle de rayon '+s+' cm.';
    var p2=[K('Combien de côtés '+le+' régulier a-t-il ? Calcule la mesure de chacun de ses angles au centre.',
      'Un '+nm+' a '+n+' côtés. Les '+n+' angles au centre d’un polygone régulier ont la même mesure et leur somme est 360° : chaque angle au centre mesure 360 ÷ '+n+' = '+(360/n)+', soit '+(360/n)+'°.',
      ['Identifier le nombre de côtés '+(le.charAt(0)==='l'&&le.charAt(1)==='’'?'de ':'du ')+le.replace(/^le /,'')+'.','Identifier la formule 360° ÷ n.'],
      ['Partager le tour complet en '+n+' angles égaux.'],
      ['Donner '+n+' côtés.','Calculer 360 ÷ '+n+'.','Conclure : '+(360/n)+'°.']),
     K('Pour l’hexagone régulier inscrit dans le cercle de rayon '+s+' cm, calcule la longueur d’un côté et le périmètre. Justifie.',
      'Chaque angle au centre de l’hexagone mesure 360 ÷ 6 = 60, soit 60° ; chaque triangle formé par le centre et deux sommets consécutifs est isocèle avec un angle de 60°, donc équilatéral : le côté est égal au rayon, soit '+s+' cm. Périmètre : 6 × '+s+' = '+(6*s)+' cm.',
      ['Identifier l’angle au centre de l’hexagone : 60°.','Identifier qu’un triangle isocèle ayant un angle de 60° est équilatéral.'],
      ['Déduire côté = rayon, puis multiplier par 6.'],
      ['Calculer l’angle au centre.','Justifier côté = '+s+' cm.','Calculer le périmètre : '+(6*s)+' cm.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a1:a1,l1:l1,a2:a2,l2:l2,n:n,R:R,s:s}}; }

  /* ================= Distance & équidistance, droites remarquables ================= */
  function gDE(x){
    var r=x.rnd, T=pick(r,[[3,4,5],[6,8,10],[5,12,13],[8,6,10]]), m=ri(r,1,2), ah=T[0]*m, hm=T[1]*m, am=T[2]*m, d=ri(r,3,12)*2;
    var intro='La droite (D) représente une route rectiligne et A une maison. H est le pied de la perpendiculaire à (D) passant par A, avec AH = '+ah+' m. M est un point de (D) tel que HM = '+hm+' m. Deux clôtures parallèles (D₁) et (D₂) sont distantes de '+d+' m.';
    var p1=[K('Quelle est la distance du point A à la droite (D) ? Calcule AM et compare-la à cette distance.',
      'La distance de A à (D) est la longueur AH = '+ah+' m (H est le pied de la perpendiculaire). Le triangle AHM est rectangle en H : AM² = AH² + HM² = '+ah+'² + '+hm+'² = '+(ah*ah)+' + '+(hm*hm)+' = '+(am*am)+', donc AM = '+am+' m. On a bien AM > AH : la distance de A à (D) est la plus courte distance entre A et un point de (D).',
      ['Identifier la définition de la distance d’un point à une droite.','Identifier le triangle AHM rectangle en H.'],
      ['Appliquer le théorème de Pythagore.'],
      ['Donner la distance AH = '+ah+' m.','Calculer AM = '+am+' m.','Comparer AM et AH.']),
     K('Un point P de l’axe médian de (D₁) et (D₂) : à quelle distance de chacune des deux clôtures se trouve-t-il ? Justifie.',
      'L’axe médian de deux droites parallèles est l’ensemble des points équidistants de ces deux droites ; il est à mi-distance. P est donc à '+d+' ÷ 2 = '+(d/2)+' m de (D₁) et à '+(d/2)+' m de (D₂).',
      ['Identifier la définition de l’axe médian.','Identifier la distance des deux droites : '+d+' m.'],
      ['Partager la distance en deux.'],
      ['Rappeler la propriété de l’axe médian.','Calculer '+d+' ÷ 2.','Conclure : '+(d/2)+' m.'])];
    var med=ri(r,3,9)*3;
    var i2='Dans un triangle EFG, I est le milieu de [FG] et la médiane [EI] mesure '+med+' cm. Les trois médianes se coupent en K. On trace aussi les hauteurs du triangle, qui se coupent en un point L.';
    var p2=[K('Comment appelle-t-on le point K ? Calcule EK et KI.',
      'Le point de concours des médianes est le centre de gravité du triangle ; il est situé aux 2/3 de chaque médiane à partir du sommet. EK = 2/3 × '+med+' = '+(2*med/3)+' cm et KI = '+med+' '+MN+' '+(2*med/3)+' = '+(med/3)+' cm.',
      ['Identifier le centre de gravité.','Identifier sa position aux 2/3 de la médiane.'],
      ['Traduire : EK = 2/3 × EI.'],
      ['Nommer K : centre de gravité.','Calculer EK = '+(2*med/3)+' cm.','Calculer KI = '+(med/3)+' cm.']),
     K('Comment appelle-t-on le point L ? Et le point de concours des bissectrices du triangle ? Quel cercle a pour centre ce dernier point ?',
      'Le point de concours des trois hauteurs est l’orthocentre : L est l’orthocentre du triangle EFG. Le point de concours des trois bissectrices est le centre du cercle inscrit dans le triangle (cercle intérieur au triangle, tangent au support de ses trois côtés).',
      ['Identifier les droites remarquables (hauteurs, bissectrices).','Identifier leurs points de concours.'],
      ['Associer chaque point de concours à son nom.'],
      ['Nommer l’orthocentre.','Nommer le centre du cercle inscrit.','Décrire le cercle inscrit.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{ah:ah,hm:hm,am:am,d:d,med:med}}; }

  /* ================= Nombres décimaux (puissances de 10) & puissances ================= */
  function gND(x){
    var r=x.rnd, a=ri(r,2,4), b=ri(r,2,4), m=ri(r,2,6), n=-ri(r,1,m+3), e=m+n, pr=a*b, k=ri(r,2,9), ke=-ri(r,2,7);
    var intro='En sciences, '+who(x)+' manipule des nombres écrits avec des puissances de 10 : A = ('+a+' × 10'+sup(m)+') × ('+b+' × 10'+sup(n)+') et B = '+k+' × 10'+sup(ke)+'.';
    var p1=[K('Calcule A et donne le résultat sous la forme c × 10ᵖ, puis en écriture décimale.',
      'A = ('+a+' × '+b+') × 10'+sup(m)+' × 10'+sup(n)+' = '+pr+' × 10^('+m+' + ('+n+')) = '+pr+' × 10'+sup(e)+'. En écriture décimale : A = '+fmt(pr*Math.pow(10,e),Math.max(0,-e))+'.',
      ['Identifier la propriété (a × 10ⁿ) × (b × 10ᵐ) = (a × b) × 10^(n+m).','Identifier les exposants '+m+' et '+n+'.'],
      ['Regrouper les nombres et les puissances de 10.'],
      ['Calculer '+a+' × '+b+' = '+pr+'.','Calculer l’exposant '+e+'.','Donner l’écriture décimale.']),
     K('Écris B en écriture décimale et encadre-le par deux puissances de 10 d’exposants consécutifs.',
      '10'+sup(ke)+' = 1/10'+sup(-ke)+' = '+fmt(Math.pow(10,ke),-ke)+', donc B = '+k+' × '+fmt(Math.pow(10,ke),-ke)+' = '+fmt(k*Math.pow(10,ke),-ke)+'. Comme 1 < '+k+' < 10 : 10'+sup(ke)+' < B < 10'+sup(ke+1)+'.',
      ['Identifier que 10⁻ⁿ = 1/10ⁿ.','Identifier l’encadrement 1 ≤ '+k+' < 10.'],
      ['Écrire 10'+sup(ke)+' en écriture décimale ; multiplier l’encadrement par 10'+sup(ke)+'.'],
      ['Écrire 10'+sup(ke)+' = '+fmt(Math.pow(10,ke),-ke)+'.','Calculer B.','Encadrer B.'])];
    var p=pick(r,[2,3]), q=ri(r,5,7), s=ri(r,2,q-1), t=ri(r,2,4), u=t+ri(r,1,3), z=pick(r,[2,3]), nn=pick(r,[3,4,5]);
    var i2='On considère C = '+p+sup(q)+' ÷ '+p+sup(s)+', D = '+p+sup(t)+' ÷ '+p+sup(u)+' et E = ('+MN+z+')'+sup(nn)+'.';
    var p2=[K('Écris C sous la forme d’une puissance de '+p+', puis calcule C. Fais de même pour D (écris D comme une fraction).',
      'aᵐ ÷ aⁿ = a^(m − n) : C = '+p+'^('+q+' '+MN+' '+s+') = '+p+sup(q-s)+' = '+Math.pow(p,q-s)+'. D = '+p+sup(t)+' ÷ '+p+sup(u)+' = 1 ÷ '+p+sup(u-t)+' = 1/'+Math.pow(p,u-t)+'.',
      ['Identifier la propriété aᵐ ÷ aⁿ.','Identifier que l’exposant du dénominateur est plus grand dans D.'],
      ['Soustraire les exposants.'],
      ['Calculer C = '+Math.pow(p,q-s)+'.','Simplifier D.','Écrire D = 1/'+Math.pow(p,u-t)+'.']),
     K('Calcule E et justifie son signe.',
      'E = ('+MN+z+')'+sup(nn)+' = '+Array(nn).fill('('+MN+z+')').join(' × ')+' = '+fmt(Math.pow(-z,nn),0)+'. L’exposant '+nn+' est '+(nn%2?'impair : (−a)ⁿ = −aⁿ, le résultat est négatif.':'pair : (−a)ⁿ = aⁿ, le résultat est positif.'),
      ['Identifier la règle : (−a)ⁿ = aⁿ si n pair, −aⁿ si n impair.','Identifier la parité de l’exposant '+nn+'.'],
      ['Écrire le produit des facteurs et appliquer la règle des signes.'],
      ['Écrire le produit.','Déterminer le signe.','Calculer E = '+fmt(Math.pow(-z,nn),0)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,m:m,n:n,e:e,pr:pr,k:k,ke:ke,p:p,q:q,s:s,t:t,u:u,z:z,nn:nn}}; }

  /* ================= Nombres rationnels ================= */
  function gRQ(x){
    var r=x.rnd, Q=[[2,3],[3,4],[4,5],[5,6],[3,5],[5,8],[7,10]], f1=pick(r,Q), f2b=pick(r,Q.filter(function(q){ return q!==f1; }));
    var v1=-f1[0]/f1[1], v2=-f2b[0]/f2b[1], den=f1[1]*f2b[1]/gcd(f1[1],f2b[1]), n1=-f1[0]*den/f1[1], n2=-f2b[0]*den/f2b[1];
    var intro='Lors d’un relevé de températures (écarts par rapport à la normale), '+who(x)+' note les nombres '+MN+f1[0]+'/'+f1[1]+' et '+MN+f2b[0]+'/'+f2b[1]+'.';
    var p1=[K('Donne l’opposé de '+MN+f1[0]+'/'+f1[1]+', puis compare les nombres '+MN+f1[0]+'/'+f1[1]+' et '+MN+f2b[0]+'/'+f2b[1]+'.',
      'L’opposé de '+MN+f1[0]+'/'+f1[1]+' est '+f1[0]+'/'+f1[1]+'. On réduit au même dénominateur '+den+' : '+MN+f1[0]+'/'+f1[1]+' = '+fmt(n1,0)+'/'+den+' et '+MN+f2b[0]+'/'+f2b[1]+' = '+fmt(n2,0)+'/'+den+'. De deux rationnels négatifs, le plus petit est celui qui a la plus grande distance à zéro : '+(v1<v2?MN+f1[0]+'/'+f1[1]+' < '+MN+f2b[0]+'/'+f2b[1]:MN+f2b[0]+'/'+f2b[1]+' < '+MN+f1[0]+'/'+f1[1])+'.',
      ['Identifier la définition de l’opposé.','Identifier la règle de comparaison de deux rationnels négatifs.'],
      ['Réduire au même dénominateur, puis comparer les distances à zéro.'],
      ['Donner l’opposé.','Réduire au dénominateur '+den+'.','Comparer.']),
     K('Calcule la somme S = '+MN+f1[0]+'/'+f1[1]+' + '+f2b[0]+'/'+f2b[1]+' et donne le résultat sous forme irréductible.',
      'S = '+fmt(n1,0)+'/'+den+' + '+fmt(-n2,0)+'/'+den+' = '+fmt(n1-n2,0)+'/'+den+(fr(n1-n2,den)!==fmt(n1-n2,0)+'/'+den?' = '+fr(n1-n2,den):'')+'.',
      ['Identifier la règle d’addition des fractions.','Identifier le dénominateur commun '+den+'.'],
      ['Réduire au même dénominateur et additionner les numérateurs.'],
      ['Écrire les fractions sur '+den+'.','Additionner les numérateurs.','Simplifier : '+fr(n1-n2,den)+'.'])];
    var a=pick(r,[[2,3],[3,4],[5,6],[4,7]]), b=pick(r,[[3,5],[2,9],[7,8],[9,10]]), cc=ri(r,2,4);
    var P=frR(-a[0]*b[0],a[1]*b[1]), Qt=frR(a[0]*b[1],a[1]*b[0]);
    var i2='On considère les nombres rationnels x = '+MN+a[0]+'/'+a[1]+' et y = '+b[0]+'/'+b[1]+'.';
    var p2=[K('Calcule le produit x × y sous forme irréductible.',
      'x × y = ('+MN+a[0]+' × '+b[0]+') / ('+a[1]+' × '+b[1]+') = '+MN+(a[0]*b[0])+'/'+(a[1]*b[1])+(fr(-a[0]*b[0],a[1]*b[1])!==MN+(a[0]*b[0])+'/'+(a[1]*b[1])?' = '+fr(-a[0]*b[0],a[1]*b[1]):'')+'. Le produit d’un négatif par un positif est négatif.',
      ['Identifier la règle du produit de deux fractions.','Identifier la règle des signes.'],
      ['Multiplier les numérateurs et les dénominateurs, puis simplifier.'],
      ['Multiplier les numérateurs.','Multiplier les dénominateurs.','Simplifier : '+fr(-a[0]*b[0],a[1]*b[1])+'.']),
     K('Calcule le quotient x ÷ y sous forme irréductible.',
      'Diviser par y, c’est multiplier par son inverse '+b[1]+'/'+b[0]+' : x ÷ y = '+MN+a[0]+'/'+a[1]+' × '+b[1]+'/'+b[0]+' = '+MN+(a[0]*b[1])+'/'+(a[1]*b[0])+(fr(-a[0]*b[1],a[1]*b[0])!==MN+(a[0]*b[1])+'/'+(a[1]*b[0])?' = '+fr(-a[0]*b[1],a[1]*b[0]):'')+'.',
      ['Identifier que diviser revient à multiplier par l’inverse.','Identifier l’inverse de y.'],
      ['Transformer la division en multiplication.'],
      ['Écrire l’inverse '+b[1]+'/'+b[0]+'.','Multiplier.','Simplifier : '+fr(-a[0]*b[1],a[1]*b[0])+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{f1:f1,f2:f2b,den:den,n1:n1,n2:n2,a:a,b:b}}; }

  /* ================= Expressions algébriques ================= */
  function sqx(c){ return c===1?'x²':'('+tm(c,'x',true)+')²'; }
  function gEA(x){
    var r=x.rnd, a=pick(r,[1,2,3]), b=ri(r,1,6), c=pick(r,[1,2,3]), d=ri(r,1,7), x0=ri(r,1,5);
    var A1='('+tm(a,'x',true)+' + '+b+')²', dev1=tm(a*a,'x²',true)+tm(2*a*b,'x',false)+tm(b*b,'',false);
    var B1='('+tm(c,'x',true)+' '+MN+' '+d+')('+tm(c,'x',true)+' + '+d+')', dev2=tm(c*c,'x²',true)+tm(-d*d,'',false);
    var intro='On considère les expressions E = '+A1+' et F = '+B1+'.';
    var p1=[K('Développe et réduis E et F à l’aide des identités remarquables.',
      'Avec (p + q)² = p² + 2pq + q² : E = '+sqx(a)+' + 2 × '+tm(a,'x',true)+' × '+b+' + '+b+'² = '+dev1+'. Avec (p − q)(p + q) = p² − q² : F = '+sqx(c)+' '+MN+' '+d+'² = '+dev2+'.',
      ['Identifier les identités remarquables (p + q)² et (p − q)(p + q).','Identifier p et q dans chaque expression.'],
      ['Appliquer les identités, puis réduire.'],
      ['Développer E = '+dev1+'.','Développer F = '+dev2+'.','Vérifier les réductions.']),
     K('Calcule la valeur de E pour x = '+x0+' de deux façons (avec l’expression de départ et avec l’expression développée).',
      'Avec E = '+A1+' : ('+a+' × '+x0+' + '+b+')² = '+(a*x0+b)+'² = '+(a*x0+b)*(a*x0+b)+'. Avec la forme développée : '+(a*a)+' × '+x0+'² + '+(2*a*b)+' × '+x0+' + '+(b*b)+' = '+(a*a*x0*x0)+' + '+(2*a*b*x0)+' + '+(b*b)+' = '+(a*x0+b)*(a*x0+b)+'. Les deux calculs donnent le même résultat.',
      ['Identifier la valeur x = '+x0+'.','Identifier les deux écritures de E.'],
      ['Remplacer x par '+x0+' dans chaque écriture.'],
      ['Calculer avec la forme de départ.','Calculer avec la forme développée.','Comparer.'])];
    var k=pick(r,[2,3,4,5]), w=pick(r,[1,2,3]), v=ri(r,1,7); while(gcd(w,v)!==1) v++;
    var i2='On veut factoriser G = '+tm(k*w,'x',true)+' + '+(k*v)+' et H = '+tm(w*w,'x²',true)+' '+MN+' '+(v*v)+'.';
    var p2=[K('Factorise G.',
      'Les deux termes ont pour facteur commun '+k+' : G = '+k+' × '+tm(w,'x',true)+' + '+k+' × '+v+' = '+k+'('+tm(w,'x',true)+' + '+v+').',
      ['Identifier le facteur commun '+k+'.','Identifier la règle de distributivité ka + kb = k(a + b).'],
      ['Mettre '+k+' en facteur.'],
      ['Écrire chaque terme comme un produit par '+k+'.','Factoriser.','Conclure : G = '+k+'('+tm(w,'x',true)+' + '+v+').']),
     K('Factorise H à l’aide d’une identité remarquable.',
      'H = '+sqx(w)+' '+MN+' '+v+'² est une différence de deux carrés : p² − q² = (p − q)(p + q). Donc H = ('+tm(w,'x',true)+' '+MN+' '+v+')('+tm(w,'x',true)+' + '+v+').',
      ['Identifier une différence de deux carrés.','Identifier p = '+tm(w,'x',true)+' et q = '+v+'.'],
      ['Appliquer p² − q² = (p − q)(p + q).'],
      ['Écrire H comme différence de carrés.','Appliquer l’identité.','Conclure.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,c:c,d:d,x0:x0,k:k,w:w,v:v,dev1:dev1,dev2:dev2}}; }

  /* ================= Sphère & boule, plans et droites de l'espace ================= */
  function gSB(x){
    var r=x.rnd, R=ri(r,2,9), Asph=4*3.14*R*R, V=4*3.14*R*R*R/3, d1=R-ri(r,1,R-1>0?R-1:1), d2=R+ri(r,1,4);
    var intro='Un ballon a la forme d’une sphère de centre O et de rayon '+R+' cm. Deux points P et Q de l’espace sont tels que OP = '+d1+' cm et OQ = '+d2+' cm.';
    var p1=[K('Calcule l’aire de la sphère et le volume de la boule correspondante (prendre π ≈ 3,14 ; arrondir au centième).',
      'Aire de la sphère : 4 × π × r² ≈ 4 × 3,14 × '+R+'² = '+f2(Asph)+' cm². Volume de la boule : 4 × π × r³ ÷ 3 ≈ 4 × 3,14 × '+R+'³ ÷ 3 ≈ '+f2(V)+' cm³.',
      ['Identifier les formules de l’aire de la sphère et du volume de la boule.','Identifier le rayon '+R+' cm.'],
      ['Appliquer A = 4πr² et V = 4πr³ ÷ 3.'],
      ['Calculer '+R+'² et '+R+'³.','Calculer l’aire ≈ '+f2(Asph)+' cm².','Calculer le volume ≈ '+f2(V)+' cm³.']),
     K('Les points P et Q appartiennent-ils à la sphère ? à la boule ? Justifie.',
      'La sphère est l’ensemble des points M tels que OM = '+R+' ; la boule est l’ensemble des points M tels que OM ≤ '+R+'. OP = '+d1+' < '+R+' : P appartient à la boule mais pas à la sphère. OQ = '+d2+' > '+R+' : Q n’appartient ni à la sphère ni à la boule.',
      ['Identifier les définitions de la sphère et de la boule.','Identifier les distances OP et OQ.'],
      ['Comparer chaque distance au rayon.'],
      ['Comparer OP au rayon.','Comparer OQ au rayon.','Conclure pour P et Q.'])];
    var i2='ABCDEFGH est un pavé droit (E, F, G et H sont respectivement au-dessus de A, B, C et D).';
    var p2=[K('Combien de plans passent par les points A, B et G ? Justifie, puis cite deux droites contenues dans le plan (ABG).',
      'Les points A, B et G ne sont pas alignés ; trois points non alignés déterminent un plan et un seul : il y a un seul plan (ABG). Si deux points distincts sont dans un plan, la droite qui les joint est contenue dans ce plan : (AB) et (BG) sont contenues dans le plan (ABG) (ainsi que (AG)).',
      ['Identifier la détermination d’un plan par trois points non alignés.','Identifier la propriété : deux points d’un plan → la droite est dans le plan.'],
      ['Vérifier que A, B, G ne sont pas alignés ; appliquer les propriétés.'],
      ['Justifier : A, B, G non alignés.','Conclure : un seul plan.','Citer (AB) et (BG).']),
     K('Les droites (AB) et (HG) sont-elles parallèles ? Et les droites (AE) et (BC) : sont-elles sécantes ? Justifie.',
      '(AB) // (DC) (côtés opposés du rectangle ABCD) et (DC) // (HG) (côtés opposés du rectangle DCGH) ; deux droites parallèles à une même troisième sont parallèles : (AB) // (HG). Les droites (AE) et (BC) ne sont pas parallèles et ne sont pas dans un même plan (elles ne sont pas coplanaires) : elles ne sont pas sécantes.',
      ['Identifier les faces rectangulaires du pavé.','Identifier les positions relatives de deux droites de l’espace.'],
      ['Utiliser la transitivité du parallélisme ; chercher un plan commun.'],
      ['Montrer (AB) // (HG).','Étudier (AE) et (BC).','Conclure : non coplanaires, donc non sécantes.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{R:R,Asph:Asph,V:V,d1:d1,d2:d2}}; }

  /* ================= Symétrie centrale & symétrie orthogonale (repère) ================= */
  function gSO(x){
    var r=x.rnd, W=[ri(r,-2,2),ri(r,-2,2)], A=[ri(r,-4,4),ri(r,-3,3)], B=[ri(r,-4,4),ri(r,-3,3)]; if(A[0]===B[0]&&A[1]===B[1]) B=[B[0]+2,B[1]]; if(A[0]===W[0]&&A[1]===W[1]) A=[A[0]+1,A[1]+1];
    var A1=[2*W[0]-A[0],2*W[1]-A[1]], B1=[2*W[0]-B[0],2*W[1]-B[1]], ab2=(B[0]-A[0])*(B[0]-A[0])+(B[1]-A[1])*(B[1]-A[1]);
    var intro='Le plan est muni d’un repère orthonormé (O, I, J). On considère les points Ω'+P2(W)+', A'+P2(A)+' et B'+P2(B)+'. On note s la symétrie centrale de centre Ω.';
    var p1=[K('Calcule les coordonnées des images A′ et B′ de A et B par s.',
      'Ω est le milieu de [AA′] : x_A′ = 2 × '+par(W[0])+' '+MN+' '+par(A[0])+' = '+fmt(A1[0],0)+' et y_A′ = 2 × '+par(W[1])+' '+MN+' '+par(A[1])+' = '+fmt(A1[1],0)+', donc A′'+P2(A1)+'. De même B′'+P2(B1)+'.',
      ['Identifier la définition : Ω est le milieu de [MM′].','Identifier les coordonnées de Ω, A et B.'],
      ['Utiliser x′ = 2x_Ω − x et y′ = 2y_Ω − y.'],
      ['Calculer A′'+P2(A1)+'.','Calculer B′'+P2(B1)+'.','Vérifier avec les milieux.']),
     K('Compare AB et A′B′, puis précise la position des droites (AB) et (A′B′).',
      'AB² = ('+fmt(B[0],0)+' '+MN+' '+par(A[0])+')² + ('+fmt(B[1],0)+' '+MN+' '+par(A[1])+')² = '+ab2+' et A′B′² = ('+fmt(B1[0],0)+' '+MN+' '+par(A1[0])+')² + ('+fmt(B1[1],0)+' '+MN+' '+par(A1[1])+')² = '+ab2+' : AB = A′B′ (la symétrie centrale conserve les longueurs). L’image d’une droite par une symétrie centrale est une droite parallèle : (A′B′) // (AB).',
      ['Identifier la formule de la distance dans un repère orthonormé.','Identifier les propriétés de la symétrie centrale.'],
      ['Calculer les carrés des distances ; appliquer la propriété du parallélisme.'],
      ['Calculer AB² = '+ab2+'.','Calculer A′B′² = '+ab2+'.','Conclure : AB = A′B′ et (AB) // (A′B′).'])];
    var C=[pick(r,[-4,-3,-2,2,3,4]),pick(r,[-3,-2,-1,1,2,3])], ax=pick(r,['Oy','Ox']), C1=ax==='Oy'?[-C[0],C[1]]:[C[0],-C[1]], Dp=ax==='Oy'?[0,ri(r,-3,3)]:[ri(r,-3,3),0];
    var i2='On note σ la symétrie orthogonale d’axe ('+ax+'). Soient C'+P2(C)+' et D'+P2(Dp)+'.';
    var p2=[K('Calcule les coordonnées de C′ = σ(C) et de D′ = σ(D). Justifie pour D.',
      'Dans la symétrie d’axe ('+ax+'), '+(ax==='Oy'?'l’abscisse change de signe et l’ordonnée est conservée':'l’ordonnée change de signe et l’abscisse est conservée')+' : C′'+P2(C1)+'. Le point D est sur l’axe ('+ax+') : les points de l’axe sont invariants, donc D′ = D'+P2(Dp)+'.',
      ['Identifier l’effet de la symétrie d’axe ('+ax+') sur les coordonnées.','Identifier que les points de l’axe sont invariants.'],
      ['Appliquer la règle sur les coordonnées.'],
      ['Calculer C′'+P2(C1)+'.','Remarquer que D est sur l’axe.','Conclure : D′ = D.']),
     K('Que représente l’axe ('+ax+') pour le segment [CC′] ? Calcule CC′.',
      'C n’est pas sur l’axe, donc l’axe ('+ax+') est la médiatrice du segment [CC′]. CC′ = '+(ax==='Oy'?'|'+fmt(C1[0],0)+' '+MN+' '+par(C[0])+'| = '+Math.abs(2*C[0]):'|'+fmt(C1[1],0)+' '+MN+' '+par(C[1])+'| = '+Math.abs(2*C[1]))+' (unités de longueur).',
      ['Identifier la définition de la symétrie orthogonale (axe médiatrice de [MM′]).','Identifier que C et C′ ont '+(ax==='Oy'?'la même ordonnée':'la même abscisse')+'.'],
      ['Calculer la distance sur une parallèle à un axe.'],
      ['Nommer la médiatrice.','Écrire la différence des coordonnées.','Calculer CC′.'])];
    return {parts:[{intro:intro,cons:p1,fig:{type:'rep',pts:[{n:'Ω',x:W[0],y:W[1]},{n:'A',x:A[0],y:A[1]},{n:'B',x:B[0],y:B[1]}],edges:[[1,2]]}},{intro:i2,cons:p2}],_g:{W:W,A:A,B:B,A1:A1,B1:B1,ab2:ab2,C:C,C1:C1,ax:ax,Dp:Dp}}; }

  /* ================= Translation & vecteurs, projection & repérage ================= */
  function gTV(x){
    var r=x.rnd, A=[ri(r,-3,1),ri(r,-3,1)], B=[ri(r,1,4),ri(r,-2,3)], C=[ri(r,-4,0),ri(r,1,4)]; if(A[0]===B[0]&&A[1]===B[1]) B=[B[0]+1,B[1]];
    var v=[B[0]-A[0],B[1]-A[1]], C1=[C[0]+v[0],C[1]+v[1]];
    var intro='Dans un repère orthonormé (O, I, J), on considère les points R'+P2(A)+', S'+P2(B)+' et T'+P2(C)+'. On note t la translation qui transforme R en S.';
    var p1=[K('Calcule les coordonnées du vecteur →RS, puis celles du point T′, image de T par t.',
      '→RS('+fmt(B[0],0)+' '+MN+' '+par(A[0])+' ; '+fmt(B[1],0)+' '+MN+' '+par(A[1])+') = →RS'+P2(v)+'. T′ est tel que →TT′ = →RS : T′('+fmt(C[0],0)+' + '+par(v[0])+' ; '+fmt(C[1],0)+' + '+par(v[1])+') = T′'+P2(C1)+'.',
      ['Identifier que t est la translation de vecteur →RS.','Identifier la formule des coordonnées d’un vecteur.'],
      ['Traduire T′ = t(T) par →TT′ = →RS.'],
      ['Calculer →RS'+P2(v)+'.','Écrire →TT′ = →RS.','Calculer T′'+P2(C1)+'.']),
     K('Quelle est la nature du quadrilatère RST′T ? Justifie à l’aide des milieux de ses diagonales.',
      'Milieu de [RT′] : (('+fmt(A[0],0)+' + '+par(C1[0])+') ÷ 2 ; ('+fmt(A[1],0)+' + '+par(C1[1])+') ÷ 2) = ('+fmt((A[0]+C1[0])/2,1)+' ; '+fmt((A[1]+C1[1])/2,1)+'). Milieu de [ST] : (('+fmt(B[0],0)+' + '+par(C[0])+') ÷ 2 ; ('+fmt(B[1],0)+' + '+par(C[1])+') ÷ 2) = ('+fmt((B[0]+C[0])/2,1)+' ; '+fmt((B[1]+C[1])/2,1)+'). Les diagonales [RT′] et [ST] ont le même milieu : RST′T est un parallélogramme (on a bien →RS = →TT′).',
      ['Identifier les diagonales [RT′] et [ST] du quadrilatère RST′T.','Identifier la caractérisation du parallélogramme par les milieux.'],
      ['Calculer les coordonnées des deux milieux.'],
      ['Calculer le milieu de [RT′].','Calculer le milieu de [ST].','Conclure : parallélogramme.'])];
    var E=[ri(r,-4,4),ri(r,1,5)], F=[ri(r,-4,4),ri(r,-5,-1)]; if((E[0]+F[0])%2) F[0]+=1; if((E[1]+F[1])%2) F[1]+=1;
    var Mm=[(E[0]+F[0])/2,(E[1]+F[1])/2];
    var i2='On considère les points E'+P2(E)+' et F'+P2(F)+', le milieu K de [EF], et la projection orthogonale p sur l’axe des abscisses (O, I).';
    var p2=[K('Calcule les coordonnées de K, puis celles des projetés E₁, F₁ et K₁ de E, F et K sur l’axe des abscisses.',
      'K(('+fmt(E[0],0)+' + '+par(F[0])+') ÷ 2 ; ('+fmt(E[1],0)+' + '+par(F[1])+') ÷ 2) = K'+P2(Mm)+'. Projeter orthogonalement sur l’axe des abscisses conserve l’abscisse et rend l’ordonnée nulle : E₁'+P2([E[0],0])+', F₁'+P2([F[0],0])+' et K₁'+P2([Mm[0],0])+'.',
      ['Identifier la formule des coordonnées du milieu.','Identifier l’effet de la projection orthogonale sur (OI).'],
      ['Calculer le milieu ; garder l’abscisse et remplacer l’ordonnée par 0.'],
      ['Calculer K'+P2(Mm)+'.','Donner E₁ et F₁.','Donner K₁.']),
     K('Vérifie que K₁ est le milieu de [E₁F₁]. Quelle propriété de la projection illustre-t-on ?',
      'Le milieu de [E₁F₁] a pour abscisse ('+fmt(E[0],0)+' + '+par(F[0])+') ÷ 2 = '+fmt(Mm[0],0)+' et pour ordonnée 0 : c’est K₁'+P2([Mm[0],0])+'. On illustre la propriété : le projeté du milieu d’un segment est le milieu du projeté de ce segment.',
      ['Identifier les coordonnées de E₁ et F₁.','Identifier la conservation du milieu par projection.'],
      ['Calculer le milieu de [E₁F₁] et comparer avec K₁.'],
      ['Calculer le milieu de [E₁F₁].','Comparer avec K₁.','Énoncer la propriété.'])];
    return {parts:[{intro:intro,cons:p1,fig:{type:'rep',pts:[{n:'R',x:A[0],y:A[1]},{n:'S',x:B[0],y:B[1]},{n:'T',x:C[0],y:C[1]}],edges:[[0,1]]}},{intro:i2,cons:p2}],_g:{A:A,B:B,C:C,v:v,C1:C1,E:E,F:F,Mm:Mm}}; }

  var reg=function(id,themes,label,w1,build){ MOD['4e-'+id]={cls:'4e',theme:themes[0],themes:themes,label:label,w1:w1,build:build}; };
  var T=function(s){ return '4e — '+s; };
  reg('CA',[T('Angles au centre & cordes'),T('Polygones réguliers')],'Angles au centre, cordes et polygones réguliers',1,gCA);
  reg('DE',[T('Distance & équidistance'),T('Droites remarquables du triangle')],'Distances et droites remarquables du triangle',1,gDE);
  reg('ND',[T('Nombres décimaux'),T('Puissances')],'Puissances de 10 et puissances',1,gND);
  reg('RQ',[T('Nombres rationnels')],'Nombres rationnels',1,gRQ);
  reg('EA',[T('Expressions algébriques')],'Expressions algébriques',1,gEA);
  reg('SB',[T('Sphère & boule'),T('Plans & droites de l\'espace')],'Sphère, boule, plans et droites de l’espace',2,gSB);
  reg('SC',[T('Symétrie centrale'),T('Symétrie orthogonale')],'Symétries centrale et orthogonale',1,gSO);
  reg('TV',[T('Translation & vecteurs'),T('Projection & repérage')],'Translation, vecteurs, projection et repérage',1,gTV);
})(typeof globalThis!=='undefined'?globalThis:this);
