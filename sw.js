/* Service worker — Presenze Mercato Caramanico
   U.O. San Lorenzo · Polizia Municipale di Napoli

   Tiene la pagina installata sul telefono: dopo la prima apertura
   funziona anche senza rete.

   IMPORTANTE: quando aggiorni index.html, cambia il numero qui sotto
   (v1 -> v2). È l'unico modo perché i telefoni già installati
   scarichino la versione nuova. */

const CACHE = "caramanico-v2";

const RISORSE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(RISORSE))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((nomi) => Promise.all(nomi.filter((n) => n !== CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const r = e.request;
  if (r.method !== "GET") return;

  e.respondWith(
    caches.match(r, { ignoreSearch: true }).then((trovata) => {
      if (trovata) return trovata;
      return fetch(r)
        .then((res) => {
          if (res && (res.ok || res.type === "opaque")) {
            const copia = res.clone();
            caches.open(CACHE).then((c) => c.put(r, copia)).catch(() => {});
          }
          return res;
        })
        .catch(() => {
          if (r.mode === "navigate") return caches.match("./index.html");
          return new Response("", { status: 504, statusText: "offline" });
        });
    })
  );
});
