// service-worker.js
// Versión 3 - actualizado el 6 de agosto 2025 instalar  transperencia 
// Actualización V4 al taño web al 100 6/8/2025
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('lsm-mirador-cache-V4').then(cache => {
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
