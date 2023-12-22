'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e5828c564f71fea3a12dde8bd5d27063",
".git/config": "242af46b809f86ad34bccd8b6a449497",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c99d3dad941ff372a41f1b689244942a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5ea278b2da2a40dbc8315c46b4968219",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cb56ce0013d95960667342194fe9f082",
".git/logs/refs/heads/main": "cb56ce0013d95960667342194fe9f082",
".git/logs/refs/remotes/CV/main": "14e820fd9d965920966c57ff76f727ca",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/03/5d20ab8bcb1d9b6d84eb48ce47632d7b26abd2": "188c437d9657b0998da71a61e5b58022",
".git/objects/07/d8900c7a2373899750e47f3424ea9f8ddc0cff": "fc37b481fa0767b2574c1de6badba6de",
".git/objects/08/253b5a75792094ef7bfd151e83f264ca8f1685": "978773031482c141e3e6bf16efeb673a",
".git/objects/08/28cc3d5a53af7f6b00916b26d2e27647a8b72c": "91d7258738230f7a9b33d49079639b75",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/1c/83de14ca1ce6570800aed66a20d42d03ab30fa": "6923b549c9e9dac38527f71a9124b567",
".git/objects/21/c7a811a524cd6fb721efe74af02a70bd48cb81": "6a1ed3a67e97a2a679867702b3ba9704",
".git/objects/26/3df103a7c2f2cd8813ab31c098d76813d1f025": "a462b630a1eaf5dfef4ab1fd10dfd496",
".git/objects/28/46c79c79a0a5ce7a38c36ade246b8888cc3b2d": "88e61bb03e3ce5bfe52fa0cd771aad62",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/965b3ccb00e9466ddac12571b3bc03a7b67bcc": "96e888895cbd0236e5f760f31e9a0149",
".git/objects/37/567c56a63b29271700353f16acb38bd3705212": "ca04bb308c50b8fa680eeed6538418a2",
".git/objects/37/6fb3a1a46c47ebe82c7056ad725d5832bfe368": "f07784483e52746c8832812421ff8501",
".git/objects/3a/c67b069f973fe8250d04ed223c192018c2a5ac": "f163dbd7e3dc1f999a00d6ed150d1471",
".git/objects/3d/4497dade78096ebb7ed1841d360c309cb14ac6": "3a54822ed9788d01f073db7d0fc4f3d5",
".git/objects/40/2808dda65c3754ad7396fd8494975ab0010c1a": "dafd1ce4cb1ed95cc37b66d15974a13d",
".git/objects/43/da6eccc4c8022d72e261af0a6a29e68b8d1998": "bf01376d3841d9628edc0f6be01ea0ee",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/f0622edf6253575ac5ad916a1067e06fedf978": "bb2596f0262b8cd39873aa75e476c840",
".git/objects/4e/815cb1a8811e21d1a9fb76edba5ee420f92ccb": "98d194286910dd01d3be7ccecf4bf4da",
".git/objects/50/5c9da7a783d9b1c97adbb316576b0b65d12b33": "0f812bf6a09d1fd1f9bffc384053492d",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/dff0f4c4ac3a835e20d9b9802d4d9811ab55bb": "bcdf0447165451b2785cd3d8d8ce85fd",
".git/objects/5b/7db746d393bb29d171df3d49316e8234971f43": "d624fe4a8828f43e3b5fe9c2ee600ba6",
".git/objects/5c/4aac501411f8d5d327ae11128ad4737133f9c3": "af2cb05302fe815f1ff26cd7050565d7",
".git/objects/65/9bc6cc9277c19098521ec1a1182dafae707b0a": "c4c3704e64ccf8753cd58187cd5abb5f",
".git/objects/66/45ae5a844bd2c9936b03cabae3f5b8e7eff66c": "3eacdd2fc666364074e445260afc1090",
".git/objects/6c/c3c699f31ca80823194c9743d77ce372e0714a": "817aa9a6b00198e36377d0873189f290",
".git/objects/76/7f637c36e4e1d513739eca27b2db2eb750a188": "e34180293cd42b95af3ef1ade0f5a804",
".git/objects/77/f0ee1eeeba6bfa52eee03dbe6a9435ae29bc33": "cc1a5fd40b54f1fd191aee3631782011",
".git/objects/78/5093f69a61b7b572373f2d8df69f723ef0a104": "e59997a2ec0782cf76f068c787675886",
".git/objects/7c/ab961aeb37f42ef6ee1e0b884402e9b7207f87": "b2b2e96607bbee1a634fbd2c616e181a",
".git/objects/82/da59db17f356083e5ae2c4fe600de241716c4c": "c2e8871e4cc23d495f1a26136727e226",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/87/ff7654a8b18d1e9ab7ccdb1887156a8a1a37cc": "b319058492ade309259a4dd6d1ef13a2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/05145598b76b98989211ea0f9dc722f96f84d8": "1e5cb4d7f7334ead7531e10a9a8c6437",
".git/objects/8e/c9934496fd776be369ed27b5cc8ea3b67698fd": "9356aac24a8afec00fc35e76220e46e1",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/98/23a0ea4727ec46ccd5d7d4f1a3bfb92172561c": "97738a121cab5b15d51acc122839226b",
".git/objects/9e/5cb1ccb5aceaf3e1097662bde4b83aaf3b4613": "9f73baecbda8d895733e251fe4d35243",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b1/ea7bad71cb1cda01b3572131cc904c619650d1": "a40a8d9369fe1937da2474963766587f",
".git/objects/b5/281356a005c81ad9d1f8e05cc204590955744e": "f9b6096048ea16fa5bfa78bfb1280234",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/9df487b694f277a20bd9f05b0f795a3372b605": "8423a58c493f3fca312c0646b4cd2f61",
".git/objects/be/0153405dcc91e4f18e8f7db4b6a35ec28af368": "698265e8ca789fda739eb82b45eac5e6",
".git/objects/be/9fffe6d45738962449115b6f171ccdd2363e1d": "f6e55c847174855683ccfa27b131b45c",
".git/objects/cf/587ea5c3f07fde375ba0ca9f6ec029f837019f": "631d177a75effac26175e426b0e8d8f7",
".git/objects/cf/ad267ec85fa668370af5ec06fff03479887e65": "8030bffd06d49612e3ef64868b59e935",
".git/objects/d1/4ecef1d08d4841e14ebc71eaeb19add9591702": "2d3e9d56b6b6c32343f3149a046beb40",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/0488858e41c8ae0db13a57fef7966f39e4c68c": "14f68db3f93085563d41ecd301db1696",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/6b00808b08107a78fcf54a53e218e25d631428": "bd94570f9974fe67c88a14594e3492db",
".git/objects/dd/d40b61ef7e988025d89e0b56bfca3789a07599": "07c0174e73bfdeab49c6cce111cfb0eb",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/274daccb3918248a014fc714b5ef1e61cfa6a9": "c655143f6b9d31f765c1504187c3791c",
".git/objects/e3/ae3e84f997fa9b1837e9c45a2acceae4280cad": "965c6e80a4de966e11ab4517f8787eaa",
".git/objects/e6/8b4bf55e318733a7d9803f79923a31778f8cf9": "937b87dcebf88f8a91e27699456e4412",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/ea/bf75c66987db781357741b3f1ce8e3ab1129e6": "6a7b5b72da2d6bd177335c4f2897a13d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/8a56c2df8437a1e76a78444764a032d79a0e8a": "ac0a86743ead3a889d0518bb85ad6ff1",
".git/objects/f8/9859516ba195e77f717b30767a635ce11bc26c": "d15b7177f614ee2deaea36e698976986",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/4e447a6e3db3548dfb730cd907ed13a41f9858": "bd9d975545de970abdef3d574c2f008d",
".git/ORIG_HEAD": "04d7d9639d24b268d9a318a83d56c049",
".git/refs/heads/main": "04d7d9639d24b268d9a318a83d56c049",
".git/refs/remotes/CV/main": "04d7d9639d24b268d9a318a83d56c049",
"assets/AssetManifest.bin": "cc61cb6a299f383cdb01864bbe3fbdd3",
"assets/AssetManifest.json": "0c19f2161c10de2c52385fc38c859581",
"assets/assets/JAMAL_SORANI.pdf": "a5e8cd15040b054fd594e4fd58283bef",
"assets/assets/js.jpg": "5528048448b4e732a84291599dca3402",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "702d98d8ac1ffdfbdb5d7dc8cb37ae53",
"assets/NOTICES": "1387e96daab1e98ce3b17d929a0e62a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "89d35b807c614a6360dbb74e542335fc",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "c6b2d0da24816daef2255a5d66e118c9",
"icons/Icon-512.png": "1e3e7b038793cd69dd6b6c3afddd8b28",
"icons/Icon-maskable-192.png": "9ad0503f1497a6df52e06e4b880fb502",
"icons/Icon-maskable-512.ico": "2c148dca567e961fee41383826670fff",
"index.html": "12c9d8294d858431616ba9af0bdad17c",
"/": "12c9d8294d858431616ba9af0bdad17c",
"main.dart.js": "f90a4490d8b7ff8ead4eaa3a0b570ed4",
"manifest.json": "48546aff551acc8d896ba05cf26a7f42",
"version.json": "0a51ed8f1ad4d07fc3e26ff805795588"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
