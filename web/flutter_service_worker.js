'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c5465a0f25e3ef18f20d47df79389db0",
"main.dart.js": "7807c522664418cb463689f535e2de8a",
"favicon.png": "9a5f3d7ae592c0441f88c9c019aee32c",
"version.json": "bc335e19f634b7a9ad3ccedaa2079e30",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"index.html": "b2914e18276ac4253a5e4265cf05ff92",
"/": "b2914e18276ac4253a5e4265cf05ff92",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6565c6643866092f0445f29c2867bf38",
"assets/env": "7fefa960fe9de51558694d17f3eef594",
"assets/shorebird.yaml": "836d18766aa720a000a20cb6def842ed",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "67852c953e5cf7bf3af81b3eaac69c29",
"assets/FontManifest.json": "9543a5de300dec6c63f6f728e5e82de8",
"assets/AssetManifest.json": "c2852fedf9ee196914926971310b9e98",
"assets/assets/lost_and_found/lost-found-grater.png": "3556c03bbba21f6990ae66eeeceabfab",
"assets/assets/lost_and_found/calculator.png": "bb04b785a02fce3529ce1a9ed4317857",
"assets/assets/lost_and_found/highlighter.png": "ada8c3557e60339c220a58a19e96b41c",
"assets/assets/lost_and_found/samsung-adapter.png": "66614d5b85ce35d99285b9c3fa2f2446",
"assets/assets/lost_and_found/batteries.png": "b7ce570686208d59903dc39cf4cfb817",
"assets/assets/fonts/Outfit.ttf": "1b443ee3b6993db873f1faedffe56133",
"assets/assets/fonts/Inter.ttf": "32204736a4290ec41200abe91e5190d1",
"assets/assets/icons/comingsoon.png": "cde8eb0ec6d80d71c0c59aebc39e6537",
"assets/assets/icons/magnifying-icon.svg": "7a8c2a5b44ab7dc444852be35fe155c7",
"assets/assets/icons/swap-icon.svg": "123ad3be739bfff2b6b4a8dc7b50fc20",
"assets/assets/icons/money-icon.png": "eee22c8139f8fca87853e6b09462df7d",
"assets/assets/icons/google.png": "bf1ae300335612738225a562c08592d3",
"assets/assets/icons/calendar.svg": "adb05741045c40ebd92cba569e2dfd3a",
"assets/assets/icons/profile-pic.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/ev.png": "0a58a82f24b6079ec78eaec82363560b",
"assets/assets/icons/logo.png": "70944dd3abd1a0a51a1d6f1fcfeac0d3",
"assets/assets/icons/icon.png": "8ff5e3e513f1ed2387b166e7aaa38ea9",
"assets/assets/icons/bus-svg.svg": "58d9a919f4d38772edec0bcb4d3295c8",
"assets/assets/icons/arrow.svg": "0224402424a621c7efe80cb792add9c1",
"assets/assets/icons/cab-sharing-icon.svg": "e0cefc10ffed24658992ac8c713564cd",
"assets/assets/icons/bus.png": "df703a35a35f4e60f12110dd1363d464",
"assets/assets/icons/igh.jpg": "dee46edd054062921b79fef4886d2e23",
"assets/assets/icons/igh-book.svg": "56e57faf4be1f194f62023da8ebd678b",
"assets/assets/icons/acad-nav-icon.svg": "867e0fdcf2c38881cb644efdf969beea",
"assets/assets/icons/profile-photo.jpeg": "bc5691cdb3a4031839a84a7b60388b2b",
"assets/assets/icons/cab-sharing-icon-old.svg": "705b162dc50ea498624fb7c4b8b3cbc0",
"assets/assets/icons/cab-add-success.png": "826118ff178d298ac598a6a774f01158",
"assets/AssetManifest.bin": "2687869ab1bbd19d169cb0f1c76de265",
"assets/NOTICES": "2d804c43306a325819077064cf969ccc",
"assets/AssetManifest.bin.json": "164043a265a5036b23d410f77a14c6de",
"splash/img/dark-4x.png": "5d63141222f3a1a9e201874cc279b634",
"splash/img/light-1x.png": "4d52cc2f2561964840091bc7e52c9366",
"splash/img/dark-1x.png": "4d52cc2f2561964840091bc7e52c9366",
"splash/img/light-2x.png": "d8c586f3547aab003359eee70212bb82",
"splash/img/dark-3x.png": "e46f9e558121937fe020065da827f35f",
"splash/img/light-4x.png": "5d63141222f3a1a9e201874cc279b634",
"splash/img/dark-2x.png": "d8c586f3547aab003359eee70212bb82",
"splash/img/light-3x.png": "e46f9e558121937fe020065da827f35f",
"manifest.json": "d95950425d3f35a34804c10150ecee4c",
"icons/Icon-maskable-512.png": "9566b672baeb750c73ecd1df12044924",
"icons/Icon-192.png": "c2ec882483656433f93f49020594ccdd",
"icons/Icon-512.png": "9566b672baeb750c73ecd1df12044924",
"icons/Icon-maskable-192.png": "c2ec882483656433f93f49020594ccdd"};
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
