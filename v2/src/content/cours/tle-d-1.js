/* ===== Résumés de cours — Terminale D, thèmes 1 à 12 (guide Maths_Guide_Terminale_D_VF) =====
   Balisage : <b>…</b> ; fraction {numérateur¦dénominateur}. */
window.MQ_COURS = window.MQ_COURS || {};
window.MQ_COURS['Tle D'] = Object.assign(window.MQ_COURS['Tle D'] || {}, {

'TleD — Vecteurs de l\'espace & barycentre': {
 ess:[
  'Dans l\'espace, trois vecteurs sont <b>coplanaires</b> si, placés à partir d\'un même point, ils sont dans un même plan. Dans un cube, AB⃗, AD⃗ et AE⃗ sont <b>non coplanaires</b> (trois arêtes issues de A).',
  'Deux vecteurs sont égaux s\'ils ont même direction, même sens et même longueur. Dans le cube ABCDEFGH, AB⃗ = EF⃗.',
  'Le <b>barycentre</b> G de (A, α) et (B, β), avec <b>α + β ≠ 0</b>, est le point tel que α GA⃗ + β GB⃗ = 0⃗. Si α + β = 0, il n\'existe pas.',
  'Si les coefficients sont égaux, on obtient l\'<b>isobarycentre</b> : le milieu pour deux points, le centre de gravité pour un triangle.'],
 form:[
  'G barycentre de (A, α) et (B, β) : AG⃗ = {β¦α + β} AB⃗.    Coordonnées : x_G = {α x_A + β x_B¦α + β}, et de même pour y et z.',
  'Pour tout point M : Σ αᵢ MAᵢ⃗ = (Σ αᵢ) MG⃗.',
  '<b>Homogénéité</b> : on ne change pas G si on multiplie tous les coefficients par un même réel non nul. <b>Barycentres partiels</b> : on peut remplacer des points pondérés par leur barycentre affecté de la somme de leurs coefficients.'],
 ex:{q:'Soit A(1 ; 2 ; 3) et B(5 ; 6 ; 7). Calculer les coordonnées du barycentre G de (A, 1) et (B, 3).',
  st:['La somme des coefficients est 1 + 3 = 4, différente de 0 : G existe.',
      'x_G = {1 × 1 + 3 × 5¦4} = {16¦4} = 4.',
      'y_G = {2 + 18¦4} = 5 et z_G = {3 + 21¦4} = 6.'],
  r:'G a pour coordonnées <b>(4 ; 5 ; 6)</b>.'},
 pieges:[
  'Oublier de vérifier que α + β ≠ 0 avant de parler de barycentre.',
  'Diviser par la mauvaise somme : on divise par la somme des <b>coefficients</b>, pas par le nombre de points.',
  'Mélanger les coefficients : dans AG⃗ = {β¦α + β} AB⃗, c\'est le coefficient de <b>B</b> qui est au numérateur.'],
 mini:[
  {q:'Donner les coordonnées du barycentre de A(0 ; 0 ; 0) de coefficient 2 et B(5 ; 10 ; 15) de coefficient 3.', r:'<b>(3 ; 6 ; 9)</b>'},
  {q:'G est le barycentre de (A, 1) et (B, 3) avec AB = 8. Calculer AG.', r:'AG = {3¦4} × 8 = <b>6</b>'}],
 chk:[['(1+3*5)/4','4'],['(2+3*6)/4','5'],['(3+3*7)/4','6'],['3*5/5','3'],['3*10/5','6'],['3*15/5','9'],['3/4*8','6']]
},

'TleD — Produit scalaire & orthogonalité dans l\'espace': {
 ess:[
  'Dans une base <b>orthonormée</b>, pour u⃗(x ; y ; z) et v⃗(x′ ; y′ ; z′) : <b>u⃗ · v⃗ = xx′ + yy′ + zz′</b>.',
  'La norme de u⃗ est ‖u⃗‖ = √(x² + y² + z²).',
  'u⃗ et v⃗ sont <b>orthogonaux</b> si et seulement si u⃗ · v⃗ = 0.',
  'Un <b>vecteur normal</b> à un plan est un vecteur directeur d\'une droite perpendiculaire à ce plan.'],
 form:[
  'cos θ = {u⃗ · v⃗¦‖u⃗‖ × ‖v⃗‖}    où θ est l\'angle entre u⃗ et v⃗ (vecteurs non nuls).',
  '‖u⃗ + v⃗‖² = ‖u⃗‖² + 2 u⃗ · v⃗ + ‖v⃗‖².',
  'Droites : parallèles ⟺ vecteurs directeurs colinéaires ; orthogonales ⟺ vecteurs directeurs orthogonaux.    Plans : parallèles ⟺ vecteurs normaux colinéaires ; perpendiculaires ⟺ vecteurs normaux orthogonaux.',
  'Droite perpendiculaire à un plan ⟺ son vecteur directeur est normal au plan ; droite parallèle à un plan ⟺ son vecteur directeur est orthogonal à un vecteur normal.'],
 ex:{q:'Dans une base orthonormée, on donne u⃗(1 ; 1 ; 0) et w⃗(1 ; 0 ; 1). Calculer u⃗ · w⃗, les normes, puis l\'angle entre les deux vecteurs.',
  st:['u⃗ · w⃗ = 1 × 1 + 1 × 0 + 0 × 1 = 1.',
      '‖u⃗‖ = √(1 + 1 + 0) = √2 et ‖w⃗‖ = √(1 + 0 + 1) = √2.',
      'cos θ = {1¦√2 × √2} = {1¦2}.',
      'Donc θ = 60°.'],
  r:'u⃗ · w⃗ = <b>1</b>, les normes valent <b>√2</b> et l\'angle est <b>60°</b>.'},
 pieges:[
  'Le produit scalaire de deux vecteurs est un <b>nombre</b>, pas un vecteur.',
  'Oublier la racine : ‖u⃗‖ = √(x² + y² + z²), et non x² + y² + z².',
  'Confondre orthogonal et colinéaire : colinéaires = parallèles ; orthogonaux = produit scalaire nul.',
  'Ces formules ne sont valables que dans une base <b>orthonormée</b>.'],
 mini:[
  {q:'u⃗(3 ; −2 ; 1) et v⃗(1 ; 2 ; 1) sont-ils orthogonaux ?', r:'3 − 4 + 1 = 0 : <b>oui</b>, ils sont orthogonaux.'},
  {q:'Calculer la norme de u⃗(4 ; 4 ; 7).', r:'√(16 + 16 + 49) = √81 = <b>9</b>'}],
 chk:[['1*1+1*0+0*1','1'],['Math.acos(1/2)*180/Math.PI','60'],['3*1+(-2)*2+1*1','0'],['Math.sqrt(16+16+49)','9']]
},

'TleD — Plans, droites & distances dans l\'espace': {
 ess:[
  'Un plan de vecteur normal n⃗(a ; b ; c) a une équation <b>ax + by + cz + d = 0</b>. Les coefficients de x, y, z donnent un vecteur normal.',
  'Pour trouver d, on remplace x, y, z par les coordonnées d\'un point du plan. Un point est dans le plan si ses coordonnées vérifient l\'équation.',
  'Une <b>droite</b> passant par A(x₀ ; y₀ ; z₀) de vecteur directeur u⃗(a ; b ; c) a pour représentation paramétrique : x = x₀ + at ; y = y₀ + bt ; z = z₀ + ct (t réel).',
  'Deux plans non parallèles se coupent suivant une <b>droite</b> : un système de deux équations de plans en donne des équations cartésiennes.'],
 form:[
  '<b>Distance d\'un point M₀(x₀ ; y₀ ; z₀) au plan ax + by + cz + d = 0</b> :    d = {|ax₀ + by₀ + cz₀ + d|¦√(a² + b² + c²)}.',
  'Plan passant par A de vecteurs directeurs u⃗ et v⃗ non colinéaires : AM⃗ = s u⃗ + t v⃗ (s, t réels).'],
 ex:{q:'Déterminer une équation du plan P passant par A(1 ; 2 ; −1) de vecteur normal n⃗(2 ; −1 ; 2), puis la distance de M(3 ; 1 ; 4) à P.',
  st:['P a une équation de la forme 2x − y + 2z + d = 0.',
      'A ∈ P : 2 × 1 − 2 + 2 × (−1) + d = 0, donc −2 + d = 0 et d = 2. Équation : 2x − y + 2z + 2 = 0.',
      'Distance : |2 × 3 − 1 + 2 × 4 + 2| = |6 − 1 + 8 + 2| = 15.',
      'Dénominateur : √(4 + 1 + 4) = 3. Donc d = {15¦3} = 5.'],
  r:'P : <b>2x − y + 2z + 2 = 0</b> ; la distance de M à P est <b>5</b>.'},
 pieges:[
  'Oublier la valeur absolue au numérateur : une distance est toujours positive.',
  'Se tromper de signe dans l\'équation : 2(x − 1) − y + 3(z − 2) = 0 se développe soigneusement.',
  'Confondre vecteur normal (perpendiculaire au plan) et vecteur directeur (dans la direction de la droite).'],
 mini:[
  {q:'Distance de l\'origine au plan x + 2y + 2z − 6 = 0 ?', r:'{6¦√9} = <b>2</b>'},
  {q:'Donner un vecteur normal au plan 4x − y + z + 7 = 0.', r:'<b>(4 ; −1 ; 1)</b>'}],
 chk:[['2*1-2+2*(-1)+2','0'],['Math.abs(2*3-1+2*4+2)/Math.sqrt(4+1+4)','5'],['6/Math.sqrt(1+4+4)','2'],['Math.abs(1+2*2+2*2+3)/3','4']]
},

'TleD — Systèmes d\'équations linéaires (pivot de Gauss)': {
 ess:[
  'La <b>méthode du pivot de Gauss</b> transforme un système en un système <b>équivalent triangulaire</b>, qu\'on résout en « remontant » : dernière équation d\'abord.',
  'Opérations permises : <b>permuter</b> deux équations ; <b>multiplier</b> une équation par un réel <b>non nul</b> ; <b>ajouter</b> à une équation un multiple d\'une autre.',
  'Un système linéaire a soit <b>aucune solution</b>, soit <b>une seule</b>, soit une <b>infinité</b> de solutions.'],
 form:[
  'Une ligne du type 0 = 5 (fausse) : <b>aucune solution</b>.',
  'Une ligne du type 0 = 0 : on perd une équation, il y a en général une <b>infinité</b> de solutions (une inconnue devient un paramètre).'],
 ex:{q:'Résoudre : x + y + z = 6 ; 2x − y + z = 3 ; x + 2y − z = 2.',
  st:['On garde L1. L2 ← L2 − 2 L1 : −3y − z = −9. L3 ← L3 − L1 : y − 2z = −4.',
      'On élimine y : L3 ← 3 L3 + L2 : 3y − 6z − 3y − z = −12 − 9, donc −7z = −21 et z = 3.',
      'On remonte : y − 2 × 3 = −4, donc y = 2.',
      'Puis x + 2 + 3 = 6, donc x = 1.'],
  r:'S = {<b>(1 ; 2 ; 3)</b>}'},
 pieges:[
  'Multiplier une équation par 0 : interdit, on perdrait l\'équivalence.',
  'Oublier de modifier <b>tous</b> les termes (y compris le second membre) quand on combine deux équations.',
  'Conclure « une solution » sans avoir vérifié qu\'il y a assez d\'équations indépendantes.',
  'Ne pas vérifier la solution trouvée dans les équations de départ.'],
 mini:[
  {q:'Résoudre : x + y + z = 6 ; y + z = 5 ; z = 2.', r:'z = 2, y = 3, x = 1 : <b>(1 ; 3 ; 2)</b>'},
  {q:'Le système x − y = 1 ; 2x − 2y = 2 a combien de solutions ?', r:'La 2e équation est le double de la 1re : <b>une infinité</b>.'}],
 chk:[['1+2+3','6'],['2*1-2+3','3'],['1+2*2-3','2'],['-3*2-3','-9'],['2-2*3','-4'],['-7*3','-21'],['1+3+2','6'],['3+2','5']]
},

'TleD — Produit vectoriel': {
 ess:[
  'Dans une base orthonormée <b>directe</b> (i⃗, j⃗, k⃗) : <b>i⃗ ∧ j⃗ = k⃗</b>, <b>j⃗ ∧ k⃗ = i⃗</b>, <b>k⃗ ∧ i⃗ = j⃗</b> (permutation circulaire).',
  'u⃗ ∧ v⃗ est un vecteur. Il est antisymétrique : <b>u⃗ ∧ v⃗ = −(v⃗ ∧ u⃗)</b>. Il est nul si et seulement si u⃗ et v⃗ sont colinéaires.',
  'Pour A, B, C non alignés, AB⃗ ∧ AC⃗ est un <b>vecteur normal au plan (ABC)</b>.'],
 form:[
  'u⃗(x ; y ; z) ∧ v⃗(x′ ; y′ ; z′) a pour coordonnées <b>(yz′ − zy′ ; zx′ − xz′ ; xy′ − yx′)</b>.',
  'Aire du triangle ABC = {1¦2} ‖AB⃗ ∧ AC⃗‖.    A, B, C alignés ⟺ AB⃗ ∧ AC⃗ = 0⃗.',
  'Produit mixte : A, B, C, D coplanaires ⟺ AB⃗ · (AC⃗ ∧ AD⃗) = 0.    Volume du tétraèdre ABCD = {1¦6} |AB⃗ · (AC⃗ ∧ AD⃗)|.',
  'Distance de M à la droite (AB) = {‖AM⃗ ∧ AB⃗‖¦AB}.'],
 ex:{q:'Soit A(1 ; 0 ; 0), B(0 ; 2 ; 0), C(0 ; 0 ; 3). Calculer AB⃗ ∧ AC⃗, l\'aire du triangle ABC et une équation du plan (ABC).',
  st:['AB⃗(−1 ; 2 ; 0) et AC⃗(−1 ; 0 ; 3).',
      'AB⃗ ∧ AC⃗ = (2 × 3 − 0 × 0 ; 0 × (−1) − (−1) × 3 ; (−1) × 0 − 2 × (−1)) = (6 ; 3 ; 2).',
      'Norme : √(36 + 9 + 4) = √49 = 7, donc aire = {7¦2}.',
      'Plan de vecteur normal (6 ; 3 ; 2) passant par A : 6(x − 1) + 3y + 2z = 0, soit 6x + 3y + 2z − 6 = 0.'],
  r:'AB⃗ ∧ AC⃗ = <b>(6 ; 3 ; 2)</b> ; aire = <b>{7¦2}</b> ; plan : <b>6x + 3y + 2z − 6 = 0</b>.'},
 pieges:[
  'Se tromper d\'ordre : u⃗ ∧ v⃗ et v⃗ ∧ u⃗ sont <b>opposés</b>.',
  'Oublier le signe moins dans la 2e coordonnée (zx′ − xz′).',
  'Oublier le facteur {1¦2} pour l\'aire du triangle, ou {1¦6} pour le volume du tétraèdre.',
  'Les formules de coordonnées exigent une base orthonormée directe.'],
 mini:[
  {q:'Calculer u⃗(2 ; 0 ; 1) ∧ v⃗(1 ; 1 ; 0).', r:'(0 × 0 − 1 × 1 ; 1 × 1 − 2 × 0 ; 2 × 1 − 0 × 1) = <b>(−1 ; 1 ; 2)</b>'},
  {q:'Volume du tétraèdre OABC avec O(0 ; 0 ; 0), A(2 ; 0 ; 0), B(0 ; 3 ; 0), C(0 ; 0 ; 4) ?', r:'OB⃗ ∧ OC⃗ = (12 ; 0 ; 0), produit mixte = 24, volume = {24¦6} = <b>4</b>'}],
 chk:[['2*3-0*0','6'],['0*(-1)-(-1)*3','3'],['(-1)*0-2*(-1)','2'],['Math.sqrt(36+9+4)','7'],['6*1+3*0+2*0','6'],['6*0+3*2+2*0','6'],['6*0+3*0+2*3','6'],['0*0-1*1','-1'],['1*1-2*0','1'],['2*1-0*1','2'],['3*4-0*0','12'],['2*12/6','4']]
},

'TleD — Nombres complexes : forme algébrique': {
 ess:[
  'i est le nombre tel que <b>i² = −1</b>. Tout complexe s\'écrit <b>z = a + ib</b> (a, b réels) : a = Re(z) est la partie réelle, b = Im(z) la partie imaginaire.',
  'z est <b>réel</b> si b = 0 ; <b>imaginaire pur</b> si a = 0 et b ≠ 0 (ensemble noté iℝ).',
  '<b>z = z′ ⟺ Re(z) = Re(z′) et Im(z) = Im(z′)</b>. En particulier z = 0 ⟺ a = 0 et b = 0.',
  'Les puissances de i se répètent par 4 : i, −1, −i, 1.'],
 form:[
  '(a + ib)(c + id) = (ac − bd) + i(ad + bc).',
  'Inverse : {1¦a + ib} = {a − ib¦a² + b²}.    Quotient : on multiplie en haut et en bas par le conjugué du dénominateur.',
  'zz′ = 0 ⟺ z = 0 ou z′ = 0.'],
 ex:{q:'Écrire {2 + 3i¦1 − 2i} sous forme algébrique.',
  st:['Le conjugué du dénominateur est 1 + 2i : on multiplie en haut et en bas par 1 + 2i.',
      'Numérateur : (2 + 3i)(1 + 2i) = 2 + 4i + 3i + 6i² = 2 − 6 + 7i = −4 + 7i.',
      'Dénominateur : (1 − 2i)(1 + 2i) = 1 + 4 = 5.'],
  r:'{2 + 3i¦1 − 2i} = <b>−{4¦5} + {7¦5} i</b>'},
 pieges:[
  'Oublier que i² = −1 : le terme 6i² vaut −6, pas 6.',
  'Dire que la partie imaginaire de 3 − 2i est −2i : c\'est <b>−2</b> (sans le i).',
  'Laisser i au dénominateur : il faut multiplier par le conjugué.',
  'Calculer i²⁰²⁶ sans réduire : on divise 2026 par 4 (reste 2), donc i²⁰²⁶ = i² = −1.'],
 mini:[
  {q:'Calculer (3 − i)(2 + 4i).', r:'6 + 12i − 2i − 4i² = 6 + 4 + 10i = <b>10 + 10i</b>'},
  {q:'Calculer i²⁰²⁷.', r:'2027 = 4 × 506 + 3, donc i²⁰²⁷ = i³ = <b>−i</b>'}],
 chk:[['2*1-3*2','-4'],['2*2+3*1','7'],['1+4','5'],['3*2-(-1)*4','10'],['3*4+(-1)*2','10'],['2027%4','3'],['2026%4','2']]
},

'TleD — Conjugué & module': {
 ess:[
  'Le <b>conjugué</b> de z = a + ib est <b>z̄ = a − ib</b> : on change le signe de la partie imaginaire.',
  'Le <b>module</b> de z = a + ib est <b>|z| = √(a² + b²)</b>. Si M a pour affixe z, alors OM = |z|. Pour M et M′ d\'affixes z et z′ : MM′ = |z′ − z|.',
  '|z| = 0 ⟺ z = 0.'],
 form:[
  'z + z̄ = 2 Re(z)    z − z̄ = 2i Im(z)    <b>z z̄ = a² + b² = |z|²</b>',
  'z réel ⟺ z̄ = z ;    z imaginaire pur ⟺ z̄ = −z.    Le conjugué d\'un produit est le produit des conjugués.',
  '|zz′| = |z||z′|    |zⁿ| = |z|ⁿ    |z + z′| ≤ |z| + |z′| (inégalité triangulaire).'],
 ex:{q:'Soit z = (3 + 4i)(1 − i). Donner z sous forme algébrique, son conjugué et son module.',
  st:['(3 + 4i)(1 − i) = 3 − 3i + 4i − 4i² = 3 + 4 + i = 7 + i.',
      'Conjugué : z̄ = 7 − i.',
      'Module : |z| = √(49 + 1) = √50 = 5√2.',
      'Contrôle : |3 + 4i| = 5 et |1 − i| = √2, donc |z| = 5√2.'],
  r:'z = <b>7 + i</b> ; z̄ = <b>7 − i</b> ; |z| = <b>5√2</b>'},
 pieges:[
  'Écrire |a + ib| = a² + b² : il manque la racine carrée.',
  'Écrire |z + z′| = |z| + |z′| : c\'est seulement une inégalité (≤).',
  'Dans z̄, ne changer que le signe de la partie <b>imaginaire</b>, pas celui de la partie réelle.',
  'Confondre |z′ − z| (distance entre deux points, toujours positive) avec |z′| − |z|.'],
 mini:[
  {q:'Calculer le module de −5 + 12i.', r:'√(25 + 144) = √169 = <b>13</b>'},
  {q:'Calculer z z̄ pour z = 6 − 8i.', r:'6² + 8² = <b>100</b>'}],
 chk:[['3*1-4*(-1)','7'],['3*(-1)+4*1','1'],['Math.sqrt(49+1)','5*Math.sqrt(2)'],['Math.sqrt(25+144)','13'],['36+64','100']]
},

'TleD — Forme trigonométrique & exponentielle': {
 ess:[
  'Pour z ≠ 0 : <b>z = r(cos θ + i sin θ)</b> avec r = |z| et θ = arg z (à 2π près). On trouve θ avec cos θ = {a¦r} et sin θ = {b¦r}.',
  'Notation exponentielle : <b>e^(iθ) = cos θ + i sin θ</b>, donc z = r e^(iθ). On a |e^(iθ)| = 1 et e^(iπ) = −1.',
  'Arguments usuels : arg 1 = 0, arg i = {π¦2}, arg(−1) = π, arg(−i) = −{π¦2}.',
  'Deux complexes non nuls sont égaux ⟺ même module et arguments égaux à 2kπ près.'],
 form:[
  'arg(zz′) = arg z + arg z′    arg({z¦z′}) = arg z − arg z′    arg(zⁿ) = n arg z    arg(−z) = π + arg z',
  '<b>Moivre</b> : (cos θ + i sin θ)ⁿ = cos nθ + i sin nθ.',
  '<b>Euler</b> : cos θ = {e^(iθ) + e^(−iθ)¦2}    sin θ = {e^(iθ) − e^(−iθ)¦2i}.    Elles servent à linéariser : cos²θ = {1 + cos 2θ¦2}.'],
 ex:{q:'Écrire z = −1 + i√3 sous forme trigonométrique et exponentielle, puis calculer z⁶.',
  st:['|z| = √(1 + 3) = 2.',
      'cos θ = −{1¦2} et sin θ = {√3¦2} : θ = {2π¦3}.',
      'Donc z = 2(cos {2π¦3} + i sin {2π¦3}) = 2e^(i2π/3).',
      'z⁶ = 2⁶ e^(i × 6 × 2π/3) = 64 e^(i4π) = 64.'],
  r:'z = <b>2e^(i2π/3)</b> et z⁶ = <b>64</b>'},
 pieges:[
  'Calculer l\'argument avec tan θ = {b¦a} seulement : on perd le bon quadrant. Vérifie avec cos θ et sin θ.',
  'Dans zⁿ, oublier d\'élever le <b>module</b> à la puissance n.',
  'Écrire r(cos θ − i sin θ) : le signe entre cos et sin est un <b>+</b>.',
  'Oublier que l\'argument est défini à 2π près.'],
 mini:[
  {q:'Donner le module et un argument de 1 + i√3.', r:'Module <b>2</b>, argument <b>{π¦3}</b>.'},
  {q:'Écrire −2i sous forme exponentielle.', r:'Module 2, argument −{π¦2} : <b>2e^(−iπ/2)</b>'}],
 chk:[['Math.sqrt(1+3)','2'],['Math.cos(2*Math.PI/3)','-0.5'],['2*Math.sin(2*Math.PI/3)','Math.sqrt(3)'],['2**6','64'],['6*2*Math.PI/3','4*Math.PI'],['Math.cos(Math.PI/3)','0.5'],['Math.sin(Math.PI/3)','Math.sqrt(3)/2'],['Math.atan2(Math.sqrt(3),1)','Math.PI/3'],['Math.atan2(-2,0)','-Math.PI/2'],['64*Math.cos(4*Math.PI)','64']]
},

'TleD — Équations dans ℂ & racines n-ièmes': {
 ess:[
  'Les racines carrées de −9 sont 3i et −3i. Plus généralement, z² = −k (k > 0) a pour solutions <b>±i√k</b>.',
  'Pour az² + bz + c = 0 (a, b, c réels) avec <b>Δ = b² − 4ac < 0</b> : deux solutions <b>complexes conjuguées</b> {−b ± i√(−Δ)¦2a}. (Si Δ ≥ 0 : les formules habituelles, solutions réelles.)',
  'Relations : <b>z₁ + z₂ = −{b¦a}</b> et <b>z₁ z₂ = {c¦a}</b>.',
  'Un complexe non nul a exactement <b>n racines n-ièmes</b>. Pour z = r e^(iα) : zₖ = ⁿ√r · e^(i(α + 2kπ)/n), k = 0, 1, …, n − 1. Leurs images sont les sommets d\'un <b>polygone régulier</b> centré en O.',
  'Si P est un polynôme à coefficients réels et z₀ une racine non réelle, alors <b>z̄₀ est aussi racine</b>. Si z₀ est racine, P(z) = (z − z₀) Q(z).'],
 form:[
  'Racines carrées algébriques de a + ib : on pose (x + iy)² = a + ib et on résout x² − y² = a, 2xy = b, x² + y² = |a + ib|.',
  'Racines quatrièmes de 1 : 1 ; i ; −1 ; −i.    Racines cubiques de 1 : 1 ; e^(2iπ/3) ; e^(4iπ/3).'],
 ex:{q:'Résoudre dans ℂ : z² + 2z + 10 = 0.',
  st:['Δ = 2² − 4 × 1 × 10 = 4 − 40 = −36 < 0.',
      '√(−Δ) = 6, donc les solutions sont z = {−2 ± 6i¦2}.',
      'z₁ = −1 + 3i et z₂ = −1 − 3i (conjuguées).',
      'Vérification : somme = −2 = −b/a ; produit = 1 + 9 = 10 = c/a.'],
  r:'S = {<b>−1 + 3i ; −1 − 3i</b>}'},
 pieges:[
  'Écrire √(−36) = −6 ou « pas de solution » : dans ℂ il y a deux solutions, ±6i.',
  'Les deux solutions ne sont conjuguées que si a, b, c sont <b>réels</b>.',
  'Oublier de diviser par 2a, ou de diviser aussi la partie imaginaire.',
  'Chercher moins de n racines n-ièmes : il y en a toujours n (k = 0 à n − 1).'],
 mini:[
  {q:'Résoudre z² + 16 = 0 dans ℂ.', r:'z² = −16 : <b>z = 4i ou z = −4i</b>'},
  {q:'Quelles sont les racines quatrièmes de 16 ?', r:'<b>2 ; 2i ; −2 ; −2i</b> (car 2⁴ = 16 et i⁴ = 1)'}],
 chk:[['4-4*10','-36'],['Math.sqrt(36)','6'],['(-2)/2','-1'],['6/2','3'],['1+9','10'],['2**4','16'],['2*2-1*1','3'],['2*2*1','4']]
},

'TleD — Nombres complexes & géométrie plane': {
 ess:[
  'Le plan est muni d\'un repère orthonormé direct (O, I, J). Distance : <b>AB = |z_B − z_A|</b>. Milieu de [AB] : affixe {z_A + z_B¦2}.',
  'Angles : <b>mes(OI⃗, AB⃗) = arg(z_B − z_A)</b> et <b>mes(AB⃗, CD⃗) = arg {z_D − z_C¦z_B − z_A}</b> (à 2π près).',
  'ABCD est un parallélogramme ⟺ z_B − z_A = z_C − z_D (AB⃗ = DC⃗).'],
 form:[
  '<b>A, B, C alignés ⟺ {z_C − z_A¦z_B − z_A} ∈ ℝ.</b>',
  '<b>(AB) ⟂ (CD) ⟺ {z_D − z_C¦z_B − z_A} ∈ iℝ.</b>',
  'Lieux : |z − a| = R est le cercle de centre d\'affixe a et de rayon R ; |z − a| = |z − b| est la médiatrice de [AB].',
  'Si {z_C − z_A¦z_B − z_A} = i : triangle <b>rectangle isocèle en A</b> ; si c\'est e^(iπ/3) : triangle <b>équilatéral</b>.'],
 ex:{q:'Soit A(1 + i), B(4 + i), C(1 + 4i). Quelle est la nature du triangle ABC ?',
  st:['z_B − z_A = 3 et z_C − z_A = 3i.',
      'Le quotient {z_C − z_A¦z_B − z_A} = {3i¦3} = i.',
      'Son module est 1 : AC = AB (= 3). Son argument est {π¦2} : angle droit en A.',
      'Contrôle : BC = |−3 + 3i| = √18 = 3√2.'],
  r:'ABC est <b>rectangle isocèle en A</b>.'},
 pieges:[
  'Inverser l\'ordre dans z_B − z_A : on prend « arrivée − départ ».',
  'Confondre ∈ ℝ (alignement) et ∈ iℝ (perpendiculaires).',
  'Un quotient de module 1 donne seulement l\'égalité des longueurs, pas l\'angle droit.',
  'Oublier de prendre le module du vecteur pour calculer une distance.'],
 mini:[
  {q:'Quelle est l\'affixe du milieu de A(2 + 3i) et B(4 − i) ?', r:'{6 + 2i¦2} = <b>3 + i</b>'},
  {q:'Quel est l\'ensemble des points M d\'affixe z tels que |z + 1 − 2i| = 3 ?', r:'Le <b>cercle de centre −1 + 2i et de rayon 3</b>.'}],
 chk:[['(2+4)/2','3'],['(3+(-1))/2','1'],['Math.sqrt(9+9)','3*Math.sqrt(2)']]
},

'TleD — Limites & continuité': {
 ess:[
  'Limite d\'une <b>composée</b> : si f → b en a et g → l en b, alors g∘f → l en a.',
  'Quatre formes indéterminées : +∞ − ∞ ; 0 × ∞ ; {∞¦∞} ; {0¦0}. On factorise le terme dominant ou on simplifie.',
  'f est <b>continue en a</b> si sa limite en a est f(a). Une somme, un produit, un quotient (dénominateur non nul) et une composée de fonctions continues sont continus.',
  'Autres résultats : si f a une limite <b>finie</b> l en a (où f n\'est pas définie), on la <b>prolonge par continuité</b> en posant f(a) = l. Une fonction croissante et majorée sur [a ; b[ a une limite finie en b ; croissante et non majorée, elle tend vers +∞. Majorée + limite −∞ donne −∞ ; minorée + limite +∞ donne +∞.',
  '<b>TVI</b> : f continue sur [a ; b], k entre f(a) et f(b) ⟹ f(x) = k a au moins une solution dans [a ; b]. Si f est de plus <b>strictement monotone</b>, la solution est <b>unique</b>.'],
 form:[
  'L\'image d\'un intervalle par une fonction continue est un intervalle. Si f est continue strictement croissante sur [a ; b] : f([a ; b]) = [f(a) ; f(b)] (décroissante : [f(b) ; f(a)]).',
  'Strictement monotone et continue sur K : f réalise une <b>bijection</b> de K sur f(K), de réciproque continue et de même sens de variation.',
  'Racine n-ième : réciproque de x ↦ xⁿ sur ℝ⁺ ; x^(p/q) = (racine q-ième de x)ᵖ (p entier relatif, q entier ≥ 1). Exemple : 8^(2/3) = (∛8)² = 4.'],
 ex:{q:'Montrer que l\'équation x³ + x − 1 = 0 admet une solution unique α dans [0 ; 1], puis localiser α entre deux dixièmes.',
  st:['f(x) = x³ + x − 1 est continue sur [0 ; 1] (polynôme). f(0) = −1 < 0 et f(1) = 1 > 0.',
      'f′(x) = 3x² + 1 > 0 : f est strictement croissante. D\'après le TVI, il y a une unique solution α.',
      'f(0,6) = 0,216 + 0,6 − 1 = −0,184 < 0.',
      'f(0,7) = 0,343 + 0,7 − 1 = 0,043 > 0.'],
  r:'Une unique solution α, avec <b>0,6 < α < 0,7</b>.'},
 pieges:[
  'Appliquer le TVI sans vérifier que f est <b>continue</b> sur l\'intervalle.',
  'Conclure « unique » sans avoir montré que f est strictement monotone.',
  'Écrire +∞ − ∞ = 0 : c\'est une forme indéterminée.',
  'Confondre « limite en a » et « valeur en a » : la continuité demande qu\'elles soient égales.'],
 mini:[
  {q:'Calculer la limite en +∞ de {3x² − x¦x² + 1}.', r:'On factorise x² : la limite est <b>3</b>.'},
  {q:'Calculer 16^(3/4).', r:'(⁴√16)³ = 2³ = <b>8</b>'}],
 chk:[['0**3+0-1','-1'],['1+1-1','1'],['0.6**3+0.6-1<0','true'],['0.7**3+0.7-1>0','true'],['16**(3/4)','8'],['8**(2/3)','4'],['(()=>{let a=0,b=1;for(let i=0;i<60;i++){const m=(a+b)/2;if(m**3+m-1>0)b=m;else a=m}return a>0.6&&a<0.7})()','true'],['(3*1e12**2-1e12)/(1e12**2+1)','3']]
},

'TleD — Dérivation & étude de fonctions': {
 ess:[
  'f est dérivable en x₀ ⟺ f(x₀ + h) = f(x₀) + l h + h φ(h) avec φ(h) → 0 quand h → 0 (alors l = f′(x₀)). Elle l\'est aussi ⟺ dérivable à gauche et à droite avec <b>f′_g(x₀) = f′_d(x₀)</b>.',
  'Si f′_g ≠ f′_d : <b>point anguleux</b> (deux demi-tangentes distinctes). Exemple : |x| en 0 (−1 à gauche, 1 à droite).',
  'Si le taux {f(x₀ + h) − f(x₀)¦h} tend vers ±∞ : <b>demi-tangente verticale</b>.',
  'f″ est la dérivée de f′. Si f″ s\'annule <b>en changeant de signe</b> en x₀, c\'est un <b>point d\'inflexion</b> (la tangente traverse la courbe).'],
 form:[
  '<b>(g∘f)′ = f′ × (g′∘f)</b>.    Exemples : [(3x + 1)⁴]′ = 12(3x + 1)³ ;  [sin 2x]′ = 2 cos 2x ;  [√u]′ = {u′¦2√u} ;  (tan x)′ = 1 + tan²x.',
  'Réciproque φ de f : φ′(y) = {1¦f′(φ(y))} (si f′ ≠ 0).    (x^(1/n))′ = {1¦n} x^(1/n − 1).',
  '<b>Inégalité des accroissements finis</b> : m ≤ f′ ≤ M sur [a ; b] ⟹ m(b − a) ≤ f(b) − f(a) ≤ M(b − a). Si |f′| ≤ M : |f(b) − f(a)| ≤ M|b − a|.'],
 ex:{q:'Soit f(x) = (x² + 1)³. Calculer f′(x), puis l\'équation de la tangente en x = 1.',
  st:['On pose u = x² + 1, donc f = u³ et f′ = 3u² × u′.',
      'f′(x) = 3(x² + 1)² × 2x = 6x(x² + 1)².',
      'f(1) = 2³ = 8 et f′(1) = 6 × 1 × 2² = 24.',
      'Tangente : y = f′(1)(x − 1) + f(1) = 24(x − 1) + 8 = 24x − 16.'],
  r:'f′(x) = <b>6x(x² + 1)²</b> ; tangente : <b>y = 24x − 16</b>'},
 pieges:[
  'Oublier le facteur u′ en dérivant une composée : (u³)′ = 3u² <b>u′</b>.',
  'Dire que |x| est dérivable en 0 : la courbe a un point anguleux.',
  'Penser que f″ = 0 suffit pour un point d\'inflexion : il faut un <b>changement de signe</b>.',
  'Confondre f(x₀) et f′(x₀) dans l\'équation de la tangente.'],
 mini:[
  {q:'Dériver g(x) = (2x − 5)³ puis calculer g′(3).', r:'g′(x) = 6(2x − 5)², donc g′(3) = 6 × 1 = <b>6</b>'},
  {q:'Pourquoi x ↦ |x| n\'est-elle pas dérivable en 0 ?', r:'f′_g(0) = −1 ≠ f′_d(0) = 1 : <b>point anguleux</b>.'}],
 chk:[['6*1*(1+1)**2','24'],['(1+1)**3','8'],['24*1-16','8'],['6*(2*3-5)**2','6']]
}

});
