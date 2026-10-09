/* Données de la classe 2nde A : questions + résumés de cours (généré par build.mjs) */
/* Questions de la classe de 2nde A (2nd cycle) — un thème = une liste de questions. */
Object.assign(THEMES_C2, {
  "2A — Proportionnalité & pourcentages": [
    {q:"Deux grandeurs sont proportionnelles lorsque…",c:["leur différence est constante","leur somme est constante","elles sont égales","on passe des valeurs de l'une à celles de l'autre en multipliant par un même nombre non nul"],a:3,exp:"Définition"},
    {q:"Dans le tableau (2 ; 6) et (5 ; 15), le coefficient de proportionnalité est…",c:["30","2","3","4"],a:2,exp:"6 ÷ 2 = 15 ÷ 5"},
    {q:"5 kg de riz coûtent 3 500 F. Le prix de 8 kg est…",c:["4 500 F","2 800 F","28 000 F","5 600 F"],a:3,exp:"1 kg coûte 700 F"},
    {q:"20 % de 150 est égal à…",c:["300","20","30","7,5"],a:2,exp:"150 × 20/100"},
    {q:"Une remise de 10 % sur un article de 8 000 F représente…",c:["8 000 F","80 F","10 F","800 F"],a:3,exp:"10 % de 8 000"},
    {q:"Après une remise de 10 % sur 8 000 F, le prix à payer est…",c:["800 F","8 800 F","7 900 F","7 200 F"],a:3,exp:"8 000 − 800"},
    {q:"Sur 40 élèves, 10 sont absents : le pourcentage d'absents est…",c:["4 %","10 %","25 %","40 %"],a:2,exp:"10/40 = 0,25"},
    {q:"Sur une carte à l'échelle 1/50 000, 4 cm représentent en réalité…",c:["0,2 km","20 km","200 m","2 km"],a:3,exp:"4 × 50 000 cm = 200 000 cm"},
    {q:"Zoé a 7 notes de moyenne 13,5. La somme de ses notes est…",c:["7","20,5","94,5","13,5"],a:2,exp:"7 × 13,5"},
    {q:"Zoé a 7 notes de moyenne 13,5 ; avec une 8e note de 18, sa nouvelle moyenne est…",c:["15,75","14","14,0625","13,5"],a:2,exp:"(94,5 + 18)/8"},
    {q:"On partage 1 200 F proportionnellement à 2, 3 et 7. La plus grande part est…",c:["700 F","840 F","300 F","200 F"],a:0,exp:"1 200 ÷ 12 = 100 F par part ; 7 parts"},
    {q:"Le tableau (3 ; 5 ; 7) et (9 ; 15 ; 22) est-il de proportionnalité ?",c:["Non, car 22 ≠ 7 × 3","Oui, avec le coefficient 3","Oui, avec le coefficient 22/7","On ne peut pas savoir"],a:0,exp:"9/3 = 15/5 = 3 mais 22/7 ≠ 3"},
  ],
  "2A — Fonctions numériques : généralités": [
    {q:"Une fonction numérique associe à chaque réel x de son ensemble de définition…",c:["au plus un réel f(x)","aucun réel","deux réels","un intervalle"],a:0,exp:"Définition"},
    {q:"L'ensemble de définition de f(x) = 1/(x − 2) est…",c:["ℝ","ℝ privé de 2","]2 ; +∞[","ℝ privé de −2"],a:1,exp:"Le dénominateur ne doit pas s'annuler"},
    {q:"L'ensemble de définition de f(x) = √(x − 1) est…",c:["[1 ; +∞[","ℝ","]−∞ ; 1]","]1 ; +∞["],a:0,exp:"x − 1 ≥ 0"},
    {q:"La représentation graphique de f est l'ensemble des points…",c:["M(x ; f(x)) avec x dans l'ensemble de définition","M(f(x) ; x)","M(0 ; f(x))","M(x ; x)"],a:0,exp:"Définition"},
    {q:"Deux fonctions f et g sont égales si…",c:["elles ont le même ensemble de définition seulement","elles ont le même ensemble de définition et f(x) = g(x) pour tout x de cet ensemble","elles ont la même valeur en un point","f(0) = g(0)"],a:1,exp:"Égalité de deux fonctions"},
    {q:"L'image de 3 par f(x) = 2x − 1 est…",c:["5","7","6","1"],a:0,exp:"2 × 3 − 1"},
    {q:"Un antécédent de 7 par f(x) = 2x − 1 est…",c:["13","3","4","6"],a:2,exp:"2x − 1 = 7"},
    {q:"Le point A(2 ; 5) appartient à la courbe de f(x) = 3x − 1 car…",c:["f(5) = 2","f(0) = 5","f(2) = 0","f(2) = 5"],a:3,exp:"3 × 2 − 1 = 5"},
    {q:"Une valeur de x pour laquelle f(x) = 0 est appelée…",c:["une image de f","un antécédent de 1","un zéro de f","un extremum de f"],a:2,exp:"Vocabulaire"},
    {q:"Sur le graphique d'une fonction, l'image de a se lit…",c:["en ordonnée du point d'abscisse a","en abscisse du point d'ordonnée a","comme la pente","sur la bissectrice"],a:0,exp:"Lecture graphique"},
  ],
  "2A — Notion de suite numérique": [
    {q:"Une suite numérique est…",c:["une équation","une liste de nombres indexés par les entiers naturels","un ensemble de points","une fonction affine seulement"],a:1,exp:"Définition"},
    {q:"Une suite définie par une formule explicite s'écrit…",c:["Uₙ₊₁ = f(Uₙ)","Uₙ = f(n)","Uₙ = n","Uₙ = Uₙ₊₁"],a:1,exp:"Formule explicite"},
    {q:"Une suite définie par récurrence est donnée par…",c:["son dernier terme","une formule en n seulement","son premier terme et une relation Uₙ₊₁ = f(Uₙ)","sa somme"],a:2,exp:"Formule de récurrence"},
    {q:"Si Uₙ = 2n + 3, alors U₄ = …",c:["11","9","14","8"],a:0,exp:"2 × 4 + 3"},
    {q:"Si U₀ = 1 et Uₙ₊₁ = 2Uₙ + 1, alors U₂ = …",c:["5","7","3","4"],a:1,exp:"U₁ = 3 ; U₂ = 2 × 3 + 1"},
    {q:"Si Uₙ = n², alors U₅ = …",c:["10","25","5","32"],a:1,exp:"5²"},
    {q:"Si Uₙ = (−1)ⁿ, alors U₃ = …",c:["−3","3","1","−1"],a:3,exp:"(−1)³"},
    {q:"Les premiers termes de Uₙ = 3n sont…",c:["3, 6, 9, 12, …","0, 3, 6, 9, …","1, 3, 9, 27, …","0, 3, 9, 27, …"],a:1,exp:"n = 0, 1, 2, 3"},
    {q:"Pour calculer U₁₀ avec une formule de récurrence, il faut…",c:["calculer tous les termes précédents","utiliser directement n = 10","connaître seulement U₉","connaître la somme"],a:0,exp:"Un terme dépend du précédent"},
  ],
  "2A — Dénombrement élémentaire": [
    {q:"Si A ∩ B = ∅, alors Card(A ∪ B) = …",c:["Card A × Card B","Card A − Card B","Card A","Card A + Card B"],a:3,exp:"Parties disjointes"},
    {q:"En général, Card(A ∪ B) = …",c:["Card A × Card B","Card A − Card B","Card A + Card B − Card(A ∩ B)","Card A + Card B + Card(A ∩ B)"],a:2,exp:"Propriété du guide"},
    {q:"Dans une classe de 38 élèves, 20 aiment les maths et 15 le sport, dont 7 les deux. Le nombre d'élèves qui aiment au moins l'un des deux est…",c:["13","35","38","28"],a:3,exp:"20 + 15 − 7"},
    {q:"Dans une classe de 38 élèves, 20 aiment les maths et 15 le sport, dont 7 les deux. Le nombre d'élèves n'aimant aucun des deux est…",c:["28","0","3","10"],a:3,exp:"38 − 28"},
    {q:"Un arbre de choix sert à…",c:["résoudre une équation","calculer une moyenne","dénombrer les issues d'une succession de choix","tracer une droite"],a:2,exp:"Méthode"},
    {q:"On choisit un maillot (3 couleurs) et un short (2 couleurs). Le nombre de tenues est…",c:["6","5","3","2"],a:0,exp:"3 × 2"},
    {q:"Le nombre de nombres à 2 chiffres distincts formés avec {1, 2, 3} est…",c:["6","9","8","3"],a:0,exp:"3 × 2"},
    {q:"Un tableau à double entrée sert à…",c:["résoudre une inéquation","calculer une limite","tracer une parabole","dénombrer les cas en croisant deux critères"],a:3,exp:"Méthode"},
    {q:"On lance deux pièces. Le nombre d'issues possibles est…",c:["3","4","2","6"],a:1,exp:"2 × 2"},
    {q:"Un diagramme permet de trouver…",c:["la moyenne exacte","la dérivée d'une fonction","l'effectif d'une classe ou d'une partie","une racine carrée"],a:2,exp:"Utilisation d'un diagramme"},
  ],
  "2A — Nombres réels": [
    {q:"Un entier naturel est un nombre…",c:["négatif seulement","à virgule seulement","entier positif ou nul : 0, 1, 2, …","irrationnel"],a:2,exp:"Ensemble ℕ"},
    {q:"Les entiers relatifs forment l'ensemble…",c:["ℤ","ℚ","𝔻","ℕ"],a:0,exp:"…, −2, −1, 0, 1, 2, …"},
    {q:"Un nombre rationnel est un nombre qui peut s'écrire…",c:["a + b√2","a/b avec a entier relatif et b entier non nul","√a","sous forme décimale illimitée non périodique"],a:1,exp:"Ensemble ℚ"},
    {q:"Lequel de ces nombres est irrationnel ?",c:["−4","1/3","√2","0,75"],a:2,exp:"√2 n'est pas une fraction"},
    {q:"Lequel de ces nombres est un nombre décimal ?",c:["π","√3","1/3","0,125"],a:3,exp:"0,125 = 125/1 000"},
    {q:"L'ensemble ℝ contient…",c:["seulement les décimaux","les rationnels et les irrationnels","seulement les entiers","seulement les rationnels"],a:1,exp:"ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ"},
    {q:"Quelle inclusion est correcte ?",c:["ℚ ⊂ ℤ ⊂ ℕ","ℝ ⊂ ℚ","ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ","ℤ ⊂ ℕ"],a:2,exp:"Chaînes d'ensembles"},
    {q:"Le nombre π est…",c:["irrationnel","rationnel","entier","décimal"],a:0,exp:"Développement décimal illimité non périodique"},
    {q:"L'opposé de −7 est… ; l'inverse de 4 est…",c:["7 et −4","−7 et 4","1/7 et 4","7 et 1/4"],a:3,exp:"Opposé : a + (−a) = 0 ; inverse : a × (1/a) = 1"},
    {q:"Le nombre 0,333… est égal à…",c:["0,3","3/10","33/100","1/3"],a:3,exp:"Nombre rationnel"},
  ],
  "2A — Calculs dans ℝ : fractions, puissances, notation scientifique": [
    {q:"a/b + c/d = … (b, d non nuls)",c:["ac/bd","(ad + bc)/(bd)","(a + c)/bd","(a + c)/(b + d)"],a:1,exp:"Propriété du guide"},
    {q:"a/b × c/d = …",c:["ac/bd","(ac)/(b + d)","(a + c)/(b + d)","ad/bc"],a:0,exp:"Propriété du guide"},
    {q:"2/3 + 1/4 = …",c:["3/7","2/12","3/12","11/12"],a:3,exp:"8/12 + 3/12"},
    {q:"(3/4) ÷ (9/8) = …",c:["3/8","2/3","27/32","3/2"],a:1,exp:"3/4 × 8/9"},
    {q:"an × ap = …",c:["(2a)^(n + p)","a^(n × p)","a^(n + p)","a^(n − p)"],a:2,exp:"Propriété des puissances"},
    {q:"(aⁿ)ᵖ = …",c:["a^(np)","a^(n + p)","a^(n/p)","aⁿ + aᵖ"],a:0,exp:"Propriété des puissances"},
    {q:"aⁿ × bⁿ = …",c:["(ab)ⁿ","aⁿ⁺ⁿ","abⁿ","(a + b)ⁿ"],a:0,exp:"Propriété des puissances"},
    {q:"2³ × 2⁻² = …",c:["2⁵","2⁻⁶","1/2","2"],a:3,exp:"2^(3 − 2)"},
    {q:"(3²)³ = …",c:["243","27","81","729"],a:3,exp:"3⁶ = 729"},
    {q:"La notation scientifique de 45 000 est…",c:["0,45 × 10⁵","4,5 × 10³","45 × 10³","4,5 × 10⁴"],a:3,exp:"Écriture normalisée a × 10ⁿ avec 1 ≤ a < 10"},
    {q:"La notation scientifique de 0,00032 est…",c:["0,32 × 10⁻³","3,2 × 10⁻⁴","32 × 10⁻⁵","3,2 × 10⁻³"],a:1,exp:"0,00032 = 3,2/10 000"},
    {q:"(2 × 10³) × (3 × 10⁻¹) = …",c:["5 × 10²","6 × 10⁴","6 × 10²","6 × 10⁻³"],a:2,exp:"2 × 3 = 6 et 10^(3 − 1)"},
  ],
  "2A — Racine carrée": [
    {q:"La racine carrée d'un réel positif a est…",c:["l'inverse de a","le carré de a","le réel positif dont le carré est a","le double de a"],a:2,exp:"Définition"},
    {q:"√49 = …",c:["−7","7","24,5","49"],a:1,exp:"7² = 49"},
    {q:"(√5)² = …",c:["5","10","√5","25"],a:0,exp:"Par définition"},
    {q:"√(a × b) = … (a, b positifs)",c:["√a × √b","√a / √b","√a + √b","a√b"],a:0,exp:"Propriété du guide"},
    {q:"√(a/b) = … (a ≥ 0, b > 0)",c:["a/b","√a × √b","√a − √b","√a / √b"],a:3,exp:"Propriété du guide"},
    {q:"√2 × √8 = …",c:["4","2√10","16","√10"],a:0,exp:"√16"},
    {q:"√12 = …",c:["4√3","3√2","2√3","6"],a:2,exp:"√(4 × 3)"},
    {q:"√75 = …",c:["3√5","25√3","5√3","15"],a:2,exp:"√(25 × 3)"},
    {q:"√9 + √16 = …",c:["√25","25","7","5"],a:2,exp:"3 + 4"},
    {q:"Peut-on écrire √(a + b) = √a + √b ?",c:["Oui toujours","Non, en général c'est faux","Oui si a > b","Oui si a = b"],a:1,exp:"Ex. √(9 + 16) = 5 ≠ 3 + 4"},
    {q:"1/√2 = …",c:["2/√2","√2/2","1/2","√2"],a:1,exp:"On multiplie haut et bas par √2"},
  ],
  "2A — Équations du premier degré": [
    {q:"Une équation du premier degré est de la forme…",c:["ax + by = c","a/x + b = 0","ax + b = 0 avec a ≠ 0","ax² + b = 0"],a:2,exp:"Définition du guide"},
    {q:"Ajouter un même nombre à chaque membre d'une équation donne…",c:["une équation équivalente","une équation sans solution","une équation avec des solutions différentes","une inéquation"],a:0,exp:"Propriété du guide"},
    {q:"Multiplier chaque membre d'une équation par un même réel non nul donne…",c:["une équation sans solution","une inéquation","une équation avec des solutions différentes","une équation équivalente"],a:3,exp:"Propriété du guide"},
    {q:"Résoudre 3x − 5 = 10.",c:["x = 5","x = 5/3","x = 15","x = −5"],a:0,exp:"3x = 15"},
    {q:"Résoudre 2(x − 1) = x + 3.",c:["x = −5","x = 3","x = 5","x = 1"],a:2,exp:"2x − 2 = x + 3"},
    {q:"Un produit de facteurs est nul si et seulement si…",c:["l'un des facteurs est nul","la somme des facteurs est nulle","leur produit vaut 1","tous les facteurs sont nuls"],a:0,exp:"Propriété du guide"},
    {q:"Résoudre (2x + 4)(x − 3) = 0.",c:["x = −2 et x = 3 seulement","x = −2 ou x = 3","x = 2 ou x = −3","x = 4 ou x = 3"],a:1,exp:"2x + 4 = 0 ou x − 3 = 0"},
    {q:"Résoudre x² − 9 = 0.",c:["x = 9","x = 3 ou x = −3","x = ±√3","x = 3"],a:1,exp:"(x − 3)(x + 3) = 0"},
    {q:"Un quotient est nul si et seulement si…",c:["ses deux termes sont nuls","son numérateur vaut 1","son numérateur est nul (et son dénominateur non nul)","son dénominateur est nul"],a:2,exp:"Propriété du guide"},
    {q:"Résoudre (x − 2)/(x + 1) = 0.",c:["x = −1","x = 2 ou x = −1","x = 2","aucune solution"],a:2,exp:"Numérateur nul, dénominateur non nul"},
    {q:"Un champ rectangulaire de périmètre 60 m a une largeur de 12 m. Sa longueur est…",c:["30 m","24 m","18 m","48 m"],a:2,exp:"2(L + 12) = 60"},
  ],
  "2A — Inéquations du premier degré": [
    {q:"Une inéquation du premier degré est de la forme…",c:["ax + b ≥ 0 (ou ≤, >, <) avec a ≠ 0","a/x ≥ 0","ax² + b ≥ 0","ax + by ≥ 0"],a:0,exp:"Définition du guide"},
    {q:"Multiplier chaque membre d'une inéquation par un réel strictement négatif…",c:["annule l'inéquation","conserve le sens","donne une égalité","change le sens de l'inégalité"],a:3,exp:"Propriété du guide"},
    {q:"Multiplier chaque membre par un réel strictement positif…",c:["annule l'inéquation","donne une égalité","change le sens","conserve le sens de l'inégalité"],a:3,exp:"Propriété du guide"},
    {q:"Résoudre 3x − 6 < 0.",c:["x < 2","x < −2","x > 2","x > −2"],a:0,exp:"3x < 6"},
    {q:"Résoudre −2x + 4 ≥ 0.",c:["x ≤ 2","x ≤ −2","x ≥ 2","x ≥ −2"],a:0,exp:"−2x ≥ −4 : le sens change"},
    {q:"Résoudre 5 − x > 1.",c:["x > 4","x > −4","x < −4","x < 4"],a:3,exp:"−x > −4"},
    {q:"Le signe de ax + b (a > 0) est négatif pour…",c:["x > −b/a","x > b/a","x < −b/a","x < b/a"],a:2,exp:"Tableau de signes"},
    {q:"Le signe de −3x + 6 est positif pour…",c:["x < −2","x > −2","x > 2","x < 2"],a:3,exp:"−3x + 6 > 0 ⟺ x < 2"},
    {q:"Résoudre (x − 1)(x + 2) ≥ 0 à l'aide d'un tableau de signes.",c:["]−2 ; 1[","[−2 ; 1]","]−∞ ; −2] ∪ [1 ; +∞[","[1 ; +∞["],a:2,exp:"Positif à l'extérieur des racines"},
    {q:"Résoudre (x − 3)/(x + 1) < 0.",c:["[−1 ; 3]","]3 ; +∞[","]−1 ; 3[","]−∞ ; −1[ ∪ ]3 ; +∞["],a:2,exp:"Signes contraires"},
  ],
  "2A — Équations linéaires & systèmes dans ℝ × ℝ": [
    {q:"Une équation linéaire à deux inconnues est de la forme…",c:["ax + by = c","a/x + by = c","ax² + by = c","ax = b"],a:0,exp:"Définition"},
    {q:"Le couple (2 ; 1) est solution de x + 2y = 4 car…",c:["2 + 1 = 4","2 + 2 = 4","2 − 1 = 4","2 × 1 = 4"],a:1,exp:"2 + 2 × 1 = 4"},
    {q:"Résoudre x + y = 5 ; x − y = 1.",c:["x = 4 et y = 1","x = 2 et y = 3","x = 1 et y = 4","x = 3 et y = 2"],a:3,exp:"On additionne : 2x = 6"},
    {q:"Résoudre 2x + y = 7 ; x − y = −1.",c:["x = 2 et y = 1","x = 1 et y = 5","x = 3 et y = 2","x = 2 et y = 3"],a:3,exp:"On additionne : 3x = 6"},
    {q:"Résoudre x + 2y = 7 ; 3x − y = 7 par substitution.",c:["x = 3 et y = 2","x = 2 et y = 3","x = 1 et y = 3","x = 5 et y = 1"],a:0,exp:"y = 3x − 7"},
    {q:"Les méthodes de résolution d'un système au programme sont…",c:["substitution, addition (combinaison) et graphique","seulement le discriminant","seulement la dérivation","seulement les probabilités"],a:0,exp:"Guide de 2nde A"},
    {q:"Graphiquement, la solution d'un système de deux équations linéaires est…",c:["le point d'intersection des deux droites","l'origine","un cercle","le milieu des deux droites"],a:0,exp:"Méthode graphique"},
    {q:"Le système x + y = 2 ; x + y = 5 a…",c:["aucune solution","deux solutions","une solution","une infinité de solutions"],a:0,exp:"Droites parallèles distinctes"},
    {q:"Un système de trois équations linéaires à trois inconnues au programme est…",c:["toujours avec paramètre","impossible à résoudre","limité à deux inconnues","sans paramètre"],a:3,exp:"Guide de 2nde A"},
    {q:"Deux nombres ont pour somme 30 et pour différence 8. Ces nombres sont…",c:["20 et 10","19 et 11","22 et 8","15 et 15"],a:1,exp:"x + y = 30 ; x − y = 8"},
  ],
  "2A — Fonctions affines & affines par intervalles": [
    {q:"Une fonction affine est de la forme…",c:["f(x) = a/x","f(x) = ax² + b","f(x) = ax + b","f(x) = |x|"],a:2,exp:"Définition"},
    {q:"La représentation graphique d'une fonction affine est…",c:["une droite","une parabole","une hyperbole","un cercle"],a:0,exp:"Propriété"},
    {q:"Si a > 0, la fonction affine f(x) = ax + b est…",c:["croissante","constante","paire","décroissante"],a:0,exp:"Sens de variation"},
    {q:"Si a < 0, la fonction affine f(x) = ax + b est…",c:["décroissante","croissante","impaire","constante"],a:0,exp:"Sens de variation"},
    {q:"Si a = 0, la fonction f(x) = ax + b est…",c:["nulle","constante","croissante","décroissante"],a:1,exp:"f(x) = b"},
    {q:"La droite y = −2x + 4 coupe l'axe des ordonnées en…",c:["(4 ; 0)","(0 ; 4)","(0 ; −2)","(2 ; 0)"],a:1,exp:"f(0) = 4"},
    {q:"La droite y = −2x + 4 coupe l'axe des abscisses en…",c:["(4 ; 0)","(2 ; 0)","(0 ; 2)","(−2 ; 0)"],a:1,exp:"−2x + 4 = 0"},
    {q:"Une fonction affine f vérifie f(0) = 3 et f(1) = 5. Alors f(x) = …",c:["2x + 3","3x + 5","x + 3","5x + 3"],a:0,exp:"b = 3 et a = 5 − 3"},
    {q:"Une fonction affine par intervalles est…",c:["une fonction du second degré","une fonction dont l'expression est affine sur chacun de plusieurs intervalles","une fonction affine sur ℝ","une fonction constante"],a:1,exp:"Définition du guide"},
    {q:"Une fonction linéaire est une fonction affine…",c:["dont le terme constant est nul","dont le coefficient est nul","de coefficient 1","de terme constant 1"],a:0,exp:"f(x) = ax"},
    {q:"Les droites y = 2x + 1 et y = 2x − 3 sont…",c:["perpendiculaires","sécantes en un point","parallèles","confondues"],a:2,exp:"Même coefficient a"},
  ],
  "2A — Valeur absolue & fonction en escalier": [
    {q:"|x| est égale à…",c:["1/x","−x toujours","x²","x si x ≥ 0 ; −x si x < 0"],a:3,exp:"Définition"},
    {q:"|−5| = …",c:["1/5","0","−5","5"],a:3,exp:"Distance à zéro"},
    {q:"|3 − 7| = …",c:["4","−4","−10","10"],a:0,exp:"|−4|"},
    {q:"La courbe de x ↦ |x| est…",c:["formée de deux demi-droites de sommet O","une parabole","une hyperbole","une droite"],a:0,exp:"Fonction affine par intervalles"},
    {q:"La fonction x ↦ |x| est…",c:["paire","impaire","constante","ni paire ni impaire"],a:0,exp:"|−x| = |x|"},
    {q:"Résoudre |x| = 3.",c:["x = −3","x = 3 ou x = −3","x = 9","x = 3"],a:1,exp:"Deux nombres à distance 3 de 0"},
    {q:"Résoudre |x| = −2.",c:["x = 2","x = −2","aucune solution","x = ±2"],a:2,exp:"Une valeur absolue est positive ou nulle"},
    {q:"Une fonction en escalier est…",c:["une fonction affine","une fonction continue","une fonction constante sur chacun de plusieurs intervalles","une fonction du second degré"],a:2,exp:"Définition"},
    {q:"La partie entière E(x) est un exemple de fonction…",c:["affine","homographique","quadratique","en escalier"],a:3,exp:"E est constante sur chaque intervalle [n ; n + 1["},
    {q:"Les tarifs postaux par tranche de poids sont un exemple de…",c:["fonction en escalier","fonction carrée","valeur absolue","fonction affine"],a:0,exp:"Constantes par intervalles"},
  ],
  "2A — Fonctions élémentaires & résolutions graphiques": [
    {q:"Une fonction est croissante sur un intervalle I si, pour a < b dans I,…",c:["f(a) ≤ f(b)","f(a) ≥ f(b)","f(a) < 0","f(a) = f(b) toujours"],a:0,exp:"Définition"},
    {q:"Une fonction est décroissante sur I si, pour a < b dans I,…",c:["f(a) > 0","f(a) ≤ f(b)","f(a) ≥ f(b)","f(a) = 0"],a:2,exp:"Définition"},
    {q:"Une fonction est constante sur I si…",c:["f(a) = f(b) pour tous a, b de I","f(a) = 0","f n'est pas définie sur I","f est croissante"],a:0,exp:"Définition"},
    {q:"La fonction carrée x ↦ x² est décroissante sur…",c:["[−1 ; 1]","ℝ","[0 ; +∞[","]−∞ ; 0]"],a:3,exp:"Elle décroît puis croît"},
    {q:"La fonction carrée admet en 0…",c:["aucun extremum","un minimum égal à 1","un maximum égal à 0","un minimum égal à 0"],a:3,exp:"x² ≥ 0"},
    {q:"La représentation graphique de x ↦ ax² (a ≠ 0) est…",c:["un cercle","une droite","une parabole de sommet O et d'axe (OJ)","une hyperbole"],a:2,exp:"Propriété du guide"},
    {q:"Si a > 0, la parabole y = ax² est tournée…",c:["vers la gauche","vers le haut","vers le bas","vers la droite"],a:1,exp:"Propriété du guide"},
    {q:"Si a < 0, la parabole y = ax² est tournée…",c:["vers le haut","vers la gauche","vers le bas","vers la droite"],a:2,exp:"Propriété du guide"},
    {q:"Graphiquement, les solutions de x² = 4 sont les abscisses des points de la parabole d'ordonnée…",c:["4, soit x = −2 et x = 2","2","0","−4"],a:0,exp:"Intersection de y = x² et y = 4"},
    {q:"Graphiquement, x² = −1 n'a…",c:["aucune solution","une infinité de solutions","deux solutions","qu'une solution"],a:0,exp:"La parabole est au-dessus de l'axe des abscisses"},
    {q:"Un extremum d'une fonction est…",c:["un maximum ou un minimum","une asymptote","un point d'inflexion","un zéro"],a:0,exp:"Définition"},
    {q:"Pour résoudre graphiquement f(x) = k, on cherche…",c:["les zéros de f'","l'aire sous la courbe","les abscisses des points d'intersection de la courbe avec la droite y = k","les ordonnées du point d'abscisse k"],a:2,exp:"Résolution graphique"},
  ],
  "2A — Prop. & Déf.": [
    {q:"Définition : deux grandeurs sont proportionnelles si…",c:["on passe de l'une à l'autre en multipliant par un même nombre non nul","elles sont égales","leur différence est constante","leur somme est constante"],a:0,exp:"Proportionnalité"},
    {q:"Propriété : Card(A ∪ B) = …",c:["Card A + Card B − Card(A ∩ B)","Card A − Card B","Card A + Card B + Card(A ∩ B)","Card A × Card B"],a:0,exp:"Dénombrement"},
    {q:"Définition : une suite numérique est…",c:["une liste de nombres indexés par les entiers naturels","une équation","un ensemble de points","une fonction affine"],a:0,exp:"Suites"},
    {q:"Définition : un nombre rationnel est un nombre qui s'écrit…",c:["seulement décimal","√a","a/b avec a entier relatif et b entier non nul","décimal illimité non périodique"],a:2,exp:"Nombres réels"},
    {q:"Propriété : aⁿ × aᵖ = …",c:["a^(n − p)","a^(n × p)","a^(n + p)","(2a)^(n + p)"],a:2,exp:"Puissances"},
    {q:"Propriété : (aⁿ)ᵖ = …",c:["a^(n + p)","aⁿ + aᵖ","a^(np)","a^(n/p)"],a:2,exp:"Puissances"},
    {q:"Définition : la racine carrée de a ≥ 0 est…",c:["l'inverse de a","le réel positif dont le carré est a","le double de a","le carré de a"],a:1,exp:"Racine carrée"},
    {q:"Propriété : √(ab) = …",c:["√a / √b","a√b","√a + √b","√a × √b"],a:3,exp:"Racine carrée"},
    {q:"Propriété : un produit de facteurs est nul si et seulement si…",c:["leur produit vaut 1","leur somme est nulle","tous les facteurs sont nuls","l'un des facteurs est nul"],a:3,exp:"Équations"},
    {q:"Propriété : un quotient est nul si et seulement si…",c:["son numérateur est nul (dénominateur non nul)","son numérateur vaut 1","son dénominateur est nul","ses deux termes sont nuls"],a:0,exp:"Équations"},
    {q:"Propriété : multiplier une inéquation par un réel strictement négatif…",c:["annule l'inéquation","change le sens de l'inégalité","conserve le sens","donne une égalité"],a:1,exp:"Inéquations"},
    {q:"Définition : une équation linéaire à deux inconnues est de la forme…",c:["a/x + by = c","ax = b","ax² + by = c","ax + by = c"],a:3,exp:"Systèmes"},
    {q:"Définition : une fonction affine est de la forme…",c:["f(x) = ax² + b","f(x) = a/x","f(x) = ax + b","f(x) = |x|"],a:2,exp:"Fonctions affines"},
    {q:"Propriété : la représentation graphique d'une fonction affine est…",c:["une hyperbole","une droite","un cercle","une parabole"],a:1,exp:"Fonctions affines"},
    {q:"Définition : |x| = …",c:["x si x ≥ 0 ; −x si x < 0","−x","1/x","x²"],a:0,exp:"Valeur absolue"},
    {q:"Définition : une fonction en escalier est…",c:["affine sur ℝ","constante sur chacun de plusieurs intervalles","du second degré","toujours continue"],a:1,exp:"Fonction en escalier"},
    {q:"Propriété : la courbe de x ↦ ax² (a ≠ 0) est…",c:["une parabole de sommet O et d'axe (OJ)","un cercle","une hyperbole","une droite"],a:0,exp:"Fonction carrée"},
    {q:"Définition : une fonction croissante sur I vérifie, pour a < b,…",c:["f(a) > 0","f(a) ≥ f(b)","f(a) ≤ f(b)","f(a) = f(b)"],a:2,exp:"Sens de variation"},
  ],
});

