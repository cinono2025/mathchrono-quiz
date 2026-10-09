/* ===== MQ_SOM : modules sommatifs complémentaires — 5e (calculatrice non autorisée par défaut) ===== */
(function(G){
  'use strict';
  var M=G.MQ_SOM_MOD, MOD=M.MOD, fmt=M.fmt, ri=M.ri, pick=M.pick, gcd=M.gcd, H=M.hA;
  var MN=H.MN, par=H.par, fr=H.fr, K=H.K, who=H.who, Who=H.Who;
  var SP='⁰¹²³⁴⁵⁶⁷⁸⁹'; function sup(n){ return String(n).split('').map(function(c){ return SP[+c]; }).join(''); }
  function pw(a,n){ return Math.pow(a,n); }
  function f2(v){ return fmt(v,2); }

  /* ================= Puissances (entiers naturels, fractions, décimaux relatifs) ================= */
  function gPW(x){
    var r=x.rnd, b=pick(r,[2,3]), n=b===2?ri(r,4,6):ri(r,2,4), m=pick(r,[2,3]), e=pick(r,[3,4,5]), c=pick(r,[2,5]), q=c===2?5:2, k=ri(r,2,3);
    var intro='Dans un jeu de calcul, '+who(x)+' doit calculer plusieurs puissances, sans calculatrice.';
    var p1=[K('Calcule '+b+sup(n)+', 10'+sup(e)+' et 1'+sup(7)+'. Rappelle ce que signifie '+b+sup(n)+'.',
      b+sup(n)+' est le produit de '+n+' facteurs égaux à '+b+' : '+Array(n).fill(b).join(' × ')+' = '+pw(b,n)+'. 10'+sup(e)+' = '+fmt(pw(10,e),0)+' (1 suivi de '+e+' zéros). 1'+sup(7)+' = 1 × 1 × 1 × 1 × 1 × 1 × 1 = 1.',
      ['Identifier la définition de aⁿ : produit de n facteurs égaux à a.','Identifier les cas particuliers 10ⁿ et 1ⁿ.'],
      ['Écrire chaque puissance comme un produit de facteurs égaux.'],
      ['Calculer '+b+sup(n)+' = '+pw(b,n)+'.','Calculer 10'+sup(e)+' = '+fmt(pw(10,e),0)+'.','Calculer 1'+sup(7)+' = 1.']),
     K('Écris '+b+sup(m)+' × '+b+sup(n)+' sous la forme d’une seule puissance de '+b+', puis calcule ('+c+' × '+q+')'+sup(k)+' de deux façons.',
      b+sup(m)+' × '+b+sup(n)+' = '+b+'^('+m+' + '+n+') = '+b+sup(m+n)+' = '+fmt(pw(b,m+n),0)+'. Première façon : ('+c+' × '+q+')'+sup(k)+' = 10'+sup(k)+' = '+fmt(pw(10,k),0)+'. Seconde façon : ('+c+' × '+q+')'+sup(k)+' = '+c+sup(k)+' × '+q+sup(k)+' = '+pw(c,k)+' × '+pw(q,k)+' = '+fmt(pw(10,k),0)+'.',
      ['Identifier la propriété aⁿ × aᵐ = a^(n+m).','Identifier la propriété (a × b)ⁿ = aⁿ × bⁿ.'],
      ['Additionner les exposants ; calculer le produit de deux façons.'],
      ['Écrire '+b+sup(m+n)+' = '+fmt(pw(b,m+n),0)+'.','Calculer 10'+sup(k)+'.','Vérifier avec '+c+sup(k)+' × '+q+sup(k)+'.'])];
    var fq=pick(r,[[2,3],[3,4],[1,2],[3,5],[2,5]]), fe=pick(r,[2,3]), d=pick(r,[2,3,4]), de=pick(r,[3,4]), dec=pick(r,[[25,10,'2,5'],[15,10,'1,5'],[12,10,'1,2'],[3,10,'0,3']]);
    var sg=pw(-d,de);
    var i2='On étudie maintenant les puissances de fractions et de nombres décimaux relatifs.';
    var p2=[K('Calcule ('+fq[0]+'/'+fq[1]+')'+sup(fe)+' et ('+MN+d+')'+sup(de)+'.',
      '('+fq[0]+'/'+fq[1]+')'+sup(fe)+' = '+fq[0]+sup(fe)+'/'+fq[1]+sup(fe)+' = '+pw(fq[0],fe)+'/'+pw(fq[1],fe)+'. ('+MN+d+')'+sup(de)+' = '+Array(de).fill('('+MN+d+')').join(' × ')+' = '+fmt(sg,0)+' : l’exposant '+de+' est '+(de%2?'impair, donc le résultat est négatif':'pair, donc le résultat est positif')+'.',
      ['Identifier la propriété (a/b)ⁿ = aⁿ/bⁿ.','Identifier la règle des signes pour un produit de facteurs négatifs.'],
      ['Élever le numérateur et le dénominateur à la puissance ; compter les facteurs négatifs.'],
      ['Calculer ('+fq[0]+'/'+fq[1]+')'+sup(fe)+' = '+pw(fq[0],fe)+'/'+pw(fq[1],fe)+'.','Déterminer le signe de ('+MN+d+')'+sup(de)+'.','Calculer ('+MN+d+')'+sup(de)+' = '+fmt(sg,0)+'.']),
     K('Une planche carrée a un côté de '+dec[2]+' m. Calcule son aire en m², puis compare ('+MN+dec[2]+')² et '+MN+dec[2]+'².',
      'L’aire du carré est ('+dec[2]+')² = '+dec[2]+' × '+dec[2]+' = '+f2(dec[0]*dec[0]/100)+' m². ('+MN+dec[2]+')² = ('+MN+dec[2]+') × ('+MN+dec[2]+') = '+f2(dec[0]*dec[0]/100)+' (positif), alors que '+MN+dec[2]+'² = '+MN+'('+dec[2]+' × '+dec[2]+') = '+MN+f2(dec[0]*dec[0]/100)+' (négatif) : ce ne sont pas les mêmes nombres.',
      ['Identifier la formule de l’aire du carré (côté²).','Identifier la différence entre (−a)² et −a².'],
      ['Calculer le produit de deux décimaux ; appliquer la règle des signes.'],
      ['Calculer '+dec[2]+' × '+dec[2]+' = '+f2(dec[0]*dec[0]/100)+'.','Calculer ('+MN+dec[2]+')².','Calculer '+MN+dec[2]+'² et comparer.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{b:b,n:n,m:m,e:e,c:c,q:q,k:k,fq:fq,fe:fe,d:d,de:de,dec:dec}}; }

  /* ================= Distance, médiatrice & cercle circonscrit ================= */
  function gDM(x){
    var r=x.rnd, T=[], it;
    var t1=[ri(r,3,6),ri(r,4,7)]; t1.push(t1[0]+t1[1]+ri(r,1,3)); /* impossible */
    var t2=[ri(r,4,7),ri(r,5,8)]; t2.push(ri(r,Math.abs(t2[0]-t2[1])+1,t2[0]+t2[1]-1)); /* possible */
    var a=ri(r,2,6), b=ri(r,3,7), ab=a, bc=b, ac=a+b; /* alignés */
    var intro='Pour délimiter des parcelles triangulaires, '+who(x)+' propose deux triplets de longueurs (en m) : (a) '+t1.join(' ; ')+' ; (b) '+t2.join(' ; ')+'. On place aussi trois piquets A, B, C avec AB = '+ab+' m, BC = '+bc+' m et AC = '+ac+' m.';
    var p1=[K('Peut-on construire un triangle avec chacun des triplets (a) et (b) ? Justifie à l’aide de l’inégalité triangulaire.',
      '(a) Le plus grand côté mesure '+t1[2]+' et '+t1[0]+' + '+t1[1]+' = '+(t1[0]+t1[1])+' < '+t1[2]+' : on ne peut pas construire de triangle. (b) Chaque longueur est inférieure à la somme des deux autres : '+t2[2]+' < '+t2[0]+' + '+t2[1]+' = '+(t2[0]+t2[1])+', '+t2[0]+' < '+t2[1]+' + '+t2[2]+' = '+(t2[1]+t2[2])+' et '+t2[1]+' < '+t2[0]+' + '+t2[2]+' = '+(t2[0]+t2[2])+' : on peut construire un triangle.',
      ['Identifier l’inégalité triangulaire.','Identifier le plus grand côté de chaque triplet.'],
      ['Comparer chaque longueur à la somme des deux autres.'],
      ['Tester le triplet (a).','Tester le triplet (b).','Conclure pour chacun.']),
     K('Les piquets A, B et C forment-ils un triangle ? Justifie et précise la position de B.',
      'AB + BC = '+ab+' + '+bc+' = '+ac+' = AC. Comme AB + BC = AC, le point B appartient au segment [AC] : les points A, B et C sont alignés et ne forment pas de triangle.',
      ['Identifier les trois distances AB, BC et AC.','Identifier la propriété : AM + MB = AB ⟺ M ∈ [AB].'],
      ['Comparer AB + BC à AC.'],
      ['Calculer AB + BC = '+ac+'.','Comparer avec AC.','Conclure : alignés, B ∈ [AC].'])];
    var Tr=pick(r,[[3,4,5],[6,8,10],[5,12,13],[9,12,15]]), rr=Tr[2]/2, pm=ri(r,3,9);
    var i2='Le triangle EFG est rectangle en E, avec EF = '+Tr[0]+' cm, EG = '+Tr[1]+' cm et FG = '+Tr[2]+' cm. On note (Γ) son cercle circonscrit. Un point P de la médiatrice de [FG] vérifie PF = '+pm+' cm.';
    var p2=[K('Où se trouve le centre O du cercle circonscrit (Γ) ? Calcule son rayon.',
      'Le centre du cercle circonscrit est le point de concours des médiatrices. Pour un triangle rectangle, c’est le milieu de l’hypoténuse : O est le milieu de [FG] et l’hypoténuse est un diamètre de (Γ). Rayon : FG ÷ 2 = '+Tr[2]+' ÷ 2 = '+fmt(rr,1)+' cm.',
      ['Identifier l’hypoténuse [FG] du triangle rectangle.','Identifier la propriété du cercle circonscrit à un triangle rectangle.'],
      ['Traduire : rayon = hypoténuse ÷ 2.'],
      ['Nommer le centre : milieu de [FG].','Calculer FG ÷ 2.','Conclure : rayon '+fmt(rr,1)+' cm.']),
     K('Calcule PG. Le point E est-il sur le cercle (Γ) ? Justifie.',
      'Tout point de la médiatrice d’un segment est équidistant des extrémités : PG = PF = '+pm+' cm. Comme O est le milieu de l’hypoténuse, OE = OF = OG = '+fmt(rr,1)+' cm : E est sur (Γ) (le cercle circonscrit passe par les trois sommets).',
      ['Identifier la propriété des points de la médiatrice.','Identifier que (Γ) passe par les trois sommets du triangle.'],
      ['Appliquer la propriété de la médiatrice ; utiliser le rayon.'],
      ['Donner PG = '+pm+' cm.','Rappeler OE = '+fmt(rr,1)+' cm.','Conclure : E ∈ (Γ).'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{t1:t1,t2:t2,ab:ab,bc:bc,ac:ac,Tr:Tr,rr:rr,pm:pm}}; }

  /* ================= Parallélogrammes particuliers, trapèze & hexagone ================= */
  function gPQ(x){
    var r=x.rnd, kind=pick(r,['rect','los','car']), d=ri(r,4,12), c=ri(r,3,9), L=ri(r,5,12), l=ri(r,2,L-1);
    var desc={rect:'les diagonales ont la même longueur ('+d+' cm)',los:'les diagonales sont perpendiculaires',car:'les diagonales ont la même longueur ('+d+' cm) et sont perpendiculaires'}[kind];
    var nat={rect:'un rectangle',los:'un losange',car:'un carré'}[kind];
    var just={rect:'Un parallélogramme dont les diagonales ont la même longueur est un rectangle.',los:'Un parallélogramme dont les diagonales sont perpendiculaires est un losange.',car:'Ses diagonales ayant la même longueur, c’est un rectangle ; étant perpendiculaires, c’est aussi un losange. Un rectangle qui est aussi un losange est un carré.'}[kind];
    var intro='MNPQ est un parallélogramme dont '+desc+'. Par ailleurs, ABCD est un rectangle de longueur '+L+' cm et de largeur '+l+' cm.';
    var p1=[K('Quelle est la nature du quadrilatère MNPQ ? Justifie.',
      just+' MNPQ est donc '+nat+'.',
      ['Identifier que MNPQ est un parallélogramme.','Identifier les propriétés caractéristiques du rectangle, du losange et du carré.'],
      ['Appliquer la propriété correspondant aux diagonales.'],
      ['Rappeler les données sur les diagonales.','Appliquer la propriété.','Conclure : '+nat+'.']),
     K('Calcule le périmètre et l’aire du rectangle ABCD. Combien a-t-il d’axes de symétrie ?',
      'Périmètre : 2 × ('+L+' + '+l+') = 2 × '+(L+l)+' = '+(2*(L+l))+' cm. Aire : '+L+' × '+l+' = '+(L*l)+' cm². Un rectangle (non carré) a deux axes de symétrie : les médiatrices de ses côtés.',
      ['Identifier les formules du périmètre et de l’aire d’un rectangle.','Identifier les axes de symétrie du rectangle.'],
      ['Appliquer les formules.'],
      ['Calculer le périmètre : '+(2*(L+l))+' cm.','Calculer l’aire : '+(L*l)+' cm².','Donner les deux axes de symétrie.'])];
    var B=ri(r,6,14), b=ri(r,2,B-2), h=ri(r,2,8); if(((B+b)*h)%2) h++; var At=(B+b)*h/2, R=ri(r,2,9);
    var i2='Une parcelle a la forme d’un trapèze de bases '+B+' m et '+b+' m et de hauteur '+h+' m. Un massif de fleurs a la forme d’un hexagone régulier inscrit dans un cercle de rayon '+R+' m.';
    var p2=[K('Calcule l’aire de la parcelle en forme de trapèze.',
      'L’aire d’un trapèze de bases B et b et de hauteur h est (B + b) × h ÷ 2 : ('+B+' + '+b+') × '+h+' ÷ 2 = '+(B+b)+' × '+h+' ÷ 2 = '+At+' m².',
      ['Identifier les bases et la hauteur du trapèze.','Identifier la formule de l’aire du trapèze.'],
      ['Traduire : A = (B + b) × h ÷ 2.'],
      ['Calculer B + b = '+(B+b)+'.','Multiplier par la hauteur puis diviser par 2.','Conclure : '+At+' m².']),
     K('Combien l’hexagone a-t-il de côtés ? Quelle est la longueur de chaque côté ? Calcule le périmètre du massif.',
      'Un hexagone a six côtés. Dans un hexagone régulier inscrit dans un cercle, chaque côté a la même longueur que le rayon : '+R+' m. Périmètre : 6 × '+R+' = '+(6*R)+' m.',
      ['Identifier qu’un hexagone a six côtés.','Identifier la propriété : côté de l’hexagone régulier = rayon du cercle.'],
      ['Traduire : périmètre = 6 × côté.'],
      ['Donner 6 côtés.','Donner le côté : '+R+' m.','Calculer le périmètre : '+(6*R)+' m.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{kind:kind,L:L,l:l,B:B,b:b,h:h,At:At,R:R}}; }

  /* ================= Symétries axiale et centrale ================= */
  function gSY(x){
    var r=x.rnd, R=ri(r,2,6), d=ri(r,R+1,R+6), ab=ri(r,3,9), ang=ri(r,25,120);
    var intro='La droite (D) est un axe de symétrie. Le cercle (C) a pour centre O et pour rayon '+R+' cm ; la distance de O à (D) est '+d+' cm. On note (C′) le symétrique de (C) par rapport à (D). Le triangle A′B′C′ est le symétrique du triangle ABC, avec AB = '+ab+' cm et AB̂C = '+ang+'°.';
    var p1=[K('Décris le cercle (C′) : rayon et position de son centre O′. Calcule la distance OO′.',
      'Le symétrique d’un cercle par rapport à une droite est un cercle de même rayon dont le centre est le symétrique du centre : (C′) a pour rayon '+R+' cm et pour centre O′, symétrique de O par rapport à (D). (D) est la médiatrice de [OO′], donc OO′ = 2 × '+d+' = '+(2*d)+' cm.',
      ['Identifier l’image d’un cercle par une symétrie axiale.','Identifier que (D) est la médiatrice de [OO′].'],
      ['Appliquer la conservation des longueurs et la propriété de la médiatrice.'],
      ['Donner le rayon '+R+' cm.','Situer O′.','Calculer OO′ = '+(2*d)+' cm.']),
     K('Donne A′B′ et la mesure de l’angle A′B̂′C′. Que peux-tu dire des droites (A′B′) et (B′C′) si (AB) ⊥ (BC) ?',
      'La symétrie axiale conserve les longueurs et les angles : A′B′ = AB = '+ab+' cm et A′B̂′C′ = AB̂C = '+ang+'°. Les symétriques de deux droites perpendiculaires sont deux droites perpendiculaires : si (AB) ⊥ (BC), alors (A′B′) ⊥ (B′C′).',
      ['Identifier les propriétés de conservation de la symétrie axiale.','Identifier l’image de deux droites perpendiculaires.'],
      ['Appliquer les propriétés de conservation.'],
      ['Donner A′B′ = '+ab+' cm.','Donner A′B̂′C′ = '+ang+'°.','Conclure sur la perpendicularité.'])];
    var oa=ri(r,2,7), cd=ri(r,4,10);
    var i2='EFGH est un parallélogramme de centre K, avec KE = '+oa+' cm et EF = '+cd+' cm.';
    var p2=[K('Quel est le symétrique du point E par rapport à K ? Calcule EG.',
      'Le centre de symétrie d’un parallélogramme est le point d’intersection de ses diagonales : K est le milieu de [EG] et de [FH]. Le symétrique de E par rapport à K est donc G, et EG = 2 × KE = 2 × '+oa+' = '+(2*oa)+' cm.',
      ['Identifier le centre de symétrie d’un parallélogramme.','Identifier que K est le milieu de [EG].'],
      ['Traduire : EG = 2 × KE.'],
      ['Nommer le symétrique : G.','Écrire EG = 2 × KE.','Calculer EG = '+(2*oa)+' cm.']),
     K('Quel est le symétrique du segment [EF] par rapport à K ? Déduis-en GH et la position des droites (EF) et (GH).',
      'Le symétrique de E est G et celui de F est H : le symétrique de [EF] est [GH]. La symétrie centrale conserve les longueurs : GH = EF = '+cd+' cm. Deux droites symétriques par rapport à un point sont parallèles : (EF) // (GH).',
      ['Identifier les symétriques de E et de F.','Identifier les propriétés de la symétrie centrale.'],
      ['Appliquer la conservation des longueurs et le parallélisme.'],
      ['Donner le segment symétrique [GH].','Donner GH = '+cd+' cm.','Conclure : (EF) // (GH).'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{R:R,d:d,ab:ab,ang:ang,oa:oa,cd:cd}}; }

  /* ================= Glissement ================= */
  function gGL(x){
    var r=x.rnd, L=ri(r,3,9), am=ri(r,2,6), mb=ri(r,2,6), an=ri(r,30,140);
    var intro='Un glissement transforme le point A en A′, avec AA′ = '+L+' cm. Les points A, M et B sont alignés dans cet ordre, avec AM = '+am+' cm et MB = '+mb+' cm ; on note M′ et B′ les correspondants de M et B.';
    var p1=[K('Que faut-il connaître pour construire le correspondant d’un point par ce glissement ? Calcule MM′ et BB′.',
      'Un glissement est défini par une direction, un sens et une longueur (ici la direction de (AA′), le sens de A vers A′ et la longueur '+L+' cm). Tous les points glissent de la même façon : MM′ = BB′ = AA′ = '+L+' cm.',
      ['Identifier les trois éléments qui définissent un glissement.','Identifier la longueur AA′.'],
      ['Appliquer la définition du glissement à M et à B.'],
      ['Nommer direction, sens et longueur.','Donner MM′ = '+L+' cm.','Donner BB′ = '+L+' cm.']),
     K('Les points A′, M′ et B′ sont-ils alignés ? Calcule A′B′.',
      'Par un glissement, des points alignés ont des correspondants alignés : A′, M′ et B′ sont alignés, dans le même ordre. Le glissement conserve les longueurs : A′M′ = '+am+' cm et M′B′ = '+mb+' cm, donc A′B′ = A′M′ + M′B′ = '+am+' + '+mb+' = '+(am+mb)+' cm (= AB).',
      ['Identifier la conservation de l’alignement.','Identifier la conservation des longueurs.'],
      ['Appliquer les propriétés, puis additionner les longueurs.'],
      ['Conclure à l’alignement.','Donner A′M′ et M′B′.','Calculer A′B′ = '+(am+mb)+' cm.'])];
    var bc=ri(r,4,10)*2;
    var i2='Par ce même glissement, le triangle CDE a pour correspondant C′D′E′. On sait que CD̂E = '+an+'° et que [DE] mesure '+bc+' cm ; I est le milieu de [DE].';
    var p2=[K('Quelle est la mesure de l’angle C′D̂′E′ ? Justifie.',
      'Le glissement conserve les mesures d’angles : C′D̂′E′ = CD̂E = '+an+'°.',
      ['Identifier l’angle correspondant.','Identifier la conservation des angles.'],
      ['Appliquer la propriété.'],
      ['Énoncer la propriété.','Associer les angles.','Conclure : '+an+'°.']),
     K('Où se trouve le correspondant I′ de I ? Calcule D′I′.',
      'Par un glissement, le correspondant du milieu d’un segment est le milieu du segment correspondant : I′ est le milieu de [D′E′]. Comme D′E′ = DE = '+bc+' cm, D′I′ = '+bc+' ÷ 2 = '+(bc/2)+' cm.',
      ['Identifier la conservation du milieu.','Identifier la longueur DE.'],
      ['Appliquer la conservation du milieu et des longueurs.'],
      ['Situer I′ au milieu de [D′E′].','Donner D′E′ = '+bc+' cm.','Calculer D′I′ = '+(bc/2)+' cm.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{L:L,am:am,mb:mb,an:an,bc:bc}}; }

  var reg=function(id,themes,label,w1,build){ MOD['5e-'+id]={cls:'5e',theme:themes[0],themes:themes,label:label,w1:w1,build:build}; };
  var T=function(s){ return '5e — '+s; };
  reg('PW',[T('Puissances d\'entiers naturels'),T('Puissance d\'une fraction ou d\'un décimal relatif')],'Puissances',1,gPW);
  reg('DM',[T('Distance & médiatrice'),T('Cercle & cercle circonscrit')],'Distance, médiatrice et cercle circonscrit',1,gDM);
  reg('PQ',[T('Parallélogrammes particuliers'),T('Trapèze & hexagone')],'Parallélogrammes particuliers, trapèze et hexagone',2,gPQ);
  reg('SY',[T('Figures symétriques par rapport à une droite'),T('Figures symétriques par rapport à un point')],'Symétries axiale et centrale',1,gSY);
  reg('GL',[T('Glissement')],'Glissement',1,gGL);
})(typeof globalThis!=='undefined'?globalThis:this);
