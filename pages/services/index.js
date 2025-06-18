import React from 'react'
import Layout from '../../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ImageLoader from '../../components/ImageLoader'

// بيانات الخدمات الرئيسية
const featuredServices = [
  {
    id: 'corporate',
    title: 'نقل المكاتب والشركات',
    description: 'خدمات نقل احترافية للشركات والمكاتب مع التخطيط الدقيق لضمان استمرارية العمل دون انقطاع.',
    image: '/images/professional_movers_company.jpeg',
    slug: 'corporate'
  },
  {
    id: 'cleaning',
    title: 'خدمات التنظيف المتخصصة',
    description: 'خدمات تنظيف احترافية شاملة لجميع أنواع المساحات والمباني مع استخدام أحدث التقنيات ومواد التنظيف الآمنة.',
    image: '/images/furniture_shipping_service.jpeg',
    slug: 'cleaning'
  },
  {
    id: 'storage',
    title: 'خدمات التخزين',
    description: 'حلول تخزين آمنة ومكيفة لجميع أنواع الأثاث والمعدات لفترات قصيرة وطويلة المدى مع ضمان السلامة والحماية.',
    image: '/images/commercial_moving_service.jpeg',
    slug: 'storage'
  },
  {
    id: 'assembly',
    title: 'فك وتركيب الأثاث',
    description: 'خدمات فك وتركيب احترافية لكافة أنواع الأثاث المنزلي والمكتبي مع ضمان عدم الإضرار بالقطع والحفاظ على جودتها.',
    image: '/images/experienced_movers_team.jpeg',
    slug: 'assembly'
  }
];

