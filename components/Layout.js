import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import React from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'

// Determine basePath for images and URLs
const getBasePath = () => {
  // For GitHub Pages we need to prepend the basePath
  if (typeof window !== 'undefined') {
    // Check if we're on GitHub Pages
    if (window.location.hostname.includes('github.io')) {
      return '/moving3';
    }
  }
  return '';
};

export default function Layout({ 
  children, 
  title = 'فخر الخليج - خدمات نقل العفش والأثاث المتخصصة', 
  description = 'مزود رائد لخدمات نقل العفش والأثاث في جميع أنحاء المملكة العربية السعودية، نقدم خدمات احترافية للأفراد والشركات والمؤسسات.',
  keywords = 'نقل عفش، نقل أثاث، المملكة العربية السعودية، خدمات التخزين، فك وتركيب الأثاث',
  ogImage = '/images/professional_movers_company.jpeg',
  noindex = false,
  pageType = 'website',
  publishedTime = null,
  modifiedTime = null,
  author = 'فخر الخليج',
  section = '',
  tags = []
}) {
  const router = useRouter();
  const basePath = getBasePath();
  const siteUrl = typeof window !== 'undefined' ? 
    `${window.location.protocol}//${window.location.host}` : 
    'https://slymanfatn569.github.io';
  
  const canonicalUrl = `${siteUrl}${basePath}${router.asPath === '/' ? '' : router.asPath.split('?')[0]}`;
  
  // Process ogImage to include basePath
  const processedOgImage = ogImage.startsWith('/') ? 
    `${basePath}${ogImage}` : 
    `${basePath}/${ogImage}`;
  
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'فخر الخليج',
    url: siteUrl + basePath,
    logo: `${siteUrl}${basePath}/icon-192x192.png`,
    sameAs: [
      'https://www.facebook.com/fakhrkhaleej',
      'https://twitter.com/fakhrkhaleej',
      'https://www.instagram.com/fakhrkhaleej'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966-XXXXXXXXX',
      contactType: 'customer service',
      areaServed: 'SA',
      availableLanguage: ['Arabic']
    }
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': pageType === 'article' ? 'Article' : 'WebPage',
    headline: title,
    description: description,
    image: `${siteUrl}${processedOgImage}`,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'فخر الخليج',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}${basePath}/icon-192x192.png`
      }
    },
    datePublished: publishedTime || new Date().toISOString(),
    dateModified: modifiedTime || new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    },
    inLanguage: 'ar-SA'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'الرئيسية',
        item: siteUrl + basePath
      }
    ]
  };

  if (router.asPath !== '/') {
    const pathSegments = router.asPath.split('/').filter(Boolean);
    let currentPath = '';
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      breadcrumbSchema.itemListElement.push({
        '@type': 'ListItem',
        position: index + 2,
        name: segment === 'services' ? 'خدماتنا' : 
              segment === 'areas' ? 'المناطق' :
              segment === 'blog' ? 'المدونة' :
              segment === 'contact' ? 'اتصل بنا' : 
              segment,
        item: `${siteUrl}${basePath}${currentPath}`
      });
    });
  }
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* الروبوتات */}
        {noindex ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        )}
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={pageType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}${processedOgImage}`} />
        <meta property="og:site_name" content="فخر الخليج" />
        <meta property="og:locale" content="ar_SA" />
        {publishedTime && <meta property="article:published_time" content={publishedTime} />}
        {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        {section && <meta property="article:section" content={section} />}
        {tags.length > 0 && tags.map((tag, index) => (
          <meta property="article:tag" content={tag} key={index} />
        ))}
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${siteUrl}${processedOgImage}`} />
        
        {/* مجموعة بيانات أساسية */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="ar" />
        <meta name="author" content="فخر الخليج" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="application-name" content="فخر الخليج" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Apple Touch */}
        <link rel="apple-touch-icon" sizes="180x180" href={`${basePath}/icon-192x192.png`} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="فخر الخليج" />
        
        {/* تحميل مسبق للخطوط */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* أمان موقع الويب */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://i.postimg.cc https://maps.googleapis.com https://maps.gstatic.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com;" />
      </Head>

      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Script
        id="page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="flex flex-col min-h-screen" dir="rtl">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 py-8">{children}</main>
        <Footer />
      </div>
    </>
  )
} 