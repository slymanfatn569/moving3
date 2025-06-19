// Service Worker Version
const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `moving-app-${CACHE_VERSION}`;

// Files to cache
const urlsToCache = [
  '/',
  '/contact',
  '/services',
  '/areas',
  '/blog',
  '/testimonials',
  '/privacy',
  '/terms',
  '/styles/globals.css',
  '/manifest.json',
  '/favicon.ico',
  '/images/placeholder.jpg',
  '/images/moving_company_professional.jpeg'
];

// Install Event - Cache core files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache.map(url => {
          // Add base path for production
          const basePath = self.location.pathname.includes('/moving3') ? '/moving3' : '';
          return basePath + url;
        }));
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event - Clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName.startsWith('moving-app-') && cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Network first, cache fallback strategy
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    // Try network first
    fetch(event.request)
      .then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();

        // Cache the fetched response
        caches.open(CACHE_NAME)
          .then((cache) => {
            cache.put(event.request, responseToCache);
          });

        return response;
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(event.request)
          .then((response) => {
            if (response) {
              return response;
            }

            // Return offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/');
            }

            // Return placeholder for images
            if (event.request.destination === 'image') {
              return caches.match('/images/placeholder.jpg');
            }
          });
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(sendPendingForms());
  }
});

// Send pending forms when back online
async function sendPendingForms() {
  const cache = await caches.open('form-submissions');
  const requests = await cache.keys();
  
  for (const request of requests) {
    const response = await cache.match(request);
    const formData = await response.json();
    
    try {
      // Attempt to send the form
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // Remove from cache if successful
      await cache.delete(request);
    } catch (error) {
      console.error('Failed to sync form:', error);
    }
  }
}

// Push notifications
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'لديك إشعار جديد',
    icon: '/icon-192x192.png',
    badge: '/icon-192x192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'عرض التفاصيل',
      },
      {
        action: 'close',
        title: 'إغلاق',
      },
    ]
  };

  event.waitUntil(
    self.registration.showNotification('نقل العفش', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Periodic background sync for updates
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'update-content') {
    event.waitUntil(updateContent());
  }
});

async function updateContent() {
  const cache = await caches.open(CACHE_NAME);
  const requests = await cache.keys();
  
  for (const request of requests) {
    try {
      const response = await fetch(request);
      if (response && response.status === 200) {
        await cache.put(request, response);
      }
    } catch (error) {
      console.error('Failed to update:', request.url);
    }
  }
}

