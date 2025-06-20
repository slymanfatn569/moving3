import React from 'react'
import Layout from '../../components/Layout'
import Head from 'next/head'
import OptimizedImage from '../../components/OptimizedImage'
import Link from 'next/link'

// مواد التغليف المستخدمة
const packingMaterials = [
  {
    id: 'bubble-wrap',
    title: 'الفقاعات الهوائية',
    description: 'مادة تغليف مرنة توفر حماية ممتازة ضد الصدمات للعناصر الهشة والزجاجية.',
    uses: 'الأواني الزجاجية، الإلكترونيات، الأعمال الفنية والتحف'
  },
  {
    id: 'packing-paper',
    title: 'ورق التغليف',
    description: 'ورق خالٍ من الأحماض يستخدم للف العناصر بشكل فردي لمنع الخدوش والاحتكاك.',
    uses: 'الأطباق، الأواني المنزلية، الإكسسوارات الصغيرة'
  },
  {
    id: 'foam-wrap',
    title: 'رغوة التغليف',
    description: 'طبقة إضافية من الحماية توفر عزلاً ضد الصدمات والاهتزازات.',
    uses: 'الأثاث الثمين، الإلكترونيات الحساسة، القطع الفنية'
  },
  {
    id: 'custom-crates',
    title: 'صناديق مخصصة',
    description: 'صناديق خشبية مصممة خصيصًا لحماية العناصر الثمينة أو غير منتظمة الشكل.',
    uses: 'الثريات، اللوحات الفنية الكبيرة، التحف القيمة، المرايا الكبيرة'
  }
];

// خدمات التغليف المتخصصة
const specializedServices = [
  {
    id: 'fragile-items',
    title: 'تغليف العناصر الهشة',
    description: 'تقنيات متخصصة لتغليف العناصر الزجاجية والهشة لضمان وصولها بأمان تام.',
    image: '/images/furniture_wrapping_service.jpeg'
  },
  {
    id: 'electronic-packing',
    title: 'تغليف الأجهزة الإلكترونية',
    description: 'خدمات متخصصة لتغليف وحماية الأجهزة الإلكترونية من الصدمات والرطوبة.',
    image: '/images/moving_boxes_supplies.jpeg'
  },
  {
    id: 'furniture-packing',
    title: 'تغليف الأثاث',
    description: 'تغليف احترافي للأثاث باستخدام مواد عالية الجودة لمنع الخدوش والتلف أثناء النقل.',
    image: '/images/furniture_removal_service.jpeg'
  },
  {
    id: 'art-packing',
    title: 'تغليف الأعمال الفنية',
    description: 'تقنيات متقدمة وحلول مخصصة لتغليف اللوحات الفنية، المنحوتات والتحف النادرة.',
    image: '/images/packing_unpacking_service.jpeg'
  }
];

