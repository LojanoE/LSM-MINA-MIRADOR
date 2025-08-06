// service-worker.js
// Versión 1 - actualizado el 6 de agosto 2025
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('lsm-mirador-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/styles.css',
        // Agrega aquí todas tus rutas necesarias
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
