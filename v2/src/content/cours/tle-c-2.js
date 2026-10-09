/* ===== Résumés de cours — Terminale C (thèmes 17 à 31 de la banque) =====
   Balisage : <b>…</b> ; fraction {numérateur¦dénominateur}. */
window.MQ_COURS = window.MQ_COURS || {};
window.MQ_COURS['Tle C'] = Object.assign(window.MQ_COURS['Tle C'] || {}, {

'TleC — Compléments sur les primitives': {
 ess:[
  'Une <b>primitive</b> de f sur un intervalle I est une fonction F dérivable telle que F′ = f. Deux primitives de f diffèrent d\'<b>une constante</b> : si F est une primitive, toutes les autres sont F + C.',
  'Pour retrouver une primitive, on <b>reconnaît la forme</b> « u′ × quelque chose de u » : c\'est la dérivée d\'une fonction composée, lue à l\'envers.',
  'Pour fixer la constante, on utilise une condition du type F(x₀) = y₀.'],
 form:[
  'u′ uⁿ (n ≠ −1) a pour primitive {uⁿ⁺¹¦n + 1}.    u′/u² a pour primitive −{1¦u} (u ne s\'annule pas).',
  'u′/√u a pour primitive 2√u (u > 0) ; donc {u′¦2√u} a pour primitive √u (exemple : {x¦√(x² + 1)} a pour primitive √(x² + 1)).    u′ × (g′∘u) a pour primitive g∘u.',
  'Avec les fonctions trigonométriques : une primitive de {1¦cos²x} est tan x ; une primitive de cos x sin³x est {sin⁴x¦4}.'],
 ex:{q:'Trouve la primitive F de f(x) = 2x(x² + 1)³ qui vérifie F(0) = 1.',
  st:['On pose u = x² + 1, donc u′ = 2x. Alors f = u′ u³.',
      'Les primitives de f sont F(x) = {(x² + 1)⁴¦4} + C.',
      'Condition F(0) = 1 : {1¦4} + C = 1, donc C = {3¦4}.'],
  r:'<b>F(x) = {(x² + 1)⁴¦4} + {3¦4}</b>'},
 pieges:[
  'Oublier la constante C : une fonction a une <b>infinité</b> de primitives.',
  'Oublier le facteur u′ : 2x(x² + 1)³ est de la forme u′u³, mais (x² + 1)³ seul ne l\'est pas.',
  'Une primitive de u′/√u est 2√u et non √u : on dérive √u pour vérifier (on obtient {u′¦2√u}).'],
 mini:[
  {q:'Donne une primitive de 2x/√(x² + 1) sur ℝ.', r:'<b>2√(x² + 1)</b> (forme u′/√u avec u = x² + 1).'},
  {q:'Donne une primitive de cos x sin³x.', r:'<b>{sin⁴x¦4}</b> (forme u′u³ avec u = sin x).'}],
 chk:[['(1+1)**4/4-(0+1)**4/4','2/8+6/6+6/4+2/2'],['1/4+3/4','1'],['(1+1)**4/4+3/4','4.75']]
},

'TleC — Fonction logarithme népérien': {
 ess:[
  'La fonction <b>ln</b> est la primitive de x ↦ {1¦x} sur ]0 ; +∞[ qui <b>s\'annule en 1</b>. Elle est donc dérivable, avec (ln x)′ = {1¦x} > 0 : elle est <b>strictement croissante</b>.',
  'C\'est une bijection de ]0 ; +∞[ sur ℝ. Donc : ln a = ln b ⟺ a = b ; ln a < ln b ⟺ a < b. On a ln 1 = 0 et ln e = 1.',
  '<b>Avant de résoudre</b>, on cherche le domaine : ln u(x) n\'existe que si u(x) > 0.'],
 form:[
  'ln(ab) = ln a + ln b    ln{a¦b} = ln a − ln b    ln{1¦a} = −ln a    ln(aʳ) = r ln a   (a, b > 0).',
  'Limites : ln x → +∞ en +∞ ; ln x → −∞ en 0⁺ ; {ln x¦x} → 0 en +∞ ; x ln x → 0 en 0⁺ ; {ln(1 + x)¦x} → 1 en 0.',
  '(ln u)′ = {u′¦u}.   Une primitive de {u′¦u} est ln|u|.   Logarithme décimal : log x = {ln x¦ln 10}.'],
 ex:{q:'Résous dans ℝ : ln(x − 1) + ln(x + 1) = ln 8.',
  st:['Domaine : x − 1 > 0 et x + 1 > 0, donc x > 1.',
      'On regroupe : ln[(x − 1)(x + 1)] = ln 8, donc x² − 1 = 8.',
      'x² = 9, donc x = 3 ou x = −3.',
      'Seul 3 est dans le domaine ]1 ; +∞[.'],
  r:'<b>S = {3}</b>'},
 pieges:[
  'ln(a + b) n\'est <b>pas</b> égal à ln a + ln b. Seul le produit se transforme en somme.',
  'Oublier le domaine et garder une solution (ici −3) pour laquelle ln n\'existe pas.',
  'ln x < 1 ⟺ 0 < x < e (et pas seulement x < e).'],
 mini:[
  {q:'Résous ln x < 1.', r:'<b>0 < x < e</b>, soit S = ]0 ; e[.'},
  {q:'Écris ln 8 en fonction de ln 2.', r:'<b>ln 8 = 3 ln 2</b>'}],
 chk:[['3**2-1','8'],['Math.log(8)','3*Math.log(2)'],['Math.log(Math.E)','1']]
},

'TleC — Fonction exponentielle népérienne': {
 ess:[
  'La fonction <b>exp</b> est la bijection réciproque de ln. Elle va de ℝ sur ]0 ; +∞[ : pour tout x, e^x > 0.',
  'Pour x > 0 : e^(ln x) = x. Pour tout réel x : ln(e^x) = x. Et e^x = y ⟺ x = ln y (y > 0).',
  'exp est <b>sa propre dérivée</b> : (e^x)′ = e^x. Elle est strictement croissante.'],
 form:[
  'e^(a + b) = eᵃ × eᵇ    e^(−a) = {1¦eᵃ}    (eᵃ)ʳ = e^(ar)    eᵃ < eᵇ ⟺ a < b.',
  '(e^u)′ = u′ e^u.   Une primitive de u′ e^u est e^u.',
  'Limites : e^x → +∞ en +∞ ; e^x → 0 en −∞ ; {e^x¦x} → +∞ en +∞ ; x e^x → 0 en −∞ ; {e^x − 1¦x} → 1 en 0.'],
 ex:{q:'Résous dans ℝ : e^(2x) − 3e^x + 2 = 0.',
  st:['On pose X = e^x. Comme e^x > 0, on cherche X > 0. Alors e^(2x) = X².',
      'L\'équation devient X² − 3X + 2 = 0, soit (X − 1)(X − 2) = 0.',
      'X = 1 ou X = 2, donc e^x = 1 ou e^x = 2.',
      'On revient à x : x = ln 1 = 0 ou x = ln 2.'],
  r:'<b>S = {0 ; ln 2}</b>'},
 pieges:[
  'e^(a + b) ≠ eᵃ + eᵇ : une somme dans l\'exposant devient un <b>produit</b>.',
  'e^x = −2 n\'a <b>aucune solution</b> car e^x est toujours strictement positif.',
  'La dérivée de e^(x²) est 2x e^(x²) et non e^(x²) : il faut multiplier par u′.'],
 mini:[
  {q:'Résous e^x ≥ 1.', r:'<b>x ≥ 0</b> (car 1 = e⁰ et exp est croissante).'},
  {q:'Dérive f(x) = x e^x.', r:'<b>f′(x) = (x + 1) e^x</b> (dérivée d\'un produit).'}],
 chk:[['1-3+2','0'],['4-6+2','0'],['Math.exp(0)','1']]
},

'TleC — Exponentielles de base a & fonctions puissances': {
 ess:[
  'Pour a > 0 et α réel, on pose <b>aᵅ = e^(α ln a)</b>. Cette définition prolonge les puissances entières et rationnelles.',
  'La fonction x ↦ aˣ = e^(x ln a) est dérivable sur ℝ, de dérivée <b>ln a × aˣ</b>. Si a > 1 elle est strictement <b>croissante</b> ; si 0 < a < 1, strictement <b>décroissante</b>.',
  'La fonction x ↦ xᵅ sur ]0 ; +∞[ a pour dérivée <b>α x^(α − 1)</b>.'],
 form:[
  'aˣ⁺ʸ = aˣ aʸ ; 3^(x + 1) = 3 × 3ˣ ; aˣ = e^(x ln a).',
  'Si α > 0 : xᵅ → +∞ en +∞ et {ln x¦xᵅ} → 0. Si α < 0 : xᵅ → 0 en +∞. Pour n entier : xⁿ e^x → 0 en −∞.',
  'Primitive de xᵅ (α ≠ −1) : {xᵅ⁺¹¦α + 1}.   Dérivée de gᵅ : α g′ gᵅ⁻¹ (g > 0).'],
 ex:{q:'Résous dans ℝ : 3^(x + 1) = 5.',
  st:['On prend le logarithme népérien des deux côtés : (x + 1) ln 3 = ln 5.',
      'On divise par ln 3 (qui est non nul) : x + 1 = {ln 5¦ln 3}.',
      'Donc x = {ln 5¦ln 3} − 1 (environ 0,465).'],
  r:'<b>x = {ln 5¦ln 3} − 1</b>'},
 pieges:[
  'La dérivée de aˣ n\'est pas x aˣ⁻¹ : cette formule est celle de xᵅ. Pour aˣ, on obtient <b>ln a × aˣ</b>.',
  'Ne pas confondre x² (la variable est en bas) et 2ˣ (la variable est en exposant).',
  'Si 0 < a < 1, la fonction aˣ est décroissante : l\'inégalité change de sens.'],
 mini:[
  {q:'Dérive f(x) = x^(3/2) sur ]0 ; +∞[. Calcule f′(4).', r:'f′(x) = {3¦2}√x, donc <b>f′(4) = 3</b>.'},
  {q:'Résous 2ˣ = 8.', r:'<b>x = 3</b> (car 8 = 2³).'}],
 chk:[['3**(Math.log(5)/Math.log(3)-1+1)','5'],['1.5*4**0.5','3'],['2**3','8']]
},

'TleC — Calcul intégral': {
 ess:[
  'Si F est une primitive de f sur [a ; b], alors <b>∫ₐᵇ f(x) dx = F(b) − F(a)</b>, noté [F(x)]ₐᵇ. Si f ≥ 0 et a ≤ b, c\'est l\'<b>aire</b> sous la courbe (en unités d\'aire).',
  'Propriétés : ∫ₐᵃ f = 0 ; ∫ᵇₐ f = −∫ₐᵇ f ; Chasles ∫ₐᶜ f + ∫ᶜᵇ f = ∫ₐᵇ f ; linéarité ; si f ≥ g alors ∫f ≥ ∫g.',
  'Intégrale et fonction : F(x) = ∫ₐˣ f(t) dt est l\'unique primitive de f qui s\'annule en a.'],
 form:[
  'Valeur moyenne : {1¦b − a} ∫ₐᵇ f.   Si m ≤ f ≤ M : m(b − a) ≤ ∫ₐᵇ f ≤ M(b − a).',
  'Intégration par parties : ∫ₐᵇ f g′ = [f g]ₐᵇ − ∫ₐᵇ f′ g.',
  'f paire : ∫₋ₐᵃ f = 2∫₀ᵃ f. f impaire : ∫₋ₐᵃ f = 0. Aire entre Cf et Cg (f ≥ g) : ∫ₐᵇ (f − g).',
  'Volume de révolution autour de (Ox) : V = π ∫ₐᵇ f(x)² dx. Boule de rayon R : {4¦3}πR³. Solide entre les plans z = a et z = b : V = ∫ₐᵇ S(t) dt, où S(t) est l\'aire de la section.',
  'Si f est continue et T-périodique, ∫ₐᵃ⁺ᵀ f ne dépend pas de a. Valeur approchée d\'une intégrale : méthode des <b>trapèzes</b>.'],
 ex:{q:'Calcule I = ∫₀¹ x e^x dx.',
  st:['On intègre par parties avec f(x) = x et g′(x) = e^x. Alors f′(x) = 1 et g(x) = e^x.',
      'I = [x e^x]₀¹ − ∫₀¹ e^x dx.',
      '[x e^x]₀¹ = e − 0 = e, et ∫₀¹ e^x dx = e − 1.',
      'I = e − (e − 1) = 1.'],
  r:'<b>I = 1</b>'},
 pieges:[
  'Oublier d\'évaluer en <b>b puis en a</b> : on fait F(b) − F(a), dans cet ordre.',
  'En intégration par parties, choisir g′ dont on connaît une primitive, et f qui se simplifie en dérivant.',
  'Dire « intégrale = aire » sans condition : si f est négative, l\'intégrale est négative.'],
 mini:[
  {q:'Calcule ∫₀² (3x² + 1) dx.', r:'[x³ + x]₀² = 8 + 2 = <b>10</b>.'},
  {q:'Calcule ∫₀^π sin x dx.', r:'[−cos x]₀^π = 1 − (−1) = <b>2</b>.'}],
 chk:[['(function(){let n=100000,s=0;for(let i=0;i<n;i++){let x=(i+.5)/n;s+=x*Math.exp(x)/n}return s})()','1'],['Math.E-(Math.E-1)','1'],['2**3+2','10'],['-Math.cos(Math.PI)+Math.cos(0)','2']]
},

'TleC — Équations différentielles': {
 ess:[
  '<b>y′ = f(x)</b> : les solutions sont les primitives de f. <b>y″ = g(x)</b> : on primitive deux fois (deux constantes).',
  '<b>a y′ + b y = 0</b> (a ≠ 0) : les solutions sont y = C e^(−bx/a). Avec une condition y(x₀) = y₀, on trouve C.',
  '<b>a y″ + b y′ + c y = 0</b> (a ≠ 0) : on forme l\'<b>équation caractéristique</b> a r² + b r + c = 0 et on regarde le signe de Δ = b² − 4ac : Δ > 0 deux racines réelles, Δ = 0 une racine double, Δ < 0 deux racines complexes conjuguées.',
  'Équation avec second membre : solution générale = <b>une solution particulière + la solution générale de l\'équation sans second membre</b>.'],
 form:[
  'y′ = k y : y = C e^(kx).    Δ > 0, deux racines réelles r₁ ≠ r₂ : y = C₁ e^(r₁x) + C₂ e^(r₂x).    Δ = 0, racine double r : y = (C₁x + C₂) e^(rx).',
  'Δ < 0, racines complexes α ± iβ : y = e^(αx)(C₁ cos βx + C₂ sin βx).    Exemple : y″ + y = 0 donne C₁ cos x + C₂ sin x.',
  'y′ + y = 1 : solution particulière y = 1, donc y = 1 + C e^(−x).'],
 ex:{q:'Résous y″ − 3y′ + 2y = 0 avec y(0) = 1 et y′(0) = 0.',
  st:['Équation caractéristique : r² − 3r + 2 = 0, soit (r − 1)(r − 2) = 0. Racines 1 et 2.',
      'Solutions : y = C₁ e^x + C₂ e^(2x), donc y′ = C₁ e^x + 2C₂ e^(2x).',
      'y(0) = 1 donne C₁ + C₂ = 1. y′(0) = 0 donne C₁ + 2C₂ = 0.',
      'On soustrait : C₂ = −1, puis C₁ = 2.'],
  r:'<b>y = 2e^x − e^(2x)</b>'},
 pieges:[
  'Écrire y = C e^(bx/a) : le signe est <b>−b/a</b>. Pour y′ + 2y = 0, c\'est e^(−2x).',
  'Oublier la solution particulière quand le second membre n\'est pas nul.',
  'Pour une équation d\'ordre 2, il faut <b>deux</b> conditions initiales pour fixer C₁ et C₂.'],
 mini:[
  {q:'Résous y′ + 2y = 0 avec y(0) = 3.', r:'y = C e^(−2x) et C = 3 : <b>y = 3e^(−2x)</b>.'},
  {q:'Résous y″ = 6x.', r:'y′ = 3x² + C₁, puis <b>y = x³ + C₁x + C₂</b>.'}],
 chk:[['1-3+2','0'],['2-1','1'],['2*1+2*(-1)','0'],['3*Math.exp(0)','3']]
},

'TleC — Probabilités : événements & probabilité conditionnelle': {
 ess:[
  'Une probabilité p vérifie : p(Ω) = 1, 0 ≤ p ≤ 1, et p(A ∪ B) = p(A) + p(B) si A et B sont <b>incompatibles</b> (A ∩ B = ∅).',
  'En équiprobabilité : p(A) = {nombre de cas favorables¦nombre de cas possibles}.',
  '<b>Probabilité conditionnelle</b> de A sachant B (p(B) ≠ 0) : p_B(A) = {p(A ∩ B)¦p(B)}. On en tire p(A ∩ B) = p(B) × p_B(A) = p(A) × p_A(B).',
  'Un <b>système complet</b> (B₁, …, Bₙ) : événements deux à deux incompatibles dont la réunion est Ω. Alors p(A) = p(A ∩ B₁) + … + p(A ∩ Bₙ) (formule des probabilités totales).'],
 form:[
  'p(non A) = 1 − p(A).   p(A ∪ B) = p(A) + p(B) − p(A ∩ B).   Si A ⊂ B alors p(A) ≤ p(B).',
  '<b>Indépendance</b> : A et B sont indépendants ⟺ p(A ∩ B) = p(A) × p(B). Alors p_B(A) = p(A), et A et non B sont aussi indépendants.'],
 ex:{q:'Une urne contient 3 boules rouges et 2 bleues. On tire deux boules <b>sans remise</b>. Quelle est la probabilité d\'obtenir deux rouges ?',
  st:['R₁ = « la 1re est rouge » : p(R₁) = {3¦5}.',
      'Il reste 4 boules dont 2 rouges : p_R₁(R₂) = {2¦4}.',
      'p(R₁ ∩ R₂) = p(R₁) × p_R₁(R₂) = {3¦5} × {2¦4} = {6¦20}.'],
  r:'<b>{3¦10}</b>'},
 pieges:[
  'Confondre « incompatibles » (A ∩ B = ∅) et « indépendants » (p(A ∩ B) = p(A) p(B)). Deux événements incompatibles de probabilités non nulles ne sont jamais indépendants.',
  'Confondre p_B(A) et p_A(B) : on divise par la probabilité de l\'événement <b>conditionnant</b>.',
  'Dans un tirage sans remise, oublier de changer la composition de l\'urne.'],
 mini:[
  {q:'p(A) = 0,3 ; p(B) = 0,6 ; p(A ∩ B) = 0,18. Calcule p_B(A). A et B sont-ils indépendants ?', r:'p_B(A) = {0,18¦0,6} = <b>0,3</b> = p(A) : <b>oui</b>, indépendants.'},
  {q:'On lance deux dés équilibrés. Probabilité que la somme soit 7 ?', r:'6 couples favorables sur 36 : <b>{1¦6}</b>.'}],
 chk:[['3/5*2/4','0.3'],['0.18/0.6','0.3'],['0.3*0.6','0.18'],['6/36','1/6']]
},

'TleC — Variables aléatoires & loi binomiale': {
 ess:[
  'Une <b>variable aléatoire</b> X est une application de Ω dans ℝ. Sa <b>loi</b> donne les probabilités pᵢ = p(X = xᵢ) ; leur somme vaut 1.',
  'Espérance : <b>E(X) = Σ pᵢ xᵢ</b>. Variance : <b>V(X) = Σ pᵢ (xᵢ − E(X))²</b> = E(X²) − E(X)². Écart-type : σ(X) = √V(X).',
  'Fonction de répartition : F(t) = p(X ≤ t) ; elle est croissante, à valeurs dans [0 ; 1].',
  '<b>Épreuve de Bernoulli</b> : deux issues (succès p, échec 1 − p). <b>Schéma de Bernoulli</b> : n épreuves identiques et indépendantes.'],
 form:[
  'X suit la loi binomiale B(n ; p) (nombre de succès) : p(X = k) = C(n, k) pᵏ (1 − p)ⁿ⁻ᵏ   pour k = 0, 1, …, n.',
  'E(X) = n p     V(X) = n p (1 − p).',
  'C(n, k) = {n!¦k!(n − k)!}.   Exemples : C(3, 1) = 3 ; C(4, 2) = 6.'],
 ex:{q:'X prend les valeurs 0, 1, 2 avec les probabilités 0,2 ; 0,5 ; 0,3. Calcule E(X) et V(X).',
  st:['E(X) = 0 × 0,2 + 1 × 0,5 + 2 × 0,3 = 1,1.',
      'E(X²) = 0 × 0,2 + 1 × 0,5 + 4 × 0,3 = 1,7.',
      'V(X) = E(X²) − E(X)² = 1,7 − 1,21 = 0,49.'],
  r:'<b>E(X) = 1,1 et V(X) = 0,49</b> (écart-type 0,7).'},
 pieges:[
  'Calculer V(X) = Σ pᵢ (xᵢ − E(X)) sans le <b>carré</b> : on obtiendrait toujours 0.',
  'Oublier le coefficient C(n, k) dans la loi binomiale.',
  'Utiliser la loi binomiale quand les épreuves ne sont pas indépendantes (tirages sans remise).'],
 mini:[
  {q:'X suit B(3 ; {1¦3}). Calcule p(X = 1).', r:'3 × {1¦3} × ({2¦3})² = <b>{4¦9}</b>.'},
  {q:'X suit B(10 ; 0,3). Calcule E(X) et V(X).', r:'E(X) = 10 × 0,3 = 3 ; V(X) = 10 × 0,3 × 0,7 = <b>2,1</b>.'}],
 chk:[['0*0.2+1*0.5+2*0.3','1.1'],['0.2*(0-1.1)**2+0.5*(1-1.1)**2+0.3*(2-1.1)**2','0.49'],['0.5+4*0.3-1.1**2','0.49'],['3*(1/3)*(2/3)**2','4/9'],['10*0.3*0.7','2.1'],['6/16','3/8']]
},

'TleC — Suites numériques': {
 ess:[
  '<b>Récurrence</b> : on montre P(0) (initialisation), puis P(n) ⟹ P(n + 1) pour tout n (hérédité). Alors P(n) est vraie pour tout n.',
  'Toute suite <b>croissante et majorée</b> converge ; toute suite <b>décroissante et minorée</b> converge. Une suite croissante non majorée tend vers +∞.',
  'Si Uₙ₊₁ = g(Uₙ), g continue, et si (Uₙ) converge vers l, alors <b>g(l) = l</b>. Plus généralement, si Uₙ → a et si f est continue en a, alors f(Uₙ) → f(a).',
  'Une suite convergente est bornée. Une suite divergente n\'a pas de limite finie (elle tend vers ±∞ ou oscille, comme (−1)ⁿ).'],
 form:[
  'Gendarmes : Vₙ ≤ Uₙ ≤ Wₙ et lim Vₙ = lim Wₙ = l ⟹ lim Uₙ = l.    Si Uₙ ≥ Vₙ et lim Vₙ = +∞ alors lim Uₙ = +∞.',
  'Si |Uₙ − l| ≤ Vₙ et lim Vₙ = 0, alors lim Uₙ = l.   Si Uₙ ≤ Vₙ, lim Uₙ = l et lim Vₙ = l′, alors l ≤ l′.',
  'aⁿ → +∞ si a > 1, aⁿ → 0 si 0 < a < 1 (ou |a| < 1).    {n²¦2ⁿ} → 0.'],
 ex:{q:'U₀ = 1 et Uₙ₊₁ = {Uₙ¦2} + 1. Montre que Uₙ ≤ 2, que (Uₙ) est croissante, puis trouve sa limite.',
  st:['Récurrence : U₀ = 1 ≤ 2. Si Uₙ ≤ 2, alors {Uₙ¦2} + 1 ≤ 1 + 1 = 2, donc Uₙ₊₁ ≤ 2.',
      'Uₙ₊₁ − Uₙ = 1 − {Uₙ¦2} ≥ 0 car Uₙ ≤ 2 : la suite est croissante.',
      'Croissante et majorée par 2 : elle converge vers un réel l.',
      'l vérifie l = {l¦2} + 1, donc {l¦2} = 1 et l = 2.'],
  r:'<b>(Uₙ) converge vers 2</b>.'},
 pieges:[
  'Oublier l\'<b>initialisation</b> (ou l\'hérédité) dans une récurrence.',
  'Écrire g(l) = l sans avoir montré que la suite converge : la relation n\'est valable que si la limite existe.',
  'Croire qu\'une suite bornée converge : (−1)ⁿ est bornée et diverge.'],
 mini:[
  {q:'Limite de Uₙ = {2n + 1¦n + 3} ?', r:'On divise par n : {2 + 1/n¦1 + 3/n} → <b>2</b>.'},
  {q:'Limite de {sin n¦n} ?', r:'−{1¦n} ≤ {sin n¦n} ≤ {1¦n} : par les gendarmes, la limite est <b>0</b>.'}],
 chk:[['2/2+1','2'],['(function(){let u=1;for(let i=0;i<60;i++)u=u/2+1;return u})()','2'],['(2*1e12+1)/(1e12+3)','2']]
},

'TleC — Isométries du plan': {
 ess:[
  'Une <b>isométrie</b> conserve les distances. Il y en a quatre types : <b>translation, rotation, symétrie orthogonale (appelée aussi réflexion d\'axe), symétrie glissée</b>.',
  'Une <b>symétrie glissée</b> est la composée de la symétrie orthogonale d\'axe (Δ) et de la translation de vecteur u⃗ directeur de (Δ). Elle n\'a <b>aucun point invariant</b>.',
  'Déplacement (conserve les angles orientés) : translations et rotations. Antidéplacement (change tout angle orienté en son opposé) : symétries orthogonales et symétries glissées.'],
 form:[
  'Points invariants : trois points non alignés ⟹ identité ; deux points distincts A, B (isométrie ≠ identité) ⟹ symétrie orthogonale d\'axe (AB) ; un seul point A ⟹ rotation de centre A.',
  'Si A ≠ B et A′ ≠ B′ avec AB = A′B′ : il existe un unique déplacement et un unique antidéplacement qui envoient A sur A′ et B sur B′.',
  'Pour t_u⃗ ∘ s_Δ (u⃗ ≠ 0⃗) : si u⃗ est <b>orthogonal</b> à (Δ), c\'est une symétrie orthogonale ; sinon, une symétrie glissée.'],
 ex:{q:'Dans un repère orthonormé, s est la symétrie orthogonale d\'axe (Ox). Donne la nature de t_u⃗ ∘ s pour u⃗(0 ; 2), puis pour u⃗(3 ; 0).',
  st:['s(x ; y) = (x ; −y). Donc t_u⃗ ∘ s(x ; y) = (x + a ; −y + b) si u⃗(a ; b).',
      'Pour u⃗(0 ; 2) : (x ; 2 − y). Invariants : y = 2 − y, donc y = 1 (une droite). C\'est la symétrie orthogonale d\'axe y = 1 (u⃗ est orthogonal à (Ox)).',
      'Pour u⃗(3 ; 0) : (x + 3 ; −y). x + 3 = x est impossible : aucun point invariant.'],
  r:'<b>Symétrie orthogonale d\'axe y = 1</b> dans le 1er cas ; <b>symétrie glissée</b> (axe (Ox), vecteur u⃗(3 ; 0)) dans le 2e.'},
 pieges:[
  'Croire que toute composée « translation après symétrie orthogonale » est une symétrie glissée : si u⃗ est orthogonal à l\'axe, c\'est une simple symétrie orthogonale.',
  'Oublier que la symétrie glissée n\'a aucun point invariant, alors que la symétrie orthogonale en a une droite entière.',
  'Confondre déplacement et antidéplacement : la symétrie orthogonale <b>renverse</b> le sens des angles.'],
 mini:[
  {q:'Une isométrie non identique laisse invariants deux points distincts A et B. Quelle est-elle ?', r:'La <b>symétrie orthogonale d\'axe (AB)</b>.'},
  {q:'Une symétrie glissée est-elle un déplacement ?', r:'<b>Non</b>, c\'est un antidéplacement.'}],
 chk:[['1===2-1','true'],['0+3===0','false']]
},

'TleC — Applications affines & affinités': {
 ess:[
  'Une <b>application affine</b> f du plan <b>conserve le barycentre de deux points</b> (et donc de n points pondérés) : l\'image du barycentre est le barycentre des images, avec les mêmes coefficients. Elle est déterminée par trois points non alignés et leurs images.',
  'L\'application vectorielle associée F est définie par F(AB⃗) = f(A)f(B)⃗ ; elle est <b>linéaire</b>. Une application affine <b>bijective</b> s\'appelle une <b>transformation affine</b>.',
  'Une application affine conserve l\'alignement et le parallélisme ; la composée de deux applications affines est affine.',
  'Expression analytique : <b>x′ = ax + by + c ; y′ = a′x + b′y + c′</b>.'],
 form:[
  'Points invariants : l\'ensemble est vide, un point, une droite ou le plan entier.    Si f est bijective, f(P) = P ; sinon f(P) est un point ou une droite.',
  'Si f(A) ≠ f(B), l\'image de (AB) est la droite (A′B′) ; si f(A) = f(B), l\'image de (AB) est un point.',
  '<b>Affinité</b> d\'axe (D), de direction δ, de rapport k : M′ est tel que HM′⃗ = k HM⃗, où H est le projeté de M sur (D) parallèlement à δ.',
  'g(x) = a f(x) : Cg est l\'image de Cf par l\'affinité d\'axe (Ox), direction (Oy), rapport a.    g(x) = f(ax) : affinité d\'axe (Oy), direction (Ox), rapport {1¦a}.'],
 ex:{q:'f est définie par x′ = x + 2y + 1 ; y′ = 2x − y. Calcule l\'image de M(2 ; 3). f est-elle bijective ?',
  st:['x′ = 2 + 2 × 3 + 1 = 9 et y′ = 2 × 2 − 3 = 1. Donc M′(9 ; 1).',
      'Pour savoir si f est bijective, on regarde l\'application vectorielle F : F(i⃗) a pour coordonnées (1 ; 2) et F(j⃗) a pour coordonnées (2 ; −1).',
      'Ces deux vecteurs ne sont pas colinéaires, car 1 × (−1) − 2 × 2 = −5 ≠ 0 : f est bijective (f(P) = P).'],
  r:'<b>M′(9 ; 1) ; f est une transformation affine (1 × (−1) − 2 × 2 = −5 ≠ 0).</b>'},
 pieges:[
  'Oublier les constantes c et c′ : une application affine n\'est pas toujours linéaire.',
  'Croire qu\'une application affine conserve les distances et les angles : c\'est le cas des isométries et des similitudes, pas de toutes les applications affines.',
  'Pour g(x) = f(ax), le rapport est {1¦a} (et non a), et l\'axe est (Oy).'],
 mini:[
  {q:'Image de M(2 ; 5) par l\'affinité d\'axe (Ox), de direction (Oy), de rapport 3 ?', r:'On garde x et on multiplie y par 3 : <b>M′(2 ; 15)</b>.'},
  {q:'Cg est la courbe de g(x) = f(2x). Quelle affinité transforme Cf en Cg ?', r:'Affinité d\'axe (Oy), de direction (Ox), de rapport <b>{1¦2}</b>.'}],
 chk:[['2+2*3+1','9'],['2*2-3','1'],['1*(-1)-2*2','-5'],['3*5','15']]
},

'TleC — Coniques : définition & parabole': {
 ess:[
  'Une <b>conique</b> de foyer F (F ∉ (D)), de directrice (D) et d\'excentricité e (e > 0) est l\'ensemble des points M tels que <b>MF = e × MH</b>, c\'est-à-dire {MF¦MH} = e, où H est le projeté orthogonal de M sur (D).',
  'e = 1 : <b>parabole</b>.   0 < e < 1 : <b>ellipse</b>.   e > 1 : <b>hyperbole</b>.',
  'La perpendiculaire à (D) passant par F est un <b>axe de symétrie</b> (axe focal). Une parabole le coupe en un seul point (son sommet S) ; si e ≠ 1, la conique le coupe en deux sommets.',
  'Parabole dans le repère orthonormé (S, i⃗, j⃗) avec i⃗ = SF⃗ : <b>y² = 2px</b>, où p est la distance de F à (D) (p est le <b>paramètre</b> de la parabole).'],
 form:[
  'y² = 2px : foyer F({p¦2} ; 0), directrice x = −{p¦2}, sommet O(0 ; 0).',
  'Tangente en M₀(x₀ ; y₀) : <b>y y₀ = p(x + x₀)</b>.'],
 ex:{q:'Parabole P : y² = 12x. Donne son foyer, sa directrice, puis la tangente en M₀(3 ; 6).',
  st:['y² = 2px avec 2p = 12, donc p = 6. Foyer F(3 ; 0), directrice x = −3.',
      'M₀ est sur P : 6² = 36 = 12 × 3.',
      'Tangente : y y₀ = p(x + x₀), soit 6y = 6(x + 3).',
      'Donc y = x + 3. Vérification : y = x + 3 dans y² = 12x donne x² − 6x + 9 = 0, racine double 3 : c\'est bien une tangente.'],
  r:'<b>F(3 ; 0) ; directrice x = −3 ; tangente y = x + 3</b>'},
 pieges:[
  'Confondre p (distance du foyer à la directrice) et {p¦2} (abscisse du foyer).',
  'Dans y² = 2px, le coefficient de x est <b>2p</b> (et non p) : ici y² = 8x donne 2p = 8, donc p = 4 et F(2 ; 0).',
  'Dans MF = e MH, H est le projeté <b>orthogonal</b> sur la directrice (et non un point quelconque).'],
 mini:[
  {q:'Foyer et directrice de y² = 8x ?', r:'p = 4 : foyer <b>(2 ; 0)</b>, directrice <b>x = −2</b>.'},
  {q:'Quelle est la nature d\'une conique d\'excentricité {1¦2} ?', r:'Une <b>ellipse</b> (0 < e < 1).'}],
 chk:[['6**2','12*3'],['6*6','6*(3+3)'],['36-4*9','0'],['8/4','2']]
},

'TleC — Ellipse & hyperbole': {
 ess:[
  '<b>Ellipse</b> de foyers F, F′ : MF + MF′ = 2a (avec FF′ = 2c < 2a). Équation réduite : <b>{x²¦a²} + {y²¦b²} = 1</b> (a > b > 0), avec <b>c² = a² − b²</b> ; foyers (±c ; 0), excentricité e = {c¦a} < 1.',
  '<b>Hyperbole</b> : |MF − MF′| = 2a (avec FF′ = 2c > 2a). Équation réduite : <b>{x²¦a²} − {y²¦b²} = 1</b>, avec <b>c² = a² + b²</b> ; foyers (±c ; 0), e = {c¦a} > 1 ; asymptotes y = ±{b¦a}x.',
  'Ces coniques ont un <b>centre de symétrie</b> (le milieu des deux sommets de l\'axe focal).'],
 form:[
  'Tangente en M₀(x₀ ; y₀) : ellipse {x x₀¦a²} + {y y₀¦b²} = 1 ; hyperbole {x x₀¦a²} − {y y₀¦b²} = 1.',
  'Ellipse : x = a cos t, y = b sin t. C\'est l\'image du cercle de diamètre [AA′] par l\'affinité orthogonale d\'axe (AA′) et de rapport {b¦a}.',
  'Position d\'un point M : MF + MF′ < 2a (intérieur), = 2a (sur l\'ellipse), > 2a (extérieur).'],
 ex:{q:'Pour l\'ellipse {x²¦25} + {y²¦9} = 1, donne a, b, c, les foyers et l\'excentricité.',
  st:['a² = 25 et b² = 9, donc a = 5 et b = 3 (a > b : l\'axe focal est (Ox)).',
      'c² = a² − b² = 25 − 9 = 16, donc c = 4.',
      'Foyers F(4 ; 0) et F′(−4 ; 0). Excentricité e = {c¦a} = {4¦5}.'],
  r:'<b>a = 5 ; b = 3 ; c = 4 ; foyers (±4 ; 0) ; e = {4¦5}</b>'},
 pieges:[
  'Mélanger les deux relations : ellipse c² = a² <b>−</b> b² ; hyperbole c² = a² <b>+</b> b².',
  'Pour l\'ellipse, a est le plus grand : on lit a² sous x² quand a > b.',
  'Pour l\'hyperbole, les asymptotes sont y = ±{b¦a}x et non ±{a¦b}x.'],
 mini:[
  {q:'Hyperbole {x²¦9} − {y²¦16} = 1 : calcule c et e.', r:'c² = 9 + 16 = 25 donc <b>c = 5</b> ; <b>e = {5¦3}</b>.'},
  {q:'Asymptotes de la même hyperbole ?', r:'<b>y = ±{4¦3}x</b>'}],
 chk:[['Math.sqrt(25-9)','4'],['4/5','0.8'],['Math.sqrt(9+16)','5'],['5/3','1+2/3']]
},

'TleC — Similitudes planes directes & indirectes': {
 ess:[
  'Une <b>similitude directe</b> a une écriture complexe <b>z′ = az + b</b> avec a ∈ ℂ*. Elle multiplie les distances par k = |a| et conserve les angles orientés.',
  'Si a = 1 : <b>translation</b> de vecteur d\'affixe b. Si a ≠ 1 : un <b>unique point invariant</b> Ω d\'affixe ω = {b¦1 − a}. Rapport |a|, angle arg(a). C\'est la composée d\'une rotation et d\'une homothétie de centre Ω. Si de plus |a| = 1 : <b>rotation</b>.',
  'Propriétés : pour une similitude de centre Ω, ΩM′ = k ΩM et (ΩM⃗, ΩM′⃗) = θ [2π]. Les aires sont multipliées par k². Composée : rapport kk′, angle θ + θ′. Réciproque : rapport {1¦k}, angle −θ.',
  '<b>Similitude indirecte</b> : z′ = a z̄ + b. Si |a| = 1, c\'est un antidéplacement : <b>réflexion ⟺ a b̄ + b = 0</b>, sinon symétrie glissée.'],
 form:[
  'Il existe une unique similitude directe envoyant A sur A′ et B sur B′ (A ≠ B, A′ ≠ B′).',
  'Si |a| ≠ 1, la similitude indirecte est la composée d\'une réflexion d\'axe D et d\'une homothétie de rapport |a| de centre sur D.'],
 ex:{q:'Étudie la similitude s : z′ = (1 + i)z + 2 − i.',
  st:['a = 1 + i ≠ 1 : s a un unique point invariant. ω = {b¦1 − a} = {2 − i¦−i} = (2 − i) × i = 1 + 2i.',
      'Vérification : (1 + i)(1 + 2i) + 2 − i = −1 + 3i + 2 − i = 1 + 2i.',
      'Rapport |a| = √2. Angle : arg(1 + i) = {π¦4}.'],
  r:'<b>Similitude directe de centre Ω(1 + 2i), de rapport √2 et d\'angle {π¦4}.</b>'},
 pieges:[
  'Chercher un point invariant quand a = 1 : c\'est une translation (il n\'y en a aucun si b ≠ 0).',
  'Oublier que le rapport est |a| (le module) et que l\'angle est arg(a).',
  'Pour une similitude indirecte, la formule est a z̄ + b : le <b>conjugué</b> change le sens des angles.'],
 mini:[
  {q:'Nature de z′ = 2z + 3 − i ?', r:'a = 2 réel ≠ 1 : <b>homothétie</b> de rapport 2 et de centre ω = {3 − i¦−1} = −3 + i.'},
  {q:'Nature de z′ = z̄ + 2i ?', r:'a = 1, b = 2i : a b̄ + b = −2i + 2i = 0 : <b>réflexion d\'axe y = 1</b>.'}],
 chk:[['1*1-1*2+2','1'],['1*2+1*1-1','2'],['Math.sqrt(1+1)','Math.SQRT2'],['Math.atan2(1,1)','Math.PI/4'],['-3*2+3','-3']]
},

'TleC — Prop. & Déf.': { memo:true }
});