export default function PackingServicePage() {
  return (
    <Layout
      title="خدمات التغليف المتخصصة | فخر الخليج لنقل العفش"
      description="خدمات تغليف احترافية للعناصر الهشة، الأثاث، الإلكترونيات والأعمال الفنية باستخدام مواد عالية الجودة. خبرة أكثر من 15 عامًا في مجال التغليف الآمن."
      keywords="تغليف، خدمات تغليف، تغليف أثاث، تغليف عفش، تغليف إلكترونيات، تغليف أعمال فنية، شركة تغليف في جدة"
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "خدمات التغليف المتخصصة",
              "description": "خدمات تغليف احترافية للعناصر الهشة، الأثاث، الإلكترونيات والأعمال الفنية باستخدام مواد عالية الجودة.",
              "provider": {
                "@type": "LocalBusiness",
                "name": "فخر الخليج لنقل العفش",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "جدة",
                  "addressRegion": "مكة المكرمة",
                  "addressCountry": "SA"
                }
              },
              "areaServed": {
                "@type": "City",
                "name": "جدة"
              },
              "serviceType": "خدمات التغليف",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "خدمات التغليف المتخصصة",
                "itemListElement": specializedServices.map((service, index) => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": service.title,
                    "description": service.description
                  }
                }))
              }
            })
          }}
        />
      </Head>

      {/* قسم الترحيب */}
      <div className="relative h-[400px] w-full mb-12 rounded-lg overflow-hidden">
        <OptimizedImage
          src="/images/packing_moving_service.jpeg"
          alt="خدمات التغليف المتخصصة | فخر الخليج"
          width={1200}
          height={400}
          style={{ objectFit: 'cover' }}
          className="w-full h-full brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            خدمات التغليف المتخصصة
          </h1>
          <p className="text-xl max-w-3xl text-center">
            حماية متكاملة لممتلكاتك الثمينة باستخدام أفضل مواد وتقنيات التغليف
          </p>
        </div>
      </div>

      {/* المقدمة */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4">حلول تغليف متخصصة لحماية قصوى</h2>
        <p className="text-gray-700 mb-4">
          في فخر الخليج، نؤمن بأن التغليف المناسب هو أساس عملية النقل الناجحة. نقدم خدمات تغليف احترافية مصممة خصيصًا لحماية ممتلكاتك 
          الثمينة أثناء النقل، سواء كانت أثاثًا منزليًا، أجهزة إلكترونية، أعمالًا فنية أو عناصر هشة.
        </p>
        <p className="text-gray-700">
          يستخدم فريقنا المتخصص مواد تغليف عالية الجودة وتقنيات متطورة لضمان وصول جميع الأغراض بحالة ممتازة إلى وجهتها النهائية. 
          خبرتنا التي تمتد لأكثر من 15 عامًا تضمن لك خدمة تغليف آمنة وفعالة.
        </p>
      </div>

      {/* خدمات التغليف المتخصصة */}
      <h2 className="text-3xl font-bold mb-6 text-center">خدمات التغليف المتخصصة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {specializedServices.map(service => (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden" key={service.id}>
            <div className="relative h-64">
              <OptimizedImage 
                src={service.image} 
                alt={service.title} 
                width={800}
                height={500}
                style={{ objectFit: 'cover' }}
                className="w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* مواد التغليف المتميزة */}
      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">مواد التغليف عالية الجودة</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          نستخدم أفضل مواد التغليف المتوفرة في السوق لضمان حماية قصوى لممتلكاتك.
          كل مادة مختارة بعناية لتناسب نوع العناصر التي يتم تغليفها.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packingMaterials.map(material => (
            <div className="bg-white p-6 rounded-lg shadow-md" key={material.id}>
              <h3 className="text-lg font-bold mb-2">{material.title}</h3>
              <p className="text-gray-600 mb-3">{material.description}</p>
              <div className="bg-gray-100 p-3 rounded">
                <span className="font-bold text-sm text-primary block mb-1">استخدامات:</span>
                <span className="text-gray-700 text-sm">{material.uses}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* مزايا خدمة التغليف */}
      <h2 className="text-3xl font-bold mb-6 text-center">مزايا خدمات التغليف لدينا</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-primary text-4xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">حماية قصوى</h3>
          <p className="text-gray-600">
            مواد تغليف عالية الجودة مصممة خصيصًا لحماية العناصر من الصدمات، الخدوش والكسر أثناء النقل.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-primary text-4xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">فريق محترف</h3>
          <p className="text-gray-600">
            فريق متخصص مدرب على أحدث تقنيات التغليف للتعامل مع مختلف أنواع الممتلكات بدقة واحترافية.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-primary text-4xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">توفير الوقت</h3>
          <p className="text-gray-600">
            توفير الوقت والجهد عليك من خلال تولي عملية التغليف كاملة بطريقة منظمة وفعالة.
          </p>
        </div>
      </div>

      {/* عملية التغليف */}
      <div className="bg-primary text-white p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">كيف تتم عملية التغليف؟</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-white border-opacity-20">
            <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">١</div>
            <h3 className="text-lg font-bold mb-2 text-center">تقييم الاحتياجات</h3>
            <p className="text-white text-opacity-90">تقييم أنواع العناصر التي تحتاج للتغليف وتحديد المواد المناسبة لكل نوع.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-white border-opacity-20">
            <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٢</div>
            <h3 className="text-lg font-bold mb-2 text-center">تجهيز مواد التغليف</h3>
            <p className="text-white text-opacity-90">إعداد المواد المناسبة لكل عنصر بناءً على التقييم الأولي وطبيعة المقتنيات.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-white border-opacity-20">
            <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٣</div>
            <h3 className="text-lg font-bold mb-2 text-center">التغليف الاحترافي</h3>
            <p className="text-white text-opacity-90">تنفيذ عملية التغليف بأيدي محترفة باستخدام تقنيات متقدمة لضمان الحماية القصوى.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-white border-opacity-20">
            <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٤</div>
            <h3 className="text-lg font-bold mb-2 text-center">التوثيق والترقيم</h3>
            <p className="text-white text-opacity-90">توثيق وترقيم العناصر المغلفة لتسهيل عملية النقل وإعادة التركيب في الموقع الجديد.</p>
          </div>
        </div>
      </div>

      {/* نصائح للتغليف */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">نصائح للحفاظ على الأثاث أثناء التغليف</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="text-primary mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700">استخدم المواد المناسبة لكل نوع من الأثاث. الخشب يحتاج لمواد مختلفة عن الزجاج أو القماش.</p>
            </div>
            
            <div className="flex items-start">
              <div className="text-primary mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700">فك القطع الكبيرة إلى أجزاء صغيرة لتسهيل عملية التغليف والنقل وتقليل مخاطر التلف.</p>
            </div>
            
            <div className="flex items-start">
              <div className="text-primary mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700">تأكد من تغطية الزوايا والأطراف بشكل جيد، فهي الأكثر عرضة للتلف أثناء النقل.</p>
            </div>
            
            <div className="flex items-start">
              <div className="text-primary mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700">أزل المحتويات من الخزائن والأدراج قبل التغليف لتخفيف الوزن وتجنب تلف المفصلات.</p>
            </div>
            
            <div className="flex items-start">
              <div className="text-primary mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700">استخدم طبقات متعددة من التغليف للعناصر الثمينة أو الهشة مثل المرايا واللوحات الفنية.</p>
            </div>
            
            <div className="flex items-start">
              <div className="text-primary mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700">قم بترقيم وتوثيق القطع المغلفة وأجزائها لتسهيل عملية التركيب لاحقًا.</p>
            </div>
          </div>
        </div>
      </div>

      {/* الأسئلة الشائعة */}
      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">الأسئلة الشائعة</h2>
        
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">هل يمكنني الحصول على خدمة التغليف فقط دون النقل؟</h3>
            <p className="text-gray-700">
              نعم، نقدم خدمة التغليف كخدمة منفصلة لمن يرغب في تغليف ممتلكاته بطريقة احترافية قبل نقلها بنفسه أو عبر شركة أخرى.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">هل يمكنكم تغليف القطع الفنية الثمينة والمقتنيات النادرة؟</h3>
            <p className="text-gray-700">
              بالتأكيد، لدينا فريق متخصص في تغليف الأعمال الفنية والمقتنيات النادرة باستخدام مواد وتقنيات متقدمة تضمن حمايتها من أي ضرر.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">كم من الوقت تستغرق عملية تغليف منزل كامل؟</h3>
            <p className="text-gray-700">
              تعتمد المدة على حجم المنزل ومحتوياته، ولكن عادة ما يمكننا تغليف منزل متوسط الحجم (3 غرف) خلال يوم واحد بفريق من 3-4 محترفين.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">هل المواد المستخدمة في التغليف صديقة للبيئة؟</h3>
            <p className="text-gray-700">
              نعم، نحرص على استخدام مواد تغليف صديقة للبيئة قابلة لإعادة التدوير كلما أمكن ذلك، مع الحفاظ على مستوى الحماية العالي الذي نقدمه.
            </p>
          </div>
        </div>
      </div>

      {/* دعوة للتواصل */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">هل أنت جاهز لتغليف ممتلكاتك بطريقة احترافية؟</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          تواصل معنا اليوم للحصول على خدمة تغليف متميزة تضمن وصول ممتلكاتك بحالة ممتازة إلى وجهتها النهائية.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <a className="bg-primary text-white hover:bg-primary-dark font-bold py-3 px-8 rounded-lg transition-colors">
              احصل على عرض سعر مجاني
            </a>
          </Link>
          <a href="tel:+966500000000" className="bg-gray-200 text-gray-800 hover:bg-gray-300 font-bold py-3 px-8 rounded-lg transition-colors">
            اتصل بنا مباشرة
          </a>
        </div>
      </div>

      {/* خدمات ذات صلة */}
      <h2 className="text-3xl font-bold mb-6">خدمات ذات صلة</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Link href="/services/assembly">
          <a className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-2">فك وتركيب الأثاث</h3>
            <p className="text-gray-600 mb-4">خدمات احترافية لفك وتركيب مختلف أنواع الأثاث بأيدي فنيين متخصصين.</p>
            <span className="text-primary font-medium">استكشف الخدمة ←</span>
          </a>
        </Link>
        
        <Link href="/services/storage">
          <a className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-2">خدمات التخزين</h3>
            <p className="text-gray-600 mb-4">حلول تخزين آمنة ومكيفة لممتلكاتك لفترات قصيرة أو طويلة الأمد.</p>
            <span className="text-primary font-medium">استكشف الخدمة ←</span>
          </a>
        </Link>
        
        <Link href="/services/corporate">
          <a className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-2">نقل المكاتب والشركات</h3>
            <p className="text-gray-600 mb-4">خدمات متكاملة لنقل المكاتب والشركات مع أدنى حد من التوقف عن العمل.</p>
            <span className="text-primary font-medium">استكشف الخدمة ←</span>
          </a>
        </Link>
      </div>
    </Layout>
  )
} 