export default function ServicesIndexPage() {
  return (
    <Layout
      title="خدمات نقل العفش المتخصصة | فخر الخليج"
      description="حلول متكاملة لنقل العفش للقطاعات المختلفة بما في ذلك الشركات، الحكومية، الأمنية والتعليمية في جميع أنحاء المملكة العربية السعودية."
      keywords="خدمات نقل العفش، نقل أثاث في السعودية، نقل المكاتب، نقل المؤسسات الحكومية، نقل المعدات الأمنية"
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": featuredServices.map((service, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description,
                  "url": `https://fakhrkhaleej.com/services/${service.slug}`
                }
              }))
            })
          }}
        />
      </Head>

      {/* قسم الترحيب */}
      <div className="relative h-[400px] w-full mb-12 rounded-lg overflow-hidden">
        <ImageLoader
          src="/images/luxury_furniture_movers.jpeg"
          alt="خدمات نقل العفش المتخصصة | فخر الخليج"
          width={1200}
          height={400}
          priority
          className="w-full h-full brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            خدمات نقل العفش المتخصصة
          </h1>
          <p className="text-xl max-w-3xl text-center">
            حلول نقل مخصصة لكافة القطاعات في جميع أنحاء المملكة العربية السعودية
          </p>
        </div>
      </div>

      {/* المقدمة */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4">خدمات نقل شاملة ومتكاملة</h2>
        <p className="text-gray-700 mb-4">
          في فخر الخليج، نقدم حلول نقل عفش متكاملة مصممة خصيصًا لتلبية الاحتياجات الفريدة لكل قطاع. 
          تشمل خدماتنا استشارات التخطيط، اختيار مواد التغليف المناسبة، التنفيذ الاحترافي، إدارة المخزون،
          وبرامج الصيانة والمتابعة.
        </p>
        <p className="text-gray-700">
          مع عقود من الخبرة في خدمة أبرز المؤسسات في المملكة العربية السعودية، نحن ندرك أهمية 
          تقديم خدمات نقل تجمع بين الوظائف العملية، الراحة، الاعتبارات الثقافية، وهوية العلامة التجارية.
        </p>
      </div>

      {/* الخدمات المميزة */}
      <h2 className="text-3xl font-bold mb-6">خدماتنا المميزة</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {featuredServices.map(service => (
          <Link 
            href={`/services/${service.slug}`} 
            key={service.id}
            passHref
          >
            <a className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <ImageLoader 
                  src={service.image} 
                  alt={service.title} 
                  width={800}
                  height={500}
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-primary font-medium">اقرأ المزيد ←</span>
              </div>
            </a>
          </Link>
        ))}
      </div>

      {/* مراحل العمل */}
      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">مراحل تنفيذ خدمات النقل</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">١</div>
            <h3 className="text-lg font-bold mb-2">التخطيط والاستشارة</h3>
            <p className="text-gray-600">نجتمع مع فريقك لفهم متطلباتك المحددة، وإرشادات العمل، واحتياجات التشغيل الخاصة بك.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٢</div>
            <h3 className="text-lg font-bold mb-2">التجهيز والتغليف</h3>
            <p className="text-gray-600">يقوم فريقنا بتجهيز وتغليف جميع القطع بمواد عالية الجودة مع ضمان السلامة والوظائف العملية.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٣</div>
            <h3 className="text-lg font-bold mb-2">النقل والتوصيل</h3>
            <p className="text-gray-600">ننفذ عملية النقل باستخدام أحدث التقنيات والمعدات مع فريق محترف مدرب على أعلى مستوى.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٤</div>
            <h3 className="text-lg font-bold mb-2">التركيب والمتابعة</h3>
            <p className="text-gray-600">نتولى تركيب جميع القطع في المكان الجديد ونتابع الخدمة لضمان رضاك التام.</p>
          </div>
        </div>
      </div>

      {/* خدمات خاصة */}
      <div className="bg-primary text-white p-8 rounded-lg mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">حلول نقل مخصصة</h2>
            <p className="text-lg mb-4">
              هل تحتاج إلى حل نقل متخصص لمتطلباتك الفريدة؟ يمكن لفريقنا تطوير 
              برامج نقل مخصصة مصممة خصيصًا لاحتياجات مؤسستك.
            </p>
            <p className="text-lg mb-6">
              من المواد المتخصصة إلى عناصر التصميم الفريدة، يمكننا تقديم خدمات نقل تمثل 
              علامتك التجارية بشكل مثالي مع تلبية جميع المتطلبات الوظيفية.
            </p>
            <Link href="/contact" passHref>
              <a className="bg-white text-primary py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors font-bold inline-block">
                طلب حل مخصص
              </a>
            </Link>
          </div>
          <div className="md:w-1/3 relative h-64 w-full rounded-lg overflow-hidden">
            <ImageLoader 
              src="/images/experienced_movers_team.jpeg" 
              alt="عملية تصميم خدمة نقل مخصصة" 
              width={400}
              height={300}
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* دعوة للتواصل */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">هل أنت جاهز للارتقاء بخدمات النقل لديك؟</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          تواصل مع فريقنا لمناقشة كيف يمكن لخدمات النقل المهنية لدينا تعزيز صورة مؤسستك،
          وظائفها، ورضا موظفيك.
        </p>
        <Link href="/contact" passHref>
          <a className="bg-primary text-white hover:bg-primary-dark font-bold py-3 px-8 rounded-lg transition-colors">
            احصل على استشارة مجانية
          </a>
        </Link>
      </div>

      {/* أسئلة شائعة */}
      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">الأسئلة الشائعة</h2>
        
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">ما هي مدة تنفيذ خدمات النقل؟</h3>
            <p className="text-gray-700">
              تختلف مدة التنفيذ حسب حجم المشروع وتعقيده، ولكن فريقنا يعمل بكفاءة لإنجاز المهام في أسرع وقت ممكن مع الحفاظ على الجودة. نقدم لك جدولاً زمنياً دقيقاً قبل البدء في العمل.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">هل توفرون خدمات التخزين المؤقت للأثاث؟</h3>
            <p className="text-gray-700">
              نعم، نوفر مستودعات آمنة ومكيفة للتخزين المؤقت للأثاث والمعدات خلال عمليات النقل أو التجديد، مع ضمان الحفاظ على سلامتها من العوامل البيئية المختلفة.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">هل تقدمون خدمات النقل الدولي؟</h3>
            <p className="text-gray-700">
              نعم، نقدم خدمات نقل دولية شاملة مع التعامل مع جميع الإجراءات الجمركية والتصاريح اللازمة، ونضمن وصول ممتلكاتك بأمان إلى وجهتها في أي مكان في العالم.
            </p>
          </div>
        </div>
      </div>

      {/* مزايا التعامل معنا */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">لماذا تختار فخر الخليج؟</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">خبرة وموثوقية</h3>
            <p className="text-gray-600">
              نمتلك سنوات من الخبرة في مجال نقل العفش والمعدات المتخصصة لمختلف القطاعات في المملكة العربية السعودية.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">كفاءة وسرعة</h3>
            <p className="text-gray-600">
              نعمل بكفاءة عالية لتقليل وقت الانقطاع وضمان استمرارية عمل مؤسستك بأقل تأثير ممكن.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">دعم متكامل</h3>
            <p className="text-gray-600">
              نقدم دعمًا شاملاً من التخطيط الأولي إلى ما بعد التركيب، مع فريق مخصص للإجابة على استفساراتك في أي وقت.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
} 