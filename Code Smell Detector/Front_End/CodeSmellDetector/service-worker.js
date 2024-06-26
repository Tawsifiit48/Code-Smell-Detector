self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/',
                'http://127.0.0.1:5500/index.html',
                'http://127.0.0.1:5500/detect.html',
                'http://127.0.0.1:5500/about.html',
                '/styles.css',
                'images/logo1.png',
                'images/gradientBlueLines.jpg',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
