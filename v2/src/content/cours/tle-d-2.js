/* ===== Résumés de cours — Tle D (thèmes 13 à 24 de la banque) — guide du programme de Terminale D ===== */
window.MQ_COURS = window.MQ_COURS || {};
window.MQ_COURS['Tle D'] = Object.assign(window.MQ_COURS['Tle D'] || {}, {

'TleD — Compléments sur les primitives': {
 ess:[
  'Une <b>primitive</b> de f sur un intervalle K est une fonction F dérivable sur K telle que <b>F′ = f</b>.',
  'Deux primitives d\'une même fonction sur un intervalle diffèrent d\'<b>une constante</b> : si F est une primitive, toutes les autres sont F + C.',
  'On reconnaît la forme « dérivée × quelque chose » : on repère f (la fonction « à l\'intérieur ») et on cherche f′ juste à côté.',
  'Pour fixer la constante, on utilise une condition du type F(x₀) = y₀.'],
 form:[
  'f′ × fⁿ  a pour primitive  {fⁿ⁺¹¦n + 1}   (n entier, n ≠ −1).',
  '{f′¦f²}  a pour primitive  −{1¦f}   (f ne s\'annule pas).',
  '{f′¦√f}  a pour primitive  2√f   (f > 0).',
  'f′ × (g′∘f)  a pour primitive  g∘f.    Exemples : sin x cos²x → −{cos³x¦3}  ;  {1¦cos²x} → tan x.'],
 ex:{q:'Trouver la primitive F de f(x) = 3x²(x³ + 1)⁴ sur ℝ telle que F(0) = 1.',
  st:['On pose u(x) = x³ + 1. Alors u′(x) = 3x². Donc f = u′ × u⁴.',
      'Une primitive de u′uⁿ est {uⁿ⁺¹¦n + 1}. Ici n = 4, donc F(x) = {(x³ + 1)⁵¦5} + C.',
      'Condition F(0) = 1 : {1¦5} + C = 1, donc C = {4¦5}.'],
  r:'F(x) = {(x³ + 1)⁵¦5} + {4¦5}'},
 pieges:[
  'Oublier la <b>constante C</b> : une primitive n\'est jamais unique.',
  'Oublier de diviser par <b>n + 1</b> (ou diviser par n au lieu de n + 1).',
  'Appliquer la formule alors que <b>f′ n\'apparaît pas</b> : il faut que le facteur dérivé soit bien présent (à une constante près, que l\'on peut ajuster).',
  'Pour {f′¦f²}, mettre +{1¦f} au lieu de <b>−</b>{1¦f}.'],
 mini:[
  {q:'Donner une primitive de {1¦(x + 1)²} sur ]−1 ; +∞[.', r:'<b>−{1¦x + 1}</b> (on a f = x + 1, f′ = 1, forme {f′¦f²}).'},
  {q:'Donner une primitive de sin x cos²x sur ℝ.', r:'<b>−{cos³x¦3}</b> (avec f = cos x, f′ = −sin x).'}],
 chk:[
  ['(x=>(x**3+1)**5/5+4/5)(0)','1'],
  ['(f=>(f(2+1e-5)-f(2-1e-5))/2e-5)(x=>(x**3+1)**5/5+4/5)','3*4*9**4'],
  ['(f=>(f(1+1e-4)-f(1-1e-4))/2e-4)(x=>-1/(x+1))','1/4'],
  ['(f=>(f(0.5+1e-5)-f(0.5-1e-5))/2e-5)(x=>-(Math.cos(x)**3)/3)','Math.sin(0.5)*Math.cos(0.5)**2']]
},

'TleD — Fonction logarithme népérien': {
 ess:[
  'La fonction <b>ln</b> est la primitive de x ↦ {1¦x} sur ]0 ; +∞[ qui <b>s\'annule en 1</b>. Elle n\'est définie que pour x > 0.',
  'ln est <b>strictement croissante</b> et bijective de ]0 ; +∞[ sur ℝ. L\'unique nombre dont le ln vaut 1 est <b>e ≈ 2,718</b>.',
  'Pour a, b > 0 : ln a = ln b ⟺ a = b ; ln a < ln b ⟺ a < b.',
  'Limites : ln x → +∞ en +∞ ; ln x → −∞ en 0⁺ ; {ln x¦x} → 0 en +∞ ; x ln x → 0 en 0⁺ ; {ln(1 + x)¦x} → 1 en 0.'],
 form:[
  'ln(xy) = ln x + ln y    ln{x¦y} = ln x − ln y    ln{1¦x} = −ln x    ln(xʳ) = r ln x.',
  'ln 1 = 0  et  ln e = 1.',
  '(ln u)′ = {u′¦u}  (u > 0).  Une primitive de {u′¦u} est <b>ln|u|</b> (u ne s\'annule pas).',
  'Logarithme décimal : log x = {ln x¦ln 10}.'],
 ex:{q:'Résoudre dans ℝ : ln(x − 1) + ln(x + 1) = ln 8.',
  st:['Conditions d\'existence : x − 1 > 0 et x + 1 > 0, donc x > 1.',
      'On regroupe : ln[(x − 1)(x + 1)] = ln 8, donc x² − 1 = 8 (ln est injective).',
      'x² = 9, donc x = 3 ou x = −3.',
      'Seul x = 3 vérifie x > 1. Vérification : ln 2 + ln 4 = ln 8.'],
  r:'S = <b>{3}</b>'},
 pieges:[
  'Oublier le <b>domaine de définition</b> : on résout, puis on élimine les valeurs interdites (ici −3).',
  'ln(x + y) n\'est <b>pas</b> ln x + ln y : c\'est le produit xy qui devient une somme.',
  'ln x − ln y = ln{x¦y}, pas {ln x¦ln y}.',
  'Dans une inéquation, ln étant croissante, le sens de l\'inégalité est <b>conservé</b>.'],
 mini:[
  {q:'Écrire ln 12 − ln 3 sous la forme a ln 2.', r:'ln 12 − ln 3 = ln 4 = <b>2 ln 2</b>.'},
  {q:'Résoudre ln x ≥ 2.', r:'ln x ≥ ln(e²) donc <b>x ≥ e²</b> (≈ 7,39).'}],
 chk:[
  ['Math.log(3-1)+Math.log(3+1)','Math.log(8)'],
  ['Math.log(12)-Math.log(3)','2*Math.log(2)'],
  ['Math.exp(2)>7.38&&Math.exp(2)<7.39','true'],
  ['3**2-1','8']]
},

'TleD — Fonction exponentielle népérienne': {
 ess:[
  'La fonction <b>exp</b> est la réciproque de ln : exp(ln x) = x pour x > 0 et ln(exp x) = x pour tout réel x. On écrit exp(x) = <b>eˣ</b>.',
  'exp est une bijection de ℝ sur ]0 ; +∞[ : <b>eˣ > 0</b> toujours. Elle est strictement croissante.',
  'eᵃ = eᵇ ⟺ a = b ; eᵃ < eᵇ ⟺ a < b.',
  'Limites : eˣ → +∞ en +∞ ; eˣ → 0 en −∞ ; {eˣ¦x} → +∞ en +∞ ; x eˣ → 0 en −∞ ; {eˣ − 1¦x} → 1 en 0.'],
 form:[
  'eᵃ⁺ᵇ = eᵃ × eᵇ    e⁻ᵃ = {1¦eᵃ}    eᵃ⁻ᵇ = {eᵃ¦eᵇ}    (eᵃ)ʳ = e^(ar).',
  '(eˣ)′ = eˣ    (e^u)′ = <b>u′ e^u</b>    Une primitive de u′ e^u est e^u.',
  'eˣ = k (k > 0) ⟺ x = ln k.'],
 ex:{q:'Résoudre dans ℝ : e^(2x) − 5eˣ + 6 = 0.',
  st:['On remarque que e^(2x) = (eˣ)². On pose X = eˣ (avec X > 0).',
      'L\'équation devient X² − 5X + 6 = 0, soit (X − 2)(X − 3) = 0.',
      'Donc X = 2 ou X = 3. Les deux sont bien > 0.',
      'On revient à x : eˣ = 2 donne x = ln 2 ; eˣ = 3 donne x = ln 3.'],
  r:'S = <b>{ln 2 ; ln 3}</b>'},
 pieges:[
  'e^(a + b) n\'est <b>pas</b> eᵃ + eᵇ. Et eᵃ × eᵇ ne donne pas e^(ab).',
  'Oublier que eˣ est <b>toujours strictement positif</b> : eˣ = −2 n\'a aucune solution.',
  'Dérivée de e^(2x) : c\'est 2e^(2x), pas e^(2x) (il faut le facteur u′).',
  'Dans un changement de variable X = eˣ, ne pas revenir à x à la fin.'],
 mini:[
  {q:'Simplifier {e^(x + 1)¦e^(x − 2)}.', r:'e^((x + 1) − (x − 2)) = <b>e³</b>.'},
  {q:'Dériver f(x) = e^(−2x).', r:'u = −2x, u′ = −2, donc f′(x) = <b>−2e^(−2x)</b>.'}],
 chk:[
  ['Math.exp(2*Math.log(2))-5*2+6','0'],
  ['Math.exp(2*Math.log(3))-5*3+6','0'],
  ['Math.exp(5+1)/Math.exp(5-2)','Math.exp(3)'],
  ['(f=>(f(0.3+1e-5)-f(0.3-1e-5))/2e-5)(x=>Math.exp(-2*x))','-2*Math.exp(-0.6)']]
},

'TleD — Exponentielles de base a & fonctions puissances': {
 ess:[
  'Pour a > 0 et α réel : <b>aᵅ = e^(α ln a)</b>. Cela donne un sens à 2^(√2), à 8^(2/3), etc.',
  'La fonction <b>x ↦ aˣ</b> (a > 0, a ≠ 1) est une bijection de ℝ sur ]0 ; +∞[ : <b>croissante</b> si a > 1, <b>décroissante</b> si 0 < a < 1.',
  'La fonction <b>x ↦ xᵅ</b> est définie sur ]0 ; +∞[. Si α > 0, xᵅ → +∞ en +∞ ; si α < 0, xᵅ → 0 en +∞.',
  'Croissances comparées : si α > 0, {ln x¦xᵅ} → 0 en +∞ ; pour n entier, xⁿ eˣ → 0 en −∞.'],
 form:[
  'aˣ⁺ʸ = aˣ × aʸ    (aˣ)ʸ = aˣʸ    aˣ bˣ = (ab)ˣ.',
  '(aˣ)′ = <b>ln a × aˣ</b>    (xᵅ)′ = <b>α x^(α − 1)</b>    (gᵅ)′ = α g′ g^(α − 1)  (g > 0).',
  'Une primitive de xᵅ (α ≠ −1) sur ]0 ; +∞[ est {x^(α + 1)¦α + 1}.'],
 ex:{q:'Résoudre dans ℝ : 2^(x + 1) = 3ˣ. Donner la valeur exacte puis une valeur approchée.',
  st:['On passe au logarithme (tout est > 0) : (x + 1) ln 2 = x ln 3.',
      'On regroupe les x : x ln 3 − x ln 2 = ln 2, soit x (ln 3 − ln 2) = ln 2.',
      'Donc x = {ln 2¦ln 3 − ln 2} = {ln 2¦ln(3/2)}.',
      'Valeur approchée : ln 2 ≈ 0,6931 et ln 1,5 ≈ 0,4055, donc x ≈ 1,71.'],
  r:'x = <b>{ln 2¦ln 3 − ln 2} ≈ 1,71</b>'},
 pieges:[
  'La dérivée de aˣ n\'est <b>pas</b> x aˣ⁻¹ (c\'est la dérivée de xᵅ). Pour aˣ : ln a × aˣ.',
  'Ne pas confondre <b>aˣ</b> (la variable est en exposant) et <b>xᵅ</b> (la variable est à la base).',
  'a^(x + 1) = a × aˣ, et non aˣ + a.',
  'Si 0 < a < 1, aˣ est <b>décroissante</b> : en passant à l\'exposant, le sens de l\'inégalité change.'],
 mini:[
  {q:'Calculer 27^(2/3).', r:'27^(2/3) = (3³)^(2/3) = 3² = <b>9</b>.'},
  {q:'Donner la dérivée de f(x) = 2ˣ.', r:'f′(x) = <b>ln 2 × 2ˣ</b>.'}],
 chk:[
  ['2**(Math.log(2)/Math.log(1.5)+1)','3**(Math.log(2)/Math.log(1.5))'],
  ['Math.log(2)/Math.log(1.5)>1.70&&Math.log(2)/Math.log(1.5)<1.72','true'],
  ['27**(2/3)','9'],
  ['(f=>(f(1+1e-5)-f(1-1e-5))/2e-5)(x=>2**x)','Math.log(2)*2']]
},

'TleD — Calcul intégral': {
 ess:[
  'Si F est une primitive de f, l\'<b>intégrale</b> de a à b de f est le nombre F(b) − F(a), noté [F(x)] de a à b. Elle ne dépend pas de la primitive choisie.',
  'Si f est <b>continue et positive</b> sur [a ; b], l\'intégrale est l\'<b>aire</b> (en unités d\'aire) du domaine entre la courbe, l\'axe (Ox) et les droites x = a, x = b.',
  'Si f ≥ g sur [a ; b], alors ∫f ≥ ∫g, et l\'aire entre les deux courbes vaut ∫(f − g).',
  'La <b>valeur moyenne</b> de f sur [a ; b] est {1¦b − a} × ∫ de a à b de f.'],
 form:[
  '∫ de a à a = 0.    ∫ de b à a = −∫ de a à b.    Chasles : ∫ de a à c + ∫ de c à b = ∫ de a à b.',
  'Linéarité : ∫(αf + βg) = α∫f + β∫g.   Si m ≤ f ≤ M : m(b − a) ≤ ∫f ≤ M(b − a).',
  'f paire : ∫ de −a à a = 2∫ de 0 à a.   f impaire : ∫ de −a à a = 0.',
  'Intégration par parties : ∫ de a à b de f g′ = [f g] de a à b − ∫ de a à b de f′ g.',
  'Volume de révolution autour de (Ox) : V = π ∫ de a à b de f(x)² dx.    Volume par sections : V = ∫ de a à b de S(t) dt.',
  'F(x) = ∫ de a à x de f(t) dt est l\'unique primitive de f qui s\'annule en a.    f continue et T-périodique : ∫ de a à a + T de f ne dépend pas de a.    Méthodes des rectangles et des trapèzes : valeurs approchées d\'une intégrale.'],
 ex:{q:'Calculer I = ∫ de 1 à 2 de (2x + {1¦x²}) dx.',
  st:['Une primitive de 2x est x². Une primitive de {1¦x²} est −{1¦x}. Donc F(x) = x² − {1¦x}.',
      'F(2) = 4 − {1¦2} = {7¦2}.',
      'F(1) = 1 − 1 = 0.',
      'I = F(2) − F(1) = {7¦2} − 0.'],
  r:'I = <b>{7¦2} = 3,5</b>'},
 pieges:[
  'Écrire F(a) − F(b) : c\'est <b>F(b) − F(a)</b> (borne du haut moins borne du bas).',
  'Oublier que l\'intégrale est <b>négative</b> si f est négative : l\'aire est alors son opposé.',
  'Dans l\'intégration par parties, oublier le <b>signe −</b> devant la seconde intégrale.',
  'Volume de révolution : mettre f(x) au lieu de <b>f(x)²</b> (et oublier π).'],
 mini:[
  {q:'Calculer ∫ de 0 à 1 de e^(2x) dx.', r:'Primitive {e^(2x)¦2} : <b>{e² − 1¦2}</b> ≈ 3,19.'},
  {q:'Valeur moyenne de f(x) = x² sur [0 ; 3].', r:'{1¦3} × [{x³¦3}] de 0 à 3 = {1¦3} × 9 = <b>3</b>.'}],
 chk:[
  ['(4-1/2)-(1-1)','3.5'],
  ['(()=>{let n=2000,a=1,b=2,h=(b-a)/n,f=x=>2*x+1/(x*x),s=f(a)+f(b);for(let i=1;i<n;i++)s+=(i%2?4:2)*f(a+i*h);return s*h/3})()','3.5'],
  ['(Math.exp(2)-1)/2','(()=>{let n=2000,h=1/n,f=x=>Math.exp(2*x),s=f(0)+f(1);for(let i=1;i<n;i++)s+=(i%2?4:2)*f(i*h);return s*h/3})()'],
  ['(1/3)*(27/3)','3']]
},

'TleD — Équations différentielles': {
 ess:[
  'Une <b>équation différentielle</b> a pour inconnue une fonction y ; ses solutions sont des fonctions. Il y a en général une famille de solutions avec des constantes.',
  '<b>y′ = f(x)</b> : les solutions sont les primitives de f. <b>y″ = g(x)</b> : on cherche deux fois une primitive (deux constantes).',
  '<b>ay′ + by = 0</b> (a ≠ 0) : les solutions sont y = C e^(−bx/a).',
  '<b>ay″ + by′ + cy = 0</b> : on forme l\'<b>équation caractéristique</b> ar² + br + c = 0 et on regarde ses racines.',
  'Une condition initiale (ex. y(0) = 3) permet de trouver les constantes.'],
 form:[
  'Deux racines réelles r₁ ≠ r₂ : y = C₁ e^(r₁x) + C₂ e^(r₂x).',
  'Racine double r : y = (C₁x + C₂) e^(rx).',
  'Racines complexes α ± iβ : y = e^(αx)(C₁ cos βx + C₂ sin βx).',
  'y′ = ay : y = C e^(ax).    Ex. y′ + y = 1 : y = 1 est une solution particulière, donc y = 1 + C e^(−x).',
  'ay′ + by = f(x) : solution = une solution particulière + la solution générale de ay′ + by = 0.'],
 ex:{q:'Résoudre y″ − 5y′ + 6y = 0 avec y(0) = 1 et y′(0) = 0.',
  st:['Équation caractéristique : r² − 5r + 6 = 0, soit (r − 2)(r − 3) = 0. Racines 2 et 3.',
      'Solutions : y = C₁e^(2x) + C₂e^(3x). Donc y′ = 2C₁e^(2x) + 3C₂e^(3x).',
      'y(0) = 1 : C₁ + C₂ = 1.  y′(0) = 0 : 2C₁ + 3C₂ = 0.',
      'De la première, C₁ = 1 − C₂. Dans la seconde : 2 − 2C₂ + 3C₂ = 0, donc C₂ = −2 et C₁ = 3.'],
  r:'y = <b>3e^(2x) − 2e^(3x)</b>'},
 pieges:[
  'Oublier la <b>constante C</b> : la solution générale n\'est pas une seule fonction.',
  'Se tromper de signe : pour y′ + 4y = 0, la solution est C e<b>^(−4x)</b>, pas C e^(4x).',
  'Utiliser y(0) = 1 pour <b>y′</b> : il faut dériver la solution avant d\'appliquer y′(0).',
  'Pour les racines complexes, ne pas confondre α (partie réelle) et β (partie imaginaire).'],
 mini:[
  {q:'Résoudre y′ + 4y = 0 avec y(0) = 2.', r:'y = Ce^(−4x) et C = 2 : <b>y = 2e^(−4x)</b>.'},
  {q:'Résoudre y″ + 9y = 0.', r:'r² + 9 = 0, r = ±3i : <b>y = C₁ cos 3x + C₂ sin 3x</b>.'}],
 chk:[
  ['3-2','1'],
  ['3*2-2*3','0'],
  ['12*Math.exp(.8)-18*Math.exp(1.2)-5*(6*Math.exp(.8)-6*Math.exp(1.2))+6*(3*Math.exp(.8)-2*Math.exp(1.2))','0'],
  ['-8*Math.exp(-1.2)+4*2*Math.exp(-1.2)','0'],['(f=>(f(.3+1e-5)-f(.3-1e-5))/2e-5+f(.3))(x=>1+2*Math.exp(-x))','1']]
},

'TleD — Probabilités : événements & probabilité conditionnelle': {
 ess:[
  'Une <b>probabilité</b> p sur un univers Ω vérifie : 0 ≤ p ≤ 1, p(Ω) = 1, et p(A ∪ B) = p(A) + p(B) si A et B sont <b>incompatibles</b> (A ∩ B = ∅).',
  'En <b>équiprobabilité</b> : p(A) = {nombre de cas favorables¦nombre de cas possibles}.',
  'Un <b>système complet</b> d\'événements est formé d\'événements deux à deux incompatibles dont la réunion est Ω.',
  'La <b>probabilité conditionnelle</b> de A sachant B (p(B) ≠ 0) est p_B(A) = {p(A ∩ B)¦p(B)}.',
  'A et B sont <b>indépendants</b> si p(A ∩ B) = p(A) × p(B).'],
 form:[
  'p(non A) = 1 − p(A)    p(A ∪ B) = p(A) + p(B) − p(A ∩ B).',
  'p(A ∩ B) = p(A) × p_A(B) = p(B) × p_B(A).',
  'Formule des probabilités totales : si (B₁, …, Bₙ) est un système complet, p(A) = p(A ∩ B₁) + … + p(A ∩ Bₙ).',
  'Si A et B sont indépendants : p_B(A) = p(A).'],
 ex:{q:'Dans un lycée, 60 % des élèves sont des filles. 20 % des filles et 30 % des garçons font du football. On choisit un élève au hasard. Calculer la probabilité qu\'il fasse du football, puis la probabilité que ce soit une fille sachant qu\'il fait du football.',
  st:['Notons F « c\'est une fille » et S « fait du football ». p(F) = 0,6 ; p(non F) = 0,4 ; p_F(S) = 0,2 ; p_nonF(S) = 0,3.',
      'p(F ∩ S) = 0,6 × 0,2 = 0,12 et p(non F ∩ S) = 0,4 × 0,3 = 0,12.',
      '(F, non F) est un système complet : p(S) = 0,12 + 0,12 = 0,24.',
      'p_S(F) = {p(F ∩ S)¦p(S)} = {0,12¦0,24} = 0,5.'],
  r:'p(S) = <b>0,24</b> ; p_S(F) = <b>0,5</b>'},
 pieges:[
  'Confondre <b>p_B(A)</b> et p_A(B) : ce ne sont pas les mêmes nombres.',
  'Confondre <b>incompatibles</b> (A ∩ B = ∅) et <b>indépendants</b> (p(A ∩ B) = p(A)p(B)).',
  'Oublier de soustraire p(A ∩ B) dans p(A ∪ B) quand A et B ne sont pas incompatibles.',
  'Tirage sans remise : les probabilités du second tirage <b>changent</b> (le contenu de l\'urne a changé).'],
 mini:[
  {q:'p(A) = 0,5 ; p(B) = 0,3 ; p(A ∪ B) = 0,6. Calculer p(A ∩ B). A et B sont-ils indépendants ?', r:'p(A ∩ B) = 0,5 + 0,3 − 0,6 = <b>0,2</b>. Or 0,5 × 0,3 = 0,15 ≠ 0,2 : <b>non indépendants</b>.'},
  {q:'Une urne contient 4 boules blanches et 6 noires. On tire 2 boules sans remise. Probabilité d\'avoir 2 blanches ?', r:'{4¦10} × {3¦9} = {12¦90} = <b>{2¦15}</b>.'}],
 chk:[
  ['0.6*0.2+0.4*0.3','0.24'],
  ['0.6*0.2/(0.6*0.2+0.4*0.3)','0.5'],
  ['0.5+0.3-0.6','0.2'],
  ['0.5*0.3===0.2','false'],
  ['4/10*3/9','2/15']]
},

'TleD — Variables aléatoires & loi binomiale': {
 ess:[
  'Une <b>variable aléatoire</b> X associe un nombre réel à chaque issue de l\'expérience. Sa <b>loi</b> donne les probabilités p(X = xᵢ) ; leur somme vaut 1.',
  'Espérance : <b>E(X) = Σ pᵢxᵢ</b> (la moyenne « attendue »). Variance : <b>V(X) = Σ pᵢ(xᵢ − E(X))² = Σ pᵢxᵢ² − E(X)²</b>. Écart-type : σ(X) = √V(X).',
  'Fonction de répartition : F(t) = p(X ≤ t) ; elle est croissante, à valeurs dans [0 ; 1].',
  'Une <b>épreuve de Bernoulli</b> a deux issues : succès (probabilité p) ou échec (probabilité 1 − p). On en répète n, identiques et indépendantes : c\'est un <b>schéma de Bernoulli</b>.',
  'Le nombre de succès X suit la <b>loi binomiale B(n ; p)</b>.'],
 form:[
  'p(X = k) = C(n, k) × pᵏ × (1 − p)ⁿ⁻ᵏ    avec C(n, k) = {n!¦k!(n − k)!}.',
  'E(X) = <b>np</b>    V(X) = <b>np(1 − p)</b>.',
  'p(X ≥ 1) = 1 − p(X = 0) = 1 − (1 − p)ⁿ.'],
 ex:{q:'Un élève répond au hasard à un QCM de 5 questions ; chaque question a 4 choix dont un seul est bon. X est le nombre de bonnes réponses. Donner la loi de X, p(X = 2), E(X) et V(X).',
  st:['Chaque question est une épreuve de Bernoulli de succès p = {1¦4}. Les 5 réponses sont indépendantes : X suit B(5 ; {1¦4}).',
      'p(X = 2) = C(5, 2) × ({1¦4})² × ({3¦4})³ = 10 × {1¦16} × {27¦64} = {270¦1024} = {135¦512}.',
      'E(X) = np = 5 × {1¦4} = {5¦4} = 1,25.',
      'V(X) = np(1 − p) = 5 × {1¦4} × {3¦4} = {15¦16}.'],
  r:'X ~ B(5 ; {1¦4}) ; p(X = 2) = <b>{135¦512}</b> ; E(X) = <b>1,25</b> ; V(X) = <b>{15¦16}</b>'},
 pieges:[
  'Oublier le coefficient <b>C(n, k)</b> : il compte les façons de placer les k succès.',
  'Utiliser la loi binomiale quand les épreuves ne sont <b>pas indépendantes</b> (tirage sans remise).',
  'Oublier de mettre au <b>carré</b> (xᵢ − E(X)) dans la variance, ou oublier la racine pour l\'écart-type.',
  'Confondre <b>p(X ≥ 1)</b> et p(X = 1) : pour « au moins un », on passe par l\'événement contraire.'],
 mini:[
  {q:'X prend les valeurs 1, 2, 3 avec les probabilités 0,5 ; 0,3 ; 0,2. Calculer E(X).', r:'1 × 0,5 + 2 × 0,3 + 3 × 0,2 = <b>1,7</b>.'},
  {q:'On lance 3 fois une pièce équilibrée. Probabilité d\'obtenir au moins une fois pile ?', r:'1 − p(aucun pile) = 1 − ({1¦2})³ = <b>{7¦8}</b>.'}],
 chk:[
  ['10*(1/4)**2*(3/4)**3','135/512'],
  ['5*(1/4)','1.25'],
  ['5*(1/4)*(3/4)','15/16'],
  ['1*0.5+2*0.3+3*0.2','1.7'],
  ['1-(1/2)**3','7/8']]
},

'TleD — Suites numériques': {
 ess:[
  'Le <b>raisonnement par récurrence</b> : on montre P(0) (initialisation), puis « P(n) ⟹ P(n + 1) » pour tout n (hérédité). Alors P(n) est vraie pour tout n.',
  'Toute suite <b>croissante et majorée</b> converge ; toute suite <b>décroissante et minorée</b> converge. Une suite croissante non majorée tend vers +∞.',
  'Une suite convergente est <b>bornée</b>. Une suite sans limite finie <b>diverge</b> (ex. (−1)ⁿ).',
  'Si Uₙ₊₁ = g(Uₙ) converge vers l et si g est continue, alors <b>g(l) = l</b> : cela donne la limite.',
  'Comparaison : gendarmes (Vₙ ≤ Uₙ ≤ Wₙ, lim Vₙ = lim Wₙ = l ⟹ lim Uₙ = l) ; si Uₙ ≥ Vₙ et Vₙ → +∞, alors Uₙ → +∞.'],
 form:[
  'aⁿ → +∞ si a > 1 ;  aⁿ → 0 si |a| < 1.  Pour une suite géométrique de raison q, |q| < 1 ⟹ limite 0.',
  'Croissances comparées : {n²¦2ⁿ} → 0 ;  {sin n¦n} → 0 (gendarmes).',
  'Si |Uₙ − l| ≤ Vₙ et Vₙ → 0, alors Uₙ → l.    Si Uₙ ≤ Vₙ à partir d\'un rang, Uₙ → l et Vₙ → l′, alors l ≤ l′ (inégalité large).',
  'Suite homographique du type {an + b¦cn + d} : on divise par n, la limite est {a¦c}.'],
 ex:{q:'U₀ = 1 et Uₙ₊₁ = √(2 + Uₙ). Montrer que (Uₙ) converge et trouver sa limite.',
  st:['Par récurrence, 0 ≤ Uₙ ≤ 2. Initialisation : 0 ≤ U₀ = 1 ≤ 2. Hérédité : si 0 ≤ Uₙ ≤ 2, alors 2 ≤ 2 + Uₙ ≤ 4, donc √2 ≤ Uₙ₊₁ ≤ 2 et en particulier 0 ≤ Uₙ₊₁ ≤ 2.',
      'Sens de variation : Uₙ₊₁² − Uₙ² = 2 + Uₙ − Uₙ² = (2 − Uₙ)(1 + Uₙ) ≥ 0, donc Uₙ₊₁ ≥ Uₙ : la suite est croissante.',
      'Croissante et majorée par 2, elle <b>converge</b> vers un réel l.',
      'La fonction racine est continue : l = √(2 + l). Donc l² = 2 + l, soit l² − l − 2 = 0, donc l = 2 ou l = −1.',
      'Comme Uₙ ≥ 0, l ≥ 0 : on garde l = 2.'],
  r:'(Uₙ) converge vers <b>2</b>'},
 pieges:[
  'Oublier l\'<b>initialisation</b> ou l\'hérédité : sans les deux, la récurrence est fausse.',
  'Écrire g(l) = l <b>avant</b> d\'avoir prouvé que la suite converge.',
  'Garder les deux solutions de l\'équation : il faut éliminer celle qui contredit l\'encadrement (ici l = −1).',
  'Dire qu\'une suite bornée converge : <b>faux</b> ((−1)ⁿ est bornée mais diverge).'],
 mini:[
  {q:'Limite de Uₙ = {3n + 1¦n + 5} ?', r:'On divise par n : {3 + 1/n¦1 + 5/n} → <b>3</b>.'},
  {q:'Limite de (−{1¦2})ⁿ ?', r:'|q| = {1¦2} < 1, donc la limite est <b>0</b>.'}],
 chk:[
  ['(()=>{let u=1;for(let i=0;i<60;i++)u=Math.sqrt(2+u);return u})()','2'],
  ['Math.sqrt(2+2)','2'],
  ['2**2-2-2','0'],
  ['(3*1e12+1)/(1e12+5)','3'],
  ['Math.pow(-0.5,100)','0']]
},

'TleD — Statistiques à deux variables': {
 ess:[
  'Une série double (X, Y) donne des couples (xᵢ ; yᵢ). Le <b>nuage de points</b> est l\'ensemble des points Mᵢ(xᵢ ; yᵢ). Le <b>point moyen</b> G a pour coordonnées (moyenne de X ; moyenne de Y).',
  '<b>Méthode de Mayer</b> : on partage les observations en deux groupes de même effectif (ou presque), on calcule leurs deux points moyens G₁ et G₂, et la droite de Mayer est (G₁G₂).',
  '<b>Moindres carrés</b> : la droite de régression de Y en X est y = ax + b, avec a = {Cov(X, Y)¦V(X)} et b = Ȳ − aX̄. Elle passe par G.',
  'Le <b>coefficient de corrélation linéaire</b> mesure la qualité de l\'ajustement : <b>r = {Cov(X, Y)¦σ(X)σ(Y)}</b>, toujours −1 ≤ r ≤ 1.'],
 form:[
  'Cov(X, Y) = {1¦N} Σ xᵢyᵢ − X̄ × Ȳ.    V(X) = {1¦N} Σ xᵢ² − X̄².    σ(X) = √V(X).',
  '|r| = 1 : points alignés (ajustement parfait).   0,87 ≤ |r| < 1 : <b>forte corrélation</b>, résultats fiables.',
  '|r| < 0,87 : liaison <b>lâche</b>, résultats peu fiables.   r proche de 0 : pas de lien linéaire.'],
 ex:{q:'Série : x = 1 ; 2 ; 3 ; 4 ; 5 et y = 2 ; 3 ; 5 ; 6 ; 9. Déterminer la droite de régression de Y en X, puis estimer y pour x = 6.',
  st:['Moyennes : X̄ = {15¦5} = 3 et Ȳ = {25¦5} = 5.',
      'Σ xᵢyᵢ = 2 + 6 + 15 + 24 + 45 = 92, donc Cov(X, Y) = {92¦5} − 3 × 5 = 18,4 − 15 = 3,4.',
      'V(X) = {1 + 4 + 9 + 16 + 25¦5} − 3² = 11 − 9 = 2.',
      'a = {3,4¦2} = 1,7 et b = 5 − 1,7 × 3 = −0,1.',
      'Estimation pour x = 6 : y = 1,7 × 6 − 0,1 = 10,1.'],
  r:'y = <b>1,7x − 0,1</b> ; pour x = 6, y ≈ <b>10,1</b>'},
 pieges:[
  'Oublier de <b>soustraire X̄ × Ȳ</b> dans la covariance (ou X̄² dans la variance).',
  'La droite de Y en X (a = Cov/V(X)) n\'est <b>pas</b> celle de X en Y : on ne divise pas par la même variance.',
  'Un r proche de 1 ne prouve pas une cause : il dit seulement que les points sont presque alignés.',
  'Estimer très loin des données observées : la prévision devient peu fiable.'],
 mini:[
  {q:'Points (2 ; 3), (4 ; 7), (6 ; 8). Donner le point moyen G.', r:'X̄ = {12¦3} = 4 et Ȳ = {18¦3} = 6 : <b>G(4 ; 6)</b>.'},
  {q:'Cov(X, Y) = −3, σ(X) = 2, σ(Y) = 2. Calculer r et conclure.', r:'r = {−3¦2 × 2} = <b>−0,75</b>. Comme |r| < 0,87, la liaison est <b>lâche</b>.'}],
 chk:[
  ['(()=>{const x=[1,2,3,4,5],y=[2,3,5,6,9],n=5,m=a=>a.reduce((s,v)=>s+v,0)/n,mx=m(x),my=m(y),c=m(x.map((v,i)=>v*y[i]))-mx*my,vx=m(x.map(v=>v*v))-mx*mx;return c/vx})()','1.7'],
  ['(()=>{const x=[1,2,3,4,5],y=[2,3,5,6,9],n=5,m=a=>a.reduce((s,v)=>s+v,0)/n,mx=m(x),my=m(y),c=m(x.map((v,i)=>v*y[i]))-mx*my,vx=m(x.map(v=>v*v))-mx*mx;return my-c/vx*mx})()','-0.1'],
  ['1.7*6-0.1','10.1'],
  ['(2+4+6)/3','4'],
  ['(3+7+8)/3','6'],
  ['-3/(2*2)','-0.75']]
},

'TleD — Complexes & transformations du plan': {
 ess:[
  'On identifie le plan à ℂ : un point M d\'affixe z est envoyé sur M′ d\'affixe z′. L\'<b>écriture complexe</b> de la transformation donne z′ en fonction de z.',
  '<b>Translation</b> de vecteur d\'affixe b : z′ = z + b.',
  '<b>Homothétie</b> de centre Ω (affixe ω) et de rapport k réel : z′ − ω = k(z − ω).',
  '<b>Rotation</b> de centre Ω et d\'angle θ : z′ − ω = e^(iθ)(z − ω). Pour Ω = O : z′ = e^(iθ) z.',
  'Une <b>similitude plane directe</b> a pour écriture z′ = az + b (a ≠ 0). Son <b>rapport</b> est |a| et son angle est arg(a).'],
 form:[
  'a = 1 : translation de vecteur d\'affixe b.',
  'a réel, a ≠ 1 : homothétie de rapport a, de centre d\'affixe <b>{b¦1 − a}</b>.',
  '|a| = 1, a ≠ 1 : rotation d\'angle arg(a), de centre d\'affixe <b>{b¦1 − a}</b>.',
  'a non réel, |a| ≠ 1 : composée d\'une rotation et d\'une homothétie de même centre {b¦1 − a}.',
  'Si a ≠ 1, il y a un <b>unique point invariant</b> : ω = {b¦1 − a} (solution de z = az + b).'],
 ex:{q:'Déterminer la nature et les éléments caractéristiques de la transformation z′ = −iz + 1 + i.',
  st:['La transformation est de la forme z′ = az + b avec a = −i et b = 1 + i.',
      'a n\'est pas réel, |a| = |−i| = 1 et a ≠ 1 : c\'est une <b>rotation</b>.',
      'Son angle est arg(−i) = −{π¦2}.',
      'Centre : ω = {b¦1 − a} = {1 + i¦1 + i} = 1. Vérification : −i × 1 + 1 + i = 1, le point d\'affixe 1 est bien invariant.'],
  r:'Rotation de centre d\'affixe <b>1</b> et d\'angle <b>−{π¦2}</b> (quart de tour indirect)'},
 pieges:[
  'Oublier de retirer le centre : la rotation de centre Ω s\'écrit z′ − ω = e^(iθ)(z − ω), pas z′ = e^(iθ) z.',
  'Calculer le centre avec {b¦1 + a} au lieu de <b>{b¦1 − a}</b>.',
  'Confondre le <b>rapport</b> (|a|) et l\'<b>angle</b> (arg a).',
  'Dire que z′ = az + b est une homothétie alors que a n\'est pas réel : il faut vérifier que a est <b>réel</b>.'],
 mini:[
  {q:'Nature de z′ = 2z + 3 ? Donner son centre.', r:'a = 2 est réel et ≠ 1 : <b>homothétie de rapport 2</b>, de centre {3¦1 − 2} = <b>−3</b>.'},
  {q:'Rapport et angle de la similitude z′ = (√3 + i)z ?', r:'|a| = √(3 + 1) = 2 et arg(a) = {π¦6} : <b>rapport 2, angle {π¦6}</b>, de centre O.'}],
 chk:[
  ['Math.hypot(0,-1)','1'],
  ['0*1-(-1)*0+1','1'],
  ['0*0+(-1)*1+1','0'],
  ['2*(-3)+3','-3'],
  ['Math.hypot(Math.sqrt(3),1)','2'],
  ['Math.atan2(1,Math.sqrt(3))','Math.PI/6']]
},

'TleD — Prop. & Déf.': { memo:true }
});
