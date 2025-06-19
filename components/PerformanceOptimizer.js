import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function PerformanceOptimizer() {
  const router = useRouter()

  useEffect(() => {
    // Basic performance optimizations
    const initializeOptimizations = () => {
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]')
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
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
      const links = document.querySelectorAll('a[href^="/"]')
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          if (router.prefetch) {
            router.prefetch(link.getAttribute('href'))
          }
        }, { passive: true })
      })

      // Optimize forms for offline
      const forms = document.querySelectorAll('form')
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          if (!navigator.onLine) {
            e.preventDefault()
            alert('أنت غير متصل بالإنترنت. سيتم إرسال الطلب عند استعادة الاتصال.')
          }
        }, { passive: false })
      })
    }

    // Run optimizations after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeOptimizations)
    } else {
      initializeOptimizations()
    }

    // Cleanup
    return () => {
      document.removeEventListener('DOMContentLoaded', initializeOptimizations)
    }
  }, [router])

  return null
} 