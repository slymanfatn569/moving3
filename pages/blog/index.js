import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Head from 'next/head'
import BlogCard from '../../components/BlogCard'
import { getAllPosts, getAllCategories } from '../../lib/blog'
import Link from 'next/link'
import SEO from '../../components/SEO'

export default function BlogIndex({ allPosts, allCategories }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // فلترة المشاركات حسب الفئة المختارة
  const filteredPosts = selectedCategory === 'all' 
    ? allPosts 
    : allPosts.filter(post => post.category === selectedCategory);

  return (
    <Layout>
      <SEO 
        title="مدونة نقل العفش"
        description="استكشف آخر النصائح والخبرات في عالم نقل العفش والأثاث. دليلك الشامل لنقل آمن وفعال في المملكة العربية السعودية."
        keywords="مدونة نقل العفش، نصائح النقل، دليل نقل الأثاث، خبراء النقل، نقل آمن، تغليف الأثاث"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "headline": "مدونة نقل العفش - خبراء النقل في المملكة العربية السعودية",
              "description": "آخر المقالات والنصائح حول خدمات نقل العفش والأثاث في المملكة العربية السعودية",
              "publisher": {
                "@type": "Organization",
                "@id": "https://slymanfatn569.github.io/moving3/#organization",
                "name": "شركة نقل العفش",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://slymanfatn569.github.io/moving3/icons/icon-192x192.png"
                }
              },
              "url": "https://slymanfatn569.github.io/moving3/blog/",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://slymanfatn569.github.io/moving3/blog/"
              }
            })
          }}
        />
      </Head>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            مدونة نقل العفش
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            دليلك الشامل لنقل آمن وفعال. نصائح من الخبراء، أحدث الطرق في التغليف والنقل، 
            وكل ما تحتاج معرفته لضمان سلامة أثاثك أثناء الانتقال
          </p>
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{allPosts.length}</div>
            <div className="text-gray-600">مقال</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">{allCategories.length}</div>
            <div className="text-gray-600">فئة</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-gray-600">خبير</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">1000+</div>
            <div className="text-gray-600">قارئ</div>
          </div>
        </div>

        {/* فلتر الفئات */}
        {allCategories.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-xl font-bold mb-4 text-center">تصفح حسب الفئة</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                📚 جميع المقالات ({allPosts.length})
              </button>
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-md'
                  }`}
                >
                  🏷️ {category} ({allPosts.filter(post => post.category === category).length})
                </button>
              ))}
            </div>
          </div>
        )}

        {/* المقالات المميزة */}
        {selectedCategory === 'all' && allPosts.some(post => post.featured) && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <span className="text-3xl mr-3">⭐</span>
              <h2 className="text-3xl font-bold text-gray-800">المقالات المميزة</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts
                .filter(post => post.featured)
                .slice(0, 6)
                .map(post => (
                  <BlogCard key={post.id} post={post} featured={true} />
                ))}
            </div>
          </div>
        )}

        {/* جميع المقالات */}
        <div>
          <div className="flex items-center mb-8">
            <span className="text-3xl mr-3">📖</span>
            <h2 className="text-3xl font-bold text-gray-800">
              {selectedCategory === 'all' ? 'أحدث المقالات' : `مقالات ${selectedCategory}`}
            </h2>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts
                .filter(post => selectedCategory === 'all' ? !post.featured : true)
                .map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
              <div className="text-6xl mb-6">📝</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">لا توجد مقالات متاحة حاليًا</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                نعمل على إضافة محتوى مفيد حول نقل العفش والأثاث. 
                يرجى العودة قريبًا للاطلاع على آخر النصائح والإرشادات.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" passHref>
                  <a className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    🏠 الصفحة الرئيسية
                  </a>
                </Link>
                <Link href="/services" passHref>
                  <a className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    🚛 خدماتنا
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* النشرة البريدية */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 my-16 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-6">📧</div>
            <h2 className="text-3xl font-bold mb-4">اشترك في نشرتنا البريدية</h2>
            <p className="text-white/90 mb-8 text-lg">
              احصل على أحدث النصائح والدلائل حول نقل العفش والأثاث، 
              بالإضافة إلى العروض الحصرية مباشرة في صندوق الوارد الخاص بك
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-grow px-6 py-4 rounded-lg border-0 focus:outline-none focus:ring-4 focus:ring-white/30 text-gray-800"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg transition-colors font-bold"
              >
                اشترك الآن
              </button>
            </form>
            <p className="text-white/80 text-sm mt-4">
              نحترم خصوصيتك ولن نشارك بياناتك مع أطراف ثالثة
            </p>
          </div>
        </div>

        {/* روابط مفيدة */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">مواضيع قد تهمك</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/blog/packing-guide" passHref>
              <a className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-2xl mr-3">📦</span>
                <span className="font-medium">دليل التغليف</span>
              </a>
            </Link>
            <Link href="/blog/moving-tips" passHref>
              <a className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-2xl mr-3">💡</span>
                <span className="font-medium">نصائح النقل</span>
              </a>
            </Link>
            <Link href="/blog/furniture-care" passHref>
              <a className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-2xl mr-3">🛋️</span>
                <span className="font-medium">العناية بالأثاث</span>
              </a>
            </Link>
            <Link href="/blog/cost-estimation" passHref>
              <a className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-2xl mr-3">💰</span>
                <span className="font-medium">تقدير التكلفة</span>
              </a>
            </Link>
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