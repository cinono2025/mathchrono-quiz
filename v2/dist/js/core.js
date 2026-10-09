/* ── 10-data-index.js ── */
// Index des classes et des séries (petit : toujours chargé).
// Les QUESTIONS (content/questions) et les RÉSUMÉS (content/cours) de chaque classe sont chargés à la demande.
const THEMES_C1 = {};   // rempli par les fichiers content/questions/<classe>.js
const THEMES_C2 = {};
window.MQ_COURS = window.MQ_COURS || {};   // rempli par content/cours/*.js

const CLASSES_C1 = {
  "6e": ["6e — Cube & pavé droit","6e — Cône de révolution","6e — Sphère & repérage","6e — Droites du plan","6e — Segments, milieu & médiatrice","6e — Cercle & disque","6e — Angles","6e — Triangles","6e — Parallélogramme & quadrilatères","6e — Entiers naturels","6e — Nombres décimaux","6e — Fractions","6e — Calcul littéral","6e — Figures symétriques par rapport à une droite","6e — Figures symétriques par rapport à un point","6e — Glissement","6e — Proportionnalité","6e — Statistique","6e — Prop. & Déf."],
  "5e": ["5e — Prisme droit","5e — Division dans ℕ","5e — Nombres premiers","5e — Puissances d'entiers naturels","5e — PPCM & PGCD","5e — Distance & médiatrice","5e — Angles","5e — Triangles superposables, isocèle & équilatéral","5e — Cercle & cercle circonscrit","5e — Parallélogrammes particuliers","5e — Trapèze & hexagone","5e — Nombres décimaux relatifs","5e — Fractions","5e — Puissance d'une fraction ou d'un décimal relatif","5e — Figures symétriques par rapport à une droite","5e — Figures symétriques par rapport à un point","5e — Glissement","5e — Équations","5e — Proportionnalité","5e — Prop. & Déf."],
  "4e": ["4e — Angles au centre & cordes","4e — Distance & équidistance","4e — Triangles : droite des milieux & Pythagore","4e — Droites remarquables du triangle","4e — Polygones réguliers","4e — Nombres décimaux","4e — Nombres rationnels","4e — Puissances","4e — Expressions algébriques","4e — Pyramide","4e — Cône de révolution","4e — Sphère & boule","4e — Plans & droites de l'espace","4e — PGCD & PPCM","4e — Symétrie centrale","4e — Symétrie orthogonale","4e — Translation & vecteurs","4e — Projection & repérage","4e — Équations & inéquations","4e — Proportionnalité","4e — Statistique","4e — Prop. & Déf."],
  "3e": ["Nombres réels","Valeur absolue & intervalles","Trigonométrie","Thalès & triangles semblables","Triangle rectangle","Angles & cercles","Solides & sections planes","Polynômes & équations","Droites & vecteurs","Statistiques","Applications affines","3e — Prop. & Déf."],
};

const SERIES_C1 = {
  "6e": ["6e"],
  "5e": ["5e"],
  "4e": ["4e"],
  "3e": ["3e"],
};

const CLASSES_C2 = {
  "2nde A": ["2A — Proportionnalité & pourcentages","2A — Fonctions numériques : généralités","2A — Notion de suite numérique","2A — Dénombrement élémentaire","2A — Nombres réels","2A — Calculs dans ℝ : fractions, puissances, notation scientifique","2A — Racine carrée","2A — Équations du premier degré","2A — Inéquations du premier degré","2A — Équations linéaires & systèmes dans ℝ × ℝ","2A — Fonctions affines & affines par intervalles","2A — Valeur absolue & fonction en escalier","2A — Fonctions élémentaires & résolutions graphiques","2A — Prop. & Déf."],
  "1ère A": ["1A — Polynôme du second degré & discriminant","1A — Équations du second degré","1A — Inéquations du second degré","1A — Systèmes d'équations & d'inéquations linéaires","1A — Suites arithmétiques","1A — Suites géométriques","1A — Statistique","1A — Dénombrement","1A — Fonctions : parité, symétrie, périodicité & fonctions associées","1A — Limites & continuité","1A — Dérivation & sens de variation","1A — Étude de fonctions & représentations graphiques","1A — Prop. & Déf."],
  "Tle A": ["TleA — Parité & éléments de symétrie","TleA — Limites & continuité","TleA — Dérivation & sens de variation","TleA — Fonctions polynômes, homographiques & asymptotes","TleA — Fonction logarithme népérien","TleA — Fonction exponentielle népérienne","TleA — Équations, inéquations & systèmes","TleA — Entiers naturels, numération & récurrence","TleA — Suites numériques","TleA — Statistique à un caractère","TleA — Statistique à deux caractères","TleA — Probabilités","TleA — Prop. & Déf."],
  "2nde D": ["2D — Espace : positions relatives","2D — Espace : parallélisme","2D — Logique & raisonnement","2D — Calculs dans ℝ","2D — Valeur absolue & distance","2D — Généralités sur les fonctions","2D — Applications","2D — Fonctions de référence","2D — Équations & inéquations dans ℝ","2D — Statistiques","2D — Polynômes & fractions rationnelles","2D — Vecteurs du plan","2D — Droites du plan","2D — Homothétie & transformations","2D — Angles, radian & trigonométrie","2D — Produit scalaire","2D — Rotation & cercles","2D — Systèmes & inéquations dans ℝ×ℝ","2D — Prop. & Déf."],
  "1ère D": ["1D — Orthogonalité dans l'espace","1D — Projections orthogonales","1D — Vecteurs de l'espace","1D — Équations du second degré","1D — Inéquations du second degré & systèmes linéaires","1D — Statistique : séries groupées en classes","1D — Dénombrement","1D — Applications & fonctions numériques","1D — Limites & continuité","1D — Dérivation & primitives","1D — Suites numériques","1D — Angles orientés & fonctions circulaires","1D — Formules trigonométriques & équations","1D — Barycentre & lignes de niveau","1D — Cercle : équation, représentation paramétrique & tangente","1D — Isométries & composition de transformations","1D — Fonctions associées & transformations de courbes","1D — Prop. & Déf."],
  "Tle D": ["TleD — Vecteurs de l'espace & barycentre","TleD — Produit scalaire & orthogonalité dans l'espace","TleD — Plans, droites & distances dans l'espace","TleD — Systèmes d'équations linéaires (pivot de Gauss)","TleD — Produit vectoriel","TleD — Nombres complexes : forme algébrique","TleD — Conjugué & module","TleD — Forme trigonométrique & exponentielle","TleD — Équations dans ℂ & racines n-ièmes","TleD — Nombres complexes & géométrie plane","TleD — Limites & continuité","TleD — Dérivation & étude de fonctions","TleD — Compléments sur les primitives","TleD — Fonction logarithme népérien","TleD — Fonction exponentielle népérienne","TleD — Exponentielles de base a & fonctions puissances","TleD — Calcul intégral","TleD — Équations différentielles","TleD — Probabilités : événements & probabilité conditionnelle","TleD — Variables aléatoires & loi binomiale","TleD — Suites numériques","TleD — Statistiques à deux variables","TleD — Complexes & transformations du plan","TleD — Prop. & Déf."],
  "2nde C": ["2C — Espace : positions relatives","2C — Espace : parallélisme","2C — Logique & raisonnement","2C — Calculs dans ℝ","2C — Valeur absolue & distance","2C — Généralités sur les fonctions","2C — Applications","2C — Fonctions de référence","2C — Équations & inéquations dans ℝ","2C — Statistiques","2C — Polynômes & fractions rationnelles","2C — Vecteurs du plan","2C — Droites du plan","2C — Homothétie & transformations","2C — Angles, radian & trigonométrie","2C — Produit scalaire","2C — Rotation & cercles","2C — Systèmes & inéquations dans ℝ×ℝ","2C — Prop. & Déf."],
  "1ère C": ["1C — Orthogonalité dans l'espace","1C — Projections orthogonales","1C — Vecteurs de l'espace","1C — Produit scalaire dans l'espace","1C — Géométrie analytique de l'espace","1C — Équations du second degré","1C — Inéquations du second degré & systèmes linéaires","1C — Statistique à deux caractères","1C — Dénombrement","1C — Applications & fonctions numériques","1C — Limites & continuité","1C — Dérivation & primitives","1C — Suites numériques","1C — Angles orientés & fonctions circulaires","1C — Formules trigonométriques & équations","1C — Barycentre & lignes de niveau","1C — Cercle : équation, représentation paramétrique & tangente","1C — Isométries & composition de transformations","1C — Similitudes planes & triangles semblables","1C — Fonctions associées & transformations de courbes","1C — Prop. & Déf."],
  "Tle C": ["TleC — Barycentre de n points, fonctions de Leibniz & lignes de niveau","TleC — Translations & homothéties de l'espace","TleC — Réflexions, demi-tours & compositions dans l'espace","TleC — Produit vectoriel","TleC — Systèmes d'équations linéaires (pivot de Gauss)","TleC — Arithmétique : ℤ, division euclidienne & numération","TleC — Divisibilité & congruences","TleC — PGCD, PPCM, Bézout & Gauss","TleC — Nombres premiers & ℤ/nℤ","TleC — Nombres complexes : forme algébrique","TleC — Conjugué & module","TleC — Forme trigonométrique & exponentielle","TleC — Équations dans ℂ & racines n-ièmes","TleC — Nombres complexes & géométrie plane","TleC — Limites & continuité","TleC — Dérivation & étude de fonctions","TleC — Compléments sur les primitives","TleC — Fonction logarithme népérien","TleC — Fonction exponentielle népérienne","TleC — Exponentielles de base a & fonctions puissances","TleC — Calcul intégral","TleC — Équations différentielles","TleC — Probabilités : événements & probabilité conditionnelle","TleC — Variables aléatoires & loi binomiale","TleC — Suites numériques","TleC — Isométries du plan","TleC — Applications affines & affinités","TleC — Coniques : définition & parabole","TleC — Ellipse & hyperbole","TleC — Similitudes planes directes & indirectes","TleC — Prop. & Déf."],
};

const SERIES_C2 = {
  "A": ["2nde A","1ère A","Tle A"],
  "C": ["2nde C","1ère C","Tle C"],
  "D": ["2nde D","1ère D","Tle D"],
};


/* ── 20-engine.js ── */
// ══════════════════════════════════════════
// ÉTAT GLOBAL
// ══════════════════════════════════════════
let currentCycle = 1; // 1 ou 2

// Variables actives (pointent sur le cycle courant)
let THEMES, CLASSES, SERIES;
let currentSerie = 'A';
let currentClass = '6e';
let currentTheme = 'Tous';

function setCycle(c) {
  currentCycle = c;
  if(c === 1) {
    THEMES = THEMES_C1;
    CLASSES = CLASSES_C1;
    SERIES = SERIES_C1;
    currentSerie = '6e';
    currentClass = '6e';
  } else {
    THEMES = THEMES_C2;
    CLASSES = CLASSES_C2;
    SERIES = SERIES_C2;
    currentSerie = 'A';
    currentClass = '2nde A';
  }
  currentTheme = 'Tous';
  rebuildAllQ();
  renderThemeBar();
  startQuiz();
}

function rebuildAllQ() {
  ALL_Q.length = 0;
  for(const [theme, qs] of Object.entries(THEMES)) {
    for(const q of qs) ALL_Q.push({...q, theme});
  }
}

// Initialisation cycle 1
THEMES = THEMES_C1;
CLASSES = CLASSES_C1;
SERIES = SERIES_C1;
currentSerie = '6e';
currentClass = '6e';

const ALL_Q = [];
rebuildAllQ();

const LETTERS = ['A','B','C','D'];
const TOTAL = 25;
let CHRONO = 15;



let questions = [], idx = 0, score = 0;
let answered = false, timer = null, timeLeft = CHRONO;
let results = [];
let startTime = null;

// ── Historique (localStorage) ──
function loadHistory(){
  try { const h = JSON.parse(localStorage.getItem('mathchrono_history') || '[]'); return Array.isArray(h) ? h : []; } catch(e){ return []; }
}
function saveHistory(h){
  try { localStorage.setItem('mathchrono_history', JSON.stringify(h)); } catch(e){}
}
function addToHistory(entry){
  const h = loadHistory();
  h.unshift(entry);
  saveHistory(h.slice(0, 500));
}
function clearHistory(){
  if(confirm('Effacer tout l\'historique ?')){ localStorage.removeItem('mathchrono_history'); renderHistoryPage(); }
}
function formatDuration(ms){
  const s = Math.round(ms/1000);
  if(s < 60) return s + 's';
  return Math.floor(s/60) + 'min ' + (s%60) + 's';
}
function formatDate(ts){
  const d = new Date(ts);
  return d.toLocaleDateString('fr-FR') + ' ' + d.toLocaleTimeString('fr-FR', {hour:'2-digit', minute:'2-digit'});
}
let soundOn = true;
let audioCtx = null;

function getAudioCtx(){
  if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if(audioCtx.state === 'suspended'){ try{ audioCtx.resume(); }catch(e){} }
  return audioCtx;
}
// le son doit être créé pendant un geste de l'utilisateur (iOS / Safari)
['pointerdown','touchstart','keydown'].forEach(function(ev){
  document.addEventListener(ev, function(){ try{ getAudioCtx(); }catch(e){} }, {once:true, passive:true});
});

function playTick(urgent){
  if(!soundOn) return;
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(urgent ? 1100 : 800, ctx.currentTime);
    gain.gain.setValueAtTime(urgent ? 0.35 : 0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.08);
  } catch(e){}
}

function playCorrect(){
  if(!soundOn) return;
  try {
    const ctx = getAudioCtx();
    [523, 659, 784].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.1;
      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
      osc.start(t); osc.stop(t + 0.15);
    });
  } catch(e){}
}

function playWrong(){
  if(!soundOn) return;
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(200, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.3);
  } catch(e){}
}

function toggleSound(){
  soundOn = !soundOn;
  const btn = document.getElementById('snd-btn');
  if(btn) btn.textContent = soundOn ? '🔔' : '🔕';
}

/* ===== Aides communes (corrections) ===== */
function escHTML(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
function shuffleArr(a){ a = a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const x=a[i]; a[i]=a[j]; a[j]=x; } return a; }
function shuffledCopy(q){
  if(!q || !Array.isArray(q.c)) return q;
  const perm = shuffleArr(q.c.map((_,i)=>i));
  return Object.assign({}, q, { c: perm.map(i=>q.c[i]), a: perm.indexOf(q.a) });
}
let sessionKind = 'normal'; // 'normal' | 'revision' | 'perso'
function lsGet(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }
function lsSet(k,v){ try{ localStorage.setItem(k,v); }catch(e){} }
function lsDel(k){ try{ localStorage.removeItem(k); }catch(e){} }
function legacyCopy(text){
  try{
    const ta=document.createElement('textarea'); ta.value=text; ta.setAttribute('readonly','');
    ta.style.cssText='position:fixed;top:0;left:0;opacity:0;';
    document.body.appendChild(ta); ta.select(); try{ ta.setSelectionRange(0,text.length); }catch(e){}
    const ok=document.execCommand('copy'); document.body.removeChild(ta); return ok;
  }catch(e){ return false; }
}
function copyText(text){
  try{ if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(text).catch(function(){ legacyCopy(text); }); return true; } }catch(e){}
  return legacyCopy(text);
}
function dialUSSD(code){
  if(/Android/i.test(navigator.userAgent)){ window.location.href = 'tel:' + code.replace(/#/g,'%23'); }
  else { prompt('Compose ce code depuis le clavier de ton téléphone :', code); }
}
/* Réglages (à modifier ici) */
window.MQ_CFG = {
  REQUIRE_DEVICE: true,   // true = les codes non liés à un appareil sont refusés (ACTIVÉ). Mettre false pour accepter de nouveau les anciens codes.
  GATE_EVAL: true,        // true = l'évaluation formative d'une classe verrouillée est réservée aux payeurs
  MONTANT_ENS: 2000,      // prix du code Parent / Enseignant (toute l'application + évaluations à imprimer)
  EVAL_REQUIRES_TEACHER: true, // true = les évaluations à imprimer exigent le code Parent / Enseignant (un code élève de classe ne suffit plus)
  EVAL_TRIAL: false       // false = rien d'imprimable sans code Parent / Enseignant ; true = un thème d'essai par classe reste libre
};
/* Identifiant d'appareil : un code peut être lié à cet identifiant (champ « d » du code signé) */
function mqDeviceId(){
  let id = lsGet('mq_dev');
  if(!id || !/^[A-Z0-9]{5}-[A-Z0-9]{5}$/.test(id)){
    let m = null; try{ m = (document.cookie.match(/(?:^|; )mq_dev=([A-Z0-9]{5}-[A-Z0-9]{5})/)||[])[1]; }catch(e){}
    id = m || '';
  }
  if(!id){
    const A='ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; const r=new Uint8Array(10);
    try{ crypto.getRandomValues(r); }catch(e){ for(let i=0;i<10;i++) r[i]=Math.floor(Math.random()*256); }
    let s=''; for(let j=0;j<10;j++){ s+=A[r[j]%A.length]; if(j===4) s+='-'; }
    id = s;
  }
  lsSet('mq_dev', id);
  try{ document.cookie = 'mq_dev='+id+'; max-age=63072000; path=/; SameSite=Lax'; }catch(e){}
  return id;
}
window.mqDeviceId = mqDeviceId;
window.mqDeviceCheck = function(p){
  const me = mqDeviceId();
  if(p && p.d){
    if(String(p.d).toUpperCase() !== me) return {ok:false, soft:true, wrongDevice:true, err:'Ce code est lié à un autre appareil : il ne fonctionne que sur le téléphone pour lequel il a été délivré. Pour en obtenir un pour cet appareil, envoie son identifiant : '+me};
  } else if(window.MQ_CFG.REQUIRE_DEVICE){
    return {ok:false, soft:true, unbound:true, err:'Ce code n\'est lié à aucun appareil : il n\'est plus accepté. Si tu as déjà payé, demande un nouveau code gratuit en envoyant l\'identifiant de cet appareil : '+me};
  }
  return null;
};

function getQuestions(){
  const classThemes = (CLASSES && CLASSES[currentClass]) ? CLASSES[currentClass] : [];
  let pool = ALL_Q.filter(q => classThemes.includes(q.theme));
  if(currentTheme !== "Tous") pool = pool.filter(q => q.theme === currentTheme);
  pool = shuffleArr(pool);
  return pool.slice(0, Math.min(TOTAL, pool.length)).map(shuffledCopy);
}

function setSerie(s){
  currentSerie = s;
  currentClass = SERIES[s][0];
  currentTheme = 'Tous';
  renderThemeBar();
}
function setClass(c){
  currentClass = c;
  currentTheme = "Tous";
  startQuiz();
}

let missedQuestions = []; // questions ratées pour mode révision
let sessionDetails = []; // détails par question pour le récap

function renderEmpty(){
  clearInterval(timer);
  const app = document.getElementById('app');
  app.innerHTML = '<div class="theme-section" id="theme-bar"></div><div class="end-card"><div class="end-label">Aucune question</div><div class="end-msg" style="margin:1rem 0;">Aucune question disponible pour cette sélection.</div><button class="restart-btn" onclick="setTheme(\'Tous\')">📚 Tous les thèmes</button></div>';
  try{ renderThemeBar(); }catch(e){}
}

function startQuiz(fromMissed = false){
  if(!fromMissed && window.mqAccesGate && window.mqAccesGate()) return;
  const revision = fromMissed && missedQuestions.length > 0;
  sessionKind = revision ? 'revision' : 'normal';
  questions = revision ? shuffleArr(missedQuestions) : getQuestions();
  idx = 0; score = 0; answered = false; results = [];
  missedQuestions = []; sessionDetails = [];
  startTime = Date.now();
  if(questions.length === 0){ renderEmpty(); return; }
  render();
}

function setTheme(t){ currentTheme = t; startQuiz(); }
function setChrono(s){ CHRONO = s; renderThemeBar(); }


function vecHTML(t){
  if(t == null || t === '') return t;
  t = String(t);
  return t.replace(/→([A-Za-z0-9'][A-Za-z0-9']{0,3})/g,
    function(m,l){ return '<span class="vec"><span>'+l+'</span></span>'; }
  );
}

function render(){
  const app = document.getElementById('app');
  if(idx >= questions.length){ renderEnd(app); return; }
  const q = questions[idx];

  const total = questions.length;
  const dotsHtml = Array.from({length: total}, (_,i) => {
    let cls = 'dot';
    if(i < results.length) cls += results[i]==='ok' ? ' done-ok' : ' done-ko';
    else if(i === idx) cls += ' current';
    return `<div class="${cls}"></div>`;
  }).join('');

  app.innerHTML = `
    <div class="progress-dots">${dotsHtml}</div>
    <div class="theme-section" id="theme-bar"></div>
    <div class="card">
      <div class="q-meta">
        <span class="q-num">Question ${idx+1} / ${questions.length}</span>
        <span class="q-badge">${q.theme}</span>
      </div>
      <div class="question">${vecHTML(q.q)}</div>
      <div class="chrono-wrap">
        <div class="chrono-bar-bg">
          <div class="chrono-bar-fill" id="cbar" style="width:100%"></div>
        </div>
        <span class="chrono-txt" id="ctxt">${CHRONO}s</span>
      </div>
      <div class="choices" id="choices">
        ${q.c.map((c,i) => `<button class="choice" onclick="choose(${i})" id="ch${i}"><span class="letter">${LETTERS[i]}</span>${vecHTML(c)}</button>`).join('')}
      </div>
      <div class="feedback" id="fb"></div>
    </div>
    <div class="bottom">
      <span class="score-txt">Score : ${score} / ${idx}</span>
      <button class="next-btn" id="nxt" style="display:none" onclick="next()">Suivant →</button>
    </div>
  `;

  renderThemeBar();
  startTimer();
}

function renderThemeBar(){
  const bar = document.getElementById('theme-bar');
  if(!bar) return;

  // Sélecteur de cycle
  const cycleBtns = `
    <div style="display:flex;gap:6px;margin-bottom:10px;">
      <button onclick="setCycle(1)" style="flex:1;padding:8px;border-radius:8px;border:2px solid ${currentCycle===1?'var(--accent)':'var(--border-strong)'};background:${currentCycle===1?'var(--accent-bg)':'transparent'};color:${currentCycle===1?'var(--accent-text)':'var(--text-sec)'};font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;">📘 1er Cycle<br><span style="font-size:10px;font-weight:400;">6e → 3e</span></button>
      <button onclick="setCycle(2)" style="flex:1;padding:8px;border-radius:8px;border:2px solid ${currentCycle===2?'var(--accent)':'var(--border-strong)'};background:${currentCycle===2?'var(--accent-bg)':'transparent'};color:${currentCycle===2?'var(--accent-text)':'var(--text-sec)'};font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;">📗 2nd Cycle<br><span style="font-size:10px;font-weight:400;">Séries A, C & D</span></button>
    </div>`;

  // Sélecteur de niveau/série + classe
  let levelHtml = '';
  if(currentCycle === 1) {
    // Cycle 1 : 4 boutons de classe
    const classBtns = Object.keys(CLASSES).map(c =>
      `<button class="class-btn${currentClass===c?' active':''}" onclick="setClass('${c}')">${c}</button>`
    ).join('');
    levelHtml = `
      <div style="margin-bottom:8px;">
        <div class="theme-label">Classe</div>
        <div class="class-bar">${classBtns}</div>
      </div>`;
  } else {
    // Cycle 2 : Série + Classe en listes déroulantes
    const serieOptions = Object.keys(SERIES).map(s =>
      `<option value="${s}" ${currentSerie===s?'selected':''}>Série ${s}</option>`
    ).join('');
    const classOptions = SERIES[currentSerie].map(c =>
      `<option value="${c}" ${currentClass===c?'selected':''}>${c}</option>`
    ).join('');
    levelHtml = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
        <div>
          <div class="theme-label">Série</div>
          <select class="theme-select" onchange="setSerie(this.value)">${serieOptions}</select>
        </div>
        <div>
          <div class="theme-label">Classe</div>
          <select class="theme-select" onchange="setClass(this.value)">${classOptions}</select>
        </div>
      </div>`;
  }

  // Thèmes
  const classThemes = CLASSES[currentClass] || [];
  const all = ['Tous', ...classThemes];
  const themeOptions = all.map(t => {
    const isPD = t.includes('Prop. & D');
    const label = t === 'Tous' ? '📚 Tous les thèmes' : (isPD ? '📌 ' : '') + t.replace(/^[\w]+ — /, '').replace(/^[36]e — /, '');
    return `<option value="${t}" ${currentTheme===t?'selected':''}>${label}</option>`;
  }).join('');

  // Chrono
  const chronoBtns = [10,15,30].map(s =>
    `<button class="chrono-opt${CHRONO===s?' active':''}" onclick="setChrono(${s})">${s}s</button>`
  ).join('');

  bar.innerHTML = cycleBtns + levelHtml + `
    <div style="margin-bottom:8px;">
      <div class="theme-label">Thème</div>
      <select class="theme-select" onchange="setTheme(this.value)">${themeOptions}</select>
    </div>
    ${window.mqCoursBtn?mqCoursBtn():''}
    ${window.mqAccesBar?mqAccesBar():''}
    <div style="margin-bottom:8px;">
      <div class="theme-label">⏱ Durée par question</div>
      <div class="chrono-select">${chronoBtns}</div>
    </div>
    <div style="display:flex;gap:6px;">
      <button onclick="renderClassePage()" style="flex:1;padding:7px;border-radius:8px;border:1px solid var(--border-strong);background:transparent;color:var(--text-sec);font-family:inherit;font-size:12px;cursor:pointer;">🖥️ Mode Classe</button>
      <button onclick="renderCustomQPage()" style="flex:1;padding:7px;border-radius:8px;border:1px solid var(--border-strong);background:transparent;color:var(--text-sec);font-family:inherit;font-size:12px;cursor:pointer;">➕ Mes questions</button>
    </div>
    <button onclick="renderEvalPage()" style="width:100%;margin-top:6px;padding:8px;border-radius:8px;border:1px solid var(--accent);background:var(--accent-bg);color:var(--accent-text);font-family:inherit;font-size:12.5px;font-weight:700;cursor:pointer;">📝 Évaluation à imprimer (sujet + corrigé)${(window.mqEvLocked&&window.mqEvLocked())?' 🔒':''}</button>
  `;
}
function startTimer(from){
  timeLeft = (typeof from === 'number') ? from : CHRONO; answered = false;
  clearInterval(timer);
  const deadline = Date.now() + timeLeft * 1000;
  timer = setInterval(() => {
    const left = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    if(left === timeLeft) return;
    timeLeft = left;
    const txt = document.getElementById('ctxt');
    const bar = document.getElementById('cbar');
    if(txt) txt.textContent = timeLeft + 's';
    if(bar){
      bar.style.width = (timeLeft / CHRONO * 100) + '%';
      if(timeLeft <= 5) bar.classList.add('warn');
    }
    playTick(timeLeft <= 5);
    if(timeLeft <= 0){ clearInterval(timer); timeoutQ(); }
  }, 250);
}

function timeoutQ(){
  if(answered) return;
  answered = true;
  results.push('ko');
  const q = questions[idx];
  missedQuestions.push(q);
  sessionDetails.push({q, chosen: -1, ok: false});
  const fb = document.getElementById('fb');
  try{ playWrong(); }catch(e){}
  if(fb) fb.innerHTML = `⏰ Temps écoulé ! <strong>Bonne réponse : ${vecHTML(q.c[q.a])}</strong> <em>${vecHTML(q.exp)||''}</em>`;
  document.querySelectorAll('.choice').forEach((b,i) => {
    b.disabled = true;
    if(i === q.a) b.classList.add('reveal');
  });
  const nxt = document.getElementById('nxt');
  if(nxt) nxt.style.display = 'block';
}

function choose(i){
  if(answered) return;
  answered = true;
  clearInterval(timer);
  const q = questions[idx];
  const fb = document.getElementById('fb');
  const nxt = document.getElementById('nxt');
  document.querySelectorAll('.choice').forEach(b => b.disabled = true);
  if(i === q.a){
    score++;
    results.push('ok');
    playCorrect();
    sessionDetails.push({q, chosen: i, ok: true});
    document.getElementById('ch'+i).classList.add('correct');
    if(fb) fb.innerHTML = `✓ Bonne réponse ! <em>${vecHTML(q.exp)||''}</em>`;
  } else {
    results.push('ko');
    playWrong();
    missedQuestions.push(q);
    sessionDetails.push({q, chosen: i, ok: false});
    document.getElementById('ch'+i).classList.add('wrong');
    const rb = document.getElementById('ch'+q.a);
    if(rb) rb.classList.add('reveal');
    if(fb) fb.innerHTML = `✗ Incorrect. <em>${vecHTML(q.exp)||''}</em>`;
  }
  if(nxt) nxt.style.display = 'block';
}

function next(){
  idx++;
  answered = false;
  render();
}

function renderEnd(app){
  clearInterval(timer);
  const total = questions.length;
  if(total === 0){ renderEmpty(); return; }
  const pct = Math.round(score / total * 100);
  const duration = startTime ? Date.now() - startTime : 0;
  const stars = pct >= 80 ? '⭐⭐⭐' : pct >= 60 ? '⭐⭐' : '⭐';
  const msg = pct >= 80 ? 'Excellent travail !' : pct >= 60 ? 'Bien, continue !' : 'Courage, il faut réviser !';
  const dotsHtml = results.map(r => {
    let cls = 'dot ' + (r==='ok' ? 'done-ok' : 'done-ko');
    return `<div class="${cls}"></div>`;
  }).join('');

  // Enregistrer dans l'historique
  const themeLabel = currentTheme === 'Tous' ? 'Tous les thèmes' : currentTheme.replace(/^[3-6]e — /, '');
  const endTs = Date.now();
  window._lastShare = { score: score, total: total, pct: pct, theme: themeLabel, classe: currentClass, ts: endTs };
  // Les sessions de révision, de questions perso ou très courtes ne comptent pas
  const counted = (sessionKind === 'normal' && total >= 5);
  if(counted){
    addToHistory({
      date: endTs,
      classe: currentClass,
      theme: themeLabel,
      score: score,
      total: total,
      pct: pct,
      duration: duration
    });
  }

  app.innerHTML = `
    <div class="theme-section" id="theme-bar"></div>
    <div class="end-card">
      <div class="end-label">Session terminée</div>
      <div class="end-score">${score}<span style="font-size:24px;color:var(--text-muted)">/${total}</span></div>
      <div class="end-stars">${stars}</div>
      <div class="end-msg">${pct}% — ${msg}</div>
      ${counted ? '' : '<div style="font-size:11px;color:var(--text-muted);margin-bottom:.8rem;">Session non comptée dans l\'historique ni le classement (révision, questions perso ou moins de 5 questions).</div>'}
      <div class="progress-dots" style="justify-content:center;margin-bottom:1.5rem">${dotsHtml}</div>
      <div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:.5rem;">
        <button class="restart-btn" onclick="startQuiz()">↺ Nouvelle session</button>
        ${missedQuestions.length > 0 ? `<button class="restart-btn" style="background:#e65c00;color:#fff;border-color:#e65c00;" onclick="startQuiz(true)">🔁 Réviser (${missedQuestions.length})</button>` : ''}
        <button class="restart-btn" onclick="shareScore()">📤 Partager</button>
      </div>
      <div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;">
        <button class="restart-btn" onclick="renderRecap()">📋 Récap</button>
        <button class="restart-btn" onclick="renderProgressPage()">📈 Progression</button>
        <button class="restart-btn" onclick="renderBadgesPage()">🏆 Badges</button>
        <button class="restart-btn" onclick="renderHistoryPage()">📊 Historique</button>
        <button class="restart-btn" onclick="renderLeaderboardPage()">🏅 Classement</button>
      </div>
    </div>
  `;
  renderThemeBar();
  // Classement : après l'affichage du score (la demande de pseudo ne bloque plus l'écran)
  if(counted && total >= 10){
    setTimeout(function(){ try{ submitScore(score, total, pct, themeLabel, currentClass); }catch(e){} }, 300);
  }
}

function renderRecap(){
  const app = document.getElementById('app');
  const LETTERS = ['A','B','C','D'];
  const items = sessionDetails.map((d,i) => {
    const {q, chosen, ok} = d;
    return `<div class="recap-item">
      <div class="recap-q">${i+1}. ${vecHTML(q.q)}</div>
      ${ok
        ? `<div class="recap-ok">✓ ${vecHTML(q.c[chosen])}</div>`
        : `<div class="recap-ko">✗ ${(chosen >= 0 && q.c[chosen] !== undefined) ? 'Ta réponse : ' + vecHTML(q.c[chosen]) : 'Pas de réponse (temps écoulé)'} &nbsp;|&nbsp; Bonne réponse : ${vecHTML(q.c[q.a])}</div>`
      }
      <div class="recap-exp">💡 ${vecHTML(q.exp)||''}</div>
    </div>`;
  }).join('');

  app.innerHTML = `
    <div class="theme-section" id="theme-bar"></div>
    <div class="card" style="padding:1rem;">
      <div style="font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:1rem;">📋 Récapitulatif de la session</div>
      ${items || '<div style="color:var(--text-muted);font-size:14px;text-align:center;padding:1rem;">Aucune donnée.</div>'}
    </div>
    <div style="text-align:center;margin-top:1rem;display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
      <button class="restart-btn" onclick="startQuiz()">↺ Nouvelle session</button>
      ${missedQuestions.length > 0 ? `<button class="restart-btn" style="background:#e65c00;color:#fff;border-color:#e65c00;" onclick="startQuiz(true)">🔁 Réviser les ${missedQuestions.length} erreurs</button>` : ''}
      ${sessionDetails.length > 0 ? '<button class="restart-btn" onclick="shareRecap()">📤 Partager le récap</button>' : ''}
    </div>
  `;
  renderThemeBar();
}

function renderHistoryPage(){
  const app = document.getElementById('app');
  const h = loadHistory();
  const rows = h.length === 0
    ? '<div style="text-align:center;color:var(--text-muted);padding:2rem 0;font-size:14px;">Aucune partie jouée pour l\'instant.</div>'
    : h.map((e,i) => `
      <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);">
        <div style="flex-shrink:0;width:36px;height:36px;border-radius:50%;background:${e.pct>=80?'var(--success-bg)':e.pct>=60?'#fff8e1':'var(--danger-bg)'};display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:${e.pct>=80?'var(--success)':e.pct>=60?'#b8860b':'var(--danger)'};">${e.pct}%</div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:13px;font-weight:600;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${e.classe} — ${e.theme}</div>
          <div style="font-size:11px;color:var(--text-muted);">${formatDate(e.date)} · ${formatDuration(e.duration)}</div>
        </div>
        <div style="font-size:13px;font-weight:700;color:var(--text-primary);flex-shrink:0;">${e.score}/${e.total}</div>
      </div>`).join('');

  app.innerHTML = `
    <div class="theme-section" id="theme-bar"></div>
    <div class="card" style="padding:1rem;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
        <span style="font-size:15px;font-weight:700;color:var(--text-primary);">📊 Historique des parties</span>
        ${h.length > 0 ? '<div style="display:flex;gap:6px;"><button onclick="shareHistory()" style="font-size:11px;padding:4px 10px;border-radius:20px;border:1px solid var(--border-strong);background:transparent;color:var(--accent-text);cursor:pointer;">📤 Partager</button><button onclick="clearHistory()" style="font-size:11px;padding:4px 10px;border-radius:20px;border:1px solid var(--border-strong);background:transparent;color:var(--danger);cursor:pointer;">🗑 Effacer</button></div>' : ''}
      </div>
      <div>${rows}</div>
    </div>
    <div style="text-align:center;margin-top:1rem;">
      <button class="restart-btn" onclick="startQuiz()">↺ Nouvelle session</button>
    </div>
  `;
  renderThemeBar();
}


// ── Badges ──
const BADGES = [
  {id:'first',    icon:'🎯', label:'Premier pas',     desc:'Première partie jouée',          check: h => h.length >= 1},
  {id:'ten',      icon:'🔟', label:'Assidu',          desc:'10 parties jouées',               check: h => h.length >= 10},
  {id:'fifty',    icon:'💯', label:'Persévérant',     desc:'50 parties jouées',               check: h => h.length >= 50},
  {id:'perfect',  icon:'⭐', label:'Parfait',         desc:'Score de 100% sur une partie',    check: h => h.some(e => e.pct === 100)},
  {id:'streak3',  icon:'🔥', label:'En feu',          desc:'3 parties ≥ 80% de suite',        check: h => {
    let c=0; for(const e of h){ if(e.pct>=80) c++; else c=0; if(c>=3) return true; } return false;
  }},
  {id:'allclass', icon:'🏫', label:'Polyvalent',      desc:'Joué dans les 4 classes',         check: h => ['3e','4e','5e','6e'].every(c => h.some(e=>e.classe===c))},
  {id:'master3',  icon:'🥇', label:'Champion 3e',     desc:'10 parties ≥ 80% en 3e',          check: h => h.filter(e=>e.classe==='3e'&&e.pct>=80).length>=10},
  {id:'speed',    icon:'⚡', label:'Rapide',          desc:'Finir 10 questions ou plus en moins de 2 min avec 60 % ou plus', check: h => h.some(e=>(e.total||0)>=10 && e.pct>=60 && e.duration < 120000)},
  {id:'master2',  icon:'🎓', label:'Champion 2nd cycle', desc:'10 parties ≥ 80% en 2nde, 1ère ou Tle', check: h => h.filter(e=>!['6e','5e','4e','3e'].includes(e.classe)&&e.pct>=80).length>=10},
  {id:'alltheme', icon:'📚', label:'Explorateur',     desc:'Jouer 5 thèmes différents',       check: h => new Set(h.map(e=>e.theme)).size >= 5},
];

function getUnlockedBadges(){
  const h = loadHistory();
  return BADGES.filter(b => b.check(h));
}

function renderBadgesPage(){
  const app = document.getElementById('app');
  const h = loadHistory();
  const rows = BADGES.map(b => {
    const unlocked = b.check(h);
    return `<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border);opacity:${unlocked?1:0.35};">
      <span style="font-size:26px;flex-shrink:0;">${b.icon}</span>
      <div>
        <div style="font-size:13px;font-weight:700;color:var(--text-primary);">${b.label} ${unlocked?'<span style="font-size:11px;color:var(--success);">✓ Débloqué</span>':''}</div>
        <div style="font-size:12px;color:var(--text-muted);">${b.desc}</div>
      </div>
    </div>`;
  }).join('');

  const unlocked = getUnlockedBadges();
  app.innerHTML = `
    <div class="theme-section" id="theme-bar"></div>
    <div class="card" style="padding:1rem;">
      <div style="font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:.5rem;">🏆 Badges — ${unlocked.length}/${BADGES.length}</div>
      <div style="font-size:12px;color:var(--text-muted);margin-bottom:1rem;">Débloque des badges en jouant régulièrement !</div>
      ${rows}
    </div>
    <div style="text-align:center;margin-top:1rem;">
      <button class="restart-btn" onclick="startQuiz()">↺ Nouvelle session</button>
    </div>
  `;
  renderThemeBar();
}

// ── Courbe de progression ──
function renderProgressPage(){
  const app = document.getElementById('app');
  const h = loadHistory().slice(0, 30).reverse(); // 30 dernières, ordre chrono

  let chart = '';
  if(h.length < 2){
    chart = '<div style="text-align:center;color:var(--text-muted);padding:2rem 0;font-size:13px;">Joue au moins 2 parties pour voir ta progression.</div>';
  } else {
    const W = 320, H = 140, pad = 20;
    const maxPts = h.length;
    const xStep = (W - pad*2) / (maxPts - 1);
    const yScale = (H - pad*2) / 100;

    // Ligne
    const points = h.map((e,i) => `${pad + i*xStep},${H - pad - e.pct*yScale}`).join(' ');
    // Zones couleur
    const greenLine = `${pad},${H-pad-80*yScale} ${W-pad},${H-pad-80*yScale}`;
    const dots = h.map((e,i) => {
      const cx = pad + i*xStep;
      const cy = H - pad - e.pct*yScale;
      const col = e.pct>=80?'#2e7d32':e.pct>=60?'#f57f17':'#c62828';
      return `<circle cx="${cx}" cy="${cy}" r="4" fill="${col}" stroke="#fff" stroke-width="1.5"><title>${e.pct}% — ${e.theme}</title></circle>`;
    }).join('');
    // Labels axe Y
    const yLabels = [0,25,50,75,100].map(v =>
      `<text x="${pad-4}" y="${H-pad-v*yScale+4}" font-size="9" fill="#999" text-anchor="end">${v}%</text>`
    ).join('');

    chart = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;max-width:${W}px;display:block;margin:0 auto;">
      <!-- grille -->
      ${[25,50,75,100].map(v=>`<line x1="${pad}" y1="${H-pad-v*yScale}" x2="${W-pad}" y2="${H-pad-v*yScale}" stroke="#eee" stroke-width="1"/>`).join('')}
      <!-- ligne 80% -->
      <line x1="${pad}" y1="${H-pad-80*yScale}" x2="${W-pad}" y2="${H-pad-80*yScale}" stroke="#a5d6a7" stroke-width="1" stroke-dasharray="4"/>
      <!-- courbe -->
      <polyline points="${points}" fill="none" stroke="#185fa5" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
      <!-- points -->
      ${dots}
      <!-- labels Y -->
      ${yLabels}
    </svg>`;
  }

  // Stats globales
  const total = h.length;
  const avg = total ? Math.round(h.reduce((s,e)=>s+e.pct,0)/total) : 0;
  const best = total ? Math.max(...h.map(e=>e.pct)) : 0;

  app.innerHTML = `
    <div class="theme-section" id="theme-bar"></div>
    <div class="card" style="padding:1rem;">
      <div style="font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:1rem;">📈 Ma progression</div>
      ${chart}
      <div style="display:flex;gap:8px;margin-top:1rem;">
        <div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:.7rem;">
          <div style="font-size:20px;font-weight:700;color:var(--accent);">${avg}%</div>
          <div style="font-size:11px;color:var(--text-muted);">Moyenne</div>
        </div>
        <div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:.7rem;">
          <div style="font-size:20px;font-weight:700;color:var(--success);">${best}%</div>
          <div style="font-size:11px;color:var(--text-muted);">Meilleur</div>
        </div>
        <div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:.7rem;">
          <div style="font-size:20px;font-weight:700;color:var(--text-primary);">${loadHistory().length}</div>
          <div style="font-size:11px;color:var(--text-muted);">Parties</div>
        </div>
      </div>
    </div>
    <div style="text-align:center;margin-top:1rem;">
      <button class="restart-btn" onclick="startQuiz()">↺ Nouvelle session</button>
    </div>
  `;
  renderThemeBar();
}

