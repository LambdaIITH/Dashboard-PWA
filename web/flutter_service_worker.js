'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "6affb387cdc97d16b02f89b919282552",
"/": "6affb387cdc97d16b02f89b919282552",
"main.dart.js": "21817c12cdc412e14faeb4ed7a64c55f",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/Icon-maskable-512.png": "8c9644e99eec5497537c209ea4fdbad9",
"icons/Icon-maskable-192.png": "95e7449c5122e8da9072a2b36e950a71",
"icons/Icon-192.png": "95e7449c5122e8da9072a2b36e950a71",
"icons/Icon-512.png": "8c9644e99eec5497537c209ea4fdbad9",
"splash/img/light-3x.png": "29f5c412e1fbdeeec72b70079768351c",
"splash/img/light-2x.png": "8cc1332d3982b69c49a0313936eb3415",
"splash/img/light-1x.png": "f99e5b9dbc9d8cc93073a71f57bca79e",
"splash/img/dark-3x.png": "29f5c412e1fbdeeec72b70079768351c",
"splash/img/dark-4x.png": "8c9644e99eec5497537c209ea4fdbad9",
"splash/img/dark-2x.png": "8cc1332d3982b69c49a0313936eb3415",
"splash/img/dark-1x.png": "f99e5b9dbc9d8cc93073a71f57bca79e",
"splash/img/light-4x.png": "8c9644e99eec5497537c209ea4fdbad9",
"manifest.json": "5a2d34838db63164dae96fac07cbf13c",
"version.json": "45b9a22dbd57a200dbcf829349c69105",
"flutter_bootstrap.js": "47249e8253c3ed8365c7ca641f74b986",
"assets/shorebird.yaml": "9e2baf8f8a1293cc6ef57b1469174527",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "34824d560b72b68a309cfcb622c8fa6e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin.json": "cdbd1972df2280f5c2e8269e8cb92e8b",
"assets/env": "4095400a684ae89608dc24f39833fec0",
"assets/AssetManifest.bin": "c0e99fbb1d90981681f03735c8246597",
"assets/AssetManifest.json": "8dd7ab9b919a6464f795eaeff84cfeb4",
"assets/FontManifest.json": "e74e5581a95760de27a478ffe1b32b8c",
"assets/assets/lost_and_found/batteries.png": "b7ce570686208d59903dc39cf4cfb817",
"assets/assets/lost_and_found/calculator.png": "bb04b785a02fce3529ce1a9ed4317857",
"assets/assets/lost_and_found/samsung-adapter.png": "66614d5b85ce35d99285b9c3fa2f2446",
"assets/assets/lost_and_found/lost-found-grater.png": "3556c03bbba21f6990ae66eeeceabfab",
"assets/assets/lost_and_found/highlighter.png": "ada8c3557e60339c220a58a19e96b41c",
"assets/assets/fonts/Inter.ttf": "32204736a4290ec41200abe91e5190d1",
"assets/assets/icons/cab-add-success.png": "826118ff178d298ac598a6a774f01158",
"assets/assets/icons/bus.png": "df703a35a35f4e60f12110dd1363d464",
"assets/assets/icons/money-icon.png": "eee22c8139f8fca87853e6b09462df7d",
"assets/assets/icons/profile-photo.jpeg": "bc5691cdb3a4031839a84a7b60388b2b",
"assets/assets/icons/profile-pic.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/cab-sharing-icon.svg": "705b162dc50ea498624fb7c4b8b3cbc0",
"assets/assets/icons/arrow.svg": "0224402424a621c7efe80cb792add9c1",
"assets/assets/icons/Icon.png": "343b1aab06179da465cca367bdd11834",
"assets/assets/icons/swap-icon.svg": "123ad3be739bfff2b6b4a8dc7b50fc20",
"assets/assets/icons/acad-nav-icon.svg": "867e0fdcf2c38881cb644efdf969beea",
"assets/assets/icons/ev.png": "549705fce5243111c799b8cc22924106",
"assets/assets/icons/comingsoon.png": "cde8eb0ec6d80d71c0c59aebc39e6537",
"assets/assets/icons/google.png": "ce779b0f1c78be0d1a3fcc43b73ed6d7",
"assets/assets/icons/logo.png": "b30c48e4bb1ba1b12c7c680d79db35fa",
"assets/assets/icons/calendar.svg": "adb05741045c40ebd92cba569e2dfd3a",
"assets/assets/icons/magnifying-icon.svg": "7a8c2a5b44ab7dc444852be35fe155c7",
"assets/NOTICES": "758755f386f89e95d4bc2ff67cfceb71",
"favicon.png": "0ecc84c338e2e935f538d54dbfe985f2"};
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