const CACHE_NAME = 'moving-company-v1.0.0'
const BASE_PATH = '/moving3'

const STATIC_ASSETS = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/offline`,
  `${BASE_PATH}/manifest.json`,
  `${BASE_PATH}/icons/icon-192x192.png`,
  `${BASE_PATH}/icons/icon-512x512.png`,
  `${BASE_PATH}/images/moving_company_professional.jpeg`,
  `${BASE_PATH}/images/professional_movers_company.jpeg`,
  `${BASE_PATH}/images/commercial_moving_service.jpeg`,
  `${BASE_PATH}/images/experienced_movers_team.jpeg`,
  `${BASE_PATH}/images/furniture_shipping_service.jpeg`
]

// Install event
self.addEventListener('install', event => {
  console.log('Service Worker installing...')
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching static assets')
        return cache.addAll(STATIC_ASSETS.map(url => 
          new Request(url, { credentials: 'same-origin' })
        ))
      })
      .catch(error => {
        console.error('Failed to cache static assets:', error)
      })
  )
  self.skipWaiting()
})

// Activate event
self.addEventListener('activate', event => {
  console.log('Service Worker activating...')
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  self.clients.claim()
})

// Fetch event
self.addEventListener('fetch', event => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return
  }

  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse
        }

        return fetch(request)
          .then(response => {
            // Don't cache if not successful
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }

            // Clone the response
            const responseToCache = response.clone()

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(request, responseToCache)
              })

            return response
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match(`${BASE_PATH}/offline`)
            }
            
            // Return placeholder for images
            if (request.destination === 'image') {
              return caches.match(`${BASE_PATH}/images/placeholder.jpg`)
            }
          })
      })
  )
})

// Background sync for form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync-forms') {
    event.waitUntil(doBackgroundSync())
  }
})

async function doBackgroundSync() {
  try {
    // Handle pending form submissions
    const pendingForms = await getFromStorage('pendingForms')
    if (pendingForms && pendingForms.length > 0) {
      for (const form of pendingForms) {
        try {
          await fetch(form.url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(form.data)
          })
        } catch (error) {
          console.error('Failed to sync form:', error)
        }
      }
      // Clear synced forms
      await setInStorage('pendingForms', [])
    }
  } catch (error) {
    console.error('Background sync failed:', error)
  }
}

// Helper functions for storage
function getFromStorage(key) {
  return new Promise((resolve) => {
    try {
      const data = localStorage.getItem(key)
      resolve(data ? JSON.parse(data) : null)
    } catch {
      resolve(null)
    }
  })
}

function setInStorage(key, value) {
  return new Promise((resolve) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      resolve(true)
    } catch {
      resolve(false)
    }
  })
}

// Message handling
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
}) 