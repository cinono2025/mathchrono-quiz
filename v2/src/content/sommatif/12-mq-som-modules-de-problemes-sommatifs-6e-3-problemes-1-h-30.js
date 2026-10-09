/* ===== MQ_SOM : modules de problèmes sommatifs — 6e (3 problèmes, 1 h 30, calculatrice non autorisée par défaut) ===== */
(function(G){
  'use strict';
  var M=G.MQ_SOM_MOD, MOD=M.MOD, fmt=M.fmt, ri=M.ri, pick=M.pick, gcd=M.gcd, money=M.money, H=M.hA;
  var MN=H.MN, fr=H.fr, who=H.who, Who=H.Who, K=H.K;
  function f1(v){ return fmt(v,2); }

  /* ================= Cube & pavé droit ================= */
  var LPV={jardin:'une caisse de rangement des outils',sport:'une malle pour le matériel sportif',coop:'un carton d’emballage'};
  function gPV(x){
    var r=x.rnd, L=ri(r,6,12), l=ri(r,3,L-1), h=ri(r,2,8), fil=4*(L+l+h), A=2*(L*l+L*h+l*h);
    var intro=Who(x)+' fabrique '+LPV[x.W.id]+' en forme de pavé droit de longueur '+L+' cm, de largeur '+l+' cm et de hauteur '+h+' cm.';
    var p1=[K('Combien ce pavé droit a-t-il de faces, d’arêtes et de sommets ? Quelle longueur de fil de fer faut-il pour fabriquer toutes ses arêtes ?',
      'Un pavé droit a 6 faces, 12 arêtes et 8 sommets. Ses 12 arêtes sont formées de 4 longueurs, 4 largeurs et 4 hauteurs : 4 × ('+L+' + '+l+' + '+h+') = 4 × '+(L+l+h)+' = '+fil+' cm de fil de fer.',
      ['Identifier les éléments d’un pavé droit (faces, arêtes, sommets).','Identifier que les arêtes vont par groupes de 4 de même longueur.'],
      ['Traduire : longueur totale = 4 × (L + l + h).'],
      ['Donner 6 faces, 12 arêtes, 8 sommets.','Calculer '+L+' + '+l+' + '+h+' = '+(L+l+h)+'.','Calculer 4 × '+(L+l+h)+' = '+fil+' cm.']),
     K('Calcule l’aire totale des faces de ce pavé droit (aire de son patron).',
      'Les faces opposées sont superposables : 2 faces de '+L+' cm sur '+l+' cm, 2 faces de '+L+' cm sur '+h+' cm et 2 faces de '+l+' cm sur '+h+' cm. Aire totale : 2 × '+(L*l)+' + 2 × '+(L*h)+' + 2 × '+(l*h)+' = '+(2*L*l)+' + '+(2*L*h)+' + '+(2*l*h)+' = '+A+' cm².',
      ['Identifier que le patron est formé de 6 rectangles.','Identifier que les faces opposées sont superposables.'],
      ['Calculer l’aire de chaque type de face (longueur × largeur).'],
      ['Calculer les trois aires de faces.','Additionner les six faces.','Conclure : '+A+' cm².'])];
    var a=ri(r,2,5), p=ri(r,2,5), q=ri(r,2,4), s=ri(r,1,3), V=a*p*a*q*a*s, n=p*q*s;
    var i2='Pour ranger de petits cubes d’arête '+a+' cm, on utilise une boîte en forme de pavé droit de '+(a*p)+' cm de long, '+(a*q)+' cm de large et '+(a*s)+' cm de haut.';
    var p2=[K('Calcule le volume de la boîte.',
      'Volume d’un pavé droit = longueur × largeur × hauteur : '+(a*p)+' × '+(a*q)+' × '+(a*s)+' = '+V+' cm³.',
      ['Identifier les trois dimensions de la boîte.','Identifier la formule du volume d’un pavé droit.'],
      ['Traduire : V = L × l × h.'],
      ['Calculer '+(a*p)+' × '+(a*q)+' = '+(a*p*a*q)+'.','Multiplier par '+(a*s)+'.','Conclure : '+V+' cm³.']),
     K('Combien de petits cubes peut-on ranger exactement dans la boîte ? Vérifie avec les volumes.',
      'Dans la longueur : '+(a*p)+' ÷ '+a+' = '+p+' cubes ; dans la largeur : '+(a*q)+' ÷ '+a+' = '+q+' cubes ; dans la hauteur : '+(a*s)+' ÷ '+a+' = '+s+' cube'+(s>1?'s':'')+'. Nombre de cubes : '+p+' × '+q+' × '+s+' = '+n+'. Vérification : un petit cube a pour volume '+a+' × '+a+' × '+a+' = '+(a*a*a)+' cm³ et '+V+' ÷ '+(a*a*a)+' = '+n+'.',
      ['Identifier l’arête des petits cubes.','Identifier qu’on range les cubes en rangées.'],
      ['Compter les cubes dans chaque dimension, puis multiplier.'],
      ['Calculer le nombre de cubes par dimension.','Calculer '+p+' × '+q+' × '+s+' = '+n+'.','Vérifier avec les volumes.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{L:L,l:l,h:h,fil:fil,A:A,a:a,p:p,q:q,s:s,V:V,n:n}}; }

  /* ================= Cône de révolution & sphère ================= */
  var LCO={jardin:'un chapeau de paille',sport:'un plot d’entraînement',coop:'un cornet en carton'};
  function gCO(x){
    var r=x.rnd, ra=ri(r,2,9), g=ra+ri(r,3,8), per=2*3.14*ra;
    var intro=Who(x)+' fabrique '+LCO[x.W.id]+' en forme de cône de révolution de sommet S. Sa base est un disque de centre O et de rayon OA = '+ra+' cm ; la longueur SA mesure '+g+' cm.';
    var p1=[K('Nomme la hauteur du cône, une génératrice et l’axe du cône. Comment appelle-t-on la longueur SA ?',
      'La hauteur du cône est le segment [SO] ; le segment [SA] est une génératrice ; la droite (SO) est l’axe du cône. La longueur d’une génératrice, ici SA = '+g+' cm, s’appelle l’apothème du cône.',
      ['Identifier les éléments d’un cône de révolution (sommet, base, hauteur, axe).','Identifier qu’une génératrice joint le sommet à un point du cercle de base.'],
      ['Associer chaque élément à son nom.'],
      ['Nommer la hauteur [SO].','Nommer une génératrice [SA] et l’axe (SO).','Nommer l’apothème.']),
     K('Pour le patron, on découpe un disque de rayon '+ra+' cm et un secteur circulaire. Quel est le rayon du secteur ? Calcule la longueur de l’arc du secteur (prendre 3,14 pour π).',
      'Le secteur circulaire a pour rayon l’apothème : '+g+' cm. Son arc doit s’enrouler exactement sur le cercle de base, donc sa longueur est le périmètre de ce cercle : 2 × 3,14 × '+ra+' = '+f1(per)+' cm.',
      ['Identifier les deux pièces du patron d’un cône (disque et secteur).','Identifier que l’arc du secteur a la longueur du cercle de base.'],
      ['Traduire : longueur de l’arc = 2 × π × rayon de la base.'],
      ['Donner le rayon du secteur : '+g+' cm.','Calculer 2 × 3,14 × '+ra+'.','Conclure : '+f1(per)+' cm.'])];
    var d=pick(r,[20,22,24,30,40]), la=ri(r,5,40), lb=ri(r,5,40), south=r()<0.5;
    var i2='Un ballon a la forme d’une sphère de diamètre '+d+' cm. Sur un globe terrestre, la ville A se trouve à '+la+'° de latitude nord et la ville B, située sur le même méridien, à '+lb+'° de latitude '+(south?'sud':'nord')+'.';
    var p2=[K('Calcule le rayon du ballon et la longueur d’un de ses grands cercles (prendre 3,14 pour π).',
      'Le rayon est la moitié du diamètre : '+d+' ÷ 2 = '+(d/2)+' cm. Un grand cercle a le même rayon que la sphère ; sa longueur est π × diamètre : 3,14 × '+d+' = '+f1(3.14*d)+' cm.',
      ['Identifier le lien entre rayon et diamètre.','Identifier qu’un grand cercle a le même centre et le même rayon que la sphère.'],
      ['Traduire : longueur du cercle = π × diamètre.'],
      ['Calculer le rayon : '+(d/2)+' cm.','Calculer 3,14 × '+d+'.','Conclure : '+f1(3.14*d)+' cm.']),
     K('Dans quel hémisphère se trouve chacune des villes A et B ? Calcule l’écart de latitude entre A et B.',
      'La latitude se mesure à partir de l’équateur : A ('+la+'° N) est dans l’hémisphère nord ; B ('+lb+'° '+(south?'S':'N')+') est dans l’hémisphère '+(south?'sud':'nord')+'. '+(south?'Les deux villes sont de part et d’autre de l’équateur : l’écart de latitude est '+la+'° + '+lb+'° = '+(la+lb)+'°.':'Les deux villes sont du même côté de l’équateur : l’écart de latitude est '+Math.max(la,lb)+'° '+MN+' '+Math.min(la,lb)+'° = '+Math.abs(la-lb)+'°.'),
      ['Identifier que la latitude se mesure à partir de l’équateur, vers le nord ou vers le sud.','Identifier que les deux villes sont sur le même méridien.'],
      ['Additionner ou soustraire les latitudes selon la position des villes.'],
      ['Donner l’hémisphère de A.','Donner l’hémisphère de B.','Calculer l’écart de latitude.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{ra:ra,g:g,per:per,d:d,la:la,lb:lb,south:south}}; }

  /* ================= Droites du plan, segments, milieu & médiatrice ================= */
  function gDR(x){
    var r=x.rnd, am=ri(r,3,9)+pick(r,[0,0.5]), mb=ri(r,2,8)+pick(r,[0,0.5]); if((am+mb)%1!==0) mb+=0.5; var ab=am+mb, ai=ab/2, im=Math.abs(ai-am);
    var intro='Sur le plan d’un chemin rectiligne, les points A, M et B sont alignés dans cet ordre, avec AM = '+fmt(am,1)+' cm et MB = '+fmt(mb,1)+' cm. On place le point I, milieu du segment [AB].';
    var p1=[K('Calcule la longueur AB.',
      'Le point M appartient au segment [AB], donc AM + MB = AB : AB = '+fmt(am,1)+' + '+fmt(mb,1)+' = '+fmt(ab,1)+' cm.',
      ['Identifier que M est sur le segment [AB].','Identifier la propriété AM + MB = AB.'],
      ['Traduire par une addition de longueurs.'],
      ['Écrire AB = AM + MB.','Calculer '+fmt(am,1)+' + '+fmt(mb,1)+'.','Conclure : AB = '+fmt(ab,1)+' cm.']),
     K('Calcule AI, puis la distance IM entre les points I et M.',
      'I est le milieu de [AB], donc AI = IB = AB ÷ 2 = '+fmt(ab,1)+' ÷ 2 = '+fmt(ai,2)+' cm. '+(im===0?'Comme AI = AM, les points I et M sont confondus : IM = 0 cm.':'Les points I et M sont sur [AB] : IM = '+fmt(Math.max(ai,am),2)+' '+MN+' '+fmt(Math.min(ai,am),2)+' = '+fmt(im,2)+' cm.'),
      ['Identifier la définition du milieu : AI = IB et I ∈ [AB].','Identifier les positions de I et M sur [AB].'],
      ['Diviser AB par 2, puis comparer AI et AM.'],
      ['Calculer AI = '+fmt(ai,2)+' cm.','Comparer AI et AM.','Calculer IM = '+fmt(im,2)+' cm.'])];
    var pa=ri(r,4,12)+pick(r,[0,0.5]);
    var i2='On trace la droite (Δ), médiatrice du segment [AB]. Un point P de (Δ) est tel que PA = '+fmt(pa,1)+' cm. On trace aussi la droite (D) passant par P et perpendiculaire à (Δ).';
    var p2=[K('Calcule PB. Justifie ta réponse.',
      'Tout point de la médiatrice d’un segment est à égale distance des extrémités de ce segment. Comme P est sur (Δ), médiatrice de [AB], PB = PA = '+fmt(pa,1)+' cm.',
      ['Identifier que P est un point de la médiatrice de [AB].','Identifier la propriété des points de la médiatrice.'],
      ['Traduire par l’égalité PA = PB.'],
      ['Rappeler la propriété.','Appliquer à P.','Conclure : PB = '+fmt(pa,1)+' cm.']),
     K('Que peux-tu dire des droites (D) et (AB) ? Justifie.',
      'La médiatrice (Δ) est perpendiculaire à la droite (AB). La droite (D) est aussi perpendiculaire à (Δ). Or deux droites perpendiculaires à une même troisième sont parallèles : (D) et (AB) sont parallèles.',
      ['Identifier que (Δ) est perpendiculaire à (AB).','Identifier que (D) est perpendiculaire à (Δ).'],
      ['Utiliser la propriété : deux droites perpendiculaires à une même droite sont parallèles.'],
      ['Rappeler (AB) ⊥ (Δ).','Rappeler (D) ⊥ (Δ).','Conclure : (D) // (AB).'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{am:am,mb:mb,ab:ab,ai:ai,im:im,pa:pa}}; }

  /* ================= Cercle & disque ================= */
  function gCD(x){
    var r=x.rnd, ra=ri(r,3,8), dA=ra-ri(r,1,2), dB=ra, dC=ra+ri(r,1,3), per=2*3.14*ra;
    var dd=M.shuffle(r,[dA,dB,dC]), pts=[['A',dd[0]],['B',dd[1]],['C',dd[2]]];
    var intro='Le cercle (C) a pour centre O et pour rayon '+ra+' cm. On place trois points tels que '+pts.map(function(p){ return 'O'+p[0]+' = '+p[1]+' cm'; }).join(', ')+'.';
    var pos=function(d){ return d<ra?'à l’intérieur du cercle (dans le disque)':(d===ra?'sur le cercle':'à l’extérieur du cercle'); };
    var p1=[K('Quel est le diamètre du cercle (C) ? Précise la position de chacun des points A, B et C par rapport au cercle.',
      'Le diamètre est le double du rayon : 2 × '+ra+' = '+(2*ra)+' cm. '+pts.slice().sort(function(a,b){ return a[0]<b[0]?-1:1; }).map(function(p){ return 'O'+p[0]+' = '+p[1]+' cm '+(p[1]<ra?'<':(p[1]===ra?'=':'>'))+' '+ra+' cm, donc '+p[0]+' est '+pos(p[1]); }).join(' ; ')+'.',
      ['Identifier le lien entre diamètre et rayon.','Identifier qu’un point du cercle est à une distance égale au rayon du centre.'],
      ['Comparer chaque distance au rayon.'],
      ['Calculer le diamètre : '+(2*ra)+' cm.','Comparer OA, OB, OC au rayon.','Conclure pour chaque point.']),
     K('Calcule la longueur du cercle (C) (prendre 3,14 pour π).',
      'La longueur d’un cercle de rayon r est 2 × π × r : 2 × 3,14 × '+ra+' = '+f1(per)+' cm.',
      ['Identifier le rayon '+ra+' cm.','Identifier la formule de la longueur d’un cercle.'],
      ['Traduire : L = 2 × π × r.'],
      ['Remplacer π par 3,14 et r par '+ra+'.','Calculer 2 × 3,14 × '+ra+'.','Conclure : '+f1(per)+' cm.'])];
    var R=pick(r,[10,15,20,25,30]), lap=2*3.14*R, n=pick(r,[3,4,5,6]), dist=n*lap, D=pick(r,[500,800,1000]);
    var i2='La piste circulaire du terrain de l’école a un rayon de '+R+' m. Un élève court '+n+' tours de piste.';
    var p2=[K('Quelle distance parcourt-il en un tour (prendre 3,14 pour π) ?',
      'Un tour correspond à la longueur du cercle de rayon '+R+' m : 2 × 3,14 × '+R+' = '+f1(lap)+' m.',
      ['Identifier qu’un tour de piste est la longueur du cercle.','Identifier le rayon '+R+' m.'],
      ['Traduire : distance d’un tour = 2 × π × r.'],
      ['Calculer 2 × '+R+' = '+(2*R)+'.','Multiplier par 3,14.','Conclure : '+f1(lap)+' m.']),
     K('Quelle distance parcourt-il en '+n+' tours ? A-t-il parcouru plus ou moins de '+fmt(D,0)+' m ?',
      'En '+n+' tours : '+n+' × '+f1(lap)+' = '+f1(dist)+' m. Comme '+f1(dist)+(dist>D?' > ':' < ')+fmt(D,0)+', il a parcouru '+(dist>D?'plus':'moins')+' de '+fmt(D,0)+' m.',
      ['Identifier la distance d’un tour.','Identifier le nombre de tours.'],
      ['Multiplier la distance d’un tour par le nombre de tours, puis comparer.'],
      ['Calculer '+n+' × '+f1(lap)+'.','Comparer à '+fmt(D,0)+' m.','Conclure.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{ra:ra,per:per,R:R,lap:lap,n:n,dist:dist,D:D,pts:pts}}; }

  /* ================= Angles & triangles ================= */
  function nat(a){ return a===0?'nul':(a<90?'aigu':(a===90?'droit':(a<180?'obtus':'plat'))); }
  function gAN(x){
    var r=x.rnd, a=ri(r,15,80), b=ri(r,20,95); if((a+b)%2) b++; var c=a+b, hm=c/2;
    var intro='Sur le plan, deux angles adjacents AÔB et BÔC mesurent AÔB = '+a+'° et BÔC = '+b+'°. On trace la bissectrice [OM) de l’angle AÔC.';
    var p1=[K('Calcule la mesure de l’angle AÔC, puis donne la nature de chacun des angles AÔB, BÔC et AÔC.',
      'Les angles AÔB et BÔC sont adjacents, donc AÔC = AÔB + BÔC = '+a+'° + '+b+'° = '+c+'°. AÔB = '+a+'° : angle '+nat(a)+' ; BÔC = '+b+'° : angle '+nat(b)+' ; AÔC = '+c+'° : angle '+nat(c)+'.',
      ['Identifier que les angles sont adjacents (même sommet, un côté commun).','Identifier les natures d’angles (aigu, droit, obtus, plat).'],
      ['Additionner les mesures des angles adjacents ; comparer chaque mesure à 90° et à 180°.'],
      ['Calculer AÔC = '+c+'°.','Donner la nature de AÔB et BÔC.','Donner la nature de AÔC.']),
     K('Calcule la mesure de l’angle AÔM.',
      '[OM) est la bissectrice de AÔC : elle partage cet angle en deux angles adjacents de même mesure. AÔM = AÔC ÷ 2 = '+c+'° ÷ 2 = '+hm+'°.',
      ['Identifier la définition de la bissectrice.','Identifier la mesure de AÔC.'],
      ['Traduire : AÔM = AÔC ÷ 2.'],
      ['Rappeler AÔC = '+c+'°.','Calculer '+c+' ÷ 2.','Conclure : AÔM = '+hm+'°.'])];
    var s=ri(r,5,12), cand=[]; for(var t=3;t<2*s;t++) if((2*s+t)%3===0&&t!==s) cand.push(t); var bs=pick(r,cand), P=2*s+bs;
    var i2='Le triangle ABC représente une parcelle : AB = AC = '+s+' m et BC = '+bs+' m (voir la figure).';
    var p2=[K('Quelle est la nature du triangle ABC ? Calcule son périmètre.',
      'Le triangle ABC a deux côtés de même longueur (AB = AC = '+s+' m) : il est isocèle en A. Périmètre : AB + AC + BC = '+s+' + '+s+' + '+bs+' = '+P+' m.',
      ['Identifier les longueurs égales AB = AC.','Identifier la définition du triangle isocèle.'],
      ['Traduire : périmètre = somme des longueurs des trois côtés.'],
      ['Donner la nature : isocèle en A.','Additionner les trois côtés.','Conclure : '+P+' m.']),
     K('On veut délimiter une parcelle en forme de triangle équilatéral DEF ayant le même périmètre que ABC. Quelle est la longueur de chacun de ses côtés ?',
      'Un triangle équilatéral a ses trois côtés de même longueur. Chaque côté mesure donc '+P+' ÷ 3 = '+(P/3)+' m.',
      ['Identifier la définition du triangle équilatéral.','Identifier le périmètre à respecter : '+P+' m.'],
      ['Traduire : côté = périmètre ÷ 3.'],
      ['Rappeler le périmètre '+P+' m.','Calculer '+P+' ÷ 3.','Conclure : '+(P/3)+' m.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2,fig:{type:'tri',a:s,b:s,c:bs,unit:'m'}}],_g:{a:a,b:b,c:c,hm:hm,s:s,bs:bs,P:P}}; }

  /* ================= Parallélogramme & quadrilatères ================= */
  function gPA(x){
    var r=x.rnd, a=ri(r,5,12), b=ri(r,3,a-1), p=ri(r,3,8)+pick(r,[0,0.5]), q=ri(r,2,7)+pick(r,[0,0.5]);
    var intro='ABCD est un parallélogramme tel que AB = '+a+' cm et BC = '+b+' cm. Ses diagonales [AC] et [BD] se coupent en O, avec AC = '+fmt(2*p,0)+' cm et BD = '+fmt(2*q,0)+' cm.';
    var p1=[K('Donne les longueurs CD et AD, puis calcule le périmètre du parallélogramme.',
      'Dans un parallélogramme, les côtés opposés ont la même longueur : CD = AB = '+a+' cm et AD = BC = '+b+' cm. Périmètre : '+a+' + '+b+' + '+a+' + '+b+' = '+(2*(a+b))+' cm.',
      ['Identifier que ABCD est un parallélogramme.','Identifier la propriété des côtés opposés.'],
      ['Associer chaque côté à son côté opposé, puis additionner.'],
      ['Donner CD = '+a+' cm.','Donner AD = '+b+' cm.','Calculer le périmètre : '+(2*(a+b))+' cm.']),
     K('Calcule les longueurs OA et OB. Justifie.',
      'Les diagonales d’un parallélogramme se coupent en leur milieu : O est le milieu de [AC] et de [BD]. OA = AC ÷ 2 = '+fmt(2*p,0)+' ÷ 2 = '+fmt(p,1)+' cm et OB = BD ÷ 2 = '+fmt(2*q,0)+' ÷ 2 = '+fmt(q,1)+' cm.',
      ['Identifier la propriété des diagonales d’un parallélogramme.','Identifier les longueurs des diagonales.'],
      ['Traduire : O milieu, donc OA = AC ÷ 2 et OB = BD ÷ 2.'],
      ['Énoncer la propriété.','Calculer OA = '+fmt(p,1)+' cm.','Calculer OB = '+fmt(q,1)+' cm.'])];
    var d=ri(r,6,14), c=ri(r,3,9);
    var i2='Le quadrilatère EFGH a des diagonales [EG] et [FH] qui ont le même milieu et la même longueur ('+d+' cm). Par ailleurs, KLMN est un carré de côté '+c+' cm.';
    var p2=[K('Quelle est la nature du quadrilatère EFGH ? Justifie.',
      'Ses diagonales ont le même milieu : EFGH est un parallélogramme. Un parallélogramme dont les diagonales ont la même longueur est un rectangle : EFGH est un rectangle.',
      ['Identifier les deux propriétés des diagonales de EFGH.','Identifier les propriétés caractéristiques du parallélogramme et du rectangle.'],
      ['Raisonner en deux étapes : parallélogramme, puis rectangle.'],
      ['Déduire que EFGH est un parallélogramme.','Utiliser l’égalité des diagonales.','Conclure : EFGH est un rectangle.']),
     K('Calcule le périmètre et l’aire du carré KLMN.',
      'Un carré a quatre côtés de même longueur : périmètre = 4 × '+c+' = '+(4*c)+' cm. Aire = côté × côté = '+c+' × '+c+' = '+(c*c)+' cm².',
      ['Identifier que les quatre côtés du carré sont égaux.','Identifier les formules du périmètre et de l’aire du carré.'],
      ['Traduire : P = 4 × c et A = c × c.'],
      ['Calculer 4 × '+c+'.','Calculer '+c+' × '+c+'.','Conclure avec les unités.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,p:p,q:q,d:d,c:c}}; }

  /* ================= Entiers naturels ================= */
  function gEN(x){
    var r=x.rnd, N=ri(r,102345,987654), ds=String(N).split('').map(Number), cent=ds[3], nbc=Math.floor(N/100), m=ri(r,120,999);
    var sm=String(m).split('').reduce(function(s,c){ return s+(+c); },0), u=m%10;
    var crit=[['2',u%2===0,'son chiffre des unités ('+u+') '+(u%2===0?'est':'n’est pas')+' pair'],['5',u===0||u===5,'son chiffre des unités ('+u+') '+((u===0||u===5)?'est':'n’est pas')+' 0 ou 5'],['3',sm%3===0,'la somme de ses chiffres ('+sm+') '+(sm%3===0?'est':'n’est pas')+' un multiple de 3'],['9',sm%9===0,'la somme de ses chiffres ('+sm+') '+(sm%9===0?'est':'n’est pas')+' un multiple de 9']];
    var intro=Who(x)+' a reçu une subvention de '+fmt(N,0)+' F. Il étudie aussi le nombre '+m+'.';
    var dec=['centaines de mille','dizaines de mille','unités de mille','centaines','dizaines','unités'];
    var p1=[K('Dans le nombre '+fmt(N,0)+', quel est le chiffre des centaines ? Quel est le nombre de centaines ? Écris sa décomposition.',
      'Le chiffre des centaines est '+cent+'. Le nombre de centaines est '+fmt(nbc,0)+' (car '+fmt(N,0)+' = '+fmt(nbc,0)+' × 100 + '+(N%100)+'). Décomposition : '+fmt(N,0)+' = '+ds.map(function(c,i){ return c+' × '+fmt(Math.pow(10,5-i),0); }).join(' + ')+'.',
      ['Identifier le rang de chaque chiffre (unités, dizaines, centaines…).','Identifier la différence entre chiffre des centaines et nombre de centaines.'],
      ['Lire le chiffre de rang 3 et compter les centaines entières.'],
      ['Donner le chiffre des centaines : '+cent+'.','Donner le nombre de centaines : '+fmt(nbc,0)+'.','Écrire la décomposition.']),
     K('Le nombre '+m+' est-il un multiple de 2 ? de 5 ? de 3 ? de 9 ? Justifie à l’aide des caractères de divisibilité.',
      crit.map(function(c){ return m+' '+(c[1]?'est':'n’est pas')+' un multiple de '+c[0]+' car '+c[2]; }).join(' ; ')+'.',
      ['Identifier les caractères de divisibilité par 2, 5, 3 et 9.','Identifier le chiffre des unités et la somme des chiffres de '+m+'.'],
      ['Appliquer chaque caractère de divisibilité.'],
      ['Calculer la somme des chiffres : '+sm+'.','Tester 2 et 5.','Tester 3 et 9.'])];
    var b=pick(r,[6,8,10,12,15,24]), q=ri(r,12,40), rr=ri(r,1,b-1), n=b*q+rr, e=x.W.eq;
    var i2='On doit ranger '+n+' '+e.as+' dans des cartons contenant chacun exactement '+b+' '+e.as+'.';
    var p2=[K('Combien de cartons pleins obtient-on et combien de '+e.as+' reste-t-il ? Écris l’égalité de la division euclidienne.',
      'On effectue la division euclidienne de '+n+' par '+b+' : '+n+' = '+b+' × '+q+' + '+rr+', avec '+rr+' < '+b+'. On obtient '+q+' cartons pleins et il reste '+rr+' '+(rr>1?e.as:e.a)+'.',
      ['Identifier le dividende '+n+' et le diviseur '+b+'.','Identifier que le reste doit être inférieur au diviseur.'],
      ['Poser la division euclidienne de '+n+' par '+b+'.'],
      ['Calculer le quotient '+q+'.','Calculer le reste '+rr+'.','Écrire '+n+' = '+b+' × '+q+' + '+rr+'.']),
     K('Combien de '+e.as+' faut-il ajouter pour remplir un carton de plus ?',
      'Il reste '+rr+' '+(rr>1?e.as:e.a)+' ; pour compléter un carton de '+b+', il en faut '+b+' '+MN+' '+rr+' = '+(b-rr)+' de plus. On aura alors '+(q+1)+' cartons pleins ('+b+' × '+(q+1)+' = '+(b*(q+1))+').',
      ['Identifier le reste de la division.','Identifier la contenance d’un carton.'],
      ['Traduire : à ajouter = '+b+' '+MN+' reste.'],
      ['Calculer '+b+' '+MN+' '+rr+' = '+(b-rr)+'.','Vérifier : '+b+' × '+(q+1)+' = '+(b*(q+1))+'.','Conclure.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{N:N,cent:cent,nbc:nbc,m:m,sm:sm,b:b,q:q,rr:rr,n:n}}; }

  /* ================= Nombres décimaux ================= */
  function gDC(x){
    var r=x.rnd, base=ri(r,2,9), vals=M.shuffle(r,[base+0.7,base+0.07,base+0.75,base+0.705,base+1.1].map(function(v){ return Math.round(v*1000)/1000; }));
    var sorted=vals.slice().sort(function(a,b){ return a-b; }), y=pick(r,vals), ip=Math.floor(y), dp=Math.round((y-ip)*1000)/1000;
    var intro='Lors d’une pesée, '+who(x)+' a relevé les masses suivantes (en kg) : '+vals.map(function(v){ return fmt(v,3); }).join(' ; ')+'.';
    var p1=[K('Range ces nombres dans l’ordre croissant.',
      'On compare d’abord les parties entières, puis les chiffres des dixièmes, des centièmes et des millièmes. Ordre croissant : '+sorted.map(function(v){ return fmt(v,3); }).join(' < ')+'.',
      ['Identifier les parties entières et les chiffres après la virgule.','Identifier la méthode de comparaison chiffre par chiffre.'],
      ['Comparer les nombres rang par rang (on peut ajouter des zéros inutiles).'],
      ['Comparer les parties entières.','Comparer les dixièmes, centièmes et millièmes.','Écrire le rangement.']),
     K('Pour le nombre '+fmt(y,3)+', donne la partie entière et la partie décimale, puis encadre-le entre deux entiers consécutifs.',
      'La partie entière de '+fmt(y,3)+' est '+ip+' et sa partie décimale est '+fmt(dp,3)+'. Encadrement : '+ip+' < '+fmt(y,3)+' < '+(ip+1)+'.',
      ['Identifier la partie entière (avant la virgule).','Identifier la partie décimale (après la virgule).'],
      ['Écrire le nombre comme somme de sa partie entière et de sa partie décimale.'],
      ['Donner la partie entière '+ip+'.','Donner la partie décimale '+fmt(dp,3)+'.','Encadrer : '+ip+' < '+fmt(y,3)+' < '+(ip+1)+'.'])];
    var a=ri(r,2,30)+pick(r,[0,0.5]), b=ri(r,2,9), c=ri(r,2,9)+pick(r,[0.5,0.2,0.25]), E=a+b*c, n=ri(r,3,9), m=ri(r,2,12)+pick(r,[0.5,0.25,0.75]), tot=n*m;
    var i2='On doit calculer A = '+fmt(a,1)+' + '+b+' × '+fmt(c,2)+'. Par ailleurs, on achète '+n+' sacs de '+fmt(m,2)+' kg de riz chacun.';
    var p2=[K('Calcule A en respectant les priorités opératoires.',
      'La multiplication est prioritaire sur l’addition : '+b+' × '+fmt(c,2)+' = '+fmt(b*c,2)+', puis A = '+fmt(a,1)+' + '+fmt(b*c,2)+' = '+fmt(E,2)+'.',
      ['Identifier les opérations présentes dans A.','Identifier la priorité de la multiplication.'],
      ['Effectuer d’abord la multiplication, puis l’addition.'],
      ['Calculer '+b+' × '+fmt(c,2)+' = '+fmt(b*c,2)+'.','Calculer la somme.','Conclure : A = '+fmt(E,2)+'.']),
     K('Quelle est la masse totale des sacs, en kilogrammes puis en grammes ?',
      'Masse totale : '+n+' × '+fmt(m,2)+' = '+fmt(tot,2)+' kg. Comme 1 kg = 1 000 g : '+fmt(tot,2)+' × 1 000 = '+fmt(tot*1000,0)+' g.',
      ['Identifier le nombre de sacs et la masse d’un sac.','Identifier la conversion 1 kg = 1 000 g.'],
      ['Multiplier la masse d’un sac par le nombre de sacs, puis par 1 000.'],
      ['Calculer '+n+' × '+fmt(m,2)+'.','Multiplier par 1 000.','Conclure : '+fmt(tot*1000,0)+' g.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{vals:vals,sorted:sorted,y:y,ip:ip,dp:dp,a:a,b:b,c:c,E:E,n:n,m:m,tot:tot}}; }

  /* ================= Fractions ================= */
  function gFR(x){
    var r=x.rnd, pq=pick(r,[[2,3],[3,4],[3,5],[4,7],[5,6],[2,9],[5,8]]), k=ri(r,2,9), num=pq[0]*k, den=pq[1]*k, d2=pick(r,[pq[1]*2,pq[1]*3,pq[1]*5]), n2=pq[0]*d2/pq[1];
    var intro='Dans un exercice, on donne la fraction '+num+'/'+den+'.';
    var p1=[K('Simplifie la fraction '+num+'/'+den+' pour obtenir une fraction irréductible.',
      'On divise le numérateur et le dénominateur par un même nombre non nul. '+num+' = '+k+' × '+pq[0]+' et '+den+' = '+k+' × '+pq[1]+', donc '+num+'/'+den+' = ('+num+' ÷ '+k+')/('+den+' ÷ '+k+') = '+pq[0]+'/'+pq[1]+'. Cette fraction est irréductible.',
      ['Identifier un diviseur commun au numérateur et au dénominateur.','Identifier la propriété des fractions égales.'],
      ['Diviser les deux termes par '+k+'.'],
      ['Trouver le diviseur commun '+k+'.','Diviser les deux termes.','Conclure : '+pq[0]+'/'+pq[1]+'.']),
     K('Complète l’égalité '+pq[0]+'/'+pq[1]+' = …/'+d2+'. Cette fraction est-elle inférieure ou supérieure à 1 ?',
      d2+' = '+pq[1]+' × '+(d2/pq[1])+', donc on multiplie aussi le numérateur par '+(d2/pq[1])+' : '+pq[0]+'/'+pq[1]+' = '+n2+'/'+d2+'. Comme le numérateur '+pq[0]+' est inférieur au dénominateur '+pq[1]+', la fraction est inférieure à 1.',
      ['Identifier le nombre par lequel on multiplie le dénominateur.','Identifier la comparaison d’une fraction à 1.'],
      ['Multiplier les deux termes par '+(d2/pq[1])+' ; comparer numérateur et dénominateur.'],
      ['Calculer '+d2+' ÷ '+pq[1]+' = '+(d2/pq[1])+'.','Calculer le numérateur : '+n2+'.','Comparer à 1.'])];
    var S=ri(r,3,15)*20, m=S*2/5, h=S/4, rest=S-m-h;
    var i2=Who(x)+' dispose d’un champ de '+S+' m². Il cultive du maïs sur les 2/5 du champ et des haricots sur le quart (1/4) du champ.';
    var p2=[K('Calcule l’aire de la partie cultivée en maïs.',
      'Prendre les 2/5 de '+S+', c’est calculer '+S+' × 2 ÷ 5 = '+(S*2)+' ÷ 5 = '+m+' m². Le maïs occupe '+m+' m².',
      ['Identifier la fraction 2/5 et l’aire totale.','Identifier que prendre une fraction d’une quantité revient à multiplier.'],
      ['Traduire : aire du maïs = '+S+' × 2/5.'],
      ['Calculer '+S+' × 2 = '+(S*2)+'.','Diviser par 5.','Conclure : '+m+' m².']),
     K('Calcule l’aire cultivée en haricots, puis l’aire restante.',
      'Haricots : '+S+' ÷ 4 = '+h+' m². Aire restante : '+S+' '+MN+' '+m+' '+MN+' '+h+' = '+rest+' m².',
      ['Identifier la fraction 1/4.','Identifier que l’aire restante est ce qui n’est pas cultivé.'],
      ['Calculer le quart du champ, puis soustraire les deux aires cultivées.'],
      ['Calculer '+S+' ÷ 4 = '+h+'.','Soustraire : '+S+' '+MN+' '+m+' '+MN+' '+h+'.','Conclure : '+rest+' m².'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{pq:pq,k:k,num:num,den:den,d2:d2,n2:n2,S:S,m:m,h:h,rest:rest}}; }

  /* ================= Calcul littéral ================= */
  function gCL(x){
    var r=x.rnd, L=ri(r,6,15), l=ri(r,2,L-1), L2=ri(r,5,12), l2=ri(r,2,L2-1), A2=L2*l2;
    var intro='Pour un rectangle de longueur L et de largeur ℓ, le périmètre est P = 2 × (L + ℓ) et l’aire est A = L × ℓ. Le jardin potager est un rectangle avec L = '+L+' m et ℓ = '+l+' m.';
    var p1=[K('Calcule le périmètre et l’aire du jardin potager.',
      'P = 2 × ('+L+' + '+l+') = 2 × '+(L+l)+' = '+(2*(L+l))+' m. A = '+L+' × '+l+' = '+(L*l)+' m².',
      ['Identifier les formules du périmètre et de l’aire.','Identifier les valeurs de L et ℓ.'],
      ['Remplacer L et ℓ par leurs valeurs dans les formules.'],
      ['Calculer L + ℓ = '+(L+l)+'.','Calculer P = '+(2*(L+l))+' m.','Calculer A = '+(L*l)+' m².']),
     K('Un autre rectangle a une aire de '+A2+' m² et une longueur de '+L2+' m. Calcule sa largeur, puis son périmètre.',
      'A = L × ℓ, donc ℓ = A ÷ L = '+A2+' ÷ '+L2+' = '+l2+' m. P = 2 × ('+L2+' + '+l2+') = 2 × '+(L2+l2)+' = '+(2*(L2+l2))+' m.',
      ['Identifier l’aire et la longueur données.','Identifier qu’il faut retrouver un facteur d’un produit.'],
      ['Traduire : ℓ = A ÷ L ; puis appliquer la formule du périmètre.'],
      ['Calculer ℓ = '+l2+' m.','Calculer L + ℓ = '+(L2+l2)+'.','Calculer P = '+(2*(L2+l2))+' m.'])];
    var a=ri(r,2,9), b=ri(r,1,8), c=ri(r,2,6), d=ri(r,2,6), base1=ri(r,3,6), base2=ri(r,2,5), hh=ri(r,2,9), V=base1*base2*hh;
    var i2='On considère l’expression E = '+c+' × a + '+d+' × b. Par ailleurs, une boîte en forme de pavé droit a une base de '+base1+' cm sur '+base2+' cm et un volume de '+V+' cm³.';
    var p2=[K('Calcule la valeur de E pour a = '+a+' et b = '+b+'.',
      'On remplace a par '+a+' et b par '+b+' : E = '+c+' × '+a+' + '+d+' × '+b+' = '+(c*a)+' + '+(d*b)+' = '+(c*a+d*b)+'.',
      ['Identifier l’expression littérale E.','Identifier les valeurs de a et b.'],
      ['Remplacer les lettres par les nombres, puis calculer.'],
      ['Calculer '+c+' × '+a+' et '+d+' × '+b+'.','Additionner.','Conclure : E = '+(c*a+d*b)+'.']),
     K('Calcule la hauteur de la boîte.',
      'Volume = longueur × largeur × hauteur, donc hauteur = volume ÷ (longueur × largeur) = '+V+' ÷ ('+base1+' × '+base2+') = '+V+' ÷ '+(base1*base2)+' = '+hh+' cm.',
      ['Identifier le volume et les dimensions de la base.','Identifier la formule du volume d’un pavé droit.'],
      ['Traduire : h = V ÷ (L × ℓ).'],
      ['Calculer l’aire de la base : '+(base1*base2)+' cm².','Diviser '+V+' par '+(base1*base2)+'.','Conclure : '+hh+' cm.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{L:L,l:l,L2:L2,l2:l2,A2:A2,a:a,b:b,c:c,d:d,V:V,hh:hh,base1:base1,base2:base2}}; }

  /* ================= Symétrie par rapport à une droite et par rapport à un point ================= */
  function gSY(x){
    var r=x.rnd, ab=ri(r,3,9)+pick(r,[0,0.5]), ang=ri(r,25,110), d=ri(r,2,6)+pick(r,[0,0.5]);
    var intro='Le triangle A′B′C′ est le symétrique du triangle ABC par rapport à la droite (D). On sait que AB = '+fmt(ab,1)+' cm, BÂC = '+ang+'° et que la distance du point A à la droite (D) est '+fmt(d,1)+' cm.';
    var p1=[K('Donne la longueur A′B′ et la mesure de l’angle B′Â′C′. Justifie.',
      'La symétrie par rapport à une droite conserve les longueurs et les mesures d’angles. Donc A′B′ = AB = '+fmt(ab,1)+' cm et B′Â′C′ = BÂC = '+ang+'°.',
      ['Identifier que A′B′C′ est le symétrique de ABC par rapport à (D).','Identifier les propriétés de conservation de la symétrie axiale.'],
      ['Associer chaque élément à son symétrique.'],
      ['Énoncer la conservation des longueurs et des angles.','Donner A′B′ = '+fmt(ab,1)+' cm.','Donner B′Â′C′ = '+ang+'°.']),
     K('Que représente la droite (D) pour le segment [AA′] ? Calcule la longueur AA′.',
      'A et A′ sont symétriques par rapport à (D), donc (D) est la médiatrice du segment [AA′] : elle est perpendiculaire à (AA′) en son milieu I. Comme AI = '+fmt(d,1)+' cm (distance de A à (D)), AA′ = 2 × '+fmt(d,1)+' = '+fmt(2*d,1)+' cm.',
      ['Identifier la définition de deux points symétriques par rapport à une droite.','Identifier que la distance de A à (D) est AI.'],
      ['Traduire : (D) médiatrice de [AA′], donc AA′ = 2 × AI.'],
      ['Nommer la médiatrice.','Écrire AA′ = 2 × AI.','Calculer AA′ = '+fmt(2*d,1)+' cm.'])];
    var oa=ri(r,2,7)+pick(r,[0,0.5]), cd=ri(r,3,10);
    var i2='Les points A et E sont symétriques par rapport au point O, avec OA = '+fmt(oa,1)+' cm. Le segment [EF] est le symétrique du segment [AB] par rapport à O, et AB = '+cd+' cm.';
    var p2=[K('Calcule OE et AE. Justifie.',
      'A et E sont symétriques par rapport à O, donc O est le milieu du segment [AE] : OE = OA = '+fmt(oa,1)+' cm et AE = 2 × '+fmt(oa,1)+' = '+fmt(2*oa,1)+' cm.',
      ['Identifier la définition de deux points symétriques par rapport à un point.','Identifier la longueur OA.'],
      ['Traduire : O milieu de [AE].'],
      ['Écrire OE = OA.','Calculer AE = 2 × OA.','Conclure : AE = '+fmt(2*oa,1)+' cm.']),
     K('Quelle est la longueur EF ? Que peux-tu dire des droites (AB) et (EF) ?',
      'La symétrie par rapport à un point conserve les longueurs : EF = AB = '+cd+' cm. De plus, deux droites symétriques par rapport à un point sont parallèles : (EF) // (AB).',
      ['Identifier que [EF] est le symétrique de [AB] par rapport à O.','Identifier les propriétés de la symétrie centrale.'],
      ['Appliquer la conservation des longueurs et la propriété des droites symétriques.'],
      ['Donner EF = '+cd+' cm.','Énoncer la propriété des droites symétriques.','Conclure : (EF) // (AB).'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{ab:ab,ang:ang,d:d,oa:oa,cd:cd}}; }

  /* ================= Glissement ================= */
  function gGL(x){
    var r=x.rnd, L=ri(r,3,9), bc=ri(r,4,10)+pick(r,[0,0.5]);
    var intro='Un glissement transforme le point A en A′, avec AA′ = '+L+' cm. Par ce glissement, B et C ont pour correspondants B′ et C′, et BC = '+fmt(bc,1)+' cm. M est le milieu de [BC].';
    var p1=[K('Quelles sont les longueurs BB′ et CC′ ? Que peux-tu dire des droites (AA′), (BB′) et (CC′) ?',
      'Un glissement est défini par une direction, un sens et une longueur : tous les points glissent de la même longueur, dans la même direction et le même sens. Donc BB′ = CC′ = AA′ = '+L+' cm, et les droites (BB′) et (CC′) sont parallèles à (AA′).',
      ['Identifier les trois éléments qui définissent un glissement.','Identifier la longueur AA′ = '+L+' cm.'],
      ['Appliquer la définition du glissement à B et à C.'],
      ['Donner BB′ = '+L+' cm.','Donner CC′ = '+L+' cm.','Conclure sur le parallélisme.']),
     K('Calcule B′C′. Où se trouve le correspondant M′ du point M ?',
      'Le glissement conserve les longueurs : B′C′ = BC = '+fmt(bc,1)+' cm. Il conserve aussi les milieux : M′ est le milieu de [B′C′], donc B′M′ = '+fmt(bc,1)+' ÷ 2 = '+fmt(bc/2,2)+' cm.',
      ['Identifier les propriétés de conservation du glissement.','Identifier que M est le milieu de [BC].'],
      ['Appliquer la conservation des longueurs et des milieux.'],
      ['Donner B′C′ = '+fmt(bc,1)+' cm.','Situer M′ au milieu de [B′C′].','Calculer B′M′ = '+fmt(bc/2,2)+' cm.'])];
    var e=ri(r,3,8), f=ri(r,3,8), g=ri(r,Math.abs(e-f)+1,e+f-1), an=ri(r,30,100);
    var i2='Par un autre glissement, le triangle EFG a pour correspondant le triangle E′F′G′. On sait que EF = '+e+' cm, FG = '+f+' cm, EG = '+g+' cm et EF̂G = '+an+'°.';
    var p2=[K('Calcule le périmètre du triangle E′F′G′.',
      'Le glissement conserve les longueurs : E′F′ = '+e+' cm, F′G′ = '+f+' cm, E′G′ = '+g+' cm. Périmètre de E′F′G′ : '+e+' + '+f+' + '+g+' = '+(e+f+g)+' cm (le même que celui de EFG).',
      ['Identifier que E′F′G′ correspond à EFG par un glissement.','Identifier la conservation des longueurs.'],
      ['Additionner les longueurs des côtés correspondants.'],
      ['Donner les longueurs des côtés de E′F′G′.','Additionner.','Conclure : '+(e+f+g)+' cm.']),
     K('Quelle est la mesure de l’angle E′F̂′G′ ? Justifie.',
      'Le glissement conserve les mesures d’angles : E′F̂′G′ = EF̂G = '+an+'°.',
      ['Identifier l’angle correspondant à EF̂G.','Identifier la conservation des angles par glissement.'],
      ['Appliquer la propriété de conservation.'],
      ['Énoncer la propriété.','Associer les angles.','Conclure : '+an+'°.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{L:L,bc:bc,e:e,f:f,g:g,an:an}}; }

  /* ================= Proportionnalité ================= */
  var LPP={jardin:['riz','kg'],sport:['jus de fruits','L'],coop:['sucre','kg']};
  function gPP(x){
    var r=x.rnd, L=LPP[x.W.id], pu=ri(r,4,15)*50, qs=[2,3,5], q4=ri(r,6,12), budget=pu*ri(r,13,20);
    var tab={type:'table',head:['Quantité (en '+L[1]+')','2','3','5',String(q4)],rows:[['Prix (en F)',fmt(2*pu,0),fmt(3*pu,0),'…','…']]};
    var intro='Le prix du '+L[0]+' est proportionnel à la quantité achetée. Une partie des prix est donnée dans le tableau ci-dessous.';
    var p1=[K('Calcule le coefficient de proportionnalité (prix d’un '+L[1]+'), puis complète le tableau.',
      'Coefficient : '+fmt(2*pu,0)+' ÷ 2 = '+fmt(pu,0)+' (on vérifie : '+fmt(3*pu,0)+' ÷ 3 = '+fmt(pu,0)+'). Un '+L[1]+' coûte '+money(pu)+'. Pour 5 '+L[1]+' : 5 × '+fmt(pu,0)+' = '+fmt(5*pu,0)+' F ; pour '+q4+' '+L[1]+' : '+q4+' × '+fmt(pu,0)+' = '+fmt(q4*pu,0)+' F.',
      ['Identifier que le tableau est un tableau de proportionnalité.','Identifier le coefficient comme prix d’un '+L[1]+'.'],
      ['Diviser un prix par la quantité correspondante, puis multiplier.'],
      ['Calculer le coefficient : '+fmt(pu,0)+'.','Calculer le prix de 5 '+L[1]+'.','Calculer le prix de '+q4+' '+L[1]+'.']),
     K('Avec '+money(budget)+', quelle quantité de '+L[0]+' peut-on acheter ?',
      'On divise le budget par le prix d’un '+L[1]+' : '+fmt(budget,0)+' ÷ '+fmt(pu,0)+' = '+(budget/pu)+'. On peut acheter '+(budget/pu)+' '+L[1]+' de '+L[0]+'.',
      ['Identifier le budget et le prix d’un '+L[1]+'.','Identifier l’opération inverse de la multiplication.'],
      ['Traduire : quantité = budget ÷ prix unitaire.'],
      ['Rappeler le prix unitaire.','Calculer '+fmt(budget,0)+' ÷ '+fmt(pu,0)+'.','Conclure : '+(budget/pu)+' '+L[1]+'.'])];
    var t=pick(r,[10,20,25,50]), N=ri(r,2,12)*20, pc=N*t/100, sc=pick(r,[[100000,'km',1],[50000,'m',500],[200,'m',2]]), dcm=ri(r,2,9);
    var real=sc[0]===100000?dcm+' km':(sc[0]===50000?fmt(dcm*500,0)+' m':fmt(dcm*2,0)+' m');
    var i2='Sur les '+N+' élèves inscrits à une activité, '+t+' % sont des filles. Sur une carte à l’échelle 1/'+fmt(sc[0],0)+', deux villages sont séparés de '+dcm+' cm.';
    var p2=[K('Combien de filles sont inscrites à l’activité ?',
      'Prendre '+t+' % de '+N+', c’est calculer '+N+' × '+t+' ÷ 100 = '+(N*t)+' ÷ 100 = '+pc+'. Il y a '+pc+' filles.',
      ['Identifier le pourcentage '+t+' % et l’effectif total '+N+'.','Identifier que prendre '+t+' % revient à multiplier par '+t+'/100.'],
      ['Traduire : '+N+' × '+t+' ÷ 100.'],
      ['Calculer '+N+' × '+t+' = '+(N*t)+'.','Diviser par 100.','Conclure : '+pc+' filles.']),
     K('Quelle est la distance réelle entre les deux villages ?',
      'L’échelle 1/'+fmt(sc[0],0)+' signifie que 1 cm sur la carte représente '+fmt(sc[0],0)+' cm en réalité. '+dcm+' cm représentent '+dcm+' × '+fmt(sc[0],0)+' = '+fmt(dcm*sc[0],0)+' cm, soit '+real+'.',
      ['Identifier la signification de l’échelle.','Identifier la distance sur la carte.'],
      ['Multiplier la distance sur la carte par '+fmt(sc[0],0)+', puis convertir.'],
      ['Calculer '+dcm+' × '+fmt(sc[0],0)+'.','Convertir en '+(sc[1])+'.','Conclure : '+real+'.'])];
    return {parts:[{intro:intro,cons:p1,table:tab},{intro:i2,cons:p2}],_g:{pu:pu,q4:q4,budget:budget,t:t,N:N,pc:pc,sc:sc,dcm:dcm}}; }

  /* ================= Statistique ================= */
  var LS2={jardin:['Voici le nombre de paniers de légumes récoltés chaque jour pendant ','jours','panier','paniers','des jours'],sport:['Voici le nombre de buts marqués lors de ','matchs','but','buts','des matchs'],coop:['Voici le nombre de cahiers achetés par chacun des ','clients','cahier','cahiers','des clients']};
  var LSS={jardin:['Moyen de transport','à pied','à vélo','à moto','en voiture'],sport:['Sport préféré','football','handball','basket-ball','athlétisme'],coop:['Fourniture la plus achetée','cahiers','stylos','règles','crayons']};
  function gSS(x){
    var r=x.rnd, L=LSS[x.W.id], eff, it; for(it=0;it<200;it++){ eff=[ri(r,3,15),ri(r,3,15),ri(r,2,12),ri(r,2,10)]; var mx=Math.max.apply(null,eff); if(eff.filter(function(e){ return e===mx; }).length===1) break; }
    var N=eff.reduce(function(s,e){ return s+e; },0), mi=eff.indexOf(Math.max.apply(null,eff));
    var tab={type:'table',head:[L[0]].concat(L.slice(1)),rows:[['Effectif'].concat(eff.map(String))]};
    var intro='Une enquête a été menée auprès des élèves d’une classe de 6e. Le tableau ci-dessous donne la répartition des réponses ('+L[0].toLowerCase()+').';
    var p1=[K('Quelle est la population étudiée ? Quel est le caractère étudié ? Est-il qualitatif ou quantitatif ?',
      'La population étudiée est l’ensemble des élèves de la classe de 6e interrogés ; chaque élève est un individu. Le caractère étudié est « '+L[0].toLowerCase()+' ». Ses modalités ('+L.slice(1).join(', ')+') ne sont pas des nombres : c’est un caractère qualitatif.',
      ['Identifier la définition de la population et de l’individu.','Identifier la définition d’un caractère qualitatif.'],
      ['Associer chaque mot du vocabulaire statistique à la situation.'],
      ['Nommer la population.','Nommer le caractère.','Préciser sa nature : qualitatif.']),
     K('Calcule l’effectif total. Quelle est la modalité qui a le plus grand effectif ?',
      'Effectif total : '+eff.join(' + ')+' = '+N+' élèves. La modalité de plus grand effectif est « '+L[1+mi]+' » ('+eff[mi]+' élèves).',
      ['Identifier les effectifs de chaque modalité.','Identifier la notion de modalité la plus fréquente.'],
      ['Additionner les effectifs ; comparer les effectifs.'],
      ['Additionner les effectifs.','Conclure : '+N+' élèves.','Donner la modalité « '+L[1+mi]+' ».'])];
    var Nn=pick(r,[20,25]), vals=[], k; for(k=0;k<Nn;k++) vals.push(pick(r,[0,1,1,2,2,2,3,3,4])); var cnt=[0,1,2,3,4].map(function(v){ return vals.filter(function(t){ return t===v; }).length; });
    var vv=pick(r,[0,1,2,3,4].filter(function(v){ return cnt[v]>0; })), pc=cnt[vv]*100/Nn;
    var Z=LS2[x.W.id], i2=Z[0]+Nn+' '+Z[1]+' : '+vals.join(' ; ')+'.';
    var p2=[K('Dresse le tableau des effectifs de cette série (valeurs 0 à 4).',
      'En comptant chaque valeur : '+[0,1,2,3,4].map(function(v){ return v+' '+(v>1?Z[3]:Z[2])+' : '+cnt[v]; }).join(' ; ')+'. Vérification : '+cnt.join(' + ')+' = '+Nn+'.',
      ['Identifier les valeurs possibles du caractère (0 à 4).','Identifier que l’effectif total est '+Nn+'.'],
      ['Compter le nombre d’apparitions de chaque valeur.'],
      ['Compter chaque valeur.','Présenter le tableau.','Vérifier que le total vaut '+Nn+'.']),
     K('Quel pourcentage '+Z[4]+' correspond à la valeur '+vv+' ?',
      'Il y a '+cnt[vv]+' '+Z[1]+' sur '+Nn+' : '+cnt[vv]+' × 100 ÷ '+Nn+' = '+fmt(pc,0)+' %.',
      ['Identifier l’effectif de la valeur '+vv+'.','Identifier l’effectif total '+Nn+'.'],
      ['Traduire : pourcentage = effectif × 100 ÷ effectif total.'],
      ['Lire l’effectif : '+cnt[vv]+'.','Calculer '+cnt[vv]+' × 100 ÷ '+Nn+'.','Conclure : '+fmt(pc,0)+' %.'])];
    return {parts:[{intro:intro,cons:p1,table:tab},{intro:i2,cons:p2}],_g:{eff:eff,N:N,mi:mi,vals:vals,cnt:cnt,vv:vv,pc:pc,Nn:Nn}}; }

  var reg=function(id,themes,label,w1,build){ MOD['6e-'+id]={cls:'6e',theme:themes[0],themes:themes,label:label,w1:w1,build:build}; };
  var T=function(s){ return '6e — '+s; };
  reg('PV',[T('Cube & pavé droit')],'Cube et pavé droit',2,gPV);
  reg('CO',[T('Cône de révolution'),T('Sphère & repérage')],'Cône de révolution et sphère',1,gCO);
  reg('DR',[T('Droites du plan'),T('Segments, milieu & médiatrice')],'Droites, segments et médiatrice',2,gDR);
  reg('CD',[T('Cercle & disque')],'Cercle et disque',2,gCD);
  reg('AN',[T('Angles'),T('Triangles')],'Angles et triangles',2,gAN);
  reg('PA',[T('Parallélogramme & quadrilatères')],'Parallélogramme et quadrilatères',1,gPA);
  reg('EN',[T('Entiers naturels')],'Entiers naturels',2,gEN);
  reg('DC',[T('Nombres décimaux')],'Nombres décimaux',2,gDC);
  reg('FR',[T('Fractions')],'Fractions',2,gFR);
  reg('CL',[T('Calcul littéral')],'Calcul littéral',2,gCL);
  reg('SY',[T('Figures symétriques par rapport à une droite'),T('Figures symétriques par rapport à un point')],'Symétries',1,gSY);
  reg('GL',[T('Glissement')],'Glissement',1,gGL);
  reg('PP',[T('Proportionnalité')],'Proportionnalité',2,gPP);
  reg('SS',[T('Statistique')],'Statistique',2,gSS);
})(typeof globalThis!=='undefined'?globalThis:this);
