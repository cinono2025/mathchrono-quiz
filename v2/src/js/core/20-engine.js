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




