// RDV — Rodavia 360 — service worker sem cache: o app sempre busca a versao mais nova.
self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (nomes) {
      return Promise.all(nomes.map(function (nome) { return caches.delete(nome); }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

// Precisa existir para o celular aceitar como aplicativo. Nao guarda nada em cache.
self.addEventListener("fetch", function () {});
