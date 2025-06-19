import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function PerformanceOptimizer() {
  const router = useRouter()

  useEffect(() => {
    // Preload critical fonts
    const preloadFont = (href) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'font'
      link.type = 'font/woff2'
      link.href = href
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    }

    // Lazy load images on scroll
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-lazy]')
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target
            img.src = img.dataset.src
            img.classList.add('loaded')
            imageObserver.unobserve(img)
          }
        })
      })

      images.forEach(img => imageObserver.observe(img))
    }

    // Prefetch links on hover
    const prefetchLinks = () => {
      const links = document.querySelectorAll('a[href^="/"]')
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          router.prefetch(link.getAttribute('href'))
        })
      })
    }

    // Progressive enhancement for forms
    const enhanceForms = () => {
      const forms = document.querySelectorAll('form')
      forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
          if (!navigator.onLine) {
            e.preventDefault()
            // Store form data for later submission
            const formData = new FormData(form)
            const data = Object.fromEntries(formData)
            
            // Save to localStorage for offline handling
            const pendingForms = JSON.parse(localStorage.getItem('pendingForms') || '[]')
            pendingForms.push({
              data,
              timestamp: Date.now(),
              url: form.action || window.location.href
            })
            localStorage.setItem('pendingForms', JSON.stringify(pendingForms))
            
            // Show offline message
            alert('أنت غير متصل بالإنترنت. سيتم إرسال نموذجك عند استعادة الاتصال.')
          }
        })
      })
    }

    // Optimize third-party scripts
    const optimizeScripts = () => {
      // Delay non-critical scripts
      setTimeout(() => {
        // Load analytics
        if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
          const script = document.createElement('script')
          script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`
          script.async = true
          document.head.appendChild(script)

          window.dataLayer = window.dataLayer || []
          function gtag() { dataLayer.push(arguments) }
          gtag('js', new Date())
          gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)
        }
      }, 3000)
    }

    // Reduce layout shifts
    const preventLayoutShifts = () => {
      // Set aspect ratios for images
      const images = document.querySelectorAll('img:not([width])')
      images.forEach(img => {
        if (img.naturalWidth && img.naturalHeight) {
          const aspectRatio = img.naturalHeight / img.naturalWidth
          img.style.aspectRatio = `1 / ${aspectRatio}`
        }
      })

      // Reserve space for ads/dynamic content
      const dynamicContainers = document.querySelectorAll('[data-dynamic-height]')
      dynamicContainers.forEach(container => {
        const minHeight = container.dataset.dynamicHeight
        container.style.minHeight = `${minHeight}px`
      })
    }

    // Memory management
    const optimizeMemory = () => {
      // Clean up event listeners on route change
      return () => {
        const links = document.querySelectorAll('a[href^="/"]')
        links.forEach(link => {
          link.removeEventListener('mouseenter', () => {})
        })
      }
    }

    // Service Worker registration
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        try {
          const registration = await navigator.serviceWorker.register('/service-worker.js')
          console.log('Service Worker registered:', registration)

          // Check for updates periodically
          setInterval(() => {
            registration.update()
          }, 60 * 60 * 1000) // Every hour
        } catch (error) {
          console.error('Service Worker registration failed:', error)
        }
      }
    }

    // Network information API
    const adaptToNetwork = () => {
      if ('connection' in navigator) {
        const connection = navigator.connection
        
        // Adapt image quality based on connection
        if (connection.effectiveType === '2g' || connection.saveData) {
          document.body.classList.add('low-bandwidth')
        }

        connection.addEventListener('change', () => {
          if (connection.effectiveType === '2g' || connection.saveData) {
            document.body.classList.add('low-bandwidth')
          } else {
            document.body.classList.remove('low-bandwidth')
          }
        })
      }
    }

    // Execute optimizations
    lazyLoadImages()
    prefetchLinks()
    enhanceForms()
    optimizeScripts()
    preventLayoutShifts()
    registerServiceWorker()
    adaptToNetwork()

    // Cleanup
    return optimizeMemory()
  }, [router])

  // Report Web Vitals
  useEffect(() => {
    if (typeof window !== 'undefined' && 'web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log)
        getFID(console.log)
        getFCP(console.log)
        getLCP(console.log)
        getTTFB(console.log)
      })
    }
  }, [])

  return null // This component doesn't render anything
} 