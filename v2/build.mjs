#!/usr/bin/env node
/* MathChrono-Quiz — script de construction (Node 18+, aucune dépendance).
 *   node build.mjs          → dist/       site déployable : coquille légère + données chargées à la demande
 *   node build.mjs --mono   → dist-mono/  un seul fichier index.html (secours / comparaison)
 * Le script vérifie les données (classes, thèmes, modules) et échoue avec un message clair si quelque chose est incohérent. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(ROOT, 'src');
const MONO = process.argv.includes('--mono');
const OUT = path.join(ROOT, MONO ? 'dist-mono' : 'dist');
const read = (...p) => fs.readFileSync(path.join(...p), 'utf8');
const listJs = d => fs.readdirSync(d).filter(f => f.endsWith('.js')).sort();
const slug = s => s.toLowerCase().replace(/[èé]/g, 'e').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const fail = m => { console.error('\n✖ ' + m + '\n'); process.exit(1); };

/* ---------- 1. code (noyau) ---------- */
const coreDir = path.join(SRC, 'js', 'core');
const coreFiles = listJs(coreDir);
const core = Object.fromEntries(coreFiles.map(f => [f, read(coreDir, f)]));

/* ---------- 2. index des classes (évalué pour savoir quelle classe possède quels thèmes) ---------- */
const idxCtx = vm.createContext({ window: {} });
vm.runInContext(core['10-data-index.js'], idxCtx, { filename: '10-data-index.js' });
const CLASSES = vm.runInContext('({1:CLASSES_C1,2:CLASSES_C2})', idxCtx);
const classCycle = {}; const classOrder = [];
for (const cyc of [1, 2]) for (const c of Object.keys(CLASSES[cyc])) { classCycle[c] = cyc; classOrder.push(c); }
const themeOwner = {};
for (const c of classOrder) for (const t of CLASSES[classCycle[c]][c]) {
  if (themeOwner[t]) fail(`Le thème « ${t} » est listé dans deux classes (${themeOwner[t]} et ${c}).`);
  themeOwner[t] = c;
}

/* ---------- 3. contenu par classe : questions + résumés ---------- */
const qDir = path.join(SRC, 'content', 'questions'), cDir = path.join(SRC, 'content', 'cours'), sDir = path.join(SRC, 'content', 'sommatif');
const bundles = {};  // classe -> { parts:[], themes:n, questions:n, cours:n }
for (const c of classOrder) bundles[c] = { parts: [], themes: 0, questions: 0, coursFiles: 0 };

