// This is a simple service worker for caching static assets
const CACHE_NAME = 'fakhr-khaleej-v2';
const urlsToCache = [
  '/',
  '/index.js',
  '/manifest.json',
  '/images/placeholder.jpg',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/favicon.ico',
  '/icons/icon-16x16.png',
  '/icons/icon-32x32.png',
  '/icons/icon-144x144.png',
];

// Skip waiting to take control immediately
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache:', CACHE_NAME);
        
        // Intentar cachear cada recurso individualmente para que los errores no detengan todo
        const cachePromises = urlsToCache.map(url => {
          return cache.add(url).catch(error => {
            console.warn(`Failed to cache: ${url}`, error);
            return Promise.resolve(); // Continuar a pesar del error
          });
        });
        
        return Promise.all(cachePromises);
      })
  );
  
  // Activate immediately
  self.skipWaiting();
});

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

// Activate and claim clients
self.addEventListener('activate', (event) => {
  console.log('Service worker activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service worker now active and controlling clients');
      // Claim clients so the service worker is in control immediately
      return self.clients.claim();
    })
  );
});

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