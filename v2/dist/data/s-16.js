/* ===== MQ_SOM : modules sommatifs complémentaires — 3e ===== */
(function(G){
  'use strict';
  var M=G.MQ_SOM_MOD, MOD=M.MOD, fmt=M.fmt, ri=M.ri, pick=M.pick, gcd=M.gcd, H=M.hA;
  var MN=H.MN, par=H.par, fr=H.fr, frR=H.frR, tm=H.tm, aff=H.aff, K=H.K, who=H.who, Who=H.Who;
  function P2(v){ return '('+v.map(function(c){ return fmt(c,0); }).join(' ; ')+')'; }
  function rad(n){ var o=1,i=n; for(var d=2;d*d<=i;d++) while(i%(d*d)===0){ o*=d; i/=d*d; } return i===1?String(o):(o===1?'':o)+'√'+i; }
  function itv(a,b,oa,ob){ return (oa?']':'[')+fmt(a,0)+' ; '+fmt(b,0)+(ob?'[':']'); }

  /* ================= Nombres réels ================= */
  function gNR(x){
    var r=x.rnd, b=pick(r,[2,3,5,7]), ks=M.shuffle(r,[2,3,4,5,6]).slice(0,3), tot=ks[0]+ks[1]-ks[2], rs=ks.map(function(k){ return k*k*b; });
    var p=pick(r,[2,3,5]), m=pick(r,[[2,8],[3,12],[2,18],[5,20],[3,27]]), sq=pick(r,[[4,9],[16,25],[9,49],[1,4],[25,36]]);
    var res=tot===0?'0':(tot===1?'√'+b:(tot===-1?MN+'√'+b:fmt(tot,0)+'√'+b));
    var intro='Dans un exercice de calcul, '+who(x)+' doit simplifier les nombres P = √'+rs[0]+' + √'+rs[1]+' '+MN+' √'+rs[2]+', Q = √'+m[0]+' × √'+m[1]+' et R = √('+sq[0]+'/'+sq[1]+').';
    var p1=[K('Écris P sous la forme a√'+b+', a étant un entier relatif.',
      ks.map(function(k,i){ return '√'+rs[i]+' = √('+(k*k)+' × '+b+') = '+k+'√'+b; }).join(' ; ')+'. Donc P = '+ks[0]+'√'+b+' + '+ks[1]+'√'+b+' '+MN+' '+ks[2]+'√'+b+' = ('+ks[0]+' + '+ks[1]+' '+MN+' '+ks[2]+')√'+b+' = '+res+'.',
      ['Identifier la propriété √(ab) = √a × √b (a, b ≥ 0).','Identifier le plus grand carré parfait qui divise chaque radicande.'],
      ['Décomposer chaque radicande, puis factoriser par √'+b+'.'],
      ['Simplifier les trois racines.','Factoriser par √'+b+'.','Conclure : P = '+res+'.']),
     K('Calcule Q et R. Ces nombres sont-ils rationnels ?',
      'Q = √('+m[0]+' × '+m[1]+') = √'+(m[0]*m[1])+' = '+Math.sqrt(m[0]*m[1])+'. R = √'+sq[0]+' ÷ √'+sq[1]+' = '+Math.sqrt(sq[0])+'/'+Math.sqrt(sq[1])+'. Q est un entier naturel et R un quotient d’entiers : ce sont des nombres rationnels (bien que √'+m[0]+' et √'+m[1]+' soient irrationnels).',
      ['Identifier les propriétés √a × √b = √(ab) et √(a/b) = √a / √b.','Identifier la définition d’un nombre rationnel.'],
      ['Appliquer les propriétés, puis reconnaître des carrés parfaits.'],
      ['Calculer Q = '+Math.sqrt(m[0]*m[1])+'.','Calculer R = '+Math.sqrt(sq[0])+'/'+Math.sqrt(sq[1])+'.','Conclure : Q et R rationnels.'])];
    var c=pick(r,[2,3,4,6,10]), q=pick(r,[2,3,5]), num=c, g=gcd(c,q), a2=pick(r,[2,3,5,7]), k2=ri(r,1,4);
    var i2='On veut écrire sans radical au dénominateur le nombre S = '+c+'/√'+q+', puis calculer T = (√'+a2+' '+MN+' '+k2+')(√'+a2+' + '+k2+').';
    var p2=[K('Écris S sans radical au dénominateur, sous forme simplifiée.',
      'On multiplie le numérateur et le dénominateur par √'+q+' : S = ('+c+' × √'+q+') / (√'+q+' × √'+q+') = '+c+'√'+q+'/'+q+(g>1?' = '+(c/g===1?'':c/g)+'√'+q+(q/g===1?'':'/'+(q/g)):'')+'.',
      ['Identifier que √'+q+' × √'+q+' = '+q+'.','Identifier la règle : multiplier les deux termes d’un quotient par un même nombre non nul.'],
      ['Multiplier numérateur et dénominateur par √'+q+'.'],
      ['Multiplier par √'+q+'.','Calculer le dénominateur : '+q+'.','Simplifier.']),
     K('Calcule T à l’aide d’une identité remarquable.',
      'Avec (p − q)(p + q) = p² − q² : T = (√'+a2+')² '+MN+' '+k2+'² = '+a2+' '+MN+' '+(k2*k2)+' = '+fmt(a2-k2*k2,0)+'.',
      ['Identifier l’identité (p − q)(p + q) = p² − q².','Identifier que (√'+a2+')² = '+a2+'.'],
      ['Appliquer l’identité.'],
      ['Écrire T = (√'+a2+')² − '+k2+'².','Calculer chaque carré.','Conclure : T = '+fmt(a2-k2*k2,0)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{b:b,ks:ks,tot:tot,m:m,sq:sq,c:c,q:q,a2:a2,k2:k2}}; }

  /* ================= Valeur absolue & intervalles ================= */
  function gVA(x){
    var r=x.rnd, a=ri(r,-9,-2), b=ri(r,2,9), c=pick(r,[-4,-3,-2,-1,1,2,3,4,5]), rr=ri(r,1,6);
    var intro='Sur une droite graduée, les points A et B ont pour abscisses '+fmt(a,0)+' et '+fmt(b,0)+'. On considère aussi l’équation |x '+(c<0?'+ '+(-c):MN+' '+c)+'| = '+rr+'.';
    var xc='x '+(c<0?'+ '+(-c):MN+' '+c);
    var p1=[K('Calcule |'+fmt(a,0)+'|, |'+fmt(b,0)+'| et la distance AB.',
      '|'+fmt(a,0)+'| = '+(-a)+' et |'+fmt(b,0)+'| = '+b+' (distance à zéro). AB = |'+fmt(b,0)+' '+MN+' '+par(a)+'| = |'+(b-a)+'| = '+(b-a)+'.',
      ['Identifier la valeur absolue comme distance à zéro.','Identifier la formule de la distance : |b − a|.'],
      ['Appliquer la définition et la formule.'],
      ['Calculer |'+fmt(a,0)+'| = '+(-a)+'.','Calculer |'+fmt(b,0)+'| = '+b+'.','Calculer AB = '+(b-a)+'.']),
     K('Résous l’équation |'+xc+'| = '+rr+', puis l’inéquation |'+xc+'| ≤ '+rr+' (écris la solution sous forme d’intervalle).',
      '|'+xc+'| = '+rr+' ⟺ '+xc+' = '+rr+' ou '+xc+' = '+MN+rr+' ⟺ x = '+fmt(c+rr,0)+' ou x = '+fmt(c-rr,0)+' : S = {'+fmt(c-rr,0)+' ; '+fmt(c+rr,0)+'}. |'+xc+'| ≤ '+rr+' ⟺ '+MN+rr+' ≤ '+xc+' ≤ '+rr+' ⟺ '+fmt(c-rr,0)+' ≤ x ≤ '+fmt(c+rr,0)+' : S = '+itv(c-rr,c+rr)+'.',
      ['Identifier que |x − c| est la distance de x à c.','Identifier les deux cas de |X| = r (r > 0).'],
      ['Écrire les deux équations, puis l’encadrement −r ≤ X ≤ r.'],
      ['Résoudre l’équation.','Résoudre l’inéquation.','Écrire l’intervalle '+itv(c-rr,c+rr)+'.'])];
    var p=ri(r,-5,0), q=ri(r,2,6), s=ri(r,p+1,q-1), t=ri(r,q+1,q+5);
    var i2='On considère les intervalles I = ['+fmt(p,0)+' ; '+fmt(q,0)+'] et J = ]'+fmt(s,0)+' ; '+fmt(t,0)+'].';
    var p2=[K('Traduis par des inégalités « x ∈ I » et « x ∈ J », puis donne l’amplitude de chacun des intervalles.',
      'x ∈ I ⟺ '+fmt(p,0)+' ≤ x ≤ '+fmt(q,0)+' ; x ∈ J ⟺ '+fmt(s,0)+' < x ≤ '+fmt(t,0)+'. Amplitude de I : '+fmt(q,0)+' '+MN+' '+par(p)+' = '+(q-p)+' ; amplitude de J : '+fmt(t,0)+' '+MN+' '+par(s)+' = '+(t-s)+'.',
      ['Identifier la signification des crochets (borne incluse ou exclue).','Identifier la définition de l’amplitude (b − a).'],
      ['Écrire les encadrements ; soustraire les bornes.'],
      ['Traduire I.','Traduire J.','Calculer les amplitudes '+(q-p)+' et '+(t-s)+'.']),
     K('Détermine I ∩ J et I ∪ J.',
      'Les nombres qui sont à la fois dans I et dans J vérifient '+fmt(s,0)+' < x ≤ '+fmt(q,0)+' : I ∩ J = ]'+fmt(s,0)+' ; '+fmt(q,0)+']. Les nombres qui sont dans I ou dans J vérifient '+fmt(p,0)+' ≤ x ≤ '+fmt(t,0)+' : I ∪ J = ['+fmt(p,0)+' ; '+fmt(t,0)+'].',
      ['Identifier les définitions de l’intersection et de la réunion.','Identifier les positions des bornes sur la droite graduée.'],
      ['Représenter I et J sur une droite graduée.'],
      ['Placer les bornes.','Écrire I ∩ J.','Écrire I ∪ J.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,c:c,rr:rr,p:p,q:q,s:s,t:t}}; }

  /* ================= Trigonométrie ================= */
  function gTG(x){
    var r=x.rnd, T=pick(r,[[3,4,5],[5,12,13],[8,15,17],[7,24,25]]), m=ri(r,1,3), ab=T[0]*m, ac=T[1]*m, bc=T[2]*m;
    var intro='Le triangle ABC est rectangle en A, avec AB = '+ab+' cm, AC = '+ac+' cm et BC = '+bc+' cm. On note B̂ et Ĉ les angles aigus de sommets B et C.';
    var p1=[K('Calcule sin B̂, cos B̂ et tan B̂ (sous forme de fractions irréductibles).',
      'Pour l’angle B̂ : le côté opposé est [AC], le côté adjacent est [AB] et l’hypoténuse est [BC]. sin B̂ = AC/BC = '+ac+'/'+bc+' = '+fr(ac,bc)+' ; cos B̂ = AB/BC = '+ab+'/'+bc+' = '+fr(ab,bc)+' ; tan B̂ = AC/AB = '+ac+'/'+ab+' = '+fr(ac,ab)+'.',
      ['Identifier l’hypoténuse, le côté opposé et le côté adjacent à B̂.','Identifier les définitions de sin, cos et tan.'],
      ['Écrire les rapports de longueurs, puis simplifier.'],
      ['Calculer sin B̂ = '+fr(ac,bc)+'.','Calculer cos B̂ = '+fr(ab,bc)+'.','Calculer tan B̂ = '+fr(ac,ab)+'.']),
     K('Vérifie que sin² B̂ + cos² B̂ = 1. Que valent cos Ĉ et sin Ĉ ? Justifie.',
      'sin² B̂ + cos² B̂ = ('+fr(ac,bc)+')² + ('+fr(ab,bc)+')² = '+(T[1]*T[1])+'/'+(T[2]*T[2])+' + '+(T[0]*T[0])+'/'+(T[2]*T[2])+' = '+(T[2]*T[2])+'/'+(T[2]*T[2])+' = 1. Les angles B̂ et Ĉ sont complémentaires (B̂ + Ĉ = 90°) : cos Ĉ = sin B̂ = '+fr(ac,bc)+' et sin Ĉ = cos B̂ = '+fr(ab,bc)+'.',
      ['Identifier la relation fondamentale sin² + cos² = 1.','Identifier que les deux angles aigus d’un triangle rectangle sont complémentaires.'],
      ['Calculer la somme des carrés ; utiliser les angles complémentaires.'],
      ['Calculer sin² B̂ + cos² B̂.','Justifier B̂ + Ĉ = 90°.','Donner cos Ĉ et sin Ĉ.'])];
    var h=ri(r,2,10)*2, ang=pick(r,[30,60]), op=ang===30?h/2:null;
    var i2='Le triangle DEF est rectangle en D, avec EF = '+h+' cm et DÊF = '+ang+'°.';
    var p2=[K('Calcule DF (côté opposé à l’angle Ê). On donne sin 30° = 1/2 et cos 30° = √3/2.',
      ang===30?'sin Ê = DF/EF, donc DF = EF × sin 30° = '+h+' × 1/2 = '+(h/2)+' cm.':'sin Ê = DF/EF, donc DF = EF × sin 60°. Or sin 60° = cos 30° = √3/2 (angles complémentaires), donc DF = '+h+' × √3/2 = '+(h/2)+'√3 cm.',
      ['Identifier le côté opposé [DF] et l’hypoténuse [EF].','Identifier la définition du sinus et les valeurs remarquables.'],
      ['Traduire : DF = EF × sin Ê.'],
      ['Écrire sin Ê = DF/EF.','Remplacer par la valeur remarquable.','Calculer DF.']),
     K('Calcule DE, puis la mesure de l’angle DF̂E.',
      ang===30?'cos Ê = DE/EF, donc DE = '+h+' × cos 30° = '+h+' × √3/2 = '+(h/2)+'√3 cm. Les angles aigus sont complémentaires : DF̂E = 90° '+MN+' 30° = 60°.':'cos Ê = DE/EF, donc DE = '+h+' × cos 60° = '+h+' × 1/2 = '+(h/2)+' cm (cos 60° = sin 30° = 1/2). Les angles aigus sont complémentaires : DF̂E = 90° '+MN+' 60° = 30°.',
      ['Identifier le côté adjacent [DE].','Identifier les angles complémentaires dans un triangle rectangle.'],
      ['Traduire : DE = EF × cos Ê ; DF̂E = 90° − Ê.'],
      ['Écrire cos Ê = DE/EF.','Calculer DE.','Calculer DF̂E = '+(90-ang)+'°.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{ab:ab,ac:ac,bc:bc,T:T,h:h,ang:ang}}; }

  /* ================= Angles & cercles ================= */
  function gAC(x){
    var r=x.rnd, c=ri(r,20,80)*2;
    var intro='A, B, M et N sont quatre points d’un cercle (C) de centre O. Les angles inscrits AM̂B et AN̂B interceptent le même arc AB, et l’angle au centre AÔB qui intercepte cet arc mesure '+c+'°. [EF] est un diamètre de (C) et P est un autre point de (C).';
    var p1=[K('Calcule les mesures des angles inscrits AM̂B et AN̂B. Justifie.',
      'Un angle inscrit mesure la moitié de l’angle au centre qui intercepte le même arc : AM̂B = '+c+'° ÷ 2 = '+(c/2)+'°. Deux angles inscrits qui interceptent le même arc ont la même mesure : AN̂B = AM̂B = '+(c/2)+'°.',
      ['Identifier l’angle au centre et les angles inscrits interceptant l’arc AB.','Identifier la propriété angle inscrit / angle au centre.'],
      ['Diviser l’angle au centre par 2.'],
      ['Calculer AM̂B = '+(c/2)+'°.','Justifier l’égalité AN̂B = AM̂B.','Conclure.']),
     K('Quelle est la mesure de l’angle EP̂F ? Quelle est la nature du triangle EPF ?',
      'L’angle EP̂F est inscrit dans le demi-cercle de diamètre [EF] : il intercepte un arc de 180° (l’angle au centre EÔF est plat). Donc EP̂F = 180° ÷ 2 = 90° et le triangle EPF est rectangle en P.',
      ['Identifier que [EF] est un diamètre.','Identifier la propriété de l’angle inscrit dans un demi-cercle.'],
      ['Utiliser l’angle au centre plat (180°).'],
      ['Reconnaître l’angle au centre de 180°.','Calculer EP̂F = 90°.','Conclure : EPF rectangle en P.'])];
    var a=ri(r,60,130), b=ri(r,50,120), n=pick(r,[5,6,8,9,10,12]), nm={5:'pentagone',6:'hexagone',8:'octogone',9:'ennéagone',10:'décagone',12:'dodécagone'}[n], dun={5:'du pentagone',6:'de l’hexagone',8:'de l’octogone',9:'de l’ennéagone',10:'du décagone',12:'du dodécagone'}[n];
    var i2='Le quadrilatère ABCD est inscrit dans un cercle, avec DÂB = '+a+'° et AB̂C = '+b+'°. On étudie aussi un '+nm+' régulier.';
    var p2=[K('Calcule les mesures des angles BĈD et CD̂A. Justifie.',
      'Dans un quadrilatère inscrit dans un cercle, les angles opposés sont supplémentaires (leur somme vaut 180°). BĈD = 180° '+MN+' '+a+'° = '+(180-a)+'° et CD̂A = 180° '+MN+' '+b+'° = '+(180-b)+'°.',
      ['Identifier que ABCD est inscrit dans un cercle.','Identifier la propriété des angles opposés.'],
      ['Traduire : angle opposé = 180° − angle donné.'],
      ['Associer les angles opposés.','Calculer BĈD = '+(180-a)+'°.','Calculer CD̂A = '+(180-b)+'°.']),
     K('Calcule la mesure de chaque angle '+dun+' régulier (angle entre deux côtés consécutifs).',
      'Chaque angle au centre mesure 360 ÷ '+n+' = '+(360/n)+'. L’angle d’un polygone régulier à n côtés mesure 180° '+MN+' 360°/n : 180 '+MN+' '+(360/n)+' = '+(180-360/n)+', soit '+(180-360/n)+'°.',
      ['Identifier le nombre de côtés : '+n+'.','Identifier la formule 180° − 360°/n.'],
      ['Calculer l’angle au centre, puis l’angle du polygone.'],
      ['Calculer 360 ÷ '+n+' = '+(360/n)+'.','Appliquer la formule.','Conclure : '+(180-360/n)+'°.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{c:c,a:a,b:b,n:n}}; }

  /* ================= Droites & vecteurs ================= */
  function gDV(x){
    var r=x.rnd, A,B,Cc,it; for(it=0;it<100;it++){ A=[ri(r,-4,2),ri(r,-4,4)]; B=[A[0]+ri(r,1,3),0]; B[1]=A[1]+ri(r,-3,3)*(B[0]-A[0]); var s=(B[1]-A[1])/(B[0]-A[0]); if(s!==0) break; }
    var sl=(B[1]-A[1])/(B[0]-A[0]), ic=A[1]-sl*A[0], AB=[B[0]-A[0],B[1]-A[1]], d2=AB[0]*AB[0]+AB[1]*AB[1]; do{ Cc=[ri(r,-3,3),ri(r,-3,3)]; } while(Cc[1]===sl*Cc[0]+ic);
    var intro='Dans un repère orthonormé, on considère les points A'+P2(A)+', B'+P2(B)+' et C'+P2(Cc)+'.';
    var p1=[K('Calcule les coordonnées du vecteur →AB, celles du milieu I de [AB] et la distance AB.',
      '→AB('+fmt(B[0],0)+' '+MN+' '+par(A[0])+' ; '+fmt(B[1],0)+' '+MN+' '+par(A[1])+') = →AB'+P2(AB)+'. I(('+fmt(A[0],0)+' + '+par(B[0])+') ÷ 2 ; ('+fmt(A[1],0)+' + '+par(B[1])+') ÷ 2) = I('+fmt((A[0]+B[0])/2,1)+' ; '+fmt((A[1]+B[1])/2,1)+'). AB = √('+par(AB[0])+'² + '+par(AB[1])+'²) = √'+d2+(rad(d2)!=='√'+d2?' = '+rad(d2):'')+'.',
      ['Identifier les formules des coordonnées d’un vecteur et du milieu.','Identifier la formule de la distance dans un repère orthonormé.'],
      ['Appliquer les trois formules.'],
      ['Calculer →AB'+P2(AB)+'.','Calculer I.','Calculer AB = '+rad(d2)+'.']),
     K('Détermine une équation de la droite (AB) sous la forme y = ax + b.',
      'Coefficient directeur : a = (y_B − y_A) ÷ (x_B − x_A) = '+fmt(AB[1],0)+' ÷ '+fmt(AB[0],0)+' = '+fmt(sl,0)+'. La droite passe par A : '+fmt(A[1],0)+' = '+par(sl)+' × '+par(A[0])+' + b, donc b = '+fmt(A[1],0)+' '+MN+' '+par(sl*A[0])+' = '+fmt(ic,0)+'. (AB) : y = '+aff(sl,ic)+'.',
      ['Identifier la formule du coefficient directeur.','Identifier qu’un point de la droite vérifie son équation.'],
      ['Calculer a, puis b avec les coordonnées de A.'],
      ['Calculer a = '+fmt(sl,0)+'.','Calculer b = '+fmt(ic,0)+'.','Écrire l’équation.'])];
    var bp=Cc[1]-sl*Cc[0];
    var i2=(x.standalone2?'La droite (AB) a pour équation y = '+aff(sl,ic)+' et C est le point '+P2(Cc)+'. ':'')+'On note (D) la droite passant par C et parallèle à (AB), et (Δ) une droite de coefficient directeur m perpendiculaire à (AB).';
    var p2=[K('Détermine une équation de la droite (D).',
      'Deux droites parallèles (non parallèles à l’axe des ordonnées) ont le même coefficient directeur : (D) a pour coefficient '+fmt(sl,0)+'. Elle passe par C : '+fmt(Cc[1],0)+' = '+par(sl)+' × '+par(Cc[0])+' + b′, donc b′ = '+fmt(bp,0)+'. (D) : y = '+aff(sl,bp)+'.',
      ['Identifier la condition de parallélisme : même coefficient directeur.','Identifier les coordonnées de C.'],
      ['Reprendre le coefficient de (AB), puis calculer l’ordonnée à l’origine.'],
      ['Donner le coefficient '+fmt(sl,0)+'.','Calculer b′ = '+fmt(bp,0)+'.','Écrire l’équation de (D).']),
     K('Calcule le coefficient directeur m de (Δ). Vérifie avec les vecteurs que les directions sont orthogonales.',
      'Deux droites de coefficients a et m sont perpendiculaires si a × m = '+MN+'1 : m = '+MN+'1 ÷ '+par(sl)+' = '+fr(-1,sl)+'. Un vecteur directeur de (AB) est →u(1 ; '+fmt(sl,0)+') et un vecteur directeur de (Δ) est →v(1 ; '+fr(-1,sl)+'). On a 1 × 1 + '+par(sl)+' × ('+fr(-1,sl)+') = 1 '+MN+' 1 = 0 : les vecteurs sont orthogonaux.',
      ['Identifier la condition de perpendicularité a × m = −1.','Identifier la condition d’orthogonalité de deux vecteurs xx′ + yy′ = 0.'],
      ['Calculer m, puis le produit des coordonnées.'],
      ['Calculer m = '+fr(-1,sl)+'.','Écrire les vecteurs directeurs.','Vérifier xx′ + yy′ = 0.'])];
    return {parts:[{intro:intro,cons:p1,fig:{type:'rep',pts:[{n:'A',x:A[0],y:A[1]},{n:'B',x:B[0],y:B[1]},{n:'C',x:Cc[0],y:Cc[1]}],edges:[[0,1]]}},{intro:i2,cons:p2}],_g:{A:A,B:B,C:Cc,sl:sl,ic:ic,bp:bp,d2:d2}}; }

  var reg=function(id,theme,label,w1,build){ MOD['3e-'+id]={cls:'3e',theme:theme,themes:[theme],label:label,w1:w1,build:build}; };
  reg('NR','Nombres réels','Nombres réels',1,gNR);
  reg('VA','Valeur absolue & intervalles','Valeur absolue et intervalles',1,gVA);
  reg('TG','Trigonométrie','Trigonométrie',2,gTG);
  reg('AC','Angles & cercles','Angles et cercles',1,gAC);
  reg('DV','Droites & vecteurs','Droites et vecteurs',1,gDV);
})(typeof globalThis!=='undefined'?globalThis:this);