for (const f of listJs(qDir)) {
  const txt = read(qDir, f);
  const ctx = vm.createContext({ window: {} });
  vm.runInContext('var THEMES_C1={}, THEMES_C2={};', ctx);
  try { vm.runInContext(txt, ctx, { filename: f }); } catch (e) { fail(`content/questions/${f} : ${e.message}`); }
  const T = vm.runInContext('Object.assign({}, THEMES_C1, THEMES_C2)', ctx);
  const names = Object.keys(T); if (!names.length) fail(`content/questions/${f} ne contient aucun thème.`);
  const owners = new Set(names.map(t => themeOwner[t]));
  if (owners.has(undefined)) fail(`content/questions/${f} : thème absent de CLASSES (${names.find(t => !themeOwner[t])}).`);
  if (owners.size !== 1) fail(`content/questions/${f} mélange plusieurs classes.`);
  const c = [...owners][0];
  bundles[c].parts.push({ kind: 'q', file: f, txt });
  bundles[c].themes += names.length;
  bundles[c].questions += names.reduce((n, t) => n + T[t].length, 0);
}
for (const f of listJs(cDir)) {
  const txt = read(cDir, f);
  const cl = new Set([...txt.matchAll(/MQ_COURS\['([^']+)'\]/g)].map(m => m[1]));
  if (cl.size !== 1) fail(`content/cours/${f} doit concerner une seule classe.`);
  const c = [...cl][0]; if (!bundles[c]) fail(`content/cours/${f} : classe inconnue « ${c} ».`);
  try { vm.runInContext(txt, vm.createContext({ window: {} }), { filename: f }); } catch (e) { fail(`content/cours/${f} : ${e.message}`); }
  bundles[c].parts.push({ kind: 'c', file: f, txt });
  bundles[c].coursFiles++;
}
for (const c of classOrder) if (!bundles[c].themes) fail(`Aucun fichier de questions pour la classe ${c}.`);
for (const c of classOrder) {   // chaque thème listé dans CLASSES doit avoir ses questions
  const have = new Set(); /* vérification fine dans tests/data.test.mjs */
}

/* ---------- 4. modules sommatifs : classes de chaque bloc (exécution à blanc) ---------- */
const somCtx = vm.createContext({ console });
const somGlobal = vm.runInContext('globalThis', somCtx);
try { vm.runInContext(core['40-som-core.js'], somCtx, { filename: '40-som-core.js' }); } catch (e) { fail('40-som-core.js : ' + e.message); }
const MOD = somGlobal.MQ_SOM_MOD && somGlobal.MQ_SOM_MOD.MOD; if (!MOD) fail('MQ_SOM_MOD introuvable après 40-som-core.js');
const somBlocks = [];
let seen = new Set(Object.keys(MOD));
const BASE_KEYS = new Set(Object.keys(somGlobal.MQ_SOM_MOD));
const providerOf = {};                         // clé ajoutée à MQ_SOM_MOD -> bloc qui la fournit (outils partagés entre blocs)
for (const f of listJs(sDir)) {
  const txt = read(sDir, f);
  const keysBefore = new Set(Object.keys(somGlobal.MQ_SOM_MOD));
  try { vm.runInContext(txt, somCtx, { filename: f }); } catch (e) { fail(`content/sommatif/${f} : ${e.message}`); }
  const added = Object.keys(MOD).filter(k => !seen.has(k)); added.forEach(k => seen.add(k));
  const provides = Object.keys(somGlobal.MQ_SOM_MOD).filter(k => !keysBefore.has(k));
  const requires = new Set([...txt.matchAll(/(?:\bM|MQ_SOM_MOD)\.([A-Za-z_]\w*)/g)].map(m => m[1]).filter(k => !BASE_KEYS.has(k) && !provides.includes(k)));
  const deps = new Set();
  for (const k of requires) if (providerOf[k]) deps.add(providerOf[k]);
  const idx = somBlocks.length;
  provides.forEach(k => { providerOf[k] = idx; });
  const cls = [...new Set(added.map(k => MOD[k].cls))];
  if (!cls.length && !provides.length) fail(`content/sommatif/${f} ne déclare ni module ni outil partagé.`);
  somBlocks.push({ file: f, txt, cls, n: added.length, provides, deps });
}
somBlocks.forEach((b, i) => { b.out = `data/s-${String(i + 1).padStart(2, '0')}.js`; });
const somIndex = {};                            // classe de base -> fichiers à charger (ordre d'origine, dépendances comprises)
const needed = i => { const s = new Set([i]); somBlocks[i].deps.forEach(d => needed(d).forEach(x => s.add(x))); return s; };
const perClass = {};
somBlocks.forEach((b, i) => b.cls.forEach(c => { perClass[c] = perClass[c] || new Set(); needed(i).forEach(x => perClass[c].add(x)); }));
for (const [c, set] of Object.entries(perClass)) somIndex[c] = [...set].sort((x, y) => x - y).map(i => somBlocks[i].out);

/* ---------- 5. écriture ---------- */
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'data'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'css'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'js'), { recursive: true });
const wr = (rel, txt) => fs.writeFileSync(path.join(OUT, rel), txt);
const bundleText = c => `/* Données de la classe ${c} : questions + résumés de cours (généré par build.mjs) */\n` +
  bundles[c].parts.sort((a, b) => (a.kind === b.kind ? a.file.localeCompare(b.file) : a.kind === 'q' ? -1 : 1)).map(p => p.txt).join('\n');
const css = read(SRC, 'css', 'app.css');
const coreJs = coreFiles.map(f => `/* ── ${f} ── */\n${core[f]}`).join('\n');

const clsIndex = {};
const chunkTexts = {};
for (const c of classOrder) { const rel = `data/c-${slug(c)}.js`; clsIndex[c] = rel; chunkTexts[rel] = bundleText(c); }
for (const b of somBlocks) chunkTexts[b.out] = b.txt;

const tpl = read(SRC, 'index.html');
const sha = s => crypto.createHash('sha256').update(s).digest('hex').slice(0, 10);

