/* ===== MQ_SOM : modules de problèmes (sommative, 3e et 4e) ===== */
(function(G){
  'use strict';
  var NB='\u00a0';
  function fmt(x,d){ if(d==null) d=2; var v=Math.round(x*Math.pow(10,d))/Math.pow(10,d), neg=v<0, s=String(Math.abs(v)); if(s.indexOf('e')>=0) s=Math.abs(v).toFixed(d);
    var p=s.split('.'); p[0]=p[0].replace(/\B(?=(\d{3})+(?!\d))/g,NB); return (neg?'\u2212':'')+p.join(','); }
  function money(x){ return fmt(x,0)+NB+'F'; }
  function ri(r,a,b){ return a+Math.floor(r()*(b-a+1)); }
  function pick(r,arr){ return arr[Math.floor(r()*arr.length)]; }
  function shuffle(r,arr){ var a=arr.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(r()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
  function gcd(a,b){ while(b){ var t=a%b; a=b; b=t; } return a; }
  function lcm(a,b){ return a/gcd(a,b)*b; }
  function factor(n){ var f=[],d=2; while(n>1){ while(n%d===0){ f.push(d); n/=d; } d++; } return f; }
  function factStr(n){ var f=factor(n), c={}; f.forEach(function(x){ c[x]=(c[x]||0)+1; }); return Object.keys(c).map(Number).sort(function(a,b){return a-b;}).map(function(p){ return c[p]>1?p+(c[p]===2?'\u00b2':(c[p]===3?'\u00b3':'^'+c[p])):String(p); }).join(' \u00d7 '); }
  function K(t,s,A,M,O){ return {t:t,s:s,A:A,M:M,O:O}; }
  function eq(v,d){ var q=Math.pow(10,d), r=Math.round(v*q)/q; return Math.abs(v-r)<1e-9?'=':'≈'; }

  /* ---------- univers (contextes) ---------- */
  var WORLDS=[
   {id:'jardin',titre:'Le jardin scolaire',org:'Le comité de gestion du CEG',projet:'aménager un jardin scolaire',
    terrain:'un terrain de forme triangulaire ABC, situé derrière la cour de l’école',zoneA:'un enclos pour la basse-cour',zoneB:'la partie cultivée',mat:'grillage',matPrix:1500,
    eq:{a:'sac de maïs',as:'sacs de maïs',b:'sac de haricot',bs:'sacs de haricot',obj:'des semences'},
    st:{phrase:'la masse de tomates récoltée sur chacune des planches du jardin',unit:'kg',lo:3,serie:'Masse récoltée par planche (en kg)'},
    af:{service:'le transport des récoltes jusqu’au marché',unit:'km',unitFull:'kilomètres',cs:[200,250,300],ds:[100,150,200],A:'tarif A (au kilomètre)',B:'tarif B (forfait et kilomètre)',lo:8,hi:18},
    cone:{objet:'un réservoir d’eau de forme conique, posé pointe vers le bas, pour l’arrosage du jardin',fluide:'d’eau'},
    pr:{plat:'le repas organisé pour la journée de récolte',i1:'riz',u1:'kg',p1:900,i2:'huile',u2:'L',p2:1400},
    pg:{i1:'sacs de maïs',i2:'sacs de haricot',per:function(p,q){ return 'Deux équipes d’arrosage interviennent dans le jardin : la première passe tous les '+p+' jours et la seconde tous les '+q+' jours. Elles se sont retrouvées ensemble aujourd’hui.'; }}},
   {id:'sport',titre:'Le tournoi sportif du CEG',org:'Le comité sportif du CEG',projet:'organiser un tournoi de football inter-classes',
    terrain:'un terrain de forme triangulaire ABC, situé à côté du stade de l’école',zoneA:'une zone d’échauffement pour les joueurs',zoneB:'la zone réservée aux spectateurs',mat:'ruban de balisage',matPrix:800,
    eq:{a:'ballon',as:'ballons',b:'maillot',bs:'maillots',obj:'du matériel sportif'},
    st:{phrase:'le nombre de buts marqués lors de chacun des matchs du tournoi',unit:'buts',lo:0,serie:'Nombre de buts par match'},
    af:{service:'la location d’un car pour les supporters',unit:'km',unitFull:'kilomètres',cs:[300,400,500],ds:[200,300,400],A:'tarif A (au kilomètre)',B:'tarif B (forfait et kilomètre)',lo:8,hi:18},
    cone:{objet:'un entonnoir de forme conique, posé pointe vers le bas, pour remplir les bidons des joueurs',fluide:'de jus'},
    pr:{plat:'la collation offerte aux joueurs',i1:'sucre',u1:'kg',p1:800,i2:'jus concentré',u2:'L',p2:1800},
    pg:{i1:'ballons',i2:'maillots',per:function(p,q){ return 'Deux groupes de supporters se rendent au stade : le premier tous les '+p+' jours et le second tous les '+q+' jours. Ils se sont retrouvés ensemble aujourd’hui.'; }}},
   {id:'coop',titre:'La coopérative scolaire',org:'Le bureau de la coopérative scolaire du CEG',projet:'ouvrir une boutique scolaire',
    terrain:'une parcelle de forme triangulaire ABC, située près du portail de l’école',zoneA:'un espace de stockage',zoneB:'l’espace de vente',mat:'bâche de protection',matPrix:1200,
    eq:{a:'cahier',as:'cahiers',b:'stylo',bs:'stylos',obj:'des fournitures scolaires'},
    st:{phrase:'le nombre de clients accueillis chaque jour à la boutique',unit:'clients',lo:10,serie:'Clients par jour'},
    af:{service:'les photocopies de la boutique',unit:'page',unitFull:'pages',cs:[10,15],ds:[5,10],A:'tarif à la page',B:'abonnement mensuel et prix réduit à la page',lo:100,hi:240},
    cone:{objet:'un récipient de forme conique, posé pointe vers le bas, pour mesurer le lait des élèves',fluide:'de lait'},
    pr:{plat:'les gâteaux vendus lors de la fête de l’école',i1:'farine',u1:'kg',p1:600,i2:'sucre',u2:'kg',p2:800},
    pg:{i1:'cahiers',i2:'stylos',per:function(p,q){ return 'Deux fournisseurs livrent la boutique : le premier tous les '+p+' jours et le second tous les '+q+' jours. Ils sont passés ensemble aujourd’hui.'; }}}
  ];

  /* ---------- terrain triangulaire partagé ---------- */
  function genTerrain(r){
    var TR=[[3,4,5],[3,4,5],[5,12,13],[8,15,17]];
    for(var tries=0;tries<400;tries++){
      var t=pick(r,TR), q=pick(r,[2,3,4,5]), ps=[]; for(var p=1;p<q;p++) if(gcd(p,q)===1) ps.push(p); var pp=pick(r,ps);
      var jmax=Math.floor(40/(q*t[2])); if(jmax<1) continue; var mult=q*ri(r,1,jmax);
      var legs=t.slice(0,2).map(function(x){ return x*mult; }), c=t[2]*mult; if(r()<0.5) legs.reverse();
      var a=legs[0], b=legs[1];
      var cosB=a/c, deg=Math.acos(cosB)*180/Math.PI, fr=deg-Math.floor(deg); if(Math.abs(fr-0.5)<0.07) continue;
      var AH=a*b/c, ah10=AH*10; if(Math.abs(ah10-Math.round(ah10))>1e-9 && Math.abs((ah10-Math.floor(ah10))-0.5)<0.05) continue;
      var AM=pp*a/q, AN=pp*b/q, MN=pp*c/q; if(AM!==Math.round(AM)||AN!==Math.round(AN)||MN!==Math.round(MN)) continue;
      var maxL=Math.max(a,b,c), E=null; [200,250,400,500].some(function(e){ var d=maxL*100/e; if(d>=4&&d<=9){ E=e; return true; } return false; });
      if(!E) continue; var dr=function(x){ return Math.round(x*100/E*100)/100; };
      if([a,b,c,AM].some(function(x){ return Math.abs(dr(x)*100-Math.round(dr(x)*100))>1e-6; })) continue;
      return {AB:a,AC:b,BC:c,p:pp,q:q,AM:AM,AN:AN,MN:MN,AH:AH,AHexact:Math.abs(ah10-Math.round(ah10))<1e-9,deg:Math.round(deg),degExact:deg,cosB:cosB,E:E,dr:dr};
    }
    return {AB:12,AC:16,BC:20,p:3,q:4,AM:9,AN:12,MN:15,AH:9.6,AHexact:true,deg:53,degExact:53.13,cosB:0.6,E:400,dr:function(x){ return x/4; }};
  }

  /* ---------- tables ---------- */
  function tableSpec(head,rows){ return {type:'table',head:head,rows:rows}; }

  /* ---------- modules ---------- */
  var MOD={};
  /* 3e : Triangle rectangle */
  MOD['3e-TR']={cls:'3e',theme:'Triangle rectangle',label:'Triangle rectangle',w1:3,build:function(x){ var T=x.T,a=T.AB,b=T.AC,c=T.BC,u='m';
    var intro='Le terrain a la forme d’un triangle ABC tel que AB = '+a+' m, AC = '+b+' m et BC = '+c+' m.';
    var p1=[K('Montre que le triangle ABC est rectangle en A.',
      'Le plus grand côté est [BC]. BC² = '+c+'² = '+(c*c)+'. AB² + AC² = '+a+'² + '+b+'² = '+(a*a)+' + '+(b*b)+' = '+(a*a+b*b)+'. Donc BC² = AB² + AC². D’après la réciproque du théorème de Pythagore, le triangle ABC est rectangle en A.',
      ['Identifier les données : AB = '+a+' m, AC = '+b+' m, BC = '+c+' m, et repérer que [BC] est le plus grand côté.','Identifier ce qu’il faut établir : comparer BC² et AB² + AC² pour utiliser la réciproque du théorème de Pythagore.'],
      ['Écrire BC² = '+c+'².','Écrire AB² + AC² = '+a+'² + '+b+'².'],
      ['Calculer AB² + AC² = '+(a*a)+' + '+(b*b)+' = '+(a*a+b*b)+'.','Calculer BC² = '+(c*c)+'.','Conclure : BC² = AB² + AC², donc ABC est rectangle en A (réciproque du théorème de Pythagore).']),
     K('Calcule l’aire du terrain ABC.',
      'ABC est rectangle en A : [AB] et [AC] sont perpendiculaires, on peut les prendre comme base et hauteur. Aire = (AB × AC) ÷ 2 = ('+a+' × '+b+') ÷ 2 = '+(a*b)+' ÷ 2 = '+fmt(a*b/2)+' m².',
      ['Identifier que [AB] et [AC] sont perpendiculaires (résultat précédent) : ils jouent le rôle de base et de hauteur.'],
      ['Faire un schéma du triangle rectangle ABC en A.','Écrire la formule : aire = (AB × AC) ÷ 2.'],
      ['Calculer '+a+' × '+b+' = '+(a*b)+'.','Calculer '+(a*b)+' ÷ 2 = '+fmt(a*b/2)+'.','Conclure avec l’unité : l’aire est '+fmt(a*b/2)+' m².'])];
    var ah=T.AHexact?fmt(T.AH,1):fmt(T.AH,1);
    var p2=[K('Soit H le pied de la hauteur issue de A dans le triangle ABC. Calcule la longueur AH'+(T.AHexact?'.':' (arrondie au dixième de mètre).'),
      'Dans un triangle rectangle, le produit des longueurs des côtés de l’angle droit est égal au produit de l’hypoténuse par la hauteur relative à l’hypoténuse : AB × AC = BC × AH. Donc AH = (AB × AC) ÷ BC = ('+a+' × '+b+') ÷ '+c+' = '+(a*b)+' ÷ '+c+' '+(T.AHexact?'=':'≈')+' '+ah+' m.',
      ['Identifier que H est le pied de la hauteur relative à l’hypoténuse [BC] et que l’inconnue est AH.','Identifier la propriété à utiliser : le produit des côtés de l’angle droit est égal au produit de l’hypoténuse par la hauteur.'],
      ['Tracer la hauteur [AH] sur la figure.','Écrire AB × AC = BC × AH.','Isoler AH : AH = (AB × AC) ÷ BC.'],
      ['Calculer '+a+' × '+b+' = '+(a*b)+'.','Calculer '+(a*b)+' ÷ '+c+(T.AHexact?' = ':' ≈ ')+ah+'.','Conclure avec l’unité : AH '+(T.AHexact?'=':'≈')+' '+ah+' m.']),
     K('Calcule la mesure de l’angle ABC, arrondie au degré. (La calculatrice est autorisée.)',
      'Dans le triangle ABC rectangle en A : cos ABC = côté adjacent ÷ hypoténuse = AB ÷ BC = '+a+' ÷ '+c+(Math.abs(T.cosB*1000-Math.round(T.cosB*1000))<1e-9?' = ':' ≈ ')+fmt(T.cosB,3)+'. À la calculatrice, l’angle ABC mesure environ '+fmt(T.degExact,2)+'°, soit '+T.deg+'° au degré près.',
      ['Identifier l’angle ABC, son côté adjacent [AB] et l’hypoténuse [BC].','Choisir le rapport trigonométrique adapté : le cosinus.'],
      ['Faire un schéma du triangle ABC rectangle en A en repérant l’angle B.','Écrire cos ABC = AB ÷ BC.','Remplacer par les valeurs : cos ABC = '+a+' ÷ '+c+'.'],
      ['Calculer '+a+' ÷ '+c+' ≈ '+fmt(T.cosB,3)+'.','Utiliser la calculatrice (cos⁻¹) pour obtenir l’angle.','Arrondir et conclure : ABC ≈ '+T.deg+'°.'])];
    return {fig:{type:'tri',a:a,b:b,c:c,unit:u},parts:[{intro:intro,cons:p1},{intro:x.standalone2?'On admet que le triangle ABC est rectangle en A.':'',cons:p2}]}; }};
  /* 3e : Thalès */
  MOD['3e-TH']={cls:'3e',theme:'Thalès & triangles semblables',label:'Thalès',w1:1,build:function(x){ var T=x.T,W=x.W,E=T.E,dr=T.dr;
    var intro='Pour séparer '+W.zoneB+' de '+W.zoneA+', le comité place une clôture [MN] : le point M est sur le côté [AB] avec AM = '+T.AM+' m ; le point N est sur le côté [AC] de façon que (MN) soit parallèle à (BC). Les mesures du terrain sont AB = '+T.AB+' m, AC = '+T.AC+' m et BC = '+T.BC+' m. Le comité prépare un plan à l’échelle 1/'+E+'. Le '+W.mat+' coûte '+fmt(W.matPrix,0)+' F le mètre.';
    var p1=[K('Reproduis le plan du terrain à l’échelle 1/'+E+', en plaçant les points M et N.',
      'À l’échelle 1/'+E+', 1 cm sur le plan représente '+E+' cm = '+fmt(E/100)+' m. AB = '+T.AB+' m → '+fmt(dr(T.AB))+' cm ; AC = '+T.AC+' m → '+fmt(dr(T.AC))+' cm ; BC = '+T.BC+' m → '+fmt(dr(T.BC))+' cm ; AM = '+T.AM+' m → '+fmt(dr(T.AM))+' cm. Construction : tracer [AB] de '+fmt(dr(T.AB))+' cm ; construire C tel que AC = '+fmt(dr(T.AC))+' cm et BC = '+fmt(dr(T.BC))+' cm (compas) ; placer M sur [AB] avec AM = '+fmt(dr(T.AM))+' cm ; tracer par M la parallèle à (BC) ; elle coupe [AC] en N.',
      ['Identifier l’échelle 1/'+E+' et les longueurs réelles à convertir (AB, AC, BC, AM).','Identifier les positions de M sur [AB], de N sur [AC] et la condition (MN) // (BC).'],
      ['Tracer le segment [AB] à la bonne longueur.','Construire le point C (AC et BC) et tracer le triangle ABC.','Placer le point M sur [AB].','Tracer la parallèle à (BC) passant par M et placer N sur [AC].'],
      ['Convertir AB = '+T.AB+' m en '+fmt(dr(T.AB))+' cm et AC = '+T.AC+' m en '+fmt(dr(T.AC))+' cm.','Convertir BC = '+T.BC+' m en '+fmt(dr(T.BC))+' cm et AM = '+T.AM+' m en '+fmt(dr(T.AM))+' cm.']),
     K('Calcule les longueurs AN et MN.',
      'Les points A, M, B d’une part et A, N, C d’autre part sont alignés, et (MN) // (BC). D’après le théorème de Thalès : AM ÷ AB = AN ÷ AC = MN ÷ BC, soit '+T.AM+' ÷ '+T.AB+' = AN ÷ '+T.AC+' = MN ÷ '+T.BC+'. Donc AN = ('+T.AM+' × '+T.AC+') ÷ '+T.AB+' = '+T.AN+' m et MN = ('+T.AM+' × '+T.BC+') ÷ '+T.AB+' = '+T.MN+' m.',
      ['Reconnaître la configuration de Thalès : droites (BM) et (CN) sécantes en A, avec (MN) // (BC).','Identifier les inconnues : AN et MN.'],
      ['Écrire les rapports égaux AM ÷ AB = AN ÷ AC = MN ÷ BC.','Remplacer par les valeurs : '+T.AM+' ÷ '+T.AB+' = AN ÷ '+T.AC+' = MN ÷ '+T.BC+'.','Écrire les égalités permettant d’isoler AN et MN.'],
      ['Calculer AN = ('+T.AM+' × '+T.AC+') ÷ '+T.AB+' = '+T.AN+' m.','Calculer MN = ('+T.AM+' × '+T.BC+') ÷ '+T.AB+' = '+T.MN+' m.','Justifier en citant le théorème de Thalès.','Donner les résultats avec l’unité.'])];
    var per=T.AM+T.AN+T.MN, MB=T.AB-T.AM, CN=T.AC-T.AN, perMB=MB+T.BC+CN+T.MN;
    var p2=[K('Calcule le coût du '+W.mat+' nécessaire pour entourer '+W.zoneA+' (le triangle AMN).',
      'Le '+W.mat+' entoure le triangle AMN : il faut son périmètre. P = AM + AN + MN = '+T.AM+' + '+T.AN+' + '+T.MN+' = '+per+' m. Coût = '+per+' × '+fmt(W.matPrix,0)+' = '+money(per*W.matPrix)+'.',
      ['Identifier que la longueur de '+W.mat+' est le périmètre du triangle AMN.','Identifier le prix unitaire : '+fmt(W.matPrix,0)+' F le mètre.'],
      ['Écrire P = AM + AN + MN.','Écrire coût = P × '+fmt(W.matPrix,0)+'.'],
      ['Calculer P = '+T.AM+' + '+T.AN+' + '+T.MN+' = '+per+' m.','Calculer '+per+' × '+fmt(W.matPrix,0)+' = '+fmt(per*W.matPrix,0)+'.','Conclure avec l’unité : le '+W.mat+' coûte '+money(per*W.matPrix)+'.']),
     K('Calcule le périmètre de '+W.zoneB+' (le quadrilatère MBCN).',
      'MB = AB − AM = '+T.AB+' − '+T.AM+' = '+MB+' m et CN = AC − AN = '+T.AC+' − '+T.AN+' = '+CN+' m. Le périmètre de MBCN est P = MB + BC + CN + NM = '+MB+' + '+T.BC+' + '+CN+' + '+T.MN+' = '+perMB+' m.',
      ['Identifier que MBCN est un quadrilatère de côtés [MB], [BC], [CN] et [NM].','Identifier que MB et CN s’obtiennent par différence de longueurs.'],
      ['Écrire MB = AB − AM et CN = AC − AN.','Écrire P = MB + BC + CN + NM.'],
      ['Calculer MB = '+MB+' m et CN = '+CN+' m.','Calculer P = '+MB+' + '+T.BC+' + '+CN+' + '+T.MN+' = '+perMB+'.','Conclure avec l’unité : '+perMB+' m.'])];
    return {fig:{type:'tri',a:T.AB,b:T.AC,c:T.BC,unit:'m',mn:{AM:T.AM,p:T.p,q:T.q}},parts:[{intro:intro,cons:p1},{intro:x.standalone2?'On donne AN = '+T.AN+' m et MN = '+T.MN+' m.':'',cons:p2}]}; }};
  /* 3e : Polynômes & équations (système) */
  function genEq(r){ for(var i=0;i<500;i++){ var X=pick(r,[1500,2000,2500,3000,3500,4000,4500,5000]), Y=pick(r,[1000,1500,2000,2500,3000,3500,4000]); if(X===Y) continue;
      var p1=ri(r,1,5),q1=ri(r,1,5),p2=ri(r,1,5),q2=ri(r,1,5), D=p1*q2-p2*q1; if(D===0) continue;
      if(D<0){ var tp=p1,tq=q1; p1=p2; q1=q2; p2=tp; q2=tq; D=-D; }
      if(p1===p2&&q1===q2) continue; var R1=p1*X+q1*Y, R2=p2*X+q2*Y, u=ri(r,4,12), v=ri(r,4,12), cost=u*X+v*Y, k=ri(r,1,2), e=pick(r,[500,1000,1500,2000,2500,3000,3500].filter(function(z){ return z<Y&&z>0; })); if(!e) continue;
      var B=cost+Y*k+e; return {X:X,Y:Y,p1:p1,q1:q1,p2:p2,q2:q2,D:D,R1:R1,R2:R2,u:u,v:v,cost:cost,B:B,rest:B-cost,k:k}; } return null; }
  MOD['3e-EQ']={cls:'3e',theme:'Polynômes & équations',label:'Équations et systèmes',w1:1,build:function(x){ var W=x.W,e=W.eq,g=genEq(x.rnd);
    var cnt=function(n,i){ return n+' '+(n>1?i.s:i.o); };
    var intro='Chez le fournisseur, '+cnt(g.p1,{o:e.a,s:e.as})+' et '+cnt(g.q1,{o:e.b,s:e.bs})+' coûtent '+money(g.R1)+' ; '+cnt(g.p2,{o:e.a,s:e.as})+' et '+cnt(g.q2,{o:e.b,s:e.bs})+' coûtent '+money(g.R2)+'.';
    var N=g.R1*g.q2-g.R2*g.q1;
    var p1=[K('On note x le prix d’un '+e.a+' et y le prix d’un '+e.b+' (en francs). Traduis les informations du fournisseur par un système de deux équations d’inconnues x et y.',
      'Première information : '+g.p1+'x + '+g.q1+'y = '+fmt(g.R1,0)+'. Deuxième information : '+g.p2+'x + '+g.q2+'y = '+fmt(g.R2,0)+'. Le système est : { '+g.p1+'x + '+g.q1+'y = '+fmt(g.R1,0)+' ; '+g.p2+'x + '+g.q2+'y = '+fmt(g.R2,0)+' }.',
      ['Identifier les deux inconnues : x et y.','Identifier les deux relations données par le fournisseur.'],
      ['Nommer les inconnues x ('+e.a+') et y ('+e.b+').','Traduire la première information en équation.','Traduire la deuxième information en équation.'],
      ['Écrire le système de deux équations.']),
     K('Résous ce système et donne le prix d’un '+e.a+' et d’un '+e.b+'.',
      'On multiplie la 1re équation par '+g.q2+' et la 2e par '+g.q1+' : '+(g.p1*g.q2)+'x + '+(g.q1*g.q2)+'y = '+fmt(g.R1*g.q2,0)+' et '+(g.p2*g.q1)+'x + '+(g.q1*g.q2)+'y = '+fmt(g.R2*g.q1,0)+'. En soustrayant : '+g.D+'x = '+fmt(N,0)+', donc x = '+fmt(g.X,0)+'. Dans la 1re équation : '+g.p1+' × '+fmt(g.X,0)+' + '+g.q1+'y = '+fmt(g.R1,0)+', donc '+g.q1+'y = '+fmt(g.R1-g.p1*g.X,0)+' et y = '+fmt(g.Y,0)+'. Vérification dans la 2e équation : '+g.p2+' × '+fmt(g.X,0)+' + '+g.q2+' × '+fmt(g.Y,0)+' = '+fmt(g.R2,0)+'. Un '+e.a+' coûte '+money(g.X)+' et un '+e.b+' '+money(g.Y)+'.',
      ['Choisir une méthode adaptée : la combinaison linéaire (ou la substitution).'],
      ['Multiplier les équations pour obtenir le même coefficient de y.','Écrire le système équivalent obtenu.'],
      ['Éliminer y et obtenir '+g.D+'x = '+fmt(N,0)+'.','Calculer x = '+fmt(g.X,0)+'.','Calculer y = '+fmt(g.Y,0)+' en remplaçant x.','Vérifier les solutions dans les deux équations.','Conclure par une phrase avec l’unité (francs).'])];
    var i2='Le comité dispose d’un budget de '+money(g.B)+' et voudrait acheter '+cnt(g.u,{o:e.a,s:e.as})+' et '+cnt(g.v,{o:e.b,s:e.bs})+'.'+(x.standalone2?' Un '+e.a+' coûte '+money(g.X)+' et un '+e.b+' coûte '+money(g.Y)+'.':'');
    var p2=[K('Le budget de '+money(g.B)+' est-il suffisant pour acheter '+cnt(g.u,{o:e.a,s:e.as})+' et '+cnt(g.v,{o:e.b,s:e.bs})+' ? Justifie.',
      'Dépense = '+g.u+'x + '+g.v+'y = '+g.u+' × '+fmt(g.X,0)+' + '+g.v+' × '+fmt(g.Y,0)+' = '+fmt(g.u*g.X,0)+' + '+fmt(g.v*g.Y,0)+' = '+money(g.cost)+'. Comme '+money(g.cost)+' ≤ '+money(g.B)+', le budget est suffisant. Il reste '+fmt(g.B,0)+' − '+fmt(g.cost,0)+' = '+money(g.rest)+'.',
      ['Identifier les quantités à acheter et le budget disponible.'],
      ['Écrire la dépense D = '+g.u+'x + '+g.v+'y.','Écrire la comparaison D ≤ '+fmt(g.B,0)+'.'],
      ['Calculer '+g.u+' × '+fmt(g.X,0)+' = '+fmt(g.u*g.X,0)+'.','Calculer '+g.v+' × '+fmt(g.Y,0)+' = '+fmt(g.v*g.Y,0)+'.','Calculer D = '+money(g.cost)+'.','Comparer D et '+money(g.B)+'.','Conclure (le budget est suffisant, il reste '+money(g.rest)+').']),
     K('Avec la somme restante, quel est le nombre maximal de '+e.bs+' supplémentaires que le comité peut acheter ?',
      'La somme restante est '+money(g.rest)+'. Soit n le nombre de '+e.bs+' supplémentaires : '+fmt(g.Y,0)+'n ≤ '+fmt(g.rest,0)+', donc n ≤ '+fmt(g.rest,0)+' ÷ '+fmt(g.Y,0)+' ≈ '+fmt(g.rest/g.Y,2)+'. Comme n est un entier, n = '+g.k+'. Le comité peut acheter au maximum '+g.k+' '+(g.k>1?e.bs:e.b)+' supplémentaire'+(g.k>1?'s':'')+'.',
      ['Identifier que n doit être un entier et que la dépense ne doit pas dépasser la somme restante.'],
      ['Écrire l’inéquation '+fmt(g.Y,0)+'n ≤ '+fmt(g.rest,0)+'.'],
      ['Calculer la somme restante : '+fmt(g.B,0)+' − '+fmt(g.cost,0)+' = '+fmt(g.rest,0)+'.','Résoudre : n ≤ '+fmt(g.rest,0)+' ÷ '+fmt(g.Y,0)+' ≈ '+fmt(g.rest/g.Y,2)+'.','Tenir compte de n entier.','Conclure : '+g.k+' au maximum.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:g}; }};
  /* séries statistiques (3e et 4e) */
  function genStat(r,lo,N4){ for(var i=0;i<800;i++){ var n=5, N=N4?pick(r,[20,30,36,45,60]):ri(r,20,32), e=[]; var left=N; for(var k=0;k<n-1;k++){ var mx=left-(n-1-k)*1; var v=ri(r,2,Math.min(mx,Math.round(N/2.2))); e.push(v); left-=v; } e.push(left); if(e.some(function(z){ return z<1; })) continue;
      var vals=[]; for(var j=0;j<n;j++) vals.push(lo+j);
      var mxe=Math.max.apply(null,e); if(e.filter(function(z){ return z===mxe; }).length!==1) continue;
      var sum=0; vals.forEach(function(v,j){ sum+=v*e[j]; }); var mean=sum/N, m10=mean*10; if(Math.abs((m10-Math.floor(m10))-0.5)<0.06) continue;
      var med; var cum=0, arr=[]; vals.forEach(function(v,j){ for(var t=0;t<e[j];t++) arr.push(v); }); med=(N%2===0)?(arr[N/2-1]+arr[N/2])/2:arr[(N-1)/2];
      var th=vals[ri(r,2,3)], cnt=0; vals.forEach(function(v,j){ if(v>=th) cnt+=e[j]; }); var pct=cnt/N*100;
      var mode=vals[e.indexOf(mxe)];
      if(N4 && (180*e[0]/N)!==Math.round(180*e[0]/N)) continue;
      return {vals:vals,e:e,N:N,sum:sum,mean:mean,med:med,th:th,cnt:cnt,pct:pct,mode:mode,range:vals[vals.length-1]-vals[0],kk:ri(r,0,n-1)}; } return null; }
  function stTable(W,g){ return tableSpec([W.st.serie].concat(g.vals.map(String)),[['Effectif'].concat(g.e.map(String))]); }
  MOD['3e-ST']={cls:'3e',theme:'Statistiques',label:'Statistiques',w1:2,build:function(x){ var W=x.W,g=genStat(x.rnd,W.st.lo,false), u=W.st.unit;
    var intro='Le comité a relevé '+W.st.phrase+'. Les résultats sont donnés dans le tableau ci-dessous.';
    var sumTxt=g.vals.map(function(v,j){ return v+' × '+g.e[j]; }).join(' + ');
    var p1=[K('Détermine l’effectif total et le mode de cette série.',
      'L’effectif total est '+g.e.join(' + ')+' = '+g.N+'. Le mode est la valeur de plus grand effectif : '+g.mode+' ('+Math.max.apply(null,g.e)+' fois).',
      ['Identifier les valeurs et leurs effectifs dans le tableau.','Identifier ce que désignent l’effectif total et le mode.'],
      ['Écrire l’addition des effectifs.'],
      ['Calculer l’effectif total : '+g.e.join(' + ')+' = '+g.N+'.','Repérer le plus grand effectif : '+Math.max.apply(null,g.e)+'.']),
     K('Calcule la moyenne de cette série (arrondie au dixième).',
      'Moyenne = ('+sumTxt+') ÷ '+g.N+' = '+g.sum+' ÷ '+g.N+' ≈ '+fmt(g.mean,1)+'.',
      ['Identifier la formule de la moyenne d’une série à effectifs.'],
      ['Écrire la somme des produits valeur × effectif.','Écrire la division par l’effectif total.'],
      ['Calculer chaque produit valeur × effectif.','Calculer la somme : '+g.sum+'.','Calculer '+g.sum+' ÷ '+g.N+'.','Arrondir et conclure : environ '+fmt(g.mean,1)+'.'])];
    var p2=[K('Détermine la médiane de cette série.',
      (g.N%2===0?'L’effectif total est pair : la médiane est la moyenne de la '+(g.N/2)+'e et de la '+(g.N/2+1)+'e valeur (valeurs rangées dans l’ordre croissant). Ces deux valeurs sont égales à '+(function(){ var arr=[]; g.vals.forEach(function(v,j){ for(var t=0;t<g.e[j];t++) arr.push(v); }); return arr[g.N/2-1]+' et '+arr[g.N/2]; })()+', donc la médiane est '+fmt(g.med,1)+'.':'L’effectif total est impair : la médiane est la '+((g.N+1)/2)+'e valeur (valeurs rangées dans l’ordre croissant), soit '+fmt(g.med,1)+'.'),
      ['Identifier que la médiane partage la série ordonnée en deux groupes de même effectif.','Identifier la parité de l’effectif total.'],
      ['Ranger les valeurs dans l’ordre croissant (ou calculer les effectifs cumulés).','Repérer la position de la médiane.'],
      ['Déterminer les effectifs cumulés croissants.','Lire la valeur correspondant au rang cherché.','Conclure : médiane = '+fmt(g.med,1)+'.']),
     K('Calcule le pourcentage de cas où l’on a relevé au moins '+g.th+' '+W.st.unit+' dans cette série.',
      'Le nombre de cas avec une valeur supérieure ou égale à '+g.th+' est '+g.vals.filter(function(v){ return v>=g.th; }).map(function(v){ return g.e[g.vals.indexOf(v)]; }).join(' + ')+' = '+g.cnt+'. Le pourcentage est '+g.cnt+' ÷ '+g.N+' × 100 ≈ '+fmt(g.pct,1)+' %.',
      ['Identifier les valeurs supérieures ou égales à '+g.th+'.','Identifier que l’on cherche une fréquence en pourcentage.'],
      ['Écrire la somme des effectifs concernés.','Écrire le rapport effectif concerné ÷ effectif total × 100.'],
      ['Calculer l’effectif concerné : '+g.cnt+'.','Calculer '+g.cnt+' ÷ '+g.N+' × 100.','Conclure avec l’unité : environ '+fmt(g.pct,1)+' %.'])];
    return {table:stTable(W,g),parts:[{intro:intro,cons:p1,table:stTable(W,g)},{intro:x.standalone2?'On rappelle la série statistique relevée par le comité (tableau ci-dessous).':'',cons:p2,table:x.standalone2?stTable(W,g):null}],_g:g}; }};
  /* 3e : Applications affines (tarifs) */
  function genAf(r,W){ for(var i=0;i<500;i++){ var c=pick(r,W.af.cs), d=pick(r,W.af.ds), xs=ri(r,W.af.lo>50?4:6,W.af.lo>50?16:15), delta=d, dd=delta*xs; var a=c+delta; if(W.af.lo>50){ xs=ri(r,10,24)*10; dd=delta*xs; }
      var x0=(W.af.lo>50)?xs-ri(r,2,6)*10:xs-ri(r,2,4); if(x0<=0) continue; if(x0===xs) continue; return {a:a,c:c,d:dd,xs:xs,x0:x0,delta:delta}; } return null; }
  MOD['3e-AF']={cls:'3e',theme:'Applications affines',label:'Applications affines',w1:1,build:function(x){ var W=x.W,A=W.af,g=genAf(x.rnd,W),u=A.unit, f=function(t){ return g.a*t; }, h2=function(t){ return g.c*t+g.d; };
    var intro='Pour '+A.service+', deux tarifs sont proposés. '+A.A.charAt(0).toUpperCase()+A.A.slice(1)+' : '+g.a+' F par '+u+'. '+A.B.charAt(0).toUpperCase()+A.B.slice(1)+' : un forfait de '+fmt(g.d,0)+' F, puis '+g.c+' F par '+u+'. On note x le nombre de '+A.unitFull+' et on désigne par f(x) le prix du tarif A et par g(x) le prix du tarif B.';
    var better=f(g.x0)<h2(g.x0)?'A':'B', diff=Math.abs(f(g.x0)-h2(g.x0));
    var p1=[K('Exprime f(x) et g(x) en fonction de x.',
      'f(x) = '+g.a+'x et g(x) = '+g.c+'x + '+fmt(g.d,0)+'.',
      ['Identifier la variable x et les deux tarifs.','Distinguer la partie proportionnelle de la partie fixe (forfait).'],
      ['Traduire le tarif A : prix proportionnel à x.','Traduire le tarif B : forfait plus prix proportionnel à x.','Reconnaître une fonction linéaire (A) et une fonction affine (B).'],
      ['Écrire f(x) = '+g.a+'x et g(x) = '+g.c+'x + '+fmt(g.d,0)+'.']),
     K('Calcule f('+g.x0+') et g('+g.x0+'). Quel tarif est le plus avantageux pour '+g.x0+' '+A.unitFull+' ?',
      'f('+g.x0+') = '+g.a+' × '+g.x0+' = '+fmt(f(g.x0),0)+' F. g('+g.x0+') = '+g.c+' × '+g.x0+' + '+fmt(g.d,0)+' = '+fmt(g.c*g.x0,0)+' + '+fmt(g.d,0)+' = '+fmt(h2(g.x0),0)+' F. Comme '+fmt(Math.min(f(g.x0),h2(g.x0)),0)+' < '+fmt(Math.max(f(g.x0),h2(g.x0)),0)+', le tarif '+better+' est le plus avantageux (économie de '+money(diff)+').',
      ['Identifier qu’il faut calculer l’image de '+g.x0+' par f et par g.'],
      ['Remplacer x par '+g.x0+' dans chaque expression.','Écrire la comparaison des deux prix.'],
      ['Calculer f('+g.x0+') = '+fmt(f(g.x0),0)+'.','Calculer g('+g.x0+') = '+fmt(h2(g.x0),0)+'.','Comparer les deux prix.','Conclure : le tarif '+better+' est le plus avantageux.'])];
    var p2=[K('Résous l’équation f(x) = g(x). Que représente la solution ?',
      g.a+'x = '+g.c+'x + '+fmt(g.d,0)+' équivaut à '+(g.a-g.c)+'x = '+fmt(g.d,0)+', donc x = '+fmt(g.d,0)+' ÷ '+(g.a-g.c)+' = '+g.xs+'. Pour '+g.xs+' '+A.unitFull+', les deux tarifs coïncident : '+fmt(f(g.xs),0)+' F.',
      ['Identifier que résoudre f(x) = g(x) revient à chercher quand les deux tarifs sont égaux.','Identifier l’inconnue x.'],
      ['Écrire l’équation '+g.a+'x = '+g.c+'x + '+fmt(g.d,0)+'.','Regrouper les termes en x : '+(g.a-g.c)+'x = '+fmt(g.d,0)+'.'],
      ['Calculer '+g.a+' − '+g.c+' = '+(g.a-g.c)+'.','Calculer x = '+fmt(g.d,0)+' ÷ '+(g.a-g.c)+' = '+g.xs+'.','Vérifier : f('+g.xs+') = g('+g.xs+') = '+fmt(f(g.xs),0)+'.','Interpréter : les deux tarifs sont égaux pour '+g.xs+' '+A.unitFull+'.']),
     K('À partir de combien de '+A.unitFull+' le tarif B est-il strictement moins cher que le tarif A ?',
      'On cherche x tel que g(x) < f(x) : '+g.c+'x + '+fmt(g.d,0)+' < '+g.a+'x, donc '+fmt(g.d,0)+' < '+(g.a-g.c)+'x, donc x > '+g.xs+'. Le tarif B est strictement moins cher dès que x est supérieur à '+g.xs+' '+A.unitFull+'.',
      ['Identifier qu’il faut résoudre l’inéquation g(x) < f(x).'],
      ['Écrire l’inéquation '+g.c+'x + '+fmt(g.d,0)+' < '+g.a+'x.','Regrouper les termes en x.'],
      ['Résoudre : x > '+fmt(g.d,0)+' ÷ '+(g.a-g.c)+' = '+g.xs+'.','Conclure : le tarif B est moins cher pour x > '+g.xs+'.','Interpréter dans le contexte ('+A.unitFull+').'])];
    return {parts:[{intro:intro,cons:p1},{intro:x.standalone2?'On rappelle : f(x) = '+g.a+'x et g(x) = '+g.c+'x + '+fmt(g.d,0)+' (en francs, x désignant le nombre de '+A.unitFull+').':'',cons:p2}],_g:g}; }};
  /* 3e : Solides & sections planes (cône) */
  var CONES=[[6,9,3,2],[9,12,3,2],[8,12,4,3],[6,12,2,1],[10,15,5,3],[9,15,3,1],[12,18,3,2],[6,9,3,1]]; /* R²H et r²h divisibles par 3 : volumes exacts */
  MOD['3e-SO']={cls:'3e',theme:'Solides & sections planes',label:'Solides et sections planes',w1:1,build:function(x){ var W=x.W,c=pick(x.rnd,CONES),R=c[0],H=c[1],p=c[2+1],q=c[2]; /* [R,H,q,p] */ q=c[2]; p=c[3];
    var h=p*H/q, r=p*R/q, V=3.14*R*R*H/3, V2=3.14*r*r*h/3, L=V/1000;
    var intro='Le comité utilise '+W.cone.objet+'. Ce cône a un rayon de base de '+R+' cm et une hauteur de '+H+' cm. On prendra 3,14 comme valeur approchée de π.';
    var p1=[K('Calcule le volume V du cône, en cm³.',
      'V = (1/3) × π × R² × H = (1/3) × 3,14 × '+R+'² × '+H+' = (3,14 × '+(R*R)+' × '+H+') ÷ 3 '+eq(V,2)+' '+fmt(V,2)+' cm³.',
      ['Identifier le solide (cône de révolution) et ses dimensions R et H.'],
      ['Écrire la formule V = (1/3) × π × R² × H.','Remplacer par les valeurs numériques.'],
      ['Calculer R² = '+(R*R)+'.','Calculer 3,14 × '+(R*R)+' × '+H+' ÷ 3.','Conclure avec l’unité : V = '+fmt(V,2)+' cm³.']),
     K('Exprime ce volume en litres, arrondi au dixième. (1 L = 1 000 cm³.)',
      '1 L = 1 000 cm³ donc V = '+fmt(V,2)+' ÷ 1 000 '+eq(L,5)+' '+fmt(L,5)+' L, soit environ '+fmt(L,1)+' L.',
      ['Identifier la relation entre cm³ et litres.'],
      ['Écrire la conversion V(L) = V(cm³) ÷ 1 000.'],
      ['Calculer '+fmt(V,2)+' ÷ 1 000.','Arrondir au dixième et conclure : environ '+fmt(L,1)+' L.'])];
    var i2='Le cône est rempli '+W.cone.fluide+' jusqu’à une hauteur de '+h+' cm : la surface libre est un disque parallèle à la base, de centre sur l’axe du cône.'+(x.standalone2?' Le cône a un rayon de base de '+R+' cm et une hauteur de '+H+' cm (π ≈ 3,14).':'');
    var p2=[K('Calcule le rayon r de la surface libre '+W.cone.fluide+'.',
      'Le petit cône (rempli) est une réduction du cône entier, de rapport k = h ÷ H = '+h+' ÷ '+H+' = '+p+'/'+q+'. Donc r = k × R = ('+p+'/'+q+') × '+R+' = '+r+' cm. (Thalès : r ÷ R = h ÷ H.)',
      ['Identifier que le petit cône est une réduction du cône entier (section parallèle à la base).','Identifier le rapport de réduction k = h ÷ H.'],
      ['Faire un schéma en coupe du cône avec la hauteur h.','Écrire r ÷ R = h ÷ H (Thalès).','Isoler r : r = R × h ÷ H.'],
      ['Calculer k = '+h+' ÷ '+H+' = '+p+'/'+q+'.','Calculer r = '+R+' × '+h+' ÷ '+H+' = '+r+' cm.','Conclure avec l’unité : r = '+r+' cm.']),
     K('Calcule le volume '+W.cone.fluide+' contenu dans le cône, en cm³.',
      'Volume = (1/3) × π × r² × h = (1/3) × 3,14 × '+r+'² × '+h+' = (3,14 × '+(r*r)+' × '+h+') ÷ 3 '+eq(V2,2)+' '+fmt(V2,2)+' cm³.',
      ['Identifier que le liquide occupe un cône de rayon r et de hauteur h.'],
      ['Faire apparaître le petit cône sur le schéma.','Écrire la formule V’ = (1/3) × π × r² × h.','Remplacer par r = '+r+' et h = '+h+'.'],
      ['Calculer r² = '+(r*r)+'.','Calculer 3,14 × '+(r*r)+' × '+h+' ÷ 3.','Conclure avec l’unité : V’ = '+fmt(V2,2)+' cm³.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{R:R,H:H,h:h,r:r,V:V,V2:V2}}; }};

  /* 4e : Triangles (Pythagore et droite des milieux) */
  MOD['4e-TR']={cls:'4e',theme:'4e — Triangles : droite des milieux & Pythagore',label:'Triangles : Pythagore et droite des milieux',w1:3,build:function(x){ var T=x.T,a=T.AB,b=T.AC,c=T.BC;
    var base=MOD['3e-TR'].build(x), p1=base.parts[0].cons.slice(0,2);
    var intro=base.parts[0].intro;
    var i2='Sur le terrain ABC (AB = '+a+' m, AC = '+b+' m, BC = '+c+' m), le point I est le milieu du côté [AB] et le point J est le milieu du côté [AC].';
    var p2=[K('Calcule la longueur IJ en justifiant ta réponse.',
      'Dans le triangle ABC, I est le milieu de [AB] et J est le milieu de [AC]. D’après la propriété de la droite des milieux, (IJ) est parallèle à (BC) et IJ = BC ÷ 2 = '+c+' ÷ 2 = '+fmt(c/2,1)+' m.',
      ['Identifier que I et J sont les milieux de deux côtés du triangle ABC.','Identifier la propriété de la droite des milieux à utiliser.'],
      ['Faire un schéma avec les milieux I et J.','Écrire IJ = BC ÷ 2.'],
      ['Citer la propriété (la droite des milieux est parallèle au troisième côté et mesure la moitié).','Calculer '+c+' ÷ 2 = '+fmt(c/2,1)+'.','Conclure avec l’unité : IJ = '+fmt(c/2,1)+' m.']),
     K('Calcule le périmètre du triangle AIJ.',
      'AI = AB ÷ 2 = '+fmt(a/2,1)+' m et AJ = AC ÷ 2 = '+fmt(b/2,1)+' m (I et J sont des milieux). Le périmètre de AIJ est AI + AJ + IJ = '+fmt(a/2,1)+' + '+fmt(b/2,1)+' + '+fmt(c/2,1)+' = '+fmt((a+b+c)/2,1)+' m.',
      ['Identifier les trois côtés du triangle AIJ : [AI], [AJ] et [IJ].','Identifier que AI et AJ sont la moitié de AB et de AC.'],
      ['Écrire AI = AB ÷ 2 et AJ = AC ÷ 2.','Écrire P = AI + AJ + IJ.'],
      ['Calculer AI = '+fmt(a/2,1)+' m et AJ = '+fmt(b/2,1)+' m.','Calculer P = '+fmt(a/2,1)+' + '+fmt(b/2,1)+' + '+fmt(c/2,1)+' = '+fmt((a+b+c)/2,1)+'.','Conclure avec l’unité : '+fmt((a+b+c)/2,1)+' m.'])];
    return {fig:{type:'tri',a:a,b:b,c:c,unit:'m',ij:true},parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}]}; }};
  /* 4e : Cône et pyramide */
  var C4=[[3,4,5],[6,8,10],[5,12,13],[9,12,15],[8,15,17]];
  MOD['4e-SO']={cls:'4e',theme:'4e — Cône de révolution',label:'Cône et pyramide',w1:1,themes:['4e — Cône de révolution','4e — Pyramide'],build:function(x){ var W=x.W,t=pick(x.rnd,C4),r=t[0],h=t[1],g=t[2],V=3.14*r*r*h/3;
    var intro='Le comité utilise '+W.cone.objet+'. Le rayon de sa base est '+r+' cm et sa génératrice mesure '+g+' cm. On prendra 3,14 comme valeur approchée de π.';
    var p1=[K('Calcule la hauteur h du cône.',
      'La hauteur h, le rayon r et la génératrice g forment un triangle rectangle (rectangle au centre de la base) : g² = r² + h². Donc h² = g² − r² = '+g+'² − '+r+'² = '+(g*g)+' − '+(r*r)+' = '+(g*g-r*r)+' et h = √'+(g*g-r*r)+' = '+h+' cm.',
      ['Identifier le triangle rectangle formé par la hauteur, le rayon et la génératrice.','Identifier l’inconnue h et le théorème de Pythagore.'],
      ['Faire un schéma en coupe du cône.','Écrire g² = r² + h².','Isoler h² = g² − r².'],
      ['Calculer '+g+'² − '+r+'² = '+(g*g-r*r)+'.','Calculer h = √'+(g*g-r*r)+' = '+h+'.','Conclure avec l’unité : h = '+h+' cm.']),
     K('Calcule le volume du cône, en cm³.',
      'V = (1/3) × π × r² × h = (1/3) × 3,14 × '+r+'² × '+h+' = (3,14 × '+(r*r)+' × '+h+') ÷ 3 '+eq(V,2)+' '+fmt(V,2)+' cm³.',
      ['Identifier le solide et les dimensions utiles r et h.'],
      ['Écrire la formule V = (1/3) × π × r² × h.','Remplacer par les valeurs numériques.'],
      ['Calculer r² = '+(r*r)+'.','Calculer 3,14 × '+(r*r)+' × '+h+' ÷ 3.','Conclure avec l’unité : V = '+fmt(V,2)+' cm³.'])];
    var cs=pick(x.rnd,[6,9,12,15]), H2=pick(x.rnd,[9,12,15]), VP=cs*cs*H2/3;
    var i2='Un autre récipient a la forme d’une pyramide à base carrée de côté '+cs+' cm et de hauteur '+H2+' cm.'+(x.standalone2?' On rappelle que le cône précédent a un volume de '+fmt(V,2)+' cm³.':'');
    var bigger=VP>V?'la pyramide':'le cône';
    var p2=[K('Calcule le volume de la pyramide, en cm³.',
      'V = (1/3) × aire de la base × hauteur = (1/3) × '+cs+'² × '+H2+' = ('+(cs*cs)+' × '+H2+') ÷ 3 '+eq(VP,2)+' '+fmt(VP,2)+' cm³.',
      ['Identifier que la base est un carré de côté '+cs+' cm.'],
      ['Écrire la formule V = (1/3) × B × h.','Écrire B = côté × côté.'],
      ['Calculer B = '+cs+'² = '+(cs*cs)+' cm².','Calculer V = ('+(cs*cs)+' × '+H2+') ÷ 3.','Conclure avec l’unité : '+fmt(VP,2)+' cm³.']),
     K('Lequel des deux récipients a le plus grand volume ? Justifie.',
      'Volume du cône : '+fmt(V,2)+' cm³. Volume de la pyramide : '+fmt(VP,2)+' cm³. Comme '+fmt(Math.max(V,VP),2)+' > '+fmt(Math.min(V,VP),2)+', '+bigger+' a le plus grand volume.',
      ['Identifier qu’il faut comparer deux volumes exprimés dans la même unité.','Identifier les résultats utiles (volume du cône, volume de la pyramide).'],
      ['Écrire la comparaison '+fmt(V,2)+' et '+fmt(VP,2)+'.'],
      ['Comparer les deux nombres.','Conclure : '+bigger+' a le plus grand volume.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{r:r,h:h,g:g,V:V,cs:cs,H2:H2,VP:VP}}; }};
  /* 4e : Équations et inéquations */
  MOD['4e-EQ']={cls:'4e',theme:'4e — Équations & inéquations',label:'Équations et inéquations',w1:1,build:function(x){ var W=x.W,e=W.eq,r=x.rnd;
    var X=pick(r,[250,300,400,500,600,750,800,1000,1200]), n=ri(r,6,15), f=pick(r,[500,1000,1500,2000]), T=n*X+f;
    var B=T+ri(r,3,9)*100+pick(r,[0,50,150,250]); var k=Math.floor((B-f)/X); if((B-f)%X===0) B+=Math.round(X/3/50)*50+50, k=Math.floor((B-f)/X);
    var intro='Pour l’achat de '+e.obj+', le comité commande '+n+' '+e.as+' identiques. Le fournisseur ajoute '+money(f)+' de frais de transport. Le comité paie '+money(T)+' au total.';
    var p1=[K('On note x le prix d’un '+e.a+' (en francs). Écris une équation d’inconnue x traduisant la situation.',
      'Le prix de '+n+' '+e.as+' est '+n+'x. En ajoutant les frais de transport : '+n+'x + '+fmt(f,0)+' = '+fmt(T,0)+'.',
      ['Identifier l’inconnue x et les données : '+n+' articles, '+money(f)+' de frais, '+money(T)+' au total.','Identifier la structure : prix des articles + frais = total.'],
      ['Traduire le prix des articles par '+n+'x.','Écrire l’égalité '+n+'x + '+fmt(f,0)+' = '+fmt(T,0)+'.'],
      ['Écrire l’équation '+n+'x + '+fmt(f,0)+' = '+fmt(T,0)+'.']),
     K('Résous cette équation et donne le prix d’un '+e.a+'.',
      n+'x + '+fmt(f,0)+' = '+fmt(T,0)+' équivaut à '+n+'x = '+fmt(T,0)+' − '+fmt(f,0)+' = '+fmt(T-f,0)+', donc x = '+fmt(T-f,0)+' ÷ '+n+' = '+fmt(X,0)+'. Un '+e.a+' coûte '+money(X)+'.',
      ['Identifier la méthode : isoler x avec des opérations successives.'],
      ['Soustraire '+fmt(f,0)+' aux deux membres.','Diviser les deux membres par '+n+'.'],
      ['Calculer '+fmt(T,0)+' − '+fmt(f,0)+' = '+fmt(T-f,0)+'.','Calculer '+fmt(T-f,0)+' ÷ '+n+' = '+fmt(X,0)+'.','Vérifier : '+n+' × '+fmt(X,0)+' + '+fmt(f,0)+' = '+fmt(T,0)+'.','Conclure avec l’unité : '+money(X)+'.'])];
    var i2='Le comité dispose maintenant d’un budget de '+money(B)+', frais de transport de '+money(f)+' compris, pour acheter des '+e.as+' à '+money(X)+' l’unité'+(x.standalone2?'':' (même prix que précédemment)')+'.';
    var p2=[K('On note n le nombre de '+e.as+' achetés. Écris une inéquation d’inconnue n traduisant la situation.',
      'La dépense est '+fmt(X,0)+'n + '+fmt(f,0)+'. Elle ne doit pas dépasser le budget : '+fmt(X,0)+'n + '+fmt(f,0)+' ≤ '+fmt(B,0)+'.',
      ['Identifier l’inconnue n, le prix unitaire '+money(X)+', les frais '+money(f)+' et le budget '+money(B)+'.','Identifier que la dépense doit être inférieure ou égale au budget.'],
      ['Traduire la dépense par '+fmt(X,0)+'n + '+fmt(f,0)+'.','Écrire l’inégalité avec le budget.'],
      ['Écrire l’inéquation '+fmt(X,0)+'n + '+fmt(f,0)+' ≤ '+fmt(B,0)+'.']),
     K('Résous cette inéquation. Quel est le nombre maximal de '+e.as+' que le comité peut acheter ?',
      fmt(X,0)+'n + '+fmt(f,0)+' ≤ '+fmt(B,0)+' équivaut à '+fmt(X,0)+'n ≤ '+fmt(B-f,0)+', donc n ≤ '+fmt(B-f,0)+' ÷ '+fmt(X,0)+' ≈ '+fmt((B-f)/X,2)+'. Comme n est un entier, le comité peut acheter au maximum '+k+' '+(k>1?e.as:e.a)+'.',
      ['Identifier que n doit être un nombre entier.'],
      ['Soustraire '+fmt(f,0)+' aux deux membres.','Diviser par '+fmt(X,0)+' (nombre positif : le sens de l’inégalité ne change pas).'],
      ['Calculer '+fmt(B,0)+' − '+fmt(f,0)+' = '+fmt(B-f,0)+'.','Calculer '+fmt(B-f,0)+' ÷ '+fmt(X,0)+' ≈ '+fmt((B-f)/X,2)+'.','Tenir compte de n entier.','Conclure : '+k+' au maximum.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{X:X,n:n,f:f,T:T,B:B,k:k}}; }};
  /* 4e : Proportionnalité */
  MOD['4e-PR']={cls:'4e',theme:'4e — Proportionnalité',label:'Proportionnalité',w1:1,build:function(x){ var W=x.W,P=W.pr,r=x.rnd,n0=pick(r,[4,5,10]),q1=pick(r,[1,1.5,2,2.5]),q2=pick(r,[0.5,1,1.5,2]),j1=ri(r,2,4),j2=ri(r,5,8),pa=n0*j1,pb=n0*j2, pc=n0*ri(r,9,12);
    var intro='Pour '+P.plat+', la recette prévue pour '+n0+' personnes demande '+fmt(q1,1)+' '+P.u1+' de '+P.i1+' et '+fmt(q2,1)+' '+P.u2+' de '+P.i2+'. Le comité veut préparer cette recette pour '+pa+', '+pb+' puis '+pc+' personnes. Le '+P.u1+' de '+P.i1+' coûte '+money(P.p1)+' et le '+P.u2+' de '+P.i2+' coûte '+money(P.p2)+'.';
    var tab=tableSpec(['Nombre de personnes',String(n0),String(pa),String(pb)],[[('Quantité de '+P.i1+' ('+P.u1+')'),fmt(q1,1),'…','…'],[('Quantité de '+P.i2+' ('+P.u2+')'),fmt(q2,1),'…','…']]);
    var c1=pa/n0,c2=pb/n0, cc=pc/n0;
    var A1=q1*pc/n0, A2=q2*pc/n0, cost=A1*P.p1+A2*P.p2;
    var p1=[K('Justifie que la situation est une situation de proportionnalité, puis détermine les quantités de '+P.i1+' et de '+P.i2+' nécessaires pour '+pa+' et pour '+pb+' personnes.',
      'Le nombre de personnes et les quantités sont proportionnels. Pour '+pa+' personnes, on multiplie par '+pa+' ÷ '+n0+' = '+c1+' : '+fmt(q1*c1,2)+' '+P.u1+' de '+P.i1+' et '+fmt(q2*c1,2)+' '+P.u2+' de '+P.i2+'. Pour '+pb+' personnes, on multiplie par '+pb+' ÷ '+n0+' = '+c2+' : '+fmt(q1*c2,2)+' '+P.u1+' de '+P.i1+' et '+fmt(q2*c2,2)+' '+P.u2+' de '+P.i2+'.',
      ['Identifier que les quantités nécessaires sont proportionnelles au nombre de personnes.','Identifier les nombres de personnes et les quantités connues.'],
      ['Compléter le tableau de proportionnalité.','Écrire le coefficient de proportionnalité pour '+pa+' et pour '+pb+' personnes.'],
      ['Calculer '+pa+' ÷ '+n0+' = '+c1+' puis les quantités pour '+pa+' personnes.','Calculer '+pb+' ÷ '+n0+' = '+c2+' puis les quantités pour '+pb+' personnes.','Conclure avec les unités.']),
     K('Calcule les quantités de '+P.i1+' et de '+P.i2+' pour '+pc+' personnes, puis le coût total de ces ingrédients.',
      'Pour '+pc+' personnes, on multiplie par '+pc+' ÷ '+n0+' = '+cc+' : '+fmt(A1,2)+' '+P.u1+' de '+P.i1+' et '+fmt(A2,2)+' '+P.u2+' de '+P.i2+'. Coût = '+fmt(A1,2)+' × '+fmt(P.p1,0)+' + '+fmt(A2,2)+' × '+fmt(P.p2,0)+' = '+fmt(A1*P.p1,0)+' + '+fmt(A2*P.p2,0)+' = '+money(cost)+'.',
      ['Identifier les quantités à calculer et les prix unitaires.','Identifier que le coût total est la somme des coûts des deux ingrédients.'],
      ['Écrire le coefficient de proportionnalité '+pc+' ÷ '+n0+'.','Écrire coût = quantité 1 × prix 1 + quantité 2 × prix 2.'],
      ['Calculer les quantités pour '+pc+' personnes.','Calculer le coût de chaque ingrédient.','Calculer le coût total : '+money(cost)+'.'])];
    var Pr=pick(r,[10000,15000,20000,25000,30000,40000]), t=pick(r,[5,10,15,20,25]), rem=Pr*t/100;
    var i2='Le fournisseur propose au comité une remise de '+t+' % sur l’achat de matériel de cuisine d’une valeur de '+money(Pr)+'.';
    var p2=[K('Calcule le montant de la remise.',
      'Remise = '+fmt(Pr,0)+' × '+t+' ÷ 100 = '+money(rem)+'.',
      ['Identifier le prix initial et le taux de remise.'],
      ['Écrire remise = prix × taux ÷ 100.','Remplacer par les valeurs numériques.'],
      ['Calculer '+fmt(Pr,0)+' × '+t+' = '+fmt(Pr*t,0)+'.','Calculer '+fmt(Pr*t,0)+' ÷ 100 = '+fmt(rem,0)+'.','Conclure avec l’unité : '+money(rem)+'.']),
     K('Calcule le prix à payer après la remise.',
      'Prix à payer = '+fmt(Pr,0)+' − '+fmt(rem,0)+' = '+money(Pr-rem)+'. (On paie '+(100-t)+' % du prix initial : '+fmt(Pr,0)+' × '+(100-t)+' ÷ 100 = '+money(Pr-rem)+'.)',
      ['Identifier que le prix à payer est le prix initial diminué de la remise.','Identifier le résultat de la question précédente.'],
      ['Écrire prix à payer = prix initial − remise.','Remplacer par les valeurs numériques.'],
      ['Calculer '+fmt(Pr,0)+' − '+fmt(rem,0)+' = '+fmt(Pr-rem,0)+'.','Vérifier avec '+(100-t)+' % du prix initial.','Conclure avec l’unité : '+money(Pr-rem)+'.'])];
    return {parts:[{intro:intro,cons:p1,table:tab},{intro:i2,cons:p2}],_g:{n0:n0,pa:pa,pb:pb,pc:pc,A1:A1,A2:A2,cost:cost,Pr:Pr,t:t,rem:rem}}; }};
  /* 4e : Statistique */
  MOD['4e-ST']={cls:'4e',theme:'4e — Statistique',label:'Statistique',w1:2,build:function(x){ var W=x.W,g=genStat(x.rnd,W.st.lo,true);
    var intro='Le comité a relevé '+W.st.phrase+'. Les résultats sont donnés dans le tableau ci-dessous.';
    var kk=g.kk, vk=g.vals[kk], ek=g.e[kk], fk=ek/g.N*100;
    var j=(kk+2)%5, vj=g.vals[j], ej=g.e[j], ang=180*ej/g.N;
    var p1=[K('Détermine l’effectif total, puis la fréquence (en %) de la valeur '+vk+'.',
      'L’effectif total est '+g.e.join(' + ')+' = '+g.N+'. La fréquence de la valeur '+vk+' est '+ek+' ÷ '+g.N+' × 100 ≈ '+fmt(fk,1)+' %.',
      ['Identifier les valeurs et leurs effectifs.','Identifier la définition de la fréquence : effectif ÷ effectif total.'],
      ['Écrire la somme des effectifs.','Écrire fréquence = effectif ÷ effectif total × 100.'],
      ['Calculer l’effectif total : '+g.N+'.','Calculer '+ek+' ÷ '+g.N+' × 100.','Conclure avec l’unité : environ '+fmt(fk,1)+' %.']),
     K('Calcule la moyenne de cette série (arrondie au dixième).',
      'Moyenne = ('+g.vals.map(function(v,i){ return v+' × '+g.e[i]; }).join(' + ')+') ÷ '+g.N+' = '+g.sum+' ÷ '+g.N+' ≈ '+fmt(g.mean,1)+'.',
      ['Identifier la formule de la moyenne d’une série à effectifs.'],
      ['Écrire la somme des produits valeur × effectif.','Écrire la division par l’effectif total.'],
      ['Calculer chaque produit valeur × effectif.','Calculer la somme : '+g.sum+'.','Calculer '+g.sum+' ÷ '+g.N+'.','Arrondir et conclure : environ '+fmt(g.mean,1)+'.'])];
    var p2=[K('Détermine le mode et l’étendue de cette série.',
      'Le mode est la valeur de plus grand effectif : '+g.mode+'. L’étendue est la différence entre la plus grande et la plus petite valeur : '+g.vals[4]+' − '+g.vals[0]+' = '+g.range+'.',
      ['Identifier les définitions du mode et de l’étendue.','Repérer les valeurs extrêmes et le plus grand effectif.'],
      ['Écrire étendue = plus grande valeur − plus petite valeur.'],
      ['Repérer le plus grand effectif : '+Math.max.apply(null,g.e)+', donc le mode est '+g.mode+'.','Calculer '+g.vals[4]+' − '+g.vals[0]+' = '+g.range+'.']),
     K('On veut représenter cette série par un diagramme semi-circulaire. Calcule la mesure de l’angle du secteur correspondant à la valeur '+vj+'.',
      'Dans un diagramme semi-circulaire, l’angle total est 180° pour l’effectif total '+g.N+'. L’angle du secteur de la valeur '+vj+' est '+ej+' ÷ '+g.N+' × 180 = '+fmt(ang,0)+'°.',
      ['Identifier que l’angle est proportionnel à l’effectif et que le total vaut 180°.'],
      ['Écrire angle = effectif ÷ effectif total × 180.','Remplacer par les valeurs numériques.'],
      ['Calculer '+ej+' ÷ '+g.N+' × 180.','Conclure avec l’unité : '+fmt(ang,0)+'°.'])];
    return {parts:[{intro:intro,cons:p1,table:stTable(W,g)},{intro:x.standalone2?'On rappelle la série statistique relevée par le comité (tableau ci-dessous).':'',cons:p2,table:x.standalone2?stTable(W,g):null}],_g:g}; }};
  /* 4e : PGCD et PPCM */
  MOD['4e-PG']={cls:'4e',theme:'4e — PGCD & PPCM',label:'PGCD et PPCM',w1:1,build:function(x){ var W=x.W,P=W.pg,r=x.rnd,g,m1,m2,a,b;
    for(var i=0;i<200;i++){ g=ri(r,4,24); m1=ri(r,2,9); m2=ri(r,2,9); if(m1===m2||gcd(m1,m2)!==1) continue; a=g*m1; b=g*m2; if(a<=250&&b<=250&&a!==b) break; }
    var intro='Le comité dispose de '+a+' '+P.i1+' et de '+b+' '+P.i2+'. Il souhaite former des lots identiques, en utilisant tous les articles, chaque lot contenant le même nombre de '+P.i1+' et le même nombre de '+P.i2+'.';
    var p1=[K('Décompose '+a+' et '+b+' en produits de facteurs premiers.',
      a+' = '+factStr(a)+' et '+b+' = '+factStr(b)+'.',
      ['Identifier qu’il faut décomposer chaque nombre en facteurs premiers.'],
      ['Écrire la décomposition de '+a+'.','Écrire la décomposition de '+b+'.'],
      ['Diviser '+a+' par les nombres premiers successifs.','Diviser '+b+' par les nombres premiers successifs.','Écrire les deux produits de facteurs premiers.','Vérifier en effectuant les produits.']),
     K('Calcule le PGCD de '+a+' et '+b+'. En déduire le nombre maximal de lots et la composition de chaque lot.',
      'Le PGCD est le produit des facteurs premiers communs, avec le plus petit exposant : PGCD('+a+' ; '+b+') = '+g+'. Le nombre maximal de lots est '+g+'. Chaque lot contient '+a+' ÷ '+g+' = '+m1+' '+P.i1+' et '+b+' ÷ '+g+' = '+m2+' '+P.i2+'.',
      ['Identifier que le nombre maximal de lots est le PGCD des deux nombres.','Identifier que la composition s’obtient par division par le PGCD.'],
      ['Écrire PGCD('+a+' ; '+b+') à partir des décompositions.','Écrire les divisions '+a+' ÷ PGCD et '+b+' ÷ PGCD.'],
      ['Calculer le PGCD = '+g+'.','Calculer '+a+' ÷ '+g+' = '+m1+' et '+b+' ÷ '+g+' = '+m2+'.','Conclure : '+g+' lots de '+m1+' '+P.i1+' et '+m2+' '+P.i2+'.'])];
    var pq=pick(r,[[4,6],[6,8],[10,15],[12,18],[9,12],[8,12],[6,10],[15,20]]), p=pq[0], q=pq[1], L=lcm(p,q), D=ri(r,Math.max(3*L,60),Math.max(6*L,150)), nn=Math.floor(D/L);
    var i2=P.per(p,q);
    var p2=[K('Calcule le PPCM de '+p+' et '+q+'. Que représente ce nombre dans la situation ?',
      'Multiples de '+p+' : '+[1,2,3,4,5,6].map(function(k){ return p*k; }).join(', ')+'… Multiples de '+q+' : '+[1,2,3,4,5,6].map(function(k){ return q*k; }).join(', ')+'… Le plus petit multiple commun non nul est '+L+'. PPCM('+p+' ; '+q+') = '+L+' : ils se retrouveront de nouveau ensemble dans '+L+' jours.',
      ['Identifier qu’il faut chercher un multiple commun de '+p+' et de '+q+'.','Identifier que l’on cherche le plus petit multiple commun non nul.'],
      ['Écrire quelques multiples de '+p+' et de '+q+'.','Repérer le premier multiple commun.'],
      ['Lister les multiples de '+p+'.','Lister les multiples de '+q+'.','Repérer le plus petit multiple commun : '+L+'.']),
     K('Combien de fois se retrouveront-ils ensemble dans les '+D+' prochains jours (sans compter aujourd’hui) ?',
      'Ils se retrouvent tous les '+L+' jours. Dans '+D+' jours, ils seront ensemble autant de fois qu’il y a de multiples de '+L+' inférieurs ou égaux à '+D+' : '+D+' ÷ '+L+' ≈ '+fmt(D/L,2)+', donc '+nn+' fois (la '+nn+'e rencontre a lieu dans '+(nn*L)+' jours).',
      ['Identifier que les rencontres ont lieu tous les '+L+' jours.','Identifier qu’il faut compter les multiples de '+L+' dans l’intervalle.'],
      ['Écrire la division '+D+' ÷ '+L+'.','Interpréter la partie entière du quotient.'],
      ['Calculer '+D+' ÷ '+L+' ≈ '+fmt(D/L,2)+'.','Retenir la partie entière : '+nn+'.','Conclure : '+nn+' rencontres.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,g:g,p:p,q:q,L:L,D:D,nn:nn}}; }};

  G.MQ_SOM_MOD={K:K,eq:eq,MOD:MOD,WORLDS:WORLDS,genTerrain:genTerrain,fmt:fmt,money:money,gcd:gcd,lcm:lcm,factStr:factStr,pick:pick,ri:ri,shuffle:shuffle};
})(typeof globalThis!=='undefined'?globalThis:this);
