/* ===== Résumés de cours — classe de 2nde D (guide du programme de seconde D) =====
   Même structure que cours_3e.js. Le discriminant est hors programme en 2nde D : les trinômes se traitent
   par zéros évidents, factorisation et forme canonique. Balisage : <b>…</b> ; fraction {numérateur¦dénominateur}. */
window.MQ_COURS = window.MQ_COURS || {};
window.MQ_COURS['2nde D'] = {

'2D — Espace : positions relatives': {
 ess:[
  'Un <b>plan</b> est déterminé par : trois points <b>non alignés</b> ; ou une droite et un point extérieur ; ou deux droites sécantes ; ou deux droites parallèles distinctes. <b>Deux points ne suffisent pas</b> (ils donnent une droite).',
  '<b>Deux droites</b> de l\'espace sont : coplanaires (sécantes ou parallèles) ou <b>non coplanaires</b> (aucun point commun et pas parallèles).',
  '<b>Droite et plan</b> : sécants (un seul point commun) ou parallèles (aucun point commun, ou droite contenue dans le plan).',
  '<b>Deux plans</b> : confondus, parallèles (aucun point commun) ou sécants suivant <b>une droite</b>.'],
 form:[
  'Trois points non alignés ⟹ un plan et un seul.',
  'Deux plans sécants ⟹ leur intersection est une droite.',
  'En perspective cavalière : le parallélisme et les milieux sont conservés ; ce qui est caché se dessine en pointillés.'],
 ex:{q:'Dans le cube ABCDEFGH (ABCD en bas, EFGH en haut, E au-dessus de A, G au-dessus de C), les droites (AB) et (CG) sont-elles coplanaires ?',
  st:['(AB) est horizontale (dans la face du bas) et (CG) est verticale.',
      'Elles ne se coupent pas : (CG) coupe le plan du bas (ABCD) seulement en C, et C n\'est pas sur la droite (AB). Elles ne sont pas parallèles non plus (une horizontale et une verticale).',
      'Aucun plan ne peut contenir les deux.'],
  r:'(AB) et (CG) sont <b>non coplanaires</b>.'},
 pieges:[
  'Dans l\'espace, deux droites qui ne se coupent pas ne sont <b>pas forcément parallèles</b>.',
  'Sur un dessin en perspective, deux traits qui se croisent ne se coupent pas forcément dans la réalité.',
  'Une droite et un plan peuvent être parallèles même si la droite est <b>dans</b> le plan.'],
 mini:[
  {q:'Combien de plans passent par trois points non alignés ?', r:'<b>Un seul.</b>'},
  {q:'Que forme l\'intersection de deux plans sécants ?', r:'<b>Une droite.</b>'}],
 chk:[]
},

'2D — Espace : parallélisme': {
 ess:[
  'Par un point de l\'espace, on peut mener <b>une et une seule</b> parallèle à une droite donnée.',
  'Une droite est parallèle à un plan si elle est parallèle à <b>une droite de ce plan</b>.',
  'Deux plans sont <b>parallèles</b> quand ils sont distincts et n\'ont aucun point commun (ou quand ils sont confondus).'],
 form:[
  'Deux plans parallèles à un même troisième plan sont <b>parallèles entre eux</b>.',
  'Deux plans parallèles coupés par un troisième plan : les deux droites d\'intersection sont <b>parallèles</b>.',
  'Une droite parallèle à deux plans sécants est parallèle à <b>leur droite d\'intersection</b>.',
  'Si deux droites sont parallèles, tout plan qui coupe l\'une coupe aussi l\'autre.'],
 ex:{q:'Dans le cube ABCDEFGH, montrer que la droite (EF) est parallèle au plan (ABCD).',
  st:['ABFE est une face du cube (un carré) : ses côtés opposés [EF] et [AB] sont parallèles, donc (EF) ∥ (AB).',
      '(AB) est une droite du plan (ABCD), et (EF) n\'est pas dans ce plan.',
      'Une droite parallèle à une droite d\'un plan (sans être dans ce plan) est parallèle à ce plan.'],
  r:'(EF) ∥ (ABCD).'},
 pieges:[
  'Il faut une parallèle <b>dans</b> le plan : être parallèle à n\'importe quelle droite de l\'espace ne suffit pas.',
  'Deux droites parallèles à un même plan ne sont pas forcément parallèles entre elles.'],
 mini:[
  {q:'Par un point extérieur à une droite D, combien de droites parallèles à D ?', r:'<b>Une seule.</b>'},
  {q:'Deux plans parallèles sont coupés par un troisième plan. Que dire des droites d\'intersection ?', r:'Elles sont <b>parallèles</b>.'}],
 chk:[]
},

'2D — Logique & raisonnement': {
 ess:[
  'Une <b>proposition</b> est un énoncé qui est soit vrai, soit faux.',
  '<b>P ⟹ Q</b> se lit « si P alors Q ». Sa <b>réciproque</b> est Q ⟹ P. Sa <b>contraposée</b> est (non Q) ⟹ (non P) : elle est <b>équivalente</b> à P ⟹ Q.',
  '<b>P ⟺ Q</b> signifie P ⟹ Q <b>et</b> Q ⟹ P.',
  'Quantificateurs : ∀ (« pour tout ») et ∃ (« il existe »).',
  'Méthodes de preuve : directe, par contraposée, par l\'absurde, par disjonction de cas, et par <b>contre-exemple</b> pour montrer qu\'une affirmation est fausse.'],
 form:[
  'non(P et Q) = (non P) ou (non Q)        non(P ou Q) = (non P) et (non Q)',
  'non(∀x, P(x)) = ∃x, non P(x)        non(∃x, P(x)) = ∀x, non P(x)',
  'Négation de « x > 3 » : <b>x ≤ 3</b>.   Le « ou » mathématique est inclusif.'],
 ex:{q:'Donner la réciproque et la contraposée de « si un quadrilatère est un carré, alors c\'est un losange ». Sont-elles vraies ?',
  st:['Réciproque : « si c\'est un losange, alors c\'est un carré ». Elle est <b>fausse</b> : un losange qui n\'a pas d\'angle droit est un contre-exemple.',
      'Contraposée : « si ce n\'est pas un losange, alors ce n\'est pas un carré ». Elle est <b>vraie</b> (comme l\'énoncé de départ).'],
  r:'Réciproque : fausse ; contraposée : <b>vraie</b>.'},
 pieges:[
  'La <b>réciproque</b> n\'est pas la <b>contraposée</b> : seule la contraposée a toujours la même valeur de vérité que l\'implication.',
  'Un seul <b>contre-exemple</b> suffit pour prouver qu\'une affirmation générale est fausse, mais aucun nombre d\'exemples ne prouve qu\'elle est vraie.',
  'Négation de « tous les élèves ont réussi » : « au moins un élève n\'a pas réussi » (et non « aucun élève n\'a réussi »).'],
 mini:[
  {q:'Donner la négation de « x > 3 ».', r:'<b>x ≤ 3</b>'},
  {q:'Donner la négation de « tous les élèves ont la moyenne ».', r:'« <b>Au moins un élève n\'a pas la moyenne</b> ».'}],
 chk:[]
},

'2D — Calculs dans ℝ': {
 ess:[
  'On compare les réels et on les <b>encadre</b>. Un <b>majorant</b> de A est un réel M tel que M ≥ x pour tout x de A ; un <b>minorant</b> m vérifie m ≤ x.',
  'Le <b>maximum</b> de A est un majorant qui <b>appartient à A</b> ; le <b>minimum</b> est un minorant qui appartient à A.',
  '+∞ et −∞ sont des <b>symboles</b>, pas des nombres réels.',
  'La <b>partie entière</b> E(x) est le plus grand entier relatif inférieur ou égal à x.'],
 form:[
  'a ≤ x ≤ b et c ≤ y ≤ d ⟹ a + c ≤ x + y ≤ b + d',
  'a ≤ x ≤ b et c ≤ y ≤ d ⟹ a − d ≤ x − y ≤ b − c',
  'Si tous les nombres sont positifs : a × c ≤ x × y ≤ b × d',
  'Approximation décimale d\'un réel <b>positif</b>, d\'ordre n : <b>par défaut</b> = on coupe à n décimales ; <b>par excès</b> = on ajoute 10⁻ⁿ à celle par défaut.'],
 ex:{q:'On sait que 2 ≤ a ≤ 3 et 1 ≤ b ≤ 4. Encadrer a + b, a − b et a × b.',
  st:['Somme : 2 + 1 ≤ a + b ≤ 3 + 4, donc 3 ≤ a + b ≤ 7.',
      'Différence : on croise les bornes : 2 − 4 ≤ a − b ≤ 3 − 1, donc −2 ≤ a − b ≤ 2.',
      'Produit (nombres positifs) : 2 × 1 ≤ a × b ≤ 3 × 4, donc 2 ≤ a × b ≤ 12.'],
  r:'<b>3 ≤ a + b ≤ 7</b> ; <b>−2 ≤ a − b ≤ 2</b> ; <b>2 ≤ ab ≤ 12</b>'},
 pieges:[
  'Pour a − b, on ne fait pas « borne − borne » dans le même ordre : on soustrait la plus grande borne de b à la plus petite de a, et inversement.',
  'E(−2,5) = −3 et non −2 : c\'est le plus grand entier qui est ≤ −2,5.',
  'L\'intervalle ]0 ; 1[ n\'a ni minimum ni maximum : les bornes 0 et 1 ne lui appartiennent pas.'],
 mini:[
  {q:'Quelle est la partie entière de 4,99 ? Et de −1,2 ?', r:'E(4,99) = <b>4</b> ; E(−1,2) = <b>−2</b>.'},
  {q:'Donner l\'approximation décimale par défaut d\'ordre 2 de 2,3678.', r:'<b>2,36</b>'}],
 chk:[['2+1','3'],['3+4','7'],['2-4','-2'],['3-1','2'],['2*1','2'],['3*4','12']]
},

'2D — Valeur absolue & distance': {
 ess:[
  '<b>|x| = x</b> si x ≥ 0 et <b>|x| = −x</b> si x < 0. C\'est aussi le plus grand des deux nombres x et −x, et on a |x| = √(x²).',
  'La <b>distance</b> de deux réels est d(x , a) = <b>|x − a|</b>.',
  'Une inéquation avec une valeur absolue se lit comme une <b>distance</b> sur la droite graduée.'],
 form:[
  '|a × b| = |a| × |b|        |{a¦b}| = {|a|¦|b|}  (b ≠ 0)        |a + b| ≤ |a| + |b|  (inégalité triangulaire)',
  '|x| = 0 ⟺ x = 0        |a| = |b| ⟺ a = b ou a = −b',
  '|x − a| ≤ r ⟺ x ∈ [a − r ; a + r]        |x − a| < r ⟺ x ∈ ]a − r ; a + r[',
  '|x − a| ≥ r ⟺ x ≤ a − r ou x ≥ a + r        (pour r > 0)'],
 ex:{q:'Résoudre |2x + 1| = 3.',
  st:['|A| = 3 veut dire A = 3 ou A = −3, avec A = 2x + 1.',
      '2x + 1 = 3 donne x = 1.    2x + 1 = −3 donne 2x = −4, donc x = −2.',
      'Vérification : |2 × 1 + 1| = 3 ✔ et |2 × (−2) + 1| = |−3| = 3 ✔.'],
  r:'S = <b>{−2 ; 1}</b>'},
 pieges:[
  '|3 − π| = <b>π − 3</b> : comme 3 − π est négatif, on prend son opposé.',
  '|x| ≥ a (avec a > 0) donne « x ≤ −a <b>ou</b> x ≥ a », pas « et ».',
  'Une valeur absolue n\'est jamais négative : |x| = −2 n\'a aucune solution.'],
 mini:[
  {q:'Écrire |3 − π| sans valeur absolue.', r:'π ≈ 3,14 > 3, donc 3 − π < 0 et |3 − π| = <b>π − 3</b>.'},
  {q:'Résoudre |x − 2| ≤ 3.', r:'−3 ≤ x − 2 ≤ 3, donc <b>x ∈ [−1 ; 5]</b>.'}],
 chk:[['Math.abs(2*1+1)','3'],['Math.abs(2*(-2)+1)','3'],['Math.abs(3-Math.PI)','Math.PI-3'],['Math.abs(-1-2)<=3&&Math.abs(5-2)<=3&&Math.abs(6-2)>3','true']]
},

'2D — Généralités sur les fonctions': {
 ess:[
  'Une <b>fonction numérique</b> f définie sur D associe à chaque x de D <b>un unique réel</b> f(x), l\'<b>image</b> de x. Si f(x) = y, on dit que x est un <b>antécédent</b> de y.',
  'Pour trouver l\'<b>ensemble de définition</b>, on cherche les valeurs interdites : un dénominateur ne peut pas être nul, et ce qui est sous une racine doit être ≥ 0.',
  '<b>Variations</b> sur un intervalle I : f est <b>croissante</b> si a < b ⟹ f(a) ≤ f(b) ; <b>décroissante</b> si a < b ⟹ f(a) ≥ f(b) ; <b>constante</b> si f(a) = f(b) pour tous a et b.',
  '<b>Maximum</b> M atteint en a : f(x) ≤ f(a) = M pour tout x de I.',
  'Graphiquement, l\'image de a est l\'<b>ordonnée</b> du point de la courbe d\'abscisse a.'],
 form:[
  'Df de {1¦g(x)} : g(x) ≠ 0        Df de √(g(x)) : g(x) ≥ 0',
  'f et g <b>coïncident</b> sur I si elles sont définies sur I et f(x) = g(x) pour tout x de I.'],
 ex:{q:'Trouver l\'ensemble de définition de f(x) = {√(x − 2)¦x − 3}.',
  st:['La racine exige x − 2 ≥ 0, donc x ≥ 2.',
      'Le dénominateur exige x − 3 ≠ 0, donc x ≠ 3.',
      'On garde les x ≥ 2 en retirant 3.'],
  r:'Df = <b>[2 ; 3[ ∪ ]3 ; +∞[</b>'},
 pieges:[
  'On n\'écrit pas f(x) avant d\'avoir vérifié que x est dans l\'ensemble de définition.',
  'Un réel peut avoir plusieurs antécédents (par x ↦ x², 4 a pour antécédents −2 et 2), mais une seule image.',
  'Croissante ne veut pas dire « positive » : elle peut monter en restant négative.'],
 mini:[
  {q:'Quels sont les antécédents de 4 par f(x) = x² ?', r:'x² = 4 donc <b>x = −2 ou x = 2</b>.'},
  {q:'Ensemble de définition de f(x) = {1¦x − 5} ?', r:'x ≠ 5, soit <b>ℝ ∖ {5}</b>.'}],
 chk:[['Math.sqrt(4-2)/(4-3)>0','true'],['(-2)**2','4'],['2**2','4']]
},

'2D — Applications': {
 ess:[
  'Une <b>application</b> f de E vers F associe à <b>chaque</b> élément de E <b>un unique</b> élément de F.',
  '<b>Injective</b> : deux éléments différents ont des images différentes. Autrement dit f(a) = f(b) ⟹ a = b.',
  '<b>Surjective</b> : tout élément de F a <b>au moins un</b> antécédent dans E.',
  '<b>Bijective</b> = injective <b>et</b> surjective : tout élément de F a <b>un seul</b> antécédent. On peut alors définir la <b>bijection réciproque</b> f⁻¹ : à chaque y de F elle associe son unique antécédent.'],
 form:[
  'Pour montrer l\'injectivité : on suppose f(a) = f(b) et on démontre que a = b.',
  'Pour montrer la surjectivité : on se donne y dans F et on résout f(x) = y d\'inconnue x.',
  'Contraposée de l\'injectivité : a ≠ b ⟹ f(a) ≠ f(b).'],
 ex:{q:'Montrer que f : ℝ → ℝ, f(x) = 2x + 1 est bijective et trouver f⁻¹.',
  st:['On se donne y ∈ ℝ et on résout f(x) = y : 2x + 1 = y.',
      'Cela donne x = {y − 1¦2}. Cette équation a <b>une solution et une seule</b> pour chaque y : f est donc bijective (injective et surjective).',
      'La bijection réciproque associe à y son antécédent : f⁻¹(y) = {y − 1¦2}.'],
  r:'f⁻¹(x) = <b>{x − 1¦2}</b>'},
 pieges:[
  'Le résultat dépend des ensembles de départ <b>et</b> d\'arrivée : x ↦ x² est bijective de [0 ; +∞[ vers [0 ; +∞[, mais ni injective ni surjective de ℝ vers ℝ.',
  'Pour prouver qu\'une application n\'est pas injective, un seul <b>contre-exemple</b> suffit : f(−1) = f(1) = 1 avec −1 ≠ 1.',
  'x ↦ x² de ℝ vers ℝ n\'est pas surjective : −1 n\'a pas d\'antécédent.'],
 mini:[
  {q:'f(x) = x² de ℝ vers ℝ est-elle injective ?', r:'<b>Non</b> : f(−1) = f(1) = 1 alors que −1 ≠ 1.'},
  {q:'Quelle est la bijection réciproque de f(x) = 2x + 1 ?', r:'<b>f⁻¹(x) = {x − 1¦2}</b>'}],
 chk:[['2*((3-1)/2)+1','3'],['(-1)**2','1'],['1**2','1']]
},

'2D — Fonctions de référence': {
 ess:[
  '<b>x ↦ x²</b> : courbe en parabole, symétrique par rapport à l\'<b>axe des ordonnées</b> ; décroissante sur ]−∞ ; 0], croissante sur [0 ; +∞[ ; minimum 0.',
  '<b>x ↦ x³</b> : croissante sur ℝ ; courbe symétrique par rapport à l\'origine.',
  '<b>x ↦ {1¦x}</b> : définie sur ℝ ∖ {0} ; décroissante sur ]−∞ ; 0[ et sur ]0 ; +∞[ (séparément).',
  '<b>x ↦ √x</b> : définie sur [0 ; +∞[ ; croissante.',
  '<b>x ↦ |x|</b> : décroissante sur ]−∞ ; 0], croissante sur [0 ; +∞[.',
  '<b>Partie entière</b> : en escalier, constante sur chaque intervalle [n ; n + 1[ (n entier).'],
 form:[
  'Si 0 < a < 1 : <b>a³ < a² < a < √a < {1¦a}</b>',
  'Si a > 1 : {1¦a} < √a < a < a² < a³',
  'Si a = 1 : a³ = a² = a = √a = {1¦a} = 1'],
 ex:{q:'Comparer a, a², a³, √a et {1¦a} pour a = 0,25.',
  st:['a² = 0,0625 ; a³ = 0,015625 ; √a = 0,5 ; {1¦a} = 4.',
      'On range : 0,015625 < 0,0625 < 0,25 < 0,5 < 4.'],
  r:'a³ < a² < a < √a < {1¦a}  (car 0 < 0,25 < 1)'},
 pieges:[
  'x² n\'est <b>pas</b> croissante sur ℝ : elle décroît d\'abord, puis croît.',
  'On ne dit pas que {1¦x} est décroissante sur ℝ ∖ {0} en entier : f(−1) = −1 < f(1) = 1. On le dit sur chaque intervalle séparément.',
  'La règle de rangement dépend de la position de a par rapport à 1.'],
 mini:[
  {q:'Sur quel intervalle x² est-elle décroissante ?', r:'<b>]−∞ ; 0]</b>'},
  {q:'Quel est l\'ensemble de définition de √x ?', r:'<b>[0 ; +∞[</b>'}],
 chk:[['0.25**2','0.0625'],['0.25**3','0.015625'],['Math.sqrt(0.25)','0.5'],['1/0.25','4']]
},

'2D — Équations & inéquations dans ℝ': {
 ess:[
  'Deux équations (ou inéquations) sont <b>équivalentes</b> si elles ont le même ensemble de solutions. On résout en passant d\'une ligne à une ligne équivalente.',
  '<b>Équation produit</b> : A × B = 0 ⟺ A = 0 ou B = 0. <b>Équation x² = a</b> : deux solutions ±√a si a > 0 ; une seule (0) si a = 0 ; aucune si a < 0.',
  '<b>Inéquation du 1er degré</b> : même méthode que pour une équation, mais si on multiplie ou divise par un nombre <b>négatif</b>, on <b>change le sens</b>.',
  'Pour un <b>produit</b> ou un <b>quotient</b> d\'expressions, on dresse un <b>tableau de signes</b>.'],
 form:[
  'x² − a² = (x − a)(x + a)',
  'Valeurs interdites d\'un quotient : celles qui annulent le dénominateur (elles ne sont jamais solutions).',
  'Pour a > 0 : |x| ≥ a ⟺ x ≤ −a ou x ≥ a.'],
 ex:{q:'Résoudre dans ℝ : {x − 1¦x + 2} ≥ 0.',
  st:['Valeur interdite : x + 2 = 0, soit x = −2. Le numérateur s\'annule en x = 1.',
      'Tableau de signes : pour x < −2, le numérateur et le dénominateur sont négatifs, le quotient est positif. Entre −2 et 1, le numérateur est négatif et le dénominateur positif : le quotient est négatif. Pour x > 1, tout est positif.',
      'On garde le « + » et le « 0 » : x = 1 est solution, mais −2 est interdit.'],
  r:'S = <b>]−∞ ; −2[ ∪ [1 ; +∞[</b>'},
 pieges:[
  'Multiplier par un négatif <b>retourne</b> l\'inégalité : −2x > 6 donne x < −3.',
  'Ne multiplie pas « en croix » une inéquation avec des x au dénominateur sans connaître le signe du dénominateur : passe par un tableau de signes.',
  'x² = 9 a <b>deux</b> solutions, 3 et −3.'],
 mini:[
  {q:'Résoudre x² − 9 = 0.', r:'(x − 3)(x + 3) = 0, donc <b>S = {−3 ; 3}</b>.'},
  {q:'Résoudre 3x − 6 < 0.', r:'3x < 6, donc <b>x < 2</b>.'}],
 chk:[['(-3-1)/(-3+2)>=0','true'],['(0-1)/(0+2)>=0','false'],['(2-1)/(2+2)>=0','true'],['(1-1)/(1+2)>=0','true'],['9-9','0']]
},

'2D — Statistiques': {
 ess:[
  'Pour une série ordonnée d\'effectif total N : la <b>médiane</b> partage la série en deux groupes de même effectif. Si N est impair, c\'est la valeur de rang {N + 1¦2} ; si N est pair, on prend la moyenne des deux valeurs centrales.',
  'Les <b>quartiles</b> Q₁ et Q₃ délimitent les 25 % et 75 % de la série. L\'<b>effectif cumulé croissant</b> d\'une valeur est le nombre de données inférieures ou égales à cette valeur ; la <b>fréquence cumulée</b> de la dernière valeur vaut 1.',
  'Mesures de <b>dispersion</b> : l\'<b>étendue</b>, l\'<b>écart moyen absolu</b>, la <b>variance</b> et l\'<b>écart-type</b>.',
  'Caractère discret : diagramme en bâtons. Caractère continu (classes) : <b>histogramme</b>.'],
 form:[
  'moyenne : x̄ = {Σ nᵢ xᵢ¦N}',
  'variance : V = {Σ nᵢ (xᵢ − x̄)²¦N} = (moyenne des xᵢ²) − x̄²        écart-type : σ = √V',
  'écart moyen absolu : {Σ nᵢ |xᵢ − x̄|¦N}        étendue = plus grande valeur − plus petite valeur'],
 ex:{q:'Série : 2 (effectif 1), 4 (effectif 2), 6 (effectif 1). Calculer la moyenne, la médiane, la variance, l\'écart-type et l\'écart moyen absolu.',
  st:['N = 1 + 2 + 1 = 4. Moyenne : x̄ = {2 + 4 + 4 + 6¦4} = 4.',
      'Série ordonnée : 2 ; 4 ; 4 ; 6. N est pair : médiane = {4 + 4¦2} = 4.',
      'Variance : V = {(2 − 4)² + 2 × (4 − 4)² + (6 − 4)²¦4} = {4 + 0 + 4¦4} = 2, donc σ = √2.',
      'Écart moyen absolu : {2 + 0 + 0 + 2¦4} = 1.'],
  r:'x̄ = <b>4</b> ; médiane = <b>4</b> ; V = <b>2</b> ; σ = <b>√2 ≈ 1,41</b> ; écart moyen absolu = <b>1</b>'},
 pieges:[
  'Il faut <b>ordonner</b> la série avant de chercher la médiane.',
  'L\'écart-type est la <b>racine carrée</b> de la variance (pas la variance elle-même).',
  'Dans les formules, chaque valeur compte autant de fois que son <b>effectif</b>.'],
 mini:[
  {q:'N = 19 données ordonnées. À quel rang se trouve la médiane ?', r:'{19 + 1¦2} = <b>10</b>e valeur.'},
  {q:'La variance d\'une série vaut 9. Quel est son écart-type ?', r:'<b>3</b>'}],
 chk:[['(2+4+4+6)/4','4'],['((2-4)**2+2*(4-4)**2+(6-4)**2)/4','2'],['(2+0+0+2)/4','1'],['(19+1)/2','10'],['Math.sqrt(9)','3']]
},

'2D — Polynômes & fractions rationnelles': {
 ess:[
  'Un <b>zéro</b> (ou <b>racine</b>) d\'un polynôme P est un réel a tel que <b>P(a) = 0</b>.',
  'Si a est un zéro de P (de degré n ≥ 1), alors <b>P(x) = (x − a) Q(x)</b>, avec Q de degré n − 1. Pour trouver Q : <b>division euclidienne</b> ou <b>identification des coefficients</b>.',
  'Un trinôme du second degré se met sous <b>forme canonique</b> : ax² + bx + c = a[(x + {b¦2a})² − {b²¦4a²} + {c¦a}]. On peut alors le factoriser (quand c\'est possible) avec a² − b² = (a − b)(a + b). <b>Le discriminant est hors programme.</b>',
  'Une <b>fraction rationnelle</b> est un quotient de deux polynômes ; elle n\'est pas définie quand le dénominateur est nul.'],
 form:[
  'Binôme ax + b (a ≠ 0) : du signe de <b>a</b> à droite de −{b¦a}, du signe contraire à gauche.',
  'Pour x ≠ 1 : {x² − 1¦x − 1} = x + 1 (on factorise puis on simplifie).',
  'Signe d\'un produit ou d\'un quotient : tableau de signes.'],
 ex:{q:'Factoriser P(x) = x³ − 7x + 6.',
  st:['On cherche un zéro « évident » : P(1) = 1 − 7 + 6 = 0. Donc P(x) = (x − 1) Q(x).',
      'Q est de degré 2 : on trouve Q(x) = x² + x − 6 (division, ou identification). Vérification : (x − 1)(x² + x − 6) = x³ + x² − 6x − x² − x + 6 = x³ − 7x + 6 ✔.',
      'x² + x − 6 se factorise en (x − 2)(x + 3) : on cherche deux nombres de produit −6 et de somme 1, ce sont 3 et −2.'],
  r:'P(x) = <b>(x − 1)(x − 2)(x + 3)</b> ; les zéros de P sont <b>1, 2 et −3</b>.'},
 pieges:[
  'Si P(a) ≠ 0, alors (x − a) <b>ne divise pas</b> P : teste toujours P(a) avant de diviser.',
  'Ensemble de définition de {x + 1¦x² − 1} : on retire <b>−1 et 1</b> (x² − 1 = (x − 1)(x + 1)).',
  'On ne peut simplifier une fraction qu\'après avoir factorisé (et pour les x qui ne sont pas des valeurs interdites).'],
 mini:[
  {q:'Quels sont les zéros de P(x) = x² − 5x + 6 ?', r:'P(x) = (x − 2)(x − 3) : les zéros sont <b>2 et 3</b>.'},
  {q:'Factoriser x² − 4x + 4.', r:'<b>(x − 2)²</b>'}],
 chk:[['1-7+6','0'],['2**3-7*2+6','0'],['(-3)**3-7*(-3)+6','0'],['(1-1)*(1-2)*(1+3)','0'],['2**2-5*2+6','0'],['3**2-5*3+6','0']]
},

'2D — Vecteurs du plan': {
 ess:[
  'Un vecteur est caractérisé par sa direction, son sens et sa longueur. Étant donnés un point O et un vecteur u⃗, il existe <b>un unique point M</b> tel que OM⃗ = u⃗.',
  'Une <b>combinaison linéaire</b> de u⃗ et v⃗ est un vecteur αu⃗ + βv⃗ (α, β réels).',
  'Deux vecteurs <b>non colinéaires</b> forment une <b>base</b> : tout vecteur s\'écrit de façon unique αu⃗ + βv⃗, ce qui donne ses coordonnées (α ; β).',
  'Le <b>centre de gravité</b> G d\'un triangle ABC vérifie GA⃗ + GB⃗ + GC⃗ = 0⃗.'],
 form:[
  'u⃗(x ; y) + v⃗(x\' ; y\') = (x + x\' ; y + y\')        k u⃗ = (kx ; ky)        AB⃗ = (xB − xA ; yB − yA)',
  '<b>Déterminant</b> : det(u⃗, v⃗) = x y\' − x\' y.   u⃗ et v⃗ colinéaires ⟺ det(u⃗, v⃗) = 0.',
  'G : ({xA + xB + xC¦3} ; {yA + yB + yC¦3})',
  'M ∈ [AB) ⟺ AM⃗ = t AB⃗ avec t ≥ 0        M ∈ [AB] ⟺ AM⃗ = t AB⃗ avec 0 ≤ t ≤ 1'],
 ex:{q:'u⃗(2 ; −3) et v⃗(−4 ; 6) sont-ils colinéaires ? Et quel est le centre de gravité de A(0 ; 0), B(3 ; 0), C(0 ; 6) ?',
  st:['det(u⃗, v⃗) = 2 × 6 − (−4) × (−3) = 12 − 12 = 0 : <b>colinéaires</b> (en fait v⃗ = −2u⃗).',
      'G = ({0 + 3 + 0¦3} ; {0 + 0 + 6¦3}) = (1 ; 2).'],
  r:'colinéaires ; G = <b>(1 ; 2)</b>'},
 pieges:[
  'Coordonnées de AB⃗ : <b>arrivée − départ</b>.',
  'Colinéaires ne veut pas dire égaux (ni de même sens : v⃗ = −2u⃗ est de sens contraire).',
  'Dans αu⃗ + βv⃗ = 0⃗ avec u⃗, v⃗ non colinéaires, on conclut α = β = 0.'],
 mini:[
  {q:'AB⃗(3 ; −1) et AC⃗(1 ; 4) : coordonnées de AB⃗ + AC⃗ ?', r:'<b>(4 ; 3)</b>'},
  {q:'Calculer le déterminant de u⃗(1 ; 2) et v⃗(3 ; 5).', r:'1 × 5 − 3 × 2 = <b>−1</b> (donc non colinéaires).'}],
 chk:[['2*6-(-4)*(-3)','0'],['(0+3+0)/3','1'],['(0+0+6)/3','2'],['3+1','4'],['-1+4','3'],['1*5-3*2','-1']]
},

'2D — Droites du plan': {
 ess:[
  'Une droite est déterminée par un point A et un <b>vecteur directeur</b> u⃗(a ; b). Ses points M(x ; y) vérifient AM⃗ = t u⃗ : c\'est la <b>représentation paramétrique</b>.',
  'Une droite a aussi une <b>équation cartésienne</b> ax + by + c = 0 (avec (a ; b) ≠ (0 ; 0)). Un vecteur directeur est alors <b>u⃗(−b ; a)</b> et un <b>vecteur normal</b> (perpendiculaire à la droite) est <b>n⃗(a ; b)</b>.',
  'Pour trouver l\'<b>intersection</b> de deux droites, on résout le système formé par leurs équations.'],
 form:[
  'Représentation paramétrique : x = x₀ + a t  et  y = y₀ + b t  (t ∈ ℝ)',
  'Droite passant par A(x₀ ; y₀) de vecteur normal n⃗(a ; b) : a(x − x₀) + b(y − y₀) = 0',
  'Distance de M₀(x₀ ; y₀) à la droite ax + by + c = 0 (repère orthonormé) : d = {|a x₀ + b y₀ + c|¦√(a² + b²)}'],
 ex:{q:'Donner l\'équation de la droite passant par A(1 ; 2) de vecteur normal n⃗(3 ; 4), puis la distance du point M(1 ; 1) à la droite x + y − 4 = 0.',
  st:['3(x − 1) + 4(y − 2) = 0, soit 3x − 3 + 4y − 8 = 0, donc 3x + 4y − 11 = 0. Vérification : 3 × 1 + 4 × 2 − 11 = 0 ✔.',
      'd = {|1 + 1 − 4|¦√(1² + 1²)} = {2¦√2} = √2.'],
  r:'<b>3x + 4y − 11 = 0</b> ; d = <b>√2</b>'},
 pieges:[
  'Vecteur directeur (−b ; a) et vecteur normal (a ; b) : ne les confonds pas.',
  'La formule de la distance suppose un repère <b>orthonormé</b>.',
  'Le point de paramètre t = 2 sur x = 1 + 2t, y = −3 + t est (5 ; −1) : remplace t partout.'],
 mini:[
  {q:'Pour x = 1 + 2t et y = −3 + t, quel est le point de paramètre t = 2 ?', r:'x = 1 + 4 = 5 et y = −3 + 2 = −1 : <b>(5 ; −1)</b>.'},
  {q:'Intersection de 2x − y = 1 et x + y = 5 ?', r:'On additionne : 3x = 6, x = 2, puis y = 3 : <b>(2 ; 3)</b>.'}],
 chk:[['3*1+4*2-11','0'],['Math.abs(1+1-4)/Math.sqrt(2)','Math.sqrt(2)'],['1+2*2','5'],['-3+2','-1'],['2*2-3','1'],['2+3','5']]
},

'2D — Homothétie & transformations': {
 ess:[
  'L\'<b>homothétie</b> h(O , k) de centre O et de rapport k (k ≠ 0) associe à M le point M\' tel que <b>OM\'⃗ = k OM⃗</b>.',
  'Les points O, M et M\' sont <b>alignés</b>. Pour k = −1, c\'est la <b>symétrie centrale</b> de centre O. Le seul point qui ne bouge pas est O (si k ≠ 1).',
  'L\'image d\'une droite est une droite <b>parallèle</b>. Les angles, le parallélisme et les milieux sont conservés.'],
 form:[
  'M\'N\'⃗ = k MN⃗   donc   M\'N\' = |k| × MN',
  'Longueurs × |k|, aires × k², volumes × |k|³',
  'Composée de deux symétries centrales de centres distincts : une <b>translation</b>.',
  'Composée de deux symétries orthogonales d\'axes perpendiculaires : la <b>symétrie centrale</b> de centre leur point d\'intersection.'],
 ex:{q:'h est l\'homothétie de centre O(0 ; 0) et de rapport 3. Trouver les images de A(1 ; 2) et B(2 ; −1), puis comparer A\'B\' et AB.',
  st:['OA\'⃗ = 3 OA⃗ donne A\'(3 ; 6). OB\'⃗ = 3 OB⃗ donne B\'(6 ; −3).',
      'AB⃗ = (2 − 1 ; −1 − 2) = (1 ; −3). A\'B\'⃗ = (6 − 3 ; −3 − 6) = (3 ; −9) = 3 AB⃗ ✔.',
      'AB = √(1 + 9) = √10 et A\'B\' = 3√10.'],
  r:'A\'(3 ; 6), B\'(6 ; −3) ; A\'B\' = <b>3 × AB</b>'},
 pieges:[
  'Un rapport <b>négatif</b> change le sens : M\' est de l\'autre côté de O.',
  'Les aires sont multipliées par <b>k²</b> et non par k.',
  'L\'homothétie n\'est pas un « déplacement » : elle agrandit ou réduit (sauf k = 1 ou k = −1).'],
 mini:[
  {q:'Quelle est l\'homothétie de rapport −1 ?', r:'La <b>symétrie centrale</b> de même centre.'},
  {q:'Une homothétie de rapport 2 : par combien l\'aire d\'une figure est-elle multipliée ?', r:'2² = <b>4</b>.'}],
 chk:[['3*1','3'],['3*2','6'],['3*2','6'],['3*(-1)','-3'],['6-3','3'],['-3-6','-9'],['Math.sqrt(10)*3','Math.sqrt(90)']]
},

'2D — Angles, radian & trigonométrie': {
 ess:[
  '<b>π radians = 180°</b>. Pour convertir : degrés = radians × {180¦π} ; radians = degrés × {π¦180}.',
  'Orienter le plan, c\'est choisir un sens de rotation positif : le sens <b>direct</b> (contraire des aiguilles d\'une montre).',
  'Sur le cercle trigonométrique, un angle α repère un point M(cos α ; sin α).',
  'Dans un triangle ABC, on note a = BC, b = CA, c = AB.'],
 form:[
  'cos²α + sin²α = 1        tan α = {sin α¦cos α}',
  'cos(π − α) = −cos α   sin(π − α) = sin α   cos(−α) = cos α   sin(−α) = −sin α   cos({π¦2} − α) = sin α',
  'Valeurs : sin {π¦6} = {1¦2}   cos {π¦6} = {√3¦2}   sin {π¦4} = cos {π¦4} = {√2¦2}   cos {π¦3} = {1¦2}   sin {π¦3} = {√3¦2}',
  'Aire : S = {1¦2} b c sin Â        Loi des sinus : {a¦sin Â} = {b¦sin B̂} = {c¦sin Ĉ} = 2R',
  'Al-Kashi : a² = b² + c² − 2bc cos Â'],
 ex:{q:'Convertir 3π/4 rad en degrés. Calculer sin(5π/6). Dans un triangle ABC, a = 6 et Â = 30° : quel est le rayon R du cercle circonscrit ?',
  st:['{3π¦4} × {180¦π} = {3 × 180¦4} = 135°.',
      '5π/6 = π − π/6, donc sin(5π/6) = sin(π/6) = {1¦2}.',
      'Loi des sinus : {a¦sin Â} = 2R, donc R = {6¦2 × sin 30°} = {6¦2 × 0,5} = 6.'],
  r:'<b>135°</b> ; sin(5π/6) = <b>{1¦2}</b> ; R = <b>6</b>'},
 pieges:[
  'La calculatrice doit être en bon mode : <b>radians</b> ou <b>degrés</b> selon l\'énoncé.',
  'cos(π − α) = <b>−</b>cos α (le cosinus change de signe), mais sin(π − α) = sin α.',
  'Dans la loi des sinus, c\'est <b>2R</b> (le diamètre) qui apparaît, pas R.'],
 mini:[
  {q:'π/3 rad vaut combien de degrés ?', r:'{180°¦3} = <b>60°</b>'},
  {q:'Aire d\'un triangle avec b = 4, c = 5 et Â = 30° ?', r:'S = {1¦2} × 4 × 5 × sin 30° = {1¦2} × 20 × {1¦2} = <b>5</b>.'}],
 chk:[['3*180/4','135'],['Math.sin(5*Math.PI/6)','0.5'],['6/(2*0.5)','6'],['180/3','60'],['0.5*4*5*0.5','5']]
},

'2D — Produit scalaire': {
 ess:[
  'Le <b>produit scalaire</b> de deux vecteurs est un <b>nombre</b> (pas un vecteur). Il mesure à quel point deux vecteurs vont « dans le même sens ».',
  'Si l\'angle entre u⃗ et v⃗ est aigu, u⃗·v⃗ > 0 ; s\'il est droit, u⃗·v⃗ = 0 ; s\'il est obtus, u⃗·v⃗ < 0.',
  'u⃗·u⃗ = ‖u⃗‖² (le carré de la norme). Le vecteur nul est orthogonal à tout vecteur.'],
 form:[
  'u⃗·v⃗ = ‖u⃗‖ × ‖v⃗‖ × cos θ  (θ = angle entre u⃗ et v⃗)',
  'Repère orthonormé : u⃗(x ; y), v⃗(x\' ; y\') : <b>u⃗·v⃗ = x x\' + y y\'</b> et ‖u⃗‖ = √(x² + y²)',
  'u⃗ ⟂ v⃗ ⟺ u⃗·v⃗ = 0        u⃗·v⃗ = v⃗·u⃗        u⃗² − v⃗² = (u⃗ − v⃗)·(u⃗ + v⃗)',
  'Al-Kashi : BC² = AB² + AC² − 2 AB × AC × cos Â',
  'Médiane (I milieu de [BC]) : AB² + AC² = 2 AI² + {BC²¦2}'],
 ex:{q:'Calculer l\'angle entre u⃗(1 ; 1) et v⃗(1 ; 0). Puis dire si u⃗(2 ; 3) et w⃗(3 ; −2) sont orthogonaux.',
  st:['u⃗·v⃗ = 1 × 1 + 1 × 0 = 1. ‖u⃗‖ = √2 et ‖v⃗‖ = 1.',
      'cos θ = {1¦√2 × 1} = {√2¦2}, donc θ = 45°.',
      'u⃗·w⃗ = 2 × 3 + 3 × (−2) = 6 − 6 = 0 : ils sont <b>orthogonaux</b>.'],
  r:'θ = <b>45°</b> ; u⃗ ⟂ w⃗'},
 pieges:[
  'Le produit scalaire est un <b>nombre réel</b>, pas un vecteur.',
  'u⃗·v⃗ = x x\' + y y\' (on multiplie les abscisses entre elles et les ordonnées entre elles), à ne pas confondre avec le déterminant x y\' − x\' y.',
  'La formule avec les coordonnées exige un repère <b>orthonormé</b>.'],
 mini:[
  {q:'Calculer la norme de u⃗(3 ; 4).', r:'√(9 + 16) = <b>5</b>'},
  {q:'Si l\'angle BAC est droit, que vaut AB⃗·AC⃗ ?', r:'<b>0</b>'}],
 chk:[['1*1+1*0','1'],['Math.acos(1/Math.sqrt(2))*180/Math.PI','45'],['2*3+3*(-2)','0'],['Math.sqrt(9+16)','5']]
},

'2D — Rotation & cercles': {
 ess:[
  'La <b>rotation</b> r(O , θ) fait tourner chaque point autour de O d\'un angle orienté θ. Si θ ≠ 0, le seul point invariant est <b>O</b>. La rotation d\'angle π est la <b>symétrie centrale</b>.',
  'Une rotation <b>conserve</b> les distances, les aires et les angles orientés : A\'B\' = AB.',
  'Un <b>cercle</b> de centre I(a ; b) et de rayon R a pour équation (repère orthonormé) <b>(x − a)² + (y − b)² = R²</b>.',
  'Le cercle de <b>diamètre [AB]</b> est l\'ensemble des points M tels que MA⃗·MB⃗ = 0.'],
 form:[
  'x² + y² − 2ax − 2by + c = 0 ⟺ (x − a)² + (y − b)² = a² + b² − c',
  'Si a² + b² − c > 0 : cercle de centre (a ; b) ; si = 0 : un point ; si < 0 : <b>ensemble vide</b>.',
  'Droite (D) et cercle (C) de rayon R, d = distance du centre à (D) : d < R : deux points communs ; d = R : un seul (tangente) ; d > R : aucun.'],
 ex:{q:'Donner l\'équation du cercle de diamètre [AB] avec A(1 ; 2) et B(5 ; 6).',
  st:['Centre : le milieu I de [AB] = ({1 + 5¦2} ; {2 + 6¦2}) = (3 ; 4).',
      'Rayon : AB = √((5 − 1)² + (6 − 2)²) = √32, donc R = {√32¦2}, d\'où R² = {32¦4} = 8.',
      'Équation : (x − 3)² + (y − 4)² = 8.'],
  r:'<b>(x − 3)² + (y − 4)² = 8</b>'},
 pieges:[
  'Dans (x − a)², le centre a pour abscisse <b>a</b> (signe changé) : (x + 2)² correspond à a = −2.',
  'À droite on a R², pas R : (x − 3)² + (y − 4)² = 8 a pour rayon √8.',
  'Une équation x² + y² + … = 0 ne décrit pas toujours un cercle : vérifie le signe de a² + b² − c.'],
 mini:[
  {q:'Quel est le centre du cercle (x − 2)² + (y + 1)² = 9 ? Son rayon ?', r:'Centre <b>(2 ; −1)</b> ; rayon <b>3</b>.'},
  {q:'La droite est à une distance d = R du centre. Combien de points communs ?', r:'<b>Un seul</b> : la droite est tangente au cercle.'}],
 chk:[['(1+5)/2','3'],['(2+6)/2','4'],['(5-1)**2+(6-2)**2','32'],['32/4','8'],['(3-1)**2+(4-2)**2','8'],['(3-5)**2+(4-6)**2','8']]
},

'2D — Systèmes & inéquations dans ℝ×ℝ': {
 ess:[
  'Un <b>système</b> de deux équations à deux inconnues x et y se résout par <b>addition</b> (combinaison) ou par <b>substitution</b>.',
  'Pour le système ax + by = c ; a\'x + b\'y = c\', le nombre <b>ab\' − a\'b</b> décide : s\'il est ≠ 0, il y a <b>une solution unique</b> ; s\'il est nul, il y a soit aucune solution, soit une infinité.',
  'Une <b>inéquation</b> ax + by + c ≥ 0 se représente par un <b>demi-plan</b> limité par la droite ax + by + c = 0. Pour choisir le bon côté, on <b>teste un point</b> qui n\'est pas sur la droite (par exemple l\'origine).',
  'En <b>programmation linéaire</b>, on cherche le maximum ou le minimum d\'une fonction linéaire de x et y sous plusieurs contraintes : il est atteint à un sommet de la région des solutions.'],
 form:[
  'ab\' − a\'b ≠ 0 ⟹ solution unique.',
  'Changement d\'inconnues : pour {1¦x} + {1¦y} = 5 et {1¦x} − {1¦y} = 1, on pose X = {1¦x} et Y = {1¦y}.'],
 ex:{q:'Résoudre 2x − y = 1 et x + y = 5. Puis étudier x + 2y = 4 et 2x + 4y = 8.',
  st:['ab\' − a\'b = 2 × 1 − 1 × (−1) = 3 ≠ 0 : solution unique.',
      'On additionne les deux équations : 3x = 6, donc x = 2 ; puis y = 5 − 2 = 3. Vérification : 2 × 2 − 3 = 1 ✔.',
      'Second système : 1 × 4 − 2 × 2 = 0. La deuxième équation est le double de la première : <b>infinité de solutions</b> (tous les points de la droite x + 2y = 4).'],
  r:'(x ; y) = <b>(2 ; 3)</b> ; le second système a <b>une infinité de solutions</b>.'},
 pieges:[
  'Un système peut avoir <b>zéro</b>, <b>une</b> ou <b>une infinité</b> de solutions : ne conclus pas trop vite.',
  'Pour une inéquation, le test d\'un point évite de se tromper de demi-plan.',
  'Dans un changement d\'inconnues, n\'oublie pas de revenir à x et y à la fin.'],
 mini:[
  {q:'Résoudre en X = 1/x et Y = 1/y : X + Y = 5 et X − Y = 1. Puis revenir à x et y.', r:'X = 3 et Y = 2, donc <b>x = {1¦3} et y = {1¦2}</b>.'},
  {q:'Le point (0 ; 0) vérifie-t-il x + y − 4 ≥ 0 ?', r:'0 + 0 − 4 = −4 < 0 : <b>non</b>. Le demi-plan cherché est de l\'autre côté de la droite.'}],
 chk:[['2*1-1*(-1)','3'],['2*2-3','1'],['2+3','5'],['1*4-2*2','0'],['3+2','5'],['3-2','1'],['0+0-4<0','true']]
},

'2D — Prop. & Déf.': { memo:true }

};
