// Minimal service worker. It doesn't cache anything (the app needs live network
// access for scores/stats anyway) — it exists purely so the browser recognizes
// this as an installable app and offers a proper icon + full-screen launch.
self.addEventListener('install', function(event) {
  self.skipWaiting();
});
self.addEventListener('activate', function(event) {
  self.clients.claim();
});
self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
