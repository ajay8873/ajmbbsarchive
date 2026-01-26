// Optimized Service Worker for AJ MBBS Portal - v1.1
const cacheName = 'aj-mbbs-v1.1';
const assets = [
  './',
  './index.html',
  './marrow.html',
  './prep.html',
  './cerebellum.html',
  './doc.html',
  './dams.html',
  './egurukul.html',
  './surgery_dada.html', // Added the new Surgery Dada platform
  './apk.png'            // App Icon
];

// Install event: Caches all essential files
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Caching Elite Portal Assets...');
      // Using cache.addAll with relative paths for Termux/Localhost stability
      return cache.addAll(assets);
    }).then(() => self.skipWaiting())
  );
});

// Activate event: Deletes old cache versions when you update the version number
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cacheName)
            .map(key => caches.delete(key))
      );
    })
  );
  return self.clients.claim();
});

// Fetch event: Network-first approach with cache fallback (Best for medical updates)
self.addEventListener('fetch', evt => {
  evt.respondWith(
    fetch(evt.request).catch(() => {
      return caches.match(evt.request).then(cacheRes => {
        if (cacheRes) return cacheRes;
        
        // Offline Fallback for html pages
        if (evt.request.url.indexOf('.html') > -1) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
