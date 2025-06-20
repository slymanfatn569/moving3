import React from 'react'
import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import OptimizedImage from '../../components/OptimizedImage'

// خدمات فك وتركيب الأثاث
const assemblyServices = [
  {
    id: 'furniture-disassembly',
    title: 'فك الأثاث المنزلي',
    description: 'خدمة فك جميع أنواع الأثاث المنزلي بدقة عالية واحترافية، مع ترقيم القطع وتوثيقها لضمان سهولة التركيب.',
    image: '/images/furniture_assembly_service.jpeg'
  },
  {
    id: 'furniture-assembly',
    title: 'تركيب الأثاث المنزلي',
    description: 'إعادة تركيب الأثاث في موقعه الجديد مع ضمان التثبيت الآمن وضبط الارتفاعات والمستويات بشكل دقيق.',
    image: '/images/home_furniture_mover.jpeg'
  },
  {
    id: 'ikea-assembly',
    title: 'تركيب أثاث ايكيا',
    description: 'خبرة متخصصة في تركيب جميع أنواع أثاث ايكيا وفقًا لتعليمات الشركة المصنعة، مع ضمان الجودة والمتانة.',
    image: '/images/furniture_assembly_service.jpeg'
  },
  {
    id: 'complex-furniture',
    title: 'فك وتركيب الأثاث المعقد',
    description: 'تعامل احترافي مع القطع المعقدة مثل غرف النوم الكاملة، المطابخ، خزائن الحائط، والأسرّة متعددة الوظائف.',
    image: '/images/expert_furniture_movers.jpeg'
  }
];

