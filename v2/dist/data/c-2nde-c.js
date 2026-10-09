/* Données de la classe 2nde C : questions + résumés de cours (généré par build.mjs) */
/* Questions de la classe de 2nde C (2nd cycle) — un thème = une liste de questions. */
Object.assign(THEMES_C2, {
  "2C — Espace : positions relatives": [
    {q:"Une droite (D) et un plan (P) sont parallèles lorsque…",c:["(D) ∩ (P) = (D) ou (D) ∩ (P) = ∅","(D) est perpendiculaire à (P)","(D) et (P) ont exactement deux points communs","(D) ∩ (P) est un point"],a:0,exp:"Parallèles : (D) est contenue dans (P) ou disjointe de (P)"},
    {q:"Si (D) ∩ (P) = {I}, on dit que (D) et (P) sont…",c:["disjoints","sécants en I","confondus","parallèles"],a:1,exp:"Un seul point commun : la droite et le plan sont sécants"},
    {q:"Deux plans (P) et (Q) de l'espace sont…",c:["toujours parallèles","toujours sécants","sécants en un seul point","soit confondus, soit sécants suivant une droite, soit disjoints"],a:3,exp:"Trois positions relatives possibles pour deux plans"},
    {q:"Deux plans confondus ou disjoints sont dits…",c:["sécants","coplanaires","orthogonaux","parallèles"],a:3,exp:"Définition : plans confondus ou disjoints = plans parallèles"},
    {q:"L'intersection de deux plans sécants est…",c:["un point","une droite","un plan","l'ensemble vide"],a:1,exp:"Deux plans non parallèles se coupent suivant une droite"},
    {q:"Deux droites de l'espace sont coplanaires si et seulement si…",c:["elles sont sécantes","elles sont contenues dans un même plan","elles sont parallèles","elles n'ont aucun point commun"],a:1,exp:"Coplanaires : dans un même plan, donc sécantes ou parallèles"},
    {q:"Deux droites non coplanaires…",c:["n'ont aucun point commun et ne sont pas parallèles","sont parallèles","se coupent en un point","sont confondues"],a:0,exp:"Deux droites non coplanaires ne se coupent jamais et ne sont pas parallèles"},
    {q:"Trois points de l'espace définissent un plan et un seul lorsqu'ils sont…",c:["alignés","non alignés","distincts seulement","confondus"],a:1,exp:"Trois points non alignés définissent un plan et un seul"},
    {q:"Lequel de ces éléments ne suffit pas à définir un plan ?",c:["Deux points distincts","Trois points non alignés","Deux droites sécantes","Deux droites strictement parallèles"],a:0,exp:"Deux points définissent seulement une droite"},
    {q:"Une droite et un point n'appartenant pas à cette droite définissent…",c:["un plan et un seul","aucun plan","une infinité de plans","une droite"],a:0,exp:"Caractérisation d'un plan par une droite et un point extérieur"},
    {q:"Deux droites sécantes définissent…",c:["un plan et un seul","aucun plan","une infinité de plans","deux plans"],a:0,exp:"Deux droites sécantes sont coplanaires : elles définissent un seul plan"},
    {q:"Dans un cube ABCDEFGH (E au-dessus de A, F au-dessus de B, G au-dessus de C), les droites (AB) et (FG) sont…",c:["parallèles","sécantes","confondues","non coplanaires"],a:3,exp:"(AB) et (FG) ne se coupent pas et ne sont pas parallèles : non coplanaires"},
    {q:"En perspective cavalière, deux droites parallèles de l'espace sont représentées par…",c:["des droites perpendiculaires","des droites sécantes","des droites parallèles","des cercles"],a:2,exp:"Le parallélisme est conservé en perspective cavalière"},
    {q:"En perspective cavalière, une face située dans le plan frontal est représentée…",c:["par un segment","réduite de moitié","en vraie grandeur","par un point"],a:2,exp:"Le plan frontal est représenté sans déformation"},
  ],
  "2C — Espace : parallélisme": [
    {q:"Par un point donné de l'espace, on peut tracer combien de droites parallèles à une droite donnée ?",c:["Une et une seule","Deux","Une infinité","Aucune"],a:0,exp:"Propriété admise : existence et unicité de la parallèle"},
    {q:"Deux droites parallèles à une même troisième sont…",c:["orthogonales","parallèles entre elles","sécantes","non coplanaires"],a:1,exp:"Transitivité du parallélisme (propriété admise)"},
    {q:"Lorsque deux droites de l'espace sont parallèles, tout plan qui coupe l'une…",c:["est parallèle à l'autre","coupe l'autre","contient l'autre","est perpendiculaire à l'autre"],a:1,exp:"Propriété démontrée par l'absurde"},
    {q:"Cette dernière propriété se démontre par…",c:["un raisonnement par l'absurde","un tableau de variations","une construction au compas","un calcul de moyenne"],a:0,exp:"On suppose que le plan ne coupe pas l'autre droite et on aboutit à une contradiction"},
    {q:"Une droite est parallèle à un plan si et seulement si elle est parallèle à…",c:["un point de ce plan","n'importe quelle droite de l'espace","un plan perpendiculaire","une droite de ce plan"],a:3,exp:"Critère de parallélisme droite-plan"},
    {q:"Si une droite (D) est parallèle à un plan (P), toute droite parallèle à (D) est…",c:["parallèle à (P)","perpendiculaire à (P)","contenue dans (P)","sécante à (P)"],a:0,exp:"Propriété démontrée en cours"},
    {q:"Une droite parallèle à deux plans sécants est parallèle à…",c:["aucune droite particulière","l'un des plans seulement","leur droite d'intersection","leur plan bissecteur"],a:2,exp:"Propriété du guide"},
    {q:"Deux plans sont parallèles si et seulement si l'un d'eux contient deux droites…",c:["confondues","non coplanaires","sécantes parallèles à l'autre plan","parallèles entre elles"],a:2,exp:"Critère de parallélisme de deux plans"},
    {q:"Deux plans parallèles à un même troisième plan sont…",c:["parallèles entre eux","perpendiculaires","sécants","toujours disjoints du troisième"],a:0,exp:"Transitivité du parallélisme de plans"},
    {q:"Par un point donné de l'espace, combien de plans parallèles à un plan donné ?",c:["Deux","Une infinité","Un et un seul","Aucun"],a:2,exp:"Propriété admise"},
    {q:"Deux plans parallèles sont coupés par un troisième plan. Les droites d'intersection sont…",c:["parallèles","sécantes","perpendiculaires","confondues"],a:0,exp:"Propriété : les droites d'intersection sont parallèles"},
    {q:"Lorsque deux plans sont parallèles, toute droite qui coupe l'un…",c:["coupe l'autre","est parallèle à leur intersection","est contenue dans l'autre","est parallèle à l'autre"],a:0,exp:"Propriété admise"},
    {q:"Lorsque deux plans sont parallèles, toute droite parallèle à l'un est…",c:["perpendiculaire aux deux","orthogonale à l'autre","sécante à l'autre","parallèle à l'autre"],a:3,exp:"Propriété admise"},
  ],
  "2C — Logique & raisonnement": [
    {q:"Une proposition mathématique est…",c:["un calcul","un énoncé qui est vrai ou faux","une question","une figure"],a:1,exp:"Une proposition est soit vraie, soit fausse"},
    {q:"L'implication réciproque de (P ⟹ Q) est…",c:["Q ⟹ P","P ⟹ non Q","non P ⟹ non Q","non Q ⟹ non P"],a:0,exp:"La réciproque échange l'hypothèse et la conclusion"},
    {q:"La contraposée de (P ⟹ Q) est…",c:["P et Q","non Q ⟹ non P","Q ⟹ P","non P ⟹ non Q"],a:1,exp:"Contraposée : non Q ⟹ non P"},
    {q:"Une implication et sa contraposée sont…",c:["équivalentes seulement si P est fausse","toujours contraires","toujours équivalentes","indépendantes"],a:2,exp:"Elles sont vraies ou fausses en même temps"},
    {q:"(P ⟺ Q) signifie…",c:["Q ⟹ P seulement","P ⟹ Q seulement","P ⟹ Q et Q ⟹ P","P ou Q"],a:2,exp:"Équivalence logique = implication dans les deux sens"},
    {q:"La proposition « P ou Q » est vraie lorsque…",c:["les deux sont fausses","exactement une est vraie","les deux sont vraies uniquement","au moins une des deux propositions est vraie"],a:3,exp:"Le « ou » mathématique est inclusif"},
    {q:"La proposition « P et Q » est vraie lorsque…",c:["au moins une est vraie","les deux propositions sont vraies","P est fausse","les deux sont fausses"],a:1,exp:"« et » exige que les deux soient vraies"},
    {q:"Pour démontrer P par l'absurde, on suppose…",c:["P ⟹ Q","non P et on cherche une contradiction","P vraie et on la vérifie","P et non P"],a:1,exp:"Raisonnement par l'absurde"},
    {q:"La négation de « x > 3 » est…",c:["x ≥ 3","x < 3","x = 3","x ≤ 3"],a:3,exp:"Le contraire de x > 3 est x ≤ 3"},
    {q:"Pour montrer qu'une implication est fausse, il suffit d'un…",c:["dessin","calcul de moyenne","contre-exemple","exemple qui la vérifie"],a:2,exp:"Un seul contre-exemple suffit"},
    {q:"Réciproque de « Si un quadrilatère est un carré alors c'est un losange »…",c:["Si c'est un losange alors c'est un carré : proposition vraie","Si ce n'est pas un carré alors ce n'est pas un losange : vraie","Si c'est un losange alors c'est un carré : proposition fausse","Un carré est un losange : vraie"],a:2,exp:"Un losange n'est pas toujours un carré"},
  ],
  "2C — Calculs dans ℝ": [
    {q:"Les symboles −∞ et +∞ sont…",c:["des nombres réels","des nombres rationnels","des nombres entiers","des symboles qui ne sont pas des nombres réels"],a:3,exp:"Ce ne sont pas des nombres réels"},
    {q:"L'intervalle [2 ; +∞[ est l'ensemble des réels x tels que…",c:["x ≥ 2","x ≤ 2","x > 2","x < 2"],a:0,exp:"Crochet fermé en 2 : 2 est inclus"},
    {q:"Un majorant d'une partie A non vide de ℝ est un réel M tel que…",c:["M appartient à A","M ≤ x pour tout x de A","M ≥ x pour tout x de A","M = x pour un x de A"],a:2,exp:"Définition d'un majorant"},
    {q:"Un minorant d'une partie A non vide de ℝ est un réel m tel que…",c:["m ≤ x pour tout x de A","m est un élément de A","m ≥ x pour tout x de A","m = 0"],a:0,exp:"Définition d'un minorant"},
    {q:"Le maximum d'une partie A de ℝ est…",c:["toujours 0","un minorant de A","un majorant de A qui appartient à A","un majorant qui n'appartient pas à A"],a:2,exp:"Le maximum est le plus grand élément de A"},
    {q:"L'intervalle ]0 ; 1[ admet-il un maximum ?",c:["Oui, 0","Oui, 1","Non : 1 est un majorant mais 1 n'appartient pas à ]0 ; 1[","Oui, 0,999"],a:2,exp:"Aucun plus grand élément : pas de maximum"},
    {q:"Le minimum de [−2 ; 5] est…",c:["5","il n'existe pas","−2","0"],a:2,exp:"−2 appartient à l'intervalle et minore tous ses éléments"},
    {q:"La partie entière de −2,3 est…",c:["2","−2,3","−2","−3"],a:3,exp:"E(x) est le plus grand entier relatif ≤ x : E(−2,3) = −3"},
    {q:"La partie entière de 4,99 est…",c:["4","5","4,9","0"],a:0,exp:"Le plus grand entier ≤ 4,99 est 4"},
    {q:"La notation scientifique de 45 000 est…",c:["4,5 × 10⁴","0,45 × 10⁵","4,5 × 10³","45 × 10³"],a:0,exp:"A = a × 10ᵖ avec 1 ≤ a < 10"},
    {q:"L'approximation décimale par défaut d'ordre 2 de 2,3678 est…",c:["2,37","2,36","2,4","2,368"],a:1,exp:"Par défaut : on tronque à deux décimales"},
    {q:"L'arrondi d'ordre 2 de 3,14159 est…",c:["3,142","3,15","3,14","3,1"],a:2,exp:"Troisième décimale 1 < 5 : on garde 3,14"},
    {q:"Si 2 ≤ a ≤ 3 et 1 ≤ b ≤ 4, alors…",c:["1 ≤ a + b ≤ 7","3 ≤ a + b ≤ 12","3 ≤ a + b ≤ 7","2 ≤ a + b ≤ 12"],a:2,exp:"On additionne membre à membre les bornes"},
    {q:"Si 2 ≤ a ≤ 3 et 1 ≤ b ≤ 4, alors un encadrement de a − b est…",c:["1 ≤ a − b ≤ −1","1 ≤ a − b ≤ 2","−2 ≤ a − b ≤ 1","−2 ≤ a − b ≤ 2"],a:3,exp:"a − b est minimal pour 2 − 4 = −2 et maximal pour 3 − 1 = 2"},
  ],
  "2C — Valeur absolue & distance": [
    {q:"Pour tout réel x, |x| est égal à…",c:["x si x ≤ 0 ; −x si x > 0","−x toujours","x si x ≥ 0 ; −x si x < 0","x²"],a:2,exp:"Définition de la valeur absolue"},
    {q:"|x| est égale à…",c:["−x","d(x , 1)","x²","d(x , 0)"],a:3,exp:"|x| est la distance de x à 0"},
    {q:"|x| est aussi égale à…",c:["x²","le plus petit des deux nombres x et −x","x + (−x)","le plus grand des deux nombres x et −x"],a:3,exp:"|x| = Sup(x, −x)"},
    {q:"|−5| + |3| = …",c:["8","−8","−2","2"],a:0,exp:"5 + 3 = 8"},
    {q:"|3 − π| = …",c:["3 − π","3 + π","π − 3","0"],a:2,exp:"π > 3 donc 3 − π < 0 et |3 − π| = π − 3"},
    {q:"Pour tous réels a et b, |ab| = …",c:["ab","|a| × |b|","|a| + |b|","|a| − |b|"],a:1,exp:"La valeur absolue d'un produit est le produit des valeurs absolues"},
    {q:"|x| = 0 équivaut à…",c:["x = 1","x = 0","x > 0","x < 0"],a:1,exp:"Seul 0 est à distance 0 de 0"},
    {q:"L'inégalité triangulaire s'écrit…",c:["|a + b| = |a| + |b|","|a + b| ≥ |a| + |b|","|a + b| ≤ |a| + |b|","|a + b| < |a| − |b|"],a:2,exp:"Propriété de la valeur absolue"},
    {q:"|x − 2| ≤ 3 équivaut à…",c:["x ∈ [1 ; 5]","x ∈ [−1 ; 5]","x ∈ [−5 ; 1]","x ∈ ]−∞ ; −1] ∪ [5 ; +∞["],a:1,exp:"−3 ≤ x − 2 ≤ 3 donc −1 ≤ x ≤ 5"},
    {q:"|x − 2| ≥ 3 équivaut à…",c:["x ∈ ]−∞ ; −1] ∪ [5 ; +∞[","x ∈ ]−1 ; 5[","x ∈ [−1 ; 5]","x ∈ [1 ; 5]"],a:0,exp:"x − 2 ≤ −3 ou x − 2 ≥ 3"},
    {q:"d(x , a) < r équivaut à…",c:["x > a + r","x ∈ ]a − r ; a + r[","x ∈ ]−∞ ; a − r[ ∪ ]a + r ; +∞[","x ∈ [a − r ; a + r]"],a:1,exp:"x est à moins de r de a"},
    {q:"L'intervalle [1 ; 7] se caractérise par…",c:["|x − 4| ≤ 3","|x − 1| ≤ 7","|x − 4| ≤ 6","|x − 3| ≤ 4"],a:0,exp:"Centre 4, rayon 3"},
    {q:"|a| = |b| équivaut à…",c:["a² = −b²","a = b","a = b ou a = −b","a = −b"],a:2,exp:"Deux réels ont même valeur absolue s'ils sont égaux ou opposés"},
    {q:"« x₀ est une valeur approchée de x à 0,01 près » signifie…",c:["x = x₀ + 0,01","|x| ≤ 0,01","|x − x₀| ≤ 0,01","x₀ = 0,01 x"],a:2,exp:"L'incertitude est la distance entre x et x₀"},
  ],
  "2C — Généralités sur les fonctions": [
    {q:"Une fonction numérique f définie sur D associe à chaque x de D…",c:["aucun réel","un unique réel noté f(x)","un vecteur","deux réels"],a:1,exp:"Définition d'une fonction numérique"},
    {q:"L'ensemble de définition de f(x) = 1/(x − 3) est…",c:["]3 ; +∞[","ℝ ∖ {−3}","ℝ","ℝ ∖ {3}"],a:3,exp:"Le dénominateur ne doit pas s'annuler"},
    {q:"L'ensemble de définition de f(x) = √(x − 2) est…",c:["]−∞ ; 2]","]2 ; +∞[","ℝ","[2 ; +∞["],a:3,exp:"Il faut x − 2 ≥ 0"},
    {q:"L'ensemble de définition de f(x) = (x + 1)/(x² − 4) est…",c:["ℝ","ℝ ∖ {2}","ℝ ∖ {−1}","ℝ ∖ {−2 ; 2}"],a:3,exp:"x² − 4 = 0 pour x = 2 ou x = −2"},
    {q:"Les antécédents de 4 par f(x) = x² sont…",c:["−2 et 2","−2 seulement","16","2 seulement"],a:0,exp:"x² = 4 ⟺ x = 2 ou x = −2"},
    {q:"Deux fonctions f et g sont égales lorsque…",c:["elles ont le même ensemble de définition et f(x) = g(x) pour tout x de cet ensemble","elles ont la même représentation en un point","f(x) = g(x) pour un seul x","elles ont le même ensemble de définition seulement"],a:0,exp:"Égalité de deux fonctions"},
    {q:"f et g coïncident sur un ensemble I lorsque…",c:["f et g ont le même ensemble de définition","f et g sont définies sur I et f(x) = g(x) pour tout x de I","f(x) ≠ g(x) sur I","f = g sur ℝ"],a:1,exp:"Définition de la coïncidence sur un sous-ensemble"},
    {q:"f(x) = (x² − 1)/(x − 1) et g(x) = x + 1 coïncident sur…",c:["ℝ ∖ {1}","ℝ","{1}","ℝ ∖ {−1}"],a:0,exp:"Pour x ≠ 1 : (x² − 1)/(x − 1) = x + 1"},
    {q:"f est strictement croissante sur I signifie que pour tous a < b de I…",c:["f(a) = f(b)","f(a) ≤ f(b)","f(a) > f(b)","f(a) < f(b)"],a:3,exp:"Définition de la stricte croissance"},
    {q:"f est décroissante sur I signifie que pour tous a < b de I…",c:["f(a) ≥ f(b)","f(a) < f(b)","f(a) ≤ f(b)","f(a) = f(b)"],a:0,exp:"Définition d'une fonction décroissante"},
    {q:"f est constante sur I signifie que…",c:["f n'est pas définie sur I","f(x) = 0 sur I","f est croissante seulement","f(a) = f(b) pour tous a, b de I"],a:3,exp:"Toutes les images sont égales"},
    {q:"Étudier le sens de variation de f sur I, c'est déterminer…",c:["les plus grands intervalles de I où f est strictement monotone ou constante","la moyenne de f","f(0)","les zéros de f uniquement"],a:0,exp:"Définition donnée dans le guide"},
    {q:"f admet un maximum M atteint en a sur I si…",c:["f(x) ≥ f(a) pour tout x de I","f(a) = 0","f est croissante sur I","f(x) ≤ f(a) = M pour tout x de I"],a:3,exp:"Définition du maximum d'une fonction"},
    {q:"Un tableau de variations récapitule…",c:["les racines uniquement","la moyenne de f","les antécédents de 0","l'ensemble de définition, le sens de variation, les extremums et les images aux bornes"],a:3,exp:"Définition du tableau de variations"},
    {q:"Graphiquement, l'image de a par f est lue…",c:["comme l'abscisse du point d'ordonnée a","comme la pente de la courbe","sur la bissectrice","comme l'ordonnée du point de la courbe d'abscisse a"],a:3,exp:"Image = ordonnée ; antécédent = abscisse"},
  ],
  "2C — Applications": [
    {q:"Une application f de E vers F associe à chaque élément de E…",c:["un unique élément de F","aucun élément","au moins un élément de F","tous les éléments de F"],a:0,exp:"Définition d'une application"},
    {q:"f est injective si et seulement si, pour tous a et b de E…",c:["f(a) = f(b) ⟹ a = b","f(a) = a","f(a) ≠ f(b) ⟹ a = b","a = b ⟹ f(a) = f(b)"],a:0,exp:"Propriété caractéristique de l'injection"},
    {q:"La contraposée de « f(a) = f(b) ⟹ a = b » est…",c:["a = b ⟹ f(a) = f(b)","a ≠ b ⟹ f(a) = f(b)","f(a) ≠ f(b) ⟹ a = b","a ≠ b ⟹ f(a) ≠ f(b)"],a:3,exp:"Contraposée : non Q ⟹ non P"},
    {q:"f est surjective de E vers F si…",c:["tout élément de E a une image","f est injective","tout élément de F a au moins un antécédent dans E","F est vide"],a:2,exp:"Définition de la surjection"},
    {q:"Une application est bijective si elle est…",c:["constante","injective ou surjective","injective et surjective","seulement surjective"],a:2,exp:"Bijection = injection + surjection"},
    {q:"L'application de ℝ vers ℝ définie par f(x) = x² est-elle injective ?",c:["Non : f(−1) = f(1) avec −1 ≠ 1","Oui, car f(x) ≥ 0","Oui","Non, car f n'est pas définie en 0"],a:0,exp:"Deux réels distincts ont la même image"},
    {q:"L'application de ℝ vers ℝ définie par f(x) = x² est-elle surjective ?",c:["Oui, car f est définie sur ℝ","Non : −1 n'a pas d'antécédent","Non : 0 n'a pas d'antécédent","Oui"],a:1,exp:"x² ≥ 0 : aucun réel négatif n'est atteint"},
    {q:"L'application de ℝ vers ℝ définie par f(x) = 2x + 1 est…",c:["seulement surjective","bijective","ni injective ni surjective","seulement injective"],a:1,exp:"Tout réel y a un unique antécédent (y − 1)/2"},
    {q:"La bijection réciproque de f(x) = 2x + 1 (de ℝ vers ℝ) est…",c:["f⁻¹(x) = 2x − 1","f⁻¹(x) = 1/(2x + 1)","f⁻¹(x) = (x − 1)/2","f⁻¹(x) = (x + 1)/2"],a:2,exp:"y = 2x + 1 ⟺ x = (y − 1)/2"},
    {q:"Si f est bijective de E vers F, sa bijection réciproque va de…",c:["E vers F","F vers E","E vers E","F vers F"],a:1,exp:"On inverse les rôles de E et F"},
  ],
  "2C — Fonctions de référence": [
    {q:"La fonction f(x) = x² est strictement décroissante sur…",c:["[0 ; +∞[","ℝ","]0 ; 1[","]−∞ ; 0]"],a:3,exp:"x² décroît sur ]−∞ ; 0] et croît sur [0 ; +∞["},
    {q:"La fonction f(x) = x³ est…",c:["strictement croissante sur ℝ","constante","décroissante sur ℝ","décroissante sur ]−∞ ; 0]"],a:0,exp:"Le cube conserve l'ordre"},
    {q:"L'ensemble de définition de f(x) = √x est…",c:["]−∞ ; 0]","]0 ; +∞[","[0 ; +∞[","ℝ"],a:2,exp:"Il faut x ≥ 0"},
    {q:"La fonction inverse x ↦ 1/x est strictement décroissante…",c:["sur ℝ","sur ]−∞ ; 0[ et sur ]0 ; +∞[ séparément","sur ℝ*","seulement sur ]0 ; +∞["],a:1,exp:"Elle n'est pas monotone sur ℝ* tout entier"},
    {q:"La courbe de f(x) = x² admet pour axe de symétrie…",c:["l'axe des abscisses","la droite d'équation y = x","l'axe des ordonnées","aucun axe"],a:2,exp:"f(−x) = f(x)"},
    {q:"La courbe de f(x) = x³ est symétrique par rapport…",c:["à la droite y = 1","à l'origine du repère","à l'axe des ordonnées","à l'axe des abscisses"],a:1,exp:"f(−x) = −f(x)"},
    {q:"Si a ∈ ]0 ; 1[, alors…",c:["a³ < a² < a < √a < 1/a","a < a² < a³ < √a < 1/a","1/a < √a < a < a² < a³","√a < a < a² < a³ < 1/a"],a:0,exp:"Ex. a = 0,25 : 0,0156 < 0,0625 < 0,25 < 0,5 < 4"},
    {q:"Si a > 1, alors…",c:["a > a² > a³ > √a > 1/a","1/a > √a > a > a² > a³","a³ > a² > a > √a > 1/a","a² > a³ > a > √a > 1/a"],a:2,exp:"Ex. a = 4 : 64 > 16 > 4 > 2 > 0,25"},
    {q:"Si a = 1, alors…",c:["a³ = a² = a = √a = 1/a = 1","a³ < a²","1/a > a","√a < a"],a:0,exp:"Tous ces nombres valent 1"},
    {q:"Classement croissant de 0,5² ; 0,5³ ; √0,5 ; 1/0,5 :",c:["1/0,5 < √0,5 < 0,5² < 0,5³","√0,5 < 0,5² < 0,5³ < 1/0,5","0,5³ < 0,5² < √0,5 < 1/0,5","0,5² < 0,5³ < √0,5 < 1/0,5"],a:2,exp:"0,125 < 0,25 < 0,707… < 2"},
    {q:"La fonction valeur absolue x ↦ |x| est décroissante sur…",c:["ℝ","[0 ; +∞[","]−∞ ; 0]","aucun intervalle"],a:2,exp:"|x| = −x pour x ≤ 0"},
    {q:"f(x) = |x − 1| s'écrit sans valeur absolue…",c:["x − 1 si x ≥ 1 ; 1 − x si x < 1","1 − x si x ≥ 1 ; x − 1 si x < 1","x + 1 si x ≥ 0","|x| − 1 toujours"],a:0,exp:"Fonction affine par intervalles"},
    {q:"La fonction partie entière est constante sur…",c:["[0 ; +∞[","chaque intervalle [n ; n + 1[ (n entier)","ℝ","aucun intervalle"],a:1,exp:"E(x) = n pour n ≤ x < n + 1"},
    {q:"La courbe représentative de x ↦ 1/x s'appelle…",c:["une droite","une sinusoïde","une parabole","une hyperbole"],a:3,exp:"Courbe de la fonction inverse"},
  ],
  "2C — Équations & inéquations dans ℝ": [
    {q:"Deux équations sont équivalentes si…",c:["elles ont une solution commune","elles ont le même degré","elles ont la même écriture","elles ont le même ensemble de solutions"],a:3,exp:"Définition de l'équivalence"},
    {q:"|x − 3| = 5 a pour ensemble de solutions…",c:["{2}","{−8 ; 2}","{−2 ; 8}","{8}"],a:2,exp:"x − 3 = 5 ou x − 3 = −5"},
    {q:"|2x + 1| = 3 a pour solutions…",c:["{2 ; −1}","{−2 ; 1}","{1}","{−1 ; 2}"],a:1,exp:"2x + 1 = 3 ⟹ x = 1 ; 2x + 1 = −3 ⟹ x = −2"},
    {q:"|x − 1| = −2 a pour ensemble de solutions…",c:["{1}","∅","{3}","{−1 ; 3}"],a:1,exp:"Une valeur absolue est toujours positive ou nulle"},
    {q:"Dans ℝ, x² − 9 = 0 a pour solutions…",c:["{−3 ; 3}","{9}","∅","{3}"],a:0,exp:"x² = 9"},
    {q:"Dans ℝ, x² + 4 = 0 a pour solutions…",c:["{2}","∅","{−2 ; 2}","{4}"],a:1,exp:"Un carré n'est jamais négatif"},
    {q:"Dans ℝ, x² − 5x + 6 = 0 a pour solutions…",c:["{2 ; 3}","{−1 ; −6}","{1 ; 6}","{−2 ; −3}"],a:0,exp:"x² − 5x + 6 = (x − 2)(x − 3)"},
    {q:"Dans ℝ, x² − 2x = 0 a pour solutions…",c:["{2}","{−2 ; 0}","{0}","{0 ; 2}"],a:3,exp:"x(x − 2) = 0"},
    {q:"Résoudre 3x − 6 < 0.",c:["x > −2","x < −2","x < 2","x > 2"],a:2,exp:"3x < 6 donc x < 2"},
    {q:"Résoudre −2x + 4 ≥ 0.",c:["x ≥ −2","x ≥ 2","x ≤ 2","x ≤ −2"],a:2,exp:"−2x ≥ −4 : on divise par −2 et le sens change"},
    {q:"Multiplier les deux membres d'une inéquation par un réel négatif…",c:["conserve le sens","la rend toujours vraie","change le sens de l'inégalité","annule l'inéquation"],a:2,exp:"Règle sur les inéquations"},
    {q:"|x| < 2 équivaut à…",c:["x ∈ ]−∞ ; −2[ ∪ ]2 ; +∞[","x < 2","x ∈ ]−2 ; 2[","x ∈ [−2 ; 2]"],a:2,exp:"−2 < x < 2"},
    {q:"Pour a > 0, |x| ≥ a équivaut à…",c:["x ≤ a","x ≥ a seulement","x ≤ −a ou x ≥ a","−a ≤ x ≤ a"],a:2,exp:"x est à au moins a de 0"},
    {q:"Résoudre (x − 1)/(x + 2) ≥ 0.",c:["]−∞ ; −2] ∪ [1 ; +∞[","[−2 ; 1]","]−2 ; 1]","]−∞ ; −2[ ∪ [1 ; +∞["],a:3,exp:"Tableau de signes ; −2 est exclu (dénominateur nul)"},
  ],
  "2C — Statistiques": [
    {q:"Notes : 7 8 8 8 9 9 10 10 10 12 12 12 12 12 13 13 15 15 15. L'effectif total est…",c:["19","7","20","18"],a:0,exp:"1 + 3 + 2 + 3 + 5 + 2 + 3 = 19"},
    {q:"Notes : 7 8 8 8 9 9 10 10 10 12 12 12 12 12 13 13 15 15 15. Le mode est…",c:["10","15","8","12"],a:3,exp:"12 apparaît 5 fois : c'est l'effectif maximal"},
    {q:"Notes : 7 8 8 8 9 9 10 10 10 12 12 12 12 12 13 13 15 15 15. La médiane est…",c:["13","11","10","12"],a:3,exp:"19 valeurs : la médiane est la 10e valeur, soit 12"},
    {q:"Notes : 7 8 8 8 9 9 10 10 10 12 12 12 12 12 13 13 15 15 15. L'étendue est…",c:["22","15","8","7"],a:2,exp:"15 − 7 = 8"},
    {q:"Notes : 7 8 8 8 9 9 10 10 10 12 12 12 12 12 13 13 15 15 15. L'effectif cumulé croissant de la note 10 est…",c:["9","19","3","10"],a:0,exp:"1 + 3 + 2 + 3 = 9 notes ≤ 10"},
    {q:"La moyenne de cette série est environ…",c:["11,5","12","11,05","10,5"],a:2,exp:"Somme = 210 ; 210/19 ≈ 11,05"},
    {q:"Pour une série d'effectif total N impair, la médiane est la valeur de rang…",c:["N + 1","(N + 1)/2","N/2","(N − 1)/2"],a:1,exp:"Ex. N = 19 : rang 10"},
    {q:"La variance d'une série statistique est…",c:["la moyenne des carrés des écarts à la moyenne","la différence entre les valeurs extrêmes","la médiane des écarts","la moyenne des écarts à la moyenne"],a:0,exp:"Définition de la variance"},
    {q:"L'écart-type est…",c:["le carré de la variance","la médiane des écarts","la racine carrée de la variance","la moyenne des distances à la moyenne"],a:2,exp:"σ = √V"},
    {q:"La variance de la série 1 ; 3 ; 5 ; 7 est…",c:["2,5","20","4","5"],a:3,exp:"Moyenne 4 ; carrés des écarts 9, 1, 1, 9 ; 20/4 = 5"},
    {q:"L'écart moyen absolu est…",c:["la racine de la variance","la différence max − min","la moyenne des carrés des écarts","la moyenne des distances à la moyenne"],a:3,exp:"Définition du guide"},
    {q:"Les effectifs cumulés croissants s'obtiennent en…",c:["additionnant successivement les effectifs, modalités rangées dans l'ordre croissant","soustrayant les effectifs","multipliant les effectifs","divisant chaque effectif par N"],a:0,exp:"Cumul progressif des effectifs"},
    {q:"La fréquence cumulée croissante de la dernière modalité vaut…",c:["1 (soit 100 %)","0,5","0","N"],a:0,exp:"Toute la série est comptée"},
    {q:"Le premier quartile Q₁ est une valeur telle qu'au moins … des données lui sont inférieures ou égales.",c:["10 %","25 %","75 %","50 %"],a:1,exp:"Q₁ : 25 % ; Q₂ (médiane) : 50 % ; Q₃ : 75 %"},
    {q:"Pour un caractère quantitatif continu, on utilise…",c:["un diagramme circulaire uniquement","un histogramme","un diagramme en bâtons","un nuage de points"],a:1,exp:"Les classes sont représentées par des rectangles"},
    {q:"Pour calculer la moyenne d'une série continue regroupée en classes, on utilise…",c:["les centres des classes","les bornes inférieures","les amplitudes","les fréquences seulement"],a:0,exp:"Chaque classe est représentée par son centre"},
    {q:"Le diagramme cumulatif des fréquences permet de lire graphiquement…",c:["la médiane et les quartiles","l'écart-type exact","la variance exacte","le mode uniquement"],a:0,exp:"On lit les valeurs pour 25 %, 50 %, 75 %"},
  ],
  "2C — Polynômes & fractions rationnelles": [
    {q:"Un zéro (ou racine) d'un polynôme P est un réel a tel que…",c:["P(0) = a","P(a) = 0","P(a) = 1","a = 0"],a:1,exp:"Définition d'un zéro"},
    {q:"Si a est un zéro de P (degré n ≥ 1), alors P(x) = …",c:["(x + a) Q(x), Q de degré n","a Q(x)","(x − a) Q(x), Q de degré n − 1","(x − a) + Q(x)"],a:2,exp:"Propriété admise du guide"},
    {q:"Les zéros de P(x) = x² − 5x + 6 sont…",c:["1 et 6","−2 et −3","−1 et 6","2 et 3"],a:3,exp:"P(x) = (x − 2)(x − 3)"},
    {q:"Le quotient de x³ − 1 par (x − 1) est…",c:["x² − 1","x² − x + 1","x² + x + 1","x² + 1"],a:2,exp:"(x − 1)(x² + x + 1) = x³ − 1"},
    {q:"Le quotient de x² + 3x + 2 par (x + 1) est…",c:["x + 1","x − 2","x² + 2","x + 2"],a:3,exp:"(x + 1)(x + 2) = x² + 3x + 2"},
    {q:"La forme canonique de x² + 4x + 1 est…",c:["(x − 2)² − 3","(x + 4)² − 15","(x + 2)² + 3","(x + 2)² − 3"],a:3,exp:"(x + 2)² = x² + 4x + 4"},
    {q:"La factorisation de x² − 4x + 4 est…",c:["(x − 2)²","(x − 4)²","(x + 2)²","(x − 2)(x + 2)"],a:0,exp:"Identité remarquable"},
    {q:"Le binôme 2x − 6 est positif sur…",c:["]3 ; +∞[","]−∞ ; 3[","ℝ","]−∞ ; −3["],a:0,exp:"2x − 6 > 0 ⟺ x > 3"},
    {q:"Le binôme ax + b (a > 0) est négatif pour…",c:["x < b/a","x > b/a","x < −b/a","x > −b/a"],a:2,exp:"ax + b < 0 ⟺ x < −b/a"},
    {q:"Une fraction rationnelle est…",c:["le quotient de deux polynômes","le produit de deux polynômes","un polynôme de degré 1","une somme de racines carrées"],a:0,exp:"Définition"},
    {q:"L'ensemble de définition de (x + 1)/(x² − 1) est…",c:["ℝ ∖ {−1 ; 1}","ℝ ∖ {−1}","ℝ ∖ {1}","ℝ"],a:0,exp:"x² − 1 = 0 pour x = ±1"},
    {q:"Les zéros de (x − 2)(x + 1)/(x − 3) sont…",c:["3","2, −1 et 3","−2 et 1","2 et −1"],a:3,exp:"On annule le numérateur (avec dénominateur non nul)"},
    {q:"Pour x ≠ 1, (x² − 1)/(x − 1) se simplifie en…",c:["1","x + 1","x²","x − 1"],a:1,exp:"(x − 1)(x + 1)/(x − 1)"},
    {q:"(x − 1)(x + 3) < 0 sur…",c:["]1 ; +∞[","]−∞ ; −3[ ∪ ]1 ; +∞[","]−3 ; 1[","[−3 ; 1]"],a:2,exp:"Tableau de signes : négatif entre les zéros"},
  ],
  "2C — Vecteurs du plan": [
    {q:"Étant donnés un vecteur →u et un point O, il existe … point M tel que →OM = →u.",c:["aucun","un unique","une infinité de","au moins deux"],a:1,exp:"Propriété admise"},
    {q:"λ→u = →0 si et seulement si…",c:["λ = 0 et →u = →0","λ = 0 ou →u = →0","λ = 1","→u = →0 seulement"],a:1,exp:"Propriété du guide"},
    {q:"Une combinaison linéaire de →u et →v est un vecteur de la forme…",c:["→u × →v","α→u × β→v","α→u + β→v (α, β réels)","→u + →v seulement"],a:2,exp:"Définition"},
    {q:"→u et →v sont colinéaires si et seulement s'il existe un réel λ tel que…",c:["‖→u‖ = ‖→v‖","→u ⋅ →v = 0","→u + →v = →0","→u = λ→v ou →v = λ→u"],a:3,exp:"Propriété démontrée en cours"},
    {q:"→u et →v sont non colinéaires. Si α→u + β→v = →0, alors…",c:["α = β = 0","α = β","α = −β","α = 1"],a:0,exp:"Caractérisation de la non-colinéarité"},
    {q:"Une base du plan vectoriel est…",c:["un seul vecteur non nul","trois vecteurs quelconques","un couple de vecteurs non colinéaires","un couple de vecteurs colinéaires"],a:2,exp:"Définition d'une base"},
    {q:"Le déterminant de →u(x ; y) et →v(x' ; y') dans une base est…",c:["xx' + yy'","xy + x'y'","xx' − yy'","xy' − x'y"],a:3,exp:"det(→u, →v) = xy' − x'y"},
    {q:"det(→u, →v) = 0 équivaut à…",c:["→u et →v colinéaires","→u unitaire","→u = →v","→u et →v orthogonaux"],a:0,exp:"Critère de colinéarité"},
    {q:"Les vecteurs →u(2 ; −3) et →v(−4 ; 6) sont…",c:["égaux","colinéaires","orthogonaux","non colinéaires"],a:1,exp:"det = 2×6 − (−4)×(−3) = 12 − 12 = 0"},
    {q:"A(1 ; 2), B(3 ; 6), C(4 ; 8) sont-ils alignés ?",c:["Oui, car det(→AB, →AC) = 0","Non, car AB ≠ AC","Oui, car AB = BC","Non, car det(→AB, →AC) = 2"],a:0,exp:"→AB(2 ; 4), →AC(3 ; 6) : 2×6 − 3×4 = 0"},
    {q:"Le centre de gravité G d'un triangle ABC vérifie…",c:["→GA = →GB = →GC","→AG = →BG","→GA + →GB = →GC","→GA + →GB + →GC = →0"],a:3,exp:"Caractérisation vectorielle de G"},
    {q:"M appartient au segment [AB] si et seulement si →AM = t→AB avec…",c:["0 ≤ t ≤ 1","t ≥ 0","t > 1","t ≤ 0"],a:0,exp:"Caractérisation vectorielle d'un segment"},
    {q:"M appartient à la demi-droite [AB) si et seulement si →AM = t→AB avec…",c:["0 ≤ t ≤ 1","t ≥ 0","t ≤ 0","t > 1 seulement"],a:1,exp:"Caractérisation vectorielle d'une demi-droite"},
    {q:"Les coordonnées de →u = 2→i − 3→j dans la base (→i, →j) sont…",c:["(−2 ; 3)","(−3 ; 2)","(2 ; −3)","(2 ; 3)"],a:2,exp:"→u = x→i + y→j : (x ; y)"},
    {q:"Si →AB(3 ; −1) et →AC(1 ; 4), alors →AB + →AC a pour coordonnées…",c:["(3 ; −4)","(4 ; −3)","(2 ; −5)","(4 ; 3)"],a:3,exp:"(3 + 1 ; −1 + 4)"},
  ],
  "2C — Droites du plan": [
    {q:"Une représentation paramétrique de la droite passant par A(x₀ ; y₀) de vecteur directeur →u(a ; b) est…",c:["x = x₀ + bt ; y = y₀ + at","x = a + x₀t ; y = b + y₀t","x = ax₀ ; y = by₀","x = x₀ + at ; y = y₀ + bt (t ∈ ℝ)"],a:3,exp:"Propriété démontrée en cours"},
    {q:"Pour la droite x = 1 + 2t ; y = −3 + t, un vecteur directeur est…",c:["(−3 ; 1)","(2 ; 1)","(1 ; 2)","(1 ; −3)"],a:1,exp:"Coefficients de t"},
    {q:"Pour x = 1 + 2t ; y = −3 + t, le point de paramètre t = 2 est…",c:["(5 ; −1)","(4 ; −1)","(3 ; −1)","(5 ; −2)"],a:0,exp:"x = 1 + 4 = 5 ; y = −3 + 2 = −1"},
    {q:"Une équation cartésienne d'une droite est de la forme…",c:["ax² + by = c","ax + by + c = 0 avec (a ; b) ≠ (0 ; 0)","ax + by = 0 avec a = b = 0","y = ax² + b"],a:1,exp:"Définition"},
    {q:"La droite d'équation ax + by + c = 0 admet pour vecteur directeur…",c:["→u(b ; a)","→u(a ; b)","→u(−b ; a)","→u(a ; −b)"],a:2,exp:"Propriété du guide"},
    {q:"Un vecteur normal à la droite 3x − 2y + 5 = 0 est…",c:["(2 ; 3)","(−2 ; −3)","(3 ; 2)","(3 ; −2)"],a:3,exp:"→n(a ; b) est normal à ax + by + c = 0"},
    {q:"La droite passant par A(1 ; 2) de vecteur normal →n(3 ; 4) a pour équation…",c:["3x + 4y − 11 = 0","4x + 3y − 10 = 0","3x + 4y + 11 = 0","x + 2y − 3 = 0"],a:0,exp:"3(x − 1) + 4(y − 2) = 0"},
    {q:"Deux droites de vecteurs normaux →n et →n' sont perpendiculaires si et seulement si…",c:["→n et →n' sont colinéaires","‖→n‖ = ‖→n'‖","→n = →n'","→n ⊥ →n'"],a:3,exp:"Propriété démontrée en cours"},
    {q:"La distance du point M₀(x₀ ; y₀) à la droite ax + by + c = 0 (repère orthonormé) est…",c:["|ax₀ + by₀| / √(a² + b²)","|ax₀ + by₀ + c|","|ax₀ + by₀ + c| / √(a² + b²)","(ax₀ + by₀ + c)/(a + b)"],a:2,exp:"Formule de la distance d'un point à une droite"},
    {q:"La distance de l'origine à la droite 3x + 4y − 10 = 0 est…",c:["10","2","2,5","5"],a:1,exp:"|−10|/√(9 + 16) = 10/5"},
    {q:"La distance du point (1 ; 1) à la droite x + y − 4 = 0 est…",c:["√2","2","1","2√2"],a:0,exp:"|1 + 1 − 4|/√2 = 2/√2 = √2"},
    {q:"Éliminer t dans x = 1 + 2t ; y = 3 − t donne…",c:["2x + y − 5 = 0","x + 2y + 7 = 0","x + 2y − 7 = 0","x − 2y + 5 = 0"],a:2,exp:"t = 3 − y donc x = 1 + 2(3 − y)"},
    {q:"L'intersection des droites 2x − y = 1 et x + y = 5 est…",c:["(1 ; 4)","(2 ; 3)","(4 ; 1)","(3 ; 2)"],a:1,exp:"On ajoute : 3x = 6 donc x = 2 et y = 3"},
    {q:"M appartient à la droite (D) de vecteur directeur →u passant par A si et seulement si…",c:["→AM ⊥ →u","→AM = →u","→AM et →u sont colinéaires","AM = ‖→u‖"],a:2,exp:"Propriété du guide"},
    {q:"Pour tout point A et tout vecteur non nul →n, il existe … droite passant par A de vecteur normal →n.",c:["une et une seule","aucune","deux","une infinité de"],a:0,exp:"Propriété démontrée en cours"},
  ],
  "2C — Homothétie & transformations": [
    {q:"L'homothétie de centre O et de rapport k (k ≠ 0) associe à M le point M' tel que…",c:["→OM' = k→OM","→MM' = k","→OM' = →OM + k","OM' = OM + k"],a:0,exp:"Définition"},
    {q:"L'homothétie de rapport 1 est…",c:["une translation","la symétrie centrale","l'identité du plan","un quart de tour"],a:2,exp:"h(O, 1) = identité"},
    {q:"L'homothétie de rapport −1 est…",c:["une translation","la symétrie centrale de même centre","une symétrie orthogonale","l'identité"],a:1,exp:"h(O, −1) = symétrie de centre O"},
    {q:"Le seul point invariant par une homothétie de rapport k ≠ 1 est…",c:["son centre","tout point du plan","le milieu de [MM']","aucun point"],a:0,exp:"Propriété admise"},
    {q:"Si M', N' sont les images de M, N par h(O, k), alors →M'N' = …",c:["→MN","k→MN","(1/k)→MN","k²→MN"],a:1,exp:"Propriété fondamentale de l'homothétie"},
    {q:"La réciproque de l'homothétie h(O, k) est…",c:["une translation","h(O, −k)","h(O, k²)","h(O, 1/k)"],a:3,exp:"M' = h(O, k)(M) équivaut à M = h(O, 1/k)(M')"},
    {q:"Une homothétie de rapport k multiplie les longueurs par…",c:["k²","k³","|k|","1/k"],a:2,exp:"Les longueurs sont multipliées par |k|"},
    {q:"Une homothétie de rapport k multiplie les aires par…",c:["2k","k","|k|³","k²"],a:3,exp:"Propriété admise"},
    {q:"L'image d'une droite par une homothétie est…",c:["un point","un cercle","une droite parallèle à la première","une droite perpendiculaire"],a:2,exp:"Propriété admise"},
    {q:"L'homothétie conserve…",c:["toutes les distances","les longueurs","l'alignement, le milieu, le parallélisme, l'orthogonalité et les angles","les aires"],a:2,exp:"Elle ne conserve pas les longueurs (sauf |k| = 1)"},
    {q:"Un point, son image par une homothétie et le centre de l'homothétie sont…",c:["alignés","cocycliques","les sommets d'un triangle équilatéral","toujours confondus"],a:0,exp:"→OM' = k→OM"},
    {q:"Si h(O, 3)(A) = A' avec OA = 2 cm, alors OA' = …",c:["2/3 cm","18 cm","6 cm","5 cm"],a:2,exp:"OA' = |k| × OA = 6"},
    {q:"La composée de deux symétries orthogonales d'axes perpendiculaires est…",c:["la symétrie centrale de centre leur point d'intersection","une homothétie de rapport 2","l'identité","une translation"],a:0,exp:"Propriété admise"},
    {q:"La composée de deux symétries orthogonales d'axes parallèles est…",c:["l'identité","une rotation","une symétrie centrale","une translation"],a:3,exp:"Propriété admise"},
    {q:"La composée de deux symétries centrales de centres distincts est…",c:["une symétrie centrale","une translation","l'identité","une homothétie"],a:1,exp:"Propriété admise"},
    {q:"La composée de deux translations de vecteurs →u et →v est la translation de vecteur…",c:["→u − →v","→0","→u + →v","→u × →v"],a:2,exp:"Propriété admise"},
    {q:"Si S_I[S_J(M)] = N, alors →MN = …",c:["→JI","2→JI","2→IJ","→IJ"],a:1,exp:"Propriété admise (I ≠ J)"},
  ],
  "2C — Angles, radian & trigonométrie": [
    {q:"L'aire d'un triangle ABC est S = …",c:["½ bc cos A","½ (b + c) sin A","½ bc sin A","bc sin A"],a:2,exp:"Propriété démontrée en cours"},
    {q:"Dans ABC, a/sin A = b/sin B = c/sin C = …",c:["R/2","2R","S","R"],a:1,exp:"R : rayon du cercle circonscrit"},
    {q:"Dans ABC, a = 6 et Â = 30°. Le rayon du cercle circonscrit est…",c:["12","6","3","6√3"],a:1,exp:"2R = 6/sin 30° = 12 donc R = 6"},
    {q:"Un radian est la mesure d'un angle au centre qui intercepte un arc de longueur…",c:["égale au rayon","égale à 1 cm","égale à π","égale au diamètre"],a:0,exp:"Définition du radian"},
    {q:"π radians correspondent à…",c:["90°","360°","57°","180°"],a:3,exp:"Conversion degrés-radians"},
    {q:"60° = … radians",c:["π/6","2π/3","π/3","π/4"],a:2,exp:"60 × π/180"},
    {q:"3π/4 radians = … degrés",c:["150°","135°","120°","45°"],a:1,exp:"3 × 180/4"},
    {q:"La longueur de l'arc de rayon R intercepté par un angle au centre de α radians est…",c:["R + α","α/R","R/α","Rα"],a:3,exp:"L = Rα"},
    {q:"Orienter le plan, c'est choisir un sens de parcours appelé sens…",c:["direct (ou positif)","rétrograde","orthogonal","alterné"],a:0,exp:"L'autre sens est dit négatif ou rétrograde"},
    {q:"La mesure principale d'un angle orienté appartient à…",c:["]−π/2 ; π/2[","]−π ; π]","[0 ; 2π[","[0 ; π]"],a:1,exp:"Définition du guide"},
    {q:"cos²α + sin²α = …",c:["cos 2α","0","1","2"],a:2,exp:"Relation fondamentale"},
    {q:"cos(−α) et sin(−α) valent…",c:["−cos α et −sin α","cos α et sin α","−cos α et sin α","cos α et −sin α"],a:3,exp:"Le cosinus est pair, le sinus est impair"},
    {q:"cos(π − α) = …",c:["−sin α","−cos α","cos α","sin α"],a:1,exp:"Angles associés"},
    {q:"sin(π − α) = …",c:["sin α","−cos α","−sin α","cos α"],a:0,exp:"Angles associés"},
    {q:"sin(π/6) = …",c:["1","√3/2","√2/2","1/2"],a:3,exp:"Angle remarquable"},
    {q:"cos(π/4) = …",c:["√3/2","1/2","1","√2/2"],a:3,exp:"Angle remarquable"},
    {q:"1 + tan²α = … (α ≠ π/2 et α ≠ −π/2)",c:["1/cos²α","1/sin²α","tan 2α","cos²α"],a:0,exp:"Propriété démontrée en cours"},
    {q:"Pour α ∈ ]−π ; 0[, le signe de sin α est…",c:["positif","négatif","variable","nul"],a:1,exp:"Sous l'axe des abscisses sur le cercle trigonométrique"},
    {q:"Deux angles orientés sont égaux si…",c:["leurs sinus sont égaux","leurs cosinus sont égaux","leurs mesures principales sont égales","ils sont adjacents"],a:2,exp:"Définition du guide"},
    {q:"mes(→u, →v) = …",c:["2 mes(→v, →u)","π − mes(→v, →u)","mes(→v, →u)","−mes(→v, →u)"],a:3,exp:"Propriété du guide"},
  ],
  "2C — Produit scalaire": [
    {q:"Si l'angle BAC est aigu, →AB ⋅ →AC est…",c:["égal à AB + AC","strictement négatif","nul","strictement positif"],a:3,exp:"Signe du produit scalaire"},
    {q:"Si l'angle BAC est obtus, →AB ⋅ →AC est…",c:["égal à AB × AC","strictement négatif","nul","strictement positif"],a:1,exp:"Signe du produit scalaire"},
    {q:"Si l'angle BAC est droit, →AB ⋅ →AC vaut…",c:["AB + AC","1","0","AB × AC"],a:2,exp:"Vecteurs orthogonaux"},
    {q:"L'expression trigonométrique du produit scalaire est →AB ⋅ →AC = …",c:["AB × AC × sin(→AB, →AC)","AB + AC","AB × AC","AB × AC × cos(→AB, →AC)"],a:3,exp:"Propriété démontrée en cours"},
    {q:"Pour tous vecteurs →u et →v, →u ⋅ →v = …",c:["−→v ⋅ →u","→v ⋅ →u","0","‖→u‖ + ‖→v‖"],a:1,exp:"Le produit scalaire est symétrique"},
    {q:"(→u + →v)² = …",c:["→u² + →v²","→u² − 2 →u ⋅ →v + →v²","2 →u ⋅ →v","→u² + 2 →u ⋅ →v + →v²"],a:3,exp:"Propriété démontrée en cours"},
    {q:"→u² − →v² = …",c:["(→u − →v) ⋅ (→u + →v)","→u ⋅ →v","(→u − →v)²","(→u + →v)²"],a:0,exp:"Propriété démontrée en cours"},
    {q:"Dans une base orthonormée, →u(x ; y) ⋅ →v(x' ; y') = …",c:["xy + x'y'","xx' + yy'","xy' − x'y","xy' + x'y"],a:1,exp:"Expression analytique du produit scalaire"},
    {q:"La norme du vecteur →u(3 ; 4) dans une base orthonormée est…",c:["7","√7","5","25"],a:2,exp:"√(9 + 16) = 5"},
    {q:"Un vecteur unitaire est un vecteur de norme…",c:["−1","1","0","2"],a:1,exp:"Définition"},
    {q:"Les vecteurs →u(2 ; 3) et →v(3 ; −2) sont…",c:["colinéaires","égaux","opposés","orthogonaux"],a:3,exp:"→u ⋅ →v = 6 − 6 = 0"},
    {q:"Le carré scalaire →u² est égal à…",c:["‖→u‖²","0","2‖→u‖","‖→u‖"],a:0,exp:"→u ⋅ →u = ‖→u‖²"},
    {q:"Le vecteur nul est orthogonal à…",c:["aucun vecteur","les vecteurs unitaires","tout vecteur du plan","lui-même seulement"],a:2,exp:"Convention du guide"},
    {q:"Une base orthonormée est formée de deux vecteurs…",c:["colinéaires et unitaires","de même direction","orthogonaux et unitaires","de normes quelconques"],a:2,exp:"Définition"},
    {q:"Théorème de la médiane (A' milieu de [BC]) : AB² + AC² = …",c:["2AA'² + BC²/2","AA'² + BC²","AA'² + BC²/2","2AA'² + BC²"],a:0,exp:"Théorème démontré en cours"},
    {q:"Théorème d'Al-Kashi : a² = …",c:["b² + c² − 2bc cos A","b² + c² − 2bc sin A","b² + c² + 2bc cos A","b² − c² − 2bc cos A"],a:0,exp:"Théorème démontré en cours"},
    {q:"Dans ABC, AB = 3, AC = 4 et Â = 60°. Alors BC² = …",c:["13","7","25","37"],a:0,exp:"9 + 16 − 2×3×4×½ = 13"},
    {q:"Le produit scalaire →AB ⋅ →AC par projection orthogonale est égal à…",c:["AB × BC","AC × BH","AB × AH en mesure algébrique (H projeté orthogonal de C sur (AB))","AB × CH"],a:2,exp:"Définition du produit scalaire par projection"},
  ],
  "2C — Rotation & cercles": [
    {q:"Si θ ≠ 0, le seul point invariant par la rotation r(O, θ) est…",c:["tout point du plan","aucun point","le point O","le milieu de [OM]"],a:2,exp:"Propriété du guide"},
    {q:"La rotation r(O, θ) associe à M ≠ O le point M' tel que…",c:["OM' = θ × OM","mes(→OM, →OM') = OM","OM' = OM et mes(→OM, →OM') = θ","OM' = OM + θ"],a:2,exp:"Définition de la rotation"},
    {q:"La rotation d'angle π est…",c:["une translation","l'identité","un quart de tour direct","la symétrie centrale (demi-tour)"],a:3,exp:"Cas particulier"},
    {q:"Un quart de tour direct est une rotation d'angle…",c:["π/2","π/4","−π/2","π"],a:0,exp:"Cas particulier"},
    {q:"La rotation conserve…",c:["seulement l'alignement","les distances, les aires, les angles orientés et l'alignement","aucune distance","les longueurs multipliées par θ"],a:1,exp:"Propriétés admises"},
    {q:"L'image d'un cercle par une rotation est…",c:["une ellipse","un cercle de rayon double","un cercle de même rayon dont le centre est l'image du centre","une droite"],a:2,exp:"Propriété admise"},
    {q:"Si A', B' sont les images de A, B par r(O, θ), alors…",c:["A'B' = AB et mes(→AB, →A'B') = θ","A'B' = 2AB","A'B' = AB + θ","(A'B') ∥ (AB)"],a:0,exp:"Propriété du guide"},
    {q:"La composée de deux symétries orthogonales d'axes sécants en O est…",c:["une homothétie","une translation","une rotation de centre O","l'identité"],a:2,exp:"Propriété énoncée en cours"},
    {q:"Le cercle de centre I(a ; b) et de rayon R a pour équation (repère orthonormé)…",c:["(x + a)² + (y + b)² = R²","x² + y² = R²","(x − a)² + (y − b)² = R","(x − a)² + (y − b)² = R²"],a:3,exp:"IM² = R²"},
    {q:"Le cercle x² + y² − 4x + 6y − 12 = 0 a pour centre et rayon…",c:["centre (4 ; −6), rayon 5","centre (2 ; −3), rayon 25","centre (−2 ; 3), rayon 5","centre (2 ; −3), rayon 5"],a:3,exp:"(x − 2)² + (y + 3)² = 25"},
    {q:"L'ensemble x² + y² − 2ax − 2by + c = 0 est vide lorsque…",c:["c = 0","a² + b² − c > 0","a² + b² − c < 0","a² + b² − c = 0"],a:2,exp:"(x − a)² + (y − b)² = a² + b² − c"},
    {q:"L'ensemble x² + y² − 2ax − 2by + c = 0 est un singleton lorsque…",c:["a² + b² − c > 0","a² + b² − c < 0","c = 0","a² + b² − c = 0"],a:3,exp:"Le rayon est nul : c'est le point (a ; b)"},
    {q:"Le cercle de diamètre [AB] avec A(1 ; 2), B(5 ; 6) a pour équation…",c:["(x − 5)² + (y − 6)² = 8","(x − 1)² + (y − 2)² = 8","(x − 3)² + (y − 4)² = 32","(x − 3)² + (y − 4)² = 8"],a:3,exp:"Centre (3 ; 4), R = AB/2 = 2√2 donc R² = 8"},
    {q:"Un cercle de centre I et de rayon R, une droite (D) à la distance d de I. Si d < R…",c:["(D) passe par I","(D) est tangente à (C)","(D) et (C) n'ont aucun point commun","(D) et (C) se coupent en deux points"],a:3,exp:"Propriété du guide"},
    {q:"Si d = R, alors…",c:["(D) et (C) se coupent en deux points","(D) et (C) n'ont aucun point commun","(D) et (C) ont un point commun et un seul","(D) passe par I"],a:2,exp:"La droite est tangente au cercle"},
    {q:"Si d > R, alors…",c:["(D) et (C) n'ont aucun point commun","(D) et (C) ont un point commun","(D) coupe (C) en deux points","(D) est un diamètre"],a:0,exp:"La droite est extérieure au cercle"},
  ],
  "2C — Systèmes & inéquations dans ℝ×ℝ": [
    {q:"Le système ax + by = c ; a'x + b'y = c' a une solution unique si…",c:["ab' − a'b = 0","ab' − a'b ≠ 0","ab + a'b' ≠ 0","c = c'"],a:1,exp:"Le déterminant du système est non nul"},
    {q:"Résoudre 2x + y = 5 ; x − y = 1.",c:["(2 ; −1)","(2 ; 1)","(1 ; 2)","(3 ; −1)"],a:1,exp:"On ajoute : 3x = 6 donc x = 2 et y = 1"},
    {q:"Le système x + 2y = 4 ; 2x + 4y = 8 admet…",c:["aucune solution","deux solutions","une seule solution","une infinité de solutions"],a:3,exp:"Les deux équations représentent la même droite"},
    {q:"Le système x + 2y = 4 ; 2x + 4y = 9 admet…",c:["deux solutions","aucune solution","une infinité de solutions","une seule solution"],a:1,exp:"Droites parallèles distinctes"},
    {q:"Résoudre 1/x + 1/y = 5 ; 1/x − 1/y = 1 (changement d'inconnues).",c:["(1/3 ; 1/2)","(1/2 ; 1/3)","(2 ; 3)","(3 ; 2)"],a:0,exp:"X = 1/x, Y = 1/y : X = 3, Y = 2"},
    {q:"L'ensemble des points vérifiant x + y − 2 ≥ 0 est…",c:["une droite","un segment","un cercle","un demi-plan fermé limité par la droite x + y − 2 = 0"],a:3,exp:"Inéquation du premier degré à deux inconnues"},
    {q:"Pour choisir le demi-plan d'une inéquation ax + by + c ≥ 0, on teste…",c:["un point n'appartenant pas à la droite, par exemple l'origine","aucun point","le milieu de la droite","le centre du repère uniquement"],a:0,exp:"Méthode graphique"},
    {q:"Le régionnement du plan désigne…",c:["un cercle","une transformation","un polygone régulier","le découpage du plan en régions par des droites"],a:3,exp:"Vocabulaire du guide"},
    {q:"En programmation linéaire, on optimise…",c:["une fonction linéaire de deux variables sous des contraintes d'inéquations","la distance à l'origine uniquement","une fonction du second degré","une suite"],a:0,exp:"Problème de programmation linéaire"},
    {q:"L'optimum d'une fonction linéaire sur un polygone convexe est atteint en…",c:["un point quelconque intérieur","le centre du polygone","un sommet du polygone","aucun point"],a:2,exp:"Résolution graphique de la programmation linéaire"},
  ],
  "2C — Prop. & Déf.": [
    {q:"Définition : |x| = d(x, 0) vaut…",c:["x si x ≥ 0 ; −x si x < 0","−x","x²","1/x"],a:0,exp:"Valeur absolue"},
    {q:"Définition : la partie entière E(x) est…",c:["le plus grand entier relatif inférieur ou égal à x","le plus petit entier supérieur à x","la partie avant la virgule seulement","l'arrondi de x"],a:0,exp:"E(−2,3) = −3"},
    {q:"Définition : le maximum d'une partie A de ℝ est…",c:["un majorant de A qui appartient à A","un minorant de A","le milieu de A","un majorant hors de A"],a:0,exp:"Plus grand élément de A"},
    {q:"Définition : f est injective si…",c:["f(a) = f(b) ⟹ a = b","f(a) = a","f est croissante","tout élément de F a un antécédent"],a:0,exp:"Injection"},
    {q:"Définition : f est surjective de E vers F si…",c:["tout élément de F a au moins un antécédent","E = F","f(a) = f(b) ⟹ a = b","f est constante"],a:0,exp:"Surjection"},
    {q:"Définition : la bijection réciproque associe à tout y de F…",c:["l'unique antécédent de y dans E","le double de y","l'image de y","0"],a:0,exp:"Réciproque d'une bijection"},
    {q:"Propriété : si a ∈ ]0 ; 1[, alors…",c:["1/a < √a < a < a² < a³","a³ < a² < a < √a < 1/a","a² < a³ < a","a < a² < a³"],a:1,exp:"Comparaison des nombres de référence"},
    {q:"Propriété : si a est un zéro de P (degré n ≥ 1), alors…",c:["P(x) = x − a","P(x) = a Q(x)","P(a) = 1","P(x) = (x − a) Q(x), Q de degré n − 1"],a:3,exp:"Factorisation par (x − a)"},
    {q:"Définition : une fraction rationnelle est…",c:["une somme de racines","le quotient de deux polynômes","un polynôme de degré 1","le produit de deux polynômes"],a:1,exp:"Fraction rationnelle"},
    {q:"Définition : la médiane d'une série ordonnée est…",c:["la valeur qui partage la série en deux groupes de même effectif","la différence max − min","la moyenne des valeurs","la valeur d'effectif maximal"],a:0,exp:"Médiane"},
    {q:"Définition : la variance est…",c:["la moyenne des écarts à la moyenne","l'étendue","la racine de la moyenne","la moyenne des carrés des écarts à la moyenne"],a:3,exp:"Variance"},
    {q:"Définition : deux droites de l'espace sont coplanaires si…",c:["elles se coupent","elles sont parallèles","elles sont contenues dans un même plan","elles sont perpendiculaires"],a:2,exp:"Droites coplanaires"},
    {q:"Propriété : trois points non alignés définissent…",c:["un plan et un seul","aucun plan","une infinité de plans","une droite"],a:0,exp:"Caractérisation d'un plan"},
    {q:"Propriété : deux plans parallèles à un même troisième sont…",c:["parallèles entre eux","perpendiculaires","sécants","confondus obligatoirement"],a:0,exp:"Parallélisme de plans"},
    {q:"Propriété : (D) est parallèle à (P) si et seulement si (D) est parallèle à…",c:["une droite de (P)","un point de (P)","une droite quelconque","un plan quelconque"],a:0,exp:"Parallélisme droite-plan"},
    {q:"Définition : une base du plan vectoriel est…",c:["trois vecteurs","un couple de vecteurs non colinéaires","deux vecteurs colinéaires","un vecteur non nul"],a:1,exp:"Base"},
    {q:"Propriété : →u et →v sont colinéaires si et seulement si…",c:["→u + →v = →0","il existe un réel λ tel que →u = λ→v ou →v = λ→u","→u ⋅ →v = 0","‖→u‖ = ‖→v‖"],a:1,exp:"Colinéarité"},
    {q:"Définition : le déterminant de →u(x ; y) et →v(x' ; y') est…",c:["xx' + yy'","xy + x'y'","xx' − yy'","xy' − x'y"],a:3,exp:"Déterminant"},
    {q:"Définition : un vecteur normal à une droite est…",c:["un vecteur unitaire","le vecteur nul","un vecteur non nul orthogonal à un vecteur directeur de la droite","un vecteur colinéaire à la droite"],a:2,exp:"Vecteur normal"},
    {q:"Propriété : d(M₀, (D)) = …",c:["√(a² + b²)","|ax₀ + by₀ + c|","(ax₀ + by₀ + c)/(a + b)","|ax₀ + by₀ + c| / √(a² + b²)"],a:3,exp:"Distance point-droite"},
    {q:"Définition : l'homothétie h(O, k) associe à M le point M' tel que…",c:["→MM' = k→OM","OM' = k","→OM' = →OM + k","→OM' = k→OM"],a:3,exp:"Homothétie"},
    {q:"Propriété fondamentale : →M'N' = …",c:["→MN","→NM","k²→MN","k→MN"],a:3,exp:"Homothétie de rapport k"},
    {q:"Propriété : l'aire d'un triangle est S = …",c:["½ bc cos A","bc sin A","½ (b + c)","½ bc sin A"],a:3,exp:"Aire d'un triangle"},
    {q:"Définition : le radian est la mesure d'un angle au centre qui intercepte un arc de longueur…",c:["égale au diamètre","égale à 1","égale au rayon","égale à π"],a:2,exp:"Radian"},
    {q:"Définition : le cercle trigonométrique est…",c:["le cercle de rayon 1 orienté dans le sens direct","un cercle de diamètre 1 non orienté","un cercle de rayon π","tout cercle passant par O"],a:0,exp:"Cercle trigonométrique"},
    {q:"Définition : deux vecteurs sont orthogonaux lorsque…",c:["ils sont colinéaires","leur déterminant est nul","leur produit scalaire est nul","ils ont même norme"],a:2,exp:"Orthogonalité"},
    {q:"Définition : la rotation r(O, θ) est l'application qui…",c:["laisse O invariant et associe à M ≠ O le point M' tel que OM' = OM et mes(→OM, →OM') = θ","déplace tous les points d'un même vecteur","associe à M son symétrique par rapport à O uniquement","associe à M le point M' tel que →OM' = θ→OM"],a:0,exp:"Rotation"},
    {q:"Propriété : le cercle de centre I(a ; b) et de rayon R a pour équation…",c:["(x − a) + (y − b) = R","x² + y² = R","(x − a)² + (y − b)² = R²","(x + a)² + (y + b)² = R²"],a:2,exp:"Équation d'un cercle"},
    {q:"Propriété : la composée de deux translations de vecteurs →u et →v est…",c:["la translation de vecteur →u + →v","une rotation","une homothétie","la translation de vecteur →u − →v"],a:0,exp:"Composée de translations"},
  ],
});

