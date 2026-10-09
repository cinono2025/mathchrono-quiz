/* ===== Résumés de cours — classe de 1ère A (séries A1, A2) — guides du programme de première A1 et A2/B ===== */
window.MQ_COURS = window.MQ_COURS || {};
window.MQ_COURS['1ère A'] = Object.assign(window.MQ_COURS['1ère A'] || {}, {

'1A — Polynôme du second degré & discriminant': {
 ess:[
  'Un <b>polynôme du second degré</b> (ou trinôme) s\'écrit <b>ax² + bx + c</b> avec <b>a ≠ 0</b>. Exemple : 3x² − 5x + 2.',
  'Pour savoir s\'il a des racines (des valeurs de x qui le rendent nul), on calcule le <b>discriminant</b> Δ = b² − 4ac.',
  'Si <b>Δ > 0</b> : deux racines différentes. Si <b>Δ = 0</b> : une racine double. Si <b>Δ < 0</b> : aucune racine réelle.',
  'La <b>forme canonique</b> a(x − α)² + β donne le sommet S(α ; β) de la parabole : α = {−b¦2a} et β = valeur du polynôme en α.'],
 form:[
  'Δ = b² − 4ac    Forme canonique : <b>ax² + bx + c = a(x − α)² + β</b>    avec α = {−b¦2a} et β = −{Δ¦4a}  (β = valeur du polynôme en α).',
  'Si Δ > 0 : x₁ = {−b − √Δ¦2a}    x₂ = {−b + √Δ¦2a}',
  'Si Δ = 0 : x₀ = {−b¦2a}',
  'Factorisation (si racines x₁ et x₂) : <b>ax² + bx + c = a(x − x₁)(x − x₂)</b>',
  'Si Δ < 0 et a > 0 : le polynôme est <b>strictement positif</b> pour tout x.'],
 ex:{q:'Factoriser 2x² − 2x − 12.',
  st:['On identifie a = 2, b = −2, c = −12.',
      'Δ = b² − 4ac = (−2)² − 4 × 2 × (−12) = 4 + 96 = 100, donc √Δ = 10.',
      'Δ > 0 : x₁ = {2 − 10¦4} = −2 et x₂ = {2 + 10¦4} = 3.',
      'On écrit a(x − x₁)(x − x₂) = 2(x + 2)(x − 3).'],
  r:'2x² − 2x − 12 = <b>2(x − 3)(x + 2)</b>'},
 pieges:[
  'Oublier le signe : si b = −2, alors b² = 4 et −b = +2.',
  'Écrire (x − x₁) avec le mauvais signe : si la racine est −2, le facteur est (x + 2).',
  'Oublier le facteur a devant la factorisation.',
  'Si Δ < 0, dire « une racine » : il n\'y en a <b>aucune</b> dans ℝ.'],
 mini:[
  {q:'Calcule Δ pour x² − 3x − 4. Combien de racines ?', r:'Δ = 9 + 16 = <b>25</b> > 0 : <b>deux racines</b> (−1 et 4).'},
  {q:'Donne la forme canonique de x² − 4x + 1.', r:'<b>(x − 2)² − 3</b> (car (x − 2)² = x² − 4x + 4).'}],
 chk:[['(-2)*(-2)-4*2*(-12)','100'],['(2+10)/4','3'],['(2-10)/4','-2'],['2*(5-3)*(5+2)','2*25-2*5-12'],['9-4*1*(-4)','25'],['(-1)**2-3*(-1)-4','0'],['4**2-3*4-4','0'],['(7-2)**2-3','7*7-4*7+1']]
},

'1A — Équations du second degré': {
 ess:[
  'Pour résoudre <b>ax² + bx + c = 0</b> : on calcule Δ, puis on applique les formules des racines.',
  'Si Δ < 0, l\'équation n\'a <b>aucune solution</b> dans ℝ. Par exemple x² + 4 = 0 (car x² ≥ 0).',
  'Si x₁ et x₂ sont les solutions, leur <b>somme</b> et leur <b>produit</b> se lisent directement sur les coefficients. Cela sert à trouver deux nombres dont on connaît la somme et le produit.',
  'Une équation <b>bicarrée</b> ax⁴ + bx² + c = 0 se résout en posant <b>X = x²</b> : on résout l\'équation en X, puis on revient à x.'],
 form:[
  'x₁ + x₂ = {−b¦a}    x₁ × x₂ = {c¦a}',
  'Deux nombres de somme S et de produit P sont les solutions de <b>x² − Sx + P = 0</b>.',
  'Bicarrée : on garde seulement les X <b>positifs ou nuls</b>, puis x = ±√X.'],
 ex:{q:'Résoudre 2x² + x − 1 = 0.',
  st:['a = 2, b = 1, c = −1.',
      'Δ = 1² − 4 × 2 × (−1) = 1 + 8 = 9, donc √Δ = 3.',
      'x₁ = {−1 − 3¦4} = −1 et x₂ = {−1 + 3¦4} = {1¦2}.',
      'Vérification : la somme vaut −1 + {1¦2} = −{1¦2} = {−b¦a} ; c\'est bon.'],
  r:'S = <b>{−1 ; {1¦2}}</b> (soit −1 et 0,5).'},
 pieges:[
  'Dans une bicarrée, <b>rejeter</b> une valeur négative de X : x² ne peut pas être négatif.',
  'S\'arrêter à X : il faut revenir à x (chaque X > 0 donne deux valeurs ±√X).',
  'Pour la somme et le produit, mettre le mauvais signe : c\'est <b>−b/a</b> pour la somme.',
  'Diviser seulement une partie du numérateur par 2a.'],
 mini:[
  {q:'Résous x⁴ + x² − 2 = 0.', r:'X² + X − 2 = 0 donne X = 1 ou X = −2 (rejeté). Donc <b>x = 1 ou x = −1</b>.'},
  {q:'Trouve deux nombres de somme −3 et de produit −10.', r:'x² + 3x − 10 = 0 donne <b>2 et −5</b>.'}],
 chk:[['1+8','9'],['2*0.5**2+0.5-1','0'],['2*(-1)**2+(-1)-1','0'],['-1+0.5','-1/2'],['1**4+1**2-2','0'],['2+(-5)','-3'],['2*(-5)','-10'],['(-5)**2+3*(-5)-10','0']]
},

'1A — Inéquations du second degré': {
 ess:[
  'Pour résoudre une inéquation comme ax² + bx + c ≤ 0, on étudie le <b>signe du trinôme</b>.',
  '<b>Si Δ > 0</b> : le trinôme est du signe de <b>a à l\'extérieur</b> des racines, et du signe contraire de a <b>entre</b> les racines (il est nul aux racines).',
  '<b>Si Δ = 0</b> : il est du signe de a partout, sauf en la racine double où il vaut 0.',
  '<b>Si Δ < 0</b> : il est du signe de a pour tout x. On peut aussi lire la réponse sur la parabole (au-dessus ou en dessous de l\'axe des abscisses).',
  'Inéquation <b>bicarrée</b> : on pose X = x², on résout en X, puis on revient à x. Exemple : x⁴ − 5x² + 4 < 0 donne 1 < X < 4, donc 1 < x² < 4, soit S = ]−2 ; −1[ ∪ ]1 ; 2[.'],
 form:[
  'a > 0 et Δ > 0 : positif à l\'extérieur des racines, négatif entre elles.',
  'a < 0 et Δ > 0 : négatif à l\'extérieur, positif entre les racines.',
  'Crochet fermé [ pour ≤ ou ≥ ; crochet ouvert ] pour < ou >.'],
 ex:{q:'Résoudre x² − 3x − 4 ≤ 0.',
  st:['Δ = (−3)² − 4 × 1 × (−4) = 9 + 16 = 25, donc √Δ = 5.',
      'Racines : x₁ = {3 − 5¦2} = −1 et x₂ = {3 + 5¦2} = 4.',
      'Ici a = 1 > 0 : le trinôme est négatif <b>entre</b> les racines.',
      'Comme l\'inégalité est large (≤), on garde les racines.'],
  r:'S = <b>[−1 ; 4]</b>'},
 pieges:[
  'Se tromper de côté : pour a > 0, « négatif » signifie <b>entre</b> les racines.',
  'Oublier les racines dans l\'ensemble solution quand l\'inégalité est large (≤ ou ≥).',
  'Oublier de regarder le signe de a (par exemple −x² + 4 ≥ 0 donne [−2 ; 2]).',
  'Écrire une réunion avec « et » : on écrit ]−∞ ; −2[ ∪ ]2 ; +∞[.'],
 mini:[
  {q:'Résous x² − 4 > 0.', r:'Racines −2 et 2, a > 0 : positif à l\'extérieur. <b>S = ]−∞ ; −2[ ∪ ]2 ; +∞[</b>'},
  {q:'Résous x² + x + 1 > 0.', r:'Δ = 1 − 4 = −3 < 0 et a > 0 : toujours positif. <b>S = ℝ</b>'}],
 chk:[['9+16','25'],['(-1)**2-3*(-1)-4','0'],['4*4-3*4-4','0'],['0*0-3*0-4<=0','true'],['5*5-3*5-4>0','true'],['(-3)**2-4>0','true'],['0-4>0','false'],['1-4*1*1','-3']]
},

'1A — Systèmes d\'équations & d\'inéquations linéaires': {
 ess:[
  'Un <b>système</b> de deux équations à deux inconnues x et y se résout par <b>substitution</b> (on isole une inconnue et on la remplace) ou par <b>combinaison</b> (on additionne ou on soustrait les équations).',
  'Graphiquement, chaque équation est une <b>droite</b> ; la solution est leur point d\'intersection.',
  'Une droite ax + by + c = 0 partage le plan en <b>deux demi-plans</b>. D\'un côté ax + by + c > 0, de l\'autre ax + by + c < 0.',
  'Pour savoir quel côté convient, on <b>teste un point</b> qui n\'est pas sur la droite, souvent O(0 ; 0).',
  'Un système d\'inéquations a pour solution l\'<b>intersection</b> des demi-plans.'],
 form:[
  'Deux systèmes sont <b>équivalents</b> s\'ils ont les mêmes solutions.',
  'Si les inconnues sont au dénominateur (comme {1¦x} et {1¦y}), on pose X = {1¦x} et Y = {1¦y} pour revenir à un système linéaire.',
  'x ≥ 0, y ≥ 0, x + y ≤ 4 : triangle de sommets (0 ; 0), (4 ; 0) et (0 ; 4).'],
 ex:{q:'Résoudre le système  x + 2y = 7  et  3x − y = 7.',
  st:['De la 2e équation : y = 3x − 7.',
      'On remplace dans la 1re : x + 2(3x − 7) = 7, donc 7x − 14 = 7, donc x = 3.',
      'Alors y = 3 × 3 − 7 = 2.',
      'Vérification : 3 + 2 × 2 = 7 et 3 × 3 − 2 = 7.'],
  r:'Solution : <b>x = 3 et y = 2</b>, soit le point (3 ; 2).'},
 pieges:[
  'Oublier de calculer la 2e inconnue après avoir trouvé la 1re.',
  'Se tromper de signe en soustrayant deux équations : mets tout entre parenthèses.',
  'Dessiner la droite en pointillés ou en trait plein au hasard : pointillés si l\'inégalité est stricte.',
  'Tester un point <b>sur</b> la droite : il ne dit rien sur le demi-plan.'],
 mini:[
  {q:'Résous x + y = 5 et 2x − y = 1.', r:'On additionne : 3x = 6, donc x = 2, puis y = 3. <b>(2 ; 3)</b>'},
  {q:'Le point A(3 ; 1) vérifie-t-il 2x + y − 4 < 0 ?', r:'2 × 3 + 1 − 4 = 3, qui n\'est pas négatif : <b>non</b>.'}],
 chk:[['3+2*2','7'],['3*3-2','7'],['7*3-14','7'],['2+3','5'],['2*2-3','1'],['2*3+1-4<0','false'],['2*0+0-4<0','true']]
},

'1A — Suites arithmétiques': {
 ess:[
  'Une suite est <b>arithmétique</b> quand on passe d\'un terme au suivant en <b>ajoutant toujours le même nombre r</b> (la raison) : Uₙ₊₁ = Uₙ + r.',
  'Exemple : un loyer de 30 000 F qui augmente de 2 000 F chaque année : 30 000 ; 32 000 ; 34 000…',
  'Si r > 0 la suite est croissante ; si r < 0 elle est décroissante.',
  'Pour montrer qu\'une suite est arithmétique, on calcule <b>Uₙ₊₁ − Uₙ</b> et on trouve une constante. Exemple : Uₙ = 4n − 1 donne Uₙ₊₁ − Uₙ = 4.'],
 form:[
  'Uₙ = U₀ + n × r    et plus généralement    <b>Uₙ = U_k + (n − k) × r</b>',
  'Somme de termes consécutifs :    <b>S = (nombre de termes) × {premier + dernier¦2}</b>',
  '1 + 2 + 3 + … + n = {n(n + 1)¦2}'],
 ex:{q:'Une suite arithmétique vérifie U₃ = 11 et U₇ = 23. Trouver r, U₀ et U₁₀.',
  st:['Entre le rang 3 et le rang 7, il y a 4 « pas » : r = {23 − 11¦7 − 3} = {12¦4} = 3.',
      'U₀ = U₃ − 3r = 11 − 9 = 2.',
      'U₁₀ = U₀ + 10r = 2 + 30 = 32.'],
  r:'<b>r = 3 ; U₀ = 2 ; U₁₀ = 32</b>'},
 pieges:[
  'Se tromper dans le nombre de pas : de U₃ à U₇, c\'est 7 − 3 = 4 pas.',
  'Compter mal le nombre de termes d\'une somme : de U₀ à U₁₉, il y a <b>20</b> termes.',
  'Confondre « raison » (on ajoute) et raison d\'une suite géométrique (on multiplie).',
  'Appliquer U₀ + n × r quand la suite commence à U₁ : dans ce cas, U₁ + (n − 1) × r.'],
 mini:[
  {q:'U₀ = 5 et r = 3. Calcule U₂₀.', r:'U₂₀ = 5 + 20 × 3 = <b>65</b>.'},
  {q:'Calcule 1 + 2 + 3 + … + 100.', r:'100 × {1 + 100¦2} = <b>5 050</b>.'}],
 chk:[['(23-11)/(7-3)','3'],['11-3*3','2'],['2+10*3','32'],['2+7*3','23'],['5+20*3','65'],['100*(1+100)/2','5050'],['30000+5*2000','40000']]
},

'1A — Suites géométriques': {
 ess:[
  'Une suite est <b>géométrique</b> quand on passe d\'un terme au suivant en <b>multipliant toujours par le même nombre q</b> (la raison) : Uₙ₊₁ = q × Uₙ.',
  'Exemple : 2 ; 6 ; 18 ; 54… (on multiplie par 3). Un capital placé à 10 % par an est multiplié par 1,1 chaque année.',
  'Si le premier terme est positif : q > 1 donne une suite croissante, 0 < q < 1 une suite décroissante, q < 0 une suite alternée (les signes changent).',
  'Pour montrer qu\'une suite est géométrique, on calcule le quotient {Uₙ₊₁¦Uₙ} et on trouve une constante.'],
 form:[
  'Uₙ = U₀ × qⁿ    et plus généralement    <b>Uₙ = U_k × qⁿ⁻ᵏ</b>',
  'Somme de n termes consécutifs, si q ≠ 1 :    <b>S = (premier terme) × {1 − qⁿ¦1 − q}</b>',
  'Si q = 1, tous les termes sont égaux : S = n × (premier terme).'],
 ex:{q:'Une suite géométrique vérifie U₃ = 12 et U₆ = 96. Trouver q, puis U₈.',
  st:['De U₃ à U₆ on multiplie 3 fois par q : q³ = {96¦12} = 8.',
      'Donc q = 2 (car 2³ = 8).',
      'U₈ = U₆ × q² = 96 × 4 = 384.'],
  r:'<b>q = 2 et U₈ = 384</b>'},
 pieges:[
  'Confondre raison arithmétique (on ajoute) et raison géométrique (on multiplie).',
  'Oublier que l\'exposant est le <b>nombre de pas</b> : de U₃ à U₆, c\'est q³ (et non q⁶).',
  'Dans la somme, écrire n au lieu de qⁿ, ou se tromper sur le nombre de termes.',
  'Pour une hausse de 10 %, multiplier par 0,1 au lieu de <b>1,1</b>.'],
 mini:[
  {q:'U₀ = 3 et q = 2. Calcule la somme des 6 premiers termes.', r:'S = 3 × {1 − 2⁶¦1 − 2} = 3 × 63 = <b>189</b>.'},
  {q:'On place 100 000 F à 10 % par an (intérêts composés). Combien après 2 ans ?', r:'100 000 × 1,1² = <b>121 000 F</b>.'}],
 chk:[['96/12','8'],['2**3','8'],['96*2**2','384'],['12*2**5','384'],['3*(1-2**6)/(1-2)','189'],['3+6+12+24+48+96','189'],['100000*1.1**2','121000']]
},

'1A — Statistique': {
 ess:[
  'Un caractère est <b>quantitatif</b> si ses valeurs sont des nombres (la taille, la note) et <b>qualitatif</b> sinon (la couleur des yeux, la ville).',
  'Pour une série regroupée en classes, on utilise le <b>centre</b> de chaque classe : milieu de [10 ; 20[ = 15. On la représente par un <b>histogramme</b>.',
  'Mesures de position : <b>moyenne</b>, <b>mode</b> (valeur ou classe d\'effectif maximal) et <b>médiane</b> (elle coupe la série ordonnée en deux groupes de même effectif).',
  'Mesures de dispersion : <b>variance</b> V (moyenne des carrés des écarts à la moyenne) et <b>écart-type</b> σ = √V.',
  'L\'effectif cumulé croissant d\'une classe est la somme des effectifs de cette classe et des précédentes. La fréquence cumulée croissante de la dernière classe vaut 1 (100 %).'],
 form:[
  'Moyenne : x̄ = {n₁x₁ + n₂x₂ + … + n_px_p¦N}  (N = effectif total)',
  'Variance : V = {n₁(x₁ − x̄)² + … + n_p(x_p − x̄)²¦N}  =  (moyenne des carrés) − x̄²',
  'Écart-type : σ = √V'],
 ex:{q:'Classes [0 ; 10[ (effectif 4), [10 ; 20[ (6), [20 ; 30[ (10). Calculer la moyenne et la variance.',
  st:['N = 4 + 6 + 10 = 20 ; les centres sont 5, 15 et 25.',
      'Moyenne : x̄ = {5 × 4 + 15 × 6 + 25 × 10¦20} = {360¦20} = 18.',
      'Écarts à la moyenne : 5 − 18 = −13 ; 15 − 18 = −3 ; 25 − 18 = 7.',
      'Variance : V = {13² × 4 + 3² × 6 + 7² × 10¦20} = {1 220¦20} = 61, donc σ = √61 ≈ 7,8.'],
  r:'<b>x̄ = 18 ; V = 61</b>. (Médiane = 20 ; classe modale [20 ; 30[.)'},
 pieges:[
  'Prendre une borne de la classe au lieu de son <b>centre</b>.',
  'Oublier de multiplier par les effectifs.',
  'Oublier la racine carrée : l\'écart-type est √V, pas V.',
  'Médiane d\'un nombre pair de valeurs : on fait la moyenne des deux valeurs du milieu.'],
 mini:[
  {q:'Donne la médiane de 3 ; 5 ; 7 ; 9 ; 12.', r:'5 valeurs rangées : la 3e est au milieu, <b>médiane = 7</b>.'},
  {q:'Calcule la variance de 2 ; 4 ; 6 ; 8 ; 10.', r:'Moyenne 6 ; écarts −4, −2, 0, 2, 4 ; V = {16 + 4 + 0 + 4 + 16¦5} = <b>8</b>.'}],
 chk:[['(5*4+15*6+25*10)/20','18'],['(169*4+9*6+49*10)/20','61'],['(25*4+225*6+625*10)/20-18*18','61'],['(2+4+6+8+10)/5','6'],['(16+4+0+4+16)/5','8'],['(4+16+36+64+100)/5-36','8']]
},

'1A — Dénombrement': {
 ess:[
  'Pour <b>compter</b>, on se demande toujours : « est-ce que l\'<b>ordre</b> compte ? » et « les <b>répétitions</b> sont-elles permises ? ».',
  '<b>Avec répétition</b> : un code de 3 chiffres (0 à 9) donne 10 × 10 × 10 = 10³ = 1 000 possibilités (p-uplets : nᵖ).',
  '<b>Ordre important, sans répétition</b> (arrangements) : choisir un président puis un secrétaire parmi 6 personnes : 6 × 5 = 30.',
  '<b>Ordre sans importance</b> (combinaisons) : choisir un comité de 3 personnes parmi 8.',
  'Ranger n objets différents en file (permutations) : n! façons. Complémentaire : Card(A̅) = Card(E) − Card(A). Produit : Card(A × B) = Card(A) × Card(B).'],
 form:[
  'n! = n × (n − 1) × … × 2 × 1  (4! = 24)',
  'Arrangements de p éléments parmi n : Aₙᵖ = n(n − 1)…(n − p + 1) = {n!¦(n − p)!}',
  'Combinaisons de p éléments parmi n : Cₙᵖ = {n!¦p!(n − p)!} = {Aₙᵖ¦p!}',
  'Exemples : A₅² = 5 × 4 = 20 ; C₅² = {5 × 4¦2} = 10.'],
 ex:{q:'Dans une classe de 8 élèves, on choisit un comité de 3 élèves. Puis, parmi 6 élèves, on choisit un président et un secrétaire. Combien de choix dans chaque cas ?',
  st:['Comité : l\'ordre ne compte pas, c\'est une <b>combinaison</b> : C₈³ = {8 × 7 × 6¦3 × 2 × 1} = {336¦6} = 56.',
      'Président et secrétaire : l\'ordre compte (les rôles sont différents), c\'est un <b>arrangement</b> : A₆² = 6 × 5 = 30.'],
  r:'Comité : <b>56</b> ; président et secrétaire : <b>30</b>.'},
 pieges:[
  'Confondre arrangement et combinaison : un arrangement compte l\'ordre, une combinaison non.',
  'Oublier que C₈³ se divise par 3! (sinon on trouve 336 au lieu de 56).',
  'Écrire n! = n × n × … au lieu de n × (n − 1) × …',
  'Penser que 0! = 0 : en fait 0! = 1, et par convention Aₙ⁰ = 1.'],
 mini:[
  {q:'Combien de codes à 3 chiffres (0 à 9, répétitions permises) ?', r:'10³ = <b>1 000</b>.'},
  {q:'De combien de façons ranger 5 livres différents sur une étagère ?', r:'5! = <b>120</b>.'}],
 chk:[['8*7*6/(3*2*1)','56'],['6*5','30'],['5*4','20'],['5*4/2','10'],['10**3','1000'],['5*4*3*2*1','120'],['4*3*2*1','24']]
},

'1A — Fonctions : parité, symétrie, périodicité & fonctions associées': {
 ess:[
  'Pour étudier la parité, le domaine doit être <b>symétrique par rapport à 0</b> (si x est dedans, −x aussi).',
  'f est <b>paire</b> si f(−x) = f(x) : la courbe est symétrique par rapport à l\'<b>axe des ordonnées</b>. Exemple : x ↦ x² + 1.',
  'f est <b>impaire</b> si f(−x) = −f(x) : la courbe est symétrique par rapport à l\'<b>origine</b>. Exemple : x ↦ x³.',
  'f est <b>périodique</b> de période T si f(x + T) = f(x). Exemple : cos a pour période 2π.',
  'Fonctions associées : les courbes de −f(x), f(−x) et −f(−x) sont les symétriques de celle de f par rapport à (Ox), (Oy) et O.'],
 form:[
  'Axe de symétrie x = a : <b>f(a + h) = f(a − h)</b> pour tout h admissible.',
  'Centre de symétrie Ω(a ; b) : <b>{f(a + h) + f(a − h)¦2} = b</b>.',
  'Courbe de |f| : on garde ce qui est au-dessus de (Ox) et on <b>retourne</b> ce qui est en dessous (symétrie par rapport à (Ox)).'],
 ex:{q:'Étudier la parité de f(x) = x³ − x.',
  st:['Le domaine est ℝ : il est symétrique par rapport à 0.',
      'On calcule f(−x) = (−x)³ − (−x) = −x³ + x.',
      'On compare : −f(x) = −x³ + x, donc f(−x) = −f(x).'],
  r:'f est <b>impaire</b> : sa courbe est symétrique par rapport à l\'origine.'},
 pieges:[
  'Oublier de vérifier que le domaine est symétrique par rapport à 0.',
  'Conclure « ni paire ni impaire » sans contre-exemple : pour x² + x, f(−1) = 0 et f(1) = 2.',
  'Confondre paire (axe des ordonnées) et impaire (origine).',
  'Penser que x² + 1 est impaire parce qu\'elle contient « 1 » : f(−x) = f(x), elle est paire.'],
 mini:[
  {q:'La fonction x ↦ x² + x est-elle paire, impaire ou ni l\'une ni l\'autre ?', r:'f(1) = 2, f(−1) = 0 : <b>ni paire ni impaire</b>.'},
  {q:'La courbe de x ↦ f(−x) est symétrique de celle de f par rapport à quoi ?', r:'À <b>l\'axe des ordonnées</b>.'}],
 chk:[['(-2)**3-(-2)','-6'],['2**3-2','6'],['(-1)**2+(-1)','0'],['1**2+1','2'],['(-3)**2+1','3**2+1']]
},

'1A — Limites & continuité': {
 ess:[
  'Dire que f a pour limite l en a, c\'est dire que f(x) se rapproche de l quand x se rapproche de a.',
  'Une fonction est <b>continue en a</b> si elle est définie en a et admet une limite en a ; cette limite est alors f(a). Sur le graphique : on peut tracer la courbe sans lever le crayon.',
  'Les polynômes, les fonctions rationnelles, √x et la valeur absolue sont continues en tout point de leur domaine.',
  'Les limites de sommes, de produits et de quotients se calculent avec les limites de chaque fonction. Quand on tombe sur {0¦0}, on <b>factorise et on simplifie</b>.',
  'Limite d\'un polynôme en ±∞ : celle de son <b>terme de plus haut degré</b>. Limite d\'une fraction rationnelle en ±∞ : celle du quotient des termes de plus haut degré.'],
 form:[
  'lim 1/(x − a)ⁿ en a : pour n pair, +∞ ; pour n impair, +∞ à droite de a (x > a) et −∞ à gauche (x < a).',
  'Limite infinie en a : la droite x = a est une <b>asymptote verticale</b>.',
  'Limite b en +∞ : la droite y = b est une <b>asymptote horizontale</b>.'],
 ex:{q:'Calculer la limite en 2 de {x² − 4¦x − 2}.',
  st:['En remplaçant x par 2, on obtient {0¦0} : on ne peut pas conclure.',
      'On factorise : x² − 4 = (x − 2)(x + 2).',
      'Pour x ≠ 2, {(x − 2)(x + 2)¦x − 2} = x + 2.',
      'Quand x tend vers 2, x + 2 tend vers 4.'],
  r:'La limite est <b>4</b>.'},
 pieges:[
  'Remplacer x par a quand cela donne {0¦0} et écrire « 0 » : il faut factoriser.',
  'Oublier de distinguer la gauche et la droite quand l\'exposant est impair.',
  'Croire qu\'une fonction non définie en a ne peut pas avoir de limite en a : elle peut en avoir une.',
  'En +∞, ne garder que le terme de plus haut degré, pas toute l\'expression.'],
 mini:[
  {q:'Calcule la limite en +∞ de {2x² + 1¦x² − 3}.', r:'Termes de plus haut degré : {2x²¦x²} = 2. Limite : <b>2</b>.'},
  {q:'Quelle est la limite de {1¦x − 3} quand x tend vers 3 par valeurs supérieures ?', r:'x − 3 est positif et tend vers 0 : la limite est <b>+∞</b>.'}],
 chk:[['(2.0001**2-4)/(2.0001-2)','4.0001'],['2+2','4'],['(2*1e6**2+1)/(1e6**2-3)','2']]
},

'1A — Dérivation & sens de variation': {
 ess:[
  'Le <b>nombre dérivé</b> f′(x₀) est la limite du taux de variation {f(x) − f(x₀)¦x − x₀} quand x tend vers x₀. C\'est la <b>pente de la tangente</b> en x₀.',
  'Si f est dérivable en un point, elle y est <b>continue</b>. La réciproque est fausse (exemple : |x| en 0).',
  'Le signe de f′ donne les variations : <b>f′ ≥ 0</b> sur un intervalle : f croissante ; <b>f′ ≤ 0</b> : f décroissante.',
  'Si f′ s\'annule en x₀ <b>en changeant de signe</b>, f a un extremum (maximum ou minimum) en x₀.',
  'On dresse un tableau : signe de f′, flèches, valeurs de f.'],
 form:[
  '(xⁿ)′ = n xⁿ⁻¹    (x²)′ = 2x    (x³)′ = 3x²    (1/x)′ = −{1¦x²}    (√x)′ = {1¦2√x} (pour x > 0 seulement)',
  '(u + v)′ = u′ + v′    (k·u)′ = k·u′    <b>(uv)′ = u′v + uv′</b>',
  '<b>({u¦v})′ = {u′v − uv′¦v²}</b>',
  'Si f(x) = g(αx + β), alors <b>f′(a) = α × g′(αa + β)</b>. Exemple : f(x) = (x + 3)² donne f′(x) = 2(x + 3).',
  'Tangente en x₀ : <b>y = f′(x₀)(x − x₀) + f(x₀)</b>'],
 ex:{q:'Étudier les variations de f(x) = 3x² − 6x + 1.',
  st:['f′(x) = 3 × 2x − 6 = 6x − 6.',
      'f′(x) = 0 pour x = 1. Si x < 1, f′ < 0 ; si x > 1, f′ > 0.',
      'f est donc décroissante sur ]−∞ ; 1] et croissante sur [1 ; +∞[.',
      'Valeur au changement : f(1) = 3 − 6 + 1 = −2.'],
  r:'f admet un <b>minimum égal à −2, atteint en x = 1</b>.'},
 pieges:[
  'Dériver un produit en écrivant (uv)′ = u′ × v′ : c\'est faux, c\'est u′v + uv′.',
  'Dans le quotient, inverser l\'ordre au numérateur : c\'est u′v − uv′.',
  'Confondre f′(x₀) = 0 avec un extremum : il faut que f′ change de signe.',
  'Oublier de dériver la constante : sa dérivée est 0.'],
 mini:[
  {q:'Dérive f(x) = {x + 1¦x − 1}.', r:'u = x + 1, v = x − 1 : f′(x) = {1 × (x − 1) − (x + 1) × 1¦(x − 1)²} = <b>{−2¦(x − 1)²}</b>.'},
  {q:'Donne l\'équation de la tangente à f(x) = x² en x₀ = 1.', r:'f(1) = 1, f′(1) = 2 : y = 2(x − 1) + 1, soit <b>y = 2x − 1</b>.'}],
 chk:[['6*1-6','0'],['3*1**2-6*1+1','-2'],['3*0**2-6*0+1','1'],['(1*(3-1)-(3+1)*1)/(3-1)**2','-0.5'],['2*(3-1)+1','2*3-1']]
},

'1A — Étude de fonctions & représentations graphiques': {
 ess:[
  'Pour étudier une fonction : <b>domaine</b>, <b>limites</b> aux bornes, <b>dérivée</b> et son signe, <b>tableau de variations</b>, puis courbe.',
  '<b>Fonction ax² + bx + c</b> : courbe = parabole. Sommet d\'abscisse {−b¦2a}. Si a > 0 : minimum au sommet ; si a < 0 : maximum. L\'axe de symétrie est la droite x = {−b¦2a}.',
  '<b>Fonction inverse x ↦ {1¦x}</b> : définie sur ℝ privé de 0, décroissante sur chacun des intervalles ]−∞ ; 0[ et ]0 ; +∞[. Sa courbe est une <b>hyperbole</b> d\'asymptotes les axes.',
  '<b>Fonction √x</b> : définie sur [0 ; +∞[, strictement croissante.',
  '<b>Fonction homographique</b> {ax + b¦cx + d} (c ≠ 0) : hyperbole d\'asymptotes x = {−d¦c} et y = {a¦c} ; le centre de symétrie est leur point d\'intersection.'],
 form:[
  'Asymptote verticale : x = {−d¦c}.    Asymptote horizontale : y = {a¦c}.',
  'Centre de symétrie de {ax + b¦cx + d} : Ω({−d¦c} ; {a¦c}).'],
 ex:{q:'Étudier f(x) = {x + 1¦x − 1}.',
  st:['Domaine : x − 1 ≠ 0, donc ℝ \\ {1}.',
      'Asymptotes : x = 1 (valeur interdite) et y = {1¦1} = 1.',
      'Dérivée : f′(x) = {1 × (x − 1) − (x + 1) × 1¦(x − 1)²} = {−2¦(x − 1)²}, toujours négative.',
      'Donc f est décroissante sur ]−∞ ; 1[ et sur ]1 ; +∞[. Le centre de symétrie est (1 ; 1).'],
  r:'f est <b>décroissante sur chacun des deux intervalles</b> de son domaine, d\'asymptotes <b>x = 1</b> et <b>y = 1</b>.'},
 pieges:[
  'Écrire « f décroissante sur ℝ \\ {1} » : la décroissance se dit intervalle par intervalle.',
  'Oublier de chercher les valeurs interdites dans le domaine.',
  'Confondre asymptote verticale (valeur interdite) et horizontale (limite en l\'infini).',
  'Donner le sommet par son abscisse seulement : il faut aussi calculer l\'ordonnée.'],
 mini:[
  {q:'Donne le sommet de la parabole y = x² − 4x + 3.', r:'Abscisse {4¦2} = 2 ; ordonnée 4 − 8 + 3 = −1. <b>Sommet (2 ; −1)</b>.'},
  {q:'Quelles sont les asymptotes de la courbe de x ↦ {1¦x} ?', r:'Les deux axes : <b>x = 0 et y = 0</b>.'}],
 chk:[['(3+1)/(3-1)','2'],['-2/(3-1)**2','-0.5'],['(1e12+1)/(1e12-1)','1'],['4-8+3','-1'],['4/2','2'],['((2+1)/1+(2-1)/(-1))/2','1']]
},

'1A — Prop. & Déf.': { memo:true }
});
