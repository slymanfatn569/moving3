import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import StaticImage from '../../components/StaticImage'
import RelatedPosts from '../../components/RelatedPosts'
import { getAllPosts, getPostBySlug } from '../../lib/blog'

// Determine basePath for images
const getBasePath = () => {
  if (typeof window !== 'undefined') {
    if (window.location.hostname.includes('github.io')) {
      return '/moving3';
    }
  }
  return '';
};

export default function PostPage({ post, morePosts, allPosts }) {
  const router = useRouter()
  const basePath = getBasePath();
  const [readingProgress, setReadingProgress] = useState(0);

  // Helper function to get the correct image path
  const getImagePath = (imagePath) => {
    if (!imagePath) return `${basePath}/images/placeholder.jpg`;
    return imagePath.startsWith('/') ? `${basePath}${imagePath}` : `${basePath}/${imagePath}`;
  };

  // Reading progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / documentHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (router.isFallback) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Layout>
    )
  }

  if (!post) {
    return (
      <Layout
        title="المقال غير موجود | شركة نقل العفش"
        description="المقال المطلوب غير موجود"
      >
        <div className="max-w-4xl mx-auto text-center py-16">
          <h1 className="text-3xl font-bold mb-4">المقال غير موجود</h1>
          <p className="text-gray-600 mb-8">
            عذرًا، المقال الذي تبحث عنه غير موجود أو تمت إزالته.
          </p>
          <Link href="/blog" passHref>
            <a className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-lg transition-colors">
              العودة إلى المدونة
            </a>
          </Link>
        </div>
      </Layout>
    )
  }

  const coverImage = getImagePath(post.coverImage);
  const authorAvatar = getImagePath(post.author.avatar);
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://slymanfatn569.github.io';
  const fullImageUrl = `${siteUrl}${coverImage}`;
  const currentDate = new Date().toISOString();

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ما هي أفضل طريقة لنقل العفش؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "أفضل طريقة لنقل العفش هي الاستعانة بشركة نقل محترفة توفر خدمات التغليف والنقل والتركيب مع ضمان سلامة الأثاث."
        }
      },
      {
        "@type": "Question",
        "name": "كم تكلفة نقل العفش في السعودية؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تختلف تكلفة نقل العفش حسب المسافة وحجم الأثاث، وتتراوح عادة بين 800-5000 ريال سعودي للنقل المحلي."
        }
      }
    ]
  };

  return (
    <Layout
      title={`${post.title} | شركة نقل عفش`}
      description={post.excerpt}
      keywords={`${post.category}, نقل عفش, نقل أثاث, ${post.tags ? post.tags.join(', ') : ''}`}
      ogImage={fullImageUrl}
    >
      <Head>
        {/* SEO Meta Tags 2025 */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:author" content={post.author.name} />
        <meta property="article:section" content={post.category} />
        {post.tags && post.tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        
        {/* Canonical URL */}
        <link rel="canonical" href={`${siteUrl}/blog/${post.slug}`} />
        
        {/* Custom CSS for Enhanced Styles */}
        <style jsx>{`
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .bg-clip-text {
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
          }
        `}</style>
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "@id": `${siteUrl}/blog/${post.slug}#article`,
              "headline": post.title,
              "description": post.excerpt,
              "image": {
                "@type": "ImageObject",
                "url": fullImageUrl,
                "width": 1200,
                "height": 630
              },
              "datePublished": post.date,
              "dateModified": currentDate,
              "author": {
                "@type": "Person",
                "name": post.author.name,
                "url": `${siteUrl}/about#${post.author.id}`,
                "image": `${siteUrl}${authorAvatar}`
              },
              "publisher": {
                "@type": "Organization",
                "name": "شركة نقل العفش",
                "logo": {
                  "@type": "ImageObject",
                  "url": `${siteUrl}${basePath}/icon-192x192.png`,
                  "width": 192,
                  "height": 192
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `${siteUrl}/blog/${post.slug}`
              },
              "wordCount": post.content ? post.content.split(' ').length : 2000,
              "keywords": post.tags ? post.tags.join(', ') : post.category,
              "articleSection": post.category,
              "inLanguage": "ar-SA",
              "potentialAction": {
                "@type": "ReadAction",
                "target": `${siteUrl}/blog/${post.slug}`
              }
            })
          }}
        />
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                  "name": "المدونة",
                  "item": `${siteUrl}/blog`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": post.title,
                  "item": `${siteUrl}/blog/${post.slug}`
                }
              ]
            })
          }}
        />
      </Head>

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Article Header */}
      <article className="relative">
        {/* Hero Section with Parallax Effect */}
        <div className="relative h-[70vh] min-h-[500px] mb-12 overflow-hidden">
          <div className="absolute inset-0">
            <StaticImage 
              src={coverImage} 
              alt={post.title}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              loading="eager"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center text-sm mb-6" aria-label="Breadcrumb">
                <Link href="/" passHref>
                  <a className="hover:text-accent transition-colors">الرئيسية</a>
                </Link>
                <span className="mx-2">/</span>
                <Link href="/blog" passHref>
                  <a className="hover:text-accent transition-colors">المدونة</a>
                </Link>
                <span className="mx-2">/</span>
                <span className="text-accent">{post.category}</span>
              </nav>
              
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ml-3">
                    <StaticImage 
                      src={authorAvatar} 
                      alt={post.author.name}
                      width={48}
                      height={48}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{post.author.name}</p>
                    <p className="text-gray-300">{post.author.title}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readingTime} دقائق قراءة
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {Math.floor(Math.random() * 5000) + 1000} مشاهدة
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <svg className="w-6 h-6 ml-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              محتويات المقال
            </h2>
            <nav className="space-y-2">
              <a href="#section1" className="block py-2 px-4 rounded-lg hover:bg-white transition-colors">1. المقدمة</a>
              <a href="#section2" className="block py-2 px-4 rounded-lg hover:bg-white transition-colors">2. النقاط الرئيسية</a>
              <a href="#section3" className="block py-2 px-4 rounded-lg hover:bg-white transition-colors">3. التفاصيل المهمة</a>
              <a href="#section4" className="block py-2 px-4 rounded-lg hover:bg-white transition-colors">4. النصائح والإرشادات</a>
              <a href="#section5" className="block py-2 px-4 rounded-lg hover:bg-white transition-colors">5. الخلاصة</a>
            </nav>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg prose-gray max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">الكلمات المفتاحية</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Link key={index} href={`/blog?tag=${tag}`} passHref>
                    <a className="inline-block bg-gray-100 hover:bg-primary hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm transition-colors">
                      #{tag}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-12">
            <div className="flex items-start">
              <div className="relative w-20 h-20 rounded-full overflow-hidden ml-6">
                <StaticImage 
                  src={authorAvatar} 
                  alt={post.author.name}
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">عن الكاتب</h3>
                <h4 className="text-xl font-semibold text-primary mb-2">{post.author.name}</h4>
                <p className="text-gray-600 mb-4">{post.author.title}</p>
                <p className="text-gray-700">
                  خبير في مجال نقل العفش والأثاث مع خبرة تزيد عن 10 سنوات في تقديم النصائح والإرشادات المتخصصة في هذا المجال.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles - Enhanced */}
          <RelatedPosts posts={morePosts} getImagePath={getImagePath} />

          {/* Share Section */}
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">شارك هذا المقال</h3>
            <p className="mb-6">إذا وجدت هذا المقال مفيداً، شاركه مع أصدقائك وعائلتك</p>
            <div className="flex justify-center gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${siteUrl}/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors"
                aria-label="Share on Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${siteUrl}/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors"
                aria-label="Share on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${post.title} ${siteUrl}/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors"
                aria-label="Share on WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${siteUrl}/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gray-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">اشترك في نشرتنا البريدية</h3>
            <p className="text-gray-600 mb-6">احصل على أحدث النصائح والمقالات حول نقل العفش مباشرة في بريدك الإلكتروني</p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  
  return {
    paths: posts.map(post => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  const allPosts = getAllPosts()
  
  if (!post) {
    return {
      props: {
        post: null,
        morePosts: [],
        allPosts: []
      }
    }
  }
  
  // خوارزمية محسنة لاختيار المقالات المتعلقة
  const relatedPosts = allPosts
    .filter(p => p.slug !== params.slug)
    .map(p => {
      let score = 0;
      
      // إعطاء أولوية للمقالات من نفس الفئة
      if (p.category === post.category) {
        score += 10;
      }
      
      // إعطاء نقاط للمقالات المميزة
      if (p.featured) {
        score += 5;
      }
      
      // إعطاء نقاط للتطابق في الكلمات المفتاحية
      if (post.tags && p.tags) {
        const commonTags = post.tags.filter(tag => p.tags.includes(tag));
        score += commonTags.length * 3;
      }
      
      // إعطاء نقاط للمقالات الحديثة
      const postDate = new Date(p.date);
      const currentDate = new Date();
      const daysDiff = (currentDate - postDate) / (1000 * 60 * 60 * 24);
      if (daysDiff <= 30) score += 2; // مقالات آخر 30 يوم
      
      return { ...p, score };
    })
    .sort((a, b) => b.score - a.score) // ترتيب حسب النقاط
    .slice(0, 6); // أخذ أفضل 6 مقالات
  
  return {
    props: {
      post,
      morePosts: relatedPosts,
      allPosts: allPosts || []
    }
  }
} 