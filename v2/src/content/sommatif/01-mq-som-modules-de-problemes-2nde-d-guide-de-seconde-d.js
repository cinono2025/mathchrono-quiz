/* ===== MQ_SOM : modules de problèmes — 2nde D (guide de seconde D) ===== */
(function(G){
  'use strict';
  var M=G.MQ_SOM_MOD, MOD=M.MOD, fmt=M.fmt, ri=M.ri, pick=M.pick, gcd=M.gcd, MI='\u2212';
  function K(t,s,A,Mm,O){ return {t:t,s:s,A:A,M:Mm,O:O}; }
  function eq(v,d){ var q=Math.pow(10,d), r=Math.round(v*q)/q; return Math.abs(v-r)<1e-9?'=':'\u2248'; }
  function sg(n){ return n<0?MI+Math.abs(n):String(n); }
  function par(n){ return n<0?'('+sg(n)+')':String(n); }
  function sub(a,b){ return sg(a)+' '+MI+' '+par(b); }
  function add(a,b){ return sg(a)+' + '+par(b); }
  function mul(a,b){ return par(a)+' \u00d7 '+par(b); }
  function pt(n,x,y){ return n+'('+sg(x)+' ; '+sg(y)+')'; }
  function trin(a,b,c){ function term(co,v,first){ if(co===0) return ''; var ab=Math.abs(co), body=(v===''?String(ab):((ab===1?'':String(ab))+v)); return (co<0?(first?MI:' '+MI+' '):(first?'':' + '))+body; }
    var s=term(a,'x\u00b2',true); s+=term(b,'x',!s); s+=term(c,'',!s); return s||'0'; }
  function tab(head,rows){ return {type:'table',head:head,rows:rows}; }

  /* ---------- lexique par univers ---------- */
  var WX={
   jardin:{va:{obj:'la masse d\u2019un sac de ma\u00efs destin\u00e9 \u00e0 la vente',unit:'kg',M0:[25,50],t:[0.5,1,1.5]},rect:'une parcelle rectangulaire du jardin',fn:{obj:'la vente des l\u00e9gumes du jardin',xd:'le nombre de dizaines de sacs vendus'},plan:'le plan du jardin',piste:'une all\u00e9e circulaire amen\u00e9e autour du bassin du jardin',pan:'un panneau triangulaire de signalisation du jardin'},
   sport:{va:{obj:'la longueur d\u2019un terrain de jeu',unit:'m',M0:[90,100,105],t:[1,2,2.5]},rect:'une aire d\u2019\u00e9chauffement rectangulaire',fn:{obj:'la vente des billets du tournoi',xd:'le nombre de dizaines de billets vendus'},plan:'le plan du stade',piste:'une piste d\u2019athl\u00e9tisme circulaire',pan:'un panneau triangulaire du tableau d\u2019affichage'},
   coop:{va:{obj:'le volume de lait d\u2019un r\u00e9cipient de mesure',unit:'L',M0:[1,2,5],t:[0.05,0.1,0.2]},rect:'un espace de vente rectangulaire',fn:{obj:'la vente des fournitures de la boutique',xd:'le nombre de dizaines d\u2019articles vendus'},plan:'le plan de la boutique',piste:'un pr\u00e9sentoir circulaire \u00e0 l\u2019entr\u00e9e de la boutique',pan:'une enseigne triangulaire de la boutique'}};

  /* 2nde D : valeur absolue et distance */
  MOD['2D-VA']={cls:'2nde D',theme:'2D \u2014 Valeur absolue & distance',themes:['2D \u2014 Valeur absolue & distance','2D \u2014 Calculs dans \u211d'],label:'Valeur absolue et distance',w1:2,build:function(x){
    var W=x.W,X=WX[W.id].va,r=x.rnd,M0=pick(r,X.M0),t=pick(r,X.t),u=X.unit,lo=M0-t,hi=M0+t,conf=r()<0.5,
        d1=Math.round(t*(conf?pick(r,[0.2,0.4,0.6,0.8]):pick(r,[1.2,1.5,1.8,2.2]))*100)/100, x1=Math.round((M0+(r()<0.5?-1:1)*d1)*100)/100;
    var f=function(v){ return fmt(v,2); };
    var intro='Le comit\u00e9 contr\u00f4le '+X.obj+' (en '+u+'). Une valeur x est jug\u00e9e conforme lorsque |x '+MI+' '+f(M0)+'| \u2264 '+f(t)+'.';
    var p1=[K('Traduis la condition de conformit\u00e9 par un encadrement de x, puis par un intervalle.',
      '|x '+MI+' '+f(M0)+'| \u2264 '+f(t)+' signifie que la distance entre x et '+f(M0)+' est au plus '+f(t)+' : '+MI+f(t)+' \u2264 x '+MI+' '+f(M0)+' \u2264 '+f(t)+'. En ajoutant '+f(M0)+' \u00e0 chaque membre : '+f(M0)+' '+MI+' '+f(t)+' \u2264 x \u2264 '+f(M0)+' + '+f(t)+', soit '+f(lo)+' \u2264 x \u2264 '+f(hi)+'. Les valeurs conformes forment l\u2019intervalle ['+f(lo)+' ; '+f(hi)+'].',
      ['Identifier que |x '+MI+' '+f(M0)+'| est la distance entre x et '+f(M0)+'.','Identifier que la conformit\u00e9 s\u2019exprime par une distance inf\u00e9rieure ou \u00e9gale \u00e0 la tol\u00e9rance '+f(t)+'.'],
      ['\u00c9crire '+MI+f(t)+' \u2264 x '+MI+' '+f(M0)+' \u2264 '+f(t)+'.','Ajouter '+f(M0)+' \u00e0 chacun des membres.'],
      ['Calculer '+f(M0)+' '+MI+' '+f(t)+' = '+f(lo)+'.','Calculer '+f(M0)+' + '+f(t)+' = '+f(hi)+'.','Conclure : x \u2208 ['+f(lo)+' ; '+f(hi)+'].']),
     K('Un contr\u00f4le donne x\u2081 = '+f(x1)+'. Calcule la distance |x\u2081 '+MI+' '+f(M0)+'| et indique si cette valeur est conforme.',
      '|x\u2081 '+MI+' '+f(M0)+'| = |'+f(x1)+' '+MI+' '+f(M0)+'| = |'+sg(Math.round((x1-M0)*100)/100).replace('.',',')+'| = '+f(d1)+'. Comme '+f(d1)+(conf?' \u2264 ':' > ')+f(t)+', la valeur x\u2081 est '+(conf?'conforme':'non conforme')+' (elle '+(conf?'appartient':'n\u2019appartient pas')+' \u00e0 ['+f(lo)+' ; '+f(hi)+']).',
      ['Identifier que l\u2019on cherche la distance entre x\u2081 et '+f(M0)+'.','Identifier que l\u2019on doit comparer cette distance \u00e0 la tol\u00e9rance '+f(t)+'.'],
      ['\u00c9crire la distance |x\u2081 '+MI+' '+f(M0)+'|.','\u00c9crire la comparaison avec '+f(t)+'.'],
      ['Calculer x\u2081 '+MI+' '+f(M0)+' = '+sg(Math.round((x1-M0)*100)/100).replace('.',',')+'.','Prendre la valeur absolue : '+f(d1)+'.','Comparer '+f(d1)+' et '+f(t)+' et conclure.'])];
    var R2=2*t, k1=pick(r,[2,3,4]), k2=pick(r,[1,2,3,4].filter(function(z){ return z!==k1; })), a=M0-k1*t, b=M0+k2*t, mid=(a+b)/2, dist=(b-a)/2;
    var i2=(x.standalone2?'On rappelle qu\u2019une valeur x est conforme lorsque |x '+MI+' '+f(M0)+'| \u2264 '+f(t)+'. ':'')+'Le comit\u00e9 d\u00e9cide d\u2019\u00e9carter les valeurs trop \u00e9loign\u00e9es : une valeur est \u00e9cart\u00e9e lorsque |x '+MI+' '+f(M0)+'| > '+f(R2)+'. Par ailleurs, deux rep\u00e8res de contr\u00f4le sont plac\u00e9s aux valeurs '+f(a)+' et '+f(b)+'.';
    var p2=[K('R\u00e9sous l\u2019in\u00e9quation |x '+MI+' '+f(M0)+'| > '+f(R2)+' et donne l\u2019ensemble des solutions sous la forme d\u2019une r\u00e9union d\u2019intervalles.',
      '|x '+MI+' '+f(M0)+'| > '+f(R2)+' \u00e9quivaut \u00e0 x '+MI+' '+f(M0)+' < '+MI+f(R2)+' ou x '+MI+' '+f(M0)+' > '+f(R2)+', c\u2019est-\u00e0-dire x < '+f(M0)+' '+MI+' '+f(R2)+' ou x > '+f(M0)+' + '+f(R2)+'. L\u2019ensemble des solutions est ]'+MI+'\u221e ; '+f(M0-R2)+'[ \u222a ]'+f(M0+R2)+' ; +\u221e[.',
      ['Identifier qu\u2019une valeur absolue strictement sup\u00e9rieure \u00e0 un nombre positif donne deux cas.','Identifier que l\u2019ensemble cherch\u00e9 sera une r\u00e9union de deux intervalles.'],
      ['\u00c9crire les deux in\u00e9quations x '+MI+' '+f(M0)+' < '+MI+f(R2)+' et x '+MI+' '+f(M0)+' > '+f(R2)+'.','Isoler x dans chacune.'],
      ['Calculer '+f(M0)+' '+MI+' '+f(R2)+' = '+f(M0-R2)+'.','Calculer '+f(M0)+' + '+f(R2)+' = '+f(M0+R2)+'.','Conclure par la r\u00e9union d\u2019intervalles ]'+MI+'\u221e ; '+f(M0-R2)+'[ \u222a ]'+f(M0+R2)+' ; +\u221e[.']),
     K('D\u00e9termine la valeur x \u00e9quidistante des deux rep\u00e8res '+f(a)+' et '+f(b)+', c\u2019est-\u00e0-dire telle que |x '+MI+' '+f(a)+'| = |x '+MI+' '+f(b)+'|.',
      '|x '+MI+' '+f(a)+'| = |x '+MI+' '+f(b)+'| \u00e9quivaut \u00e0 x '+MI+' '+f(a)+' = x '+MI+' '+f(b)+' (impossible, car '+f(a)+' \u2260 '+f(b)+') ou x '+MI+' '+f(a)+' = '+MI+'(x '+MI+' '+f(b)+'), soit 2x = '+f(a)+' + '+f(b)+' = '+f(a+b)+', donc x = '+fmt(mid,3)+'. V\u00e9rification : |'+fmt(mid,3)+' '+MI+' '+f(a)+'| = '+fmt(dist,3)+' et |'+fmt(mid,3)+' '+MI+' '+f(b)+'| = '+fmt(dist,3)+'.',
      ['Identifier que l\u2019\u00e9galit\u00e9 de deux valeurs absolues donne deux cas.','Identifier que x est le milieu des deux rep\u00e8res.'],
      ['\u00c9crire les deux \u00e9quations x '+MI+' '+f(a)+' = x '+MI+' '+f(b)+' et x '+MI+' '+f(a)+' = '+MI+'(x '+MI+' '+f(b)+').','Rejeter le premier cas, impossible.'],
      ['R\u00e9soudre 2x = '+f(a)+' + '+f(b)+' = '+f(a+b)+'.','Calculer x = '+fmt(mid,3)+'.','V\u00e9rifier les deux distances '+fmt(dist,3)+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{M0:M0,t:t,lo:lo,hi:hi,x1:x1,d1:d1,conf:conf,R2:R2,a:a,b:b,mid:mid}}; }};

  /* 2nde D : équations et inéquations du second degré */
  MOD['2D-EQ']={cls:'2nde D',theme:'2D \u2014 \u00c9quations & in\u00e9quations dans \u211d',themes:['2D \u2014 \u00c9quations & in\u00e9quations dans \u211d','2D \u2014 Polyn\u00f4mes & fractions rationnelles','2D \u2014 Syst\u00e8mes & in\u00e9quations dans \u211d\u00d7\u211d'],label:'\u00c9quations et in\u00e9quations du second degr\u00e9',w1:1,build:function(x){
    var W=x.W,R=WX[W.id].rect,r=x.rnd,r1,r2,a,S,k,s1,s2,S2;
    for(var i=0;i<200;i++){ r1=ri(r,3,12); r2=ri(r,r1+3,26); a=r1+r2; S=r1*r2; k=ri(r,1,Math.floor((r2-r1-1)/2)); s1=r1+k; s2=r2-k; if(s1<s2){ S2=s1*s2; break; } }
    var d=r2-r1, d2=s2-s1, D1=a*a-4*S, D2=a*a-4*S2;
    var intro='On veut am\u00e9nager '+R+' dont le p\u00e9rim\u00e8tre est '+(2*a)+' m et l\u2019aire '+S+' m\u00b2. On note x l\u2019une des dimensions (en m) de ce rectangle.';
    var p1=[K('Montre que x est solution de l\u2019\u00e9quation x\u00b2 '+MI+' '+a+'x + '+S+' = 0.',
      'Le demi-p\u00e9rim\u00e8tre est '+(2*a)+' \u00f7 2 = '+a+' m, donc l\u2019autre dimension est '+a+' '+MI+' x. L\u2019aire est x('+a+' '+MI+' x) = '+S+', soit '+a+'x '+MI+' x\u00b2 = '+S+', donc x\u00b2 '+MI+' '+a+'x + '+S+' = 0.',
      ['Identifier que le demi-p\u00e9rim\u00e8tre vaut '+a+' m.','Identifier que l\u2019aire est le produit des deux dimensions.'],
      ['\u00c9crire l\u2019autre dimension : '+a+' '+MI+' x.','\u00c9crire x('+a+' '+MI+' x) = '+S+'.'],
      ['D\u00e9velopper : '+a+'x '+MI+' x\u00b2 = '+S+'.','Passer tous les termes dans un membre.']),
     K('R\u00e9sous cette \u00e9quation et donne les dimensions de ce rectangle.',
      'Pour x\u00b2 '+MI+' '+a+'x + '+S+' = 0 : a = 1, b = '+MI+a+', c = '+S+'. \u0394 = b\u00b2 '+MI+' 4ac = '+a+'\u00b2 '+MI+' 4 \u00d7 '+S+' = '+(a*a)+' '+MI+' '+(4*S)+' = '+D1+', donc \u221a\u0394 = '+d+'. Les solutions sont x\u2081 = ('+a+' '+MI+' '+d+') \u00f7 2 = '+r1+' et x\u2082 = ('+a+' + '+d+') \u00f7 2 = '+r2+'. Les dimensions sont '+r1+' m et '+r2+' m (V\u00e9rification : '+r1+' + '+r2+' = '+a+' et '+r1+' \u00d7 '+r2+' = '+S+').',
      ['Reconna\u00eetre une \u00e9quation du second degr\u00e9 \u00e0 r\u00e9soudre avec le discriminant.'],
      ['Identifier les coefficients a = 1, b = '+MI+a+' et c = '+S+'.','\u00c9crire \u0394 = b\u00b2 '+MI+' 4ac.'],
      ['Calculer \u0394 = '+a+'\u00b2 '+MI+' 4 \u00d7 '+S+' = '+D1+'.','Calculer les deux racines x\u2081 = '+r1+' et x\u2082 = '+r2+'.','Interpr\u00e9ter : les dimensions sont '+r1+' m et '+r2+' m.','V\u00e9rifier la somme '+a+' et le produit '+S+'.'])];
    var i2=(x.standalone2?'Le demi-p\u00e9rim\u00e8tre du rectangle est '+a+' m. ':'')+'Le comit\u00e9 souhaite maintenant, \u00e0 p\u00e9rim\u00e8tre inchang\u00e9 ('+(2*a)+' m), que l\u2019aire soit d\u2019au moins '+S2+' m\u00b2. On note toujours x une dimension (0 < x < '+a+').';
    var p2=[K('Traduis cette exigence par une in\u00e9quation d\u2019inconnue x, puis mets-la sous la forme x\u00b2 '+MI+' '+a+'x + '+S2+' \u2264 0.',
      'L\u2019aire x('+a+' '+MI+' x) doit \u00eatre sup\u00e9rieure ou \u00e9gale \u00e0 '+S2+' : x('+a+' '+MI+' x) \u2265 '+S2+', soit '+a+'x '+MI+' x\u00b2 \u2265 '+S2+', donc '+MI+'x\u00b2 + '+a+'x '+MI+' '+S2+' \u2265 0. En multipliant par '+MI+'1 (le sens change) : x\u00b2 '+MI+' '+a+'x + '+S2+' \u2264 0.',
      ['Identifier que l\u2019aire doit \u00eatre sup\u00e9rieure ou \u00e9gale \u00e0 '+S2+' m\u00b2.','Identifier que l\u2019autre dimension est '+a+' '+MI+' x.'],
      ['\u00c9crire l\u2019in\u00e9quation x('+a+' '+MI+' x) \u2265 '+S2+'.','D\u00e9velopper et regrouper dans un membre.'],
      ['Multiplier par '+MI+'1 en changeant le sens de l\u2019in\u00e9galit\u00e9.','Conclure : x\u00b2 '+MI+' '+a+'x + '+S2+' \u2264 0.']),
     K('R\u00e9sous cette in\u00e9quation. Quelles valeurs de x conviennent ?',
      'Racines de x\u00b2 '+MI+' '+a+'x + '+S2+' : \u0394 = '+a+'\u00b2 '+MI+' 4 \u00d7 '+S2+' = '+(a*a)+' '+MI+' '+(4*S2)+' = '+D2+', \u221a\u0394 = '+d2+', donc x\u2081 = ('+a+' '+MI+' '+d2+') \u00f7 2 = '+s1+' et x\u2082 = ('+a+' + '+d2+') \u00f7 2 = '+s2+'. Le coefficient de x\u00b2 est positif : le trin\u00f4me est n\u00e9gatif entre ses racines. Donc x\u00b2 '+MI+' '+a+'x + '+S2+' \u2264 0 \u00e9quivaut \u00e0 '+s1+' \u2264 x \u2264 '+s2+'. Ces valeurs v\u00e9rifient 0 < x < '+a+' : l\u2019aire est d\u2019au moins '+S2+' m\u00b2 lorsque x \u2208 ['+s1+' ; '+s2+'].',
      ['Identifier qu\u2019il faut d\u00e9terminer le signe d\u2019un trin\u00f4me du second degr\u00e9.'],
      ['Rep\u00e9rer les racines par le discriminant.','Utiliser le signe du trin\u00f4me (signe de a hors des racines, signe contraire entre elles).'],
      ['Calculer \u0394 = '+D2+' et \u221a\u0394 = '+d2+'.','Calculer x\u2081 = '+s1+' et x\u2082 = '+s2+'.','Conclure : x \u2208 ['+s1+' ; '+s2+'].','V\u00e9rifier la compatibilit\u00e9 avec 0 < x < '+a+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{a:a,S:S,r1:r1,r2:r2,S2:S2,s1:s1,s2:s2}}; }};

  /* 2nde D : fonctions */
  MOD['2D-FN']={cls:'2nde D',theme:'2D \u2014 G\u00e9n\u00e9ralit\u00e9s sur les fonctions',themes:['2D \u2014 G\u00e9n\u00e9ralit\u00e9s sur les fonctions','2D \u2014 Fonctions de r\u00e9f\u00e9rence'],label:'Fonctions et variations',w1:2,build:function(x){
    var W=x.W,X=WX[W.id].fn,r=x.rnd,p,q,m,Mx,D;
    for(var i=0;i<300;i++){ p=ri(r,4,14); q=ri(r,p+8,44); if((p+q)%2===0){ m=(p+q)/2; Mx=Math.pow((q-p)/2,2); D=q+6; break; } }
    var b=p+q, c=p*q, B=function(v){ return -v*v+b*v-c; };
    var x1=ri(r,1,p-1), x2=pick(r,[p+1,p+2,q-2,q-1].filter(function(z){ return z>p&&z<q&&z!==m; }));
    var expr=trin(-1,b,-c);
    var intro='Le b\u00e9n\u00e9fice (en milliers de francs) r\u00e9alis\u00e9 gr\u00e2ce \u00e0 '+X.obj+' est mod\u00e9lis\u00e9 par la fonction B d\u00e9finie sur [0 ; '+D+'] par B(x) = '+expr+', o\u00f9 x d\u00e9signe '+X.xd+'.';
    var p1=[K('Calcule B('+x1+') et B('+x2+'), puis interpr\u00e8te le signe de chaque r\u00e9sultat.',
      'B('+x1+') = '+MI+x1+'\u00b2 + '+b+' \u00d7 '+x1+' '+MI+' '+c+' = '+MI+(x1*x1)+' + '+(b*x1)+' '+MI+' '+c+' = '+sg(B(x1))+'. B('+x2+') = '+MI+x2+'\u00b2 + '+b+' \u00d7 '+x2+' '+MI+' '+c+' = '+MI+(x2*x2)+' + '+(b*x2)+' '+MI+' '+c+' = '+sg(B(x2))+'. Un r\u00e9sultat n\u00e9gatif correspond \u00e0 une perte, un r\u00e9sultat positif \u00e0 un b\u00e9n\u00e9fice : pour x = '+x1+' on a '+(B(x1)<0?'une perte':'un b\u00e9n\u00e9fice')+' de '+Math.abs(B(x1))+' milliers de francs, pour x = '+x2+' '+(B(x2)<0?'une perte':'un b\u00e9n\u00e9fice')+' de '+Math.abs(B(x2))+' milliers de francs.',
      ['Identifier que B('+x1+') et B('+x2+') sont les images de '+x1+' et de '+x2+' par B.','Identifier que le signe d\u2019un b\u00e9n\u00e9fice indique un gain ou une perte.'],
      ['\u00c9crire B(x) en rempla\u00e7ant x par '+x1+' puis par '+x2+'.'],
      ['Calculer B('+x1+') = '+sg(B(x1))+'.','Calculer B('+x2+') = '+sg(B(x2))+'.','Interpr\u00e9ter le signe de chaque r\u00e9sultat (perte ou b\u00e9n\u00e9fice).']),
     K('R\u00e9sous l\u2019\u00e9quation B(x) = 0. \u00c0 partir de combien de dizaines vend-on avec un b\u00e9n\u00e9fice positif ?',
      'B(x) = 0 \u00e9quivaut \u00e0 '+trin(-1,b,-c)+' = 0, soit x\u00b2 '+MI+' '+b+'x + '+c+' = 0. \u0394 = '+b+'\u00b2 '+MI+' 4 \u00d7 '+c+' = '+(b*b)+' '+MI+' '+(4*c)+' = '+(b*b-4*c)+', \u221a\u0394 = '+(q-p)+'. Les solutions sont x\u2081 = ('+b+' '+MI+' '+(q-p)+') \u00f7 2 = '+p+' et x\u2082 = ('+b+' + '+(q-p)+') \u00f7 2 = '+q+'. Le coefficient de x\u00b2 dans B(x) est n\u00e9gatif : B(x) est positif entre les racines. Le b\u00e9n\u00e9fice est positif pour '+p+' < x < '+q+', donc d\u00e8s que l\u2019on d\u00e9passe '+p+' dizaines.',
      ['Identifier qu\u2019il faut r\u00e9soudre une \u00e9quation du second degr\u00e9.','Identifier le lien entre le signe de B(x) et le b\u00e9n\u00e9fice.'],
      ['Ramener l\u2019\u00e9quation \u00e0 la forme x\u00b2 '+MI+' '+b+'x + '+c+' = 0.','Utiliser le discriminant.'],
      ['Calculer \u0394 = '+(b*b-4*c)+' et \u221a\u0394 = '+(q-p)+'.','Calculer x\u2081 = '+p+' et x\u2082 = '+q+'.','Utiliser le signe du trin\u00f4me (n\u00e9gatif hors des racines, positif entre elles).','Conclure : b\u00e9n\u00e9fice positif pour '+p+' < x < '+q+'.'])];
    var B0=B(0), BD=B(D);
    var i2=(x.standalone2?'On rappelle que B(x) = '+expr+' sur [0 ; '+D+'], B(x) \u00e9tant le b\u00e9n\u00e9fice en milliers de francs et x le nombre de dizaines. ':'');
    var p2=[K('V\u00e9rifie que, pour tout x, B(x) = '+MI+'(x '+MI+' '+m+')\u00b2 + '+Mx+'.',
      MI+'(x '+MI+' '+m+')\u00b2 + '+Mx+' = '+MI+'(x\u00b2 '+MI+' '+(2*m)+'x + '+(m*m)+') + '+Mx+' = '+MI+'x\u00b2 + '+(2*m)+'x '+MI+' '+(m*m)+' + '+Mx+' = '+MI+'x\u00b2 + '+b+'x '+MI+' '+c+', car '+(m*m)+' '+MI+' '+Mx+' = '+c+'. On retrouve B(x).',
      ['Identifier qu\u2019il faut d\u00e9velopper la forme propos\u00e9e et la comparer \u00e0 B(x).'],
      ['D\u00e9velopper (x '+MI+' '+m+')\u00b2.','\u00c9crire '+MI+'(x '+MI+' '+m+')\u00b2 + '+Mx+' sous forme d\u00e9velopp\u00e9e.'],
      ['Calculer '+MI+'(x\u00b2 '+MI+' '+(2*m)+'x + '+(m*m)+') + '+Mx+'.','Identifier les coefficients '+b+' et '+MI+c+'.','Conclure \u00e0 l\u2019\u00e9galit\u00e9 avec B(x).']),
     K('Dresse le tableau de variations de B sur [0 ; '+D+']. En d\u00e9duire le b\u00e9n\u00e9fice maximal et le nombre de dizaines correspondant.',
      'Avec B(x) = '+MI+'(x '+MI+' '+m+')\u00b2 + '+Mx+' : pour x \u2208 [0 ; '+m+'], x '+MI+' '+m+' est n\u00e9gatif et son carr\u00e9 d\u00e9cro\u00eet quand x augmente, donc B est croissante ; sur ['+m+' ; '+D+'], B est d\u00e9croissante. B(0) = '+sg(B0)+', B('+m+') = '+Mx+' et B('+D+') = '+MI+(D-m)+'\u00b2 + '+Mx+' = '+sg(BD)+'. Tableau : B(x) passe de '+sg(B0)+' (en x = 0) \u00e0 '+Mx+' (en x = '+m+') puis \u00e0 '+sg(BD)+' (en x = '+D+'). Le b\u00e9n\u00e9fice maximal est '+Mx+' milliers de francs, obtenu pour '+m+' dizaines vendues.',
      ['Identifier la forme canonique et son sommet ('+m+' ; '+Mx+').','Identifier que le maximum de B correspond au sommet de la parabole.'],
      ['Dresser le tableau de variations : croissante sur [0 ; '+m+'], d\u00e9croissante sur ['+m+' ; '+D+'].','Placer les valeurs B(0), B('+m+') et B('+D+') dans le tableau.'],
      ['Calculer B(0) = '+sg(B0)+'.','Calculer B('+m+') = '+Mx+'.','Calculer B('+D+') = '+sg(BD)+'.','Conclure : maximum '+Mx+' milliers de francs pour x = '+m+'.'])];
    return {parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{p:p,q:q,b:b,c:c,m:m,Mx:Mx,D:D,x1:x1,x2:x2,B0:B0,BD:BD}}; }};

  /* 2nde D : statistiques */
  function genStat2(r,lo){ for(var i=0;i<2000;i++){ var N=ri(r,24,40), e=[], left=N; for(var k=0;k<4;k++){ var v=ri(r,3,Math.round(N/2.5)); e.push(v); left-=v; } e.push(left); if(e.some(function(z){ return z<2; })) continue;
      var vals=[lo,lo+1,lo+2,lo+3,lo+4], S=0,S2=0,arr=[]; vals.forEach(function(v,j){ S+=v*e[j]; S2+=v*v*e[j]; for(var t=0;t<e[j];t++) arr.push(v); });
      var mean=S/N, V=(N*S2-S*S)/(N*N), sd=Math.sqrt(V), f2=function(z){ var y=z*100; return Math.abs((y-Math.floor(y))-0.5); };
      if(f2(mean)<0.08||f2(V)<0.08||f2(sd)<0.08) continue;
      var med=(N%2===0)?(arr[N/2-1]+arr[N/2])/2:arr[(N-1)/2], q1=arr[Math.ceil(N/4)-1], cum=[], c=0; e.forEach(function(z){ c+=z; cum.push(c); });
      var lowB=mean-sd, upB=mean+sd, inside=0; vals.forEach(function(v,j){ if(v>=lowB&&v<=upB) inside+=e[j]; });
      return {vals:vals,e:e,N:N,S:S,S2:S2,mean:mean,V:V,sd:sd,med:med,q1:q1,cum:cum,lowB:lowB,upB:upB,inside:inside,pct:inside/N*100}; } return null; }
  MOD['2D-ST']={cls:'2nde D',theme:'2D \u2014 Statistiques',label:'Statistique : position et dispersion',w1:3,build:function(x){
    var W=x.W,g=genStat2(x.rnd,W.st.lo), t=tab([W.st.serie].concat(g.vals.map(String)),[['Effectif'].concat(g.e.map(String))]);
    var intro='Le comit\u00e9 a relev\u00e9 '+W.st.phrase+'. Les r\u00e9sultats sont donn\u00e9s dans le tableau ci-dessous.';
    var sumTxt=g.vals.map(function(v,j){ return v+' \u00d7 '+g.e[j]; }).join(' + ');
    var p1=[K('Dresse le tableau des effectifs cumul\u00e9s croissants, puis d\u00e9termine la m\u00e9diane et le premier quartile Q\u2081 de cette s\u00e9rie.',
      'Effectifs cumul\u00e9s croissants : '+g.vals.map(function(v,j){ return v+' \u2192 '+g.cum[j]; }).join(' ; ')+'. L\u2019effectif total est N = '+g.N+'. '+(g.N%2===0?'N est pair : la m\u00e9diane est la moyenne de la '+(g.N/2)+'e et de la '+(g.N/2+1)+'e valeur, soit '+fmt(g.med,1)+'.':'N est impair : la m\u00e9diane est la '+((g.N+1)/2)+'e valeur, soit '+fmt(g.med,1)+'.')+' Pour Q\u2081, on cherche la plus petite valeur dont l\u2019effectif cumul\u00e9 atteint au moins '+g.N+' \u00f7 4 = '+fmt(g.N/4,2)+', soit le rang '+Math.ceil(g.N/4)+' : Q\u2081 = '+g.q1+'.',
      ['Identifier que les effectifs cumul\u00e9s croissants s\u2019obtiennent par additions successives.','Identifier les d\u00e9finitions de la m\u00e9diane et du premier quartile.'],
      ['Compl\u00e9ter la ligne des effectifs cumul\u00e9s croissants.','Rep\u00e9rer les rangs de la m\u00e9diane et de Q\u2081.'],
      ['Calculer les effectifs cumul\u00e9s : '+g.cum.join(', ')+'.','Lire la m\u00e9diane : '+fmt(g.med,1)+'.','Calculer le rang de Q\u2081 : '+Math.ceil(g.N/4)+'.','Lire Q\u2081 : '+g.q1+'.']),
     K('Calcule la moyenne de cette s\u00e9rie (arrondie au centi\u00e8me).',
      'Moyenne = ('+sumTxt+') \u00f7 '+g.N+' = '+g.S+' \u00f7 '+g.N+' '+eq(g.mean,2)+' '+fmt(g.mean,2)+'.',
      ['Identifier la formule de la moyenne d\u2019une s\u00e9rie \u00e0 effectifs.'],
      ['\u00c9crire la somme des produits valeur \u00d7 effectif.','\u00c9crire la division par l\u2019effectif total.'],
      ['Calculer chaque produit valeur \u00d7 effectif.','Calculer la somme : '+g.S+'.','Calculer '+g.S+' \u00f7 '+g.N+'.','Arrondir et conclure : '+fmt(g.mean,2)+'.'])];
    var p2=[K('Calcule la variance de cette s\u00e9rie (arrondie au centi\u00e8me).',
      'On utilise V = (\u03a3 n\u1d62x\u1d62\u00b2) \u00f7 N '+MI+' m\u00b2, ce qui s\u2019\u00e9crit V = (N \u00d7 \u03a3 n\u1d62x\u1d62\u00b2 '+MI+' (\u03a3 n\u1d62x\u1d62)\u00b2) \u00f7 N\u00b2. Ici \u03a3 n\u1d62x\u1d62 = '+g.S+' et \u03a3 n\u1d62x\u1d62\u00b2 = '+g.vals.map(function(v,j){ return v*v+' \u00d7 '+g.e[j]; }).join(' + ')+' = '+g.S2+'. Donc V = ('+g.N+' \u00d7 '+g.S2+' '+MI+' '+g.S+'\u00b2) \u00f7 '+g.N+'\u00b2 = ('+(g.N*g.S2)+' '+MI+' '+(g.S*g.S)+') \u00f7 '+(g.N*g.N)+' = '+(g.N*g.S2-g.S*g.S)+' \u00f7 '+(g.N*g.N)+' '+eq(g.V,2)+' '+fmt(g.V,2)+'.',
      ['Identifier la formule de la variance et les sommes n\u00e9cessaires.'],
      ['\u00c9crire V = (\u03a3 n\u1d62x\u1d62\u00b2) \u00f7 N '+MI+' m\u00b2 sous la forme sans arrondi interm\u00e9diaire.','Pr\u00e9parer le calcul de \u03a3 n\u1d62x\u1d62\u00b2.'],
      ['Calculer \u03a3 n\u1d62x\u1d62\u00b2 = '+g.S2+'.','Calculer le num\u00e9rateur '+(g.N*g.S2)+' '+MI+' '+(g.S*g.S)+' = '+(g.N*g.S2-g.S*g.S)+'.','Calculer le d\u00e9nominateur '+g.N+'\u00b2 = '+(g.N*g.N)+'.','Calculer et arrondir la variance : '+fmt(g.V,2)+'.']),
     K('D\u00e9duis l\u2019\u00e9cart-type \u03c3 (arrondi au centi\u00e8me), puis le nombre de valeurs de la s\u00e9rie comprises dans l\u2019intervalle [m '+MI+' \u03c3 ; m + \u03c3] (m \u00e9tant la moyenne).',
      '\u03c3 = \u221aV = \u221a'+fmt(g.V,4)+' '+eq(g.sd,2)+' '+fmt(g.sd,2)+'. Avec m '+eq(g.mean,2)+' '+fmt(g.mean,2)+', l\u2019intervalle est ['+fmt(g.mean,2)+' '+MI+' '+fmt(g.sd,2)+' ; '+fmt(g.mean,2)+' + '+fmt(g.sd,2)+'] soit environ ['+fmt(g.lowB,2)+' ; '+fmt(g.upB,2)+']. Les valeurs de la s\u00e9rie dans cet intervalle sont '+g.vals.filter(function(v){ return v>=g.lowB&&v<=g.upB; }).join(', ')+' : '+g.vals.map(function(v,j){ return (v>=g.lowB&&v<=g.upB)?g.e[j]:null; }).filter(function(z){ return z!==null; }).join(' + ')+' = '+g.inside+' valeurs, soit '+fmt(g.pct,1)+' % de l\u2019effectif.',
      ['Identifier que l\u2019\u00e9cart-type est la racine carr\u00e9e de la variance.','Identifier qu\u2019il faut comparer chaque valeur \u00e0 l\u2019intervalle [m '+MI+' \u03c3 ; m + \u03c3].'],
      ['\u00c9crire \u03c3 = \u221aV.','\u00c9crire les bornes m '+MI+' \u03c3 et m + \u03c3.'],
      ['Calculer \u03c3 = '+fmt(g.sd,2)+'.','Calculer les bornes ['+fmt(g.lowB,2)+' ; '+fmt(g.upB,2)+'].','S\u00e9lectionner les valeurs de la s\u00e9rie dans cet intervalle.','Additionner leurs effectifs : '+g.inside+'.'])];
    return {table:t,parts:[{intro:intro,cons:p1,table:t},{intro:x.standalone2?'On rappelle la s\u00e9rie statistique relev\u00e9e par le comit\u00e9 (tableau ci-dessous).':'',cons:p2,table:x.standalone2?t:null}],_g:g}; }};

  /* 2nde D : vecteurs et droites en repère orthonormé */
  var VEC=[[3,4],[4,3],[6,8],[8,6],[5,12],[12,5]];
  function genVD(r){ for(var i=0;i<500;i++){ var v=pick(r,VEC), dx=v[0]*(r()<0.5?-1:1), dy=v[1]*(r()<0.5?-1:1), ax=ri(r,-4,4), ay=ri(r,-4,4), bx=ax+dx, by=ay+dy, e=ri(r,-3,3), f=ri(r,-3,3); if(!e&&!f) continue;
      var cx=bx+2*e, cy=by+2*f, ux=cx-ax, uy=cy-ay; if(dx*uy-dy*ux===0) continue;
      var dX=ax+cx-bx, dY=ay+cy-by, all=[ax,bx,cx,dX,ay,by,cy,dY]; if(all.some(function(z){ return Math.abs(z)>11; })) continue;
      var g=gcd(Math.abs(dx),Math.abs(dy)), px=dx/g, py=dy/g, ea=py, eb=-px, ec=-(py*ax-px*ay), onLine=r()<0.5, tt=pick(r,[1,2,-1]), ex=ax+tt*px, ey=ay+tt*py; if(!onLine){ ex+=1; }
      return {A:[ax,ay],B:[bx,by],C:[cx,cy],D:[dX,dY],dx:dx,dy:dy,AB:Math.sqrt(dx*dx+dy*dy),I:[(bx+cx)/2,(by+cy)/2],ea:ea,eb:eb,ec:ec,E:[ex,ey],onLine:onLine,px:px,py:py}; } return null; }
  MOD['2D-VD']={cls:'2nde D',theme:'2D \u2014 Vecteurs du plan',themes:['2D \u2014 Vecteurs du plan','2D \u2014 Droites du plan'],label:'Vecteurs et droites du plan',w1:3,build:function(x){
    var W=x.W,g=genVD(x.rnd), P=WX[W.id].plan, A=g.A,B=g.B,C=g.C,D=g.D;
    var pts=[{n:'A',x:A[0],y:A[1],dx:-16,dy:-10},{n:'B',x:B[0],y:B[1],dx:16,dy:-10},{n:'C',x:C[0],y:C[1],dx:16,dy:-10}];
    var intro='Dans '+P+' rapport\u00e9 \u00e0 un rep\u00e8re orthonorm\u00e9 (unit\u00e9 : 1 m), trois piquets sont plant\u00e9s aux points '+pt('A',A[0],A[1])+', '+pt('B',B[0],B[1])+' et '+pt('C',C[0],C[1])+'.';
    var AB2=g.dx*g.dx+g.dy*g.dy;
    var p1=[K('D\u00e9termine les coordonn\u00e9es du vecteur \u2192AB, puis calcule la distance AB.',
      'Les coordonn\u00e9es de \u2192AB sont (x_B '+MI+' x_A ; y_B '+MI+' y_A) = ('+sub(B[0],A[0])+' ; '+sub(B[1],A[1])+') = ('+sg(g.dx)+' ; '+sg(g.dy)+'). Le rep\u00e8re \u00e9tant orthonorm\u00e9, AB\u00b2 = '+par(g.dx)+'\u00b2 + '+par(g.dy)+'\u00b2 = '+(g.dx*g.dx)+' + '+(g.dy*g.dy)+' = '+AB2+', donc AB = \u221a'+AB2+' = '+g.AB+' m.',
      ['Identifier que les coordonn\u00e9es d\u2019un vecteur s\u2019obtiennent par diff\u00e9rence des coordonn\u00e9es des extr\u00e9mit\u00e9s.','Identifier que la base orthonorm\u00e9e permet d\u2019utiliser la formule de la distance.'],
      ['\u00c9crire \u2192AB(x_B '+MI+' x_A ; y_B '+MI+' y_A).','\u00c9crire AB\u00b2 = x\u00b2 + y\u00b2 \u00e0 partir des coordonn\u00e9es de \u2192AB.'],
      ['Calculer l\u2019abscisse '+sg(g.dx)+' et l\u2019ordonn\u00e9e '+sg(g.dy)+' de \u2192AB.','Calculer AB\u00b2 = '+(g.dx*g.dx)+' + '+(g.dy*g.dy)+' = '+AB2+'.','Conclure : AB = \u221a'+AB2+' = '+g.AB+' m.']),
     K('D\u00e9termine les coordonn\u00e9es du milieu I du segment [BC].',
      'I a pour coordonn\u00e9es ((x_B + x_C) \u00f7 2 ; (y_B + y_C) \u00f7 2) = (('+add(B[0],C[0])+') \u00f7 2 ; ('+add(B[1],C[1])+') \u00f7 2) = ('+sg(B[0]+C[0])+' \u00f7 2 ; '+sg(B[1]+C[1])+' \u00f7 2) = ('+sg(g.I[0])+' ; '+sg(g.I[1])+').',
      ['Identifier la formule des coordonn\u00e9es du milieu d\u2019un segment.'],
      ['\u00c9crire I((x_B + x_C) \u00f7 2 ; (y_B + y_C) \u00f7 2).'],
      ['Calculer l\u2019abscisse de I : '+sg(g.I[0])+'.','Calculer l\u2019ordonn\u00e9e de I : '+sg(g.I[1])+'.'])];
    var u=(g.px)+'',vv=g.py;
    var i2=(x.standalone2?'Dans '+P+' rapport\u00e9 \u00e0 un rep\u00e8re orthonorm\u00e9 (unit\u00e9 : 1 m), on donne '+pt('A',A[0],A[1])+', '+pt('B',B[0],B[1])+' et '+pt('C',C[0],C[1])+'. ':'')+'Un quatri\u00e8me piquet D doit \u00eatre plac\u00e9 pour que ABCD soit un parall\u00e9logramme. Un arrosoir est pos\u00e9 au point '+pt('E',g.E[0],g.E[1])+'.';
    var cEq=g.ec, eq0=trinLin(g.ea,g.eb,g.ec);
    var p2=[K('ABCD est un parall\u00e9logramme. D\u00e9termine les coordonn\u00e9es de D.',
      'ABCD est un parall\u00e9logramme, donc \u2192AB = \u2192DC, soit x_B '+MI+' x_A = x_C '+MI+' x_D et y_B '+MI+' y_A = y_C '+MI+' y_D. Donc x_D = x_A + x_C '+MI+' x_B = '+add(A[0],C[0])+' '+MI+' '+par(B[0])+' = '+sg(D[0])+' et y_D = y_A + y_C '+MI+' y_B = '+add(A[1],C[1])+' '+MI+' '+par(B[1])+' = '+sg(D[1])+'. Donc D('+sg(D[0])+' ; '+sg(D[1])+').',
      ['Identifier la caract\u00e9risation vectorielle du parall\u00e9logramme : \u2192AB = \u2192DC.','Identifier que les coordonn\u00e9es de D sont les inconnues.'],
      ['\u00c9crire \u2192AB = \u2192DC.','Traduire cette \u00e9galit\u00e9 par deux \u00e9quations sur les coordonn\u00e9es.'],
      ['Calculer x_D = x_A + x_C '+MI+' x_B = '+sg(D[0])+'.','Calculer y_D = y_A + y_C '+MI+' y_B = '+sg(D[1])+'.','Conclure : D('+sg(D[0])+' ; '+sg(D[1])+').']),
     K('D\u00e9termine une \u00e9quation cart\u00e9sienne de la droite (AB). L\u2019arrosoir E est-il situ\u00e9 sur cette droite ?',
      '\u2192AB('+sg(g.dx)+' ; '+sg(g.dy)+') est colin\u00e9aire \u00e0 \u2192u('+sg(g.px)+' ; '+sg(g.py)+'), vecteur directeur de (AB). Une \u00e9quation est de la forme ax + by + c = 0 avec \u2192u(\u2212b ; a) : on prend a = '+sg(g.ea)+' et b = '+sg(g.eb)+'. Comme A('+sg(A[0])+' ; '+sg(A[1])+') appartient \u00e0 (AB) : '+mul(g.ea,A[0])+' + '+mul(g.eb,A[1])+' + c = 0, soit '+sg(g.ea*A[0]+g.eb*A[1])+' + c = 0, donc c = '+sg(g.ec)+'. Une \u00e9quation de (AB) est '+eq0+' = 0. Pour E('+sg(g.E[0])+' ; '+sg(g.E[1])+') : '+mul(g.ea,g.E[0])+' + '+mul(g.eb,g.E[1])+' + '+par(g.ec)+' = '+sg(g.ea*g.E[0]+g.eb*g.E[1]+g.ec)+(g.onLine?' = 0':' \u2260 0')+' : E '+(g.onLine?'est':'n\u2019est pas')+' sur la droite (AB).',
      ['Identifier un vecteur directeur de (AB) et la forme d\u2019une \u00e9quation cart\u00e9sienne.','Identifier que l\u2019appartenance de E se teste en rempla\u00e7ant ses coordonn\u00e9es.'],
      ['\u00c9crire ax + by + c = 0 avec \u2192u(\u2212b ; a) vecteur directeur.','Utiliser le point A pour d\u00e9terminer c.'],
      ['D\u00e9terminer a = '+sg(g.ea)+' et b = '+sg(g.eb)+'.','Calculer c = '+sg(g.ec)+'.','\u00c9crire l\u2019\u00e9quation '+eq0+' = 0.','Remplacer les coordonn\u00e9es de E dans l\u2019\u00e9quation.'])];
    return {fig:{type:'rep',pts:pts,edges:[[0,1],[1,2],[2,0]]},parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:g}; }};
  function trinLin(a,b,c){ var s=''; if(a!==0) s+=(a===1?'':(a===-1?MI:sg(a)))+'x'; if(b!==0){ var ab=Math.abs(b); s+=(b<0?' '+MI+' ':(s?' + ':''))+(ab===1?'':ab)+'y'; if(b<0&&!s.replace(' '+MI+' ','')){} } if(c!==0) s+=(c<0?' '+MI+' ':(s?' + ':''))+Math.abs(c); return s||'0'; }

  /* 2nde D : angles, radians, trigonométrie */
  var ANG={30:['\u03c0/6',1,6],45:['\u03c0/4',1,4],60:['\u03c0/3',1,3],90:['\u03c0/2',1,2],120:['2\u03c0/3',2,3],135:['3\u03c0/4',3,4],150:['5\u03c0/6',5,6]};
  MOD['2D-TR']={cls:'2nde D',theme:'2D \u2014 Angles, radian & trigonom\u00e9trie',themes:['2D \u2014 Angles, radian & trigonom\u00e9trie'],label:'Angles, radians et trigonom\u00e9trie',w1:1,build:function(x){
    var W=x.W,r=x.rnd,P=WX[W.id].piste,th=pick(r,[30,45,60,90,120,135,150]),A=ANG[th],R=pick(r,[12,24,36]);
    var radTxt=A[0], coef=R*A[1]/A[2], arcExact=fmt(coef,0)+'\u03c0', arcApprox=coef*3.14;
    var intro='On am\u00e9nage '+P+' de rayon R = '+R+' m. Un secteur de cette piste est limit\u00e9 par les rayons [OA] et [OB] et vu depuis le centre O sous un angle de '+th+'\u00b0.';
    var p1=[K('Convertis la mesure de l\u2019angle AOB = '+th+'\u00b0 en radians.',
      '\u03c0 radians correspondent \u00e0 180\u00b0, donc la mesure en radians est '+th+' \u00d7 \u03c0 \u00f7 180 = '+th+'\u03c0 \u00f7 180 = '+radTxt+' rad.',
      ['Identifier la correspondance \u03c0 rad = 180\u00b0.'],
      ['\u00c9crire la conversion : mesure en radians = mesure en degr\u00e9s \u00d7 \u03c0 \u00f7 180.','Remplacer par '+th+'.'],
      ['Calculer '+th+'\u03c0 \u00f7 180.','Simplifier la fraction.']),
     K('Calcule la longueur \u2113 de l\u2019arc AB, d\u2019abord sous forme exacte, puis arrondie au centi\u00e8me (avec \u03c0 \u2248 3,14).',
      'La longueur d\u2019un arc est \u2113 = R \u00d7 \u03b8 (\u03b8 en radians) = '+R+' \u00d7 '+radTxt+' = '+arcExact+' m. Avec \u03c0 \u2248 3,14 : \u2113 \u2248 '+fmt(coef,0)+' \u00d7 3,14 '+eq(arcApprox,2)+' '+fmt(arcApprox,2)+' m.',
      ['Identifier la formule \u2113 = R\u03b8 avec \u03b8 en radians.','Identifier que la mesure obtenue pr\u00e9c\u00e9demment est \u03b8.'],
      ['\u00c9crire \u2113 = R \u00d7 \u03b8.','Remplacer R par '+R+' et \u03b8 par '+radTxt+'.'],
      ['Calculer la valeur exacte \u2113 = '+arcExact+' m.','Calculer '+fmt(coef,0)+' \u00d7 3,14.','Conclure avec l\u2019unit\u00e9 : \u2113 \u2248 '+fmt(arcApprox,2)+' m.'])];
    var b=ri(r,8,30), cc=ri(r,8,30), sA=pick(r,[30,90,150]), sinA=(sA===90?1:0.5), S=b*cc*sinA/2, S_txt=fmt(S,2), a2=(sA===90?2*ri(r,4,15):ri(r,6,30)), thB=pick(r,[30,90,150]), sinB=(thB===90?1:0.5), a3=(thB===90?2*ri(r,4,15):ri(r,6,30)), Rc=a3/(2*sinB);
    var sinTxt=(sinA===1?'1':'1/2');
    var i2='Un panneau triangulaire ABC a pour dimensions AB = '+cc+' m et AC = '+b+' m, avec un angle de '+sA+'\u00b0 en A. Un second panneau triangulaire MNP a un c\u00f4t\u00e9 NP = '+a3+' m oppos\u00e9 \u00e0 un angle de '+thB+'\u00b0 en M.';
    var p2=[K('Calcule l\u2019aire du panneau ABC.',
      'L\u2019aire d\u2019un triangle est S = (1/2) \u00d7 AB \u00d7 AC \u00d7 sin \u00c2 = (1/2) \u00d7 '+cc+' \u00d7 '+b+' \u00d7 sin '+sA+'\u00b0. Comme sin '+sA+'\u00b0 = '+sinTxt+', S = (1/2) \u00d7 '+cc+' \u00d7 '+b+' \u00d7 '+(sinA===1?'1':'0,5')+' = '+S_txt+' m\u00b2.',
      ['Identifier la formule de l\u2019aire d\u2019un triangle avec un angle : S = (1/2) bc sin A.','Identifier les deux c\u00f4t\u00e9s qui encadrent l\u2019angle de '+sA+'\u00b0.'],
      ['\u00c9crire S = (1/2) \u00d7 AB \u00d7 AC \u00d7 sin \u00c2.','Remplacer par les valeurs : '+cc+', '+b+' et sin '+sA+'\u00b0 = '+sinTxt+'.'],
      ['Calculer (1/2) \u00d7 '+cc+' \u00d7 '+b+' = '+fmt(cc*b/2,2)+'.','Multiplier par '+(sinA===1?'1':'0,5')+'.','Conclure avec l\u2019unit\u00e9 : S = '+S_txt+' m\u00b2.']),
     K('Calcule le rayon R du cercle circonscrit au panneau MNP.',
      'D\u2019apr\u00e8s la loi des sinus, NP \u00f7 sin M = 2R. Donc 2R = '+a3+' \u00f7 sin '+thB+'\u00b0 = '+a3+' \u00f7 '+(sinB===1?'1':'0,5')+' = '+fmt(a3/sinB,2)+', donc R = '+fmt(Rc,2)+' m.',
      ['Identifier la loi des sinus : NP \u00f7 sin M = 2R.','Identifier que NP est le c\u00f4t\u00e9 oppos\u00e9 \u00e0 l\u2019angle en M.'],
      ['\u00c9crire NP \u00f7 sin M = 2R.','Remplacer NP par '+a3+' et sin M par '+(sinB===1?'1':'1/2')+'.'],
      ['Calculer 2R = '+a3+' \u00f7 '+(sinB===1?'1':'0,5')+' = '+fmt(a3/sinB,2)+'.','Diviser par 2 : R = '+fmt(Rc,2)+'.','Conclure avec l\u2019unit\u00e9 : '+fmt(Rc,2)+' m.'])];
    return {fig:{type:'sect',deg:th,R:R},parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:{th:th,R:R,coef:coef,b:b,cc:cc,sA:sA,S:S,a3:a3,thB:thB,Rc:Rc}}; }};

  /* 2nde D : produit scalaire */
  var VP=[[3,4],[4,3],[5,12],[12,5],[6,8],[8,6]];
  function genPS(r){ for(var i=0;i<500;i++){ var v=pick(r,VP), p=v[0]*(r()<0.5?-1:1), q=v[1]*(r()<0.5?-1:1), right=r()<0.4, rr,ss;
      if(right){ var m=pick(r,[1,1,2]); rr=-q*m/1; ss=p*m/1; if(Math.abs(rr)>12||Math.abs(ss)>12){ continue; } /* orthogonal */ if(Math.abs(rr)%1||Math.abs(ss)%1) continue; var norm=Math.sqrt(rr*rr+ss*ss); if(norm!==Math.round(norm)) continue; }
      else { var w=pick(r,VP); rr=w[0]*(r()<0.5?-1:1); ss=w[1]*(r()<0.5?-1:1); }
      var dot=p*rr+q*ss, cross=p*ss-q*rr; if(cross===0) continue; if(!right&&dot===0) continue;
      var n1=Math.sqrt(p*p+q*q), n2=Math.sqrt(rr*rr+ss*ss); if(n1!==Math.round(n1)||n2!==Math.round(n2)) continue;
      var cosv=dot/(n1*n2), deg=Math.acos(cosv)*180/Math.PI, fr=deg-Math.floor(deg); if(Math.abs(fr-0.5)<0.08) continue;
      var ax=ri(r,-4,4), ay=ri(r,-4,4); return {A:[ax,ay],B:[ax+p,ay+q],C:[ax+rr,ay+ss],p:p,q:q,r:rr,s:ss,dot:dot,n1:n1,n2:n2,cos:cosv,deg:deg,degR:Math.round(deg),right:right}; } return null; }
  MOD['2D-PS']={cls:'2nde D',theme:'2D \u2014 Produit scalaire',label:'Produit scalaire',w1:2,build:function(x){
    var W=x.W,g=genPS(x.rnd),P=WX[W.id].plan,A=g.A,B=g.B,C=g.C;
    var pts=[{n:'A',x:A[0],y:A[1],dx:-16,dy:-10},{n:'B',x:B[0],y:B[1],dx:16,dy:-10},{n:'C',x:C[0],y:C[1],dx:16,dy:-10}];
    var intro='Dans '+P+' rapport\u00e9 \u00e0 un rep\u00e8re orthonorm\u00e9 (unit\u00e9 : 1 m), trois points de contr\u00f4le sont plac\u00e9s en '+pt('A',A[0],A[1])+', '+pt('B',B[0],B[1])+' et '+pt('C',C[0],C[1])+'.';
    var nat=g.dot>0?'aigu':(g.dot<0?'obtus':'droit');
    var p1=[K('Calcule les coordonn\u00e9es de \u2192AB et de \u2192AC, puis le produit scalaire \u2192AB \u22c5 \u2192AC.',
      '\u2192AB('+sg(g.p)+' ; '+sg(g.q)+') et \u2192AC('+sg(g.r)+' ; '+sg(g.s)+'). Dans un rep\u00e8re orthonorm\u00e9, \u2192AB \u22c5 \u2192AC = xx\u2032 + yy\u2032 = '+mul(g.p,g.r)+' + '+mul(g.q,g.s)+' = '+add(g.p*g.r,g.q*g.s)+' = '+sg(g.dot)+'.',
      ['Identifier que les coordonn\u00e9es d\u2019un vecteur s\u2019obtiennent par diff\u00e9rence des coordonn\u00e9es.','Identifier l\u2019expression analytique du produit scalaire dans une base orthonorm\u00e9e.'],
      ['\u00c9crire \u2192AB(x_B '+MI+' x_A ; y_B '+MI+' y_A) et \u2192AC(x_C '+MI+' x_A ; y_C '+MI+' y_A).','\u00c9crire \u2192AB \u22c5 \u2192AC = xx\u2032 + yy\u2032.'],
      ['Calculer les coordonn\u00e9es de \u2192AB : ('+sg(g.p)+' ; '+sg(g.q)+').','Calculer les coordonn\u00e9es de \u2192AC : ('+sg(g.r)+' ; '+sg(g.s)+').','Calculer les deux produits '+sg(g.p*g.r)+' et '+sg(g.q*g.s)+'.','Calculer la somme : '+sg(g.dot)+'.']),
     K('Que peut-on dire de l\u2019angle BAC (aigu, droit ou obtus) ? Justifie.',
      'On a \u2192AB \u22c5 \u2192AC = '+sg(g.dot)+(g.dot>0?' > 0 : l\u2019angle BAC est aigu.':(g.dot<0?' < 0 : l\u2019angle BAC est obtus.':' : le produit scalaire est nul, donc les vecteurs \u2192AB et \u2192AC sont orthogonaux, l\u2019angle BAC est droit et le triangle ABC est rectangle en A.')),
      ['Identifier le lien entre le signe du produit scalaire et la nature de l\u2019angle.','Identifier le r\u00e9sultat de la question pr\u00e9c\u00e9dente.'],
      ['\u00c9crire la propri\u00e9t\u00e9 : \u2192AB \u22c5 \u2192AC > 0 (aigu), = 0 (droit), < 0 (obtus).'],
      ['Comparer '+sg(g.dot)+' \u00e0 0.','Conclure sur la nature de l\u2019angle BAC : '+nat+'.'])];
    var i2=(x.standalone2?'Dans '+P+' rapport\u00e9 \u00e0 un rep\u00e8re orthonorm\u00e9 (unit\u00e9 : 1 m), on donne '+pt('A',A[0],A[1])+', '+pt('B',B[0],B[1])+' et '+pt('C',C[0],C[1])+' (on a \u2192AB \u22c5 \u2192AC = '+sg(g.dot)+'). ':'')+'On souhaite conna\u00eetre l\u2019ouverture de l\u2019angle BAC.';
    var cosTxt=fmt(g.cos,4);
    var p2=[K('Calcule les distances AB et AC.',
      'AB\u00b2 = '+par(g.p)+'\u00b2 + '+par(g.q)+'\u00b2 = '+(g.p*g.p)+' + '+(g.q*g.q)+' = '+(g.p*g.p+g.q*g.q)+', donc AB = \u221a'+(g.p*g.p+g.q*g.q)+' = '+g.n1+' m. De m\u00eame, AC\u00b2 = '+par(g.r)+'\u00b2 + '+par(g.s)+'\u00b2 = '+(g.r*g.r)+' + '+(g.s*g.s)+' = '+(g.r*g.r+g.s*g.s)+', donc AC = \u221a'+(g.r*g.r+g.s*g.s)+' = '+g.n2+' m.',
      ['Identifier la formule de la norme d\u2019un vecteur en rep\u00e8re orthonorm\u00e9.'],
      ['\u00c9crire AB\u00b2 = x\u00b2 + y\u00b2 et AC\u00b2 = x\u2032\u00b2 + y\u2032\u00b2.'],
      ['Calculer '+(g.p*g.p)+' + '+(g.q*g.q)+' = '+(g.p*g.p+g.q*g.q)+' puis AB = '+g.n1+'.','Calculer '+(g.r*g.r)+' + '+(g.s*g.s)+' = '+(g.r*g.r+g.s*g.s)+' puis AC = '+g.n2+'.']),
     K('D\u00e9duis cos BAC, puis la mesure de l\u2019angle BAC arrondie au degr\u00e9. (La calculatrice est autoris\u00e9e.)',
      'On a \u2192AB \u22c5 \u2192AC = AB \u00d7 AC \u00d7 cos BAC, donc cos BAC = \u2192AB \u22c5 \u2192AC \u00f7 (AB \u00d7 AC) = '+sg(g.dot)+' \u00f7 ('+g.n1+' \u00d7 '+g.n2+') = '+sg(g.dot)+' \u00f7 '+(g.n1*g.n2)+' '+eq(g.cos,4)+' '+(g.cos<0?MI:'')+fmt(Math.abs(g.cos),4)+'. \u00c0 la calculatrice, BAC \u2248 '+fmt(g.deg,2)+'\u00b0, soit '+g.degR+'\u00b0 au degr\u00e9 pr\u00e8s.',
      ['Identifier l\u2019expression trigonom\u00e9trique du produit scalaire.','Identifier les valeurs utiles : produit scalaire et normes.'],
      ['\u00c9crire cos BAC = \u2192AB \u22c5 \u2192AC \u00f7 (AB \u00d7 AC).','Remplacer par les valeurs : '+sg(g.dot)+', '+g.n1+' et '+g.n2+'.'],
      ['Calculer le d\u00e9nominateur '+g.n1+' \u00d7 '+g.n2+' = '+(g.n1*g.n2)+'.','Calculer le quotient cos BAC = '+sg(g.dot)+' \u00f7 '+(g.n1*g.n2)+'.','Utiliser la calculatrice (cos\u207b\u00b9) pour obtenir l\u2019angle.','Arrondir et conclure : BAC \u2248 '+g.degR+'\u00b0.'])];
    return {fig:{type:'rep',pts:pts,edges:[[0,1],[0,2]]},parts:[{intro:intro,cons:p1},{intro:i2,cons:p2}],_g:g}; }};
})(typeof globalThis!=='undefined'?globalThis:this);
