import Head from 'next/head'
import { useRouter } from 'next/router'

const SEO = ({ 
  title,
  description,
  keywords,
  image,
  article = false,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const router = useRouter()
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'نقل العفش'
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://slymanfatn569.github.io/moving3'
  const currentUrl = `${siteUrl}${router.asPath}`
  
  // Fix paths for production
  const basePath = process.env.NODE_ENV === 'production' ? '/moving3' : ''
  const defaultImage = `${siteUrl}/images/moving_company_professional.jpeg`
  const ogImage = image ? `${siteUrl}${image}` : defaultImage
  
  // Schema.org structured data with correct paths
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": siteName,
    "url": siteUrl,
    "logo": `${siteUrl}/icons/icon-192x192.png`,
    "image": defaultImage,
    "description": "شركة رائدة في خدمات نقل العفش والأثاث في المملكة العربية السعودية",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "طريق الملك فهد",
      "addressLocality": "جدة",
      "addressRegion": "منطقة مكة المكرمة",
      "postalCode": "23442",
      "addressCountry": "SA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966-12-345-6789",
      "contactType": "customer service",
      "areaServed": "SA",
      "availableLanguage": ["ar", "en"]
    },
    "sameAs": [
      "https://facebook.com/movingcompany",
      "https://twitter.com/movingcompany",
      "https://instagram.com/movingcompany"
    ],
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  }
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": currentUrl
      }
    ]
  }
  
  let articleSchema = null
  if (article) {
    articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "image": ogImage,
      "author": {
        "@type": "Person",
        "name": author || siteName
      },
      "publisher": {
        "@type": "Organization",
        "name": siteName,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/icons/icon-192x192.png`
        }
      },
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": currentUrl
      },
      "keywords": keywords,
      "articleSection": section,
      "articleBody": description
    }
  }
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ما هي خدمات نقل العفش التي تقدمونها؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نقدم خدمات نقل العفش الشاملة بما في ذلك التغليف، النقل، التركيب، والتخزين للمنازل والمكاتب."
        }
      },
      {
        "@type": "Question",
        "name": "هل تقدمون خدمات في جميع أنحاء المملكة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، نقدم خدماتنا في جميع المدن الرئيسية في المملكة العربية السعودية."
        }
      },
      {
        "@type": "Question",
        "name": "كيف يمكنني الحصول على عرض سعر؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "يمكنك الحصول على عرض سعر مجاني من خلال الاتصال بنا أو ملء نموذج الاتصال على موقعنا."
        }
      }
    ]
  }
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ar_SA" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@movingcompany" />
      
      {/* Article specific tags */}
      {article && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Mobile Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* Favicon and Icons with correct paths */}
      <link rel="icon" href={`${basePath}/favicon.ico`} />
      <link rel="apple-touch-icon" sizes="180x180" href={`${basePath}/icons/icon-192x192.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`${basePath}/icons/icon-192x192.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`${basePath}/icons/icon-192x192.png`} />
      <link rel="manifest" href={`${basePath}/manifest.json`} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {article && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {router.asPath === '/' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </Head>
  )
}

export default SEO 