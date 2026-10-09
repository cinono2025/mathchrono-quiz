/* Données de la classe 2nde D : questions + résumés de cours (généré par build.mjs) */
/* Questions de la classe de 2nde D (2nd cycle) — un thème = une liste de questions. */
Object.assign(THEMES_C2, {
  "2D — Espace : positions relatives": [
    {q:"Une droite (D) et un plan (P) sont parallèles lorsque…",c:["(D) ∩ (P) = (D) ou (D) ∩ (P) = ∅","(D) ∩ (P) est un point","(D) et (P) ont exactement deux points communs","(D) est perpendiculaire à (P)"],a:0,exp:"Parallèles : (D) est contenue dans (P) ou disjointe de (P)"},
    {q:"Si (D) ∩ (P) = {I}, on dit que (D) et (P) sont…",c:["disjoints","parallèles","confondus","sécants en I"],a:3,exp:"Un seul point commun : la droite et le plan sont sécants"},
    {q:"Deux plans (P) et (Q) de l'espace sont…",c:["soit confondus, soit sécants suivant une droite, soit disjoints","sécants en un seul point","toujours sécants","toujours parallèles"],a:0,exp:"Trois positions relatives possibles pour deux plans"},
    {q:"Deux plans confondus ou disjoints sont dits…",c:["coplanaires","sécants","orthogonaux","parallèles"],a:3,exp:"Définition : plans confondus ou disjoints = plans parallèles"},
    {q:"L'intersection de deux plans sécants est…",c:["un plan","une droite","un point","l'ensemble vide"],a:1,exp:"Deux plans non parallèles se coupent suivant une droite"},
    {q:"Deux droites de l'espace sont coplanaires si et seulement si…",c:["elles sont parallèles","elles n'ont aucun point commun","elles sont contenues dans un même plan","elles sont sécantes"],a:2,exp:"Coplanaires : dans un même plan, donc sécantes ou parallèles"},
    {q:"Deux droites non coplanaires…",c:["n'ont aucun point commun et ne sont pas parallèles","se coupent en un point","sont confondues","sont parallèles"],a:0,exp:"Deux droites non coplanaires ne se coupent jamais et ne sont pas parallèles"},
    {q:"Trois points de l'espace définissent un plan et un seul lorsqu'ils sont…",c:["alignés","distincts seulement","confondus","non alignés"],a:3,exp:"Trois points non alignés définissent un plan et un seul"},
    {q:"Lequel de ces éléments ne suffit pas à définir un plan ?",c:["Trois points non alignés","Deux droites strictement parallèles","Deux points distincts","Deux droites sécantes"],a:2,exp:"Deux points définissent seulement une droite"},
    {q:"Une droite et un point n'appartenant pas à cette droite définissent…",c:["une infinité de plans","un plan et un seul","une droite","aucun plan"],a:1,exp:"Caractérisation d'un plan par une droite et un point extérieur"},
    {q:"Deux droites sécantes définissent…",c:["deux plans","un plan et un seul","une infinité de plans","aucun plan"],a:1,exp:"Deux droites sécantes sont coplanaires : elles définissent un seul plan"},
    {q:"Dans un cube ABCDEFGH (E au-dessus de A, F au-dessus de B, G au-dessus de C), les droites (AB) et (FG) sont…",c:["parallèles","confondues","sécantes","non coplanaires"],a:3,exp:"(AB) et (FG) ne se coupent pas et ne sont pas parallèles : non coplanaires"},
    {q:"En perspective cavalière, deux droites parallèles de l'espace sont représentées par…",c:["des droites parallèles","des droites perpendiculaires","des cercles","des droites sécantes"],a:0,exp:"Le parallélisme est conservé en perspective cavalière"},
    {q:"En perspective cavalière, une face située dans le plan frontal est représentée…",c:["par un segment","par un point","réduite de moitié","en vraie grandeur"],a:3,exp:"Le plan frontal est représenté sans déformation"},
  ],
  "2D — Espace : parallélisme": [
    {q:"Par un point donné de l'espace, on peut tracer combien de droites parallèles à une droite donnée ?",c:["Aucune","Une et une seule","Une infinité","Deux"],a:1,exp:"Propriété admise : existence et unicité de la parallèle"},
    {q:"Deux droites parallèles à une même troisième sont…",c:["non coplanaires","orthogonales","sécantes","parallèles entre elles"],a:3,exp:"Transitivité du parallélisme (propriété admise)"},
    {q:"Lorsque deux droites de l'espace sont parallèles, tout plan qui coupe l'une…",c:["est perpendiculaire à l'autre","est parallèle à l'autre","contient l'autre","coupe l'autre"],a:3,exp:"Propriété démontrée par l'absurde"},
    {q:"Cette dernière propriété se démontre par…",c:["un tableau de variations","un raisonnement par l'absurde","un calcul de moyenne","une construction au compas"],a:1,exp:"On suppose que le plan ne coupe pas l'autre droite et on aboutit à une contradiction"},
    {q:"Une droite est parallèle à un plan si et seulement si elle est parallèle à…",c:["un point de ce plan","un plan perpendiculaire","n'importe quelle droite de l'espace","une droite de ce plan"],a:3,exp:"Critère de parallélisme droite-plan"},
    {q:"Si une droite (D) est parallèle à un plan (P), toute droite parallèle à (D) est…",c:["parallèle à (P)","contenue dans (P)","perpendiculaire à (P)","sécante à (P)"],a:0,exp:"Propriété démontrée en cours"},
    {q:"Une droite parallèle à deux plans sécants est parallèle à…",c:["aucune droite particulière","leur droite d'intersection","l'un des plans seulement","leur plan bissecteur"],a:1,exp:"Propriété du guide"},
    {q:"Deux plans sont parallèles si et seulement si l'un d'eux contient deux droites…",c:["parallèles entre elles","confondues","non coplanaires","sécantes parallèles à l'autre plan"],a:3,exp:"Critère de parallélisme de deux plans"},
    {q:"Deux plans parallèles à un même troisième plan sont…",c:["parallèles entre eux","perpendiculaires","toujours disjoints du troisième","sécants"],a:0,exp:"Transitivité du parallélisme de plans"},
    {q:"Par un point donné de l'espace, combien de plans parallèles à un plan donné ?",c:["Un et un seul","Deux","Une infinité","Aucun"],a:0,exp:"Propriété admise"},
    {q:"Deux plans parallèles sont coupés par un troisième plan. Les droites d'intersection sont…",c:["confondues","sécantes","perpendiculaires","parallèles"],a:3,exp:"Propriété : les droites d'intersection sont parallèles"},
    {q:"Lorsque deux plans sont parallèles, toute droite qui coupe l'un…",c:["est parallèle à l'autre","est parallèle à leur intersection","est contenue dans l'autre","coupe l'autre"],a:3,exp:"Propriété admise"},
    {q:"Lorsque deux plans sont parallèles, toute droite parallèle à l'un est…",c:["sécante à l'autre","orthogonale à l'autre","perpendiculaire aux deux","parallèle à l'autre"],a:3,exp:"Propriété admise"},
  ],
  "2D — Logique & raisonnement": [
    {q:"Une proposition mathématique est…",c:["un calcul","une question","un énoncé qui est vrai ou faux","une figure"],a:2,exp:"Une proposition est soit vraie, soit fausse"},
    {q:"L'implication réciproque de (P ⟹ Q) est…",c:["P ⟹ non Q","non Q ⟹ non P","non P ⟹ non Q","Q ⟹ P"],a:3,exp:"La réciproque échange l'hypothèse et la conclusion"},
    {q:"La contraposée de (P ⟹ Q) est…",c:["P et Q","non P ⟹ non Q","non Q ⟹ non P","Q ⟹ P"],a:2,exp:"Contraposée : non Q ⟹ non P"},
    {q:"Une implication et sa contraposée sont…",c:["équivalentes seulement si P est fausse","toujours équivalentes","toujours contraires","indépendantes"],a:1,exp:"Elles sont vraies ou fausses en même temps"},
    {q:"(P ⟺ Q) signifie…",c:["P ⟹ Q et Q ⟹ P","Q ⟹ P seulement","P ou Q","P ⟹ Q seulement"],a:0,exp:"Équivalence logique = implication dans les deux sens"},
    {q:"La proposition « P ou Q » est vraie lorsque…",c:["au moins une des deux propositions est vraie","exactement une est vraie","les deux sont fausses","les deux sont vraies uniquement"],a:0,exp:"Le « ou » mathématique est inclusif"},
    {q:"La proposition « P et Q » est vraie lorsque…",c:["les deux propositions sont vraies","les deux sont fausses","au moins une est vraie","P est fausse"],a:0,exp:"« et » exige que les deux soient vraies"},
    {q:"Pour démontrer P par l'absurde, on suppose…",c:["P et non P","non P et on cherche une contradiction","P vraie et on la vérifie","P ⟹ Q"],a:1,exp:"Raisonnement par l'absurde"},
    {q:"La négation de « x > 3 » est…",c:["x = 3","x ≥ 3","x ≤ 3","x < 3"],a:2,exp:"Le contraire de x > 3 est x ≤ 3"},
    {q:"Pour montrer qu'une implication est fausse, il suffit d'un…",c:["dessin","contre-exemple","exemple qui la vérifie","calcul de moyenne"],a:1,exp:"Un seul contre-exemple suffit"},
    {q:"Réciproque de « Si un quadrilatère est un carré alors c'est un losange »…",c:["Si c'est un losange alors c'est un carré : proposition vraie","Un carré est un losange : vraie","Si c'est un losange alors c'est un carré : proposition fausse","Si ce n'est pas un carré alors ce n'est pas un losange : vraie"],a:2,exp:"Un losange n'est pas toujours un carré"},
  ],
  "2D — Calculs dans ℝ": [
    {q:"Les symboles −∞ et +∞ sont…",c:["des nombres réels","des nombres entiers","des symboles qui ne sont pas des nombres réels","des nombres rationnels"],a:2,exp:"Ce ne sont pas des nombres réels"},
    {q:"L'intervalle [2 ; +∞[ est l'ensemble des réels x tels que…",c:["x < 2","x ≤ 2","x ≥ 2","x > 2"],a:2,exp:"Crochet fermé en 2 : 2 est inclus"},
    {q:"Un majorant d'une partie A non vide de ℝ est un réel M tel que…",c:["M ≥ x pour tout x de A","M appartient à A","M = x pour un x de A","M ≤ x pour tout x de A"],a:0,exp:"Définition d'un majorant"},
    {q:"Un minorant d'une partie A non vide de ℝ est un réel m tel que…",c:["m = 0","m ≥ x pour tout x de A","m est un élément de A","m ≤ x pour tout x de A"],a:3,exp:"Définition d'un minorant"},
    {q:"Le maximum d'une partie A de ℝ est…",c:["un minorant de A","un majorant de A qui appartient à A","un majorant qui n'appartient pas à A","toujours 0"],a:1,exp:"Le maximum est le plus grand élément de A"},
    {q:"L'intervalle ]0 ; 1[ admet-il un maximum ?",c:["Non : 1 est un majorant mais 1 n'appartient pas à ]0 ; 1[","Oui, 0","Oui, 0,999","Oui, 1"],a:0,exp:"Aucun plus grand élément : pas de maximum"},
    {q:"Le minimum de [−2 ; 5] est…",c:["il n'existe pas","0","5","−2"],a:3,exp:"−2 appartient à l'intervalle et minore tous ses éléments"},
    {q:"La partie entière de −2,3 est…",c:["−3","−2","2","−2,3"],a:0,exp:"E(x) est le plus grand entier relatif ≤ x : E(−2,3) = −3"},
    {q:"La partie entière de 4,99 est…",c:["0","5","4","4,9"],a:2,exp:"Le plus grand entier ≤ 4,99 est 4"},
    {q:"La notation scientifique de 45 000 est…",c:["4,5 × 10³","4,5 × 10⁴","45 × 10³","0,45 × 10⁵"],a:1,exp:"A = a × 10ᵖ avec 1 ≤ a < 10"},
    {q:"L'approximation décimale par défaut d'ordre 2 de 2,3678 est…",c:["2,4","2,368","2,36","2,37"],a:2,exp:"Par défaut : on tronque à deux décimales"},
    {q:"L'arrondi d'ordre 2 de 3,14159 est…",c:["3,1","3,142","3,14","3,15"],a:2,exp:"Troisième décimale 1 < 5 : on garde 3,14"},
    {q:"Si 2 ≤ a ≤ 3 et 1 ≤ b ≤ 4, alors…",c:["2 ≤ a + b ≤ 12","1 ≤ a + b ≤ 7","3 ≤ a + b ≤ 7","3 ≤ a + b ≤ 12"],a:2,exp:"On additionne membre à membre les bornes"},
    {q:"Si 2 ≤ a ≤ 3 et 1 ≤ b ≤ 4, alors un encadrement de a − b est…",c:["−2 ≤ a − b ≤ 2","−2 ≤ a − b ≤ 1","1 ≤ a − b ≤ 2","1 ≤ a − b ≤ −1"],a:0,exp:"a − b est minimal pour 2 − 4 = −2 et maximal pour 3 − 1 = 2"},
  ],
  "2D — Valeur absolue & distance": [
    {q:"Pour tout réel x, |x| est égal à…",c:["x²","−x toujours","x si x ≤ 0 ; −x si x > 0","x si x ≥ 0 ; −x si x < 0"],a:3,exp:"Définition de la valeur absolue"},
    {q:"|x| est égale à…",c:["−x","x²","d(x , 0)","d(x , 1)"],a:2,exp:"|x| est la distance de x à 0"},
    {q:"|x| est aussi égale à…",c:["le plus grand des deux nombres x et −x","le plus petit des deux nombres x et −x","x + (−x)","x²"],a:0,exp:"|x| = Sup(x, −x)"},
    {q:"|−5| + |3| = …",c:["−8","8","2","−2"],a:1,exp:"5 + 3 = 8"},
    {q:"|3 − π| = …",c:["0","3 + π","3 − π","π − 3"],a:3,exp:"π > 3 donc 3 − π < 0 et |3 − π| = π − 3"},
    {q:"Pour tous réels a et b, |ab| = …",c:["|a| + |b|","|a| − |b|","|a| × |b|","ab"],a:2,exp:"La valeur absolue d'un produit est le produit des valeurs absolues"},
    {q:"|x| = 0 équivaut à…",c:["x = 0","x < 0","x > 0","x = 1"],a:0,exp:"Seul 0 est à distance 0 de 0"},
    {q:"L'inégalité triangulaire s'écrit…",c:["|a + b| ≥ |a| + |b|","|a + b| = |a| + |b|","|a + b| < |a| − |b|","|a + b| ≤ |a| + |b|"],a:3,exp:"Propriété de la valeur absolue"},
    {q:"|x − 2| ≤ 3 équivaut à…",c:["x ∈ [−1 ; 5]","x ∈ [1 ; 5]","x ∈ [−5 ; 1]","x ∈ ]−∞ ; −1] ∪ [5 ; +∞["],a:0,exp:"−3 ≤ x − 2 ≤ 3 donc −1 ≤ x ≤ 5"},
    {q:"|x − 2| ≥ 3 équivaut à…",c:["x ∈ ]−∞ ; −1] ∪ [5 ; +∞[","x ∈ [−1 ; 5]","x ∈ [1 ; 5]","x ∈ ]−1 ; 5["],a:0,exp:"x − 2 ≤ −3 ou x − 2 ≥ 3"},
    {q:"d(x , a) < r équivaut à…",c:["x ∈ ]a − r ; a + r[","x ∈ ]−∞ ; a − r[ ∪ ]a + r ; +∞[","x > a + r","x ∈ [a − r ; a + r]"],a:0,exp:"x est à moins de r de a"},
    {q:"L'intervalle [1 ; 7] se caractérise par…",c:["|x − 4| ≤ 3","|x − 1| ≤ 7","|x − 3| ≤ 4","|x − 4| ≤ 6"],a:0,exp:"Centre 4, rayon 3"},
    {q:"|a| = |b| équivaut à…",c:["a² = −b²","a = b ou a = −b","a = b","a = −b"],a:1,exp:"Deux réels ont même valeur absolue s'ils sont égaux ou opposés"},
    {q:"« x₀ est une valeur approchée de x à 0,01 près » signifie…",c:["x₀ = 0,01 x","|x − x₀| ≤ 0,01","|x| ≤ 0,01","x = x₀ + 0,01"],a:1,exp:"L'incertitude est la distance entre x et x₀"},
  ],
  "2D — Généralités sur les fonctions": [
    {q:"Une fonction numérique f définie sur D associe à chaque x de D…",c:["un vecteur","aucun réel","deux réels","un unique réel noté f(x)"],a:3,exp:"Définition d'une fonction numérique"},
    {q:"L'ensemble de définition de f(x) = 1/(x − 3) est…",c:["]3 ; +∞[","ℝ ∖ {3}","ℝ","ℝ ∖ {−3}"],a:1,exp:"Le dénominateur ne doit pas s'annuler"},
    {q:"L'ensemble de définition de f(x) = √(x − 2) est…",c:["]−∞ ; 2]","]2 ; +∞[","ℝ","[2 ; +∞["],a:3,exp:"Il faut x − 2 ≥ 0"},
    {q:"L'ensemble de définition de f(x) = (x + 1)/(x² − 4) est…",c:["ℝ ∖ {−2 ; 2}","ℝ ∖ {2}","ℝ ∖ {−1}","ℝ"],a:0,exp:"x² − 4 = 0 pour x = 2 ou x = −2"},
    {q:"Les antécédents de 4 par f(x) = x² sont…",c:["−2 seulement","16","−2 et 2","2 seulement"],a:2,exp:"x² = 4 ⟺ x = 2 ou x = −2"},
    {q:"Deux fonctions f et g sont égales lorsque…",c:["elles ont le même ensemble de définition seulement","elles ont le même ensemble de définition et f(x) = g(x) pour tout x de cet ensemble","elles ont la même représentation en un point","f(x) = g(x) pour un seul x"],a:1,exp:"Égalité de deux fonctions"},
    {q:"f et g coïncident sur un ensemble I lorsque…",c:["f = g sur ℝ","f(x) ≠ g(x) sur I","f et g ont le même ensemble de définition","f et g sont définies sur I et f(x) = g(x) pour tout x de I"],a:3,exp:"Définition de la coïncidence sur un sous-ensemble"},
    {q:"f(x) = (x² − 1)/(x − 1) et g(x) = x + 1 coïncident sur…",c:["{1}","ℝ","ℝ ∖ {1}","ℝ ∖ {−1}"],a:2,exp:"Pour x ≠ 1 : (x² − 1)/(x − 1) = x + 1"},
    {q:"f est strictement croissante sur I signifie que pour tous a < b de I…",c:["f(a) > f(b)","f(a) < f(b)","f(a) = f(b)","f(a) ≤ f(b)"],a:1,exp:"Définition de la stricte croissance"},
    {q:"f est décroissante sur I signifie que pour tous a < b de I…",c:["f(a) < f(b)","f(a) ≤ f(b)","f(a) = f(b)","f(a) ≥ f(b)"],a:3,exp:"Définition d'une fonction décroissante"},
    {q:"f est constante sur I signifie que…",c:["f(a) = f(b) pour tous a, b de I","f est croissante seulement","f(x) = 0 sur I","f n'est pas définie sur I"],a:0,exp:"Toutes les images sont égales"},
    {q:"Étudier le sens de variation de f sur I, c'est déterminer…",c:["les zéros de f uniquement","f(0)","la moyenne de f","les plus grands intervalles de I où f est strictement monotone ou constante"],a:3,exp:"Définition donnée dans le guide"},
    {q:"f admet un maximum M atteint en a sur I si…",c:["f(a) = 0","f(x) ≤ f(a) = M pour tout x de I","f(x) ≥ f(a) pour tout x de I","f est croissante sur I"],a:1,exp:"Définition du maximum d'une fonction"},
    {q:"Un tableau de variations récapitule…",c:["l'ensemble de définition, le sens de variation, les extremums et les images aux bornes","les racines uniquement","la moyenne de f","les antécédents de 0"],a:0,exp:"Définition du tableau de variations"},
    {q:"Graphiquement, l'image de a par f est lue…",c:["sur la bissectrice","comme l'ordonnée du point de la courbe d'abscisse a","comme l'abscisse du point d'ordonnée a","comme la pente de la courbe"],a:1,exp:"Image = ordonnée ; antécédent = abscisse"},
  ],
  "2D — Applications": [
    {q:"Une application f de E vers F associe à chaque élément de E…",c:["au moins un élément de F","aucun élément","un unique élément de F","tous les éléments de F"],a:2,exp:"Définition d'une application"},
    {q:"f est injective si et seulement si, pour tous a et b de E…",c:["f(a) = f(b) ⟹ a = b","a = b ⟹ f(a) = f(b)","f(a) ≠ f(b) ⟹ a = b","f(a) = a"],a:0,exp:"Propriété caractéristique de l'injection"},
    {q:"La contraposée de « f(a) = f(b) ⟹ a = b » est…",c:["f(a) ≠ f(b) ⟹ a = b","a = b ⟹ f(a) = f(b)","a ≠ b ⟹ f(a) ≠ f(b)","a ≠ b ⟹ f(a) = f(b)"],a:2,exp:"Contraposée : non Q ⟹ non P"},
    {q:"f est surjective de E vers F si…",c:["tout élément de F a au moins un antécédent dans E","f est injective","tout élément de E a une image","F est vide"],a:0,exp:"Définition de la surjection"},
    {q:"Une application est bijective si elle est…",c:["seulement surjective","constante","injective ou surjective","injective et surjective"],a:3,exp:"Bijection = injection + surjection"},
    {q:"L'application de ℝ vers ℝ définie par f(x) = x² est-elle injective ?",c:["Oui","Non : f(−1) = f(1) avec −1 ≠ 1","Non, car f n'est pas définie en 0","Oui, car f(x) ≥ 0"],a:1,exp:"Deux réels distincts ont la même image"},
    {q:"L'application de ℝ vers ℝ définie par f(x) = x² est-elle surjective ?",c:["Oui","Non : −1 n'a pas d'antécédent","Oui, car f est définie sur ℝ","Non : 0 n'a pas d'antécédent"],a:1,exp:"x² ≥ 0 : aucun réel négatif n'est atteint"},
    {q:"L'application de ℝ vers ℝ définie par f(x) = 2x + 1 est…",c:["ni injective ni surjective","seulement surjective","seulement injective","bijective"],a:3,exp:"Tout réel y a un unique antécédent (y − 1)/2"},
    {q:"La bijection réciproque de f(x) = 2x + 1 (de ℝ vers ℝ) est…",c:["f⁻¹(x) = 1/(2x + 1)","f⁻¹(x) = (x + 1)/2","f⁻¹(x) = (x − 1)/2","f⁻¹(x) = 2x − 1"],a:2,exp:"y = 2x + 1 ⟺ x = (y − 1)/2"},
    {q:"Si f est bijective de E vers F, sa bijection réciproque va de…",c:["F vers F","E vers F","F vers E","E vers E"],a:2,exp:"On inverse les rôles de E et F"},
  ],
  "2D — Fonctions de référence": [
    {q:"La fonction f(x) = x² est strictement décroissante sur…",c:["[0 ; +∞[","]−∞ ; 0]","]0 ; 1[","ℝ"],a:1,exp:"x² décroît sur ]−∞ ; 0] et croît sur [0 ; +∞["},
    {q:"La fonction f(x) = x³ est…",c:["strictement croissante sur ℝ","constante","décroissante sur ]−∞ ; 0]","décroissante sur ℝ"],a:0,exp:"Le cube conserve l'ordre"},
    {q:"L'ensemble de définition de f(x) = √x est…",c:["[0 ; +∞[","]0 ; +∞[","]−∞ ; 0]","ℝ"],a:0,exp:"Il faut x ≥ 0"},
    {q:"La fonction inverse x ↦ 1/x est strictement décroissante…",c:["sur ]−∞ ; 0[ et sur ]0 ; +∞[ séparément","seulement sur ]0 ; +∞[","sur ℝ","sur ℝ*"],a:0,exp:"Elle n'est pas monotone sur ℝ* tout entier"},
    {q:"La courbe de f(x) = x² admet pour axe de symétrie…",c:["aucun axe","l'axe des ordonnées","la droite d'équation y = x","l'axe des abscisses"],a:1,exp:"f(−x) = f(x)"},
    {q:"La courbe de f(x) = x³ est symétrique par rapport…",c:["à l'axe des ordonnées","à l'origine du repère","à la droite y = 1","à l'axe des abscisses"],a:1,exp:"f(−x) = −f(x)"},
    {q:"Si a ∈ ]0 ; 1[, alors…",c:["√a < a < a² < a³ < 1/a","1/a < √a < a < a² < a³","a³ < a² < a < √a < 1/a","a < a² < a³ < √a < 1/a"],a:2,exp:"Ex. a = 0,25 : 0,0156 < 0,0625 < 0,25 < 0,5 < 4"},
    {q:"Si a > 1, alors…",c:["a³ > a² > a > √a > 1/a","1/a > √a > a > a² > a³","a > a² > a³ > √a > 1/a","a² > a³ > a > √a > 1/a"],a:0,exp:"Ex. a = 4 : 64 > 16 > 4 > 2 > 0,25"},
    {q:"Si a = 1, alors…",c:["1/a > a","a³ < a²","a³ = a² = a = √a = 1/a = 1","√a < a"],a:2,exp:"Tous ces nombres valent 1"},
    {q:"Classement croissant de 0,5² ; 0,5³ ; √0,5 ; 1/0,5 :",c:["0,5³ < 0,5² < √0,5 < 1/0,5","√0,5 < 0,5² < 0,5³ < 1/0,5","1/0,5 < √0,5 < 0,5² < 0,5³","0,5² < 0,5³ < √0,5 < 1/0,5"],a:0,exp:"0,125 < 0,25 < 0,707… < 2"},
    {q:"La fonction valeur absolue x ↦ |x| est décroissante sur…",c:["]−∞ ; 0]","[0 ; +∞[","aucun intervalle","ℝ"],a:0,exp:"|x| = −x pour x ≤ 0"},
    {q:"f(x) = |x − 1| s'écrit sans valeur absolue…",c:["|x| − 1 toujours","1 − x si x ≥ 1 ; x − 1 si x < 1","x − 1 si x ≥ 1 ; 1 − x si x < 1","x + 1 si x ≥ 0"],a:2,exp:"Fonction affine par intervalles"},
    {q:"La fonction partie entière est constante sur…",c:["aucun intervalle","[0 ; +∞[","chaque intervalle [n ; n + 1[ (n entier)","ℝ"],a:2,exp:"E(x) = n pour n ≤ x < n + 1"},
    {q:"La courbe représentative de x ↦ 1/x s'appelle…",c:["une parabole","une hyperbole","une sinusoïde","une droite"],a:1,exp:"Courbe de la fonction inverse"},
  ],
  "2D — Équations & inéquations dans ℝ": [
    {q:"Deux équations sont équivalentes si…",c:["elles ont une solution commune","elles ont le même ensemble de solutions","elles ont le même degré","elles ont la même écriture"],a:1,exp:"Définition de l'équivalence"},
    {q:"|x − 3| = 5 a pour ensemble de solutions…",c:["{8}","{−8 ; 2}","{−2 ; 8}","{2}"],a:2,exp:"x − 3 = 5 ou x − 3 = −5"},
    {q:"|2x + 1| = 3 a pour solutions…",c:["{−1 ; 2}","{−2 ; 1}","{2 ; −1}","{1}"],a:1,exp:"2x + 1 = 3 ⟹ x = 1 ; 2x + 1 = −3 ⟹ x = −2"},
    {q:"|x − 1| = −2 a pour ensemble de solutions…",c:["∅","{3}","{1}","{−1 ; 3}"],a:0,exp:"Une valeur absolue est toujours positive ou nulle"},
    {q:"Dans ℝ, x² − 9 = 0 a pour solutions…",c:["{3}","{−3 ; 3}","{9}","∅"],a:1,exp:"x² = 9"},
    {q:"Dans ℝ, x² + 4 = 0 a pour solutions…",c:["∅","{−2 ; 2}","{2}","{4}"],a:0,exp:"Un carré n'est jamais négatif"},
    {q:"Dans ℝ, x² − 5x + 6 = 0 a pour solutions…",c:["{1 ; 6}","{−2 ; −3}","{2 ; 3}","{−1 ; −6}"],a:2,exp:"x² − 5x + 6 = (x − 2)(x − 3)"},
    {q:"Dans ℝ, x² − 2x = 0 a pour solutions…",c:["{0}","{0 ; 2}","{−2 ; 0}","{2}"],a:1,exp:"x(x − 2) = 0"},
    {q:"Résoudre 3x − 6 < 0.",c:["x > −2","x < −2","x < 2","x > 2"],a:2,exp:"3x < 6 donc x < 2"},
    {q:"Résoudre −2x + 4 ≥ 0.",c:["x ≥ 2","x ≥ −2","x ≤ −2","x ≤ 2"],a:3,exp:"−2x ≥ −4 : on divise par −2 et le sens change"},
    {q:"Multiplier les deux membres d'une inéquation par un réel négatif…",c:["la rend toujours vraie","change le sens de l'inégalité","annule l'inéquation","conserve le sens"],a:1,exp:"Règle sur les inéquations"},
    {q:"|x| < 2 équivaut à…",c:["x < 2","x ∈ [−2 ; 2]","x ∈ ]−∞ ; −2[ ∪ ]2 ; +∞[","x ∈ ]−2 ; 2["],a:3,exp:"−2 < x < 2"},
    {q:"Pour a > 0, |x| ≥ a équivaut à…",c:["−a ≤ x ≤ a","x ≥ a seulement","x ≤ −a ou x ≥ a","x ≤ a"],a:2,exp:"x est à au moins a de 0"},
    {q:"Résoudre (x − 1)/(x + 2) ≥ 0.",c:["[−2 ; 1]","]−∞ ; −2[ ∪ [1 ; +∞[","]−∞ ; −2] ∪ [1 ; +∞[","]−2 ; 1]"],a:1,exp:"Tableau de signes ; −2 est exclu (dénominateur nul)"},
  ],
  "2D — Statistiques": [
    {q:"Notes : 7 8 8 8 9 9 10 10 10 12 12 12 12 12 13 13 15 15 15. L'effectif total est…",c:["7","18","20","19"],a:3,exp:"1 + 3 + 2 + 3 + 5 + 2 + 3 = 19"},
    {q:"Notes : 7 8 8 8 9 9 10 10 10 12 12 12 12 12 13 13 15 15 15. Le mode est…",c:["15","12","10","8"],a:1,exp:"12 apparaît 5 fois : c'est l'effectif maximal"},
    {q:"Notes : 7 8 8 8 9 9 10 10 10 12 12 12 12 12 13 13 15 15 15. La médiane est…",c:["12","13","11","10"],a:0,exp:"19 valeurs : la médiane est la 10e valeur, soit 12"},
    {q:"Notes : 7 8 8 8 9 9 10 10 10 12 12 12 12 12 13 13 15 15 15. L'étendue est…",c:["22","15","8","7"],a:2,exp:"15 − 7 = 8"},
    {q:"Notes : 7 8 8 8 9 9 10 10 10 12 12 12 12 12 13 13 15 15 15. L'effectif cumulé croissant de la note 10 est…",c:["9","19","10","3"],a:0,exp:"1 + 3 + 2 + 3 = 9 notes ≤ 10"},
    {q:"La moyenne de cette série est environ…",c:["12","10,5","11,5","11,05"],a:3,exp:"Somme = 210 ; 210/19 ≈ 11,05"},
    {q:"Pour une série d'effectif total N impair, la médiane est la valeur de rang…",c:["(N + 1)/2","N + 1","N/2","(N − 1)/2"],a:0,exp:"Ex. N = 19 : rang 10"},
    {q:"La variance d'une série statistique est…",c:["la moyenne des écarts à la moyenne","la médiane des écarts","la moyenne des carrés des écarts à la moyenne","la différence entre les valeurs extrêmes"],a:2,exp:"Définition de la variance"},
    {q:"L'écart-type est…",c:["la racine carrée de la variance","le carré de la variance","la moyenne des distances à la moyenne","la médiane des écarts"],a:0,exp:"σ = √V"},
    {q:"La variance de la série 1 ; 3 ; 5 ; 7 est…",c:["4","20","2,5","5"],a:3,exp:"Moyenne 4 ; carrés des écarts 9, 1, 1, 9 ; 20/4 = 5"},
    {q:"L'écart moyen absolu est…",c:["la racine de la variance","la moyenne des carrés des écarts","la moyenne des distances à la moyenne","la différence max − min"],a:2,exp:"Définition du guide"},
    {q:"Les effectifs cumulés croissants s'obtiennent en…",c:["multipliant les effectifs","soustrayant les effectifs","additionnant successivement les effectifs, modalités rangées dans l'ordre croissant","divisant chaque effectif par N"],a:2,exp:"Cumul progressif des effectifs"},
    {q:"La fréquence cumulée croissante de la dernière modalité vaut…",c:["N","1 (soit 100 %)","0,5","0"],a:1,exp:"Toute la série est comptée"},
    {q:"Le premier quartile Q₁ est une valeur telle qu'au moins … des données lui sont inférieures ou égales.",c:["75 %","10 %","25 %","50 %"],a:2,exp:"Q₁ : 25 % ; Q₂ (médiane) : 50 % ; Q₃ : 75 %"},
    {q:"Pour un caractère quantitatif continu, on utilise…",c:["un nuage de points","un histogramme","un diagramme en bâtons","un diagramme circulaire uniquement"],a:1,exp:"Les classes sont représentées par des rectangles"},
    {q:"Pour calculer la moyenne d'une série continue regroupée en classes, on utilise…",c:["les amplitudes","les centres des classes","les bornes inférieures","les fréquences seulement"],a:1,exp:"Chaque classe est représentée par son centre"},
    {q:"Le diagramme cumulatif des fréquences permet de lire graphiquement…",c:["la variance exacte","la médiane et les quartiles","l'écart-type exact","le mode uniquement"],a:1,exp:"On lit les valeurs pour 25 %, 50 %, 75 %"},
  ],
  "2D — Polynômes & fractions rationnelles": [
    {q:"Un zéro (ou racine) d'un polynôme P est un réel a tel que…",c:["P(a) = 1","a = 0","P(a) = 0","P(0) = a"],a:2,exp:"Définition d'un zéro"},
    {q:"Si a est un zéro de P (degré n ≥ 1), alors P(x) = …",c:["a Q(x)","(x + a) Q(x), Q de degré n","(x − a) Q(x), Q de degré n − 1","(x − a) + Q(x)"],a:2,exp:"Propriété admise du guide"},
    {q:"Les zéros de P(x) = x² − 5x + 6 sont…",c:["1 et 6","2 et 3","−1 et 6","−2 et −3"],a:1,exp:"P(x) = (x − 2)(x − 3)"},
    {q:"Le quotient de x³ − 1 par (x − 1) est…",c:["x² + x + 1","x² − 1","x² + 1","x² − x + 1"],a:0,exp:"(x − 1)(x² + x + 1) = x³ − 1"},
    {q:"Le quotient de x² + 3x + 2 par (x + 1) est…",c:["x − 2","x² + 2","x + 2","x + 1"],a:2,exp:"(x + 1)(x + 2) = x² + 3x + 2"},
    {q:"La forme canonique de x² + 4x + 1 est…",c:["(x + 2)² + 3","(x − 2)² − 3","(x + 2)² − 3","(x + 4)² − 15"],a:2,exp:"(x + 2)² = x² + 4x + 4"},
    {q:"La factorisation de x² − 4x + 4 est…",c:["(x − 2)²","(x − 4)²","(x − 2)(x + 2)","(x + 2)²"],a:0,exp:"Identité remarquable"},
    {q:"Le binôme 2x − 6 est positif sur…",c:["]−∞ ; −3[","]−∞ ; 3[","ℝ","]3 ; +∞["],a:3,exp:"2x − 6 > 0 ⟺ x > 3"},
    {q:"Le binôme ax + b (a > 0) est négatif pour…",c:["x > b/a","x > −b/a","x < b/a","x < −b/a"],a:3,exp:"ax + b < 0 ⟺ x < −b/a"},
    {q:"Une fraction rationnelle est…",c:["le quotient de deux polynômes","le produit de deux polynômes","une somme de racines carrées","un polynôme de degré 1"],a:0,exp:"Définition"},
    {q:"L'ensemble de définition de (x + 1)/(x² − 1) est…",c:["ℝ ∖ {−1 ; 1}","ℝ ∖ {1}","ℝ","ℝ ∖ {−1}"],a:0,exp:"x² − 1 = 0 pour x = ±1"},
    {q:"Les zéros de (x − 2)(x + 1)/(x − 3) sont…",c:["2, −1 et 3","2 et −1","3","−2 et 1"],a:1,exp:"On annule le numérateur (avec dénominateur non nul)"},
    {q:"Pour x ≠ 1, (x² − 1)/(x − 1) se simplifie en…",c:["x²","x + 1","1","x − 1"],a:1,exp:"(x − 1)(x + 1)/(x − 1)"},
    {q:"(x − 1)(x + 3) < 0 sur…",c:["]−∞ ; −3[ ∪ ]1 ; +∞[","]1 ; +∞[","[−3 ; 1]","]−3 ; 1["],a:3,exp:"Tableau de signes : négatif entre les zéros"},
  ],
  "2D — Vecteurs du plan": [
    {q:"Étant donnés un vecteur →u et un point O, il existe … point M tel que →OM = →u.",c:["une infinité de","aucun","au moins deux","un unique"],a:3,exp:"Propriété admise"},
    {q:"λ→u = →0 si et seulement si…",c:["λ = 0 ou →u = →0","λ = 1","λ = 0 et →u = →0","→u = →0 seulement"],a:0,exp:"Propriété du guide"},
    {q:"Une combinaison linéaire de →u et →v est un vecteur de la forme…",c:["→u + →v seulement","α→u + β→v (α, β réels)","α→u × β→v","→u × →v"],a:1,exp:"Définition"},
    {q:"→u et →v sont colinéaires si et seulement s'il existe un réel λ tel que…",c:["‖→u‖ = ‖→v‖","→u + →v = →0","→u ⋅ →v = 0","→u = λ→v ou →v = λ→u"],a:3,exp:"Propriété démontrée en cours"},
    {q:"→u et →v sont non colinéaires. Si α→u + β→v = →0, alors…",c:["α = β","α = β = 0","α = 1","α = −β"],a:1,exp:"Caractérisation de la non-colinéarité"},
    {q:"Une base du plan vectoriel est…",c:["un seul vecteur non nul","un couple de vecteurs non colinéaires","un couple de vecteurs colinéaires","trois vecteurs quelconques"],a:1,exp:"Définition d'une base"},
    {q:"Le déterminant de →u(x ; y) et →v(x' ; y') dans une base est…",c:["xx' + yy'","xx' − yy'","xy + x'y'","xy' − x'y"],a:3,exp:"det(→u, →v) = xy' − x'y"},
    {q:"det(→u, →v) = 0 équivaut à…",c:["→u = →v","→u et →v orthogonaux","→u unitaire","→u et →v colinéaires"],a:3,exp:"Critère de colinéarité"},
    {q:"Les vecteurs →u(2 ; −3) et →v(−4 ; 6) sont…",c:["colinéaires","non colinéaires","égaux","orthogonaux"],a:0,exp:"det = 2×6 − (−4)×(−3) = 12 − 12 = 0"},
    {q:"A(1 ; 2), B(3 ; 6), C(4 ; 8) sont-ils alignés ?",c:["Oui, car AB = BC","Oui, car det(→AB, →AC) = 0","Non, car AB ≠ AC","Non, car det(→AB, →AC) = 2"],a:1,exp:"→AB(2 ; 4), →AC(3 ; 6) : 2×6 − 3×4 = 0"},
    {q:"Le centre de gravité G d'un triangle ABC vérifie…",c:["→AG = →BG","→GA + →GB + →GC = →0","→GA = →GB = →GC","→GA + →GB = →GC"],a:1,exp:"Caractérisation vectorielle de G"},
    {q:"M appartient au segment [AB] si et seulement si →AM = t→AB avec…",c:["t ≥ 0","t > 1","0 ≤ t ≤ 1","t ≤ 0"],a:2,exp:"Caractérisation vectorielle d'un segment"},
    {q:"M appartient à la demi-droite [AB) si et seulement si →AM = t→AB avec…",c:["t > 1 seulement","t ≤ 0","t ≥ 0","0 ≤ t ≤ 1"],a:2,exp:"Caractérisation vectorielle d'une demi-droite"},
    {q:"Les coordonnées de →u = 2→i − 3→j dans la base (→i, →j) sont…",c:["(−2 ; 3)","(−3 ; 2)","(2 ; 3)","(2 ; −3)"],a:3,exp:"→u = x→i + y→j : (x ; y)"},
    {q:"Si →AB(3 ; −1) et →AC(1 ; 4), alors →AB + →AC a pour coordonnées…",c:["(3 ; −4)","(4 ; −3)","(2 ; −5)","(4 ; 3)"],a:3,exp:"(3 + 1 ; −1 + 4)"},
  ],
  "2D — Droites du plan": [
    {q:"Une représentation paramétrique de la droite passant par A(x₀ ; y₀) de vecteur directeur →u(a ; b) est…",c:["x = x₀ + at ; y = y₀ + bt (t ∈ ℝ)","x = ax₀ ; y = by₀","x = x₀ + bt ; y = y₀ + at","x = a + x₀t ; y = b + y₀t"],a:0,exp:"Propriété démontrée en cours"},
    {q:"Pour la droite x = 1 + 2t ; y = −3 + t, un vecteur directeur est…",c:["(1 ; 2)","(−3 ; 1)","(1 ; −3)","(2 ; 1)"],a:3,exp:"Coefficients de t"},
    {q:"Pour x = 1 + 2t ; y = −3 + t, le point de paramètre t = 2 est…",c:["(4 ; −1)","(3 ; −1)","(5 ; −1)","(5 ; −2)"],a:2,exp:"x = 1 + 4 = 5 ; y = −3 + 2 = −1"},
    {q:"Une équation cartésienne d'une droite est de la forme…",c:["ax² + by = c","ax + by = 0 avec a = b = 0","y = ax² + b","ax + by + c = 0 avec (a ; b) ≠ (0 ; 0)"],a:3,exp:"Définition"},
    {q:"La droite d'équation ax + by + c = 0 admet pour vecteur directeur…",c:["→u(−b ; a)","→u(b ; a)","→u(a ; b)","→u(a ; −b)"],a:0,exp:"Propriété du guide"},
    {q:"Un vecteur normal à la droite 3x − 2y + 5 = 0 est…",c:["(−2 ; −3)","(3 ; 2)","(2 ; 3)","(3 ; −2)"],a:3,exp:"→n(a ; b) est normal à ax + by + c = 0"},
    {q:"La droite passant par A(1 ; 2) de vecteur normal →n(3 ; 4) a pour équation…",c:["3x + 4y + 11 = 0","4x + 3y − 10 = 0","x + 2y − 3 = 0","3x + 4y − 11 = 0"],a:3,exp:"3(x − 1) + 4(y − 2) = 0"},
    {q:"Deux droites de vecteurs normaux →n et →n' sont perpendiculaires si et seulement si…",c:["→n et →n' sont colinéaires","‖→n‖ = ‖→n'‖","→n = →n'","→n ⊥ →n'"],a:3,exp:"Propriété démontrée en cours"},
    {q:"La distance du point M₀(x₀ ; y₀) à la droite ax + by + c = 0 (repère orthonormé) est…",c:["(ax₀ + by₀ + c)/(a + b)","|ax₀ + by₀| / √(a² + b²)","|ax₀ + by₀ + c| / √(a² + b²)","|ax₀ + by₀ + c|"],a:2,exp:"Formule de la distance d'un point à une droite"},
    {q:"La distance de l'origine à la droite 3x + 4y − 10 = 0 est…",c:["10","2","5","2,5"],a:1,exp:"|−10|/√(9 + 16) = 10/5"},
    {q:"La distance du point (1 ; 1) à la droite x + y − 4 = 0 est…",c:["√2","2","2√2","1"],a:0,exp:"|1 + 1 − 4|/√2 = 2/√2 = √2"},
    {q:"Éliminer t dans x = 1 + 2t ; y = 3 − t donne…",c:["x + 2y − 7 = 0","x + 2y + 7 = 0","x − 2y + 5 = 0","2x + y − 5 = 0"],a:0,exp:"t = 3 − y donc x = 1 + 2(3 − y)"},
    {q:"L'intersection des droites 2x − y = 1 et x + y = 5 est…",c:["(2 ; 3)","(1 ; 4)","(4 ; 1)","(3 ; 2)"],a:0,exp:"On ajoute : 3x = 6 donc x = 2 et y = 3"},
    {q:"M appartient à la droite (D) de vecteur directeur →u passant par A si et seulement si…",c:["→AM ⊥ →u","AM = ‖→u‖","→AM et →u sont colinéaires","→AM = →u"],a:2,exp:"Propriété du guide"},
    {q:"Pour tout point A et tout vecteur non nul →n, il existe … droite passant par A de vecteur normal →n.",c:["aucune","deux","une infinité de","une et une seule"],a:3,exp:"Propriété démontrée en cours"},
  ],
  "2D — Homothétie & transformations": [
    {q:"L'homothétie de centre O et de rapport k (k ≠ 0) associe à M le point M' tel que…",c:["→OM' = →OM + k","→OM' = k→OM","OM' = OM + k","→MM' = k"],a:1,exp:"Définition"},
    {q:"L'homothétie de rapport 1 est…",c:["une translation","un quart de tour","l'identité du plan","la symétrie centrale"],a:2,exp:"h(O, 1) = identité"},
    {q:"L'homothétie de rapport −1 est…",c:["une translation","l'identité","la symétrie centrale de même centre","une symétrie orthogonale"],a:2,exp:"h(O, −1) = symétrie de centre O"},
    {q:"Le seul point invariant par une homothétie de rapport k ≠ 1 est…",c:["le milieu de [MM']","son centre","aucun point","tout point du plan"],a:1,exp:"Propriété admise"},
    {q:"Si M', N' sont les images de M, N par h(O, k), alors →M'N' = …",c:["→MN","k²→MN","k→MN","(1/k)→MN"],a:2,exp:"Propriété fondamentale de l'homothétie"},
    {q:"La réciproque de l'homothétie h(O, k) est…",c:["h(O, 1/k)","h(O, k²)","une translation","h(O, −k)"],a:0,exp:"M' = h(O, k)(M) équivaut à M = h(O, 1/k)(M')"},
    {q:"Une homothétie de rapport k multiplie les longueurs par…",c:["1/k","k³","|k|","k²"],a:2,exp:"Les longueurs sont multipliées par |k|"},
    {q:"Une homothétie de rapport k multiplie les aires par…",c:["k","2k","k²","|k|³"],a:2,exp:"Propriété admise"},
    {q:"L'image d'une droite par une homothétie est…",c:["une droite perpendiculaire","un cercle","un point","une droite parallèle à la première"],a:3,exp:"Propriété admise"},
    {q:"L'homothétie conserve…",c:["l'alignement, le milieu, le parallélisme, l'orthogonalité et les angles","toutes les distances","les aires","les longueurs"],a:0,exp:"Elle ne conserve pas les longueurs (sauf |k| = 1)"},
    {q:"Un point, son image par une homothétie et le centre de l'homothétie sont…",c:["les sommets d'un triangle équilatéral","alignés","cocycliques","toujours confondus"],a:1,exp:"→OM' = k→OM"},
    {q:"Si h(O, 3)(A) = A' avec OA = 2 cm, alors OA' = …",c:["18 cm","6 cm","5 cm","2/3 cm"],a:1,exp:"OA' = |k| × OA = 6"},
    {q:"La composée de deux symétries orthogonales d'axes perpendiculaires est…",c:["la symétrie centrale de centre leur point d'intersection","une translation","une homothétie de rapport 2","l'identité"],a:0,exp:"Propriété admise"},
    {q:"La composée de deux symétries orthogonales d'axes parallèles est…",c:["une rotation","une symétrie centrale","l'identité","une translation"],a:3,exp:"Propriété admise"},
    {q:"La composée de deux symétries centrales de centres distincts est…",c:["une symétrie centrale","l'identité","une translation","une homothétie"],a:2,exp:"Propriété admise"},
    {q:"La composée de deux translations de vecteurs →u et →v est la translation de vecteur…",c:["→u + →v","→u × →v","→u − →v","→0"],a:0,exp:"Propriété admise"},
    {q:"Si S_I[S_J(M)] = N, alors →MN = …",c:["2→JI","→IJ","→JI","2→IJ"],a:0,exp:"Propriété admise (I ≠ J)"},
  ],
  "2D — Angles, radian & trigonométrie": [
    {q:"L'aire d'un triangle ABC est S = …",c:["bc sin A","½ (b + c) sin A","½ bc cos A","½ bc sin A"],a:3,exp:"Propriété démontrée en cours"},
    {q:"Dans ABC, a/sin A = b/sin B = c/sin C = …",c:["2R","S","R/2","R"],a:0,exp:"R : rayon du cercle circonscrit"},
    {q:"Dans ABC, a = 6 et Â = 30°. Le rayon du cercle circonscrit est…",c:["12","3","6","6√3"],a:2,exp:"2R = 6/sin 30° = 12 donc R = 6"},
    {q:"Un radian est la mesure d'un angle au centre qui intercepte un arc de longueur…",c:["égale au rayon","égale à π","égale à 1 cm","égale au diamètre"],a:0,exp:"Définition du radian"},
    {q:"π radians correspondent à…",c:["57°","180°","90°","360°"],a:1,exp:"Conversion degrés-radians"},
    {q:"60° = … radians",c:["π/4","π/6","π/3","2π/3"],a:2,exp:"60 × π/180"},
    {q:"3π/4 radians = … degrés",c:["120°","45°","135°","150°"],a:2,exp:"3 × 180/4"},
    {q:"La longueur de l'arc de rayon R intercepté par un angle au centre de α radians est…",c:["R/α","Rα","α/R","R + α"],a:1,exp:"L = Rα"},
    {q:"Orienter le plan, c'est choisir un sens de parcours appelé sens…",c:["orthogonal","direct (ou positif)","alterné","rétrograde"],a:1,exp:"L'autre sens est dit négatif ou rétrograde"},
    {q:"La mesure principale d'un angle orienté appartient à…",c:["]−π/2 ; π/2[","[0 ; π]","[0 ; 2π[","]−π ; π]"],a:3,exp:"Définition du guide"},
    {q:"cos²α + sin²α = …",c:["1","2","0","cos 2α"],a:0,exp:"Relation fondamentale"},
    {q:"cos(−α) et sin(−α) valent…",c:["−cos α et sin α","cos α et sin α","−cos α et −sin α","cos α et −sin α"],a:3,exp:"Le cosinus est pair, le sinus est impair"},
    {q:"cos(π − α) = …",c:["−sin α","sin α","cos α","−cos α"],a:3,exp:"Angles associés"},
    {q:"sin(π − α) = …",c:["−cos α","sin α","cos α","−sin α"],a:1,exp:"Angles associés"},
    {q:"sin(π/6) = …",c:["√3/2","1","√2/2","1/2"],a:3,exp:"Angle remarquable"},
    {q:"cos(π/4) = …",c:["1","√2/2","√3/2","1/2"],a:1,exp:"Angle remarquable"},
    {q:"1 + tan²α = … (α ≠ π/2 et α ≠ −π/2)",c:["tan 2α","1/sin²α","cos²α","1/cos²α"],a:3,exp:"Propriété démontrée en cours"},
    {q:"Pour α ∈ ]−π ; 0[, le signe de sin α est…",c:["négatif","variable","nul","positif"],a:0,exp:"Sous l'axe des abscisses sur le cercle trigonométrique"},
    {q:"Deux angles orientés sont égaux si…",c:["ils sont adjacents","leurs mesures principales sont égales","leurs cosinus sont égaux","leurs sinus sont égaux"],a:1,exp:"Définition du guide"},
    {q:"mes(→u, →v) = …",c:["mes(→v, →u)","2 mes(→v, →u)","−mes(→v, →u)","π − mes(→v, →u)"],a:2,exp:"Propriété du guide"},
  ],
  "2D — Produit scalaire": [
    {q:"Si l'angle BAC est aigu, →AB ⋅ →AC est…",c:["nul","strictement négatif","égal à AB + AC","strictement positif"],a:3,exp:"Signe du produit scalaire"},
    {q:"Si l'angle BAC est obtus, →AB ⋅ →AC est…",c:["égal à AB × AC","nul","strictement positif","strictement négatif"],a:3,exp:"Signe du produit scalaire"},
    {q:"Si l'angle BAC est droit, →AB ⋅ →AC vaut…",c:["1","0","AB × AC","AB + AC"],a:1,exp:"Vecteurs orthogonaux"},
    {q:"L'expression trigonométrique du produit scalaire est →AB ⋅ →AC = …",c:["AB + AC","AB × AC × sin(→AB, →AC)","AB × AC","AB × AC × cos(→AB, →AC)"],a:3,exp:"Propriété démontrée en cours"},
    {q:"Pour tous vecteurs →u et →v, →u ⋅ →v = …",c:["→v ⋅ →u","‖→u‖ + ‖→v‖","0","−→v ⋅ →u"],a:0,exp:"Le produit scalaire est symétrique"},
    {q:"(→u + →v)² = …",c:["2 →u ⋅ →v","→u² − 2 →u ⋅ →v + →v²","→u² + 2 →u ⋅ →v + →v²","→u² + →v²"],a:2,exp:"Propriété démontrée en cours"},
    {q:"→u² − →v² = …",c:["(→u + →v)²","→u ⋅ →v","(→u − →v)²","(→u − →v) ⋅ (→u + →v)"],a:3,exp:"Propriété démontrée en cours"},
    {q:"Dans une base orthonormée, →u(x ; y) ⋅ →v(x' ; y') = …",c:["xy' − x'y","xx' + yy'","xy + x'y'","xy' + x'y"],a:1,exp:"Expression analytique du produit scalaire"},
    {q:"La norme du vecteur →u(3 ; 4) dans une base orthonormée est…",c:["√7","5","7","25"],a:1,exp:"√(9 + 16) = 5"},
    {q:"Un vecteur unitaire est un vecteur de norme…",c:["0","−1","2","1"],a:3,exp:"Définition"},
    {q:"Les vecteurs →u(2 ; 3) et →v(3 ; −2) sont…",c:["orthogonaux","opposés","colinéaires","égaux"],a:0,exp:"→u ⋅ →v = 6 − 6 = 0"},
    {q:"Le carré scalaire →u² est égal à…",c:["‖→u‖²","‖→u‖","2‖→u‖","0"],a:0,exp:"→u ⋅ →u = ‖→u‖²"},
    {q:"Le vecteur nul est orthogonal à…",c:["les vecteurs unitaires","aucun vecteur","lui-même seulement","tout vecteur du plan"],a:3,exp:"Convention du guide"},
    {q:"Une base orthonormée est formée de deux vecteurs…",c:["colinéaires et unitaires","de même direction","orthogonaux et unitaires","de normes quelconques"],a:2,exp:"Définition"},
    {q:"Théorème de la médiane (A' milieu de [BC]) : AB² + AC² = …",c:["2AA'² + BC²","AA'² + BC²/2","AA'² + BC²","2AA'² + BC²/2"],a:3,exp:"Théorème démontré en cours"},
    {q:"Théorème d'Al-Kashi : a² = …",c:["b² + c² − 2bc sin A","b² − c² − 2bc cos A","b² + c² − 2bc cos A","b² + c² + 2bc cos A"],a:2,exp:"Théorème démontré en cours"},
    {q:"Dans ABC, AB = 3, AC = 4 et Â = 60°. Alors BC² = …",c:["25","37","13","7"],a:2,exp:"9 + 16 − 2×3×4×½ = 13"},
    {q:"Le produit scalaire →AB ⋅ →AC par projection orthogonale est égal à…",c:["AB × CH","AB × AH en mesure algébrique (H projeté orthogonal de C sur (AB))","AB × BC","AC × BH"],a:1,exp:"Définition du produit scalaire par projection"},
  ],
  "2D — Rotation & cercles": [
    {q:"Si θ ≠ 0, le seul point invariant par la rotation r(O, θ) est…",c:["aucun point","le milieu de [OM]","tout point du plan","le point O"],a:3,exp:"Propriété du guide"},
    {q:"La rotation r(O, θ) associe à M ≠ O le point M' tel que…",c:["OM' = OM + θ","OM' = θ × OM","mes(→OM, →OM') = OM","OM' = OM et mes(→OM, →OM') = θ"],a:3,exp:"Définition de la rotation"},
    {q:"La rotation d'angle π est…",c:["l'identité","une translation","la symétrie centrale (demi-tour)","un quart de tour direct"],a:2,exp:"Cas particulier"},
    {q:"Un quart de tour direct est une rotation d'angle…",c:["π","−π/2","π/4","π/2"],a:3,exp:"Cas particulier"},
    {q:"La rotation conserve…",c:["aucune distance","les distances, les aires, les angles orientés et l'alignement","seulement l'alignement","les longueurs multipliées par θ"],a:1,exp:"Propriétés admises"},
    {q:"L'image d'un cercle par une rotation est…",c:["un cercle de même rayon dont le centre est l'image du centre","une ellipse","un cercle de rayon double","une droite"],a:0,exp:"Propriété admise"},
    {q:"Si A', B' sont les images de A, B par r(O, θ), alors…",c:["(A'B') ∥ (AB)","A'B' = AB et mes(→AB, →A'B') = θ","A'B' = 2AB","A'B' = AB + θ"],a:1,exp:"Propriété du guide"},
    {q:"La composée de deux symétries orthogonales d'axes sécants en O est…",c:["une homothétie","une translation","une rotation de centre O","l'identité"],a:2,exp:"Propriété énoncée en cours"},
    {q:"Le cercle de centre I(a ; b) et de rayon R a pour équation (repère orthonormé)…",c:["(x + a)² + (y + b)² = R²","(x − a)² + (y − b)² = R²","(x − a)² + (y − b)² = R","x² + y² = R²"],a:1,exp:"IM² = R²"},
    {q:"Le cercle x² + y² − 4x + 6y − 12 = 0 a pour centre et rayon…",c:["centre (2 ; −3), rayon 5","centre (−2 ; 3), rayon 5","centre (2 ; −3), rayon 25","centre (4 ; −6), rayon 5"],a:0,exp:"(x − 2)² + (y + 3)² = 25"},
    {q:"L'ensemble x² + y² − 2ax − 2by + c = 0 est vide lorsque…",c:["a² + b² − c = 0","c = 0","a² + b² − c < 0","a² + b² − c > 0"],a:2,exp:"(x − a)² + (y − b)² = a² + b² − c"},
    {q:"L'ensemble x² + y² − 2ax − 2by + c = 0 est un singleton lorsque…",c:["a² + b² − c > 0","a² + b² − c = 0","c = 0","a² + b² − c < 0"],a:1,exp:"Le rayon est nul : c'est le point (a ; b)"},
    {q:"Le cercle de diamètre [AB] avec A(1 ; 2), B(5 ; 6) a pour équation…",c:["(x − 3)² + (y − 4)² = 8","(x − 3)² + (y − 4)² = 32","(x − 1)² + (y − 2)² = 8","(x − 5)² + (y − 6)² = 8"],a:0,exp:"Centre (3 ; 4), R = AB/2 = 2√2 donc R² = 8"},
    {q:"Un cercle de centre I et de rayon R, une droite (D) à la distance d de I. Si d < R…",c:["(D) passe par I","(D) est tangente à (C)","(D) et (C) se coupent en deux points","(D) et (C) n'ont aucun point commun"],a:2,exp:"Propriété du guide"},
    {q:"Si d = R, alors…",c:["(D) et (C) se coupent en deux points","(D) et (C) n'ont aucun point commun","(D) et (C) ont un point commun et un seul","(D) passe par I"],a:2,exp:"La droite est tangente au cercle"},
    {q:"Si d > R, alors…",c:["(D) et (C) n'ont aucun point commun","(D) coupe (C) en deux points","(D) et (C) ont un point commun","(D) est un diamètre"],a:0,exp:"La droite est extérieure au cercle"},
  ],
  "2D — Systèmes & inéquations dans ℝ×ℝ": [
    {q:"Le système ax + by = c ; a'x + b'y = c' a une solution unique si…",c:["ab' − a'b ≠ 0","ab' − a'b = 0","c = c'","ab + a'b' ≠ 0"],a:0,exp:"Le déterminant du système est non nul"},
    {q:"Résoudre 2x + y = 5 ; x − y = 1.",c:["(2 ; 1)","(3 ; −1)","(1 ; 2)","(2 ; −1)"],a:0,exp:"On ajoute : 3x = 6 donc x = 2 et y = 1"},
    {q:"Le système x + 2y = 4 ; 2x + 4y = 8 admet…",c:["une seule solution","une infinité de solutions","aucune solution","deux solutions"],a:1,exp:"Les deux équations représentent la même droite"},
    {q:"Le système x + 2y = 4 ; 2x + 4y = 9 admet…",c:["aucune solution","deux solutions","une seule solution","une infinité de solutions"],a:0,exp:"Droites parallèles distinctes"},
    {q:"Résoudre 1/x + 1/y = 5 ; 1/x − 1/y = 1 (changement d'inconnues).",c:["(1/2 ; 1/3)","(2 ; 3)","(1/3 ; 1/2)","(3 ; 2)"],a:2,exp:"X = 1/x, Y = 1/y : X = 3, Y = 2"},
    {q:"L'ensemble des points vérifiant x + y − 2 ≥ 0 est…",c:["un segment","un cercle","un demi-plan fermé limité par la droite x + y − 2 = 0","une droite"],a:2,exp:"Inéquation du premier degré à deux inconnues"},
    {q:"Pour choisir le demi-plan d'une inéquation ax + by + c ≥ 0, on teste…",c:["aucun point","un point n'appartenant pas à la droite, par exemple l'origine","le milieu de la droite","le centre du repère uniquement"],a:1,exp:"Méthode graphique"},
    {q:"Le régionnement du plan désigne…",c:["une transformation","le découpage du plan en régions par des droites","un cercle","un polygone régulier"],a:1,exp:"Vocabulaire du guide"},
    {q:"En programmation linéaire, on optimise…",c:["la distance à l'origine uniquement","une suite","une fonction du second degré","une fonction linéaire de deux variables sous des contraintes d'inéquations"],a:3,exp:"Problème de programmation linéaire"},
    {q:"L'optimum d'une fonction linéaire sur un polygone convexe est atteint en…",c:["aucun point","le centre du polygone","un sommet du polygone","un point quelconque intérieur"],a:2,exp:"Résolution graphique de la programmation linéaire"},
  ],
  "2D — Prop. & Déf.": [
    {q:"Définition : |x| = d(x, 0) vaut…",c:["x²","−x","1/x","x si x ≥ 0 ; −x si x < 0"],a:3,exp:"Valeur absolue"},
    {q:"Définition : la partie entière E(x) est…",c:["la partie avant la virgule seulement","le plus petit entier supérieur à x","l'arrondi de x","le plus grand entier relatif inférieur ou égal à x"],a:3,exp:"E(−2,3) = −3"},
    {q:"Définition : le maximum d'une partie A de ℝ est…",c:["un majorant de A qui appartient à A","le milieu de A","un minorant de A","un majorant hors de A"],a:0,exp:"Plus grand élément de A"},
    {q:"Définition : f est injective si…",c:["f est croissante","f(a) = f(b) ⟹ a = b","tout élément de F a un antécédent","f(a) = a"],a:1,exp:"Injection"},
    {q:"Définition : f est surjective de E vers F si…",c:["tout élément de F a au moins un antécédent","E = F","f(a) = f(b) ⟹ a = b","f est constante"],a:0,exp:"Surjection"},
    {q:"Définition : la bijection réciproque associe à tout y de F…",c:["le double de y","l'image de y","0","l'unique antécédent de y dans E"],a:3,exp:"Réciproque d'une bijection"},
    {q:"Propriété : si a ∈ ]0 ; 1[, alors…",c:["a³ < a² < a < √a < 1/a","a < a² < a³","a² < a³ < a","1/a < √a < a < a² < a³"],a:0,exp:"Comparaison des nombres de référence"},
    {q:"Propriété : si a est un zéro de P (degré n ≥ 1), alors…",c:["P(x) = (x − a) Q(x), Q de degré n − 1","P(a) = 1","P(x) = x − a","P(x) = a Q(x)"],a:0,exp:"Factorisation par (x − a)"},
    {q:"Définition : une fraction rationnelle est…",c:["un polynôme de degré 1","le produit de deux polynômes","le quotient de deux polynômes","une somme de racines"],a:2,exp:"Fraction rationnelle"},
    {q:"Définition : la médiane d'une série ordonnée est…",c:["la valeur d'effectif maximal","la valeur qui partage la série en deux groupes de même effectif","la différence max − min","la moyenne des valeurs"],a:1,exp:"Médiane"},
    {q:"Définition : la variance est…",c:["l'étendue","la moyenne des écarts à la moyenne","la racine de la moyenne","la moyenne des carrés des écarts à la moyenne"],a:3,exp:"Variance"},
    {q:"Définition : deux droites de l'espace sont coplanaires si…",c:["elles se coupent","elles sont contenues dans un même plan","elles sont perpendiculaires","elles sont parallèles"],a:1,exp:"Droites coplanaires"},
    {q:"Propriété : trois points non alignés définissent…",c:["une droite","un plan et un seul","aucun plan","une infinité de plans"],a:1,exp:"Caractérisation d'un plan"},
    {q:"Propriété : deux plans parallèles à un même troisième sont…",c:["sécants","parallèles entre eux","confondus obligatoirement","perpendiculaires"],a:1,exp:"Parallélisme de plans"},
    {q:"Propriété : (D) est parallèle à (P) si et seulement si (D) est parallèle à…",c:["une droite de (P)","une droite quelconque","un point de (P)","un plan quelconque"],a:0,exp:"Parallélisme droite-plan"},
    {q:"Définition : une base du plan vectoriel est…",c:["un couple de vecteurs non colinéaires","trois vecteurs","un vecteur non nul","deux vecteurs colinéaires"],a:0,exp:"Base"},
    {q:"Propriété : →u et →v sont colinéaires si et seulement si…",c:["→u + →v = →0","→u ⋅ →v = 0","il existe un réel λ tel que →u = λ→v ou →v = λ→u","‖→u‖ = ‖→v‖"],a:2,exp:"Colinéarité"},
    {q:"Définition : le déterminant de →u(x ; y) et →v(x' ; y') est…",c:["xy' − x'y","xx' − yy'","xy + x'y'","xx' + yy'"],a:0,exp:"Déterminant"},
    {q:"Définition : un vecteur normal à une droite est…",c:["le vecteur nul","un vecteur colinéaire à la droite","un vecteur unitaire","un vecteur non nul orthogonal à un vecteur directeur de la droite"],a:3,exp:"Vecteur normal"},
    {q:"Propriété : d(M₀, (D)) = …",c:["√(a² + b²)","|ax₀ + by₀ + c|","(ax₀ + by₀ + c)/(a + b)","|ax₀ + by₀ + c| / √(a² + b²)"],a:3,exp:"Distance point-droite"},
    {q:"Définition : l'homothétie h(O, k) associe à M le point M' tel que…",c:["→MM' = k→OM","→OM' = →OM + k","OM' = k","→OM' = k→OM"],a:3,exp:"Homothétie"},
    {q:"Propriété fondamentale : →M'N' = …",c:["→NM","k²→MN","→MN","k→MN"],a:3,exp:"Homothétie de rapport k"},
    {q:"Propriété : l'aire d'un triangle est S = …",c:["bc sin A","½ bc cos A","½ bc sin A","½ (b + c)"],a:2,exp:"Aire d'un triangle"},
    {q:"Définition : le radian est la mesure d'un angle au centre qui intercepte un arc de longueur…",c:["égale au diamètre","égale au rayon","égale à π","égale à 1"],a:1,exp:"Radian"},
    {q:"Définition : le cercle trigonométrique est…",c:["le cercle de rayon 1 orienté dans le sens direct","un cercle de diamètre 1 non orienté","un cercle de rayon π","tout cercle passant par O"],a:0,exp:"Cercle trigonométrique"},
    {q:"Définition : deux vecteurs sont orthogonaux lorsque…",c:["ils sont colinéaires","leur déterminant est nul","ils ont même norme","leur produit scalaire est nul"],a:3,exp:"Orthogonalité"},
    {q:"Définition : la rotation r(O, θ) est l'application qui…",c:["associe à M le point M' tel que →OM' = θ→OM","laisse O invariant et associe à M ≠ O le point M' tel que OM' = OM et mes(→OM, →OM') = θ","déplace tous les points d'un même vecteur","associe à M son symétrique par rapport à O uniquement"],a:1,exp:"Rotation"},
    {q:"Propriété : le cercle de centre I(a ; b) et de rayon R a pour équation…",c:["x² + y² = R","(x + a)² + (y + b)² = R²","(x − a)² + (y − b)² = R²","(x − a) + (y − b) = R"],a:2,exp:"Équation d'un cercle"},
    {q:"Propriété : la composée de deux translations de vecteurs →u et →v est…",c:["une rotation","une homothétie","la translation de vecteur →u − →v","la translation de vecteur →u + →v"],a:3,exp:"Composée de translations"},
  ],
});

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
