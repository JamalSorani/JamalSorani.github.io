'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "20a31b54bc47da0843bd2188596af274",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a7d757cddc8eccf7e704652cc611c58c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/refs/remotes/origin/main": "4a360de0a899843b154bff92ba174860",
".git/objects/04/0ce35b152f757e88d0e49d2581e363876f8fbd": "3f02ab98c747ed9de8032e8dd8a54fc2",
".git/objects/1b/ef5c744d4fa9845247c3327cee0eb333b15a64": "aa84f5f305c2bcbbc6bb206f065df249",
".git/objects/26/e1db79fad45f1f1a12662d1d8c3f9ca815802c": "f05ae1cbc0c6f66a4ec7635af22dc1fe",
".git/objects/2d/c27e2284819abed5c760cbb033e7954b0ee395": "7bd23448298d2feb3ee222391cacf28b",
".git/objects/5c/1c9d30d4ce4450c0843cd695f0362ee47c1a0c": "60e01a0bc63b1c78318d5d743f7f4e83",
".git/objects/68/092fd532367c2ec9a8b9f09b4a238bf220eb4e": "af0cedc47dd016c2cabbe7a26bd3b370",
".git/objects/6e/3cf2ec02ccdb4ab85c76d94c0a1a831dda50f8": "4e3c8e5269960ea77e0d4d6b6ab1e861",
".git/objects/77/a5d538397291fda8439c78d9cb3d36b0f6e19a": "a18b8b0fc4a11e27c5140ff409123a31",
".git/objects/7a/3430984bcb3c53a3ea185c7f519fa57a52b519": "a4a0d270c82372865c05c2e365bae37b",
".git/objects/97/3fe9b551d6c8b1396e3645da938486dd112e7c": "a1c6200d53d37fb4ccf32fde806f6c34",
".git/objects/98/d3eb0dac6e86599a72cb91ddfc9716660eefa3": "bf82f4a70804cb54af3017bf68a74eb0",
".git/objects/9c/5deb92ca105cb67436d1cd9df1b1e7e30e8a57": "e3d0b98d465c6303499df17e8f57fd2a",
".git/objects/bb/6825b499e6e0ca6692086bf9cc40d81e332d89": "56c4bd01717baa3d4f0db216bc8c57f7",
".git/objects/be/9376a9eb554821f33039409e05d89daaac841f": "5f231ba0991cc44213d66d44c223c0cf",
".git/objects/df/58002cca7a74992a368693e5d73ab173de68e0": "53265f0f5301c09da44f456234bddfc8",
".git/objects/pack/pack-e3d09f34b9598423b94dcba60297d8a3c7a57b8d.idx": "186347ed2a5554c4964aa5f79e399bf3",
".git/objects/pack/pack-e3d09f34b9598423b94dcba60297d8a3c7a57b8d.pack": "a72bb206ef4e717df19cd1ddeed63eb6",
".git/objects/pack/pack-e3d09f34b9598423b94dcba60297d8a3c7a57b8d.rev": "71d4b5caa9172954b61d786f3d66f3b8",
".git/refs/remotes/origin/main": "6a7a9b131c626ebe56c405d43d46ecca",
"assets/AssetManifest.bin": "6aee5d35740b9472b2131eb5c3649ddf",
"assets/AssetManifest.bin.json": "858bb07f64193f998e51408b4c88e2a4",
"assets/AssetManifest.json": "f8e8afa1044a8b51d4338a84d1395f3b",
"assets/assets/icons/books.svg": "4a9ccb72eb9949bd8e47a99dc481ee92",
"assets/assets/icons/cart-shopping.svg": "c06ebae95a41def618b0d232fa565cdb",
"assets/assets/icons/chevron-down.svg": "5536c24c18bf700ed898b69def5fb887",
"assets/assets/icons/courthouse.svg": "b6bce3821643b006458984ea3eb99c93",
"assets/assets/icons/facebook.svg": "58ce3b52d928c44e321f38a71ef042e3",
"assets/assets/icons/filter.svg": "72abd4584f90f9f1bd9e16ef2c21cea2",
"assets/assets/icons/instagram.svg": "29c83a13ebe27182333c539ef530243e",
"assets/assets/icons/linkedin.svg": "28a3d465938a086441673b3f5458afa8",
"assets/assets/icons/Mail.svg": "d22519a0e5b57ff521c1995f0bd7b55f",
"assets/assets/icons/Map%2520pin.svg": "2369aad5ac96ac264a34104bf5fc3dd4",
"assets/assets/icons/Phone.svg": "7436bd52f5f0c47e7e9a4184339546b1",
"assets/assets/icons/profile-circle.svg": "8378a6fe18b4dfc29793192943c70493",
"assets/assets/icons/root_header_logo.svg": "d31300c5698fe550ac1158dec0bc04c4",
"assets/assets/icons/search.svg": "9a98943c21f9c76b482aa2bf2339c77b",
"assets/assets/icons/Subtract.svg": "39a034d1c942f2b7dad752f3c5d05006",
"assets/assets/icons/tweter.svg": "da348dbbc412e9a5a157eb87b40a3237",
"assets/assets/icons/Vector%25202.svg": "c4131b65619d5b4dc5aa4311c40f8021",
"assets/assets/images/footer.svg": "678358fc6b8f883eb8d262e70bc27371",
"assets/assets/images/stage_bg.png": "b63f004b92f201b8520cf6e9884d923b",
"assets/assets/images/Subtract.svg": "39a034d1c942f2b7dad752f3c5d05006",
"assets/assets/l10n/ar.json": "48ef64b3a6c82fb3c169df1f0b9cb1a5",
"assets/assets/l10n/en.json": "2c2597e3e9ae0a7faf8909d637aa57fb",
"assets/FontManifest.json": "3b23f83da01eab8a796db6eb053e057d",
"assets/fonts/MaterialIcons-Regular.otf": "38101c4cc2d2fdd13573ef36275e2a9a",
"assets/NOTICES": "fc85fc311ab615ca1e89fa0440a20d4d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e4c20f6dc4e1e28e9ac734fbcf3cb0da",
"assets/packages/elkood_about_app/fonts/bukra.ttf": "41db0a1456c6f5553a23137851d3f37a",
"assets/packages/elkood_about_app/lib/src/assets/image/logo.svg": "9294d13faa4c9f7012576f5c74ba62f6",
"assets/packages/elkood_about_app/lib/src/assets/image/logo_elkood.svg": "3b05ccf62d37ea2cd5eedaf32c2db477",
"assets/packages/elkood_about_app/lib/src/assets/image/text_tech.svg": "c2c4f4e59fd76e63ce42e0263e8f1acf",
"assets/packages/elkood_about_app/lib/src/assets/logo.png": "eb994a715afd1be4a383026e8f420460",
"assets/packages/elkood_check_version/translations/ar.json": "e80083d20f3f6bb2f0c928a4af27dec5",
"assets/packages/elkood_check_version/translations/en.json": "58a8fe95b7739cecc7ac2816538e273e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "55a0fd4574c6d8e87457893fc46a87d7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "2baa9e8cbe8ea803cf490fa29598dde5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "774e10602aec967e940c2c6b0355de74",
"/": "774e10602aec967e940c2c6b0355de74",
"main.dart.js": "28c78b6bfc22f4622fae5160faf382fd",
"manifest.json": "1df4cac06b333c7ed8d8247694391cb8",
"version.json": "3f4e54e8587a3b97f6e1782fe95a9713"};
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
