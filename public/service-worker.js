const CACHE_NAME = 'offline-cache';
const OFFLINE_IMAGE = '/no_internet.png';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([OFFLINE_IMAGE]);
    }).catch((error) => {
      console.error('Failed to open cache:', error);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          console.log('Cache hit:', event.request.url);
          return response;
        }
        return fetch(event.request)
          .catch(() => {
            if (event.request.mode === 'navigate') {
              console.log('Navigating offline, serving offline page');
              return caches.match(OFFLINE_IMAGE);
            }
            return caches.match(OFFLINE_IMAGE);
          });
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      })
  );
});