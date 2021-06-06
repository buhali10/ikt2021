self.addEventListener('install', event => {
    console.log('service worker --> installing ...', event);
    event.waitUntil(
        caches.open('static')
            .then( cache => {
                console.log('Service-Worker-Cache erzeugt und offen');
                cache.add('/src/js/app.js');    // relativ vom public-Ordner
            })
    );
})

self.addEventListener('activate', event => {
    console.log('service worker --> activating ...', event);
    return self.clients.claim();
})

addEventListener('fetch', event => {
    // Prevent the default, and handle the request ourselves.
    event.respondWith(async function() {
        // Try to get the response from a cache.
        const cachedResponse = await caches.match(event.request);
        // Return it if we found one.
        if (cachedResponse) return cachedResponse;
        // If we didn't find a match in the cache, use the network.
        return fetch(event.request);
    }());
});
