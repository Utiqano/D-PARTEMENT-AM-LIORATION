const CACHE_NAME = 'wkw-tunisie-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'https://media.licdn.com/dms/image/v2/C510BAQFv4NwvhYRq8Q/company-logo_200_200/company-logo_200_200/0/1631351838133?e=2147483647&v=beta&t=pE5-TQRX2fd9oIfzQypoBLterLoj-X4wOnC3C8MMI4Q'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
