import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/blog'
import BlogCard from '../components/BlogCard'
import Head from 'next/head'
import ImageLoader from '../components/ImageLoader'
import StaticImage from '../components/StaticImage'
import { useRouter } from 'next/router'
import OptimizedImage from '../components/OptimizedImage'

// بيانات المناطق للسلايدر
const allAreas = [
  // جدة
  { slug: 'al-rawdah', name: 'الروضة', city: 'جدة' },
  { slug: 'al-hamra', name: 'الحمراء', city: 'جدة' },
  { slug: 'al-andalus', name: 'الأندلس', city: 'جدة' },
  { slug: 'al-zahra', name: 'الزهراء', city: 'جدة' },
  { slug: 'al-salamah', name: 'السلامة', city: 'جدة' },
  { slug: 'al-shati', name: 'الشاطئ', city: 'جدة' },
  { slug: 'al-safa', name: 'الصفا', city: 'جدة' },
  { slug: 'al-khalidiyah', name: 'الخالدية', city: 'جدة' },
  // الرياض
  { slug: 'al-olaya', name: 'العليا', city: 'الرياض' },
  { slug: 'al-malaz', name: 'الملز', city: 'الرياض' },
  { slug: 'al-narjis', name: 'النرجس', city: 'الرياض' },
  { slug: 'hittin', name: 'حطين', city: 'الرياض' },
  { slug: 'al-yasmin', name: 'الياسمين', city: 'الرياض' },
  // الدمام
  { slug: 'al-faisaliyah-dammam', name: 'الفيصلية', city: 'الدمام' },
  { slug: 'al-shatea', name: 'الشاطئ', city: 'الدمام' },
  { slug: 'al-aziziyah-dammam', name: 'العزيزية', city: 'الدمام' },
  { slug: 'uhud', name: 'أحد', city: 'الدمام' }
];

