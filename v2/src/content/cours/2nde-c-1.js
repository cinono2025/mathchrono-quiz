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