// ── Partager (score, historique, récap) : avec pseudo, date et heure ──
const SHARE_FOOT = '\n\n👉 Essaie toi aussi : mathchrono-quiz.pages.dev\n🎵 tiktok.com/@mathsclubb';
function shareStamp(ts){
  const d = new Date(ts || Date.now());
  return d.toLocaleDateString('fr-FR') + ' à ' + d.toLocaleTimeString('fr-FR', {hour:'2-digit', minute:'2-digit'});
}
function plainText(s){
  return String(s == null ? '' : s).replace(/<br\s*\/?>/gi,' ').replace(/<[^>]+>/g,'')
    .replace(/&nbsp;/g,' ').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
}
function sharePseudo(){
  let p = '';
  try { p = localStorage.getItem('mathchrono_pseudo') || ''; } catch(e){}
  if(!p){
    p = prompt('👤 Entre ton prénom ou pseudo (il apparaîtra sur ce que tu partages) :') || '';
    p = p.replace(/[\r\n]+/g,' ').trim().slice(0,20);
    if(p){ try { localStorage.setItem('mathchrono_pseudo', p); } catch(e){} }
  }
  return p;
}
function shareText(text, title){
  if(navigator.share){
    navigator.share({ title, text }).catch(()=>{});
  } else if(copyText(text)){
    alert('Copié ! Colle-le dans WhatsApp ou Facebook.');
  } else {
    prompt('Copie ce texte :', text);
  }
}
function shareScore(score, total, pct, theme, classe, ts){
  const L = window._lastShare || {};
  if(score === undefined){ score = L.score; total = L.total; pct = L.pct; theme = L.theme; classe = L.classe; ts = L.ts; }
  if(score === undefined) return;
  const stars = pct>=80?'⭐⭐⭐':pct>=60?'⭐⭐':'⭐';
  const p = sharePseudo();
  const text = `${stars} MathChrono-Quiz\n${p ? '👤 '+p+'\n' : ''}📚 ${classe} — ${theme}\n🎯 Score : ${score}/${total} (${pct}%)\n🕒 ${shareStamp(ts)}` + SHARE_FOOT;
  shareText(text, 'Mon score MathChrono-Quiz');
}
function shareHistory(){
  const h = loadHistory();
  if(!h.length) return;
  const p = sharePseudo();
  const n = h.length, avg = Math.round(h.reduce((s,e) => s + e.pct, 0) / n), best = Math.max(...h.map(e => e.pct));
  const MAX = 15;
  const rows = h.slice(0, MAX).map(e => {
    const d = new Date(e.date);
    const ds = d.toLocaleDateString('fr-FR', {day:'2-digit', month:'2-digit'}) + ' ' + d.toLocaleTimeString('fr-FR', {hour:'2-digit', minute:'2-digit'});
    return `• ${ds} — ${e.classe} ${e.theme} : ${e.score}/${e.total} (${e.pct}%)`;
  }).join('\n');
  const more = n > MAX ? `\n… et ${n-MAX} autre${n-MAX>1?'s':''} partie${n-MAX>1?'s':''} plus ancienne${n-MAX>1?'s':''}` : '';
  const text = `📊 MathChrono-Quiz — Mon historique\n${p ? '👤 '+p+'\n' : ''}🕒 ${shareStamp()}\n\n🎮 ${n} partie${n>1?'s':''} · moyenne ${avg}% · meilleur score ${best}%\n\n${rows}${more}` + SHARE_FOOT;
  shareText(text, 'Mon historique MathChrono-Quiz');
}
function shareRecap(){
  if(!sessionDetails.length) return;
  const p = sharePseudo();
  const total = sessionDetails.length, okN = sessionDetails.filter(d => d.ok).length, pct = Math.round(okN/total*100);
  const L = window._lastShare, same = L && L.total === total;
  const classe = same ? L.classe : currentClass;
  const theme = same ? L.theme : (currentTheme === 'Tous' ? 'Tous les thèmes' : currentTheme.replace(/^[3-6]e — /, ''));
  const ts = same ? L.ts : Date.now();
  const lines = sessionDetails.map((d,i) => {
    const q = d.q, got = (d.chosen >= 0 && q.c[d.chosen] !== undefined) ? plainText(q.c[d.chosen]) : null;
    let s = `${i+1}. ${plainText(q.q)}\n`;
    s += d.ok ? `   ✅ ${plainText(q.c[q.a])}`
              : `   ❌ ${got ? 'Ma réponse : '+got : 'Pas de réponse (temps écoulé)'}\n   ✅ Bonne réponse : ${plainText(q.c[q.a])}`;
    const e = plainText(q.exp); if(e) s += `\n   💡 ${e}`;
    return s;
  }).join('\n\n');
  const text = `📋 MathChrono-Quiz — Récap de ma session\n${p ? '👤 '+p+'\n' : ''}📚 ${classe} — ${theme}\n🎯 Score : ${okN}/${total} (${pct}%)\n🕒 ${shareStamp(ts)}\n\n${lines}` + SHARE_FOOT;
  shareText(text, 'Récap MathChrono-Quiz');
}


// ── Mode Classe ──
let classeMode = false;
let classeVotes = {};
let classeRevealed = false;

function startClasseMode(){
  classeMode = true;
  classeVotes = {};
  classeRevealed = false;
  launchClasseMode();
}

