'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "d95950425d3f35a34804c10150ecee4c",
"main.dart.js": "c0aaf99032b79cf9c42382e791937ef2",
"icons/Icon-192.png": "c2ec882483656433f93f49020594ccdd",
"icons/Icon-512.png": "9566b672baeb750c73ecd1df12044924",
"icons/Icon-maskable-192.png": "c2ec882483656433f93f49020594ccdd",
"icons/Icon-maskable-512.png": "9566b672baeb750c73ecd1df12044924",
"favicon.png": "9a5f3d7ae592c0441f88c9c019aee32c",
"flutter_bootstrap.js": "d090200bae4f3d14894854ff804fc7ad",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"index.html": "72b1558a761287df61e7637c15df0b81",
"/": "72b1558a761287df61e7637c15df0b81",
"splash/img/light-3x.png": "e46f9e558121937fe020065da827f35f",
"splash/img/dark-3x.png": "e46f9e558121937fe020065da827f35f",
"splash/img/dark-1x.png": "4d52cc2f2561964840091bc7e52c9366",
"splash/img/dark-2x.png": "d8c586f3547aab003359eee70212bb82",
"splash/img/light-4x.png": "5d63141222f3a1a9e201874cc279b634",
"splash/img/light-1x.png": "4d52cc2f2561964840091bc7e52c9366",
"splash/img/dark-4x.png": "5d63141222f3a1a9e201874cc279b634",
"splash/img/light-2x.png": "d8c586f3547aab003359eee70212bb82",
"version.json": "d7645cdf31fd171f8cbd6cde10b278f1",
"assets/shorebird.yaml": "836d18766aa720a000a20cb6def842ed",
"assets/AssetManifest.bin": "13cafb0c29cb5ae187abbd61632d12e3",
"assets/AssetManifest.json": "2e7552e4e2ee364aef2dbfdb51db180d",
"assets/FontManifest.json": "e74e5581a95760de27a478ffe1b32b8c",
"assets/env": "4095400a684ae89608dc24f39833fec0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "00972ffcef7fb096a5d475e70c760968",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6565c6643866092f0445f29c2867bf38",
"assets/fonts/MaterialIcons-Regular.otf": "1914617eeeb1f6a6c604fe0e4e5b414b",
"assets/NOTICES": "5a4d4e78570bdda862a7ab6f7b3ca0c3",
"assets/assets/icons/bus.png": "df703a35a35f4e60f12110dd1363d464",
"assets/assets/icons/ev.png": "0a58a82f24b6079ec78eaec82363560b",
"assets/assets/icons/comingsoon.png": "cde8eb0ec6d80d71c0c59aebc39e6537",
"assets/assets/icons/calendar.svg": "adb05741045c40ebd92cba569e2dfd3a",
"assets/assets/icons/cab-sharing-icon-old.svg": "705b162dc50ea498624fb7c4b8b3cbc0",
"assets/assets/icons/profile-pic.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/icon.png": "8ff5e3e513f1ed2387b166e7aaa38ea9",
"assets/assets/icons/logo.png": "70944dd3abd1a0a51a1d6f1fcfeac0d3",
"assets/assets/icons/cab-sharing-icon.svg": "e0cefc10ffed24658992ac8c713564cd",
"assets/assets/icons/money-icon.png": "eee22c8139f8fca87853e6b09462df7d",
"assets/assets/icons/acad-nav-icon.svg": "867e0fdcf2c38881cb644efdf969beea",
"assets/assets/icons/arrow.svg": "0224402424a621c7efe80cb792add9c1",
"assets/assets/icons/google.png": "bf1ae300335612738225a562c08592d3",
"assets/assets/icons/cab-add-success.png": "826118ff178d298ac598a6a774f01158",
"assets/assets/icons/profile-photo.jpeg": "bc5691cdb3a4031839a84a7b60388b2b",
"assets/assets/icons/swap-icon.svg": "123ad3be739bfff2b6b4a8dc7b50fc20",
"assets/assets/icons/magnifying-icon.svg": "7a8c2a5b44ab7dc444852be35fe155c7",
"assets/assets/lost_and_found/calculator.png": "bb04b785a02fce3529ce1a9ed4317857",
"assets/assets/lost_and_found/highlighter.png": "ada8c3557e60339c220a58a19e96b41c",
"assets/assets/lost_and_found/samsung-adapter.png": "66614d5b85ce35d99285b9c3fa2f2446",
"assets/assets/lost_and_found/lost-found-grater.png": "3556c03bbba21f6990ae66eeeceabfab",
"assets/assets/lost_and_found/batteries.png": "b7ce570686208d59903dc39cf4cfb817",
"assets/assets/fonts/Inter.ttf": "32204736a4290ec41200abe91e5190d1",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
