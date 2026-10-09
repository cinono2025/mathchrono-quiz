/* ===== Résumés de cours — classe de 4e (fiches pédagogiques de 4e, programme du Bénin) =====
   Chaque thème : ess, form, ex (exemple résolu), pieges, mini (2 questions), chk (contrôles numériques).
   Balisage : <b>…</b> ; fraction {numérateur¦dénominateur}. */
window.MQ_COURS = window.MQ_COURS || {};
window.MQ_COURS['4e'] = Object.assign(window.MQ_COURS['4e'] || {}, {

'4e — Angles au centre & cordes': {
 ess:[
  'Un <b>angle au centre</b> est un angle dont le <b>sommet est le centre du cercle</b>. Il intercepte un <b>arc</b> de cercle.',
  'Une <b>corde</b> est un segment dont les deux extrémités sont sur le cercle. Le <b>diamètre</b> est la plus longue des cordes.',
  'La longueur d\'un arc est <b>proportionnelle</b> à la mesure de l\'angle au centre qui l\'intercepte. Un tour complet : 360° pour 2πr.',
  'Dans un même cercle : <b>même angle au centre ⟺ même longueur d\'arc</b> ; et deux arcs de même longueur ont des <b>cordes de même longueur</b>.'],
 form:[
  'Longueur de l\'arc : L = {α × 2πr¦360}   ou   L = {α × πr¦180}  (α en degrés)',
  'Pour retrouver l\'angle : α = {360 × L¦2πr}',
  'Périmètre du cercle P = 2πr = longueur du petit arc + longueur du grand arc'],
 ex:{q:'Dans un cercle de rayon 6 cm, un angle au centre mesure 60°. Quelle est la longueur de l\'arc intercepté ? (π ≈ 3,14)',
  st:['Le périmètre du cercle est 2πr = 2 × 3,14 × 6 = 37,68 cm.',
      '60° est le sixième de 360° (360 ÷ 60 = 6). L\'arc est donc le sixième du périmètre.',
      'L = 37,68 ÷ 6 = 6,28 cm.'],
  r:'L = <b>6,28 cm</b>'},
 pieges:[
  'Mélanger les deux écritures : on associe 2πr avec 360° ({α × 2πr¦360}) ou πr avec 180° ({α × πr¦180}), jamais 2πr avec 180°.',
  'Oublier que deux angles au centre égaux ne donnent des arcs égaux que <b>dans le même cercle</b> (ou dans deux cercles de même rayon).',
  'Confondre « corde » (un segment) et « arc » (un morceau de cercle).'],
 mini:[
  {q:'Un angle au centre de 120° intercepte un arc de 12 cm. Quelle est la longueur de l\'arc intercepté par un angle de 60° dans le même cercle ?', r:'60° est la moitié de 120° : l\'arc mesure <b>6 cm</b>'},
  {q:'Cercle de rayon 5 cm, angle au centre de 90° : longueur de l\'arc ? (π ≈ 3,14)', r:'L = {90 × 3,14 × 5¦180} = <b>7,85 cm</b>'}],
 chk:[['60*2*3.14*6/360','6.28'],['12*60/120','6'],['90*3.14*5/180','7.85']]
},

'4e — Distance & équidistance': {
 ess:[
  'La <b>distance d\'un point A à une droite (D)</b> est la longueur AH, où H est le pied de la perpendiculaire à (D) passant par A. Si A est sur (D), la distance est <b>0</b>.',
  'AH est le <b>plus court chemin</b> : pour tout point M de (D), AH ≤ AM.',
  'La <b>distance entre deux droites parallèles</b> est la longueur AB d\'un segment perpendiculaire aux deux droites (A sur (D₁), B sur (D₂)).',
  'L\'<b>axe médian</b> de deux parallèles est la médiatrice de [AB] : chacun de ses points est <b>équidistant</b> des deux droites.',
  'Un point de la <b>bissectrice</b> d\'un angle est équidistant des deux côtés de l\'angle. Deux droites sécantes ont <b>deux axes de symétrie</b> (les bissectrices), perpendiculaires entre eux.'],
 form:[
  'M sur la bissectrice de l\'angle xOy ⟹ distance de M à (Ox) = distance de M à (Oy)',
  'Réciproque : un point équidistant de deux droites sécantes est sur l\'un de leurs axes de symétrie'],
 ex:{q:'Deux droites parallèles (D₁) et (D₂) sont à 9 cm l\'une de l\'autre. Un point M est sur leur axe médian. Quelle est la distance de M à chacune ?',
  st:['L\'axe médian est la médiatrice de [AB], avec AB = 9 cm (A sur (D₁), B sur (D₂)).',
      'M est équidistant des deux droites : sa distance à (D₁) est égale à sa distance à (D₂).',
      'Ces deux distances sont donc égales à la moitié de 9 cm.'],
  r:'M est à <b>4,5 cm</b> de chacune des droites'},
 pieges:[
  'Mesurer la distance avec un segment <b>oblique</b> : il faut la perpendiculaire.',
  'Croire que la distance de A à (D) est AM pour n\'importe quel M : seul le pied H donne la plus petite distance.',
  'Oublier qu\'il y a <b>deux</b> bissectrices (deux axes de symétrie) pour deux droites sécantes.'],
 mini:[
  {q:'Deux parallèles sont à 8 cm l\'une de l\'autre. À quelle distance de chacune se trouve un point de l\'axe médian ?', r:'<b>4 cm</b>'},
  {q:'A appartient à (D). Quelle est la distance de A à (D) ?', r:'<b>0</b>'}],
 chk:[['9/2','4.5'],['8/2','4']]
},

'4e — Triangles : droite des milieux & Pythagore': {
 ess:[
  '<b>Droite des milieux</b> : dans un triangle, la droite qui passe par les milieux de deux côtés est <b>parallèle</b> au troisième côté, et le segment qui joint ces milieux mesure la <b>moitié</b> du troisième côté.',
  'Autre propriété : une droite qui passe par le milieu d\'un côté et qui est parallèle à un deuxième côté passe par le <b>milieu du troisième côté</b>.',
  '<b>Pythagore</b> : dans un triangle rectangle, le carré de l\'hypoténuse (le côté en face de l\'angle droit) est égal à la somme des carrés des deux autres côtés.',
  '<b>Réciproque</b> : si le carré du plus grand côté est égal à la somme des carrés des deux autres, alors le triangle est rectangle.'],
 form:[
  'I milieu de [AB], J milieu de [AC] ⟹ (IJ) ∥ (BC) et IJ = {BC¦2}',
  'ABC rectangle en A ⟹ BC² = AB² + AC²',
  'Si BC² = AB² + AC² ⟹ ABC est rectangle en A'],
 ex:{q:'ABC est rectangle en A avec AB = 9 cm et AC = 12 cm. Calculer BC.',
  st:['L\'angle droit est en A, donc l\'hypoténuse est [BC].',
      'D\'après Pythagore : BC² = AB² + AC² = 9² + 12² = 81 + 144 = 225.',
      'BC est positif : BC = √225 = 15 cm.'],
  r:'BC = <b>15 cm</b>'},
 pieges:[
  'Mettre dans la formule un côté de l\'angle droit à la place de l\'hypoténuse : l\'hypoténuse est toujours <b>seule</b> d\'un côté du signe =.',
  'Pour la réciproque, comparer avec le <b>plus grand côté</b> : 5² + 6² = 61 ≠ 8² = 64, donc (5 ; 6 ; 8) n\'est pas rectangle.',
  'Prendre IJ = 2 × BC au lieu de IJ = BC ÷ 2 (le segment des milieux est le plus petit).'],
 mini:[
  {q:'I et J sont les milieux de [AB] et [AC], et BC = 14 cm. Combien mesure IJ ?', r:'IJ = 14 ÷ 2 = <b>7 cm</b>'},
  {q:'Un triangle a pour côtés 7 cm, 24 cm et 25 cm. Est-il rectangle ?', r:'7² + 24² = 49 + 576 = 625 = 25². <b>Oui</b>, il est rectangle (hypoténuse 25).'}],
 chk:[['Math.sqrt(9**2+12**2)','15'],['14/2','7'],['7**2+24**2===25**2','true'],['5**2+6**2===8**2','false']]
},

'4e — Droites remarquables du triangle': {
 ess:[
  'Les trois <b>hauteurs</b> d\'un triangle sont concourantes : leur point commun est l\'<b>orthocentre</b>.',
  'Les trois <b>bissectrices</b> sont concourantes : leur point commun est le centre du <b>cercle inscrit</b> (intérieur au triangle et tangent à ses trois côtés).',
  'Une <b>médiane</b> passe par un sommet et le milieu du côté opposé. Les trois médianes se coupent au <b>centre de gravité</b> G.',
  'G est situé aux <b>deux tiers</b> de chaque médiane à partir du sommet.',
  'Triangle isocèle : la bissectrice issue du sommet principal est aussi hauteur, médiane et médiatrice. Triangle équilatéral : tous les centres sont confondus.'],
 form:[
  'Médiane [AA′] et centre de gravité G : AG = {2¦3} × AA′  et  GA′ = {1¦3} × AA′',
  'Si dans un triangle une même droite est à la fois deux des quatre droites remarquables relatives au même sommet A (bissectrice de l\'angle A, médiane, hauteur issues de A, médiatrice de [BC]) alors le triangle est <b>isocèle</b> (en ce sommet)'],
 ex:{q:'Dans le triangle ABC, la médiane [AA′] mesure 15 cm et G est le centre de gravité. Calculer AG et GA′.',
  st:['G est aux deux tiers de la médiane à partir du sommet A.',
      'AG = {2¦3} × 15 = 10 cm.',
      'GA′ = AA′ − AG = 15 − 10 = 5 cm (c\'est le tiers de la médiane).'],
  r:'AG = <b>10 cm</b> et GA′ = <b>5 cm</b>'},
 pieges:[
  'Prendre les deux tiers à partir du <b>milieu</b> du côté : c\'est à partir du <b>sommet</b>.',
  'Confondre médiane (passe par le <b>milieu</b> du côté) et hauteur (<b>perpendiculaire</b> au côté).',
  'Dire que le cercle inscrit passe par les sommets : c\'est le cercle <b>circonscrit</b>.'],
 mini:[
  {q:'Une médiane [AA′] mesure 12 cm. Combien vaut AG ?', r:'AG = {2¦3} × 12 = <b>8 cm</b>'},
  {q:'Comment s\'appelle le point de concours des trois hauteurs ?', r:'<b>L\'orthocentre</b>'}],
 chk:[['2/3*15','10'],['15-10','5'],['2/3*12','8']]
},

'4e — Polygones réguliers': {
 ess:[
  'Un <b>polygone régulier</b> est un polygone inscriptible dans un cercle et dont tous les <b>côtés ont la même longueur</b>.',
  'Ses sommets partagent le cercle en arcs égaux : les <b>angles au centre</b> sont tous égaux.',
  'Noms à connaître : triangle équilatéral (3 côtés), carré (4), <b>pentagone</b> (5), hexagone (6), octogone (8), <b>décagone</b> (10).',
  'Pour construire un décagone à partir d\'un pentagone régulier, on trace les bissectrices des angles au centre : elles recoupent le cercle en 5 nouveaux points.'],
 form:[
  'Polygone régulier à n côtés : angle au centre = {360°¦n}',
  'Pentagone : 72°    Hexagone : 60°    Octogone : 45°    Décagone : 36°    Carré : 90°'],
 ex:{q:'Un polygone régulier a des angles au centre de 24°. Combien a-t-il de côtés ?',
  st:['Pour un polygone à n côtés, l\'angle au centre vaut 360° ÷ n.',
      'Donc 360 ÷ n = 24, c\'est-à-dire n = 360 ÷ 24.',
      'n = 15.'],
  r:'Le polygone a <b>15 côtés</b>'},
 pieges:[
  'Confondre l\'angle au centre ({360°¦n}) avec l\'angle du polygone (l\'angle entre deux côtés).',
  'Croire qu\'un losange (4 côtés égaux) est un polygone régulier : un losange n\'est pas inscriptible dans un cercle (sauf si c\'est un carré).',
  'Mélanger pentagone (5 côtés) et décagone (10 côtés).'],
 mini:[
  {q:'Quel est l\'angle au centre d\'un décagone régulier ?', r:'360° ÷ 10 = <b>36°</b>'},
  {q:'Un polygone régulier a des angles au centre de 30°. Combien a-t-il de côtés ?', r:'360 ÷ 30 = <b>12 côtés</b>'}],
 chk:[['360/24','15'],['360/10','36'],['360/30','12'],['360/5','72'],['360/8','45']]
},

'4e — Nombres décimaux': {
 ess:[
  'Pour n entier naturel : <b>10⁻ⁿ = {1¦10ⁿ}</b> = 0,00…01 (avec n chiffres après la virgule). Exemple : 10⁻³ = 0,001. Et 10⁰ = 1.',
  'Un décimal peut s\'écrire <b>a × 10ⁿ</b> avec a entier relatif et n entier relatif, de plusieurs façons : 0,0045 = 45 × 10⁻⁴.',
  'Un <b>décimal d\'ordre n</b> s\'écrit (entier relatif) × 10⁻ⁿ. Exemple : 7,36 = 736 × 10⁻² est d\'ordre 2.',
  'La <b>troncature à n décimales</b> garde les n premiers chiffres après la virgule, sans arrondir : celle de 3,489371 à 2 décimales est 3,48.'],
 form:[
  '10ⁿ × 10ᵐ = 10ⁿ⁺ᵐ    (10ⁿ)ᵐ = 10ⁿˣᵐ    {10ⁿ¦10ᵐ} = 10ⁿ⁻ᵐ',
  '(a × 10ⁿ) × (b × 10ᵐ) = (a × b) × 10ⁿ⁺ᵐ',
  'Pour comparer : on écrit les deux nombres avec la <b>même puissance de 10</b>, puis on compare les entiers.'],
 ex:{q:'Calculer A = (4 × 10⁻³) × (5 × 10⁶) et donner le résultat sous la forme a × 10ⁿ, puis en écriture ordinaire.',
  st:['On regroupe : A = (4 × 5) × (10⁻³ × 10⁶).',
      '4 × 5 = 20 et 10⁻³ × 10⁶ = 10⁻³⁺⁶ = 10³.',
      'A = 20 × 10³ = 20 000.'],
  r:'A = 20 × 10³ = <b>20 000</b>'},
 pieges:[
  'Additionner les exposants quand on <b>multiplie</b> (10⁵ × 10⁻² = 10³), mais ne pas les multiplier : 10⁵ × 10⁻² n\'est pas 10⁻¹⁰.',
  'Croire que 10⁻³ est négatif : 10⁻³ = 0,001 est positif.',
  'Confondre troncature et arrondi : la troncature de 3,489 à 2 décimales est 3,48 (l\'arrondi serait 3,49).'],
 mini:[
  {q:'Écrire 10⁻⁴ en écriture décimale.', r:'<b>0,0001</b> (4 chiffres après la virgule)'},
  {q:'Quelle est la troncature à 2 décimales de 5,6789 ?', r:'<b>5,67</b>'}],
 chk:[['4e-3*5e6','20000'],['10**-4','0.0001'],['Math.floor(5.6789*100)/100','5.67'],['(3e4)*(2e-2)','6e2']]
},

'4e — Nombres rationnels': {
 ess:[
  'Un nombre <b>rationnel</b> peut s\'écrire {a¦b} avec a et b entiers relatifs et b ≠ 0. Leur ensemble se note <b>ℚ</b>. Les décimaux sont aussi des rationnels : 𝔻 ⊂ ℚ.',
  'L\'opposé de {a¦b} est −{a¦b} = {−a¦b} = {a¦−b}.',
  '<b>Comparer</b> : deux positifs, le plus grand est celui qui est le plus loin de 0. Deux négatifs, c\'est l\'inverse : le plus petit est le plus loin de 0. Un négatif est toujours plus petit qu\'un positif.',
  '<b>Additionner</b> : même dénominateur, puis on additionne les numérateurs. <b>Multiplier</b> : numérateur × numérateur, dénominateur × dénominateur. <b>Diviser</b> : multiplier par l\'inverse.'],
 form:[
  '{a¦b} + {c¦b} = {a + c¦b}    {a¦b} × {c¦d} = {a × c¦b × d}',
  'L\'inverse de {a¦b} est {b¦a} (a ≠ 0, b ≠ 0) : {a¦b} × {b¦a} = 1',
  '{a¦b} ÷ {c¦d} = {a¦b} × {d¦c}'],
 ex:{q:'Calculer −{3¦4} + {1¦2}.',
  st:['On cherche un dénominateur commun : 4 (car 4 = 2 × 2).',
      '{1¦2} = {2¦4}.',
      '−{3¦4} + {2¦4} = {−3 + 2¦4} = −{1¦4}.'],
  r:'−{3¦4} + {1¦2} = <b>−{1¦4}</b>'},
 pieges:[
  'Additionner les dénominateurs : {1¦2} + {1¦3} n\'est pas {2¦5}.',
  'Se tromper dans la comparaison de deux négatifs : −{3¦4} < −{2¦3}, car {3¦4} est plus loin de 0 que {2¦3}.',
  'Oublier le signe : (−{2¦3}) × {9¦4} = −{3¦2} (positif × négatif = négatif).'],
 mini:[
  {q:'Calculer {2¦3} × (−{9¦4}).', r:'−{18¦12} = <b>−{3¦2}</b>'},
  {q:'Comparer −{2¦3} et −{3¦4}.', r:'−{2¦3} = −{8¦12} et −{3¦4} = −{9¦12}. Donc <b>−{3¦4} < −{2¦3}</b>'}],
 chk:[['-3/4+1/2','-0.25'],['2/3*(-9/4)','-1.5'],['-3/4<-2/3','true'],['5/6-1/3','0.5'],['(3/4)/(9/8)','2/3']]
},

'4e — Puissances': {
 ess:[
  'aⁿ veut dire a × a × … × a (n facteurs). Exemple : ({2¦3})³ = {2¦3} × {2¦3} × {2¦3} = {8¦27}.',
  '<b>Signe</b> : si n est pair, (−a)ⁿ = aⁿ (positif). Si n est impair, (−a)ⁿ = −aⁿ (négatif). Exemples : (−2)⁴ = 16 ; (−2)³ = −8.',
  'a⁰ = 1 (a ≠ 0) et a⁻ⁿ = {1¦aⁿ}. Exemple : 2² ÷ 2⁵ = 2⁻³ = {1¦8}.',
  'Puissance d\'un produit : (a × b)ⁿ = aⁿ × bⁿ.'],
 form:[
  'aᵐ × aⁿ = aᵐ⁺ⁿ    {aᵐ¦aⁿ} = aᵐ⁻ⁿ    (aᵐ)ⁿ = aᵐˣⁿ',
  '(a × b)ⁿ = aⁿ × bⁿ    {aᵐ¦aᵐ} = 1  (a ≠ 0)'],
 ex:{q:'Calculer A = {2³ × 2⁴¦2⁵}.',
  st:['Au numérateur, on additionne les exposants : 2³ × 2⁴ = 2⁷.',
      'On divise : {2⁷¦2⁵} = 2⁷⁻⁵ = 2².',
      '2² = 4.'],
  r:'A = <b>4</b>'},
 pieges:[
  '(−2)⁴ = 16 mais −2⁴ = −16 : sans parenthèses, le signe « − » reste devant.',
  'aᵐ × aⁿ = aᵐ⁺ⁿ (on <b>additionne</b>) et (aᵐ)ⁿ = aᵐˣⁿ (on <b>multiplie</b>) : ne pas confondre.',
  '(a + b)ⁿ n\'est pas aⁿ + bⁿ. Exemple : (3 + 2)² = 25 mais 3² + 2² = 13.'],
 mini:[
  {q:'Calculer (−2)³.', r:'(−2) × (−2) × (−2) = <b>−8</b>'},
  {q:'Calculer (3 × 2)² avec la règle du produit.', r:'3² × 2² = 9 × 4 = <b>36</b>'}],
 chk:[['2**3*2**4/2**5','4'],['(-2)**3','-8'],['(3*2)**2','36'],['(-2)**4','16'],['(2/3)**3','8/27'],['3**5/3**2','27']]
},

'4e — Expressions algébriques': {
 ess:[
  '<b>Développer</b>, c\'est transformer un produit en somme. <b>Factoriser</b>, c\'est transformer une somme en produit.',
  '<b>Réduire</b> : on regroupe les termes de même sorte (les x avec les x, les nombres avec les nombres).',
  'Pour la <b>valeur numérique</b>, on remplace x par le nombre donné (entre parenthèses s\'il est négatif).',
  'Les <b>identités remarquables</b> servent à développer, à factoriser, et à calculer vite : 101² = (100 + 1)² = 10 201.'],
 form:[
  '(a + b)² = a² + 2ab + b²',
  '(a − b)² = a² − 2ab + b²',
  '(a + b)(a − b) = a² − b²',
  'Facteur commun : ka + kb = k(a + b)'],
 ex:{q:'Développer et réduire (2x − 1)².',
  st:['On utilise (a − b)² = a² − 2ab + b² avec a = 2x et b = 1.',
      'a² = (2x)² = 4x²  ;  2ab = 2 × 2x × 1 = 4x  ;  b² = 1.',
      'Donc (2x − 1)² = 4x² − 4x + 1.'],
  r:'(2x − 1)² = <b>4x² − 4x + 1</b>'},
 pieges:[
  '(a + b)² n\'est <b>pas</b> a² + b² : il manque le double produit 2ab.',
  'Oublier de mettre au carré le coefficient : (2x)² = 4x² (et non 2x²).',
  'Signe du milieu : (a − b)² = a² <b>−</b> 2ab + b², mais le dernier terme b² est toujours <b>positif</b>.'],
 mini:[
  {q:'Factoriser 4x² − 9.', r:'4x² − 9 = (2x)² − 3² = <b>(2x − 3)(2x + 3)</b>'},
  {q:'Calculer 101² avec une identité remarquable.', r:'(100 + 1)² = 10 000 + 200 + 1 = <b>10 201</b>'}],
 chk:[['(2*3-1)**2','4*9-4*3+1'],['4*5**2-9','(2*5-3)*(2*5+3)'],['101**2','10201'],['99*101','9999'],['3*2**2-2*2+1','9'],['(2*(-1)-3)','-5']]
},

'4e — Pyramide': {
 ess:[
  'Une <b>pyramide</b> est obtenue en joignant les sommets d\'un polygone (la <b>base</b>) à un point S (le <b>sommet principal</b>) situé hors du plan de la base.',
  'Les faces latérales sont des triangles. Une pyramide dont la base a n côtés a <b>n + 1 sommets, 2n arêtes et n + 1 faces</b>. Exemple : base carrée → 5 sommets, 8 arêtes, 5 faces.',
  'Pyramide <b>régulière</b> : la base est un polygone régulier et les faces latérales sont des triangles isocèles superposables.',
  '<b>Apothème</b> a : hauteur d\'une face latérale issue de S. <b>Hauteur</b> h : distance de S au plan de la base (dans une pyramide régulière, le pied de la hauteur est le centre du polygone de base).'],
 form:[
  'Aire latérale : Aₗ = {P × a¦2}  (P = périmètre de la base, a = apothème)',
  'Aire totale : Aₜ = A_base + Aₗ',
  'Volume : V = {A_base × h¦3}'],
 ex:{q:'Pyramide régulière à base carrée de côté 6 cm, de hauteur 4 cm et d\'apothème 5 cm. Calculer Aₗ, Aₜ et V.',
  st:['Périmètre de la base : P = 4 × 6 = 24 cm. Aire de la base : 6 × 6 = 36 cm².',
      'Aₗ = {24 × 5¦2} = 60 cm². Aₜ = 36 + 60 = 96 cm².',
      'V = {36 × 4¦3} = 48 cm³.'],
  r:'Aₗ = <b>60 cm²</b> ; Aₜ = <b>96 cm²</b> ; V = <b>48 cm³</b>'},
 pieges:[
  'Oublier le diviseur <b>3</b> dans le volume d\'une pyramide (c\'est le tiers du prisme de même base et de même hauteur).',
  'Confondre apothème (dans une face) et hauteur (de S au centre de la base) : ne pas les échanger dans les formules.',
  'Oublier d\'ajouter l\'aire de la base pour l\'aire totale.'],
 mini:[
  {q:'Une pyramide de volume 48 cm³ a une hauteur de 6 cm. Quelle est l\'aire de sa base ?', r:'B = {3 × 48¦6} = <b>24 cm²</b>'},
  {q:'Pyramide régulière à base carrée de côté 4 cm et d\'apothème 5 cm : aire latérale ?', r:'Aₗ = {16 × 5¦2} = <b>40 cm²</b>'}],
 chk:[['3**2+4**2===5**2','true'],['24*5/2','60'],['36+60','96'],['36*4/3','48'],['3*48/6','24'],['16*5/2','40']]
},

'4e — Cône de révolution': {
 ess:[
  'Un <b>cône de révolution</b> a une base circulaire (rayon r), un sommet S, une hauteur h et une <b>génératrice</b> (ou apothème) a, qui est un segment joignant S à un point du cercle de base.',
  'Son <b>patron</b> est formé d\'un <b>disque</b> (la base) et d\'un <b>secteur circulaire</b> de rayon a (la surface latérale).',
  'L\'arc du secteur a la même longueur que le périmètre du disque de base (2πr). L\'angle du secteur est α = {360 × r¦a}.',
  'Dans le triangle rectangle formé par h, r et a : <b>a² = r² + h²</b>.'],
 form:[
  'Aire latérale : Aₗ = π × r × a',
  'Aire totale : Aₜ = π r a + π r²',
  'Volume : V = {1¦3} × π × r² × h',
  'Angle du secteur : α = {360 × r¦a}'],
 ex:{q:'Un cône a pour rayon r = 3 cm et pour génératrice a = 5 cm. Calculer h, Aₗ, Aₜ et V. (π ≈ 3,14)',
  st:['Pythagore : h² = a² − r² = 25 − 9 = 16, donc h = 4 cm.',
      'Aₗ = π × 3 × 5 = 15π ≈ 47,1 cm². Aire de la base : π × 3² = 9π ≈ 28,26 cm². Aₜ ≈ 47,1 + 28,26 = 75,36 cm².',
      'V = {1¦3} × π × 9 × 4 = 12π ≈ 37,68 cm³.'],
  r:'h = <b>4 cm</b> ; Aₗ ≈ <b>47,1 cm²</b> ; Aₜ ≈ <b>75,36 cm²</b> ; V ≈ <b>37,68 cm³</b>'},
 pieges:[
  'Utiliser la génératrice a à la place de la hauteur h dans le volume : V utilise <b>h</b>.',
  'Oublier le facteur {1¦3} dans le volume.',
  'Oublier le disque de base dans l\'aire totale.'],
 mini:[
  {q:'Pour r = 2 et a = 6, quel est l\'angle α du secteur du patron ?', r:'α = {360 × 2¦6} = <b>120°</b>'},
  {q:'Aire latérale du cône de rayon 2 cm et de génératrice 6 cm ? (π ≈ 3,14)', r:'Aₗ = π × 2 × 6 = 12π ≈ <b>37,68 cm²</b>'}],
 chk:[['Math.sqrt(25-9)','4'],['3.14*3*5','47.1'],['3.14*3*5+3.14*9','75.36'],['3.14*9*4/3','37.68'],['360*2/6','120'],['3.14*12','37.68']]
},

'4e — Sphère & boule': {
 ess:[
  'La <b>sphère</b> de centre O et de rayon r est l\'ensemble des points M de l\'espace tels que <b>OM = r</b> (c\'est la « peau »).',
  'La <b>boule</b> est l\'ensemble des points M tels que <b>OM ≤ r</b> (la sphère et tout son intérieur).',
  'Les formules d\'aire et de volume sont <b>admises</b> en 4e : on les apprend et on les applique.',
  'Si le rayon est multiplié par 2, l\'aire est multipliée par <b>4</b> et le volume par <b>8</b>.'],
 form:[
  'Aire de la sphère : A = 4πr²',
  'Volume de la boule : V = {4πr³¦3}'],
 ex:{q:'Calculer l\'aire de la sphère et le volume de la boule de rayon 3 cm. (π ≈ 3,14)',
  st:['Aire : A = 4 × π × 3² = 36π.',
      'Avec π ≈ 3,14 : A ≈ 36 × 3,14 = 113,04 cm².',
      'Volume : V = {4 × π × 27¦3} = 36π ≈ 113,04 cm³.'],
  r:'A ≈ <b>113,04 cm²</b> et V ≈ <b>113,04 cm³</b> (les deux nombres sont égaux, mais pas les unités !)'},
 pieges:[
  'Écrire r² au lieu de r³ dans le volume (ou l\'inverse dans l\'aire).',
  'Mélanger les unités : une aire s\'exprime en cm², un volume en cm³.',
  'Oublier de diviser par 3 dans le volume de la boule.'],
 mini:[
  {q:'Volume d\'une boule de rayon 6 cm (en fonction de π) ?', r:'V = {4π × 216¦3} = <b>288π cm³</b>'},
  {q:'Aire d\'une sphère de rayon 6 cm (en fonction de π) ?', r:'A = 4π × 36 = <b>144π cm²</b>'}],
 chk:[['4*3**2*3.14','113.04'],['4*27*3.14/3','113.04'],['4*6**3/3','288'],['4*6**2','144']]
},

'4e — Plans & droites de l\'espace': {
 ess:[
  'Par <b>deux points distincts</b> de l\'espace, il passe une droite et une seule.',
  'Un <b>plan</b> se dessine comme un parallélogramme et se note (P) ou (ABC). Si deux points distincts A et C sont dans un plan, <b>toute la droite (AC)</b> est dans ce plan.',
  'Un plan est <b>déterminé</b> (un seul plan) par : 3 points non alignés ; une droite et un point extérieur ; deux droites sécantes ; deux droites parallèles distinctes.',
  'Droite et plan : <b>sécants</b> (un seul point commun) ou <b>parallèles</b> (aucun point commun, ou droite dans le plan). Une droite est perpendiculaire à un plan si elle est perpendiculaire à <b>deux droites sécantes</b> de ce plan.',
  'Deux plans sont <b>sécants</b> (une droite commune) ou <b>parallèles</b>. Dans l\'espace, deux droites sans point commun ne sont pas forcément parallèles.'],
 form:[
  'Deux droites parallèles à une même troisième sont parallèles entre elles.',
  'Droite ∥ plan ⟺ la droite est parallèle à une droite de ce plan.'],
 ex:{q:'Combien de plans passent par trois points A, B et C : (a) non alignés ? (b) alignés ?',
  st:['(a) Trois points non alignés déterminent un plan et un seul : le plan (ABC).',
      '(b) Si A, B et C sont alignés, ils sont sur une même droite (D). Tous les plans qui contiennent (D) conviennent : comme une porte qui tourne autour de sa charnière.'],
  r:'(a) <b>un seul plan</b> ; (b) <b>une infinité de plans</b>'},
 pieges:[
  'Croire que deux droites sans point commun sont toujours parallèles : dans l\'espace, elles peuvent n\'être dans aucun plan commun.',
  'Dire qu\'une droite est perpendiculaire à un plan parce qu\'elle est perpendiculaire à <b>une seule</b> droite de ce plan : il en faut deux, sécantes.',
  'Croire que par un point d\'une droite il passe une seule perpendiculaire : il y en a une infinité dans l\'espace.'],
 mini:[
  {q:'Deux droites sécantes déterminent combien de plans ?', r:'<b>Un seul</b>'},
  {q:'Deux plans qui ne sont pas sécants sont…', r:'<b>parallèles</b>'}],
 chk:[]
},

'4e — PGCD & PPCM': {
 ess:[
  'Le <b>PGCD</b> de deux entiers est leur <b>plus grand diviseur commun</b>. Le <b>PPCM</b> de deux entiers non nuls est leur <b>plus petit multiple commun non nul</b>.',
  '<b>Méthode par décomposition</b> : on écrit chaque nombre en produit de facteurs premiers. PGCD : facteurs communs avec le <b>plus petit</b> exposant. PPCM : tous les facteurs avec le <b>plus grand</b> exposant.',
  'Utilité : simplifier une fraction (diviser par le PGCD) ; réduire des fractions au même dénominateur (PPCM des dénominateurs) ; problèmes de rencontres (marchés, cars, feux…).'],
 form:[
  'PGCD(a ; b) × PPCM(a ; b) = a × b',
  '42 = 2 × 3 × 7 et 56 = 2³ × 7 : PGCD = 2 × 7 = 14, donc {42¦56} = {3¦4}'],
 ex:{q:'Calculer le PGCD et le PPCM de 60 et 90.',
  st:['60 = 2² × 3 × 5 et 90 = 2 × 3² × 5.',
      'PGCD : on prend 2, 3 et 5 avec le plus petit exposant : 2 × 3 × 5 = 30.',
      'PPCM : on prend 2, 3 et 5 avec le plus grand exposant : 2² × 3² × 5 = 180.'],
  r:'PGCD = <b>30</b> ; PPCM = <b>180</b>'},
 pieges:[
  'Mélanger les règles : PGCD → <b>plus petit</b> exposant des facteurs <b>communs</b> ; PPCM → <b>plus grand</b> exposant de <b>tous</b> les facteurs.',
  'Oublier un facteur qui n\'est que dans un des nombres quand on calcule le PPCM.',
  'Donner un PPCM plus petit que l\'un des nombres : le PPCM est toujours ≥ au plus grand des nombres.'],
 mini:[
  {q:'Calculer PGCD(48 ; 72).', r:'48 = 2⁴ × 3 et 72 = 2³ × 3². PGCD = 2³ × 3 = <b>24</b>'},
  {q:'Trois marchés ont lieu tous les 4, 5 et 6 jours. Au bout de combien de jours ont-ils lieu le même jour ?', r:'PPCM(4 ; 5 ; 6) = <b>60 jours</b>'}],
 chk:[['((a,b)=>{while(b){[a,b]=[b,a%b]}return a})(60,90)','30'],['60*90/30','180'],['((a,b)=>{while(b){[a,b]=[b,a%b]}return a})(48,72)','24'],['Array.from({length:100},(_,i)=>i+1).find(n=>n%4===0&&n%5===0&&n%6===0)','60'],['2**2*3**2*5','180']]
},

'4e — Symétrie centrale': {
 ess:[
  'Une <b>application du plan dans le plan</b> associe à chaque point un point et un seul (son <b>image</b>).',
  'La <b>symétrie centrale de centre O</b>, notée S_O, associe à M ≠ O le point M′ tel que <b>O est le milieu de [MM′]</b>. L\'image de O est O lui-même.',
  'La symétrie centrale <b>conserve</b> : les longueurs, les mesures d\'angles, l\'alignement, le parallélisme, la perpendicularité, les milieux.',
  'L\'image d\'une droite est une <b>droite parallèle</b>. L\'image d\'un cercle de centre I est un cercle de <b>même rayon</b>, de centre l\'image de I.',
  'Si B est l\'image de A, alors A est l\'<b>antécédent</b> de B.'],
 form:[
  'S_O(M) = M′ ⟺ O milieu de [MM′]    donc OM′ = OM',
  'A′ = S_O(A) et B′ = S_O(B) ⟹ A′B′ = AB'],
 ex:{q:'A′ est l\'image de A par S_O avec OA = 4 cm. B′ est l\'image de B et AB = 7 cm. L\'angle ABC mesure 35°. Que valent AA′, A′B′ et l\'angle A′B′C′ ?',
  st:['O est le milieu de [AA′] : AA′ = 2 × OA = 8 cm.',
      'La symétrie centrale conserve les longueurs : A′B′ = AB = 7 cm.',
      'Elle conserve les mesures d\'angles : A′B′C′ = 35°. (Et (A′B′) est parallèle à (AB).)'],
  r:'AA′ = <b>8 cm</b> ; A′B′ = <b>7 cm</b> ; A′B′C′ = <b>35°</b>'},
 pieges:[
  'Confondre symétrie centrale (par rapport à un <b>point</b>) et symétrie orthogonale (par rapport à une <b>droite</b>).',
  'Oublier que M, O et M′ sont toujours <b>alignés</b> (O est le milieu de [MM′]).',
  'Croire que l\'image d\'une droite est une droite perpendiculaire : elle est <b>parallèle</b>.'],
 mini:[
  {q:'L\'image d\'un segment de 5 cm par une symétrie centrale mesure combien ?', r:'<b>5 cm</b> (les longueurs sont conservées)'},
  {q:'Quelle est l\'image du centre O par S_O ?', r:'<b>O lui-même</b>'}],
 chk:[['2*4','8']]
},

'4e — Symétrie orthogonale': {
 ess:[
  'La <b>symétrie orthogonale d\'axe (D)</b>, notée S_(D), associe à un point M de (D) le point <b>M lui-même</b>. Les points de l\'axe sont <b>invariants</b>.',
  'Si M n\'est pas sur (D), son image M′ est telle que <b>(D) est la médiatrice de [MM′]</b>.',
  'Elle conserve : les longueurs, les mesures d\'angles, l\'alignement, le parallélisme, la perpendicularité, les milieux.',
  'L\'image d\'une droite est une droite ; l\'image d\'un cercle de centre I est un cercle de <b>même rayon</b> dont le centre est l\'image de I.',
  'Si deux figures sont symétriques par rapport à (D), chacune est l\'image de l\'autre.'],
 form:[
  'M ∉ (D) : (MM′) ⟂ (D) et le milieu de [MM′] est sur (D)',
  'A′B′ = AB    mesure de A′B′C′ = mesure de ABC'],
 ex:{q:'M est un point à 3 cm de l\'axe (D) et M′ est son image par S_(D). Calculer MM′ et la distance de M′ à (D).',
  st:['(D) est la médiatrice de [MM′] : (MM′) ⟂ (D) et (D) passe par le milieu H de [MM′].',
      'MH = 3 cm (c\'est la distance de M à (D)).',
      'Comme H est le milieu : HM′ = 3 cm, et MM′ = 2 × 3 = 6 cm.'],
  r:'MM′ = <b>6 cm</b> ; distance de M′ à (D) = <b>3 cm</b>'},
 pieges:[
  'Oublier que MM′ est <b>perpendiculaire</b> à l\'axe (et pas seulement coupé par lui).',
  'Croire que M′ est de l\'autre côté à une distance quelconque : M′ est à la <b>même distance</b> de (D) que M.',
  'Confondre « invariant » (point de l\'axe, son image est lui-même) et « image ».'],
 mini:[
  {q:'Quelle est l\'image d\'un point de l\'axe (D) par S_(D) ?', r:'<b>Lui-même</b>'},
  {q:'Les images de deux droites perpendiculaires par une symétrie orthogonale sont…', r:'<b>deux droites perpendiculaires</b>'}],
 chk:[['2*3','6']]
},

'4e — Translation & vecteurs': {
 ess:[
  'Deux droites parallèles ont la même <b>direction</b>. Une direction ne donne pas le <b>sens</b> du déplacement.',
  'La translation qui au point A associe le point B est la <b>translation de vecteur AB⃗</b>. Elle a une direction (celle de (AB)), un sens (de A vers B) et une longueur (AB).',
  'Si M′ est l\'image de M (points non alignés avec A et B), alors <b>ABM′M est un parallélogramme</b>.',
  'Une translation <b>conserve</b> les longueurs, les mesures d\'angles et l\'alignement. L\'image d\'une droite est une droite <b>parallèle</b>. La translation de vecteur nul laisse tout point invariant.'],
 form:[
  'ABCD parallélogramme ⟺ AB⃗ = DC⃗  (et alors AD⃗ = BC⃗)',
  'Si AB⃗ = CD⃗ (points non alignés) alors ABDC est un parallélogramme'],
 ex:{q:'ABCD est un parallélogramme. Quel vecteur est égal à AD⃗ ? Quelle est l\'image de A par la translation qui associe D à C ?',
  st:['Dans un parallélogramme, les côtés opposés [AD] et [BC] sont parallèles, de même longueur et de même sens : AD⃗ = BC⃗.',
      'La translation qui associe D à C a pour vecteur DC⃗, et DC⃗ = AB⃗.',
      'Donc elle envoie A sur B : l\'image de A est B.'],
  r:'AD⃗ = <b>BC⃗</b> ; l\'image de A est <b>B</b>'},
 pieges:[
  'Écrire AB⃗ = CD⃗ pour le parallélogramme ABCD : les bons vecteurs égaux sont AB⃗ = <b>DC⃗</b> (même sens).',
  'Confondre direction (même droite ou parallèles) et sens (de A vers B ou de B vers A).',
  'Dire qu\'une translation change les longueurs ou les angles : elle les conserve.'],
 mini:[
  {q:'Si ABCD est un parallélogramme, quel vecteur est égal à AB⃗ ?', r:'<b>DC⃗</b>'},
  {q:'Une translation transforme un angle de 50° en un angle de…', r:'<b>50°</b>'}],
 chk:[]
},

'4e — Projection & repérage': {
 ess:[
  '<b>Projection sur (D) parallèlement à (L)</b> : à chaque point M, on associe le point M′ commun à (D) et à la <b>parallèle à (L)</b> passant par M. (D) est la <b>base</b>, la parallèle à (L) passant par M est la <b>projetante</b> de M.',
  'Si (L) ⟂ (D), la projection est dite <b>orthogonale</b>.',
  'Le projeté d\'un segment est un segment (ou un point). Le projeté du <b>milieu</b> d\'un segment est le <b>milieu</b> du projeté.',
  'Partager [AB] en n parties égales : on trace une demi-droite [Ax), on y reporte n longueurs égales A₁, …, Aₙ, on trace (AₙB), puis les parallèles à (AₙB) passant par A₁, …, Aₙ₋₁.',
  '<b>Repère</b> (O, I, J) : O est l\'origine, (OI) l\'axe des abscisses, (OJ) l\'axe des ordonnées. Orthogonal : axes perpendiculaires ; orthonormé : en plus OI = OJ = 1. Le point M(x ; y) a pour abscisse x et pour ordonnée y.'],
 form:[
  'Le projeté de I milieu de [AB] est I′ milieu de [A′B′]',
  'Placer A(3 ; −2) : 3 unités sur l\'axe des abscisses, puis 2 unités vers le bas parallèlement à l\'axe des ordonnées'],
 ex:{q:'Comment partager un segment [AB] en 5 parties égales à la règle et à l\'équerre ?',
  st:['On trace une demi-droite [Ax) (pas la même direction que (AB)) et on y marque A₁, A₂, A₃, A₄, A₅ avec des écarts égaux.',
      'On trace la droite (A₅B).',
      'On trace les parallèles à (A₅B) passant par A₁, A₂, A₃ et A₄ : elles coupent [AB] en 4 points qui partagent [AB] en 5 parties égales.'],
  r:'Les 4 points obtenus partagent [AB] en <b>5 segments de même longueur</b>'},
 pieges:[
  'Oublier que la projection se fait <b>parallèlement</b> à une direction donnée (L), pas toujours perpendiculairement.',
  'Intervertir abscisse et ordonnée : dans M(x ; y), on lit d\'abord l\'abscisse (axe horizontal).',
  'Croire que les longueurs sont toujours conservées : le projeté conserve les <b>milieux</b>, pas forcément les longueurs.'],
 mini:[
  {q:'Dans le repère (O, I, J), quelle est la droite des abscisses ?', r:'<b>La droite (OI)</b>'},
  {q:'Le projeté du milieu d\'un segment est…', r:'<b>le milieu du projeté de ce segment</b>'}],
 chk:[]
},

'4e — Équations & inéquations': {
 ess:[
  'Une <b>solution</b> d\'une équation d\'inconnue x est une valeur de x pour laquelle l\'égalité est <b>vraie</b>. On le vérifie en remplaçant x des deux côtés.',
  'On peut <b>ajouter</b> (ou soustraire) le même nombre aux deux membres, ou les <b>multiplier</b> (ou diviser) par un même nombre non nul : on obtient une équation qui a les mêmes solutions.',
  'Pour une <b>inéquation</b> : ajouter ou retrancher le même nombre ne change pas le sens. Multiplier ou diviser par un nombre <b>positif</b> ne change pas le sens. Multiplier ou diviser par un nombre <b>négatif</b> <b>change le sens</b>.',
  'Mise en équation : on choisit l\'inconnue, on traduit l\'énoncé, on résout, on vérifie.'],
 form:[
  'ax + b = c ⟹ x = {c − b¦a}  (a ≠ 0)',
  'a < b ⟹ a × (−2) > b × (−2)  (le sens change)'],
 ex:{q:'Résoudre l\'inéquation 5 − 2x > 11.',
  st:['On retranche 5 aux deux membres : −2x > 6.',
      'On divise par −2 (négatif) : le sens change. x < −3.',
      'Vérification : pour x = −4 : 5 − 2×(−4) = 13 > 11 (vrai) ; pour x = −3 : 5 + 6 = 11, qui n\'est pas > 11 (faux, la borne est exclue).'],
  r:'x < <b>−3</b>'},
 pieges:[
  'Oublier de <b>changer le sens</b> quand on divise (ou multiplie) par un nombre négatif : −3x ≥ 9 donne x ≤ −3.',
  'Déplacer un terme de l\'autre côté sans changer son signe : on <b>soustrait</b> ce terme aux deux membres (x + 3 = 7 donne x = 7 − 3).',
  'Oublier de développer avant de résoudre : 2(x − 1) = x + 3 donne 2x − 2 = x + 3, donc x = 5.'],
 mini:[
  {q:'Résoudre 2x + 7 = 1.', r:'2x = −6, donc <b>x = −3</b>'},
  {q:'Résoudre −3x ≥ 9.', r:'On divise par −3 : <b>x ≤ −3</b>'}],
 chk:[['5-2*(-4)>11','true'],['5-2*(-3)>11','false'],['2*(-3)+7','1'],['-3*(-4)>=9','true'],['-3*(-2)>=9','false'],['2*(5-1)','5+3']]
},

'4e — Proportionnalité': {
 ess:[
  'Un tableau est un <b>tableau de proportionnalité</b> si les rapports des nombres de la 1re ligne aux nombres correspondants de la 2e ligne sont <b>égaux</b>.',
  'Égalité des produits en croix : {a¦b} = {c¦d} (b ≠ 0, d ≠ 0) équivaut à <b>a × d = b × c</b>.',
  'Si {a¦b} = {c¦d}, alors cette valeur est aussi égale à {a + c¦b + d} et (si b ≠ d) à {a − c¦b − d}.',
  '<b>Quatrième proportionnelle</b> : si {a¦b} = {c¦x}, alors x = {b × c¦a}.',
  '<b>Partage proportionnel</b> : on additionne les parts, on calcule la valeur d\'une part, puis on multiplie.'],
 form:[
  '{a¦b} = {c¦d} ⟺ ad = bc',
  '{3¦4} = {9¦x} ⟹ x = {4 × 9¦3} = 12'],
 ex:{q:'On partage 1 200 F proportionnellement à 2, 3 et 7. Quelles sont les trois parts ?',
  st:['Nombre total de parts : 2 + 3 + 7 = 12.',
      'Valeur d\'une part : 1 200 ÷ 12 = 100 F.',
      'Parts : 2 × 100 = 200 F ; 3 × 100 = 300 F ; 7 × 100 = 700 F. Vérification : 200 + 300 + 700 = 1 200.'],
  r:'<b>200 F, 300 F et 700 F</b>'},
 pieges:[
  'Dire qu\'un tableau est proportionnel parce que les nombres augmentent : il faut des rapports <b>égaux</b> (4 × 8 ≠ 6 × 6, donc le tableau 4 ; 6 / 6 ; 8 n\'est pas proportionnel).',
  'Faire le produit en croix dans le mauvais sens : c\'est a × d et b × c.',
  'Oublier d\'additionner toutes les parts avant de partager.'],
 mini:[
  {q:'Trouver x : {3¦4} = {9¦x}.', r:'x = {4 × 9¦3} = <b>12</b>'},
  {q:'Un bénéfice de 300 000 F est partagé entre A (2 parts) et B (3 parts). Que reçoit A ?', r:'300 000 ÷ 5 = 60 000 par part. A reçoit 2 × 60 000 = <b>120 000 F</b>'}],
 chk:[['1200/12*2','200'],['1200/12*3','300'],['1200/12*7','700'],['4*9/3','12'],['300000/5*2','120000'],['2*15===3*10','true'],['4*8===6*6','false']]
},

'4e — Statistique': {
 ess:[
  'La <b>population</b> est l\'ensemble étudié ; chaque élément est un <b>individu</b>. Le <b>caractère</b> est ce qu\'on étudie ; ses valeurs sont les <b>modalités</b>.',
  'Caractère <b>qualitatif</b> : couleur, sport préféré… Caractère <b>quantitatif</b> : taille, âge, note… (c\'est un nombre).',
  '<b>Effectif</b> d\'une modalité : nombre d\'individus concernés. <b>Effectif total</b> : somme des effectifs. <b>Fréquence</b> = {effectif¦effectif total} (ou en % : × 100).',
  'La <b>moyenne</b> (caractère quantitatif) : on multiplie chaque modalité par son effectif, on additionne, puis on divise par l\'effectif total.',
  'Diagramme <b>en bâtons</b> : hauteur proportionnelle à l\'effectif. Diagramme <b>semi-circulaire</b> : un demi-disque ; l\'angle d\'un secteur est α = f × 180°.'],
 form:[
  'f = {nᵢ¦n}    f en % = {nᵢ × 100¦n}',
  'Moyenne M = {Σ (modalité × effectif)¦effectif total}',
  'Angle du secteur : α = {nᵢ¦n} × 180°'],
 ex:{q:'Sur 50 cartes : 20 portent 0 F, 5 portent 10 000 F, 10 portent 5 000 F, 4 portent 8 000 F et 11 portent 500 F. Calculer la fréquence de « 0 F » et la moyenne.',
  st:['Effectif total : 20 + 5 + 10 + 4 + 11 = 50.',
      'Fréquence de 0 F : {20¦50} = 0,4 = 40 %.',
      'Somme : 0×20 + 10 000×5 + 5 000×10 + 8 000×4 + 500×11 = 50 000 + 50 000 + 32 000 + 5 500 = 137 500. Moyenne : 137 500 ÷ 50 = 2 750.'],
  r:'Fréquence de 0 F : <b>40 %</b> ; moyenne : <b>2 750 F</b>'},
 pieges:[
  'Calculer la moyenne en additionnant seulement les modalités sans les multiplier par leurs effectifs.',
  'Oublier que la somme des fréquences vaut 1 (ou 100 %).',
  'Dans un diagramme semi-circulaire, utiliser 360° au lieu de <b>180°</b>.'],
 mini:[
  {q:'Moyenne de la série 4 ; 8 ; 6 ; 2 ?', r:'(4 + 8 + 6 + 2) ÷ 4 = 20 ÷ 4 = <b>5</b>'},
  {q:'Un secteur a pour fréquence 10 %. Quel est son angle dans un diagramme semi-circulaire ?', r:'0,1 × 180° = <b>18°</b>'}],
 chk:[['20+5+10+4+11','50'],['20/50','0.4'],['(0*20+10000*5+5000*10+8000*4+500*11)/50','2750'],['(4+8+6+2)/4','5'],['0.1*180','18']]
},

'4e — Prop. & Déf.': { memo:true }
});
