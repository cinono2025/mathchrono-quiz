/* ===== Résumés de cours — classe de 6e (supports d'activités et fiches enseignant 6e) =====
   Même structure que cours_3e.js. Balisage : <b>…</b> ; fraction {numérateur¦dénominateur}.
   En 6e : on prend pour valeur approchée de π le nombre 3,14. */
window.MQ_COURS = window.MQ_COURS || {};
window.MQ_COURS['6e'] = Object.assign(window.MQ_COURS['6e'] || {}, {

'6e — Cube & pavé droit': {
 ess:[
  'Le <b>cube</b> a <b>6 faces</b> carrées toutes superposables, <b>12 arêtes</b> et <b>8 sommets</b>.',
  'Le <b>pavé droit</b> (ou parallélépipède rectangle) a aussi 6 faces, 12 arêtes et 8 sommets. Ses faces sont des rectangles, et les <b>faces opposées sont superposables</b> (comme une boîte de lait ou une brique).',
  'Le <b>patron</b> d\'un cube est formé de 6 carrés superposables. Sur un dessin, les arêtes cachées se tracent en <b>pointillés</b>.',
  'Pour mesurer le volume, on compte combien de petits cubes d\'un centimètre d\'arête on peut empiler.',
  'En 6e, les seules formules d\'aires à connaître pour ces solides sont celles du <b>carré</b> et du <b>rectangle</b>.'],
 form:[
  'Cube d\'arête a :  volume = a × a × a    aire totale = 6 × (a × a)',
  'Pavé droit de dimensions L, ℓ et h :  volume = L × ℓ × h',
  'Aire latérale du pavé = périmètre de la base × hauteur.    Aire totale = aire latérale + 2 × aire de la base.'],
 ex:{q:'Un pavé droit a pour dimensions 8 cm, 5 cm et 3 cm (base 8 cm sur 5 cm, hauteur 3 cm). Calcule son volume et son aire totale.',
  st:['Volume : 8 × 5 × 3 = 120 cm³.',
      'Périmètre de la base : 2 × (8 + 5) = 26 cm. Aire latérale : 26 × 3 = 78 cm².',
      'Aire d\'une base : 8 × 5 = 40 cm². Deux bases : 80 cm².',
      'Aire totale : 78 + 80 = 158 cm².'],
  r:'Volume = <b>120 cm³</b> ; aire totale = <b>158 cm²</b>'},
 pieges:[
  'Ne confonds pas <b>aire</b> (cm²) et <b>volume</b> (cm³) : l\'unité n\'est pas la même.',
  'Un cube a <b>6 faces</b> à compter dans l\'aire totale, pas 4.',
  'Ne confonds pas faces (6), arêtes (12) et sommets (8).'],
 mini:[
  {q:'Volume d\'un cube d\'arête 6 cm ?', r:'6 × 6 × 6 = <b>216 cm³</b>'},
  {q:'Volume d\'un pavé droit de 10 cm, 4 cm et 2 cm ?', r:'10 × 4 × 2 = <b>80 cm³</b>'}],
 chk:[['8*5*3','120'],['2*(8+5)*3+2*(8*5)','158'],['6*6*6','216'],['10*4*2','80'],['6*(3*3)','54'],['4*4*4','64'],['20*5+2*(6*4)','148']]
},

'6e — Cône de révolution': {
 ess:[
  'Un <b>cône de révolution</b> ressemble à un chapeau pointu ou à un cornet. Il a un <b>sommet S</b> et une <b>base</b> qui est un <b>disque</b> de centre O.',
  'Le segment qui joint S à un point du cercle de base est une <b>génératrice</b>. Toutes les génératrices ont la <b>même longueur</b>, appelée <b>apothème</b>.',
  'La droite (SO) est l\'<b>axe</b> du cône. Le segment [SO] est la <b>hauteur</b>. Le <b>rayon</b> du cône est le rayon du disque de base.',
  'Le cône a une face plane (la base) et une surface latérale <b>non plane</b>.'],
 form:[
  'Patron du cône : <b>un disque</b> (la base) et <b>un secteur circulaire</b> (la surface latérale).',
  'La longueur de l\'<b>arc</b> du secteur est égale au <b>périmètre du disque de base</b>.'],
 ex:{q:'La base d\'un cône est un disque de rayon 3 cm. Quelle est la longueur de l\'arc du secteur dans le patron ? (on prend 3,14 pour valeur approchée de π)',
  st:['L\'arc du secteur a la même longueur que le périmètre du disque de base.',
      'Périmètre du disque : 2 × π × r = 2 × 3,14 × 3.',
      '2 × 3,14 = 6,28 puis 6,28 × 3 = 18,84.'],
  r:'L\'arc mesure environ <b>18,84 cm</b>'},
 pieges:[
  'La hauteur [SO] (qui tombe au centre de la base) n\'est <b>pas</b> une génératrice (qui va au bord).',
  'Le patron n\'a pas deux disques : c\'est <b>un disque et un secteur</b>.',
  'Le cône a <b>un seul sommet</b> et sa base est un disque, pas un carré.'],
 mini:[
  {q:'Comment s\'appelle le segment qui joint le sommet à un point du cercle de base ?', r:'Une <b>génératrice</b>.'},
  {q:'Le rayon de la base vaut 5 cm. Quelle est la longueur de l\'arc du patron ? (π ≈ 3,14)', r:'2 × 3,14 × 5 = <b>31,4 cm</b>'}],
 chk:[['2*3.14*3','18.84'],['2*3.14*5','31.4']]
},

'6e — Sphère & repérage': {
 ess:[
  'Un ballon, une orange, la Terre : leur surface a la forme d\'une <b>sphère</b>. On l\'obtient en faisant tourner un <b>cercle</b> autour d\'un de ses <b>diamètres</b>.',
  'Sur la Terre, l\'<b>équateur</b> est le grand cercle qui la coupe en deux <b>hémisphères</b> : nord et sud.',
  'Les <b>méridiens</b> sont des cercles qui passent par les <b>deux pôles</b>. Les <b>parallèles</b> sont des cercles <b>parallèles à l\'équateur</b>.',
  'Pour repérer un point, on donne ses <b>coordonnées géographiques</b> : sa <b>longitude</b> et sa <b>latitude</b>.'],
 form:[
  '<b>Latitude</b> : mesurée à partir de l\'équateur, vers le nord (N) ou vers le sud (S). La latitude de l\'équateur est <b>0°</b>.',
  '<b>Longitude</b> : mesurée à partir du méridien d\'origine, vers l\'est (E) ou vers l\'ouest (O).'],
 ex:{q:'Un point P est situé à 40° de latitude nord et 15° de longitude ouest. Donne ses coordonnées géographiques et son hémisphère.',
  st:['La latitude se compte depuis l\'équateur : ici 40° vers le nord.',
      'La longitude se compte depuis le méridien d\'origine : ici 15° vers l\'ouest.',
      'Comme la latitude est nord, le point P est dans l\'hémisphère nord.'],
  r:'P a pour coordonnées <b>(longitude 15° O ; latitude 40° N)</b>, dans l\'<b>hémisphère nord</b>'},
 pieges:[
  'Ne confonds pas <b>latitude</b> (nord ou sud, par rapport à l\'équateur) et <b>longitude</b> (est ou ouest, par rapport au méridien d\'origine).',
  'Les méridiens passent par les pôles ; les parallèles sont parallèles à l\'équateur. Ne les échange pas.',
  'L\'équateur a pour latitude 0° (et non 90°).'],
 mini:[
  {q:'Quelle est la latitude de l\'équateur ?', r:'<b>0°</b>'},
  {q:'Quelles sont les deux coordonnées géographiques d\'un point ?', r:'Sa <b>longitude</b> et sa <b>latitude</b>.'}],
 chk:[]
},

'6e — Droites du plan': {
 ess:[
  'Par deux points distincts A et B, il passe <b>une droite et une seule</b> : la droite (AB).',
  'Deux droites <b>sécantes</b> ont <b>un seul point commun</b>. Deux droites <b>perpendiculaires</b> sont sécantes et forment un angle droit.',
  'Deux droites <b>perpendiculaires à une même troisième</b> sont <b>parallèles</b>.',
  'Par un point donné, on peut tracer <b>une seule</b> perpendiculaire à une droite donnée, et (si le point n\'est pas sur la droite) <b>une seule</b> parallèle à cette droite.'],
 form:[
  'Notations : <b>(AB)</b> = droite ; <b>[AB)</b> = demi-droite d\'origine A passant par B ; <b>[AB]</b> = segment.',
  'Deux demi-droites de même origine, portées par une même droite et de sens contraires, sont dites <b>opposées</b>.',
  'Si (d) // (d′) : toute parallèle à l\'une est parallèle à l\'autre ; toute sécante à l\'une est sécante à l\'autre ; toute perpendiculaire à l\'une est perpendiculaire à l\'autre.'],
 ex:{q:'(d₁) et (d₂) sont perpendiculaires à (d₃). Que peux-tu dire de (d₁) et (d₂) ? Et si (d₄) est perpendiculaire à (d₁) ?',
  st:['(d₁) ⊥ (d₃) et (d₂) ⊥ (d₃) : deux droites perpendiculaires à une même troisième sont parallèles. Donc (d₁) // (d₂).',
      'Si (d₄) ⊥ (d₁) et (d₁) // (d₂), alors toute perpendiculaire à l\'une est perpendiculaire à l\'autre.',
      'Donc (d₄) ⊥ (d₂) aussi.'],
  r:'(d₁) // (d₂) et (d₄) ⊥ (d₂)'},
 pieges:[
  'Une droite est <b>illimitée</b> ; un segment a deux extrémités ; une demi-droite en a une seule.',
  'Ne confonds pas <b>sécantes</b> (un point commun) et <b>perpendiculaires</b> (cas particulier avec un angle droit).',
  'Un tracé « à main levée » se fait <b>sans instrument</b>.'],
 mini:[
  {q:'Que signifie la notation [AB) ?', r:'La <b>demi-droite d\'origine A passant par B</b>.'},
  {q:'(d) // (d′) et (d″) ⊥ (d). Que dire de (d″) et (d′) ?', r:'(d″) est <b>perpendiculaire</b> à (d′).'}],
 chk:[]
},

'6e — Segments, milieu & médiatrice': {
 ess:[
  'Le <b>milieu</b> d\'un segment [AB] est le point I de [AB] tel que <b>IA = IB</b>. Il partage le segment en deux parties de même longueur.',
  'La <b>médiatrice</b> de [AB] est la droite <b>perpendiculaire à (AB)</b> et qui passe par le <b>milieu</b> de [AB]. Il faut les <b>deux conditions</b>.',
  'La longueur du segment [AB] se note <b>AB</b>. Le <b>support</b> du segment est la droite (AB).',
  'Pour tracer un segment de 6 cm, on utilise une règle graduée.'],
 form:[
  'I milieu de [AB] :  AB = 2 × IA    et    IA = AB ÷ 2',
  'M ∈ [AB] ⟹ AM + MB = AB',
  'Construire la médiatrice : trace le milieu de [AB], puis la perpendiculaire à (AB) passant par ce milieu (règle et équerre).'],
 ex:{q:'I est le milieu de [AB] et AB = 9 cm : calcule IA. Dans un autre cas, M est un point d\'un segment [AB] de 8 cm, avec AM = 3 cm : calcule MB.',
  st:['I est le milieu : IA = AB ÷ 2 = 9 ÷ 2 = 4,5 cm.',
      'M appartient à [AB] : AM + MB = AB, donc MB = AB − AM.',
      'MB = 8 − 3 = 5 cm.'],
  r:'IA = <b>4,5 cm</b> ; MB = <b>5 cm</b>'},
 pieges:[
  'Une droite perpendiculaire à (AB) <b>qui ne passe pas par le milieu</b> n\'est pas la médiatrice.',
  'Une droite qui passe par le milieu <b>sans être perpendiculaire</b> n\'est pas la médiatrice non plus.',
  'Ne confonds pas le segment [AB] et sa longueur AB.'],
 mini:[
  {q:'I est le milieu de [AB] et IA = 3,5 cm. Calcule AB.', r:'AB = 2 × 3,5 = <b>7 cm</b>'},
  {q:'M ∈ [AB], AM = 4 cm et MB = 6 cm. Calcule AB.', r:'AB = 4 + 6 = <b>10 cm</b>'}],
 chk:[['9/2','4.5'],['8-3','5'],['2*3.5','7'],['4+6','10'],['10/2','5']]
},

'6e — Cercle & disque': {
 ess:[
  'Le <b>cercle</b> de centre O et de rayon r est l\'ensemble des points situés à la distance r de O. Le <b>disque</b> est la surface à l\'intérieur.',
  'Une <b>corde</b> joint deux points du cercle. Un <b>diamètre</b> est une corde qui passe par le centre : c\'est la <b>plus longue corde</b>. Le diamètre est le double du rayon.',
  'Si OB est plus petit que le rayon, B est <b>à l\'intérieur</b> du cercle ; si OB est plus grand, B est à l\'extérieur.',
  'En 6e, on écrit : « on prend pour valeur approchée de π le nombre 3,14 » (on n\'écrit pas π = 3,14).'],
 form:[
  'Diamètre : d = 2 × r',
  'Longueur du cercle : <b>2 × π × r</b> (ou π × d)',
  'Aire du disque : <b>π × r × r</b>'],
 ex:{q:'Un cercle a pour diamètre 10 cm. Calcule sa longueur et l\'aire du disque. (on prend 3,14 pour valeur approchée de π)',
  st:['Rayon : r = 10 ÷ 2 = 5 cm.',
      'Longueur : 2 × 3,14 × 5 = 31,4 cm.',
      'Aire : 3,14 × 5 × 5 = 3,14 × 25 = 78,5 cm².'],
  r:'Longueur ≈ <b>31,4 cm</b> ; aire ≈ <b>78,5 cm²</b>'},
 pieges:[
  'Si on te donne le <b>diamètre</b>, pense à le diviser par 2 pour avoir le rayon avant de calculer l\'aire.',
  'L\'aire d\'un disque est π × r × r (et non π × 2 × r, qui est la longueur).',
  'La longueur s\'exprime en cm ; l\'aire en <b>cm²</b>.'],
 mini:[
  {q:'Longueur d\'un cercle de rayon 7 cm ? (π ≈ 3,14)', r:'2 × 3,14 × 7 = <b>43,96 cm</b>'},
  {q:'Aire d\'un disque de rayon 2 cm ? (π ≈ 3,14)', r:'3,14 × 2 × 2 = <b>12,56 cm²</b>'}],
 chk:[['2*3.14*5','31.4'],['3.14*5*5','78.5'],['2*3.14*7','43.96'],['3.14*2*2','12.56'],['3.14*8','25.12'],['3.14*3*3','28.26'],['3.14*10*10','314'],['62.8/(2*3.14)','10']]
},

'6e — Angles': {
 ess:[
  'Un angle a un <b>sommet</b> et deux <b>côtés</b>. Dans « angle AOB », le sommet est O. On écrit mes AOB = 36° pour dire qu\'il mesure 36 degrés. On le mesure avec un <b>rapporteur</b>.',
  'Classement : angle <b>nul</b> (0°) ; angle <b>aigu</b> (moins de 90°) ; angle <b>droit</b> (90°) ; angle <b>obtus</b> (entre 90° et 180°) ; angle <b>plat</b> (180°).',
  'Deux angles sont <b>adjacents</b> s\'ils ont le même sommet, un côté commun et sont de part et d\'autre de ce côté.',
  'La <b>bissectrice</b> d\'un angle passe par le sommet et le partage en deux angles adjacents de même mesure. En 6e, on étudie seulement les angles <b>saillants</b>.'],
 form:[
  'Angles adjacents : leurs mesures s\'additionnent.',
  'Bissectrice d\'un angle de mesure m : chaque moitié mesure <b>m ÷ 2</b>.'],
 ex:{q:'Deux angles adjacents mesurent 40° et 50°. Quelle est la mesure de l\'angle total ? Quelle est la mesure de chaque angle formé par la bissectrice d\'un angle de 70° ?',
  st:['Angles adjacents : on additionne. 40° + 50° = 90° : c\'est un angle droit.',
      'La bissectrice partage l\'angle de 70° en deux angles égaux.',
      '70° ÷ 2 = 35°.'],
  r:'Angle total = <b>90°</b> ; chaque moitié = <b>35°</b>'},
 pieges:[
  'La longueur des côtés dessinés ne change <b>pas</b> la mesure de l\'angle.',
  'Un angle de 130° est <b>obtus</b>, pas aigu. Un angle de 35° est aigu.',
  'Deux angles qui se touchent ne sont adjacents que s\'ils ont un <b>côté commun</b> et sont de part et d\'autre de ce côté.'],
 mini:[
  {q:'Un angle de 110° a une bissectrice. Quelle est la mesure de chaque moitié ?', r:'110° ÷ 2 = <b>55°</b>'},
  {q:'Deux angles adjacents mesurent 35° et 100°. Quelle est la mesure de l\'angle total ?', r:'35° + 100° = <b>135°</b>'}],
 chk:[['40+50','90'],['70/2','35'],['110/2','55'],['35+100','135']]
},

'6e — Triangles': {
 ess:[
  'Trois points <b>non alignés</b> déterminent un triangle. Dans ABC, le côté opposé au sommet A est [BC].',
  '<b>Isocèle</b> : deux côtés de même longueur. <b>Équilatéral</b> : trois côtés de même longueur. <b>Rectangle</b> : deux côtés ont leurs supports perpendiculaires (angle droit).',
  'Une <b>hauteur</b> passe par un sommet et est <b>perpendiculaire</b> au support du côté opposé. Une médiatrice du triangle est la médiatrice d\'un de ses côtés. Une bissectrice est la bissectrice d\'un de ses angles.',
  'Pour construire un triangle dont on connaît les trois côtés, on utilise la règle et le compas.'],
 form:[
  'Périmètre = somme des trois côtés.    Triangle équilatéral de côté c : périmètre = 3 × c.',
  'Aire = <b>(base × hauteur) ÷ 2</b>'],
 ex:{q:'Un triangle a pour côtés 5 cm, 5 cm et 8 cm. Quelle est sa nature et son périmètre ? Quelle est l\'aire d\'un triangle de base 10 cm et de hauteur 6 cm ?',
  st:['Deux côtés ont la même longueur (5 cm) : le triangle est isocèle.',
      'Périmètre : 5 + 5 + 8 = 18 cm.',
      'Aire : (10 × 6) ÷ 2 = 60 ÷ 2 = 30 cm².'],
  r:'Triangle <b>isocèle</b>, périmètre <b>18 cm</b> ; aire = <b>30 cm²</b>'},
 pieges:[
  'N\'oublie pas de <b>diviser par 2</b> dans l\'aire du triangle.',
  'La hauteur est <b>perpendiculaire</b> à la base : ce n\'est pas forcément un côté du triangle.',
  'Un triangle équilatéral est aussi isocèle, mais l\'inverse est faux.'],
 mini:[
  {q:'Périmètre d\'un triangle équilatéral de côté 9 cm ?', r:'3 × 9 = <b>27 cm</b>'},
  {q:'Aire d\'un triangle de base 8 cm et de hauteur 5 cm ?', r:'(8 × 5) ÷ 2 = <b>20 cm²</b>'}],
 chk:[['5+5+8','18'],['(10*6)/2','30'],['3*9','27'],['(8*5)/2','20'],['3*7','21']]
},

'6e — Parallélogramme & quadrilatères': {
 ess:[
  'Un <b>parallélogramme</b> est un quadrilatère dont les <b>côtés opposés sont parallèles</b>. Ses côtés opposés ont la même longueur et ses diagonales <b>se coupent en leur milieu</b>.',
  'Réciproquement : un quadrilatère dont les diagonales se coupent en leur milieu, ou dont les côtés opposés ont la même longueur, est un parallélogramme.',
  'Le <b>rectangle</b> a 4 angles droits. Le <b>losange</b> a 4 côtés de même longueur. Le <b>carré</b> a 4 angles droits et 4 côtés de même longueur.',
  'Un rectangle est aussi un parallélogramme. Un losange est un parallélogramme dont les diagonales sont perpendiculaires. Un carré est un rectangle dont les côtés ont la même longueur.'],
 form:[
  'Parallélogramme de côtés a et b :  périmètre = 2 × (a + b)',
  'Aire du parallélogramme = <b>base × hauteur</b>.    Aire du rectangle = longueur × largeur.',
  'Un quadrilatère avec 3 angles droits est un rectangle ; un parallélogramme avec un angle droit est un rectangle.'],
 ex:{q:'ABCD est un parallélogramme avec AB = 9 cm, BC = 5 cm. Ses diagonales se coupent en O et AC = 12 cm. Trouve CD, AO et le périmètre.',
  st:['Les côtés opposés ont la même longueur : CD = AB = 9 cm.',
      'Les diagonales se coupent en leur milieu : O est le milieu de [AC], donc AO = 12 ÷ 2 = 6 cm.',
      'Périmètre : 2 × (9 + 5) = 2 × 14 = 28 cm.'],
  r:'CD = <b>9 cm</b> ; AO = <b>6 cm</b> ; périmètre = <b>28 cm</b>'},
 pieges:[
  'La hauteur d\'un parallélogramme n\'est <b>pas</b> son côté oblique : elle est perpendiculaire à la base.',
  'Les diagonales d\'un parallélogramme sont de même longueur seulement si c\'est un rectangle.',
  'Un rectangle n\'est pas toujours un carré, mais un carré est toujours un rectangle.'],
 mini:[
  {q:'Aire d\'un parallélogramme de base 8 cm et de hauteur 5 cm ?', r:'8 × 5 = <b>40 cm²</b>'},
  {q:'Périmètre d\'un parallélogramme de côtés 7 cm et 4 cm ?', r:'2 × (7 + 4) = <b>22 cm</b>'}],
 chk:[['12/2','6'],['2*(9+5)','28'],['8*5','40'],['2*(7+4)','22'],['9*4','36']]
},

'6e — Entiers naturels': {
 ess:[
  'Les <b>entiers naturels</b> sont 0, 1, 2, 3, 4… Leur ensemble se note <b>ℕ</b> ; il est <b>infini</b>. On écrit 12 ∈ ℕ et 4,5 ∉ ℕ.',
  'Dire que 35 est un <b>multiple</b> de 7, c\'est dire que 35 = 7 × 5, donc que 35 est <b>divisible</b> par 7 (7 est un diviseur de 35).',
  '0 est multiple de tout entier (0 = 35 × 0). Tout entier est multiple de lui-même et de 1. Le plus petit diviseur d\'un entier non nul est 1, le plus grand est lui-même. 0 est un nombre pair.',
  'Règles de calcul : on fait d\'abord les parenthèses, puis les multiplications et divisions, puis les additions et soustractions.'],
 form:[
  'Divisible par <b>2</b> : se termine par 0, 2, 4, 6 ou 8.    Par <b>5</b> : se termine par 0 ou 5.    Par <b>10</b> : se termine par 0.',
  'Par <b>25</b> : se termine par 00, 25, 50 ou 75.',
  'Par <b>3</b> : la somme des chiffres est divisible par 3.    Par <b>9</b> : la somme des chiffres est divisible par 9.'],
 ex:{q:'Le nombre 4 725 est-il divisible par 2 ? par 3 ? par 5 ? par 9 ? par 25 ? Donne aussi les diviseurs de 36.',
  st:['Il se termine par 5 : pas divisible par 2, mais divisible par 5. Il se termine par 25 : divisible par 25.',
      'Somme des chiffres : 4 + 7 + 2 + 5 = 18. 18 est divisible par 3 et par 9, donc 4 725 aussi.',
      'Diviseurs de 36 : 36 = 1 × 36 = 2 × 18 = 3 × 12 = 4 × 9 = 6 × 6.'],
  r:'4 725 est divisible par <b>3, 5, 9 et 25</b> (pas par 2). Diviseurs de 36 : <b>1, 2, 3, 4, 6, 9, 12, 18, 36</b>'},
 pieges:[
  'Pour 3 et 9, on regarde la <b>somme des chiffres</b>, pas le dernier chiffre.',
  'Un nombre peut être divisible par 3 sans l\'être par 9 : 12 (1 + 2 = 3) l\'est par 3, pas par 9.',
  'Dans 13 − (7 + 5), calcule d\'abord la parenthèse : 13 − 12 = 1 (et non 13 − 7 + 5).'],
 mini:[
  {q:'Écris tous les diviseurs de 20.', r:'<b>1, 2, 4, 5, 10, 20</b> (car 20 = 1×20 = 2×10 = 4×5)'},
  {q:'5 130 est-il divisible par 9 ?', r:'5 + 1 + 3 + 0 = 9, divisible par 9 : <b>oui</b>.'}],
 chk:[['4725%2!==0&&4725%5===0&&4725%25===0&&4725%3===0&&4725%9===0','true'],['4+7+2+5','18'],['[1,2,3,4,6,9,12,18,36].every(d=>36%d===0)','true'],['Array.from({length:36},(_,i)=>i+1).filter(d=>36%d===0).join()==="1,2,3,4,6,9,12,18,36"','true'],['Array.from({length:20},(_,i)=>i+1).filter(d=>20%d===0).join()==="1,2,4,5,10,20"','true'],['5130%9','0'],['738%9','0'],['13*4','52'],['13-(7+5)','1']]
},

'6e — Nombres décimaux': {
 ess:[
  'Un <b>nombre décimal</b> s\'écrit avec une virgule. Dans 15,8 : la <b>partie entière</b> est 15 et la <b>partie décimale</b> est 0,8. Tout entier naturel est un décimal : ℕ ⊂ 𝔇.',
  'On peut ajouter des zéros après la dernière décimale : 15,8 = 15,80 = 15,800.',
  'Pour <b>comparer</b>, on compare d\'abord les parties entières, puis les chiffres des dixièmes, des centièmes… Exemple : 3,28 < 3,5 car 3,28 < 3,50.',
  'Priorités : parenthèses, puis × et ÷, puis + et −. Dans une addition on parle de <b>termes</b> ; dans une multiplication, de <b>facteurs</b> ; dans une division, du <b>dividende</b> et du <b>diviseur</b>.'],
 form:[
  'Addition et soustraction : on <b>aligne les virgules</b>.',
  'On peut <b>regrouper</b> des termes ou des facteurs pour calculer plus vite.',
  'Pour multiplier une somme par un nombre, on multiplie chaque terme puis on additionne : 3 × (10 + 2) = 3 × 10 + 3 × 2 = 36.',
  'Le symbole <b>≈</b> sert pour une valeur approchée. Exemple : 10 ÷ 3 ≈ 3,33 (au centième près).'],
 ex:{q:'Calcule 7,54 + 2,5 + 1,46 + 31 + 7,5 en regroupant les termes, puis 20 − 3 × 4.',
  st:['On regroupe ceux qui s\'additionnent « facilement » : (7,54 + 1,46) + (2,5 + 7,5) + 31.',
      '7,54 + 1,46 = 9 ; 2,5 + 7,5 = 10 ; donc 9 + 10 + 31 = 50.',
      'Pour 20 − 3 × 4 : la multiplication d\'abord. 3 × 4 = 12, puis 20 − 12 = 8.'],
  r:'La somme vaut <b>50</b> ; 20 − 3 × 4 = <b>8</b>'},
 pieges:[
  'Ne compare pas 2,064 et 2,15 comme des entiers : 2,064 < 2,15 (on compare 2,064 et 2,150).',
  '30 + 7 × 13 = 30 + 91 = 121, et non 37 × 13.',
  'Quand tu additionnes 5,7 + 3,45, <b>aligne les virgules</b> : 5,70 + 3,45 = 9,15.'],
 mini:[
  {q:'Calcule 12,5 − 4,75.', r:'12,50 − 4,75 = <b>7,75</b>'},
  {q:'Calcule 25 × 1,994 × 4 en regroupant.', r:'(25 × 4) × 1,994 = 100 × 1,994 = <b>199,4</b>'}],
 chk:[['7.54+2.5+1.46+31+7.5','50'],['20-3*4','8'],['12.5-4.75','7.75'],['25*1.994*4','199.4'],['30+7*13','121'],['5.7+3.45','9.15'],['(4.3+5.7)*2','20'],['3.28<3.5&&2.064<2.15&&2.15<2.7','true']]
},

'6e — Fractions': {
 ess:[
  'Le <b>quotient</b> de a par b (b non nul) est le nombre q tel que a = b × q. On l\'écrit {a¦b}. Dans {5¦8}, 5 est le <b>numérateur</b> et 8 le <b>dénominateur</b> : ce sont les <b>termes</b> de la fraction.',
  'Les <b>fractions égales</b> : on ne change pas une fraction en multipliant ou en divisant ses deux termes par le même nombre non nul. Exemple : {3¦4} = {6¦8}.',
  'Une <b>fraction décimale</b> a pour dénominateur 1, 10, 100, 1 000… Exemple : 3,587 = {3 587¦1 000}.',
  'Prendre les {3¦4} d\'un coupon de 8 m de tissu : on divise par 4 puis on multiplie par 3.'],
 form:[
  'Même dénominateur : {a¦c} + {b¦c} = {a + b¦c}    et    {a¦c} − {b¦c} = {a − b¦c}',
  'Multiplier une fraction par un entier : {2¦5} × 3 = {6¦5}',
  'Simplifier : on divise les deux termes par le même nombre.',
  'Valeurs approchées au dixième près : 2,3 < {7¦3} < 2,4. 2,3 est la valeur approchée <b>par défaut</b>, 2,4 la valeur approchée <b>par excès</b>.'],
 ex:{q:'Simplifie {12¦18} au maximum. Puis calcule les {3¦4} de 8 mètres de tissu.',
  st:['12 et 18 sont tous deux divisibles par 6. {12 ÷ 6¦18 ÷ 6} = {2¦3}.',
      'Les {3¦4} de 8 m : 8 ÷ 4 = 2 m pour un quart.',
      'Trois quarts : 2 × 3 = 6 m.'],
  r:'{12¦18} = <b>{2¦3}</b> ; les {3¦4} de 8 m font <b>6 m</b>'},
 pieges:[
  'Pour additionner {3¦7} + {2¦7}, on additionne <b>seulement les numérateurs</b> : {5¦7} (pas {5¦14}).',
  'Pour obtenir une fraction égale, multiplie (ou divise) <b>les deux termes</b>, pas un seul.',
  '{9¦5} − {4¦5} = {5¦5} = 1 : une fraction dont les deux termes sont égaux vaut 1.'],
 mini:[
  {q:'Calcule {3¦7} + {2¦7}.', r:'<b>{5¦7}</b>'},
  {q:'Écris une fraction égale à {3¦4} qui a pour dénominateur 12.', r:'{3 × 3¦4 × 3} = <b>{9¦12}</b>'}],
 chk:[['12/18','2/3'],['8/4*3','6'],['3/7+2/7','5/7'],['9/12','3/4'],['9/5-4/5','1'],['2/5*3','6/5'],['7/3>2.3&&7/3<2.4','true'],['6/8','3/4']]
},

'6e — Calcul littéral': {
 ess:[
  'En calcul littéral, une <b>lettre représente un nombre</b>. On remplace la lettre par sa valeur, puis on calcule.',
  'Exemple : la valeur de 3 × a + 2 pour a = 5 est 3 × 5 + 2 = 17.',
  'Les formules usuelles s\'écrivent avec des lettres. Elles permettent aussi de retrouver une longueur manquante.'],
 form:[
  'Rectangle : aire = L × ℓ    périmètre = 2 × (L + ℓ)',
  'Carré de côté c : aire = c × c.    Cube d\'arête a : volume = a × a × a.',
  'Pavé droit : volume = aire de la base × hauteur.'],
 ex:{q:'Un rectangle de périmètre 30 cm a une largeur de 5 cm. Quelle est sa longueur ? Calcule ensuite 2 × x + 3 × y pour x = 4 et y = 2.',
  st:['Périmètre : 2 × (L + 5) = 30.',
      'Donc L + 5 = 30 ÷ 2 = 15, et L = 15 − 5 = 10 cm.',
      'Pour 2 × x + 3 × y : on remplace x par 4 et y par 2. 2 × 4 + 3 × 2 = 8 + 6 = 14.'],
  r:'Longueur = <b>10 cm</b> ; 2 × x + 3 × y = <b>14</b>'},
 pieges:[
  'Respecte les priorités : 3 × a + 2 avec a = 5 donne 15 + 2 = 17, pas 3 × 7.',
  'Si le périmètre est 30, alors 2 × (L + ℓ) = 30 donne L + ℓ = 15 (la moitié), et non L = 15. Il faut ensuite retrancher la largeur.',
  'Ne confonds pas aire (L × ℓ) et périmètre (2 × (L + ℓ)).'],
 mini:[
  {q:'Un rectangle d\'aire 48 cm² a une longueur de 8 cm. Quelle est sa largeur ?', r:'48 ÷ 8 = <b>6 cm</b>'},
  {q:'Calcule 4 × a + 1 pour a = 6.', r:'4 × 6 + 1 = <b>25</b>'}],
 chk:[['2*(10+5)','30'],['30/2-5','10'],['2*4+3*2','14'],['48/8','6'],['4*6+1','25'],['3*5+2','17'],['120/(5*4)','6']]
},

'6e — Figures symétriques par rapport à une droite': {
 ess:[
  'A et B sont <b>symétriques par rapport à (D)</b> signifie que (D) est la <b>médiatrice de [AB]</b>. Un point de (D) est son propre symétrique.',
  'Pour construire le symétrique A′ de A : on trace la <b>perpendiculaire à (D)</b> passant par A, elle coupe (D) en I ; puis on place A′ tel que I soit le <b>milieu de [AA′]</b>.',
  'La symétrie conserve : l\'<b>alignement</b>, les <b>longueurs</b>, les <b>mesures d\'angles</b>, le <b>parallélisme</b>.',
  'Une droite (D) est un <b>axe de symétrie</b> d\'une figure (F) si le symétrique de chaque point de (F) est un point de (F).'],
 form:[
  'Carré : <b>4</b> axes.  Rectangle non carré : <b>2</b> axes.  Losange non carré : <b>2</b> axes (ses diagonales).',
  'Parallélogramme quelconque : <b>aucun</b> axe.  Cercle : une <b>infinité</b> d\'axes (toute droite passant par son centre).',
  'Un segment [AB] a pour axes : sa médiatrice et la droite (AB).'],
 ex:{q:'A est à 4 cm de la droite (D). Où est son symétrique A′, et quelle est la distance AA′ ? Un segment de 5 cm et un angle de 40° ont leurs symétriques : quelles mesures ?',
  st:['I (pied de la perpendiculaire) est le milieu de [AA′]. Donc IA′ = IA = 4 cm.',
      'AA′ = 2 × 4 = 8 cm.',
      'La symétrie conserve les longueurs et les angles : le segment mesure encore 5 cm et l\'angle encore 40°.'],
  r:'A′ est de l\'autre côté de (D), à 4 cm ; AA′ = <b>8 cm</b> ; <b>5 cm</b> et <b>40°</b>'},
 pieges:[
  'La droite (D) doit être <b>perpendiculaire</b> à (AA′) : ne trace pas un segment oblique.',
  'Un rectangle (non carré) n\'a pas 4 axes : il en a 2 (pas les diagonales).',
  'Un parallélogramme quelconque n\'a pas d\'axe de symétrie (mais un centre de symétrie).'],
 mini:[
  {q:'Combien d\'axes de symétrie possède un carré ?', r:'<b>4</b> (2 diagonales et 2 médiatrices de côtés)'},
  {q:'L\'angle ABC mesure 65°. Que mesure son symétrique par rapport à une droite ?', r:'<b>65°</b> (les mesures d\'angles sont conservées)'}],
 chk:[['2*4','8']]
},

'6e — Figures symétriques par rapport à un point': {
 ess:[
  'A et B sont <b>symétriques par rapport au point O</b> signifie que <b>O est le milieu de [AB]</b>.',
  'Construction du symétrique de A : trace la droite (AO) puis, <b>au compas</b>, reporte la longueur OA de l\'autre côté de O. Tu obtiens A′ avec OA′ = OA.',
  'La symétrie centrale conserve l\'<b>alignement</b>, les <b>longueurs</b> et les <b>mesures d\'angles</b>. Deux <b>droites symétriques</b> par rapport à un point sont <b>parallèles</b>.',
  'Un point O est <b>centre de symétrie</b> d\'une figure si le symétrique de chaque point de la figure est un point de la figure.'],
 form:[
  'Rectangle et parallélogramme : centre de symétrie = <b>point d\'intersection des diagonales</b>.',
  'Cercle : centre de symétrie = <b>son centre</b>.  Triangle : <b>aucun</b> centre de symétrie.'],
 ex:{q:'A′ est le symétrique de A par rapport à O, avec OA = 4 cm. Calcule OA′ et AA′. Où est le centre de symétrie d\'un rectangle ?',
  st:['O est le milieu de [AA′] : OA′ = OA = 4 cm.',
      'AA′ = OA + OA′ = 4 + 4 = 8 cm.',
      'Dans un rectangle, les diagonales se coupent en leur milieu : le centre de symétrie est leur point d\'intersection.'],
  r:'OA′ = <b>4 cm</b> ; AA′ = <b>8 cm</b> ; centre = <b>intersection des diagonales</b>'},
 pieges:[
  'Ne confonds pas symétrie par rapport à un <b>point</b> (O milieu de [AA′]) et par rapport à une <b>droite</b> (médiatrice).',
  'Un triangle équilatéral a 3 axes de symétrie mais <b>pas de centre</b> de symétrie.',
  'Deux droites symétriques par rapport à un point sont parallèles, pas perpendiculaires.'],
 mini:[
  {q:'O est le milieu de [AA′] et OA = 3,5 cm. Calcule AA′.', r:'AA′ = 2 × 3,5 = <b>7 cm</b>'},
  {q:'Un triangle équilatéral possède-t-il un centre de symétrie ?', r:'<b>Non</b>.'}],
 chk:[['4+4','8'],['2*3.5','7']]
},

'6e — Glissement': {
 ess:[
  'Un <b>glissement</b> déplace une figure comme un objet qu\'on pousse sur une table, sans le tourner. Il est défini par une <b>direction</b>, un <b>sens</b> et une <b>longueur</b>.',
  'Pour construire le correspondant de A : on trace la droite passant par A qui a la direction du glissement, puis on place le point A′ <b>à la bonne distance</b> et <b>dans le bon sens</b>.',
  'Le glissement <b>conserve</b> : les longueurs, les mesures d\'angles, l\'alignement et les milieux.'],
 form:[
  'Segment → segment de <b>même longueur</b>.    Angle → angle de <b>même mesure</b>.',
  'Points alignés → points alignés.    Milieu → milieu du segment correspondant.'],
 ex:{q:'Un glissement a pour direction (AB), pour sens de A vers B et pour longueur 3 cm. Un segment [MN] mesure 5 cm et un angle xOy mesure 70°. Que deviennent-ils ?',
  st:['Le point M se déplace de 3 cm dans la direction (AB), de A vers B ; N de même.',
      'Le glissement conserve les longueurs : M′N′ = MN = 5 cm.',
      'Il conserve les angles : l\'angle correspondant mesure encore 70°.'],
  r:'M′N′ = <b>5 cm</b> ; angle correspondant = <b>70°</b>'},
 pieges:[
  'Le glissement ne change pas la taille ni la forme : il ne fait pas « tourner » la figure.',
  'Il faut les <b>trois</b> informations : direction, sens et longueur (le sens oppose A→B à B→A).',
  'Le milieu d\'un segment a pour correspondant le milieu du segment correspondant.'],
 mini:[
  {q:'Par quoi un glissement est-il défini ?', r:'Par une <b>direction</b>, un <b>sens</b> et une <b>longueur</b>.'},
  {q:'Un segment de 6 cm glisse. Quelle est la longueur du segment correspondant ?', r:'<b>6 cm</b>'}],
 chk:[]
},

'6e — Proportionnalité': {
 ess:[
  'Un tableau est un <b>tableau de proportionnalité</b> si on passe d\'une ligne à l\'autre en <b>multipliant par un même nombre non nul</b> : le <b>coefficient de proportionnalité</b>.',
  'Pour le trouver, on divise un nombre de la 2e ligne par le nombre correspondant de la 1re.',
  'Un <b>pourcentage</b> est un opérateur : prendre 20 % d\'une quantité, c\'est la multiplier par {20¦100}. Un pourcentage n\'a pas d\'unité.',
  'L\'<b>échelle</b> d\'un plan est le quotient de la longueur sur le plan par la longueur réelle (en mêmes unités). À l\'échelle {1¦50}, 1 cm sur le plan représente 50 cm en réalité.'],
 form:[
  'Coefficient = nombre de la 2e ligne ÷ nombre de la 1re ligne.',
  'p % d\'une quantité Q : <b>Q × {p¦100}</b>.',
  'Longueur réelle = longueur sur le plan × dénominateur de l\'échelle.'],
 ex:{q:'5 kg de riz coûtent 3 500 F. Combien coûtent 8 kg ? Puis un article à 2 000 F bénéficie d\'une remise de 10 % : quel est son nouveau prix ?',
  st:['Coefficient : 3 500 ÷ 5 = 700 F pour 1 kg.',
      '8 kg coûtent 8 × 700 = 5 600 F.',
      'Remise : 10 % de 2 000 = 2 000 × {10¦100} = 200 F.',
      'Nouveau prix : 2 000 − 200 = 1 800 F.'],
  r:'8 kg coûtent <b>5 600 F</b> ; nouveau prix = <b>1 800 F</b>'},
 pieges:[
  'Vérifie <b>toutes</b> les colonnes : (3 ; 5 ; 7) et (9 ; 15 ; 22) n\'est pas proportionnel car 22 ≠ 7 × 3.',
  'Une remise de 10 % se <b>soustrait</b> du prix : ce n\'est pas le prix final.',
  'À l\'échelle {1¦100 000}, il faut convertir : 3 cm sur la carte = 300 000 cm = 3 km.'],
 mini:[
  {q:'Calcule 20 % de 150.', r:'150 × 20 ÷ 100 = <b>30</b>'},
  {q:'Sur un plan à l\'échelle {1¦50}, 4 cm représentent quelle longueur réelle ?', r:'4 × 50 = <b>200 cm</b>, soit 2 m'}],
 chk:[['3500/5','700'],['8*700','5600'],['2000*10/100','200'],['2000-200','1800'],['150*20/100','30'],['4*50','200'],['3*100000/100000','3'],['15/5===9/3&&22/7!==3','true'],['6/2','3']]
},

'6e — Statistique': {
 ess:[
  'La <b>population</b> est l\'ensemble des êtres étudiés ; chacun est un <b>individu</b>. Le <b>caractère</b> est la propriété étudiée ; ses valeurs sont les <b>modalités</b>.',
  'Un caractère est <b>quantitatif</b> si ses valeurs sont des nombres (âge, taille, note) ; <b>qualitatif</b> sinon (couleur préférée).',
  'L\'<b>effectif</b> d\'une modalité est le nombre d\'individus qui la prennent. L\'effectif total est N.',
  'On représente une série par un <b>diagramme en bâtons</b> (hauteur proportionnelle à l\'effectif) ou un <b>diagramme semi-circulaire</b> (demi-disque partagé en secteurs).'],
 form:[
  'Moyenne = <b>somme de toutes les valeurs ÷ effectif total</b>.',
  'Fréquence d\'une modalité : <b>f = {n¦N}</b> (effectif ÷ effectif total) ; elle peut s\'écrire en %.',
  'Diagramme semi-circulaire : angle d\'un secteur = <b>f × 180°</b>.'],
 ex:{q:'Calcule la moyenne des notes 12, 8, 10, 14 et 6. Puis la fréquence d\'une modalité d\'effectif 6 sur 24, et l\'angle de son secteur dans un diagramme semi-circulaire.',
  st:['Somme : 12 + 8 + 10 + 14 + 6 = 50. Effectif total : 5. Moyenne : 50 ÷ 5 = 10.',
      'Fréquence : {6¦24} = {1¦4} = 25 %.',
      'Angle : 25 % de 180° = 180° ÷ 4 = 45°.'],
  r:'Moyenne = <b>10</b> ; fréquence = <b>25 %</b> ; angle = <b>45°</b>'},
 pieges:[
  'Dans un diagramme semi-circulaire, le total est <b>180°</b> (et non 360°).',
  'Pour la moyenne, divise par le <b>nombre de valeurs</b>, pas par la somme.',
  'Une couleur, un métier ou un prénom sont des caractères <b>qualitatifs</b> : on ne calcule pas de moyenne.'],
 mini:[
  {q:'Fréquence (en %) d\'une modalité d\'effectif 12 sur un total de 40 ?', r:'{12¦40} = 0,30 = <b>30 %</b>'},
  {q:'Moyenne des valeurs 7, 9, 11 et 13 ?', r:'(7 + 9 + 11 + 13) ÷ 4 = 40 ÷ 4 = <b>10</b>'}],
 chk:[['(12+8+10+14+6)/5','10'],['6/24','0.25'],['0.25*180','45'],['12/40','0.3'],['(7+9+11+13)/4','10']]
},

'6e — Prop. & Déf.': { memo:true }

});
