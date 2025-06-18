import React from 'react'
import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import StaticImage from '../../components/StaticImage'
import { getAllPosts, getPostBySlug } from '../../lib/blog'
import ReactMarkdown from 'react-markdown'

// Determine basePath for images
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

export default function PostPage({ post, morePosts }) {
  const router = useRouter()
  const basePath = getBasePath();

  // Helper function to get the correct image path
  const getImagePath = (imagePath) => {
    if (!imagePath) return `${basePath}/images/placeholder.jpg`;
    return imagePath.startsWith('/') ? `${basePath}${imagePath}` : `${basePath}/${imagePath}`;
  };

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (!post) {
    // Si no hay artículo, mostrar un mensaje y un enlace a la página principal del blog
    return (
      <Layout
        title="المقال غير موجود | مدونة فخر الخليج"
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

  return (
    <Layout
      title={`${post.title} | مدونة فخر الخليج`}
      description={post.excerpt}
      keywords={`${post.category}, مدونة فخر الخليج, أزياء مهنية, ${post.title}`}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "image": fullImageUrl,
              "datePublished": post.date,
              "dateModified": post.date,
              "author": {
                "@type": "Person",
                "name": post.author.name
              },
              "publisher": {
                "@type": "Organization",
                "name": "فخر الخليج",
                "logo": {
                  "@type": "ImageObject",
                  "url": `${siteUrl}${basePath}/icon-192x192.png`
                }
              },
              "description": post.excerpt
            })
          }}
        />
      </Head>

      <div className="max-w-4xl mx-auto">
        {/* رأس المقال */}
        <div className="mb-8 text-center">
          <Link href="/blog" passHref>
            <a className="text-primary hover:text-primary-dark inline-flex items-center mb-6 transition-colors">
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              العودة إلى المدونة
            </a>
          </Link>
          <span className="inline-block bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-center">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <StaticImage 
                src={authorAvatar} 
                alt={post.author.name}
                width={40}
                height={40}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="mr-3 text-right">
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-gray-500">{post.date} · {post.readingTime} دقائق للقراءة</p>
            </div>
          </div>
        </div>

        {/* صورة المقال */}
        <div className="relative h-96 w-full mb-10 rounded-lg overflow-hidden">
          <StaticImage 
            src={coverImage} 
            alt={post.title}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            loading="eager"
          />
        </div>

        {/* محتوى المقال */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* بطاقة الكاتب */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="flex items-center">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <StaticImage 
                src={authorAvatar} 
                alt={post.author.name}
                width={64}
                height={64}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="mr-4">
              <h3 className="text-xl font-bold">عن {post.author.name}</h3>
              <p className="text-gray-600">{post.author.title}</p>
            </div>
          </div>
        </div>

        {/* مقالات ذات صلة */}
        {morePosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">مقالات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {morePosts.map(relatedPost => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} passHref>
                  <a className="bg-white rounded-lg shadow-md overflow-hidden flex hover:shadow-lg transition-shadow">
                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                      <StaticImage 
                        src={getImagePath(relatedPost.coverImage)} 
                        alt={relatedPost.title}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-full">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-bold mt-2 line-clamp-2">{relatedPost.title}</h3>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* زر المشاركة والنشر */}
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-4">هل أعجبك المقال؟ شاركه مع الآخرين!</h3>
          <div className="flex justify-center space-x-4 rtl:space-x-reverse">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(
                `${siteUrl}/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1da1f2] text-white p-3 rounded-full"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                `${siteUrl}/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3b5998] text-white p-3 rounded-full"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `${post.title} ${siteUrl}/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white p-3 rounded-full"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 4.435c-4.201 0-7.613 3.412-7.613 7.613 0 1.333.345 2.584.949 3.668l-1.008 3.678 3.76-.987c1.041.563 2.226.883 3.487.883 4.201 0 7.614-3.411 7.614-7.613 0-4.201-3.414-7.613-7.614-7.613zm0 13.901c-1.21 0-2.353-.34-3.328-.927l-.24-.144-2.47.649.662-2.425-.156-.24c-.62-.991-.958-2.138-.958-3.338 0-3.446 2.804-6.25 6.25-6.25s6.25 2.804 6.25 6.25c0 3.447-2.804 6.25-6.25 6.25zm-3.003-4.599c-.161-.08-.957-.471-1.105-.52-.148-.05-.255-.074-.362.074-.107.149-.416.52-.51.627-.094.106-.188.12-.348.04-.16-.08-.676-.249-1.287-.795-.476-.424-.798-.949-.891-1.107-.093-.159-.01-.245.07-.324.071-.071.158-.187.237-.28.079-.093.106-.16.159-.266.053-.107.027-.2-.013-.28-.04-.08-.362-.866-.495-1.187-.13-.313-.26-.267-.36-.272-.093-.005-.2-.005-.307-.005-.107 0-.278.04-.423.2-.147.16-.559.546-.559 1.333s.571 1.546.651 1.653c.08.107 1.119 1.705 2.74 2.4.381.166.679.266.912.34.383.121.731.104.997.066.305-.045.957-.391 1.092-.768.135-.376.135-.699.095-.766-.04-.066-.148-.106-.308-.187z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
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
  const morePosts = getAllPosts()
    .filter(p => p.slug !== params.slug)
    .filter(p => p.category === post?.category)
    .slice(0, 2)
  
  return {
    props: {
      post: post || null,
      morePosts: morePosts || []
    }
  }
} 