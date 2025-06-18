import '../styles/globals.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Script from 'next/script'

// Helper function to determine basePath
const getBasePath = () => {
  if (typeof window !== 'undefined') {
    // Check if we're on GitHub Pages
    if (window.location.hostname.includes('github.io')) {
      return '/moving3';
    }
  }
  return '';
};

export default function App({ Component, pageProps }) {
  // Use state to track if we're on the client side
  const [isClient, setIsClient] = useState(false)

  // This useEffect will only run once on the client
  useEffect(() => {
    setIsClient(true)
    
    // Only run client-side code inside this block
    if (typeof window !== 'undefined' && !window.ENV) {
      window.ENV = {
        SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://fakhrkhaleej.netlify.app',
        DOMAIN: process.env.NEXT_PUBLIC_DOMAIN || 'fakhrkhaleej.netlify.app',
        SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'فخر الخليج',
        DEFAULT_LOCALE: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'ar',
        NODE_ENV: process.env.NODE_ENV || 'development',
        IS_NETLIFY: process.env.NETLIFY === 'true'
      };
    }

    // Register service worker
    if ('serviceWorker' in navigator && typeof window !== 'undefined') {
      window.addEventListener('load', async function() {
        try {
          // Clear any existing service workers
          const registrations = await navigator.serviceWorker.getRegistrations();
          for(let registration of registrations) {
            await registration.unregister();
          }
          
          // Register new service worker with more error handling
          const basePath = getBasePath();
          const registration = await navigator.serviceWorker.register(`${basePath}/service-worker.js`, {
            scope: basePath || '/'
          });
          console.log('Service Worker registered successfully with scope:', registration.scope);
          
          // Add error handling for all images including icons
          window.addEventListener('error', function(event) {
            if (event.target && event.target.tagName === 'IMG') {
              console.warn('Image loading failed, providing fallback:', event.target.src);
              // Prevent default error
              event.preventDefault();
              
              // Try to provide a fallback based on the image type
              const currentSrc = event.target.src;
              const basePath = getBasePath();
              
              // Determine an appropriate fallback based on image path
              let fallbackSrc = `${basePath}/images/placeholder.jpg`;
              
              // If it's an avatar/author image
              if (currentSrc.includes('/author/') || 
                  currentSrc.includes('avatar') ||
                  event.target.width <= 100 && event.target.height <= 100) {
                fallbackSrc = `${basePath}/images/placeholder-avatar.jpg`;
              }
              
              // Apply the fallback
              event.target.src = fallbackSrc;
              
              // Prevent infinite error loops
              event.target.onerror = null;
            }
          }, true);
          
        } catch (error) {
          console.error('Service Worker registration failed:', error);
        }
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/icon-192x192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </Head>
      <div className="font-tajawal" dir="rtl">
        {/* تحميل ملف الإعدادات البيئية */}
        <Script 
          src="/config/env.js" 
          strategy="beforeInteractive" 
        />
        <Component {...pageProps} />
      </div>
    </>
  )
} 