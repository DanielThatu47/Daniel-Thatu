const CACHE_NAME = 'offline-cache';
const urlsToCache = [
  '/',
  './src/components/NetworkStatus/demo.png' 
// Adjust to the hashed filename in build
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

