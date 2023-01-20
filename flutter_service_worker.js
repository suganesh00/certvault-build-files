'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4b731ddcb99f77f47860d7c308f925b6",
"assets/FontManifest.json": "3d5a3fa9244b692a893713897ceddeb4",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/fonts/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/fonts/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Poppins-Semibold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/fonts/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/images/admin.png": "f343a26ae4df9a305d9d1ec6e614adc9",
"assets/images/alapappa.png": "5946736216876a99f8c6ed2600394369",
"assets/images/anna.png": "aa247f7d61cbf6c063e74aa47fd9f653",
"assets/images/bgshade.png": "452e707f12ec06abaa3455474caec5f2",
"assets/images/certvault_logo.png": "50e4b0f05bff4b0e7918c7d83a588cdf",
"assets/images/cloud.png": "ed54d3e816f4a4f84566cbc814f8f746",
"assets/images/cornor_disign.png": "ca79b3293d8f39e317e90a7158b80de4",
"assets/images/docment.png": "63d7453afe4121ac61c579b47abf4339",
"assets/images/error-failure-10382%2520(1).png": "ee4608bdec176a4f2f05f1d55d71f2e1",
"assets/images/fetchdoc.png": "1968dbdede503a6da5dd331959ce7968",
"assets/images/file2_page-0001.jpg": "359adca18f76991472c6e327536c4cfe",
"assets/images/gct.png": "ea85ed86a389096eeb27c26044736092",
"assets/images/general.png": "ea29cc072799fd30288dd45746c32f10",
"assets/images/google-play-badge.png": "1e91d02cf5a902f38f2923c006d79281",
"assets/images/Group32276.png": "08bee43fe68fe36f0d9a42f085080669",
"assets/images/human.png": "ede8262bf73fc8aca88a46f06094cfd5",
"assets/images/icons/account.png": "1a800f3ef9851d39eb1823466085328a",
"assets/images/icons/delete.png": "a93ede7329e0706c7481db6c6f94d091",
"assets/images/icons/edit.png": "3ee3fc9b11b356771fa4cbaeefd60dfe",
"assets/images/icons/Group%252032277@3x.png": "f5f3ded5c26f132561c472adce8e2f2c",
"assets/images/icons/Group%252032321@3x.png": "fc3e54d9a9858a3614b34c8d8108909d",
"assets/images/icons/Group%252032322@3x.png": "562a1d53e81d4488768e43bf5aff8f3f",
"assets/images/icons/Group%252032327@3x.png": "bac3730d64f4f4786671841bd7fed7f2",
"assets/images/icons/Group%252032329@3x.png": "f6a5c13092ee01b82a5abef8ed4cbb51",
"assets/images/icons/Group%252032330@3x.png": "07f95c0746d3c4b3486995d237852c1b",
"assets/images/icons/headphones.png": "5047f6eea89cb56504fa5a1b0f663d66",
"assets/images/icons/Home@3x.png": "ed83464280d527444cf6a43e64f9660f",
"assets/images/icons/icons8-pdf-96.png": "545ecd2b22699db546d8c31aa851a98e",
"assets/images/icons/img.png": "b35aff8684b257c46ba68a30a216e248",
"assets/images/icons/information.png": "eb17c2089ce02c6c9a711db92751d9e1",
"assets/images/icons/Location@3x.png": "d8f8f3fda80b49ff0b4091286c5bdf22",
"assets/images/icons/Mask%2520group@3x.png": "8cefe9bef0e1827de464c1bf763bc98f",
"assets/images/icons/others.png": "4f1c8ce88d21198351ce548509fa3406",
"assets/images/icons/Stroke%25201@3x.png": "a5fdbc4cc1cd85efc686d119f1629f7f",
"assets/images/icons/sucess_icon.png": "30e664c63572d5c0857cb0e3034b7ba0",
"assets/images/icons/Vector%25208@3x.png": "24116beeb6d4585019ec1a6aa60b3225",
"assets/images/icons/Vector@3x.png": "df37f5f9a5df7b160345cf7431c34f60",
"assets/images/icons/Vector_10@3x.png": "4129a383e90e8ff4b6b65ebc6b0c211f",
"assets/images/icons/Vector_11@3x.png": "d30cd082af2349345625aac5b11c0663",
"assets/images/icons/Vector_12@3x.png": "0d04b0c1ff06a5fc824becf3abb08373",
"assets/images/icons/Vector_13@3x.png": "5815faba0d5cfc158666c082742ceac8",
"assets/images/icons/Vector_2@3x.png": "9b163b313c59947a07c78415247d8398",
"assets/images/icons/Vector_3@3x.png": "80ad9f2e07bb58baa17c9c7ef101907f",
"assets/images/icons/Vector_4@3x.png": "90d79aa7dc43d5693f34eb6ef58b4a77",
"assets/images/icons/Vector_5@3x.png": "f27c394656df174e11e45183fef62656",
"assets/images/icons/Vector_6@3x.png": "2d37e579739abea3d4b525650110f8f5",
"assets/images/icons/Vector_7@3x.png": "4e119e7b62ee53099ac18d0bf78e1391",
"assets/images/icons/Vector_8@3x.png": "f5d516e028d2b4c76dfc93f367884554",
"assets/images/icons/Vector_9@3x.png": "134f4b6df5e463030018b9cfc72d1942",
"assets/images/icons8-csv-96.png": "901b0adf6c16c98e6f05f79b0cfa650f",
"assets/images/icons8-download-from-the-cloud-96.png": "7cb8f7798db4a014f704b51f5e34ba15",
"assets/images/icons8-human-head-96.png": "a9282717cb64833686f787d703c9fd93",
"assets/images/icons8-notification-96.png": "f5f75a3f81dc6dc20331d5e8b86ef6f2",
"assets/images/icons8-product-documents-96.png": "d4d663695ee6c5fe97908d3e938e7509",
"assets/images/icons8-share-96.png": "2557d9f7ea8f17ad651c4199a3657c2a",
"assets/images/icons8-show-property-96.png": "7a13fb9ee4caf178edf1fdf0edc7914d",
"assets/images/icons8-static-views-96.png": "d8b2de172f4a955c2b222e97cee59c23",
"assets/images/icons8-time-machine-96.png": "0d1403c51f5cc617ab646ecd52eb5671",
"assets/images/icons8-upload-to-cloud-96.png": "14646076e025065bf3d013086d168ea9",
"assets/images/icons8-zip-96.png": "efc5879fb082f9b61ddcd5da7ed86234",
"assets/images/img.png": "59bee924b65ae203b3f5a458dbdf9f98",
"assets/images/logconfrimicon.png": "8d675886e49ed534f70aeb70f972606d",
"assets/images/maillogin.png": "b2d50f885a99e3a9c3a9c3822b84c9c9",
"assets/images/mask_group.png": "d0d09c79519cc17a765bf95089123c37",
"assets/images/pepels.png": "51f80a58e5335d884370a434a818038f",
"assets/images/Regsiter.png": "67c15042e184e110f87074e3fbc79441",
"assets/images/srm.png": "c2935bc4fade66e34d753192ac806310",
"assets/images/super.png": "b9faec69ed406bb780877fe06909ef09",
"assets/images/uploadSucess.png": "5e6462470d0f1d6419a29ffe43caa1bb",
"assets/images/verify.png": "2fc43467af54ebd88094a27c924d85a5",
"assets/images/writing_women.png": "bfa853188da480686c59042f5775a100",
"assets/NOTICES": "034dddf8fc5b4001b7c11c588efbd803",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "c56d4c710ca84405f9d8d10515486f2e",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "edf34e1866889662b34f947c7fd0470a",
"icons/Icon-512.png.png": "6bb0954d72fb4f0f1a328b9bee5c97d0",
"icons/Icon-maskable-192.png": "edf34e1866889662b34f947c7fd0470a",
"icons/Icon-maskable-512.png": "6bb0954d72fb4f0f1a328b9bee5c97d0",
"index.html": "4c30bf5019fb327ee9c7a9963e6d7229",
"/": "4c30bf5019fb327ee9c7a9963e6d7229",
"main.dart.js": "c636bef06c853436dca1cb9bb97d8446",
"manifest.json": "26986f153d651fcc86bbc57b6dd5e452",
"version.json": "dd3af1ed8dda3ed6f74f7729c3a79594"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