// مميزات الخدمة
const serviceFeatures = [
  {
    id: 'professional-team',
    title: 'فريق فني متخصص',
    description: 'يقوم بالخدمة فنيون مدربون على أعلى مستوى مع خبرة لا تقل عن 5 سنوات في مجال فك وتركيب مختلف أنواع الأثاث.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    id: 'specialized-tools',
    title: 'معدات وأدوات متخصصة',
    description: 'استخدام أحدث المعدات والأدوات المتخصصة لفك وتركيب مختلف أنواع الأثاث بدقة عالية ودون إحداث أي ضرر.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
  },
  {
    id: 'documentation',
    title: 'توثيق وترقيم',
    description: 'نظام توثيق دقيق لجميع القطع وترقيمها أثناء الفك لضمان سهولة التركيب وعدم فقدان أي جزء أثناء النقل.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    id: 'warranty',
    title: 'ضمان الخدمة',
    description: 'نقدم ضمانًا على جميع خدمات الفك والتركيب لمدة 30 يومًا، مع خدمة متابعة للتأكد من سلامة التركيب ورضا العميل.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  }
];

// خدمات إضافية
const additionalServices = [
  {
    id: 'furniture-repairs',
    title: 'إصلاحات بسيطة للأثاث',
    description: 'خدمات إصلاح وصيانة بسيطة للأثاث مثل تثبيت المفصلات، استبدال الأرجل، وإصلاح الأدراج المتضررة.'
  },
  {
    id: 'wall-mounting',
    title: 'تثبيت الوحدات على الحائط',
    description: 'خدمات تثبيت الرفوف، وحدات التلفاز، اللوحات الفنية الثقيلة، والمرايا على الحائط بشكل آمن.'
  },
  {
    id: 'adjustments',
    title: 'ضبط وتعديل الأثاث',
    description: 'ضبط ارتفاع ومستوى الأثاث، وتعديل الأبواب والأدراج لضمان عملها بسلاسة وبشكل صحيح.'
  }
];

export default function FurnitureAssemblyPage() {
  return (
    <Layout
      title="فك وتركيب الأثاث | فخر الخليج"
      description="خدمات فك وتركيب الأثاث الاحترافية في جميع أنحاء المملكة العربية السعودية. فريق من الفنيين المتخصصين لتركيب جميع أنواع الأثاث بدقة وإتقان."
      keywords="فك الأثاث، تركيب الأثاث، فك وتركيب ايكيا، تركيب غرف نوم، تركيب مطابخ، تركيب خزائن، تركيب اثاث مكتبي"
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "فك وتركيب الأثاث",
              "description": "خدمات فك وتركيب الأثاث الاحترافية في جميع أنحاء المملكة العربية السعودية",
              "provider": {
                "@type": "Organization",
                "name": "فخر الخليج",
                "url": "https://fakhrkhaleej.com"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Saudi Arabia"
              },
              "serviceType": "خدمات فك وتركيب الأثاث",
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
        <OptimizedImage
          src="/images/experienced_movers_team.jpeg"
          alt="خدمات فك وتركيب الأثاث | فخر الخليج"
          width={1200}
          height={400}
          priority
          className="w-full h-full brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            خدمات فك وتركيب الأثاث
          </h1>
          <p className="text-xl max-w-3xl text-center">
            فريق متخصص من الفنيين ذوي الخبرة في فك وتركيب جميع أنواع الأثاث
          </p>
        </div>
      </div>

      {/* المقدمة */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4">خدمات فك وتركيب احترافية</h2>
        <p className="text-gray-700 mb-4">
          في فخر الخليج، نقدم خدمات فك وتركيب الأثاث بأيدي فريق من الفنيين المتخصصين ذوي الخبرة 
          في التعامل مع جميع أنواع الأثاث المنزلي والمكتبي والتجاري.
        </p>
        <p className="text-gray-700">
          سواء كنت تنتقل إلى منزل جديد، تجدد مساحتك الحالية، أو اشتريت أثاثًا جديدًا، 
          يمكنك الاعتماد على فريقنا لتنفيذ مهام الفك والتركيب بدقة واحترافية تامة.
        </p>
      </div>

      {/* أنواع خدمات الفك والتركيب */}
      <h2 className="text-3xl font-bold mb-6">خدمات فك وتركيب الأثاث</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md flex">
          <div className="flex-shrink-0 ml-4">
            <div className="text-primary p-3 bg-primary bg-opacity-10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">تركيب أثاث المنازل</h3>
            <p className="text-gray-600">
              تركيب جميع أنواع الأثاث المنزلي بما في ذلك غرف النوم، غرف المعيشة، المطابخ، الخزائن، وقطع الديكور المختلفة.
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
            <h3 className="text-xl font-bold mb-2">تركيب أثاث المكاتب</h3>
            <p className="text-gray-600">
              تركيب المكاتب، الكراسي، خزائن الملفات، طاولات الاجتماعات، قواطع المكاتب، وغيرها من الأثاث المكتبي.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex">
          <div className="flex-shrink-0 ml-4">
            <div className="text-primary p-3 bg-primary bg-opacity-10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">تركيب أثاث إيكيا</h3>
            <p className="text-gray-600">
              خبرة خاصة في تركيب منتجات إيكيا المختلفة وفقًا لتعليمات الشركة المصنعة وبسرعة ودقة عالية.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex">
          <div className="flex-shrink-0 ml-4">
            <div className="text-primary p-3 bg-primary bg-opacity-10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">تركيب المطابخ</h3>
            <p className="text-gray-600">
              تركيب جميع أنواع المطابخ الجاهزة أو المصنعة حسب الطلب مع تثبيت الرفوف والأدراج والواجهات.
            </p>
          </div>
        </div>
      </div>

      {/* مميزات الخدمة */}
      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">مميزات خدمات الفك والتركيب</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">فنيون متخصصون</h3>
            <p className="text-gray-600">
              فريق من الفنيين المتخصصين ذوي الخبرة في التعامل مع جميع أنواع الأثاث والتجهيزات.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">دقة وإتقان</h3>
            <p className="text-gray-600">
              خدمات دقيقة ومتقنة مع ضمان تركيب جميع القطع بشكل صحيح وآمن وفقًا لتعليمات الشركة المصنعة.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">سرعة في التنفيذ</h3>
            <p className="text-gray-600">
              خدمة سريعة وفعالة مع الالتزام بمواعيد التسليم المتفق عليها دون المساس بالجودة.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">معدات متطورة</h3>
            <p className="text-gray-600">
              استخدام أحدث المعدات والأدوات المتخصصة في فك وتركيب الأثاث بمختلف أنواعه.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">أسعار تنافسية</h3>
            <p className="text-gray-600">
              خدمات بأسعار تنافسية مع تقديم عروض خاصة للمشاريع الكبيرة والعملاء الدائمين.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">ضمان الخدمة</h3>
            <p className="text-gray-600">
              ضمان على جميع أعمال التركيب مع خدمة ما بعد البيع لحل أي مشكلات قد تطرأ.
            </p>
          </div>
        </div>
      </div>

      {/* مراحل العمل */}
      <h2 className="text-3xl font-bold mb-6">مراحل فك وتركيب الأثاث</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">١</div>
          <h3 className="text-lg font-bold mb-2">المعاينة والتقييم</h3>
          <p className="text-gray-600">تقييم الأثاث وتحديد المتطلبات والأدوات اللازمة للفك أو التركيب بشكل صحيح.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٢</div>
          <h3 className="text-lg font-bold mb-2">فك الأثاث</h3>
          <p className="text-gray-600">فك الأثاث بعناية مع ترقيم جميع القطع وتصنيفها لضمان سهولة إعادة التركيب.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٣</div>
          <h3 className="text-lg font-bold mb-2">التغليف والنقل</h3>
          <p className="text-gray-600">تغليف القطع المفككة بمواد مناسبة لحمايتها من الخدوش والأضرار أثناء النقل.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">٤</div>
          <h3 className="text-lg font-bold mb-2">إعادة التركيب</h3>
          <p className="text-gray-600">تركيب الأثاث في الموقع الجديد مع التأكد من ثباته واستقراره وسلامة جميع الوصلات.</p>
        </div>
      </div>

      {/* أنواع الأثاث */}
      <div className="bg-primary text-white p-8 rounded-lg mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">تخصص في جميع أنواع الأثاث</h2>
            <p className="text-lg mb-4">
              يمكننا فك وتركيب جميع أنواع الأثاث مهما كان تعقيده، بما في ذلك:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>غرف النوم وخزائن الملابس</li>
              <li>المطابخ وخزائن المطبخ</li>
              <li>أثاث المعيشة والصالونات</li>
              <li>أثاث المكاتب والشركات</li>
              <li>طاولات الاجتماعات وقواطع المكاتب</li>
              <li>الأرفف والمكتبات</li>
              <li>الأثاث المستورد والأثاث المحلي</li>
            </ul>
            <Link href="/contact" passHref>
              <a className="bg-white text-primary py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors font-bold inline-block">
                طلب خدمة فك وتركيب
              </a>
            </Link>
          </div>
          <div className="md:w-1/3 relative h-64 w-full rounded-lg overflow-hidden">
            <OptimizedImage 
              src="/images/professional_movers_company.jpeg" 
              alt="تخصص في جميع أنواع الأثاث" 
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
            <h3 className="text-xl font-bold mb-2">ما هي تكلفة فك وتركيب الأثاث؟</h3>
            <p className="text-gray-700">
              تختلف التكلفة حسب نوع وحجم الأثاث وتعقيد عملية الفك والتركيب. نقدم تقييم مجاني وعرض سعر مفصل بعد معاينة الأثاث.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">هل توفرون قطع غيار للأثاث؟</h3>
            <p className="text-gray-700">
              نعم، نوفر قطع غيار أساسية مثل البراغي والمفصلات والمقابض وغيرها من القطع التي قد تتلف أثناء الفك أو التركيب.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">هل يمكنكم تعديل الأثاث ليناسب المكان الجديد؟</h3>
            <p className="text-gray-700">
              نعم، نقدم خدمات تعديل وتكييف الأثاث ليناسب المساحات الجديدة، مثل تقصير أرجل الطاولات، تعديل أبعاد الخزائن، وتغيير الأبواب.
            </p>
          </div>
        </div>
      </div>

      {/* دعوة للتواصل */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">هل تحتاج إلى خدمات فك وتركيب الأثاث؟</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          تواصل مع فريقنا اليوم للحصول على خدمة احترافية في فك وتركيب الأثاث بأيدي فنيين متخصصين.
        </p>
        <Link href="/contact" passHref>
          <a className="bg-primary text-white hover:bg-primary-dark font-bold py-3 px-8 rounded-lg transition-colors">
            احصل على عرض سعر مجاني
          </a>
        </Link>
      </div>
    </Layout>
  )
} 