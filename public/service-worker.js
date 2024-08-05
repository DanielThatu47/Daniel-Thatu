const CACHE_NAME = 'offline-cache';
const OFFLINE_IMAGE = '/no_internet.png';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([OFFLINE_IMAGE]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.endsWith('.png')) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(OFFLINE_IMAGE);
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});