/* ===== Résumés de cours — Terminale A (guides Tle A1 et A2/B) =====
   Balisage : <b>…</b> ; fraction {numérateur¦dénominateur}. */
window.MQ_COURS = window.MQ_COURS || {};
window.MQ_COURS['Tle A'] = Object.assign(window.MQ_COURS['Tle A'] || {}, {

'TleA — Parité & éléments de symétrie': {
 ess:[
  'Une fonction f est <b>paire</b> si, pour tout x de son ensemble de définition, <b>−x</b> y est aussi et <b>f(−x) = f(x)</b>. Sa courbe est symétrique par rapport à <b>l\'axe des ordonnées</b>.',
  'Une fonction f est <b>impaire</b> si, pour tout x de son ensemble de définition, −x y est aussi et <b>f(−x) = −f(x)</b>. Sa courbe est symétrique par rapport à <b>l\'origine</b> du repère.',
  'Avant de tester la parité, regarde le domaine : il doit être <b>symétrique par rapport à 0</b> (si x y est, −x aussi). Exemple : ]−∞ ; 3] ne convient pas.',
  'Pour prouver qu\'une courbe a un axe ou un centre de symétrie, on compare les points situés à la même distance h de part et d\'autre de a.'],
 form:[
  'Axe de symétrie x = a : pour tout h tel que a + h ∈ Df, on a a − h ∈ Df et <b>f(a − h) = f(a + h)</b>.',
  'Centre de symétrie Ω(a ; b) : a − h ∈ Df et <b>{f(a + h) + f(a − h)¦2} = b</b>.'],
 ex:{q:'Montrer que f(x) = x⁴ − 3x² + 1 est paire.',
  st:['Le domaine est ℝ : il est symétrique par rapport à 0.',
      'On calcule f(−x) = (−x)⁴ − 3(−x)² + 1.',
      'Or (−x)⁴ = x⁴ et (−x)² = x², donc f(−x) = x⁴ − 3x² + 1 = f(x).'],
  r:'f(−x) = f(x) : <b>f est paire</b>, sa courbe est symétrique par rapport à l\'axe des ordonnées.'},
 pieges:[
  'Beaucoup de fonctions ne sont <b>ni paires ni impaires</b> : par exemple f(x) = x² + x.',
  'On ne prouve pas la parité avec un seul exemple numérique : il faut le faire pour <b>tout x</b>.',
  'Oublier de vérifier que le domaine est symétrique.',
  'Un polynôme n\'ayant que des puissances paires (x⁴, x², constante) est pair ; que des puissances impaires (x³, x) est impair ; un mélange (x² + x) n\'est en général ni l\'un ni l\'autre.'],
 mini:[
  {q:'f(x) = x³ + x est-elle paire, impaire ou ni l\'une ni l\'autre ?', r:'f(−x) = −x³ − x = −f(x) : <b>impaire</b>.'},
  {q:'Quel est un axe de symétrie de la courbe de f(x) = (x − 2)² ?', r:'f(2 − h) = f(2 + h) = h² : la droite <b>x = 2</b>.'}],
 chk:[['(-1)**4-3*(-1)**2+1','1**4-3*1**2+1'],['(-1)**2+(-1)===1**2+1','false'],['(-2)**4-3*(-2)**2+1','2**4-3*2**2+1'],['(-3)**4-3*(-3)**2+1','3**4-3*3**2+1'],['(-2)**3+(-2)','-(2**3+2)'],['(-1-2)**2','(5-2)**2'],['(2-3-2)**2','(2+3-2)**2']]
},

'TleA — Limites & continuité': {
 ess:[
  'Limites à connaître : en +∞, <b>{1¦x} → 0</b>, x² → +∞, x³ → +∞, √x → +∞ ; en −∞, x² → +∞ et <b>x³ → −∞</b>. Une limite, quand elle existe, est <b>unique</b>.',
  '<b>Polynôme</b> à l\'infini : même limite que son monôme de plus haut degré. Ex. 2x² − 3x + 1 se comporte comme 2x², donc tend vers +∞.',
  '<b>Fraction rationnelle</b> à l\'infini : même limite que le quotient des monômes de plus haut degré. Ex. {3x² + 1¦x² − 5} se comporte comme {3x²¦x²} = 3.',
  'Quand x tend vers x₀ et que le dénominateur tend vers 0, on regarde son <b>signe</b> : {1¦x − 2} → +∞ si x tend vers 2 par valeurs supérieures, et → −∞ par valeurs inférieures.',
  '<b>Formes indéterminées</b> : (+∞) + (−∞) ; (+∞) × 0 ; {∞¦∞} ; {0¦0}. Il faut transformer l\'écriture (factoriser, simplifier).',
  'Une fonction est <b>continue</b> sur un intervalle si on trace sa courbe sans lever le crayon. Une fonction dérivable sur un intervalle y est continue.'],
 form:[
  '(+∞) + (+∞) = +∞    (−∞) + (−∞) = −∞',
  'Polynôme : on garde le terme de plus haut degré.    Fraction : on garde le quotient des termes de plus haut degré.'],
 ex:{q:'Calculer la limite de f(x) = {2x + 1¦x − 3} en +∞, puis quand x tend vers 3 par valeurs supérieures.',
  st:['En +∞ : on garde {2x¦x} = 2. La limite est 2.',
      'En 3 : le numérateur tend vers 2 × 3 + 1 = 7 (positif).',
      'Le dénominateur x − 3 tend vers 0 en restant positif (x > 3).',
      '7 divisé par un très petit nombre positif donne un très grand nombre positif.'],
  r:'Limite en +∞ : <b>2</b> ; limite en 3 par valeurs supérieures : <b>+∞</b>.'},
 pieges:[
  'Écrire « +∞ − ∞ = 0 » : c\'est une forme indéterminée, pas zéro.',
  'Oublier le signe du dénominateur quand il tend vers 0 (on obtient +∞ ou −∞ selon le côté).',
  'Garder tous les termes d\'un polynôme à l\'infini : seul le plus haut degré compte.',
  'En −∞, x³ tend vers −∞ (et non +∞) car un nombre négatif au cube reste négatif.'],
 mini:[
  {q:'Limite de {x² − 1¦x − 1} quand x tend vers 1 ?', r:'On simplifie : {(x − 1)(x + 1)¦x − 1} = x + 1, qui tend vers <b>2</b>.'},
  {q:'Limite de x³ − x en −∞ ?', r:'On garde x³ : la limite est <b>−∞</b>.'}],
 chk:[['(2*1e12+1)/(1e12-3)','2'],['2*3+1','7'],['(5**2-1)/(5-1)','5+1'],['(-7)**2-1','(-7-1)*(-7+1)'],['(-1e3)**3-(-1e3)<0','true'],['(0.5**2-1)/(0.5-1)','0.5+1']]
},

'TleA — Dérivation & sens de variation': {
 ess:[
  'La dérivée f′ donne le <b>sens de variation</b> : si f′ ≥ 0 sur un intervalle ouvert K, f est <b>croissante</b> ; si f′ ≤ 0, f est <b>décroissante</b> ; si f′ = 0, f est <b>constante</b>.',
  'Si f′ s\'annule en x₀ <b>en changeant de signe</b>, f admet en x₀ un <b>extremum relatif</b> (maximum si on passe de + à −, minimum si on passe de − à +).',
  'La <b>tangente</b> à la courbe au point d\'abscisse x₀ a pour équation <b>y = f′(x₀)(x − x₀) + f(x₀)</b>.'],
 form:[
  '(xⁿ)′ = n xⁿ⁻¹    (√x)′ = {1¦2√x}    ({1¦x})′ = {−1¦x²}    (ln x)′ = {1¦x}    (eˣ)′ = eˣ',
  '(u + v)′ = u′ + v′    (k u)′ = k u′    (u v)′ = u′v + u v′    ({u¦v})′ = {u′v − u v′¦v²}',
  'x ↦ u(ax + b) a pour dérivée <b>x ↦ a × u′(ax + b)</b>. Ex. ((3x + 1)⁵)′ = 15(3x + 1)⁴.'],
 ex:{q:'Étudier les variations de f(x) = x³ − 3x.',
  st:['f′(x) = 3x² − 3 = 3(x − 1)(x + 1).',
      'f′ s\'annule en −1 et en 1. Elle est positive à l\'extérieur des racines et négative entre elles.',
      'Donc f croît sur ]−∞ ; −1], décroît sur [−1 ; 1] et croît sur [1 ; +∞[.',
      'f(−1) = −1 + 3 = 2 et f(1) = 1 − 3 = −2.'],
  r:'<b>Maximum relatif 2 en x = −1 ; minimum relatif −2 en x = 1.</b>'},
 pieges:[
  'Dériver un produit en faisant (uv)′ = u′v′ : c\'est faux, il faut u′v + uv′.',
  'Oublier le facteur a pour u(ax + b) : la dérivée de (3x + 1)⁵ n\'est pas 5(3x + 1)⁴.',
  'Croire que f′(x₀) = 0 suffit pour avoir un extremum : il faut aussi que f′ <b>change de signe</b>.',
  'Écrire la tangente en échangeant f(x₀) et f′(x₀).'],
 mini:[
  {q:'Équation de la tangente à la courbe de f(x) = x² au point d\'abscisse 1 ?', r:'f′(x) = 2x donc f′(1) = 2, et f(1) = 1 : y = 2(x − 1) + 1, soit <b>y = 2x − 1</b>.'},
  {q:'Dérivée de x ↦ (3x + 1)⁵ ?', r:'a = 3 : <b>15(3x + 1)⁴</b>.'}],
 chk:[['3*(-1)**2-3','0'],['3*1**2-3','0'],['(-1)**3-3*(-1)','2'],['1**3-3*1','-2'],['2*1*(1-1)+1','2*1-1'],['3*5*(3*2+1)**4/5','3*(3*2+1)**4']]
},

'TleA — Fonctions polynômes, homographiques & asymptotes': {
 ess:[
  'Une fonction <b>homographique</b> s\'écrit f(x) = {ax + b¦cx + d} (c ≠ 0, ad − bc ≠ 0). Son domaine exclut la valeur qui annule le dénominateur.',
  'Sa courbe a <b>deux asymptotes</b> : la verticale x = −{d¦c} et l\'horizontale y = {a¦c}. Leur point d\'intersection (−{d¦c} ; {a¦c}) est le <b>centre de symétrie</b> de la courbe.',
  '<b>Asymptote horizontale</b> y = l : f a pour limite l en +∞ ou −∞. <b>Asymptote verticale</b> x = x₀ : f a une limite infinie en x₀ (à droite ou à gauche). <b>Asymptote oblique</b> y = ax + b : f(x) − (ax + b) tend vers 0 en +∞ ou −∞.',
  '<b>Position relative</b> de (Cf) et (Cg) : on étudie le signe de f(x) − g(x). Si c\'est négatif, (Cf) est en dessous de (Cg) ; si c\'est nul, elles se coupent.',
  'Étude d\'une fonction : domaine, limites, dérivée, signe de la dérivée, tableau de variations, tracé.'],
 form:[
  'Dérivée d\'une homographique : <b>f′(x) = {ad − bc¦(cx + d)²}</b> : son signe est celui de ad − bc.',
  'Polynôme : (x³ − 3x² + 2)′ = 3x² − 6x (on dérive terme à terme).'],
 ex:{q:'Étudier f(x) = {2x + 1¦x − 3} : domaine, asymptotes, sens de variation.',
  st:['Le dénominateur s\'annule en 3 : domaine ℝ privé de 3.',
      'En ±∞ : {2x¦x} = 2, donc asymptote horizontale y = 2.',
      'En 3 : le numérateur tend vers 7 et le dénominateur vers 0 : limite infinie, donc asymptote verticale x = 3.',
      'ad − bc = 2 × (−3) − 1 × 1 = −7, donc f′(x) = {−7¦(x − 3)²} < 0.'],
  r:'Asymptotes <b>x = 3</b> et <b>y = 2</b> ; f est <b>strictement décroissante</b> sur ]−∞ ; 3[ et sur ]3 ; +∞[ ; centre de symétrie (3 ; 2).'},
 pieges:[
  'Dire que f est décroissante sur « ℝ privé de 3 » : on le dit sur <b>chaque intervalle</b> séparément.',
  'Confondre asymptote verticale (valeur interdite) et horizontale (limite à l\'infini).',
  'Se tromper dans ad − bc : c\'est a × d − b × c, avec le signe de d tel qu\'il est écrit dans cx + d.'],
 mini:[
  {q:'Centre de symétrie de f(x) = {x + 1¦x − 2} ?', r:'x = 2 est l\'asymptote verticale et y = {1¦1} = 1 l\'horizontale : <b>(2 ; 1)</b>.'},
  {q:'Position de la courbe de f(x) = x² par rapport à celle de g(x) = x sur ]0 ; 1[ ?', r:'f(x) − g(x) = x(x − 1) < 0 : (Cf) est <b>en dessous</b> de (Cg).'}],
 chk:[['2*(-3)-1*1','-7'],['(2*1e12+1)/(1e12-3)','2'],['0.5**2-0.5<0','true'],['2**2-2>0','true'],['-1*(1/1)','-1'],['1*(-2)-1*1','-3'],['(2*5+1)/(5-3)','5.5'],['(f=>(f(5+1e-5)-f(5-1e-5))/2e-5)(x=>(2*x+1)/(x-3))','-7/(5-3)**2']]
},

'TleA — Fonction logarithme népérien': {
 ess:[
  'La fonction <b>ln</b> est définie sur <b>]0 ; +∞[</b>, s\'annule en 1 et a pour dérivée x ↦ {1¦x}. Elle est croissante et réalise une bijection de ]0 ; +∞[ sur ℝ.',
  'Le nombre <b>e</b> (≈ 2,718) est l\'unique nombre tel que <b>ln e = 1</b>.',
  'Pour a > 0 et b > 0 : ln a = ln b équivaut à a = b ; ln a < ln b équivaut à a < b (ln conserve l\'ordre).',
  'Limites : ln x → +∞ en +∞ ; ln x → −∞ en 0 (x > 0) ; {ln x¦x} → 0 en +∞ ; x ln x → 0 en 0 (x > 0).',
  'Dérivée de x ↦ ln(ax + b) : {a¦ax + b}.'],
 form:[
  'ln(a × b) = ln a + ln b    ln({a¦b}) = ln a − ln b    ln({1¦a}) = −ln a',
  'ln(aʳ) = r ln a    ln(√a) = {1¦2} ln a        (a > 0, b > 0)'],
 ex:{q:'Écrire A = ln 12 − ln 3 + ln 2 sous la forme k ln 2.',
  st:['ln 12 − ln 3 = ln({12¦3}) = ln 4.',
      'ln 4 = ln(2²) = 2 ln 2.',
      'A = 2 ln 2 + ln 2.'],
  r:'A = <b>3 ln 2</b>'},
 pieges:[
  'ln(a + b) n\'est <b>pas</b> ln a + ln b : seul le produit devient une somme.',
  'ln(a − b) ≠ ln a − ln b : c\'est ln({a¦b}) qui vaut ln a − ln b.',
  'Oublier le domaine : ln(3 − x) n\'existe que si 3 − x > 0, c\'est-à-dire x < 3.',
  'ln x < 0 ne veut pas dire x < 0 : ln x < 0 équivaut à 0 < x < 1.'],
 mini:[
  {q:'Résoudre ln(x − 2) = 0.', r:'Il faut x > 2. ln(x − 2) = ln 1 donc x − 2 = 1 : <b>x = 3</b>.'},
  {q:'Dérivée de x ↦ ln(2x + 1) ?', r:'a = 2 et b = 1 : <b>{2¦2x + 1}</b>.'}],
 chk:[['Math.log(12)-Math.log(3)+Math.log(2)','3*Math.log(2)'],['Math.log(12/3)','2*Math.log(2)'],['3-2','1'],['Math.log(3-2)','0'],['Math.log(Math.E)','1']]
},

'TleA — Fonction exponentielle népérienne': {
 ess:[
  'La fonction <b>exponentielle</b> est la <b>réciproque de ln</b> : pour b > 0, b = eᵃ équivaut à <b>a = ln b</b>.',
  'Pour tout réel a : <b>eᵃ > 0</b>, ln(eᵃ) = a. Pour tout a > 0 : e^(ln a) = a.',
  'eᵃ = eᵇ équivaut à a = b ; eᵃ < eᵇ équivaut à a < b.',
  'Limites : eˣ → 0 en −∞ (l\'axe des abscisses est asymptote) ; eˣ → +∞ en +∞.',
  'Dérivées : (eˣ)′ = eˣ et (e^(ax + b))′ = a e^(ax + b).'],
 form:[
  'e^(a + b) = eᵃ × eᵇ    e^(−a) = {1¦eᵃ}    e^(a − b) = {eᵃ¦eᵇ}    (eᵃ)ⁿ = e^(na)',
  'e⁰ = 1 et e¹ = e.'],
 ex:{q:'Résoudre e^(2x) = 5.',
  st:['On passe au logarithme : 2x = ln 5.',
      'On divise par 2.'],
  r:'x = <b>{ln 5¦2}</b> (≈ 0,80)'},
 pieges:[
  'Écrire e^(a + b) = eᵃ + eᵇ : c\'est faux, c\'est un produit.',
  'Résoudre eˣ = −3 : impossible, car eˣ est toujours strictement positif.',
  'Dériver e^(2x − 1) en e^(2x − 1) : il faut le facteur 2.',
  'Confondre ln x = 2 (x = e²) et eˣ = 2 (x = ln 2).'],
 mini:[
  {q:'Résoudre eˣ > 1.', r:'eˣ > e⁰ donc <b>x > 0</b>.'},
  {q:'Dérivée de x ↦ e^(2x − 1) ?', r:'a = 2 : <b>2 e^(2x − 1)</b>.'}],
 chk:[['Math.exp(2*(Math.log(5)/2))','5'],['Math.log(5)/2','0.8047189562170503'],['Math.log(Math.exp(2))','2'],['Math.exp(0)','1'],['Math.exp(1)>1','true']]
},

'TleA — Équations, inéquations & systèmes': {
 ess:[
  '<b>Premier degré</b> : on isole x. Ex. 2x − 6 > 0 donne x > 3 (on garde le sens quand on divise par un nombre positif ; on le change si on divise par un négatif).',
  '<b>Second degré</b> : on cherche les racines (par factorisation, ex. x² − 5x + 6 = (x − 2)(x − 3) = 0 donne 2 et 3). Le trinôme ax² + bx + c est du signe de a à l\'<b>extérieur</b> des racines et du signe contraire <b>entre</b> les racines.',
  '<b>Système linéaire</b> : par addition ou substitution. Si les inconnues sont 1/x et 1/y, on pose X = {1¦x}, Y = {1¦y}, puis on revient à x et y.',
  'Avec <b>ln</b> : on cherche d\'abord le domaine D, on résout, puis on ne garde que les solutions qui sont dans D. Avec <b>exp</b> : on peut poser X = eˣ (avec X > 0).',
  '<b>Programmation linéaire</b> : on optimise (maximum ou minimum) une expression ax + by sous des contraintes d\'inéquations, en la lisant sur le polygone des solutions tracé.'],
 form:[
  'ln A = ln B ⟺ A = B (avec A > 0, B > 0)        eᴬ < eᴮ ⟺ A < B',
  'qⁿ ≥ k (q > 1) ⟺ n ≥ {ln k¦ln q}'],
 ex:{q:'Résoudre e^(2x) − 3eˣ + 2 = 0.',
  st:['On pose X = eˣ (X > 0) : l\'équation devient X² − 3X + 2 = 0.',
      'X² − 3X + 2 = (X − 1)(X − 2) : X = 1 ou X = 2 (les deux sont > 0).',
      'eˣ = 1 donne x = 0.',
      'eˣ = 2 donne x = ln 2.'],
  r:'S = {0 ; ln 2}'},
 pieges:[
  'Oublier de vérifier le domaine avec ln : ln(x − 1) + ln(x + 1) = ln 8 donne x² − 1 = 8, soit x = 3 ou x = −3 ; on rejette −3 car il faut x > 1.',
  'Inverser le sens de l\'inégalité à tort (ou l\'oublier en divisant par un négatif).',
  'Résoudre x² − 4 < 0 avec « x < 2 » seulement : la solution est −2 < x < 2.',
  'Après avoir posé X = eˣ, oublier de revenir à x.'],
 mini:[
  {q:'Résoudre le système x + y = 10 ; x − y = 2.', r:'On additionne : 2x = 12 donc x = 6, puis y = 4 : <b>x = 6 et y = 4</b>.'},
  {q:'Résoudre x² − 1 ≥ 0.', r:'Racines −1 et 1, signe positif à l\'extérieur : <b>x ≤ −1 ou x ≥ 1</b>.'}],
 chk:[['Math.exp(0)**2-3*Math.exp(0)+2','0'],['Math.exp(2*Math.log(2))-3*2+2','0'],['(1-1)*(1-2)','1**2-3*1+2'],['6+4','10'],['6-4','2'],['(-1)**2-1>=0','true'],['3**2-1','8'],['(-3)**2-1','8'],['Math.log(2)+Math.log(4)','Math.log(8)']]
},

'TleA — Entiers naturels, numération & récurrence': {
 ess:[
  'Un entier s\'écrit <b>de façon unique</b> en base b (b ≥ 2) comme somme de multiples de puissances de b. Bases du programme : <b>2, 8, 10 et 60</b>.',
  '<b>Base b vers base 10</b> : on additionne chiffre × puissance. Ex. 1101001₂ = 64 + 32 + 8 + 1 = 105.',
  '<b>Base 10 vers base b</b> : divisions euclidiennes successives par b ; les restes, lus de bas en haut, sont les chiffres.',
  'Base 60 : 3 725 s = 1 × 3 600 + 2 × 60 + 5, soit 1 h 2 min 5 s.',
  '<b>Récurrence</b> pour démontrer P(n) pour tout n ≥ n₀ : on montre P(n₀) (<b>initialisation</b>), puis P(k) ⟹ P(k + 1) pour tout k ≥ n₀ (<b>hérédité</b>).'],
 form:[
  'Divisible par 2 : dernier chiffre 0, 2, 4, 6 ou 8.    Par 5 : dernier chiffre 0 ou 5.',
  'Divisible par 3 (ou 9) : la somme des chiffres est divisible par 3 (ou 9).',
  'Exemple de récurrence : 1 + 2 + … + n = {n(n + 1)¦2} ; pour n = 1 : 1 = {1 × 2¦2}.'],
 ex:{q:'Écrire 105 en base 8.',
  st:['105 = 13 × 8 + 1 : le reste est 1.',
      '13 = 1 × 8 + 5 : le reste est 5.',
      '1 = 0 × 8 + 1 : le reste est 1.',
      'On lit les restes de bas en haut : 1, 5, 1.'],
  r:'105 = <b>151</b> en base 8 (vérification : 64 + 40 + 1 = 105).'},
 pieges:[
  'Lire les restes dans le mauvais sens (de haut en bas).',
  'Dire que la somme des chiffres doit être divisible par 3 pour la divisibilité par 2.',
  'Oublier l\'initialisation dans une récurrence : l\'hérédité seule ne prouve rien.',
  'Pendant l\'hérédité, démontrer P(k + 1) sans utiliser P(k).'],
 mini:[
  {q:'Convertir 1101001 (base 2) en base 10.', r:'64 + 32 + 8 + 1 = <b>105</b>.'},
  {q:'7 236 est-il divisible par 9 ?', r:'7 + 2 + 3 + 6 = 18, divisible par 9 : <b>oui</b>.'}],
 chk:[['1*64+5*8+1','105'],['13*8+1','105'],['(105).toString(8)','"151"'],['64+32+8+1','105'],['parseInt("1101001",2)','105'],['(37).toString(2)','"100101"'],['7236%9','0'],['3600+2*60+5','3725']]
},

'TleA — Suites numériques': {
 ess:[
  '<b>Suite arithmétique</b> (on ajoute toujours r) : Uₙ₊₁ = Uₙ + r et <b>Uₙ = U₀ + n r</b>. Croissante si r > 0, décroissante si r < 0.',
  '<b>Suite géométrique</b> (on multiplie toujours par q) : Uₙ₊₁ = q Uₙ et <b>Uₙ = U₀ × qⁿ</b>. À termes positifs : croissante si q > 1, décroissante si 0 < q < 1.',
  '<b>Intérêts</b> : capital C au taux t pendant n ans. Simples : C(1 + n t) (arithmétique). Composés : C(1 + t)ⁿ (géométrique).',
  '<b>Sens de variation</b> : on étudie le signe de Uₙ₊₁ − Uₙ ; ou, si Uₙ = f(n), on utilise le sens de variation de f.',
  '<b>Limite</b> : une suite est <b>convergente</b> si elle a une limite finie, sinon elle est <b>divergente</b>.'],
 form:[
  'Limite de qⁿ : si q > 1, +∞ ; si −1 < q < 1, 0 ; si q = 1, la suite est constante ; si q ≤ −1, pas de limite.',
  'Si Uₙ = f(n), on calcule la limite de f en +∞. Ex. Uₙ = {2n + 1¦n + 3} tend vers 2.'],
 ex:{q:'On place 100 000 F à 5 % pendant 3 ans. Quel est le capital final à intérêts simples ? à intérêts composés ?',
  st:['Intérêts simples : 100 000 × (1 + 3 × 0,05) = 100 000 × 1,15.',
      'Soit 115 000 F.',
      'Intérêts composés : 100 000 × 1,05³ = 100 000 × 1,157625.'],
  r:'<b>115 000 F</b> à intérêts simples et <b>115 762,5 F</b> à intérêts composés.'},
 pieges:[
  'Confondre simple (on ajoute n × t) et composé (on multiplie par (1 + t) à chaque année).',
  'Écrire Uₙ = U₀ × q × n au lieu de U₀ × qⁿ.',
  'Prendre q = 0,05 au lieu de 1,05 pour une hausse de 5 %.',
  'Dire qu\'une suite géométrique de raison q > 1 est croissante sans vérifier que U₀ > 0.'],
 mini:[
  {q:'Suite arithmétique U₀ = 5 et r = 3 : calculer U₁₀.', r:'5 + 10 × 3 = <b>35</b>.'},
  {q:'Suite géométrique U₀ = 2 et q = 3 : calculer U₄.', r:'2 × 3⁴ = 2 × 81 = <b>162</b>.'}],
 chk:[['100000*(1+3*0.05)','115000'],['100000*1.05**3','115762.5'],['100000*1.05**2','110250'],['100000*(1+2*0.05)','110000'],['5+10*3','35'],['2*3**4','162'],['(2*1e12+1)/(1e12+3)','2']]
},

'TleA — Statistique à un caractère': {
 ess:[
  'Représentations : diagramme circulaire, en bâtons, à bandes, <b>histogramme</b> (classes).',
  '<b>Mode</b> : toute modalité d\'effectif maximal. Pour des classes : la <b>classe modale</b> (effectif maximal) ; son centre est le mode de la série.',
  '<b>Moyenne</b> : on divise la somme des produits (valeur × effectif) par l\'effectif total. Pour des classes, on prend les <b>centres des classes</b>.',
  '<b>Médiane</b> : valeur qui partage la série en deux parties de même effectif. Série discrète : x₁ = première modalité dont l\'effectif cumulé croissant est ≥ {N¦2}, x₂ = première dont l\'effectif cumulé décroissant est ≥ {N¦2}, et médiane = {x₁ + x₂¦2}. Pour une série continue, on la lit sur le polygone des fréquences cumulées croissantes à l\'ordonnée 50 %.',
  '<b>Variance</b> : moyenne des carrés des écarts à la moyenne. <b>Écart-type</b> : racine carrée de la variance.'],
 form:[
  'x̄ = {n₁x₁ + n₂x₂ + … + nₖxₖ¦N}    V = {n₁(x₁ − x̄)² + … + nₖ(xₖ − x̄)²¦N}    σ = √V',
  'V = (moyenne des carrés) − (moyenne)²'],
 ex:{q:'Série : valeurs 2, 4, 6, 8 d\'effectifs 1, 2, 3, 4. Calculer N, la moyenne, le mode, la variance et l\'écart-type.',
  st:['N = 1 + 2 + 3 + 4 = 10.',
      'Moyenne = {2 + 8 + 18 + 32¦10} = {60¦10} = 6. Mode : 8 (effectif maximal 4).',
      'Variance = {1×16 + 2×4 + 3×0 + 4×4¦10} = {40¦10} = 4.',
      'Écart-type = √4 = 2.'],
  r:'N = <b>10</b>, moyenne <b>6</b>, mode <b>8</b>, variance <b>4</b>, écart-type <b>2</b> (et la médiane est 6).'},
 pieges:[
  'Faire la moyenne des valeurs sans tenir compte des effectifs.',
  'Prendre la borne inférieure d\'une classe au lieu de son centre.',
  'Oublier de prendre la racine carrée pour passer de la variance à l\'écart-type.',
  'Donner l\'effectif maximal comme mode : le mode est la <b>modalité</b> (la valeur), pas son effectif.'],
 mini:[
  {q:'Valeurs 10, 12, 14 d\'effectifs 2, 3, 5 : moyenne ?', r:'{20 + 36 + 70¦10} = <b>12,6</b>.'},
  {q:'Classes [0 ; 10[ (effectif 4) et [10 ; 20[ (effectif 6) : moyenne ?', r:'Centres 5 et 15 : {20 + 90¦10} = <b>11</b>.'}],
 chk:[['1+2+3+4','10'],['(2*1+4*2+6*3+8*4)/10','6'],['(16*1+4*2+0*3+4*4)/10','4'],['Math.sqrt(4)','2'],['(4*1+16*2+36*3+64*4)/10-6**2','4'],['(10*2+12*3+14*5)/10','12.6'],['(5*4+15*6)/10','11'],['(6+6)/2','6'],['(()=>{const x=[2,4,6,8],n=[1,2,3,4],N=10,m=x.reduce((s,v,i)=>s+v*n[i],0)/N;return x.reduce((s,v,i)=>s+n[i]*(v-m)**2,0)/N})()','4']]
},

'TleA — Statistique à deux caractères': {
 ess:[
  'Une série double donne des couples (xᵢ ; yᵢ). Le <b>nuage de points</b> est l\'ensemble des points correspondants dans un repère.',
  'Le <b>point moyen G</b> a pour coordonnées (moyenne des x ; moyenne des y).',
  '<b>Méthode de Mayer</b> : on partage le nuage, <b>dans l\'ordre où les points se présentent</b> (souvent par x croissants), en <b>deux sous-nuages de même effectif</b>, on calcule leurs points moyens G₁ et G₂. La <b>droite de Mayer</b> est la droite (G₁G₂).',
  'Quand les deux groupes ont le même effectif, G est le <b>milieu de [G₁G₂]</b> : G est donc sur la droite de Mayer.',
  'La droite d\'ajustement sert à <b>estimer y</b> pour une valeur de x non observée.'],
 form:[
  'Pente de (G₁G₂) : a = {y₂ − y₁¦x₂ − x₁}. Équation : y = ax + b, avec b obtenu en utilisant G₁ (b = y₁ − a x₁).'],
 ex:{q:'Points (1 ; 3), (2 ; 4), (3 ; 7), (4 ; 8). Trouver la droite de Mayer et estimer y pour x = 5.',
  st:['Deux sous-nuages : {(1 ; 3), (2 ; 4)} et {(3 ; 7), (4 ; 8)}.',
      'G₁ = (1,5 ; 3,5) et G₂ = (3,5 ; 7,5).',
      'Pente a = {7,5 − 3,5¦3,5 − 1,5} = {4¦2} = 2.',
      'Avec G₁ : 3,5 = 2 × 1,5 + b donc b = 0,5. Pour x = 5 : y = 2 × 5 + 0,5 = 10,5.'],
  r:'Droite de Mayer : <b>y = 2x + 0,5</b> ; estimation pour x = 5 : <b>y ≈ 10,5</b>.'},
 pieges:[
  'Partager le nuage en deux groupes d\'effectifs différents.',
  'Partager les points dans le désordre : on respecte l\'ordre de la série (souvent par abscisses croissantes).',
  'Mélanger les coordonnées : on fait la moyenne des x et la moyenne des y séparément.',
  'Se tromper dans la pente : numérateur = différence des y, dénominateur = différence des x.'],
 mini:[
  {q:'Quel est le point moyen de (2 ; 1) et (4 ; 3) ?', r:'{2 + 4¦2} = 3 et {1 + 3¦2} = 2 : <b>(3 ; 2)</b>.'},
  {q:'Avec la droite y = 3x − 1, estimer y pour x = 7.', r:'3 × 7 − 1 = <b>20</b>.'}],
 chk:[['(1+2)/2','1.5'],['(3+4)/2','3.5'],['(3+4)/2','(3+7)/2-1.5'],['(7.5-3.5)/(3.5-1.5)','2'],['3.5-2*1.5','0.5'],['2*3.5+0.5','7.5'],['2*5+0.5','10.5'],['(2+4)/2','3'],['(1+3)/2','2'],['3*7-1','20'],['2*2.5+0.5','5.5']]
},

'TleA — Probabilités': {
 ess:[
  'Une <b>expérience aléatoire</b> a un résultat qu\'on ne peut pas prévoir. L\'<b>univers</b> est l\'ensemble de tous les résultats possibles. Un <b>événement élémentaire</b> n\'a qu\'un résultat.',
  '« A ou B » (A ∪ B) : au moins l\'un des deux. « A et B » (A ∩ B) : les deux à la fois. A et B sont <b>incompatibles</b> si A ∩ B = ∅. L\'événement <b>contraire</b> de A est formé de tous les résultats non favorables à A.',
  'En <b>équiprobabilité</b> (tous les résultats ont la même chance) : <b>p(A) = {cas favorables¦cas possibles}</b>. Avec n éventualités, chaque événement élémentaire a pour probabilité {1¦n}.',
  'Une probabilité est toujours entre 0 et 1 : 1 pour l\'événement certain, 0 pour l\'événement impossible.'],
 form:[
  'p(A) + p(contraire de A) = 1',
  'p(A ∪ B) = p(A) + p(B) − p(A ∩ B)    (si A et B sont incompatibles : p(A) + p(B))',
  'Pour « au moins un », calcule d\'abord la probabilité du contraire (« aucun »).'],
 ex:{q:'On lance deux dés équilibrés. Quelle est la probabilité d\'obtenir au moins un 6 ?',
  st:['Il y a 6 × 6 = 36 issues possibles.',
      'Contraire : « aucun 6 ». Chaque dé donne un non-6 de 5 façons : 5 × 5 = 25 issues.',
      'p(aucun 6) = {25¦36}.',
      'p(au moins un 6) = 1 − {25¦36} = {11¦36}.'],
  r:'<b>{11¦36}</b> (environ 0,31)'},
 pieges:[
  'Additionner p(A) et p(B) quand A et B ne sont pas incompatibles : il faut soustraire p(A ∩ B).',
  'Appliquer {cas favorables¦cas possibles} quand les résultats n\'ont pas la même chance.',
  'Compter 11 cas favorables en oubliant le (6 ; 6) ou le compter deux fois.',
  'Une probabilité plus grande que 1 ou négative est forcément fausse.'],
 mini:[
  {q:'On tire une carte dans un jeu de 32 cartes. Probabilité d\'obtenir un as ?', r:'{4¦32} = <b>{1¦8}</b>.'},
  {q:'p(A) = 0,5 ; p(B) = 0,4 ; p(A ∩ B) = 0,2. Calculer p(A ∪ B).', r:'0,5 + 0,4 − 0,2 = <b>0,7</b>.'}],
 chk:[['6*6','36'],['1-(5/6)**2','11/36'],['5*5','25'],['4/32','1/8'],['0.5+0.4-0.2','0.7'],['3/6','1/2'],['1-0.35','0.65']]
},

'TleA — Prop. & Déf.': { memo:true }
});
