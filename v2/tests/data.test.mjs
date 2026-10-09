/* Contrôle automatique des contenus (aucune dépendance) : node --test tests/data.test.mjs */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (...p) => fs.readFileSync(path.join(ROOT, ...p), 'utf8');
const idx = vm.createContext({ window: {} });
vm.runInContext(read('src/js/core/10-data-index.js'), idx);
const CLASSES = vm.runInContext('Object.assign({}, CLASSES_C1, CLASSES_C2)', idx);

// toutes les questions, par classe
const Q = {};
const qDir = path.join(ROOT, 'src/content/questions');
for (const f of fs.readdirSync(qDir).filter(f => f.endsWith('.js'))) {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext('var THEMES_C1={}, THEMES_C2={};', ctx);
  vm.runInContext(fs.readFileSync(path.join(qDir, f), 'utf8'), ctx);
  Object.assign(Q, vm.runInContext('Object.assign({}, THEMES_C1, THEMES_C2)', ctx));
}

test('chaque thème listé dans une classe a des questions (et inversement)', () => {
  const listed = new Set(Object.values(CLASSES).flat());
  assert.deepEqual([...listed].filter(t => !Q[t]), [], 'thèmes listés mais sans questions');
  assert.deepEqual(Object.keys(Q).filter(t => !listed.has(t)), [], 'thèmes avec questions mais absents de CLASSES');
});

test('questions : 4 choix distincts, bonne réponse valide, explication présente', () => {
  const bad = [];
  for (const [t, qs] of Object.entries(Q)) qs.forEach((q, i) => {
    const id = `${t} #${i + 1}`;
    if (!Array.isArray(q.c) || q.c.length !== 4) return bad.push(id + ' : il faut 4 choix');
    if (new Set(q.c.map(x => String(x).trim())).size < 4) bad.push(id + ' : choix en double');
    if (!Number.isInteger(q.a) || q.a < 0 || q.a > 3) bad.push(id + ' : index de réponse invalide');
    if (!String(q.exp || '').trim()) bad.push(id + ' : explication manquante');
    if (!String(q.q || '').trim()) bad.push(id + ' : énoncé vide');
  });
  assert.deepEqual(bad, []);
});

test('pas de question en double dans une même classe', () => {
  const dup = [];
  for (const [cls, ths] of Object.entries(CLASSES)) {
    const seen = new Map();
    for (const t of ths) (Q[t] || []).forEach((q, i) => { const k = q.q.trim().toLowerCase(); if (seen.has(k)) dup.push(`${cls} : « ${q.q.slice(0, 50)} » (${seen.get(k)} / ${t} #${i + 1})`); else seen.set(k, `${t} #${i + 1}`); });
  }
  assert.deepEqual(dup, []);
});

test('cours : chaque fichier concerne une seule classe connue', () => {
  const dir = path.join(ROOT, 'src/content/cours');
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.js'))) {
    const cl = new Set([...fs.readFileSync(path.join(dir, f), 'utf8').matchAll(/MQ_COURS\['([^']+)'\]/g)].map(m => m[1]));
    assert.equal(cl.size, 1, f);
    assert.ok(CLASSES[[...cl][0]], `${f} : classe inconnue`);
  }
});

test('la construction réussit (build.mjs) et produit les fichiers attendus', async () => {
  const { execFileSync } = await import('node:child_process');
  execFileSync('node', ['build.mjs'], { cwd: ROOT, stdio: 'pipe' });
  for (const f of ['index.html', 'js/core.js', 'css/app.css', 'sw.js', 'manifest.webmanifest']) assert.ok(fs.existsSync(path.join(ROOT, 'dist', f)), f);
  const html = read('dist/index.html');
  assert.ok(/MQ_INDEX/.test(html) && !/@@/.test(html), 'gabarit mal rempli');
});
