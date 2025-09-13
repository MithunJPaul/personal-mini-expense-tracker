// Simple offline-first service worker for GitHub Pages
const VERSION = 'v1.0.0';
const BASE = '/personal-mini-expense-tracker/';

// Everything here must exist at the repo root on Pages
const STATIC_ASSETS = [
  '',                    // resolves to BASE (directory)
  'index.html',
  'manifest.webmanifest',
  'favicon.ico',
  'icon-192.png',
  'icon-512.png',
  // optional maskables (add only if you commit them)
  // 'icon-192-maskable.png',
  // 'icon-512-maskable.png'
].map(p => BASE + p);

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Cache-then-network with background refresh
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  event.respondWith(
    caches.match(request).then(cached => {
      const fetchPromise = fetch(request).then(response => {
        // Only cache successful, basic/opaque responses
        if (response && (response.status === 200 || response.type === 'opaque')) {
          const copy = response.clone();
          caches.open(VERSION).then(cache => cache.put(request, copy));
        }
        return response;
      }).catch(() => cached); // if network fails, fall back to cache
      return cached || fetchPromise;
    })
  );
});