// Create a fallback image using canvas
function createFallbackIcon(size) {
  // Verificar si OffscreenCanvas está disponible (no en todos los navegadores)
  if (typeof OffscreenCanvas !== 'undefined') {
    const canvas = new OffscreenCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = '#051937';
    ctx.fillRect(0, 0, size, size);
    
    // Create a gradient for the center
    const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
    gradient.addColorStop(0, '#00C6FB');
    gradient.addColorStop(1, '#005BEA');
    
    // Draw a circle
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2 - 10, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // Add text if size is big enough
    if (size >= 72) {
      ctx.fillStyle = 'white';
      const fontSize = Math.max(size/4, 12);
      ctx.font = `bold ${fontSize}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      if (size >= 144) {
        ctx.fillText('فخر', size/2, size/2 - fontSize/2);
        ctx.fillText('الخليج', size/2, size/2 + fontSize/2);
      } else {
        ctx.fillText('FK', size/2, size/2);
      }
    }
    
    return canvas.convertToBlob({ type: 'image/png' })
      .then(blob => new Response(blob, { 
        status: 200, 
        headers: new Headers({ 'Content-Type': 'image/png' }) 
      }));
  } else {
    // Fallback para navegadores sin OffscreenCanvas
    // Utilizar un icono predeterminado existente que sabemos que funciona
    return fetch('/icons/icon-192x192.png')
      .then(response => {
        if (response && response.status === 200) {
          return response;
        }
        
        // Si ni siquiera podemos obtener un icono predeterminado, devolver un error
        return Response.error();
      })
      .catch(() => {
        return Response.error();
      });
  }
}

// Extract size from icon URL
function getIconSize(url) {
  const matches = url.match(/icon[-_](\d+)x(\d+)/);
  if (matches && matches.length >= 3) {
    return parseInt(matches[1]);
  }
  return 144; // Default fallback size
}

// Handle fetch events
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Debugging iconos
  if (url.pathname.includes('/icons/')) {
    console.log('Icon request intercepted:', url.pathname);
  }
  
  // Si es una solicitud de icono (incluido favicon)
  if ((url.pathname.includes('/icons/') && 
       (url.pathname.includes('.png') || url.pathname.includes('.ico'))) ||
      url.pathname === '/favicon.ico') {
    
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            console.log('Icon served from cache:', url.pathname);
            return cachedResponse;
          }
          
          console.log('Icon not found in cache, fetching:', url.pathname);
          
          // Intentar buscar el ícono original
          return fetch(event.request.clone())
            .then(response => {
              // Si se obtuvo con éxito, almacenarlo en caché y devolverlo
              if (response && response.status === 200) {
                console.log('Icon fetched successfully, caching:', url.pathname);
                const responseToCache = response.clone();
                caches.open(CACHE_NAME)
                  .then(cache => {
                    cache.put(event.request, responseToCache);
                  });
                return response;
              }
              
              console.warn('Icon fetch failed, trying alternatives:', url.pathname);
              
              // Si no se pudo obtener el icono, probar nombres alternativos
              // Intentar con guión bajo en lugar de guión y viceversa
              let alternativeUrl;
              if (url.pathname.includes('-')) {
                alternativeUrl = url.pathname.replace(/-/g, '_');
              } else if (url.pathname.includes('_')) {
                alternativeUrl = url.pathname.replace(/_/g, '-');
              }
              
              if (alternativeUrl && alternativeUrl !== url.pathname) {
                console.log('Trying alternative icon name:', alternativeUrl);
                
                const fullAltUrl = `${url.origin}${alternativeUrl}`;
                return fetch(new Request(fullAltUrl))
                  .then(altResponse => {
                    if (altResponse && altResponse.status === 200) {
                      console.log('Alternative icon found, caching:', alternativeUrl);
                      const responseToCache = altResponse.clone();
                      caches.open(CACHE_NAME)
                        .then(cache => {
                          cache.put(event.request, responseToCache);
                        });
                      return altResponse;
                    }
                    
                    console.warn('Alternative icon also failed, generating fallback:', url.pathname);
                    // Si todo falla, generar un icono dinámico
                    const size = getIconSize(url.pathname);
                    return createFallbackIcon(size);
                  })
                  .catch(err => {
                    console.error('Error fetching alternative icon:', err);
                    // Si todo falla, generar un icono dinámico
                    const size = getIconSize(url.pathname);
                    return createFallbackIcon(size);
                  });
              }
              
              console.warn('No alternatives to try, generating fallback icon:', url.pathname);
              // Si no hay alternativas para probar, generar un icono dinámico
              const size = getIconSize(url.pathname);
              return createFallbackIcon(size);
            })
            .catch(err => {
              console.error('Network error fetching icon:', err);
              // Error de red, generar un icono dinámico
              const size = getIconSize(url.pathname);
              return createFallbackIcon(size);
            });
        })
    );
    return;
  }
  
  // Manejador de captura predeterminado para solicitudes que no son de iconos
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // Bypass Google Maps requests - no cache, just fetch directly
        if (event.request.url.includes('google.com/maps') || 
            event.request.url.includes('maps.googleapis.com') || 
            event.request.url.includes('maps.gstatic.com')) {
          return fetch(event.request);
        }
        
        return fetch(event.request)
          .then(response => {
            // Omitir el almacenamiento en caché para archivos grandes o respuestas no exitosas
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clonar la respuesta antes de usarla
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
              
            return response;
          });
      })
  );
}); 