import React from 'react'
import Layout from '../../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ImageLoader from '../../components/ImageLoader'

// خدمات التخزين
const storageServices = [
  {
    id: 'short-term',
    title: 'التخزين قصير المدى',
    description: 'حلول تخزين مؤقتة للأثاث والمقتنيات خلال فترات الانتقال أو التجديد، بأسعار تنافسية وفترات مرنة.',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  {
    id: 'long-term',
    title: 'التخزين طويل المدى',
    description: 'خدمات تخزين آمنة لفترات طويلة مع أنظمة مراقبة وحماية متطورة وأسعار خاصة للعقود السنوية.',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
  },
  {
    id: 'business-storage',
    title: 'تخزين تجاري',
    description: 'مساحات تخزين مخصصة للشركات والمؤسسات مع خدمات إدارة المخزون وإمكانية الوصول على مدار الساعة.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    id: 'specialized-storage',
    title: 'تخزين متخصص',
    description: 'حلول تخزين للعناصر الحساسة مثل الأعمال الفنية، التحف، والإلكترونيات مع ظروف تخزين مسيطر عليها.',
    icon: 'M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z'
  }
];

// مميزات مستودعاتنا
const storageFeatures = [
  {
    id: 'climate-control',
    title: 'أنظمة تحكم في درجة الحرارة والرطوبة',
    description: 'مستودعات مكيفة بالكامل مع أنظمة للتحكم في مستويات الرطوبة للحفاظ على الأثاث والمقتنيات من التلف.'
  },
  {
    id: 'security',
    title: 'أنظمة أمنية متطورة',
    description: 'مراقبة على مدار الساعة مع كاميرات عالية الدقة وأنظمة إنذار متصلة بمراكز الأمن للحماية القصوى.'
  },
  {
    id: 'pest-control',
    title: 'مكافحة الحشرات والقوارض',
    description: 'برامج دورية لمكافحة الحشرات والقوارض للحفاظ على سلامة الأثاث والمقتنيات المخزنة.'
  },
  {
    id: 'fire-protection',
    title: 'أنظمة مكافحة الحرائق',
    description: 'أنظمة متكاملة للكشف عن الحرائق ومكافحتها تعمل تلقائياً لحماية المستودع والمحتويات.'
  },
  {
    id: 'accessibility',
    title: 'إمكانية الوصول المرن',
    description: 'إمكانية الوصول إلى مقتنياتك المخزنة بسهولة خلال ساعات العمل مع خدمات وصول خاصة عند الطلب.'
  },
  {
    id: 'insurance',
    title: 'تأمين شامل',
    description: 'خيارات تأمين متعددة لتغطية الممتلكات المخزنة ضد مختلف المخاطر لراحة بالك التامة.'
  }
];

// باقات التخزين
const storagePlans = [
  {
    id: 'basic',
    title: 'الباقة الأساسية',
    price: '199 ريال',
    duration: 'شهرياً',
    space: 'حتى 10 متر مكعب',
    features: [
      'مستودع مكيف',
      'حماية أساسية',
      'مكافحة الحشرات الدورية',
      'الوصول خلال ساعات العمل'
    ],
    recommended: false
  },
  {
    id: 'premium',
    title: 'الباقة المميزة',
    price: '349 ريال',
    duration: 'شهرياً',
    space: 'حتى 20 متر مكعب',
    features: [
      'تحكم في درجة الحرارة والرطوبة',
      'أنظمة حماية متقدمة',
      'مكافحة الحشرات الشهرية',
      'الوصول المرن (12 ساعة يومياً)',
      'تأمين أساسي مشمول'
    ],
    recommended: true
  },
  {
    id: 'business',
    title: 'باقة الأعمال',
    price: 'يبدأ من 599 ريال',
    duration: 'شهرياً',
    space: 'مساحات مخصصة',
    features: [
      'مستودعات مخصصة للشركات',
      'أنظمة أمنية متطورة',
      'خدمة إدارة المخزون',
      'وصول على مدار الساعة',
      'تأمين شامل',
      'خدمة التوصيل والاستلام'
    ],
    recommended: false
  }
];

export default function StorageServicePage() {
  return (
    <Layout
      title="خدمات التخزين | فخر الخليج"
      description="خدمات تخزين آمنة ومكيفة للأثاث والمقتنيات الثمينة في جميع أنحاء المملكة العربية السعودية"
      keywords="تخزين عفش, تخزين أثاث, مستودعات آمنة, تخزين مكيف, تخزين قصير المدى, تخزين طويل المدى"
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "خدمات التخزين",
              "description": "خدمات تخزين آمنة ومكيفة للأثاث والمقتنيات الثمينة في جميع أنحاء المملكة العربية السعودية",
              "provider": {
                "@type": "Organization",
                "name": "فخر الخليج",
                "url": "https://fakhrkhaleej.com"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Saudi Arabia"
              },
              "serviceType": "خدمات التخزين",
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
          src="/images/commercial_moving_service.jpeg"
          alt="خدمات التخزين | فخر الخليج"
          width={1200}
          height={400}
          priority
          className="w-full h-full brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            خدمات التخزين الآمنة
          </h1>
          <p className="text-xl max-w-3xl text-center">
            حلول تخزين متكاملة للأثاث والمقتنيات الثمينة بأعلى معايير الأمان
          </p>
        </div>
      </div>

      {/* المقدمة */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4">خدمات تخزين آمنة ومكيفة</h2>
        <p className="text-gray-700 mb-4">
          في فخر الخليج، نقدم حلول تخزين متكاملة للأثاث والمقتنيات الثمينة في مستودعات آمنة ومكيفة 
          تضمن الحفاظ على ممتلكاتك من العوامل البيئية المختلفة والتلف.
        </p>
        <p className="text-gray-700">
          سواء كنت بحاجة لتخزين قصير المدى أثناء الانتقال أو التجديد، أو تخزين طويل المدى، 
          فإن مستودعاتنا مجهزة بأحدث أنظمة الأمان والمراقبة على مدار الساعة.
        </p>
      </div>

      {/* مميزات خدمات التخزين */}
      <h2 className="text-3xl font-bold mb-6">مميزات خدمات التخزين</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-primary text-4xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">مستودعات آمنة</h3>
          <p className="text-gray-600">
            مستودعات مؤمنة بأنظمة مراقبة متطورة وحراسة على مدار الساعة لضمان سلامة ممتلكاتك.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-primary text-4xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">مساحات متنوعة</h3>
          <p className="text-gray-600">
            مساحات تخزين متنوعة الأحجام تناسب مختلف الاحتياجات سواء للأثاث المنزلي أو التجاري.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-primary text-4xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-4.5-6.875" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">بيئة مكيفة</h3>
          <p className="text-gray-600">
            مستودعات مكيفة بدرجة حرارة ورطوبة مثالية لحماية الأثاث من التلف والتشقق والعفن.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-primary text-4xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">خطط مرنة</h3>
          <p className="text-gray-600">
            خطط تخزين مرنة تناسب احتياجاتك سواء قصيرة المدى أو طويلة المدى مع أسعار تنافسية.
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
            فريق دعم متكامل لمساعدتك في إدارة المخزون والوصول إلى مقتنياتك بسهولة عند الحاجة.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-primary text-4xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">تغليف متخصص</h3>
          <p className="text-gray-600">
            خدمات تغليف متخصصة باستخدام مواد عالية الجودة تضمن حماية الأثاث والمقتنيات أثناء فترة التخزين.
          </p>
        </div>
      </div>

      {/* أنواع التخزين */}
      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">أنواع خدمات التخزين</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <ImageLoader 
                src="/images/furniture_shipping_service.jpeg"
                alt="التخزين قصير المدى"
                width={600}
                height={300}
                className="w-full h-48 rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">التخزين قصير المدى</h3>
            <p className="text-gray-600 mb-4">
              خدمات تخزين مؤقتة مثالية أثناء الانتقال بين المنازل، أعمال التجديد، أو السفر لفترة قصيرة.
              نوفر حلول تخزين آمنة لمدة تتراوح من أسبوع إلى عدة أشهر مع إمكانية التمديد.
            </p>
            <p className="text-gray-600">
              تشمل خدماتنا التغليف، النقل، والتخزين في مستودعات مكيفة مع سهولة الوصول للمقتنيات عند الحاجة.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <ImageLoader 
                src="/images/experienced_movers_team.jpeg"
                alt="التخزين طويل المدى"
                width={600}
                height={300}
                className="w-full h-48 rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">التخزين طويل المدى</h3>
            <p className="text-gray-600 mb-4">
              حلول تخزين لفترات طويلة للأثاث والمقتنيات التي لا تحتاجها بشكل مستمر مع ضمان حمايتها من التلف.
              نقدم خيارات تخزين مرنة تبدأ من 6 أشهر إلى سنوات مع أسعار تفضيلية للعقود طويلة الأمد.
            </p>
            <p className="text-gray-600">
              نوفر خدمات صيانة دورية وفحص للمخزون لضمان بقائه في حالة ممتازة طوال فترة التخزين.
            </p>
          </div>
        </div>
      </div>

      {/* عملية التخزين */}
      <h2 className="text-3xl font-bold mb-6">عملية التخزين</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">١</div>
          <h3 className="text-lg font-bold mb-2">تقييم الاحتياجات</h3>
          <p className="text-gray-600">تقييم حجم ونوع الأثاث والمقتنيات وتحديد فترة التخزين المطلوبة لتوفير الحل الأمثل.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٢</div>
          <h3 className="text-lg font-bold mb-2">التغليف والتجهيز</h3>
          <p className="text-gray-600">تغليف الأثاث والمقتنيات باستخدام مواد عالية الجودة لحمايتها من الغبار والرطوبة والصدمات.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٣</div>
          <h3 className="text-lg font-bold mb-2">النقل والتخزين</h3>
          <p className="text-gray-600">نقل الأثاث بعناية إلى المستودعات وترتيبه بطريقة منظمة تسهل الوصول إليه عند الحاجة.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٤</div>
          <h3 className="text-lg font-bold mb-2">إدارة المخزون</h3>
          <p className="text-gray-600">توثيق وإدارة المخزون مع إمكانية الوصول إليه بسهولة وإخراجه عند انتهاء فترة التخزين.</p>
        </div>
      </div>

      {/* خدمات خاصة */}
      <div className="bg-primary text-white p-8 rounded-lg mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">تخزين المقتنيات الثمينة</h2>
            <p className="text-lg mb-4">
              نوفر خدمات تخزين خاصة للمقتنيات الثمينة والقطع الفنية والتحف والسجاد الفاخر 
              في مستودعات ذات ظروف بيئية مثالية ومستوى أمان استثنائي.
            </p>
            <p className="text-lg mb-6">
              يتم تغليف وتخزين هذه المقتنيات بواسطة متخصصين ذوي خبرة في التعامل مع القطع النادرة والثمينة.
            </p>
            <Link href="/contact">
              <a className="bg-white text-primary py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors font-bold inline-block">
                استشارة للمقتنيات الثمينة
              </a>
            </Link>
          </div>
          <div className="md:w-1/3 relative h-64 w-full rounded-lg overflow-hidden">
            <ImageLoader 
              src="/images/professional_movers_company.jpeg" 
              alt="تخزين المقتنيات الثمينة" 
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
            <h3 className="text-xl font-bold mb-2">كيف يمكنني الوصول إلى مقتنياتي أثناء فترة التخزين؟</h3>
            <p className="text-gray-700">
              يمكنك الوصول إلى مقتنياتك خلال ساعات العمل العادية مع تنسيق مسبق. نوفر خدمة استرجاع المقتنيات وتوصيلها إليك عند الطلب.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">هل المستودعات مؤمنة ضد الحرائق والسرقة؟</h3>
            <p className="text-gray-700">
              نعم، مستودعاتنا مجهزة بأنظمة إنذار متطورة ضد الحرائق والسرقة مع مراقبة على مدار الساعة وتأمين شامل على جميع المقتنيات المخزنة.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">ما هي أسعار خدمات التخزين؟</h3>
            <p className="text-gray-700">
              تعتمد الأسعار على حجم المساحة المطلوبة ومدة التخزين. نقدم خططًا مرنة تبدأ من التخزين الأسبوعي إلى العقود السنوية مع خصومات للمدد الطويلة.
            </p>
          </div>
        </div>
      </div>

      {/* دعوة للتواصل */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">هل تحتاج إلى حلول تخزين آمنة؟</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          تواصل مع فريقنا اليوم للحصول على استشارة مجانية حول خدمات التخزين المناسبة لاحتياجاتك.
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