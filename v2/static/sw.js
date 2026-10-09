/* Service worker MathChrono-Quiz : fonctionnement hors ligne + mises à jour propres. Généré avec la version @@VERSION@@. */
const VERSION = '@@VERSION@@';
const CACHE = 'mq-' + VERSION;
const PRECACHE = @@PRECACHE@@;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('mq-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('message', e => {                       // la page signale les fichiers déjà chargés : on les garde pour le hors ligne
  const d = e.data || {};
  if (d.type === 'cache' && Array.isArray(d.urls)) {
    e.waitUntil(caches.open(CACHE).then(c => Promise.all(d.urls.filter(u => u.startsWith(location.origin)).map(u => c.add(u).catch(() => {})))));
  }
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;               // jamais les services externes
  if (url.pathname.startsWith('/api/')) return;             // réservé à la vérification des codes côté serveur
  if (req.mode === 'navigate') {                            // la page d'accueil : réseau d'abord, copie hors ligne en secours
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put('index.html', copy)); return r; })
      .catch(() => caches.match('index.html').then(r => r || caches.match('./'))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {   // fichiers versionnés : cache d'abord
    if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return r;
  })));
});
