/* ===== MQ_SOM : modules de problèmes sommatifs — 2nde A (séries littéraires : 2 problèmes, 1 h 30) ===== */
(function(G){
  'use strict';
  var M=G.MQ_SOM_MOD, MOD=M.MOD, fmt=M.fmt, ri=M.ri, pick=M.pick, gcd=M.gcd, money=M.money;
  var MN='−', NB=' ';
  function fixMinus(t){ return String(t).replace(/([\s(\[{;,]|^)-(?=\d)/g,'$1−'); }
  function K(t,s,A,Mm,O){ return M.K(fixMinus(t),fixMinus(s),A.map(fixMinus),Mm.map(fixMinus),O.map(fixMinus)); }
  function par(v,d){ return v<0?'('+fmt(v,d||0)+')':fmt(v,d||0); }
  function fr(n,d){ if(d<0){ n=-n; d=-d; } var g=gcd(Math.abs(n),d)||1; n/=g; d/=g; return d===1?fmt(n,0):(n<0?MN:'')+Math.abs(n)+'/'+d; }
  function frR(n,d){ if(d<0){ n=-n; d=-d; } var g=gcd(Math.abs(n),d)||1; return [n/g,d/g]; }
  /* terme a·v avec signe, pour écrire des polynômes : tm(3,'x',true) → 3x ; tm(-1,'x',false) → " − x" */
  function tm(c,v,first){ if(!c) return ''; var ab=Math.abs(c), b=v?((ab===1?'':fmt(ab,0))+v):fmt(ab,0); return first?((c<0?MN:'')+b):((c<0?' '+MN+' ':' + ')+b); }
  function aff(a,b,v){ v=v||'x'; var s=tm(a,v,true)+tm(b,'',!a); return s||'0'; }
  function who(x){ return {jardin:'le comité',sport:'le comité',coop:'le bureau'}[x.W.id]; }
  function Who(x){ var w=who(x); return w.charAt(0).toUpperCase()+w.slice(1); }
  function itv(a,b,oa,ob){ return (oa?']':'[')+a+' ; '+b+(ob?'[':']'); }
  var H={par:par,fr:fr,frR:frR,tm:tm,aff:aff,who:who,Who:Who,K:K,MN:MN,itv:itv};
  M.hA=H;

  /* ================= Proportionnalité & pourcentages ================= */
  var LPP={jardin:['le plan du jardin','la parcelle des légumes','une allée','représentée','de la parcelle des légumes'],sport:['le plan du complexe sportif','le terrain de handball','une piste d’athlétisme','représenté','du terrain de handball'],coop:['le plan de la boutique','la salle de vente','un comptoir','représentée','de la salle de vente']};
  function gPP(x){
    var r=x.rnd, L=LPP[x.W.id], e=pick(r,[200,250,500]), a=ri(r,4,9)*2, b=ri(r,2,Math.max(3,a/2-1))*2, La=a*e/100, Lb=b*e/100, d=pick(r,[5,10,15,20]), dp=d*100/e;
    var P=ri(r,2,9)*10000, t1=pick(r,[10,20,25]), t2=pick(r,[10,20]), P1=P*(100+t1)/100, P2=P1*(100-t2)/100, glob=(P2-P)/P*100;
    var intro='Sur '+L[0]+', dessiné à l’échelle 1/'+e+', '+L[1]+' est '+L[3]+' par un rectangle de '+a+' cm sur '+b+' cm.';
    var p1=[K('Calcule les dimensions réelles '+L[4]+', en mètres, puis son aire réelle.',
      'L’échelle 1/'+e+' signifie que 1 cm sur le plan représente '+e+' cm en réalité. Longueur réelle : '+a+' × '+e+' = '+fmt(a*e,0)+' cm, c’est-à-dire '+fmt(La,1)+' m. Largeur réelle : '+b+' × '+e+' = '+fmt(b*e,0)+' cm, c’est-à-dire '+fmt(Lb,1)+' m. Aire réelle : '+fmt(La,1)+' × '+fmt(Lb,1)+' = '+fmt(La*Lb,2)+' m².',
      ['Identifier la signification de l’échelle 1/'+e+'.','Identifier les dimensions sur le plan.'],
      ['Traduire : dimension réelle = dimension sur le plan × '+e+'.','Écrire l’aire du rectangle : longueur × largeur.'],
      ['Calculer la longueur réelle : '+fmt(La,1)+' m.','Calculer la largeur réelle : '+fmt(Lb,1)+' m.','Calculer l’aire : '+fmt(La*Lb,2)+' m².']),
     K('Sur le terrain, '+L[2]+' mesure réellement '+d+' m. Quelle longueur la représente sur le plan ?',
      d+' m, soit '+fmt(d*100,0)+' cm. Sur le plan, on divise par '+e+' : '+fmt(d*100,0)+' ÷ '+e+' = '+fmt(dp,1)+' cm. '+Who(x)+' tracera donc un segment de '+fmt(dp,1)+' cm.',
      ['Identifier la longueur réelle et l’échelle.','Identifier qu’il faut convertir dans la même unité.'],
      ['Traduire : longueur sur le plan = longueur réelle ÷ '+e+'.'],
      ['Convertir '+d+' m en cm.','Calculer '+fmt(d*100,0)+' ÷ '+e+'.','Conclure : '+fmt(dp,1)+' cm.'])];
    var i2='Un équipement coûte '+money(P)+'. Le fournisseur annonce d’abord une augmentation de '+t1+' %, puis accorde une remise de '+t2+' % sur le nouveau prix.';
    var p2=[K('Calcule le prix de l’équipement après l’augmentation de '+t1+' %.',
      'Augmenter de '+t1+' % revient à multiplier par 1 + '+t1+'/100 = '+fmt(1+t1/100,2)+'. Nouveau prix : '+fmt(P,0)+' × '+fmt(1+t1/100,2)+' = '+money(P1)+'.',
      ['Identifier le prix initial et le taux d’augmentation.','Identifier le coefficient multiplicateur associé à une hausse.'],
      ['Traduire : nouveau prix = prix × (1 + '+t1+'/100).'],
      ['Calculer le coefficient : '+fmt(1+t1/100,2)+'.','Calculer '+fmt(P,0)+' × '+fmt(1+t1/100,2)+'.','Conclure : '+money(P1)+'.']),
     K('Calcule le prix final après la remise de '+t2+' %. Le prix final est-il égal au prix initial ? Donne le pourcentage d’évolution global.',
      'Une remise de '+t2+' % revient à multiplier par 1 '+MN+' '+t2+'/100 = '+fmt(1-t2/100,2)+'. Prix final : '+fmt(P1,0)+' × '+fmt(1-t2/100,2)+' = '+money(P2)+'. '+(P2===P?'Le prix final est égal au prix initial : l’évolution globale est nulle.':'Le prix final n’est pas égal au prix initial. Évolution : ('+fmt(P2,0)+' '+MN+' '+fmt(P,0)+') ÷ '+fmt(P,0)+' × 100 = '+fmt(glob,1)+' %, soit '+(glob>0?'une hausse':'une baisse')+' globale de '+fmt(Math.abs(glob),1)+' %.'),
      ['Identifier le prix après augmentation et le taux de remise.','Identifier qu’une hausse puis une baisse ne se compensent pas en général.'],
      ['Traduire : prix final = prix augmenté × (1 '+MN+' '+t2+'/100).','Écrire le taux global : (prix final '+MN+' prix initial) ÷ prix initial × 100.'],
      ['Calculer le prix final : '+money(P2)+'.','Comparer avec '+money(P)+'.','Calculer le pourcentage d’évolution : '+fmt(glob,1)+' %.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{e:e,a:a,b:b,La:La,Lb:Lb,d:d,dp:dp,P:P,t1:t1,t2:t2,P1:P1,P2:P2,glob:glob}}; }

  /* ================= Fonctions numériques : généralités ================= */
  function gFG(x){
    var r=x.rnd, c,p,it,divs,dv,x0,y0;
    for(it=0;it<300;it++){ c=ri(r,-4,4); p=ri(r,-5,5); if(c===0||p===0||p+c===0||p===-c) continue; divs=[]; for(var k=-Math.abs(p+c);k<=Math.abs(p+c);k++) if(k!==0&&(p+c)%k===0&&k!==-(p+c)) divs.push(k); dv=pick(r,divs); x0=c+dv; y0=(x0+p)/dv; if(x0!==0&&y0!==1&&Math.abs(y0)<=12) break; }
    var f0=frR(p,-c), fs='(x'+(p<0?' '+MN+' '+(-p):' + '+p)+') ÷ (x'+(c<0?' + '+(-c):' '+MN+' '+c)+')', t=ri(r,1,3), m=pick(r,[1,2,3])*(r()<0.5?-1:1);
    var xs=[c-2,c-1,c+1,c+2].filter(function(v){ return v!==-p; }).slice(0,3);
    var intro='Pour modéliser une quantité, '+who(x)+' utilise la fonction f définie par f(x) = '+fs+'.';
    var imgs=xs.map(function(v){ return 'f('+fmt(v,0)+') = ('+fmt(v,0)+(p<0?' '+MN+' '+(-p):' + '+p)+') ÷ ('+fmt(v,0)+(c<0?' + '+(-c):' '+MN+' '+c)+') = '+fmt(v+p,0)+' ÷ '+par(v-c)+' = '+fr(v+p,v-c); }).join(' ; ');
    var p1=[K('Détermine l’ensemble de définition D_f de la fonction f, puis calcule l’image par f de chacun des nombres '+xs.map(function(v){ return fmt(v,0); }).join(', ')+'.',
      'f(x) existe si et seulement si le dénominateur n’est pas nul : x'+(c<0?' + '+(-c):' '+MN+' '+c)+' ≠ 0, soit x ≠ '+fmt(c,0)+'. Donc D_f = ℝ ∖ {'+fmt(c,0)+'}. '+imgs+'.',
      ['Identifier qu’un quotient n’existe que si son dénominateur est non nul.','Identifier la valeur interdite.'],
      ['Traduire : x ∈ D_f ⟺ x'+(c<0?' + '+(-c):' '+MN+' '+c)+' ≠ 0.','Remplacer x par chaque nombre dans f(x).'],
      ['Résoudre x'+(c<0?' + '+(-c):' '+MN+' '+c)+' = 0 : x = '+fmt(c,0)+'.','Écrire D_f = ℝ ∖ {'+fmt(c,0)+'}.','Calculer les trois images.']),
     K('Détermine le (ou les) antécédent(s) de '+fmt(y0,0)+' par f.',
      'On résout f(x) = '+fmt(y0,0)+' avec x ≠ '+fmt(c,0)+' : x'+(p<0?' '+MN+' '+(-p):' + '+p)+' = '+fmt(y0,0)+'(x'+(c<0?' + '+(-c):' '+MN+' '+c)+'), soit x'+(p<0?' '+MN+' '+(-p):' + '+p)+' = '+aff(y0,-y0*c)+'. Donc '+aff(1-y0,0)+' = '+fmt(-y0*c-p,0)+' et x = '+fmt(-y0*c-p,0)+' ÷ '+par(1-y0)+' = '+fmt(x0,0)+'. Comme '+fmt(x0,0)+' ≠ '+fmt(c,0)+', le nombre '+fmt(y0,0)+' a un seul antécédent : '+fmt(x0,0)+'. Vérification : f('+fmt(x0,0)+') = '+fmt(x0+p,0)+' ÷ '+par(x0-c)+' = '+fmt(y0,0)+'.',
      ['Identifier la définition d’un antécédent : f(x) = '+fmt(y0,0)+'.','Identifier la valeur interdite '+fmt(c,0)+'.'],
      ['Écrire l’équation f(x) = '+fmt(y0,0)+' et la transformer en équation du premier degré.'],
      ['Développer et réduire.','Résoudre : x = '+fmt(x0,0)+'.','Vérifier que '+fmt(x0,0)+' ∈ D_f et conclure.'])];
    var cc=pick(r,[1,2,3,4,5]);
    var i2='On considère les fonctions g et h définies par g(x) = (x² '+MN+' '+(cc*cc)+') ÷ (x '+MN+' '+cc+') et h(x) = x + '+cc+'.';
    var p2=[K('Détermine les ensembles de définition D_g et D_h, puis montre que, pour tout x de D_g, g(x) = h(x).',
      'g(x) existe si x '+MN+' '+cc+' ≠ 0, donc D_g = ℝ ∖ {'+cc+'} ; h est une fonction affine, donc D_h = ℝ. Pour x ≠ '+cc+' : x² '+MN+' '+(cc*cc)+' = (x '+MN+' '+cc+')(x + '+cc+'), donc g(x) = (x '+MN+' '+cc+')(x + '+cc+') ÷ (x '+MN+' '+cc+') = x + '+cc+' = h(x).',
      ['Identifier la valeur interdite de g.','Identifier l’identité remarquable a² '+MN+' b² = (a '+MN+' b)(a + b).'],
      ['Factoriser le numérateur de g(x).','Simplifier par x '+MN+' '+cc+' (non nul sur D_g).'],
      ['Écrire D_g = ℝ ∖ {'+cc+'} et D_h = ℝ.','Factoriser : (x '+MN+' '+cc+')(x + '+cc+').','Conclure : g(x) = h(x) sur D_g.']),
     K('Les fonctions g et h sont-elles égales ? Justifie, puis calcule h('+cc+').',
      'Deux fonctions sont égales si elles ont le même ensemble de définition et la même image pour tout x de cet ensemble. Ici D_g = ℝ ∖ {'+cc+'} et D_h = ℝ : D_g ≠ D_h, donc g et h ne sont pas égales (elles coïncident seulement sur ℝ ∖ {'+cc+'}). h('+cc+') = '+cc+' + '+cc+' = '+(2*cc)+', alors que g('+cc+') n’existe pas.',
      ['Identifier la définition de l’égalité de deux fonctions.','Identifier les ensembles de définition trouvés.'],
      ['Comparer D_g et D_h.'],
      ['Constater que D_g ≠ D_h.','Conclure : g ≠ h.','Calculer h('+cc+') = '+(2*cc)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{c:c,p:p,x0:x0,y0:y0,xs:xs,cc:cc}}; }

  /* ================= Notion de suite numérique ================= */
  var LSU={jardin:['le nombre total de plants repiqués','plants'],sport:['le nombre total de supporters inscrits','supporters'],coop:['le nombre total de cahiers vendus','cahiers']};
  function gSU(x){
    var r=x.rnd, L=LSU[x.W.id], a=ri(r,3,9), b=ri(r,5,20), n0=ri(r,12,25), N=a*n0+b, v0=ri(r,4,8), m=ri(r,1,3);
    var u=function(n){ return a*n+b; }, v=[v0]; for(var i=0;i<4;i++) v.push(2*v[i]-m);
    var intro='On note uₙ '+L[0]+' au bout de n semaines : pour tout entier naturel n, uₙ = '+a+'n + '+b+'.';
    var p1=[K('Calcule u₀, u₁, u₂ et u₁₀. Interprète u₀.',
      'u₀ = '+a+' × 0 + '+b+' = '+b+' ; u₁ = '+a+' × 1 + '+b+' = '+u(1)+' ; u₂ = '+a+' × 2 + '+b+' = '+u(2)+' ; u₁₀ = '+a+' × 10 + '+b+' = '+u(10)+'. u₀ = '+b+' est le nombre de '+L[1]+' au départ (semaine 0).',
      ['Identifier que la suite est définie par une formule explicite.','Identifier le sens de l’indice n (le nombre de semaines).'],
      ['Remplacer n par 0, 1, 2 et 10 dans la formule.'],
      ['Calculer u₀ et u₁.','Calculer u₂ et u₁₀.','Interpréter u₀.']),
     K('Au bout de combien de semaines atteindra-t-on '+fmt(N,0)+' '+L[1]+' ?',
      'On cherche l’entier n tel que uₙ = '+fmt(N,0)+' : '+a+'n + '+b+' = '+fmt(N,0)+', soit '+a+'n = '+fmt(N,0)+' '+MN+' '+b+' = '+fmt(N-b,0)+', donc n = '+fmt(N-b,0)+' ÷ '+a+' = '+n0+'. On atteindra '+fmt(N,0)+' '+L[1]+' au bout de '+n0+' semaines.',
      ['Identifier la valeur à atteindre.','Identifier que l’inconnue est le rang n.'],
      ['Traduire par l’équation '+a+'n + '+b+' = '+fmt(N,0)+'.'],
      ['Isoler '+a+'n.','Calculer n = '+n0+'.','Conclure en semaines.'])];
    var i2=(x.standalone2?'On rappelle que, pour tout entier naturel n, uₙ = '+a+'n + '+b+'. ':'')+'Une seconde suite (vₙ) est définie par v₀ = '+v0+' et, pour tout entier naturel n, vₙ₊₁ = 2vₙ '+MN+' '+m+'.';
    var p2=[K('Calcule v₁, v₂ et v₃.',
      'v₁ = 2 × '+v[0]+' '+MN+' '+m+' = '+v[1]+' ; v₂ = 2 × '+v[1]+' '+MN+' '+m+' = '+v[2]+' ; v₃ = 2 × '+v[2]+' '+MN+' '+m+' = '+v[3]+'.',
      ['Identifier que la suite est définie par une relation de récurrence.','Identifier le premier terme v₀ = '+v0+'.'],
      ['Utiliser vₙ₊₁ = 2vₙ '+MN+' '+m+' de proche en proche.'],
      ['Calculer v₁.','Calculer v₂.','Calculer v₃.']),
     K('Calcule v₄. Peut-on calculer directement v₁₀ sans connaître v₉ avec cette définition ? Compare les deux façons de définir une suite.',
      'v₄ = 2 × '+v[3]+' '+MN+' '+m+' = '+v[4]+'. Avec une relation de récurrence, chaque terme se calcule à partir du précédent : pour obtenir v₁₀ il faut connaître v₉ (donc tous les termes précédents). Au contraire, avec une formule explicite comme uₙ = '+a+'n + '+b+', on calcule directement n’importe quel terme (u₁₀ = '+u(10)+').',
      ['Identifier la relation de récurrence.','Identifier la différence entre formule explicite et récurrence.'],
      ['Appliquer la récurrence à v₃.'],
      ['Calculer v₄ = '+v[4]+'.','Expliquer le calcul de proche en proche.','Comparer avec la formule explicite.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,N:N,n0:n0,v:v,m:m}}; }

  /* ================= Dénombrement élémentaire ================= */
  var LDN={jardin:['élèves du club jardinage','arrosent les légumes','désherbent les planches'],sport:['joueurs inscrits au tournoi','jouent au football','jouent au handball'],coop:['élèves membres de la coopérative','tiennent la caisse','rangent le stock']};
  function gDN(x){
    var r=x.rnd, L=LDN[x.W.id], N=ri(r,40,60), c=ri(r,4,10), a=ri(r,c+8,c+18), b=ri(r,c+6,c+15); while(a+b-c>N-3){ a--; b--; }
    var U=a+b-c, nn=N-U, e=ri(r,2,4), p=ri(r,3,5), d=ri(r,2,3);
    var intro='Parmi les '+N+' '+L[0]+', '+a+' '+L[1]+', '+b+' '+L[2]+' et '+c+' font les deux activités.';
    var p1=[K('Combien d’élèves font au moins l’une des deux activités ? Justifie à l’aide d’une propriété du cours.',
      'Notons A l’ensemble de ceux qui '+L[1]+' et B celui de ceux qui '+L[2]+'. On a Card(A) = '+a+', Card(B) = '+b+' et Card(A ∩ B) = '+c+'. D’après la propriété Card(A ∪ B) = Card(A) + Card(B) '+MN+' Card(A ∩ B) : Card(A ∪ B) = '+a+' + '+b+' '+MN+' '+c+' = '+U+'. '+U+' élèves font au moins une activité.',
      ['Identifier les ensembles A, B et A ∩ B.','Identifier que « au moins l’une » correspond à A ∪ B.'],
      ['Traduire par Card(A ∪ B) = Card(A) + Card(B) '+MN+' Card(A ∩ B).'],
      ['Remplacer par les cardinaux.','Calculer : '+U+'.','Conclure.']),
     K('Combien d’élèves ne font aucune des deux activités ? Combien font seulement la première activité ?',
      'Ceux qui ne font aucune activité forment le complémentaire de A ∪ B : '+N+' '+MN+' '+U+' = '+nn+'. Ceux qui font seulement la première activité sont dans A sans être dans B : '+a+' '+MN+' '+c+' = '+(a-c)+'.',
      ['Identifier le complémentaire de A ∪ B.','Identifier la partie de A qui n’est pas dans B.'],
      ['Traduire : aucune activité = '+N+' '+MN+' Card(A ∪ B) ; seulement A = Card(A) '+MN+' Card(A ∩ B).'],
      ['Calculer '+N+' '+MN+' '+U+' = '+nn+'.','Calculer '+a+' '+MN+' '+c+' = '+(a-c)+'.','Conclure.'])];
    var i2='Pour le repas de fin d’année, le menu comprend une entrée à choisir parmi '+e+', un plat à choisir parmi '+p+' et un dessert à choisir parmi '+d+'.';
    var p2=[K('À l’aide d’un arbre de choix (que tu décriras), détermine le nombre de menus différents possibles.',
      'L’arbre comporte '+e+' branches pour l’entrée ; de chacune partent '+p+' branches pour le plat, puis de chacune '+d+' branches pour le dessert. Nombre de menus : '+e+' × '+p+' × '+d+' = '+(e*p*d)+'.',
      ['Identifier les trois choix successifs et leurs nombres de possibilités.','Identifier qu’un menu est un chemin de l’arbre.'],
      ['Construire (ou décrire) l’arbre de choix.','Traduire : nombre de menus = produit des nombres de choix.'],
      ['Décrire les niveaux de l’arbre.','Calculer '+e+' × '+p+' × '+d+'.','Conclure : '+(e*p*d)+' menus.']),
     K('Combien de menus comportent un plat imposé (le plat du jour) ? Quelle proportion de l’ensemble des menus cela représente-t-il ?',
      'Le plat étant imposé, il reste à choisir l’entrée et le dessert : '+e+' × '+d+' = '+(e*d)+' menus. Proportion : '+(e*d)+' ÷ '+(e*p*d)+' = '+fr(e*d,e*p*d)+'.',
      ['Identifier que le choix du plat est fixé.','Identifier les choix restants.'],
      ['Traduire par un produit des choix restants.','Écrire la proportion comme un quotient.'],
      ['Calculer '+e+' × '+d+' = '+(e*d)+'.','Calculer la proportion.','Simplifier : '+fr(e*d,e*p*d)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{N:N,a:a,b:b,c:c,U:U,nn:nn,e:e,p:p,d:d}}; }

  /* ================= Nombres réels & calculs dans ℝ ================= */
  function gNR(x){
    var r=x.rnd, k=ri(r,3,9), z=ri(r,2,6), dn=pick(r,[[11,4,'2,75'],[7,4,'1,75'],[13,5,'2,6'],[9,8,'1,125'],[3,5,'0,6']]), q=pick(r,[[2,3],[5,7],[4,9],[1,6]]), irr=pick(r,['√2','√5','π','√7']);
    var nums=[{s:'√'+(k*k),t:'ℕ',w:'√'+(k*k)+' = '+k+', entier naturel'},{s:MN+(z*4)+'/4',t:'ℤ',w:MN+(z*4)+'/4 = '+MN+z+', entier relatif négatif'},{s:dn[0]+'/'+dn[1],t:'𝔻',w:dn[0]+'/'+dn[1]+' = '+dn[2]+', nombre décimal non entier'},{s:q[0]+'/'+q[1],t:'ℚ',w:q[0]+'/'+q[1]+' : rationnel non décimal (son dénominateur irréductible '+q[1]+' n’est pas de la forme 2ᵃ × 5ᵇ)'},{s:irr,t:'ℝ',w:irr+' : irrationnel, il appartient seulement à ℝ'}];
    nums=M.shuffle(r,nums);
    var a,b,c,d,e,f,it2; for(it2=0;it2<200;it2++){ a=ri(r,1,5); b=pick(r,[2,3,4,6]); c=ri(r,1,5); d=pick(r,[3,5,7]); e=pick(r,[2,3,4,5,6,9,10,14,15]); f=pick(r,[2,3,4,5,7]); if(gcd(a,b)===1&&gcd(c,d)===1&&gcd(e,f)===1) break; }
    var mn=c*e, md=d*f, An=a*md+mn*b, Ad=b*md, Ar=frR(An,Ad);
    var intro='Lors d’un jeu mathématique, '+who(x)+' affiche les nombres suivants : '+nums.map(function(o){ return o.s; }).join(' ; ')+'.';
    var p1=[K('Pour chacun de ces nombres, indique le plus petit des ensembles ℕ, ℤ, 𝔻, ℚ ou ℝ auquel il appartient.',
      'On rappelle ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ. '+nums.map(function(o){ return o.w+' : '+o.t; }).join(' ; ')+'.',
      ['Identifier les ensembles de nombres et leurs inclusions.','Identifier les écritures à simplifier (racine, quotient).'],
      ['Simplifier chaque écriture avant de la classer.'],
      ['Classer les nombres entiers.','Classer les décimaux et rationnels.','Classer le nombre irrationnel.']),
     K('Calcule A = '+a+'/'+b+' + '+c+'/'+d+' × '+e+'/'+f+' et donne le résultat sous forme de fraction irréductible.',
      'La multiplication est prioritaire : '+c+'/'+d+' × '+e+'/'+f+' = '+mn+'/'+md+'. Puis A = '+a+'/'+b+' + '+mn+'/'+md+' = '+(a*md)+'/'+(b*md)+' + '+(mn*b)+'/'+(b*md)+' = '+An+'/'+Ad+' = '+fr(An,Ad)+'.',
      ['Identifier la priorité de la multiplication sur l’addition.','Identifier les règles de calcul sur les fractions.'],
      ['Écrire le produit, puis réduire au même dénominateur.'],
      ['Calculer le produit : '+mn+'/'+md+'.','Calculer la somme : '+An+'/'+Ad+'.','Simplifier : '+fr(An,Ad)+'.'])];
    var u=ri(r,2,9), um=ri(r,2,6), v=ri(r,2,9), vn=ri(r,2,6), w=ri(r,2,5), prod=u*v, pm=um+vn, ps=prod>=10?[prod/10,pm+1]:[prod,pm];
    var bb=pick(r,[2,3]), m1=ri(r,3,6), m2=ri(r,2,5), m3=ri(r,2,m1+m2-1), ex=m1+m2-m3;
    var i2='Pour estimer de grandes quantités, on utilise des puissances de 10 : B = ('+u+' × 10^'+um+') × ('+v+' × 10^'+vn+') et C = ('+bb+'^'+m1+' × '+bb+'^'+m2+') ÷ '+bb+'^'+m3+'.';
    var p2=[K('Donne l’écriture scientifique de B.',
      'B = ('+u+' × '+v+') × 10^'+um+' × 10^'+vn+' = '+prod+' × 10^('+um+' + '+vn+') = '+prod+' × 10^'+pm+(prod>=10?' = '+fmt(ps[0],1)+' × 10^'+ps[1]:'')+'. L’écriture scientifique de B est '+fmt(ps[0],1)+' × 10^'+ps[1]+'.',
      ['Identifier la définition de l’écriture scientifique : a × 10ⁿ avec 1 ≤ a < 10.','Identifier la règle 10ᵐ × 10ⁿ = 10^(m + n).'],
      ['Regrouper les nombres et les puissances de 10.'],
      ['Calculer '+u+' × '+v+' = '+prod+'.','Calculer l’exposant '+pm+'.','Écrire l’écriture scientifique.']),
     K('Écris C sous la forme d’une seule puissance de '+bb+', puis calcule sa valeur.',
      'On a '+bb+'^'+m1+' × '+bb+'^'+m2+' = '+bb+'^('+m1+' + '+m2+') = '+bb+'^'+(m1+m2)+', puis C = '+bb+'^'+(m1+m2)+' ÷ '+bb+'^'+m3+' = '+bb+'^('+(m1+m2)+' '+MN+' '+m3+') = '+bb+'^'+ex+' = '+fmt(Math.pow(bb,ex),0)+'.',
      ['Identifier les règles aⁿ × aᵖ = a^(n + p) et aⁿ ÷ aᵖ = a^(n − p).','Identifier la base commune '+bb+'.'],
      ['Appliquer les règles des puissances.'],
      ['Calculer l’exposant du produit.','Calculer l’exposant du quotient : '+ex+'.','Calculer '+bb+'^'+ex+' = '+fmt(Math.pow(bb,ex),0)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{nums:nums,An:Ar[0],Ad:Ar[1],a:a,b:b,c:c,d:d,e:e,f:f,u:u,v:v,um:um,vn:vn,ps:ps,bb:bb,ex:ex}}; }

  /* ================= Racine carrée ================= */
  function gRC(x){
    var r=x.rnd, base=pick(r,[2,3,5]), ks=M.shuffle(r,[2,3,4,5]).slice(0,3), sg=[1,1,-1], tot=ks[0]+ks[1]-ks[2];
    var rads=ks.map(function(k){ return k*k*base; });
    var Es='√'+rads[0]+' + √'+rads[1]+' '+MN+' √'+rads[2];
    var intro='Dans un exercice, '+who(x)+' doit simplifier l’expression E = '+Es+'.';
    var res=tot===1?'√'+base:(tot===-1?MN+'√'+base:(tot===0?'0':fmt(tot,0)+'√'+base));
    var p1=[K('Écris chacun des nombres √'+rads[0]+', √'+rads[1]+' et √'+rads[2]+' sous la forme a√'+base+', a étant un entier naturel.',
      ks.map(function(k,i){ return '√'+rads[i]+' = √('+(k*k)+' × '+base+') = √'+(k*k)+' × √'+base+' = '+k+'√'+base; }).join(' ; ')+'.',
      ['Identifier la propriété √(ab) = √a × √b pour a ≥ 0 et b ≥ 0.','Identifier le plus grand carré parfait qui divise chaque nombre.'],
      ['Décomposer chaque nombre en produit d’un carré parfait par '+base+'.'],
      ['Simplifier √'+rads[0]+'.','Simplifier √'+rads[1]+'.','Simplifier √'+rads[2]+'.']),
     K('Déduis-en l’écriture la plus simple de E.',
      'E = '+ks[0]+'√'+base+' + '+ks[1]+'√'+base+' '+MN+' '+ks[2]+'√'+base+' = ('+ks[0]+' + '+ks[1]+' '+MN+' '+ks[2]+')√'+base+' = '+res+'.',
      ['Identifier les écritures obtenues à la consigne précédente.','Identifier le facteur commun √'+base+'.'],
      ['Factoriser par √'+base+'.'],
      ['Remplacer chaque racine par son écriture simplifiée.','Calculer '+ks[0]+' + '+ks[1]+' '+MN+' '+ks[2]+' = '+tot+'.','Conclure : E = '+res+'.'])];
    var k=ri(r,4,15), S=k*k, d1=k*Math.SQRT2, hh=pick(r,[[9,4],[25,16],[49,4],[16,9],[36,25]]);
    var i2='Un espace carré a une aire de '+S+' m². On veut tendre une corde le long de sa diagonale.';
    var p2=[K('Calcule la longueur du côté de cet espace carré.',
      'Si c est la longueur du côté, c² = '+S+' avec c > 0, donc c = √'+S+' = '+k+' m.',
      ['Identifier la formule de l’aire d’un carré : c².','Identifier que c est un nombre positif.'],
      ['Traduire par c² = '+S+'.'],
      ['Reconnaître que c = √'+S+'.','Calculer √'+S+' = '+k+'.','Conclure avec l’unité.']),
     K('Calcule la longueur exacte de la diagonale, puis une valeur approchée au dixième. Simplifie aussi √('+hh[0]+'/'+hh[1]+').',
      'D’après la propriété de Pythagore dans le carré : d² = '+k+'² + '+k+'² = 2 × '+S+', donc d = √(2 × '+S+') = √'+S+' × √2 = '+k+'√2 m ≈ '+fmt(d1,1)+' m. Par ailleurs √('+hh[0]+'/'+hh[1]+') = √'+hh[0]+' ÷ √'+hh[1]+' = '+Math.sqrt(hh[0])+'/'+Math.sqrt(hh[1])+'.',
      ['Identifier le triangle rectangle formé par deux côtés et la diagonale.','Identifier les propriétés √(ab) = √a × √b et √(a/b) = √a ÷ √b.'],
      ['Écrire d² = c² + c².','Appliquer les propriétés de la racine carrée.'],
      ['Calculer d = '+k+'√2.','Donner l’arrondi : '+fmt(d1,1)+' m.','Simplifier √('+hh[0]+'/'+hh[1]+') = '+Math.sqrt(hh[0])+'/'+Math.sqrt(hh[1])+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{base:base,ks:ks,tot:tot,k:k,S:S,hh:hh}}; }

  /* ================= Équations & inéquations du premier degré ================= */
  function gEQ(x){
    var r=x.rnd, n=ri(r,4,7), m=ri(r,2,n-2), X=ri(r,4,12)*500;
    /* (a1 x + b1)(a2 x + b2) = 0 avec racines rationnelles simples */
    var NZ=[-5,-4,-3,-2,-1,1,2,3,4,5], a1=pick(r,[1,2,3]), x1=pick(r,NZ), a2=pick(r,[1,2]), x2=pick(r,NZ.filter(function(v){ return v!==x1; }));
    var f1=aff(a1,-a1*x1), f2=aff(a2,-a2*x2);
    /* n·x = m·x + L, avec L = (n − m)·X */
    var e=x.W.eq, Lot=(n-m)*X, intro='Chez le fournisseur, '+n+' '+e.as+' coûtent autant que '+m+' '+e.as+' et un lot d’accessoires vendu '+money(Lot)+'.';
    var p1=[K('On note x le prix d’un '+e.a+'. Écris une équation traduisant la situation, puis détermine le prix d’un '+e.a+'.',
      'La situation se traduit par '+n+'x = '+m+'x + '+fmt(Lot,0)+'. On retranche '+m+'x à chaque membre : '+n+'x '+MN+' '+m+'x = '+fmt(Lot,0)+', soit '+(n-m)+'x = '+fmt(Lot,0)+'. On divise par '+(n-m)+' : x = '+fmt(Lot,0)+' ÷ '+(n-m)+' = '+fmt(X,0)+'. Un '+e.a+' coûte '+money(X)+'.',
      ['Identifier l’inconnue x et les données de l’énoncé.','Identifier l’égalité des deux dépenses.'],
      ['Traduire la situation par l’équation '+n+'x = '+m+'x + '+fmt(Lot,0)+'.'],
      ['Regrouper les termes en x.','Calculer x = '+fmt(X,0)+'.','Conclure avec l’unité.']),
     K('Résous dans ℝ l’équation ('+f1+')('+f2+') = 0.',
      'Un produit de facteurs est nul si et seulement si l’un des facteurs est nul : '+f1+' = 0 ou '+f2+' = 0, soit x = '+fmt(x1,0)+' ou x = '+fmt(x2,0)+'. L’ensemble des solutions est S = {'+[x1,x2].sort(function(p,q){ return p-q; }).map(function(v){ return fmt(v,0); }).join(' ; ')+'}.',
      ['Identifier une équation produit.','Identifier la propriété du produit nul.'],
      ['Écrire les deux équations du premier degré obtenues.'],
      ['Résoudre '+f1+' = 0.','Résoudre '+f2+' = 0.','Écrire l’ensemble des solutions.'])];
    /* inéquation de comparaison de deux offres */
    var pa=ri(r,3,8)*100, fa=ri(r,4,10)*1000, pb=pa+ri(r,2,5)*100, lim=fa/(pb-pa), nl=Number.isInteger(lim)?lim+1:Math.ceil(lim);
    var b1=pick(r,[1,2,3]), r1=pick(r,[-4,-3,-2,-1,1]), r2=pick(r,[r1+2,r1+3,r1+4,r1+5,r1+6].filter(function(v){ return v!==0; }));
    var i2='Pour louer du matériel, l’offre A coûte '+money(fa)+' de frais fixes plus '+money(pa)+' par jour ; l’offre B coûte '+money(pb)+' par jour sans frais fixes.';
    var p2=[K('Pour quelles durées n (en jours) l’offre A est-elle strictement moins chère que l’offre B ? Résous une inéquation.',
      'L’offre A coûte '+fmt(fa,0)+' + '+pa+'n et l’offre B coûte '+pb+'n. On résout '+fmt(fa,0)+' + '+pa+'n < '+pb+'n, soit '+fmt(fa,0)+' < '+pb+'n '+MN+' '+pa+'n = '+(pb-pa)+'n, donc n > '+fmt(fa,0)+' ÷ '+(pb-pa)+(Number.isInteger(lim)?' = '+fmt(lim,0):' ≈ '+fmt(lim,2))+'. L’offre A est strictement moins chère à partir de '+nl+' jours de location.',
      ['Identifier les coûts des deux offres en fonction de n.','Identifier que « strictement moins chère » se traduit par une inégalité stricte.'],
      ['Traduire par l’inéquation '+fmt(fa,0)+' + '+pa+'n < '+pb+'n.'],
      ['Regrouper les termes en n.','Diviser par '+(pb-pa)+' (positif, le sens ne change pas).','Conclure : n ≥ '+nl+' jours.']),
     K('À l’aide d’un tableau de signes, résous dans ℝ l’inéquation ('+aff(b1,-b1*r1)+')('+r2+' '+MN+' x) ≥ 0.',
      aff(b1,-b1*r1)+' s’annule en '+fmt(r1,0)+' et est positif pour x > '+fmt(r1,0)+' (coefficient '+b1+' > 0) ; '+r2+' '+MN+' x s’annule en '+r2+' et est positif pour x < '+r2+' (coefficient '+MN+'1 < 0). Tableau : sur ]'+MN+'∞ ; '+fmt(r1,0)+'[ le produit est négatif, sur ]'+fmt(r1,0)+' ; '+r2+'[ il est positif, sur ]'+r2+' ; +∞[ il est négatif ; il est nul en '+fmt(r1,0)+' et en '+r2+'. Donc S = ['+fmt(r1,0)+' ; '+r2+'].',
      ['Identifier les deux facteurs du premier degré et leurs racines.','Identifier la règle des signes de ax + b (signe de a à droite de la racine).'],
      ['Dresser le tableau de signes du produit.'],
      ['Étudier le signe de chaque facteur.','Déduire le signe du produit.','Écrire S = ['+fmt(r1,0)+' ; '+r2+'].'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{n:n,m:m,Lot:Lot,X:X,a1:a1,x1:x1,a2:a2,x2:x2,pa:pa,fa:fa,pb:pb,nl:nl,b1:b1,r1:r1,r2:r2}}; }

  /* ================= Équations linéaires & systèmes dans ℝ × ℝ ================= */
  function gSY(x){
    var r=x.rnd, e=x.W.eq, X=ri(r,3,12)*100, Y=ri(r,2,9)*100; if(X===Y) X+=100; var p1c=ri(r,2,5), q1=ri(r,1,4), p2c=ri(r,1,4), q2=ri(r,2,5); while(p1c*q2-p2c*q1===0){ q2++; }
    var R1=p1c*X+q1*Y, R2=p2c*X+q2*Y, D=p1c*q2-p2c*q1;
    var intro='Chez le fournisseur, '+p1c+' '+e.as+' et '+q1+' '+(q1>1?e.bs:e.b)+' coûtent '+money(R1)+' ; '+p2c+' '+(p2c>1?e.as:e.a)+' et '+q2+' '+e.bs+' coûtent '+money(R2)+'.';
    var p1=[K('On note x le prix d’un '+e.a+' et y celui d’un '+e.b+'. Écris un système de deux équations traduisant la situation.',
      'Le premier achat donne '+p1c+'x + '+tm(q1,'y',true)+' = '+fmt(R1,0)+' et le second '+tm(p2c,'x',true)+' + '+q2+'y = '+fmt(R2,0)+'. Le système est : { '+p1c+'x + '+tm(q1,'y',true)+' = '+fmt(R1,0)+' ; '+tm(p2c,'x',true)+' + '+q2+'y = '+fmt(R2,0)+' }.',
      ['Identifier les deux inconnues x et y.','Identifier les deux achats décrits.'],
      ['Traduire chaque achat par une équation linéaire.'],
      ['Écrire la première équation.','Écrire la deuxième équation.','Présenter le système.']),
     K('Résous ce système par la méthode de ton choix et conclus.',
      'Par combinaison : on multiplie la 1re équation par '+q2+' et la 2e par '+q1+' : '+tm(p1c*q2,'x',true)+' + '+(q1*q2)+'y = '+fmt(R1*q2,0)+' et '+tm(p2c*q1,'x',true)+' + '+(q1*q2)+'y = '+fmt(R2*q1,0)+'. Par soustraction : '+tm(D,'x',true)+' = '+fmt(R1*q2-R2*q1,0)+(D===1?'':', donc x = '+fmt(R1*q2-R2*q1,0)+' ÷ '+par(D)+' = '+fmt(X,0))+'. Dans la 1re équation : '+tm(q1,'y',true)+' = '+fmt(R1,0)+' '+MN+' '+p1c+' × '+fmt(X,0)+' = '+fmt(R1-p1c*X,0)+', donc y = '+fmt(Y,0)+'. Un '+e.a+' coûte '+money(X)+' et un '+e.b+' coûte '+money(Y)+'.',
      ['Identifier le système obtenu.','Identifier une méthode adaptée (substitution ou combinaison).'],
      ['Combiner les équations pour éliminer y.'],
      ['Calculer x = '+fmt(X,0)+'.','Calculer y = '+fmt(Y,0)+'.','Conclure avec les unités.'])];
    var a=ri(r,1,3), b=ri(r,1,3), c=a*b*ri(r,2,3)+ri(r,0,a*b); if(gcd(a,b)!==1){ b=a===1?2:1; }
    var sols=[]; for(var xx=0;xx*a<=c;xx++){ var rest=c-a*xx; if(rest%b===0) sols.push([xx,rest/b]); }
    var k=pick(r,sols), dlt=k[0]-k[1];
    var i2='On considère l’équation (E) : '+tm(a,'x',true)+' + '+tm(b,'y',true)+' = '+c+', d’inconnues x et y.';
    var p2=[K('Détermine tous les couples (x ; y) d’entiers naturels solutions de (E).',
      (b===1?'y = '+c+' '+MN+' '+tm(a,'x',true):'y = ('+c+' '+MN+' '+tm(a,'x',true)+') ÷ '+b)+' doit être un entier naturel, donc '+tm(a,'x',true)+' ≤ '+c+'. En testant chaque valeur de x : '+sols.map(function(s){ return '('+s[0]+' ; '+s[1]+')'; }).join(', ')+'. Il y a '+sols.length+' couple'+(sols.length>1?'s':'')+' solution'+(sols.length>1?'s':'')+' dans ℕ × ℕ.',
      ['Identifier une équation linéaire à deux inconnues.','Identifier la contrainte : x et y entiers naturels.'],
      ['Exprimer y en fonction de x.','Tester les valeurs possibles de x.'],
      ['Borner x.','Tester les valeurs.','Lister les couples solutions.']),
     K('Parmi ces couples, lequel vérifie aussi x '+MN+' y = '+fmt(dlt,0)+' ? Que représente graphiquement ce couple ?',
      'On teste x '+MN+' y pour chaque couple : '+sols.map(function(s){ return s[0]+' '+MN+' '+s[1]+' = '+fmt(s[0]-s[1],0); }).join(' ; ')+'. Le couple ('+k[0]+' ; '+k[1]+') vérifie les deux équations : c’est la solution du système { '+tm(a,'x',true)+' + '+tm(b,'y',true)+' = '+c+' ; x '+MN+' y = '+fmt(dlt,0)+' }. Graphiquement, c’est le point d’intersection des deux droites d’équations '+tm(a,'x',true)+' + '+tm(b,'y',true)+' = '+c+' et x '+MN+' y = '+fmt(dlt,0)+'.',
      ['Identifier les couples trouvés.','Identifier l’interprétation graphique d’une équation linéaire (une droite).'],
      ['Tester la seconde équation pour chaque couple.'],
      ['Calculer x '+MN+' y pour chaque couple.','Retenir ('+k[0]+' ; '+k[1]+').','Interpréter : point d’intersection des deux droites.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{X:X,Y:Y,p1:p1c,q1:q1,p2:p2c,q2:q2,R1:R1,R2:R2,a:a,b:b,c:c,sols:sols,k:k,dlt:dlt}}; }

  /* ================= Fonctions affines & affines par intervalles ================= */
  var LFA={jardin:['le transport des récoltes','km'],sport:['la location d’un car','km'],coop:['la livraison des fournitures','km']};
  function gFA(x){
    var r=x.rnd, L=LFA[x.W.id], a=ri(r,4,9)*100, b=ri(r,1,a/100-1)*100, c=ri(r,4,12)*1000, xe=c/(a-b), x0=ri(r,5,25);
    while(!Number.isInteger(xe)){ c+=1000; xe=c/(a-b); }
    var fa=a*x0, fb=b*x0+c;
    var intro='Pour '+L[0]+', deux tarifs sont proposés : tarif A : f(x) = '+a+'x ; tarif B : g(x) = '+b+'x + '+fmt(c,0)+', où x est la distance en '+L[1]+' et le prix est en francs.';
    var p1=[K('Quelle est la nature des fonctions f et g ? Calcule le prix de chaque tarif pour '+x0+' '+L[1]+' et indique le plus avantageux.',
      'f est une fonction linéaire (fonction affine de la forme ax) et g est une fonction affine (de la forme ax + b). f('+x0+') = '+a+' × '+x0+' = '+fmt(fa,0)+' F et g('+x0+') = '+b+' × '+x0+' + '+fmt(c,0)+' = '+fmt(fb,0)+' F. '+(fa<fb?'Le tarif A est le plus avantageux pour '+x0+' '+L[1]+'.':(fa>fb?'Le tarif B est le plus avantageux pour '+x0+' '+L[1]+'.':'Les deux tarifs coûtent le même prix pour '+x0+' '+L[1]+'.')),
      ['Identifier la forme des expressions f(x) et g(x).','Identifier la distance '+x0+' '+L[1]+'.'],
      ['Remplacer x par '+x0+' dans chaque expression.'],
      ['Donner la nature de f et g.','Calculer f('+x0+') et g('+x0+').','Comparer et conclure.']),
     K('Pour quelle distance les deux tarifs sont-ils égaux ? Comment le voir sur les représentations graphiques de f et g ?',
      'On résout f(x) = g(x) : '+a+'x = '+b+'x + '+fmt(c,0)+', soit '+(a-b)+'x = '+fmt(c,0)+', donc x = '+fmt(c,0)+' ÷ '+(a-b)+' = '+fmt(xe,0)+'. Les deux tarifs sont égaux pour '+fmt(xe,0)+' '+L[1]+' (prix : '+fmt(a*xe,0)+' F). Graphiquement, les droites représentant f et g se coupent au point de coordonnées ('+fmt(xe,0)+' ; '+fmt(a*xe,0)+').',
      ['Identifier que l’égalité des tarifs se traduit par f(x) = g(x).','Identifier les représentations graphiques : des droites.'],
      ['Traduire par l’équation '+a+'x = '+b+'x + '+fmt(c,0)+'.'],
      ['Résoudre : x = '+fmt(xe,0)+'.','Calculer le prix commun.','Interpréter graphiquement (point d’intersection).'])];
    var s1=ri(r,10,20), p1v=ri(r,3,6)*100, p2v=ri(r,1,p1v/100-1)*100, xA=ri(r,2,s1-2), xB=s1+ri(r,3,15), hB=p1v*s1+p2v*(xB-s1), yT=p1v*s1+p2v*ri(r,4,20), xT=s1+(yT-p1v*s1)/p2v;
    var i2='Un transporteur applique un tarif dégressif h : '+money(p1v)+' par '+L[1]+' pour les '+s1+' premiers '+L[1]+', puis '+money(p2v)+' par '+L[1]+' au-delà. Ainsi h(x) = '+p1v+'x si 0 ≤ x ≤ '+s1+' et h(x) = '+fmt(p1v*s1,0)+' + '+p2v+'(x '+MN+' '+s1+') si x > '+s1+'.';
    var p2=[K('Calcule h('+xA+') et h('+xB+').',
      'Comme 0 ≤ '+xA+' ≤ '+s1+' : h('+xA+') = '+p1v+' × '+xA+' = '+fmt(p1v*xA,0)+' F. Comme '+xB+' > '+s1+' : h('+xB+') = '+fmt(p1v*s1,0)+' + '+p2v+' × ('+xB+' '+MN+' '+s1+') = '+fmt(p1v*s1,0)+' + '+p2v+' × '+(xB-s1)+' = '+fmt(hB,0)+' F.',
      ['Identifier une fonction affine par intervalles.','Identifier l’intervalle auquel appartient chaque distance.'],
      ['Choisir la bonne expression de h selon l’intervalle.'],
      ['Calculer h('+xA+').','Calculer h('+xB+').','Conclure avec l’unité.']),
     K(Who(x)+' dispose de '+money(yT)+'. Quelle distance maximale peut-il parcourir ?',
      'Pour x = '+s1+', h('+s1+') = '+fmt(p1v*s1,0)+' F < '+fmt(yT,0)+' F : la distance cherchée dépasse '+s1+' '+L[1]+'. On résout '+fmt(p1v*s1,0)+' + '+p2v+'(x '+MN+' '+s1+') = '+fmt(yT,0)+' : '+p2v+'(x '+MN+' '+s1+') = '+fmt(yT-p1v*s1,0)+', x '+MN+' '+s1+' = '+fmt((yT-p1v*s1)/p2v,0)+', donc x = '+fmt(xT,0)+'. La distance maximale est '+fmt(xT,0)+' '+L[1]+'.',
      ['Identifier le budget disponible.','Identifier sur quel intervalle chercher la solution.'],
      ['Comparer le budget à h('+s1+').','Traduire par une équation sur le bon intervalle.'],
      ['Calculer h('+s1+') = '+fmt(p1v*s1,0)+'.','Résoudre l’équation.','Conclure : '+fmt(xT,0)+' '+L[1]+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,c:c,x0:x0,xe:xe,s1:s1,p1:p1v,p2:p2v,xA:xA,xB:xB,hB:hB,yT:yT,xT:xT}}; }

  /* ================= Valeur absolue & fonction en escalier ================= */
  function gVA(x){
    var r=x.rnd, a=pick(r,[1,2,3]), m=pick(r,[-4,-3,-2,-1,1,2,3,4,5]), k=ri(r,1,6), b=ri(r,1,5), cst=ri(r,-3,3);
    var lin=aff(a,-a*m), fx='|'+lin+'|'+(cst?(cst<0?' '+MN+' '+(-cst):' + '+cst):'');
    var intro='On considère la fonction f définie sur ℝ par f(x) = '+fx+'.';
    var s1=aff(-a,a*m+cst), s2=aff(a,-a*m+cst);
    var p1=[K('Écris f(x) sans le symbole de valeur absolue sur chacun des intervalles ]'+MN+'∞ ; '+fmt(m,0)+'] et ['+fmt(m,0)+' ; +∞[.',
      lin+' est positif ou nul si et seulement si x ≥ '+fmt(m,0)+'. Sur ['+fmt(m,0)+' ; +∞[ : |'+lin+'| = '+lin+', donc f(x) = '+s2+'. Sur ]'+MN+'∞ ; '+fmt(m,0)+'] : |'+lin+'| = '+MN+'('+lin+'), donc f(x) = '+s1+'. f est une fonction affine par intervalles.',
      ['Identifier la définition de la valeur absolue : |A| = A si A ≥ 0 et |A| = '+MN+'A si A ≤ 0.','Identifier le nombre '+fmt(m,0)+' qui annule '+lin+'.'],
      ['Étudier le signe de '+lin+'.','Écrire f(x) sur chaque intervalle.'],
      ['Déterminer le signe de '+lin+'.','Écrire f(x) pour x ≥ '+fmt(m,0)+'.','Écrire f(x) pour x ≤ '+fmt(m,0)+'.']),
     K('Résous dans ℝ l’équation |x '+(m<0?'+ '+(-m):MN+' '+m)+'| = '+k+' puis l’inéquation |x '+(m<0?'+ '+(-m):MN+' '+m)+'| ≤ '+k+'.',
      '|x '+(m<0?'+ '+(-m):MN+' '+m)+'| = '+k+' équivaut à x '+(m<0?'+ '+(-m):MN+' '+m)+' = '+k+' ou x '+(m<0?'+ '+(-m):MN+' '+m)+' = '+MN+k+', soit x = '+fmt(m+k,0)+' ou x = '+fmt(m-k,0)+' : S = {'+fmt(m-k,0)+' ; '+fmt(m+k,0)+'}. |x '+(m<0?'+ '+(-m):MN+' '+m)+'| ≤ '+k+' équivaut à '+MN+k+' ≤ x '+(m<0?'+ '+(-m):MN+' '+m)+' ≤ '+k+', soit '+fmt(m-k,0)+' ≤ x ≤ '+fmt(m+k,0)+' : S = ['+fmt(m-k,0)+' ; '+fmt(m+k,0)+'] (les points situés à une distance au plus '+k+' de '+fmt(m,0)+').',
      ['Identifier que |x '+MN+' a| est la distance entre x et a.','Identifier les deux cas de l’équation |A| = k (k > 0).'],
      ['Écrire les deux équations, puis l’encadrement '+MN+'k ≤ A ≤ k.'],
      ['Résoudre l’équation.','Résoudre l’inéquation.','Écrire les deux ensembles de solutions.'])];
    var P=[ri(r,3,5)*100,ri(r,6,8)*100,ri(r,9,12)*100,ri(r,14,18)*100], m1=ri(r,5,19), m2=ri(r,21,49), m3=ri(r,51,99), mm=pick(r,[[12,30],[15,25],[30,40],[18,22]]);
    var price=function(g){ return g<=20?P[0]:(g<=50?P[1]:(g<=100?P[2]:P[3])); }, tot=mm[0]+mm[1], sep=price(mm[0])+price(mm[1]), one=price(tot);
    var tab={type:'table',head:['Masse m (en g)','0 < m ≤ 20','20 < m ≤ 50','50 < m ≤ 100','100 < m ≤ 250'],rows:[['Prix (en F)'].concat(P.map(function(v){ return fmt(v,0); }))]};
    var i2='Le tarif postal p d’une lettre dépend de sa masse m, selon le tableau ci-dessous.';
    var p2=[K('Quelle est la nature de la fonction p ? Donne le prix d’envoi de lettres de '+m1+' g, '+m2+' g et '+m3+' g.',
      'p est constante sur chacun des intervalles ]0 ; 20], ]20 ; 50], ]50 ; 100] et ]100 ; 250] : c’est une fonction en escalier. '+m1+' ∈ ]0 ; 20], donc p('+m1+') = '+fmt(P[0],0)+' F ; '+m2+' ∈ ]20 ; 50], donc p('+m2+') = '+fmt(P[1],0)+' F ; '+m3+' ∈ ]50 ; 100], donc p('+m3+') = '+fmt(P[2],0)+' F.',
      ['Identifier qu’une fonction constante par intervalles est une fonction en escalier.','Identifier l’intervalle de chaque masse.'],
      ['Lire le prix correspondant à chaque intervalle.'],
      ['Donner la nature de p.','Situer chaque masse.','Lire les trois prix.']),
     K('Vaut-il mieux envoyer deux lettres de '+mm[0]+' g et '+mm[1]+' g séparément ou les regrouper dans une seule enveloppe de '+tot+' g ?',
      'Séparément : p('+mm[0]+') + p('+mm[1]+') = '+fmt(price(mm[0]),0)+' + '+fmt(price(mm[1]),0)+' = '+fmt(sep,0)+' F. Regroupées : '+tot+' g, donc p('+tot+') = '+fmt(one,0)+' F. '+(one<sep?'Il vaut mieux les regrouper (économie de '+fmt(sep-one,0)+' F).':(one>sep?'Il vaut mieux les envoyer séparément (économie de '+fmt(one-sep,0)+' F).':'Les deux solutions coûtent le même prix.')),
      ['Identifier les masses de chaque envoi.','Identifier la masse totale '+tot+' g.'],
      ['Lire les prix dans le tableau pour chaque solution.'],
      ['Calculer le coût des envois séparés : '+fmt(sep,0)+' F.','Lire le prix de l’envoi groupé : '+fmt(one,0)+' F.','Comparer et conclure.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2,table:tab}],_g:{a:a,m:m,k:k,cst:cst,P:P,m1:m1,m2:m2,m3:m3,mm:mm,sep:sep,one:one}}; }

  /* ================= Fonctions élémentaires & résolutions graphiques ================= */
  function gFE(x){
    var r=x.rnd, a=pick(r,[1,2,3,-1,-2]), s=ri(r,1,4), k=a*s*s, xs=[-2,-1,0,1,2];
    var intro='On considère la fonction f définie sur ℝ par f(x) = '+tm(a,'x²',true)+'.';
    var p1=[K('Complète un tableau de valeurs de f pour x ∈ {'+MN+'2 ; '+MN+'1 ; 0 ; 1 ; 2}, puis donne le sens de variation de f et la nature de sa courbe.',
      xs.map(function(v){ return 'f('+fmt(v,0)+') = '+par(a)+' × '+par(v)+'² = '+fmt(a*v*v,0); }).join(' ; ')+'. La courbe de f est une parabole de sommet O et d’axe (OJ), tournée vers le '+(a>0?'haut':'bas')+' car '+fmt(a,0)+(a>0?' > 0':' < 0')+'. f est '+(a>0?'décroissante':'croissante')+' sur ]'+MN+'∞ ; 0] et '+(a>0?'croissante':'décroissante')+' sur [0 ; +∞[ ; elle admet un '+(a>0?'minimum':'maximum')+' égal à 0 en x = 0.',
      ['Identifier une fonction du type x ↦ ax².','Identifier le signe de a = '+fmt(a,0)+'.'],
      ['Calculer les images pour construire le tableau.','Utiliser la propriété sur l’orientation de la parabole.'],
      ['Calculer les cinq images.','Donner le sens de variation.','Décrire la parabole (sommet, axe, orientation).']),
     K('Résous dans ℝ l’équation f(x) = '+fmt(k,0)+'. Comment lire ces solutions sur la courbe de f ?',
      'f(x) = '+fmt(k,0)+' s’écrit '+tm(a,'x²',true)+' = '+fmt(k,0)+', soit x² = '+fmt(k,0)+' ÷ '+par(a)+' = '+(s*s)+'. Donc x = '+s+' ou x = '+MN+s+' : S = {'+MN+s+' ; '+s+'}. Graphiquement, ce sont les abscisses des points d’intersection de la parabole avec la droite d’équation y = '+fmt(k,0)+'.',
      ['Identifier une équation du type ax² = k.','Identifier l’interprétation graphique d’une équation f(x) = k.'],
      ['Se ramener à x² = '+(s*s)+'.'],
      ['Calculer x² = '+(s*s)+'.','Résoudre : x = '+s+' ou x = '+MN+s+'.','Interpréter graphiquement.'])];
    var c=pick(r,[1,2]), A2=pick(r,[1,2]), b=A2*c*c*c, xv=[-4,-2,-1,1,2,4].filter(function(v){ return b%v===0; });
    var i2=(x.standalone2?'On considère la fonction f définie sur ℝ par f(x) = '+tm(A2,'x²',true)+'. ':'On considère maintenant la fonction h définie sur ℝ par h(x) = '+tm(A2,'x²',true)+'. ')+'Soit g la fonction définie par g(x) = '+b+'/x.';
    var fn=x.standalone2?'f':'h';
    var p2=[K('Donne l’ensemble de définition de g, puis calcule g(x) pour x ∈ {'+xv.map(function(v){ return fmt(v,0); }).join(' ; ')+'}. Quelle est la nature de la courbe de g ?',
      'g(x) existe si x ≠ 0 : D_g = ℝ*. '+xv.map(function(v){ return 'g('+fmt(v,0)+') = '+b+' ÷ '+par(v)+' = '+fmt(b/v,0); }).join(' ; ')+'. La courbe de g est une hyperbole de centre O, dont les asymptotes sont les axes du repère.',
      ['Identifier une fonction du type x ↦ a/x.','Identifier la valeur interdite 0.'],
      ['Calculer les images demandées.'],
      ['Écrire D_g = ℝ*.','Calculer les images.','Nommer la courbe : une hyperbole.']),
     K('Vérifie que les courbes de '+fn+' et de g se coupent au point d’abscisse '+c+', puis donne les coordonnées de ce point.',
      fn+'('+c+') = '+A2+' × '+c+'² = '+(A2*c*c)+' et g('+c+') = '+b+' ÷ '+c+' = '+(b/c)+'. Comme '+fn+'('+c+') = g('+c+'), les deux courbes passent par le même point : le point d’intersection a pour coordonnées ('+c+' ; '+(A2*c*c)+'). Le nombre '+c+' est donc solution de l’équation '+fn+'(x) = g(x).',
      ['Identifier qu’un point d’intersection a la même ordonnée sur les deux courbes.','Identifier les deux expressions '+fn+'(x) et g(x).'],
      ['Comparer '+fn+'('+c+') et g('+c+').'],
      ['Calculer '+fn+'('+c+') = '+(A2*c*c)+'.','Calculer g('+c+') = '+(b/c)+'.','Conclure : point ('+c+' ; '+(A2*c*c)+').'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,s:s,k:k,c:c,A2:A2,b:b,xv:xv}}; }

  var reg=function(id,themes,label,w1,build){ MOD['2A-'+id]={cls:'2nde A',theme:themes[0],themes:themes,label:label,w1:w1,build:build}; };
  var T=function(s){ return '2A — '+s; };
  reg('PP',[T('Proportionnalité & pourcentages')],'Proportionnalité et pourcentages',2,gPP);
  reg('FG',[T('Fonctions numériques : généralités')],'Fonctions numériques : généralités',1,gFG);
  reg('SU',[T('Notion de suite numérique')],'Notion de suite numérique',2,gSU);
  reg('DN',[T('Dénombrement élémentaire')],'Dénombrement',2,gDN);
  reg('NR',[T('Nombres réels'),T('Calculs dans ℝ : fractions, puissances, notation scientifique')],'Nombres réels et calculs dans ℝ',1,gNR);
  reg('RC',[T('Racine carrée')],'Racine carrée',1,gRC);
  reg('EQ',[T('Équations du premier degré'),T('Inéquations du premier degré')],'Équations et inéquations du premier degré',2,gEQ);
  reg('SY',[T('Équations linéaires & systèmes dans ℝ × ℝ')],'Équations linéaires et systèmes',2,gSY);
  reg('FA',[T('Fonctions affines & affines par intervalles')],'Fonctions affines et affines par intervalles',2,gFA);
  reg('VA',[T('Valeur absolue & fonction en escalier')],'Valeur absolue et fonction en escalier',1,gVA);
  reg('FE',[T('Fonctions élémentaires & résolutions graphiques')],'Fonctions élémentaires et résolutions graphiques',1,gFE);
})(typeof globalThis!=='undefined'?globalThis:this);
