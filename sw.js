/* Cache só para uso sem internet. O nome do cache traz a versão:
   toda publicação sobe o número (publicar.sh faz isso). */
const CACHE = 'claude-estruturado-t3-v13';
const ARQUIVOS = ['./', './index.html', './curso.js', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Rede primeiro: com internet o app sempre mostra a versão publicada;
   o cache só responde quando não há rede. */
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request, { cache: 'no-cache' }).then((res) => {
      if (res && res.status === 200 && res.type === 'basic') {
        const copia = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copia));
      }
      return res;
    }).catch(() => caches.match(e.request).then((hit) => hit || caches.match('./index.html')))
  );
});
