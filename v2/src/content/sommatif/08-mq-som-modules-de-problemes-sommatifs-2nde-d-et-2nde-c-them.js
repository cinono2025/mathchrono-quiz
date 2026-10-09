/* ===== MQ_SOM : modules de problèmes sommatifs — 2nde D et 2nde C : thèmes complémentaires ===== */
(function(G){
  'use strict';
  var M=G.MQ_SOM_MOD, MOD=M.MOD, fmt=M.fmt, ri=M.ri, pick=M.pick, gcd=M.gcd, H=M.helpers14, par=H.par, eqSym=H.eqSym;
  var MN='\u2212';
  function fixMinus(t){ return String(t).replace(/([\s(\[{;,]|^)-(?=\d)/g,'$1\u2212'); }
  function K(t,s,A,Mm,O){ return M.K(fixMinus(t),fixMinus(s),A.map(fixMinus),Mm.map(fixMinus),O.map(fixMinus)); }
  function pt2(n,x,y){ return n+'('+fmt(x,0)+' ; '+fmt(y,0)+')'; }
  function tm(c,v,first){ if(!c) return ''; var ab=Math.abs(c), b=v?((ab===1?'':fmt(ab,0))+v):fmt(ab,0); return first?((c<0?MN:'')+b):((c<0?' '+MN+' ':' + ')+b); }
  function P3(v){ return '('+v.map(function(c){ return fmt(c,0); }).join('\u00a0;\u00a0')+')'; }
  function sq2(v,c){ return c===0?v+'²':'('+v+(c>0?' '+MN+' '+c:' + '+(-c))+')²'; }
  function frac(n,d){ var g=gcd(Math.abs(n),Math.abs(d))||1; n/=g; d/=g; if(d<0){ n=-n; d=-d; } return d===1?fmt(n,0):fmt(n,0)+'/'+d; }

  /* ================= Homothétie ================= */
  var LHM={jardin:'le plan du jardin',sport:'le plan du terrain',coop:'le plan de la boutique'};
  function gHM(x){
    var r=x.rnd, k=pick(r,[2,3,-1,-2]), O=[ri(r,-3,3),ri(r,-3,3)], A,B,it; for(it=0;it<200;it++){ A=[ri(r,-4,4),ri(r,-4,4)]; B=[ri(r,-4,4),ri(r,-4,4)]; if((A[0]===O[0]&&A[1]===O[1])||(B[0]===O[0]&&B[1]===O[1])||(A[0]===B[0]&&A[1]===B[1])) continue; break; }
    var im=function(Pt){ return [O[0]+k*(Pt[0]-O[0]),O[1]+k*(Pt[1]-O[1])]; }, A1=im(A), B1=im(B), ABv=[B[0]-A[0],B[1]-A[1]], AB2=ABv[0]*ABv[0]+ABv[1]*ABv[1];
    var T,Pp,Q,R2,S,det0; for(it=0;it<300;it++){ Pp=[ri(r,-3,3),ri(r,-3,3)]; Q=[ri(r,-3,3),ri(r,-3,3)]; R2=[ri(r,-3,3),ri(r,-3,3)]; det0=(Q[0]-Pp[0])*(R2[1]-Pp[1])-(Q[1]-Pp[1])*(R2[0]-Pp[0]); if(det0!==0) break; }
    S=Math.abs(det0)/2; var S1=k*k*S;
    var intro='Dans '+LHM[x.W.id]+' muni d’un repère orthonormé, on considère l’homothétie h de centre '+pt2('Ω',O[0],O[1])+' et de rapport '+k+', ainsi que les points '+pt2('A',A[0],A[1])+' et '+pt2('B',B[0],B[1])+'.';
    var p1=[K('Détermine les coordonnées des images A′ et B′ de A et de B par h.',
      'Par définition de h, →ΩA′ = '+k+' →ΩA, donc x_A′ = x_Ω + '+par(k,0)+' × (x_A − x_Ω) = '+par(O[0],0)+' + '+par(k,0)+' × ('+par(A[0],0)+' '+MN+' '+par(O[0],0)+') = '+fmt(A1[0],0)+' et y_A′ = '+par(O[1],0)+' + '+par(k,0)+' × ('+par(A[1],0)+' '+MN+' '+par(O[1],0)+') = '+fmt(A1[1],0)+'. De même x_B′ = '+par(O[0],0)+' + '+par(k,0)+' × ('+par(B[0],0)+' '+MN+' '+par(O[0],0)+') = '+fmt(B1[0],0)+' et y_B′ = '+par(O[1],0)+' + '+par(k,0)+' × ('+par(B[1],0)+' '+MN+' '+par(O[1],0)+') = '+fmt(B1[1],0)+'. Donc A′'+P3(A1)+' et B′'+P3(B1)+'.',
      ['Identifier la définition vectorielle de l’homothétie : →ΩM′ = k →ΩM.','Identifier les coordonnées de →ΩA et →ΩB.'],
      ['Écrire x′ = x_Ω + k(x − x_Ω) et y′ = y_Ω + k(y − y_Ω).'],
      ['Calculer les coordonnées de A′.','Calculer les coordonnées de B′.','Conclure : A′ et B′.']),
     K('Vérifie que →A′B′ = '+k+' →AB, puis compare les longueurs A′B′ et AB.',
      '→AB '+P3(ABv)+' et →A′B′ '+P3([B1[0]-A1[0],B1[1]-A1[1]])+'. On a '+par(k,0)+' × '+par(ABv[0],0)+' = '+fmt(k*ABv[0],0)+' et '+par(k,0)+' × '+par(ABv[1],0)+' = '+fmt(k*ABv[1],0)+', donc →A′B′ = '+k+' →AB. Alors AB² = '+par(ABv[0],0)+'² + '+par(ABv[1],0)+'² = '+AB2+' et A′B′² = '+par(k*ABv[0],0)+'² + '+par(k*ABv[1],0)+'² = '+(k*k*AB2)+' = '+(k*k)+' × '+AB2+'. Donc A′B′ = '+Math.abs(k)+' × AB : une homothétie de rapport '+k+' multiplie les longueurs par '+Math.abs(k)+'.',
      ['Identifier qu’une homothétie multiplie les vecteurs par son rapport.','Identifier le lien entre rapport et longueurs.'],
      ['Calculer les coordonnées de →AB et →A′B′.','Comparer les carrés des longueurs.'],
      ['Calculer →A′B′ et k →AB.','Calculer AB² et A′B′².','Conclure : A′B′ = |k| × AB.'])];
    var i2=(x.standalone2?'Dans '+LHM[x.W.id]+' muni d’un repère orthonormé, h est l’homothétie de centre '+pt2('Ω',O[0],O[1])+' et de rapport '+k+'. ':'')+'On considère le triangle PQR où '+pt2('P',Pp[0],Pp[1])+', '+pt2('Q',Q[0],Q[1])+' et '+pt2('R',R2[0],R2[1])+'.';
    var p2=[K('Calcule l’aire S du triangle PQR.',
      'On calcule le déterminant des vecteurs →PQ et →PR : →PQ '+P3([Q[0]-Pp[0],Q[1]-Pp[1]])+' et →PR '+P3([R2[0]-Pp[0],R2[1]-Pp[1]])+'. Alors '+par(Q[0]-Pp[0],0)+' × '+par(R2[1]-Pp[1],0)+' '+MN+' '+par(Q[1]-Pp[1],0)+' × '+par(R2[0]-Pp[0],0)+' = '+fmt(det0,0)+'. L’aire du triangle est la moitié de la valeur absolue de ce déterminant : S = '+Math.abs(det0)+' ÷ 2 = '+fmt(S,1)+' (unités d’aire).',
      ['Identifier le lien entre aire d’un triangle et déterminant de deux vecteurs.','Identifier les coordonnées de →PQ et →PR.'],
      ['Écrire S = |det(→PQ, →PR)| ÷ 2.'],
      ['Calculer les coordonnées de →PQ et →PR.','Calculer le déterminant : '+fmt(det0,0)+'.','Calculer S = '+fmt(S,1)+'.']),
     K('Déduis-en l’aire du triangle P′Q′R′, image de PQR par h.',
      'Une homothétie de rapport '+k+' multiplie les longueurs par '+Math.abs(k)+', donc elle multiplie les aires par '+par(k,0)+'² = '+(k*k)+'. L’aire de P′Q′R′ est donc S′ = '+(k*k)+' × '+fmt(S,1)+' = '+fmt(S1,1)+' (unités d’aire). Le rapport des aires S′ ÷ S vaut '+fmt(S1,1)+' ÷ '+fmt(S,1)+' = '+(k*k)+'.',
      ['Identifier l’effet d’une homothétie sur les aires : k².','Identifier l’aire S du triangle initial.'],
      ['Écrire S′ = k² × S.'],
      ['Calculer k² = '+(k*k)+'.','Calculer S′ = '+fmt(S1,1)+'.','Vérifier le rapport des aires.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{k:k,O:O,A:A,B:B,A1:A1,B1:B1,P:Pp,Q:Q,R:R2,S:S,S1:S1}}; }

  /* ================= Applications ================= */
  var LAP={jardin:'quatre parcelles du jardin',sport:'quatre équipes du tournoi',coop:'quatre articles de la boutique'};
  function gAP(x){
    var r=x.rnd, FL=['a','b','c','d','e'], type=pick(r,['inj','surj','bij','none']), nF=(type==='inj')?5:(type==='surj')?3:4, F=FL.slice(0,nF), im, it;
    for(it=0;it<500;it++){ im=[0,1,2,3].map(function(){ return ri(r,0,nF-1); }); var ds=new Set(im), injective=ds.size===4, surj=ds.size===nF; if(type==='inj'&&injective&&!surj) break; if(type==='surj'&&surj&&!injective) break; if(type==='bij'&&injective&&surj) break; if(type==='none'&&!injective&&!surj) break; }
    var img=[...new Set(im)].sort(function(p,q){ return p-q; }).map(function(i){ return F[i]; }), injective=new Set(im).size===4, surj=new Set(im).size===nF;
    var rep=null; for(var i=0;i<4;i++) for(var j=i+1;j<4;j++) if(im[i]===im[j]&&!rep) rep=[i+1,j+1,F[im[i]]]; var miss=F.filter(function(l){ return im.indexOf(F.indexOf(l))<0; });
    var tab={type:'table',head:['x ∈ E','1','2','3','4'],rows:[['f(x) ∈ F'].concat(im.map(function(i){ return F[i]; }))]};
    var a=pick(r,[2,3,-2,-3,4]), b=ri(r,-5,5), yb=(b===0?'y':'(y '+MN+' '+par(b,0)+')'), c=ri(r,1,4), m=ri(r,1,3), x0=ri(r,-3,3), y0=a*x0+b, g2=m*m-c, fgm=a*g2+b;
    var intro='Le comité étudie une correspondance entre l’ensemble E = {1 ; 2 ; 3 ; 4} des numéros de '+LAP[x.W.id]+' et l’ensemble F = {'+F.join(' ; ')+'} de catégories. L’application f de E vers F est donnée par le tableau ci-dessous.';
    var p1=[K('Détermine l’ensemble image f(E), puis dis si f est injective en justifiant.',
      'D’après le tableau, les images des éléments de E sont '+im.map(function(i,k){ return 'f('+(k+1)+') = '+F[i]; }).join(', ')+'. L’ensemble image est f(E) = {'+img.join(' ; ')+'}. '+(injective?'Les quatre images sont deux à deux distinctes : deux éléments distincts de E ont toujours des images distinctes, donc f est injective.':'On a f('+rep[0]+') = f('+rep[1]+') = '+rep[2]+' avec '+rep[0]+' ≠ '+rep[1]+' : deux éléments distincts de E ont la même image, donc f n’est pas injective.'),
      ['Identifier la définition de l’ensemble image.','Identifier la définition de l’injectivité : f(a) = f(b) ⟹ a = b.'],
      ['Lire les images dans le tableau.','Chercher deux éléments distincts ayant la même image.'],
      ['Lister les images.','Écrire f(E).','Conclure sur l’injectivité.']),
     K('f est-elle surjective ? bijective ? Justifie.',
      surj?('Tout élément de F ('+F.join(', ')+') apparaît dans le tableau comme image d’au moins un élément de E : f est surjective. '+(injective?'Comme f est aussi injective, f est bijective.':'Mais f n’est pas injective ('+rep[0]+' et '+rep[1]+' ont la même image), donc f n’est pas bijective.')):('L’élément '+miss[0]+' de F n’a aucun antécédent dans E : f n’est pas surjective. Par conséquent f n’est pas bijective (une bijection est injective et surjective).'),
      ['Identifier la définition de la surjectivité : tout élément de F a un antécédent.','Identifier qu’une bijection est à la fois injective et surjective.'],
      ['Vérifier que chaque élément de F est atteint.','Rapprocher le résultat de l’injectivité.'],
      ['Étudier la surjectivité.','Rappeler le résultat sur l’injectivité.','Conclure sur la bijectivité.'])];
    var i2=(x.standalone2?'On rappelle que le comité étudie des applications. ':'')+'Le comité étudie aussi les applications h et g de ℝ dans ℝ définies par h(x) = '+tm(a,'x',true)+(b<0?' '+MN+' '+(-b):(b>0?' + '+b:''))+' et g(x) = x² '+MN+' '+c+'.';
    var p2=[K('Montre que h est bijective de ℝ dans ℝ et détermine sa bijection réciproque h⁻¹. Quel est l’antécédent de '+fmt(y0,0)+' ?',
      'Soit y ∈ ℝ. L’équation h(x) = y s’écrit '+tm(a,'x',true)+(b<0?' '+MN+' '+(-b):(b>0?' + '+b:''))+' = y, soit x = '+yb+' ÷ '+par(a,0)+'. Elle admet donc une solution et une seule pour tout réel y : h est bijective, et h⁻¹(y) = '+yb+' ÷ '+par(a,0)+'. Pour y = '+fmt(y0,0)+' : h⁻¹('+fmt(y0,0)+') = '+(b===0?fmt(y0,0):'('+fmt(y0,0)+' '+MN+' '+par(b,0)+')')+' ÷ '+par(a,0)+(b===0?'':' = '+fmt(y0-b,0)+' ÷ '+par(a,0))+' = '+fmt(x0,0)+'.',
      ['Identifier qu’une application est bijective si tout réel a exactement un antécédent.','Identifier la méthode : résoudre f(x) = y.'],
      ['Résoudre l’équation f(x) = y d’inconnue x.','Écrire f⁻¹.'],
      ['Résoudre f(x) = y.','Conclure sur l’existence et l’unicité.','Calculer l’antécédent de '+fmt(y0,0)+' : '+fmt(x0,0)+'.']),
     K('Montre que g n’est ni injective ni surjective de ℝ dans ℝ, puis calcule (h ∘ g)('+m+').',
      'On a g('+m+') = '+m+'² '+MN+' '+c+' = '+fmt(g2,0)+' et g('+MN+m+') = ('+MN+m+')² '+MN+' '+c+' = '+fmt(g2,0)+'. Les nombres '+m+' et '+MN+m+' sont distincts mais ont la même image : g n’est pas injective. Pour tout réel x, x² ≥ 0 donc g(x) ≥ '+MN+c+'. Le réel '+MN+(c+1)+' est strictement inférieur à '+MN+c+' : il n’a aucun antécédent par g, donc g n’est pas surjective. Enfin (h ∘ g)('+m+') = h(g('+m+')) = h('+fmt(g2,0)+') = '+par(a,0)+' × '+par(g2,0)+(b===0?'':' + '+par(b,0))+' = '+fmt(fgm,0)+'.',
      ['Identifier qu’un contre-exemple suffit pour réfuter l’injectivité.','Identifier la minoration x² ≥ 0 pour l’image de g.'],
      ['Comparer g(m) et g(−m).','Chercher une valeur non atteinte.','Composer f et g.'],
      ['Calculer g('+m+') et g('+MN+m+').','Justifier que '+MN+(c+1)+' n’a pas d’antécédent.','Calculer (h ∘ g)('+m+') = '+fmt(fgm,0)+'.'])];
    return {table:tab,parts:[{intro:intro,cons:p1,table:tab},{intro:i2,cons:p2}],_g:{im:im,F:F,injective:injective,surj:surj,a:a,b:b,c:c,m:m,x0:x0,y0:y0,fgm:fgm}}; }

  /* ================= Logique et raisonnement ================= */
  function gLG(x){
    var r=x.rnd, a=pick(r,[-4,-3,-2,-1,0,1,2,3,4,5]), vrai=(a>=0), s=pick(r,[2,4,6]), dv=pick(r,[-3,-2,-1,0,1,2,3]), p=s*s/4+dv, val=p-s*s/4, cc=pick(r,[1,3,5]), TS=vrai?true:false;
    var cexI=null; if(!vrai) cexI=a+1; var cexR=(a>0)?(-a-1):(a-1);
    var intro='Le comité s’initie au raisonnement mathématique. Soit a = '+fmt(a,0)+'. On considère l’implication (I) : « pour tout réel x, si x ≥ a alors x² ≥ a² ».';
    var p1=[K('Écris la réciproque et la contraposée de l’implication (I).',
      'L’implication (I) est de la forme P ⟹ Q avec P : « x ≥ '+fmt(a,0)+' » et Q : « x² ≥ '+fmt(a*a,0)+' ». Sa réciproque est Q ⟹ P : « si x² ≥ '+fmt(a*a,0)+' alors x ≥ '+fmt(a,0)+' ». Sa contraposée est (non Q) ⟹ (non P) : « si x² < '+fmt(a*a,0)+' alors x < '+fmt(a,0)+' ». Une implication et sa contraposée sont équivalentes.',
      ['Identifier la forme P ⟹ Q.','Identifier la définition de la réciproque et de la contraposée.'],
      ['Écrire P et Q à partir de l’énoncé.','Écrire Q ⟹ P et (non Q) ⟹ (non P).'],
      ['Identifier P et Q.','Écrire la réciproque.','Écrire la contraposée.']),
     K('L’implication (I) est-elle vraie ? Sa réciproque est-elle vraie ? Justifie chaque réponse.',
      (vrai?(a===0?'Si x ≥ 0, alors x² ≥ 0 car un carré est toujours positif ou nul. L’implication (I) est donc vraie.':'Soit x ≥ '+fmt(a,0)+'. Comme '+fmt(a,0)+' > 0, on a x > 0. En multipliant l’inégalité x ≥ '+fmt(a,0)+' par x > 0, on obtient x² ≥ '+fmt(a,0)+'x. En la multipliant par '+fmt(a,0)+' > 0, on obtient '+fmt(a,0)+'x ≥ '+fmt(a*a,0)+'. Donc x² ≥ '+fmt(a*a,0)+'. L’implication (I) est donc vraie.'):('Prenons x = '+fmt(cexI,0)+' : on a bien x ≥ '+fmt(a,0)+' car '+fmt(cexI,0)+' ≥ '+fmt(a,0)+', mais x² = '+fmt(cexI*cexI,0)+' < '+fmt(a*a,0)+'. Ce contre-exemple montre que (I) est fausse.'))+' Pour la réciproque, prenons x = '+fmt(cexR,0)+' : x² = '+fmt(cexR*cexR,0)+' ≥ '+fmt(a*a,0)+' est vrai, mais x ≥ '+fmt(a,0)+' est faux car '+fmt(cexR,0)+' < '+fmt(a,0)+'. Ce contre-exemple montre que la réciproque est fausse.',
      ['Identifier qu’un contre-exemple suffit pour réfuter une implication universelle.','Identifier qu’une démonstration est nécessaire pour établir qu’elle est vraie.'],
      ['Étudier le signe de a.','Chercher un contre-exemple pour la réciproque.'],
      ['Conclure sur (I).','Exhiber un contre-exemple pour la réciproque.','Conclure.'])];
    var i2=(x.standalone2?'On rappelle que le comité s’initie au raisonnement mathématique. ':'')+'Pour tout entier naturel n, on pose E(n) = n(n + '+cc+'). On considère aussi la proposition (Q) : « pour tout réel x, x² '+MN+' '+s+'x + '+p+' ≥ 0 ».';
    var p2=[K('Montre, par disjonction de cas, que E(n) est pair pour tout entier naturel n.',
      'Tout entier naturel n est pair ou impair. Si n est pair, n = 2k et E(n) = 2k(2k + '+cc+') est un multiple de 2, donc pair. Si n est impair, n = 2k + 1 et n + '+cc+' = 2k + '+(cc+1)+' = 2(k + '+((cc+1)/2)+') est pair, donc E(n) = n(n + '+cc+') est un produit dont un facteur est pair : E(n) est pair. Dans les deux cas E(n) est pair.',
      ['Identifier la méthode : raisonner sur la parité de n.','Identifier qu’un produit est pair si l’un des facteurs est pair.'],
      ['Traiter le cas n pair.','Traiter le cas n impair.'],
      ['Étudier le cas n pair.','Étudier le cas n impair.','Conclure pour tout n.']),
     K('La proposition (Q) est-elle vraie ou fausse ? Écris sa négation et justifie.',
      'Pour tout réel x, x² '+MN+' '+s+'x + '+p+' = (x '+MN+' '+(s/2)+')²'+(val<0?' '+MN+' '+fmt(-val,0):' + '+fmt(val,0))+'. '+(val>=0?'Comme (x '+MN+' '+(s/2)+')² ≥ 0 et '+fmt(val,0)+' ≥ 0, la somme est positive pour tout x : (Q) est vraie. Sa négation « il existe un réel x tel que x² '+MN+' '+s+'x + '+p+' < 0 » est donc fausse.':'Pour x = '+(s/2)+' : '+(s/2)+'² '+MN+' '+s+' × '+(s/2)+' + '+p+' = '+fmt((s*s/4)-(s*s/2)+p,0)+' < 0. Ce contre-exemple montre que (Q) est fausse. Sa négation « il existe un réel x tel que x² '+MN+' '+s+'x + '+p+' < 0 » est vraie, le réel '+(s/2)+' en étant un témoin.'),
      ['Identifier la forme canonique d’un trinôme.','Identifier la négation d’une proposition universelle.'],
      ['Écrire x² − sx + p = (x − s/2)² + (p − s²/4).','Chercher un contre-exemple ou prouver la positivité.'],
      ['Mettre le trinôme sous forme canonique.','Conclure sur la vérité de (Q).','Écrire la négation de (Q).'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,vrai:vrai,s:s,p:p,val:val,cc:cc,cexI:cexI,cexR:cexR}}; }

  /* ================= Espace : parallélisme et positions relatives (cube) ================= */
  var VN=['A','B','C','D','E','F','G','H'], VU={A:[0,0,0],B:[1,0,0],C:[1,1,0],D:[0,1,0],E:[0,0,1],F:[1,0,1],G:[1,1,1],H:[0,1,1]};
  function sub3(u,v){ return [u[0]-v[0],u[1]-v[1],u[2]-v[2]]; }
  function cr3(u,v){ return [u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]]; }
  function dt3(u,v){ return u[0]*v[0]+u[1]*v[1]+u[2]*v[2]; }
  function zero3(u){ return u[0]===0&&u[1]===0&&u[2]===0; }
  function allPairs(){ var o=[]; for(var i=0;i<8;i++) for(var j=i+1;j<8;j++) o.push([VN[i],VN[j]]); return o; }
  function relLines(L1,L2){ var d1=sub3(VU[L1[1]],VU[L1[0]]), d2=sub3(VU[L2[1]],VU[L2[0]]), w=sub3(VU[L2[0]],VU[L1[0]]), c=cr3(d1,d2);
    if(zero3(c)){ return zero3(cr3(d1,w))?'confondues':'parallèles'; } return dt3(c,w)===0?'sécantes':'non coplanaires'; }
  function interSec(L1,L2){ // intersection de deux droites sécantes : P1 + t d1 = P2 + s d2 -> t rationnel
    var P1=VU[L1[0]], d1=sub3(VU[L1[1]],VU[L1[0]]), P2=VU[L2[0]], d2=sub3(VU[L2[1]],VU[L2[0]]), c=cr3(d1,d2), w=sub3(P2,P1), cc=dt3(c,c), tn=dt3(cr3(w,d2),c), t=[tn,cc];
    return [0,1,2].map(function(i){ var num=P1[i]*cc+tn*d1[i]; return [num,cc]; }); }
  function planeOf(T){ var n=cr3(sub3(VU[T[1]],VU[T[0]]),sub3(VU[T[2]],VU[T[0]])); return {n:n,d:-dt3(n,VU[T[0]])}; }
  function onPlane(pl,Pt){ return dt3(pl.n,Pt)+pl.d===0; }
  var LES={jardin:'une serre cubique',sport:'une tribune en forme de cube',coop:'un entrepôt cubique'};
  function gES(x){
    var r=x.rnd, a=pick(r,[2,3,4]), pairs=allPairs(), it, L1,L2,L3,L4, T1,T2, Rr;
    var par1=[]; pairs.forEach(function(p){ pairs.forEach(function(q){ if(p!==q&&relLines(p,q)==='parallèles') par1.push([p,q]); }); });
    var oth=[]; pairs.forEach(function(p){ pairs.forEach(function(q){ if(p!==q){ var rl=relLines(p,q); if(rl==='sécantes'||rl==='non coplanaires') oth.push([p,q,rl]); } }); });
    var pp=pick(r,par1); L1=pp[0]; L2=pp[1]; var oo=pick(r,oth); L3=oo[0]; L4=oo[1]; var rel2=oo[2];
    var tri=[]; for(it=0;it<8*7*6;it++){} var combos=[]; for(var i=0;i<8;i++) for(var j=i+1;j<8;j++) for(var k=j+1;k<8;k++){ var T=[VN[i],VN[j],VN[k]], n=cr3(sub3(VU[T[1]],VU[T[0]]),sub3(VU[T[2]],VU[T[0]])); if(!zero3(n)) combos.push(T); }
    var pl1,pl2,relP,tries=0; do{ T1=pick(r,combos); T2=pick(r,combos); pl1=planeOf(T1); pl2=planeOf(T2); var cc=cr3(pl1.n,pl2.n); relP=zero3(cc)?(T2.every(function(v){ return onPlane(pl1,VU[v]); })?'confondus':'parallèles'):'sécants'; tries++; }while((relP==='confondus'||(tries<80&&relP==='sécants'&&r()<0.5))&&tries<400);
    if(relP==='confondus'){ T1=['A','B','C']; T2=['E','F','G']; pl1=planeOf(T1); pl2=planeOf(T2); relP='parallèles'; }
    var ln=null; tries=0; do{ var Lq=pick(r,pairs); var T3=pick(r,combos); var plq=planeOf(T3), dd=sub3(VU[Lq[1]],VU[Lq[0]]), dn=dt3(plq.n,dd); var rel3=dn!==0?'sécante':(onPlane(plq,VU[Lq[0]])?'contenue':'parallèle'); if(rel3!=='contenue'||tries>60){ ln={L:Lq,T:T3,pl:plq,dn:dn,rel:rel3}; } tries++; }while(!ln);
    var nm=function(L){ return '('+L[0]+L[1]+')'; }, vec=function(L){ var v=sub3(VU[L[1]],VU[L[0]]); return [v[0]*a,v[1]*a,v[2]*a]; };
    var intro='Le comité étudie '+LES[x.W.id]+' représenté par un cube ABCDEFGH d’arête '+a+' m. Dans le repère orthonormé d’origine A, les sommets ont pour coordonnées A'+P3([0,0,0])+', B'+P3([a,0,0])+', C'+P3([a,a,0])+', D'+P3([0,a,0])+', E'+P3([0,0,a])+', F'+P3([a,0,a])+', G'+P3([a,a,a])+' et H'+P3([0,a,a])+'.';
    var v1=vec(L1), v2=vec(L2), k12=(v1[0]!==0)?v2[0]/v1[0]:(v1[1]!==0?v2[1]/v1[1]:v2[2]/v1[2]);
    var p1=[K('Détermine les coordonnées des vecteurs →'+L1[0]+L1[1]+' et →'+L2[0]+L2[1]+', puis étudie la position relative des droites '+nm(L1)+' et '+nm(L2)+'.',
      '→'+L1[0]+L1[1]+' '+P3(v1)+' et →'+L2[0]+L2[1]+' '+P3(v2)+'. On a →'+L2[0]+L2[1]+' = '+(k12===1?'':(k12===-1?MN:fmt(k12,0)+' '))+'→'+L1[0]+L1[1]+' : les vecteurs sont colinéaires, donc les droites '+nm(L1)+' et '+nm(L2)+' sont parallèles. Elles sont distinctes car le point '+L2[0]+' n’appartient pas à '+nm(L1)+' (les vecteurs →'+L1[0]+L2[0]+' et →'+L1[0]+L1[1]+' ne sont pas colinéaires). Les droites sont donc strictement parallèles.',
      ['Identifier le critère : deux droites sont parallèles si leurs vecteurs directeurs sont colinéaires.','Identifier qu’il faut vérifier que les droites ne sont pas confondues.'],
      ['Calculer les coordonnées des deux vecteurs.','Chercher un coefficient de colinéarité.'],
      ['Calculer →'+L1[0]+L1[1]+' et →'+L2[0]+L2[1]+'.','Constater la colinéarité.','Conclure sur le parallélisme.']),
     K('Étudie la position relative des droites '+nm(L3)+' et '+nm(L4)+' (parallèles, sécantes ou non coplanaires).',
      (function(){ var d3=vec(L3), d4=vec(L4), w=[VU[L4[0]][0]*a-VU[L3[0]][0]*a,VU[L4[0]][1]*a-VU[L3[0]][1]*a,VU[L4[0]][2]*a-VU[L3[0]][2]*a], c=cr3(d3,d4), tp=dt3(c,w); var base='→'+L3[0]+L3[1]+' '+P3(d3)+' et →'+L4[0]+L4[1]+' '+P3(d4)+' ne sont pas colinéaires : les droites ne sont pas parallèles. '; if(rel2==='sécantes'){ var I=interSec(L3,L4); return base+'On calcule (→'+L3[0]+L3[1]+' ∧ →'+L4[0]+L4[1]+') ⋅ →'+L3[0]+L4[0]+' = '+fmt(tp,0)+' = 0 : les droites sont coplanaires. Elles sont donc sécantes, en un point I de coordonnées ('+I.map(function(q){ return frac(q[0]*a,q[1]); }).join(' ; ')+').'; } return base+'On calcule (→'+L3[0]+L3[1]+' ∧ →'+L4[0]+L4[1]+') ⋅ →'+L3[0]+L4[0]+' = '+fmt(tp,0)+' ≠ 0 : les droites ne sont pas coplanaires. Elles ne sont ni parallèles ni sécantes.'; })(),
      ['Identifier les trois positions relatives possibles de deux droites de l’espace.','Identifier le critère de coplanarité par le produit mixte.'],
      ['Vérifier d’abord le parallélisme.','Calculer le produit mixte pour décider de la coplanarité.'],
      ['Comparer les vecteurs directeurs.','Calculer le produit mixte.','Conclure : '+rel2+'.'])];
    var N1=pl1.n, N2=pl2.n, nm3=function(T){ return '('+T.join('')+')'; };
    var i2=(x.standalone2?'On rappelle que ABCDEFGH est un cube d’arête '+a+' m, de sommets A'+P3([0,0,0])+', B'+P3([a,0,0])+', D'+P3([0,a,0])+' et E'+P3([0,0,a])+', et C, F, G, H définis comme précédemment. ':'')+'On considère les plans '+nm3(T1)+' et '+nm3(T2)+'.';
    var common=VN.filter(function(v){ return onPlane(pl1,VU[v])&&onPlane(pl2,VU[v]); });
    var p2=[K('Étudie la position relative des plans '+nm3(T1)+' et '+nm3(T2)+'.',
      'Un vecteur normal à '+nm3(T1)+' est →n₁ = →'+T1[0]+T1[1]+' ∧ →'+T1[0]+T1[2]+' = '+P3(N1.map(function(v){ return v*a*a; }))+', et un vecteur normal à '+nm3(T2)+' est →n₂ = →'+T2[0]+T2[1]+' ∧ →'+T2[0]+T2[2]+' = '+P3(N2.map(function(v){ return v*a*a; }))+'. '+(relP==='parallèles'?'Ces vecteurs sont colinéaires et le point '+T2[0]+' n’appartient pas au plan '+nm3(T1)+' : les plans sont strictement parallèles.':'Ces vecteurs ne sont pas colinéaires : les plans sont sécants suivant une droite'+(common.length>=2?', qui passe par les sommets '+common.join(' et ')+'.':(common.length===1?', qui passe par le sommet '+common[0]+'.':'.'))),
      ['Identifier la caractérisation du parallélisme de deux plans par leurs vecteurs normaux.','Identifier le produit vectoriel comme outil pour un vecteur normal.'],
      ['Calculer un vecteur normal à chaque plan.','Comparer ces vecteurs.'],
      ['Calculer →n₁ et →n₂.','Étudier leur colinéarité.','Conclure : plans '+relP+'.']),
     K('Étudie la position relative de la droite '+nm(ln.L)+' et du plan '+nm3(ln.T)+'.',
      (function(){ var d=vec(ln.L), n=ln.pl.n.map(function(v){ return v*a*a; }), dn=dt3(n,d); var s='Un vecteur normal à '+nm3(ln.T)+' est →n '+P3(n)+' et un vecteur directeur de '+nm(ln.L)+' est →d '+P3(d)+'. On a →n ⋅ →d = '+fmt(dn,0)+'. '; if(ln.rel==='sécante'){ var P0=VU[ln.L[0]], dd=sub3(VU[ln.L[1]],P0), t=-(dt3(ln.pl.n,P0)+ln.pl.d)/ln.dn; return s+'Ce produit scalaire est non nul : la droite n’est pas parallèle au plan, elle est sécante au plan en un seul point.'; } if(ln.rel==='contenue') return s+'Ce produit est nul et le point '+ln.L[0]+' appartient au plan '+nm3(ln.T)+' : la droite est contenue dans le plan.'; return s+'Ce produit est nul et le point '+ln.L[0]+' n’appartient pas au plan '+nm3(ln.T)+' : la droite est strictement parallèle au plan.'; })(),
      ['Identifier le critère : droite et plan parallèles si →d ⋅ →n = 0.','Identifier qu’il faut tester l’appartenance d’un point.'],
      ['Calculer un vecteur normal du plan et un vecteur directeur de la droite.','Calculer leur produit scalaire.'],
      ['Calculer →n et →d.','Calculer →n ⋅ →d.','Conclure : '+ln.rel+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,L1:L1,L2:L2,L3:L3,L4:L4,rel2:rel2,T1:T1,T2:T2,relP:relP,ln:{L:ln.L,T:ln.T,rel:ln.rel}}}; }

  /* ================= Rotation et cercles ================= */
  var NRM=[[3,4,5],[4,3,5],[6,8,10],[8,6,10],[5,12,13],[12,5,13],[0,5,5],[5,0,5],[3,-4,5],[-4,3,5]];
  function gRC(x){
    var r=x.rnd, O=[ri(r,-3,3),ri(r,-3,3)], A,it; for(it=0;it<100;it++){ A=[ri(r,-4,4),ri(r,-4,4)]; if(A[0]!==O[0]||A[1]!==O[1]) break; }
    var th=pick(r,['π/2','−π/2','π']), dx=A[0]-O[0], dy=A[1]-O[1], R=(th==='π/2')?[-dy,dx]:(th==='−π/2')?[dy,-dx]:[-dx,-dy], A1=[O[0]+R[0],O[1]+R[1]];
    var OA2=dx*dx+dy*dy, nm=(th==='π')?'demi-tour':(th==='π/2'?'quart de tour direct':'quart de tour indirect');
    var cen=[ri(r,-3,3),ri(r,-3,3)], rad=ri(r,3,6), nv=pick(r,NRM), dsel=pick(r,[-1,0,1]), dd=rad+dsel; if(dd<0) dd=0; var pcoef=nv[0], qcoef=nv[1], N=nv[2], sgn=pick(r,[1,-1]), ccoef=sgn*dd*N-(pcoef*cen[0]+qcoef*cen[1]);
    var posD=(dd<rad)?'sécante':(dd===rad?'tangente':'extérieure');
    var uv=pick(r,[[3,4,5],[4,3,5],[6,8,10],[0,5,5],[5,0,5],[5,12,13],[-3,4,5],[8,6,10]]), dc=uv[2], cs=pick(r,['ext','tgext','sec','tgint','int']), r2;
    if(cs==='ext'){ r2=dc-rad-ri(r,1,2); if(r2<1){ cs='sec'; } } if(cs==='tgext'){ r2=dc-rad; if(r2<1) cs='sec'; } if(cs==='tgint'){ r2=rad+dc; } if(cs==='int'){ r2=rad+dc+ri(r,1,2); }
    if(cs==='sec'){ var lo=Math.abs(rad-dc)+1, hi=rad+dc-1; r2=(hi>=lo)?ri(r,lo,hi):rad; if(!(Math.abs(rad-r2)<dc&&dc<rad+r2)){ r2=rad; } }
    var relC=(dc>rad+r2)?'extérieurs':(dc===rad+r2)?'tangents extérieurement':(dc>Math.abs(rad-r2))?'sécants':(dc===Math.abs(rad-r2)?'tangents intérieurement':'intérieurs l’un à l’autre');
    var c1=[cen[0]+uv[0],cen[1]+uv[1]], eqc='x² + y²'+tm(-2*cen[0],'x',false)+tm(-2*cen[1],'y',false)+tm(cen[0]*cen[0]+cen[1]*cen[1]-rad*rad,'',false)+' = 0', eqd=tm(pcoef,'x',true)+tm(qcoef,'y',!pcoef)+tm(ccoef,'',false)+' = 0', num=pcoef*cen[0]+qcoef*cen[1]+ccoef;
    var intro='Dans un plan muni d’un repère orthonormé, le comité considère la rotation ρ de centre '+pt2('Ω',O[0],O[1])+' et d’angle '+th+' (un '+nm+') et le point '+pt2('A',A[0],A[1])+'.';
    var p1=[K('Détermine les coordonnées de l’image A′ de A par la rotation ρ.',
      'Les coordonnées de →ΩA sont ('+par(A[0],0)+' '+MN+' '+par(O[0],0)+' ; '+par(A[1],0)+' '+MN+' '+par(O[1],0)+') = ('+fmt(dx,0)+' ; '+fmt(dy,0)+'). '+(th==='π/2'?'Un quart de tour direct transforme le vecteur (u ; v) en (−v ; u) : →ΩA′ ('+fmt(-dy,0)+' ; '+fmt(dx,0)+').':(th==='−π/2'?'Un quart de tour indirect transforme le vecteur (u ; v) en (v ; −u) : →ΩA′ ('+fmt(dy,0)+' ; '+fmt(-dx,0)+').':'Un demi-tour transforme le vecteur (u ; v) en (−u ; −v) : →ΩA′ ('+fmt(-dx,0)+' ; '+fmt(-dy,0)+').'))+' Donc x_A′ = '+par(O[0],0)+' + '+par(R[0],0)+' = '+fmt(A1[0],0)+' et y_A′ = '+par(O[1],0)+' + '+par(R[1],0)+' = '+fmt(A1[1],0)+', soit A′'+P3(A1)+'.',
      ['Identifier l’effet d’un quart de tour ou d’un demi-tour sur les coordonnées d’un vecteur.','Identifier les coordonnées de →ΩA.'],
      ['Calculer →ΩA.','Transformer ce vecteur par la rotation.','Ajouter les coordonnées de Ω.'],
      ['Calculer →ΩA : ('+fmt(dx,0)+' ; '+fmt(dy,0)+').','Calculer →ΩA′.','Écrire A′'+P3(A1)+'.']),
     K('Vérifie que ΩA′ = ΩA et interprète le résultat.',
      'On a ΩA² = '+par(dx,0)+'² + '+par(dy,0)+'² = '+OA2+' et ΩA′² = '+par(R[0],0)+'² + '+par(R[1],0)+'² = '+OA2+', donc ΩA′ = ΩA : la rotation conserve les distances au centre. '+(th==='π'?'De plus →ΩA′ = −→ΩA : A, Ω et A′ sont alignés et Ω est le milieu de [AA′].':'De plus →ΩA ⋅ →ΩA′ = '+par(dx,0)+' × '+par(R[0],0)+' + '+par(dy,0)+' × '+par(R[1],0)+' = '+fmt(dx*R[0]+dy*R[1],0)+', donc les droites (ΩA) et (ΩA′) sont perpendiculaires, ce qui correspond à un quart de tour.'),
      ['Identifier que la rotation conserve les distances.','Identifier le lien entre produit scalaire et orthogonalité.'],
      ['Calculer ΩA² et ΩA′².','Étudier l’angle entre →ΩA et →ΩA′.'],
      ['Calculer ΩA² = '+OA2+'.','Calculer ΩA′² = '+OA2+'.','Interpréter le résultat.'])];
    var i2=(x.standalone2?'Dans un plan muni d’un repère orthonormé, ':'Dans ce même repère, ')+'le comité étudie le cercle (C) d’équation '+eqc+', la droite (D) d’équation '+eqd+' et le cercle (C′) de centre '+pt2('Ω′',c1[0],c1[1])+' et de rayon '+r2+'.';
    var p2=[K('Détermine le centre et le rayon de (C), puis étudie la position relative de la droite (D) et du cercle (C).',
      'On écrit '+eqc.replace(' = 0','')+' sous la forme '+sq2('x',cen[0])+' + '+sq2('y',cen[1])+' = '+(rad*rad)+' : (C) est le cercle de centre O′'+P3(cen)+' et de rayon '+rad+'. La distance de O′ à (D) est d = |'+pcoef+' × '+par(cen[0],0)+' + '+qcoef+' × '+par(cen[1],0)+' + '+par(ccoef,0)+'| ÷ √('+pcoef+'² + '+qcoef+'²). On a '+pcoef+' × '+par(cen[0],0)+' + '+qcoef+' × '+par(cen[1],0)+' + '+par(ccoef,0)+' = '+fmt(num,0)+' et √('+pcoef+'² + '+qcoef+'²) = √'+(N*N)+' = '+N+'. Donc d = '+Math.abs(num)+' ÷ '+N+' = '+dd+'. Comme d '+(dd<rad?'<':(dd===rad?'=':'>'))+' '+rad+', la droite (D) est '+posD+' au cercle (C).',
      ['Identifier la forme canonique d’une équation de cercle.','Identifier la formule de la distance d’un point à une droite.'],
      ['Compléter les carrés pour trouver le centre et le rayon.','Comparer d et le rayon.'],
      ['Déterminer le centre O′'+P3(cen)+' et le rayon '+rad+'.','Calculer d = '+dd+'.','Conclure : droite '+posD+'.']),
     K('Étudie la position relative des cercles (C) et (C′).',
      'Les centres sont O′'+P3(cen)+' et Ω′'+P3(c1)+'. La distance entre les centres est O′Ω′ = √(('+par(c1[0],0)+' '+MN+' '+par(cen[0],0)+')² + ('+par(c1[1],0)+' '+MN+' '+par(cen[1],0)+')²) = √('+(uv[0]*uv[0])+' + '+(uv[1]*uv[1])+') = √'+(dc*dc)+' = '+dc+'. Les rayons sont '+rad+' et '+r2+' : leur somme vaut '+rad+' + '+r2+' = '+(rad+r2)+' et leur différence en valeur absolue vaut |'+rad+' '+MN+' '+r2+'| = '+Math.abs(rad-r2)+'. Comme '+(dc>rad+r2?dc+' > '+(rad+r2):(dc===rad+r2?dc+' = '+(rad+r2):(dc===Math.abs(rad-r2)?dc+' = '+Math.abs(rad-r2):(dc>Math.abs(rad-r2)?Math.abs(rad-r2)+' < '+dc+' < '+(rad+r2):dc+' < '+Math.abs(rad-r2)))))+', les cercles sont '+relC+'.',
      ['Identifier le critère de position relative de deux cercles : distance des centres, somme et différence des rayons.','Identifier la formule de la distance entre deux points.'],
      ['Calculer la distance des centres.','Comparer avec la somme et la différence des rayons.'],
      ['Calculer O′Ω′ = '+dc+'.','Calculer la somme et la différence des rayons.','Conclure : cercles '+relC+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{O:O,A:A,th:th,A1:A1,cen:cen,rad:rad,p:pcoef,q:qcoef,c:ccoef,dd:dd,posD:posD,c1:c1,r2:r2,dc:dc,relC:relC}}; }

  var reg=function(id,theme,themes,label,w1,build){ MOD['2D-'+id]={cls:'2nde D',theme:theme,themes:themes,label:label,w1:w1,build:build}; };
  reg('HM','2D \u2014 Homoth\u00e9tie & transformations',['2D \u2014 Homoth\u00e9tie & transformations'],'Homoth\u00e9tie',1,gHM);
  reg('AP','2D \u2014 Applications',['2D \u2014 Applications'],'Applications',2,gAP);
  reg('LG','2D \u2014 Logique & raisonnement',['2D \u2014 Logique & raisonnement'],'Logique et raisonnement',1,gLG);
  reg('ES','2D \u2014 Espace : parall\u00e9lisme',['2D \u2014 Espace : parall\u00e9lisme','2D \u2014 Espace : positions relatives'],'Espace : cube et positions relatives',1,gES);
  reg('RC','2D \u2014 Rotation & cercles',['2D \u2014 Rotation & cercles'],'Rotation et cercles',1,gRC);
})(typeof globalThis!=='undefined'?globalThis:this);
