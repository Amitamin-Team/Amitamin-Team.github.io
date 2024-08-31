'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1e9947a35e2a31ac94099f364d3d47e6",
"version.json": "7d9e8dddfae3f3ff41da49df2c06c698",
"index.html": "a4ec9d4951cd68d758a464076238bf30",
"/": "a4ec9d4951cd68d758a464076238bf30",
"main.dart.js": "8be7e7edec5d61cdf0296939f2eecdb6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "59c74a87c6554d7e8c4b871c6c4a0914",
"assets/AssetManifest.json": "77356224677299d2b23e95e4928d7af7",
"assets/NOTICES": "1f8b3c3f1588fd77d69409fd7c201e35",
"assets/FontManifest.json": "b430fb47fcbe794b6ebd8ae46652ce9a",
"assets/AssetManifest.bin.json": "ed574a522c4719beca9c6a6b4c129ad1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8809a341401ce0944d5ea203fe99fcd5",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/image/analysis_pattern.png": "79ee49fe23c56ce735734bc880bf879a",
"assets/assets/image/analysis_background.png": "2a08e8248fef41435f671d1948de064e",
"assets/assets/image/tutorial_background_5.png": "29dbfe4178ef51e997cdadd0bd202e15",
"assets/assets/image/tutorial_background_4.png": "e1a9955965940ad6d2ed4d48b83c3ea9",
"assets/assets/image/tutorial_background_6.png": "b15cb72f22570acef75a82960ca7c237",
"assets/assets/image/analysis_change.png": "a64a66f79a6df75d54ff943228ad2be5",
"assets/assets/image/tutorial_background_3.png": "4f92f22380aaaa202d307e2096d6acdd",
"assets/assets/image/tutorial_background_2.png": "8341bea97a90fd5cef227cf5fdcf4498",
"assets/assets/image/tutorial_background_1.png": "d386064fc96700f7f21237526ecaaefc",
"assets/assets/icons/shortcut/blue_arrow_upward_right.svg": "c4df86578c13f31d35ac3a4a01fef319",
"assets/assets/icons/shortcut/gray_arrow_next.svg": "f76b92d4b003ae7826d17609406d1448",
"assets/assets/icons/shortcut/arrow_next.svg": "f64392d3460413bedce3f265abb6fb5c",
"assets/assets/icons/shortcut/arrow_back.svg": "452cb283d8463b115a72fcc1f4e15573",
"assets/assets/icons/shortcut/arrow_up.svg": "531e8f57d461a4524f74262cb9425973",
"assets/assets/icons/shortcut/gray_arrow_down.svg": "a94e676e8e51ca58a688acdc9980f8af",
"assets/assets/icons/shortcut/arrow_down.svg": "c089da2368e2586d3698acfaf129e44d",
"assets/assets/icons/shortcut/blue_arrow_next.svg": "ea703b6e83059b4462ea1156f4bb811f",
"assets/assets/icons/shortcut/gray_arrow_upward_right.svg": "2352cffe64661bda2952c8c49356af40",
"assets/assets/icons/shortcut/blue_arrow_back.svg": "12ea2c72d29ab7a38482878e1aaeab1f",
"assets/assets/icons/calendar/uis_calendar.svg": "1967db4e3ea0cb4fa0d5638511743ffe",
"assets/assets/icons/calendar/add_calendar.svg": "14e7390e8b682318e37e31e4944e00a3",
"assets/assets/icons/calendar/close.svg": "543df4a3a0a3c15860ac4d3b9efbd812",
"assets/assets/icons/calendar/next_calendar_2.svg": "c1e1b6ad14bed60b0eee9c0c97c18d4f",
"assets/assets/icons/calendar/calendar.svg": "9328c0aa4c09ab5a91fa62f0c60fab40",
"assets/assets/icons/calendar/next_calendar.svg": "dd52316aae3a0b1abc145bb1cdbc8349",
"assets/assets/icons/calendar/pre_calendar.svg": "e77d8ae4c16c3f71f14d9292ae85e4c1",
"assets/assets/icons/etc/ic_man_line.svg": "8473b90c28e9f023ce956b4e9c5289da",
"assets/assets/icons/etc/ic_woman_line.svg": "4d12fbc96737ebee2dcd6ddac8748406",
"assets/assets/icons/etc/pill.svg": "247f39bf0e87567e22d6d3f9db9bc581",
"assets/assets/icons/emoji/state=3.svg": "b89bfac4dfc5532281ecf7375c6816a8",
"assets/assets/icons/emoji/state=2.svg": "b849c30958e5e1057f671e829a208b4c",
"assets/assets/icons/emoji/state=0.svg": "e73988cda429924c9c426a7ce6290975",
"assets/assets/icons/emoji/state=10.svg": "fcef99638efb933cc642d7116c7b5ca5",
"assets/assets/icons/emoji/state=1.svg": "134d4b3b534446bdb4760b7bfdf9b3b5",
"assets/assets/icons/emoji/state=5.svg": "f9e4afdc208707b421c5534e504c1ce6",
"assets/assets/icons/emoji/state=4.svg": "ddbbcc16db0ef2054b626984dbde2a7e",
"assets/assets/icons/emoji/state=6.svg": "c239d5dc362ec919a26130609bef428a",
"assets/assets/icons/emoji/state=7.svg": "b1888cd6efc75cb48b3d634d4669ac7f",
"assets/assets/icons/emoji/state=none.svg": "b97b268209717638fdcaf05a155bac7f",
"assets/assets/icons/emoji/good=1.png": "6543c5fb067c25399f9999f6cef42137",
"assets/assets/icons/emoji/bad=1.png": "f77705bcbcd74ae6b507f57d5539481e",
"assets/assets/icons/emoji/state=9.svg": "fa07d7adf68b82c4bb2d4d6451f1bcef",
"assets/assets/icons/emoji/state=8.svg": "53719cbcd7e471d61fa7a305efd93fb6",
"assets/assets/icons/toggle/ic_toggle_on.svg": "34f2940430d70a3b56b7947077991ae0",
"assets/assets/icons/toggle/ic_toggle_off.svg": "d0987a114897317931871cb39a2ed126",
"assets/assets/icons/clear/close_disable.svg": "a56530fcba3963516fb738cb0b0f0652",
"assets/assets/icons/system/home_icon_filled.svg": "24104edebdd3c861c9324c488724d2d3",
"assets/assets/icons/system/ic_goal_add.svg": "dfce958f67822bfd4d7ad94b695809ac",
"assets/assets/icons/system/link.svg": "2009ef87af1451ee691a02e0cd522a8a",
"assets/assets/icons/system/quit.svg": "1f31be81e74595b68e79c809aec29efb",
"assets/assets/icons/system/blue_edit.svg": "4fd92426ea137760e14103f4d12f4f1a",
"assets/assets/icons/system/add.svg": "e8414c52a54eea0c55d5416899368ef7",
"assets/assets/icons/system/thumb.svg": "fc646c36e49d701c5d8cf3c61202fca9",
"assets/assets/icons/system/gray_kebab_menu.svg": "98bf3f8a973b2dfddb59be9a668e08ca",
"assets/assets/icons/system/gray_edit.svg": "10cadc886de0d1086ed8cdb42f04cb89",
"assets/assets/icons/system/kebab_menu.svg": "1e5b770f453b4c5de8c1d8695380f9e2",
"assets/assets/icons/system/slider_control_button.svg": "0f700b9da97191b455c7b07e706c2a8a",
"assets/assets/icons/system/new.svg": "865ed218832e3533b6cfe6a947500701",
"assets/assets/icons/system/home_icon_outlined.svg": "8833cd78d91065fdf3bbbbbafff02010",
"assets/assets/icons/system/my_icon_outlined.svg": "0707e1e173e51760ec667ba80983548c",
"assets/assets/icons/system/more_vert.svg": "98bf3f8a973b2dfddb59be9a668e08ca",
"assets/assets/icons/system/ballon.svg": "71555fc3a8ca74adf751b338f441c4f9",
"assets/assets/icons/system/my_icon_filled.svg": "8099960ea038d4002c996ff7bb6a069a",
"assets/assets/icons/system/analysis_icon_outlined.svg": "d06367bb4a8f8f58afd5bfa64f64dddd",
"assets/assets/icons/system/analysis_icon_filled.svg": "8d478fe8308e4a95bd2aaa9df129bea2",
"assets/assets/icons/illustration/night-mode.png": "fe0103fd1ed86f2bf3cea896597059d7",
"assets/assets/icons/illustration/muscle.png": "ba6129c525166c673b5bef773830823d",
"assets/assets/icons/illustration/healthy-food.png": "76c5a9ba2bd06ed42d32d9b9ca4f8b12",
"assets/assets/icons/illustration/heartbeat.png": "03cb5003c6a4fcbfb1b9b8e7cdfaa089",
"assets/assets/icons/null_calendar.svg": "c8dc6536e86f1844b5b3690a6159baf6",
"assets/assets/icons/app_logo.svg": "7439d435fae68249950207cba3975661",
"assets/assets/icons/alarm/nutrition_alarm.svg": "d442c2b53029fa7beebc889d19740c49",
"assets/assets/icons/alarm/body_alarm.svg": "dea966fda5840691777b84004ae74992",
"assets/assets/icons/alarm/mental_alarm.svg": "849b6438a57dbec148a58ad5a80a499f",
"assets/assets/icons/alarm/alarm_exist.svg": "e87b79c239cab274a8e70ad11011f286",
"assets/assets/icons/alarm/sleep_alarm.svg": "75398358a7c99ee31fbea0fe02699c7c",
"assets/assets/icons/alarm/alarm_empty.svg": "d110b5e873e40cf3b0a741ccd2602f45",
"assets/assets/icons/check/radio_unchecked_2.svg": "2408a269bc588e0fe8cc1a1ea1ee5de3",
"assets/assets/icons/check/sleep_unchecked.svg": "283ede5555d57c34d30b0855adcebfb7",
"assets/assets/icons/check/mental_unchecked.svg": "9d122d51d176029d127d65aed2a22977",
"assets/assets/icons/check/radio_checked_2.svg": "c66fd3061ad1e5aa85a17abc93838e40",
"assets/assets/icons/check/radio_checked.svg": "a9823a9715a7caee47dc2de92ef96b67",
"assets/assets/icons/check/nutrition_unchecked.svg": "f9f8d0d7374e342031caae4c018e2ce5",
"assets/assets/icons/check/body_checked.svg": "3f178e0cf009fcf64839e8947014f566",
"assets/assets/icons/check/mental_checked.svg": "1efb3cc67e7c22913430f69ba4d8ebac",
"assets/assets/icons/check/radio_unchecked.svg": "5eede3d5a864ca1f5dbe2b84f046cf33",
"assets/assets/icons/check/nutrition_checked.svg": "c06cc305a590100ee6029d9e7bb29bff",
"assets/assets/icons/check/sleep_checked.svg": "4edc12cd89ac7bb88809e751998d26e0",
"assets/assets/icons/check/body_unchecked.svg": "258870f97d90a5c9b0f4c2d60fd9d5d8",
"assets/assets/fonts/Pretendard-Regular.otf": "46b0c48afd8b0ddc2ed4fcbb2df81d8b",
"assets/assets/fonts/Pretendard-Medium.otf": "9ac30a1a68a5140a58b23aaf8025f1db",
"assets/assets/fonts/Pretendard-Bold.otf": "e93f79700405e1b4c1b3e70d8c378ca4",
"assets/assets/fonts/Pretendard-SemiBold.otf": "d9d912f2630bae445757f4769271c35c",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
