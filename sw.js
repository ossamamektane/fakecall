'use strict';
const CACHE = 'applesupport-offline-v3';
const ROOT = new URL('./', self.location.href);
const INDEX = new URL('index.html', ROOT).href;
const FILES = ['index.html', 'manifest.webmanifest'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES.map(f => new URL(f, ROOT).href))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('applesupport-offline-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== ROOT.origin || !url.pathname.startsWith(ROOT.pathname)) return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).then(response => {
      if (!response.ok) throw new Error('Unavailable');
      const copy = response.clone();
      event.waitUntil(caches.open(CACHE).then(cache => cache.put(INDEX, copy)));
      return response;
    }).catch(() => caches.match(INDEX)));
  } else if (FILES.some(f => new URL(f, ROOT).href === url.href)) {
    event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
  }
});
