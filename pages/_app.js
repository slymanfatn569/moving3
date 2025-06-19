import '../styles/globals.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Script from 'next/script';
import { useRouter } from 'next/router';
import PerformanceOptimizer from '../components/PerformanceOptimizer'

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', async function() {
        try {
          // Use correct path with basePath
          const basePath = process.env.NODE_ENV === 'production' ? '/moving3' : '';
          const swUrl = `${basePath}/service-worker.js`;
          const scope = `${basePath}/`;

          const registration = await navigator.serviceWorker.register(swUrl, {
            scope: scope
          });
          console.log('Service Worker registered successfully with scope:', registration.scope);
        } catch (error) {
          console.error('Service Worker registration failed:', error);
        }
      });
    }
  }, []);

  useEffect(() => {
    // Track page views
    const handleRouteChange = (url) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
          page_path: url,
        })
      }
    }
    
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/moving3/favicon.ico" sizes="any" />
        <link rel="icon" href="/moving3/icons/icon-192x192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/moving3/icons/icon-192x192.png" />
        <link rel="manifest" href="/moving3/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <div className="font-tajawal" dir="rtl">
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        {/* Performance Optimizer */}
        <PerformanceOptimizer />
        <Component {...pageProps} />
      </div>
    </>
  )
}