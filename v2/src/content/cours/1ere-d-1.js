/* ===== Résumés de cours — classe de 1ère D (guide du programme de première D) =====
   Même structure que cours_3e.js / cours_2d.js. Le discriminant est au programme en 1ère D.
   Balisage : <b>…</b> ; fraction {numérateur¦dénominateur}. */
window.MQ_COURS = window.MQ_COURS || {};
window.MQ_COURS['1ère D'] = Object.assign(window.MQ_COURS['1ère D'] || {}, {

'1D — Orthogonalité dans l\'espace': {
 ess:[
  'Deux droites sont <b>orthogonales</b> si, en menant par un point des parallèles à ces droites, on obtient deux droites <b>perpendiculaires</b>. Elles ne sont pas forcément sécantes.',
  'Une droite est <b>orthogonale à un plan</b> si elle est orthogonale à <b>toutes</b> les droites de ce plan. Il suffit qu\'elle soit orthogonale à <b>deux droites sécantes</b> du plan.',
  'Par un point A, il passe <b>une seule droite</b> perpendiculaire à un plan donné, et <b>un seul plan</b> orthogonal à une droite donnée.',
  'Deux plans sont <b>perpendiculaires</b> si l\'un contient une droite orthogonale à l\'autre.'],
 form:[
  'Deux droites parallèles : toute droite orthogonale à l\'une est orthogonale à l\'autre.',
  'Deux droites orthogonales à un même plan sont <b>parallèles</b>. Deux plans orthogonaux à une même droite sont <b>parallèles</b>.',
  'Si deux plans sont parallèles, toute droite orthogonale à l\'un est orthogonale à l\'autre.'],
 ex:{q:'Dans le cube ABCDEFGH (ABCD en bas, E au-dessus de A), montrer que (AE) est orthogonale à (BD).',
  st:['(AE) est orthogonale à (AB) et à (AD) : ce sont des arêtes du cube issues de A.',
      '(AB) et (AD) sont <b>sécantes</b> et contenues dans le plan (ABCD). Donc (AE) est orthogonale au plan (ABCD).',
      'La droite (BD) est contenue dans le plan (ABCD). Une droite orthogonale à un plan est orthogonale à toutes les droites de ce plan.'],
  r:'(AE) ⊥ (BD) : <b>(AE) et (BD) sont orthogonales</b> (elles ne sont pas sécantes).'},
 pieges:[
  'Deux droites orthogonales ne sont <b>pas toujours sécantes</b> : (AE) et (BD) sont orthogonales et non coplanaires.',
  'Être orthogonale à <b>une seule</b> droite du plan ne suffit pas : il faut <b>deux droites sécantes</b>.',
  'Ne confonds pas « droites perpendiculaires » (sécantes) et « droites orthogonales » (cas général).'],
 mini:[
  {q:'Une droite est orthogonale à deux droites sécantes d\'un plan. Que dire de cette droite et du plan ?', r:'La droite est <b>orthogonale au plan</b>.'},
  {q:'Deux droites orthogonales à un même plan sont-elles parallèles ?', r:'<b>Oui</b>, elles sont parallèles.'}],
 chk:[]
},

'1D — Projections orthogonales': {
 ess:[
  'Projection orthogonale sur un <b>plan (P)</b> : le projeté de M est le point M′ où la perpendiculaire à (P) passant par M <b>coupe (P)</b>. Les points de (P) sont <b>invariants</b>.',
  'Projection orthogonale sur une <b>droite (D)</b> : le projeté de M est le point où le plan orthogonal à (D) passant par M coupe (D). Les points de (D) sont invariants.',
  'Le projeté d\'un <b>milieu</b> est le milieu des projetés (si le support n\'est pas orthogonal au plan ou à la droite).'],
 form:[
  'Image d\'une droite (D) par la projection sur un plan : une <b>droite</b> si (D) n\'est pas orthogonale au plan ; un <b>point</b> si elle l\'est.',
  'Si (AB) ∥ (P) alors A′B′ = AB. Sinon (et (AB) non orthogonale à (P)) : A′B′ < AB.',
  'Projection sur une droite (D) : l\'image d\'une droite non orthogonale à (D) est (D) ; si elle est orthogonale à (D), c\'est un point.'],
 ex:{q:'A et B sont du même côté d\'un plan (P). A est à 2 cm de (P), B est à 7 cm de (P), et AB = 13 cm. Calculer A′B′ (projetés sur (P)).',
  st:['Les points A, A′, B′, B forment un trapèze rectangle : AA′ ⊥ (P) et BB′ ⊥ (P).',
      'La différence des hauteurs est 7 − 2 = 5 cm. Pythagore : AB² = A′B′² + 5².',
      'A′B′² = 13² − 5² = 169 − 25 = 144, donc A′B′ = 12.'],
  r:'<b>A′B′ = 12 cm</b> (et 12 < 13 : la projection raccourcit).'},
 pieges:[
  'La projection orthogonale <b>ne conserve pas les longueurs</b> sauf si le segment est parallèle au plan.',
  'Une droite perpendiculaire au plan a pour image un <b>point</b>, pas une droite.',
  'Ne confonds pas projeter sur un plan (perpendiculaire au plan) et projeter sur une droite (plan orthogonal à la droite).'],
 mini:[
  {q:'(AB) est parallèle au plan (P), AB = 10. Que vaut A′B′ ?', r:'<b>A′B′ = 10</b>'},
  {q:'Quelle est l\'image d\'une droite orthogonale à (P) par la projection sur (P) ?', r:'<b>Un point</b> (un singleton).'}],
 chk:[['Math.sqrt(13**2-(7-2)**2)','12'],['5**2+12**2===13**2','true']]
},

'1D — Vecteurs de l\'espace': {
 ess:[
  'Un vecteur est caractérisé par sa <b>direction</b>, son <b>sens</b> et sa <b>longueur</b>. Pour tout point O et tout vecteur u⃗, il existe <b>un unique</b> point M tel que OM⃗ = u⃗.',
  'Deux vecteurs sont <b>colinéaires</b> si l\'un est nul ou s\'ils ont la même direction. Trois vecteurs sont <b>coplanaires</b> si l\'un est combinaison linéaire des deux autres.',
  'Une <b>base</b> est un triplet de vecteurs <b>non coplanaires</b>. Un <b>repère</b> est (O, I, J, K) avec O, I, J, K non coplanaires. Tout point a un unique triplet (x ; y ; z).'],
 form:[
  'Pour A ≠ B : M ∈ (AB) ⟺ il existe x réel tel que AM⃗ = x AB⃗.',
  'Pour A, B, C non alignés : M ∈ (ABC) ⟺ il existe x et y réels tels que AM⃗ = x AB⃗ + y AC⃗.',
  'AB⃗(xB − xA ; yB − yA ; zB − zA)    Milieu de [AB] : ({xA + xB¦2} ; {yA + yB¦2} ; {zA + zB¦2})'],
 ex:{q:'Soit A(1 ; 2 ; 3), B(4 ; 0 ; 5) et C(7 ; −2 ; 7). Les points A, B, C sont-ils alignés ?',
  st:['AB⃗ a pour coordonnées (4 − 1 ; 0 − 2 ; 5 − 3) = (3 ; −2 ; 2).',
      'AC⃗ a pour coordonnées (7 − 1 ; −2 − 2 ; 7 − 3) = (6 ; −4 ; 4).',
      'On remarque AC⃗ = 2 AB⃗ : les deux vecteurs sont colinéaires.'],
  r:'<b>Oui, A, B, C sont alignés</b> (AC⃗ = 2 AB⃗).'},
 pieges:[
  'Coordonnées d\'un vecteur : <b>arrivée − départ</b> (B − A), pas l\'inverse.',
  'Pour la colinéarité, il faut le <b>même coefficient</b> sur les trois coordonnées.',
  'Trois vecteurs <b>non nuls</b> ne sont pas toujours coplanaires : i⃗, j⃗, k⃗ ne le sont pas, mais i⃗, j⃗, i⃗ + j⃗ le sont.'],
 mini:[
  {q:'Milieu de [AB] pour A(2 ; 0 ; 4) et B(4 ; 6 ; −2) ?', r:'<b>(3 ; 3 ; 1)</b>'},
  {q:'Les vecteurs i⃗, j⃗ et i⃗ + j⃗ sont-ils coplanaires ?', r:'<b>Oui</b> : le troisième est combinaison linéaire des deux premiers.'}],
 chk:[['4-1','3'],['0-2','-2'],['5-3','2'],['7-1','2*(4-1)'],['-2-2','2*(0-2)'],['7-3','2*(5-3)'],['(2+4)/2','3'],['(0+6)/2','3'],['(4-2)/2','1']]
},

'1D — Équations du second degré': {
 ess:[
  'Pour ax² + bx + c = 0 (a ≠ 0), on calcule le <b>discriminant Δ = b² − 4ac</b>.',
  'Si <b>Δ > 0</b> : deux solutions distinctes. Si <b>Δ = 0</b> : une solution double. Si <b>Δ < 0</b> : aucune solution réelle.',
  'Les <b>solutions</b> x₁ et x₂ vérifient : <b>somme = −b/a</b> et <b>produit = c/a</b>. Si le produit est négatif, les solutions sont de signes contraires.',
  'Équation bicarrée : on pose X = x². Équation irrationnelle : on élève au carré, puis on <b>vérifie</b> dans l\'équation de départ.'],
 form:[
  'Δ = b² − 4ac    Δ > 0 : x = {−b ± √Δ¦2a}    Δ = 0 : x = {−b¦2a}',
  'Forme canonique : ax² + bx + c = a[(x + {b¦2a})² − {Δ¦4a²}]',
  'Signe de ax² + bx + c avec Δ < 0 : celui de <b>a</b> sur tout ℝ.'],
 ex:{q:'Résoudre 2x² − 3x − 2 = 0.',
  st:['a = 2, b = −3, c = −2.',
      'Δ = b² − 4ac = 9 − 4 × 2 × (−2) = 9 + 16 = 25 > 0 : deux solutions.',
      'x₁ = {3 + 5¦4} = 2    x₂ = {3 − 5¦4} = −{1¦2}.',
      'Contrôle : somme = 2 − 0,5 = {3¦2} = −b/a ; produit = −1 = c/a.'],
  r:'<b>S = {−1/2 ; 2}</b>'},
 pieges:[
  'Dans la formule, c\'est <b>−b</b> : si b = −3, alors −b = +3.',
  'Ne divise pas seulement une partie par 2a : <b>tout le numérateur</b> est divisé par 2a.',
  'Équation irrationnelle : une solution trouvée peut être <b>fausse</b>. Pour √(x + 2) = x, on trouve x = 2 et x = −1, mais −1 est rejeté car √1 = 1 ≠ −1.',
  'Dans x⁴ − 5x² + 4 = 0, après avoir trouvé X = 1 et X = 4, n\'oublie pas de revenir à x : x = ±1 ou x = ±2.'],
 mini:[
  {q:'Deux nombres ont pour somme 7 et pour produit 12. Lesquels ?', r:'<b>3 et 4</b>'},
  {q:'Résoudre x² − x − 6 = 0.', r:'Δ = 1 + 24 = 25, donc <b>x = 3 ou x = −2</b>.'}],
 chk:[['(-3)**2-4*2*(-2)','25'],['2*2**2-3*2-2','0'],['2*(-0.5)**2-3*(-0.5)-2','0'],['2+(-0.5)','3/2'],['2*(-0.5)','-1'],['3+4','7'],['3*4','12'],['1**2-4*1*(-6)','25'],['3**2-3-6','0'],['(-2)**2-(-2)-6','0']]
},

'1D — Inéquations du second degré & systèmes linéaires': {
 ess:[
  'Un trinôme ax² + bx + c (Δ > 0, racines x₁ < x₂) est du <b>signe de a à l\'extérieur</b> des racines et du <b>signe contraire de a entre</b> les racines.',
  'Si Δ < 0, le trinôme est du signe de a sur tout ℝ. Si Δ = 0, il est du signe de a, sauf en la racine double où il s\'annule. Pour situer un nombre α par rapport aux racines : si a × f(α) < 0, α est <b>entre</b> les racines ; si a × f(α) > 0, il est <b>à l\'extérieur</b>.',
  'Système linéaire : on le transforme en un système <b>équivalent</b> plus simple. La <b>méthode du pivot de Gauss</b> consiste à obtenir un système <b>triangulaire</b>, puis à remonter.',
  'Programmation linéaire : on cherche l\'optimum d\'une fonction linéaire sur le polygone des contraintes. Il est atteint en <b>un sommet</b> du polygone.'],
 form:[
  'a > 0 et Δ > 0 : ax² + bx + c < 0 entre les racines ; > 0 à l\'extérieur.',
  'Pour résoudre 1/x + 1/y + 1/z = …, on pose X = 1/x, Y = 1/y, Z = 1/z.'],
 ex:{q:'Résoudre le système : x + y + z = 3 ; x − y + z = 1 ; x + y − z = 1.',
  st:['(L1) − (L2) : 2y = 2, donc y = 1.',
      '(L1) − (L3) : 2z = 2, donc z = 1.',
      'Dans (L1) : x + 1 + 1 = 3, donc x = 1.',
      'Vérification dans (L2) : 1 − 1 + 1 = 1 ; dans (L3) : 1 + 1 − 1 = 1.'],
  r:'<b>S = {(1 ; 1 ; 1)}</b>'},
 pieges:[
  'Ne change pas le sens de l\'inégalité sans raison : il ne change que si tu multiplies ou divises par un nombre <b>négatif</b>.',
  'x² − 4 > 0 se résout à l\'<b>extérieur</b> des racines −2 et 2, pas entre elles.',
  'Crochets : une inégalité <b>stricte</b> donne un crochet ouvert, une inégalité large donne un crochet fermé.',
  'En résolvant un système, vérifie ta solution dans <b>toutes</b> les équations.'],
 mini:[
  {q:'Résoudre x² − 3x + 2 ≤ 0.', r:'Racines 1 et 2, trinôme négatif entre elles : <b>[1 ; 2]</b>.'},
  {q:'Résoudre x² − 4 > 0.', r:'<b>]−∞ ; −2[ ∪ ]2 ; +∞[</b>'}],
 chk:[['1+1+1','3'],['1-1+1','1'],['1+1-1','1'],['1**2-3*1+2','0'],['2**2-3*2+2','0'],['1.5**2-3*1.5+2<0','true'],['0**2-3*0+2>0','true'],['0**2-4<0','true'],['3**2-4>0','true']]
},

'1D — Statistique : séries groupées en classes': {
 ess:[
  'Regrouper en classes, c\'est répartir les valeurs en <b>intervalles disjoints</b> deux à deux, de la forme [a ; b[.',
  '<b>Centre</b> d\'une classe : {a + b¦2}. <b>Amplitude</b> : b − a. <b>Densité</b> : {effectif¦amplitude}.',
  'La série des <b>centres</b> sert à calculer la moyenne, la variance et l\'écart-type. L\'<b>histogramme</b> représente une série groupée.',
  '<b>Classe modale</b> : classe d\'effectif maximal. <b>Mode</b> : centre de la classe de densité maximale.'],
 form:[
  'Moyenne : x̄ = {n₁c₁ + n₂c₂ + … + nₖcₖ¦N}, où cᵢ = centres et N = effectif total.',
  'Variance : V = {n₁c₁² + … + nₖcₖ²¦N} − x̄²    Écart-type : σ = √V.',
  'Effectifs cumulés croissants : on cumule les effectifs dans l\'ordre croissant des classes.'],
 ex:{q:'Classes [0 ; 5[ (effectif 2), [5 ; 10[ (6), [10 ; 20[ (8). Calculer la moyenne, la classe modale et le mode.',
  st:['Effectif total : N = 2 + 6 + 8 = 16. Centres : 2,5 ; 7,5 ; 15.',
      'Moyenne = {2 × 2,5 + 6 × 7,5 + 8 × 15¦16} = {5 + 45 + 120¦16} = {170¦16} = 10,625.',
      'Classe modale (effectif maximal) : [10 ; 20[ (effectif 8).',
      'Densités : {2¦5} = 0,4 ; {6¦5} = 1,2 ; {8¦10} = 0,8. La plus grande est celle de [5 ; 10[, donc le mode est son centre : 7,5.'],
  r:'<b>Moyenne = 10,625 ; classe modale [10 ; 20[ ; mode = 7,5</b>'},
 pieges:[
  'Si les classes n\'ont <b>pas la même amplitude</b>, la classe modale (effectif) et la classe de densité maximale peuvent être différentes.',
  'Pour la moyenne, on utilise les <b>centres</b> des classes, pas les bornes.',
  'L\'écart-type est la <b>racine carrée</b> de la variance : n\'oublie pas la racine.'],
 mini:[
  {q:'Classes [0 ; 10[ (4), [10 ; 20[ (6), [20 ; 30[ (10). Quelle est la moyenne ?', r:'(4 × 5 + 6 × 15 + 10 × 25) ÷ 20 = 360 ÷ 20 = <b>18</b>'},
  {q:'Quelle est la densité de la classe [10 ; 20[ d\'effectif 6 ?', r:'{6¦10} = <b>0,6</b>'}],
 chk:[['2+6+8','16'],['(2*2.5+6*7.5+8*15)/16','10.625'],['2/5','0.4'],['6/5','1.2'],['8/10','0.8'],['(4*5+6*15+10*25)/20','18'],['6/10','0.6']]
},

'1D — Dénombrement': {
 ess:[
  'Si deux choix indépendants se font de m et n façons, on a <b>m × n</b> possibilités : card(A × B) = card A × card B.',
  '<b>Union</b> : card(A ∪ B) = card A + card B − card(A ∩ B).',
  'Avec ordre et répétitions : <b>nᵖ</b> p-listes (et nᵖ applications d\'un ensemble de p éléments dans un ensemble de n éléments). Avec ordre, sans répétition : <b>arrangements</b>. Sans ordre : <b>combinaisons</b>. Pour des applications d\'un ensemble de p éléments dans un ensemble de n éléments : les <b>injections</b> sont au nombre de Aₙᵖ ; si p = n, les <b>bijections</b> sont au nombre de n!.'],
 form:[
  'Arrangements : Aₙᵖ = n(n − 1)…(n − p + 1) (p facteurs).    Permutations : n! = n(n − 1)…2 × 1, avec 0! = 1.',
  'Combinaisons : Cₙᵖ = {n!¦p!(n − p)!} = {Aₙᵖ¦p!}.    Cₙ⁰ = Cₙⁿ = 1 ; Cₙᵖ = Cₙⁿ⁻ᵖ.',
  'Pascal : Cₙᵖ = Cₙ₋₁ᵖ⁻¹ + Cₙ₋₁ᵖ.    Binôme : (a + b)ⁿ = Σ Cₙᵖ aⁿ⁻ᵖ bᵖ.    (a + b)³ = a³ + 3a²b + 3ab² + b³.'],
 ex:{q:'Dans un groupe de 8 élèves, (1) on choisit 3 délégués sans distinction ; (2) on choisit un président, un secrétaire et un trésorier. Combien de possibilités ?',
  st:['(1) L\'ordre ne compte pas : combinaisons. C₈³ = {8 × 7 × 6¦3 × 2 × 1} = {336¦6} = 56.',
      '(2) Les rôles sont différents, donc l\'ordre compte : arrangements. A₈³ = 8 × 7 × 6 = 336.',
      'On vérifie : A₈³ = 3! × C₈³ = 6 × 56 = 336.'],
  r:'<b>(1) 56 ; (2) 336</b>'},
 pieges:[
  'Demande-toi toujours : <b>l\'ordre compte-t-il ?</b> Oui : arrangement ; non : combinaison.',
  'Les répétitions sont-elles permises ? Si oui, c\'est nᵖ (p-liste), pas un arrangement.',
  'Ne confonds pas Aₙᵖ (p facteurs décroissants) et nᵖ.',
  'Dans l\'union, n\'oublie pas de retirer card(A ∩ B).'],
 mini:[
  {q:'Calculer A₅² et C₆³.', r:'A₅² = 5 × 4 = <b>20</b> ; C₆³ = {6 × 5 × 4¦6} = <b>20</b>'},
  {q:'Nombre de codes à 4 chiffres (de 0 à 9, répétitions autorisées) ?', r:'10⁴ = <b>10 000</b>'}],
 chk:[['8*7*6/6','56'],['8*7*6','336'],['6*56','336'],['5*4','20'],['6*5*4/6','20'],['10**4','10000'],['5*4*3*2*1','120']]
},

'1D — Applications & fonctions numériques': {
 ess:[
  'Une <b>application</b> de A vers B associe à chaque élément de A un <b>unique</b> élément de B. Toute application est une fonction, mais la réciproque est fausse.',
  '<b>Image directe</b> d\'une partie A : ensemble des images de ses éléments. <b>Image réciproque</b> d\'une partie B : ensemble des éléments dont l\'image est dans B.',
  'f est <b>bijective</b> de A vers B si, pour tout y de B, l\'équation f(x) = y a une <b>solution unique</b> dans A. On définit alors la réciproque f⁻¹.',
  'Une fonction est <b>majorée</b> par M si f(x) ≤ M, <b>minorée</b> par m si f(x) ≥ m, <b>bornée</b> si elle est les deux. « f < g sur E » signifie f(x) < g(x) pour tout x de E.'],
 form:[
  'Composée de deux injections : injection. De deux surjections : surjection. De deux bijections : bijection, avec (f∘g)⁻¹ = g⁻¹ ∘ f⁻¹.',
  'f⁻¹ ∘ f = Id_A et f ∘ f⁻¹ = Id_B. La composition est <b>associative</b>.',
  'Dans un repère orthonormé, les courbes de f et f⁻¹ sont symétriques par rapport à la droite <b>y = x</b>.',
  'Restriction : f sur une partie E. Prolongement : fonction qui coïncide avec f sur son ensemble de définition et qui est définie sur un ensemble plus grand.'],
 ex:{q:'Soit f : ℝ → ℝ, f(x) = 2x + 3 et g(x) = x − 1. Montrer que f est bijective, donner f⁻¹ puis (f∘g)⁻¹.',
  st:['On résout f(x) = y : 2x + 3 = y ⟺ x = {y − 3¦2}. Une seule solution pour tout y réel : f est bijective.',
      'Donc f⁻¹(y) = {y − 3¦2}. De même g⁻¹(y) = y + 1.',
      'f∘g(x) = 2(x − 1) + 3 = 2x + 1, donc (f∘g)⁻¹(y) = {y − 1¦2}.',
      'Contrôle : g⁻¹(f⁻¹(y)) = {y − 3¦2} + 1 = {y − 1¦2}. C\'est bien g⁻¹ ∘ f⁻¹.'],
  r:'<b>f⁻¹(y) = (y − 3)/2 ; (f∘g)⁻¹(y) = (y − 1)/2 = g⁻¹ ∘ f⁻¹</b>'},
 pieges:[
  'L\'ordre s\'inverse : (f∘g)⁻¹ = <b>g⁻¹ ∘ f⁻¹</b> et non f⁻¹ ∘ g⁻¹.',
  'Ne confonds pas <b>f⁻¹</b> (réciproque) et 1/f (inverse du nombre).',
  'x ↦ x² n\'est pas bijective de ℝ vers ℝ : f(x) = 4 a deux solutions, et f(x) = −1 n\'en a aucune.'],
 mini:[
  {q:'Quelle est l\'image directe de [0 ; 2] par x ↦ x² ?', r:'<b>[0 ; 4]</b>'},
  {q:'Quelle est la réciproque de x ↦ x − 4 ?', r:'<b>x ↦ x + 4</b>'}],
 chk:[['2*((5-3)/2)+3','5'],['(2*(7-1)+3-1)/2','7'],['(15-3)/2+1','7'],['2*(3-1)+3','2*3+1'],['Math.pow(2,2)','4']]
},

'1D — Limites & continuité': {
 ess:[
  'f est <b>continue en a</b> si elle est définie en a et admet une limite en a ; cette limite vaut alors <b>f(a)</b>.',
  'Les polynômes sont continus sur ℝ, les fonctions rationnelles en tout point de leur ensemble de définition, |x| sur ℝ. Somme, produit et quotient (dénominateur non nul) de fonctions continues sont continus.',
  'Si f n\'est pas définie en a : elle a pour limite l en a si et seulement si ses limites <b>à gauche et à droite</b> existent et valent l.',
  'En ±∞ : la limite d\'un polynôme est celle de son <b>monôme de plus haut degré</b> ; celle d\'une fonction rationnelle est celle du <b>quotient des monômes de plus haut degré</b>.'],
 form:[
  'lim f = l et lim g = l′ ⟹ lim (f × g) = l × l′. Si f ≤ g, alors l ≤ l′.',
  'Gendarmes : f ≤ g ≤ h, avec lim f = lim h = l ⟹ lim g = l.',
  'lim f = ±∞ en a : la droite <b>x = a</b> est asymptote verticale. lim f = b en ±∞ : la droite <b>y = b</b> est asymptote horizontale.'],
 ex:{q:'Calculer la limite de {x² − 1¦x − 1} en 1.',
  st:['En remplaçant x par 1, on obtient {0¦0} : forme indéterminée.',
      'On factorise : x² − 1 = (x − 1)(x + 1).',
      'Pour x ≠ 1 : {(x − 1)(x + 1)¦x − 1} = x + 1.',
      'Quand x tend vers 1, x + 1 tend vers 2.'],
  r:'<b>La limite vaut 2.</b>'},
 pieges:[
  'Une limite peut exister en a même si f n\'est <b>pas définie</b> en a : c\'est le cas ici (la fonction n\'existe pas en 1).',
  'Pour la limite d\'une fonction rationnelle en l\'infini, ne garde que les <b>termes de plus haut degré</b>.',
  'Quand le dénominateur tend vers 0, étudie son <b>signe</b> à gauche et à droite : {x + 1¦x − 1} tend vers −∞ si x tend vers 1 par valeurs inférieures.',
  'Le prolongement par continuité est <b>hors programme</b> en 1ère D.'],
 mini:[
  {q:'Limite de {1¦(x − 1)²} quand x tend vers 1 ?', r:'<b>+∞</b> (le carré est positif). La droite x = 1 est asymptote.'},
  {q:'Limite de {3x² − x + 1¦x² + 5} quand x tend vers +∞ ?', r:'{3x²¦x²} = 3 : la limite est <b>3</b>.'}],
 chk:[['(5**2-1)/(5-1)','5+1'],['(11**2-1)/(11-1)','11+1'],['Math.abs((3*1e8**2-1e8+1)/(1e8**2+5)-3)<1e-6','true'],['1/(1.001-1)**2>1e5','true']]
},

'1D — Dérivation & primitives': {
 ess:[
  'Le <b>nombre dérivé</b> f′(x₀) est la limite en x₀ du <b>taux de variation</b> {f(x) − f(x₀)¦x − x₀}.',
  'Dérivable en un point ⟹ <b>continue</b> en ce point. La réciproque est fausse : |x| est continue en 0 mais non dérivable.',
  'Si f′ ≥ 0 sur un intervalle K, f est croissante ; si f′ s\'annule en changeant de signe, f a un <b>extremum</b>.',
  'Une <b>primitive</b> de f sur K est une fonction F telle que F′ = f. Toute fonction continue sur K en admet ; les autres sont F + C (C constante). Il existe une <b>unique</b> primitive valant y₀ en x₀.'],
 form:[
  '(uv)′ = u′v + uv′    (u/v)′ = {u′v − uv′¦v²}    Tangente en x₀ : y = f′(x₀)(x − x₀) + f(x₀)',
  'Si f(x) = g(x + α), alors f′(a) = g′(a + α).',
  'Primitives : x² → {x³¦3} ; cos x → sin x ; {1¦√x} → 2√x (sur ]0 ; +∞[). Si F et G sont des primitives de f et g, aF + bG en est une de af + bg.'],
 ex:{q:'Soit f(x) = {x² + 1¦x − 1} (définie pour x ≠ 1). Calculer f′(x) puis l\'équation de la tangente au point d\'abscisse 0.',
  st:['u = x² + 1, u′ = 2x ; v = x − 1, v′ = 1.',
      'f′(x) = {2x(x − 1) − (x² + 1)¦(x − 1)²} = {x² − 2x − 1¦(x − 1)²}.',
      'En 0 : f(0) = {1¦−1} = −1 et f′(0) = {−1¦1} = −1.',
      'Tangente : y = −1 × (x − 0) + (−1) = −x − 1.'],
  r:'<b>f′(x) = (x² − 2x − 1)/(x − 1)² ; tangente en 0 : y = −x − 1</b>'},
 pieges:[
  'Dérivée d\'un produit : <b>pas</b> u′ × v′ ! C\'est u′v + uv′.',
  'Dans le quotient, le numérateur est u′v <b>−</b> uv′ (l\'ordre compte).',
  'Une primitive est définie à une <b>constante</b> près : pour une condition (« s\'annule en 0 »), détermine C.',
  'Dérivable implique continue, mais continue n\'implique pas dérivable.'],
 mini:[
  {q:'Quelle est la primitive de 3x² + 2x qui s\'annule en 0 ?', r:'F(x) = x³ + x² + C et F(0) = 0 donne C = 0 : <b>x³ + x²</b>'},
  {q:'Dériver g(x) = {x¦x + 1}.', r:'{1 × (x + 1) − x × 1¦(x + 1)²} = <b>{1¦(x + 1)²}</b>'}],
 chk:[['(2*3*(3-1)-(3**2+1))/(3-1)**2','(3**2-2*3-1)/(3-1)**2'],['(0**2+1)/(0-1)','-1'],['(0**2-2*0-1)/(0-1)**2','-1'],['(1*(2+1)-2*1)/(2+1)**2','1/9'],['0**3+0**2','0']]
},

'1D — Suites numériques': {
 ess:[
  'Une suite est une fonction de ℕ (ou d\'une partie de ℕ) vers ℝ. Elle est <b>croissante</b> si uₙ₊₁ ≥ uₙ, <b>décroissante</b> si uₙ₊₁ ≤ uₙ, <b>majorée</b>, <b>minorée</b>, <b>bornée</b>.',
  '<b>Arithmétique</b> : uₙ₊₁ = uₙ + r, donc uₙ = u_k + (n − k) r. <b>Géométrique</b> : uₙ₊₁ = q uₙ, donc uₙ = u_k qⁿ⁻ᵏ.',
  '<b>Convergente</b> : limite finie. Toute suite <b>croissante et majorée</b>, ou <b>décroissante et minorée</b>, converge.',
  'Si uₙ = f(n) et lim f = l en +∞, alors uₙ converge vers l. Si f n\'a pas de limite, on ne peut rien conclure : il faut étudier la suite séparément.'],
 form:[
  'Somme arithmétique : S = (nombre de termes) × {premier + dernier¦2}.',
  'Somme géométrique (q ≠ 1), p termes à partir de u_k : S = u_k × {1 − qᵖ¦1 − q}.'],
 ex:{q:'Suite arithmétique : u₀ = 5 et r = 3. Calculer u₈ puis S = u₀ + u₁ + … + u₈.',
  st:['u₈ = u₀ + 8r = 5 + 8 × 3 = 29.',
      'Il y a 9 termes (de u₀ à u₈).',
      'S = 9 × {5 + 29¦2} = 9 × 17 = 153.'],
  r:'<b>u₈ = 29 ; S = 153</b>'},
 pieges:[
  'De u₀ à uₙ, il y a <b>n + 1</b> termes, pas n.',
  'Suite géométrique : uₙ = u₀ qⁿ (n est en <b>exposant</b>), pas u₀ × q × n.',
  'Suite bornée = majorée <b>et</b> minorée. Une suite croissante non majorée ne converge pas.',
  'Si f n\'a pas de limite en +∞, ne conclus pas que (uₙ) diverge.'],
 mini:[
  {q:'Suite géométrique u₀ = 2 et q = 3 : calculer u₃ et u₀ + u₁ + u₂ + u₃.', r:'u₃ = 2 × 27 = <b>54</b> ; somme = 2 + 6 + 18 + 54 = <b>80</b>'},
  {q:'Vers quoi converge uₙ = {2n + 1¦n + 1} ?', r:'{2n¦n} = 2 : <b>vers 2</b>.'}],
 chk:[['5+8*3','29'],['9*(5+29)/2','153'],['2*3**3','54'],['2+6+18+54','80'],['2*(1-3**4)/(1-3)','80'],['Math.abs((2*1e9+1)/(1e9+1)-2)<1e-8','true']]
},

'1D — Angles orientés & fonctions circulaires': {
 ess:[
  'Si α est une mesure d\'un angle orienté, toutes ses mesures sont <b>α + 2kπ</b> (k ∈ ℤ). La <b>mesure principale</b> est celle qui est dans ]−π ; π].',
  'Mesures : angle nul → 2kπ ; angle plat → π + 2kπ ; angle droit (vecteurs orthogonaux) → {π¦2} + kπ.',
  '<b>Chasles</b> : (u⃗, w⃗) = (u⃗, v⃗) + (v⃗, w⃗).',
  'cos et sin ont pour période <b>2π</b>, tan a pour période <b>π</b>. cos est <b>paire</b>, sin et tan sont <b>impaires</b>.'],
 form:[
  'cos²a + sin²a = 1    −1 ≤ cos a ≤ 1    −1 ≤ sin a ≤ 1',
  'tan a = {sin a¦cos a} (cos a ≠ 0)    1 + tan²a = {1¦cos²a}',
  'Limites en 0 : {sin x¦x} → 1    {1 − cos x¦x²} → {1¦2}. Pour |x| petit : sin x ≈ x.'],
 ex:{q:'Trouver la mesure principale de {13π¦4}.',
  st:['On retire des multiples de 2π = {8π¦4}. {13π¦4} − 2π = {5π¦4}, trop grand (> π).',
      'On retire encore 2π : {5π¦4} − 2π = −{3π¦4}.',
      'On vérifie : −π < −{3π¦4} ≤ π. C\'est bon.'],
  r:'<b>Mesure principale : −3π/4</b>'},
 pieges:[
  'La mesure principale doit être dans <b>]−π ; π]</b> (et non dans [0 ; 2π[).',
  'Pour deux vecteurs <b>orthogonaux</b>, l\'angle mesure {π¦2} + <b>kπ</b> (et non {π¦2} + 2kπ), car l\'un des vecteurs peut être retourné.',
  'Ne confonds pas période 2π (cos, sin) et période π (tan).'],
 mini:[
  {q:'Mesure principale de {7π¦3} ?', r:'{7π¦3} − 2π = <b>{π¦3}</b>'},
  {q:'sin a = {3¦5} et a ∈ ]0 ; {π¦2}[ : calculer cos a.', r:'cos²a = 1 − {9¦25} = {16¦25}, cos a > 0 : <b>{4¦5}</b>'}],
 chk:[['13/4-2*2','-3/4'],['-3/4>-1&&-3/4<=1','true'],['7/3-2','1/3'],['Math.sqrt(1-0.36)','0.8'],['1-9/25','16/25']]
},

'1D — Formules trigonométriques & équations': {
 ess:[
  'Formules d\'addition : cos(a + b) = cos a cos b − sin a sin b ; cos(a − b) = cos a cos b + sin a sin b ; sin(a + b) = sin a cos b + cos a sin b ; sin(a − b) = sin a cos b − cos a sin b.',
  'Angle double : <b>cos 2a</b> = cos²a − sin²a = 2cos²a − 1 = 1 − 2sin²a ; <b>sin 2a</b> = 2 sin a cos a.',
  'Équations : cos x = cos α ⟺ x = ±α + 2kπ ; sin x = sin α ⟺ x = α + 2kπ ou x = π − α + 2kπ ; tan x = tan α ⟺ x = α + kπ.',
  'Pour a cos x + b sin x = c : on écrit a cos x + b sin x = √(a² + b²) cos(x − φ).',
  'Inéquation : on lit sur le cercle trigonométrique. Exemple : cos x ≥ 0 sur ]−π ; π] ⟺ x ∈ [−{π¦2} ; {π¦2}].'],
 form:[
  'cos x = {1¦2} ⟺ x = ±{π¦3} + 2kπ    sin x = {1¦2} ⟺ x = {π¦6} + 2kπ ou {5π¦6} + 2kπ',
  'tan x = 1 ⟺ x = {π¦4} + kπ    cos x = 0 ⟺ x = {π¦2} + kπ'],
 ex:{q:'Sachant sin a = {3¦5} avec a ∈ ]0 ; {π¦2}[, calculer cos 2a et sin 2a.',
  st:['cos²a = 1 − sin²a = 1 − {9¦25} = {16¦25}. Comme a est dans ]0 ; {π¦2}[, cos a = {4¦5}.',
      'cos 2a = 1 − 2sin²a = 1 − 2 × {9¦25} = {25 − 18¦25} = {7¦25}.',
      'sin 2a = 2 sin a cos a = 2 × {3¦5} × {4¦5} = {24¦25}.',
      'Contrôle : cos²2a + sin²2a = {49 + 576¦625} = 1.'],
  r:'<b>cos 2a = 7/25 ; sin 2a = 24/25</b>'},
 pieges:[
  'cos(a + b) ≠ cos a + cos b. Il faut la formule complète, avec le signe <b>moins</b> devant sin a sin b.',
  'Pour cos x = cos α, il y a <b>deux familles</b> de solutions (±α) ; pour sin x = sin α aussi (α et π − α).',
  'Après avoir trouvé cos a avec la racine carrée, choisis le <b>signe</b> grâce à l\'intervalle de a.'],
 mini:[
  {q:'Résoudre sin x = {1¦2}.', r:'<b>x = {π¦6} + 2kπ ou x = {5π¦6} + 2kπ</b> (k ∈ ℤ)'},
  {q:'cos a = {3¦5} : calculer cos 2a.', r:'2 × {9¦25} − 1 = <b>−{7¦25}</b>'}],
 chk:[['1-9/25','16/25'],['1-2*9/25','7/25'],['2*(3/5)*(4/5)','24/25'],['(7/25)**2+(24/25)**2','1'],['2*(3/5)**2-1','-7/25'],['Math.cos(Math.PI/3+Math.PI/6)<1e-12','true']]
},

'1D — Barycentre & lignes de niveau': {
 ess:[
  'G est le <b>barycentre</b> de (A ; α) et (B ; β), avec α + β ≠ 0, si et seulement si <b>α GA⃗ + β GB⃗ = 0⃗</b>. Si α + β = 0, il n\'existe pas.',
  'Pour tout point M : α MA⃗ + β MB⃗ = <b>(α + β) MG⃗</b>.',
  'L\'<b>isobarycentre</b> a tous les coefficients égaux : milieu d\'un segment, centre de gravité d\'un triangle.',
  '<b>Homogénéité</b> : on peut multiplier tous les coefficients par un même réel non nul. <b>Associativité</b> : on peut remplacer une partie des points par leur barycentre, affecté de la somme de leurs coefficients.'],
 form:[
  'AG⃗ = {β¦α + β} AB⃗    Coordonnées : xG = {α xA + β xB¦α + β}',
  'Ligne de niveau k de M ↦ MA² + MB² : MA² + MB² = 2MI² + {AB²¦2} (I milieu de [AB]) : un <b>cercle</b> de centre I (si k est assez grand).',
  'MA = MB : médiatrice de [AB].'],
 ex:{q:'Soit A(1 ; 2) et B(4 ; 5). Trouver le barycentre G de (A ; 2) et (B ; 1).',
  st:['2 + 1 = 3 ≠ 0 : le barycentre existe.',
      'xG = {2 × 1 + 1 × 4¦3} = {6¦3} = 2.',
      'yG = {2 × 2 + 1 × 5¦3} = {9¦3} = 3.',
      'Contrôle : AG⃗ = (1 ; 1) et {1¦3} AB⃗ = {1¦3} × (3 ; 3) = (1 ; 1).'],
  r:'<b>G(2 ; 3)</b>'},
 pieges:[
  'Si α + β = 0, il n\'y a <b>pas de barycentre</b>. Vérifie toujours la somme des coefficients.',
  'Avec des coefficients positifs, G est plus <b>proche</b> du point qui a le plus grand coefficient.',
  'Dans AG⃗ = {β¦α + β} AB⃗, c\'est le coefficient de <b>B</b> qui est au numérateur.',
  'Avec des coefficients de signes contraires, G est <b>en dehors</b> du segment [AB] : pour (A ; 3) et (B ; −1), AG⃗ = −{1¦2} AB⃗.'],
 mini:[
  {q:'Le barycentre de (A ; 1) et (B ; −1) existe-t-il ?', r:'<b>Non</b>, la somme des coefficients est nulle.'},
  {q:'Sur une droite graduée, A d\'abscisse −1, B d\'abscisse 5. Abscisse du barycentre de (A ; 1) et (B ; 3) ?', r:'{−1 + 15¦4} = <b>3,5</b>'}],
 chk:[['(2*1+1*4)/3','2'],['(2*2+1*5)/3','3'],['(1/3)*3','1'],['(-1+3*5)/4','3.5'],['1+(-1)','0']]
},

'1D — Cercle : équation, représentation paramétrique & tangente': {
 ess:[
  'Cercle de centre Ω(a ; b) et de rayon r : <b>(x − a)² + (y − b)² = r²</b>. Représentation paramétrique : <b>x = a + r cos t ; y = b + r sin t</b> (t ∈ ℝ).',
  'L\'équation x² + y² − 2ax − 2by + c = 0 est celle d\'un cercle si <b>a² + b² − c > 0</b>, de centre (a ; b) et de rayon √(a² + b² − c).',
  'La <b>tangente</b> en un point M₀ du cercle est perpendiculaire au rayon [ΩM₀].'],
 form:[
  'Tangente en M₀(x₀ ; y₀) : (x₀ − a)(x − a) + (y₀ − b)(y − b) = r².',
  'Cercle de diamètre [AB] : centre = milieu de [AB], rayon = {AB¦2}.'],
 ex:{q:'Montrer que x² + y² − 4x + 2y − 4 = 0 est un cercle ; donner centre et rayon, puis la tangente en M₀(2 ; 2).',
  st:['Forme canonique : (x − 2)² − 4 + (y + 1)² − 1 − 4 = 0, donc (x − 2)² + (y + 1)² = 9.',
      'Centre Ω(2 ; −1), rayon r = 3.',
      'M₀ est sur le cercle : (2 − 2)² + (2 + 1)² = 9. Oui.',
      'Tangente : (2 − 2)(x − 2) + (2 + 1)(y + 1) = 9, soit 3(y + 1) = 9, donc y = 2.'],
  r:'<b>Centre (2 ; −1), rayon 3 ; tangente en M₀ : y = 2</b>'},
 pieges:[
  'Le centre se lit avec le signe <b>opposé</b> : (y + 1)² donne b = −1.',
  'Dans l\'équation, le second membre est r² (le <b>carré</b> du rayon), pas r.',
  'Pour la tangente, il faut d\'abord vérifier que M₀ est <b>sur</b> le cercle.'],
 mini:[
  {q:'Tangente au cercle x² + y² = 25 au point (3 ; 4) ?', r:'<b>3x + 4y = 25</b>'},
  {q:'Équation du cercle de diamètre [AB], A(0 ; 0) et B(4 ; 2) ?', r:'Centre (2 ; 1), r² = {AB²¦4} = {20¦4} = 5 : <b>(x − 2)² + (y − 1)² = 5</b>'}],
 chk:[['(2-2)**2+(2+1)**2','9'],['(-2)**2+1**2+4','9'],['3**2+4**2','25'],['3*3+4*4','25'],['(4**2+2**2)/4','5']]
},

'1D — Isométries & composition de transformations': {
 ess:[
  'Une <b>isométrie</b> est une transformation qui <b>conserve les distances</b> : translation, rotation, symétrie orthogonale, symétrie centrale.',
  'Une rotation conserve les distances et les angles orientés. Une translation conserve distances, angles et parallélisme.',
  'Une <b>homothétie</b> de rapport k multiplie les distances par |k| : elle n\'est une isométrie que si |k| = 1. La similitude n\'est pas au programme.',
  'Composée de deux transformations : on applique la première, puis la seconde.',
  'Une isométrie conserve l\'alignement, le parallélisme, l\'orthogonalité, les angles géométriques, le barycentre, les longueurs et les aires. Un <b>déplacement</b> conserve les angles orientés ; un <b>antidéplacement</b> les change en leurs opposés. <b>Seules</b> les composées vues ci-dessous sont au programme.'],
 form:[
  'Rotations de même centre, angles θ et θ′ : rotation de même centre, d\'angle <b>θ + θ′</b>.',
  'Homothéties de même centre O, rapports k et k′ : homothétie de centre O et de rapport <b>k × k′</b>.',
  'Translations de vecteurs u⃗ et v⃗ : translation de vecteur <b>u⃗ + v⃗</b>.',
  'Rotation ∘ translation : rotation de même angle (ou translation si l\'angle est nul). Homothétie de rapport k ≠ 1 ∘ translation : homothétie de rapport k.'],
 ex:{q:'Quelle est la composée de la rotation de centre O d\'angle {π¦3} suivie de la rotation de centre O d\'angle {π¦6} ?',
  st:['Les deux rotations ont le même centre O : on additionne les angles.',
      '{π¦3} + {π¦6} = {2π¦6} + {π¦6} = {3π¦6} = {π¦2}.'],
  r:'<b>Rotation de centre O et d\'angle π/2</b>'},
 pieges:[
  'Une homothétie de rapport 2 <b>n\'est pas</b> une isométrie (elle double les distances).',
  'Pour les homothéties de même centre, on <b>multiplie</b> les rapports ; pour les rotations de même centre, on <b>additionne</b> les angles.',
  'Le rapport peut être négatif : 2 et −3 donnent −6.',
  'Dans ce programme, on ne compose que des rotations de <b>même centre</b> ou des homothéties de <b>même centre</b> ; ne généralise pas la règle à des centres différents.'],
 mini:[
  {q:'Composée de deux homothéties de centre O de rapports 2 et −3 ?', r:'<b>Homothétie de centre O et de rapport −6</b>'},
  {q:'Composée des translations de vecteurs u⃗(1 ; 2) et v⃗(3 ; −1) ?', r:'Translation de vecteur u⃗ + v⃗ = <b>(4 ; 1)</b>'}],
 chk:[['1/3+1/6','1/2'],['2*(-3)','-6'],['1+3','4'],['2+(-1)','1']]
},

'1D — Fonctions associées & transformations de courbes': {
 ess:[
  'g(x) = f(x + a) : courbe de f translatée du vecteur <b>(−a ; 0)</b>. g(x) = f(x) + b : translatée du vecteur <b>(0 ; b)</b>.',
  'g(x) = f(−x) : symétrique de la courbe de f par rapport à l\'<b>axe des ordonnées</b>. g(x) = −f(x) : symétrique par rapport à l\'<b>axe des abscisses</b>.',
  'g(x) = |f(x)| : on garde la partie au-dessus de l\'axe des abscisses et on <b>symétrise</b> la partie située en dessous.',
  'Une parabole y = ax² + bx + c a pour axe de symétrie <b>x = −{b¦2a}</b>. Une fonction homographique x ↦ {ax + b¦cx + d} a pour centre de symétrie (−{d¦c} ; {a¦c}).'],
 form:[
  'f(x) = (x − 2)² + 3 vient de x² par la translation de vecteur (2 ; 3).',
  'x ↦ {1¦x − 1} + 2 vient de x ↦ {1¦x} par la translation de vecteur (1 ; 2).'],
 ex:{q:'Déterminer l\'axe de symétrie et le sommet de la parabole y = x² − 4x + 1, et expliquer comment elle se déduit de y = x².',
  st:['Axe de symétrie : x = −{b¦2a} = {4¦2} = 2.',
      'Forme canonique : x² − 4x + 1 = (x − 2)² − 3.',
      'Sommet S(2 ; −3) : on vérifie f(2) = 4 − 8 + 1 = −3.',
      'La parabole s\'obtient en translatant y = x² du vecteur (2 ; −3).'],
  r:'<b>Axe x = 2, sommet (2 ; −3), translation de vecteur (2 ; −3)</b>'},
 pieges:[
  'f(x + a) décale la courbe vers la <b>gauche</b> si a > 0 : le vecteur est (−a ; 0), de signe opposé.',
  'Pour f(x) + b, le décalage est vertical et de même signe que b.',
  'Ne confonds pas f(−x) (symétrie d\'axe (Oy)) et −f(x) (symétrie d\'axe (Ox)).'],
 mini:[
  {q:'La courbe de g(x) = f(x + 3) se déduit de celle de f par quelle translation ?', r:'Vecteur <b>(−3 ; 0)</b>'},
  {q:'Centre de symétrie de x ↦ {2x + 1¦x − 3} ?', r:'(−{d¦c} ; {a¦c}) avec a = 2, c = 1, d = −3 : <b>(3 ; 2)</b>'}],
 chk:[['4/2','2'],['(2-2)**2-3','2**2-4*2+1'],['-(-3)/1','3'],['2/1','2']]
},

'1D — Prop. & Déf.': { memo:true }
});
