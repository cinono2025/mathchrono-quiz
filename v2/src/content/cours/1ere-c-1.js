/* ===== Résumés de cours — classe de 1ère C (guide du programme de première C, juillet 2010) =====
   Même structure que cours_3e.js. Balisage : <b>…</b> ; fraction {numérateur¦dénominateur}. */
window.MQ_COURS = window.MQ_COURS || {};
window.MQ_COURS['1ère C'] = Object.assign(window.MQ_COURS['1ère C'] || {}, {

'1C — Orthogonalité dans l\'espace': {
 ess:[
  'Deux droites de l\'espace sont <b>orthogonales</b> quand les parallèles à ces droites menées par un même point sont <b>perpendiculaires</b>. Elles ne sont pas forcément sécantes.',
  'Une droite est <b>orthogonale à un plan</b> quand elle est orthogonale à <b>toute droite</b> de ce plan. Il suffit qu\'elle soit orthogonale à <b>deux droites sécantes</b> du plan.',
  'Deux plans sont <b>perpendiculaires</b> quand l\'un contient une droite orthogonale à l\'autre.',
  'Par un point, il passe <b>une seule droite</b> perpendiculaire à un plan donné, et <b>un seul plan</b> perpendiculaire à une droite donnée.'],
 form:[
  'Deux droites parallèles : tout plan (ou toute droite) orthogonal à l\'une l\'est aussi à l\'autre.',
  'Deux droites orthogonales à un même plan sont <b>parallèles</b>. Deux plans perpendiculaires à une même droite sont <b>parallèles</b>.',
  'Distance d\'un point A à un plan (P) : <b>AH</b>, où H est le point où la perpendiculaire à (P) passant par A coupe (P). Même idée pour la distance à une droite (on prend le plan perpendiculaire à la droite).'],
 ex:{q:'Dans le cube ABCDEFGH (E au-dessus de A), montre que les plans (ABCD) et (ABFE) sont perpendiculaires.',
  st:['(AE) est orthogonale à (AB) et à (AD) : ce sont deux arêtes du cube issues de A, à angle droit.',
      '(AB) et (AD) sont deux droites <b>sécantes</b> du plan (ABCD), donc (AE) est orthogonale au plan (ABCD).',
      'Or (AE) est contenue dans le plan (ABFE). Un plan qui contient une droite orthogonale à l\'autre plan lui est perpendiculaire.'],
  r:'Les plans (ABCD) et (ABFE) sont <b>perpendiculaires</b>.'},
 pieges:[
  'Deux droites orthogonales de l\'espace ne sont <b>pas forcément sécantes</b> (deux arêtes non coplanaires d\'un cube).',
  'Être orthogonale à <b>une seule</b> droite d\'un plan ne suffit pas pour être orthogonale au plan : il en faut deux, <b>sécantes</b>.',
  'Dans l\'espace, deux droites perpendiculaires à une même troisième ne sont pas forcément parallèles.'],
 mini:[
  {q:'Deux droites sont orthogonales à un même plan. Que dire d\'elles ?', r:'Elles sont <b>parallèles</b>.'},
  {q:'Que faut-il vérifier pour montrer qu\'une droite est orthogonale à un plan ?', r:'Qu\'elle est orthogonale à <b>deux droites sécantes</b> de ce plan.'}],
 chk:[]
},

'1C — Projections orthogonales': {
 ess:[
  'La <b>projection orthogonale sur un plan (P)</b> associe à tout point M le point M′ où la droite passant par M et <b>perpendiculaire à (P)</b> coupe (P). Les points invariants sont <b>tous les points de (P)</b>.',
  'La <b>projection orthogonale sur une droite (D)</b> associe à M le point M′ où le plan passant par M et perpendiculaire à (D) coupe (D). Les points invariants sont ceux de (D).',
  'Image d\'une droite par la projection sur un plan : une <b>droite</b> si elle n\'est pas orthogonale au plan ; un <b>point</b> (singleton) si elle lui est perpendiculaire.'],
 form:[
  'Si (AB) n\'est pas orthogonale à (P) : l\'image de [AB] est [A′B′]. Si (AB) est parallèle à (P) : A′B′ = AB. Sinon : A′B′ < AB.',
  'Le projeté du milieu d\'un segment (non orthogonal à (P)) est le <b>milieu</b> du segment projeté.',
  'Projection sur une droite (D) : une droite orthogonale à (D) a pour image un point ; une droite non orthogonale a pour image (D) tout entière.'],
 ex:{q:'Dans un repère orthonormé, on projette sur le plan (xOy) les points A(1 ; 2 ; 3) et B(4 ; 6 ; 9). Détermine A′, B′, A′B′ et le projeté du milieu de [AB].',
  st:['Projeter sur (xOy) : on garde x et y, on met z = 0. Donc A′(1 ; 2 ; 0) et B′(4 ; 6 ; 0).',
      'A′B′ = √(3² + 4²) = √25 = 5.',
      'Le milieu I de [AB] est (2,5 ; 4 ; 6). Son projeté est (2,5 ; 4 ; 0), qui est bien le milieu de [A′B′].'],
  r:'A′(1 ; 2 ; 0), B′(4 ; 6 ; 0), <b>A′B′ = 5</b> (alors que AB = √61 > 5).'},
 pieges:[
  'La projection <b>ne conserve pas</b> les longueurs : en général A′B′ < AB (égalité seulement si (AB) ∥ (P)).',
  'Ne confonds pas projection sur un <b>plan</b> (on obtient un point du plan) et projection sur une <b>droite</b>.',
  'Une droite perpendiculaire au plan a pour image un <b>point</b>, pas une droite.'],
 mini:[
  {q:'Quel est l\'ensemble des points invariants par la projection orthogonale sur un plan (P) ?', r:'Le plan <b>(P)</b> lui-même.'},
  {q:'Projeté de M(2 ; −3 ; 5) sur le plan (xOy) ?', r:'<b>(2 ; −3 ; 0)</b>'}],
 chk:[['Math.hypot(3,4)','5'],['Math.hypot(3,4,6)','Math.sqrt(61)'],['Math.hypot(3,4,6)>Math.hypot(3,4)','true'],['(1+4)/2','2.5'],['(3+9)/2','6']]
},

'1C — Vecteurs de l\'espace': {
 ess:[
  'Un vecteur non nul est caractérisé par sa <b>direction</b>, son <b>sens</b> et sa <b>longueur</b>. Pour tout point O et tout vecteur u⃗, il y a <b>un seul</b> point M tel que OM⃗ = u⃗.',
  '<b>Colinéaires</b> : l\'un est nul ou ils ont la même direction (u⃗ = k v⃗). <b>Coplanaires</b> : l\'un est combinaison linéaire des deux autres.',
  'Une <b>base</b> est un triplet de vecteurs <b>non coplanaires</b>. Un <b>repère</b> est un quadruplet (O, I, J, K) de points <b>non coplanaires</b> : tout point a un unique triplet (x ; y ; z).'],
 form:[
  'M ∈ (AB) ⟺ il existe x réel avec AM⃗ = x AB⃗ (A ≠ B).',
  'M ∈ (ABC) ⟺ AM⃗ = x AB⃗ + y AC⃗ (A, B, C non alignés).',
  'AB⃗(x_B − x_A ; y_B − y_A ; z_B − z_A). Milieu de [AB] : {x_A + x_B¦2} ; {y_A + y_B¦2} ; {z_A + z_B¦2}.',
  'Règle du parallélogramme : dans ABCD, AB⃗ + AD⃗ = AC⃗.'],
 ex:{q:'Les points A(1 ; 0 ; 2), B(3 ; 2 ; 6) et C(2 ; 1 ; 4) sont-ils alignés ?',
  st:['AB⃗ a pour coordonnées (3 − 1 ; 2 − 0 ; 6 − 2) = (2 ; 2 ; 4).',
      'AC⃗ a pour coordonnées (2 − 1 ; 1 − 0 ; 4 − 2) = (1 ; 1 ; 2).',
      'On voit que AB⃗ = 2 AC⃗ : les vecteurs sont colinéaires, donc A, B, C sont sur une même droite.'],
  r:'Oui, <b>A, B, C sont alignés</b>.'},
 pieges:[
  'Le vecteur AB⃗ se calcule « <b>arrivée moins départ</b> » : B − A, pas A − B.',
  'Trois vecteurs non nuls ne sont pas forcément coplanaires : il faut chercher une relation u⃗ = x v⃗ + y w⃗.',
  'Pour alignés, il faut <b>un seul</b> coefficient k pour les trois coordonnées.'],
 mini:[
  {q:'Coordonnées de AB⃗ pour A(2 ; −1 ; 0) et B(5 ; 3 ; −2) ?', r:'<b>(3 ; 4 ; −2)</b>'},
  {q:'Milieu de [AB] pour A(0 ; 4 ; 2) et B(6 ; 0 ; −2) ?', r:'<b>(3 ; 2 ; 0)</b>'}],
 chk:[['3-1','2'],['6-2','4'],['2*(2-1)','3-1'],['2*(4-2)','6-2'],['5-2','3'],['3-(-1)','4'],['-2-0','-2'],['(0+6)/2','3'],['(4+0)/2','2'],['(2-2)/2','0']]
},

'1C — Produit scalaire dans l\'espace': {
 ess:[
  'Dans une <b>base orthonormée</b> (trois vecteurs deux à deux orthogonaux et de norme 1), on travaille avec les coordonnées : u⃗(x ; y ; z) et v⃗(x′ ; y′ ; z′).',
  'Le produit scalaire est un <b>nombre</b>, symétrique : u⃗ ⋅ v⃗ = v⃗ ⋅ u⃗. Il se définit aussi par projection : OA⃗ ⋅ OB⃗ = OA × OH (mesure algébrique), H projeté de B sur (OA).',
  'u⃗ et v⃗ non nuls sont <b>orthogonaux</b> ⟺ u⃗ ⋅ v⃗ = 0.'],
 form:[
  'u⃗ ⋅ v⃗ = <b>xx′ + yy′ + zz′</b>    ‖u⃗‖ = <b>√(x² + y² + z²)</b>    ‖u⃗‖² = u⃗ ⋅ u⃗',
  'cos(u⃗, v⃗) = {u⃗ ⋅ v⃗¦‖u⃗‖ × ‖v⃗‖}',
  '‖u⃗ + v⃗‖² = ‖u⃗‖² + 2 u⃗ ⋅ v⃗ + ‖v⃗‖²',
  'AB⃗ ⋅ AC⃗ = 0 ⟹ le triangle ABC est <b>rectangle en A</b>.'],
 ex:{q:'Soit u⃗(2 ; −1 ; 2) et v⃗(1 ; 2 ; −2). Calcule u⃗ ⋅ v⃗, ‖u⃗‖, ‖v⃗‖ et cos(u⃗, v⃗).',
  st:['u⃗ ⋅ v⃗ = 2×1 + (−1)×2 + 2×(−2) = 2 − 2 − 4 = −4.',
      '‖u⃗‖ = √(4 + 1 + 4) = √9 = 3.',
      '‖v⃗‖ = √(1 + 4 + 4) = 3.',
      'cos(u⃗, v⃗) = {−4¦3 × 3} = {−4¦9}.'],
  r:'u⃗ ⋅ v⃗ = <b>−4</b>, ‖u⃗‖ = ‖v⃗‖ = <b>3</b>, cos = <b>{−4¦9}</b> (angle obtus).'},
 pieges:[
  'Le produit scalaire est un <b>nombre</b>, pas un vecteur.',
  'u⃗ ⋅ v⃗ = 0 donne l\'orthogonalité seulement si les vecteurs sont <b>non nuls</b>.',
  'La formule ‖u⃗‖ = √(x² + y² + z²) n\'est valable que dans une base <b>orthonormée</b>.',
  'Ne pas oublier la racine carrée pour la norme.'],
 mini:[
  {q:'u⃗(1 ; 2 ; 3) et v⃗(2 ; −1 ; 0) sont-ils orthogonaux ?', r:'<b>Oui</b> : 2 − 2 + 0 = 0.'},
  {q:'Norme de u⃗(2 ; 3 ; 6) ?', r:'√(4 + 9 + 36) = √49 = <b>7</b>.'}],
 chk:[['2*1+(-1)*2+2*(-2)','-4'],['Math.hypot(2,-1,2)','3'],['Math.hypot(1,2,-2)','3'],['-4/9','-4/(3*3)'],['1*2+2*(-1)+3*0','0'],['Math.hypot(2,3,6)','7']]
},

'1C — Géométrie analytique de l\'espace': {
 ess:[
  'Un <b>plan</b> de vecteur normal n⃗(a ; b ; c) a une équation <b>ax + by + cz + d = 0</b>. Les coefficients de x, y, z donnent un vecteur normal.',
  'Plan passant par A(x₀ ; y₀ ; z₀) de vecteur normal n⃗ : a(x − x₀) + b(y − y₀) + c(z − z₀) = 0, puis on développe.',
  'Une <b>droite</b> passant par A(x₀ ; y₀ ; z₀) de vecteur directeur u⃗(a ; b ; c) : x = x₀ + at ; y = y₀ + bt ; z = z₀ + ct (t ∈ ℝ).',
  'Deux plans non parallèles se coupent suivant une <b>droite</b> (système de deux équations).'],
 form:[
  'Plans <b>parallèles</b> ⟺ vecteurs normaux colinéaires. Plans <b>perpendiculaires</b> ⟺ vecteurs normaux orthogonaux.',
  'Droite ∥ plan ⟺ vecteur directeur orthogonal à un vecteur normal du plan.',
  'Distance de M₀(x₀ ; y₀ ; z₀) au plan ax + by + cz + d = 0 : <b>{|ax₀ + by₀ + cz₀ + d|¦√(a² + b² + c²)}</b>.'],
 ex:{q:'Donne une équation du plan passant par A(1 ; 2 ; −1) de vecteur normal n⃗(2 ; 1 ; −2), puis la distance de l\'origine O à ce plan.',
  st:['M(x ; y ; z) est dans le plan ⟺ 2(x − 1) + 1(y − 2) − 2(z + 1) = 0.',
      'On développe : 2x − 2 + y − 2 − 2z − 2 = 0, soit 2x + y − 2z − 6 = 0.',
      'Vérification : pour A, 2 + 2 + 2 − 6 = 0.',
      'Distance de O : {|−6|¦√(4 + 1 + 4)} = {6¦3} = 2.'],
  r:'Plan : <b>2x + y − 2z − 6 = 0</b> ; distance de O : <b>2</b>.'},
 pieges:[
  'Dans 2(x − x₀) + …, on remplace par les coordonnées du point <b>avec le bon signe</b> : z − (−1) = z + 1.',
  'Dans la distance, la valeur absolue est au numérateur et la racine de a² + b² + c² au dénominateur (pas de racine sur d).',
  'Plans parallèles : normaux <b>colinéaires</b> ; perpendiculaires : normaux <b>orthogonaux</b>. Ne pas échanger.'],
 mini:[
  {q:'Un vecteur normal au plan 2x − 3y + z + 4 = 0 ?', r:'<b>(2 ; −3 ; 1)</b>'},
  {q:'Distance de M(1 ; 1 ; 1) au plan x + 2y + 2z − 2 = 0 ?', r:'{|1 + 2 + 2 − 2|¦3} = <b>1</b>.'}],
 chk:[['2*1+2-2*(-1)-6','0'],['6/Math.sqrt(2*2+1*1+2*2)','2'],['Math.abs(1+2+2-2)/Math.sqrt(1+4+4)','1']]
},

'1C — Équations du second degré': {
 ess:[
  'Pour ax² + bx + c = 0 (a ≠ 0), on calcule le <b>discriminant Δ = b² − 4ac</b>.',
  'Si <b>Δ > 0</b> : deux solutions x = {−b ± √Δ¦2a}. Si <b>Δ = 0</b> : une solution double x = {−b¦2a}. Si <b>Δ < 0</b> : aucune solution réelle.',
  '<b>Somme et produit</b> des solutions (quand elles existent) : x₁ + x₂ = {−b¦a} et x₁ x₂ = {c¦a}. Si c/a < 0, les solutions sont de signes contraires.',
  'Équation bicarrée ax⁴ + bx² + c = 0 : on pose X = x². Équation irrationnelle √(…) = … : on élève au carré puis on <b>vérifie</b> les solutions.'],
 form:[
  'Forme canonique : ax² + bx + c = a[(x + {b¦2a})² − {Δ¦4a²}].',
  'Signe du trinôme : si Δ < 0, il est du signe de a sur tout ℝ.'],
 ex:{q:'Résous 3x² − 5x − 2 = 0.',
  st:['a = 3, b = −5, c = −2.',
      'Δ = b² − 4ac = 25 − 4×3×(−2) = 25 + 24 = 49, et √Δ = 7.',
      'Δ > 0 : x₁ = {5 − 7¦6} = {−1¦3} et x₂ = {5 + 7¦6} = 2.',
      'Contrôle : somme = {5¦3} = {−b¦a} et produit = {−2¦3} = {c¦a}.'],
  r:'S = {<b>{−1¦3} ; 2</b>}.'},
 pieges:[
  'Dans Δ = b² − 4ac, le signe de c compte : avec c < 0, on <b>ajoute</b> 4|a c|.',
  'Dans −b ± √Δ, si b = −5 alors −b = <b>+5</b>.',
  'Le dénominateur est <b>2a</b> pour toute la fraction (numérateur compris).',
  'Équation irrationnelle : ne pas oublier de <b>rejeter</b> les fausses solutions (par exemple x = −1 dans √(x + 2) = x).'],
 mini:[
  {q:'Résous x² − 2x − 3 = 0.', r:'Δ = 16 ; <b>x = −1 ou x = 3</b>.'},
  {q:'Somme et produit des solutions de 2x² − 6x + 1 = 0 ?', r:'Δ = 28 > 0 ; somme = <b>3</b>, produit = <b>{1¦2}</b>.'}],
 chk:[['5**2-4*3*(-2)','49'],['(5-7)/6','-1/3'],['(5+7)/6','2'],['3*4-5*2-2','0'],['3*(1/9)+5/3-2','0'],['5/3','-(-5)/3'],['(-2)/3','-2/3'],['(2-4)/2','-1'],['(2+4)/2','3'],['6**2-4*2*1','28'],['6/2','3']]
},

'1C — Inéquations du second degré & systèmes linéaires': {
 ess:[
  'On cherche d\'abord les <b>racines</b> du trinôme (avec Δ), puis on applique la règle des signes : le trinôme est du <b>signe de a à l\'extérieur</b> des racines et du signe contraire (−a) <b>entre</b> les racines.',
  'Si Δ < 0 : le trinôme est du signe de a partout. Si Δ = 0 : du signe de a, sauf en la racine double où il vaut 0. Pour situer un nombre α par rapport aux racines : si a × f(α) < 0, α est <b>entre</b> les racines ; si a × f(α) > 0, il est <b>à l\'extérieur</b>.',
  '<b>Inéquation irrationnelle</b> : √P(x) ≤ Q(x) ⟺ P(x) ≥ 0, Q(x) ≥ 0 et P(x) ≤ Q(x)². Pour √P(x) ≥ Q(x) : soit Q(x) < 0 et P(x) ≥ 0, soit Q(x) ≥ 0 et P(x) ≥ Q(x)². Exemple : √(x + 2) < x donne x > 0 et x + 2 < x², soit S = ]2 ; +∞[.',
  '<b>Systèmes linéaires à 3 inconnues</b> : méthode du <b>pivot de Gauss</b>. On transforme le système en un système équivalent <b>triangulaire</b>, puis on remonte (la dernière équation donne z, puis y, puis x).',
  '<b>Programmation linéaire</b> : on trace le polygone des contraintes ; l\'optimum d\'une fonction linéaire est atteint en un <b>sommet</b>.'],
 form:[
  'Pour a > 0 et racines x₁ < x₂ : ax² + bx + c < 0 ⟺ x ∈ ]x₁ ; x₂[ ; ax² + bx + c > 0 ⟺ x ∈ ]−∞ ; x₁[ ∪ ]x₂ ; +∞[.'],
 ex:{q:'Résous 2x² − x − 3 < 0.',
  st:['Racines : Δ = 1 + 24 = 25, √Δ = 5.',
      'x₁ = {1 − 5¦4} = −1 et x₂ = {1 + 5¦4} = {3¦2}.',
      'Ici a = 2 > 0 : le trinôme est négatif <b>entre</b> les racines.',
      'Test : pour x = 0, on a −3 < 0, donc 0 est bien dans la solution.'],
  r:'S = <b>]−1 ; {3¦2}[</b>.'},
 pieges:[
  'Inégalité <b>stricte</b> ⟹ crochets ouverts ; large (≤, ≥) ⟹ crochets fermés sur les racines.',
  'Ne pas oublier le signe de a : si a < 0, c\'est l\'inverse.',
  'Dans le pivot de Gauss, on fait la même opération sur <b>tout</b> le membre (gauche et droite).'],
 mini:[
  {q:'Résous x² − 5x + 6 ≤ 0.', r:'Racines 2 et 3, a > 0 : <b>S = [2 ; 3]</b>.'},
  {q:'Résous x + y + z = 9 ; y + 2z = 8 ; z = 3.', r:'z = 3, y = 8 − 6 = 2, x = 9 − 2 − 3 = 4 : <b>(4 ; 2 ; 3)</b>.'}],
 chk:[['1+24','25'],['(1-5)/4','-1'],['(1+5)/4','3/2'],['2*(-1)**2-(-1)-3','0'],['2*(1.5)**2-1.5-3','0'],['2*0-0-3<0','true'],['2*4-2-3>0','true'],['2**2-5*2+6','0'],['3**2-5*3+6','0'],['4+2+3','9'],['2+2*3','8']]
},

'1C — Statistique à deux caractères': {
 ess:[
  'Une série double donne des couples (xᵢ ; yᵢ). Le <b>nuage de points</b> est l\'ensemble des points Mᵢ(xᵢ ; yᵢ). Le <b>point moyen</b> est G(x̄ ; ȳ), avec les moyennes de X et de Y.',
  'La <b>variance</b> mesure la dispersion : V(X) = (moyenne des xᵢ²) − x̄². La <b>covariance</b> mesure comment X et Y varient ensemble.',
  'La <b>droite de régression de Y en X</b> (moindres carrés) passe par G. On s\'en sert pour <b>estimer</b> Y pour une valeur de X non observée. La droite de régression de X en Y s\'obtient en échangeant les rôles de X et de Y.',
  'Le <b>coefficient de corrélation linéaire</b> r mesure la qualité de l\'ajustement : il est toujours entre −1 et 1, et plus |r| est proche de 1, plus le nuage est proche d\'une droite.'],
 form:[
  'V(X) = {1¦n}Σxᵢ² − x̄²',
  'Cov(X, Y) = {1¦n}Σxᵢyᵢ − x̄ ȳ',
  'Droite y = ax + b avec <b>a = {Cov(X, Y)¦V(X)}</b> et <b>b = ȳ − a x̄</b>.',
  'Coefficient de corrélation : <b>r = {Cov(X, Y)¦σ(X) × σ(Y)}</b>, où σ(X) = √V(X) et σ(Y) = √V(Y).'],
 ex:{q:'X : 1, 2, 3, 4, 5 et Y : 2, 3, 5, 6, 9. Trouve la droite de régression de Y en X, puis estime Y pour X = 6.',
  st:['x̄ = {15¦5} = 3 et ȳ = {25¦5} = 5.',
      'Moyenne des xᵢ² = {55¦5} = 11, donc V(X) = 11 − 9 = 2.',
      'Σxᵢyᵢ = 2 + 6 + 15 + 24 + 45 = 92, moyenne = 18,4, donc Cov = 18,4 − 3×5 = 3,4.',
      'a = {3,4¦2} = 1,7 et b = 5 − 1,7×3 = −0,1.',
      'Pour X = 6 : y = 1,7×6 − 0,1 = 10,1.',
      'Corrélation : moyenne des yᵢ² = {155¦5} = 31, V(Y) = 31 − 25 = 6, donc r = {3,4¦√2 × √6} ≈ 0,98 : très bon ajustement.'],
  r:'<b>y = 1,7x − 0,1</b> ; estimation : <b>10,1</b> (r ≈ 0,98).'},
 pieges:[
  'Variance : on <b>soustrait</b> le carré de la moyenne, on ne met pas la moyenne des carrés seule.',
  'Le coefficient a est Cov(X, Y) divisé par V(X) (pas par V(Y)) pour la droite de Y en X.',
  'Pense à vérifier que la droite passe bien par le point moyen G.'],
 mini:[
  {q:'Calcule V(X) pour X : 0, 2, 4, 6.', r:'x̄ = 3 ; moyenne des carrés = {56¦4} = 14 ; V = 14 − 9 = <b>5</b>.'},
  {q:'On a x̄ = 4, ȳ = 10 et a = 3. Quelle est l\'ordonnée à l\'origine b ?', r:'b = 10 − 3×4 = <b>−2</b>.'}],
 chk:[['15/5','3'],['25/5','5'],['55/5-3*3','2'],['(1*2+2*3+3*5+4*6+5*9)/5-3*5','3.4'],['3.4/2','1.7'],['5-1.7*3','-0.1'],['1.7*6-0.1','10.1'],['(4+9+25+36+81)/5-25','6'],['Math.abs(3.4/Math.sqrt(2*6)-0.9815)<0.001','true'],['(0+4+16+36)/4-3*3','5'],['10-3*4','-2']]
},

'1C — Dénombrement': {
 ess:[
  '<b>card(A ∪ B) = card A + card B − card(A ∩ B)</b> et <b>card(A × B) = card A × card B</b>.',
  'Avec n éléments et des choix de p éléments : <b>p-listes</b> (ordre compte, répétition permise) nᵖ ; <b>arrangements</b> Aₙᵖ = n(n − 1)…(n − p + 1) (ordre compte, sans répétition) ; <b>combinaisons</b> Cₙᵖ (ordre sans importance).',
  '<b>Permutations</b> de n éléments : n ! = n(n − 1)…×2×1, avec 0 ! = 1. Applications de E (p éléments) dans F (n éléments) : nᵖ ; injections : Aₙᵖ ; bijections (n = p) : n !.',
  'Question à te poser : l\'<b>ordre compte-t-il</b> ? Peut-on <b>répéter</b> ?'],
 form:[
  'Cₙᵖ = {n !¦p ! (n − p) !} = {Aₙᵖ¦p !}    Cₙᵖ = Cₙⁿ⁻ᵖ    Cₙ⁰ = Cₙⁿ = 1',
  'Pascal : Cₙᵖ = Cₙ₋₁ᵖ⁻¹ + Cₙ₋₁ᵖ',
  'Binôme : (a + b)ⁿ = Σ Cₙᵖ aⁿ⁻ᵖ bᵖ. Ex. (a + b)³ = a³ + 3a²b + 3ab² + b³.'],
 ex:{q:'Dans une classe de 8 élèves (5 filles et 3 garçons), on choisit un comité de 3 personnes. Combien de comités contiennent exactement 2 filles ?',
  st:['L\'ordre ne compte pas : on utilise des combinaisons.',
      'Choix des 2 filles parmi 5 : C₅² = {5 × 4¦2} = 10.',
      'Choix du garçon parmi 3 : C₃¹ = 3.',
      'On multiplie : 10 × 3 = 30.'],
  r:'<b>30 comités</b> (sur C₈³ = 56 comités possibles au total).'},
 pieges:[
  'Confondre arrangement (ordre compte) et combinaison (ordre sans importance) : tiercé dans l\'ordre = arrangement ; équipe = combinaison.',
  'Pour « exactement 2 filles », on <b>multiplie</b> les choix de chaque groupe ; on additionne pour des cas qui s\'excluent.',
  'Dans card(A ∪ B), ne pas oublier de <b>retirer</b> card(A ∩ B).'],
 mini:[
  {q:'Tiercé : combien d\'arrivées possibles dans l\'ordre avec 8 chevaux ?', r:'A₈³ = 8 × 7 × 6 = <b>336</b>.'},
  {q:'Combien de poignées de main entre 6 personnes ?', r:'C₆² = {6 × 5¦2} = <b>15</b>.'}],
 chk:[['5*4/2','10'],['3','3'],['10*3','30'],['8*7*6/(3*2*1)','56'],['8*7*6','336'],['6*5/2','15']]
},

'1C — Applications & fonctions numériques': {
 ess:[
  'Une <b>application</b> de A vers B associe à <b>chaque</b> élément de A un seul élément de B. Toute application est une fonction, mais pas l\'inverse.',
  '<b>Injective</b> : deux éléments différents ont des images différentes. <b>Surjective</b> : tout élément de B a au moins un antécédent. <b>Bijective</b> : injective et surjective, c\'est-à-dire que pour tout y de B, f(x) = y a <b>une seule</b> solution dans A.',
  'Une bijection f a une <b>réciproque</b> f⁻¹ avec f⁻¹ ∘ f = Id et f ∘ f⁻¹ = Id. Dans un repère orthonormé, les courbes de f et f⁻¹ sont symétriques par rapport à la droite <b>y = x</b>.',
  '<b>Image directe</b> de A par f : ensemble des f(x), x ∈ A. <b>Image réciproque</b> de B : ensemble des x dont l\'image est dans B.'],
 form:[
  '(g ∘ f)(x) = g(f(x)). La composition est associative. Composée de deux bijections : (g ∘ f)⁻¹ = <b>f⁻¹ ∘ g⁻¹</b>.',
  'Restriction de f à E : même formule, mais définie sur E seulement. Prolongement : fonction qui coïncide avec f sur son ensemble de définition et qui est définie sur un ensemble plus grand.',
  'f est <b>bornée</b> sur E si elle est majorée et minorée sur E.'],
 ex:{q:'Montre que f : ℝ → ℝ, x ↦ 2x + 3 est bijective et détermine f⁻¹.',
  st:['Soit y ∈ ℝ. On résout f(x) = y, c\'est-à-dire 2x + 3 = y.',
      'On obtient x = {y − 3¦2}, valeur <b>unique</b> et bien dans ℝ.',
      'Donc tout y a un seul antécédent : f est bijective, et f⁻¹(y) = {y − 3¦2}.',
      'Contrôle : f(f⁻¹(5)) = 2 × 1 + 3 = 5.'],
  r:'f est bijective et <b>f⁻¹(x) = {x − 3¦2}</b>.'},
 pieges:[
  'x ↦ x² de ℝ dans ℝ n\'est <b>ni injective</b> (f(−2) = f(2)) <b>ni surjective</b> (−1 n\'a pas d\'antécédent).',
  'Dans (g ∘ f)⁻¹, l\'ordre est <b>inversé</b> : f⁻¹ ∘ g⁻¹, et non g⁻¹ ∘ f⁻¹.',
  'L\'image réciproque d\'une partie existe même si f n\'est pas bijective : ne pas la confondre avec f⁻¹.'],
 mini:[
  {q:'x ↦ x² de ℝ dans ℝ est-elle injective ?', r:'<b>Non</b> : f(−2) = f(2) = 4.'},
  {q:'Réciproque de f(x) = 3x − 6 ?', r:'<b>f⁻¹(x) = {x + 6¦3}</b>.'}],
 chk:[['2*((5-3)/2)+3','5'],['(-2)**2','2**2'],['3*((9+6)/3)-6','9']]
},

'1C — Limites & continuité': {
 ess:[
  'Si f est définie en a et admet une limite en a, cette limite est <b>f(a)</b>. f est <b>continue en a</b> si elle est définie en a et a une limite en a.',
  'Les fonctions polynômes sont continues sur ℝ ; les fractions rationnelles, en tout point de leur ensemble de définition. Somme, produit et quotient de fonctions continues sont continus (quotient : dénominateur non nul).',
  'Si f n\'est pas définie en a : limite l en a ⟺ limites à gauche et à droite <b>égales à l</b>.',
  '<b>Asymptotes</b> : limite infinie en a ⟹ droite x = a asymptote verticale ; limite b en +∞ (ou −∞) ⟹ droite y = b asymptote horizontale.',
  'Théorème des gendarmes : f ≤ g ≤ h, avec f et h de limite l ⟹ g a pour limite l.'],
 form:[
  'À l\'infini : un <b>polynôme</b> a la limite de son monôme de plus haut degré ; une <b>fraction rationnelle</b> a la limite du quotient des monômes de plus haut degré.',
  'Si f ≤ g et lim f = l, lim g = l′, alors l ≤ l′.',
  'Forme 0/0 : on <b>factorise</b> et on simplifie.'],
 ex:{q:'Calcule la limite en 3 de {x² − x − 6¦x − 3}, puis en +∞ de {3x² + x¦x² − 1}.',
  st:['En 3 : numérateur et dénominateur tendent vers 0 (forme 0/0). On factorise : x² − x − 6 = (x − 3)(x + 2).',
      'Pour x ≠ 3, la fraction vaut x + 2, qui tend vers 5.',
      'En +∞ : on garde les monômes de plus haut degré : {3x²¦x²} = 3.'],
  r:'Limite en 3 : <b>5</b> ; limite en +∞ : <b>3</b> (asymptote horizontale y = 3).'},
 pieges:[
  'Écrire « 0/0 = 0 » ou « 0/0 = 1 » : c\'est une <b>forme indéterminée</b>, il faut transformer l\'expression.',
  'Pour une limite infinie en a, étudie le <b>signe</b> du dénominateur de chaque côté : {1¦x − 1} tend vers −∞ à gauche de 1 et +∞ à droite.',
  'À l\'infini, ne garde que les termes de plus haut degré, et seulement pour un polynôme ou une fraction rationnelle.'],
 mini:[
  {q:'Limite en +∞ de {2x² + 1¦x² − 3x} ?', r:'<b>2</b>.'},
  {q:'Limite de {1¦x − 2} quand x tend vers 2 par valeurs supérieures ?', r:'<b>+∞</b> (dénominateur positif et proche de 0).'}],
 chk:[['Math.abs((3.000001**2-3.000001-6)/(3.000001-3)-5)<1e-4','true'],['(3-3)*(3+2)','3**2-3-6'],['Math.abs((3*1e8**2+1e8)/(1e8**2-1)-3)<1e-6','true'],['Math.abs((2*1e8**2+1)/(1e8**2-3*1e8)-2)<1e-6','true'],['1/(2.000001-2)>1e5','true']]
},

'1C — Dérivation & primitives': {
 ess:[
  '<b>Taux de variation</b> de f entre x₀ et x : {f(x) − f(x₀)¦x − x₀}. Le <b>nombre dérivé</b> f′(x₀) est sa limite en x₀. Il donne le coefficient directeur de la <b>tangente</b>.',
  'Dérivable en un point ⟹ <b>continue</b> en ce point. La réciproque est <b>fausse</b> : |x| est continue en 0 sans y être dérivable.',
  '<b>Variations</b> : f′ ≥ 0 sur un intervalle ouvert ⟺ f croissante. Si f′ s\'annule en changeant de signe en x₀, f a un <b>extremum</b> en x₀.',
  'Une <b>primitive</b> F de f vérifie F′ = f. Toute fonction continue sur un intervalle en possède. Les primitives de f sont F + C (C constante) ; une seule prend une valeur donnée y₀ en x₀.'],
 form:[
  'Tangente en x₀ : <b>y = f′(x₀)(x − x₀) + f(x₀)</b>.',
  '(uv)′ = u′v + uv′    ({u¦v})′ = {u′v − uv′¦v²}',
  '(xⁿ)′ = n xⁿ⁻¹    (√x)′ = {1¦2√x}    (sin x)′ = cos x    (cos x)′ = −sin x    (g(ax + b))′ = a g′(ax + b)',
  'Primitives : xⁿ → {xⁿ⁺¹¦n + 1}, cos x → sin x, sin x → −cos x, {1¦√x} → 2√x. Linéarité : aF + bG est une primitive de af + bg.'],
 ex:{q:'Soit f(x) = {2x + 1¦x − 1}. Calcule f′(x), puis l\'équation de la tangente en x₀ = 2.',
  st:['Quotient u/v avec u = 2x + 1 et v = x − 1 : u′ = 2 et v′ = 1.',
      'f′(x) = {2(x − 1) − (2x + 1)¦(x − 1)²} = {−3¦(x − 1)²}.',
      'En x₀ = 2 : f(2) = {5¦1} = 5 et f′(2) = {−3¦1} = −3.',
      'Tangente : y = −3(x − 2) + 5 = −3x + 11.'],
  r:'f′(x) = <b>{−3¦(x − 1)²}</b> ; tangente : <b>y = −3x + 11</b>.'},
 pieges:[
  'La dérivée d\'un produit n\'est <b>pas</b> le produit des dérivées : (uv)′ = u′v + uv′.',
  'Dans le quotient, le numérateur est u′v <b>−</b> uv′ (l\'ordre compte).',
  'Une primitive est définie à une <b>constante</b> près : on utilise la condition donnée pour trouver C.',
  'Continue n\'implique pas dérivable.'],
 mini:[
  {q:'Dérive f(x) = (x + 1)(x² − 3).', r:'(x² − 3) + (x + 1)(2x) = <b>3x² + 2x − 3</b>.'},
  {q:'Primitive de 4x³ − 2x + 1 qui s\'annule en 0 ?', r:'<b>x⁴ − x² + x</b> (la constante vaut 0).'}],
 chk:[['2*(2-1)-(2*2+1)','-3'],['(2*2+1)/(2-1)','5'],['-3*2+11','5'],['Math.abs((((2+1e-6)*2+1)/((2+1e-6)-1)-((2-1e-6)*2+1)/((2-1e-6)-1))/2e-6-(-3))<1e-4','true'],['3*4+2*2-3','13'],['Math.abs((((2+1e-6)+1)*((2+1e-6)**2-3)-((2-1e-6)+1)*((2-1e-6)**2-3))/2e-6-13)<1e-4','true'],['4*8-4+1','29'],['Math.abs((((2+1e-6)**4-(2+1e-6)**2+(2+1e-6))-((2-1e-6)**4-(2-1e-6)**2+(2-1e-6)))/2e-6-29)<1e-4','true']]
},

'1C — Suites numériques': {
 ess:[
  'Une <b>suite</b> (uₙ) est une fonction de ℕ (ou d\'une partie de ℕ) vers ℝ. Elle est <b>majorée</b> (uₙ ≤ M), <b>minorée</b> (uₙ ≥ m), <b>bornée</b> si elle est les deux. Elle est <b>croissante</b> si uₙ₊₁ ≥ uₙ, <b>monotone</b> si elle est croissante ou décroissante.',
  '<b>Suite arithmétique</b> de raison r : uₙ₊₁ = uₙ + r. <b>Suite géométrique</b> de raison q : uₙ₊₁ = q uₙ.',
  '<b>Convergente</b> : elle a une limite finie. Une suite <b>croissante majorée</b> ou <b>décroissante minorée</b> converge. Si uₙ = f(n) et f a pour limite l en +∞, alors uₙ converge vers l.'],
 form:[
  'Arithmétique : <b>uₙ = u_k + (n − k) r</b>. Somme de p termes consécutifs : p × {premier + dernier¦2}.',
  'Géométrique : <b>uₙ = u_k × qⁿ⁻ᵏ</b>. Pour q ≠ 1, somme de p termes consécutifs à partir de u_k : <b>u_k {1 − qᵖ¦1 − q}</b>.'],
 ex:{q:'(uₙ) est arithmétique avec u₃ = 11 et u₇ = 23. Calcule r, u₀, u₁₀ et la somme u₀ + u₁ + … + u₁₀.',
  st:['u₇ = u₃ + 4r donc 23 = 11 + 4r, soit r = 3.',
      'u₀ = u₃ − 3r = 11 − 9 = 2.',
      'u₁₀ = u₀ + 10r = 2 + 30 = 32.',
      'La somme compte 11 termes : 11 × {2 + 32¦2} = 11 × 17 = 187.'],
  r:'r = <b>3</b>, u₀ = <b>2</b>, u₁₀ = <b>32</b>, somme = <b>187</b>.'},
 pieges:[
  'La somme de u₀ à u₁₀ contient <b>11 termes</b> (et non 10).',
  'Dans uₙ = u_k + (n − k) r, c\'est (n − k) et non n qui multiplie r.',
  'Si une suite uₙ = f(n) est telle que f n\'a pas de limite en +∞, on ne peut <b>pas conclure</b> directement : il faut étudier la suite à part.'],
 mini:[
  {q:'Suite géométrique : u₀ = 5 et q = 2. Calcule u₀ + u₁ + … + u₅.', r:'6 termes : 5 × {1 − 2⁶¦1 − 2} = 5 × 63 = <b>315</b>.'},
  {q:'Vers quoi converge uₙ = {2n − 1¦n + 1} ?', r:'Vers <b>2</b> (quotient des termes de plus haut degré).'}],
 chk:[['(23-11)/4','3'],['11-3*3','2'],['2+10*3','32'],['11*(2+32)/2','187'],['[0,1,2,3,4,5,6,7,8,9,10].reduce((s,n)=>s+2+3*n,0)','187'],['5*(1-2**6)/(1-2)','315'],['[0,1,2,3,4,5].reduce((s,n)=>s+5*2**n,0)','315'],['Math.abs((2*1e9-1)/(1e9+1)-2)<1e-6','true']]
},

'1C — Angles orientés & fonctions circulaires': {
 ess:[
  'Un angle orienté a une infinité de mesures : si α est l\'une d\'elles, toutes sont de la forme <b>α + 2kπ</b> (k ∈ ℤ). La <b>mesure principale</b> est celle qui est dans ]−π ; π].',
  'Mesures de l\'angle <b>nul</b> : 2kπ. Angle <b>plat</b> : π + 2kπ. Deux vecteurs <b>orthogonaux</b> : {π¦2} + kπ.',
  '<b>Relation de Chasles</b> : (u⃗, w⃗) = (u⃗, v⃗) + (v⃗, w⃗) à 2π près.',
  '<b>Parité et périodes</b> : cos est paire, sin est impaire, cos et sin ont pour période 2π, tan a pour période π.'],
 form:[
  'cos²a + sin²a = 1    −1 ≤ cos a ≤ 1    −1 ≤ sin a ≤ 1',
  'tan a = {sin a¦cos a} (cos a ≠ 0)    1 + tan²a = {1¦cos²a}',
  'Limites en 0 : {sin x¦x} → 1 ; {1 − cos x¦x²} → {1¦2} ; donc sin x ≈ x pour |x| petit.'],
 ex:{q:'Donne la mesure principale de {25π¦4} et de −{17π¦3}.',
  st:['On retire ou on ajoute des multiples de 2π pour arriver dans ]−π ; π].',
      '{25π¦4} − 6π = {25π − 24π¦4} = {π¦4}, et {π¦4} est dans ]−π ; π].',
      '−{17π¦3} + 6π = {−17π + 18π¦3} = {π¦3}.'],
  r:'Mesure principale de {25π¦4} : <b>{π¦4}</b> ; de −{17π¦3} : <b>{π¦3}</b>.'},
 pieges:[
  'La mesure principale est dans ]−π ; π] : <b>−π exclu, π inclus</b>.',
  'Vecteurs orthogonaux : mesures {π¦2} + <b>kπ</b> (et non 2kπ), car ±{π¦2} conviennent.',
  'tan a n\'existe pas quand cos a = 0.',
  'Le signe de cos et sin dépend du quadrant : vérifie-le avec la donnée de l\'énoncé.'],
 mini:[
  {q:'Si sin a = {3¦5} et a ∈ ]0 ; {π¦2}[, que vaut cos a ?', r:'cos²a = 1 − {9¦25} = {16¦25} et cos a > 0 : <b>cos a = {4¦5}</b>.'},
  {q:'Mesure principale de {13π¦3} ?', r:'{13π¦3} − 4π = <b>{π¦3}</b>.'}],
 chk:[['25/4-6','1/4'],['-17/3+6','1/3'],['1-9/25','16/25'],['Math.sqrt(16/25)','4/5'],['13/3-4','1/3']]
},

'1C — Formules trigonométriques & équations': {
 ess:[
  '<b>Formules d\'addition</b> : elles donnent cos et sin d\'une somme ou d\'une différence.',
  '<b>Duplication</b> (a = b) : cos 2a = cos²a − sin²a = 2cos²a − 1 = 1 − 2sin²a ; sin 2a = 2 sin a cos a.',
  '<b>Équations</b> : cos x = cos α ⟺ x = α + 2kπ ou x = −α + 2kπ ; sin x = sin α ⟺ x = α + 2kπ ou x = π − α + 2kπ ; tan x = tan α ⟺ x = α + kπ.',
  'Pour a cos x + b sin x = c, on écrit a cos x + b sin x = √(a² + b²) cos(x − φ), puis on résout.'],
 form:[
  'cos(a + b) = cos a cos b − sin a sin b    cos(a − b) = cos a cos b + sin a sin b',
  'sin(a + b) = sin a cos b + cos a sin b    sin(a − b) = sin a cos b − cos a sin b',
  'Valeurs : cos {π¦3} = {1¦2}, sin {π¦3} = {√3¦2}, cos {π¦4} = sin {π¦4} = {√2¦2}.'],
 ex:{q:'Calcule cos {π¦12} en écrivant {π¦12} = {π¦3} − {π¦4}.',
  st:['On utilise cos(a − b) = cos a cos b + sin a sin b avec a = {π¦3} et b = {π¦4}.',
      'cos {π¦3} cos {π¦4} = {1¦2} × {√2¦2} = {√2¦4}.',
      'sin {π¦3} sin {π¦4} = {√3¦2} × {√2¦2} = {√6¦4}.',
      'On additionne les deux résultats.'],
  r:'cos {π¦12} = <b>{√2 + √6¦4}</b> (environ 0,966).'},
 pieges:[
  'Les signes : cos(a + b) a un <b>moins</b> au milieu ; cos(a − b) a un <b>plus</b>.',
  'Pour sin x = sin α, la deuxième famille est π − α, pas −α.',
  'cos 2a ≠ 2 cos a : on ne distribue pas le « 2 ».',
  'Dans cos x = a, n\'oublie pas les <b>deux familles</b> de solutions (±).'],
 mini:[
  {q:'Si cos a = {1¦3}, que vaut cos 2a ?', r:'2 × {1¦9} − 1 = <b>{−7¦9}</b>.'},
  {q:'Résous sin x = {√3¦2}.', r:'<b>x = {π¦3} + 2kπ ou x = {2π¦3} + 2kπ</b> (k ∈ ℤ).'}],
 chk:[['Math.cos(Math.PI/12)','(Math.sqrt(2)+Math.sqrt(6))/4'],['Math.cos(Math.PI/3-Math.PI/4)','0.5*Math.sqrt(2)/2+Math.sqrt(3)/2*Math.sqrt(2)/2'],['2/9-1','-7/9'],['2*(1/3)**2-1','-7/9'],['Math.sin(Math.PI/3)','Math.sqrt(3)/2'],['Math.sin(2*Math.PI/3)','Math.sqrt(3)/2']]
},

'1C — Barycentre & lignes de niveau': {
 ess:[
  'Si α + β ≠ 0, le <b>barycentre</b> G de (A ; α) et (B ; β) est le point tel que <b>α GA⃗ + β GB⃗ = 0⃗</b>. Il existe et il est unique. Si α + β = 0, il n\'existe pas.',
  'Pour tout point M : <b>α MA⃗ + β MB⃗ = (α + β) MG⃗</b>. Avec M = A : AG⃗ = {β¦α + β} AB⃗.',
  'Si les coefficients sont égaux, G est l\'<b>isobarycentre</b> (milieu de [AB] ; centre de gravité pour trois points).',
  '<b>Homogénéité</b> : on peut multiplier tous les coefficients par un même réel non nul. <b>Associativité</b> : on peut remplacer une partie des points par leur barycentre, affecté de la somme de leurs coefficients.'],
 form:[
  'Coordonnées : x_G = {α x_A + β x_B¦α + β}, y_G = {α y_A + β y_B¦α + β}.',
  'Ligne de niveau k de M ↦ Σ αᵢ MAᵢ² : ensemble des M tels que Σ αᵢ MAᵢ² = k.',
  'MA² + MB² = 2 MI² + {AB²¦2} (I milieu de [AB]). MA = MB : la <b>médiatrice</b> de [AB].'],
 ex:{q:'A(−1 ; 2) et B(5 ; −4). Détermine le barycentre G de (A ; 2) et (B ; 1), puis écris AG⃗ en fonction de AB⃗.',
  st:['La somme des coefficients est 2 + 1 = 3 ≠ 0 : G existe.',
      'x_G = {2×(−1) + 1×5¦3} = {3¦3} = 1.',
      'y_G = {2×2 + 1×(−4)¦3} = 0. Donc G(1 ; 0).',
      'AG⃗ = {1¦3} AB⃗ : AB⃗(6 ; −6) et AG⃗(2 ; −2), ce qui est cohérent.'],
  r:'<b>G(1 ; 0)</b> et <b>AG⃗ = {1¦3} AB⃗</b>.'},
 pieges:[
  'Le coefficient de B apparaît au <b>numérateur</b> de AG⃗ = {β¦α + β}AB⃗ (et non celui de A).',
  'Le barycentre n\'existe pas si α + β = 0.',
  'Un coefficient peut être <b>négatif</b> : G est alors en dehors du segment [AB].'],
 mini:[
  {q:'G est le barycentre de (A ; 1) et (B ; 3). Exprime AG⃗ en fonction de AB⃗.', r:'<b>AG⃗ = {3¦4} AB⃗</b>.'},
  {q:'Centre de gravité du triangle A(0 ; 0), B(6 ; 0), C(0 ; 3) ?', r:'<b>G(2 ; 1)</b>.'}],
 chk:[['(2*(-1)+1*5)/3','1'],['(2*2+1*(-4))/3','0'],['(1/3)*6','2'],['(1/3)*(-6)','-2'],['(0+6+0)/3','2'],['(0+0+3)/3','1']]
},

'1C — Cercle : équation, représentation paramétrique & tangente': {
 ess:[
  'Cercle de centre Ω(a ; b) et de rayon r : <b>(x − a)² + (y − b)² = r²</b>. Représentation paramétrique : <b>x = a + r cos t ; y = b + r sin t</b> (t ∈ ℝ).',
  'L\'équation x² + y² − 2ax − 2by + c = 0 représente un cercle si a² + b² − c > 0. Centre Ω(a ; b), rayon r = √(a² + b² − c). Pour la reconnaître : <b>forme canonique</b> (on complète les carrés).',
  'La tangente en M₀ est la droite perpendiculaire au rayon [ΩM₀] en M₀.'],
 form:[
  'Tangente en M₀(x₀ ; y₀) : <b>(x₀ − a)(x − a) + (y₀ − b)(y − b) = r²</b>. Pour un cercle centré à l\'origine : x₀x + y₀y = r².',
  'Cercle de diamètre [AB] : centre = milieu de [AB], rayon = {AB¦2}.'],
 ex:{q:'Étudie x² + y² + 6x − 4y − 12 = 0, puis donne la tangente en M₀(0 ; −2).',
  st:['x² + 6x = (x + 3)² − 9 et y² − 4y = (y − 2)² − 4.',
      'L\'équation devient (x + 3)² + (y − 2)² = 12 + 9 + 4 = 25 : centre Ω(−3 ; 2), rayon 5.',
      'M₀ est sur le cercle : 0 + 4 + 0 + 8 − 12 = 0.',
      'Tangente : (0 + 3)(x + 3) + (−2 − 2)(y − 2) = 25, soit 3x + 9 − 4y + 8 = 25, donc 3x − 4y − 8 = 0.'],
  r:'Centre <b>(−3 ; 2)</b>, rayon <b>5</b> ; tangente : <b>3x − 4y − 8 = 0</b>.'},
 pieges:[
  'Le centre est (a ; b) pour (x − a)² : dans (x + 3)², le centre a pour abscisse <b>−3</b>.',
  'Dans (x − a)² + (y − b)² = r², le second membre est r² : le rayon est <b>sa racine carrée</b>.',
  'Pour un point donné, <b>vérifie</b> qu\'il est bien sur le cercle avant de donner la tangente.'],
 mini:[
  {q:'Centre et rayon de x² + y² − 2x + 4y − 4 = 0 ?', r:'(x − 1)² + (y + 2)² = 9 : centre <b>(1 ; −2)</b>, rayon <b>3</b>.'},
  {q:'Représentation paramétrique du cercle de centre (1 ; 2) et de rayon 3 ?', r:'<b>x = 1 + 3cos t ; y = 2 + 3sin t</b>.'}],
 chk:[['12+9+4','25'],['0+4+0+8-12','0'],['3*0-4*(-2)-8','0'],['Math.abs(3*(-3)-4*2-8)/Math.sqrt(9+16)','5'],['1+4+4','9']]
},

'1C — Isométries & composition de transformations': {
 ess:[
  'Une <b>isométrie</b> est une transformation du plan qui <b>conserve les distances</b> : translations, rotations, symétries orthogonales. La composée de deux isométries est une isométrie. Une homothétie de rapport k avec |k| ≠ 1 n\'en est pas une.',
  'Un <b>déplacement</b> (translation, rotation) conserve les angles orientés ; un <b>antidéplacement</b> (symétrie orthogonale) les change en leurs opposés. Déplacement ∘ déplacement = déplacement ; antidéplacement ∘ antidéplacement = déplacement ; déplacement ∘ antidéplacement = antidéplacement.',
  'Composée de deux <b>translations</b> de vecteurs u⃗ et v⃗ : translation de vecteur <b>u⃗ + v⃗</b>. Composée de deux <b>rotations</b> d\'angles a et a′ : si elles ont le <b>même centre</b>, rotation de ce centre d\'angle <b>a + a′</b> ; si les centres sont <b>distincts</b>, translation quand a + a′ = 0, sinon rotation d\'angle a + a′ (mais d\'un autre centre). Cette composition n\'est pas commutative.',
  'Composée de deux <b>symétries orthogonales</b> d\'axes Δ et Δ′ : si les axes se coupent en O, rotation de centre O et d\'angle <b>2(u⃗, u⃗′)</b> (u⃗ et u⃗′ vecteurs directeurs des axes) ; si les axes sont parallèles, une translation.',
  'Composée de deux <b>homothéties</b> de rapports k et k′ : de même centre O, homothétie de centre O et de rapport <b>kk′</b> ; de centres distincts, homothétie de rapport kk′ si kk′ ≠ 1, translation si kk′ = 1. Homothétie (k ≠ 1) et translation : homothétie de rapport k. Rotation et translation : rotation de même angle (ou translation si l\'angle est nul).'],
 form:[
  'Une rotation conserve les distances et les angles orientés. Une translation conserve distances, angles et parallélisme.',
  'Homothétie de rapport k : elle multiplie les distances par <b>|k|</b>.'],
 ex:{q:'Soit r₁ la rotation de centre O et d\'angle {2π¦3}, r₂ celle de centre O et d\'angle {π¦2}. Quelle est la composée r₂ ∘ r₁ ?',
  st:['Les deux rotations ont le même centre O : leur composée est une rotation de centre O.',
      'Son angle est la somme : {2π¦3} + {π¦2} = {4π + 3π¦6} = {7π¦6}.',
      'Mesure principale : {7π¦6} − 2π = −{5π¦6}.'],
  r:'Rotation de centre O et d\'angle <b>{7π¦6}</b> (soit <b>−{5π¦6}</b> en mesure principale).'},
 pieges:[
  'Rotations de centres <b>distincts</b> : les angles s\'additionnent encore, mais le centre n\'est plus le même ; si a + a′ = 0, on obtient une translation.',
  'Pour deux homothéties de même centre, on <b>multiplie</b> les rapports (on n\'additionne pas).',
  'Deux symétries d\'axes sécants : l\'angle de la rotation est le <b>double</b> de l\'angle entre les axes.',
  'Une homothétie ne conserve pas les distances : ce n\'est pas une isométrie (sauf rapport 1 ou −1).'],
 mini:[
  {q:'Composée des homothéties de centre O et de rapports 3 et {1¦2} ?', r:'Homothétie de centre O et de rapport <b>{3¦2}</b>.'},
  {q:'Composée des translations de vecteurs u⃗(1 ; 2) et v⃗(3 ; −1) ?', r:'Translation de vecteur <b>(4 ; 1)</b>.'}],
 chk:[['2/3+1/2','7/6'],['7/6-2','-5/6'],['3*0.5','1.5'],['1+3','4'],['2+(-1)','1']]
},

'1C — Similitudes planes & triangles semblables': {
 ess:[
  'Une <b>similitude de rapport k</b> (k > 0) multiplie toutes les distances par <b>k</b>. Elle multiplie les <b>aires</b> par <b>k²</b>.',
  'Elle conserve le rapport de deux distances, l\'alignement, le parallélisme et les angles géométriques. Une similitude de rapport 1 est une <b>isométrie</b>.',
  'Une <b>similitude</b> est la composée d\'une homothétie de rapport k et d\'une isométrie : elle multiplie les distances par |k|. Une similitude <b>directe</b> conserve les angles orientés ; une similitude <b>indirecte</b> les change en leurs opposés.',
  'Deux triangles sont <b>semblables</b> si leurs angles sont égaux deux à deux, ou si leurs côtés sont proportionnels. Le rapport de similitude est le rapport de deux côtés <b>homologues</b>.'],
 form:[
  'Longueurs × k    Aires × k²    Angles inchangés.',
  'Image d\'un cercle de rayon r : cercle de rayon k r. Image d\'un segment [AB] : segment de longueur k AB.',
  'Triangles <b>isométriques</b> (mêmes côtés) : semblables de rapport 1.'],
 ex:{q:'Un triangle ABC a pour côtés 3 cm, 4 cm, 5 cm et pour aire 6 cm². Une similitude de rapport 2,5 le transforme en A′B′C′. Donne les côtés, le périmètre et l\'aire de A′B′C′.',
  st:['Les longueurs sont multipliées par 2,5 : 3×2,5 = 7,5 ; 4×2,5 = 10 ; 5×2,5 = 12,5.',
      'Périmètre : 7,5 + 10 + 12,5 = 30 cm (le périmètre initial 12 est aussi multiplié par 2,5).',
      'Les aires sont multipliées par k² = 6,25 : 6 × 6,25 = 37,5.'],
  r:'Côtés <b>7,5 ; 10 ; 12,5</b> cm, périmètre <b>30 cm</b>, aire <b>37,5 cm²</b>.'},
 pieges:[
  'Les aires se multiplient par <b>k²</b>, pas par k.',
  'Une similitude <b>ne conserve pas</b> les longueurs (sauf k = 1) mais conserve les angles.',
  'Pour le rapport, utilise des côtés <b>homologues</b> (qui se correspondent), pas n\'importe quels côtés.'],
 mini:[
  {q:'Similitude de rapport 3 : un triangle d\'aire 4 a une image d\'aire ?', r:'4 × 3² = <b>36</b>.'},
  {q:'Deux triangles semblables : côtés 3, 5, 7 et le plus petit côté de l\'autre vaut 9. Plus grand côté de l\'autre ?', r:'Rapport 3, donc 7 × 3 = <b>21</b>.'}],
 chk:[['3*2.5','7.5'],['4*2.5','10'],['5*2.5','12.5'],['7.5+10+12.5','30'],['3*4/2','6'],['6*2.5**2','37.5'],['3**2+4**2','5**2'],['4*3**2','36'],['9/3','3'],['7*3','21']]
},

'1C — Fonctions associées & transformations de courbes': {
 ess:[
  'Pour tracer la courbe de g à partir de celle de f, on utilise des <b>transformations</b> simples :',
  '<b>f(x + a)</b> : translation de vecteur <b>(−a ; 0)</b> (décalage horizontal, signe opposé). <b>f(x) + b</b> : translation de vecteur <b>(0 ; b)</b>.',
  '<b>f(−x)</b> : symétrie par rapport à l\'axe des <b>ordonnées</b>. <b>−f(x)</b> : symétrie par rapport à l\'axe des <b>abscisses</b>. <b>|f(x)|</b> : on symétrise par rapport à (Ox) les parties situées sous l\'axe.'],
 form:[
  'g(x) = f(x − a) + b : translation de vecteur <b>(a ; b)</b>.',
  'Parabole y = ax² + bx + c : axe de symétrie x = {−b¦2a} (abscisse du sommet).',
  'Fonction homographique {ax + b¦cx + d} : centre de symétrie (−{d¦c} ; {a¦c}), intersection des deux asymptotes.'],
 ex:{q:'La courbe de g(x) = {1¦x + 1} − 2 se déduit de celle de f(x) = {1¦x} par quelle translation ? Quelles sont ses asymptotes ?',
  st:['g(x) = f(x + 1) − 2 : on décale de <b>−1</b> en abscisse (x + 1) et de <b>−2</b> en ordonnée.',
      'Le vecteur est donc (−1 ; −2).',
      'Les asymptotes de f (x = 0 et y = 0) deviennent x = −1 et y = −2.',
      'Contrôle : le point (2 ; {1¦2}) de f devient (1 ; −1,5), et g(1) = {1¦2} − 2 = −1,5.'],
  r:'Translation de vecteur <b>(−1 ; −2)</b> ; asymptotes <b>x = −1</b> et <b>y = −2</b>.'},
 pieges:[
  'f(x + a) décale vers la <b>gauche</b> si a > 0 : le décalage horizontal est de signe <b>opposé</b>. f(x) + b, lui, suit le signe de b.',
  'f(−x) et −f(x) sont deux symétries différentes : axe (Oy) pour la première, axe (Ox) pour la seconde.',
  'Pour |f|, seules les parties sous l\'axe des abscisses sont modifiées.'],
 mini:[
  {q:'Sommet de la parabole y = x² − 6x + 5 ?', r:'x = {6¦2} = 3 et y = 9 − 18 + 5 = −4 : <b>(3 ; −4)</b>.'},
  {q:'Comment obtenir la courbe de g(x) = −f(x) ?', r:'Par symétrie de la courbe de f par rapport à l\'axe des <b>abscisses</b>.'}],
 chk:[['1/2-2','-1.5'],['1/(1+1)-2','-1.5'],['6/2','3'],['3**2-6*3+5','-4']]
},

'1C — Prop. & Déf.': { memo:true }
});
