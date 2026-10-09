/* ===== Résumés de cours — classe de 3e (guide du programme, sept. 2020) =====
   Chaque thème : ess (l'essentiel), form (à retenir), ex (exemple résolu), pieges, mini (2 questions),
   chk (contrôles numériques automatiques : [expression JavaScript, valeur attendue]).
   Balisage : <b>…</b> ; fraction {numérateur¦dénominateur}. */
window.MQ_COURS = window.MQ_COURS || {};
window.MQ_COURS['3e'] = {

'Nombres réels': {
 ess:[
  'Des nombres comme <b>√2</b> ou <b>√3</b> ne sont pas des fractions : on les appelle <b>irrationnels</b>. Avec tous les nombres que tu connais déjà, ils forment l\'ensemble des <b>réels ℝ</b>.',
  'Chaque ensemble est dans le suivant : <b>ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ</b> (entiers naturels, entiers relatifs, décimaux, rationnels, réels).',
  'La <b>racine carrée</b> d\'un réel positif x est le réel <b>positif</b> dont le carré est x. Exemple : √49 = 7 car 7² = 49.',
  'On ne prend jamais la racine carrée d\'un nombre négatif.'],
 form:[
  '√(a × b) = √a × √b  (a ≥ 0 et b ≥ 0)',
  '√({a¦b}) = {√a¦√b}  (a ≥ 0 et b > 0)',
  '√(x²) = |x|  pour tout réel x',
  'xⁿ × xᵐ = xⁿ⁺ᵐ    xⁿ ÷ xᵐ = xⁿ⁻ᵐ    (xⁿ)ᵐ = xⁿᵐ    x⁻ⁿ = {1¦xⁿ}    x⁰ = 1  (x ≠ 0)',
  'Dénominateur sans racine (a > 0) : {1¦√a} = {√a¦a}'],
 ex:{q:'Écrire √75 + √12 sous la forme a√3.',
  st:['On cherche le plus grand carré qui divise chaque nombre : 75 = 25 × 3 et 12 = 4 × 3.',
      '√75 = √25 × √3 = 5√3    et    √12 = √4 × √3 = 2√3.',
      'On additionne comme des « objets » identiques : 5√3 + 2√3 = 7√3.'],
  r:'√75 + √12 = <b>7√3</b>'},
 pieges:[
  '√(a + b) n\'est <b>pas</b> √a + √b. Exemple : √9 + √16 = 7 mais √25 = 5.',
  '(−3)² = 9 mais −3² = −9 : le signe « − » n\'est dans le carré que s\'il y a des parenthèses.',
  '√(x²) = |x| (et pas x) : par exemple √((−5)²) = 5.'],
 mini:[
  {q:'Simplifier √50.', r:'√50 = √25 × √2 = <b>5√2</b>'},
  {q:'Écrire {6¦√3} sans racine au dénominateur.', r:'{6¦√3} = {6√3¦3} = <b>2√3</b>'}],
 chk:[['Math.sqrt(75)+Math.sqrt(12)','7*Math.sqrt(3)'],['Math.sqrt(50)','5*Math.sqrt(2)'],['6/Math.sqrt(3)','2*Math.sqrt(3)'],['Math.sqrt(9)+Math.sqrt(16)','7'],['Math.sqrt(25)','5']]
},

'Valeur absolue & intervalles': {
 ess:[
  'La <b>valeur absolue</b> de a, notée |a|, est la <b>distance de a à 0</b> sur la droite graduée. Elle n\'est jamais négative.',
  '|a| = a si a ≥ 0 ; |a| = −a si a < 0. Exemples : |7| = 7 et |−7| = 7.',
  'La <b>distance</b> entre deux réels a et b est <b>|a − b|</b>.',
  'Un <b>intervalle</b> est un « morceau » de la droite graduée. Crochet tourné vers <b>l\'intérieur</b> : la borne est comprise ; tourné vers <b>l\'extérieur</b> : la borne est exclue. Les infinis ±∞ sont toujours exclus.',
  'L\'<b>amplitude</b> d\'un intervalle de bornes a et b est |b − a|.'],
 form:[
  'Pour r ≥ 0 : |x| ≤ r ⟺ −r ≤ x ≤ r ⟺ x ∈ [−r ; r]',
  'Pour r ≥ 0 : |x − a| ≤ r ⟺ x ∈ [a − r ; a + r]  (tous les x à une distance de a au plus égale à r)',
  'Intersection (∩) : les x qui sont dans les deux intervalles. Réunion (∪) : ceux qui sont dans l\'un ou l\'autre.'],
 ex:{q:'Résoudre |x − 3| ≤ 2.',
  st:['|x − 3| ≤ 2 veut dire : la distance de x à 3 est au plus 2.',
      'Donc −2 ≤ x − 3 ≤ 2. On ajoute 3 partout : 1 ≤ x ≤ 5.'],
  r:'x ∈ <b>[1 ; 5]</b> (centre 3, rayon 2)'},
 pieges:[
  '|a + b| n\'est pas |a| + |b| en général (exemple : a = 3, b = −5).',
  '|−x| = |x| ; ce n\'est pas −|x|.',
  'Pour [2 ; 8] on compte 2 et 8 ; pour ]2 ; 8[ on ne les compte pas.'],
 mini:[
  {q:'Calculer |−7| + |4|.', r:'7 + 4 = <b>11</b>'},
  {q:'Quelle est l\'amplitude de ]−4 ; 1[ ?', r:'|1 − (−4)| = <b>5</b>'}],
 chk:[['Math.abs(-7)+Math.abs(4)','11'],['Math.abs(1-(-4))','5'],['Math.abs(1-3)<=2&&Math.abs(5-3)<=2&&Math.abs(0-3)>2&&Math.abs(6-3)>2','true'],['Math.abs(3+(-5))','2'],['Math.abs(3)+Math.abs(-5)','8']]
},

'Trigonométrie': {
 ess:[
  'On travaille dans un <b>triangle rectangle</b>, avec un angle aigu α. L\'<b>hypoténuse</b> est le côté en face de l\'angle droit (le plus long). Le côté <b>opposé</b> est en face de α ; le côté <b>adjacent</b> touche α (sans être l\'hypoténuse).',
  'Les rapports de longueurs ne dépendent que de l\'angle, pas de la taille du triangle : ce sont <b>cos, sin et tan</b>.'],
 form:[
  'cos α = {adjacent¦hypoténuse}    sin α = {opposé¦hypoténuse}    tan α = {opposé¦adjacent}   (pour t\'en souvenir : CAH – SOH – TOA)',
  'cos²α + sin²α = 1        tan α = {sin α¦cos α}',
  'Pour un angle aigu : 0 < cos α < 1 et 0 < sin α < 1.',
  'Angles à connaître : 30° → sin = {1¦2}, cos = {√3¦2}, tan = {√3¦3} ; 45° → sin = cos = {√2¦2}, tan = 1 ; 60° → sin = {√3¦2}, cos = {1¦2}, tan = √3.'],
 ex:{q:'ABC est rectangle en A, BC = 10 cm et l\'angle B mesure 30°. Calculer AC.',
  st:['AC est en face de l\'angle B : c\'est le côté <b>opposé</b>. BC est l\'<b>hypoténuse</b>.',
      'On utilise le sinus : sin B = {AC¦BC}, donc AC = BC × sin 30°.',
      'sin 30° = {1¦2}, donc AC = 10 × {1¦2} = 5.'],
  r:'AC = <b>5 cm</b>'},
 pieges:[
  'Vérifie que la calculatrice est en mode <b>degrés</b> (DEG).',
  '« Opposé » et « adjacent » changent selon l\'angle choisi : pars toujours de l\'angle demandé.',
  'tan α n\'existe pas quand cos α = 0 (angle de 90°).'],
 mini:[
  {q:'Que vaut cos 60° ?', r:'<b>{1¦2}</b>'},
  {q:'α est aigu et sin α = {3¦5}. Calculer cos α.', r:'cos²α = 1 − {9¦25} = {16¦25}, donc cos α = <b>{4¦5}</b> (positif car α est aigu).'}],
 chk:[['10*0.5','5'],['1-9/25','16/25'],['Math.sqrt(16/25)','4/5'],['Math.sin(Math.PI/6)','0.5'],['Math.cos(Math.PI/3)','0.5']]
},

'Thalès & triangles semblables': {
 ess:[
  '<b>Thalès</b> : dans le triangle ABC, M est sur (AB) et N est sur (AC). Si <b>(MN) ∥ (BC)</b>, alors les côtés sont proportionnels.',
  '<b>Réciproque</b> : si les points A, M, B sont alignés et A, N, C aussi, <b>dans le même ordre</b>, et si {AM¦AB} = {AN¦AC}, alors (MN) ∥ (BC).',
  'Deux triangles sont <b>semblables</b> si leurs angles sont égaux deux à deux ; leurs côtés sont alors proportionnels, avec un rapport k (appelé rapport de similitude).'],
 form:[
  '(MN) ∥ (BC) ⟹ {AM¦AB} = {AN¦AC} = {MN¦BC}',
  'Triangles semblables si : deux angles égaux deux à deux, OU trois côtés proportionnels, OU un angle égal compris entre deux côtés proportionnels.',
  'Rapport k : les <b>longueurs</b> sont multipliées par k ; les <b>aires</b> par <b>k²</b>.'],
 ex:{q:'(MN) ∥ (BC) avec AM = 3, AB = 9 et AN = 4. Calculer AC.',
  st:['On écrit l\'égalité de Thalès : {AM¦AB} = {AN¦AC}, soit {3¦9} = {4¦AC}.',
      'Produit en croix : AC = {4 × 9¦3} = 12.'],
  r:'AC = <b>12</b>'},
 pieges:[
  'Écris les rapports dans le <b>même ordre</b> : (petit segment) ÷ (grand segment) des deux côtés.',
  'Thalès ne s\'utilise que s\'il y a des droites <b>parallèles</b>. Pour prouver un parallélisme, on utilise la <b>réciproque</b> : on vérifie que deux rapports sont égaux.',
  'Si le rapport est k = 2, les aires sont multipliées par 4 (et non par 2).'],
 mini:[
  {q:'Deux triangles semblables ont pour rapport k = 2. Un côté mesure 5 cm. Que mesure le côté correspondant du grand triangle ? Et par combien l\'aire est-elle multipliée ?', r:'<b>10 cm</b> ; l\'aire est multipliée par 2² = <b>4</b>.'},
  {q:'AM = 2, AB = 6, AN = 3, AC = 9 (M, B sur une droite et N, C sur l\'autre, dans le même ordre). (MN) est-elle parallèle à (BC) ?', r:'{2¦6} = {1¦3} et {3¦9} = {1¦3} : les rapports sont égaux, donc <b>oui</b>, (MN) ∥ (BC) (réciproque de Thalès).'}],
 chk:[['4*9/3','12'],['2/6===3/9||Math.abs(2/6-3/9)<1e-12','true'],['5*2','10'],['2*2','4']]
},

'Triangle rectangle': {
 ess:[
  'Dans un triangle <b>rectangle en A</b>, l\'hypoténuse est [BC]. On note H le pied de la hauteur issue de A.',
  '<b>Pythagore</b> : si le triangle est rectangle en A, alors BC² = AB² + AC². <b>Réciproque</b> : si BC² = AB² + AC², alors il est rectangle en A.',
  'Le milieu de l\'hypoténuse est le centre du cercle circonscrit : la médiane issue de A mesure la moitié de BC.'],
 form:[
  'BC² = AB² + AC²',
  'AB² = BH × BC        AC² = CH × CB        AH² = BH × HC',
  'AB × AC = AH × BC  (deux façons de calculer l\'aire)'],
 ex:{q:'ABC est rectangle en A avec AB = 6 et AC = 8. Calculer BC, puis AH et BH.',
  st:['Pythagore : BC² = 6² + 8² = 36 + 64 = 100, donc BC = 10.',
      'AB × AC = AH × BC donne AH = {6 × 8¦10} = 4,8.',
      'AB² = BH × BC donne BH = {36¦10} = 3,6.'],
  r:'BC = <b>10</b> ; AH = <b>4,8</b> ; BH = <b>3,6</b>'},
 pieges:[
  'L\'hypoténuse est toujours le côté <b>opposé à l\'angle droit</b> (et le plus long).',
  'Pour la réciproque, on compare le <b>carré du plus grand côté</b> à la somme des carrés des deux autres.',
  'N\'oublie pas la racine carrée à la fin : BC² = 100 donne BC = 10, pas 100.'],
 mini:[
  {q:'Un triangle a pour côtés 5, 12 et 13. Est-il rectangle ?', r:'5² + 12² = 25 + 144 = 169 = 13² : <b>oui</b> (réciproque de Pythagore).'},
  {q:'ABC rectangle en A, BH = 4 et BC = 9. Calculer AB.', r:'AB² = BH × BC = 36, donc AB = <b>6</b>.'}],
 chk:[['Math.sqrt(36+64)','10'],['6*8/10','4.8'],['36/10','3.6'],['25+144','169'],['Math.sqrt(4*9)','6']]
},

'Angles & cercles': {
 ess:[
  'Un <b>angle au centre</b> a son sommet au centre O du cercle. Un <b>angle inscrit</b> a son sommet <b>sur</b> le cercle.',
  'Quand ils interceptent le <b>même arc</b>, l\'angle au centre est le <b>double</b> de l\'angle inscrit.',
  'Un quadrilatère est <b>inscriptible</b> dans un cercle quand deux angles opposés sont supplémentaires.'],
 form:[
  'angle inscrit = {1¦2} × angle au centre (même arc)',
  'Deux angles inscrits qui interceptent le même arc sont égaux.',
  'Un angle inscrit qui intercepte un diamètre est un angle droit.',
  'Quadrilatère inscrit : angles <b>opposés</b> supplémentaires (somme 180°).',
  'Polygone régulier à n côtés : angle au centre = {360°¦n} ; angle du polygone = 180° − {360°¦n}.'],
 ex:{q:'Un hexagone régulier (6 côtés) est inscrit dans un cercle. Calculer l\'angle au centre et un angle de l\'hexagone.',
  st:['Angle au centre : 360° ÷ 6 = 60°.',
      'Angle de l\'hexagone : 180° − 60° = 120°.'],
  r:'angle au centre = <b>60°</b> ; angle de l\'hexagone = <b>120°</b>'},
 pieges:[
  'La règle « moitié » ne marche que si les deux angles interceptent le <b>même arc</b>.',
  'Dans un quadrilatère inscrit, ce sont les angles <b>opposés</b> (A et C, B et D) qui valent 180° ensemble, pas les angles voisins.',
  'Un angle inscrit de 40° correspond à un angle au centre de 80° (et non de 20°).'],
 mini:[
  {q:'Un angle au centre mesure 100°. Combien mesure l\'angle inscrit qui intercepte le même arc ?', r:'100° ÷ 2 = <b>50°</b>'},
  {q:'ABCD est inscrit dans un cercle et l\'angle B mesure 85°. Combien mesure l\'angle D ?', r:'180° − 85° = <b>95°</b>'}],
 chk:[['360/6','60'],['180-360/6','120'],['100/2','50'],['180-85','95']]
},

'Solides & sections planes': {
 ess:[
  'Un <b>cône de révolution</b> a une base circulaire (rayon R), une hauteur h et une <b>génératrice</b> g (la « pente » du cône). On a g² = R² + h².',
  'Si on coupe une <b>pyramide régulière</b> ou un <b>cône</b> par un plan <b>parallèle à la base</b>, on obtient une <b>réduction</b> du solide (petit solide) et un <b>tronc</b>.',
  'La section d\'un cône par ce plan est un <b>cercle</b> ; celle d\'une pyramide régulière est un polygone de même nature que la base.',
  'L\'<b>échelle de réduction</b> est k = {hauteur du petit solide¦hauteur du solide initial} (idem pour toute longueur correspondante).'],
 form:[
  'Volume du cône ou de la pyramide : V = {1¦3} × (aire de la base) × h ; pour un cône V = {π R² h¦3}',
  'Aire latérale du cône : A = π × R × g',
  'Réduction de rapport k : longueurs × k, aires × <b>k²</b>, volumes × <b>k³</b>',
  'Tronc de cône : V = {π h (r² + r r\' + r\'²)¦3}'],
 ex:{q:'Un cône a pour rayon R = 3 cm et pour hauteur h = 4 cm. Calculer son volume, sa génératrice et son aire latérale. On le coupe à mi-hauteur par un plan parallèle à la base : quel est le volume du petit cône ?',
  st:['Volume : V = {π × 3² × 4¦3} = 12π cm³.',
      'Génératrice : g = √(3² + 4²) = √25 = 5 cm. Aire latérale : π × 3 × 5 = 15π cm².',
      'À mi-hauteur : k = {1¦2}. Le volume est multiplié par k³ = {1¦8} : 12π ÷ 8 = 1,5π cm³.'],
  r:'V = <b>12π cm³</b> ; g = <b>5 cm</b> ; aire latérale = <b>15π cm²</b> ; petit cône : <b>1,5π cm³</b>'},
 pieges:[
  'Ne pas oublier le <b>{1¦3}</b> dans le volume d\'un cône ou d\'une pyramide.',
  'La hauteur h est perpendiculaire à la base ; la génératrice g est le côté incliné : ce n\'est pas la même longueur.',
  'Si k = 2/3, les aires sont multipliées par {4¦9} (pas par {2¦3}) et les volumes par {8¦27}.'],
 mini:[
  {q:'Pyramide à base carrée de côté 6 cm et de hauteur 5 cm : volume ?', r:'V = {1¦3} × 36 × 5 = <b>60 cm³</b>'},
  {q:'Une section est une réduction de rapport k = {2¦3}. Par combien l\'aire est-elle multipliée ?', r:'k² = {4¦9} : l\'aire est multipliée par <b>{4¦9}</b>.'}],
 chk:[['Math.PI*9*4/3','12*Math.PI'],['Math.sqrt(9+16)','5'],['Math.PI*3*5','15*Math.PI'],['12/8','1.5'],['36*5/3','60'],['(2/3)**2','4/9']]
},

'Polynômes & équations': {
 ess:[
  'Un <b>polynôme</b> est une somme de <b>monômes</b> (comme 3x², −5x, 7). Son <b>degré</b> est le plus grand exposant de x.',
  '<b>Développer</b>, c\'est transformer un produit en somme ; <b>factoriser</b>, c\'est transformer une somme en produit (en cherchant un facteur commun ou une identité remarquable).',
  'On résout une équation ou une inéquation en isolant x, et en gardant à chaque ligne une égalité (ou une inégalité) vraie.',
  'Un <b>système</b> de deux équations à deux inconnues se résout par <b>addition</b> (combinaison) ou par <b>substitution</b>.'],
 form:[
  '(a + b)² = a² + 2ab + b²    (a − b)² = a² − 2ab + b²    a² − b² = (a − b)(a + b)',
  'A × B = 0 ⟺ A = 0 ou B = 0   (un produit est nul si l\'un des facteurs est nul)',
  'Inéquation : quand on multiplie ou divise par un nombre <b>négatif</b>, on <b>change le sens</b> de l\'inégalité.'],
 ex:{q:'Résoudre 4x² − 9 = 0, puis résoudre le système x + y = 5 et x − y = 1.',
  st:['4x² − 9 = (2x)² − 3² = (2x − 3)(2x + 3). On a donc (2x − 3)(2x + 3) = 0.',
      '2x − 3 = 0 donne x = {3¦2} ; 2x + 3 = 0 donne x = −{3¦2}.',
      'Système : on additionne les deux équations : 2x = 6, donc x = 3. Puis y = 5 − 3 = 2.'],
  r:'<b>x = −{3¦2}</b> ou <b>x = {3¦2}</b> pour la première équation ; <b>x = 3 et y = 2</b> pour le système'},
 pieges:[
  'A × B = 0 permet de conclure, mais A × B = 6 ne permet <b>pas</b> de dire « A = 6 ou B = 6 ».',
  'Dans −2x + 6 > 0, on divise par −2 : le sens change.',
  '(a + b)² n\'est pas a² + b² : il manque le double produit 2ab.'],
 mini:[
  {q:'Développer (x + 3)².', r:'x² + 2 × x × 3 + 3² = <b>x² + 6x + 9</b>'},
  {q:'Résoudre −2x + 6 > 0.', r:'−2x > −6, on divise par −2 et on change le sens : <b>x < 3</b>.'}],
 chk:[['4*1.5*1.5-9','0'],['4*(-1.5)*(-1.5)-9','0'],['3+2','5'],['3-2','1'],['(5+3)*(5+3)','64']]
},

'Droites & vecteurs': {
 ess:[
  'Un <b>vecteur</b> AB⃗ est défini par une <b>direction</b>, un <b>sens</b> et une <b>longueur</b>. Il indique le déplacement de A vers B.',
  'Dans un repère, A(xA ; yA) et B(xB ; yB) : le vecteur AB⃗ a pour coordonnées (xB − xA ; yB − yA) : <b>arrivée moins départ</b>.',
  'Deux vecteurs sont <b>colinéaires</b> s\'ils ont la même direction (le vecteur nul est colinéaire à tout vecteur). Trois points sont <b>alignés</b> si AB⃗ et AC⃗ sont colinéaires.',
  'Une droite d\'équation ax + by + c = 0 a pour <b>vecteur directeur</b> (−b ; a). Si elle s\'écrit y = mx + p, m est son <b>coefficient directeur</b>.'],
 form:[
  'Chasles : AB⃗ + BC⃗ = AC⃗        Opposé : BA⃗ = −AB⃗',
  'Dans un repère orthonormé : AB = √((xB − xA)² + (yB − yA)²)        Milieu I de [AB] : ({xA + xB¦2} ; {yA + yB¦2})',
  'u⃗(x ; y) et v⃗(x\' ; y\') colinéaires ⟺ x y\' − x\' y = 0',
  'u⃗ et v⃗ orthogonaux ⟺ x x\' + y y\' = 0',
  'Droites (non verticales) parallèles : m = m\'.   Perpendiculaires (repère orthonormé) : m × m\' = −1.'],
 ex:{q:'Soient A(1 ; 1) et B(4 ; 5). Calculer AB⃗, la distance AB et le milieu I de [AB].',
  st:['AB⃗ = (4 − 1 ; 5 − 1) = (3 ; 4).',
      'AB = √(3² + 4²) = √(9 + 16) = √25 = 5.',
      'I = ({1 + 4¦2} ; {1 + 5¦2}) = (2,5 ; 3).'],
  r:'AB⃗ = <b>(3 ; 4)</b> ; AB = <b>5</b> ; I = <b>(2,5 ; 3)</b>'},
 pieges:[
  'Coordonnées d\'un vecteur : on fait <b>arrivée − départ</b>, pas l\'inverse.',
  'Pour la distance, n\'oublie pas la <b>racine carrée</b> à la fin.',
  'Colinéaires ne veut pas dire égaux : u⃗(2 ; 4) et v⃗(1 ; 2) sont colinéaires mais différents.'],
 mini:[
  {q:'u⃗(2 ; 3). Donner les coordonnées de −2u⃗.', r:'<b>(−4 ; −6)</b>'},
  {q:'u⃗(2 ; 4) et v⃗(1 ; 2) sont-ils colinéaires ?', r:'2 × 2 − 1 × 4 = 0 : <b>oui</b>.'}],
 chk:[['Math.sqrt(9+16)','5'],['(1+4)/2','2.5'],['(1+5)/2','3'],['2*2-1*4','0'],['-2*2','-4'],['-2*3','-6']]
},

'Statistiques': {
 ess:[
  'Une série statistique se résume dans un tableau : les <b>modalités</b> (ou les <b>classes</b>), leurs <b>effectifs</b> et leurs <b>fréquences</b>.',
  'La <b>classe modale</b> est la classe qui a l\'effectif le plus élevé.',
  'Un <b>diagramme circulaire</b> (disque de 360°) ou <b>semi-circulaire</b> (demi-disque de 180°) partage le disque en secteurs proportionnels aux effectifs.',
  'Dans un <b>histogramme</b> (classes de même amplitude), les hauteurs des bandes sont proportionnelles aux effectifs.'],
 form:[
  'fréquence = {effectif¦effectif total}   (la somme des fréquences vaut 1, soit 100 %)',
  'moyenne = {somme des (valeur × effectif)¦effectif total}',
  'angle d\'un secteur = 360° × {effectif¦effectif total}   (180° × … pour un demi-disque)'],
 ex:{q:'Notes : 8 (effectif 2), 10 (effectif 3), 14 (effectif 5). Calculer la moyenne, puis la fréquence et l\'angle du secteur de la note 14.',
  st:['Effectif total : 2 + 3 + 5 = 10.',
      'Moyenne = {8 × 2 + 10 × 3 + 14 × 5¦10} = {16 + 30 + 70¦10} = {116¦10} = 11,6.',
      'Note 14 : fréquence = {5¦10} = 0,5 = 50 %. Angle = 360° × {5¦10} = 180° (et 90° dans un demi-disque).'],
  r:'moyenne = <b>11,6</b> ; fréquence de la note 14 = <b>50 %</b> ; angle = <b>180°</b>'},
 pieges:[
  'La moyenne n\'est pas la moyenne des valeurs « telles quelles » : il faut tenir compte des <b>effectifs</b>.',
  'Pour un demi-disque, le total est 180° et non 360°.',
  'Les fréquences s\'additionnent toujours à 1 (ou 100 %) : c\'est un bon moyen de vérifier.'],
 mini:[
  {q:'Calculer la moyenne de 10, 12, 14, 16, 18.', r:'{10 + 12 + 14 + 16 + 18¦5} = {70¦5} = <b>14</b>'},
  {q:'Un effectif de 15 sur 60 : quel angle dans un diagramme circulaire ?', r:'360° × {15¦60} = <b>90°</b>'}],
 chk:[['(8*2+10*3+14*5)/10','11.6'],['5/10','0.5'],['360*5/10','180'],['180*5/10','90'],['360*15/60','90'],['(10+12+14+16+18)/5','14']]
},

'Applications affines': {
 ess:[
  'Une <b>application affine</b> est définie sur ℝ par <b>f(x) = ax + b</b>. Le nombre a est le <b>coefficient</b>, b est le <b>terme constant</b>.',
  'Une <b>application linéaire</b> est une application affine dont le terme constant est nul : <b>g(x) = ax</b>. Son tableau de valeurs est un tableau de <b>proportionnalité</b>.',
  'Sens de variation de f(x) = ax + b : si a > 0, f est croissante ; si a < 0, f est décroissante ; si a = 0, f est constante.',
  'La représentation graphique est une <b>droite</b> ; pour une application linéaire, cette droite passe par l\'<b>origine</b>.'],
 form:[
  'Connaissant f(x₁) et f(x₂) : a = {f(x₂) − f(x₁)¦x₂ − x₁}   puis   b = f(x₁) − a x₁',
  'g linéaire : g(u + v) = g(u) + g(v)    et    g(k v) = k g(v)'],
 ex:{q:'f est affine avec f(1) = 5 et f(3) = 11. Trouver f(x).',
  st:['a = {11 − 5¦3 − 1} = {6¦2} = 3.',
      'b = f(1) − a × 1 = 5 − 3 = 2.',
      'Vérification : f(3) = 3 × 3 + 2 = 11 ✔.'],
  r:'f(x) = <b>3x + 2</b>'},
 pieges:[
  'Linéaire ⟹ affine, mais pas l\'inverse : f(x) = 2x + 1 est affine, pas linéaire (f(0) = 1 ≠ 0).',
  'Dans f(x) = −2x + 4, le coefficient est −2 : f est <b>décroissante</b>.',
  'Pense à <b>vérifier</b> avec l\'autre valeur donnée.'],
 mini:[
  {q:'g est linéaire et g(2) = 10. Calculer g(3).', r:'a = 10 ÷ 2 = 5, donc g(3) = 5 × 3 = <b>15</b>.'},
  {q:'f(x) = −2x + 4 est-elle croissante ou décroissante ?', r:'a = −2 < 0 : <b>décroissante</b>.'}],
 chk:[['(11-5)/(3-1)','3'],['5-3*1','2'],['3*3+2','11'],['10/2*3','15']]
},

'3e — Prop. & Déf.': { memo:true }

};
