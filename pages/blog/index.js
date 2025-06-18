import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Head from 'next/head'
import BlogCard from '../../components/BlogCard'
import { getAllPosts, getAllCategories } from '../../lib/blog'
import Link from 'next/link'

export default function BlogIndex({ allPosts, allCategories }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // فلترة المشاركات حسب الفئة المختارة
  const filteredPosts = selectedCategory === 'all' 
    ? allPosts 
    : allPosts.filter(post => post.category === selectedCategory);

  return (
    <Layout
      title="المدونة | فخر الخليج - خبراء الأزياء الرسمية المهنية"
      description="استكشف آخر الرؤى والاتجاهات في عالم الأزياء الرسمية المهنية في المملكة العربية السعودية من الخبراء في فخر الخليج."
      keywords="مدونة الزي الرسمي، مقالات الزي المهني، اتجاهات الزي الرسمي، صناعة الملابس السعودية، نصائح الزي الرسمي"
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "headline": "مدونة فخر الخليج للأزياء الرسمية المهنية",
              "description": "آخر المقالات والرؤى حول صناعة الأزياء الرسمية المهنية في المملكة العربية السعودية",
              "publisher": {
                "@type": "Organization",
                "name": "فخر الخليج",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://fakhrkhaleej.com/logo.png"
                }
              }
            })
          }}
        />
      </Head>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">مدونة فخر الخليج</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            آخر الرؤى والاتجاهات في عالم الأزياء الرسمية المهنية في المملكة العربية السعودية
          </p>
        </div>

        {/* فلتر الفئات - يظهر فقط إذا كان هناك فئات */}
        {allCategories.length > 0 && (
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              الكل
            </button>
            {allCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* المقالات المميزة - يظهر فقط إذا كان هناك مقالات مميزة */}
        {selectedCategory === 'all' && allPosts.some(post => post.featured) && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">المقالات المميزة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts
                .filter(post => post.featured)
                .map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
            </div>
          </div>
        )}

        {/* جميع المقالات */}
        <div>
          <h2 className="text-2xl font-bold mb-8">
            {selectedCategory === 'all' ? 'جميع المقالات' : `مقالات ${selectedCategory}`}
          </h2>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts
                .filter(post => selectedCategory === 'all' ? !post.featured : true)
                .map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">لا توجد مقالات متاحة حاليًا</h3>
              <p className="text-gray-600 mb-4">
                نعمل على إضافة محتوى جديد. يرجى العودة قريبًا للاطلاع على آخر المقالات.
              </p>
              <Link href="/" passHref>
                <a className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-lg transition-colors">
                  العودة للصفحة الرئيسية
                </a>
              </Link>
            </div>
          )}
        </div>

        {/* النشرة البريدية */}
        <div className="bg-gray-50 rounded-lg p-8 my-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">اشترك في نشرتنا البريدية</h2>
            <p className="text-gray-600 mb-6">
              احصل على آخر المقالات والنصائح حول الأزياء الرسمية المهنية مباشرة في صندوق الوارد الخاص بك
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-grow px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition-colors font-medium"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  const allCategories = getAllCategories();
  return {
    props: {
      allPosts,
      allCategories,
    },
  };
}