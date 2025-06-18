import React from 'react'
import Layout from '../../components/Layout'
import Head from 'next/head'
import StaticImage from '../../components/StaticImage'
import Link from 'next/link'

// خدمات النقل للشركات
const corporateServices = [
  {
    id: 'office-furniture',
    title: 'نقل أثاث المكاتب',
    description: 'خدمات متخصصة في نقل المكاتب وقطع الأثاث المكتبي مع الحفاظ على حالتها وترتيبها للتركيب السريع.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    id: 'tech-equipment',
    title: 'نقل المعدات التقنية',
    description: 'نقل آمن للأجهزة الإلكترونية والحواسيب وأنظمة الشبكات مع ضمان سلامة البيانات والمكونات الحساسة.',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
  },
  {
    id: 'archives',
    title: 'نقل الأرشيف والوثائق',
    description: 'خدمة نقل الوثائق والملفات الورقية والأرشيف بطريقة منظمة ومؤمنة مع تصنيف وترقيم لضمان سهولة الوصول.',
    icon: 'M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2'
  },
  {
    id: 'server-room',
    title: 'نقل غرف السيرفرات',
    description: 'خدمات متخصصة لنقل غرف السيرفرات وأنظمة تكنولوجيا المعلومات مع تأمين خاص للأجهزة الحساسة.',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'
  }
];

// اهم الشركات التي قمنا بخدمتها
const clientReferences = [
  {
    name: 'شركة التطوير العقاري الكبرى',
    position: 'المدير التنفيذي',
    quote: 'كانت عملية نقل مكاتبنا الرئيسية تحديًا كبيرًا، لكن فريق فخر الخليج قدم خدمة استثنائية مع الالتزام بالمواعيد وتقليل فترة توقف العمل.',
    industry: 'العقارات'
  },
  {
    name: 'مجموعة الاتصالات السعودية',
    position: 'مدير الخدمات اللوجستية',
    quote: 'نقل مركز البيانات الخاص بنا كان يتطلب دقة عالية وتخطيط محكم، وقد أتم فريق فخر الخليج المهمة بنجاح تام ودون أي انقطاع في الخدمة.',
    industry: 'الاتصالات'
  }
];