// مكوّن السلايدر للمناطق
const AreasSlider = () => {
  const [startIndex, setStartIndex] = useState(0);

  // تحريك السلايدر إلى اليمين
  const slideRight = () => {
    setStartIndex((prevIndex) => 
      prevIndex === 0 ? allAreas.length - 5 : prevIndex - 1
    );
  };

  // تحريك السلايدر إلى اليسار
  const slideLeft = () => {
    setStartIndex((prevIndex) => 
      prevIndex >= allAreas.length - 5 ? 0 : prevIndex + 1
    );
  };

  // التمرير التلقائي
  useEffect(() => {
    const interval = setInterval(() => {
      slideLeft();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [startIndex]);

  // المناطق المعروضة حالياً
  const visibleAreas = [...allAreas.slice(startIndex), ...allAreas.slice(0, startIndex)]
    .slice(0, 7);

  return (
    <div className="relative py-4 w-full mx-auto">
      <div className="flex items-center justify-between">
        <button 
          className="bg-primary text-white rounded-full p-2 shadow-md focus:outline-none z-[5] relative"
          onClick={slideRight}
          aria-label="السابق"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <div className="flex-1 flex justify-between px-4 space-x-2 rtl:space-x-reverse overflow-x-auto no-scrollbar">
          {visibleAreas.map((area, index) => (
            <Link 
              href={`/areas/${area.slug}`} 
              key={`${area.slug}-${index}`}
              passHref
            >
              <a className="bg-white shadow-md rounded-lg py-3 px-4 min-w-[100px] mx-1 text-center hover:bg-primary hover:text-white transition-colors flex-shrink-0">
                <span className="font-bold block">{area.name}</span>
                <span className="text-sm text-gray-500">{area.city}</span>
              </a>
            </Link>
          ))}
        </div>
        
        <button 
          className="bg-primary text-white rounded-full p-2 shadow-md focus:outline-none z-[5] relative"
          onClick={slideLeft}
          aria-label="التالي"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

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

export default function Home({ featuredPosts }) {
  const router = useRouter();
  const basePath = getBasePath();
  
  const services = [
    { 
      id: 1, 
      title: 'نقل الشركات والمكاتب', 
      description: 'حلول نقل متكاملة للشركات والمؤسسات مع ضمان الاستمرارية في العمل وتقليل فترة التوقف', 
      image: '/images/services/corporate_moving.jpg',
      link: '/services/corporate'
    },
    { 
      id: 2, 
      title: 'خدمات التغليف المتخصصة', 
      description: 'تغليف احترافي وآمن للأثاث والمقتنيات الثمينة باستخدام أفضل مواد التغليف', 
      image: '/images/services/packing_service.jpg',
      link: '/services/packing'
    },
    { 
      id: 3, 
      title: 'فك وتركيب الأثاث', 
      description: 'خدمات فك وتركيب احترافية للأثاث المنزلي والمكتبي مع الحفاظ على سلامته', 
      image: '/images/services/furniture_assembly.jpg',
      link: '/services/assembly'
    },
    { 
      id: 4, 
      title: 'التخزين الآمن', 
      description: 'خدمات تخزين آمنة للأثاث والمقتنيات في مستودعات مجهزة بأحدث أنظمة الحماية والرقابة', 
      image: '/images/services/storage_service.jpg',
      link: '/services/storage'
    },
  ];
  
  const areas = [
    { name: 'الرياض', count: 24, image: '/images/areas/riyadh.jpg' },
    { name: 'جدة', count: 18, image: '/images/areas/jeddah.jpg' },
    { name: 'الدمام', count: 15, image: '/images/areas/dammam.jpg' },
    { name: 'مكة المكرمة', count: 14, image: '/images/areas/makkah.jpg' },
    { name: 'المدينة المنورة', count: 12, image: '/images/areas/madinah.jpg' },
    { name: 'الخبر', count: 10, image: '/images/areas/khobar.jpg' },
  ];
  
  const whyChooseUs = [
    { 
      id: 1, 
      title: 'فريق محترف',
      description: 'فريقنا مدرب على أعلى مستوى للتعامل مع جميع أنواع الأثاث والمقتنيات بعناية فائقة',
      icon: '/images/icons/team.svg'
    },
    { 
      id: 2, 
      title: 'معدات حديثة',
      description: 'نستخدم أحدث المعدات والتقنيات لضمان سلامة وكفاءة عملية النقل من البداية إلى النهاية',
      icon: '/images/icons/equipment.svg'
    },
    { 
      id: 3, 
      title: 'أسطول نقل متكامل',
      description: 'نمتلك أسطول نقل متكامل من الشاحنات المجهزة خصيصًا لنقل الأثاث والعفش بأمان',
      icon: '/images/icons/trucks.svg'
    },
    { 
      id: 4, 
      title: 'ضمان على الخدمة',
      description: 'نقدم ضمانًا على جميع خدماتنا لمنحك راحة البال والثقة الكاملة في اختيارك لنا',
      icon: '/images/icons/guarantee.svg'
    },
    { 
      id: 5, 
      title: 'أسعار تنافسية',
      description: 'نقدم أسعارًا تنافسية مع الحفاظ على أعلى معايير الجودة والاحترافية في تقديم الخدمة',
      icon: '/images/icons/price.svg'
    },
    { 
      id: 6, 
      title: 'خدمة على مدار الساعة',
      description: 'فريق خدمة العملاء متاح على مدار الساعة للإجابة على استفساراتك وتلبية احتياجاتك',
      icon: '/images/icons/support.svg'
    },
  ];

  return (
    <Layout title="فخر الخليج - خدمات نقل العفش والأثاث المتخصصة"
      description="مزود رائد لخدمات نقل العفش والأثاث في جميع أنحاء المملكة العربية السعودية، نقدم خدمات احترافية للأفراد والشركات والمؤسسات."
      keywords="نقل عفش، نقل أثاث، المملكة العربية السعودية، خدمات التخزين، فك وتركيب الأثاث">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "فخر الخليج",
              "url": "https://fakhrkhaleej.com",
              "logo": "https://fakhrkhaleej.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966-123-456-789",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://facebook.com/fakhrkhaleej",
                "https://twitter.com/fakhrkhaleej",
                "https://linkedin.com/company/fakhrkhaleej"
              ]
            })
          }}
        />
        
        {/* Ajout de style pour masquer la barre de défilement */}
        <style jsx global>{`
          .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;  /* Chrome, Safari, Opera */
          }
        `}</style>
      </Head>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[600px] w-full">
          <ImageLoader
            src="/images/professional_movers_company.jpeg"
            alt="فخر الخليج - خدمات نقل العفش والأثاث المتخصصة"
            width={1920}
            height={1080}
            priority
            className="w-full h-full brightness-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
              خدمات نقل العفش والأثاث المتخصصة في المملكة العربية السعودية
            </h1>
            <p className="text-xl max-w-3xl text-center mb-8">
              حلول نقل عفش متكاملة للأفراد والشركات والمؤسسات في جميع أنحاء المملكة.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/services" passHref>
                <a className="btn btn-accent">
                  استكشاف خدماتنا
                </a>
              </Link>
              <Link href="/contact" passHref>
                <a className="btn btn-secondary">
                  طلب استشارة
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Slider Section - UPDATED */}
      <section className="py-10 bg-gray-100 relative z-[1]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">مناطق خدماتنا</h2>
            <p className="text-gray-600">نقدم خدماتنا في مختلف مناطق المملكة العربية السعودية</p>
          </div>
          <AreasSlider />
          <div className="text-center mt-6">
            <Link href="/areas" passHref>
              <a className="text-primary font-bold hover:underline">
                عرض جميع المناطق
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا المتخصصة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              حلول شاملة لنقل العفش مصممة خصيصًا لتلبية احتياجات كل عميل
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* نقل المكاتب والشركات */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="relative h-48 mb-4 rounded overflow-hidden">
                <ImageLoader 
                  src="/images/professional_movers_company.jpeg" 
                  alt="نقل المكاتب والشركات" 
                  width={800}
                  height={400}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">نقل المكاتب والشركات</h3>
              <p className="text-gray-600 mb-4">
                خدمات نقل احترافية للشركات والمكاتب مع التخطيط الدقيق لضمان استمرارية العمل دون انقطاع.
              </p>
              <Link href="/services/corporate" passHref>
                <a className="text-primary font-medium">
                  اقرأ المزيد ←
                </a>
              </Link>
            </div>

            {/* خدمات التنظيف المتخصصة */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="relative h-48 mb-4 rounded overflow-hidden">
                <ImageLoader 
                  src="/images/furniture_shipping_service.jpeg" 
                  alt="خدمات التنظيف المتخصصة" 
                  width={800}
                  height={400}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">خدمات التنظيف المتخصصة</h3>
              <p className="text-gray-600 mb-4">
                خدمات تنظيف احترافية شاملة لجميع أنواع المساحات والمباني مع استخدام أحدث التقنيات ومواد التنظيف الآمنة.
              </p>
              <Link href="/services/cleaning" passHref>
                <a className="text-primary font-medium">
                  اقرأ المزيد ←
                </a>
              </Link>
            </div>

            {/* خدمات التخزين */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="relative h-48 mb-4 rounded overflow-hidden">
                <ImageLoader 
                  src="/images/commercial_moving_service.jpeg" 
                  alt="خدمات التخزين" 
                  width={800}
                  height={400}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">خدمات التخزين</h3>
              <p className="text-gray-600 mb-4">
                حلول تخزين آمنة ومكيفة لجميع أنواع الأثاث والمعدات لفترات قصيرة وطويلة المدى مع ضمان السلامة والحماية.
              </p>
              <Link href="/services/storage" passHref>
                <a className="text-primary font-medium">
                  اقرأ المزيد ←
                </a>
              </Link>
            </div>
            
            {/* فك وتركيب الأثاث */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="relative h-48 mb-4 rounded overflow-hidden">
                <ImageLoader 
                  src="/images/experienced_movers_team.jpeg" 
                  alt="فك وتركيب الأثاث" 
                  width={800}
                  height={400}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">فك وتركيب الأثاث</h3>
              <p className="text-gray-600 mb-4">
                خدمات فك وتركيب احترافية لجميع أنواع الأثاث المنزلي والمكتبي بأيدي فنيين متخصصين يضمنون سلامة كل قطعة.
              </p>
              <Link href="/services/assembly" passHref>
                <a className="text-primary font-medium">
                  اقرأ المزيد ←
                </a>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" passHref>
              <a className="btn btn-primary">
                جميع خدماتنا
              </a>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section - NEW */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا تختار فخر الخليج؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم خدمات نقل عفش متميزة بمعايير عالمية وخبرة محلية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">خبرة وموثوقية</h3>
              <p className="text-gray-600">
                أكثر من 15 عامًا من الخبرة في مجال نقل العفش والأثاث في مختلف مناطق المملكة مع آلاف العملاء الراضين.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">سرعة وكفاءة</h3>
              <p className="text-gray-600">
                فريق محترف مدرب على أعلى مستوى يضمن تنفيذ عمليات النقل بسرعة وكفاءة مع الحفاظ على جودة الخدمة.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-primary text-4xl mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">دعم متكامل</h3>
              <p className="text-gray-600">
                خدمة عملاء متاحة على مدار الساعة لتلبية احتياجاتك والإجابة على استفساراتك قبل وأثناء وبعد عملية النقل.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts - UPDATED with more posts */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">مدونتنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نصائح وإرشادات مفيدة في مجال نقل العفش والأثاث
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center mb-8 mt-12">
            <Link href="/blog" passHref>
              <a className="btn btn-primary">عرض جميع المقالات</a>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">آراء عملائنا</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              استمع إلى ما يقوله عملاؤنا عن خدمات نقل العفش لدينا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-medium">محمد العتيبي</p>
                  <p className="opacity-70">الرياض</p>
                </div>
              </div>
              <p className="italic">
                "خدمة ممتازة من فريق محترف. قاموا بنقل أثاث منزلي بعناية فائقة ودون أي أضرار. أنصح بشدة بالتعامل معهم."
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-medium">سارة الزهراني</p>
                  <p className="opacity-70">جدة</p>
                </div>
              </div>
              <p className="italic">
                "تعاملت مع شركة فخر الخليج لنقل أثاث شركتنا، وكانت التجربة ممتازة من حيث الدقة والالتزام بالوقت والمحافظة على الأثاث."
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-medium">أحمد القحطاني</p>
                  <p className="opacity-70">الدمام</p>
                </div>
              </div>
              <p className="italic">
                "أفضل شركة نقل عفش تعاملت معها. الفريق محترف والأسعار منافسة والخدمة ممتازة. سأتعامل معهم مرة أخرى بالتأكيد."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section - NEW */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">فخر الخليج بالأرقام</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              إحصائيات تعكس حجم خبرتنا وثقة عملائنا
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-primary text-4xl font-bold mb-2">+5000</div>
              <p className="text-gray-600">عميل راضٍ</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-primary text-4xl font-bold mb-2">+15</div>
              <p className="text-gray-600">سنة خبرة</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-primary text-4xl font-bold mb-2">+25</div>
              <p className="text-gray-600">شاحنة مجهزة</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-primary text-4xl font-bold mb-2">+100</div>
              <p className="text-gray-600">فني محترف</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">هل أنت مستعد لتجربة خدمات نقل عفش متميزة؟</h2>
            <p className="text-xl text-gray-600 mb-8">
              تواصل مع فريقنا للحصول على استشارة مجانية واكتشف كيف يمكن لخدمات نقل العفش المتخصصة أن تلبي احتياجاتك بطريقة احترافية.
            </p>
            <Link href="/contact" passHref>
              <a className="btn btn-primary btn-lg">احصل على عرض سعر مجاني</a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const allPosts = getAllPosts()
    // Make sure allPosts is an array before trying to slice it
    const featuredPosts = Array.isArray(allPosts) && allPosts.length > 0 
      ? allPosts.slice(0, 4) // Get latest 4 posts
      : []
    
    return {
      props: {
        featuredPosts,
      },
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return {
      props: {
        featuredPosts: [],
      },
    }
  }
} 