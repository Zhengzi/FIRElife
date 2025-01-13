const cacheName = "calculator-cache-v1";
const assets = [
    "/FIRElife/",
    "/FIRElife/index.html",
    "/FIRElife/style.css",
    "/FIRElife/app.js",
    "/FIRElife/manifest.json",
    "/FIRElife/icon-192x192.png",
    "/FIRElife/icon-512x512.png",
    // "https://zhengzi.github.io/FIRElife/icon-192x192.png",  // Use absolute URL
    // "https://zhengzi.github.io/FIRElife/icon-512x512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(assets))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
