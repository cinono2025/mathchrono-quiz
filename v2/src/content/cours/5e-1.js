/* ===== Résumés de cours — classe de 5e (guide du programme, Bénin) =====
   Chaque thème : ess (l'essentiel), form (à retenir), ex (exemple résolu), pieges, mini (2 questions),
   chk (contrôles numériques automatiques : [expression JavaScript, valeur attendue]).
   Balisage : <b>…</b> ; fraction {numérateur¦dénominateur}. */
window.MQ_COURS = window.MQ_COURS || {};
window.MQ_COURS['5e'] = Object.assign(window.MQ_COURS['5e'] || {}, {

'5e — Prisme droit': {
 ess:[
  'Un <b>prisme droit</b> est un solide qui a <b>deux bases</b> (deux polygones superposables, l\'un au-dessus de l\'autre) et des <b>faces latérales rectangulaires</b>. Le cube et le pavé droit sont des prismes droits.',
  'Il y a <b>une face latérale par côté de la base</b>. Un prisme à base triangulaire a 3 faces latérales, donc 5 faces en tout. Un prisme à base hexagonale a 6 faces latérales.',
  'Le <b>patron</b> d\'un prisme droit : une <b>bande rectangulaire</b> et <b>deux polygones superposables</b> (les bases). La longueur de la bande = le <b>périmètre de la base</b> ; sa largeur = la <b>hauteur</b> du prisme.',
  'Pour l\'aire d\'une base qui n\'est pas un rectangle, découpe-la en triangles.'],
 form:[
  'Aire latérale = périmètre de la base × hauteur',
  'Aire totale = aire latérale + 2 × aire de la base',
  'Volume : <b>V = B × h</b>  (B = aire de la base, h = hauteur)'],
 ex:{q:'La base d\'un prisme droit est un triangle rectangle de côtés 3 cm, 4 cm et 5 cm (les côtés de l\'angle droit mesurent 3 cm et 4 cm). La hauteur du prisme est 10 cm. Calculer son volume, son aire latérale et son aire totale.',
  st:['Aire de la base : B = 3 × 4 ÷ 2 = 6 cm².',
      'Volume : V = B × h = 6 × 10 = 60 cm³.',
      'Périmètre de la base : 3 + 4 + 5 = 12 cm. Aire latérale : 12 × 10 = 120 cm².',
      'Aire totale : 120 + 2 × 6 = 132 cm².'],
  r:'V = <b>60 cm³</b> ; aire latérale = <b>120 cm²</b> ; aire totale = <b>132 cm²</b>'},
 pieges:[
  'Ne confonds pas les unités : une aire s\'exprime en cm², un volume en cm³.',
  'Pour l\'aire latérale, on utilise le <b>périmètre</b> de la base, pas son aire.',
  'Dans l\'aire totale, n\'oublie pas les <b>deux</b> bases (2 × B).'],
 mini:[
  {q:'Prisme droit à base rectangulaire de 5 cm sur 3 cm, hauteur 8 cm. Quel est son volume ?', r:'B = 5 × 3 = 15 cm² ; V = 15 × 8 = <b>120 cm³</b>'},
  {q:'Un prisme droit a un volume de 150 cm³ et une base d\'aire 25 cm². Quelle est sa hauteur ?', r:'h = V ÷ B = 150 ÷ 25 = <b>6 cm</b>'}],
 chk:[['3*4/2*10','60'],['(3+4+5)*10','120'],['(3+4+5)*10+2*(3*4/2)','132'],['5*3*8','120'],['150/25','6']]
},

'5e — Division dans ℕ': {
 ess:[
  'Faire la <b>division euclidienne</b> de a par b (b ≠ 0), c\'est trouver deux entiers q et r tels que <b>a = b × q + r</b> avec <b>r < b</b>.',
  'a est le <b>dividende</b>, b le <b>diviseur</b>, q le <b>quotient</b>, r le <b>reste</b>.',
  'Le reste est toujours <b>plus petit que le diviseur</b>. Dans une division par 6, le reste est 0, 1, 2, 3, 4 ou 5.',
  'q × b et (q + 1) × b sont deux multiples consécutifs de b qui encadrent a : <b>b × q ≤ a < b × (q + 1)</b>.'],
 form:[
  'a = b × q + r  avec  0 ≤ r < b',
  'Si <b>r = 0</b>, alors a est un <b>multiple</b> de b (et b <b>divise</b> a).'],
 ex:{q:'Faire la division euclidienne de 250 par 12 et encadrer 250 par deux multiples consécutifs de 12.',
  st:['On cherche le plus grand multiple de 12 qui ne dépasse pas 250 : 12 × 20 = 240 ; 12 × 21 = 252 est trop grand.',
      'Reste : 250 − 240 = 10, et 10 < 12.',
      'Égalité : 250 = 12 × 20 + 10. Encadrement : 240 < 250 < 252.'],
  r:'250 = 12 × 20 + 10 : quotient <b>20</b>, reste <b>10</b>'},
 pieges:[
  'Un reste ne doit jamais être égal ou supérieur au diviseur : « 47 = 5 × 8 + 7 » est faux comme division euclidienne (7 > 5).',
  'Pour dire que a est multiple de b, il faut que le reste soit <b>0</b> et pas seulement petit.',
  'Ne confonds pas le diviseur (b) et le quotient (q).'],
 mini:[
  {q:'Division euclidienne de 47 par 5 ?', r:'47 = 5 × 9 + 2 : quotient <b>9</b>, reste <b>2</b>'},
  {q:'Écris l\'égalité de la division de 100 par 7.', r:'7 × 14 = 98 et 100 − 98 = 2, donc <b>100 = 7 × 14 + 2</b>'}],
 chk:[['12*20+10','250'],['Math.floor(250/12)','20'],['250%12','10'],['Math.floor(47/5)','9'],['47%5','2'],['7*14+2','100'],['12*21','252']]
},

'5e — Nombres premiers': {
 ess:[
  'Un <b>nombre premier</b> est un entier naturel qui a <b>exactement deux diviseurs</b> : 1 et lui-même. Exemples : 2, 3, 5, 7, 11, 13.',
  '<b>0 et 1 ne sont pas premiers</b> (0 a une infinité de diviseurs, 1 n\'en a qu\'un seul). 2 est le <b>seul premier pair</b> ; les autres premiers sont impairs.',
  'Premiers inférieurs à 20 : <b>2, 3, 5, 7, 11, 13, 17, 19</b>. On les retrouve avec le <b>crible d\'Ératosthène</b>.',
  'Pour savoir si un nombre est premier, on le divise par 2, 3, 5, 7, 11… jusqu\'à trouver un reste nul, ou jusqu\'à ce que le quotient devienne plus petit que le diviseur.',
  'Tout entier supérieur à 1 s\'écrit comme un <b>produit de facteurs premiers</b>.'],
 form:[
  'Pour décomposer : on divise par 2 tant que c\'est possible, puis par 3, 5, 7… jusqu\'à obtenir 1.',
  '12 = 2² × 3 a 6 diviseurs : 1, 2, 3, 4, 6, 12.'],
 ex:{q:'Décomposer 180 en produit de facteurs premiers.',
  st:['180 ÷ 2 = 90 ; 90 ÷ 2 = 45.',
      '45 n\'est plus divisible par 2. 45 ÷ 3 = 15 ; 15 ÷ 3 = 5.',
      '5 est premier : 5 ÷ 5 = 1. On a fini.',
      'On regroupe : 180 = 2 × 2 × 3 × 3 × 5 = 2² × 3² × 5.'],
  r:'180 = <b>2² × 3² × 5</b>'},
 pieges:[
  '1 n\'est pas un nombre premier, même s\'il n\'a que « lui-même » comme diviseur.',
  'Un nombre impair n\'est pas forcément premier : 51 = 3 × 17 et 91 = 7 × 13.',
  'Dans une décomposition, tous les facteurs doivent être premiers : 60 = 4 × 15 n\'est pas une décomposition en facteurs premiers.'],
 mini:[
  {q:'91 est-il premier ?', r:'Non : 91 = 7 × 13, il a d\'autres diviseurs que 1 et 91.'},
  {q:'Décompose 84 en produit de facteurs premiers.', r:'84 = 2 × 2 × 3 × 7 = <b>2² × 3 × 7</b>'}],
 chk:[['2**2*3**2*5','180'],['2*2*3*5','60'],['2**2*3*7','84'],['7*13','91'],['3*17','51']]
},

'5e — Puissances d\'entiers naturels': {
 ess:[
  'Pour un entier naturel a et un entier n ≥ 2, <b>aⁿ = a × a × … × a</b> (n facteurs égaux à a). Exemple : 2⁵ = 2 × 2 × 2 × 2 × 2 = 32.',
  'Par convention, <b>a¹ = a</b>. Et 1ⁿ = 1 quel que soit n.',
  '10ⁿ s\'écrit avec <b>1 suivi de n zéros</b> : 10⁴ = 10 000.',
  'Dans un calcul, la <b>puissance est prioritaire</b> sur la multiplication, l\'addition et la soustraction.'],
 form:[
  'aⁿ × aᵐ = aⁿ⁺ᵐ    (même nombre a : on additionne les exposants)',
  '(a × b)ⁿ = aⁿ × bⁿ'],
 ex:{q:'Calculer A = 4 + 3 × 2³ puis écrire 2³ × 2⁴ sous la forme d\'une seule puissance.',
  st:['Priorité à la puissance : 2³ = 2 × 2 × 2 = 8.',
      'Ensuite la multiplication : 3 × 8 = 24.',
      'Enfin l\'addition : A = 4 + 24 = 28.',
      '2³ × 2⁴ : même base 2, on additionne les exposants : 3 + 4 = 7, donc 2⁷ (= 128).'],
  r:'A = <b>28</b> et 2³ × 2⁴ = <b>2⁷</b>'},
 pieges:[
  '2³ n\'est pas 2 × 3 = 6. C\'est 2 × 2 × 2 = <b>8</b>.',
  '5 × 2² = 5 × 4 = 20 (et non 10² = 100) : la puissance ne concerne que le 2.',
  'Pour aⁿ × aᵐ, on additionne les exposants et on garde la même base : 3² × 3³ = 3⁵ (et non 9⁵).'],
 mini:[
  {q:'Calculer 10⁵ et (3 × 2)².', r:'10⁵ = <b>100 000</b> ; (3 × 2)² = 6² = <b>36</b>'},
  {q:'Écris 3² × 3³ sous la forme d\'une puissance et calcule-la.', r:'3² × 3³ = 3⁵ = <b>243</b>'}],
 chk:[['4+3*2**3','28'],['2**3*2**4','2**7'],['2**7','128'],['10**5','100000'],['(3*2)**2','36'],['3**2*3**3','243'],['5*2**2','20'],['3+2**3*2','19']]
},

'5e — PPCM & PGCD': {
 ess:[
  'Le <b>PGCD</b> de deux entiers est le <b>plus grand</b> de leurs <b>diviseurs communs</b>. Exemple : diviseurs communs de 18 et 24 : 1, 2, 3, 6, donc PGCD(18 ; 24) = 6.',
  'Le <b>PPCM</b> de deux entiers non nuls est le <b>plus petit</b> de leurs <b>multiples communs non nuls</b>. Multiples de 24 : 24, 48, <b>72</b> (multiple de 18 aussi), donc PPCM(18 ; 24) = 72.',
  'Avec les décompositions en facteurs premiers : le <b>PGCD</b> prend les facteurs <b>communs</b> avec le <b>plus petit</b> exposant ; le <b>PPCM</b> prend <b>tous</b> les facteurs avec le <b>plus grand</b> exposant.',
  'Quand le PGCD est 1, les deux nombres n\'ont aucun diviseur commun autre que 1 (exemple : 15 et 28).'],
 form:[
  '12 = 2² × 3 et 18 = 2 × 3²    PGCD = 2 × 3 = 6    PPCM = 2² × 3² = 36',
  'PGCD : « on partage / on découpe en parts égales ».    PPCM : « les choses se retrouvent ensemble ».'],
 ex:{q:'Calculer le PGCD et le PPCM de 24 et 36.',
  st:['24 = 2 × 2 × 2 × 3 = 2³ × 3 et 36 = 2 × 2 × 3 × 3 = 2² × 3².',
      'PGCD : facteurs communs avec le plus petit exposant : 2² × 3 = 12.',
      'PPCM : tous les facteurs avec le plus grand exposant : 2³ × 3² = 8 × 9 = 72.'],
  r:'PGCD(24 ; 36) = <b>12</b> et PPCM(24 ; 36) = <b>72</b>'},
 pieges:[
  'Ne confonds pas : le PGCD est plus petit (ou égal) que les deux nombres, le PPCM est plus grand (ou égal).',
  'Le PPCM n\'est pas toujours le produit des deux nombres : PPCM(4 ; 6) = 12 et non 24.',
  'Pour un problème de découpe en carrés les plus grands possibles, c\'est le <b>PGCD</b> ; pour deux événements qui se répètent et se retrouvent ensemble, c\'est le <b>PPCM</b>.'],
 mini:[
  {q:'Calculer PGCD(30 ; 45).', r:'30 = 2 × 3 × 5 et 45 = 3² × 5 ; facteurs communs : 3 × 5 = <b>15</b>'},
  {q:'Deux feux clignotent, l\'un toutes les 6 s, l\'autre toutes les 8 s. Au bout de combien de temps clignotent-ils ensemble ?', r:'PPCM(6 ; 8) = <b>24 s</b>'}],
 chk:[['2**3*3','24'],['2**2*3**2','36'],['2**2*3','12'],['2**3*3**2','72'],['(function g(a,b){return b?g(b,a%b):a})(24,36)','12'],['(function g(a,b){return b?g(b,a%b):a})(30,45)','15'],['(function g(a,b){return b?g(b,a%b):a})(18,24)','6'],['18*24/6','72'],['6*8/2','24']]
},

'5e — Distance & médiatrice': {
 ess:[
  'La <b>distance</b> AB entre deux points est un nombre <b>positif ou nul</b>. <b>AB = 0</b> signifie que A et B sont <b>confondus</b>.',
  '<b>Inégalité triangulaire</b> : dans un triangle, chaque côté est <b>plus petit que la somme des deux autres</b>. Si l\'un des côtés est plus grand que cette somme, le triangle n\'existe pas.',
  '<b>Alignement</b> : si AM + MB = AB, alors M est sur le segment [AB]. Si une distance est égale à la somme des deux autres, les trois points sont alignés.',
  'La <b>médiatrice</b> de [AB] est la droite perpendiculaire à [AB] en son milieu. Tout point de la médiatrice est <b>équidistant</b> de A et B (MA = MB), et réciproquement : si MA = MB, M est sur la médiatrice.',
  'La médiatrice partage le plan en deux demi-plans. Si M est du côté de A (pas sur la médiatrice), alors MA < MB.'],
 form:[
  'AB ≥ 0 ;  AB = 0 ⟺ A = B',
  'Triangle ABC : AB < AC + CB, AC < AB + BC, BC < BA + AC',
  'M ∈ médiatrice de [AB] ⟺ MA = MB',
  'Construction au compas : deux arcs de même rayon centrés en A et en B ; ils se coupent en deux points ; la droite qui passe par eux est la médiatrice.'],
 ex:{q:'Peut-on construire un triangle dont les côtés mesurent 5 cm, 6 cm et 10 cm ? Même question avec 3 cm, 4 cm et 8 cm.',
  st:['On compare le plus grand côté à la somme des deux autres.',
      '5, 6 et 10 : 5 + 6 = 11 et 10 < 11. C\'est bon : le triangle existe.',
      '3, 4 et 8 : 3 + 4 = 7 et 8 > 7. Le triangle n\'existe pas.'],
  r:'(5 ; 6 ; 10) : <b>oui</b> ; (3 ; 4 ; 8) : <b>non</b> car 8 > 3 + 4'},
 pieges:[
  'Pour conclure, une seule inégalité ne suffit pas : chaque distance doit être inférieure à la somme des deux autres. En pratique, si le <b>plus grand</b> côté est plus petit que la somme des deux autres, les deux autres inégalités sont évidentes.',
  'Si AB + BC = AC, le triangle est « aplati » : les points sont alignés, ce n\'est pas un vrai triangle.',
  'Équidistant ne veut pas dire « au milieu » : tous les points de la médiatrice sont à égale distance de A et B, pas seulement le milieu de [AB].'],
 mini:[
  {q:'AB = 7, BC = 3 et AC = 10. Que peut-on dire de A, B, C ?', r:'AB + BC = 7 + 3 = 10 = AC : les points sont <b>alignés</b> (B est sur [AC]).'},
  {q:'M est sur la médiatrice de [EF] et ME = 4 cm. Combien mesure MF ?', r:'MF = ME = <b>4 cm</b>'}],
 chk:[['10<5+6','true'],['8<3+4','false'],['7+3','10'],['7+3===10','true'],['3+4+8>0','true']]
},

'5e — Angles': {
 ess:[
  'Deux angles sont <b>complémentaires</b> si leur somme est <b>90°</b>, et <b>supplémentaires</b> si leur somme est <b>180°</b>. Deux angles qui ont le même complémentaire (ou le même supplémentaire) ont la même mesure.',
  'Dans un <b>triangle</b>, la somme des angles est <b>180°</b>. Dans un triangle rectangle, les deux angles aigus sont complémentaires. Un triangle qui a deux angles complémentaires est rectangle.',
  '<b>Angles opposés par le sommet</b> : ils ont la même mesure.',
  'Deux droites parallèles coupées par une sécante : les angles <b>correspondants</b> sont égaux et les angles <b>alternes-internes</b> sont égaux.',
  '<b>Réciproque</b> : si des angles correspondants (ou alternes-internes) sont égaux, alors les deux droites sont <b>parallèles</b>.'],
 form:[
  'Complémentaire de x : 90° − x    Supplémentaire de x : 180° − x',
  'Triangle ABC : Â + B̂ + Ĉ = 180°',
  'Unité d\'angle utilisée en 5e : le <b>degré</b> (°).'],
 ex:{q:'Un triangle ABC a un angle de 50° en A et un angle de 60° en B. Calculer l\'angle en C. Quel est le complémentaire de 35° ?',
  st:['La somme des angles d\'un triangle est 180°.',
      'Â + B̂ = 50° + 60° = 110°.',
      'Ĉ = 180° − 110° = 70°.',
      'Complémentaire de 35° : 90° − 35° = 55°.'],
  r:'Ĉ = <b>70°</b> ; complémentaire de 35° = <b>55°</b>'},
 pieges:[
  'Ne confonds pas complémentaire (90°) et supplémentaire (180°).',
  'Les angles correspondants ou alternes-internes ne sont égaux que si les deux droites sont <b>parallèles</b> (ou pour prouver qu\'elles le sont, avec la réciproque).',
  'Dans un triangle, on soustrait la somme des <b>deux</b> angles connus à 180°, pas à 90°.'],
 mini:[
  {q:'Quel est le supplémentaire d\'un angle de 110° ?', r:'180° − 110° = <b>70°</b>'},
  {q:'Dans un triangle rectangle, un angle aigu mesure 32°. Combien mesure l\'autre ?', r:'90° − 32° = <b>58°</b>'}],
 chk:[['180-(50+60)','70'],['90-35','55'],['180-110','70'],['90-32','58'],['45+3*45','180']]
},

'5e — Triangles superposables, isocèle & équilatéral': {
 ess:[
  'Deux triangles <b>superposables</b> ont leurs côtés homologues de même longueur et leurs angles homologues de même mesure.',
  'Trois cas pour affirmer que deux triangles sont superposables : <b>trois côtés</b> deux à deux de même longueur ; <b>un angle égal compris entre deux côtés</b> égaux deux à deux ; <b>un côté égal compris entre deux angles</b> égaux deux à deux.',
  'Un triangle <b>isocèle</b> a deux côtés égaux. Son axe de symétrie est la <b>médiatrice de la base</b>, qui est aussi la bissectrice de l\'angle au sommet. Ses <b>angles à la base</b> sont égaux.',
  'Réciproque : un triangle qui a <b>deux angles égaux</b> est isocèle. Si, dans un triangle, une bissectrice et une hauteur sont issues du même sommet et sont confondues, le triangle est isocèle.',
  'Un triangle <b>équilatéral</b> a trois côtés égaux, <b>trois angles de 60°</b> et <b>3 axes de symétrie</b> (les médiatrices de ses côtés). Trois angles égaux : triangle équilatéral. Isocèle avec un angle de 60° : équilatéral.'],
 form:[
  'Isocèle de sommet principal A : angle à la base = (180° − angle au sommet) ÷ 2',
  'Équilatéral : chaque angle = 180° ÷ 3 = 60°'],
 ex:{q:'Un triangle ABC est isocèle de sommet A et l\'angle au sommet mesure 40°. Calculer les angles à la base.',
  st:['La somme des angles est 180°. Les angles à la base B̂ et Ĉ sont égaux.',
      'B̂ + Ĉ = 180° − 40° = 140°.',
      'Chaque angle à la base : 140° ÷ 2 = 70°.'],
  r:'B̂ = Ĉ = <b>70°</b>'},
 pieges:[
  'Deux triangles qui ont seulement leurs trois <b>angles</b> égaux ne sont pas forcément superposables (l\'un peut être plus grand).',
  'Dans un isocèle, ce sont les angles à la <b>base</b> qui sont égaux, pas l\'angle au sommet.',
  'Pour l\'angle au sommet, on calcule 180° − 2 × (angle à la base) : n\'oublie pas le « 2 × ».'],
 mini:[
  {q:'Un triangle isocèle a un angle à la base de 50°. Combien mesure son angle au sommet ?', r:'180° − 2 × 50° = <b>80°</b>'},
  {q:'Un triangle a deux angles de 65°. Combien mesure le troisième ? Quelle est sa nature ?', r:'180° − 130° = <b>50°</b> ; deux angles égaux, donc il est <b>isocèle</b>.'}],
 chk:[['(180-40)/2','70'],['180-2*50','80'],['180-2*65','50'],['180/3','60']]
},

'5e — Cercle & cercle circonscrit': {
 ess:[
  'Le cercle (C) de centre A et de rayon r est l\'ensemble des points M tels que <b>AM = r</b>. Le <b>disque</b> : les points M tels que AM ≤ r (AM < r ou AM = r).',
  'Position d\'un point M : <b>à l\'intérieur</b> si AM < r ; <b>sur le cercle</b> si AM = r ; <b>à l\'extérieur</b> si AM > r.',
  'Les trois <b>médiatrices</b> d\'un triangle se coupent en un même point. Ce point est le centre du <b>cercle circonscrit</b>, le cercle qui passe par les trois sommets. Il est <b>unique</b>.',
  'Pour le construire : on trace deux médiatrices (la troisième est inutile) ; leur point commun est le centre, on place la pointe du compas dessus et on passe par un sommet.',
  'Triangle <b>rectangle</b> : le cercle circonscrit a pour <b>diamètre l\'hypoténuse</b> ; son centre est le milieu de l\'hypoténuse.',
  'Réciproque : si un côté du triangle est un diamètre du cercle qui passe par les trois sommets, le triangle est rectangle (l\'angle droit est en face de ce diamètre).'],
 form:[
  'Rayon du cercle circonscrit à un triangle rectangle = hypoténuse ÷ 2',
  'A est sur le cercle de diamètre [BC] (A ≠ B, A ≠ C) ⟹ ABC est rectangle en A.'],
 ex:{q:'Le cercle (C) a pour centre A et pour rayon 5 cm. Où se trouvent M, N et P si AM = 3 cm, AN = 5 cm et AP = 7 cm ? Un triangle rectangle a une hypoténuse de 10 cm : quel est le rayon de son cercle circonscrit ?',
  st:['On compare chaque distance au rayon 5 cm.',
      'AM = 3 < 5 : M est à l\'intérieur. AN = 5 : N est sur le cercle. AP = 7 > 5 : P est à l\'extérieur.',
      'Triangle rectangle : le diamètre du cercle circonscrit est l\'hypoténuse, donc le rayon est 10 ÷ 2 = 5 cm.'],
  r:'M intérieur, N sur le cercle, P extérieur ; rayon = <b>5 cm</b>'},
 pieges:[
  'Le centre du cercle circonscrit n\'est pas toujours à l\'intérieur du triangle (pour un triangle rectangle, il est au milieu de l\'hypoténuse).',
  'Le rayon vaut la <b>moitié</b> de l\'hypoténuse, pas l\'hypoténuse entière.',
  'L\'angle droit est au sommet opposé au diamètre (l\'hypoténuse), et non à l\'une des extrémités du diamètre.'],
 mini:[
  {q:'Un triangle rectangle a une hypoténuse de 13 cm. Quel est le rayon de son cercle circonscrit ?', r:'13 ÷ 2 = <b>6,5 cm</b>'},
  {q:'Le cercle a pour rayon 4,5 cm et AM = 4 cm. Où est M ?', r:'4 < 4,5 : M est <b>à l\'intérieur</b> du cercle.'}],
 chk:[['10/2','5'],['13/2','6.5'],['3<5&&7>5&&5===5','true'],['4<4.5','true']]
},

'5e — Parallélogrammes particuliers': {
 ess:[
  'Un <b>rectangle</b> est un parallélogramme qui a un <b>angle droit</b> (donc quatre angles droits). Ses <b>diagonales ont la même longueur</b>. Un parallélogramme dont les diagonales ont la même longueur est un rectangle.',
  'Un <b>losange</b> a ses <b>quatre côtés de même longueur</b>. Ses <b>diagonales sont perpendiculaires</b>. Un parallélogramme dont les diagonales sont perpendiculaires est un losange.',
  'Un <b>carré</b> est à la fois un rectangle et un losange : quatre angles droits et quatre côtés égaux. Un rectangle à diagonales perpendiculaires est un carré ; un losange à diagonales de même longueur est un carré.',
  '<b>Axes de symétrie</b> : le rectangle (non carré) en a 2, les médiatrices de ses côtés ; le losange (non carré) en a 2, ses diagonales ; le carré en a <b>4</b> (2 diagonales et 2 médiatrices des côtés).'],
 form:[
  'Parallélogramme + angle droit ⟹ rectangle',
  'Parallélogramme + diagonales égales ⟹ rectangle',
  'Quadrilatère + 4 côtés égaux ⟹ losange',
  'Parallélogramme + diagonales perpendiculaires ⟹ losange',
  'Rectangle + diagonales perpendiculaires ⟹ carré'],
 ex:{q:'ABCD est un parallélogramme. On mesure AC = BD = 8 cm et on constate que (AC) ⊥ (BD). Quelle est la nature de ABCD ?',
  st:['ABCD est un parallélogramme dont les diagonales ont la même longueur (AC = BD) : c\'est un rectangle.',
      'Ses diagonales sont aussi perpendiculaires : un rectangle à diagonales perpendiculaires est un carré.',
      'Conséquence : il a 4 axes de symétrie.'],
  r:'ABCD est un <b>carré</b>'},
 pieges:[
  'Un quadrilatère qui a seulement des diagonales égales n\'est pas forcément un rectangle : il faut d\'abord que ce soit un parallélogramme.',
  'Des diagonales perpendiculaires ne suffisent pas pour être un carré : un losange non carré les a aussi.',
  'Un rectangle (non carré) n\'a pas ses diagonales comme axes de symétrie ; ses axes sont les médiatrices des côtés.'],
 mini:[
  {q:'Un parallélogramme a un angle droit. Quelle est sa nature ?', r:'C\'est un <b>rectangle</b>.'},
  {q:'Combien un carré a-t-il d\'axes de symétrie ?', r:'<b>4</b> : ses deux diagonales et les deux médiatrices de ses côtés.'}],
 chk:[]
},

'5e — Trapèze & hexagone': {
 ess:[
  'Un <b>trapèze</b> est un quadrilatère qui a <b>deux côtés parallèles</b> (les <b>bases</b>) et les deux autres côtés de supports sécants.',
  'Trapèze <b>rectangle</b> : il a un angle droit. Trapèze <b>isocèle</b> : les deux côtés non parallèles ont la même longueur. Alors ses angles à la base sont égaux, et il a <b>un axe de symétrie</b> : la médiatrice de ses bases.',
  'Un trapèze dont les angles à la base ont la même mesure est isocèle.',
  'Un <b>hexagone</b> est un polygone à <b>6 côtés</b>. Un hexagone <b>régulier</b> est inscrit dans un cercle et a ses 6 côtés de même longueur. Son <b>côté est égal au rayon</b> du cercle circonscrit ; chaque angle au centre mesure 360° ÷ 6 = <b>60°</b>.',
  'Un <b>octogone régulier</b> : polygone inscrit dans un cercle, avec ses 8 côtés de même longueur.'],
 form:[
  'Aire du trapèze : <b>(B + b) × h ÷ 2</b>  (B grande base, b petite base, h hauteur)',
  'Périmètre d\'un hexagone régulier = 6 × côté = 6 × rayon'],
 ex:{q:'Calculer l\'aire d\'un trapèze de bases 12 cm et 8 cm et de hauteur 5 cm. Calculer le périmètre d\'un hexagone régulier inscrit dans un cercle de rayon 4 cm.',
  st:['Somme des bases : 12 + 8 = 20.',
      'Aire = 20 × 5 ÷ 2 = 100 ÷ 2 = 50 cm².',
      'Dans un hexagone régulier, le côté est égal au rayon : 4 cm.',
      'Périmètre = 6 × 4 = 24 cm.'],
  r:'aire = <b>50 cm²</b> ; périmètre = <b>24 cm</b>'},
 pieges:[
  'La hauteur d\'un trapèze est la distance entre les deux bases (perpendiculaire aux bases), pas la longueur d\'un côté penché.',
  'N\'oublie pas de diviser par 2 dans la formule de l\'aire.',
  'Les angles au centre d\'un hexagone régulier valent 60°, pas 120° (360° ÷ 6).'],
 mini:[
  {q:'Aire d\'un trapèze de bases 8 cm et 6 cm et de hauteur 5 cm ?', r:'(8 + 6) × 5 ÷ 2 = <b>35 cm²</b>'},
  {q:'Périmètre d\'un hexagone régulier de côté 3 cm ?', r:'6 × 3 = <b>18 cm</b>'}],
 chk:[['(12+8)*5/2','50'],['6*4','24'],['(8+6)*5/2','35'],['6*3','18'],['360/6','60']]
},

'5e — Nombres décimaux relatifs': {
 ess:[
  'Un nombre décimal relatif a un <b>signe</b> (+ ou −) et une <b>distance à zéro</b>. (+3,7) s\'écrit simplement 3,7. Le seul nombre à la fois positif et négatif est <b>0</b>. Exemple d\'entier relatif : −8.',
  'Deux nombres <b>opposés</b> ont la même distance à zéro : l\'opposé de −8 est 8. Leur somme est 0.',
  '<b>Comparer</b> : un nombre négatif est plus petit qu\'un nombre positif. Entre deux négatifs, le plus petit est celui qui a la <b>plus grande</b> distance à zéro : −7 < −3.',
  '<b>Addition</b> : même signe → on additionne les distances à zéro et on garde le signe. Signes contraires → on soustrait les distances à zéro et on garde le signe du nombre qui a la plus grande distance à zéro.',
  '<b>Soustraction</b> : soustraire un nombre, c\'est ajouter son opposé.',
  '<b>Multiplication</b> : même signe → produit positif ; signes contraires → produit négatif. Avec plusieurs facteurs : nombre pair de facteurs négatifs → positif ; nombre impair → négatif.'],
 form:[
  'a − b = a + (opposé de b)',
  '(+)×(+) = +    (−)×(−) = +    (+)×(−) = −    (−)×(+) = −'],
 ex:{q:'Calculer A = (−4) + (+9) − (−3) − 10 et B = (−6) × (+3).',
  st:['(−4) + (+9) : signes contraires, 9 − 4 = 5, signe + : on obtient 5.',
      'Soustraire (−3), c\'est ajouter (+3) : 5 + 3 = 8.',
      'Puis 8 − 10 = −2. Donc A = −2.',
      'B : signes contraires, le produit est négatif ; 6 × 3 = 18, donc B = −18.'],
  r:'A = <b>−2</b> et B = <b>−18</b>'},
 pieges:[
  '−(−3) = +3 : deux signes « moins » qui se suivent donnent un « plus ».',
  'Pour comparer −7 et −3 : −7 est plus petit, car il est plus loin de 0 (et pas parce que 7 est plus grand que 3).',
  'Règle des signes : (−4) + (−6) = −10 (on additionne), alors que (−4) × (−6) = +24.'],
 mini:[
  {q:'Calculer (−4) × (−2,5).', r:'Même signe : produit positif ; 4 × 2,5 = <b>10</b>'},
  {q:'Calculer (−3) − (−5).', r:'(−3) + (+5) = <b>2</b>'}],
 chk:[['-4+9+3-10','-2'],['-6*3','-18'],['-4*-2.5','10'],['-3-(-5)','2'],['5-8+2','-1'],['-7<-3','true'],['2.3-1.5+1.7-0.5','2']]
},

'5e — Fractions': {
 ess:[
  'Une fraction {a¦b} (b ≠ 0) : si a < b elle est plus petite que 1 ; si a = b elle est égale à 1 ; si a > b elle est plus grande que 1.',
  'Une fraction est <b>irréductible</b> si 1 est le seul diviseur commun de son numérateur et de son dénominateur. Pour la rendre irréductible, on divise les deux termes par leur <b>PGCD</b>. Exemple : {18¦24} = {3¦4} (PGCD = 6).',
  '<b>Comparer</b> : même dénominateur → la plus petite est celle qui a le plus petit numérateur. Même numérateur → la plus petite a le plus grand dénominateur. Sinon, on réduit au même dénominateur (avec le PPCM).',
  '<b>Addition et soustraction</b> : on réduit au même dénominateur, puis on additionne ou on soustrait les numérateurs.',
  '<b>Multiplication</b> : on multiplie les numérateurs entre eux et les dénominateurs entre eux ; on simplifie avant de calculer.',
  'Écriture q + {r¦b} : {7¦3} = 2 + {1¦3} car 7 = 3 × 2 + 1. Donc 2 < {7¦3} < 3 (encadrement à une unité près), et 2,3 < {7¦3} < 2,4 (à un dixième près).'],
 form:[
  '{a¦b} + {c¦b} = {a + c¦b}',
  '{a¦b} × {c¦d} = {a × c¦b × d}',
  '{2¦3} × 6 = {2 × 6¦3} = 4'],
 ex:{q:'Calculer {3¦4} − {1¦6} et comparer {3¦5} et {2¦3}.',
  st:['PPCM(4 ; 6) = 12. {3¦4} = {9¦12} et {1¦6} = {2¦12}.',
      '{9¦12} − {2¦12} = {7¦12}. Cette fraction est irréductible.',
      'Pour comparer : PPCM(5 ; 3) = 15. {3¦5} = {9¦15} et {2¦3} = {10¦15}.',
      '9 < 10, donc {3¦5} < {2¦3}.'],
  r:'{3¦4} − {1¦6} = <b>{7¦12}</b> et <b>{3¦5} < {2¦3}</b>'},
 pieges:[
  'On n\'additionne pas les dénominateurs : {1¦2} + {1¦3} n\'est pas {2¦5} mais {5¦6}.',
  'Pour multiplier, pas besoin de dénominateur commun : on multiplie directement.',
  'Pour simplifier, divise numérateur ET dénominateur par le même nombre.'],
 mini:[
  {q:'Forme irréductible de {84¦126} ?', r:'PGCD(84 ; 126) = 42, donc {84¦126} = <b>{2¦3}</b>'},
  {q:'Calculer {4¦9} × {3¦8}.', r:'{4 × 3¦9 × 8} = {12¦72} = <b>{1¦6}</b>'}],
 chk:[['3/4-1/6','7/12'],['9/15<10/15','true'],['3/5<2/3','true'],['84/42','2'],['126/42','3'],['4/9*3/8','1/6'],['1/2+1/3','5/6'],['5/6+7/12','17/12'],['2/3*9/4','3/2']]
},

'5e — Puissance d\'une fraction ou d\'un décimal relatif': {
 ess:[
  'Pour une fraction : <b>({a¦b})ⁿ = {aⁿ¦bⁿ}</b>. On met le numérateur et le dénominateur à la puissance. Exemple : ({2¦3})² = {4¦9}.',
  'Pour un décimal relatif a et n ≥ 2 : aⁿ = a × a × … × a (n facteurs). Par convention, a¹ = a (même pour une fraction).',
  '<b>Signe d\'une puissance</b> : exposant <b>pair</b> → résultat <b>positif</b> ; exposant <b>impair</b> → résultat du <b>signe de a</b>. Exemples : (−2)³ = −8 ; (−2)⁴ = 16.'],
 form:[
  '({a¦b})ⁿ = {aⁿ¦bⁿ}',
  '(−a)ⁿ = aⁿ si n est pair    (−a)ⁿ = −aⁿ si n est impair',
  '(−1)ⁿ = 1 si n est pair, −1 si n est impair'],
 ex:{q:'Calculer ({3¦5})² et (−2)⁵.',
  st:['({3¦5})² = {3²¦5²} = {9¦25}.',
      '(−2)⁵ = (−2) × (−2) × (−2) × (−2) × (−2). Il y a 5 facteurs négatifs : le résultat est négatif.',
      '2⁵ = 32, donc (−2)⁵ = −32.'],
  r:'({3¦5})² = <b>{9¦25}</b> et (−2)⁵ = <b>−32</b>'},
 pieges:[
  'Le carré s\'applique aux <b>deux</b> termes : ({2¦3})² = {4¦9}, pas {4¦3} ni {2¦9}.',
  '(−3)² = 9 mais −3² = −9 : sans parenthèses, la puissance ne concerne que le 3.',
  'Un carré n\'est jamais négatif : (−0,1)² = 0,01 (et non −0,01).'],
 mini:[
  {q:'Calculer (−2)⁴ et (−1)⁵.', r:'(−2)⁴ = <b>16</b> (exposant pair) ; (−1)⁵ = <b>−1</b> (exposant impair)'},
  {q:'Calculer (−0,1)² et ({1¦2})³.', r:'(−0,1)² = <b>0,01</b> ; ({1¦2})³ = {1³¦2³} = <b>{1¦8}</b>'}],
 chk:[['3**2/5**2','9/25'],['(-2)**5','-32'],['(-2)**4','16'],['(-1)**5','-1'],['(-0.1)**2','0.01'],['1**3/2**3','1/8'],['(-2)**3','-8'],['(+2.5)**2','6.25']]
},

'5e — Figures symétriques par rapport à une droite': {
 ess:[
  'Le symétrique d\'une figure par rapport à une droite (d) s\'obtient en construisant le symétrique de chacun de ses points : comme si on pliait la feuille le long de (d).',
  'La symétrie axiale <b>conserve</b> : l\'alignement, les longueurs, les angles, le parallélisme et la perpendicularité.',
  'Le symétrique du <b>milieu</b> d\'un segment est le <b>milieu</b> du segment symétrique. Deux droites parallèles ont pour symétriques deux droites <b>parallèles</b> ; deux droites perpendiculaires ont pour symétriques deux droites <b>perpendiculaires</b>.',
  'Le symétrique d\'un <b>cercle</b> est un cercle de <b>même rayon</b>, dont le centre est le symétrique du centre.',
  '<b>Axes de symétrie</b> : triangle isocèle 1 (médiatrice de la base) ; triangle équilatéral 3 ; trapèze isocèle 1 (médiatrice des bases) ; rectangle 2 ; losange 2 (ses diagonales) ; carré 4.'],
 form:[
  'Symétrique de M par rapport à (d) : M′ tel que (d) est la médiatrice de [MM′].',
  'Cercle de centre O et de rayon r → cercle de centre O′ (symétrique de O) et de rayon r.'],
 ex:{q:'Le cercle (C) a pour centre O et pour rayon 4 cm. (d) est une droite. Quel est le symétrique de (C) par rapport à (d) ?',
  st:['On construit le symétrique O′ du centre O par rapport à (d).',
      'La symétrie conserve les longueurs : le rayon reste 4 cm.',
      'Le symétrique est donc le cercle de centre O′ et de rayon 4 cm.'],
  r:'Le cercle de centre <b>O′</b> et de rayon <b>4 cm</b>'},
 pieges:[
  'Le symétrique d\'un cercle n\'est pas un cercle de rayon double : le rayon ne change pas.',
  'Un rectangle (non carré) n\'a que 2 axes de symétrie : les médiatrices de ses côtés, pas ses diagonales.',
  'Un losange a pour axes ses <b>diagonales</b>, un rectangle les médiatrices de ses <b>côtés</b> : ne les inverse pas.'],
 mini:[
  {q:'Quel est le symétrique par rapport à une droite du milieu d\'un segment [AB] ?', r:'Le <b>milieu</b> du segment [A′B′], symétrique de [AB].'},
  {q:'Combien d\'axes de symétrie a un carré ?', r:'<b>4</b> (2 diagonales et 2 médiatrices de côtés).'}],
 chk:[]
},

'5e — Figures symétriques par rapport à un point': {
 ess:[
  'Le symétrique de A par rapport à un point O est le point A′ tel que <b>O est le milieu de [AA′]</b>. Le symétrique de O est O lui-même.',
  'La symétrie centrale <b>conserve</b> l\'alignement, les longueurs, les angles, le parallélisme et la perpendicularité.',
  'Le symétrique du <b>milieu</b> d\'un segment est le milieu du segment symétrique. Deux droites <b>parallèles</b> ont pour symétriques deux droites <b>parallèles</b> ; deux droites <b>perpendiculaires</b> ont pour symétriques deux droites <b>perpendiculaires</b>.',
  'Une droite et sa symétrique par rapport à un point sont <b>parallèles</b>.',
  'Le symétrique d\'un <b>cercle</b> est le cercle de <b>même rayon</b> dont le centre est le symétrique du centre : on construit d\'abord le symétrique du centre, puis le cercle.',
  'Le <b>centre de symétrie d\'un parallélogramme</b> est le point d\'intersection de ses diagonales.'],
 form:[
  'A′ symétrique de A par rapport à O ⟺ O milieu de [AA′]',
  'Parallélogramme ABCD : centre de symétrie = point d\'intersection de [AC] et [BD].'],
 ex:{q:'Le cercle (C) de centre A et de rayon 3 cm. O est un point. Construire le symétrique de (C) par rapport à O.',
  st:['On construit le symétrique A′ de A : on trace la droite (AO) et on place A′ de l\'autre côté de O avec OA′ = OA.',
      'La symétrie conserve les longueurs : le rayon reste 3 cm.',
      'On trace le cercle de centre A′ et de rayon 3 cm.'],
  r:'Le cercle de centre <b>A′</b> et de rayon <b>3 cm</b>'},
 pieges:[
  'Ne confonds pas symétrie centrale (par rapport à un point) et symétrie axiale (par rapport à une droite).',
  'Pour construire A′, il faut que O soit le <b>milieu</b> de [AA′] : OA′ = OA, de l\'autre côté de O.',
  'Le centre de symétrie du parallélogramme est l\'intersection des <b>diagonales</b>, pas le milieu d\'un côté.'],
 mini:[
  {q:'A′ est le symétrique de A par rapport à O. Que représente O pour [AA′] ?', r:'O est le <b>milieu</b> de [AA′].'},
  {q:'Quel est le centre de symétrie d\'un parallélogramme ?', r:'Le point d\'<b>intersection de ses diagonales</b>.'}],
 chk:[]
},

'5e — Glissement': {
 ess:[
  'Un <b>glissement</b> fait « glisser » toute la figure en ligne droite, sans la tourner ni la retourner.',
  'Pour construire le correspondant d\'un point A, on connaît la <b>direction</b>, le <b>sens</b> et la <b>longueur</b> du glissement : à partir de A, on avance dans cette direction et ce sens de cette longueur, ce qui donne A′.',
  'Un glissement <b>conserve</b> : l\'alignement, les longueurs, la mesure des angles.',
  'Si trois points sont alignés, leurs correspondants sont alignés. Le correspondant d\'un segment [AB] est un segment [A′B′] de <b>même longueur</b>. Le correspondant du <b>milieu</b> de [AB] est le milieu de [A′B′]. Le correspondant d\'un angle est un angle de même mesure.'],
 form:[
  'Pour tracer : direction + sens + longueur.',
  'AB = A′B′ et mesure de l\'angle conservée.'],
 ex:{q:'Un glissement a pour direction l\'horizontale, pour sens « vers la droite » et pour longueur 3 cm. [AB] mesure 5 cm, et ÂBC = 40°. Quelle est la longueur de [A′B′] et que vaut l\'angle Â′B′C′ ?',
  st:['Un glissement conserve les longueurs : A′B′ = AB.',
      'Un glissement conserve les angles : Â′B′C′ = ÂBC.',
      'Donc A′B′ = 5 cm et Â′B′C′ = 40°.'],
  r:'A′B′ = <b>5 cm</b> et Â′B′C′ = <b>40°</b>'},
 pieges:[
  'La longueur du glissement (3 cm) n\'est pas la longueur du segment [AB] : ce sont deux choses différentes.',
  'Un glissement ne change ni la taille ni la forme de la figure : seul son emplacement change.',
  'Pour placer A′, il faut respecter à la fois la direction, le sens et la longueur : changer le sens donne un autre point.'],
 mini:[
  {q:'Que faut-il connaître pour construire le correspondant d\'un point par un glissement ?', r:'La <b>direction</b>, le <b>sens</b> et la <b>longueur</b> du glissement.'},
  {q:'Quel est le correspondant du milieu d\'un segment par un glissement ?', r:'Le <b>milieu du segment correspondant</b>.'}],
 chk:[]
},

'5e — Équations': {
 ess:[
  'Une <b>équation</b> contient une inconnue (x). <b>Résoudre</b> l\'équation, c\'est trouver la valeur de x pour laquelle l\'égalité est vraie. On cherche les solutions dans un ensemble de nombres précisé par l\'énoncé.',
  'On peut <b>ajouter ou retrancher</b> le même nombre aux deux membres, ou les <b>multiplier ou diviser</b> par le même nombre non nul.',
  '<b>x + a = b</b> : on retranche a, x = b − a. <b>a x = b</b> (a ≠ 0) : on divise par a, x = {b¦a}.',
  'Pour <b>mettre en équation</b> un problème : choisis l\'inconnue, traduis l\'énoncé, résous, puis vérifie. « Le triple d\'un nombre, diminué de 2, est 10 » devient 3x − 2 = 10.'],
 form:[
  'x + a = b ⟹ x = b − a',
  'a x = b (a ≠ 0) ⟹ x = {b¦a}',
  'a x + c = d : on retranche c puis on divise par a.'],
 ex:{q:'Coffi achète 3 cahiers à x F chacun et un stylo à 150 F. Il paie 900 F. Quel est le prix d\'un cahier ?',
  st:['Mise en équation : 3x + 150 = 900.',
      'On retranche 150 aux deux membres : 3x = 900 − 150 = 750.',
      'On divise par 3 : x = 750 ÷ 3 = 250.',
      'Vérification : 3 × 250 + 150 = 750 + 150 = 900. C\'est bon.'],
  r:'Un cahier coûte <b>250 F</b>'},
 pieges:[
  'Ce que tu fais à un membre, fais-le à l\'autre : si tu retranches 7 à gauche, retranche 7 à droite.',
  'x + 4 = −1 donne x = −1 − 4 = −5 (et non −3).',
  'Pour −2x = 8, on divise par −2 : x = −4 (attention au signe).'],
 mini:[
  {q:'Résoudre x + 4 = −1.', r:'x = −1 − 4 = <b>−5</b>'},
  {q:'Résoudre 4x − 6 = 10.', r:'4x = 10 + 6 = 16 ; x = 16 ÷ 4 = <b>4</b>'}],
 chk:[['3*250+150','900'],['(900-150)/3','250'],['-1-4','-5'],['(10+6)/4','4'],['(11-3)/2','4'],['8/-2','-4'],['12/3','4'],['2/5','0.4']]
},

'5e — Proportionnalité': {
 ess:[
  'Dans un <b>tableau de proportionnalité</b>, on passe de la première ligne à la seconde en multipliant par un même nombre, le <b>coefficient de proportionnalité</b>. Exemple : (3 ; 9) et (5 ; 15) : 9 ÷ 3 = 15 ÷ 5 = 3.',
  '<b>Vitesse moyenne</b> : v = d ÷ t. Donc d = v × t et t = d ÷ v. Exemple : 120 km en 2 h → 60 km/h.',
  '<b>Débit moyen</b> = quantité écoulée ÷ durée (600 L en 5 min : 120 L/min). <b>Masse volumique</b> = masse ÷ volume (540 g pour 200 cm³ : 2,7 g/cm³).',
  '<b>Échelle</b> = distance sur la carte ÷ distance réelle (même unité). Sur une carte à l\'échelle {1¦50 000}, 4 cm représentent 4 × 50 000 = 200 000 cm = 2 km. Si 2 cm représentent 1 km (100 000 cm), l\'échelle est {2¦100 000} = {1¦50 000}.',
  '<b>Pourcentage</b> : b est x % de a signifie b = a × {x¦100}. Exemple : 15 % de 200 = 200 × 15 ÷ 100 = 30.',
  '<b>Représentation graphique</b> : les points d\'un tableau de proportionnalité sont <b>alignés sur une droite qui passe par l\'origine</b>. La première ligne donne les abscisses : le point A(−1 ; 2) a pour ordonnée 2. On place seulement les points du tableau (ensemble de points isolés) : on ne trace pas de ligne continue.'],
 form:[
  'v = d ÷ t    d = v × t    t = d ÷ v',
  'Pourcentage : {part¦total} × 100',
  'Masse = masse volumique × volume'],
 ex:{q:'Dans un tableau de proportionnalité, 4 correspond à 10. Quel nombre correspond à 6 ? Une voiture roule à 50 km/h : combien de temps pour parcourir 150 km ?',
  st:['Coefficient : 10 ÷ 4 = 2,5.',
      'Le nombre correspondant à 6 : 6 × 2,5 = 15.',
      'Durée : t = d ÷ v = 150 ÷ 50 = 3.'],
  r:'<b>15</b> correspond à 6 ; le trajet dure <b>3 h</b>'},
 pieges:[
  'Les unités doivent être cohérentes : pour une échelle, convertis tout en cm (1 km = 100 000 cm).',
  'Ne confonds pas « 25 % de 40 » (= 10) et « 10 est quel pourcentage de 40 » (= 25 %).',
  'Pour la vitesse : d ÷ t (pas t ÷ d). Vérifie avec l\'unité : des km divisés par des h donnent des km/h.'],
 mini:[
  {q:'Sur 40 élèves, 10 sont absents. Quel est le pourcentage d\'absents ?', r:'{10¦40} = 0,25 = <b>25 %</b>'},
  {q:'Un véhicule roule à 80 km/h pendant 3 h. Quelle distance parcourt-il ?', r:'d = 80 × 3 = <b>240 km</b>'}],
 chk:[['10/4','2.5'],['6*2.5','15'],['150/50','3'],['10/40','0.25'],['80*3','240'],['200*15/100','30'],['540/200','2.7'],['4*50000/100000','2'],['120/2','60']]
},

'5e — Prop. & Déf.': { memo:true }
});
