// Service Worker para CONTE CONSTRUCCIÓN
const CACHE_NAME = "conte-construccion-v1"
const urlsToCache = [
  "/",
  "/fonts/Akony-Bold.woff2",
  "/fonts/Adrianna-Extended.woff2",
  "/images/logo.png",
  "/images/hero.jpg",
  "/favicon.png",
  "/icon-192.png",
  "/icon-512.png",
  "/apple-touch-icon.png",
  "/manifest.json",
]

// Instalación del Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache abierto")
      return cache.addAll(urlsToCache)
    }),
  )
})

// Activación del Service Worker
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// Estrategia de caché: Stale-While-Revalidate para mejor rendimiento
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            // Actualizar la caché solo si la respuesta es válida
            if (networkResponse && networkResponse.status === 200 && networkResponse.type === "basic") {
              cache.put(event.request, networkResponse.clone())
            }
            return networkResponse
          })
          .catch(() => {
            // Si la red falla y no hay caché, intentar con páginas offline
            if (event.request.headers.get("Accept").includes("text/html")) {
              return caches.match("/offline.html")
            }
          })

        // Devolver la respuesta en caché mientras se actualiza en segundo plano
        return cachedResponse || fetchPromise
      })
    }),
  )
})
