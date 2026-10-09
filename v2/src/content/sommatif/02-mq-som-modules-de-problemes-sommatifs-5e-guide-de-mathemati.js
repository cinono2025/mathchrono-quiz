/* ===== MQ_SOM : modules de problèmes sommatifs — 5e (guide de mathématiques de la classe de 5e) ===== */
(function(G){
  'use strict';
  var M=G.MQ_SOM_MOD, MOD=M.MOD, fmt=M.fmt, money=M.money, ri=M.ri, pick=M.pick, K=M.K, gcd=M.gcd, lcm=M.lcm;
  var LEX={
    jardin:{pr:'un abri à outils du jardin',peint:'peinture',nr:{intro:'Le comité a relevé le bilan mensuel de la vente des légumes du jardin, en milliers de francs (un nombre négatif correspond à une perte).',head:'Mois',row:'Bilan (en milliers de F)',dec:1,unit:'milliers de F'},bud:'du jardin scolaire',ang:'la charpente d’un abri du jardin',loc:'la location d’une charrette',jour:'jours',pu:[1500,2000,2500,3000]},
    sport:{pr:'une tente de rangement du matériel sportif',peint:'toile imperméable',nr:{intro:'Le comité a relevé la différence de buts (buts marqués moins buts encaissés) de l’équipe de la classe lors de cinq matchs.',head:'Match',row:'Différence de buts',dec:0,unit:'buts'},bud:'du tournoi',ang:'la charpente de la tribune',loc:'la location d’un car pour les supporters',jour:'jours',pu:[2000,2500,3000,4000]},
    coop:{pr:'une caisse d’entrepôt',peint:'peinture',nr:{intro:'Le bureau a relevé le solde mensuel de la caisse de la boutique, en milliers de francs (un nombre négatif correspond à un déficit).',head:'Mois',row:'Solde (en milliers de F)',dec:1,unit:'milliers de F'},bud:'de la boutique',ang:'la charpente du magasin',loc:'la location de la salle de fête',jour:'jours',pu:[150,200,250,300,400,500]}
  };
  function pr(v,d){ return v<0?'('+fmt(v,d||0)+')':fmt(v,d||0); }
  function par(v,d){ return v<0?'('+fmt(v,d)+')':fmt(v,d); }

  /* ================= Prisme droit ================= */
  MOD['5e-PR']={cls:'5e',theme:'5e — Prisme droit',themes:['5e — Prisme droit'],label:'Prisme droit',w1:2,build:function(x){
    var L=LEX[x.W.id], r=x.rnd, k=pick(r,[1,2]), a=3*k, b=4*k, c=5*k, H=ri(r,3,8), p=pick(r,[300,400,500]);
    var B=a*b/2, V=B*H, per=a+b+c, AL=per*H, AT=AL+2*B, cost=AT*p;
    var intro='Le comité fait construire '+L.pr+' en forme de prisme droit. Sa base est un triangle rectangle dont les côtés mesurent '+a+' m, '+b+' m et '+c+' m (les côtés de l’angle droit mesurent '+a+' m et '+b+' m). La hauteur du prisme est '+H+' m.';
    var p1=[K('Calcule l’aire de la base du prisme.',
      'La base est un triangle rectangle : ses deux côtés de l’angle droit servent de base et de hauteur. B = (base × hauteur) ÷ 2 = ('+a+' × '+b+') ÷ 2 = '+(a*b)+' ÷ 2 = '+B+' m².',
      ['Identifier la forme de la base : un triangle rectangle.','Identifier les côtés de l’angle droit comme base et hauteur du triangle.'],
      ['Faire un schéma de la base avec ses dimensions.','Écrire la formule : aire = (base × hauteur) ÷ 2.'],
      ['Calculer '+a+' × '+b+' = '+(a*b)+'.','Calculer '+(a*b)+' ÷ 2 = '+B+'.','Conclure avec l’unité : '+B+' m².']),
     K('Calcule le volume du prisme.',
      'Le volume d’un prisme droit est V = aire de la base × hauteur = '+B+' × '+H+' = '+V+' m³.',
      ['Identifier la formule du volume d’un prisme droit.','Identifier les données utiles : aire de la base et hauteur.'],
      ['Faire un schéma du prisme avec sa hauteur.','Écrire V = aire de la base × hauteur.'],
      ['Reprendre l’aire de la base : '+B+' m².','Calculer '+B+' × '+H+' = '+V+'.','Conclure avec l’unité : '+V+' m³.'])];
    var i2=x.standalone2?'On rappelle que le prisme droit a pour base un triangle rectangle de côtés '+a+' m, '+b+' m et '+c+' m (côtés de l’angle droit : '+a+' m et '+b+' m) et pour hauteur '+H+' m. L’aire de la base est '+B+' m².':'Le comité souhaite recouvrir toutes les faces du prisme avec de la '+L.peint+', vendue '+fmt(p,0)+' F le m².';
    if(x.standalone2) i2+=' Le comité souhaite recouvrir toutes les faces du prisme avec de la '+L.peint+', vendue '+fmt(p,0)+' F le m².';
    var p2=[K('Calcule l’aire latérale du prisme.',
      'L’aire latérale est égale au périmètre de la base multiplié par la hauteur. Le périmètre de la base est '+a+' + '+b+' + '+c+' = '+per+' m. Donc aire latérale = '+per+' × '+H+' = '+AL+' m².',
      ['Identifier que l’aire latérale s’obtient à partir du périmètre de la base.','Identifier les dimensions utiles : les trois côtés de la base et la hauteur.'],
      ['Écrire périmètre = somme des trois côtés.','Écrire aire latérale = périmètre de la base × hauteur.'],
      ['Calculer le périmètre : '+a+' + '+b+' + '+c+' = '+per+'.','Calculer '+per+' × '+H+' = '+AL+'.','Conclure avec l’unité : '+AL+' m².']),
     K('Calcule l’aire totale du prisme, puis le coût de la '+L.peint+' nécessaire.',
      'L’aire totale est égale à l’aire latérale plus l’aire des deux bases : '+AL+' + 2 × '+B+' = '+AL+' + '+(2*B)+' = '+AT+' m². Coût = '+AT+' × '+fmt(p,0)+' = '+money(cost)+'.',
      ['Identifier que l’aire totale comprend l’aire latérale et celle des deux bases.','Identifier le prix de la '+L.peint+' : '+fmt(p,0)+' F le m².'],
      ['Écrire aire totale = aire latérale + 2 × aire de la base.','Écrire coût = aire totale × prix du m².'],
      ['Calculer l’aire des deux bases : 2 × '+B+' = '+(2*B)+'.','Calculer l’aire totale : '+AL+' + '+(2*B)+' = '+AT+'.','Calculer le coût : '+AT+' × '+fmt(p,0)+' = '+fmt(cost,0)+'.','Conclure avec l’unité : '+money(cost)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,b:b,c:c,H:H,B:B,V:V,AL:AL,AT:AT,p:p,cost:cost}}; }};

  /* ================= Nombres décimaux relatifs ================= */
  function genNR(r,dec){
    for(var it=0;it<2000;it++){
      var t=[]; while(t.length<5){ var v=dec?ri(r,-99,99):ri(r,-6,7)*10; if(v===0||t.indexOf(v)>=0) continue; t.push(v); }
      var neg=t.filter(function(v){ return v<0; }).length; if(neg<2||neg>3) continue;
      var S=t.reduce(function(a,b){ return a+b; },0); if(S===0) continue;
      var mx=Math.max.apply(null,t), mn=Math.min.apply(null,t);
      return {t:t,S:S,mx:mx,mn:mn,sorted:t.slice().sort(function(a,b){ return a-b; })};
    } return null; }
  MOD['5e-NR']={cls:'5e',theme:'5e — Nombres décimaux relatifs',themes:['5e — Nombres décimaux relatifs'],label:'Nombres décimaux relatifs',w1:2,build:function(x){
    var N=LEX[x.W.id].nr, d=N.dec, g=genNR(x.rnd,d), f=function(v){ return fmt(v/10,d); }, pf=function(v){ return v<0?'('+f(v)+')':f(v); };
    var tab={type:'table',head:[N.head,'1','2','3','4','5'],rows:[[N.row].concat(g.t.map(f))]};
    var intro=N.intro+' Les résultats sont donnés dans le tableau ci-dessous.';
    var expr=g.t.map(function(v,i){ return i===0?f(v):' + '+pf(v); }).join('');
    var pos=g.t.filter(function(v){ return v>0; }), negs=g.t.filter(function(v){ return v<0; });
    var sp=pos.reduce(function(a,b){ return a+b; },0), sn=negs.reduce(function(a,b){ return a+b; },0);
    var p1=[K('Range ces cinq valeurs dans l’ordre croissant (du plus petit au plus grand).',
      'Les nombres négatifs sont plus petits que les nombres positifs. Entre deux nombres négatifs, le plus petit est celui qui est le plus éloigné de zéro. On obtient : '+g.sorted.map(f).join(' < ')+'.',
      ['Identifier les valeurs négatives et les valeurs positives.','Identifier la règle de comparaison de deux nombres négatifs.'],
      ['Placer les valeurs sur une droite graduée (schéma).'],
      ['Ranger les nombres négatifs : '+g.sorted.filter(function(v){ return v<0; }).map(f).join(' < ')+'.','Ranger les nombres positifs : '+g.sorted.filter(function(v){ return v>0; }).map(f).join(' < ')+'.','Écrire le rangement complet.']),
     K('Calcule la somme (le total) de ces cinq valeurs.',
      'S = '+expr+'. On regroupe les positifs et les négatifs : S = ('+pos.map(f).join(' + ')+') + ('+negs.map(pf).join(' + ')+') = '+f(sp)+' + '+pf(sn)+' = '+f(g.S)+'.',
      ['Identifier qu’il faut additionner des nombres relatifs de signes différents.','Identifier la règle d’addition de deux nombres relatifs.'],
      ['Écrire la somme de tous les nombres du tableau.','Regrouper les nombres de même signe.'],
      ['Calculer la somme des positifs : '+f(sp)+'.','Calculer la somme des négatifs : '+f(sn)+'.','Additionner les deux résultats : '+f(g.S)+'.'])];
    var i2=x.standalone2?'On rappelle les cinq valeurs relevées : '+g.t.map(f).join(' ; ')+' ('+N.unit+').':'';
    var p2=[K('Calcule l’écart entre la plus grande et la plus petite de ces valeurs.',
      'L’écart est la plus grande valeur moins la plus petite : '+f(g.mx)+' − '+pf(g.mn)+' = '+f(g.mx)+' + '+f(-g.mn)+' = '+f(g.mx-g.mn)+' ('+N.unit+').',
      ['Identifier la plus grande et la plus petite valeur du tableau.','Identifier qu’un écart est une différence.'],
      ['Écrire la différence : plus grande valeur − plus petite valeur.'],
      ['Transformer la soustraction en addition de l’opposé.','Calculer '+f(g.mx)+' + '+f(-g.mn)+' = '+f(g.mx-g.mn)+'.','Conclure avec l’unité.']),
     K('Quelle valeur faudrait-il obtenir à la 6e fois pour que le total des six valeurs soit égal à 0 ?',
      'On cherche x tel que S + x = 0, avec S = '+f(g.S)+'. Donc x est l’opposé de S : x = '+f(-g.S)+'. Vérification : '+f(g.S)+' + '+pf(-g.S)+' = 0.',
      ['Identifier le total obtenu avec les cinq valeurs.','Identifier qu’on cherche l’opposé de ce total.'],
      ['Écrire l’égalité S + x = 0.'],
      ['Déterminer l’opposé de '+f(g.S)+' : '+f(-g.S)+'.','Vérifier : '+f(g.S)+' + '+pf(-g.S)+' = 0.'])];
    return {table:tab,parts:[{intro:intro,cons:p1,table:tab},{intro:i2,cons:p2,table:x.standalone2?tab:null}],_g:{t:g.t,S:g.S}}; }};

  /* ================= Fractions ================= */
  function red(n,d){ var g=gcd(n,d); return [n/g,d/g]; }
  function fr(n,d){ return n+'/'+d; }
  MOD['5e-FR']={cls:'5e',theme:'5e — Fractions',themes:['5e — Fractions'],label:'Fractions',w1:1,build:function(x){
    var L=LEX[x.W.id], r=x.rnd, Bv=pick(r,[60000,120000,180000,240000]), a1,b1,a2,b2,it,ok=false;
    for(it=0;it<500&&!ok;it++){ var DN=[2,3,4,5,6,8,10]; b1=pick(r,DN); b2=pick(r,DN); a1=ri(r,1,b1-1); a2=ri(r,1,b2-1); if(gcd(a1,b1)!==1||gcd(a2,b2)!==1||b1===b2&&a1===a2||Bv%b1||Bv%b2) continue; var dd=lcm(b1,b2); if(a1*dd/b1+a2*dd/b2>=dd-1) continue; if(a1*b2===a2*b1) continue; ok=true; }
    if(!ok){ Bv=120000; a1=1; b1=3; a2=1; b2=4; }
    var d=lcm(b1,b2), n1=a1*d/b1, n2=a2*d/b2, ns=n1+n2, S=red(ns,d), rem=red(d-ns,d), m1=Bv/b1*a1, m2=Bv/b2*a2, mr=Bv-m1-m2;
    var intro='Le budget total '+L.bud+' est de '+money(Bv)+'. Le comité en consacre les '+fr(a1,b1)+' au matériel et les '+fr(a2,b2)+' au transport.';
    var sumTxt=fr(a1,b1)+' + '+fr(a2,b2)+' = '+fr(n1,d)+' + '+fr(n2,d)+' = '+fr(ns,d)+(S[1]!==d?' = '+fr(S[0],S[1]):'');
    var p1=[K('Quelle fraction du budget représentent ensemble le matériel et le transport ? (Donne une fraction irréductible.)',
      'On réduit au même dénominateur '+d+' : '+sumTxt+'. Le matériel et le transport représentent '+fr(S[0],S[1])+' du budget.',
      ['Identifier les deux fractions à additionner.','Identifier qu’il faut un dénominateur commun.'],
      ['Chercher un dénominateur commun : '+d+'.','Écrire les deux fractions avec ce dénominateur.'],
      ['Additionner les numérateurs : '+n1+' + '+n2+' = '+ns+'.','Écrire la fraction obtenue : '+fr(ns,d)+'.','Simplifier si possible et conclure : '+fr(S[0],S[1])+'.']),
     K('Quelle fraction du budget reste-t-il ?',
      'Le budget entier est représenté par 1 = '+fr(d,d)+'. Il reste : 1 − '+fr(ns,d)+' = '+fr(d,d)+' − '+fr(ns,d)+' = '+fr(d-ns,d)+(rem[1]!==d?' = '+fr(rem[0],rem[1]):'')+'.',
      ['Identifier que le budget total correspond à 1 (ou '+fr(d,d)+').','Identifier la fraction déjà dépensée.'],
      ['Écrire 1 − fraction dépensée.'],
      ['Écrire 1 sous la forme '+fr(d,d)+'.','Calculer '+d+' − '+ns+' = '+(d-ns)+'.','Conclure : il reste '+fr(rem[0],rem[1])+' du budget.'])];
    var i2=x.standalone2?'Le budget total '+L.bud+' est de '+money(Bv)+' : les '+fr(a1,b1)+' sont consacrés au matériel et les '+fr(a2,b2)+' au transport.':'';
    var big=(n1>n2)?'le matériel':'le transport';
    var p2=[K('Calcule le montant, en francs, consacré au matériel, puis celui consacré au transport.',
      'Prendre les '+fr(a1,b1)+' de '+fmt(Bv,0)+' revient à diviser par '+b1+' puis à multiplier par '+a1+' : '+fmt(Bv,0)+' ÷ '+b1+' × '+a1+' = '+fmt(Bv/b1,0)+' × '+a1+' = '+money(m1)+'. De même, '+fmt(Bv,0)+' ÷ '+b2+' × '+a2+' = '+fmt(Bv/b2,0)+' × '+a2+' = '+money(m2)+'.',
      ['Identifier qu’on cherche une fraction d’une quantité.','Identifier le budget total et les deux fractions.'],
      ['Écrire « fraction d’une quantité = quantité ÷ dénominateur × numérateur ».'],
      ['Calculer le montant du matériel : '+fmt(m1,0)+'.','Calculer le montant du transport : '+fmt(m2,0)+'.','Conclure avec l’unité : '+money(m1)+' et '+money(m2)+'.']),
     K('Compare les fractions '+fr(a1,b1)+' et '+fr(a2,b2)+'. Quelle dépense est la plus importante ?',
      'On réduit au même dénominateur '+d+' : '+fr(a1,b1)+' = '+fr(n1,d)+' et '+fr(a2,b2)+' = '+fr(n2,d)+'. Comme '+Math.max(n1,n2)+' > '+Math.min(n1,n2)+', la dépense la plus importante est '+big+' (ce que confirment les montants : '+fmt(Math.max(m1,m2),0)+' F contre '+fmt(Math.min(m1,m2),0)+' F).',
      ['Identifier qu’il faut comparer deux fractions.','Identifier la méthode : le même dénominateur.'],
      ['Écrire les deux fractions avec le dénominateur '+d+'.'],
      ['Comparer les numérateurs : '+Math.max(n1,n2)+' > '+Math.min(n1,n2)+'.','Conclure : '+big+' est la dépense la plus importante.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{Bv:Bv,a1:a1,b1:b1,a2:a2,b2:b2,S:S,rem:rem,m1:m1,m2:m2,mr:mr}}; }};

  /* ================= Division euclidienne, PGCD et PPCM ================= */
  function divisors(n){ var o=[]; for(var i=1;i<=n;i++) if(n%i===0) o.push(i); return o; }
  MOD['5e-DV']={cls:'5e',theme:'5e — Division dans ℕ',themes:['5e — Division dans ℕ','5e — Nombres premiers','5e — PPCM & PGCD'],label:'Division euclidienne, PGCD et PPCM',w1:1,build:function(x){
    var P=x.W.pg, r=x.rnd, bq=pick(r,[12,15,20,24,25]), q=ri(r,8,30), rm=ri(r,1,bq-1), N=bq*q+rm;
    var intro='Le comité a reçu '+N+' '+P.i1+' qu’il doit ranger dans des caisses. Chaque caisse peut contenir '+bq+' '+P.i1+' au maximum.';
    var p1=[K('Effectue la division euclidienne de '+N+' par '+bq+' et écris l’égalité correspondante.',
      'En divisant '+N+' par '+bq+', on trouve un quotient de '+q+' et un reste de '+rm+', avec '+rm+' < '+bq+'. L’égalité est '+N+' = '+bq+' × '+q+' + '+rm+'. Vérification : '+bq+' × '+q+' + '+rm+' = '+(bq*q)+' + '+rm+' = '+N+'.',
      ['Identifier que les données sont un dividende ('+N+') et un diviseur ('+bq+').','Identifier la condition sur le reste : il doit être plus petit que le diviseur.'],
      ['Écrire la division euclidienne sous la forme a = b × q + r.','Poser la division de '+N+' par '+bq+'.'],
      ['Calculer le quotient : '+q+'.','Calculer le reste : '+rm+'.','Vérifier l’égalité '+bq+' × '+q+' + '+rm+' = '+N+'.']),
     K('Combien de caisses sont complètement remplies ? Combien d’articles restent hors caisse ? Combien de caisses faut-il au minimum pour tout ranger ?',
      'Le quotient est '+q+' : '+q+' caisses sont complètement remplies. Le reste est '+rm+' : '+rm+' '+P.i1+' restent hors caisse. Pour ranger ces '+rm+' derniers articles, il faut une caisse de plus : '+q+' + 1 = '+(q+1)+' caisses au minimum.',
      ['Interpréter le quotient et le reste dans la situation.','Identifier qu’un reste non nul impose une caisse supplémentaire.'],
      ['Relier le quotient au nombre de caisses pleines et le reste aux articles restants.'],
      ['Donner le nombre de caisses pleines : '+q+'.','Donner le nombre d’articles restants : '+rm+'.','Calculer le nombre minimal de caisses : '+q+' + 1 = '+(q+1)+'.'])];
    var variant=(r()<0.5)?'pgcd':'ppcm', p2, i2, gx={};
    if(variant==='pgcd'){
      var g,m1,m2,A,Bq; for(var it=0;it<300;it++){ g=pick(r,[4,6,8,9,12]); m1=ri(r,2,7); m2=ri(r,2,7); if(m1===m2||gcd(m1,m2)!==1) continue; A=g*m1; Bq=g*m2; if(A<=90&&Bq<=90) break; }
      if(!A||!Bq||A>90||Bq>90){ g=6; m1=3; m2=5; A=18; Bq=30; }
      var dA=divisors(A), dB=divisors(Bq), com=dA.filter(function(v){ return Bq%v===0; });
      i2='Le comité dispose aussi de '+A+' '+P.i1+' et de '+Bq+' '+P.i2+'. Il veut former des lots identiques, sans reste, chaque lot contenant le même nombre de '+P.i1+' et le même nombre de '+P.i2+'.';
      p2=[K('Écris tous les diviseurs de '+A+' et de '+Bq+', puis détermine leur PGCD.',
        'Diviseurs de '+A+' : '+dA.join(', ')+'. Diviseurs de '+Bq+' : '+dB.join(', ')+'. Diviseurs communs : '+com.join(', ')+'. Le plus grand est '+g+' : PGCD('+A+' ; '+Bq+') = '+g+'.',
        ['Identifier qu’il faut chercher les diviseurs de chaque nombre.','Identifier le PGCD comme le plus grand diviseur commun.'],
        ['Dresser la liste des diviseurs de '+A+'.','Dresser la liste des diviseurs de '+Bq+'.'],
        ['Écrire les diviseurs de '+A+'.','Écrire les diviseurs de '+Bq+'.','Repérer les diviseurs communs.','Conclure : PGCD = '+g+'.']),
       K('Quel est le nombre maximal de lots ? Quelle est la composition de chaque lot ?',
        'Le nombre maximal de lots est le PGCD : '+g+' lots. Chaque lot contient '+A+' ÷ '+g+' = '+m1+' '+P.i1+' et '+Bq+' ÷ '+g+' = '+m2+' '+P.i2+'.',
        ['Identifier que le nombre maximal de lots est le PGCD.','Identifier que la composition s’obtient par division par le PGCD.'],
        ['Écrire les deux divisions par le PGCD.'],
        ['Donner le nombre de lots : '+g+'.','Calculer '+A+' ÷ '+g+' = '+m1+' et '+Bq+' ÷ '+g+' = '+m2+'.','Conclure avec la composition d’un lot.'])];
      gx={variant:variant,A:A,B:Bq,g:g};
    } else {
      var pq=pick(r,[[4,6],[6,8],[9,12],[10,15],[8,12],[4,10],[6,9]]), p=pq[0], qq=pq[1], Lc=lcm(p,qq), ml=function(n){ var o=[],k=1; while(true){ o.push(n*k); if(n*k>=Lc||k>=8) break; k++; } return o; };
      var days=[]; for(var t=Lc;t<=60;t+=Lc) days.push(t);
      i2=P.per(p,qq);
      p2=[K('Écris les premiers multiples non nuls de '+p+' et de '+qq+' (jusqu’au premier multiple commun), puis repère-le.',
        'Multiples de '+p+' : '+ml(p).join(', ')+'. Multiples de '+qq+' : '+ml(qq).join(', ')+'. Le premier multiple commun non nul est '+Lc+' : PPCM('+p+' ; '+qq+') = '+Lc+'.',
        ['Identifier qu’on cherche un nombre de jours qui est multiple de '+p+' et de '+qq+'.','Identifier le PPCM comme le plus petit multiple commun non nul.'],
        ['Dresser la liste des multiples de '+p+'.','Dresser la liste des multiples de '+qq+'.'],
        ['Écrire les multiples de '+p+'.','Écrire les multiples de '+qq+'.','Repérer le premier multiple commun : '+Lc+'.']),
       K('Dans combien de jours se retrouveront-ils ensemble pour la première fois ? Quels jours, parmi les 60 prochains, seront-ils ensemble ?',
        'Ils se retrouvent ensemble tous les '+Lc+' jours (PPCM). Première fois : dans '+Lc+' jours. Parmi les 60 prochains jours, les jours communs sont les multiples de '+Lc+' inférieurs ou égaux à 60 : '+days.join(', ')+'.',
        ['Identifier que les rencontres ont lieu tous les '+Lc+' jours.','Identifier qu’on cherche les multiples de '+Lc+' jusqu’à 60.'],
        ['Écrire les multiples de '+Lc+' inférieurs ou égaux à 60.'],
        ['Donner la première rencontre : '+Lc+' jours.','Lister les multiples de '+Lc+' jusqu’à 60.','Conclure : jours '+days.join(', ')+'.'])];
      gx={variant:variant,p:p,q:qq,L:Lc,days:days};
    }
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{N:N,b:bq,q:q,r:rm,v:gx}}; }};

  /* ================= Angles et triangles ================= */
  MOD['5e-AN']={cls:'5e',theme:'5e — Angles',themes:['5e — Angles','5e — Triangles superposables, isocèle & équilatéral'],label:'Angles et triangles',w1:1,build:function(x){
    var L=LEX[x.W.id], r=x.rnd, al=pick(r,[40,50,70,80,100,110]), bs=(180-al)/2, xx=pick(r,[40,50,70,110,130,140]);
    var intro='Pour construire '+L.ang+', le charpentier utilise un triangle ABC isocèle en A. L’angle au sommet BAC mesure '+al+'°.';
    var p1=[K('Calcule la mesure de chacun des angles à la base du triangle ABC.',
      'La somme des angles d’un triangle est égale à 180°. Dans le triangle isocèle ABC de sommet A, les angles à la base ABC et ACB ont la même mesure. Donc ABC + ACB = 180° − '+al+'° = '+(180-al)+'°, et chacun mesure '+(180-al)+' ÷ 2 = '+bs+'°.',
      ['Identifier que le triangle ABC est isocèle en A, donc que ses angles à la base sont égaux.','Identifier la propriété de la somme des angles d’un triangle (180°).'],
      ['Faire un schéma du triangle isocèle avec l’angle au sommet.','Écrire ABC + ACB + BAC = 180°.'],
      ['Calculer 180 − '+al+' = '+(180-al)+'.','Calculer '+(180-al)+' ÷ 2 = '+bs+'.','Conclure : ABC = ACB = '+bs+'°.']),
     K('La poutre [AH] est la médiatrice du segment [BC] (le point H est le milieu de [BC]). Calcule la mesure de l’angle BAH, puis celle de l’angle AHB.',
      'Dans un triangle isocèle, la médiatrice de la base est un axe de symétrie : elle partage l’angle au sommet en deux angles de même mesure. BAH = '+al+' ÷ 2 = '+(al/2)+'°. Comme (AH) est la médiatrice de [BC], elle est perpendiculaire à (BC) : AHB = 90°.',
      ['Identifier que (AH) est un axe de symétrie du triangle isocèle.','Identifier qu’une médiatrice est perpendiculaire au segment.'],
      ['Placer H et la poutre [AH] sur le schéma.','Écrire BAH = BAC ÷ 2.'],
      ['Calculer '+al+' ÷ 2 = '+(al/2)+'.','Conclure : BAH = '+(al/2)+'°.','Donner AHB = 90° en justifiant.'])];
    var i2='Deux poutres [AB] et [CD] se croisent au point O (O est entre A et B, et entre C et D). L’angle AOC mesure '+xx+'°.';
    var p2=[K('Calcule la mesure de l’angle AOD, puis celle de l’angle BOD.',
      'Les angles AOC et AOD sont adjacents et supplémentaires (les points C, O et D sont alignés) : AOD = 180° − '+xx+'° = '+(180-xx)+'°. Les angles AOC et BOD sont opposés par le sommet : ils ont la même mesure, donc BOD = '+xx+'°.',
      ['Identifier les angles adjacents sur la droite (CD).','Identifier les angles opposés par le sommet.'],
      ['Faire un schéma des deux droites qui se croisent en O.','Écrire AOC + AOD = 180°.'],
      ['Calculer 180 − '+xx+' = '+(180-xx)+'.','Donner AOD = '+(180-xx)+'°.','Donner BOD = '+xx+'° en justifiant (angles opposés par le sommet).']),
     K('Une barre [OE] est la bissectrice de l’angle AOC. Calcule la mesure de l’angle AOE et justifie que l’angle EOC a la même mesure.',
      'La bissectrice partage l’angle AOC en deux angles de même mesure : AOE = EOC = '+xx+' ÷ 2 = '+(xx/2)+'°.',
      ['Identifier la définition de la bissectrice d’un angle.'],
      ['Placer [OE] à l’intérieur de l’angle AOC sur le schéma.','Écrire AOE = AOC ÷ 2.'],
      ['Calculer '+xx+' ÷ 2 = '+(xx/2)+'.','Conclure : AOE = EOC = '+(xx/2)+'°.'])];
    return {parts:[{intro:intro,cons:p1,fig:{type:'tri',a:null,b:null,c:null,unit:'',angA:al+'\u00b0'}},{intro:i2,cons:p2,fig:{type:'cross',x:xx}}],_g:{al:al,bs:bs,xx:xx}}; }};

  /* ================= Proportionnalité et équations ================= */
  MOD['5e-EP']={cls:'5e',theme:'5e — Proportionnalité',themes:['5e — Proportionnalité','5e — Équations'],label:'Proportionnalité et équations',w1:1,build:function(x){
    var W=x.W, e=W.eq, L=LEX[W.id], r=x.rnd, u=pick(r,L.pu), k=ri(r,8,15), Mt=u*k, q4=12;
    var tab={type:'table',head:['Nombre de '+e.as,'3','5','8','12'],rows:[['Prix (en F)',fmt(3*u,0),fmt(5*u,0),fmt(8*u,0),'…']]};
    var intro='Le comité achète des '+e.as+' chez un fournisseur. Les prix pour différentes quantités sont donnés dans le tableau ci-dessous.';
    var p1=[K('Montre que ce tableau est un tableau de proportionnalité et donne son coefficient.',
      'On calcule le prix d’un '+e.a+' pour chaque colonne : '+fmt(3*u,0)+' ÷ 3 = '+fmt(u,0)+' ; '+fmt(5*u,0)+' ÷ 5 = '+fmt(u,0)+' ; '+fmt(8*u,0)+' ÷ 8 = '+fmt(u,0)+'. Les quotients sont égaux : c’est un tableau de proportionnalité, de coefficient '+fmt(u,0)+' (un '+e.a+' coûte '+money(u)+').',
      ['Identifier les deux grandeurs : nombre d’articles et prix.','Identifier la méthode : comparer les quotients prix ÷ nombre.'],
      ['Écrire le quotient prix ÷ nombre pour chaque colonne.'],
      ['Calculer '+fmt(3*u,0)+' ÷ 3 = '+fmt(u,0)+'.','Calculer '+fmt(5*u,0)+' ÷ 5 = '+fmt(u,0)+' et '+fmt(8*u,0)+' ÷ 8 = '+fmt(u,0)+'.','Conclure : proportionnalité, coefficient '+fmt(u,0)+'.']),
     K('Complète la dernière colonne (12 '+e.as+'), puis calcule le nombre de '+e.as+' que l’on peut acheter avec '+money(Mt)+'.',
      'Prix de '+q4+' '+e.as+' : '+q4+' × '+fmt(u,0)+' = '+money(q4*u)+'. Avec '+fmt(Mt,0)+' F : '+fmt(Mt,0)+' ÷ '+fmt(u,0)+' = '+k+' '+e.as+'.',
      ['Identifier le coefficient de proportionnalité à utiliser.','Identifier que la seconde question est l’opération inverse.'],
      ['Écrire prix = nombre × '+fmt(u,0)+'.','Écrire nombre = prix ÷ '+fmt(u,0)+'.'],
      ['Calculer '+q4+' × '+fmt(u,0)+' = '+fmt(q4*u,0)+'.','Calculer '+fmt(Mt,0)+' ÷ '+fmt(u,0)+' = '+k+'.','Conclure avec les unités.'])];
    var f=pick(r,[1000,2000,3000]), pj=pick(r,[500,1000,1500]), n=ri(r,3,9), T=f+pj*n;
    var i2='Pour '+L.loc+', le tarif est un forfait de '+money(f)+' auquel s’ajoutent '+money(pj)+' par jour. Le comité a payé '+money(T)+' au total.';
    var p2=[K('On note n le nombre de jours de location. Écris une équation qui traduit la situation.',
      'Le prix de n jours est '+fmt(pj,0)+' × n. En ajoutant le forfait de '+fmt(f,0)+' F, le prix total est '+fmt(pj,0)+' × n + '+fmt(f,0)+'. Comme le comité a payé '+fmt(T,0)+' F, l’équation est '+fmt(pj,0)+' × n + '+fmt(f,0)+' = '+fmt(T,0)+'.',
      ['Identifier l’inconnue n et les données : forfait, prix par jour, total payé.','Identifier la structure : prix par jour × n + forfait = total.'],
      ['Traduire le prix des n jours par '+fmt(pj,0)+' × n.','Écrire l’égalité avec le total payé.'],
      ['Écrire l’équation '+fmt(pj,0)+' × n + '+fmt(f,0)+' = '+fmt(T,0)+'.']),
     K('Résous cette équation. Pendant combien de jours le comité a-t-il loué ?',
      fmt(pj,0)+' × n + '+fmt(f,0)+' = '+fmt(T,0)+' équivaut à '+fmt(pj,0)+' × n = '+fmt(T,0)+' − '+fmt(f,0)+' = '+fmt(T-f,0)+', donc n = '+fmt(T-f,0)+' ÷ '+fmt(pj,0)+' = '+n+'. Le comité a loué pendant '+n+' jours. Vérification : '+fmt(pj,0)+' × '+n+' + '+fmt(f,0)+' = '+fmt(pj*n,0)+' + '+fmt(f,0)+' = '+fmt(T,0)+'.',
      ['Identifier la méthode : isoler n en effectuant des opérations successives.'],
      ['Soustraire le forfait aux deux membres.','Diviser les deux membres par '+fmt(pj,0)+'.'],
      ['Calculer '+fmt(T,0)+' − '+fmt(f,0)+' = '+fmt(T-f,0)+'.','Calculer '+fmt(T-f,0)+' ÷ '+fmt(pj,0)+' = '+n+'.','Vérifier le résultat dans l’équation.','Conclure avec l’unité : '+n+' jours.'])];
    return {table:tab,parts:[{intro:intro,cons:p1,table:tab},{intro:i2,cons:p2}],_g:{u:u,k:k,M:Mt,f:f,pj:pj,n:n,T:T}}; }};
})(typeof globalThis!=='undefined'?globalThis:this);
