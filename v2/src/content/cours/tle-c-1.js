/* ===== Résumés de cours — Terminale C, thèmes 1 à 16 (guide du programme de Terminale C) =====
   Même structure que cours_3e.js. Balisage : <b>…</b> ; fraction {numérateur¦dénominateur}. */
window.MQ_COURS = window.MQ_COURS || {};
window.MQ_COURS['Tle C'] = Object.assign(window.MQ_COURS['Tle C'] || {}, {

'TleC — Barycentre de n points, fonctions de Leibniz & lignes de niveau': {
 ess:[
  'Un <b>point pondéré</b> est un couple (Aᵢ, αᵢ) : un point et un coefficient réel. On pose S = Σ αᵢ (somme des coefficients).',
  '<b>Fonction vectorielle de Leibniz</b> : f(M) = Σ αᵢ MAᵢ⃗. Si S ≠ 0, elle est <b>bijective</b> : un seul point G vérifie f(G) = 0⃗ ; c\'est le <b>barycentre</b>. Si S = 0, f est <b>constante</b> (le même vecteur pour tout M).',
  '<b>Fonction scalaire de Leibniz</b> : φ(M) = Σ αᵢ MAᵢ². Si S ≠ 0 : <b>φ(M) = S × MG² + φ(G)</b>.',
  '<b>Lignes de niveau</b> {M : φ(M) = k}. Si S ≠ 0 : MG² = {k − φ(G)¦S}, donc c\'est <b>vide</b>, le <b>point G</b>, ou un <b>cercle</b> (plan) / une <b>sphère</b> (espace) de centre G. Si S = 0 : <b>vide</b>, une <b>droite</b> (plan) ou un <b>plan</b> (espace), ou tout l\'ensemble. Sur une <b>droite</b> (ξ = une droite), la ligne de niveau est vide, un point, une paire de points, ou la droite entière.'],
 form:[
  'Si S ≠ 0, pour tout point O :    OG⃗ = {Σ αᵢ OAᵢ⃗¦Σ αᵢ}',
  'Avec les coordonnées : xG = {Σ αᵢ xᵢ¦Σ αᵢ}  (idem pour y et z).',
  'MA² − MB² = k (coefficients 1 et −1, S = 0) : une <b>droite perpendiculaire à (AB)</b> (un plan dans l\'espace).',
  'MA² + MB² = k (S = 2) : un cercle de centre I, milieu de [AB] (si k est assez grand ; sinon un point ou le vide). Le plan médiateur de [AB] = {M : MA = MB}.'],
 ex:{q:'A et B sont deux points tels que AB = 4, et I est le milieu de [AB]. Trouver l\'ensemble des points M du plan tels que MA² + MB² = 26.',
  st:['Les coefficients valent 1 et 1 : S = 2 ≠ 0. Le barycentre de (A, 1) et (B, 1) est le milieu I.',
      'On calcule φ(I) = IA² + IB² = 2² + 2² = 8.',
      'Formule de Leibniz : MA² + MB² = 2 MI² + 8.',
      'L\'équation devient 2 MI² + 8 = 26, donc MI² = 9, soit MI = 3.'],
  r:'C\'est le <b>cercle de centre I et de rayon 3</b>.'},
 pieges:[
  'Il faut <b>toujours calculer S d\'abord</b> : si S = 0, il n\'y a pas de barycentre (on ne divise jamais par 0).',
  'Dans φ(M) = S × MG² + φ(G), c\'est <b>MG au carré</b> et le coefficient est S, pas 1.',
  'Quand MG² = {k − φ(G)¦S} est négatif, l\'ensemble est <b>vide</b> : pas de cercle.',
  'Pour MA² − MB² = k, ce n\'est pas un cercle mais une droite perpendiculaire à (AB).'],
 mini:[
  {q:'Dans le plan muni d\'un repère, A(1 ; 2) et B(5 ; 6). Donne les coordonnées du barycentre G de (A, 3) et (B, 1).', r:'S = 4, xG = {3×1 + 5¦4} = 2 et yG = {3×2 + 6¦4} = 3. <b>G(2 ; 3)</b>'},
  {q:'Quel est l\'ensemble des points M de l\'espace tels que MA² − MB² = 0 ?', r:'C\'est l\'ensemble des points équidistants de A et B : le <b>plan médiateur de [AB]</b>.'}],
 chk:[['2*9+8','26'],['2**2+2**2','8'],['Math.sqrt(9)','3'],['(3*1+5)/4','2'],['(3*2+6)/4','3']]
},

'TleC — Translations & homothéties de l\'espace': {
 ess:[
  'La <b>translation de vecteur u⃗</b> envoie M sur M\' tel que MM\'⃗ = u⃗. Pour tous points, <b>M\'N\'⃗ = MN⃗</b>. En coordonnées, on ajoute celles de u⃗ : x\' = x + a, y\' = y + b, z\' = z + c.',
  'La <b>homothétie de centre Ω et de rapport k</b> (k ≠ 0) envoie M sur M\' tel que ΩM\'⃗ = k ΩM⃗. Pour tous points : <b>M\'N\'⃗ = k MN⃗</b>.',
  'Une translation et une homothétie sont des <b>applications affines</b> : elles conservent l\'alignement, le milieu, le parallélisme et l\'orthogonalité. L\'homothétie conserve les angles (pas les longueurs).',
  'Effet d\'une homothétie de rapport k : les longueurs sont multipliées par |k|, les aires par k², les volumes par |k|³.'],
 form:[
  'Composée de deux translations : t_v ∘ t_u = t_(u⃗+v⃗), et la réciproque de t_u est t_(−u⃗).',
  'Deux homothéties de <b>même centre</b> et de rapports k et k\' : leur composée est l\'homothétie de même centre et de rapport <b>k × k\'</b> (on peut les composer dans n\'importe quel ordre).',
  'Homothétie de rapport k ≠ 1 composée avec une translation : une homothétie de rapport k (le centre change).',
  'Cas particuliers : k = 1 donne l\'identité ; k = −1 donne la symétrie centrale.'],
 ex:{q:'Dans l\'espace muni d\'un repère, h est l\'homothétie de centre Ω(1 ; 2 ; 3) et de rapport −2. Trouver l\'image M\' de M(2 ; 0 ; 1). Puis donner le volume de l\'image d\'un cube de volume 27 cm³ par h.',
  st:['On calcule ΩM⃗ = (2 − 1 ; 0 − 2 ; 1 − 3) = (1 ; −2 ; −2).',
      'ΩM\'⃗ = −2 ΩM⃗ = (−2 ; 4 ; 4).',
      'M\' = Ω + ΩM\'⃗ = (1 − 2 ; 2 + 4 ; 3 + 4) = (−1 ; 6 ; 7).',
      'Les volumes sont multipliés par |k|³ = |−2|³ = 8, donc 27 × 8 = 216.'],
  r:'<b>M\'(−1 ; 6 ; 7)</b> et le volume image est <b>216 cm³</b>.'},
 pieges:[
  'Les volumes sont multipliés par <b>|k|³</b> et les aires par <b>k²</b> (et non par k).',
  'Un rapport négatif ne donne <b>pas</b> un volume négatif : on utilise la valeur absolue |k|.',
  'Une homothétie n\'est <b>pas</b> une isométrie (sauf k = 1 ou k = −1) : elle ne conserve pas les distances.',
  'On écrit ΩM\'⃗ = k ΩM⃗ : le vecteur part toujours du <b>centre</b> Ω.'],
 mini:[
  {q:'Quelle est l\'image de A(4 ; −1 ; 0) par la translation de vecteur (1 ; 2 ; 3) ?', r:'On ajoute les coordonnées : <b>A\'(5 ; 1 ; 3)</b>.'},
  {q:'Une homothétie de rapport −3 transforme une surface d\'aire 5 cm². Quelle est l\'aire de l\'image ?', r:'(−3)² × 5 = <b>45 cm²</b>.'}],
 chk:[['2-1','1'],['0-2','-2'],['-2*(1)+1','-1'],['2+4','6'],['3+4','7'],['27*Math.abs(-2)**3','216'],['(-3)**2*5','45'],['4+1','5'],['-1+2','1']]
},

'TleC — Réflexions, demi-tours & compositions dans l\'espace': {
 ess:[
  'Le <b>plan médiateur</b> d\'un segment [AB] est le plan qui passe par le milieu de [AB] et qui est perpendiculaire à (AB). C\'est l\'ensemble des points équidistants de A et de B.',
  '<b>Réflexion de plan (P)</b> : M\' = S_P(M) est tel que (P) est le plan médiateur de [MM\']. Si H est le projeté orthogonal de M sur (P), alors <b>MM\'⃗ = 2 MH⃗</b>. Les points invariants sont ceux du plan (P).',
  '<b>Demi-tour d\'axe (Δ)</b> (symétrie orthogonale par rapport à une droite) : (Δ) est la droite des points invariants. Si H est le projeté orthogonal de M sur (Δ), alors H est le milieu de [MM\'].',
  'Réflexion et demi-tour sont des <b>isométries</b> : elles conservent les distances, le parallélisme et l\'orthogonalité. Ce sont des <b>involutions</b> : S ∘ S = Id.'],
 form:[
  'Deux réflexions de plans <b>parallèles</b> : leur composée est une <b>translation</b> de vecteur normal aux plans (de longueur le double de la distance entre les plans).',
  'Deux réflexions de plans <b>perpendiculaires</b> suivant (Δ) : leur composée est le <b>demi-tour d\'axe (Δ)</b>.',
  'Deux demi-tours d\'axes <b>parallèles</b> : une translation. Deux demi-tours d\'axes <b>perpendiculaires en A</b> : le demi-tour d\'axe la perpendiculaire commune en A.',
  'Demi-tour d\'axe (Δ) puis réflexion de plan (P), avec (Δ) ⟂ (P) en A : la <b>symétrie centrale de centre A</b>.',
  'Toute translation de vecteur non nul est la composée de deux réflexions de plans parallèles.'],
 ex:{q:'Dans un repère orthonormé, S₁ est la réflexion de plan (z = 0) et S₂ la réflexion de plan (z = 4). Trouver l\'image de M(2 ; 3 ; 5) par S₂ ∘ S₁ et reconnaître cette transformation.',
  st:['S₁ change z en −z : M₁ = S₁(M) = (2 ; 3 ; −5).',
      'S₂ est la réflexion de plan (z = 4) : la cote z devient 8 − z. Donc M₂ = (2 ; 3 ; 8 − (−5)) = (2 ; 3 ; 13).',
      'On a ajouté 8 à la cote : c\'est la translation de vecteur (0 ; 0 ; 8), soit 2 fois le vecteur qui mène de (z = 0) à (z = 4).'],
  r:'L\'image est <b>(2 ; 3 ; 13)</b> : S₂ ∘ S₁ est la <b>translation de vecteur (0 ; 0 ; 8)</b>.'},
 pieges:[
  'Un demi-tour d\'axe (Δ) n\'est <b>pas</b> la symétrie centrale : seule la composée avec une réflexion de plan perpendiculaire donne la symétrie centrale.',
  'La composée de deux réflexions de plans parallèles est une translation, <b>pas</b> l\'identité (sauf si les plans sont confondus).',
  'L\'ensemble des points invariants d\'une réflexion est un <b>plan</b>, celui d\'un demi-tour est une <b>droite</b>.',
  'Dans S₂ ∘ S₁, on applique S₁ <b>en premier</b>, puis S₂.'],
 mini:[
  {q:'Quelle transformation obtient-on en composant deux demi-tours d\'axes perpendiculaires et sécants en A ?', r:'Le <b>demi-tour d\'axe la perpendiculaire commune aux deux axes, en A</b>.'},
  {q:'Quelle est l\'image de M(1 ; 2 ; 3) par la réflexion de plan (xOz), c\'est-à-dire (y = 0) ?', r:'On change le signe de y : <b>M\'(1 ; −2 ; 3)</b>.'}],
 chk:[['8-(-5)','13'],['5+8','13'],['2*4','8'],['0-5','-5']]
},

'TleC — Produit vectoriel': {
 ess:[
  'Dans une base orthonormée directe (i⃗, j⃗, k⃗) : <b>i⃗ ∧ j⃗ = k⃗</b>, <b>j⃗ ∧ k⃗ = i⃗</b>, <b>k⃗ ∧ i⃗ = j⃗</b> (permutation circulaire). Le produit vectoriel de deux vecteurs est un <b>vecteur</b>.',
  '<b>Antisymétrique</b> : u⃗ ∧ v⃗ = −(v⃗ ∧ u⃗). Et <b>u⃗ ∧ v⃗ = 0⃗ si et seulement si u⃗ et v⃗ sont colinéaires</b>.',
  'Si u⃗ et v⃗ ne sont pas colinéaires, u⃗ ∧ v⃗ est <b>orthogonal à u⃗ et à v⃗</b>. Donc pour A, B, C non alignés, AB⃗ ∧ AC⃗ est un vecteur normal au plan (ABC).',
  'Applications : aire d\'un triangle, alignement, coplanarité, volume d\'un tétraèdre, distance d\'un point à une droite.'],
 form:[
  'u⃗(x ; y ; z) ∧ v⃗(x\' ; y\' ; z\') = (<b>yz\' − zy\'</b> ; <b>zx\' − xz\'</b> ; <b>xy\' − yx\'</b>)',
  'Aire du triangle ABC = {1¦2} ‖AB⃗ ∧ AC⃗‖.    A, B, C alignés ⟺ AB⃗ ∧ AC⃗ = 0⃗.',
  'A, B, C, D coplanaires ⟺ AB⃗ ⋅ (AC⃗ ∧ AD⃗) = 0 (produit mixte nul).    Volume du tétraèdre = {1¦6} |AB⃗ ⋅ (AC⃗ ∧ AD⃗)|.',
  'Distance de M à la droite (AB) = {‖AM⃗ ∧ AB⃗‖¦AB}.'],
 ex:{q:'Dans un repère orthonormé direct, A(1 ; 0 ; 0), B(0 ; 2 ; 0), C(0 ; 0 ; 3). Calculer l\'aire du triangle ABC.',
  st:['AB⃗ = (−1 ; 2 ; 0) et AC⃗ = (−1 ; 0 ; 3).',
      'AB⃗ ∧ AC⃗ = (2×3 − 0×0 ; 0×(−1) − (−1)×3 ; (−1)×0 − 2×(−1)) = (6 ; 3 ; 2).',
      'Sa norme est ‖AB⃗ ∧ AC⃗‖ = √(36 + 9 + 4) = √49 = 7.',
      'L\'aire est la moitié de cette norme.'],
  r:'Aire(ABC) = <b>{7¦2} = 3,5</b> (unités d\'aire).'},
 pieges:[
  'Le produit vectoriel n\'est <b>pas commutatif</b> : changer l\'ordre change le signe.',
  'Ne confonds pas : produit <b>scalaire</b> (un nombre) et produit <b>vectoriel</b> (un vecteur).',
  'Pour l\'aire d\'un triangle, n\'oublie pas le facteur {1¦2} ; pour le volume d\'un tétraèdre, le facteur {1¦6}.',
  'Les formules en coordonnées ne valent que dans une base <b>orthonormée directe</b>.'],
 mini:[
  {q:'Calcule u⃗(1 ; 2 ; 3) ∧ v⃗(0 ; 1 ; 0).', r:'(2×0 − 3×1 ; 3×0 − 1×0 ; 1×1 − 2×0) = <b>(−3 ; 0 ; 1)</b>'},
  {q:'Volume du tétraèdre OABC avec O(0 ; 0 ; 0), A(2 ; 0 ; 0), B(0 ; 3 ; 0), C(0 ; 0 ; 4) ?', r:'OB⃗ ∧ OC⃗ = (12 ; 0 ; 0) ; OA⃗ ⋅ (12 ; 0 ; 0) = 24 ; volume = {24¦6} = <b>4</b>.'}],
 chk:[['2*3-0*0','6'],['0*(-1)-(-1)*3','3'],['(-1)*0-2*(-1)','2'],['Math.sqrt(36+9+4)','7'],['7/2','3.5'],['2*0-3*1','-3'],['3*0-1*0','0'],['1*1-2*0','1'],['3*4-0*0','12'],['2*12','24'],['24/6','4']]
},

'TleC — Systèmes d\'équations linéaires (pivot de Gauss)': {
 ess:[
  'La <b>méthode du pivot de Gauss</b> transforme un système en un système <b>équivalent triangulaire</b> (échelonné), qu\'on résout en « remontant » depuis la dernière équation.',
  'Opérations permises (elles gardent les mêmes solutions) : <b>permuter</b> deux équations ; <b>multiplier</b> une équation par un réel <b>non nul</b> ; <b>ajouter</b> à une équation un multiple d\'une autre.',
  'Un système linéaire a : <b>aucune solution</b>, ou <b>une seule</b> solution, ou une <b>infinité</b> de solutions.',
  'Pour 3 inconnues, il faut au moins 3 équations indépendantes pour espérer une solution unique.'],
 form:[
  'Pivot : on utilise la 1re équation pour éliminer x dans les autres, puis la 2e pour éliminer y dans la 3e.',
  'Une ligne du type <b>0 = 1</b> (impossible) : le système n\'a <b>aucune solution</b>. Une ligne <b>0 = 0</b> : on peut l\'ignorer, il reste moins d\'équations que d\'inconnues (en général une infinité de solutions).'],
 ex:{q:'Résoudre x + y + z = 6 ; 2x − y + z = 3 ; x + 2y − z = 2.',
  st:['Pivot x = 1re équation (L₁). L₂ ← L₂ − 2L₁ : −3y − z = −9, soit 3y + z = 9.',
      'L₃ ← L₃ − L₁ : y − 2z = −4.',
      'De 3y + z = 9 : z = 9 − 3y. On remplace : y − 2(9 − 3y) = −4, donc 7y = 14, y = 2, puis z = 3.',
      'Dans L₁ : x = 6 − 2 − 3 = 1. Vérification de L₂ : 2 − 2 + 3 = 3 ; de L₃ : 1 + 4 − 3 = 2.'],
  r:'S = {(1 ; 2 ; 3)}, c\'est-à-dire <b>x = 1, y = 2, z = 3</b>.'},
 pieges:[
  '<b>Multiplier une équation par 0</b> est interdit : on perd de l\'information et le système n\'est plus équivalent.',
  'Quand tu fais L₂ ← L₂ − 2L₁, applique-le à <b>tous les termes</b>, y compris le second membre.',
  'N\'oublie pas de <b>vérifier</b> la solution dans les trois équations de départ.',
  'Deux équations proportionnelles avec des seconds membres non proportionnels (x + y = 2 et 2x + 2y = 5) : aucune solution.'],
 mini:[
  {q:'Résoudre x + y = 2 ; 2x + 2y = 5.', r:'L₂ − 2L₁ donne 0 = 1 : impossible. <b>Aucune solution</b>.'},
  {q:'Résoudre x + y + z = 3 ; y + z = 2 ; z = 1.', r:'On remonte : z = 1, y = 2 − 1 = 1, x = 3 − 1 − 1 = 1. <b>(1 ; 1 ; 1)</b>'}],
 chk:[['1+2+3','6'],['2*1-2+3','3'],['1+2*2-3','2'],['2*1-1*2+1*3','3'],['9-3*2','3'],['7*2','14'],['1+1+1','3'],['2-1','1'],['3-1-1','1']]
},

'TleC — Arithmétique : ℤ, division euclidienne & numération': {
 ess:[
  '(ℤ, +, ×) est un <b>anneau commutatif unitaire</b>, mais ce n\'est pas un corps (2 n\'a pas d\'inverse dans ℤ). Pour tout a : a × 0 = 0.',
  'Ordre : si c < 0, a ≤ b équivaut à <b>a × c ≥ b × c</b> (le sens change). Toute partie non vide de ℕ a un <b>plus petit élément</b> ; toute partie non vide et majorée de ℤ a un <b>plus grand élément</b>.',
  '<b>Division euclidienne</b> de a par b (b ≠ 0) : il existe un <b>unique</b> couple (q, r) d\'entiers tel que <b>a = bq + r</b> avec <b>0 ≤ r < |b|</b>. Le reste n\'est jamais négatif.',
  '<b>Numération en base b</b> (b ≥ 2) : on fait des divisions euclidiennes successives par b ; les restes, lus de bas en haut, sont les chiffres. Binaire : base 2 (chiffres 0, 1) ; octal : base 8 ; hexadécimal : base 16 (chiffres 0 à 9 puis A = 10, B = 11, …, F = 15).'],
 form:[
  'a = bq + r  avec  0 ≤ r < |b|.',
  'En base 2 : 101101 = 1×32 + 0×16 + 1×8 + 1×4 + 0×2 + 1 = 45.',
  'En base 16 : FF = 15 × 16 + 15 = 255.'],
 ex:{q:'Faire la division euclidienne de −17 par 5, puis écrire 37 en base 2.',
  st:['On cherche q tel que 5q ≤ −17 < 5(q + 1) : q = −4, car 5 × (−4) = −20 ≤ −17.',
      'Le reste est r = −17 − (−20) = 3, et 0 ≤ 3 < 5. Donc −17 = 5 × (−4) + 3.',
      'Pour 37 : 37 = 2×18 + 1 ; 18 = 2×9 + 0 ; 9 = 2×4 + 1 ; 4 = 2×2 + 0 ; 2 = 2×1 + 0 ; 1 = 2×0 + 1.',
      'On lit les restes de bas en haut : 1, 0, 0, 1, 0, 1.'],
  r:'<b>−17 = 5 × (−4) + 3</b> (q = −4, r = 3) et 37 = <b>100101</b> en base 2.'},
 pieges:[
  'Le reste doit vérifier 0 ≤ r < |b| : −17 = 5 × (−3) − 2 est <b>faux</b> comme division euclidienne (reste négatif).',
  'Les chiffres d\'un nombre en base b se lisent en prenant les restes <b>de bas en haut</b>, pas dans l\'ordre où on les trouve.',
  'En multipliant une inégalité par un nombre <b>négatif</b>, il faut changer le sens.',
  'En base 16, FF ne vaut pas 15 ni 30 : c\'est 15 × 16 + 15 = 255.'],
 mini:[
  {q:'Que vaut 101101 (base 2) en base 10 ?', r:'32 + 8 + 4 + 1 = <b>45</b>.'},
  {q:'Division euclidienne de 100 par 7.', r:'100 = 7 × 14 + 2 : <b>q = 14 et r = 2</b>.'}],
 chk:[['5*(-4)+3','-17'],['2*18+1','37'],['9*2+0','18'],['4*2+1','9'],['32+4+1','37'],['32+8+4+1','45'],['7*14+2','100'],['15*16+15','255'],['(-5)*(-3)+2','17']]
},

'TleC — Divisibilité & congruences': {
 ess:[
  '<b>b divise a</b> (b | a) signifie qu\'il existe un entier k tel que a = bk. Si b | a et a ≠ 0, alors <b>|b| ≤ |a|</b>.',
  'Si a | b et b | a, alors <b>a = b ou a = −b</b>. Transitivité : a | b et b | c ⟹ a | c. Combinaison : si a | b et a | c, alors a divise <b>pb + qc</b> pour tous entiers p et q.',
  '<b>x ≡ y [n]</b> signifie que <b>n divise x − y</b>, c\'est-à-dire que x − y ∈ nℤ. Équivalent : x et y ont le <b>même reste</b> dans la division par n.',
  'La congruence est une relation <b>d\'équivalence</b> (réflexive, symétrique, transitive), compatible avec l\'addition et la multiplication. Donc si a ≡ a\' et b ≡ b\' [n], alors a + b ≡ a\' + b\' et ab ≡ a\'b\' [n], et aussi aᵖ ≡ a\'ᵖ [n].'],
 form:[
  'Divisibilité par 3 (ou 9) : 10 ≡ 1, donc un nombre est congru à la <b>somme de ses chiffres</b>.',
  'Divisibilité par 4 : 100 ≡ 0 [4], donc seuls les <b>deux derniers chiffres</b> comptent.',
  'Divisibilité par 11 : 10 ≡ −1 [11], donc on regarde la <b>somme alternée</b> des chiffres. Exemple : 2728 → 2 − 7 + 2 − 8 = −11 ; 2728 est divisible par 11.'],
 ex:{q:'Trouver le reste de la division de 3¹⁰⁰ par 7.',
  st:['On cherche une puissance de 3 congrue à 1 modulo 7 : 3² = 9 ≡ 2, 3³ ≡ 6 ≡ −1, donc 3⁶ ≡ 1 [7].',
      'On divise 100 par 6 : 100 = 6 × 16 + 4.',
      '3¹⁰⁰ = (3⁶)¹⁶ × 3⁴ ≡ 1¹⁶ × 3⁴ = 81 [7].',
      'Or 81 = 7 × 11 + 4, donc 81 ≡ 4 [7].'],
  r:'Le reste est <b>4</b>.'},
 pieges:[
  'On ne <b>simplifie pas</b> librement une congruence : 2 × 3 ≡ 2 × 0 [6], mais 3 n\'est pas congru à 0 modulo 6.',
  'a ≡ b [n] ne veut pas dire a = b : seulement que a − b est un <b>multiple de n</b>.',
  'Pour les puissances, on réduit d\'abord la base (7 ≡ 2 [5]) et l\'exposant grâce à une puissance congrue à 1.',
  '0 divise seulement 0, et tout entier divise 0.'],
 mini:[
  {q:'Quel est le reste de 2026 dans la division par 7 ?', r:'2026 = 7 × 289 + 3 : le reste est <b>3</b>.'},
  {q:'Quel est le reste de 3¹⁰⁰ modulo 4 ?', r:'3² = 9 ≡ 1 [4], donc 3¹⁰⁰ = (3²)⁵⁰ ≡ 1. Le reste est <b>1</b>.'}],
 chk:[['Number(3n**100n%7n)','4'],['3**6%7','1'],['6*16+4','100'],['81%7','4'],['7*11+4','81'],['2026%7','3'],['7*289+3','2026'],['Number(3n**100n%4n)','1'],['2728%11','0'],['2-7+2-8','-11']]
},

'TleC — PGCD, PPCM, Bézout & Gauss': {
 ess:[
  'L\'ensemble des diviseurs communs de a et b est l\'ensemble des diviseurs de leur <b>PGCD δ</b>. Les multiples communs sont les multiples de leur <b>PPCM μ</b> : aℤ ∩ bℤ = μℤ.',
  '<b>Algorithme d\'Euclide</b> : si r est le reste de la division de a par b, <b>PGCD(a, b) = PGCD(b, r)</b>. Le dernier reste non nul est le PGCD.',
  '<b>Bézout</b> : a et b sont premiers entre eux ⟺ il existe u, v entiers avec <b>au + bv = 1</b>. Plus généralement, les nombres de la forme au + bv sont les multiples de δ.',
  '<b>Gauss</b> : si a | bc et si a est premier avec b, alors <b>a | c</b>.',
  'L\'équation <b>ax + by = c</b> a des solutions entières ⟺ <b>PGCD(a, b) divise c</b>.'],
 form:[
  'PGCD(ka, kb) = k PGCD(a, b)    PPCM(ka, kb) = k PPCM(a, b).',
  '<b>PGCD(a, b) × PPCM(a, b) = a × b</b> (entiers naturels non nuls).',
  'Si a et b sont premiers entre eux : PPCM(a, b) = |ab| ; et si tous deux divisent c, alors <b>ab divise c</b>.',
  'Si a est premier avec n et ab ≡ ac [n], alors <b>b ≡ c [n]</b>.'],
 ex:{q:'Calculer PGCD(252 ; 198) avec l\'algorithme d\'Euclide, puis PPCM(252 ; 198).',
  st:['252 = 198 × 1 + 54.',
      '198 = 54 × 3 + 36.',
      '54 = 36 × 1 + 18.',
      '36 = 18 × 2 + 0 : le dernier reste non nul est 18, donc PGCD = 18.',
      'PPCM = {252 × 198¦18} = {49 896¦18} = 2 772.'],
  r:'PGCD(252 ; 198) = <b>18</b> et PPCM(252 ; 198) = <b>2 772</b>.'},
 pieges:[
  'PGCD × PPCM = a × b : ne confonds pas avec PGCD + PPCM.',
  'Gauss demande que a soit <b>premier avec b</b> : sans cette condition, on ne peut pas conclure (6 | 2 × 3 mais 6 ne divise ni 2 ni 3).',
  'Dans ax + by = c, vérifie d\'abord que PGCD(a, b) divise c : sinon <b>aucune solution</b>.',
  'Les solutions d\'une équation diophantienne dépendent d\'un paramètre k ∈ ℤ ; n\'oublie pas « k ∈ ℤ ».'],
 mini:[
  {q:'L\'équation 6x + 9y = 5 a-t-elle des solutions dans ℤ² ?', r:'PGCD(6, 9) = 3 ne divise pas 5 : <b>aucune solution</b>.'},
  {q:'Calcule PGCD(84 ; 126).', r:'126 = 84 × 1 + 42 et 84 = 42 × 2 : PGCD = <b>42</b>.'}],
 chk:[['252-198','54'],['3*54+36','198'],['36+18','54'],['2*18','36'],['252*198/18','2772'],['(function g(a,b){return b?g(b,a%b):a})(252,198)','18'],['(function g(a,b){return b?g(b,a%b):a})(84,126)','42'],['5*2+3*(-3)','1'],['5*(2+3*4)+3*(-3-5*4)','1'],['84*1+42','126']]
},

'TleC — Nombres premiers & ℤ/nℤ': {
 ess:[
  'Un entier est <b>premier</b> s\'il a exactement deux diviseurs positifs : 1 et lui-même. <b>1 n\'est pas premier</b> ; 2 est le seul premier pair.',
  'Tout entier n ≥ 2 a au moins un diviseur premier ; il y a une <b>infinité</b> de nombres premiers. Si n n\'est pas premier, il a un diviseur premier d avec <b>d² ≤ n</b> : pour tester n, on essaie les premiers d tels que d² ≤ n.',
  '<b>Décomposition</b> : tout entier n ≥ 2 s\'écrit comme produit de facteurs premiers, de façon <b>unique</b> (à l\'ordre près).',
  '<b>ℤ/nℤ</b> : l\'ensemble des classes modulo n. Il a <b>exactement n éléments</b> (les classes 0̄, 1̄, …, n − 1), et c\'est un <b>anneau commutatif</b>. C\'est un <b>corps</b> ⟺ n est <b>premier</b> (tout élément non nul y a un inverse).'],
 form:[
  'Test de primalité : si aucun premier d ≤ √n ne divise n, alors n est premier.',
  'Dans ℤ/pℤ (p premier), toute classe non nulle a un inverse. Dans ℤ/6ℤ : 2̄ × 3̄ = 0̄, donc ce n\'est pas un corps.'],
 ex:{q:'251 est-il un nombre premier ?',
  st:['√251 ≈ 15,8 : il suffit de tester les nombres premiers inférieurs ou égaux à 15, soit 2, 3, 5, 7, 11, 13.',
      '251 est impair ; la somme de ses chiffres est 8 (pas divisible par 3) ; il ne finit ni par 0 ni par 5.',
      '251 = 7 × 35 + 6 ; 251 = 11 × 22 + 9 ; 251 = 13 × 19 + 4 : aucun reste n\'est nul.'],
  r:'Aucun premier ≤ 15 ne divise 251 : <b>251 est premier</b>.'},
 pieges:[
  '<b>1 n\'est pas premier</b>, et 2 est premier (c\'est même le seul premier pair).',
  'Pour tester la primalité de n, il n\'est pas nécessaire d\'aller jusqu\'à n ni jusqu\'à n/2 : <b>jusqu\'à √n</b> suffit.',
  'ℤ/nℤ n\'est un corps que si n est premier : dans ℤ/6ℤ ou ℤ/12ℤ, certains produits de classes non nulles donnent 0̄.',
  'ℤ/nℤ a n classes (pas n − 1 ni 2n).'],
 mini:[
  {q:'Décompose 360 en produit de facteurs premiers.', r:'360 = 8 × 9 × 5 = <b>2³ × 3² × 5</b>.'},
  {q:'Dans ℤ/5ℤ, quel est l\'inverse de la classe de 2 ?', r:'2 × 3 = 6 ≡ 1 [5] : l\'inverse est la <b>classe de 3</b>.'}],
 chk:[['Math.floor(Math.sqrt(251))','15'],['251%3','2'],['251%7','6'],['251%11','9'],['251%13','4'],['8*9*5','360'],['2*3%5','1'],['(2*3)%6','0']]
},

'TleC — Nombres complexes : forme algébrique': {
 ess:[
  'Il existe un nombre i tel que <b>i² = −1</b>. Un nombre complexe s\'écrit <b>z = a + ib</b> avec a, b réels : <b>a = Re(z)</b> (partie réelle) et <b>b = Im(z)</b> (partie imaginaire, un nombre réel).',
  'Si b = 0, z est réel. Si a = 0 et b ≠ 0, z est <b>imaginaire pur</b> ; leur ensemble est noté <b>iℝ</b>.',
  '<b>Égalité</b> : z = z\' ⟺ Re(z) = Re(z\') et Im(z) = Im(z\'). En particulier z = 0 ⟺ Re(z) = 0 et Im(z) = 0.',
  'On calcule comme avec des lettres en remplaçant i² par −1. Un produit est nul ⟺ l\'un des facteurs est nul : zz\' = 0 ⟺ z = 0 ou z\' = 0.'],
 form:[
  '(a + ib) + (c + id) = (a + c) + i(b + d)',
  '(a + ib)(c + id) = (ac − bd) + i(ad + bc)',
  'Inverse : {1¦a + ib} = {a − ib¦a² + b²}  (on multiplie en haut et en bas par a − ib).',
  'Puissances de i : i⁰ = 1, i¹ = i, i² = −1, i³ = −i, i⁴ = 1 et ça recommence : on regarde le <b>reste modulo 4</b> de l\'exposant.'],
 ex:{q:'Écrire sous forme algébrique (2 + 3i)(1 − i), puis {1¦2 − i}.',
  st:['(2 + 3i)(1 − i) = 2 − 2i + 3i − 3i².',
      'Comme i² = −1 : −3i² = +3. Donc le produit vaut 2 + 3 + (−2 + 3)i = 5 + i.',
      'Pour l\'inverse, on multiplie en haut et en bas par 2 + i (le conjugué de 2 − i) : (2 − i)(2 + i) = 4 − i² = 5.',
      'Donc {1¦2 − i} = {2 + i¦5}.'],
  r:'(2 + 3i)(1 − i) = <b>5 + i</b> et {1¦2 − i} = <b>{2¦5} + {1¦5} i</b>.'},
 pieges:[
  '<b>i² = −1</b>, mais on n\'écrit pas i = −1 (i n\'est pas égal à −1).',
  'La partie imaginaire de 3 − 2i est <b>−2</b>, pas −2i.',
  'Dans ℂ, on ne compare pas avec < ou > : il n\'y a pas d\'ordre sur les complexes.',
  '{1¦a + ib} n\'est pas {1¦a} + {i¦b} : on multiplie par le conjugué.'],
 mini:[
  {q:'Calcule i²⁰²⁶.', r:'2026 = 4 × 506 + 2, donc i²⁰²⁶ = i² = <b>−1</b>.'},
  {q:'Résous (1 + i) z = 2.', r:'z = {2¦1 + i} = {2(1 − i)¦2} = <b>1 − i</b>.'}],
 chk:[['2*1-3*(-1)','5'],['2*(-1)+3*1','1'],['2*2+1*1','5'],['2026%4','2'],['1*1+1*1','2'],['1-1','0']]
},

'TleC — Conjugué & module': {
 ess:[
  'Le <b>conjugué</b> de z = a + ib est z̄ = a − ib (se lit « z barre » ; le quiz l\'écrit aussi conj(z)). On change le signe de la partie imaginaire.',
  '<b>z + z̄ = 2 Re(z)</b>, <b>z − z̄ = 2i Im(z)</b>, <b>z z̄ = a² + b²</b>. De plus : z est réel ⟺ z̄ = z ; z est imaginaire pur (z ≠ 0) ⟺ z̄ = −z.',
  'Le <b>module</b> de z = a + ib est <b>|z| = √(a² + b²)</b> et |z|² = z z̄. Géométriquement, si M a pour affixe z, <b>OM = |z|</b> ; et si M, M\' ont pour affixes z, z\', <b>MM\' = |z\' − z|</b>.',
  '|z| = 0 ⟺ z = 0. Le conjugué d\'un produit est le produit des conjugués.'],
 form:[
  '|zz\'| = |z| × |z\'|     |zⁿ| = |z|ⁿ  (n entier relatif)     |{z¦z\'}| = {|z|¦|z\'|}',
  '<b>Inégalité triangulaire</b> : |z + z\'| ≤ |z| + |z\'|.',
  'Inverse : {1¦z} = {z̄¦|z|²}  (z ≠ 0).'],
 ex:{q:'Pour z = 3 − 4i, calculer z̄, |z| et z z̄. Puis la distance entre A(1 + i) et B(4 + 5i).',
  st:['z̄ = 3 + 4i.',
      '|z| = √(3² + 4²) = √25 = 5.',
      'z z̄ = (3 − 4i)(3 + 4i) = 9 + 16 = 25 = |z|².',
      'AB = |z_B − z_A| = |(4 + 5i) − (1 + i)| = |3 + 4i| = √(9 + 16) = 5.'],
  r:'z̄ = <b>3 + 4i</b>, |z| = <b>5</b>, z z̄ = <b>25</b> et AB = <b>5</b>.'},
 pieges:[
  '|z| = √(a² + b²) : on ne met pas le « i » dans le calcul et on <b>ne prend pas</b> a + b.',
  '|z + z\'| n\'est <b>pas</b> |z| + |z\'| (en général |z + z\'| ≤ |z| + |z\'|). Mais |zz\'| = |z||z\'| est vrai.',
  'Pour la distance, on prend le module de la <b>différence</b> z\' − z, pas de la somme.',
  'z z̄ est un nombre <b>réel positif</b> (a² + b²), pas a² − b².'],
 mini:[
  {q:'Calcule |(1 + i)⁸|.', r:'|1 + i| = √2, donc |(1 + i)⁸| = (√2)⁸ = <b>16</b>.'},
  {q:'Pour z = 2 + 5i, calcule z + z̄ et z − z̄.', r:'z̄ = 2 − 5i. <b>z + z̄ = 4</b> et <b>z − z̄ = 10i</b>.'}],
 chk:[['Math.sqrt(3**2+4**2)','5'],['9+16','25'],['Math.sqrt((4-1)**2+(5-1)**2)','5'],['Math.sqrt(2)**8','16'],['2+2','4'],['2*5','10']]
},

'TleC — Forme trigonométrique & exponentielle': {
 ess:[
  '<b>Forme trigonométrique</b> d\'un complexe non nul : <b>z = r(cos θ + i sin θ)</b>, avec r = |z| et θ = arg z (défini à 2π près). On trouve θ avec cos θ = {a¦r} et sin θ = {b¦r} (il faut les deux).',
  '<b>Notation exponentielle</b> : e^(iθ) = cos θ + i sin θ, donc z = r e^(iθ). On a |e^(iθ)| = 1 et e^(iπ) = −1.',
  'Arguments usuels : arg 1 = 0 ; arg i = {π¦2} ; arg(−1) = π ; arg(−i) = −{π¦2}.',
  'Deux complexes non nuls sont égaux ⟺ ils ont le même module et des arguments égaux à 2kπ près.'],
 form:[
  'arg(zz\') = arg z + arg z\'    arg({z¦z\'}) = arg z − arg z\'    arg(zⁿ) = n arg z    arg(−z) = π + arg z    arg z̄ = −arg z',
  '<b>Moivre</b> : (cos θ + i sin θ)ⁿ = cos nθ + i sin nθ, c\'est-à-dire (e^(iθ))ⁿ = e^(inθ).',
  '<b>Euler</b> : cos θ = {e^(iθ) + e^(−iθ)¦2}    sin θ = {e^(iθ) − e^(−iθ)¦2i}.',
  'Linéarisation : cos²θ = {1 + cos 2θ¦2}.'],
 ex:{q:'Écrire 1 + i sous forme exponentielle, puis calculer (1 + i)⁸.',
  st:['|1 + i| = √(1² + 1²) = √2.',
      'cos θ = {1¦√2} = {√2¦2} et sin θ = {√2¦2} : donc θ = {π¦4}.',
      'Ainsi 1 + i = √2 e^(iπ/4).',
      '(1 + i)⁸ = (√2)⁸ e^(i × 8π/4) = 16 e^(2iπ) = 16 × 1.'],
  r:'1 + i = <b>√2 e^(iπ/4)</b> et (1 + i)⁸ = <b>16</b>.'},
 pieges:[
  'θ ≠ arctan({b¦a}) automatiquement : pour z = −1 + i, l\'argument est {3π¦4} (et non −{π¦4}). Regarde le <b>signe de cos et de sin</b>.',
  'arg(z + z\') n\'est <b>pas</b> arg z + arg z\' : c\'est pour le <b>produit</b> que les arguments s\'ajoutent.',
  'Pour un produit : on <b>multiplie les modules</b> et on <b>additionne les arguments</b> (pas l\'inverse).',
  'r est un module, donc r > 0 : on ne le prend jamais négatif.'],
 mini:[
  {q:'Écris 1 − i sous forme exponentielle.', r:'|1 − i| = √2 et θ = −{π¦4} : <b>√2 e^(−iπ/4)</b>.'},
  {q:'Si z = 2e^(iπ/3), donne z² sous forme exponentielle.', r:'Module 2² = 4, argument 2 × {π¦3} : <b>z² = 4 e^(2iπ/3)</b>.'}],
 chk:[['Math.sqrt(2)**8','16'],['Math.sqrt(2)/2','Math.cos(Math.PI/4)'],['Math.sqrt(2)/2','Math.sin(Math.PI/4)'],['8*Math.PI/4','2*Math.PI'],['2**2','4'],['2*Math.PI/3','Math.PI*2/3']]
},

'TleC — Équations dans ℂ & racines n-ièmes': {
 ess:[
  'Dans ℂ, −9 a deux racines carrées : <b>3i et −3i</b> (car (3i)² = −9). Donc z² + 4 = 0 a pour solutions 2i et −2i.',
  '<b>Équation az² + bz + c = 0</b> (a, b, c réels, a ≠ 0), Δ = b² − 4ac. Si Δ ≥ 0 : deux racines réelles (ou une double). Si <b>Δ < 0</b> : deux racines <b>complexes conjuguées</b> z = {−b ± i√(−Δ)¦2a}.',
  '<b>Relations</b> : z₁ + z₂ = {−b¦a} et z₁ z₂ = {c¦a}.',
  '<b>Racines n-ièmes</b> de r e^(iα) : il y en a exactement <b>n</b>, zₖ = ⁿ√r e^(i(α + 2kπ)/n), k = 0, 1, …, n − 1. Pour n ≥ 3, leurs images sont les sommets d\'un <b>polygone régulier à n côtés</b> inscrit dans un cercle de centre O.'],
 form:[
  'Racines cubiques de 1 : <b>1 ; e^(2iπ/3) ; e^(4iπ/3)</b>.     Racines quatrièmes de 1 : <b>1 ; i ; −1 ; −i</b>.',
  'Si z₀ est racine d\'un polynôme P de degré n ≥ 3, alors P(z) = (z − z₀) Q(z) avec Q de degré n − 1.',
  'Si P est à coefficients <b>réels</b> et si z₀ est une racine non réelle, alors <b>le conjugué de z₀</b> est aussi racine.',
  'Racine carrée de a + ib : on pose (x + iy)² = a + ib, ce qui donne x² − y² = a, 2xy = b et x² + y² = |a + ib|. Exemple : les racines carrées de i sont ±{√2¦2}(1 + i).',
  'Si les coefficients sont complexes : Δ = b² − 4ac est un complexe ; on prend δ une racine carrée de Δ, et les solutions sont {−b + δ¦2a} et {−b − δ¦2a}.'],
 ex:{q:'Résoudre dans ℂ : z² − 2z + 5 = 0.',
  st:['a = 1, b = −2, c = 5 : Δ = b² − 4ac = 4 − 20 = −16.',
      'Δ < 0 : on écrit −16 = (4i)². Les racines sont z = {2 ± 4i¦2}.',
      'Donc z₁ = 1 + 2i et z₂ = 1 − 2i (conjugués).',
      'Vérification : z₁ + z₂ = 2 = {−b¦a} et z₁ z₂ = 1 + 4 = 5 = {c¦a}.'],
  r:'S = <b>{1 + 2i ; 1 − 2i}</b>.'},
 pieges:[
  'Quand Δ < 0, √Δ n\'existe pas dans ℝ : on écrit <b>√(−16) = 4i</b> (on prend ±4i), pas « pas de solution ».',
  'Un nombre complexe non nul a <b>exactement n</b> racines n-ièmes, pas une seule : k va de 0 à n − 1.',
  'Un complexe non nul a <b>deux</b> racines carrées, opposées l\'une de l\'autre.',
  'La propriété « racines conjuguées » ne marche que si les coefficients sont <b>réels</b>.'],
 mini:[
  {q:'Détermine les racines carrées de 3 + 4i.', r:'(2 + i)² = 4 + 4i − 1 = 3 + 4i. Les racines sont <b>2 + i et −2 − i</b>.'},
  {q:'Quelles sont les racines quatrièmes de 1 ?', r:'<b>1, i, −1, −i</b> (car i⁴ = 1, (−1)⁴ = 1, (−i)⁴ = 1).'}],
 chk:[['2*2-1*1','3'],['2*2*1','4'],['4-20','-16'],['4/2','2'],['2/2','1'],['1+4','5'],['2*2+1*1','5'],['(-1)**4','1'],['2*(Math.SQRT2/2)**2','1']]
},

'TleC — Nombres complexes & géométrie plane': {
 ess:[
  'Le plan est muni d\'un repère orthonormé direct (O, I, J). Le point M(x ; y) a pour <b>affixe z = x + iy</b>. Le vecteur AB⃗ a pour affixe <b>z_B − z_A</b> (arrivée moins départ).',
  '<b>Distance</b> : AB = |z_B − z_A|. <b>Milieu</b> de [AB] : affixe {z_A + z_B¦2}.',
  '<b>Angles</b> : mes(OI⃗, AB⃗) = arg(z_B − z_A) ; mes(AB⃗, CD⃗) = arg {z_D − z_C¦z_B − z_A} (à 2π près).',
  'Alignement : A, B, C alignés ⟺ {z_C − z_A¦z_B − z_A} ∈ <b>ℝ</b>. Perpendicularité : (AB) ⟂ (CD) ⟺ {z_D − z_C¦z_B − z_A} ∈ <b>iℝ</b>.'],
 form:[
  'ABCD parallélogramme ⟺ AB⃗ = DC⃗ ⟺ z_B − z_A = z_C − z_D.',
  '|z − a| = r : cercle de centre A (affixe a) et de rayon r.    |z − a| = |z − b| : <b>médiatrice de [AB]</b>.',
  'Si {z_C − z_A¦z_B − z_A} = i : ABC est rectangle isocèle en A. Si = e^(iπ/3) : ABC est équilatéral. (Le module du quotient donne AC/AB, son argument donne l\'angle.)'],
 ex:{q:'A(1 + i), B(3 + i), C(1 + 3i). Quelle est la nature du triangle ABC ?',
  st:['z_B − z_A = 2 et z_C − z_A = 2i.',
      'On calcule le quotient : {z_C − z_A¦z_B − z_A} = {2i¦2} = i.',
      'Le module du quotient vaut 1, donc AC = AB. Son argument est {π¦2}, donc l\'angle (AB⃗, AC⃗) vaut {π¦2}.'],
  r:'ABC est un triangle <b>rectangle isocèle en A</b> (AB = AC = 2).'},
 pieges:[
  'Un vecteur a pour affixe <b>z_B − z_A</b> (arrivée − départ) : l\'inverse donne le vecteur opposé.',
  'Pour mes(AB⃗, CD⃗), on prend le quotient <b>(z_D − z_C) / (z_B − z_A)</b> (le second vecteur au numérateur).',
  'Réel pour l\'<b>alignement</b>, imaginaire pur pour la <b>perpendicularité</b> : ne les inverse pas.',
  '|z − a| = |z − b| est une <b>droite</b> (médiatrice), pas un cercle.'],
 mini:[
  {q:'Quel est l\'ensemble des points M d\'affixe z tels que |z − (1 − i)| = 2 ?', r:'Le <b>cercle de centre d\'affixe 1 − i et de rayon 2</b>.'},
  {q:'Donne l\'affixe du milieu de [AB] avec A(2 + 4i) et B(4 − 2i).', r:'{(2 + 4i) + (4 − 2i)¦2} = {6 + 2i¦2} = <b>3 + i</b>.'}],
 chk:[['Math.hypot(2,0)','2'],['Math.hypot(0,2)','2'],['(2+4)/2','3'],['(4-2)/2','1'],['3-1','2'],['Math.hypot(3,4)','5']]
},

'TleC — Limites & continuité': {
 ess:[
  '<b>Opérations</b> : une fonction majorée plus une fonction de limite −∞ tend vers <b>−∞</b> ; une fonction minorée plus une fonction de limite +∞ tend vers <b>+∞</b>. Si lim f = b en a et lim g = l en b, alors <b>lim (g∘f) = l</b> en a. Formes indéterminées : ∞ − ∞, 0 × ∞, {∞¦∞}, {0¦0}.',
  '<b>Fonction monotone</b> : croissante et <b>majorée</b> sur [a ; b[ ⟹ limite <b>finie</b> en b ; croissante et <b>non majorée</b> ⟹ limite <b>+∞</b>.',
  '<b>Continuité</b> : f est continue en a ⟺ lim f(x) quand x tend vers a vaut f(a). Si f n\'est pas définie en a mais a une limite finie l, on la <b>prolonge par continuité</b> en posant f(a) = l. La composée de fonctions continues est continue.',
  'L\'image d\'un <b>intervalle</b> par une fonction continue est un <b>intervalle</b>. L\'image d\'un segment [a ; b] est un segment [m ; M] (minimum et maximum).',
  '<b>Théorème des valeurs intermédiaires</b> : f continue sur [a ; b], k entre f(a) et f(b) ⟹ f(x) = k a <b>au moins</b> une solution. Si en plus f est <b>strictement monotone</b>, la solution est <b>unique</b>.'],
 form:[
  'f continue et strictement croissante sur [a ; b] : f([a ; b]) = [f(a) ; f(b)] ; strictement décroissante : f([a ; b]) = [f(b) ; f(a)].',
  'f continue et strictement monotone sur K : f est une <b>bijection de K sur f(K)</b>, sa réciproque est continue et a le même sens de variation.',
  'La racine n-ième est la réciproque de x ↦ xⁿ sur ℝ⁺ ; x^(p/q) = (q-ième racine de x)ᵖ. Exemple : 8^(2/3) = (∛8)² = 2² = 4.'],
 ex:{q:'Montrer que l\'équation x³ + x − 1 = 0 admet une unique solution α dans [0 ; 1], et l\'encadrer à 0,1 près.',
  st:['f(x) = x³ + x − 1 est continue sur [0 ; 1] (polynôme) et f\'(x) = 3x² + 1 > 0 : f est strictement croissante.',
      'f(0) = −1 < 0 et f(1) = 1 > 0 : 0 est entre f(0) et f(1).',
      'TVI + stricte monotonie : f(x) = 0 a une <b>unique</b> solution α dans [0 ; 1].',
      'Encadrement : f(0,6) = 0,216 + 0,6 − 1 = −0,184 < 0 et f(0,7) = 0,343 + 0,7 − 1 = 0,043 > 0.'],
  r:'L\'équation a une unique solution α, avec <b>0,6 < α < 0,7</b>.'},
 pieges:[
  'Le TVI donne l\'<b>existence</b> ; pour l\'<b>unicité</b>, il faut la stricte monotonie.',
  'Le TVI exige la <b>continuité sur tout l\'intervalle</b> : sans elle, la conclusion peut être fausse.',
  'Si f est strictement décroissante, f([a ; b]) = <b>[f(b) ; f(a)]</b> (les bornes sont dans l\'autre ordre).',
  'Dans une forme indéterminée (∞ − ∞, {∞¦∞}…), on ne peut pas conclure directement : il faut transformer l\'écriture.'],
 mini:[
  {q:'Calcule 8^(2/3).', r:'(∛8)² = 2² = <b>4</b>.'},
  {q:'f est continue et strictement croissante sur [1 ; 3], f(1) = −2 et f(3) = 5. Que vaut f([1 ; 3]) ? L\'équation f(x) = 0 a-t-elle une solution ?', r:'f([1 ; 3]) = <b>[−2 ; 5]</b>. Comme 0 ∈ [−2 ; 5], f(x) = 0 a une <b>unique</b> solution dans [1 ; 3].'}],
 chk:[['0**3+0-1','-1'],['1+1-1','1'],['0.6**3+0.6-1','-0.184'],['0.7**3+0.7-1','0.043'],['Math.cbrt(8)**2','4'],['0.216+0.6-1','-0.184'],['0.343+0.7-1','0.043']]
},

'TleC — Dérivation & étude de fonctions': {
 ess:[
  'f est <b>dérivable en x₀</b> ⟺ f(x₀ + h) = f(x₀) + l h + h φ(h) avec φ(h) → 0 quand h → 0 ; alors l = f\'(x₀). Équivalent : f est dérivable à gauche et à droite en x₀ <b>avec f\'g(x₀) = f\'d(x₀)</b>.',
  'Dérivable ⟹ continue (mais pas l\'inverse). Si f\'g(x₀) ≠ f\'d(x₀), la courbe a un <b>point anguleux</b> (deux demi-tangentes de supports distincts). Exemple : x ↦ |x| en 0 (f\'g = −1, f\'d = 1). Si le taux d\'accroissement a une limite infinie, la courbe a une <b>demi-tangente verticale</b>.',
  '<b>Dérivée seconde</b> f\'\' = dérivée de f\'. Si f\'\' s\'annule <b>en changeant de signe</b> en x₀, le point d\'abscisse x₀ est un <b>point d\'inflexion</b> (la tangente traverse la courbe).',
  '<b>Composée</b> : (g∘f)\' = <b>f\' × (g\'∘f)</b>. <b>Réciproque</b> : si φ est la réciproque de f (f\' ≠ 0), φ\'(y) = {1¦f\'(φ(y))}.',
  '<b>Inégalité des accroissements finis</b> : si m ≤ f\' ≤ M sur [a ; b], alors m(b − a) ≤ f(b) − f(a) ≤ M(b − a). Si |f\'| ≤ M, alors |f(b) − f(a)| ≤ M|b − a|.'],
 form:[
  '(uⁿ)\' = n u\' uⁿ⁻¹     (√u)\' = {u\'¦2√u}     (sin(ax + b))\' = a cos(ax + b)     (cos(ax + b))\' = −a sin(ax + b)',
  '(cos²x)\' = −2 sin x cos x     (tan x)\' = 1 + tan²x = {1¦cos²x}',
  '(x^(1/n))\' = {1¦n} x^((1/n) − 1)  pour x > 0.'],
 ex:{q:'Dériver f(x) = (3x + 1)⁴ puis donner l\'équation de la tangente en x = 0.',
  st:['On pose u = 3x + 1, donc u\' = 3 et f = u⁴.',
      'f\'(x) = 4 u\' u³ = 4 × 3 × (3x + 1)³ = 12(3x + 1)³.',
      'En 0 : f(0) = 1⁴ = 1 et f\'(0) = 12 × 1 = 12.',
      'Tangente : y = f\'(0)(x − 0) + f(0) = 12x + 1.'],
  r:'f\'(x) = <b>12(3x + 1)³</b> et la tangente en 0 a pour équation <b>y = 12x + 1</b>.'},
 pieges:[
  'En dérivant une composée, <b>n\'oublie pas le facteur u\'</b> : (3x + 1)⁴ a pour dérivée 12(3x + 1)³, pas 4(3x + 1)³.',
  '<b>Dérivable ⟹ continue</b>, mais la réciproque est fausse : |x| est continue en 0 sans y être dérivable.',
  'f\' qui s\'annule n\'est pas un point d\'inflexion : un point d\'inflexion vient de <b>f\'\'</b> qui change de signe.',
  'La dérivée de cos²x n\'est pas −2 cos x : il y a le facteur −sin x, soit <b>−2 sin x cos x</b>.'],
 mini:[
  {q:'Donne la dérivée de x ↦ sin(2x).', r:'(sin(2x))\' = <b>2 cos(2x)</b>.'},
  {q:'La fonction x ↦ |x| est-elle dérivable en 0 ?', r:'<b>Non</b> : f\'g(0) = −1 et f\'d(0) = 1 sont différents, la courbe a un point anguleux.'}],
 chk:[['12*(3*0+1)**3','12'],['((3*1e-6+1)**4-(1-3e-6)**4)/2e-6','12'],['(Math.cos(1+1e-6)**2-Math.cos(1-1e-6)**2)/2e-6','-Math.sin(2)'],['(Math.sin(2*(1+1e-6))-Math.sin(2*(1-1e-6)))/2e-6','2*Math.cos(2)'],['4*3','12'],['1**4','1']]
}
});