/* ===== Résumés de cours — classe de 2nde A (guide du programme des secondes littéraires A1, A2 et B) =====
   Même structure que cours_3e.js. Balisage : <b>…</b> ; fraction {numérateur¦dénominateur}. */
window.MQ_COURS = window.MQ_COURS || {};
window.MQ_COURS['2nde A'] = Object.assign(window.MQ_COURS['2nde A'] || {}, {

'2A — Proportionnalité & pourcentages': {
 ess:[
  'Deux grandeurs sont <b>proportionnelles</b> quand on passe de l\'une à l\'autre en multipliant toujours par le <b>même nombre non nul</b>. Ce nombre s\'appelle le <b>coefficient de proportionnalité</b>.',
  'Au marché : si 5 kg de riz coûtent 3 500 F, alors 1 kg coûte 3 500 ÷ 5 = 700 F. Donc 8 kg coûtent 8 × 700 = 5 600 F. C\'est la méthode du « retour à l\'unité ».',
  'Un <b>pourcentage</b> est une proportion sur 100. « 15 % de 12 000 F » veut dire 12 000 × {15¦100}.',
  'Une <b>échelle</b> compare une longueur sur la carte à la vraie longueur. Échelle {1¦50 000} : 1 cm sur la carte représente 50 000 cm dans la réalité.'],
 form:[
  'Tableau de proportionnalité : les produits en croix sont égaux. Si {a¦b} = {c¦d}, alors a × d = b × c.',
  '<b>t % de A</b> = A × {t¦100}.',
  'Augmenter de t % : multiplier par (1 + {t¦100}).    Diminuer de t % : multiplier par (1 − {t¦100}).'],
 ex:{q:'Un sac coûte 12 000 F. Le commerçant fait une remise de 15 %. Quel est le nouveau prix ?',
  st:['Calcule la remise : 12 000 × {15¦100} = 1 800 F.',
      'Retire la remise du prix de départ : 12 000 − 1 800 = 10 200 F.',
      'Vérification avec le coefficient : 12 000 × 0,85 = 10 200 F.'],
  r:'Le nouveau prix est <b>10 200 F</b>.'},
 pieges:[
  'Augmenter de 20 % puis baisser de 20 % ne redonne <b>pas</b> le prix de départ : 100 → 120 → 96.',
  'Ne confonds pas « différence constante » et « proportionnalité » : 2 → 5 et 4 → 7 ne sont pas proportionnels.',
  'Sur une carte, pense à convertir les cm en m ou en km à la fin.'],
 mini:[
  {q:'3 cahiers coûtent 750 F. Combien coûtent 7 cahiers ?', r:'1 cahier : 750 ÷ 3 = 250 F ; 7 cahiers : <b>1 750 F</b>.'},
  {q:'Sur une carte à l\'échelle {1¦50 000}, deux villages sont distants de 3 cm. Quelle est la distance réelle ?', r:'3 × 50 000 = 150 000 cm = 1 500 m = <b>1,5 km</b>.'}],
 chk:[['12000*15/100','1800'],['12000-1800','10200'],['12000*0.85','10200'],['3500/5*8','5600'],['750/3*7','1750'],['3*50000/100000','1.5'],['100*1.2*0.8','96']]
},

'2A — Fonctions numériques : généralités': {
 ess:[
  'Une <b>fonction</b> f associe à chaque réel x de son <b>ensemble de définition</b> un <b>unique</b> réel f(x), appelé <b>image</b> de x. Exemple : f(x) = 3x − 1.',
  'Si f(x) = y, on dit que x est un <b>antécédent</b> de y. Un nombre peut avoir plusieurs antécédents.',
  '<b>Ensemble de définition</b> : l\'ensemble des x pour lesquels f(x) existe. On interdit la division par 0 et la racine d\'un nombre négatif.',
  'La <b>représentation graphique</b> de f est l\'ensemble des points M(x ; f(x)). Pour lire l\'image de a, on part de l\'abscisse a et on lit l\'ordonnée.',
  'Deux fonctions sont <b>égales</b> si elles ont le même ensemble de définition et la même image pour tout x.'],
 form:[
  'f(x) = {1¦x − 2} est définie pour x ≠ 2 : ensemble de définition = ℝ privé de 2.',
  'f(x) = √(x − 1) est définie pour x − 1 ≥ 0, soit x ≥ 1 : [1 ; +∞[.',
  'Un <b>zéro</b> de f est un réel x tel que f(x) = 0.'],
 ex:{q:'Soit f(x) = 3x − 1. Calcule l\'image de 2, cherche l\'antécédent de 8, puis dis si A(2 ; 5) est sur la courbe de f.',
  st:['Image de 2 : f(2) = 3 × 2 − 1 = 5.',
      'Antécédent de 8 : on résout 3x − 1 = 8, donc 3x = 9 et x = 3.',
      'A(2 ; 5) est sur la courbe car f(2) = 5, c\'est bien l\'ordonnée de A.'],
  r:'f(2) = <b>5</b> ; l\'antécédent de 8 est <b>3</b> ; <b>oui</b>, A appartient à la courbe.'},
 pieges:[
  'Image et antécédent : l\'image se calcule en remplaçant x ; l\'antécédent se trouve en résolvant une équation.',
  'Pour {1¦x − 2}, on interdit x = 2 (et non x = −2).',
  'Pour une racine, la condition est « ≥ 0 », pas « > 0 ».'],
 mini:[
  {q:'Quel est l\'ensemble de définition de f(x) = {1¦x + 3} ?', r:'x + 3 ≠ 0 donc x ≠ −3 : <b>ℝ privé de −3</b>.'},
  {q:'Calcule l\'image de −1 par f(x) = x² + 1.', r:'(−1)² + 1 = 1 + 1 = <b>2</b>.'}],
 chk:[['3*2-1','5'],['3*8-1===23','true'],['3*3-1','8'],['(-1)**2+1','2'],['3*3-1===8','true']]
},

'2A — Notion de suite numérique': {
 ess:[
  'Une <b>suite numérique</b> est une liste de nombres rangés dans l\'ordre : U₀, U₁, U₂, U₃, … Chaque nombre est repéré par son <b>rang</b> n (un entier naturel).',
  '<b>Formule explicite</b> : Uₙ = f(n). On remplace n et on calcule directement. Exemple : Uₙ = 2n + 3 donne U₄ = 2 × 4 + 3 = 11.',
  '<b>Formule de récurrence</b> : on donne le premier terme et une règle pour passer d\'un terme au suivant : Uₙ₊₁ = f(Uₙ).',
  'Avec la récurrence, pour avoir U₁₀ il faut calculer tous les termes précédents, un par un.'],
 form:[
  'Explicite : Uₙ = f(n).',
  'Récurrence : U₀ donné, puis Uₙ₊₁ = f(Uₙ).',
  'Uₙ₊₁ est le terme qui <b>suit</b> Uₙ (ce n\'est pas Uₙ + 1).'],
 ex:{q:'Soit la suite définie par U₀ = 1 et Uₙ₊₁ = 2Uₙ + 1. Calcule U₁, U₂ et U₃.',
  st:['U₁ = 2 × U₀ + 1 = 2 × 1 + 1 = 3.',
      'U₂ = 2 × U₁ + 1 = 2 × 3 + 1 = 7.',
      'U₃ = 2 × U₂ + 1 = 2 × 7 + 1 = 15.'],
  r:'U₁ = <b>3</b>, U₂ = <b>7</b>, U₃ = <b>15</b>.'},
 pieges:[
  'Uₙ₊₁ ≠ Uₙ + 1. Uₙ₊₁ est le terme suivant, on remplace Uₙ dans la règle.',
  'Les rangs commencent souvent à 0 : U₀ est le premier terme.',
  'Uₙ = n² : U₅ = 5² = 25, et non 5 × 2 = 10. Pour (−1)ⁿ, le signe alterne : U₃ = −1.'],
 mini:[
  {q:'Uₙ = n² − 1. Calcule U₃.', r:'3² − 1 = 9 − 1 = <b>8</b>.'},
  {q:'U₀ = 2 et Uₙ₊₁ = Uₙ + 4. Calcule U₃.', r:'U₁ = 6, U₂ = 10, U₃ = <b>14</b>.'}],
 chk:[['2*4+3','11'],['2*1+1','3'],['2*3+1','7'],['2*7+1','15'],['3**2-1','8'],['2+4+4+4','14'],['(-1)**3','-1']]
},

'2A — Dénombrement élémentaire': {
 ess:[
  '<b>Dénombrer</b>, c\'est compter. Card(A) est le nombre d\'éléments de l\'ensemble A.',
  'Si A et B n\'ont <b>aucun élément commun</b> (A ∩ B = ∅), alors Card(A ∪ B) = Card A + Card B.',
  'Sinon, on a compté deux fois les éléments communs, donc on les retire une fois : Card(A ∪ B) = Card A + Card B − Card(A ∩ B).',
  'Un <b>arbre de choix</b> et un <b>tableau à double entrée</b> servent à compter les possibilités d\'une succession de choix. Exemple : 3 maillots et 2 shorts donnent 3 × 2 = 6 tenues.'],
 form:[
  'A ∩ B = ∅ : Card(A ∪ B) = Card A + Card B.',
  'En général : <b>Card(A ∪ B) = Card A + Card B − Card(A ∩ B)</b>.',
  'Nombre de personnes qui ne sont dans aucun groupe = effectif total − Card(A ∪ B).'],
 ex:{q:'Dans une classe de 40 élèves, 25 jouent au football, 18 au basket et 8 jouent aux deux. Combien jouent à au moins un des deux sports ? Combien ne jouent à aucun ?',
  st:['Card(A ∩ B) = 8 : ces 8 élèves sont comptés deux fois dans 25 + 18.',
      'Card(A ∪ B) = 25 + 18 − 8 = 35.',
      'Aucun sport : 40 − 35 = 5.'],
  r:'<b>35</b> élèves jouent à au moins un sport ; <b>5</b> ne jouent à aucun.'},
 pieges:[
  'Oublier de retirer l\'intersection : 25 + 18 = 43 est impossible dans une classe de 40.',
  'Pour les nombres à 2 chiffres <b>distincts</b> avec {1, 2, 3}, on ne peut pas écrire 11, 22, 33 : on a 12, 13, 21, 23, 31, 32, soit 6 nombres.',
  'Deux pièces lancées : 4 issues (PP, PF, FP, FF), pas 2.'],
 mini:[
  {q:'Card A = 12, Card B = 9 et Card(A ∩ B) = 4. Calcule Card(A ∪ B).', r:'12 + 9 − 4 = <b>17</b>.'},
  {q:'Un restaurant propose 3 plats et 2 boissons. Combien de menus (1 plat + 1 boisson) ?', r:'3 × 2 = <b>6 menus</b>.'}],
 chk:[['25+18-8','35'],['40-35','5'],['12+9-4','17'],['3*2','6'],['3*2','6'],['2*2','4']]
},

'2A — Nombres réels': {
 ess:[
  '<b>ℕ</b> : entiers naturels 0, 1, 2, 3… <b>ℤ</b> : entiers relatifs …, −2, −1, 0, 1, 2… <b>𝔻</b> : nombres décimaux (écriture avec un nombre fini de chiffres après la virgule, comme 0,125).',
  '<b>ℚ</b> : nombres rationnels, c\'est-à-dire de la forme {a¦b} avec a entier relatif et b entier non nul. Exemples : {2¦3}, 0,125, −4.',
  'Les <b>irrationnels</b> ne s\'écrivent pas comme une fraction : √2, π. Leur écriture décimale est illimitée et non périodique.',
  '<b>ℝ</b> contient tous les rationnels et tous les irrationnels.'],
 form:[
  'ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ.',
  'L\'<b>opposé</b> de a est −a. L\'<b>inverse</b> d\'un réel non nul a est {1¦a}.',
  'Un nombre dont l\'écriture décimale se répète est rationnel : 0,333… = {1¦3}.'],
 ex:{q:'Pour chaque nombre, donne le plus petit ensemble qui le contient : −3 ; 0,125 ; {2¦3} ; √9 ; √2.',
  st:['−3 est un entier négatif : il est dans ℤ (pas dans ℕ).',
      '0,125 a un nombre fini de décimales : c\'est un décimal (𝔻). On a 0,125 = {1¦8}.',
      '{2¦3} est une fraction qui n\'est pas décimale : ℚ.',
      '√9 = 3 : c\'est un entier naturel, donc ℕ. Mais √2 n\'est pas une fraction : c\'est un irrationnel, dans ℝ.'],
  r:'−3 ∈ <b>ℤ</b> ; 0,125 ∈ <b>𝔻</b> ; {2¦3} ∈ <b>ℚ</b> ; √9 ∈ <b>ℕ</b> ; √2 ∈ <b>ℝ</b> (irrationnel).'},
 pieges:[
  'Tout nombre avec une racine n\'est pas irrationnel : √9 = 3 et √16 = 4 sont des entiers.',
  '{1¦3} = 0,333… n\'est pas un décimal (il y a une infinité de 3), mais il est rationnel.',
  'Ne confonds pas opposé (−a) et inverse ({1¦a}).'],
 mini:[
  {q:'Donne l\'opposé de −7 et l\'inverse de 4.', r:'Opposé : <b>7</b> ; inverse : <b>{1¦4}</b>.'},
  {q:'π est-il rationnel ?', r:'<b>Non</b>, π est irrationnel (il est dans ℝ mais pas dans ℚ).'}],
 chk:[['Math.sqrt(9)===3','true'],['1/8','0.125'],['-(-7)','7'],['1/4','0.25'],['Number.isInteger(Math.sqrt(16))','true']]
},

'2A — Calculs dans ℝ : fractions, puissances, notation scientifique': {
 ess:[
  '<b>Additionner</b> des fractions : on les met au même dénominateur. <b>Multiplier</b> : on multiplie en haut et en bas. <b>Diviser</b> : on multiplie par l\'inverse.',
  '<b>Puissances</b> : aⁿ = a × a × … × a (n fois). aⁿ × aᵖ = aⁿ⁺ᵖ ; (aⁿ)ᵖ = aⁿᵖ ; aⁿ × bⁿ = (ab)ⁿ ; a⁻ⁿ = {1¦aⁿ}.',
  '<b>Notation scientifique</b> : un nombre s\'écrit a × 10ⁿ avec 1 ≤ a < 10 et n entier. 45 000 = 4,5 × 10⁴ ; 0,00032 = 3,2 × 10⁻⁴.'],
 form:[
  '{a¦b} + {c¦d} = {ad + bc¦bd}.    {a¦b} × {c¦d} = {ac¦bd}.    {a¦b} ÷ {c¦d} = {a¦b} × {d¦c}.',
  'aⁿ × aᵖ = aⁿ⁺ᵖ.    (aⁿ)ᵖ = aⁿᵖ.    aⁿ × bⁿ = (ab)ⁿ.',
  'a × 10ⁿ avec 1 ≤ a < 10.'],
 ex:{q:'a) Calcule {5¦6} − {1¦4}.    b) Écris 0,00032 en notation scientifique.',
  st:['a) Dénominateur commun 12 : {5¦6} = {10¦12} et {1¦4} = {3¦12}.',
      'Donc {10¦12} − {3¦12} = {7¦12}.',
      'b) On déplace la virgule de 4 rangs vers la droite pour obtenir 3,2 (entre 1 et 10).',
      'Comme le nombre de départ est petit, l\'exposant est négatif : 3,2 × 10⁻⁴.'],
  r:'a) <b>{7¦12}</b> ;   b) <b>3,2 × 10⁻⁴</b>.'},
 pieges:[
  '{a¦b} + {c¦d} n\'est pas {a + c¦b + d} : {1¦2} + {1¦2} = 1, alors que cette formule fausse donnerait {2¦4} = {1¦2}.',
  '2³ × 2⁻² = 2³⁻² = 2 : on additionne les exposants (pas on les multiplie).',
  '12 × 10³ n\'est pas en notation scientifique, car 12 n\'est pas compris entre 1 et 10 : on écrit 1,2 × 10⁴.'],
 mini:[
  {q:'Calcule {3¦4} ÷ {9¦8}.', r:'{3¦4} × {8¦9} = {24¦36} = <b>{2¦3}</b>.'},
  {q:'Écris 45 000 en notation scientifique.', r:'<b>4,5 × 10⁴</b>.'}],
 chk:[['5/6-1/4','7/12'],['0.00032','3.2e-4'],['(3/4)/(9/8)','2/3'],['2**3*2**-2','2'],['45000','4.5e4'],['(3**2)**3','729'],['(2e3)*(3e-1)','6e2'],['2/3+1/4','11/12']]
},

'2A — Racine carrée': {
 ess:[
  'La <b>racine carrée</b> d\'un réel positif a est le réel <b>positif</b> dont le carré est a. On la note √a. Exemple : √49 = 7, car 7² = 49.',
  'On ne peut pas prendre la racine d\'un nombre négatif.',
  'Pour a ≥ 0 : (√a)² = a. Exemple : (√5)² = 5.',
  'Pour simplifier : on cherche un carré parfait (4, 9, 16, 25…) dans le nombre. √12 = √(4 × 3) = 2√3.'],
 form:[
  'a ≥ 0 et b ≥ 0 : √(a × b) = √a × √b.',
  'a ≥ 0 et b > 0 : √{a¦b} = {√a¦√b}.',
  'Enlever la racine du dénominateur : {1¦√2} = {√2¦2}.'],
 ex:{q:'Simplifie A = √75 + √12 − √27.',
  st:['√75 = √(25 × 3) = 5√3.',
      '√12 = √(4 × 3) = 2√3.',
      '√27 = √(9 × 3) = 3√3.',
      'A = 5√3 + 2√3 − 3√3 = (5 + 2 − 3)√3 = 4√3.'],
  r:'A = <b>4√3</b>.'},
 pieges:[
  '√(a + b) n\'est <b>pas</b> √a + √b : √9 + √16 = 3 + 4 = 7, mais √(9 + 16) = √25 = 5.',
  'On ne peut additionner que des racines « semblables » : 5√3 + 2√3 = 7√3, mais √2 + √3 ne se simplifie pas.',
  '√25 = 5 (et non ±5) : une racine carrée est toujours positive.'],
 mini:[
  {q:'Calcule √2 × √8.', r:'√16 = <b>4</b>.'},
  {q:'Simplifie √12.', r:'√(4 × 3) = <b>2√3</b>.'}],
 chk:[['Math.sqrt(75)+Math.sqrt(12)-Math.sqrt(27)','4*Math.sqrt(3)'],['Math.sqrt(2)*Math.sqrt(8)','4'],['Math.sqrt(12)','2*Math.sqrt(3)'],['Math.sqrt(9)+Math.sqrt(16)','7'],['Math.sqrt(9+16)','5'],['1/Math.sqrt(2)','Math.sqrt(2)/2'],['Math.sqrt(75)','5*Math.sqrt(3)'],['Math.sqrt(27)','3*Math.sqrt(3)']]
},

'2A — Équations du premier degré': {
 ess:[
  'Une <b>équation du premier degré</b> s\'écrit ax + b = 0 avec a ≠ 0. Sa solution est x = −{b¦a}.',
  '<b>Règle 1</b> : on peut ajouter (ou retirer) le même nombre aux deux membres. <b>Règle 2</b> : on peut multiplier (ou diviser) les deux membres par le même nombre non nul. On obtient une équation équivalente.',
  'Exemple : 3x − 5 = 10 ; on ajoute 5 : 3x = 15 ; on divise par 3 : x = 5.',
  '<b>Produit nul</b> : un produit est nul si l\'un des facteurs est nul. <b>Quotient nul</b> : un quotient est nul si le numérateur est nul et le dénominateur est non nul.'],
 form:[
  'A × B = 0 ⟺ A = 0 ou B = 0.',
  '{A¦B} = 0 ⟺ A = 0 et B ≠ 0.',
  'Pour un problème : choisis l\'inconnue x, écris l\'équation, résous, puis vérifie.'],
 ex:{q:'Un champ rectangulaire a un périmètre de 80 m et une largeur de 15 m. Quelle est sa longueur ?',
  st:['Soit L la longueur. Le périmètre est 2 × (L + 15) = 80.',
      'On divise par 2 : L + 15 = 40.',
      'On retire 15 : L = 25.',
      'Vérification : 2 × (25 + 15) = 2 × 40 = 80.'],
  r:'La longueur est de <b>25 m</b>.'},
 pieges:[
  'Quand tu passes un terme de l\'autre côté, son signe change (en réalité, tu l\'ajoutes ou le retires aux deux membres) : x + 3 = 7 donne x = 7 − 3.',
  'x² − 9 = 0 a <b>deux</b> solutions : x = 3 ou x = −3.',
  'Dans {x − 2¦x + 1} = 0, on trouve x = 2 ; mais il faut toujours vérifier que le dénominateur n\'est pas nul (ici x ≠ −1).'],
 mini:[
  {q:'Résous (2x + 4)(x − 3) = 0.', r:'2x + 4 = 0 donne x = −2 ; x − 3 = 0 donne x = 3. <b>S = {−2 ; 3}</b>.'},
  {q:'Résous {x − 2¦x + 1} = 0.', r:'Numérateur nul : x = 2 ; le dénominateur 2 + 1 = 3 n\'est pas nul. <b>x = 2</b>.'}],
 chk:[['2*(25+15)','80'],['(80/2)-15','25'],['(10+5)/3','5'],['2*(-2)+4','0'],['3-3','0'],['(2-2)/(2+1)','0'],['(-3)**2-9','0']]
},

'2A — Inéquations du premier degré': {
 ess:[
  'Une <b>inéquation du premier degré</b> s\'écrit ax + b ≥ 0 (ou ≤, >, <) avec a ≠ 0.',
  'On peut <b>ajouter</b> le même nombre aux deux membres : le sens ne change pas.',
  'Multiplier ou diviser par un nombre <b>positif</b> : le sens est conservé. Par un nombre <b>négatif</b> : le sens est <b>inversé</b>.',
  'Pour ax + b avec a > 0 : négatif avant −{b¦a}, positif après. Si a < 0, c\'est le contraire.',
  'Pour un produit ou un quotient, on utilise un <b>tableau de signes</b>.'],
 form:[
  'a > 0 : ax + b < 0 ⟺ x < −{b¦a}.',
  '−2x ≥ −4 ⟺ x ≤ 2 (on divise par −2, le sens change).',
  'La solution s\'écrit avec un intervalle : x < 2 donne ]−∞ ; 2[.'],
 ex:{q:'Résous 5 − 3x > −1 et écris la solution sous forme d\'intervalle.',
  st:['On retire 5 des deux côtés : −3x > −6.',
      'On divise par −3 : le sens change, donc x < 2.',
      'Test : x = 1 donne 5 − 3 = 2 > −1 (vrai) ; x = 3 donne 5 − 9 = −4 > −1 (faux).'],
  r:'S = <b>]−∞ ; 2[</b>.'},
 pieges:[
  'Oublier d\'inverser le sens en divisant par un nombre négatif (l\'erreur la plus fréquente).',
  'Les crochets : x < 2 est un intervalle ouvert en 2 ; x ≤ 2 est fermé en 2.',
  'Pour un quotient, la valeur qui annule le dénominateur est toujours exclue (crochet ouvert).'],
 mini:[
  {q:'Résous (x − 1)(x + 2) ≥ 0 avec un tableau de signes.', r:'Positif à l\'extérieur des racines −2 et 1. <b>S = ]−∞ ; −2] ∪ [1 ; +∞[</b>.'},
  {q:'Résous {x − 3¦x + 1} < 0.', r:'Négatif entre −1 et 3, avec −1 exclu et 3 exclu. <b>S = ]−1 ; 3[</b>.'}],
 chk:[['5-3*1>-1','true'],['5-3*3>-1','false'],['5-3*2>-1','false'],['(0-1)*(0+2)>=0','false'],['(-3-1)*(-3+2)>=0','true'],['(2-1)*(2+2)>=0','true'],['(0-3)/(0+1)<0','true'],['(4-3)/(4+1)<0','false']]
},

'2A — Équations linéaires & systèmes dans ℝ × ℝ': {
 ess:[
  'Une <b>équation linéaire à deux inconnues</b> s\'écrit ax + by = c. Une solution est un couple (x ; y) qui rend l\'égalité vraie. Exemple : (2 ; 1) est solution de x + 2y = 4 car 2 + 2 × 1 = 4.',
  'Un <b>système</b> est formé de deux équations. Sa solution est un couple qui vérifie les deux à la fois.',
  'Méthode de <b>substitution</b> : on isole une inconnue dans une équation et on la remplace dans l\'autre.',
  'Méthode d\'<b>addition</b> (combinaison) : on additionne ou on soustrait les équations pour faire disparaître une inconnue.',
  'Méthode <b>graphique</b> : la solution est le point d\'intersection des deux droites.'],
 form:[
  'Deux droites sécantes : une seule solution. Droites parallèles : aucune solution. Droites confondues : une infinité de solutions.',
  'Toujours vérifier le couple trouvé dans les <b>deux</b> équations.'],
 ex:{q:'Résous le système : 2x + y = 7 et x − y = −1.',
  st:['On additionne les deux équations : 3x = 6, donc x = 2.',
      'On remplace dans x − y = −1 : 2 − y = −1, donc y = 3.',
      'Vérification : 2 × 2 + 3 = 7 et 2 − 3 = −1. Les deux sont vraies.'],
  r:'S = <b>{(2 ; 3)}</b>, c\'est-à-dire x = 2 et y = 3.'},
 pieges:[
  'En multipliant une équation pour éliminer une inconnue, multiplie <b>tous</b> les termes, y compris le second membre.',
  'x + y = 2 et x + y = 5 : impossible, aucune solution (droites parallèles).',
  'Ne donne pas seulement x : le résultat est un couple (x ; y).'],
 mini:[
  {q:'Résous par substitution : x + 2y = 7 et 3x − y = 7.', r:'y = 3x − 7, donc x + 6x − 14 = 7, 7x = 21, x = 3 et y = 2. <b>(3 ; 2)</b>.'},
  {q:'Deux nombres ont pour somme 30 et pour différence 8. Quels sont-ils ?', r:'x + y = 30 et x − y = 8 : 2x = 38, x = 19 et y = 11. <b>19 et 11</b>.'}],
 chk:[['2*2+3','7'],['2-3','-1'],['3+2*2','7'],['3*3-2','7'],['19+11','30'],['19-11','8']]
},

'2A — Fonctions affines & affines par intervalles': {
 ess:[
  'Une <b>fonction affine</b> s\'écrit f(x) = ax + b. Sa courbe est une <b>droite</b>. Le nombre a est le coefficient directeur, et b est l\'ordonnée à l\'origine.',
  'Si a > 0, f est <b>croissante</b>. Si a < 0, f est <b>décroissante</b>. Si a = 0, f est <b>constante</b>.',
  'Une fonction <b>linéaire</b> est une fonction affine avec b = 0 : f(x) = ax.',
  'La droite coupe l\'axe des ordonnées en (0 ; b). Elle coupe l\'axe des abscisses en résolvant f(x) = 0.',
  'Une fonction <b>affine par intervalles</b> a une expression affine différente sur chacun de plusieurs intervalles.'],
 form:[
  'a = {f(x₂) − f(x₁)¦x₂ − x₁}.',
  'Deux droites avec le même a sont <b>parallèles</b>.',
  'On trace une droite avec deux points.'],
 ex:{q:'Une fonction affine f vérifie f(1) = 5 et f(3) = 11. Détermine f(x).',
  st:['On pose f(x) = ax + b. Le coefficient est a = {11 − 5¦3 − 1} = {6¦2} = 3.',
      'Avec f(1) = 5 : 3 × 1 + b = 5, donc b = 2.',
      'Vérification : f(3) = 3 × 3 + 2 = 11.'],
  r:'f(x) = <b>3x + 2</b>.'},
 pieges:[
  'Pour trouver où la droite coupe l\'axe des abscisses, on résout f(x) = 0 (et non x = 0).',
  'Le signe de a donne le sens de variation, pas le signe de b.',
  'Pour une fonction par intervalles, il faut regarder à quel intervalle appartient x avant de choisir la bonne expression.'],
 mini:[
  {q:'La droite y = −2x + 4 coupe les axes en quels points ?', r:'Axe des ordonnées : <b>(0 ; 4)</b>. Axe des abscisses : −2x + 4 = 0, x = 2, donc <b>(2 ; 0)</b>.'},
  {q:'Les droites y = 2x + 1 et y = 2x − 3 sont-elles parallèles ?', r:'<b>Oui</b>, elles ont le même coefficient directeur 2.'}],
 chk:[['(11-5)/(3-1)','3'],['3*1+2','5'],['3*3+2','11'],['-2*0+4','4'],['-2*2+4','0']]
},

'2A — Valeur absolue & fonction en escalier': {
 ess:[
  'La <b>valeur absolue</b> de x, notée |x|, est la <b>distance</b> de x à 0 sur la droite graduée : |x| = x si x ≥ 0, et |x| = −x si x < 0. Ainsi |−5| = 5.',
  'Une valeur absolue n\'est jamais négative. La courbe de x ↦ |x| est formée de deux demi-droites qui partent de O ; la fonction est <b>paire</b>.',
  'Résoudre |x| = a : si a > 0, x = a ou x = −a. Si a = 0, x = 0. Si a < 0, aucune solution.',
  'Une fonction <b>en escalier</b> est constante sur chacun de plusieurs intervalles. Exemple : un tarif postal par tranche de poids.',
  'La <b>partie entière</b> E(x) est le plus grand entier inférieur ou égal à x. C\'est un exemple de fonction en escalier.'],
 form:[
  '|a − b| = distance entre a et b. Donc |3 − 7| = |−4| = 4.',
  '|x| = a (a > 0) ⟺ x = a ou x = −a.'],
 ex:{q:'Calcule |3 − 7| et |7 − 3|, puis résous |x| = 3.',
  st:['3 − 7 = −4, donc |3 − 7| = 4.',
      '7 − 3 = 4, donc |7 − 3| = 4 : la distance entre 3 et 7 est la même dans les deux sens.',
      '|x| = 3 veut dire « x est à la distance 3 de 0 » : x = 3 ou x = −3.'],
  r:'|3 − 7| = |7 − 3| = <b>4</b> ; S = <b>{−3 ; 3}</b>.'},
 pieges:[
  '|−5| = 5 et non −5 : la valeur absolue est une distance : elle est toujours positive ou nulle.',
  '|x| = −2 n\'a aucune solution : une distance ne peut pas être négative.',
  'Partie entière d\'un nombre négatif : E(−1,5) = −2 (et non −1), car −2 est le plus grand entier qui est ≤ −1,5.'],
 mini:[
  {q:'Résous |x| = −2.', r:'<b>Aucune solution</b>, car une valeur absolue est toujours positive ou nulle.'},
  {q:'Calcule E(3,7) et E(−1,5).', r:'E(3,7) = <b>3</b> ; E(−1,5) = <b>−2</b>.'}],
 chk:[['Math.abs(3-7)','4'],['Math.abs(7-3)','4'],['Math.abs(-5)','5'],['Math.floor(3.7)','3'],['Math.floor(-1.5)','-2'],['Math.abs(3)===3&&Math.abs(-3)===3','true']]
},

'2A — Fonctions élémentaires & résolutions graphiques': {
 ess:[
  'Sur un intervalle I, f est <b>croissante</b> si, pour tous a < b de I, f(a) ≤ f(b) ; <b>décroissante</b> si f(a) ≥ f(b) ; <b>constante</b> si f(a) = f(b).',
  'Un <b>extremum</b> est un maximum ou un minimum : la plus grande ou la plus petite valeur prise par f.',
  '<b>Fonction carrée</b> x ↦ x² : décroissante sur ]−∞ ; 0], croissante sur [0 ; +∞[. Elle a un minimum 0 en x = 0.',
  'La courbe de x ↦ ax² (a ≠ 0) est une <b>parabole</b> de sommet O et d\'axe (OJ). Si a > 0, elle est tournée vers le haut ; si a < 0, vers le bas.',
  '<b>Résolution graphique</b> de f(x) = k : on trace la droite y = k et on lit les <b>abscisses</b> des points d\'intersection avec la courbe.'],
 form:[
  'x² ≥ 0 pour tout x.',
  'x² = k : deux solutions −√k et √k si k > 0 ; une si k = 0 ; aucune si k < 0.',
  'Tableau de variation de x²   :   x de −∞ à 0 : la flèche descend ; x de 0 à +∞ : la flèche monte.'],
 ex:{q:'Avec la parabole de x ↦ x², résous graphiquement x² = 4 puis x² = −1.',
  st:['On trace la droite horizontale y = 4.',
      'Elle coupe la parabole aux points (−2 ; 4) et (2 ; 4). On lit leurs abscisses : x = −2 ou x = 2.',
      'Pour x² = −1, la droite y = −1 est sous la parabole (qui est toujours au-dessus de l\'axe des abscisses) : elle ne la coupe pas.'],
  r:'x² = 4 : S = <b>{−2 ; 2}</b> ; x² = −1 : <b>aucune solution</b>.'},
 pieges:[
  'On lit la solution sur l\'axe des <b>abscisses</b>, pas sur celui des ordonnées.',
  'x² = 4 a deux solutions : 2 et −2.',
  'Le minimum de x² est la valeur 0 (l\'ordonnée), atteinte en x = 0 (l\'abscisse).'],
 mini:[
  {q:'Dans quel sens est tournée la parabole de y = −3x² ? Quel est son extremum ?', r:'Vers le <b>bas</b> (a < 0) ; elle a un <b>maximum égal à 0</b>, atteint en x = 0.'},
  {q:'La fonction carrée est-elle croissante ou décroissante sur [0 ; +∞[ ?', r:'<b>Croissante</b> : par exemple 1² = 1 < 2² = 4.'}],
 chk:[['(-2)**2','4'],['2**2','4'],['(-1)**2>=0','true'],['-3*0**2','0'],['1**2<2**2','true']]
},

'2A — Prop. & Déf.': { memo:true }

});