if (MONO) {
  const data = [...Object.values(chunkTexts)].join('\n');
  const v = sha(css + coreJs + data);
  const scripts = `<script>window.MQ_INDEX={mono:true,v:'${v}'};</script>\n<script>\n${coreJs}\n${data}\nrebuildAllQ();\n</script>`;
  const html = tpl.replace('<link rel="manifest" href="manifest.webmanifest">\n', '').replace(/<link rel="stylesheet"[^>]*>/, `<style>\n${css}\n</style>`).replace('@@SCRIPTS@@', scripts);
  wr('index.html', html);
  console.log(`✔ dist-mono/index.html  ${(html.length / 1024).toFixed(0)} Ko`);
  process.exit(0);
}

const version = sha(css + coreJs + Object.values(chunkTexts).join(''));
const index = { v: version, cls: clsIndex, som: somIndex };
wr('css/app.css', css);
wr('js/core.js', coreJs);
for (const [rel, txt] of Object.entries(chunkTexts)) wr(rel, txt);
const scripts = `<script>window.MQ_INDEX=${JSON.stringify(index)};</script>\n<script src="js/core.js?v=${version}"></script>\n` +
`<script>
if('serviceWorker' in navigator && /^https?:$/.test(location.protocol)){
  var hadSW = !!navigator.serviceWorker.controller;
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('sw.js').then(function(){ return navigator.serviceWorker.ready; }).then(function(reg){
      // les fichiers déjà chargés avant que le service worker prenne la main sont ajoutés au cache (disponibles hors ligne)
      var urls = performance.getEntriesByType('resource').map(function(e){ return e.name; }).filter(function(u){ return /\\/(data|js|css)\\//.test(u); });
      if(reg.active) reg.active.postMessage({ type: 'cache', urls: urls });
    }).catch(function(){});
  });
  navigator.serviceWorker.addEventListener('controllerchange', function(){
    if(!hadSW){ hadSW = true; return; }          // première installation : rien à signaler
    var d = document.createElement('div');
    d.style.cssText = 'position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;background:#185fa5;color:#fff;padding:12px 14px;border-radius:12px;font:600 14px system-ui,sans-serif;display:flex;gap:10px;align-items:center;justify-content:space-between;box-shadow:0 4px 18px rgba(0,0,0,.25)';
    d.innerHTML = '<span>Nouvelle version disponible.</span><button style="background:#fff;color:#185fa5;border:none;border-radius:8px;padding:8px 12px;font:700 13px system-ui,sans-serif;cursor:pointer">Mettre à jour</button>';
    d.querySelector('button').onclick = function(){ location.reload(); };
    document.body.appendChild(d);
  });
}
</script>`;
wr('index.html', tpl.replace(/@@VERSION@@/g, version).replace('@@SCRIPTS@@', scripts));

/* service worker, manifeste, icône, en-têtes Cloudflare */
const staticDir = path.join(ROOT, 'static');
for (const f of fs.readdirSync(staticDir)) {
  let t = read(staticDir, f);
  if (f === 'sw.js') t = t.replace(/@@VERSION@@/g, version).replace('@@PRECACHE@@', JSON.stringify(['./', 'index.html', `css/app.css?v=${version}`, `js/core.js?v=${version}`, `${clsIndex[classOrder[0]]}?v=${version}`, 'manifest.webmanifest', 'icon.svg']));
  wr(f, t);
}

/* ---------- 6. rapport ---------- */
const kb = n => (n / 1024).toFixed(0).padStart(4) + ' Ko';
const size = rel => fs.statSync(path.join(OUT, rel)).size;
console.log(`\nMathChrono-Quiz — version ${version}\n`);
console.log('Classe      thèmes  questions  fichiers de cours   données');
let tT = 0, tQ = 0;
for (const c of classOrder) {
  const b = bundles[c]; tT += b.themes; tQ += b.questions;
  console.log(`${c.padEnd(10)} ${String(b.themes).padStart(6)} ${String(b.questions).padStart(10)} ${String(b.coursFiles).padStart(10)}          ${kb(size(clsIndex[c]))}`);
}
console.log(`${'TOTAL'.padEnd(10)} ${String(tT).padStart(6)} ${String(tQ).padStart(10)}\n`);
console.log('Modules sommatifs par classe :', Object.entries(somIndex).map(([c, f]) => `${c} (${f.length})`).join(', '));
const first = size('index.html') + size('css/app.css') + size('js/core.js');
console.log(`\nPremier chargement (page + styles + code) : ${kb(first)} — le reste est chargé à la demande.`);
console.log(`Sortie : ${path.relative(ROOT, OUT)}/\n`);
