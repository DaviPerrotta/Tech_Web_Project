let cacheName = 'pwa01';

let filesToCache = [
    'index.html',
    'Carrello.html',
    'Loginpp.html',
    'loginutente.html',
    'PrenotazioneConfermata.html',
    'Prenotazioni.html',
    'Principal_Page.html',
    'SignUpp.html',
    'signuputente.html',
    'css/css.css',
    'css/index.css',
    'css/Login_style.css',
    'css/p_p_resp.css',
    'css/Pp.css',
    'css/Stile.css',
    'css/stiledavide.css',
    'js/index.js',
    'js/js.js',
    'js/jsBookCart.js',
    'js/jsCartOnly.js',
    'js/lib.js',
    'js/login_proprietario.js',
    'js/pp.js',
    'images/acqua.jpeg',
    'images/arrowdown.png',
    'images/bistecca.jpg',
    'images/carrello.png',
    'images/carticon_desk.png',
    'images/coca.jpeg',
    'images/coffee.jpg',
    'images/confirmedButton.png',
    'images/destra40.png',
    'images/destra50.png',
    'images/fanta.jpeg',
    'images/iconiOrder.png',
    'images/icons8-cestino-50(@1x).png',
    'images/icons8-più-50(@1x).png',
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/iorderlogo.png',
    'images/imgmenu1.jpg',
    'images/imgmenu2.jpg',
    'images/imgmenu3.jpg',
    'images/imgmenu4.jpg',
    'images/logo.jpg',
    'images/menuicon_desk.png',
    'images/pasta.jpeg',
    'images/pistacchio.jpeg',
    'images/pizzaicon.png',
    'images/pizzona.jpg',
    'images/puocPanino.jpg',
    'images/Ristorante.jpg',
    'images/tiramisu.jpg'

];


installEvent.waitUntil(caches.open(staticDevCoffee).then(filesUpdate));

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});
/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});

