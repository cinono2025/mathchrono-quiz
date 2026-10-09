/* Test de bout en bout (nécessite : npm i -D playwright && npx playwright install chromium) : node tests/e2e.mjs
   Vérifie dans un vrai navigateur : premier chargement léger, chargement à la demande, échec réseau + reprise, hors ligne. */
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const MIME = { '.html': 'text/html;charset=utf-8', '.js': 'text/javascript;charset=utf-8', '.css': 'text/css', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json' };
let OFFLINE = false;
const srv = http.createServer((q, r) => {
  if (OFFLINE) { q.socket.destroy(); return; }
  let u = decodeURIComponent(q.url.split('?')[0]); if (u === '/') u = '/index.html';
  const f = path.join(ROOT, u);
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); return r.end('nf'); }
  r.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream', 'Cache-Control': 'no-cache' }); r.end(fs.readFileSync(f));
});
let fails = 0; const ok = (c, m) => { if (!c) fails++; console.log((c ? '✅ ' : '❌ ') + m); };
await new Promise(r => srv.listen(0, r)); const URL0 = `http://localhost:${srv.address().port}/index.html`;
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 390, height: 800 }, serviceWorkers: 'allow' }); const p = await ctx.newPage();
const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('dialog', d => d.dismiss());
const reqs = []; p.on('request', r => { const u = new URL(r.url()); if (u.origin === new URL(URL0).origin) reqs.push(u.pathname); });
const quiz = () => p.evaluate(() => /Question 1 \//.test(document.getElementById('app').innerText));
await p.goto(URL0); await p.waitForTimeout(1500);
ok((await quiz()) && reqs.filter(x => x.startsWith('/data/')).join() === '/data/c-6e.js', 'premier chargement : quiz affiché, une seule classe téléchargée');
reqs.length = 0; await p.evaluate(() => setClass('3e')); await p.waitForTimeout(600);
ok(reqs.includes('/data/c-3e.js') && await quiz(), 'changement de classe : données chargées à la demande');
await p.waitForTimeout(800);
OFFLINE = true; await p.reload(); await p.waitForTimeout(1500);
ok(await quiz(), 'hors ligne : l\'application se rouvre');
await p.evaluate(() => setClass('4e')); await p.waitForTimeout(900);
ok(await p.evaluate(() => /Impossible de charger/.test(document.getElementById('app').innerText)), 'hors ligne : classe jamais vue → message + « Réessayer »');
OFFLINE = false; await p.evaluate(() => mqRetryLoad()); await p.waitForTimeout(900);
ok(await quiz(), 'connexion rétablie : la classe se charge');
ok(errs.length === 0, 'aucune erreur JavaScript ' + JSON.stringify(errs));
await b.close(); srv.close(); process.exit(fails ? 1 : 0);
