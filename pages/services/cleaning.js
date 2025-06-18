import React from 'react'
import Layout from '../../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ImageLoader from '../../components/ImageLoader'

export default function CleaningServicePage() {
  return (
    <Layout
      title="خدمات التنظيف المتخصصة | فخر الخليج"
      description="خدمات تنظيف شاملة ومتخصصة للمنازل والمكاتب والمنشآت التجارية في جميع أنحاء المملكة العربية السعودية"
      keywords="تنظيف منازل, تنظيف مكاتب, تنظيف شركات, شركة تنظيف, خدمات التنظيف المتخصصة, تنظيف بالبخار, تنظيف سجاد, تنظيف كنب"
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "خدمات التنظيف المتخصصة",
              "description": "خدمات تنظيف شاملة ومتخصصة للمنازل والمكاتب والمنشآت التجارية في جميع أنحاء المملكة العربية السعودية",
              "provider": {
                "@type": "Organization",
                "name": "فخر الخليج",
                "url": "https://fakhrkhaleej.com"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Saudi Arabia"
              },
              "serviceType": "خدمات التنظيف المتخصصة",
              "offers": {
                "@type": "Offer",
                "availability": "http://schema.org/InStock"
              }
            })
          }}
        />
      </Head>

      {/* قسم الترحيب */}
      <div className="relative h-[400px] w-full mb-12 rounded-lg overflow-hidden">
        <ImageLoader
          src="/images/furniture_shipping_service.jpeg"
          alt="خدمات التنظيف المتخصصة | فخر الخليج"
          width={1200}
          height={400}
          priority
          className="w-full h-full brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            خدمات التنظيف المتخصصة
          </h1>
          <p className="text-xl max-w-3xl text-center">
            حلول تنظيف احترافية ومتكاملة للمنازل والشركات والمنشآت التجارية
          </p>
        </div>
      </div>

      {/* المقدمة */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4">خدمات تنظيف شاملة ومتكاملة</h2>
        <p className="text-gray-700 mb-4">
          في فخر الخليج، نقدم حلول تنظيف متكاملة مصممة خصيصًا لتلبية الاحتياجات الفريدة لكل عميل. 
          تشمل خدماتنا التنظيف العميق للمنازل والمكاتب والمنشآت التجارية باستخدام أحدث التقنيات والمعدات.
        </p>
        <p className="text-gray-700">
          مع فريق من المتخصصين المدربين، نلتزم بتقديم خدمات تنظيف عالية الجودة 
          مع مراعاة أعلى معايير النظافة والسلامة باستخدام منتجات صديقة للبيئة.
        </p>
      </div>

      {/* أنواع خدمات التنظيف */}
      <h2 className="text-3xl font-bold mb-6">خدمات التنظيف المتخصصة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md flex">
          <div className="flex-shrink-0 ml-4">
            <div className="text-primary p-3 bg-primary bg-opacity-10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">تنظيف المنازل</h3>
            <p className="text-gray-600">
              خدمات تنظيف شاملة للمنازل تشمل تنظيف الغرف والمطابخ والحمامات والأرضيات والنوافذ مع تعقيم كامل للمنزل.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex">
          <div className="flex-shrink-0 ml-4">
            <div className="text-primary p-3 bg-primary bg-opacity-10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">تنظيف المكاتب والشركات</h3>
            <p className="text-gray-600">
              خدمات تنظيف متخصصة للمكاتب والشركات والمنشآت التجارية لضمان بيئة عمل صحية ونظيفة لموظفيك وعملائك.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex">
          <div className="flex-shrink-0 ml-4">
            <div className="text-primary p-3 bg-primary bg-opacity-10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">تنظيف المفروشات</h3>
            <p className="text-gray-600">
              تنظيف عميق للكنب والسجاد والستائر والمفروشات باستخدام تقنيات البخار الحديثة لإزالة البقع والغبار والروائح.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex">
          <div className="flex-shrink-0 ml-4">
            <div className="text-primary p-3 bg-primary bg-opacity-10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">خدمات التعقيم والتطهير</h3>
            <p className="text-gray-600">
              خدمات تعقيم وتطهير شاملة للمنازل والمكاتب باستخدام مواد معتمدة للقضاء على الجراثيم والفيروسات والبكتيريا.
            </p>
          </div>
        </div>
      </div>

      {/* مراحل العمل */}
      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">مراحل تنفيذ خدمات التنظيف</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">١</div>
            <h3 className="text-lg font-bold mb-2">المعاينة والتقييم</h3>
            <p className="text-gray-600">تقييم شامل للمكان وتحديد احتياجات التنظيف الخاصة والوقت اللازم لإتمام العملية.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٢</div>
            <h3 className="text-lg font-bold mb-2">التنظيف الأولي</h3>
            <p className="text-gray-600">إزالة الغبار والأوساخ الظاهرة وتجهيز المكان لمرحلة التنظيف العميق.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٣</div>
            <h3 className="text-lg font-bold mb-2">التنظيف العميق</h3>
            <p className="text-gray-600">استخدام أحدث التقنيات والمعدات للتنظيف العميق للأرضيات والمفروشات والأسطح.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٤</div>
            <h3 className="text-lg font-bold mb-2">التعقيم والتلميع</h3>
            <p className="text-gray-600">تعقيم المكان بالكامل وتلميع الأسطح للحصول على نتائج مثالية ولمعان مميز.</p>
          </div>
        </div>
      </div>

      {/* لماذا تختار خدماتنا */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">لماذا تختار خدمات التنظيف من فخر الخليج؟</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">فريق متخصص ومدرب</h3>
            <p className="text-gray-600">
              فريق عمل متخصص ومدرب على أعلى مستوى باستخدام أحدث تقنيات التنظيف وأفضل المنتجات.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">سرعة وكفاءة</h3>
            <p className="text-gray-600">
              خدمات تنظيف سريعة وفعالة دون المساس بالجودة مع الالتزام بالمواعيد المحددة.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">منتجات صديقة للبيئة</h3>
            <p className="text-gray-600">
              استخدام منتجات تنظيف عالية الجودة وصديقة للبيئة آمنة للأطفال والحيوانات الأليفة.
            </p>
          </div>
        </div>
      </div>

      {/* خدمات خاصة */}
      <div className="bg-primary text-white p-8 rounded-lg mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">حلول تنظيف مخصصة</h2>
            <p className="text-lg mb-4">
              هل تحتاج إلى خدمات تنظيف خاصة لمتطلباتك الفريدة؟ يمكن لفريقنا تطوير 
              برامج تنظيف مخصصة وفقًا لاحتياجاتك الخاصة.
            </p>
            <p className="text-lg mb-6">
              نوفر خدمات تنظيف دورية (يومية، أسبوعية، شهرية) للمنازل والمكاتب والمنشآت التجارية مع أسعار تنافسية.
            </p>
            <Link href="/contact">
              <a className="bg-white text-primary py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors font-bold inline-block">
                طلب خدمة مخصصة
              </a>
            </Link>
          </div>
          <div className="md:w-1/3 relative h-64 w-full rounded-lg overflow-hidden">
            <ImageLoader 
              src="/images/experienced_movers_team.jpeg" 
              alt="خدمات تنظيف مخصصة" 
              width={400}
              height={300}
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* أسئلة شائعة */}
      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">الأسئلة الشائعة</h2>
        
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">ما هي المناطق التي تغطيها خدمات التنظيف؟</h3>
            <p className="text-gray-700">
              نقدم خدمات التنظيف في جميع مناطق المملكة العربية السعودية بما في ذلك الرياض، جدة، الدمام، مكة، المدينة المنورة وغيرها من المدن.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">هل تستخدمون منتجات تنظيف آمنة؟</h3>
            <p className="text-gray-700">
              نعم، نستخدم منتجات تنظيف عالية الجودة وصديقة للبيئة آمنة للأطفال والحيوانات الأليفة مع الحفاظ على فعاليتها في التنظيف والتعقيم.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">كم من الوقت تستغرق عملية التنظيف؟</h3>
            <p className="text-gray-700">
              يعتمد وقت التنظيف على حجم المكان وحالته، ولكن عادة ما تستغرق الشقة متوسطة الحجم من 2-4 ساعات، بينما قد تستغرق المنازل الكبيرة والفلل من 4-8 ساعات.
            </p>
          </div>
        </div>
      </div>

      {/* دعوة للتواصل */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">هل أنت جاهز لتجربة خدمات التنظيف الاحترافية؟</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          تواصل مع فريقنا اليوم للحصول على استشارة مجانية وعرض سعر خاص لخدمات التنظيف المتخصصة.
        </p>
        <Link href="/contact">
          <a className="bg-primary text-white hover:bg-primary-dark font-bold py-3 px-8 rounded-lg transition-colors">
            احصل على عرض سعر مجاني
          </a>
        </Link>
      </div>
    </Layout>
  )
} 