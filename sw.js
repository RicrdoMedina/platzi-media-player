const VERSION = "v1";

self.addEventListener("install", event => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", event => {
  const request = event.request;

  //get
  if (request.method !== "GET") {
    return;
  }

  //search on cache
  event.respondWith(cachedResponse(request));

  //update cache
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    "/website",
    "/website/index.html",
    "/website/assets/index.js",
    "/website/assets/MediaPlayer.js",
    "/website/assets/plugins/AutoPlay.js",
    "/website/assets/plugins/AutoPause.js",
    "/website/assets/index.css",
    "/website/assets/BigBuckBunny.mp4"
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);

  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);

  return cache.put(request, response);
}