export default function CorporateServicePage() {
  return (
    <Layout
      title="خدمات نقل المكاتب والشركات في السعودية | فخر الخليج"
      description="خدمات احترافية متخصصة في نقل المكاتب والشركات مع ضمان استمرارية العمل وتقليل فترات التوقف. خدمات نقل للمعدات التقنية والأثاث المكتبي والأرشيف."
      keywords="نقل مكاتب، نقل شركات، نقل معدات تقنية، نقل أثاث مكتبي، نقل سيرفرات، شركة نقل عفش في جدة، نقل أرشيف"
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "خدمات نقل المكاتب والشركات",
              "description": "خدمات احترافية متخصصة في نقل المكاتب والشركات مع ضمان استمرارية العمل وتقليل فترات التوقف",
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
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "خدمات نقل المكاتب",
                "itemListElement": corporateServices.map((service, index) => ({
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
        <StaticImage
          src="/images/office_moving_company.jpeg"
          alt="خدمات نقل المكاتب والشركات في السعودية | فخر الخليج"
          width={1200}
          height={400}
          style={{ objectFit: 'cover' }}
          className="w-full h-full brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            خدمات نقل المكاتب والشركات
          </h1>
          <p className="text-xl max-w-3xl text-center">
            حلول متكاملة لنقل مقر عملك بكفاءة عالية وأقل تأثير على سير العمل
          </p>
        </div>
      </div>

      {/* المقدمة */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4">نقل أعمالك بكفاءة واحترافية</h2>
        <p className="text-gray-700 mb-4">
          في فخر الخليج، نقدم حلولاً متكاملة لنقل المكاتب والشركات مصممة خصيصًا لتلبية الاحتياجات الفريدة للأعمال التجارية. 
          نحن نفهم أهمية استمرارية العمل وتقليل فترات التوقف أثناء عملية النقل.
        </p>
        <p className="text-gray-700">
          تشمل خدماتنا التخطيط المسبق، جدولة زمنية دقيقة، تفكيك ونقل وإعادة تركيب الأثاث المكتبي، التعامل بحذر مع المعدات التقنية، 
          ونقل آمن للوثائق والملفات. كل ذلك مع مراعاة أعلى معايير الجودة والسرعة.
        </p>
      </div>

      {/* ميزات الخدمة */}
      <h2 className="text-3xl font-bold mb-6 text-center">لماذا تختار خدماتنا لنقل مقر عملك؟</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md flex">
          <div className="text-primary mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">تخطيط زمني دقيق</h3>
            <p className="text-gray-600">
              نقدم خطة زمنية مفصلة تضمن إتمام عملية النقل في الموعد المحدد مع تقليل فترات توقف عملك للحد الأدنى.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex">
          <div className="text-primary mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">تعامل آمن مع المعدات التقنية</h3>
            <p className="text-gray-600">
              فريق متخصص للتعامل مع الأجهزة الإلكترونية والحساسة باستخدام مواد تغليف خاصة وصناديق مقاومة للصدمات.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex">
          <div className="text-primary mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">نظام توثيق وترقيم</h3>
            <p className="text-gray-600">
              نستخدم نظاماً دقيقاً لتوثيق وترقيم جميع العناصر أثناء النقل لضمان إعادة تنظيمها بنفس الترتيب في المقر الجديد.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex">
          <div className="text-primary mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">فريق متخصص</h3>
            <p className="text-gray-600">
              يعمل على خدمتك فريق متخصص في نقل المكاتب والشركات، مدرب على أعلى مستوى لضمان جودة الخدمة وكفاءتها.
            </p>
          </div>
        </div>
      </div>

      {/* الخدمات المتخصصة */}
      <h2 className="text-3xl font-bold mb-6">خدماتنا المتخصصة لنقل الشركات</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {corporateServices.map(service => (
          <div className="bg-white p-6 rounded-lg shadow-md" key={service.id}>
            <div className="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
          </div>
        ))}
      </div>

      {/* عملية النقل */}
      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">عملية نقل المكاتب والشركات</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">١</div>
            <h3 className="text-lg font-bold mb-2">التقييم والتخطيط</h3>
            <p className="text-gray-600">زيارة موقعك لتقييم الاحتياجات ووضع خطة نقل مفصلة تناسب طبيعة عملك.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٢</div>
            <h3 className="text-lg font-bold mb-2">الجدولة والإعداد</h3>
            <p className="text-gray-600">تحديد جدول زمني دقيق وإعداد المواد اللازمة للتغليف والتعبئة بشكل مناسب.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٣</div>
            <h3 className="text-lg font-bold mb-2">الفك والتغليف</h3>
            <p className="text-gray-600">فك الأثاث وتغليف المعدات والملفات بطريقة احترافية مع توثيق وترقيم كل قطعة.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٤</div>
            <h3 className="text-lg font-bold mb-2">النقل والتوصيل</h3>
            <p className="text-gray-600">نقل جميع المحتويات إلى الموقع الجديد باستخدام مركبات مجهزة خصيصًا لنقل المكاتب.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٥</div>
            <h3 className="text-lg font-bold mb-2">التركيب والتنظيم</h3>
            <p className="text-gray-600">إعادة تركيب وتنظيم المكتب في الموقع الجديد حسب المخططات والتصميم المتفق عليه.</p>
          </div>
        </div>
      </div>

      {/* توصيات العملاء */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">ماذا يقول عملاؤنا</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientReferences.map((client, index) => (
            <div className="bg-white p-6 rounded-lg shadow-md" key={index}>
              <div className="flex items-center mb-4">
                <div className="mr-4 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {client.name[0]}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{client.name}</h3>
                  <p className="text-gray-600 text-sm">{client.position} | {client.industry}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{client.quote}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* الأسئلة الشائعة */}
      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">الأسئلة الشائعة</h2>
        
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">كم تستغرق عملية نقل مكتب متوسط الحجم؟</h3>
            <p className="text-gray-700">
              تعتمد المدة على حجم المكتب وتعقيد المعدات، ولكن في المتوسط، يمكن إتمام نقل مكتب متوسط الحجم (حتى 20 موظف) خلال 48-72 ساعة من بداية الفك وحتى إتمام التركيب في الموقع الجديد.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">هل يمكن نقل المكتب خلال عطلة نهاية الأسبوع لتجنب تعطيل العمل؟</h3>
            <p className="text-gray-700">
              نعم، نقدم خدمات النقل في عطلات نهاية الأسبوع والإجازات الرسمية، وهي فترة مثالية لنقل المكاتب لتقليل تأثير عملية النقل على سير العمل اليومي.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">كيف تتم حماية البيانات والمعلومات السرية أثناء النقل؟</h3>
            <p className="text-gray-700">
              نحن نلتزم باتفاقيات السرية ونستخدم نظامًا آمنًا لنقل الوثائق والملفات السرية في حاويات مغلقة ومؤمنة. كما يمكننا التنسيق مع فريق تكنولوجيا المعلومات الخاص بكم لضمان أمان البيانات الإلكترونية.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">هل توفرون خدمات التخزين المؤقت أثناء عملية النقل؟</h3>
            <p className="text-gray-700">
              نعم، نوفر مستودعات آمنة ومكيفة للتخزين المؤقت للأثاث والمعدات المكتبية إذا كان هناك فجوة زمنية بين إخلاء المكتب القديم والانتقال إلى المكتب الجديد.
            </p>
          </div>
        </div>
      </div>

      {/* دعوة للتواصل */}
      <div className="bg-primary text-white p-8 rounded-lg mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">هل أنت مستعد لنقل مكتبك بسلاسة؟</h2>
            <p className="text-lg mb-6">
              فريقنا من الخبراء جاهز لمساعدتك في التخطيط ونقل مكتبك أو شركتك بطريقة احترافية تضمن استمرارية عملك بأقل قدر من الانقطاع.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <a className="bg-white text-primary py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors font-bold inline-block">
                  احصل على عرض سعر مجاني
                </a>
              </Link>
              <a href="tel:+966500000000" className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition-colors font-bold inline-block">
                اتصل بنا مباشرة
              </a>
            </div>
          </div>
          <div className="md:w-1/3">
            <StaticImage 
              src="/images/moving_company_professional.jpeg" 
              alt="خدمة نقل المكاتب المتخصصة" 
              width={400}
              height={300}
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* خدمات ذات صلة */}
      <h2 className="text-3xl font-bold mb-6">خدمات ذات صلة</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Link href="/services/packing">
          <a className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-2">خدمات التغليف المتخصصة</h3>
            <p className="text-gray-600 mb-4">تغليف احترافي للمعدات والأثاث المكتبي باستخدام مواد عالية الجودة.</p>
            <span className="text-primary font-medium">استكشف الخدمة ←</span>
          </a>
        </Link>
        
        <Link href="/services/storage">
          <a className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-2">خدمات التخزين</h3>
            <p className="text-gray-600 mb-4">حلول تخزين آمنة ومكيفة للأثاث والمعدات المكتبية لفترات قصيرة أو طويلة.</p>
            <span className="text-primary font-medium">استكشف الخدمة ←</span>
          </a>
        </Link>
        
        <Link href="/services/assembly">
          <a className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-2">فك وتركيب الأثاث</h3>
            <p className="text-gray-600 mb-4">خدمات احترافية لفك وتركيب الأثاث المكتبي المعقد بمهارة عالية.</p>
            <span className="text-primary font-medium">استكشف الخدمة ←</span>
          </a>
        </Link>
      </div>
    </Layout>
  )
} 