function renderClassePage(){
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="card" style="padding:1.5rem;text-align:center;">
      <div style="font-size:18px;font-weight:700;color:var(--text-primary);margin-bottom:.5rem;">🖥️ Mode Classe</div>
      <div style="font-size:13px;color:var(--text-muted);margin-bottom:1.5rem;line-height:1.6;">
        Projette le quiz au tableau. Les élèves votent à main levée ou sur leur téléphone.<br>
        L'enseignant révèle la bonne réponse après le vote.
      </div>
      <div style="background:var(--accent-bg);border-radius:10px;padding:1rem;margin-bottom:1.2rem;text-align:left;">
        <div style="font-size:12px;font-weight:700;color:var(--accent-text);margin-bottom:.5rem;">Comment utiliser :</div>
        <div style="font-size:12px;color:var(--text-sec);line-height:1.8;">
          1️⃣ Projette cette page au tableau<br>
          2️⃣ Les élèves lisent la question<br>
          3️⃣ Vote à main levée (A, B, C ou D)<br>
          4️⃣ Clique <strong>Révéler</strong> pour voir la bonne réponse
        </div>
      </div>
      <button onclick="startClasseMode()" style="width:100%;padding:12px;background:var(--accent);color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;font-family:inherit;">🚀 Lancer le Mode Classe</button>
      <button onclick="startQuiz()" style="width:100%;padding:10px;background:transparent;border:1px solid var(--border-strong);border-radius:10px;font-size:13px;cursor:pointer;font-family:inherit;margin-top:8px;color:var(--text-sec);">↺ Mode normal</button>
    </div>
  `;
}

function renderClasseQuestion(q, idx, total){
  const LETTERS = ['A','B','C','D'];
  const app = document.getElementById('app');
  const choicesHtml = q.c.map((c,i) =>
    `<div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:10px;border:2px solid var(--border);margin-bottom:8px;font-size:16px;">
      <span style="width:32px;height:32px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">${LETTERS[i]}</span>
      <span>${vecHTML(c)}</span>
    </div>`
  ).join('');

  app.innerHTML = `
    <div style="background:var(--accent);color:#fff;border-radius:12px;padding:1rem 1.2rem;margin-bottom:1rem;">
      <div style="font-size:12px;opacity:.8;margin-bottom:.3rem;">Question ${idx+1} / ${total} · 🖥️ Mode Classe</div>
      <div style="font-size:17px;font-weight:600;line-height:1.5;">${vecHTML(q.q)}</div>
    </div>
    <div id="classe-choices">${choicesHtml}</div>
    <div id="classe-reveal" style="margin-top:1rem;"></div>
    <div style="display:flex;gap:8px;margin-top:1rem;">
      <button onclick="revealClasseAnswer()" style="flex:1;padding:12px;background:#e65c00;color:#fff;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;">👁 Révéler la réponse</button>
      <button onclick="nextClasseQuestion()" style="flex:1;padding:12px;background:var(--surface);border:1px solid var(--border-strong);border-radius:10px;font-size:14px;cursor:pointer;font-family:inherit;color:var(--text);">Suivant →</button>
    </div>
  `;
}

function revealClasseAnswer(){
  const q = classeQuestions[classeIdx];
  if(!q) return;
  const ans = q.a, exp = vecHTML(q.exp) || '';
  const LETTERS = ['A','B','C','D'];
  const choices = document.getElementById('classe-choices');
  if(choices){
    const divs = choices.querySelectorAll('div');
    divs.forEach((d,i) => {
      if(i === ans) d.style.cssText += ';border-color:var(--success);background:var(--success-bg);';
    });
  }
  const rev = document.getElementById('classe-reveal');
  if(rev) rev.innerHTML = `<div style="background:var(--success-bg);border:1px solid var(--success);border-radius:10px;padding:12px;font-size:13px;color:var(--success);">
    ✓ Bonne réponse : <strong>${LETTERS[ans]}</strong><br>
    <span style="color:var(--text-sec);font-style:italic;">${exp}</span>
  </div>`;
}

let classeIdx = 0;
let classeQuestions = [];

function nextClasseQuestion(){
  classeIdx++;
  if(classeIdx >= classeQuestions.length){
    const app = document.getElementById('app');
    app.innerHTML = `<div class="end-card">
      <div style="font-size:18px;font-weight:700;margin-bottom:1rem;">🖥️ Session classe terminée !</div>
      <div style="font-size:14px;color:var(--text-muted);margin-bottom:1.5rem;">${classeQuestions.length} questions projetées</div>
      <button class="restart-btn" onclick="renderClassePage()">↺ Nouvelle session classe</button>
      <button class="restart-btn" onclick="startQuiz()" style="margin-top:8px;">Mode normal</button>
    </div>`;
    classeMode = false;
    return;
  }
  renderClasseQuestion(classeQuestions[classeIdx], classeIdx, classeQuestions.length);
}

// Lancement mode classe sans override récursif
function launchClasseMode(){
  // même contrôle d'accès que le quiz : une classe non débloquée est limitée à son thème d'essai
  if(window.mqAccesGate && window.mqAccesGate()){ classeMode = false; return; }
  classeIdx = 0;
  classeQuestions = getQuestions();
  missedQuestions = []; sessionDetails = [];
  startTime = Date.now();
  if(classeQuestions.length === 0){ alert('Aucune question disponible.'); return; }
  renderClasseQuestion(classeQuestions[0], 0, classeQuestions.length);
}

// ── Questions personnalisées ──
const CUSTOM_KEY = 'mathchrono_custom_q';

function loadCustomQ(){
  try { return JSON.parse(localStorage.getItem(CUSTOM_KEY) || '[]'); } catch(e){ return []; }
}
function saveCustomQ(arr){
  try { localStorage.setItem(CUSTOM_KEY, JSON.stringify(arr)); } catch(e){}
}

function renderCustomQPage(){
  const app = document.getElementById('app');
  const list = loadCustomQ();

  const listHtml = list.length === 0
    ? '<div style="text-align:center;color:var(--text-muted);font-size:13px;padding:1rem 0;">Aucune question personnalisée.</div>'
    : list.map((q,i) => `
      <div style="padding:10px 0;border-bottom:1px solid var(--border);">
        <div style="font-size:13px;font-weight:600;color:var(--text-primary);">${escHTML(q.q)}</div>
        <div style="font-size:11px;color:var(--success);margin-top:2px;">✓ ${escHTML(q.c[q.a])}</div>
        <button onclick="deleteCustomQ(${i})" style="font-size:11px;color:var(--danger);background:none;border:none;cursor:pointer;padding:2px 0;margin-top:2px;">🗑 Supprimer</button>
      </div>`).join('');

  app.innerHTML = `
    <div class="theme-section" id="theme-bar"></div>
    <div class="card" style="padding:1rem;margin-bottom:1rem;">
      <div style="font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:1rem;">➕ Ajouter une question</div>
      <div style="margin-bottom:8px;">
        <div class="theme-label">Question</div>
        <textarea id="cq-question" rows="2" style="width:100%;padding:8px;border:1px solid var(--border-strong);border-radius:8px;font-family:inherit;font-size:13px;background:var(--surface);color:var(--text);resize:none;" placeholder="Écris ta question ici…"></textarea>
      </div>
      ${['A','B','C','D'].map((l,i) => `
      <div style="margin-bottom:6px;">
        <div class="theme-label">Choix ${l}</div>
        <input id="cq-c${i}" type="text" style="width:100%;padding:7px 10px;border:1px solid var(--border-strong);border-radius:8px;font-family:inherit;font-size:13px;background:var(--surface);color:var(--text);" placeholder="Réponse ${l}…">
      </div>`).join('')}
      <div style="margin-bottom:8px;">
        <div class="theme-label">Bonne réponse</div>
        <select id="cq-ans" style="width:100%;padding:8px;border:1px solid var(--border-strong);border-radius:8px;font-family:inherit;font-size:13px;background:var(--surface);color:var(--text);">
          <option value="0">A</option><option value="1">B</option><option value="2">C</option><option value="3">D</option>
        </select>
      </div>
      <div style="margin-bottom:8px;">
        <div class="theme-label">Explication (optionnelle)</div>
        <input id="cq-exp" type="text" style="width:100%;padding:7px 10px;border:1px solid var(--border-strong);border-radius:8px;font-family:inherit;font-size:13px;background:var(--surface);color:var(--text);" placeholder="Explication de la bonne réponse…">
      </div>
      <button onclick="saveNewCustomQ()" style="width:100%;padding:10px;background:var(--accent);color:#fff;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;">✅ Enregistrer la question</button>
    </div>

    <div class="card" style="padding:1rem;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.8rem;">
        <span style="font-size:14px;font-weight:700;color:var(--text-primary);">Mes questions (${list.length})</span>
        ${list.length > 0 ? `<button onclick="playCustomQ()" style="padding:6px 14px;background:#e65c00;color:#fff;border:none;border-radius:20px;font-size:12px;font-weight:700;cursor:pointer;">▶ Jouer mes questions</button>` : ''}
      </div>
      ${listHtml}
    </div>
    <div style="text-align:center;margin-top:1rem;">
      <button class="restart-btn" onclick="startQuiz()">↺ Mode normal</button>
    </div>
  `;
  renderThemeBar();
}

function saveNewCustomQ(){
  const q = document.getElementById('cq-question')?.value.trim();
  const c = [0,1,2,3].map(i => document.getElementById('cq-c'+i)?.value.trim());
  const a = parseInt(document.getElementById('cq-ans')?.value);
  const exp = document.getElementById('cq-exp')?.value.trim();

  if(!q || c.some(x=>!x)){
    alert('Merci de remplir la question et les 4 choix de réponse.');
    return;
  }
  if(new Set(c.map(x => x.toLowerCase())).size < 4){
    alert('Les 4 choix de réponse doivent être différents.');
    return;
  }
  const list = loadCustomQ();
  list.push({q, c, a, exp, theme:'Mes questions', classe:'Perso'});
  saveCustomQ(list);
  alert('Question enregistrée !');
  renderCustomQPage();
}

function deleteCustomQ(i){
  if(!confirm('Supprimer cette question ?')) return;
  const list = loadCustomQ();
  list.splice(i,1);
  saveCustomQ(list);
  renderCustomQPage();
}

function playCustomQ(){
  const list = loadCustomQ();
  if(list.length === 0){ alert('Aucune question personnalisée.'); return; }
  // les textes saisis sont échappés (ils ne doivent jamais être interprétés comme du HTML)
  questions = shuffleArr(list).slice(0, Math.min(TOTAL, list.length)).map(q => shuffledCopy({
    q: escHTML(q.q), c: q.c.map(escHTML), a: q.a, exp: escHTML(q.exp || ''), theme: 'Mes questions', classe: 'Perso'
  }));
  sessionKind = 'perso';
  idx = 0; score = 0; answered = false; results = [];
  missedQuestions = []; sessionDetails = [];
  startTime = Date.now();
  render();
}


// ════════════════════════════════════════════
// PHASE 4 — CLASSEMENT ENTRE ÉLÈVES
// (stockage localStorage partagé par pseudo)
// ════════════════════════════════════════════
const LB_KEY = 'mathchrono_leaderboard';

function loadLeaderboard(){
  try { const a = JSON.parse(localStorage.getItem(LB_KEY) || '[]'); return Array.isArray(a) ? a : []; } catch(e){ return []; }
}
function saveLeaderboard(arr){
  try { localStorage.setItem(LB_KEY, JSON.stringify(arr)); } catch(e){}
}

function getPseudo(){
  let p = lsGet('mathchrono_pseudo') || '';
  if(!p){
    let r = null;
    try{ r = prompt('👤 Entre ton prénom ou pseudo pour le classement :'); }catch(e){}
    p = (r || '').replace(/[\r\n]+/g,' ').trim().slice(0,20);
    if(p) lsSet('mathchrono_pseudo', p);
  }
  return p;
}

function submitScore(score, total, pct, theme, classe){
  if(total < 10) return;   // les parties trop courtes ne sont pas classées
  const pseudo = getPseudo();
  if(!pseudo) return;
  const lb = loadLeaderboard();
  lb.push({
    pseudo,
    score, total, pct,
    theme, classe,
    date: Date.now()
  });
  // Garder les 200 meilleurs scores
  lb.sort((a,b) => b.pct - a.pct || b.total - a.total || b.score - a.score);
  saveLeaderboard(lb.slice(0, 200));
}

function renderLeaderboardPage(){
  const app = document.getElementById('app');
  const lb = loadLeaderboard();
  const pseudo = lsGet('mathchrono_pseudo') || '';

  // Filtres
  const classes = ['Tous','6e','5e','4e','3e','2nde','1ère','Tle'];
  const activeFilter = window._lbFilter || 'Tous';

  const filtered = activeFilter === 'Tous'
    ? lb
    : lb.filter(e => e.classe === activeFilter || String(e.classe).indexOf(activeFilter + ' ') === 0);

  // Top 20
  const top = filtered.slice(0, 20);

  const medals = ['🥇','🥈','🥉'];
  const rows = top.length === 0
    ? '<div style="text-align:center;color:var(--text-muted);padding:2rem 0;font-size:13px;">Aucun score enregistré.</div>'
    : top.map((e, i) => {
        const isMe = e.pseudo === pseudo;
        return `<div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border);${isMe?'background:var(--accent-bg);border-radius:8px;padding:9px 8px;margin:2px 0;':''}">
          <div style="flex-shrink:0;width:28px;text-align:center;font-size:${i<3?'18px':'13px'};font-weight:700;color:var(--text-muted);">${i<3?medals[i]:i+1}</div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;font-weight:${isMe?'700':'500'};color:${isMe?'var(--accent-text)':'var(--text-primary)'};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escHTML(e.pseudo)}${isMe?' (moi)':''}</div>
            <div style="font-size:11px;color:var(--text-muted);">${escHTML(e.classe)} — ${escHTML(e.theme)}</div>
          </div>
          <div style="text-align:right;flex-shrink:0;">
            <div style="font-size:14px;font-weight:700;color:${e.pct>=80?'var(--success)':e.pct>=60?'#b8860b':'var(--danger)'};">${e.pct}%</div>
            <div style="font-size:11px;color:var(--text-muted);">${e.score}/${e.total}</div>
          </div>
        </div>`;
      }).join('');

  const filterBtns = classes.map(c =>
    `<button onclick="window._lbFilter='${c}';renderLeaderboardPage();" style="padding:5px 12px;border-radius:20px;border:1px solid var(--border-strong);background:${activeFilter===c?'var(--accent)':'transparent'};color:${activeFilter===c?'#fff':'var(--text-sec)'};font-family:inherit;font-size:12px;cursor:pointer;">${c}</button>`
  ).join('');

  // Rang personnel
  const myRank = pseudo ? filtered.findIndex(e => e.pseudo === pseudo) + 1 : 0;
  const myBest = pseudo ? filtered.filter(e=>e.pseudo===pseudo).reduce((b,e)=>e.pct>b?e.pct:b, 0) : 0;

  app.innerHTML = `
    <div class="theme-section" id="theme-bar"></div>
    <div class="card" style="padding:1rem;margin-bottom:.8rem;">
      <div style="font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:.8rem;">🏅 Classement<div style="font-size:11px;font-weight:400;color:var(--text-muted);margin-top:2px;">Enregistré sur cet appareil · parties de 10 questions minimum</div></div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:1rem;">${filterBtns}</div>
      ${pseudo && myRank > 0 ? `
      <div style="background:var(--accent-bg);border-radius:8px;padding:.7rem 1rem;margin-bottom:1rem;display:flex;gap:12px;align-items:center;">
        <span style="font-size:20px;">👤</span>
        <div>
          <div style="font-size:12px;color:var(--accent-text);font-weight:700;">${escHTML(pseudo)}</div>
          <div style="font-size:11px;color:var(--text-muted);">Rang #${myRank} · Meilleur score : ${myBest}%</div>
        </div>
      </div>` : ''}
      <div>${rows}</div>
      ${filtered.length > 20 ? `<div style="text-align:center;font-size:12px;color:var(--text-muted);margin-top:.8rem;">Top 20 affiché sur ${filtered.length} scores</div>` : ''}
    </div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:1rem;">
      <button onclick="changePseudo()" style="padding:7px 14px;border-radius:20px;border:1px solid var(--border-strong);background:transparent;color:var(--text-sec);font-family:inherit;font-size:12px;cursor:pointer;">✏️ Changer de pseudo</button>
      ${lb.length>0?`<button onclick="clearLeaderboard()" style="padding:7px 14px;border-radius:20px;border:1px solid var(--border-strong);background:transparent;color:var(--danger);font-family:inherit;font-size:12px;cursor:pointer;">🗑 Effacer</button>`:''}
    </div>
    <div style="text-align:center;">
      <button class="restart-btn" onclick="startQuiz()">↺ Nouvelle session</button>
    </div>
  `;
  renderThemeBar();
}

function changePseudo(){
  const old = lsGet('mathchrono_pseudo') || '';
  let r = null;
  try{ r = prompt('👤 Nouveau pseudo :', old); }catch(e){}
  const p = (r || '').replace(/[\r\n]+/g,' ').trim().slice(0,20);
  if(p && p !== old){
    lsSet('mathchrono_pseudo', p);
    if(old){ const lb = loadLeaderboard(); lb.forEach(e => { if(e.pseudo === old) e.pseudo = p; }); saveLeaderboard(lb); }
  }
  renderLeaderboardPage();
}

function clearLeaderboard(){
  if(confirm('Effacer tout le classement ?')){
    localStorage.removeItem(LB_KEY);
    renderLeaderboardPage();
  }
}

function payerMomo(){
  const montant = prompt("💛 Soutenir Francis EGOUNLETI\n\nEntrez le montant à envoyer via MTN MoMo (en FCFA) :");
  if(montant === null) return;
  const val = /^\d{1,7}$/.test(montant.replace(/\s/g,'')) ? parseInt(montant.replace(/\s/g,''), 10) : 0;
  if(!val || val <= 0){ alert("Veuillez entrer un montant valide."); return; }
  dialUSSD("*880*41*171251*" + val + "#");
}

function payerMoov(){
  const montant = prompt("💛 Soutenir Francis EGOUNLETI\n\nEntrez le montant à envoyer via Moov Money (en FCFA) :");
  if(montant === null) return;
  const val = /^\d{1,7}$/.test(montant.replace(/\s/g,'')) ? parseInt(montant.replace(/\s/g,''), 10) : 0;
  if(!val || val <= 0){ alert("Veuillez entrer un montant valide."); return; }
  dialUSSD("*855*41*258051*" + val + "*1#");
}

/* le premier quiz est lancé par init() du module d'accès, une fois les codes lus */














// ══════════════════════════════════════════
// DONNÉES PREMIER CYCLE (6e → 3e)
// ══════════════════════════════════════════





/* ── 30-docx.js ── */
/* ===== Moteur Word et évaluations sommatives ===== */
/* ===== MQ_DOCX : génération de fichiers Word (.docx) et d'images PNG, sans bibliothèque ===== */
(function(G){
  'use strict';
  /* ---------- ZIP (sans compression) ---------- */
  var CT=(function(){ var t=[],c,n,k; for(n=0;n<256;n++){ c=n; for(k=0;k<8;k++) c=(c&1)?(0xEDB88320^(c>>>1)):(c>>>1); t[n]=c>>>0; } return t; })();
  function crc32(u8){ var c=0xFFFFFFFF; for(var i=0;i<u8.length;i++) c=CT[(c^u8[i])&0xFF]^(c>>>8); return (c^0xFFFFFFFF)>>>0; }
  function u16(a,v){ a.push(v&255,(v>>>8)&255); } function u32(a,v){ a.push(v&255,(v>>>8)&255,(v>>>16)&255,(v>>>24)&255); }
  function utf8(s){ return new TextEncoder().encode(s); }
  function zip(files){
    var out=[], central=[], offset=0, DT=((2026-1980)<<9)|(10<<5)|1;
    files.forEach(function(f){
      var name=utf8(f.name), data=(typeof f.data==='string')?utf8(f.data):f.data, crc=crc32(data), h=[];
      u32(h,0x04034b50); u16(h,20); u16(h,0x0800); u16(h,0); u16(h,0); u16(h,DT); u32(h,crc); u32(h,data.length); u32(h,data.length); u16(h,name.length); u16(h,0);
      out.push(new Uint8Array(h),name,data);
      var c=[]; u32(c,0x02014b50); u16(c,20); u16(c,20); u16(c,0x0800); u16(c,0); u16(c,0); u16(c,DT); u32(c,crc); u32(c,data.length); u32(c,data.length); u16(c,name.length); u16(c,0); u16(c,0); u16(c,0); u16(c,0); u32(c,0); u32(c,offset);
      central.push(new Uint8Array(c),name);
      offset+=h.length+name.length+data.length;
    });
    var csize=central.reduce(function(s,x){ return s+x.length; },0), e=[];
    u32(e,0x06054b50); u16(e,0); u16(e,0); u16(e,files.length); u16(e,files.length); u32(e,csize); u32(e,offset); u16(e,0);
    var all=out.concat(central,[new Uint8Array(e)]), total=all.reduce(function(s,x){ return s+x.length; },0), res=new Uint8Array(total), p=0;
    all.forEach(function(x){ res.set(x,p); p+=x.length; }); return res;
  }

  /* ---------- PNG ---------- */
  function adler32(u8){ var a=1,b=0; for(var i=0;i<u8.length;i++){ a=(a+u8[i])%65521; b=(b+a)%65521; } return ((b<<16)|a)>>>0; }
  function zlibStored(raw){
    var out=[0x78,0x01], pos=0; var n=raw.length;
    if(n===0){ out.push(1,0,0,255,255); }
    while(pos<n){ var len=Math.min(65535,n-pos), last=(pos+len>=n)?1:0; out.push(last,len&255,len>>>8,(~len)&255,((~len)>>>8)&255); for(var i=0;i<len;i++) out.push(raw[pos+i]); pos+=len; }
    var ad=adler32(raw); out.push((ad>>>24)&255,(ad>>>16)&255,(ad>>>8)&255,ad&255); return new Uint8Array(out);
  }
  function deflate(raw){
    if(typeof CompressionStream==='function'){
      try{ var cs=new CompressionStream('deflate'), w=cs.writable.getWriter(); w.write(raw); w.close();
        return new Response(cs.readable).arrayBuffer().then(function(b){ return new Uint8Array(b); }); }catch(e){}
    }
    return Promise.resolve(zlibStored(raw));
  }
  function chunk(type,data){ var a=[]; u32a(a,data.length); var t=utf8(type); var body=new Uint8Array(t.length+data.length); body.set(t,0); body.set(data,t.length);
    var c=crc32(body), r=new Uint8Array(12+data.length), dv=new DataView(r.buffer); dv.setUint32(0,data.length); r.set(body,4); dv.setUint32(8+data.length,c); return r; }
  function u32a(a,v){ a.push((v>>>24)&255,(v>>>16)&255,(v>>>8)&255,v&255); }
  function png(w,h,rgb){ // rgb : Uint8Array w*h*3
    var raw=new Uint8Array((w*3+1)*h); for(var y=0;y<h;y++){ raw[y*(w*3+1)]=0; raw.set(rgb.subarray(y*w*3,(y+1)*w*3),y*(w*3+1)+1); }
    return deflate(raw).then(function(z){
      var ih=new Uint8Array(13), dv=new DataView(ih.buffer); dv.setUint32(0,w); dv.setUint32(4,h); ih[8]=8; ih[9]=2; ih[10]=0; ih[11]=0; ih[12]=0;
      var parts=[new Uint8Array([137,80,78,71,13,10,26,10]),chunk('IHDR',ih),chunk('IDAT',z),chunk('IEND',new Uint8Array(0))], n=parts.reduce(function(s,x){ return s+x.length; },0), r=new Uint8Array(n), p=0;
      parts.forEach(function(x){ r.set(x,p); p+=x.length; }); return r; });
  }

  /* ---------- Rastérisation de figures (traits vectoriels, anticrénelage 2x) ---------- */
  var GLY={A:[[[0,0],[2,6],[4,0]],[[.8,2],[3.2,2]]],B:[[[0,0],[0,6],[2.6,6],[3.6,5.4],[3.6,4],[2.6,3.2],[0,3.2]],[[2.6,3.2],[3.8,2.6],[3.8,.8],[2.8,0],[0,0]]],
   C:[[[4,5],[3,6],[1,6],[0,5],[0,1],[1,0],[3,0],[4,1]]],D:[[[0,0],[0,6],[2.4,6],[4,4.6],[4,1.4],[2.4,0],[0,0]]],E:[[[4,6],[0,6],[0,0],[4,0]],[[0,3],[3,3]]],F:[[[4,6],[0,6],[0,0]],[[0,3],[3,3]]],
   G:[[[4,5],[3,6],[1,6],[0,5],[0,1],[1,0],[3,0],[4,1],[4,3],[2.2,3]]],H:[[[0,0],[0,6]],[[4,0],[4,6]],[[0,3],[4,3]]],I:[[[1,0],[3,0]],[[1,6],[3,6]],[[2,0],[2,6]]],
   J:[[[4,6],[4,1],[3,0],[1,0],[0,1]]],K:[[[0,0],[0,6]],[[4,6],[0,2.5]],[[1.3,3.6],[4,0]]],L:[[[0,6],[0,0],[4,0]]],M:[[[0,0],[0,6],[2,2.5],[4,6],[4,0]]],N:[[[0,0],[0,6],[4,0],[4,6]]],
   O:[[[1,0],[0,1],[0,5],[1,6],[3,6],[4,5],[4,1],[3,0],[1,0]]],P:[[[0,0],[0,6],[3,6],[4,5],[4,3.8],[3,2.8],[0,2.8]]],Q:[[[1,0],[0,1],[0,5],[1,6],[3,6],[4,5],[4,1],[3,0],[1,0]],[[2.6,1.6],[4,0]]],
   R:[[[0,0],[0,6],[3,6],[4,5],[4,3.8],[3,2.8],[0,2.8]],[[2,2.8],[4,0]]],S:[[[4,5],[3,6],[1,6],[0,5],[0,4],[1,3.1],[3,2.9],[4,2],[4,1],[3,0],[1,0],[0,1]]],T:[[[0,6],[4,6]],[[2,6],[2,0]]],
   U:[[[0,6],[0,1],[1,0],[3,0],[4,1],[4,6]]],V:[[[0,6],[2,0],[4,6]]],W:[[[0,6],[1,0],[2,4],[3,0],[4,6]]],X:[[[0,6],[4,0]],[[4,6],[0,0]]],Y:[[[0,6],[2,3],[4,6]],[[2,3],[2,0]]],Z:[[[0,6],[4,6],[0,0],[4,0]]],
   '0':[[[1,0],[0,1],[0,5],[1,6],[3,6],[4,5],[4,1],[3,0],[1,0]]],'1':[[[1,5],[2,6],[2,0]],[[1,0],[3,0]]],'2':[[[0,5],[1,6],[3,6],[4,5],[4,4],[0,0],[4,0]]],
   '3':[[[0,5],[1,6],[3,6],[4,5],[4,4],[3,3.2],[1.6,3.2]],[[3,3.2],[4,2.4],[4,1],[3,0],[1,0],[0,1]]],'4':[[[3,0],[3,6],[0,2],[4,2]]],'5':[[[4,6],[0,6],[0,3.2],[3,3.2],[4,2.4],[4,1],[3,0],[1,0],[0,1]]],
   '6':[[[4,5],[3,6],[1,6],[0,5],[0,1],[1,0],[3,0],[4,1],[4,2.2],[3,3.2],[0,3.2]]],'7':[[[0,6],[4,6],[1.6,0]]],'8':[[[1,3.2],[0,4.2],[0,5],[1,6],[3,6],[4,5],[4,4.2],[3,3.2],[1,3.2],[0,2.2],[0,1],[1,0],[3,0],[4,1],[4,2.2],[3,3.2]]],
   '9':[[[0,1],[1,0],[3,0],[4,1],[4,5],[3,6],[1,6],[0,5],[0,3.8],[1,2.8],[4,2.8]]],'.':[[[1.7,0],[2.3,0],[2.3,.6],[1.7,.6],[1.7,0]]],',':[[[2,.6],[1.5,-.9]]],'=':[[[.4,2.2],[3.6,2.2]],[[.4,3.8],[3.6,3.8]]],
   '-':[[[.6,3],[3.4,3]]],'+':[[[.6,3],[3.4,3]],[[2,1.4],[2,4.6]]],'/':[[[0,0],[4,6]]],'\u00b0':[[[1.4,5],[1.4,6],[2.6,6],[2.6,5],[1.4,5]]],
   'm':[[[0,0],[0,4]],[[0,3.2],[.9,4],[1.9,3.2],[1.9,0]],[[1.9,3.2],[2.8,4],[3.8,3.2],[3.8,0]]],'c':[[[3.6,3.4],[2.6,4],[1,4],[0,3],[0,1],[1,0],[2.6,0],[3.6,.6]]],'x':[[[0,4],[4,0]],[[4,4],[0,0]]]};
  function Raster(w,h){ this.w=w; this.h=h; this.S=2; this.W=w*2; this.H=h*2; this.px=new Uint8Array(this.W*this.H*3).fill(255); }
  Raster.prototype.set=function(x,y,c){ if(x<0||y<0||x>=this.W||y>=this.H) return; var i=(y*this.W+x)*3; this.px[i]=c[0]; this.px[i+1]=c[1]; this.px[i+2]=c[2]; };
  Raster.prototype.line=function(x1,y1,x2,y2,wd,c){
    var S=this.S; x1*=S;y1*=S;x2*=S;y2*=S; wd*=S; var r=wd/2, minx=Math.floor(Math.min(x1,x2)-r-1), maxx=Math.ceil(Math.max(x1,x2)+r+1), miny=Math.floor(Math.min(y1,y2)-r-1), maxy=Math.ceil(Math.max(y1,y2)+r+1);
    var dx=x2-x1, dy=y2-y1, L2=dx*dx+dy*dy;
    for(var y=miny;y<=maxy;y++) for(var x=minx;x<=maxx;x++){
      var t=L2?((x-x1)*dx+(y-y1)*dy)/L2:0; t=Math.max(0,Math.min(1,t)); var px=x1+t*dx, py=y1+t*dy, d=Math.sqrt((x-px)*(x-px)+(y-py)*(y-py)); if(d<=r) this.set(x,y,c); }
  };
  Raster.prototype.poly=function(pts,c){ var S=this.S, P=pts.map(function(p){ return [p[0]*S,p[1]*S]; }), miny=Math.floor(Math.min.apply(null,P.map(function(p){return p[1];}))), maxy=Math.ceil(Math.max.apply(null,P.map(function(p){return p[1];})));
    for(var y=miny;y<=maxy;y++){ var xs=[]; for(var i=0;i<P.length;i++){ var a=P[i], b=P[(i+1)%P.length]; if((a[1]<=y&&b[1]>y)||(b[1]<=y&&a[1]>y)) xs.push(a[0]+(y-a[1])*(b[0]-a[0])/(b[1]-a[1])); }
      xs.sort(function(p,q){return p-q;}); for(var k=0;k+1<xs.length;k+=2) for(var x=Math.ceil(xs[k]);x<=Math.floor(xs[k+1]);x++) this.set(x,y,c); } };
  Raster.prototype.dot=function(x,y,r,c){ this.line(x,y,x,y,r*2,c); };
  Raster.prototype.text=function(str,x,y,size,c,anchor){ // y = ligne de base ; size = hauteur des capitales
    var sc=size/6, adv=function(ch){ return ch==='m'?4.6:(ch===' '?2.4:(ch==='.'||ch===','?2.6:(ch==='I'?4.2:4.9))); }, total=0, i;
    for(i=0;i<str.length;i++) total+=adv(str[i]); total*=sc; var x0=anchor==='middle'?x-total/2:(anchor==='end'?x-total:x), wd=Math.max(1.2,size*0.14);
    for(i=0;i<str.length;i++){ var g=GLY[str[i]]||GLY[str[i].toUpperCase()]; if(g) g.forEach(function(pl){ for(var j=0;j+1<pl.length;j++) this.line(x0+pl[j][0]*sc,y-pl[j][1]*sc,x0+pl[j+1][0]*sc,y-pl[j+1][1]*sc,wd,c); },this); x0+=adv(str[i])*sc; }
  };
  Raster.prototype.toPNG=function(){ var w=this.w,h=this.h,S=this.S,out=new Uint8Array(w*h*3);
    for(var y=0;y<h;y++) for(var x=0;x<w;x++) for(var k=0;k<3;k++){ var s=0; for(var dy=0;dy<S;dy++) for(var dx=0;dx<S;dx++) s+=this.px[((y*S+dy)*this.W+(x*S+dx))*3+k]; out[(y*w+x)*3+k]=Math.round(s/(S*S)); }
    return png(w,h,out); };

  /* ---------- Word (WordprocessingML) ---------- */
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function rPr(o){ o=o||{}; var x=''; if(o.font) x+='<w:rFonts w:ascii="'+o.font+'" w:hAnsi="'+o.font+'" w:cs="'+o.font+'" w:eastAsia="'+o.font+'"/>'; if(o.b) x+='<w:b/>'; if(o.i) x+='<w:i/>'; if(o.color) x+='<w:color w:val="'+o.color+'"/>'; if(o.sz) x+='<w:sz w:val="'+o.sz+'"/><w:szCs w:val="'+o.sz+'"/>'; if(o.u) x+='<w:u w:val="single"/>'; if(o.sup) x+='<w:vertAlign w:val="superscript"/>'; return x?'<w:rPr>'+x+'</w:rPr>':''; }
  function run(t,o){ return '<w:r>'+rPr(o)+'<w:t xml:space="preserve">'+esc(t)+'</w:t></w:r>'; }
  function br(){ return '<w:r><w:br/></w:r>'; } function tab(){ return '<w:r><w:tab/></w:r>'; }
  function vec(name,o){ o=o||{}; return run(name+'\u20d7',{sz:o.sz,b:o.b,color:o.color}); }
  function rich(text,o){ // texte avec jetons →AB (vecteurs)
    var out='', re=/\u2192([A-Za-z0-9'][A-Za-z0-9']{0,3})/g, last=0, m; text=String(text);
    while((m=re.exec(text))){ if(m.index>last) out+=run(text.slice(last,m.index),o); out+=vec(m[1],o); last=re.lastIndex; }
    if(last<text.length) out+=run(text.slice(last),o); return out; }
  function para(content,p){ p=p||{}; var x=''; if(p.keepNext) x+='<w:keepNext/>'; if(p.keepLines) x+='<w:keepLines/>'; if(p.pageBreakBefore) x+='<w:pageBreakBefore/>';
    if(p.border) x+='<w:pBdr>'+['top','left','bottom','right'].filter(function(k){ return p.border[k]; }).map(function(k){ var b=p.border[k]; return '<w:'+k+' w:val="single" w:sz="'+(b.sz||6)+'" w:space="'+(b.space||1)+'" w:color="'+(b.color||'000000')+'"/>'; }).join('')+'</w:pBdr>';
    if(p.shade) x+='<w:shd w:val="clear" w:color="auto" w:fill="'+p.shade+'"/>';
    if(p.tabs) x+='<w:tabs>'+p.tabs.map(function(t){ return '<w:tab w:val="'+t.type+'" '+(t.leader?'w:leader="'+t.leader+'" ':'')+'w:pos="'+t.pos+'"/>'; }).join('')+'</w:tabs>';
    if(p.before!=null||p.after!=null||p.line) x+='<w:spacing'+(p.before!=null?' w:before="'+p.before+'"':'')+(p.after!=null?' w:after="'+p.after+'"':'')+(p.line?' w:line="'+p.line+'" w:lineRule="auto"':'')+'/>';
    if(p.ind) x+='<w:ind'+(p.ind.left!=null?' w:left="'+p.ind.left+'"':'')+(p.ind.hanging!=null?' w:hanging="'+p.ind.hanging+'"':'')+(p.ind.first!=null?' w:firstLine="'+p.ind.first+'"':'')+'/>';
    if(p.align) x+='<w:jc w:val="'+p.align+'"/>';
    return '<w:p>'+(x?'<w:pPr>'+x+'</w:pPr>':'')+(Array.isArray(content)?content.join(''):(content||''))+'</w:p>'; }
  function cell(content,o){ o=o||{}; var tc='<w:tcW w:w="'+o.w+'" w:type="dxa"/>'; if(o.span) tc+='<w:gridSpan w:val="'+o.span+'"/>';
    if(o.borders){ tc+='<w:tcBorders>'+['top','left','bottom','right'].map(function(k){ var b=o.borders[k]; return b===null?'<w:'+k+' w:val="nil"/>':(b?'<w:'+k+' w:val="single" w:sz="'+(b.sz||4)+'" w:space="0" w:color="'+(b.color||'000000')+'"/>':''); }).join('')+'</w:tcBorders>'; }
    if(o.shade) tc+='<w:shd w:val="clear" w:color="auto" w:fill="'+o.shade+'"/>';
    if(o.mar) tc+='<w:tcMar><w:top w:w="'+o.mar[0]+'" w:type="dxa"/><w:left w:w="'+o.mar[1]+'" w:type="dxa"/><w:bottom w:w="'+o.mar[2]+'" w:type="dxa"/><w:right w:w="'+o.mar[3]+'" w:type="dxa"/></w:tcMar>';
    if(o.valign) tc+='<w:vAlign w:val="'+o.valign+'"/>';
    var body=Array.isArray(content)?content.join(''):content; if(!body||body.indexOf('<w:p>')!==0&&body.indexOf('<w:p ')!==0) body=(body||'')+(body&&/<\/w:p>\s*$/.test(body)?'':para(''));
    return '<w:tc><w:tcPr>'+tc+'</w:tcPr>'+body+'</w:tc>'; }
  function table(rows,widths,o){ o=o||{}; var total=widths.reduce(function(a,b){ return a+b; },0), bd=o.borders===false?'':'<w:tblBorders>'+['top','left','bottom','right','insideH','insideV'].map(function(k){ var b=(o.borders&&o.borders[k]!==undefined)?o.borders[k]:{sz:4,color:'8896B0'}; return b===null?'<w:'+k+' w:val="nil"/>':'<w:'+k+' w:val="single" w:sz="'+b.sz+'" w:space="0" w:color="'+b.color+'"/>'; }).join('')+'</w:tblBorders>';
    var pr='<w:tblPr><w:tblW w:w="'+total+'" w:type="dxa"/>'+(o.center?'<w:jc w:val="center"/>':'')+bd+'<w:tblLayout w:type="fixed"/><w:tblCellMar><w:top w:w="'+(o.padV!=null?o.padV:40)+'" w:type="dxa"/><w:left w:w="'+(o.padH!=null?o.padH:90)+'" w:type="dxa"/><w:bottom w:w="'+(o.padV!=null?o.padV:40)+'" w:type="dxa"/><w:right w:w="'+(o.padH!=null?o.padH:90)+'" w:type="dxa"/></w:tblCellMar></w:tblPr>';
    var grid='<w:tblGrid>'+widths.map(function(w){ return '<w:gridCol w:w="'+w+'"/>'; }).join('')+'</w:tblGrid>';
    return '<w:tbl>'+pr+grid+rows.map(function(r){ return '<w:tr>'+(r.header?'<w:trPr><w:cantSplit/><w:tblHeader/></w:trPr>':(r.cantSplit?'<w:trPr><w:cantSplit/></w:trPr>':''))+(r.cells||r).join('')+'</w:tr>'; }).join('')+'</w:tbl>'; }
  var EMU=360000; // 1 cm
  function image(rid,wcm,hcm,id,descr){ var cx=Math.round(wcm*EMU), cy=Math.round(hcm*EMU);
    return '<w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="'+cx+'" cy="'+cy+'"/><wp:docPr id="'+id+'" name="Figure '+id+'" descr="'+esc(descr||'')+'"/><wp:cNvGraphicFramePr><a:graphicFrameLocks noChangeAspect="1"/></wp:cNvGraphicFramePr><a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic><pic:nvPicPr><pic:cNvPr id="'+id+'" name="figure'+id+'.png"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="'+rid+'"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="'+cx+'" cy="'+cy+'"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r>'; }
  var NS='xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"';
  function styles(font){ return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="'+font+'" w:hAnsi="'+font+'" w:cs="'+font+'" w:eastAsia="'+font+'"/><w:sz w:val="20"/><w:szCs w:val="20"/><w:lang w:val="fr-FR" w:eastAsia="fr-FR" w:bidi="ar-SA"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="0" w:line="252" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style><w:style w:type="table" w:default="1" w:styleId="TableNormal"><w:name w:val="Normal Table"/><w:uiPriority w:val="99"/><w:semiHidden/><w:tblPr><w:tblInd w:w="0" w:type="dxa"/><w:tblCellMar><w:top w:w="0" w:type="dxa"/><w:left w:w="108" w:type="dxa"/><w:bottom w:w="0" w:type="dxa"/><w:right w:w="108" w:type="dxa"/></w:tblCellMar></w:tblPr></w:style></w:styles>'; }
  function footerXml(text){ return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:ftr '+NS+'>'+para([run(text+'  \u00b7  Page ',{sz:15,color:'5A6675'}),'<w:fldSimple w:instr=" PAGE "><w:r><w:rPr><w:color w:val="5A6675"/><w:sz w:val="15"/><w:szCs w:val="15"/></w:rPr><w:t>1</w:t></w:r></w:fldSimple>',run(' / ',{sz:15,color:'5A6675'}),'<w:fldSimple w:instr=" NUMPAGES "><w:r><w:rPr><w:color w:val="5A6675"/><w:sz w:val="15"/><w:szCs w:val="15"/></w:rPr><w:t>1</w:t></w:r></w:fldSimple>'],{align:'center',border:{top:{sz:6,color:'1F3864',space:4}}})+'</w:ftr>'; }
  function headerXml(left,right){ return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:hdr '+NS+'>'+para([run(left,{b:true,sz:16,color:'1F3864'}),tab(),run(right,{sz:16,color:'5A6675'})],{tabs:[{type:'right',pos:10200}],border:{bottom:{sz:8,color:'1F3864',space:3}}})+'</w:hdr>'; }
  // opts : {title, body (xml), images:[{rid,data(Uint8Array)}], footer, headerL, headerR, font}
  function build(o){
    var font=o.font||'Arial', files=[], rels='<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" Target="header1.xml"/>';
    (o.images||[]).forEach(function(im){ rels+='<Relationship Id="'+im.rid+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/'+im.rid+'.png"/>'; files.push({name:'word/media/'+im.rid+'.png',data:im.data}); });
    var sect='<w:sectPr><w:headerReference w:type="default" r:id="rId3"/><w:footerReference w:type="default" r:id="rId2"/><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1050" w:right="850" w:bottom="1000" w:left="850" w:header="450" w:footer="450" w:gutter="0"/></w:sectPr>';
    var doc='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document '+NS+'><w:body>'+o.body+sect+'</w:body></w:document>';
    var ct='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Default Extension="png" ContentType="image/png"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/><Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>';
    var rr='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>';
    var core='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>'+esc(o.title||'')+'</dc:title><dc:creator>MathChrono-Quiz</dc:creator><cp:lastModifiedBy>MathChrono-Quiz</cp:lastModifiedBy><dcterms:created xsi:type="dcterms:W3CDTF">2026-10-01T08:00:00Z</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">2026-10-01T08:00:00Z</dcterms:modified></cp:coreProperties>';
    var app='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"><Application>MathChrono-Quiz</Application></Properties>';
    files=[{name:'[Content_Types].xml',data:ct},{name:'_rels/.rels',data:rr},{name:'word/document.xml',data:doc},{name:'word/_rels/document.xml.rels',data:'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'+rels+'</Relationships>'},{name:'word/styles.xml',data:styles(font)},{name:'word/footer1.xml',data:footerXml(o.footer||'')},{name:'word/header1.xml',data:headerXml(o.headerL||'',o.headerR||'')},{name:'docProps/core.xml',data:core},{name:'docProps/app.xml',data:app}].concat(files);
    return zip(files);
  }
  G.MQ_DOCX={zip:zip,crc32:crc32,png:png,Raster:Raster,esc:esc,run:run,br:br,tab:tab,vec:vec,rich:rich,para:para,cell:cell,table:table,image:image,build:build};
})(typeof globalThis!=='undefined'?globalThis:this);


/* ── 40-som-core.js ── */
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

/* ── 50-som-engine.js ── */
/* ===== MQ_SOM : moteur d'épreuve sommative (structure officielle) ===== */
(function(G){
  'use strict';
  var M=G.MQ_SOM_MOD, MOD=M.MOD, WORLDS=M.WORLDS, fmt=M.fmt, D=G.MQ_DOCX;
  function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; var t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function vecH(s){ return s.replace(/\u2192([A-Za-z0-9'][A-Za-z0-9']{0,3})/g,'<span class="vec"><span>$1</span></span>'); }
  function pts(x){ return (Math.round(x*2)/2%1===0)?String(Math.round(x*2)/2):String(Math.round(x*2)/2).replace('.',','); }


  function fmtTxt(E){ var n=E.problems.length; return n===2?
      'Un support, une t\u00e2che et deux probl\u00e8mes ind\u00e9pendants : m\u00eame structure que l\u2019\u00e9preuve de math\u00e9matiques au BEPC, ramen\u00e9e \u00e0 deux probl\u00e8mes pour les s\u00e9ries litt\u00e9raires. Le probl\u00e8me 1 contr\u00f4le la compr\u00e9hension du support ; le probl\u00e8me 2 apporte des compl\u00e9ments d\u2019information.':
      'Un support, une t\u00e2che et trois probl\u00e8mes ind\u00e9pendants (format de l\u2019\u00e9preuve de math\u00e9matiques au BEPC, guide du programme). Le probl\u00e8me 1 contr\u00f4le la compr\u00e9hension du support ; les probl\u00e8mes 2 et 3 apportent des compl\u00e9ments d\u2019information.'; }
  function partsWord(n){ return ['','une','deux','trois','quatre','cinq','six','sept','huit'][n]||String(n); }
  function fmtDur(m){ m=+m||0; if(!m) return ''; var h=Math.floor(m/60), r=m%60; if(!h) return m+' min'; if(!r) return h+' h'; return h+' h '+(r<10?'0':'')+r; }
  function fld(v,w){ return v?'<span class="ev-fill">'+esc(v)+'</span>':'<span class="ev-line" style="width:'+w+'mm"></span>'; }
  function idHTML(ent,dur){ ent=ent||{}; var L=function(w){ return '<span class="ev-line" style="width:'+w+'mm"></span>'; };
    return '<div>\u00c9tablissement : '+fld(ent.etab,62)+'</div>'+
      '<div>Ann\u00e9e scolaire : '+fld(ent.annee,24)+' &nbsp; Mati\u00e8re : '+fld(ent.matiere,32)+'</div>'+
      '<div>Classe : '+fld(ent.classe,20)+' &nbsp; Coefficient : '+fld(ent.coef,12)+' &nbsp; Dur\u00e9e : <b>'+esc(fmtDur(dur))+'</b></div>'+
      '<div>Nom : '+L(58)+'</div><div>Pr\u00e9nom : '+L(58)+'</div>'+
      '<div>Date : '+L(24)+' &nbsp; D\u00e9but : '+L(9)+' h '+L(7)+' &nbsp; Fin : '+L(9)+' h '+L(7)+'</div>'; }
  function idWord(ent,dur){ ent=ent||{}; var P=D.para, R=D.run, u=function(n){ return '_'.repeat(n); };
    var wf=function(v,n){ return v?R(v,{b:true,u:true,sz:20}):R(u(n),{sz:20}); }, row=function(parts){ return P(parts,{before:70,after:30}); };
    return row([R('\u00c9tablissement : ',{sz:20}),wf(ent.etab,30)])+
      row([R('Ann\u00e9e scolaire : ',{sz:20}),wf(ent.annee,11),R('    Mati\u00e8re : ',{sz:20}),wf(ent.matiere,13)])+
      row([R('Classe : ',{sz:20}),wf(ent.classe,9),R('    Coefficient : ',{sz:20}),wf(ent.coef,5),R('    Dur\u00e9e : ',{sz:20}),R(fmtDur(dur),{b:true,sz:20})])+
      row([R('Nom : ',{sz:20}),R(u(36),{sz:20})])+row([R('Pr\u00e9nom : ',{sz:20}),R(u(34),{sz:20})])+
      row([R('Date : ',{sz:20}),R(u(11),{sz:20}),R('   D\u00e9but : ',{sz:20}),R(u(4)+' h '+u(3),{sz:20}),R('   Fin : ',{sz:20}),R(u(4)+' h '+u(3),{sz:20})]); }
  function infoLine(ent,dur){ ent=ent||{}; var a=[]; if(ent.matiere) a.push('Mati\u00e8re : '+ent.matiere); if(ent.coef) a.push('Coefficient : '+ent.coef); if(dur) a.push('Dur\u00e9e : '+fmtDur(dur)); if(ent.etab) a.push(ent.etab); if(ent.annee) a.push('Ann\u00e9e scolaire '+ent.annee); return a.join(' \u00b7 '); }
  function matUp(ent){ return ((ent&&ent.matiere)||'Math\u00e9matiques').toUpperCase(); }

  /* ---------- modules disponibles ---------- */
  /* durée habituelle de l’épreuve (minutes) : 1er cycle (5e, 4e, 3e) 2 h ; 6e 1 h 30 ; 2nde et 1ère C/D 3 h ; Tle C/D 4 h ; séries littéraires 1 h 30 avec 2 problèmes */
  var DUR={'6e':90,'5e':120,'4e':120,'3e':120,'2nde A':90,'2nde C':180,'2nde D':180,'1\u00e8re A':90,'1\u00e8re C':180,'1\u00e8re D':180,'Tle A':90,'Tle C':240,'Tle D':240};
  function defaultDur(c){ return DUR[c]||120; }
  /* nombre de consignes PAR PROBLÈME selon la durée : 1 consigne par problème toutes les 30 min (2 h : 4 ; 3 h : 6 ; 4 h : 8 ; 1 h 30 : 3) */
  /* nombre de problèmes : 3 partout, 2 dans les séries littéraires. Le nombre total de consignes reste d’environ une toutes les 10 min :
     3 problèmes → dur/30 consignes par problème ; 2 problèmes → 1,5 × dur/30 (1 h 30 : 2 × 5 = 10 consignes) */
  var NPROB={'2nde A':2,'1\u00e8re A':2,'Tle A':2};
  function nProb(c){ return NPROB[c]||3; }
  function perProb(dur,cls){ var np=nProb(cls); return Math.max(3,Math.min(8,Math.round(3*(+dur||120)/(30*np)))); }
  function durOfPer(per,cls){ return per*10*nProb(cls); }
  function sizing(dur,cls){ var np=nProb(cls), per=perProb(dur,cls), pp=Math.ceil(per/2), N=np*pp, need=Math.ceil(N/2); return {np:np,per:per,pp:pp,N:N,need:need,cap:Math.min(N,need+1),total:np*per}; }
  var ALIAS={'2nde C':'2nde D'}, ORDER=['6e','5e','4e','3e','2nde A','2nde D','2nde C','1\u00e8re D','1\u00e8re C','1\u00e8re A','Tle D','Tle C','Tle A'];
  function baseCls(c){ return ALIAS[c]||c; }
  function toBank(cls,t){ return ALIAS[cls]?t.replace(/^2C \u2014/,'2D \u2014'):t; }
  function fromBank(cls,t){ return ALIAS[cls]?t.replace(/^2D \u2014/,'2C \u2014'):t; }
  function modulesOf(cls){ var b=baseCls(cls); return Object.keys(MOD).filter(function(k){ return MOD[k].cls===b; }); }
  function modOfTheme(cls,theme){ var ks=modulesOf(cls), th=toBank(cls,theme); for(var i=0;i<ks.length;i++){ var m=MOD[ks[i]]; if(m.theme===th||(m.themes&&m.themes.indexOf(th)>=0)) return ks[i]; } return null; }
  function availableThemes(cls){ var out=[]; modulesOf(cls).forEach(function(k){ var m=MOD[k]; (m.themes||[m.theme]).forEach(function(t){ out.push({theme:fromBank(cls,t),mod:k,label:m.label}); }); }); return out; }
  function classes(){ var I=(G.MQ_INDEX&&G.MQ_INDEX.som)||{}; return ORDER.filter(function(c){ return modulesOf(c).length>0||!!I[baseCls(c)]; }); }

  /* ---------- répartition des points (règle de trois, au demi-point) ---------- */
  function alloc(counts,total){ var S=counts.reduce(function(a,b){ return a+b; },0), T=total*2; if(!S) return counts.map(function(){ return 0; });
    var raw=counts.map(function(c){ return c*T/S; }), fl=raw.map(Math.floor), rem=T-fl.reduce(function(a,b){ return a+b; },0),
        ord=raw.map(function(v,i){ return {i:i,f:v-Math.floor(v)}; }).sort(function(a,b){ return b.f-a.f||a.i-b.i; });
    for(var k=0;k<rem;k++) fl[ord[k].i]++; return fl.map(function(v){ return v/2; }); }

  /* ---------- construction de l'épreuve ---------- */
  function buildEpreuve(o){
    var cls=o.cls, seed=o.seed>>>0, rnd=mulberry32(seed), W=WORLDS[Math.floor(rnd()*WORLDS.length)], T=M.genTerrain(rnd);
    var order=availableThemes(cls).map(function(x){ return x.theme; }), tl=(o.themes||[]).slice().sort(function(a,b){ return order.indexOf(a)-order.indexOf(b); }); /* ordre canonique : ne d\u00e9pend pas de l\u2019ordre des clics */
    var keys=[]; tl.forEach(function(t){ var k=modOfTheme(cls,t); if(k&&keys.indexOf(k)<0) keys.push(k); });
    var dur=o.dur||defaultDur(cls), SZ=sizing(dur,cls), per=SZ.per, NP=SZ.np, pp=SZ.pp, N=SZ.N, need=SZ.need;
    keys=keys.slice(0,SZ.cap); var auto=[], pool=M.shuffle(rnd,modulesOf(cls).filter(function(k){ return keys.indexOf(k)<0; }));
    while(keys.length<need&&pool.length){ var k=pool.shift(); keys.push(k); auto.push(k); }
    // ordre : P1 = module le plus adapté à un support ; le reste mélangé
    var wk=keys.map(function(k){ return {k:k,w:MOD[k].w1+rnd()*1.2}; }).sort(function(a,b){ return b.w-a.w; }).map(function(x){ return x.k; });
    var ordered=wk.slice(0,1).concat(M.shuffle(rnd,wk.slice(1)));
    // parties retenues par module (chaque module offre 2 parties de 2 consignes)
    var S=ordered.length, take={}, units=[];
    if(S<=need){ var rem=N; ordered.forEach(function(k){ take[k]=Math.max(0,Math.min(2,rem)); rem-=take[k]; }); }
    else { ordered.forEach(function(k){ take[k]=1; }); var extra=N-S; ordered.forEach(function(k){ if(extra>0){ take[k]=2; extra--; } }); }
    ordered.forEach(function(k){ for(var pi=0;pi<take[k];pi++) units.push({k:k,pi:pi}); });
    var chunkOf=function(idx){ return Math.min(NP-1,Math.floor(idx/pp)); }, split={};
    ordered.forEach(function(k){ if(take[k]===2){ var i0=units.findIndex(function(u){ return u.k===k&&u.pi===0; }), i1=units.findIndex(function(u){ return u.k===k&&u.pi===1; }); split[k]=chunkOf(i0)!==chunkOf(i1); } });
    var fixMin=function(t){ return String(t).replace(/([\s(\[{;,]|^)-(?=\d)/g,'$1\u2212'); };
    var built={}; ordered.forEach(function(k,i){ if(!take[k]) return; built[k]=MOD[k].build({rnd:mulberry32(seed+977*(i+1)),W:W,T:T,standalone2:!!split[k]}); built[k].parts.forEach(function(pt){ if(pt.intro) pt.intro=fixMin(pt.intro); }); });
    var probs=[];
    for(var j=0;j<NP;j++){
      var remain=per, cps=[];
      units.slice(j*pp,(j+1)*pp).forEach(function(u){ var b=built[u.k], pt=b.parts[u.pi], cs=pt.cons.slice(0,Math.max(0,remain)); if(!cs.length) return; remain-=cs.length; cps.push({k:u.k,pi:u.pi,b:b,part:pt,cons:cs}); });
      if(!cps.length) continue;
      var mods=[]; cps.forEach(function(c){ if(mods.indexOf(c.k)<0) mods.push(c.k); });
      var allCons=[]; cps.forEach(function(c){ allCons=allCons.concat(c.cons); });
      if(mods.length>1){
        var LAB='ABCDEFGH', blocks=[]; cps.forEach(function(c){ var last=blocks[blocks.length-1]; if(last&&last.k===c.k) last.items.push(c); else blocks.push({k:c.k,items:[c]}); });
        var mp=blocks.map(function(bk,bi){ var sq=bk.items.map(function(c,ii){ return {intro:c.part.intro||'',table:c.part.table||null,fig:c.part.fig||((ii===0&&(c.pi===0||split[c.k]))?(c.b.fig||null):null)}; }).filter(function(q){ return q.intro||q.table||q.fig; }), cs=[]; bk.items.forEach(function(c){ cs=cs.concat(c.cons); });
          return {label:'Partie '+LAB[bi],seq:sq,intros:sq.map(function(q){ return q.intro; }).filter(Boolean),fig:sq.length?sq[0].fig:null,tables:sq.map(function(q){ return q.table; }).filter(Boolean),cons:cs}; });
        var flat=[]; mp.forEach(function(pt){ if(!pt.seq.length) flat.push({label:pt.label,intro:'',table:null,fig:null}); pt.seq.forEach(function(q,qi){ flat.push({label:qi===0?pt.label:'',intro:q.intro,table:q.table,fig:q.fig}); }); });
        probs.push({themes:mods.map(function(k){ return MOD[k].label; }),intros:[],figs:[],tables:[],cons:allCons,mixedParts:mp,seq:flat,gs:mods.map(function(k){ return built[k]._g; })});
      } else {
        var b=cps[0].b;
        probs.push({themes:[MOD[mods[0]].label],gs:[cps[0].b._g],intros:cps.map(function(c){ return c.part.intro; }).filter(Boolean),figs:[b.fig].filter(Boolean),tables:cps.map(function(c){ return c.part.table; }).filter(Boolean),cons:allCons,
          seq:cps.map(function(c){ return {intro:c.part.intro||'',table:c.part.table||null,fig:c.part.fig||(c.pi===0?(b.fig||null):null)}; }).filter(function(q){ return q.intro||q.table||q.fig; })});
      }
    }
    // numérotation
    var all=[]; probs.forEach(function(p,i){ p.cons.forEach(function(c,j){ c.id=(i+1)+'.'+(j+1); c.na=c.A.length; c.nm=c.M.length; c.no=c.O.length; all.push(c); }); });
    var pa=alloc(all.map(function(c){ return c.na; }),20), pm=alloc(all.map(function(c){ return c.nm; }),30), po=alloc(all.map(function(c){ return c.no; }),40);
    all.forEach(function(c,i){ c.pa=pa[i]; c.pm=pm[i]; c.po=po[i]; c.pt=pa[i]+pm[i]+po[i]; });
    probs.forEach(function(p){ p.pa=p.cons.reduce(function(s,c){ return s+c.pa; },0); p.pm=p.cons.reduce(function(s,c){ return s+c.pm; },0); p.po=p.cons.reduce(function(s,c){ return s+c.po; },0); p.pt=p.pa+p.pm+p.po; });
    var org=W.org, Org=org.charAt(0).toUpperCase()+org.slice(1);
    var E={cls:cls,seed:seed,world:W,terrain:T,auto:auto.map(function(k){ return MOD[k].label; }),mixed:probs.some(function(p){ return !!p.mixedParts; }),sz:SZ,
      support:{titre:W.titre,texte:Org+' souhaite '+W.projet+'. Pour mener à bien ce projet, il doit répondre à plusieurs préoccupations, présentées dans les '+partsWord(NP)+' problèmes ci-dessous. Les informations nécessaires au premier problème sont rassemblées dans le document 1.'},
      tache:'Tu es élève de '+cls+'. '+Org+' a besoin de ton aide : résous les '+partsWord(NP)+' problèmes suivants pour répondre à ses préoccupations.',
      problems:probs,all:all,tot:{A:20,M:30,O:40,P:10},dur:dur,ent:o.ent||{},calc:(o.calc===undefined||o.calc===null)?(cls!=='6e'&&cls!=='5e'):!!o.calc};
    return E;
  }

  /* ---------- figures : scène commune SVG / PNG ---------- */
  function triScene(f){
    var A=[350,50],B=[70,365],C=[630,365], navy='#1F3864', or='#E65C00', sh=[];
    sh.push({t:'poly',pts:[A,B,C],fill:'#F6F9FD'}); [[A,B],[B,C],[C,A]].forEach(function(s){ sh.push({t:'line',a:s[0],b:s[1],w:3.2,c:navy}); });
    sh.push({t:'text',s:'A',x:350,y:36,z:26,m:'middle'},{t:'text',s:'B',x:44,y:392,z:26,m:'middle'},{t:'text',s:'C',x:656,y:392,z:26,m:'middle'});
    var u=f.unit?' '+f.unit:'';
    if(f.a!=null) sh.push({t:'text',s:f.a+u,x:158,y:214,z:20,m:'middle'}); if(f.b!=null) sh.push({t:'text',s:f.b+u,x:545,y:214,z:20,m:'middle'}); if(f.c!=null) sh.push({t:'text',s:f.c+u,x:350,y:398,z:20,m:'middle'});
    if(f.angA) sh.push({t:'text',s:f.angA,x:350,y:112,z:18,m:'middle'});
    if(f.mn){ var k=f.mn.p/f.mn.q, Mp=[A[0]+k*(B[0]-A[0]),A[1]+k*(B[1]-A[1])], Np=[A[0]+k*(C[0]-A[0]),A[1]+k*(C[1]-A[1])];
      sh.push({t:'line',a:Mp,b:Np,w:4,c:or},{t:'dot',p:Mp,r:5,c:or},{t:'dot',p:Np,r:5,c:or},{t:'text',s:'M',x:Mp[0]-24,y:Mp[1]+8,z:24,m:'middle'},{t:'text',s:'N',x:Np[0]+24,y:Np[1]+8,z:24,m:'middle'},{t:'text',s:'AM = '+f.mn.AM+u,x:350,y:Mp[1]-30,z:18,m:'middle'}); }
    if(f.ij){ var I=[(A[0]+B[0])/2,(A[1]+B[1])/2], J=[(A[0]+C[0])/2,(A[1]+C[1])/2];
      sh.push({t:'line',a:I,b:J,w:4,c:or},{t:'dot',p:I,r:5,c:or},{t:'dot',p:J,r:5,c:or},{t:'text',s:'I',x:I[0]-22,y:I[1]+8,z:24,m:'middle'},{t:'text',s:'J',x:J[0]+22,y:J[1]+8,z:24,m:'middle'}); }
    return {w:700,h:420,shapes:sh};
  }
  function sceneSVG(sc){ var o='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+sc.w+' '+sc.h+'" width="100%" style="max-width:360px">';
    sc.shapes.forEach(function(s){ if(s.t==='poly') o+='<polygon points="'+s.pts.map(function(p){ return p.join(','); }).join(' ')+'" fill="'+s.fill+'"/>';
      else if(s.t==='line') o+='<line x1="'+s.a[0]+'" y1="'+s.a[1]+'" x2="'+s.b[0]+'" y2="'+s.b[1]+'" stroke="'+s.c+'" stroke-width="'+s.w+'" stroke-linecap="round"/>';
      else if(s.t==='dot') o+='<circle cx="'+s.p[0]+'" cy="'+s.p[1]+'" r="'+s.r+'" fill="'+s.c+'"/>';
      else if(s.t==='text') o+='<text x="'+s.x+'" y="'+s.y+'" font-family="Arial,Helvetica,sans-serif" font-size="'+(s.z*1.45)+'" font-weight="'+(s.z>22?'700':'400')+'" text-anchor="'+s.m+'" fill="#111">'+esc(s.s)+'</text>'; });
    return o+'</svg>'; }
  function hex(c){ return [parseInt(c.substr(1,2),16),parseInt(c.substr(3,2),16),parseInt(c.substr(5,2),16)]; }
  function sceneRaster(sc){ var R=new D.Raster(sc.w,sc.h); sc.shapes.forEach(function(s){ if(s.t==='poly') R.poly(s.pts,hex(s.fill)); });
    sc.shapes.forEach(function(s){ if(s.t==='line') R.line(s.a[0],s.a[1],s.b[0],s.b[1],s.w,hex(s.c)); else if(s.t==='dot') R.dot(s.p[0],s.p[1],s.r,hex(s.c)); else if(s.t==='text') R.text(s.s,s.x,s.y,s.z,[17,17,17],s.m==='middle'?'middle':'start'); });
    return R.toPNG(); }
  function repScene(f){ // repère orthonormé : points et segments
    var W=700,H=420,mx=44,my=34, xs=f.pts.map(function(p){ return p.x; }), ys=f.pts.map(function(p){ return p.y; }),
        x0=Math.min(0,Math.min.apply(null,xs))-1, x1=Math.max(0,Math.max.apply(null,xs))+1, y0=Math.min(0,Math.min.apply(null,ys))-1, y1=Math.max(0,Math.max.apply(null,ys))+1,
        asp=(W-2*mx)/(H-2*my);
    if((x1-x0)<asp*(y1-y0)){ var need=Math.ceil(asp*(y1-y0)), add=need-(x1-x0); x0-=Math.floor(add/2); x1+=Math.ceil(add/2); } else if((y1-y0)<(x1-x0)/asp){ var needy=Math.ceil((x1-x0)/asp), addy=needy-(y1-y0); y0-=Math.floor(addy/2); y1+=Math.ceil(addy/2); }
    var k=Math.min((W-2*mx)/(x1-x0),(H-2*my)/(y1-y0)), ox=(W-k*(x1-x0))/2, oy=(H-k*(y1-y0))/2,
        X=function(x){ return ox+(x-x0)*k; }, Y=function(y){ return H-(oy+(y-y0)*k); }, sh=[];
    for(var gx=Math.ceil(x0);gx<=Math.floor(x1);gx++) sh.push({t:'line',a:[X(gx),Y(y0)],b:[X(gx),Y(y1)],w:1,c:'#D5DCE8'});
    for(var gy=Math.ceil(y0);gy<=Math.floor(y1);gy++) sh.push({t:'line',a:[X(x0),Y(gy)],b:[X(x1),Y(gy)],w:1,c:'#D5DCE8'});
    sh.push({t:'line',a:[X(x0),Y(0)],b:[X(x1),Y(0)],w:2.4,c:'#333333'},{t:'line',a:[X(0),Y(y0)],b:[X(0),Y(y1)],w:2.4,c:'#333333'});
    for(var tx=Math.ceil(x0);tx<=Math.floor(x1);tx++) if(tx!==0&&(x1-x0<=14||tx%2===0)) sh.push({t:'text',s:String(tx),x:X(tx),y:Y(0)+20,z:11,m:'middle'});
    for(var ty=Math.ceil(y0);ty<=Math.floor(y1);ty++) if(ty!==0&&(y1-y0<=14||ty%2===0)) sh.push({t:'text',s:String(ty),x:X(0)-8,y:Y(ty)+5,z:11,m:'end'});
    sh.push({t:'text',s:'O',x:X(0)-10,y:Y(0)+18,z:12,m:'end'});
    (f.edges||[]).forEach(function(e){ var a=f.pts[e[0]], b=f.pts[e[1]]; sh.push({t:'line',a:[X(a.x),Y(a.y)],b:[X(b.x),Y(b.y)],w:3.2,c:'#1F3864'}); });
    f.pts.forEach(function(p){ sh.push({t:'dot',p:[X(p.x),Y(p.y)],r:5.5,c:'#E65C00'},{t:'text',s:p.n,x:X(p.x)+(p.dx||14),y:Y(p.y)+(p.dy||-12),z:20,m:'middle'}); });
    return {w:W,h:H,shapes:sh};
  }
  function sectScene(f){ // secteur circulaire d'angle f.deg
    var cx=350,cy=345,R=250, th=f.deg*Math.PI/180, sh=[], pts=[], n=64;
    for(var i=0;i<=n;i++){ var a=th*i/n; pts.push([cx+R*Math.cos(a),cy-R*Math.sin(a)]); }
    sh.push({t:'poly',pts:[[cx,cy]].concat(pts),fill:'#FFF3E6'});
    for(i=0;i<n;i++) sh.push({t:'line',a:pts[i],b:pts[i+1],w:4,c:'#E65C00'});
    sh.push({t:'line',a:[cx,cy],b:pts[0],w:3,c:'#1F3864'},{t:'line',a:[cx,cy],b:pts[n],w:3,c:'#1F3864'},{t:'dot',p:[cx,cy],r:5,c:'#1F3864'});
    sh.push({t:'text',s:'O',x:cx-20,y:cy+22,z:22,m:'middle'},{t:'text',s:'A',x:pts[0][0]+22,y:pts[0][1]+8,z:22,m:'middle'},{t:'text',s:'B',x:pts[n][0]+(f.deg>90?-22:22),y:pts[n][1]-8,z:22,m:'middle'});
    sh.push({t:'text',s:f.deg+'\u00b0',x:cx+Math.cos(th/2)*80,y:cy-Math.sin(th/2)*80+8,z:20,m:'middle'},{t:'text',s:'R = '+f.R+' m',x:cx+Math.cos(th/2)*(R*0.6),y:cy-Math.sin(th/2)*(R*0.6)-14,z:18,m:'middle'});
    return {w:700,h:420,shapes:sh};
  }
  function crossScene(f){ // deux droites sécantes en O, angle AOC = f.x
    var cx=350,cy=205,R=165,a0=200,x=f.x,navy='#1F3864',or='#E65C00',sh=[],P=function(deg,r){ var t=deg*Math.PI/180; return [cx+r*Math.cos(t),cy-r*Math.sin(t)]; };
    [['A',a0],['C',a0+x],['B',a0+180],['D',a0+x+180]].forEach(function(d){ var en=P(d[1],R), lb=P(d[1],R+30); sh.push({t:'line',a:[cx,cy],b:en,w:3.2,c:navy},{t:'text',s:d[0],x:lb[0],y:lb[1]+9,z:24,m:'middle'}); });
    sh.push({t:'dot',p:[cx,cy],r:5,c:navy},{t:'text',s:'O',x:cx+22,y:cy+32,z:22,m:'middle'});
    for(var g=a0;g<a0+x;g+=3) sh.push({t:'line',a:P(g,58),b:P(Math.min(g+3,a0+x),58),w:3.2,c:or});
    var lbl=P(a0+x/2,94); sh.push({t:'text',s:x+'\u00b0',x:lbl[0],y:lbl[1]+7,z:19,m:'middle'});
    return {w:700,h:420,shapes:sh};
  }
  function figScene(f){ return f?(f.type==='tri'?triScene(f):(f.type==='rep'?repScene(f):(f.type==='sect'?sectScene(f):(f.type==='cross'?crossScene(f):null)))):null; }

  /* ---------- HTML (impression / PDF) ---------- */
  function tableHTML(t){ return '<table class="sm-tab"><tr>'+t.head.map(function(h,i){ return '<th>'+vecH(esc(h))+'</th>'; }).join('')+'</tr>'+t.rows.map(function(r){ return '<tr>'+r.map(function(c,i){ return (i===0?'<th>':'<td>')+esc(c)+(i===0?'</th>':'</td>'); }).join('')+'</tr>'; }).join('')+'</table>'; }
  function line(w){ return '<span class="ev-line" style="width:'+w+'mm"></span>'; }
  function headHTML(E,ref,corr){
    return '<div class="ev-top"><b>MathChrono-Quiz</b><span>R\u00e9f. '+ref+'</span></div>'+
      '<div class="ev-title">DEVOIR SURVEILL\u00c9 DE '+esc(matUp(E.ent))+(corr?' \u2014 CORRIG\u00c9 ET BAR\u00c8ME':'')+'</div>'+
      '<div class="ev-sub">Classe de '+esc(E.ent&&E.ent.classe?E.ent.classe:E.cls)+' \u00b7 Dur\u00e9e : '+esc(fmtDur(E.dur))+' \u00b7 Calculatrice '+(E.calc?'autoris\u00e9e':'non autoris\u00e9e')+'</div>'+(corr&&infoLine(E.ent,E.dur)?'<div class="ev-sub" style="margin-top:-4px">'+esc(infoLine(E.ent,E.dur))+'</div>':'');
  }
  function sujetHTML(E,ref){
    var h='<div class="ev-doc sm-doc">'+headHTML(E,ref,false);
    h+='<table class="ev-head"><tr><td class="ev-id">'+idHTML(E.ent,E.dur)+'</td>'+
      '<td class="ev-teach"><div class="ev-th">R\u00e9serv\u00e9 \u00e0 l\u2019enseignant</div>'+
      '<table class="sm-note"><tr><td>Analyser (Ca)</td><td></td><td>/ 20</td></tr><tr><td>Math\u00e9matiser (Cm)</td><td></td><td>/ 30</td></tr><tr><td>Op\u00e9rer (Co)</td><td></td><td>/ 40</td></tr><tr><td>Perfectionnement (Cp)</td><td></td><td>/ 10</td></tr><tr><td><b>Total</b></td><td></td><td>/ 100</td></tr><tr><td><b>Note</b></td><td></td><td>/ 20</td></tr></table>'+
      '<div class="ev-lvl">Niveau de ma\u00eetrise :<br><span class="nw"><span class="ev-box"></span>Non atteint</span> &nbsp; <span class="nw"><span class="ev-box"></span>Partielle</span><br><span class="nw"><span class="ev-box"></span>Minimale</span> &nbsp; <span class="nw"><span class="ev-box"></span>Maximale</span></div>'+
      '<div>Appr\u00e9ciation :</div><div class="ev-ln"></div><div class="ev-ln"></div></td></tr></table>';
    h+='<div class="ev-cons"><b>Consignes :</b> r\u00e9dige tes r\u00e9ponses sur ta copie, en num\u00e9rotant chaque r\u00e9ponse comme dans le sujet. Justifie tes calculs et soigne la pr\u00e9sentation : elle est prise en compte dans la notation. Les '+partsWord(E.problems.length)+' probl\u00e8mes sont ind\u00e9pendants.</div>';
    var P1=E.problems[0], sc=figScene(P1.seq[0]&&P1.seq[0].fig);
    h+='<div class="sm-h2">SITUATION D\u2019\u00c9VALUATION : '+esc(E.support.titre.toUpperCase())+'</div>';
    h+='<p class="sm-p"><b>Support.</b> '+vecH(esc(E.support.texte))+'</p>';
    h+='<div class="sm-doc1"><div class="sm-doc1t">Document 1</div>'+(sc?'<div class="sm-fig">'+sceneSVG(sc)+'<div class="sm-cap">Figure \u00e0 main lev\u00e9e, non \u00e0 l\u2019\u00e9chelle.</div></div>':'')+P1.seq.map(function(q,qi){ var f2=(qi>0&&q.fig)?figScene(q.fig):null; return (q.intro?'<p class="sm-p">'+(q.label?'<b>'+esc(q.label)+'.</b> ':'')+vecH(esc(q.intro))+'</p>':'')+(f2?'<div class="sm-fig sm-fig2">'+sceneSVG(f2)+'<div class="sm-cap">Figure \u00e0 main lev\u00e9e, non \u00e0 l\u2019\u00e9chelle.</div></div>':'')+(q.table?tableHTML(q.table):''); }).join('')+'</div>';
    h+='<p class="sm-p"><b>T\u00e2che.</b> '+esc(E.tache)+'</p>';
    E.problems.forEach(function(p,i){
      h+='<div class="sm-pb"><div class="sm-h2">PROBL\u00c8ME '+(i+1)+'</div>';
      var consH=function(cs){ return cs.map(function(c){ return '<div class="sm-c"><b>'+c.id+'</b><span>'+vecH(esc(c.t))+'</span></div>'; }).join(''); };
      if(p.mixedParts&&i>0){ h+='<p class="sm-p"><i>Ce probl\u00e8me comporte '+partsWord(p.mixedParts.length)+' parties ind\u00e9pendantes.</i></p>'; p.mixedParts.forEach(function(pt){ h+='<div class="sm-part"><div class="sm-partt">'+pt.label+'</div>'+pt.seq.map(function(q,qi){ var s3=figScene(q.fig); return (q.intro?'<p class="sm-p">'+(qi===0?'<b>Compl\u00e9ment d\u2019information.</b> ':'')+vecH(esc(q.intro))+'</p>':'')+(s3?'<div class="sm-fig sm-fig2">'+sceneSVG(s3)+'<div class="sm-cap">Figure \u00e0 main lev\u00e9e, non \u00e0 l\u2019\u00e9chelle.</div></div>':'')+(q.table?tableHTML(q.table):''); }).join('')+consH(pt.cons)+'</div>'; }); }
      else {
      if(i>0){ h+=p.seq.map(function(q,qi){ var s2=figScene(q.fig); return (q.intro?'<p class="sm-p">'+(qi===0?'<b>Compl\u00e9ment d\u2019information.</b> ':'')+vecH(esc(q.intro))+'</p>':'')+(s2?'<div class="sm-fig sm-fig2">'+sceneSVG(s2)+'<div class="sm-cap">Figure \u00e0 main lev\u00e9e, non \u00e0 l\u2019\u00e9chelle.</div></div>':'')+(q.table?tableHTML(q.table):''); }).join(''); }
      else h+='<p class="sm-p"><i>Exploite les informations du document 1.</i></p>';
      if(p.mixedParts&&i===0) h+=p.mixedParts.map(function(pt){ return '<div class="sm-part"><div class="sm-partt">'+pt.label+'</div>'+consH(pt.cons)+'</div>'; }).join(''); else h+=consH(p.cons); }
      h+='</div>';
    });
    return h+'<div class="ev-foot">G\u00e9n\u00e9r\u00e9 par MathChrono-Quiz \u00b7 R\u00e9f. '+ref+'</div></div>';
  }
  function corrigeHTML(E,ref){
    var h='<div class="ev-doc sm-doc">'+headHTML(E,ref,true);
    h+='<div class="sm-h2">1. Structure de l\u2019\u00e9preuve</div><table class="sm-info"><tr><th>Format</th><td>'+esc(fmtTxt(E))+'</td></tr>'+
      '<tr><th>Situation</th><td>'+esc(E.support.titre)+'</td></tr><tr><th>Th\u00e8mes \u00e9valu\u00e9s</th><td>'+E.problems.map(function(p,i){ return 'Probl\u00e8me '+(i+1)+' : '+esc(p.themes.join(' + ')); }).join(' \u00b7 ')+(E.auto.length?'<br><i>Compl\u00e9t\u00e9 automatiquement avec : '+esc(E.auto.join(', '))+'.</i>':'')+'</td></tr></table>';
    h+='<div class="sm-h2">2. R\u00e9partition des points</div><p class="sm-p">Les points de chaque crit\u00e8re (Analyser 20, Math\u00e9matiser 30, Op\u00e9rer 40) sont r\u00e9partis, par la r\u00e8gle de trois, selon le nombre de d\u00e9marches attendues dans chaque consigne ; le perfectionnement vaut 10 points.</p>';
    h+='<table class="sm-bar"><tr><th>Probl\u00e8me</th><th>Analyser</th><th>Math\u00e9matiser</th><th>Op\u00e9rer</th><th>Total</th></tr>'+E.problems.map(function(p,i){ return '<tr><td>Probl\u00e8me '+(i+1)+'</td><td>'+pts(p.pa)+'</td><td>'+pts(p.pm)+'</td><td>'+pts(p.po)+'</td><td><b>'+pts(p.pt)+'</b></td></tr>'; }).join('')+
      '<tr class="sm-tot"><td>Total crit\u00e8res minimaux</td><td>20</td><td>30</td><td>40</td><td>90</td></tr><tr><td colspan="4">Perfectionnement (Cp) : concision 3 pts, propret\u00e9 4 pts, lisibilit\u00e9 3 pts</td><td>10</td></tr><tr class="sm-tot"><td colspan="4">TOTAL G\u00c9N\u00c9RAL</td><td>100</td></tr></table>';
    h+='<p class="sm-note2"><b>Note sur 20 = total sur 100 \u00f7 5.</b> Exemple : 74 points sur 100 donnent 14,8 sur 20.</p>';
    h+='<div class="sm-h2">3. Appr\u00e9ciation des niveaux de ma\u00eetrise</div><table class="sm-bar"><tr><th>Niveau</th><th>Ca</th><th>Cm</th><th>Co</th><th>Total (sur 90)</th></tr><tr><td>Aucune ma\u00eetrise</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>Ma\u00eetrise partielle</td><td>7</td><td>10</td><td>13</td><td>30</td></tr><tr><td>Ma\u00eetrise minimale</td><td>13</td><td>20</td><td>27</td><td>60</td></tr><tr><td>Ma\u00eetrise maximale</td><td>20</td><td>30</td><td>40</td><td>90</td></tr></table>';
    h+='<p class="sm-note2">R\u00e8gle des 3/4 appliqu\u00e9e au total x des crit\u00e8res minimaux (sur 90) : x &lt; 23 : niveau partiel non atteint \u00b7 23 \u2264 x &lt; 45 : ma\u00eetrise partielle \u00b7 45 \u2264 x &lt; 68 : ma\u00eetrise minimale \u00b7 68 \u2264 x \u2264 90 : ma\u00eetrise maximale.</p>';
    h+='<div class="ev-pb"></div><div class="sm-h2">4. Corrig\u00e9 d\u00e9taill\u00e9</div>';
    E.problems.forEach(function(p,i){
      h+='<div class="sm-h3">Probl\u00e8me '+(i+1)+' \u2014 '+esc(p.themes.join(' + '))+'</div>';
      p.cons.forEach(function(c){
        h+='<div class="sm-cc"><div class="sm-ct"><b>'+c.id+'</b> '+vecH(esc(c.t))+'</div><div class="sm-sol"><b>Solution.</b> '+vecH(esc(c.s))+'</div>'+
        '<table class="sm-dem"><tr><th>Crit\u00e8re</th><th>D\u00e9marches attendues</th><th>Pts</th></tr>'+
        [['Analyser',c.A,c.pa],['Math\u00e9matiser',c.M,c.pm],['Op\u00e9rer',c.O,c.po]].map(function(r){ return '<tr><th>'+r[0]+'</th><td>'+r[1].map(function(x){ return '\u2022 '+vecH(esc(x)); }).join('<br>')+'</td><td>'+pts(r[2])+'</td></tr>'; }).join('')+
        '<tr class="sm-tot"><td colspan="2">Total de la consigne '+c.id+'</td><td>'+pts(c.pt)+'</td></tr></table></div>'; });
    });
    h+='<div class="ev-pb"></div><div class="sm-h2">5. Fiche de notation \u00e0 remplir pour chaque \u00e9l\u00e8ve</div><table class="sm-bar sm-fiche"><tr><th>Consigne</th><th>Ca</th><th>Cm</th><th>Co</th><th>Total</th><th>Observations</th></tr>';
    E.problems.forEach(function(p,i){ p.cons.forEach(function(c){ h+='<tr><td><b>'+c.id+'</b></td><td>\u2026 / '+pts(c.pa)+'</td><td>\u2026 / '+pts(c.pm)+'</td><td>\u2026 / '+pts(c.po)+'</td><td>\u2026 / '+pts(c.pt)+'</td><td></td></tr>'; });
      h+='<tr class="sm-sub"><td><b>Probl\u00e8me '+(i+1)+'</b></td><td>\u2026 / '+pts(p.pa)+'</td><td>\u2026 / '+pts(p.pm)+'</td><td>\u2026 / '+pts(p.po)+'</td><td>\u2026 / '+pts(p.pt)+'</td><td></td></tr>'; });
    h+='<tr class="sm-sub"><td><b>Crit\u00e8res minimaux</b></td><td>\u2026 / 20</td><td>\u2026 / 30</td><td>\u2026 / 40</td><td>\u2026 / 90</td><td></td></tr><tr><td><b>Perfectionnement</b></td><td></td><td></td><td></td><td>\u2026 / 10</td><td>concision \u2026/3 \u00b7 propret\u00e9 \u2026/4 \u00b7 lisibilit\u00e9 \u2026/3</td></tr><tr class="sm-tot"><td><b>TOTAL</b></td><td></td><td></td><td></td><td>\u2026 / 100</td><td>Note : \u2026 / 20 \u00b7 Niveau : \u2610 non atteint \u2610 partiel \u2610 minimal \u2610 maximal</td></tr></table>';
    return h+'<div class="ev-foot">G\u00e9n\u00e9r\u00e9 par MathChrono-Quiz \u00b7 R\u00e9f. '+ref+'</div></div>';
  }
  var CSS='  .ev-fill{display:inline-block;border-bottom:1px solid #222;font-weight:700;padding:0 2mm;min-width:10mm}\n  .sm-h2{background:#1f3864;color:#fff;font-weight:700;font-size:10.5pt;padding:3px 8px;margin:10px 0 6px;break-after:avoid;page-break-after:avoid}\n  .sm-h3{color:#1f3864;font-weight:700;font-size:11pt;margin:10px 0 4px;border-bottom:1px solid #1f3864;break-after:avoid;page-break-after:avoid}\n  .sm-p{margin:4px 0 6px;text-align:justify;font-size:10.5pt}\n  .sm-doc1{border:1px solid #8896b0;padding:6px 10px;margin:6px 0;break-inside:avoid;page-break-inside:avoid}\n  .sm-doc1t{font-weight:700;color:#1f3864;font-size:10pt;text-transform:uppercase;margin-bottom:3px}\n  .sm-fig{text-align:center;margin:4px 0}.sm-fig svg{width:80mm;height:auto}.sm-fig2 svg{width:72mm}\n  .sm-cap{font-size:8pt;color:#555}\n  .sm-pb{break-inside:auto}\n  .sm-part{border-left:3px solid #e65c00;padding-left:8px;margin:6px 0 8px;break-inside:avoid;page-break-inside:avoid}.sm-partt{font-weight:700;color:#e65c00;font-size:10pt;margin-bottom:2px}\n  .sm-c{margin:3px 0 5px 0;padding-left:11mm;text-indent:-11mm;font-size:10.5pt;break-inside:avoid;page-break-inside:avoid}.sm-c b{display:inline-block;width:9mm;text-indent:0}.sm-c span{display:inline}\n  table.sm-tab{border-collapse:collapse;margin:5px auto;font-size:10pt}table.sm-tab th,table.sm-tab td{border:1px solid #444;padding:3px 9px;text-align:center}table.sm-tab th{background:#eef2f8}\n  table.sm-note{border-collapse:collapse;width:100%;margin:3px 0}table.sm-note td{border:1px solid #999;padding:2px 5px;font-size:9pt}table.sm-note td:nth-child(2){width:15mm}table.sm-note td:nth-child(3){width:13mm;text-align:center}\n  table.sm-info,table.sm-bar,table.sm-dem{border-collapse:collapse;width:100%;margin:4px 0;font-size:9.5pt}table.sm-info th,table.sm-info td,table.sm-bar th,table.sm-bar td,table.sm-dem th,table.sm-dem td{border:1px solid #8896b0;padding:3px 6px;vertical-align:top;text-align:left}\n  table.sm-bar th,table.sm-dem tr:first-child th{background:#1f3864;color:#fff}table.sm-info th,table.sm-dem tr th{background:#eef2f8;width:28mm}table.sm-dem tr:first-child th:nth-child(3){width:12mm}table.sm-dem td:last-child{width:12mm;text-align:center}table.sm-bar td:not(:first-child){text-align:center}\n  tr.sm-tot td{background:#dce6f5;font-weight:700}tr.sm-sub td{background:#eef2f8}table.sm-fiche td{padding:6px 6px;white-space:nowrap}table.sm-fiche td:last-child{white-space:normal}.sm-h2+.sm-p{break-before:avoid;page-break-before:avoid}\n  .sm-cc{margin:0 0 9px;break-inside:avoid;page-break-inside:avoid}.sm-ct{font-weight:700;color:#1f3864;font-size:10pt;margin-bottom:2px}.sm-sol{color:#1b5e20;font-size:9.5pt;margin:0 0 3px 4mm}.sm-note2{font-size:8.5pt;color:#555;margin:2px 0 6px}\n';

  /* ---------- Word ---------- */
  var P=D.para, R=D.run, UW=10206;
  function F(t,o){ return D.rich(t,o); }
  function banner(t){ return P(R(t,{b:true,color:'FFFFFF',sz:21}),{shade:'1F3864',before:200,after:100,keepNext:true,ind:{left:60}}); }
  function h3(t){ return P(R(t,{b:true,color:'1F3864',sz:22}),{before:200,after:80,keepNext:true,border:{bottom:{sz:6,color:'1F3864',space:2}}}); }
  function wTable(t){ var n=t.head.length, w0=2600, w=Math.floor((UW-w0)/ (n-1)), widths=[w0].concat(t.head.slice(1).map(function(){ return w; }));
    var rows=[{header:true,cells:t.head.map(function(h,i){ return D.cell(P(R(h,{b:true,color:'FFFFFF',sz:19}),{align:i?'center':'left'}),{w:widths[i],shade:'1F3864'}); })}].concat(t.rows.map(function(r){ return {cantSplit:true,cells:r.map(function(c,i){ return D.cell(P(R(c,{b:i===0,sz:19}),{align:i?'center':'left'}),{w:widths[i],shade:i===0?'EEF2F8':null}); })}; }));
    return D.table(rows,widths,{center:false}); }
  function underline(label,pos,more){ return {label:label,pos:pos}; }
  function idRow(parts){ var tabs=[],cont=[]; parts.forEach(function(p){ cont.push(R(p.label,{sz:20})); cont.push(D.tab()); tabs.push({type:'right',leader:'underscore',pos:p.pos}); }); return P(cont,{tabs:tabs,before:80,after:40}); }
  function critLine(label,max){ return P([R(label,{sz:18}),D.tab(),R(' / '+max,{sz:18})],{tabs:[{type:'right',leader:'underscore',pos:2250}],before:30,after:30}); }
  function wHead(E,ref,corr){
    var o=[]; o.push(P(R('DEVOIR SURVEILL\u00c9 DE '+matUp(E.ent)+(corr?' \u2014 CORRIG\u00c9 ET BAR\u00c8ME':''),{b:true,color:'1F3864',sz:30}),{align:'center',after:20}));
    o.push(P(R('Classe de '+(E.ent&&E.ent.classe?E.ent.classe:E.cls)+' \u00b7 Dur\u00e9e : '+fmtDur(E.dur)+' \u00b7 Calculatrice '+(E.calc?'autoris\u00e9e':'non autoris\u00e9e'),{color:'5A6675',sz:19}),{align:'center',after:corr&&infoLine(E.ent,E.dur)?20:120}));
    if(corr&&infoLine(E.ent,E.dur)) o.push(P(R(infoLine(E.ent,E.dur),{color:'5A6675',sz:17}),{align:'center',after:120})); return o.join(''); }
  function sujetDocx(E,ref){
    var imgs=[], body=wHead(E,ref,false), left=idWord(E.ent,E.dur);
    var right=P(R('R\u00c9SERV\u00c9 \u00c0 L\u2019ENSEIGNANT',{b:true,color:'1F3864',sz:17}),{after:40})+critLine('Analyser (Ca)',20)+critLine('Math\u00e9matiser (Cm)',30)+critLine('Op\u00e9rer (Co)',40)+critLine('Perfectionnement (Cp)',10)+critLine('Total',100)+critLine('Note',20)+
      P([R('Niveau : \u2610 Non atteint  \u2610 Partielle',{sz:17})],{before:60})+P([R('\u2610 Minimale  \u2610 Maximale',{sz:17})],{})+P([R('Appr\u00e9ciation : ',{sz:18}),D.tab()],{tabs:[{type:'right',leader:'underscore',pos:3450}],before:80,after:40})+P([D.tab()],{tabs:[{type:'right',leader:'underscore',pos:3450}],before:120});
    var bd={sz:6,color:'444444'};
    body+=D.table([[D.cell(left,{w:6200,borders:{top:bd,left:bd,bottom:bd,right:bd}}),D.cell(right,{w:UW-6200,shade:'F4F6FA',borders:{top:bd,left:bd,bottom:bd,right:bd}})]],[6200,UW-6200],{borders:false,padV:50,padH:110});
    body+=P([R('Consignes : ',{b:true,sz:18}),R('r\u00e9dige tes r\u00e9ponses sur ta copie, en num\u00e9rotant chaque r\u00e9ponse comme dans le sujet. Justifie tes calculs et soigne la pr\u00e9sentation : elle est prise en compte dans la notation. Les '+partsWord(E.problems.length)+' probl\u00e8mes sont ind\u00e9pendants.',{sz:18})],{shade:'FFF6EE',border:{left:{sz:18,color:'E65C00',space:4}},before:140,after:80,ind:{left:100}});
    body+=banner('SITUATION D\u2019\u00c9VALUATION : '+E.support.titre.toUpperCase());
    body+=P([R('Support. ',{b:true}),F(E.support.texte)],{align:'both',after:80});
    var fid=2, P1=E.problems[0], sc=figScene(P1.seq[0]&&P1.seq[0].fig), docCell=P(R('DOCUMENT 1',{b:true,color:'1F3864',sz:18}),{after:60});
    if(P1.seq[0]&&P1.seq[0].intro) docCell+=P((P1.seq[0].label?[R(P1.seq[0].label+'. ',{b:true}),F(P1.seq[0].intro)]:F(P1.seq[0].intro)),{align:'both',after:60});
    var rows1;
    if(sc){ imgs.push({rid:'rIdFig1',scene:sc}); var figP=P([D.image('rIdFig1',7.2,4.32,1,'Figure du document 1')],{align:'center'})+P(R('Figure \u00e0 main lev\u00e9e, non \u00e0 l\u2019\u00e9chelle.',{i:true,sz:15,color:'5A6675'}),{align:'center'});
      rows1=[[D.cell(figP,{w:4700,valign:'center'}),D.cell(docCell,{w:UW-4700,valign:'center'})]]; body+=D.table(rows1,[4700,UW-4700],{padV:80,padH:120}); }
    else body+=D.table([[D.cell(docCell,{w:UW})]],[UW],{padV:80,padH:120});
    P1.seq.forEach(function(q,qi){ if(qi>0&&q.intro) body+=P((q.label?[R(q.label+'. ',{b:true}),F(q.intro)]:F(q.intro)),{align:'both',before:80,after:60,keepNext:!!q.fig}); if(qi>0&&q.fig){ var sx=figScene(q.fig); if(sx){ var rid1='rIdFig'+fid; imgs.push({rid:rid1,scene:sx}); body+=P([D.image(rid1,6.8,4.08,fid,'Figure du document 1')],{align:'center',keepNext:true})+P(R('Figure \u00e0 main lev\u00e9e, non \u00e0 l\u2019\u00e9chelle.',{i:true,sz:15,color:'5A6675'}),{align:'center'}); fid++; } } if(q.table) body+=P('',{after:60})+wTable(q.table)+P('',{after:60}); });
    body+=P([R('T\u00e2che. ',{b:true}),R(E.tache)],{align:'both',before:120,after:80});
    E.problems.forEach(function(p,i){
      body+=banner('PROBL\u00c8ME '+(i+1));
      var consW=function(cs){ return cs.map(function(c){ return P([R(c.id,{b:true}),D.tab(),F(c.t)],{ind:{left:640,hanging:640},tabs:[{type:'left',pos:640}],after:100,keepLines:true}); }).join(''); };
      var figW=function(f){ var s2=figScene(f); if(!s2) return ''; var rid='rIdFig'+fid; imgs.push({rid:rid,scene:s2}); var x=P([D.image(rid,6.8,4.08,fid,'Figure du probl\u00e8me '+(i+1))],{align:'center',keepNext:true})+P(R('Figure \u00e0 main lev\u00e9e, non \u00e0 l\u2019\u00e9chelle.',{i:true,sz:15,color:'5A6675'}),{align:'center'}); fid++; return x; };
      if(p.mixedParts&&i>0){ body+=P(R('Ce probl\u00e8me comporte '+partsWord(p.mixedParts.length)+' parties ind\u00e9pendantes.',{i:true}),{after:80,keepNext:true}); p.mixedParts.forEach(function(pt){ body+=P(R(pt.label,{b:true,color:'E65C00',sz:21}),{before:80,after:40,keepNext:true,border:{left:{sz:18,color:'E65C00',space:4}},ind:{left:100}}); pt.seq.forEach(function(q,qi){ if(q.intro) body+=P((qi===0?[R('Compl\u00e9ment d\u2019information. ',{b:true}),F(q.intro)]:[F(q.intro)]),{align:'both',after:80,keepNext:true}); body+=figW(q.fig); if(q.table) body+=wTable(q.table)+P('',{after:60}); }); body+=consW(pt.cons); }); }
      else {
      if(i>0){ p.seq.forEach(function(q,qi){ if(q.intro) body+=P((qi===0?[R('Compl\u00e9ment d\u2019information. ',{b:true}),F(q.intro)]:[F(q.intro)]),{align:'both',after:80,before:qi?60:0,keepNext:(qi===0||!!q.table||!!q.fig)}); body+=figW(q.fig); if(q.table) body+=wTable(q.table)+P('',{after:60}); }); }
      else body+=P(R('Exploite les informations du document 1.',{i:true}),{after:80});
      if(p.mixedParts&&i===0) p.mixedParts.forEach(function(pt){ body+=P(R(pt.label,{b:true,color:'E65C00',sz:21}),{before:80,after:40,keepNext:true,border:{left:{sz:18,color:'E65C00',space:4}},ind:{left:100}})+consW(pt.cons); }); else body+=consW(p.cons); }
    });
    return {body:body,images:imgs,footer:'MathChrono-Quiz \u00b7 Devoir surveill\u00e9 de math\u00e9matiques \u00b7 Classe de '+E.cls+' \u00b7 R\u00e9f. '+ref,headerL:'MathChrono-Quiz',headerR:'R\u00e9f. '+ref,title:'Devoir surveill\u00e9 de math\u00e9matiques \u2014 '+E.cls};
  }
  function infoRow(k,v){ return {cantSplit:true,cells:[D.cell(P(R(k,{b:true,sz:18})),{w:2200,shade:'EEF2F8'}),D.cell(P(F(v,{sz:18}),{align:'both'}),{w:UW-2200})]}; }
  function barTable(head,rows,widths,totRows){ var rr=[{header:true,cells:head.map(function(h,i){ return D.cell(P(R(h,{b:true,color:'FFFFFF',sz:18}),{align:i?'center':'left'}),{w:widths[i],shade:'1F3864'}); })}].concat(rows.map(function(r,ri){ var tot=totRows&&totRows.indexOf(ri)>=0; return {cantSplit:true,cells:r.map(function(c,i){ return D.cell(P(R(c,{b:tot||i===0&&false,sz:18}),{align:i?'center':'left'}),{w:widths[i],shade:tot?'DCE6F5':null}); })}; })); return D.table(rr,widths); }
  function corrigeDocx(E,ref){
    var body=wHead(E,ref,true);
    body+=banner('1. Structure de l\u2019\u00e9preuve')+D.table([infoRow('Format',fmtTxt(E)),infoRow('Situation',E.support.titre),infoRow('Th\u00e8mes \u00e9valu\u00e9s',E.problems.map(function(p,i){ return 'Probl\u00e8me '+(i+1)+' : '+p.themes.join(' + '); }).join(' \u00b7 ')+(E.auto.length?' (compl\u00e9t\u00e9 automatiquement avec : '+E.auto.join(', ')+')':''))],[2200,UW-2200]);
    body+=banner('2. R\u00e9partition des points')+P(R('Les points de chaque crit\u00e8re (Analyser 20, Math\u00e9matiser 30, Op\u00e9rer 40) sont r\u00e9partis, par la r\u00e8gle de trois, selon le nombre de d\u00e9marches attendues dans chaque consigne ; le perfectionnement vaut 10 points.',{sz:19}),{align:'both',after:80});
    var rowsB=E.problems.map(function(p,i){ return ['Probl\u00e8me '+(i+1),pts(p.pa),pts(p.pm),pts(p.po),pts(p.pt)]; }); rowsB.push(['Total crit\u00e8res minimaux','20','30','40','90']); rowsB.push(['Perfectionnement (concision 3, propret\u00e9 4, lisibilit\u00e9 3)','','','','10']); rowsB.push(['TOTAL G\u00c9N\u00c9RAL','','','','100']);
    body+=barTable(['Probl\u00e8me','Analyser','Math\u00e9matiser','Op\u00e9rer','Total'],rowsB,[3800,1600,1800,1500,1506],[3,5])+P(R('Note sur 20 = total sur 100 \u00f7 5. Exemple : 74 points sur 100 donnent 14,8 sur 20.',{b:true,sz:17,color:'5A6675'}),{before:60,after:80});
    body+=banner('3. Appr\u00e9ciation des niveaux de ma\u00eetrise')+barTable(['Niveau','Ca','Cm','Co','Total (sur 90)'],[['Aucune ma\u00eetrise','0','0','0','0'],['Ma\u00eetrise partielle','7','10','13','30'],['Ma\u00eetrise minimale','13','20','27','60'],['Ma\u00eetrise maximale','20','30','40','90']],[3800,1400,1400,1400,2206])+
      P(R('R\u00e8gle des 3/4 appliqu\u00e9e au total x des crit\u00e8res minimaux (sur 90) : x < 23 : niveau partiel non atteint \u00b7 23 \u2264 x < 45 : ma\u00eetrise partielle \u00b7 45 \u2264 x < 68 : ma\u00eetrise minimale \u00b7 68 \u2264 x \u2264 90 : ma\u00eetrise maximale.',{sz:16,color:'5A6675'}),{before:60,after:80});
    body+=P(R('4. Corrig\u00e9 d\u00e9taill\u00e9',{b:true,color:'FFFFFF',sz:21}),{shade:'1F3864',before:200,after:100,pageBreakBefore:true,keepNext:true,ind:{left:60}});
    E.problems.forEach(function(p,i){
      body+=h3('Probl\u00e8me '+(i+1)+' \u2014 '+p.themes.join(' + '));
      p.cons.forEach(function(c){
        body+=P([R(c.id+'  ',{b:true,color:'1F3864',sz:20}),F(c.t,{b:true,color:'1F3864',sz:20})],{keepNext:true,before:140,after:40});
        body+=P([R('Solution. ',{b:true,color:'1B5E20',sz:19}),F(c.s,{color:'1B5E20',sz:19})],{keepNext:true,ind:{left:200},after:60,align:'both'});
        var hd=[D.cell(P(R('Crit\u00e8re',{b:true,color:'FFFFFF',sz:17}),{keepNext:true}),{w:1700,shade:'1F3864'}),D.cell(P(R('D\u00e9marches attendues',{b:true,color:'FFFFFF',sz:17}),{keepNext:true}),{w:UW-1700-900,shade:'1F3864'}),D.cell(P(R('Pts',{b:true,color:'FFFFFF',sz:17}),{align:'center',keepNext:true}),{w:900,shade:'1F3864'})];
        var rr=[{header:true,cells:hd}]; [['Analyser',c.A,c.pa],['Math\u00e9matiser',c.M,c.pm],['Op\u00e9rer',c.O,c.po]].forEach(function(r){ rr.push({cantSplit:true,cells:[D.cell(P(R(r[0],{b:true,sz:17}),{keepNext:true}),{w:1700,shade:'EEF2F8'}),D.cell(r[1].map(function(x){ return P([R('\u2022 ',{sz:17}),F(x,{sz:17})],{ind:{left:200,hanging:200},keepNext:true}); }).join(''),{w:UW-1700-900}),D.cell(P(R(pts(r[2]),{b:true,sz:17}),{align:'center',keepNext:true}),{w:900,valign:'center'})]}); });
        rr.push({cantSplit:true,cells:[D.cell(P(R('Total de la consigne '+c.id,{b:true,sz:17})),{w:UW-900,span:2,shade:'DCE6F5'}),D.cell(P(R(pts(c.pt),{b:true,sz:17}),{align:'center'}),{w:900,shade:'DCE6F5'})]});
        body+=D.table(rr,[1700,UW-1700-900,900],{padV:30,padH:80})+P('',{after:60}); });
    });
    body+=P(R('5. Fiche de notation \u00e0 remplir pour chaque \u00e9l\u00e8ve',{b:true,color:'FFFFFF',sz:21}),{shade:'1F3864',before:200,after:100,pageBreakBefore:true,keepNext:true,ind:{left:60}});
    var fr=[],tt=[],idx=0; E.problems.forEach(function(p,i){ p.cons.forEach(function(c){ fr.push([c.id,'\u2026 / '+pts(c.pa),'\u2026 / '+pts(c.pm),'\u2026 / '+pts(c.po),'\u2026 / '+pts(c.pt),'']); idx++; }); fr.push(['Probl\u00e8me '+(i+1),'\u2026 / '+pts(p.pa),'\u2026 / '+pts(p.pm),'\u2026 / '+pts(p.po),'\u2026 / '+pts(p.pt),'']); tt.push(fr.length-1); idx++; });
    fr.push(['Crit\u00e8res minimaux','\u2026 / 20','\u2026 / 30','\u2026 / 40','\u2026 / 90','']); tt.push(fr.length-1); fr.push(['Perfectionnement','','','','\u2026 / 10','concision \u2026/3 \u00b7 propret\u00e9 \u2026/4 \u00b7 lisibilit\u00e9 \u2026/3']); fr.push(['TOTAL','','','','\u2026 / 100','Note : \u2026 / 20']); tt.push(fr.length-1);
    body+=barTable(['Consigne','Ca','Cm','Co','Total','Observations'],fr,[2100,1300,1300,1300,1300,2906],tt);
    return {body:body,images:[],footer:'MathChrono-Quiz \u00b7 Corrig\u00e9 et bar\u00e8me \u00b7 Classe de '+E.cls+' \u00b7 R\u00e9f. '+ref,headerL:'MathChrono-Quiz',headerR:'R\u00e9f. '+ref,title:'Corrig\u00e9 et bar\u00e8me \u2014 '+E.cls};
  }
  function toDocx(spec){ // r\u00e9sout les images (PNG) puis assemble
    return Promise.all((spec.images||[]).map(function(im){ return sceneRaster(im.scene).then(function(png){ return {rid:im.rid,data:png}; }); })).then(function(imgs){ return D.build({title:spec.title,body:spec.body,images:imgs,footer:spec.footer,headerL:spec.headerL,headerR:spec.headerR}); }); }

  G.MQ_SOM={baseCls:baseCls,perProb:perProb,sizing:sizing,nProb:nProb,durOfPer:durOfPer,defaultDur:defaultDur,classes:classes,idHTML:idHTML,idWord:idWord,infoLine:infoLine,matUp:matUp,fmtDur:fmtDur,buildEpreuve:buildEpreuve,availableThemes:availableThemes,modulesOf:modulesOf,sujetHTML:sujetHTML,corrigeHTML:corrigeHTML,sujetDocx:function(E,ref){ return toDocx(sujetDocx(E,ref)); },corrigeDocx:function(E,ref){ return toDocx(corrigeDocx(E,ref)); },CSS:CSS,alloc:alloc,pts:pts,sceneSVG:sceneSVG,figScene:figScene};
})(typeof globalThis!=='undefined'?globalThis:this);



/* ── 60-eval.js ── */
/* ===== Évaluations : QCM imprimable (sujet + corrigé) ===== */
(function(){
  var BANK = '1';                       // version de la banque (fait partie de la référence)
  var WA = '2290197890952';             // WhatsApp du porteur du projet
  var st = { cyc:null, cls:null, th:[], n:10, dur:null, ab:false, seed:null, diff:false, kind:'F' };

  /* ---- en-tête du sujet (rempli par l'enseignant) ---- */
  var ENTK='mq_ent';
  function autoYear(){ var d=new Date(), y=d.getFullYear(); return (d.getMonth()>=8)?(y+'-'+(y+1)):((y-1)+'-'+y); }
  st.ent={etab:'',annee:autoYear(),matiere:'Math\u00e9matiques',coef:'',classe:''};
  try{ var sv=JSON.parse(localStorage.getItem(ENTK)||'null'); if(sv){ ['etab','annee','matiere','coef'].forEach(function(k){ if(typeof sv[k]==='string') st.ent[k]=sv[k]; }); } }catch(e){}
  function entOf(cls){ var e=st.ent; return {etab:(e.etab||'').trim(),annee:(e.annee||'').trim(),matiere:(e.matiere||'').trim()||'Math\u00e9matiques',coef:(e.coef||'').trim(),classe:(e.classe||'').trim()||cls}; }
  window.evEnt=function(k,v){ st.ent[k]=v; try{ localStorage.setItem(ENTK,JSON.stringify({etab:st.ent.etab,annee:st.ent.annee,matiere:st.ent.matiere,coef:st.ent.coef})); }catch(e){} };
  window.entFormHTML=function(cls){ var e=st.ent, f=function(k,ph,type){ return '<div><div style="font-size:11px;color:var(--text-muted);margin-bottom:2px;">'+ph+'</div><input class="theme-select" style="width:100%;" '+(type?'inputmode="'+type+'" ':'')+'value="'+evEsc(e[k]||'').replace(/"/g,'&quot;')+'" oninput="evEnt(\''+k+'\',this.value)"></div>'; };
    return '<div class="theme-label">En-t\u00eate du sujet <span style="font-weight:400;color:var(--text-muted);">(rempli par l\u2019enseignant)</span></div>'+
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:4px;"><div style="grid-column:1/3;">'+f('etab','\u00c9tablissement')+'</div>'+f('annee','Ann\u00e9e scolaire')+f('matiere','Mati\u00e8re')+f('classe','Classe (ex. : '+cls+' M1)')+f('coef','Coefficient','numeric')+'</div>'+
      '<div style="font-size:11px;color:var(--text-muted);line-height:1.45;margin-bottom:10px;">Ces informations sont m\u00e9moris\u00e9es sur ton t\u00e9l\u00e9phone. Un champ laiss\u00e9 vide devient une ligne \u00e0 remplir \u00e0 la main.</div>'; };


  function evEsc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function rich(s){ return vecHTML(evEsc(s)); }
  function D(cyc){ return cyc===2 ? {TH:THEMES_C2, CL:CLASSES_C2} : {TH:THEMES_C1, CL:CLASSES_C1}; }
  function short(t){ return t.replace(/^[^\u2014]+\u2014\s*/,''); }

  /* ---- hasard reproductible ---- */
  function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; var t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
  function shuffle(arr,rnd){ var a=arr.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(rnd()*(i+1)); var x=a[i]; a[i]=a[j]; a[j]=x; } return a; }

  /* ---- tirage des questions (identique pour une même référence) ---- */
  function pick(p){
    var d=D(p.cyc), rnd=mulberry32(p.seed), k=p.th.length;
    var pools=p.th.map(function(t){ return shuffle((d.TH[t]||[]).map(function(q){ return {q:q.q,c:q.c.slice(),a:q.a,exp:q.exp,theme:t}; }),rnd); });
    var taken=pools.map(function(pl,i){ var quota=Math.floor(p.n/k)+(i<p.n%k?1:0); return pl.slice(0,Math.min(quota,pl.length)); });
    var total=taken.reduce(function(s,a){ return s+a.length; },0);
    for(var r=0;total<p.n&&r<500;r++){ var prog=false; for(var i=0;i<k&&total<p.n;i++){ if(taken[i].length<pools[i].length){ taken[i].push(pools[i][taken[i].length]); total++; prog=true; } } if(!prog) break; }
    return shuffle([].concat.apply([],taken),rnd);
  }
  function versionB(list,seed){
    var rnd=mulberry32((seed^0x5bd1e995)>>>0);
    return shuffle(list,rnd).map(function(q){ var sh=shuffle([0,1,2,3],rnd); return {q:q.q,exp:q.exp,theme:q.theme,c:sh.map(function(i){ return q.c[i]; }),a:sh.indexOf(q.a)}; });
  }


  /* ---- niveaux cognitifs (estimation automatique) : 1 = je retiens, 2 = j'applique, 3 = je raisonne ---- */
  var CALC=/\b(calcul\w*|r\u00e9sou\w*|d\u00e9termin\w*|simplifi\w*|d\u00e9velopp\w*|factoris\w*|d\u00e9riv\w*|int\u00e9gr\w*|combien|trouv\w*|\u00e9valu\w*|exprim\w*|convertis\w*|arrondi\w*)\b/i;
  var RECALL=/^(D\u00e9finition|Propri\u00e9t\u00e9|Th\u00e9or\u00e8me|Formule|M\u00e9thode|Crit\u00e8re|Convention|Notation|R\u00e9ciproque)\b|(que signifie|s'appelle|appelle-t-on|est de la forme|est dite?|sont dites?|se note|on dit|le nom|quel(le)? est (la |le )?(d\u00e9finition|nom|propri\u00e9t\u00e9|formule)|lequel de ces|laquelle de ces|est un exemple|quelle propri\u00e9t\u00e9|la propri\u00e9t\u00e9 (du|de la|de l'|des) )/i;
  var lvCache={};
  function lvl(q,theme){
    var key=theme+'|'+q.q; if(lvCache[key]) return lvCache[key];
    var s=q.q, c=q.c, nums=(s.match(/\d+([.,]\d+)?/g)||[]).length, numCh=c.filter(function(x){ return /\d/.test(x); }).length,
        sym=/[=\u00b2\u00b3\u221a\u222b]|\^|\/|[+\u2212\u00d7\u00f7]/.test(s), calc=CALC.test(s), r;
    if(/Prop\. & D/.test(theme)) r=1;
    else if(RECALL.test(s)&&nums<=1) r=1;
    else if(nums>=3||(nums>=2&&numCh>=3)||(calc&&(nums>=2||sym)&&numCh>=2)||s.length>150) r=3;
    else if(nums===0&&!calc&&!sym&&numCh===0) r=1;
    else r=2;
    lvCache[key]=r; return r;
  }
  var PROF={1:[0.6,0.3,0.1],2:[0.25,0.5,0.25],3:[0.1,0.3,0.6]};
  var PARCOURS={1:{sym:'\u25b2',nom:'Parcours 1',cle:'Je retiens',but:'Consolider les connaissances de base (d\u00e9finitions, propri\u00e9t\u00e9s, vocabulaire, calculs simples).'},
                2:{sym:'\u25a0',nom:'Parcours 2',cle:'J\u2019applique',but:'Appliquer les notions du cours dans des situations directes.'},
                3:{sym:'\u25cf',nom:'Parcours 3',cle:'Je raisonne',but:'Approfondir : calculs en plusieurs \u00e9tapes, raisonnement, transfert.'}};
  function quotas(n,g){ var pr=PROF[g], q1=Math.round(n*pr[0]), q3=Math.round(n*pr[2]), q2=n-q1-q3; if(q2<0){ q2=0; q3=n-q1; } return [q1,q2,q3]; }
  function pickDiffAll(p){
    var d=D(p.cyc), usedG={}, out={};
    [1,2,3].forEach(function(g){
      var rnd=mulberry32((p.seed+g*7919)>>>0), themes=shuffle(p.th,rnd), by={}, used={}, list=[];
      themes.forEach(function(t){ by[t]=[[],[],[]]; shuffle(d.TH[t]||[],rnd).forEach(function(q){ var L=lvl(q,t); by[t][L-1].push({q:q.q,c:q.c.slice(),a:q.a,exp:q.exp,theme:t,lv:L}); }); });
      var rr=0;
      function take(L){
        for(var pass=0;pass<2;pass++){
          for(var k=0;k<themes.length;k++){
            var t=themes[(rr+k)%themes.length], arr=by[t][L-1];
            for(var i=0;i<arr.length;i++){ var q=arr[i]; if(used[q.q]) continue; if(pass===0&&usedG[q.q]) continue; used[q.q]=1; rr=(rr+k+1)%themes.length; return q; }
          }
        } return null;
      }
      var order={1:[1,2,3],2:g===3?[2,3,1]:[2,1,3],3:[3,2,1]}, qu=quotas(p.n,g);
      [1,2,3].forEach(function(L){ for(var c=0;c<qu[L-1];c++){ var got=null, o=order[L]; for(var j=0;j<o.length&&!got;j++) got=take(o[j]); if(got) list.push(got); } });
      // complète si le total n'est pas atteint (thèmes pauvres)
      for(var L2=1;list.length<p.n&&L2<=3;L2++){ var x; while(list.length<p.n&&(x=take(L2))) list.push(x); }
      list=shuffle(list,rnd).map(function(q,i){ return {q:q,i:i}; }).sort(function(a,b){ return a.q.lv-b.q.lv||a.i-b.i; }).map(function(o){ return o.q; });
      list.forEach(function(q){ usedG[q.q]=1; });
      out[g]=list;
    });
    return out;
  }

  /* ---- référence : encode / décode ---- */
  function checksum(s){ var t=0; for(var i=0;i<s.length;i++) t+=s.charCodeAt(i); return (t%36).toString(36).toUpperCase(); }
  function encode(p,mode){
    var d=D(p.cyc), names=d.CL[p.cls]||[], ci=Object.keys(d.CL).indexOf(p.cls), mask=0;
    p.th.forEach(function(t){ var i=names.indexOf(t); if(i>=0) mask=(mask|(1<<i))>>>0; });
    var body='MQ'+BANK+'-'+(mode||'F')+p.cyc+ci.toString(36).toUpperCase()+String(p.n).padStart(2,'0')+'-'+mask.toString(36).toUpperCase()+'-'+(p.seed>>>0).toString(36).toUpperCase().padStart(7,'0');
    return body+'-'+checksum(body);
  }
  /* Extrait la référence MQ1-… d'un texte quelconque : copie d'une ligne entière d'un PDF/Word (« Réf. … »), code HTML,
     retours à la ligne ou espaces dans la référence, tirets typographiques. Renvoie '' si aucune référence n'est trouvée. */
  function cleanRef(txt){
    var t=String(txt==null?'':txt).replace(/<[^>]*>/g,' ').replace(/&nbsp;|&#160;/gi,' ').replace(/[\u2010-\u2015\u2212\u00ad]/g,'-').replace(/[\u200b-\u200f\u2060\ufeff]/g,'').toUpperCase();
    var sq=t.replace(/\s+/g,'');
    var m=/MQ\d-[FSD][12][0-9A-Z]\d{2}-[0-9A-Z]+-[0-9A-Z]{7}-[0-9A-Z]/.exec(sq);
    return m?m[0]:'';
  }
  function decode(ref){
    ref=cleanRef(ref);
    var m=/^MQ(\d)-([FSD])([12])([0-9A-Z])(\d{2})-([0-9A-Z]+)-([0-9A-Z]{7})-([0-9A-Z])$/.exec(ref);
    if(!m) return null;
    var body=ref.slice(0,-2); if(checksum(body)!==m[8]) return null;
    if(m[1]!==BANK) return {error:'Cette référence vient d\u2019une autre version de la banque de questions.'};
    var cyc=+m[3], d=D(cyc), keys=Object.keys(d.CL), cls=keys[parseInt(m[4],36)]; if(!cls) return null;
    var names=d.CL[cls], mask=parseInt(m[6],36), th=[]; names.forEach(function(t,i){ if((mask>>>i)&1) th.push(t); });
    return {mode:m[2],cyc:cyc,cls:cls,n:+m[5],th:th,seed:parseInt(m[7],36)};
  }

  /* ---- documents imprimables ---- */
  var LET=['A','B','C','D'];
  function themeLabel(p){ return p.th.map(short).join(' ; '); }
  function questionHTML(q,i){
    var maxc=Math.max.apply(null,q.c.map(function(c){ return c.length; })), two=maxc<=30;
    var ch=q.c.map(function(c,j){ return '<div class="ev-ch"><span class="ev-box"></span><b>'+LET[j]+'.</b> '+rich(c)+'</div>'; }).join('');
    return '<div class="ev-q"><div class="ev-qt"><span class="ev-n">'+(i+1)+'</span> '+rich(q.q)+'</div><div class="ev-chs'+(two?' two':'')+'">'+ch+'</div></div>';
  }
  function sujetHTML(p,list,ver,ref,opt){
    var N=list.length, pc=opt&&opt.g?PARCOURS[opt.g]:null, vtag=(pc?' \u00b7 '+pc.sym+' '+pc.nom:'')+(ver?' \u00b7 Version '+ver:'');
    return '<div class="ev-doc">'+
      '<div class="ev-top"><b>MathChrono-Quiz</b><span>R\u00e9f. '+ref+vtag+'</span></div>'+
      '<div class="ev-title">\u00c9VALUATION FORMATIVE \u2014 '+evEsc(window.MQ_SOM.matUp(p.ent))+(pc?' <span class="ev-pc">'+pc.sym+' '+pc.nom+'</span>':'')+'</div>'+
      '<div class="ev-sub">Classe de '+evEsc(p.ent&&p.ent.classe?p.ent.classe:p.cls)+' \u00b7 '+evEsc(themeLabel(p))+'</div>'+
      '<table class="ev-head"><tr><td class="ev-id">'+window.MQ_SOM.idHTML(p.ent,p.dur)+'</td><td class="ev-teach">'+
        '<div class="ev-th">R\u00e9serv\u00e9 \u00e0 l\u2019enseignant</div>'+
        '<div>Note : <span class="ev-line w14"></span> / <b>'+N+'</b></div>'+
        '<div class="ev-lvl">Niveau de ma\u00eetrise :<br><span class="nw"><span class="ev-box"></span>Acquis</span> &nbsp; <span class="nw"><span class="ev-box"></span>En cours</span> &nbsp; <span class="nw"><span class="ev-box"></span>Non acquis</span></div>'+
        '<div>Appr\u00e9ciation :</div><div class="ev-ln"></div><div class="ev-ln"></div><div class="ev-ln"></div>'+
      '</td></tr></table>'+
      '<div class="ev-cons"><b>Consigne :</b> pour chaque question, coche <b>une seule</b> case : celle de la bonne r\u00e9ponse. Bar\u00e8me : 1 point par bonne r\u00e9ponse, soit '+N+' points.</div>'+
      list.map(questionHTML).join('')+
      '<div class="ev-foot">G\u00e9n\u00e9r\u00e9 par MathChrono-Quiz \u00b7 R\u00e9f. '+ref+vtag+'</div>'+
    '</div>';
  }
  function corrigeHTML(p,list,ver,ref,opt){
    var N=list.length, pc=opt&&opt.g?PARCOURS[opt.g]:null, vtag=(pc?' \u00b7 '+pc.sym+' '+pc.nom+' ('+pc.cle+')':'')+(ver?' \u00b7 Version '+ver:'');
    var cells=list.map(function(q,i){ return '<td><div class="g1">'+(i+1)+'</div><div class="g2">'+LET[q.a]+'</div></td>'; });
    var rows=[]; for(var r0=0;r0<cells.length;r0+=10) rows.push('<tr>'+cells.slice(r0,r0+10).join('')+'</tr>');
    var grid='<table class="ev-grid">'+rows.join('')+'</table>';
    var det=list.map(function(q,i){
      var lv=q.lv||lvl({q:q.q,c:q.c},q.theme);
      return '<div class="ev-q ev-cq"><div class="ev-qt"><span class="ev-n">'+(i+1)+'</span> '+rich(q.q)+' <span class="ev-lv">niveau '+lv+'</span></div>'+
        '<div class="ev-ans">\u2714 Bonne r\u00e9ponse : <b>'+LET[q.a]+'.</b> '+rich(q.c[q.a])+'</div>'+
        (q.exp?'<div class="ev-exp">\u2192 '+rich(q.exp)+'</div>':'')+'</div>';
    }).join('');
    return '<div class="ev-doc">'+
      '<div class="ev-top"><b>MathChrono-Quiz</b><span>R\u00e9f. '+ref+vtag+'</span></div>'+
      '<div class="ev-title">CORRIG\u00c9 \u2014 \u00c9VALUATION FORMATIVE'+(pc?' <span class="ev-pc">'+pc.sym+' '+pc.nom+'</span>':'')+'</div>'+
      '<div class="ev-sub">Classe de '+evEsc(p.ent&&p.ent.classe?p.ent.classe:p.cls)+' \u00b7 '+evEsc(themeLabel(p))+vtag+'</div>'+(window.MQ_SOM.infoLine(p.ent,p.dur)?'<div class="ev-sub" style="margin-top:-4px">'+evEsc(window.MQ_SOM.infoLine(p.ent,p.dur))+'</div>':'')+
      '<div class="ev-cons"><b>Grille de correction</b> \u2014 bar\u00e8me : 1 point par bonne r\u00e9ponse, total '+N+' points.</div>'+grid+
      '<div class="ev-cons" style="margin-top:8px"><b>Rep\u00e8res sugg\u00e9r\u00e9s :</b> Non acquis : moins de '+Math.ceil(N*0.5)+' points \u00b7 En cours d\u2019acquisition : de '+Math.ceil(N*0.5)+' \u00e0 '+(Math.ceil(N*0.75)-1)+' points \u00b7 Acquis : '+Math.ceil(N*0.75)+' points et plus.</div>'+
      det+
      '<div class="ev-foot">G\u00e9n\u00e9r\u00e9 par MathChrono-Quiz \u00b7 R\u00e9f. '+ref+vtag+'</div>'+
    '</div>';
  }

  /* ---- fiche enseignant (parcours) ---- */
  function guideHTML(p,sets,ref){
    var rows=[1,2,3].map(function(g){ var L=sets[g], c=[0,0,0]; L.forEach(function(q){ c[q.lv-1]++; }); var pc=PARCOURS[g];
      return '<tr><td><b>'+pc.sym+' '+pc.nom+'</b><br><span class="ev-lv">'+pc.cle+'</span></td><td>'+pc.but+'</td><td style="text-align:center">'+c[0]+' \u00b7 '+c[1]+' \u00b7 '+c[2]+'</td></tr>'; }).join('');
    return '<div class="ev-doc"><div class="ev-top"><b>MathChrono-Quiz</b><span>R\u00e9f. '+ref+'</span></div>'+
      '<div class="ev-title">FICHE ENSEIGNANT \u2014 \u00c9VALUATION DIFF\u00c9RENCI\u00c9E</div>'+
      '<div class="ev-sub">Classe de '+evEsc(p.cls)+' \u00b7 '+evEsc(themeLabel(p))+' \u00b7 '+sets[1].length+' questions par parcours \u00b7 '+p.dur+' min</div>'+
      '<div class="ev-cons"><b>Principe :</b> les trois parcours \u00e9valuent les m\u00eames th\u00e8mes ; ils diff\u00e8rent par la demande cognitive des questions. Sur les sujets des \u00e9l\u00e8ves, les parcours portent un simple symbole (\u25b2 \u25a0 \u25cf) : aucune mention de niveau.</div>'+
      '<table class="ev-gt"><tr><th>Parcours</th><th>Objectif</th><th>Questions niveau 1 \u00b7 2 \u00b7 3</th></tr>'+rows+'</table>'+
      '<div class="ev-cons"><b>Affectation sugg\u00e9r\u00e9e :</b> parcours 1 pour les \u00e9l\u00e8ves qui ont besoin de consolider ; parcours 2 pour ceux qui ont atteint le niveau attendu ; parcours 3 pour ceux qui sont \u00e0 l\u2019aise. Appuie-toi sur tes observations et sur les derni\u00e8res \u00e9valuations, et laisse l\u2019\u00e9l\u00e8ve passer d\u2019un parcours \u00e0 l\u2019autre d\u2019une s\u00e9quence \u00e0 l\u2019autre.</div>'+
      '<div class="ev-cons"><b>Lecture des r\u00e9sultats :</b> chaque sujet est not\u00e9 sur '+sets[1].length+' points ; les notes de parcours diff\u00e9rents <u>ne sont pas comparables</u>. Utilise le niveau de ma\u00eetrise (acquis / en cours / non acquis) pour rendre compte.</div>'+
      '<div class="ev-cons" style="border-left-color:#999;background:#f3f3f3"><b>Attention :</b> les niveaux (1, 2, 3) sont estim\u00e9s automatiquement \u00e0 partir de l\u2019\u00e9nonc\u00e9 des questions. Ils sont indiqu\u00e9s dans les corrig\u00e9s : v\u00e9rifie-les et retire un sujet qui ne te convient pas en g\u00e9n\u00e9rant un autre tirage.</div>'+
      '<div class="ev-foot">G\u00e9n\u00e9r\u00e9 par MathChrono-Quiz \u00b7 R\u00e9f. '+ref+'</div></div>';
  }

  /* ---- Word : sujets et corrigés formatifs ---- */
  function wSpec(p,list,ver,ref,opt,corr){
    var D=window.MQ_DOCX, P=D.para, R=D.run, F=function(t,o){ return D.rich(t,o); }, N=list.length, pc=opt&&opt.g?PARCOURS[opt.g]:null, UW=10206, o=[];
    var title='\u00c9VALUATION FORMATIVE \u2014 '+window.MQ_SOM.matUp(p.ent); if(corr) title='CORRIG\u00c9 \u2014 \u00c9VALUATION FORMATIVE';
    o.push(P([R(title,{b:true,color:'1F3864',sz:30})].concat(pc?[R('    '+pc.sym+' '+pc.nom+(corr?' ('+pc.cle+')':''),{b:true,color:'1F3864',sz:24})]:[]),{align:'center',after:20}));
    o.push(P(R('Classe de '+(p.ent&&p.ent.classe?p.ent.classe:p.cls)+' \u00b7 '+themeLabel(p)+(ver?' \u00b7 Version '+ver:''),{color:'5A6675',sz:19}),{align:'center',after:corr?20:120}));
    if(corr&&window.MQ_SOM.infoLine(p.ent,p.dur)) o.push(P(R(window.MQ_SOM.infoLine(p.ent,p.dur),{color:'5A6675',sz:17}),{align:'center',after:120}));
    function idRow(parts){ var tabs=[],c=[]; parts.forEach(function(x){ c.push(R(x.l,{sz:20})); c.push(D.tab()); tabs.push({type:'right',leader:'underscore',pos:x.p}); }); return P(c,{tabs:tabs,before:80,after:40}); }
    if(!corr){
      var left=window.MQ_SOM.idWord(p.ent,p.dur);
      var right=P(R('R\u00c9SERV\u00c9 \u00c0 L\u2019ENSEIGNANT',{b:true,color:'1F3864',sz:17}),{after:60})+P([R('Note : ',{sz:20}),D.tab(),R(' / '+N,{sz:20,b:true})],{tabs:[{type:'right',leader:'underscore',pos:2400}],before:40,after:80})+
        P(R('Niveau de ma\u00eetrise :',{sz:18}),{after:20})+P(R('\u2610 Acquis   \u2610 En cours',{sz:18}),{after:20})+P(R('\u2610 Non acquis',{sz:18}),{after:60})+P([R('Appr\u00e9ciation : ',{sz:18}),D.tab()],{tabs:[{type:'right',leader:'underscore',pos:3450}],before:40,after:40})+P([D.tab()],{tabs:[{type:'right',leader:'underscore',pos:3450}],before:120})+P([D.tab()],{tabs:[{type:'right',leader:'underscore',pos:3450}],before:120});
      var bd={sz:6,color:'444444'};
      o.push(D.table([[D.cell(left,{w:6200,borders:{top:bd,left:bd,bottom:bd,right:bd}}),D.cell(right,{w:UW-6200,shade:'F4F6FA',borders:{top:bd,left:bd,bottom:bd,right:bd}})]],[6200,UW-6200],{borders:false,padV:50,padH:110}));
      o.push(P([R('Consigne : ',{b:true,sz:18}),R('pour chaque question, coche une seule case : celle de la bonne r\u00e9ponse. Bar\u00e8me : 1 point par bonne r\u00e9ponse, soit '+N+' points.',{sz:18})],{shade:'FFF6EE',border:{left:{sz:18,color:'E65C00',space:4}},before:140,after:140,ind:{left:100}}));
      list.forEach(function(q,i){
        o.push(P([R((i+1)+'.',{b:true,color:'1F3864',sz:21}),D.tab(),F(q.q,{b:true,sz:21})],{ind:{left:560,hanging:560},tabs:[{type:'left',pos:560}],keepNext:true,keepLines:true,before:100,after:50}));
        var maxc=Math.max.apply(null,q.c.map(function(c){ return c.length; }));
        if(maxc<=30){ var cl=function(j){ return D.cell(P([R('\u2610  ',{sz:21,font:'Segoe UI Symbol'}),R(LET[j]+'.  ',{b:true,sz:21}),F(q.c[j],{sz:21})],{keepNext:j<2,keepLines:true}),{w:4400}); };
          o.push(D.table([[D.cell(P('',{}),{w:560}),cl(0),cl(1)],[D.cell(P('',{}),{w:560}),cl(2),cl(3)]],[560,4400,4400],{borders:false,padV:20,padH:60})); }
        else q.c.forEach(function(c,j){ o.push(P([R('\u2610  ',{sz:21,font:'Segoe UI Symbol'}),R(LET[j]+'.  ',{b:true,sz:21}),F(c,{sz:21})],{ind:{left:560},keepNext:j<3,keepLines:true,after:20})); });
      });
    } else {
      o.push(P([R('Grille de correction',{b:true,sz:20}),R(' \u2014 bar\u00e8me : 1 point par bonne r\u00e9ponse, total '+N+' points.',{sz:19})],{shade:'FFF6EE',border:{left:{sz:18,color:'E65C00',space:4}},before:60,after:100,ind:{left:100}}));
      var rows=[]; for(var s0=0;s0<N;s0+=10){ var cs=[]; for(var j2=s0;j2<s0+10;j2++){ if(j2<N) cs.push(D.cell(P(R(String(j2+1),{sz:16,color:'5A6675'}),{align:'center'})+P(R(LET[list[j2].a],{b:true,sz:26}),{align:'center'}),{w:1000,shade:j2%2?null:'F4F6FA'})); else cs.push(D.cell(P(''),{w:1000})); } rows.push(cs); }
      o.push(D.table(rows,Array(10).fill(1000),{center:true,padV:30}));
      o.push(P([R('Rep\u00e8res sugg\u00e9r\u00e9s : ',{b:true,sz:18}),R('Non acquis : moins de '+Math.ceil(N*0.5)+' points \u00b7 En cours d\u2019acquisition : de '+Math.ceil(N*0.5)+' \u00e0 '+(Math.ceil(N*0.75)-1)+' points \u00b7 Acquis : '+Math.ceil(N*0.75)+' points et plus.',{sz:18})],{before:140,after:120}));
      list.forEach(function(q,i){ var lv=q.lv||lvl({q:q.q,c:q.c},q.theme);
        o.push(P([R((i+1)+'.',{b:true,color:'1F3864',sz:20}),D.tab(),F(q.q,{b:true,sz:20}),R('   [niveau '+lv+']',{sz:15,color:'7A4A00'})],{ind:{left:560,hanging:560},tabs:[{type:'left',pos:560}],keepNext:true,keepLines:true,before:100,after:30}));
        o.push(P([R('\u2714 Bonne r\u00e9ponse : ',{color:'1B5E20',sz:19}),R(LET[q.a]+'.  ',{b:true,color:'1B5E20',sz:19}),F(q.c[q.a],{color:'1B5E20',sz:19})],{ind:{left:560},keepNext:!!q.exp,after:20}));
        if(q.exp) o.push(P(F('\u2192 '+q.exp,{sz:18,color:'444444'}),{ind:{left:560},after:60,keepLines:true})); });
    }
    return o.join('');
  }
  function wBuild(body,p,ref,corr){ var D=window.MQ_DOCX; return D.build({title:(corr?'Corrig\u00e9 ':'Sujet ')+'\u2014 \u00e9valuation formative '+p.cls,body:body,images:[],footer:'MathChrono-Quiz \u00b7 '+(corr?'Corrig\u00e9 de l\u2019\u00e9valuation formative':'\u00c9valuation formative')+' \u00b7 Classe de '+p.cls+' \u00b7 R\u00e9f. '+ref,headerL:'MathChrono-Quiz',headerR:'R\u00e9f. '+ref}); }
  var PGBRK='<w:p><w:r><w:br w:type="page"/></w:r></w:p>';
  function download(bytes,name,mime){ var blob=new Blob([bytes],{type:mime||'application/octet-stream'}), url=URL.createObjectURL(blob), a=document.createElement('a'); a.href=url; a.download=name; document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(url); a.remove(); },4000); }
  var DOCX_MIME='application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  window.evWord=function(kind,g){
    var p=params(); if(st.seed==null||!p.th.length||!window.MQ_DOCX) return; var corr=(kind==='corrige'), tag=p.cls.replace(/[^A-Za-z0-9]/g,''), ref, body;
    if(st.diff){ ref=encode(p,'D'); var sets=pickDiffAll(p), gs=g?[g]:[1,2,3], parts=[];
      if(corr&&!g) parts.push(guideWord(p,sets,ref));
      gs.forEach(function(x){ parts.push(wSpec(p,sets[x],'',ref,{g:x},corr)); }); body=parts.join(PGBRK); }
    else { ref=encode(p,'F'); var A=pick(p); body=wSpec(p,A,st.ab?'A':'',ref,null,corr); if(st.ab) body+=PGBRK+wSpec(p,versionB(A,p.seed),'B',ref,null,corr); }
    var bytes=wBuild(body,p,ref,corr); download(bytes,'MathChrono-Quiz_'+(corr?'Corrige':'Sujet')+(st.diff?(g?'_Parcours'+g:'s'):'')+'_'+tag+'_'+ref.replace(/[^A-Z0-9-]/g,'')+'.docx',DOCX_MIME);
  };
  function guideWord(p,sets,ref){ var D=window.MQ_DOCX, P=D.para, R=D.run, o=[];
    o.push(P(R('FICHE ENSEIGNANT \u2014 \u00c9VALUATION DIFF\u00c9RENCI\u00c9E',{b:true,color:'1F3864',sz:30}),{align:'center',after:20}));
    o.push(P(R('Classe de '+p.cls+' \u00b7 '+themeLabel(p)+' \u00b7 '+sets[1].length+' questions par parcours \u00b7 '+p.dur+' min',{color:'5A6675',sz:19}),{align:'center',after:140}));
    o.push(P([R('Principe : ',{b:true,sz:19}),R('les trois parcours \u00e9valuent les m\u00eames th\u00e8mes ; ils diff\u00e8rent par la demande cognitive des questions. Sur les sujets des \u00e9l\u00e8ves, les parcours portent un simple symbole (\u25b2 \u25a0 \u25cf) : aucune mention de niveau.',{sz:19})],{shade:'FFF6EE',border:{left:{sz:18,color:'E65C00',space:4}},after:120,ind:{left:100}}));
    var rows=[{header:true,cells:['Parcours','Objectif','Questions niveau 1 \u00b7 2 \u00b7 3'].map(function(h,i){ return D.cell(P(R(h,{b:true,color:'FFFFFF',sz:19}),{align:i===2?'center':'left'}),{w:[2400,5400,2406][i],shade:'1F3864'}); })}];
    [1,2,3].forEach(function(g){ var c=[0,0,0]; sets[g].forEach(function(q){ c[q.lv-1]++; }); var pc=PARCOURS[g]; rows.push({cantSplit:true,cells:[D.cell(P(R(pc.sym+' '+pc.nom,{b:true,sz:19}))+P(R(pc.cle,{sz:16,color:'7A4A00'})),{w:2400}),D.cell(P(R(pc.but,{sz:19})),{w:5400}),D.cell(P(R(c[0]+' \u00b7 '+c[1]+' \u00b7 '+c[2],{sz:19}),{align:'center'}),{w:2406,valign:'center'})]}); });
    o.push(D.table(rows,[2400,5400,2406]));
    ['Affectation sugg\u00e9r\u00e9e : parcours 1 pour les \u00e9l\u00e8ves qui ont besoin de consolider ; parcours 2 pour ceux qui ont atteint le niveau attendu ; parcours 3 pour ceux qui sont \u00e0 l\u2019aise. Appuie-toi sur tes observations et sur les derni\u00e8res \u00e9valuations, et laisse l\u2019\u00e9l\u00e8ve passer d\u2019un parcours \u00e0 l\u2019autre d\u2019une s\u00e9quence \u00e0 l\u2019autre.',
     'Lecture des r\u00e9sultats : chaque sujet est not\u00e9 sur '+sets[1].length+' points ; les notes de parcours diff\u00e9rents ne sont pas comparables. Utilise le niveau de ma\u00eetrise (acquis / en cours / non acquis) pour rendre compte.',
     'Attention : les niveaux (1, 2, 3) sont estim\u00e9s automatiquement \u00e0 partir de l\u2019\u00e9nonc\u00e9 des questions. Ils sont indiqu\u00e9s dans les corrig\u00e9s : v\u00e9rifie-les et g\u00e9n\u00e8re un autre tirage si un sujet ne te convient pas.'].forEach(function(t){ o.push(P(R(t,{sz:19}),{before:120,align:'both'})); });
    return o.join(''); }
  window.evKind=function(k){ st.kind=k; renderEvalPage(); };

  /* ---- impression (enregistrer en PDF) ---- */
  function root(){ var r=document.getElementById('print-root'); if(!r){ r=document.createElement('div'); r.id='print-root'; document.body.appendChild(r); } return r; }
  function printDoc(html,title){
    var r=root(); r.innerHTML=html; var old=document.title; document.title=title;
    document.body.classList.add('printing'); window.__mqPrinting=true;
    var finished=false, onAfter;
    var done=function(){ if(finished) return; finished=true; document.body.classList.remove('printing'); document.title=old; r.innerHTML=''; window.__mqPrinting=false; window.removeEventListener('afterprint',onAfter); };
    /* sur mobile, l'aperçu PDF est construit après coup : on garde le document imprimable un moment après « afterprint » */
    onAfter=function(){ setTimeout(done,2000); };
    window.addEventListener('afterprint',onAfter);
    setTimeout(function(){ try{ window.print(); }catch(e){ done(); } },60);
    setTimeout(done,180000);
  }

  /* ---- page de l'enseignant ---- */
  function themesOf(){ return (D(st.cyc).CL[st.cls]||[]); }
  function avail(){ var d=D(st.cyc); return st.th.reduce(function(s,t){ return s+(d.TH[t]||[]).length; },0); }
  function curDur(){ return st.dur!=null ? st.dur : Math.ceil(st.n*1.5); }
  function canon(cyc,cls,th){ var nm=(D(cyc).CL[cls]||[]); return th.slice().sort(function(a,b){ return nm.indexOf(a)-nm.indexOf(b); }); }
  function params(){ return {cyc:st.cyc,cls:st.cls,th:canon(st.cyc,st.cls,st.th),n:Math.min(st.n,avail()),seed:st.seed,dur:curDur(),ent:entOf(st.cls)}; }

  window.renderEvalPage = function(){
    if(st.kind==='S'&&window.renderSomPage) return window.renderSomPage();
    var y=window.scrollY||0, app=document.getElementById('app');
    if(st.cyc==null){ st.cyc=currentCycle; st.cls=currentClass; }
    var d=D(st.cyc), clsOpts='';
    [1,2].forEach(function(c){ clsOpts+='<optgroup label="'+(c===1?'1er cycle':'2nd cycle')+'">'+Object.keys(D(c).CL).map(function(k){ return '<option value="'+c+'|'+k+'" '+(st.cyc===c&&st.cls===k?'selected':'')+'>'+k+'</option>'; }).join('')+'</optgroup>'; });
    var th=themesOf().map(function(t,i){ var on=st.th.indexOf(t)>=0; return '<label style="display:flex;gap:8px;align-items:flex-start;padding:7px 0;border-bottom:1px solid var(--border);font-size:13px;color:var(--text);cursor:pointer;"><input type="checkbox" '+(on?'checked':'')+' onchange="evTheme('+i+')" style="margin-top:3px;"><span style="flex:1;">'+evEsc(short(t))+' <span style="color:var(--text-muted);">('+(d.TH[t]||[]).length+')</span></span></label>'; }).join('');
    var ok=st.th.length>0, p=params(), ready=ok&&st.seed!=null;
    var nOpts=[5,8,10,12,15,20,25,30].map(function(v){ return '<option value="'+v+'" '+(st.n===v?'selected':'')+'>'+v+'</option>'; }).join('');
    var btn='width:100%;padding:12px;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;';
    var res='';
    if(ready){
      var ref=encode(p,st.diff?'D':'F');
      res='<div style="background:var(--accent-bg);border-radius:10px;padding:12px;margin-top:12px;">'+
        '<div style="font-size:12px;color:var(--accent-text);font-weight:700;">R\u00e9f\u00e9rence de l\u2019\u00e9valuation</div>'+
        '<div style="font-family:monospace;font-size:14px;font-weight:700;color:var(--accent-text);word-break:break-all;margin:4px 0 8px;">'+ref+'</div>'+
        '<div style="font-size:12px;color:var(--text-sec);margin-bottom:8px;">'+p.n+' questions \u00b7 '+p.dur+' min \u00b7 '+evEsc(p.cls)+(st.diff?' \u00b7 3 parcours':(st.ab?' \u00b7 versions A et B':''))+'</div>'+
        (st.diff?
          [1,2,3].map(function(g){ var pc=PARCOURS[g]; return '<div style="border:1px solid var(--border);border-radius:10px;padding:8px;margin-bottom:8px;background:var(--surface);"><div style="font-size:13px;font-weight:800;color:var(--text);margin-bottom:6px;">'+pc.sym+' '+pc.nom+' <span style="font-weight:500;color:var(--text-muted);">\u00b7 '+pc.cle+'</span></div><div style="display:flex;gap:6px;"><button onclick="evPrint(\'sujet\','+g+')" style="flex:1;padding:9px;border:none;border-radius:8px;background:var(--accent);color:#fff;font-weight:700;font-size:12.5px;font-family:inherit;cursor:pointer;">\u2b07 Sujet</button><button onclick="evPrint(\'corrige\','+g+')" style="flex:1;padding:9px;border:none;border-radius:8px;background:var(--success);color:#fff;font-weight:700;font-size:12.5px;font-family:inherit;cursor:pointer;">\u2b07 Corrig\u00e9</button></div></div>'; }).join('')+
          '<button onclick="evPrint(\'sujet\',0)" style="'+btn+'background:var(--accent);color:#fff;margin-bottom:8px;">\u2b07 Les 3 sujets en un seul PDF</button>'+
          '<button onclick="evPrint(\'corrige\',0)" style="'+btn+'background:var(--success);color:#fff;margin-bottom:8px;">\u2b07 Fiche enseignant + 3 corrig\u00e9s</button>'
        :
          '<button onclick="evPrint(\'sujet\')" style="'+btn+'background:var(--accent);color:#fff;margin-bottom:8px;">\u2b07 T\u00e9l\u00e9charger le sujet (PDF)</button>'+
          '<button onclick="evPrint(\'corrige\')" style="'+btn+'background:var(--success);color:#fff;margin-bottom:8px;">\u2b07 T\u00e9l\u00e9charger le corrig\u00e9 (PDF)</button>')+
        (st.diff?
          '<div style="display:flex;gap:6px;margin-bottom:8px;"><button onclick="evWord(\'sujet\',0)" style="flex:1;padding:10px;border:1px solid var(--accent);border-radius:10px;background:transparent;color:var(--accent-text);font-weight:700;font-size:12.5px;font-family:inherit;cursor:pointer;">\u2b07 3 sujets (Word)</button><button onclick="evWord(\'corrige\',0)" style="flex:1;padding:10px;border:1px solid var(--success);border-radius:10px;background:transparent;color:var(--success);font-weight:700;font-size:12.5px;font-family:inherit;cursor:pointer;">\u2b07 Fiche + corrig\u00e9s (Word)</button></div>':
          '<div style="display:flex;gap:6px;margin-bottom:8px;"><button onclick="evWord(\'sujet\')" style="flex:1;padding:10px;border:1px solid var(--accent);border-radius:10px;background:transparent;color:var(--accent-text);font-weight:700;font-size:12.5px;font-family:inherit;cursor:pointer;">\u2b07 Sujet (Word)</button><button onclick="evWord(\'corrige\')" style="flex:1;padding:10px;border:1px solid var(--success);border-radius:10px;background:transparent;color:var(--success);font-weight:700;font-size:12.5px;font-family:inherit;cursor:pointer;">\u2b07 Corrig\u00e9 (Word)</button></div>')+
        '<button onclick="evCopy()" style="'+btn+'background:transparent;border:1px solid var(--border-strong);color:var(--text-sec);font-weight:600;font-size:13px;">\ud83d\udccb Copier la r\u00e9f\u00e9rence</button>'+
        '<div style="font-size:11px;color:var(--text-muted);margin-top:8px;line-height:1.5;">Dans la fen\u00eatre qui s\u2019ouvre, choisis <b>Enregistrer au format PDF</b> comme imprimante. Le nom du fichier contient la r\u00e9f\u00e9rence.</div>'+
        '</div>';
    }
    var wa='https://wa.me/'+WA+'?text='+encodeURIComponent('Bonjour, je souhaite acc\u00e9der \u00e0 l\u2019\u00e9valuation sommative (format examen) de MathChrono-Quiz pour la classe de '+st.cls+'.');
    app.innerHTML =
      '<div class="card" style="padding:1.1rem;">'+
        '<div style="font-size:17px;font-weight:800;color:var(--text);margin-bottom:2px;">\ud83d\udcdd \u00c9valuation \u00e0 imprimer</div>'+
        '<div style="font-size:12px;color:var(--text-muted);margin-bottom:12px;line-height:1.5;">G\u00e9n\u00e8re un sujet de QCM et son corrig\u00e9 \u00e0 partir de la banque de questions.</div>'+
        '<div style="display:flex;gap:6px;margin-bottom:12px;">'+
          '<div style="flex:1;padding:9px;border-radius:10px;text-align:center;background:var(--accent);color:#fff;font-size:13px;font-weight:700;">Formative</div>'+
          '<button onclick="evKind(\'S\')" style="flex:1;padding:9px;border-radius:10px;border:1px solid var(--border-strong);background:transparent;color:var(--text-sec);font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">Sommative \u00b7 format examen</button>'+
        '</div>'+
        '<div class="theme-label">Classe</div>'+
        '<select class="theme-select" onchange="evClass(this.value)" style="margin-bottom:10px;">'+clsOpts+'</select>'+
        '<div class="theme-label" style="display:flex;justify-content:space-between;align-items:center;"><span>Th\u00e8mes de l\u2019\u00e9valuation</span><span><a href="#" onclick="evAll(true);return false;" style="font-size:12px;color:var(--accent);">Tout</a> \u00b7 <a href="#" onclick="evAll(false);return false;" style="font-size:12px;color:var(--accent);">Aucun</a></span></div>'+
        '<div style="max-height:260px;overflow:auto;border:1px solid var(--border);border-radius:10px;padding:0 10px;margin-bottom:10px;">'+th+'</div>'+
        '<div style="display:flex;gap:10px;margin-bottom:10px;">'+
          '<div style="flex:1;"><div class="theme-label">Questions</div><select class="theme-select" onchange="evN(this.value)">'+nOpts+'</select></div>'+
          '<div style="flex:1;"><div class="theme-label">Dur\u00e9e (min)</div><input type="number" min="5" max="120" value="'+curDur()+'" onchange="evDur(this.value)" class="theme-select" style="width:100%;"></div>'+
        '</div>'+
        window.entFormHTML(st.cls)+'<div class="theme-label">Diff\u00e9renciation</div>'+
        '<div style="display:flex;gap:6px;margin-bottom:8px;">'+
          '<button onclick="evDiff(false)" style="flex:1;padding:8px;border-radius:8px;font-family:inherit;font-size:12.5px;font-weight:700;cursor:pointer;border:1px solid var(--border-strong);'+(!st.diff?'background:var(--accent);color:#fff;':'background:transparent;color:var(--text-sec);')+'">Un seul sujet</button>'+
          '<button onclick="evDiff(true)" style="flex:1;padding:8px;border-radius:8px;font-family:inherit;font-size:12.5px;font-weight:700;cursor:pointer;border:1px solid var(--border-strong);'+(st.diff?'background:var(--accent);color:#fff;':'background:transparent;color:var(--text-sec);')+'">3 parcours \u25b2 \u25a0 \u25cf</button>'+
        '</div>'+
        (st.diff?'<div style="font-size:12px;color:var(--text-sec);line-height:1.5;background:var(--surface2);border-radius:8px;padding:8px 10px;margin-bottom:12px;">M\u00eames th\u00e8mes, trois sujets : <b>\u25b2 je retiens</b> (bases), <b>\u25a0 j\u2019applique</b> (attendu), <b>\u25cf je raisonne</b> (approfondissement). Les \u00e9l\u00e8ves ne voient qu\u2019un symbole, sans mention de niveau.</div>':
          '<label style="display:flex;gap:8px;align-items:center;font-size:13px;color:var(--text);margin-bottom:12px;cursor:pointer;"><input type="checkbox" '+(st.ab?'checked':'')+' onchange="evAB(this.checked)"> Pr\u00e9parer aussi une <b>version B</b> (ordre diff\u00e9rent)</label>')+
        (ok&&p.n<st.n?'<div style="font-size:12px;color:var(--danger);margin-bottom:8px;">Seulement '+avail()+' questions disponibles : le sujet en contiendra '+p.n+'.</div>':'')+
        '<button onclick="evGen()" '+(ok?'':'disabled')+' style="'+btn+'background:'+(ok?'var(--accent-text)':'var(--border-strong)')+';color:#fff;">\ud83c\udfb2 '+(ready?'G\u00e9n\u00e9rer un autre tirage':'G\u00e9n\u00e9rer l\u2019\u00e9valuation')+'</button>'+
        res+
        '<div style="border-top:1px solid var(--border);margin-top:16px;padding-top:12px;">'+
          '<div class="theme-label">Retrouver une \u00e9valuation avec sa r\u00e9f\u00e9rence</div>'+
          '<div style="display:flex;gap:6px;"><input id="ev-ref" oninput="evCleanRef(this)" placeholder="MQ1-F13..." class="theme-select" style="flex:1;font-family:monospace;text-transform:uppercase;"><button onclick="evFind()" style="padding:0 14px;border-radius:8px;border:1px solid var(--border-strong);background:transparent;color:var(--text);font-weight:700;cursor:pointer;">OK</button></div>'+
          '<div id="ev-msg" style="font-size:12px;color:var(--danger);margin-top:6px;"></div>'+
        '</div>'+
      '</div>';
    window.scrollTo(0,y);
  };

  window.evClass=function(v){ var a=v.split('|'); st.cyc=+a[0]; st.cls=a[1]; st.th=[]; st.seed=null; renderEvalPage(); };
  window.evTheme=function(i){ var t=themesOf()[i], k=st.th.indexOf(t); if(k>=0) st.th.splice(k,1); else st.th.push(t); st.seed=null; renderEvalPage(); };
  window.evAll=function(on){ st.th=on?themesOf().slice():[]; st.seed=null; renderEvalPage(); };
  window.evN=function(v){ st.n=+v; st.dur=null; st.seed=null; renderEvalPage(); };
  window.evDur=function(v){ var n=Math.max(5,Math.min(120,+v||15)); st.dur=n; renderEvalPage(); };
  window.evAB=function(on){ st.ab=!!on; renderEvalPage(); };
  window.evDiff=function(on){ st.diff=!!on; if(on) st.ab=false; st.seed=null; renderEvalPage(); };
  window.evGen=function(){ if(!st.th.length) return; st.seed=(Math.floor(Math.random()*4294967295)>>>0); renderEvalPage(); };
  window.evCleanRef=function(el){ var c=cleanRef(el.value); if(c&&c!==el.value) el.value=c; };
  window.evCopy=function(){ var r=encode(params(),'F'); copyText(r); var b=window.event&&window.event.target; if(b){ var o=b.textContent; b.textContent='\u2705 R\u00e9f\u00e9rence copi\u00e9e'; setTimeout(function(){ b.textContent=o; },1600); } };
  window.evFind=function(){
    var v=document.getElementById('ev-ref').value, p=decode(v), m=document.getElementById('ev-msg');
    if(!p||p.error){ m.textContent=(p&&p.error)||'R\u00e9f\u00e9rence invalide : v\u00e9rifie qu\u2019elle est recopi\u00e9e en entier.'; return; }
    if(p.mode==='S'){ st.kind='S'; if(window.somLoad) window.somLoad(p); return; }
    st.cyc=p.cyc; st.cls=p.cls; st.th=p.th; st.n=p.n; st.dur=null; st.seed=p.seed; st.diff=(p.mode==='D'); if(st.diff) st.ab=false; renderEvalPage();
  };
  window.evPrint=function(kind,g){
    var p=params(); if(st.seed==null||!p.th.length) return;
    var tag=p.cls.replace(/[^A-Za-z0-9]/g,'');
    if(st.diff){
      var ref=encode(p,'D'), safe=ref.replace(/[^A-Z0-9-]/g,''), sets=pickDiffAll(p), html='', gs=(g?[g]:[1,2,3]);
      if(kind==='sujet'){ html=gs.map(function(x){ return sujetHTML(p,sets[x],'',ref,{g:x}); }).join('<div class="ev-pb"></div>'); }
      else { html=(g?'':guideHTML(p,sets,ref)+'<div class="ev-pb"></div>')+gs.map(function(x){ return corrigeHTML(p,sets[x],'',ref,{g:x}); }).join('<div class="ev-pb"></div>'); }
      printDoc(html,'MathChrono-Quiz_'+(kind==='sujet'?'Sujets':'Corriges')+'_'+tag+'_'+safe+(g?'_P'+g:''));
      return;
    }
    var ref=encode(p,'F'), A=pick(p), html='', safe=ref.replace(/[^A-Z0-9-]/g,'');
    if(kind==='sujet'){
      html=sujetHTML(p,A,st.ab?'A':'',ref);
      if(st.ab) html+='<div class="ev-pb"></div>'+sujetHTML(p,versionB(A,p.seed),'B',ref);
    } else {
      html=corrigeHTML(p,A,st.ab?'A':'',ref);
      if(st.ab) html+='<div class="ev-pb"></div>'+corrigeHTML(p,versionB(A,p.seed),'B',ref);
    }
    printDoc(html,'MathChrono-Quiz_'+(kind==='sujet'?'Sujet':'Corrige')+'_'+tag+'_'+safe);
  };
  // pour les tests
  window.__EV={entOf:entOf,cleanRef:cleanRef,printDoc:printDoc,download:download,pickDiffAll:pickDiffAll,lvl:lvl,guideHTML:guideHTML,PARCOURS:PARCOURS,pick:pick,versionB:versionB,encode:encode,decode:decode,sujetHTML:sujetHTML,corrigeHTML:corrigeHTML,state:st};
})();



/* ── 70-som-ui.js ── */
/* ===== Évaluation sommative : interface, code enseignant signé, en-tête du sujet ===== */
(function(){
  var PUB={"kty": "EC", "crv": "P-256", "x": "mcuMAjczdv4fga_RPtvefmgofGSNHE3nsZTmFOiEs5A", "y": "Njh8oIEuwagGGsKdrH4ThAuCnSqRhtotIRitCgkbZ-s"}, WA='2290197890952', LSK='mq_lic', SOMV=2; /* version du moteur : champ « n » de la référence = SOMV × 10 + consignes par problème (la version 1 = 4 consignes) */
  window.__MQ_PUB=PUB;
  var ss={cls:'3e',th:[],seed:null,msg:'',dur:120,lic:null,chk:false,calc:null};
  function EVX(){ return window.__EV; }
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function two(n){ return ('0'+n).slice(-2); }
  function today(){ var d=new Date(); return d.getFullYear()+'-'+two(d.getMonth()+1)+'-'+two(d.getDate()); }
  var VALID_MONTHS=2; /* un code est valable au plus 2 mois après sa délivrance, quelle que soit la date inscrite */
  function addMonths(iso,n){ var p=String(iso).split('-').map(Number); var y=p[0], m=p[1]-1+n; y+=Math.floor(m/12); m=((m%12)+12)%12; var dim=new Date(y,m+1,0).getDate(); return y+'-'+two(m+1)+'-'+two(Math.min(p[2],dim)); }
  function effExp(p){ if(!p||!p.e) return ''; if(p.i&&/^\d{4}-\d{2}-\d{2}$/.test(p.i)){ var cap=addMonths(p.i,VALID_MONTHS); return cap<p.e?cap:p.e; } return p.e; }
  function frDate(iso){ var p=String(iso).split('-'); return p.length===3?p[2]+'/'+p[1]+'/'+p[0]:iso; }
  function b64u(s){ s=s.replace(/-/g,'+').replace(/_/g,'/'); while(s.length%4) s+='='; var bin=atob(s), u=new Uint8Array(bin.length); for(var i=0;i<bin.length;i++) u[i]=bin.charCodeAt(i); return u; }
  /* ---- vérification d'un code (signature ECDSA P-256 + date d'expiration) ---- */
  function verify(code){
    code=String(code||'').replace(/\s+/g,'');
    var m=/^MQ1\.([A-Za-z0-9_-]+)\.([A-Za-z0-9_-]+)$/.exec(code);
    if(!m) return Promise.resolve({ok:false,err:'Code invalide : copie-le en entier, sans rien ajouter ni retirer.'});
    if(!(window.crypto&&window.crypto.subtle)) return Promise.resolve({ok:false,soft:true,err:'Ce navigateur ne permet pas de v\u00e9rifier le code. Ouvre le site avec Chrome, en connexion s\u00e9curis\u00e9e.'});
    var pb,sg; try{ pb=b64u(m[1]); sg=b64u(m[2]); }catch(e){ return Promise.resolve({ok:false,err:'Code invalide.'}); }
    return crypto.subtle.importKey('jwk',PUB,{name:'ECDSA',namedCurve:'P-256'},false,['verify']).then(function(k){ return crypto.subtle.verify({name:'ECDSA',hash:'SHA-256'},k,sg,pb); }).then(function(ok){
      if(!ok) return {ok:false,err:'Code incorrect. V\u00e9rifie-le ou demande-le \u00e0 nouveau sur WhatsApp.'};
      var p; try{ p=JSON.parse(new TextDecoder().decode(pb)); }catch(e){ return {ok:false,err:'Code invalide.'}; }
      if(p&&p.t) return {ok:false,err:'Ceci est un code \u00e9l\u00e8ve (classe). Il se colle sur l\u2019\u00e9cran de la classe, pas ici.'};
      var dv=window.mqDeviceCheck(p); if(dv) return dv;
      var ex=effExp(p);
      if(!ex||ex<today()) return {ok:false,expired:true,name:p&&p.n,exp:ex,err:'Ce code a expir\u00e9'+(ex?' le '+frDate(ex):'')+'. Demande-en un nouveau sur WhatsApp.'};
      return {ok:true,name:p.n||'',exp:ex,code:code};
    }).catch(function(){ return {ok:false,soft:true,err:'Code invalide.'}; });
  }
  function unlocked(){ return !!(ss.lic&&ss.lic.ok&&ss.lic.exp>=today()); }
  function stored(){ try{ return localStorage.getItem(LSK)||''; }catch(e){ return ''; } }
  function ensure(cb){
    if(unlocked()){ cb(); return; } ss.lic=null; var c=stored(); if(!c||ss.chk){ cb(); return; }
    ss.chk=true; verify(c).then(function(r){ ss.chk=false; if(r.ok) ss.lic=r; else { ss.msg=r.err||''; if(!r.expired&&!r.soft){ try{ localStorage.removeItem(LSK); }catch(e){} } } cb(); });
  }
  function themes(){ return window.MQ_SOM.availableThemes(ss.cls); }
  function modOf(t){ var l=themes(); for(var i=0;i<l.length;i++) if(l[i].theme===t) return l[i].mod; return null; }
  function mods(){ var m=[]; ss.th.forEach(function(t){ var k=modOf(t); if(k&&m.indexOf(k)<0) m.push(k); }); return m; }
  function cycOf(c){ return ['6e','5e','4e','3e'].indexOf(c)>=0?1:2; }
  function ref(){ return EVX().encode({cyc:cycOf(ss.cls),cls:ss.cls,th:ss.th,n:SOMV*10+window.MQ_SOM.sizing(ss.dur,ss.cls).per,seed:ss.seed},'S'); }
  function build(){ return window.MQ_SOM.buildEpreuve({cls:ss.cls,themes:ss.th,seed:ss.seed,ent:EVX().entOf(ss.cls),dur:ss.dur,calc:calcOn()}); }
  function calcDefault(c){ return !(c==='6e'||c==='5e'); }
  function calcOn(){ return ss.calc===null?calcDefault(ss.cls):!!ss.calc; }
  function short(t){ return t.replace(/^[^\u2014]+\u2014\s*/,''); }
  var BTN='width:100%;padding:12px;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;';
  var INP='width:100%;';

  function draw(){
    var y=window.scrollY||0, app=document.getElementById('app');
    var tiles='<div style="display:flex;gap:6px;margin-bottom:12px;"><button onclick="evKind(\'F\')" style="flex:1;padding:9px;border-radius:10px;border:1px solid var(--border-strong);background:transparent;color:var(--text-sec);font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">Formative</button><div style="flex:1;padding:9px;border-radius:10px;text-align:center;background:var(--accent);color:#fff;font-size:13px;font-weight:700;">Sommative \u00b7 format examen</div></div>';
    var head='<div style="font-size:17px;font-weight:800;color:var(--text);margin-bottom:2px;">\ud83d\udcdd \u00c9valuation sommative</div><div style="font-size:12px;color:var(--text-muted);margin-bottom:12px;line-height:1.5;">Un support, une t\u00e2che et trois probl\u00e8mes ind\u00e9pendants (deux dans les s\u00e9ries litt\u00e9raires), selon le format officiel du guide du programme.</div>';
    if(!unlocked()){
      var ent=EVX().state.ent||{};
      app.innerHTML='<div class="card" style="padding:1.1rem;">'+head+tiles+
        '<div style="background:var(--surface2);border-radius:10px;padding:12px;margin-bottom:12px;"><div style="font-size:14px;font-weight:800;color:var(--text);margin-bottom:4px;">\ud83d\udd12 Acc\u00e8s r\u00e9serv\u00e9 aux parents et enseignants</div><div style="font-size:12.5px;color:var(--text-sec);line-height:1.55;">Les \u00e9valuations \u00e0 imprimer (formatives et sommatives, avec corrig\u00e9s) sont accessibles avec le <b>code Parent / Enseignant</b> : <b>2 000 F</b>, valable 2 mois. Il d\u00e9bloque aussi <b>toute l\u2019application</b> (toutes les classes).</div></div>'+
        '<div class="theme-label">1. Obtenir le code</div>'+
        '<button onclick="goParentOffer()" style="'+BTN+'background:var(--success);color:#fff;margin-bottom:14px;">\ud83d\udcb3 Obtenir mon code Parent / Enseignant (2 000 F)</button>'+
        '<div class="theme-label">2. Saisir le code re\u00e7u</div>'+
        '<textarea id="som-code" rows="3" placeholder="Colle ici le code (commence par MQ1.)" autocomplete="off" class="theme-select" style="'+INP+'margin-bottom:8px;font-family:monospace;font-size:12px;"></textarea>'+
        '<button onclick="somUnlock()" style="'+BTN+'background:var(--accent-text);color:#fff;">D\u00e9verrouiller</button>'+
        '<div id="som-msg" style="font-size:12.5px;color:var(--danger);min-height:18px;margin-top:8px;line-height:1.4;">'+esc(ss.msg)+'</div></div>';
      window.scrollTo(0,y); return; }
    var cls=window.MQ_SOM.classes().map(function(c){ return '<button onclick="somCls(\''+c+'\')" style="flex:1;padding:10px;border-radius:10px;font-family:inherit;font-size:14px;font-weight:800;cursor:pointer;border:1px solid var(--border-strong);'+(ss.cls===c?'background:var(--accent);color:#fff;':'background:transparent;color:var(--text-sec);')+'">'+c+'</button>'; }).join('');
    var th=themes().map(function(o,i){ var on=ss.th.indexOf(o.theme)>=0; return '<label style="display:flex;gap:8px;align-items:flex-start;padding:7px 0;border-bottom:1px solid var(--border);font-size:13px;color:var(--text);cursor:pointer;"><input type="checkbox" '+(on?'checked':'')+' onchange="somTheme('+i+')" style="margin-top:3px;"><span style="flex:1;">'+esc(short(o.theme))+'</span></label>'; }).join('');
    var nm=mods().length, ready=ss.th.length>0&&ss.seed!=null, info, SZ=window.MQ_SOM.sizing(ss.dur,ss.cls);
    if(nm===0) info='Choisis les th\u00e8mes de l\u2019\u00e9valuation ('+SZ.need+' recommand\u00e9s, '+SZ.cap+' au maximum).';
    else if(nm<SZ.need) info=nm+' th\u00e8me'+(nm>1?'s':'')+' choisi'+(nm>1?'s':'')+' : l\u2019\u00e9preuve sera compl\u00e9t\u00e9e automatiquement avec d\u2019autres th\u00e8mes de la classe ('+SZ.need+' th\u00e8mes sont n\u00e9cessaires pour cette dur\u00e9e).';
    else if(nm===SZ.need&&SZ.need===SZ.np) info=nm+' th\u00e8mes choisis : un th\u00e8me par probl\u00e8me.';
    else if(nm===SZ.need) info=nm+' th\u00e8mes choisis : ils couvrent les '+SZ.per+' consignes de chaque probl\u00e8me.';
    else info=nm+' th\u00e8mes choisis : certains probl\u00e8mes comporteront plusieurs parties (A, B, C\u2026), une par th\u00e8me.';
    info+=' \u00c9preuve de '+window.MQ_SOM.fmtDur(ss.dur)+' : '+SZ.np+' probl\u00e8mes de '+SZ.per+' consignes ('+SZ.total+' au total).';
    var res='';
    if(ready){ var E=build(), r=ref(), en=E.ent||{}, miss=[]; if(!en.etab) miss.push('l\u2019\u00e9tablissement'); if(!en.annee) miss.push('l\u2019ann\u00e9e scolaire'); if(!en.coef) miss.push('le coefficient');
      res='<div style="background:var(--accent-bg);border-radius:10px;padding:12px;margin-top:12px;">'+
        '<div style="font-size:12px;color:var(--accent-text);font-weight:700;">R\u00e9f\u00e9rence de l\u2019\u00e9preuve</div><div style="font-family:monospace;font-size:14px;font-weight:700;color:var(--accent-text);word-break:break-all;margin:4px 0 8px;">'+r+'</div>'+
        '<div style="font-size:12.5px;color:var(--text-sec);line-height:1.6;margin-bottom:10px;"><b>'+esc(E.support.titre)+'</b><br>'+E.problems.map(function(p,i){ return 'Probl\u00e8me '+(i+1)+' : '+esc(p.themes.join(' + ')); }).join('<br>')+(E.auto.length?'<br><i>Compl\u00e9t\u00e9 avec : '+esc(E.auto.join(', '))+'</i>':'')+'</div>'+
        (miss.length?'<div style="font-size:12px;color:#8a5a00;background:#fff4dc;border-radius:8px;padding:7px 9px;margin-bottom:10px;line-height:1.45;">En-t\u00eate incomplet : '+miss.join(', ')+' ne '+(miss.length>1?'seront':'sera')+' pas imprim\u00e9'+(miss.length>1?'s':'')+' (ligne \u00e0 remplir \u00e0 la main).</div>':'')+
        '<div style="display:flex;gap:6px;margin-bottom:6px;"><button onclick="somPrint(\'sujet\')" style="flex:1;padding:11px;border:none;border-radius:10px;background:var(--accent);color:#fff;font-weight:700;font-size:13px;font-family:inherit;cursor:pointer;">\u2b07 Sujet PDF</button><button onclick="somWord(\'sujet\')" style="flex:1;padding:11px;border:none;border-radius:10px;background:var(--accent);color:#fff;font-weight:700;font-size:13px;font-family:inherit;cursor:pointer;">\u2b07 Sujet Word</button></div>'+
        '<div style="display:flex;gap:6px;margin-bottom:8px;"><button onclick="somPrint(\'corrige\')" style="flex:1;padding:11px;border:none;border-radius:10px;background:var(--success);color:#fff;font-weight:700;font-size:13px;font-family:inherit;cursor:pointer;">\u2b07 Corrig\u00e9 PDF</button><button onclick="somWord(\'corrige\')" style="flex:1;padding:11px;border:none;border-radius:10px;background:var(--success);color:#fff;font-weight:700;font-size:13px;font-family:inherit;cursor:pointer;">\u2b07 Corrig\u00e9 Word</button></div>'+
        '<button onclick="somCopy(this)" style="'+BTN+'background:transparent;border:1px solid var(--border-strong);color:var(--text-sec);font-weight:600;font-size:13px;">\ud83d\udccb Copier la r\u00e9f\u00e9rence</button>'+
        '<div style="font-size:11px;color:var(--text-muted);margin-top:8px;line-height:1.5;">PDF : dans la fen\u00eatre d\u2019impression, choisis \u00ab Enregistrer au format PDF \u00bb. Word : le fichier se t\u00e9l\u00e9charge et reste modifiable.</div></div>'; }
    app.innerHTML='<div class="card" style="padding:1.1rem;">'+head+tiles+
      '<div style="display:flex;justify-content:space-between;align-items:center;font-size:11.5px;color:var(--text-muted);margin-bottom:10px;"><span>\u2705 Acc\u00e8s Parent / Enseignant : <b style="color:var(--text);">'+esc(ss.lic.name||'')+'</b> \u00b7 valable jusqu\u2019au '+frDate(ss.lic.exp)+'</span><a href="#" onclick="somLogout();return false;" style="color:var(--accent);">Quitter</a></div>'+
      '<div class="theme-label">Classe</div><div style="display:flex;gap:6px;margin-bottom:4px;">'+cls+'</div><div style="font-size:11px;color:var(--text-muted);margin-bottom:10px;">Les autres classes seront ajout\u00e9es progressivement.</div>'+
      '<div class="theme-label" style="display:flex;justify-content:space-between;"><span>Th\u00e8mes de l\u2019\u00e9valuation</span><span style="color:var(--text-muted);">'+nm+' / '+SZ.cap+'</span></div>'+
      '<div style="border:1px solid var(--border);border-radius:10px;padding:0 10px;margin-bottom:8px;">'+th+'</div>'+
      '<div style="font-size:12px;color:var(--text-sec);line-height:1.5;margin-bottom:10px;">'+info+'</div>'+
      window.entFormHTML(ss.cls)+
      '<div class="theme-label">Dur\u00e9e (minutes) <span style="font-weight:400;color:var(--muted);">\u2014 habituelle en '+esc(ss.cls)+' : '+window.MQ_SOM.fmtDur(window.MQ_SOM.defaultDur(ss.cls))+'</span></div><input type="number" min="30" max="240" value="'+ss.dur+'" onchange="somDur(this.value)" class="theme-select" style="width:100%;margin-bottom:8px;">'+
      '<label style="display:flex;gap:8px;align-items:center;font-size:13px;color:var(--text);margin-bottom:10px;cursor:pointer;"><input type="checkbox" '+(calcOn()?'checked':'')+' onchange="somCalc(this.checked)"> Calculatrice autoris\u00e9e pour cette \u00e9preuve</label>'+
      '<div style="font-size:11.5px;color:var(--text-muted);line-height:1.5;background:var(--surface2);border-radius:8px;padding:8px 10px;margin-bottom:12px;">Bar\u00e8me officiel : Analyser 20 + Math\u00e9matiser 30 + Op\u00e9rer 40 + Perfectionnement 10 = 100 points, soit une note sur 20.</div>'+
      '<button onclick="somGen()" '+(ss.th.length?'':'disabled')+' style="'+BTN+'background:'+(ss.th.length?'var(--accent-text)':'var(--border-strong)')+';color:#fff;">\ud83c\udfb2 '+(ready?'G\u00e9n\u00e9rer une autre \u00e9preuve':'G\u00e9n\u00e9rer l\u2019\u00e9preuve')+'</button>'+res+
      '<div style="border-top:1px solid var(--border);margin-top:16px;padding-top:12px;"><div class="theme-label">Retrouver une \u00e9preuve avec sa r\u00e9f\u00e9rence</div><div style="display:flex;gap:6px;"><input id="som-ref" oninput="evCleanRef(this)" placeholder="MQ1-S13..." class="theme-select" style="flex:1;font-family:monospace;text-transform:uppercase;"><button onclick="somFind()" style="padding:0 14px;border-radius:8px;border:1px solid var(--border-strong);background:transparent;color:var(--text);font-weight:700;cursor:pointer;">OK</button></div><div id="som-msg" style="font-size:12px;color:var(--danger);margin-top:6px;">'+esc(ss.msg)+'</div></div></div>';
    window.scrollTo(0,y);
  }
  window.renderSomPage=function(){
    var app=document.getElementById('app');
    if(!unlocked()&&stored()&&!ss.chk&&!ss.lic){ app.innerHTML='<div class="card" style="padding:1.1rem;font-size:13px;color:var(--text-muted);">V\u00e9rification de ton code\u2026</div>'; }
    ensure(draw);
  };
  window.somAsk=function(){ var n=document.getElementById('som-nom').value.trim(), e=document.getElementById('som-etab').value.trim(), m=document.getElementById('som-msg'); ss.askNom=n; ss.askEtab=e;
    if(!n){ m.textContent='Indique ton nom pour que je sache \u00e0 qui envoyer le code.'; return; }
    var txt='Bonjour, je suis '+n+', enseignant(e) de math\u00e9matiques'+(e?' \u00e0 '+e:'')+'. Je souhaite recevoir mon code d\u2019acc\u00e8s \u00e0 l\u2019\u00e9valuation sommative de MathChrono-Quiz. Identifiant de mon appareil : '+window.mqDeviceId()+'. Merci.';
    var url='https://wa.me/'+WA+'?text='+encodeURIComponent(txt); try{ window.open(url,'_blank'); }catch(x){ location.href=url; } };
  window.somUnlock=function(){ var v=document.getElementById('som-code').value, m=document.getElementById('som-msg'); if(!v.trim()){ m.textContent='Colle le code re\u00e7u sur WhatsApp.'; return; } m.style.color='var(--text-muted)'; m.textContent='V\u00e9rification\u2026';
    verify(v).then(function(r){ if(r.ok){ try{ localStorage.setItem(LSK,r.code); }catch(e){} ss.lic=r; ss.msg=''; if(window.MQ_ACCES) MQ_ACCES.refresh(); draw(); } else { m.style.color='var(--danger)'; m.textContent=r.err; } }); };
  window.somLogout=function(){ try{ localStorage.removeItem(LSK); }catch(e){} ss.lic=null; ss.msg=''; if(window.MQ_ACCES) MQ_ACCES.refresh(); draw(); };
  window.somCls=function(c){ ss.cls=c; ss.th=[]; ss.seed=null; ss.msg=''; ss.calc=null; ss.dur=window.MQ_SOM.defaultDur(c); draw(); };
  window.somCalc=function(on){ ss.calc=!!on; draw(); };
  window.somTheme=function(i){ var o=themes()[i], k=ss.th.indexOf(o.theme); if(k>=0) ss.th.splice(k,1); else { var m=mods(); var cap=window.MQ_SOM.sizing(ss.dur,ss.cls).cap; if(m.indexOf(o.mod)<0&&m.length>=cap){ ss.msg=cap+' th\u00e8mes au maximum pour une \u00e9preuve de '+window.MQ_SOM.fmtDur(ss.dur)+'.'; draw(); return; } ss.th.push(o.theme); } ss.msg=''; ss.seed=null; draw(); };
  window.somDur=function(v){ var n=Math.max(30,Math.min(240,parseInt(v,10)||120)); ss.dur=n; ss.seed=null; var cap=window.MQ_SOM.sizing(n,ss.cls).cap, cut=false; while(mods().length>cap&&ss.th.length){ ss.th.pop(); cut=true; } ss.msg=cut?'Dur\u00e9e modifi\u00e9e : '+cap+' th\u00e8mes au maximum, les derniers ont \u00e9t\u00e9 retir\u00e9s.':''; draw(); };
  window.somGen=function(){ if(!ss.th.length) return; ss.seed=(Math.floor(Math.random()*4294967295)>>>0); ss.msg=''; draw(); };
  function safe(r){ return r.replace(/[^A-Z0-9-]/g,''); }
  window.somPrint=function(kind){ if(ss.seed==null||!unlocked()) return; var E=build(), r=ref(); EVX().printDoc(kind==='sujet'?window.MQ_SOM.sujetHTML(E,r):window.MQ_SOM.corrigeHTML(E,r),'MathChrono-Quiz_'+(kind==='sujet'?'Sujet':'Corrige')+'_Sommative_'+ss.cls.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^A-Za-z0-9]/g,'')+'_'+safe(r)); };
  window.somWord=function(kind){ if(ss.seed==null||!unlocked()) return; var E=build(), r=ref(), p=(kind==='sujet')?window.MQ_SOM.sujetDocx(E,r):window.MQ_SOM.corrigeDocx(E,r);
    return p.then(function(bytes){ EVX().download(bytes,'MathChrono-Quiz_'+(kind==='sujet'?'Sujet':'Corrige')+'_Sommative_'+ss.cls.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^A-Za-z0-9]/g,'')+'_'+safe(r)+'.docx','application/vnd.openxmlformats-officedocument.wordprocessingml.document'); }); };
  window.somCopy=function(btn){ copyText(ref()); var b=btn||(window.event&&window.event.target); if(b){ var o=b.textContent; b.textContent='\u2705 R\u00e9f\u00e9rence copi\u00e9e'; setTimeout(function(){ b.textContent=o; },1600); } };
  window.somLoad=function(p){ var ver=p.n===1?1:Math.floor(p.n/10), per=p.n===1?4:p.n%10; if(ver!==1&&ver!==SOMV||per<3||per>8){ ss.msg='Cette \u00e9preuve vient d\u2019une autre version de la banque de probl\u00e8mes.'; window.renderSomPage(); return; } ss.cls=p.cls; ss.th=p.th.slice(); ss.seed=p.seed; ss.msg=''; var dd=window.MQ_SOM.defaultDur(p.cls); ss.dur=(window.MQ_SOM.perProb(dd,p.cls)===per)?dd:window.MQ_SOM.durOfPer(per,p.cls); window.renderSomPage(); };
  window.somFind=function(){ var v=document.getElementById('som-ref').value, d=EVX().decode(v), m=document.getElementById('som-msg'); if(!d||d.error){ m.textContent=(d&&d.error)||'R\u00e9f\u00e9rence invalide : v\u00e9rifie qu\u2019elle est recopi\u00e9e en entier.'; return; } if(d.mode!=='S'){ m.textContent='Cette r\u00e9f\u00e9rence concerne une \u00e9valuation formative.'; return; } window.somLoad(d); };
  /* ---- ouverture par lien : https://.../?code=MQ1.... ---- */
  window.somFromUrl=function(){ try{ var q=new URLSearchParams(location.search), c=q.get('code'); if(!c) return Promise.resolve(null); if(window.MQ_ACCES&&MQ_ACCES.peekType(c)==='E') return Promise.resolve(null);
    return verify(c).then(function(r){ if(r.ok){ try{ localStorage.setItem(LSK,r.code); }catch(e){} ss.lic=r; ss.msg=''; if(window.MQ_ACCES) MQ_ACCES.refresh(); } else ss.msg=r.err; try{ history.replaceState(null,'',location.pathname); }catch(e){} EVX().state.kind='S'; setTimeout(function(){ if(window.renderEvalPage) window.renderEvalPage(); },700); return r; }); }catch(e){ return Promise.resolve(null); } };
  window.__SOM={state:ss,build:build,ref:ref,verify:verify,unlocked:unlocked,today:today};
  if(typeof document!=='undefined'&&document.readyState!=='loading') setTimeout(window.somFromUrl,300); else if(typeof document!=='undefined') document.addEventListener('DOMContentLoaded',function(){ setTimeout(window.somFromUrl,300); });
})();


/* ── 75-lazy.js ── */
/* ===== Chargement à la demande des données par classe =====
   Les questions + résumés de chaque classe sont dans data/c-<classe>.js ; les problèmes sommatifs, par blocs (data/s-NN.js).
   Ils ne sont téléchargés que lorsqu'on utilise la classe. Mode « mono » (fichier unique) : tout est déjà présent. */
(function(){
  'use strict';
  var IDX = window.MQ_INDEX || {mono:true};
  var done = {}, pend = {}, lt = null, lastRetry = null;

  function url(p){ return p + (IDX.v ? '?v=' + IDX.v : ''); }
  function loadScript(p){
    if(done[p]) return Promise.resolve();
    if(pend[p]) return pend[p];
    pend[p] = new Promise(function(res, rej){
      var s = document.createElement('script'); s.src = url(p); s.async = false;
      s.onload = function(){ done[p] = true; delete pend[p]; res(); };
      s.onerror = function(){ delete pend[p]; try{ s.parentNode.removeChild(s); }catch(e){} rej(new Error('Chargement impossible : ' + p)); };
      document.head.appendChild(s);
    });
    return pend[p];
  }
  function somFiles(cls){ var b = (window.MQ_SOM && window.MQ_SOM.baseCls) ? window.MQ_SOM.baseCls(cls) : cls; return (IDX.som && IDX.som[b]) || []; }   // 2nde C partage les modules de 2nde D
  function classFile(cls){ return IDX.cls && IDX.cls[cls]; }

  function isLoaded(kind, cls){
    if(IDX.mono) return true;
    if(kind === 'c'){ var f = classFile(cls); return !f || !!done[f]; }
    return somFiles(cls).every(function(f){ return !!done[f]; });
  }
  function ensureClass(cls){
    var f = classFile(cls);
    if(IDX.mono || !f || done[f]) return Promise.resolve();
    return loadScript(f).then(function(){ try{ rebuildAllQ(); }catch(e){} });
  }
  function ensureSom(cls){
    var p = Promise.resolve();
    if(IDX.mono) return p;
    somFiles(cls).forEach(function(f){ p = p.then(function(){ return loadScript(f); }); });   // ordre d'origine conservé
    return p;
  }

  function showLoading(){
    clearTimeout(lt);
    lt = setTimeout(function(){
      var a = document.getElementById('app');
      if(a) a.innerHTML = '<div id="mqLoading" style="text-align:center;padding:3rem 1rem;color:var(--text-muted);font-size:14px;">⏳ Chargement…</div>';
    }, 120);
  }
  function showError(retry){
    clearTimeout(lt); lastRetry = retry;
    var a = document.getElementById('app');
    if(a) a.innerHTML = '<div style="text-align:center;padding:2.5rem 1rem;"><div style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:6px;">Impossible de charger les données</div>' +
      '<div style="font-size:13px;color:var(--text-muted);margin-bottom:14px;line-height:1.5;">Vérifie ta connexion internet, puis réessaie. Une fois chargée, une classe reste disponible hors ligne.</div>' +
      '<button onclick="mqRetryLoad()" style="padding:11px 22px;border:none;border-radius:10px;background:var(--accent);color:#fff;font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;">Réessayer</button></div>';
  }
  window.mqRetryLoad = function(){ var r = lastRetry; lastRetry = null; if(r) r(); };

  // exécute fn tout de suite si les données sont là, sinon après chargement
  function whenReady(kind, cls, fn, self, args){
    if(isLoaded(kind, cls)) return fn.apply(self, args);
    showLoading();
    var go = function(){
      (kind === 'c' ? ensureClass(cls) : ensureSom(cls)).then(function(){
        clearTimeout(lt);
        fn.apply(self, args);
        if(window.__navFix) window.__navFix();     // le bouton Retour est réaffiché après le rendu différé
      }, function(){ showError(go); });
    };
    go();
  }
  function wrap(name, clsOf, kind){
    var f = window[name]; if(typeof f !== 'function') return;
    window[name] = function(){
      var cls = clsOf.apply(this, arguments);
      return cls ? whenReady(kind, cls, f, this, arguments) : f.apply(this, arguments);
    };
  }
  wrap('startQuiz',       function(){ return currentClass; }, 'c');
  wrap('startClasseMode', function(){ return currentClass; }, 'c');
  wrap('renderEvalPage',  function(){ var E = window.__EV && window.__EV.state; return E && E.cls; }, 'c');
  wrap('renderSomPage',   function(){ var S = window.__SOM && window.__SOM.state; return S && S.cls; }, 'som');
  wrap('somCls',          function(c){ return c; }, 'som');
  wrap('somLoad',         function(p){ return p && p.cls; }, 'som');

  window.MQ_DATA = {
    ensureClass: ensureClass, ensureSom: ensureSom, isLoaded: isLoaded,
    // tout charger (tests, ou futur bouton « Télécharger pour le hors ligne »)
    all: function(){
      var ps = [];
      Object.keys(IDX.cls || {}).forEach(function(c){ ps.push(ensureClass(c)); });
      Object.keys(IDX.som || {}).forEach(function(c){ ps.push(ensureSom(c)); });   // clés = classes de base
      return Promise.all(ps);
    }
  };
})();

/* ── 80-access.js ── */
/* ===== Accès élève : code personnel par classe (200 F, 30 jours), thème d'essai gratuit ===== */
(function(){
  var PUB=window.__MQ_PUB, LSK='mq_acc';
  var PAY={ MONTANT:200, JOURS:30, WHATSAPP:'2290197890952',
    CODE_MOOV:'*855*41*258051*{M}*1#', CODE_MTN:'*880*41*171251*{M}#' };
  var ACC={};            /* classe -> {exp,name,code} : codes élèves valides */
  var teacherExp='';     /* fin de validité d'un code enseignant valide (accès à toutes les classes) */
  var ready=false;

  function two(n){ return ('0'+n).slice(-2); }
  function today(){ var d=new Date(); return d.getFullYear()+'-'+two(d.getMonth()+1)+'-'+two(d.getDate()); }
  function addDays(iso,n){ var p=String(iso).split('-').map(Number); var d=new Date(Date.UTC(p[0],p[1]-1,p[2]+n)); return d.getUTCFullYear()+'-'+two(d.getUTCMonth()+1)+'-'+two(d.getUTCDate()); }
  function frDate(iso){ var p=String(iso).split('-'); return p.length===3?p[2]+'/'+p[1]+'/'+p[0]:iso; }
  function daysLeft(iso){ var a=today().split('-').map(Number), b=String(iso).split('-').map(Number); return Math.round((Date.UTC(b[0],b[1]-1,b[2])-Date.UTC(a[0],a[1]-1,a[2]))/86400000); }
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function b64u(s){ s=s.replace(/-/g,'+').replace(/_/g,'/'); while(s.length%4) s+='='; var bin=atob(s), u=new Uint8Array(bin.length); for(var i=0;i<bin.length;i++) u[i]=bin.charCodeAt(i); return u; }
  function allClasses(){ return Object.keys(CLASSES_C1).concat(Object.keys(CLASSES_C2)); }
  function themesOf(cls){ return CLASSES_C1[cls]||CLASSES_C2[cls]||[]; }
  function trial(cls){ var l=themesOf(cls); for(var i=0;i<l.length;i++) if(!/Prop\. & D/.test(l[i])) return l[i]; return l[0]||'Tous'; }
  function label(t){ return String(t).replace(/^[\w]+ — /,'').replace(/^[36]e — /,''); }

  /* type d'un code sans le vérifier : 'E' = élève, sinon enseignant */
  function peekType(code){ try{ var m=/^MQ1\.([A-Za-z0-9_-]+)\./.exec(String(code||'').replace(/\s+/g,'')); if(!m) return ''; return (JSON.parse(new TextDecoder().decode(b64u(m[1])))||{}).t||''; }catch(e){ return ''; } }

  /* ---- vérification d'un code élève (signature ECDSA P-256 + classe + date) ---- */
  function verify(code){
    code=String(code||'').replace(/\s+/g,'');
    var m=/^MQ1\.([A-Za-z0-9_-]+)\.([A-Za-z0-9_-]+)$/.exec(code);
    if(!m) return Promise.resolve({ok:false,err:'Code invalide : copie-le en entier, sans rien ajouter ni retirer.'});
    if(!(window.crypto&&window.crypto.subtle)) return Promise.resolve({ok:false,soft:true,err:'Ce navigateur ne permet pas de vérifier le code. Ouvre le site avec Chrome, en connexion sécurisée.'});
    var pb,sg; try{ pb=b64u(m[1]); sg=b64u(m[2]); }catch(e){ return Promise.resolve({ok:false,err:'Code invalide.'}); }
    return crypto.subtle.importKey('jwk',PUB,{name:'ECDSA',namedCurve:'P-256'},false,['verify']).then(function(k){ return crypto.subtle.verify({name:'ECDSA',hash:'SHA-256'},k,sg,pb); }).then(function(ok){
      if(!ok) return {ok:false,err:'Code incorrect. Vérifie-le ou demande-le à nouveau sur WhatsApp.'};
      var p; try{ p=JSON.parse(new TextDecoder().decode(pb)); }catch(e){ return {ok:false,err:'Code invalide.'}; }
      if(p.t!=='E'){ return {ok:false,teacher:true,err:'Ceci est un code enseignant. Il se colle dans « Évaluation à imprimer » puis « Sommative ».'}; }
      if(allClasses().indexOf(p.c)<0) return {ok:false,err:'Code invalide.'};
      var dv=window.mqDeviceCheck(p); if(dv) return dv;
      var ex=(p.i&&/^\d{4}-\d{2}-\d{2}$/.test(p.i))?addDays(p.i,PAY.JOURS):'';
      if(p.e&&p.e<ex) ex=p.e;
      if(!ex) return {ok:false,err:'Code invalide.'};
      if(ex<today()) return {ok:false,expired:true,cls:p.c,exp:ex,err:'Ce code (classe '+p.c+') a expiré le '+frDate(ex)+'. Pour continuer, paie à nouveau 200 F et demande un nouveau code.'};
      return {ok:true,cls:p.c,name:p.n||'',exp:ex,code:code};
    }).catch(function(){ return {ok:false,soft:true,err:'Code invalide.'}; });
  }

  /* ---- mémoire des codes sur le téléphone ---- */
  function loadStore(){ try{ var a=JSON.parse(localStorage.getItem(LSK)||'[]'); return Array.isArray(a)?a:[]; }catch(e){ return []; } }
  function saveStore(a){ try{ localStorage.setItem(LSK,JSON.stringify(a)); }catch(e){} }
  function addToStore(code){ var a=loadStore(); if(a.indexOf(code)<0){ a.push(code); saveStore(a); } }
  function refresh(){
    var codes=loadStore(); ACC={}; window.__mqDevE=false; window.__mqDevT=false;
    return Promise.all(codes.map(verify)).then(function(rs){
      var keep=[]; rs.forEach(function(r,i){ if(r.unbound||r.wrongDevice) window.__mqDevE=true; if(r.ok){ var old=ACC[r.cls]; if(!old||old.exp<r.exp) ACC[r.cls]={exp:r.exp,name:r.name,code:r.code}; keep.push(codes[i]); } else if(r.soft){ keep.push(codes[i]); } });
      if(keep.length!==codes.length) saveStore(keep);
      var st=null; try{ st=localStorage.getItem('mq_lic'); }catch(e){}
      if(st&&window.__SOM&&window.__SOM.verify) return window.__SOM.verify(st).then(function(r){ teacherExp=(r&&r.ok)?r.exp:''; if(r&&(r.unbound||r.wrongDevice)) window.__mqDevT=true; }); teacherExp='';
    }).then(function(){ ready=true; });
  }

  /* ---- droits d'accès ---- */
  function isTeacher(){ return !!(teacherExp&&teacherExp>=today()); }
  function canClass(cls){ if(isTeacher()) return true; var a=ACC[cls]; return !!(a&&a.exp>=today()); }
  function canTheme(cls,theme){ return canClass(cls)||theme===trial(cls); }

  /* ---- changement de classe (ouverture par lien, après activation) ---- */
  function goClass(cls){
    var c=CLASSES_C1[cls]?1:2;
    if(currentCycle!==c){ setCycle(c); }
    if(c===2){ Object.keys(SERIES).forEach(function(s){ if(SERIES[s].indexOf(cls)>=0) currentSerie=s; }); }
    currentClass=cls; currentTheme='Tous'; startQuiz();
  }

  /* ---- barre d'état sous le choix du thème ---- */
  var BTN='width:100%;margin-bottom:8px;padding:9px;border-radius:8px;font-family:inherit;font-size:12.5px;font-weight:700;cursor:pointer;';
  window.mqAccesBar=function(){
    var cls=currentClass;
    if(isTeacher()) return '<div style="margin-bottom:8px;font-size:12px;color:var(--success);font-weight:700;">✅ Accès Parent / Enseignant : toute l\'application</div>';
    var a=ACC[cls];
    if(a&&a.exp>=today()){ var d=daysLeft(a.exp); return '<div style="margin-bottom:8px;font-size:12px;color:var(--success);font-weight:700;">✅ Classe de '+esc(cls)+' débloquée jusqu\'au '+frDate(a.exp)+' ('+d+' jour'+(d>1?'s':'')+' restant'+(d>1?'s':'')+')</div>'; }
    return '<div style="margin-bottom:8px;font-size:12px;color:var(--text-sec);">Thème d\'essai gratuit : <b>'+esc(label(trial(cls)))+'</b></div>'+
      '<button onclick="mqPay()" style="'+BTN+'border:none;background:var(--accent);color:#fff;">🔓 Débloquer la classe de '+esc(cls)+' · '+PAY.MONTANT+' F pour '+PAY.JOURS+' jours</button>';
  };

  /* ---- porte d'entrée du quiz : appelée au début de startQuiz() ; renvoie true si elle a pris la main ---- */
  window.mqAccesGate=function(){
    var cls=currentClass; if(canClass(cls)) return false;
    var t=trial(cls);
    if(currentTheme==='Tous'){ currentTheme=t; return false; }
    if(currentTheme===t) return false;
    mqPayPage(currentTheme); return true;
  };

  function codeAvec(m,n){ return m.replace('{M}',String(n||PAY.MONTANT)); }
  function lienTel(c){ return 'tel:'+c.replace(/#/g,'%23'); }

  function mqPayPage(theme){
    var app=document.getElementById('app'), cls=currentClass; if(!app) return;
    try{ clearInterval(timer); }catch(e){}
    var moov=codeAvec(PAY.CODE_MOOV), mtn=codeAvec(PAY.CODE_MTN), t=trial(cls);
    var ENS=window.MQ_CFG.MONTANT_ENS, moovE=codeAvec(PAY.CODE_MOOV,ENS), mtnE=codeAvec(PAY.CODE_MTN,ENS), dev=window.mqDeviceId(), cryptoOk=!!(window.crypto&&window.crypto.subtle), pending=loadStore().length;
    var B='display:block;width:100%;box-sizing:border-box;text-align:center;text-decoration:none;padding:13px;border:0;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;margin-top:8px;font-family:inherit;';
    var I='width:100%;box-sizing:border-box;padding:11px;border:1px solid var(--border-strong);border-radius:8px;font-size:15px;margin-top:6px;font-family:inherit;background:var(--surface);color:var(--text-primary);';
    var CD='font-family:monospace;background:var(--surface2);border-radius:8px;padding:7px;font-size:12.5px;word-break:break-all;margin-top:5px;';
    var H='font-weight:800;color:var(--accent-text);margin-top:16px;';
    app.innerHTML='<div class="theme-section" id="theme-bar"></div>'+
      '<div class="card" style="padding:1rem;font-size:14px;line-height:1.5;">'+
      '<div style="font-size:18px;font-weight:800;margin-bottom:4px;">🔒 Classe de '+esc(cls)+(theme&&theme!=='Tous'?' · '+esc(label(theme)):'')+'</div>'+
      '<p style="margin:4px 0;">Pour accéder à toute la classe de <b>'+esc(cls)+'</b> (quiz et résumés de cours), il faut un <b>code personnel valable '+PAY.JOURS+' jours</b>, après un paiement de <b>'+PAY.MONTANT+' FCFA</b> par MTN MoMo ou Moov Money.</p>'+
      '<button onclick="mqTrial()" style="'+B+'background:transparent;border:1px solid var(--accent);color:var(--accent-text);">▶ Essayer gratuitement : '+esc(label(t))+'</button>'+
      '<div style="'+H+'">Étape 1 · Payer '+PAY.MONTANT+' F</div>'+
      '<p style="margin:4px 0;">Touche ton opérateur : le code de paiement s\'ouvre dans le clavier du téléphone. Valide, puis entre ton code secret.</p>'+
      '<a id="mqPayMoov" data-ussd="'+esc(moov)+'" href="'+lienTel(moov)+'" style="'+B+'background:#6a2c91;color:#fff;">🟣 Payer avec Moov Money</a><div style="'+CD+'">Moov : '+esc(moov)+'</div>'+
      '<a id="mqPayMtn" data-ussd="'+esc(mtn)+'" href="'+lienTel(mtn)+'" style="'+B+'background:#d89a00;color:#222;">🟡 Payer avec MTN MoMo</a><div style="'+CD+'">MTN : '+esc(mtn)+'</div>'+
      '<p style="font-size:12px;color:var(--text-muted);margin:6px 0;">Si le clavier ne s\'ouvre pas, copie le code ci-dessus et compose-le à la main.</p>'+
      '<div style="'+H+'">Étape 2 · Demander ton code</div>'+
      '<input id="mqNom" placeholder="Ton nom et prénom" autocomplete="name" style="'+I+'">'+
      '<input id="mqRef" placeholder="Référence du SMS de paiement" style="'+I+'">'+
      '<a id="mqWa" href="#" onclick="return mqWhatsapp(this)" style="'+B+'background:#1a5c1f;color:#fff;">📲 J\'ai payé : envoyer la preuve sur WhatsApp</a>'+
      '<div style="font-size:12px;color:var(--text-muted);margin-top:6px;">Tu reçois ton code après vérification du paiement.</div>'+
      '<div style="'+H+'">Étape 3 · Entrer ton code</div>'+
      '<textarea id="mqCode" rows="3" placeholder="Colle ici le code reçu (il commence par MQ1.)" autocomplete="off" style="'+I+'font-family:monospace;font-size:12px;"></textarea>'+
      '<button onclick="mqActivate()" style="'+B+'background:var(--accent);color:#fff;">🔓 Activer mon code</button>'+
      '<div id="mqMsg" style="font-size:13px;color:var(--danger);margin-top:8px;min-height:18px;"></div>'+
      ((window.__mqDevE||window.__mqDevT)?'<div style="margin-top:10px;padding:10px 12px;border:1px solid var(--danger);border-radius:var(--radius);background:var(--danger-bg);font-size:13px;line-height:1.5;"><b>Ton ancien code n\'est plus accepté.</b> Les codes sont désormais liés à un seul appareil. <b>Si tu as déjà payé, ne repaie pas</b> : écris ton nom à l\'étape 2 (le même que lors de ton paiement), puis demande ton nouveau code gratuit.'+(window.__mqDevE?'<a href="#" onclick="return mqWhatsappRenew(this,\'E\')" style="'+B+'background:#1a5c1f;color:#fff;">📲 Demander mon nouveau code (déjà payé)</a>':'')+(window.__mqDevT?'<a href="#" onclick="return mqWhatsappRenew(this,\'T\')" style="'+B+'background:#1a5c1f;color:#fff;">📲 Code Parent / Enseignant : demander mon nouveau code</a>':'')+'<div style="font-size:12px;margin-top:8px;">Identifiant de cet appareil : <b style="font-family:monospace;">'+esc(dev)+'</b></div></div>':'')+
      (pending&&!cryptoOk?'<div style="font-size:12.5px;color:var(--danger);margin-top:6px;">Un code est enregistré sur cet appareil, mais ce navigateur ne peut pas le vérifier. Ouvre le site avec Chrome (lien https) : ton code est conservé.</div>':'')+
      '<div id="mqParent" style="'+H+'">👨‍👩‍👧 Parent ou enseignant ?</div>'+
      '<p style="margin:4px 0;">Le <b>code Parent / Enseignant</b> ('+ENS+' FCFA, valable 2 mois) débloque <b>toute l\'application</b> : toutes les classes (quiz, résumés de cours, mode classe) et les <b>évaluations à imprimer</b> (formatives et sommatives, avec corrigés). Colle-le à l\'étape 3.</p>'+
      '<a data-ussd="'+esc(moovE)+'" href="'+lienTel(moovE)+'" style="'+B+'background:#6a2c91;color:#fff;">🟣 Payer '+ENS+' F avec Moov Money</a>'+
      '<a data-ussd="'+esc(mtnE)+'" href="'+lienTel(mtnE)+'" style="'+B+'background:#d89a00;color:#222;">🟡 Payer '+ENS+' F avec MTN MoMo</a>'+
      '<a id="mqWaEns" href="#" onclick="return mqWhatsappEns(this)" style="'+B+'background:#1a5c1f;color:#fff;">📲 J\'ai payé '+ENS+' F : demander mon code Parent / Enseignant</a>'+
      '<div style="font-size:12px;color:var(--text-muted);margin-top:12px;">Identifiant de cet appareil (joint automatiquement à ta demande) : <b style="font-family:monospace;color:var(--text);">'+esc(dev)+'</b></div>'+
      '</div>';
    try{ renderThemeBar(); }catch(e){} try{ window.scrollTo(0,0); }catch(e){}
  }
  window.mqPay=function(){ mqPayPage(currentTheme); };
  window.mqTrial=function(){ currentTheme=trial(currentClass); startQuiz(); };

  window.mqWhatsapp=function(el){
    var n=document.getElementById('mqNom').value.trim(), r=document.getElementById('mqRef').value.trim(), m=document.getElementById('mqMsg');
    if(!n){ m.style.color='var(--danger)'; m.textContent='Écris ton nom.'; return false; }
    if(!r){ m.style.color='var(--danger)'; m.textContent='Écris la référence de la transaction (SMS de confirmation).'; return false; }
    m.textContent='';
    var txt='Bonjour, j\'ai payé '+PAY.MONTANT+' FCFA pour : accès à la classe de '+currentClass+' ('+PAY.JOURS+' jours).\nNom : '+n+'\nClasse : '+currentClass+'\nRéférence de la transaction : '+r+'\nIdentifiant de mon appareil : '+window.mqDeviceId()+'\nMerci de m\'envoyer mon code d\'accès.';
    el.href='https://wa.me/'+PAY.WHATSAPP+'?text='+encodeURIComponent(txt); el.target='_blank'; return true;
  };

  /* ancien client : demande d'un nouveau code (déjà payé), avec l'identifiant de l'appareil */
  function storedClasses(){
    var out=[]; loadStore().forEach(function(c){ try{ var q=JSON.parse(atob(c.split('.')[1].replace(/-/g,'+').replace(/_/g,'/'))); if(q&&q.c&&out.indexOf(q.c)<0) out.push(q.c); }catch(e){} });
    return out;
  }
  window.mqWhatsappRenew=function(el,kind){
    var n=document.getElementById('mqNom').value.trim(), m=document.getElementById('mqMsg');
    if(!n){ m.style.color='var(--danger)'; m.textContent='Écris ton nom à l\'étape 2 (le même que lors de ton paiement).'; return false; }
    m.textContent='';
    var id=window.mqDeviceId(), txt;
    if(kind==='T'){
      txt='Bonjour, j\'ai déjà payé mon code Parent / Enseignant. Il n\'est plus accepté : merci de m\'envoyer un nouveau code lié à mon appareil.\nNom : '+n+'\nRéférence de la transaction : RENOUVELLEMENT\nIdentifiant de mon appareil : '+id+'\nMerci.';
    } else {
      var cl=storedClasses(); if(!cl.length) cl=[currentClass];
      txt='Bonjour, j\'ai déjà payé mon accès. Mon ancien code n\'est plus accepté : merci de m\'envoyer un nouveau code lié à mon appareil.\nNom : '+n+'\nClasse : '+cl.join(' / ')+'\nRéférence de la transaction : RENOUVELLEMENT\nIdentifiant de mon appareil : '+id+'\nMerci.';
    }
    el.href='https://wa.me/'+PAY.WHATSAPP+'?text='+encodeURIComponent(txt); el.target='_blank'; return true;
  };
  window.mqWhatsappEns=function(el){
    var n=document.getElementById('mqNom').value.trim(), r=document.getElementById('mqRef').value.trim(), m=document.getElementById('mqMsg'), ENS=window.MQ_CFG.MONTANT_ENS;
    if(!n){ m.style.color='var(--danger)'; m.textContent='Écris ton nom (étape 2).'; return false; }
    if(!r){ m.style.color='var(--danger)'; m.textContent='Écris la référence de la transaction (étape 2).'; return false; }
    m.textContent='';
    var txt='Bonjour, j\'ai payé '+ENS+' FCFA pour un code Parent / Enseignant (toute l\'application et les évaluations à imprimer).\nNom : '+n+'\nRéférence de la transaction : '+r+'\nIdentifiant de mon appareil : '+window.mqDeviceId()+'\nMerci de m\'envoyer mon code Parent / Enseignant.';
    el.href='https://wa.me/'+PAY.WHATSAPP+'?text='+encodeURIComponent(txt); el.target='_blank'; return true;
  };
  document.addEventListener('click',function(e){
    var a=e.target&&e.target.closest?e.target.closest('a[data-ussd]'):null; if(!a) return;
    if(!/Android/i.test(navigator.userAgent)){ e.preventDefault(); try{ prompt('Compose ce code depuis le clavier de ton téléphone :',a.getAttribute('data-ussd')); }catch(x){} }
  });
  /* code enseignant collé sur l'écran de paiement : il est enregistré comme dans « Évaluation sommative » */
  function activateTeacher(code){
    if(!(window.__SOM&&window.__SOM.verify)) return Promise.resolve({ok:false,err:'Module enseignant indisponible.'});
    return window.__SOM.verify(code).then(function(r){
      if(r.ok){ try{ localStorage.setItem('mq_lic',r.code); }catch(e){} try{ window.__SOM.state.lic=r; }catch(e){} return refresh().then(function(){ r.teacher=true; return r; }); }
      return r;
    });
  }
  function activate(code,fromUrl){
    return verify(code).then(function(r){
      if(r.ok){ addToStore(r.code); return refresh().then(function(){ return r; }); }
      return r;
    });
  }
  window.mqActivate=function(){
    var v=document.getElementById('mqCode').value, m=document.getElementById('mqMsg');
    if(!v.trim()){ m.style.color='var(--danger)'; m.textContent='Colle le code reçu sur WhatsApp.'; return; }
    m.style.color='var(--text-muted)'; m.textContent='Vérification…';
    var job=(peekType(v)==='E')?activate(v):activateTeacher(v);
    job.then(function(r){
      if(!r.ok){ m.style.color='var(--danger)'; m.textContent=r.err; return; }
      if(r.teacher){ currentTheme='Tous'; startQuiz(); return; }
      if(r.cls!==currentClass){ goClass(r.cls); } else { currentTheme='Tous'; startQuiz(); }
    });
  };

  /* ---- ouverture par lien : https://.../?code=MQ1.... (codes élèves seulement) ---- */
  window.mqAccesFromUrl=function(){
    try{ var c=new URLSearchParams(location.search).get('code'); if(!c||peekType(c)!=='E') return Promise.resolve(null);
      return activate(c).then(function(r){ try{ history.replaceState(null,'',location.pathname); }catch(e){}
        if(r.ok) goClass(r.cls); else { try{ currentTheme='Tous'; mqPayPage('Tous'); var m=document.getElementById('mqMsg'); if(m) m.textContent=r.err; }catch(e){} }
        return r; });
    }catch(e){ return Promise.resolve(null); }
  };

  window.MQ_ACCES={canClass:canClass,canTheme:canTheme,trial:trial,verify:verify,refresh:refresh,state:function(){ return {ACC:ACC,teacherExp:teacherExp,ready:ready}; },PAY:PAY,addDays:addDays,peekType:peekType};

  /* évaluation formative (PDF) : réservée aux classes débloquées, hors thème d'essai */
  function evAllowed(){
    if(window.MQ_CFG&&window.MQ_CFG.GATE_EVAL===false) return true;
    var E=window.__EV&&window.__EV.state; if(!E||!E.cls) return true;
    if(E.kind==='S') return true;
    var C=window.MQ_CFG||{};
    if(isTeacher()) return true;                                  /* code Parent / Enseignant : tout est ouvert */
    if(C.EVAL_REQUIRES_TEACHER===false&&canClass(E.cls)) return true;
    if(C.EVAL_TRIAL===false) return false;
    var tr=trial(E.cls);
    return E.th.length>0&&E.th.every(function(x){ return x===tr; });   /* essai gratuit : thème d'essai de la classe */
  }
  /* ===== « Évaluation à imprimer » (page d'accueil) : débloquée par le code Parent / Enseignant ===== */
  function somLicOK(){ try{ return !!(window.__SOM&&window.__SOM.state&&window.__SOM.state.lic); }catch(e){ return false; } }
  window.mqEvLocked=function(){
    var C=window.MQ_CFG||{};
    if(C.GATE_EVAL===false||C.EVAL_TRIAL!==false) return false;
    if(isTeacher()||somLicOK()) return false;
    if(C.EVAL_REQUIRES_TEACHER===false&&canClass(currentClass)) return false;
    return true;
  };
  function renderEvalLock(){
    var app=document.getElementById('app'); if(!app) return;
    var ENS=(window.MQ_CFG||{}).MONTANT_ENS, B='width:100%;padding:11px;border-radius:10px;border:none;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;';
    app.innerHTML='<div class="card" style="padding:1.1rem;">'+
      '<div style="font-size:17px;font-weight:800;color:var(--text);margin-bottom:2px;">📝 Évaluations à imprimer</div>'+
      '<div style="font-size:12px;color:var(--text-muted);margin-bottom:12px;line-height:1.5;">Sujets et corrigés prêts à imprimer ou à télécharger (PDF et Word), formatifs et sommatifs.</div>'+
      '<div style="background:var(--surface2);border-radius:10px;padding:12px;margin-bottom:12px;"><div style="font-size:14px;font-weight:800;color:var(--text);margin-bottom:4px;">🔒 Accès réservé aux parents et enseignants</div><div style="font-size:12.5px;color:var(--text-sec);line-height:1.55;">Les évaluations se débloquent avec le <b>code Parent / Enseignant</b> : <b>'+ENS+' F</b>, valable 2 mois. Ce code débloque aussi <b>toute l\'application</b> (toutes les classes).</div></div>'+
      '<div class="theme-label">1. Obtenir le code</div>'+
      '<button onclick="goParentOffer()" style="'+B+'background:var(--success);color:#fff;margin-bottom:14px;">💳 Obtenir mon code Parent / Enseignant ('+ENS+' F)</button>'+
      '<div class="theme-label">2. Saisir le code reçu</div>'+
      '<textarea id="mqEvCode" rows="3" placeholder="Colle ici le code (commence par MQ1.)" autocomplete="off" class="theme-select" style="width:100%;margin-bottom:8px;font-family:monospace;font-size:12px;"></textarea>'+
      '<button onclick="mqEvUnlock()" style="'+B+'background:var(--accent-text);color:#fff;">Déverrouiller</button>'+
      '<div id="mqEvMsg" style="font-size:12.5px;color:var(--danger);min-height:18px;margin-top:8px;line-height:1.4;"></div></div>';
  }
  window.mqEvUnlock=function(){
    var v=(document.getElementById('mqEvCode')||{}).value||'', m=document.getElementById('mqEvMsg');
    if(!m) return;
    if(!v.trim()){ m.style.color='var(--danger)'; m.textContent='Colle le code reçu sur WhatsApp.'; return; }
    if(peekType(v)==='E'){ m.style.color='var(--danger)'; m.textContent='Ceci est un code élève de classe : il ne débloque pas les évaluations à imprimer. Il faut le code Parent / Enseignant.'; return; }
    m.style.color='var(--text-muted)'; m.textContent='Vérification…';
    activateTeacher(v).then(function(r){
      if(!r.ok){ m.style.color='var(--danger)'; m.textContent=r.err; return; }
      window.renderEvalPage();
    });
  };
  (function(){ var f=window.renderEvalPage; if(typeof f!=='function') return;
    window.renderEvalPage=function(){ if(window.mqEvLocked()){ renderEvalLock(); return; } return f.apply(this,arguments); }; })();
  /* bandeau « évaluations à imprimer » sur la page formative */
  function evBanner(){
    var C=window.MQ_CFG||{}, E=window.__EV&&window.__EV.state, app=document.getElementById('app');
    var old=document.getElementById('mqEvBanner');
    var show=!!(app&&E&&E.kind!=='S'&&document.getElementById('ev-ref')&&C.GATE_EVAL!==false&&!isTeacher()&&!(C.EVAL_REQUIRES_TEACHER===false&&E.cls&&canClass(E.cls)));
    if(!show){ if(old&&old.parentNode) old.parentNode.removeChild(old); return; }
    if(old) return;
    app.insertAdjacentHTML('afterbegin','<div id="mqEvBanner" style="margin-bottom:10px;padding:10px 12px;border:1px solid var(--accent);border-radius:var(--radius);background:var(--accent-bg);color:var(--accent-text);font-size:12.5px;line-height:1.5;">🔒 <b>Évaluations à imprimer</b> : réservées au <b>code Parent / Enseignant</b> ('+C.MONTANT_ENS+' F, 2 mois), qui débloque aussi toute l\'application.'+(C.EVAL_TRIAL===false?'':' Un thème d\'essai par classe est gratuit.')+' <a href="#" onclick="goParentOffer();return false;" style="font-weight:700;color:var(--accent-text);text-decoration:underline;">Obtenir mon code</a></div>');
  }
  /* l'évaluation se redessine à chaque clic : on surveille #app pour garder le bandeau affiché */
  (function(){ var app=document.getElementById('app'); if(!app||!window.MutationObserver) return;
    new MutationObserver(function(){ try{ evBanner(); }catch(e){} }).observe(app,{childList:true}); })();
  window.goParentOffer=function(){
    try{ startQuiz(); clearInterval(timer); }catch(e){}
    currentTheme='Tous'; mqPayPage('Tous');
    setTimeout(function(){ var el=document.getElementById('mqParent'); if(el&&el.scrollIntoView) el.scrollIntoView({behavior:'smooth',block:'start'}); },80);
  };
  function evDeny(){
    var C=window.MQ_CFG||{};
    if(confirm('Les évaluations à imprimer sont réservées au code Parent / Enseignant ('+C.MONTANT_ENS+' F, valable 2 mois), qui débloque aussi toute l\'application.'+(C.EVAL_TRIAL===false?'':' Seul le thème d\'essai de la classe est libre.')+' Voir comment l\'obtenir ?')){ window.goParentOffer(); }
  }
  ['evGen','evPrint','evWord'].forEach(function(n){
    var f=window[n]; if(typeof f!=='function') return;
    window[n]=function(){ if(!evAllowed()){ evDeny(); return; } return f.apply(this,arguments); };
  });

  /* démarrage : le premier quiz n'est lancé qu'après la lecture des codes (plus de quiz « Tous thèmes » affiché une seconde) */
  function init(){
    refresh().catch(function(){}).then(function(){
      var qc=null; try{ qc=new URLSearchParams(location.search).get('code'); }catch(e){}
      var teacherLink=!!(qc&&peekType(qc)!=='E');
      if(!teacherLink){ try{ startQuiz(); }catch(e){} }
      return window.mqAccesFromUrl();
    });
    setTimeout(function(){ var a=document.getElementById('app'); if(a&&!a.innerHTML.trim()){ try{ startQuiz(); }catch(e){} } },3500);
  }
  init();
})();


/* ── 90-cours-ui.js ── */
/* ===== Résumés de cours : liste, lecture, impression ===== */
(function(){
  var MQ = window.MQ_COURS || {};
  function data(cls, theme){ var c = MQ[cls]; return (c && c[theme]) || null; }
  function bankOf(){ return currentCycle === 2 ? THEMES_C2 : THEMES_C1; }
  function themesOf(cls){ return (CLASSES[cls] || []).filter(function(t){ return !!data(cls, t); }); }
  function label(t){ return String(t).replace(/^[\w]+ — /, '').replace(/^[36]e — /, ''); }
  function okT(cls, t){ return !window.MQ_ACCES || window.MQ_ACCES.canTheme(cls, t); }
  function isMemo(cls, t){ var d = data(cls, t); return !!(d && d.memo); }
  function attr(s){ return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }

  /* {a¦b} -> fraction à deux étages */
  function fr(h){
    return String(h).replace(/\{([^{}¦]*)¦([^{}¦]*)\}/g, function(_, a, b){
      return '<span class="mc-fr"><span class="mc-n">' + a + '</span><span class="mc-d">' + b + '</span></span>';
    });
  }
  function V(h){ try { return typeof vecHTML === 'function' ? vecHTML(h) : h; } catch(e){ return h; } }
  function T(h){ return V(fr(String(h).replace(/\s{4,}/g, '<br>'))); }

  /* Fiche « à connaître par cœur » fabriquée à partir des questions Définition / Propriété de la banque */
  function memoItems(theme){
    var out = [], qs = bankOf()[theme] || [];
    qs.forEach(function(q){
      var s = String(q.q || '').trim();
      if(!/^(Définition|Propriété|Théorème)/.test(s)) return;
      var ans = String(q.c[q.a] || '').trim();
      s = s.replace(/\s*(\?|…|\.\.\.)\s*$/, '');
      var sep = /[=:]$/.test(s) ? ' ' : ' ';
      out.push(s + sep + ans + (/[.!?]$/.test(ans) ? '' : '.'));
    });
    return out;
  }

  function sec(cls, ico, title, body){ return '<div class="mc-sec ' + cls + '"><div class="mc-h">' + ico + ' ' + title + '</div>' + body + '</div>'; }
  function ul(a){ return '<ul class="mc-ul">' + a.map(function(x){ return '<li>' + T(x) + '</li>'; }).join('') + '</ul>'; }

  function bodyHTML(cls, theme, pr){
    var d = data(cls, theme);
    if(!d) return '';
    if(d.memo){
      var it = memoItems(theme);
      return sec('mc-ess', '📌', 'À connaître par cœur', it.length ? ul(it) : '<p>Aucune fiche pour ce thème.</p>') +
        '<p class="mc-note">Ces définitions et propriétés sont celles sur lesquelles portent les questions du quiz « Prop. &amp; Déf. ».</p>';
    }
    var steps = '<ol class="mc-ol">' + d.ex.st.map(function(x){ return '<li>' + T(x) + '</li>'; }).join('') + '</ol>';
    var mini = d.mini.map(function(m, i){
      return '<details class="mc-det"' + (pr ? ' open' : '') + '><summary><b>' + (i + 1) + '.</b> ' + T(m.q) + '</summary><div class="mc-ans">' + T(m.r) + '</div></details>';
    }).join('');
    return sec('mc-ess', '🎯', 'L\'essentiel', ul(d.ess)) +
      sec('mc-form', '📌', 'À retenir', ul(d.form)) +
      sec('mc-ex', '✏️', 'Exemple résolu', '<p class="mc-q">' + T(d.ex.q) + '</p>' + steps + '<p class="mc-r">' + T(d.ex.r) + '</p>') +
      sec('mc-pie', '⚠️', 'Pièges à éviter', ul(d.pieges)) +
      sec('mc-mini', '🧪', 'Teste-toi <span class="mc-hint">(touche la question pour voir la réponse)</span>', mini);
  }

  window.mqCoursHas = function(cls, theme){ return !!data(cls, theme); };
  window.mqCoursClassHas = function(cls){ return themesOf(cls).length > 0; };

  /* bouton affiché dans la barre des thèmes */
  window.mqCoursBtn = function(){
    var st = 'width:100%;margin-bottom:8px;padding:8px;border-radius:8px;border:1px solid var(--accent);background:transparent;color:var(--accent-text);font-family:inherit;font-size:12.5px;font-weight:700;cursor:pointer;';
    if(currentTheme !== 'Tous' && !okT(currentClass, currentTheme)) return '';
    if(currentTheme !== 'Tous' && data(currentClass, currentTheme)){
      var i = (CLASSES[currentClass] || []).indexOf(currentTheme);
      return '<button onclick="renderCoursPage(' + i + ')" style="' + st + '">📘 ' + (isMemo(currentClass, currentTheme) ? 'Voir la fiche : définitions et propriétés' : 'Revoir le cours de ce thème') + '</button>';
    }
    if(window.mqCoursClassHas(currentClass)){
      return '<button onclick="renderCoursPage()" style="' + st + '">📘 Résumés de cours de la ' + currentClass + '</button>';
    }
    return '';
  };

  window.coursQuiz = function(i){ var t = (CLASSES[currentClass] || [])[i]; if(t) setTheme(t); };

  function printCours(i){
    var cls = currentClass, t = (CLASSES[cls] || [])[i]; if(!t || !data(cls, t) || !okT(cls, t)) return;
    var html = '<div class="ev-doc mc-print"><div class="ev-top"><span>MathChrono-Quiz · Résumé de cours</span><span>' + attr(cls) + '</span></div>' +
      '<div class="ev-title">' + (isMemo(cls, t) ? 'DÉFINITIONS ET PROPRIÉTÉS' : 'RÉSUMÉ DE COURS') + '</div>' +
      '<div class="ev-sub">Classe de ' + attr(cls) + ' · ' + attr(label(t)) + '</div>' + bodyHTML(cls, t, true) +
      '<div class="ev-foot">MathChrono-Quiz · révisions de la 6e à la Terminale</div></div>';
    if(window.__EV && window.__EV.printDoc) window.__EV.printDoc(html, 'Cours ' + cls + ' - ' + label(t));
  }
  window.coursPrint = printCours;

  window.renderCoursPage = function(i){
    var cls = currentClass, app = document.getElementById('app'), list = themesOf(cls);
    var btn = 'width:100%;padding:12px;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;margin-top:8px;';
    if(typeof i === 'number' && i >= 0 && data(cls, (CLASSES[cls] || [])[i])){
      var t = CLASSES[cls][i];
      if(!okT(cls, t)){ currentTheme = t; if(window.mqPay) window.mqPay(); return; }
      app.innerHTML = '<div class="card mc-page" style="padding:1rem;">' +
        '<div class="mc-top">' + (isMemo(cls, t) ? 'Fiche mémo' : 'Résumé de cours') + ' · ' + attr(cls) + '</div>' +
        '<div class="mc-title">' + attr(label(t)) + '</div>' + bodyHTML(cls, t) +
        '<button onclick="coursQuiz(' + i + ')" style="' + btn + 'background:var(--accent);color:#fff;">▶ Faire le quiz de ce thème</button>' +
        '<button onclick="coursPrint(' + i + ')" style="' + btn + 'background:transparent;border:1px solid var(--accent);color:var(--accent-text);">🖨 Imprimer / enregistrer en PDF</button>' +
        '<button onclick="renderCoursPage()" style="' + btn + 'background:transparent;border:1px solid var(--border-strong);color:var(--text-sec);">← Tous les résumés</button>' +
        '</div>';
      try { window.scrollTo(0, 0); } catch(e){}
      return;
    }
    var rows = list.map(function(t){
      var k = (CLASSES[cls] || []).indexOf(t);
      return '<button class="mc-row" onclick="renderCoursPage(' + k + ')"><span>' + (!okT(cls, t) ? '🔒 ' : isMemo(cls, t) ? '📌 ' : '📘 ') + attr(label(t)) + '</span><span class="mc-go">›</span></button>';
    }).join('');
    app.innerHTML = '<div class="card mc-page" style="padding:1rem;">' +
      '<div class="mc-title">📘 Résumés de cours · ' + attr(cls) + '</div>' +
      (rows ? '<p class="mc-note" style="margin-top:2px">Touche un thème : l\'essentiel, les formules, un exemple résolu, les pièges et deux questions pour te tester.</p>' + rows
            : '<p class="mc-note">Les résumés de cours de cette classe arrivent bientôt.</p>') + '</div>';
    try { window.scrollTo(0, 0); } catch(e){}
  };
})();


/* ── 95-nav.js ── */
/* ===== Navigation : bouton « Retour » + bouton retour du téléphone ===== */
(function(){
  var SUB = ['renderCoursPage','renderEvalPage','renderBadgesPage','renderClassePage','renderCustomQPage','renderHistoryPage','renderLeaderboardPage','renderProgressPage','renderRecap'];
  var CLS = ['renderClasseQuestion','nextClasseQuestion'];
  var inSub = false, snap = null, saved = null, pausedLeft = null, pushed = false, confirmed = false;

  function appEl(){ return document.getElementById('app'); }

  function addBar(){
    var a = appEl();
    if(!a || document.getElementById('backbar')) return;
    a.insertAdjacentHTML('afterbegin',
      '<div id="backbar" style="position:sticky;top:0;z-index:50;background:var(--bg);padding:6px 0 10px;margin:0 0 4px;">' +
      '<button type="button" onclick="goBack()" style="padding:9px 16px;border:1px solid var(--border-strong);background:var(--surface);' +
      'color:var(--accent);border-radius:99px;font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;">\u2190 Retour</button></div>');
  }

  function enterSub(){
    if(inSub) return;
    var a = appEl();
    // le chrono s'arrête pendant la consultation d'une page (question en cours uniquement)
    if(timer && !answered && document.getElementById('cbar')){
      pausedLeft = timeLeft; clearInterval(timer); timer = null;
    }
    snap = a ? a.innerHTML : null;
    saved = { missed: missedQuestions, details: sessionDetails, start: startTime };
    inSub = true;
    try { history.pushState({mc:1}, ''); pushed = true; } catch(e){ pushed = false; }
  }

  function restore(){
    if(window.__mqPrinting){ return; }
    var a = appEl();
    inSub = false; pushed = false; confirmed = false;
    classeMode = false;
    // une page de paiement mémorisée est périmée (les droits ont pu changer) : on relance le quiz
    var stalePay = (snap !== null && snap.indexOf('id="mqCode"') >= 0);
    if(saved){ missedQuestions = saved.missed; sessionDetails = saved.details; startTime = saved.start; }
    var s = snap; snap = null; saved = null;
    if(stalePay){ pausedLeft = null; try{ startQuiz(); }catch(e){} try{ window.scrollTo(0, 0); }catch(e){} return; }
    if(a && s !== null) a.innerHTML = s;
    if(pausedLeft !== null){ var t = pausedLeft; pausedLeft = null; startTimer(t); }
    try { window.scrollTo(0, 0); } catch(e){}
  }

  // quitter une sous-page sans retour (ex. changement de classe ou nouveau quiz)
  function dropSub(){
    if(!inSub) return;
    inSub = false; snap = null; saved = null; pausedLeft = null; classeMode = false;
    if(pushed){ pushed = false; try { history.back(); } catch(e){} }
  }

  SUB.forEach(function(n){
    var f = window[n]; if(typeof f !== 'function') return;
    window[n] = function(){ enterSub(); var r = f.apply(this, arguments); addBar(); return r; };
  });
  CLS.forEach(function(n){
    var f = window[n]; if(typeof f !== 'function') return;
    window[n] = function(){ var r = f.apply(this, arguments); if(inSub) addBar(); return r; };
  });
  var sq = window.startQuiz;
  window.startQuiz = function(){ dropSub(); return sq.apply(this, arguments); };

  window.__navFix = function(){ if(inSub) addBar(); };   // utilisé après un chargement différé de données

  window.goBack = function(){
    if(!inSub) return;
    if(classeMode && !confirm('Quitter le mode classe ?')) return;
    if(pushed){
      confirmed = true;
      try { history.back(); } catch(e){ restore(); return; }
      setTimeout(function(){ if(inSub) restore(); }, 400);
    } else { restore(); }
  };

  window.addEventListener('popstate', function(){
    if(!inSub || window.__mqPrinting) return;
    if(classeMode && !confirmed && !confirm('Quitter le mode classe ?')){
      try { history.pushState({mc:1}, ''); pushed = true; } catch(e){}
      return;
    }
    restore();
  });
})();