/* ===== Résumés de cours — classe de 2nde C (guide du programme de seconde C, juillet 2009) =====
   Même structure que cours_2d.js. Le discriminant est hors programme : les trinômes se traitent par
   zéros évidents, factorisation et forme canonique. Balisage : <b>…</b> ; fraction {numérateur¦dénominateur}. */
window.MQ_COURS = window.MQ_COURS || {};
window.MQ_COURS['2nde C'] = Object.assign(window.MQ_COURS['2nde C'] || {}, {

'2C — Espace : positions relatives': {
 ess:[
  'Un <b>plan</b> est déterminé par : trois points <b>non alignés</b> ; ou une droite et un point extérieur ; ou deux droites sécantes ; ou deux droites parallèles distinctes. <b>Deux points ne suffisent pas</b> : ils donnent seulement une droite.',
  '<b>Deux droites</b> sont <b>coplanaires</b> si elles sont dans un même plan (elles sont alors sécantes ou parallèles). Sinon elles sont <b>non coplanaires</b> : aucun point commun et pas parallèles.',
  '<b>Droite (D) et plan (P)</b> : sécants si (D) ∩ (P) = {I} (un seul point) ; parallèles si (D) est contenue dans (P) ou disjointe de (P).',
  '<b>Deux plans</b> : confondus, disjoints, ou sécants suivant <b>une droite</b>. Confondus ou disjoints = <b>parallèles</b>.'],
 form:[
  'Trois points non alignés ⟹ un plan et un seul.',
  'Deux plans sécants ⟹ leur intersection est une droite.',
  'En perspective cavalière : le parallélisme est conservé ; une face du plan frontal est en vraie grandeur ; ce qui est caché se dessine en pointillés.'],
 ex:{q:'Dans le cube ABCDEFGH (ABCD en bas, EFGH en haut, E au-dessus de A, F au-dessus de B, G au-dessus de C), les droites (AB) et (FG) sont-elles coplanaires ?',
  st:['(AB) est dans le plan du bas. (FG) est dans le plan du haut : ces deux plans n\'ont aucun point commun, donc (AB) et (FG) ne se coupent pas.',
      '(FG) est parallèle à (BC) (côtés opposés du rectangle BCGF) et (BC) n\'est pas parallèle à (AB). Donc (FG) et (AB) ne sont pas parallèles.',
      'Ni sécantes, ni parallèles : aucun plan ne les contient toutes les deux.'],
  r:'(AB) et (FG) sont <b>non coplanaires</b>.'},
 pieges:[
  'Dans l\'espace, deux droites qui ne se coupent pas ne sont <b>pas forcément parallèles</b>.',
  'Sur un dessin en perspective, deux traits qui se croisent ne se coupent pas forcément dans la réalité.',
  'Une droite contenue dans un plan est aussi dite <b>parallèle</b> à ce plan (contenue ou disjointe).'],
 mini:[
  {q:'Combien de plans passent par trois points non alignés ?', r:'<b>Un seul.</b>'},
  {q:'Que forme l\'intersection de deux plans sécants ?', r:'<b>Une droite.</b>'}],
 chk:[]
},

'2C — Espace : parallélisme': {
 ess:[
  'Par un point de l\'espace, il passe <b>une et une seule</b> droite parallèle à une droite donnée. Deux droites parallèles à une même troisième sont parallèles entre elles.',
  'Si deux droites sont parallèles, tout plan qui coupe l\'une <b>coupe aussi l\'autre</b> (preuve par l\'absurde).',
  'Une droite est parallèle à un plan <b>si et seulement si</b> elle est parallèle à une droite de ce plan.',
  'Deux plans sont parallèles si l\'un contient <b>deux droites sécantes</b> parallèles à l\'autre plan.'],
 form:[
  'Par un point, il passe un et un seul plan parallèle à un plan donné ; deux plans parallèles à un même troisième sont parallèles entre eux.',
  'Deux plans parallèles coupés par un troisième plan : les droites d\'intersection sont <b>parallèles</b>.',
  'Une droite parallèle à deux plans sécants est parallèle à <b>leur droite d\'intersection</b>.',
  'Plans parallèles : toute droite qui coupe l\'un coupe l\'autre ; toute droite parallèle à l\'un est parallèle à l\'autre.'],
 ex:{q:'Dans le cube ABCDEFGH, montrer que la droite (EG) est parallèle au plan (ABCD).',
  st:['EACG est un rectangle (deux arêtes verticales égales et parallèles). Ses côtés opposés [EG] et [AC] sont donc parallèles : (EG) ∥ (AC).',
      '(AC) est une droite du plan (ABCD), et (EG) n\'est pas contenue dans ce plan (elle est dans le plan du haut).',
      'Une droite parallèle à une droite d\'un plan est parallèle à ce plan.'],
  r:'(EG) ∥ (ABCD).'},
 pieges:[
  'La droite de départ doit être <b>dans le plan</b> : être parallèle à une droite quelconque de l\'espace ne suffit pas.',
  'Deux droites parallèles à un même plan ne sont pas forcément parallèles entre elles.',
  'Pour deux plans, il faut <b>deux droites sécantes</b> (une seule droite ne suffit pas).'],
 mini:[
  {q:'Par un point extérieur à une droite D, combien de droites parallèles à D ?', r:'<b>Une seule.</b>'},
  {q:'Deux plans parallèles sont coupés par un troisième plan. Que dire des droites d\'intersection ?', r:'Elles sont <b>parallèles</b>.'}],
 chk:[]
},

'2C — Logique & raisonnement': {
 ess:[
  'Une <b>proposition</b> est un énoncé soit vrai, soit faux. Sa <b>négation</b> « non P » est vraie quand P est fausse : la négation de x > 3 est x ≤ 3.',
  '« P <b>et</b> Q » est vraie si les deux sont vraies. « P <b>ou</b> Q » est vraie si <b>au moins une</b> est vraie (le « ou » est inclusif).',
  '<b>P ⟹ Q</b> (« si P alors Q »). Sa <b>réciproque</b> est Q ⟹ P. Sa <b>contraposée</b> est (non Q) ⟹ (non P) : elle est <b>toujours équivalente</b> à P ⟹ Q.',
  '<b>P ⟺ Q</b> signifie P ⟹ Q <b>et</b> Q ⟹ P.',
  '<b>Raisonnement par l\'absurde</b> : pour prouver P, on suppose non P et on arrive à une contradiction. <b>Un seul contre-exemple</b> suffit pour prouver qu\'une affirmation est fausse.'],
 form:[
  'Contraposée de P ⟹ Q : non Q ⟹ non P (équivalente).',
  'Réciproque de P ⟹ Q : Q ⟹ P (pas équivalente en général).'],
 ex:{q:'Propriété : « Si n est un multiple de 4, alors n est pair ». Écris sa réciproque et sa contraposée. Sont-elles vraies ?',
  st:['Réciproque : « Si n est pair, alors n est un multiple de 4 ».',
      'Contre-exemple : n = 6 est pair mais 6 n\'est pas un multiple de 4. La réciproque est <b>fausse</b>.',
      'Contraposée : « Si n n\'est pas pair (n impair), alors n n\'est pas un multiple de 4 ». Elle a la même valeur que la propriété de départ, qui est vraie.'],
  r:'Réciproque <b>fausse</b> (contre-exemple 6) ; contraposée <b>vraie</b>.'},
 pieges:[
  'Confondre <b>réciproque</b> et <b>contraposée</b> : seule la contraposée est équivalente à l\'implication.',
  'Croire qu\'une implication vraie a toujours une réciproque vraie (« carré ⟹ losange » est vraie, mais « losange ⟹ carré » est fausse).',
  'Vérifier sur quelques exemples ne <b>prouve</b> pas une propriété générale ; un contre-exemple, lui, la détruit.'],
 mini:[
  {q:'Quelle est la contraposée de « P ⟹ Q » ?', r:'<b>non Q ⟹ non P</b>'},
  {q:'Quelle est la négation de « x > 3 » ?', r:'<b>x ≤ 3</b>'}],
 chk:[['[4,8,12,16].every(n=>n%2===0)','true'],['6%2===0&&6%4!==0','true']]
},

'2C — Calculs dans ℝ': {
 ess:[
  '<b>Intervalles</b> : [a ; b] contient a et b ; ]a ; b[ ne les contient pas ; [2 ; +∞[ est l\'ensemble des x tels que x ≥ 2. Les symboles −∞ et +∞ <b>ne sont pas des réels</b> : le crochet est toujours ouvert de leur côté.',
  'Pour une partie A de ℝ : un <b>majorant</b> est un réel M tel que M ≥ x pour tout x de A ; un <b>minorant</b> est un réel m tel que m ≤ x pour tout x de A. Le <b>maximum</b> est un majorant qui <b>appartient à A</b> ; le minimum, un minorant qui appartient à A.',
  '<b>Partie entière</b> E(x) : le plus grand entier relatif ≤ x, donc E(x) ≤ x < E(x) + 1. Ex. : E(4,99) = 4 et E(−2,3) = <b>−3</b>.',
  '<b>Notation scientifique</b> : a × 10ᵖ avec 1 ≤ a < 10. <b>Approximation</b> décimale d\'ordre p : par défaut (on coupe), par excès (on coupe puis on ajoute 1 au dernier chiffre, si le nombre n\'est pas déjà décimal d\'ordre p), ou <b>arrondi</b> (la valeur la plus proche).'],
 form:[
  'Encadrements : si a ≤ x ≤ b et c ≤ y ≤ d alors <b>a + c ≤ x + y ≤ b + d</b> et <b>a − d ≤ x − y ≤ b − c</b>.',
  'Pour des nombres positifs : ac ≤ xy ≤ bd.'],
 ex:{q:'On sait que 2 ≤ a ≤ 3 et 1 ≤ b ≤ 4. Encadre a + b, a − b et ab.',
  st:['Somme : on additionne les bornes : 2 + 1 ≤ a + b ≤ 3 + 4, soit 3 ≤ a + b ≤ 7.',
      'Différence : le plus petit s\'obtient avec le plus petit a et le plus grand b : 2 − 4 ≤ a − b ≤ 3 − 1, soit −2 ≤ a − b ≤ 2.',
      'Produit (nombres positifs) : 2 × 1 ≤ ab ≤ 3 × 4, soit 2 ≤ ab ≤ 12.'],
  r:'<b>3 ≤ a + b ≤ 7</b> ; <b>−2 ≤ a − b ≤ 2</b> ; <b>2 ≤ ab ≤ 12</b>.'},
 pieges:[
  'Pour <b>a − b</b>, on ne soustrait pas « borne à borne » : 2 − 1 ≤ a − b ≤ 3 − 4 est faux. Il faut croiser les bornes.',
  'L\'intervalle ]0 ; 1[ n\'a <b>pas de maximum</b> : 1 est un majorant mais il n\'est pas dans l\'intervalle.',
  'E(−2,3) = −3 et non −2 : la partie entière n\'est pas « ce qu\'il y a avant la virgule ».'],
 mini:[
  {q:'Quelle est la partie entière de −2,3 ?', r:'<b>−3</b>'},
  {q:'Écris 45 000 en notation scientifique.', r:'<b>4,5 × 10⁴</b>'}],
 chk:[['2+1','3'],['3+4','7'],['2-4','-2'],['3-1','2'],['2*1','2'],['3*4','12'],['Math.floor(-2.3)','-3'],['Math.floor(4.99)','4'],['4.5*10**4','45000']]
},

'2C — Valeur absolue & distance': {
 ess:[
  '<b>|x| = x</b> si x ≥ 0 et <b>|x| = −x</b> si x < 0. C\'est la <b>distance de x à 0</b> : |x| = d(x , 0). Aussi |x| = le plus grand des deux nombres x et −x. Toujours |x| ≥ 0.',
  '<b>Distance</b> de deux réels : d(a , b) = <b>|a − b|</b>.',
  '|ab| = |a| × |b| ; <b>inégalité triangulaire</b> : |a + b| ≤ |a| + |b| ; |a| = |b| ⟺ a = b ou a = −b ; |x| = 0 ⟺ x = 0.',
  '<b>Intervalles</b> : |x − a| ≤ r ⟺ a − r ≤ x ≤ a + r (x est à moins de r de a). |x − a| ≥ r ⟺ x ≤ a − r ou x ≥ a + r.',
  'x₀ est une <b>valeur approchée</b> de x à ε près si |x − x₀| ≤ ε.'],
 form:[
  '|x − a| < r ⟺ x ∈ ]a − r ; a + r[    [1 ; 7] se code |x − 4| ≤ 3 (centre 4, rayon 3).'],
 ex:{q:'Résoudre dans ℝ l\'inéquation |x − 2| ≥ 3.',
  st:['|x − 2| est la distance de x à 2. On cherche les x situés à une distance au moins égale à 3 de 2.',
      'Donc x − 2 ≤ −3 ou x − 2 ≥ 3.',
      'D\'où x ≤ −1 ou x ≥ 5.'],
  r:'S = <b>]−∞ ; −1] ∪ [5 ; +∞[</b>.'},
 pieges:[
  'Écrire |x − 2| ≥ 3 ⟺ −3 ≤ x − 2 ≤ 3 : c\'est le cas « ≤ ». Pour « ≥ », on a deux morceaux séparés par « ou ».',
  '|3 − π| = π − 3 (et non 3 − π, qui est négatif) : si l\'intérieur est négatif, on change de signe.',
  '|a + b| n\'est pas égal à |a| + |b| en général : |−2 + 3| = 1 mais |−2| + |3| = 5.'],
 mini:[
  {q:'Calcule |3 − π| sans valeur absolue.', r:'<b>π − 3</b>'},
  {q:'Résous |x − 4| ≤ 3.', r:'<b>x ∈ [1 ; 7]</b>'}],
 chk:[['Math.abs(-1-2)>=3&&Math.abs(5-2)>=3&&Math.abs(0-2)<3&&Math.abs(6-2)>=3','true'],['Math.abs(3-Math.PI)','Math.PI-3'],['Math.abs(1-4)<=3&&Math.abs(7-4)<=3&&Math.abs(0-4)>3&&Math.abs(8-4)>3','true'],['Math.abs(-2+3)','1'],['Math.abs(-2)+Math.abs(3)','5']]
},

'2C — Généralités sur les fonctions': {
 ess:[
  'Une <b>fonction</b> f définie sur D associe à chaque x de D <b>un unique réel</b> f(x). Pour l\'<b>ensemble de définition</b> : un dénominateur ne doit pas être nul ; sous une racine carrée il faut un nombre ≥ 0.',
  '<b>Image</b> de a : le réel f(a). <b>Antécédent</b> de b : un x tel que f(x) = b. Sur la courbe : l\'image est une <b>ordonnée</b>, l\'antécédent une <b>abscisse</b>.',
  '<b>f = g</b> si elles ont le même ensemble de définition et f(x) = g(x) pour tout x. f et g <b>coïncident sur I</b> si elles sont définies sur I et égales sur I (ex. {x² − 1¦x − 1} et x + 1 coïncident sur ℝ ∖ {1}).',
  '<b>Sens de variation</b> : pour a < b dans I, f est <b>croissante</b> si f(a) ≤ f(b), <b>strictement croissante</b> si f(a) < f(b), <b>décroissante</b> si f(a) ≥ f(b), <b>constante</b> si f(a) = f(b).',
  '<b>Maximum</b> M atteint en a sur I : f(x) ≤ f(a) = M pour tout x de I. Le <b>tableau de variations</b> résume l\'ensemble de définition, les variations, les extremums.'],
 form:[
  'f(x) = {1¦x − 3} : définie sur ℝ ∖ {3}.    f(x) = √(x − 2) : définie sur [2 ; +∞[.'],
 ex:{q:'Détermine l\'ensemble de définition de f(x) = {√(x − 2)¦x − 3} puis calcule f(6).',
  st:['Condition sous la racine : x − 2 ≥ 0, donc x ≥ 2.',
      'Condition sur le dénominateur : x − 3 ≠ 0, donc x ≠ 3.',
      'On garde x ≥ 2 en retirant 3 : D = [2 ; 3[ ∪ ]3 ; +∞[.',
      'f(6) = {√4¦3} = {2¦3}.'],
  r:'D = <b>[2 ; 3[ ∪ ]3 ; +∞[</b> et f(6) = <b>{2¦3}</b>.'},
 pieges:[
  'Oublier une des deux conditions : ici il faut x ≥ 2 <b>et</b> x ≠ 3.',
  'Confondre <b>image</b> et <b>antécédent</b> : les antécédents de 4 par x² sont <b>−2 et 2</b>, l\'image de 4 est 16.',
  '« Croissante » (≤) et « strictement croissante » (<) ne sont pas la même chose.'],
 mini:[
  {q:'Ensemble de définition de f(x) = {1¦x − 3} ?', r:'<b>ℝ ∖ {3}</b>'},
  {q:'Quels sont les antécédents de 9 par f(x) = x² ?', r:'<b>−3 et 3</b>'}],
 chk:[['Math.sqrt(6-2)/(6-3)','2/3'],['Math.sqrt(2-2)/(2-3)','0'],['(-3)**2','9'],['3**2','9']]
},

'2C — Applications': {
 ess:[
  'Une <b>application</b> f de E vers F associe à chaque élément de E <b>un unique</b> élément de F.',
  '<b>Injective</b> : f(a) = f(b) ⟹ a = b (deux éléments différents ont des images différentes). <b>Surjective</b> : tout élément de F a <b>au moins un antécédent</b> dans E.',
  '<b>Bijective</b> = injective <b>et</b> surjective : tout y de F a un <b>unique</b> antécédent. La <b>bijection réciproque</b> f⁻¹ va de F vers E et associe à y cet antécédent.',
  'Pour trouver f⁻¹ : on résout y = f(x) en x.'],
 form:[
  'Contraposée de « f(a) = f(b) ⟹ a = b » : a ≠ b ⟹ f(a) ≠ f(b).',
  'x ↦ x² de ℝ vers ℝ n\'est ni injective ni surjective ; de [0 ; +∞[ vers [0 ; +∞[ elle est bijective (réciproque √).'],
 ex:{q:'Montrer que f : ℝ → ℝ, x ↦ 3x − 2 est bijective et trouver f⁻¹.',
  st:['Injective : si f(a) = f(b), alors 3a − 2 = 3b − 2, donc 3a = 3b, donc a = b.',
      'Surjective : soit y un réel. On résout 3x − 2 = y, ce qui donne x = {y + 2¦3}, qui est bien un réel : y a un antécédent.',
      'Donc f est bijective, et son antécédent unique donne f⁻¹(y) = {y + 2¦3}.'],
  r:'f est <b>bijective</b> et <b>f⁻¹(x) = {x + 2¦3}</b>.'},
 pieges:[
  'f(x) = x² n\'est pas injective sur ℝ : f(−1) = f(1) avec −1 ≠ 1.',
  'f(x) = x² de ℝ vers ℝ n\'est pas surjective : −1 n\'a pas d\'antécédent. La surjectivité dépend de l\'ensemble d\'arrivée F.',
  'Ne pas confondre f⁻¹ (réciproque) avec {1¦f} (inverse).'],
 mini:[
  {q:'f(x) = x² (de ℝ vers ℝ) est-elle injective ? Pourquoi ?', r:'<b>Non</b> : f(−1) = f(1) avec −1 ≠ 1.'},
  {q:'Quelle est la réciproque de f(x) = 2x + 1 (de ℝ vers ℝ) ?', r:'<b>f⁻¹(x) = {x − 1¦2}</b>'}],
 chk:[['3*((5+2)/3)-2','5'],['(3*4-2+2)/3','4'],['(-1)**2','1**2'],['2*((7-1)/2)+1','7']]
},

'2C — Fonctions de référence': {
 ess:[
  '<b>x ↦ x²</b> : décroissante sur ]−∞ ; 0], croissante sur [0 ; +∞[ ; courbe symétrique par rapport à l\'<b>axe des ordonnées</b> (f(−x) = f(x)).',
  '<b>x ↦ x³</b> : strictement croissante sur ℝ ; courbe symétrique par rapport à l\'<b>origine</b> (f(−x) = −f(x)).',
  '<b>x ↦ √x</b> : définie sur [0 ; +∞[, croissante. <b>x ↦ {1¦x}</b> : définie sur ℝ*, décroissante sur ]−∞ ; 0[ et sur ]0 ; +∞[ <b>séparément</b> ; sa courbe est une <b>hyperbole</b>.',
  '<b>x ↦ |x|</b> : décroissante sur ]−∞ ; 0], croissante sur [0 ; +∞[. <b>Partie entière</b> : constante sur chaque [n ; n + 1[.',
  'Pour a > 0, on compare a, a², a³, √a, {1¦a} selon la position de a par rapport à 1.'],
 form:[
  'Si 0 < a < 1 : a³ < a² < a < √a < {1¦a}.    Si a > 1 : a³ > a² > a > √a > {1¦a}.    Si a = 1 : tous égaux à 1.',
  '|x − 1| = x − 1 si x ≥ 1 ; |x − 1| = 1 − x si x < 1.'],
 ex:{q:'Range par ordre croissant : 0,5² ; 0,5³ ; √0,5 ; {1¦0,5}.',
  st:['Ici a = 0,5 est entre 0 et 1, donc a³ < a² < a < √a < {1¦a}.',
      'Calcul : 0,5² = 0,25 ; 0,5³ = 0,125 ; √0,5 ≈ 0,707 ; {1¦0,5} = 2.',
      'On range : 0,125 < 0,25 < 0,707 < 2.'],
  r:'<b>0,5³ < 0,5² < √0,5 < {1¦0,5}</b>'},
 pieges:[
  'Pour a entre 0 et 1, a² est <b>plus petit</b> que a (0,5² = 0,25) : l\'ordre est inversé par rapport à a > 1.',
  '{1¦x} est décroissante sur chaque intervalle, mais <b>pas sur ℝ* entier</b> : {1¦−1} = −1 < {1¦1} = 1.',
  'x² n\'est pas croissante sur ℝ : (−3)² > (−2)² alors que −3 < −2.'],
 mini:[
  {q:'Sur quel intervalle x ↦ x² est-elle décroissante ?', r:'<b>]−∞ ; 0]</b>'},
  {q:'Écris |x − 1| sans valeur absolue.', r:'<b>x − 1 si x ≥ 1 ; 1 − x si x < 1</b>'}],
 chk:[['0.5**2','0.25'],['0.5**3','0.125'],['Math.sqrt(0.5)>0.7&&Math.sqrt(0.5)<0.71','true'],['1/0.5','2'],['0.5**3<0.5**2&&0.5**2<Math.sqrt(0.5)&&Math.sqrt(0.5)<1/0.5','true'],['(-3)**2>(-2)**2','true']]
},

'2C — Équations & inéquations dans ℝ': {
 ess:[
  'Deux équations sont <b>équivalentes</b> si elles ont le même ensemble de solutions. On transforme sans changer les solutions.',
  '<b>Inéquation du 1er degré</b> : si tu multiplies ou divises par un réel <b>négatif</b>, le sens de l\'inégalité <b>change</b>. Ex. : −2x + 4 ≥ 0 ⟹ −2x ≥ −4 ⟹ x ≤ 2.',
  '<b>Valeur absolue</b> : |A| = b (b ≥ 0) ⟺ A = b ou A = −b ; |x| < a ⟺ −a < x < a ; |x| ≥ a ⟺ x ≤ −a ou x ≥ a. Si b < 0, |A| = b n\'a aucune solution.',
  '<b>Second degré</b> (sans discriminant, hors programme) : x² = a, ou <b>factorisation</b> (x² − 2x = x(x − 2) ; x² − 5x + 6 = (x − 2)(x − 3)), puis « un produit est nul si l\'un des facteurs est nul ».',
  '<b>Quotient ou produit</b> : on factorise puis on fait un <b>tableau de signes</b>. Une valeur qui annule le dénominateur est <b>toujours exclue</b>.'],
 form:[
  'A × B = 0 ⟺ A = 0 ou B = 0.    x² + 4 = 0 : pas de solution dans ℝ (un carré est ≥ 0).'],
 ex:{q:'Résoudre dans ℝ : {x − 1¦x + 2} ≥ 0.',
  st:['x − 1 s\'annule en 1 ; x + 2 s\'annule en −2 (valeur interdite).',
      'Pour x < −2 : numérateur négatif, dénominateur négatif, quotient positif.',
      'Pour −2 < x < 1 : numérateur négatif, dénominateur positif, quotient négatif. Pour x > 1 : quotient positif. En x = 1 le quotient vaut 0 (accepté).',
      'On garde les zones où le quotient est ≥ 0 : x < −2 ou x ≥ 1.'],
  r:'S = <b>]−∞ ; −2[ ∪ [1 ; +∞[</b>'},
 pieges:[
  'Oublier de retourner le sens quand on divise par un nombre <b>négatif</b>.',
  'Mettre −2 avec un crochet fermé : il annule le dénominateur, il est <b>exclu</b>.',
  '|x − 1| = −2 n\'a <b>aucune solution</b> : une valeur absolue n\'est jamais négative.',
  'Diviser par x dans x² = 2x fait perdre la solution x = 0 : il faut factoriser x(x − 2) = 0.'],
 mini:[
  {q:'Résous |x − 3| = 5.', r:'x − 3 = 5 ou x − 3 = −5 : S = <b>{−2 ; 8}</b>'},
  {q:'Résous x² − 5x + 6 = 0.', r:'(x − 2)(x − 3) = 0 : S = <b>{2 ; 3}</b>'}],
 chk:[['(-3-1)/(-3+2)>0','true'],['(0-1)/(0+2)<0','true'],['(1-1)/(1+2)','0'],['(2-1)/(2+2)>0','true'],['Math.abs(8-3)','5'],['Math.abs(-2-3)','5'],['2**2-5*2+6','0'],['3**2-5*3+6','0']]
},

'2C — Statistiques': {
 ess:[
  'Pour une série de <b>N</b> données : <b>effectif</b> nᵢ de chaque valeur xᵢ ; <b>fréquence</b> {nᵢ¦N}. Les effectifs (ou fréquences) <b>cumulés croissants</b> s\'obtiennent en additionnant au fur et à mesure, valeurs rangées dans l\'ordre croissant ; le dernier effectif cumulé vaut N (fréquence 1).',
  '<b>Mode</b> : valeur d\'effectif maximal. <b>Étendue</b> : plus grande valeur − plus petite. <b>Médiane</b> : valeur qui partage la série ordonnée en deux groupes de même effectif ; si N est impair, c\'est la valeur de rang {N + 1¦2}.',
  '<b>Quartiles</b> : Q₁ est la <b>plus petite</b> valeur telle qu\'au moins 25 % des données lui soient inférieures ou égales ; Q₃ : au moins 75 % ; la médiane Q₂ : 50 %.',
  '<b>Moyenne</b> x̄ = {Σ nᵢxᵢ¦N}. <b>Variance</b> V = moyenne des carrés des écarts à la moyenne. <b>Écart-type</b> σ = √V. <b>Écart moyen absolu</b> = moyenne des distances à la moyenne.',
  '<b>Graphiques</b> : histogramme (caractère continu, classes), diagramme cumulatif (lecture de la médiane et des quartiles). Pour des classes, on utilise les <b>centres des classes</b>.'],
 form:[
  'V = {Σ nᵢ(xᵢ − x̄)²¦N}    σ = √V'],
 ex:{q:'Pour la série 1 ; 3 ; 5 ; 7, calcule la moyenne, la médiane, l\'étendue, la variance et l\'écart-type.',
  st:['Moyenne : {1 + 3 + 5 + 7¦4} = 4. Étendue : 7 − 1 = 6.',
      'Médiane : N = 4 est pair, on prend la valeur au milieu des deux valeurs centrales : {3 + 5¦2} = 4.',
      'Écarts à la moyenne : −3 ; −1 ; 1 ; 3. Carrés : 9 ; 1 ; 1 ; 9. Somme 20.',
      'Variance V = {20¦4} = 5, écart-type σ = √5 ≈ 2,24.'],
  r:'x̄ = <b>4</b> ; médiane = <b>4</b> ; étendue = <b>6</b> ; V = <b>5</b> ; σ = <b>√5 ≈ 2,24</b>.'},
 pieges:[
  'Oublier de <b>ranger</b> les valeurs dans l\'ordre croissant avant de chercher la médiane.',
  'Confondre variance et écart-type : σ est la <b>racine carrée</b> de V.',
  'Dans une série en classes, utiliser les bornes au lieu des <b>centres</b> pour la moyenne.'],
 mini:[
  {q:'N = 19 : de quel rang est la médiane ?', r:'{19 + 1¦2} = <b>10e valeur</b>.'},
  {q:'Calcule la moyenne de 2 ; 4 ; 9.', r:'{2 + 4 + 9¦3} = <b>5</b>'}],
 chk:[['(1+3+5+7)/4','4'],['(3+5)/2','4'],['7-1','6'],['(9+1+1+9)/4','5'],['Math.sqrt(5)','2.23606797749979'],['(19+1)/2','10'],['(2+4+9)/3','5']]
},

'2C — Polynômes & fractions rationnelles': {
 ess:[
  'Un <b>zéro</b> (ou <b>racine</b>) d\'un polynôme P est un réel a tel que <b>P(a) = 0</b>.',
  'Si a est un zéro de P (degré n ≥ 1), alors <b>P(x) = (x − a) Q(x)</b>, Q de degré n − 1. On trouve Q par division euclidienne ou en identifiant les coefficients.',
  '<b>Second degré</b> : on met ax² + bx + c sous <b>forme canonique</b>, ex. x² + 4x + 1 = (x + 2)² − 3, puis on factorise avec A² − B² = (A − B)(A + B) quand c\'est possible. <b>Le discriminant est hors programme.</b>',
  'Une <b>fraction rationnelle</b> est le quotient de deux polynômes ; elle n\'existe pas là où le dénominateur est nul. Pour x ≠ 1 : {x² − 1¦x − 1} = x + 1.',
  '<b>Binôme</b> ax + b (a ≠ 0) : du signe de a à droite de −{b¦a}, du signe contraire à gauche. Pour un produit ou un quotient : tableau de signes.'],
 form:[
  'x² − 5x + 6 = (x − 2)(x − 3)    x² − 4x + 4 = (x − 2)²    (x − 1)(x + 3) < 0 sur ]−3 ; 1['],
 ex:{q:'Factoriser P(x) = x³ − x² − 4x + 4 puis résoudre P(x) = 0.',
  st:['Zéro évident : P(1) = 1 − 1 − 4 + 4 = 0. Donc P(x) = (x − 1) Q(x), avec Q de degré 2.',
      'On trouve Q(x) = x² − 4. Vérification : (x − 1)(x² − 4) = x³ − 4x − x² + 4 = x³ − x² − 4x + 4 ✔.',
      'x² − 4 = (x − 2)(x + 2). Donc P(x) = (x − 1)(x − 2)(x + 2).',
      'P(x) = 0 si l\'un des facteurs est nul.'],
  r:'P(x) = <b>(x − 1)(x − 2)(x + 2)</b> ; S = <b>{−2 ; 1 ; 2}</b>.'},
 pieges:[
  'Avant de diviser par (x − a), teste que P(a) = 0 : sinon (x − a) ne divise pas P.',
  'Ensemble de définition de {x + 1¦x² − 1} : on retire <b>−1 et 1</b>.',
  'On ne simplifie une fraction qu\'après l\'avoir factorisée ; la valeur interdite reste interdite même après simplification.'],
 mini:[
  {q:'Quel est le quotient de x² + 3x + 2 par (x + 1) ?', r:'<b>x + 2</b> car (x + 1)(x + 2) = x² + 3x + 2.'},
  {q:'Écris x² + 4x + 1 sous forme canonique.', r:'<b>(x + 2)² − 3</b>'}],
 chk:[['1-1-4+4','0'],['8-4-8+4','0'],['-8-4+8+4','0'],['(3-1)*(3**2-4)','3**3-3**2-4*3+4'],['(3+1)*(3+2)','3**2+3*3+2'],['(3+2)**2-3','3**2+4*3+1']]
},

'2C — Vecteurs du plan': {
 ess:[
  'Pour un point O et un vecteur u⃗ donnés, il existe <b>un unique</b> point M tel que OM⃗ = u⃗. Et λu⃗ = 0⃗ ⟺ λ = 0 <b>ou</b> u⃗ = 0⃗.',
  '<b>Combinaison linéaire</b> de u⃗ et v⃗ : un vecteur αu⃗ + βv⃗ (α, β réels). u⃗ et v⃗ sont <b>colinéaires</b> s\'il existe un réel λ tel que u⃗ = λv⃗ ou v⃗ = λu⃗.',
  'Une <b>base</b> est un couple de vecteurs <b>non colinéaires</b>. Si u⃗ et v⃗ ne sont pas colinéaires et αu⃗ + βv⃗ = 0⃗, alors α = β = 0. Si u⃗ = x i⃗ + y j⃗, ses coordonnées sont (x ; y).',
  '<b>Déterminant</b> de u⃗(x ; y) et v⃗(x′ ; y′) : <b>xy′ − x′y</b>. Il vaut 0 si et seulement si u⃗ et v⃗ sont colinéaires.',
  'M ∈ [AB] ⟺ AM⃗ = t AB⃗ avec 0 ≤ t ≤ 1 ; M ∈ [AB) ⟺ t ≥ 0. Le centre de gravité G de ABC vérifie GA⃗ + GB⃗ + GC⃗ = 0⃗.'],
 form:[
  'Somme : (x ; y) + (x′ ; y′) = (x + x′ ; y + y′).    Si A(xA ; yA) et B(xB ; yB) : AB⃗(xB − xA ; yB − yA).'],
 ex:{q:'Les points A(1 ; 2), B(3 ; 6) et C(4 ; 8) sont-ils alignés ?',
  st:['Trois points sont alignés si AB⃗ et AC⃗ sont colinéaires.',
      'AB⃗(3 − 1 ; 6 − 2) = (2 ; 4) et AC⃗(4 − 1 ; 8 − 2) = (3 ; 6).',
      'Déterminant : 2 × 6 − 3 × 4 = 12 − 12 = 0.'],
  r:'Le déterminant est nul : A, B, C sont <b>alignés</b>.'},
 pieges:[
  'Déterminant : c\'est xy′ − x′y (<b>produits en croix</b>), pas xx′ − yy′.',
  'Coordonnées de AB⃗ : « arrivée − départ » (B − A), pas A − B.',
  'Pour montrer un alignement, utilise <b>deux vecteurs ayant un point commun</b> (AB⃗ et AC⃗).'],
 mini:[
  {q:'u⃗(3 ; 6) et v⃗(2 ; 4) sont-ils colinéaires ?', r:'3 × 4 − 2 × 6 = 0 : <b>oui</b>.'},
  {q:'A(1 ; 2), B(4 ; 0). Coordonnées de AB⃗ ?', r:'<b>(3 ; −2)</b>'}],
 chk:[['2*6-3*4','0'],['3*4-2*6','0'],['4-1','3'],['0-2','-2'],['3-1','2'],['6-2','4'],['1*5-3*2','-1']]
},

'2C — Droites du plan': {
 ess:[
  '<b>Représentation paramétrique</b> de la droite passant par A(x₀ ; y₀) de vecteur directeur u⃗(a ; b) : <b>x = x₀ + at ; y = y₀ + bt</b> (t ∈ ℝ). M ∈ (D) ⟺ AM⃗ et u⃗ colinéaires.',
  '<b>Équation cartésienne</b> : ax + by + c = 0 avec (a ; b) ≠ (0 ; 0). Un <b>vecteur directeur</b> est (−b ; a) ; un <b>vecteur normal</b> est (a ; b).',
  'Pour tout point A et tout vecteur non nul n⃗, il existe une et une seule droite passant par A de vecteur normal n⃗. Deux droites sont <b>perpendiculaires</b> ⟺ leurs vecteurs normaux sont orthogonaux.',
  '<b>Distance</b> d\'un point M₀(x₀ ; y₀) à la droite ax + by + c = 0 (repère orthonormé) : d = {|ax₀ + by₀ + c|¦√(a² + b²)}.'],
 form:[
  'Droite par A de vecteur normal n⃗(a ; b) : a(x − xA) + b(y − yA) = 0.    Pour passer du paramétrique au cartésien, on <b>élimine t</b>.'],
 ex:{q:'Donne une représentation paramétrique de la droite passant par A(1 ; −3) de vecteur directeur u⃗(2 ; 1), puis une équation cartésienne.',
  st:['x = 1 + 2t ; y = −3 + t (t ∈ ℝ). Pour t = 2 : le point (5 ; −1).',
      'On élimine t : de la 2e équation, t = y + 3.',
      'On remplace dans la 1re : x = 1 + 2(y + 3) = 2y + 7, donc x − 2y − 7 = 0.',
      'Vérification : A(1 ; −3) : 1 + 6 − 7 = 0 ✔ et (5 ; −1) : 5 + 2 − 7 = 0 ✔.'],
  r:'x = 1 + 2t ; y = −3 + t, soit <b>x − 2y − 7 = 0</b>.'},
 pieges:[
  'Confondre <b>vecteur directeur</b> (−b ; a) et <b>vecteur normal</b> (a ; b) : ils sont orthogonaux.',
  'Dans la formule de distance, on met la <b>valeur absolue</b> au numérateur et √(a² + b²) au dénominateur.',
  'Dans la représentation paramétrique, les coefficients de t sont les coordonnées du <b>vecteur directeur</b>, pas du point.'],
 mini:[
  {q:'Distance de l\'origine à la droite 3x + 4y − 10 = 0 ?', r:'{|−10|¦√25} = <b>2</b>'},
  {q:'Un vecteur normal à 3x − 2y + 5 = 0 ?', r:'<b>(3 ; −2)</b>'}],
 chk:[['1+2*2','5'],['-3+2','-1'],['1+6-7','0'],['5+2-7','0'],['10/Math.sqrt(3**2+4**2)','2'],['(1+2*((-1)+3))','5']]
},

'2C — Homothétie & transformations': {
 ess:[
  'L\'<b>homothétie</b> h(O, k) (k ≠ 0) associe à M le point M′ tel que <b>OM′⃗ = k OM⃗</b>. O, M et M′ sont <b>alignés</b>. Le seul point invariant (si k ≠ 1) est O. k = 1 : identité ; k = −1 : symétrie centrale de centre O. La réciproque de h(O, k) est h(O, {1¦k}).',
  '<b>Propriété fondamentale</b> : M′N′⃗ = k MN⃗. Donc les longueurs sont multipliées par <b>|k|</b> et les aires par <b>k²</b>.',
  'Une homothétie conserve l\'alignement, le milieu, le parallélisme, l\'orthogonalité et les angles. L\'image d\'une droite est une droite parallèle.',
  '<b>Composées</b> : deux translations de vecteurs u⃗ et v⃗ donnent la translation de vecteur u⃗ + v⃗ ; deux symétries centrales de centres distincts donnent une translation ; deux symétries orthogonales d\'axes parallèles donnent une translation, d\'axes perpendiculaires la symétrie centrale de leur point d\'intersection.'],
 form:[
  'OM′ = |k| × OM.    Aire′ = k² × Aire.    Si S_I[S_J(M)] = N (I ≠ J) alors MN⃗ = 2 JI⃗.'],
 ex:{q:'Le plan est muni d\'un repère d\'origine O. h est l\'homothétie de centre O et de rapport −2. Déterminer les images de A(1 ; 3) et B(4 ; −1), puis comparer AB et A′B′.',
  st:['OA′⃗ = −2 OA⃗ : A′(−2 × 1 ; −2 × 3) = A′(−2 ; −6). De même B′(−8 ; 2).',
      'AB⃗(3 ; −4) donc AB = √(9 + 16) = 5.',
      'A′B′⃗(−8 + 2 ; 2 + 6) = (−6 ; 8) = −2 AB⃗ et A′B′ = √(36 + 64) = 10.'],
  r:'A′(−2 ; −6), B′(−8 ; 2) ; A′B′ = <b>10</b> = |−2| × AB.'},
 pieges:[
  'Les longueurs sont multipliées par |k| (positif), mais les <b>aires</b> par <b>k²</b>, pas par k.',
  'Avec un rapport négatif, M′ est de l\'<b>autre côté</b> de O par rapport à M (O est entre M et M′).',
  'Dans OM′⃗ = k OM⃗, ce sont des <b>vecteurs</b> : attention au signe de k.'],
 mini:[
  {q:'h(O, 3) envoie A sur A′ avec OA = 2 cm. Que vaut OA′ ?', r:'OA′ = |3| × 2 = <b>6 cm</b>.'},
  {q:'Un triangle d\'aire 5 cm² est transformé par h(O, −2). Quelle est l\'aire de l\'image ?', r:'5 × (−2)² = <b>20 cm²</b>.'}],
 chk:[['-2*1','-2'],['-2*3','-6'],['-2*4','-8'],['-2*(-1)','2'],['Math.hypot(3,-4)','5'],['Math.hypot(-6,8)','10'],['-8-(-2)','-6'],['2-(-6)','8'],['3*2','6'],['5*(-2)**2','20']]
},

'2C — Angles, radian & trigonométrie': {
 ess:[
  '<b>Radian</b> : mesure d\'un angle au centre qui intercepte un arc de longueur égale au rayon. <b>π rad = 180°</b>. Arc de rayon R et d\'angle α (rad) : <b>L = Rα</b>.',
  '<b>Orienter le plan</b> : le sens direct (positif) est le sens inverse des aiguilles d\'une montre. La <b>mesure principale</b> d\'un angle orienté est dans ]−π ; π] ; deux angles orientés sont égaux si leurs mesures principales le sont. mes(u⃗, v⃗) = −mes(v⃗, u⃗).',
  'Sur le <b>cercle trigonométrique</b> (rayon 1, sens direct) : <b>cos²α + sin²α = 1</b> ; tan α = {sin α¦cos α} ; 1 + tan²α = {1¦cos²α}.',
  '<b>Angles associés</b> : cos(−α) = cos α ; sin(−α) = −sin α ; cos(π − α) = −cos α ; sin(π − α) = sin α.',
  '<b>Dans un triangle ABC</b> (a = BC, b = CA, c = AB, R rayon du cercle circonscrit) : <b>{a¦sin A} = {b¦sin B} = {c¦sin C} = 2R</b> et aire <b>S = ½ bc sin A</b>.'],
 form:[
  'Valeurs : sin π/6 = ½ ; cos π/4 = {√2¦2} ; sin π/3 = {√3¦2} ; cos π/3 = ½ ; cos π/6 = {√3¦2}.',
  'Conversion : degrés → radians : × {π¦180}.    60° = {π¦3} rad ; 135° = {3π¦4} rad.'],
 ex:{q:'Dans ABC, AB = 5, AC = 4 et Â = 30° : calcule l\'aire. Dans un autre triangle A′B′C′, a = 6 et Â′ = 30° : calcule le rayon R du cercle circonscrit.',
  st:['Aire : S = ½ × AB × AC × sin Â = ½ × 5 × 4 × sin 30°.',
      'sin 30° = ½, donc S = ½ × 5 × 4 × ½ = 5.',
      'Pour R : 2R = {a¦sin A} = {6¦½} = 12, donc R = 6.'],
  r:'Aire = <b>5</b> ; R = <b>6</b>.'},
 pieges:[
  'Calculatrice en <b>degrés</b> ou en <b>radians</b> : vérifie le mode, et ne mélange pas 30 et {π¦6}.',
  'cos(π − α) = <b>−cos α</b> (et non cos α) ; en revanche sin(π − α) = sin α.',
  'Dans {a¦sin A}, le côté a est celui <b>en face</b> de l\'angle A.'],
 mini:[
  {q:'Convertis 3π/4 radians en degrés.', r:'{3 × 180¦4} = <b>135°</b>'},
  {q:'Que vaut cos(π − π/3) ?', r:'−cos({π¦3}) = <b>−{1¦2}</b>'}],
 chk:[['0.5*5*4*Math.sin(Math.PI/6)','5'],['6/Math.sin(Math.PI/6)/2','6'],['3*180/4','135'],['60*Math.PI/180','Math.PI/3'],['Math.cos(Math.PI-Math.PI/3)','-0.5'],['Math.cos(Math.PI/4)','Math.sqrt(2)/2'],['Math.sin(0.7)**2+Math.cos(0.7)**2','1']]
},

'2C — Produit scalaire': {
 ess:[
  '<b>Produit scalaire</b> : u⃗ ⋅ v⃗ = ‖u⃗‖ × ‖v⃗‖ × cos(u⃗, v⃗). Pour AB⃗ ⋅ AC⃗ : angle aigu ⟹ résultat <b>> 0</b> ; angle obtus ⟹ <b>< 0</b> ; angle droit ⟹ <b>0</b>.',
  '<b>Orthogonaux</b> : u⃗ ⋅ v⃗ = 0 (le vecteur nul est orthogonal à tout vecteur). Le <b>carré scalaire</b> u⃗² = ‖u⃗‖². Un vecteur <b>unitaire</b> a pour norme 1.',
  '<b>Propriétés</b> : u⃗ ⋅ v⃗ = v⃗ ⋅ u⃗ ; (u⃗ + v⃗)² = u⃗² + 2 u⃗ ⋅ v⃗ + v⃗² ; u⃗² − v⃗² = (u⃗ − v⃗) ⋅ (u⃗ + v⃗).',
  '<b>Dans une base orthonormée</b> : u⃗(x ; y) ⋅ v⃗(x′ ; y′) = <b>xx′ + yy′</b> et ‖u⃗‖ = <b>√(x² + y²)</b>.',
  '<b>Al-Kashi</b> : a² = b² + c² − 2bc cos Â. <b>Médiane</b> (A′ milieu de [BC]) : AB² + AC² = 2AA′² + {BC²¦2}.'],
 form:[
  'Par projection : AB⃗ ⋅ AC⃗ = AB × AH (mesures algébriques), H projeté orthogonal de C sur (AB).'],
 ex:{q:'Dans ABC, AB = 3, AC = 4 et Â = 60°. Calcule AB⃗ ⋅ AC⃗ puis BC.',
  st:['AB⃗ ⋅ AC⃗ = AB × AC × cos 60° = 3 × 4 × ½ = 6 (positif : angle aigu).',
      'Al-Kashi : BC² = AB² + AC² − 2 × AB × AC × cos Â = 9 + 16 − 2 × 3 × 4 × ½.',
      'BC² = 25 − 12 = 13.'],
  r:'AB⃗ ⋅ AC⃗ = <b>6</b> ; BC = <b>√13</b>.'},
 pieges:[
  'Le produit scalaire est un <b>nombre</b> et non un vecteur.',
  'Dans xx′ + yy′, on <b>additionne</b> les produits des coordonnées de même rang (pas de croix comme pour le déterminant).',
  'La formule analytique n\'est valable que dans une base <b>orthonormée</b>.'],
 mini:[
  {q:'u⃗(2 ; 5) et v⃗(−5 ; 2) sont-ils orthogonaux ?', r:'2 × (−5) + 5 × 2 = 0 : <b>oui</b>.'},
  {q:'Norme de u⃗(3 ; 4) dans une base orthonormée ?', r:'√(9 + 16) = <b>5</b>'}],
 chk:[['3*4*Math.cos(Math.PI/3)','6'],['9+16-2*3*4*Math.cos(Math.PI/3)','13'],['2*(-5)+5*2','0'],['Math.sqrt(3**2+4**2)','5']]
},

'2C — Rotation & cercles': {
 ess:[
  'La <b>rotation</b> r(O, θ) laisse O invariant et associe à M ≠ O le point M′ tel que <b>OM′ = OM</b> et <b>mes(OM⃗, OM′⃗) = θ</b>. Si θ ≠ 0, O est le seul point invariant.',
  'Cas particuliers : θ = π donne la symétrie centrale (demi-tour) ; θ = {π¦2} est le quart de tour direct. La rotation conserve distances, aires, angles orientés et alignement ; l\'image d\'un cercle est un cercle de même rayon, centré sur l\'image du centre.',
  'Composée de deux symétries orthogonales d\'axes sécants en O : une <b>rotation</b> de centre O.',
  '<b>Cercle</b> de centre I(a ; b) et de rayon R (repère orthonormé) : <b>(x − a)² + (y − b)² = R²</b>. Pour x² + y² − 2ax − 2by + c = 0 : on écrit (x − a)² + (y − b)² = a² + b² − c.',
  '<b>Droite et cercle</b> : d = distance de I à la droite. d < R : deux points communs ; d = R : un seul (tangente) ; d > R : aucun.'],
 form:[
  'a² + b² − c > 0 : cercle de rayon √(a² + b² − c) ; = 0 : un seul point ; < 0 : ensemble vide.'],
 ex:{q:'Quel est l\'ensemble d\'équation x² + y² − 4x + 6y − 12 = 0 ?',
  st:['On regroupe : (x² − 4x) + (y² + 6y) = 12.',
      'On complète les carrés : (x − 2)² − 4 + (y + 3)² − 9 = 12.',
      'Donc (x − 2)² + (y + 3)² = 25.'],
  r:'Cercle de centre <b>(2 ; −3)</b> et de rayon <b>5</b>.'},
 pieges:[
  'Dans (x − a)² + (y − b)² = R², le centre est (a ; b) avec les signes <b>opposés</b> à ceux écrits : (y + 3)² donne b = −3.',
  'Le membre de droite est R², pas R : si on trouve 25, le rayon est 5.',
  'Si a² + b² − c < 0, l\'ensemble est <b>vide</b> : ce n\'est pas un cercle.'],
 mini:[
  {q:'Équation du cercle de diamètre [AB], A(1 ; 2), B(5 ; 6) ?', r:'Centre (3 ; 4), AB² = 32, R² = 8 : <b>(x − 3)² + (y − 4)² = 8</b>'},
  {q:'Un cercle de rayon 5 et une droite à la distance 3 du centre : combien de points communs ?', r:'d = 3 < 5 : <b>deux points</b>.'}],
 chk:[['(4/2)**2+(-6/2)**2+12','25'],['(1+5)/2','3'],['(2+6)/2','4'],['(5-1)**2+(6-2)**2','32'],['((5-1)**2+(6-2)**2)/4','8'],['2**2+(-3)**2+12','5**2']]
},

'2C — Systèmes & inéquations dans ℝ×ℝ': {
 ess:[
  'Système {ax + by = c ; a′x + b′y = c′}. Son <b>déterminant</b> est <b>ab′ − a′b</b>. S\'il est <b>non nul</b> : une seule solution (couple (x ; y)).',
  'S\'il est <b>nul</b> : soit <b>aucune solution</b> (droites parallèles distinctes), soit <b>une infinité</b> (même droite).',
  '<b>Méthodes</b> : substitution (on isole une inconnue) ou combinaison (on additionne des multiples des équations). Changement d\'inconnues possible : X = {1¦x}, Y = {1¦y}.',
  '<b>Inéquation</b> ax + by + c ≥ 0 : l\'ensemble des points est un <b>demi-plan</b> limité par la droite ax + by + c = 0. On le choisit en testant un point hors de la droite, par exemple l\'<b>origine</b>.',
  '<b>Programmation linéaire</b> : on optimise une fonction linéaire de deux variables sous contraintes d\'inéquations ; l\'optimum est atteint en un <b>sommet</b> du polygone convexe des solutions.'],
 form:[
  'Régionnement : découpage du plan en régions par des droites.'],
 ex:{q:'Résoudre le système 2x + 3y = 8 ; x − y = −1.',
  st:['Déterminant : 2 × (−1) − 1 × 3 = −5 ≠ 0 : une solution unique.',
      'De la 2e équation : x = y − 1.',
      'On remplace dans la 1re : 2(y − 1) + 3y = 8, soit 5y = 10, donc y = 2, puis x = 1.',
      'Vérification : 2 × 1 + 3 × 2 = 8 ✔ et 1 − 2 = −1 ✔.'],
  r:'S = <b>{(1 ; 2)}</b>'},
 pieges:[
  'Vérifie toujours ton couple (x ; y) dans <b>les deux équations</b> : une erreur de calcul est vite arrivée.',
  'x + 2y = 4 et 2x + 4y = 8 : même droite (infinité de solutions) ; avec 2x + 4y = 9 : parallèles, <b>aucune solution</b>.',
  'Pour choisir le demi-plan, teste un point <b>hors de la droite</b> : si l\'origine est sur la droite (c = 0), prends un autre point.'],
 mini:[
  {q:'Combien de solutions pour x + 2y = 4 ; 2x + 4y = 9 ?', r:'Déterminant 1 × 4 − 2 × 2 = 0 et 2 × 4 ≠ 9 : <b>aucune solution</b>.'},
  {q:'Le point (0 ; 0) est-il dans le demi-plan x + y − 2 ≥ 0 ?', r:'0 + 0 − 2 = −2 < 0 : <b>non</b>.'}],
 chk:[['2*(-1)-1*3','-5'],['2*1+3*2','8'],['1-2','-1'],['1*4-2*2','0'],['2*4===8&&2*4!==9','true'],['0+0-2>=0','false']]
},

'2C — Prop. & Déf.': { memo:true }
});
