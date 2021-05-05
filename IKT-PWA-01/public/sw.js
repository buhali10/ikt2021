self.addEventListener('install', event => {
    console.log('service worker --> installing ...', event);
})

self.addEventListener('activate', event => {
    console.log('service worker --> activating ...', event);
    return self.clients.claim();
})

self.addEventListener('fetch', event => {
    console.log('service worker --> fetching ...', event);
})
