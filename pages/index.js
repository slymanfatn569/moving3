import React, { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/blog'
import BlogCard from '../components/BlogCard'
import Head from 'next/head'
import OptimizedImage from '../components/OptimizedImage'
import { useRouter } from 'next/router'
import SEO from '../components/SEO'

// مكون الأرقام والإحصائيات
const StatsSection = () => {
  const [mounted, setMounted] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    moves: 0,
    experience: 0,
    cities: 0
  });

  useEffect(() => {
    setMounted(true);
    const targets = {
      clients: 2500,
      moves: 15000,
      experience: 15,
      cities: 50
    };

    const duration = 2000; // مدة العد بالميللي ثانية
    const steps = 100;
    const stepDuration = duration / steps;

    Object.keys(targets).forEach(key => {
      const target = targets[key];
      const increment = target / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(Math.ceil(increment * step), target);
        setCounters(prev => ({ ...prev, [key]: current }));

        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, []);

  // عرض القيم الثابتة أثناء SSR ثم تفعيل العداد بعد mount
  const displayCounters = mounted ? counters : {
    clients: 2500,
    moves: 15000,
    experience: 15,
    cities: 50
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">أرقامنا تتحدث عنا</h2>
          <p className="text-xl text-white/90">سنوات من الخبرة والثقة في خدمة عملائنا الكرام</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">{displayCounters.clients.toLocaleString()}+</div>
            <div className="text-lg text-white/90">عميل راضي</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">{displayCounters.moves.toLocaleString()}+</div>
            <div className="text-lg text-white/90">عملية نقل</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">{displayCounters.experience}+</div>
            <div className="text-lg text-white/90">سنة خبرة</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">{displayCounters.cities}+</div>
            <div className="text-lg text-white/90">مدينة نخدمها</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// مكون العملية خطوة بخطوة
const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "طلب الخدمة",
      description: "اتصل بنا أو احجز عبر الموقع للحصول على استشارة مجانية وتقدير للتكلفة",
      icon: "📞"
    },
    {
      number: 2,
      title: "المعاينة والتقييم",
      description: "يقوم فريقنا بزيارة الموقع لتقييم الأثاث ووضع خطة النقل المناسبة",
      icon: "🔍"
    },
    {
      number: 3,
      title: "التغليف الاحترافي",
      description: "نقوم بتغليف جميع القطع باستخدام أفضل مواد التغليف لضمان سلامتها",
      icon: "📦"
    },
    {
      number: 4,
      title: "النقل الآمن",
      description: "ننقل أثاثك بأمان إلى الموقع الجديد باستخدام شاحناتنا المجهزة",
      icon: "🚛"
    },
    {
      number: 5,
      title: "التركيب والترتيب",
      description: "نقوم بفك التغليف وتركيب الأثاث وترتيبه في الأماكن المطلوبة",
      icon: "🔧"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">كيف تتم عملية النقل؟</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نتبع منهجية واضحة ومنظمة لضمان نقل أثاثك بأقصى درجات الأمان والكفاءة
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 transform -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg text-center relative z-10 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home({ featuredPosts }) {
  const router = useRouter();
  
  const services = [
    { 
      id: 1, 
      title: 'نقل الشركات والمكاتب', 
      description: 'حلول نقل متكاملة للشركات والمؤسسات مع ضمان الاستمرارية في العمل وتقليل فترة التوقف', 
      image: '/images/professional_movers_company.jpeg',
      link: '/services/corporate',
      icon: '🏢'
    },
    { 
      id: 2, 
      title: 'خدمات التغليف المتخصصة', 
      description: 'تغليف احترافي وآمن للأثاث والمقتنيات الثمينة باستخدام أفضل مواد التغليف', 
      image: '/images/commercial_moving_service.jpeg',
      link: '/services/packing',
      icon: '📦'
    },
    { 
      id: 3, 
      title: 'فك وتركيب الأثاث', 
      description: 'خدمات فك وتركيب احترافية للأثاث المنزلي والمكتبي مع الحفاظ على سلامته', 
      image: '/images/experienced_movers_team.jpeg',
      link: '/services/assembly',
      icon: '🔧'
    },
    { 
      id: 4, 
      title: 'التخزين الآمن', 
      description: 'خدمات تخزين آمنة للأثاث والمقتنيات في مستودعات مجهزة بأحدث أنظمة الحماية والرقابة', 
      image: '/images/furniture_shipping_service.jpeg',
      link: '/services/storage',
      icon: '🏪'
    },
  ];
  
  const whyChooseUs = [
    { 
      id: 1, 
      title: 'فريق محترف',
      description: 'فريقنا مدرب على أعلى مستوى للتعامل مع جميع أنواع الأثاث والمقتنيات بعناية فائقة',
      icon: '👥',
      color: 'bg-blue-500'
    },
    { 
      id: 2, 
      title: 'معدات حديثة',
      description: 'نستخدم أحدث المعدات والتقنيات لضمان سلامة وكفاءة عملية النقل من البداية إلى النهاية',
      icon: '⚙️',
      color: 'bg-green-500'
    },
    { 
      id: 3, 
      title: 'أسطول نقل متكامل',
      description: 'نمتلك أسطول نقل متكامل من الشاحنات المجهزة خصيصًا لنقل الأثاث والعفش بأمان',
      icon: '🚛',
      color: 'bg-yellow-500'
    },
    { 
      id: 4, 
      title: 'ضمان على الخدمة',
      description: 'نقدم ضمانًا على جميع خدماتنا لمنحك راحة البال والثقة الكاملة في اختيارك لنا',
      icon: '🛡️',
      color: 'bg-purple-500'
    },
    { 
      id: 5, 
      title: 'أسعار تنافسية',
      description: 'نقدم أسعارًا تنافسية مع الحفاظ على أعلى معايير الجودة والاحترافية في تقديم الخدمة',
      icon: '💰',
      color: 'bg-red-500'
    },
    { 
      id: 6, 
      title: 'خدمة على مدار الساعة',
      description: 'فريق خدمة العملاء متاح على مدار الساعة للإجابة على استفساراتك وتلبية احتياجاتك',
      icon: '🕐',
      color: 'bg-indigo-500'
    },
  ];

  return (
    <Layout>
      <SEO 
        title="خدمات نقل العفش والأثاث الاحترافية في المملكة العربية السعودية"
        description="شركة رائدة في خدمات نقل العفش والأثاث. نقدم حلول نقل شاملة وآمنة للمنازل والمكاتب في جميع أنحاء المملكة مع فريق محترف وأسعار تنافسية."
        keywords="نقل عفش، نقل أثاث، شركة نقل، نقل منازل، نقل مكاتب، المملكة العربية السعودية، الرياض، جدة، الدمام"
      />
      
      <Head>
        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;  /* Chrome, Safari, Opera */
          }
          .no-scrollbar {
            -ms-overflow-style: none;  /* Internet Explorer, Edge */
            scrollbar-width: none;  /* Firefox */
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          /* Slider scroll animation */
          .slider-container {
            scroll-behavior: smooth;
          }
          .slider-container:hover {
            cursor: grab;
          }
          .slider-container:active {
            cursor: grabbing;
          }
        `}</style>
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative h-[700px] w-full">
          <OptimizedImage
            src="/images/professional_movers_company.jpeg"
            alt="خدمات نقل العفش والأثاث المتخصصة"
            width={1920}
            height={1080}
            priority
            className="w-full h-full brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                خدمات نقل العفش والأثاث
                <span className="block text-accent">المتخصصة</span>
            </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed">
                حلول نقل عفش متكاملة وموثوقة للأفراد والشركات والمؤسسات 
                في جميع أنحاء المملكة العربية السعودية
            </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/services" passHref>
                  <a className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    🔍 استكشاف خدماتنا
                </a>
              </Link>
              <Link href="/contact" passHref>
                  <a className="bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    📞 طلب استشارة مجانية
                </a>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الأرقام والإحصائيات */}
      <Suspense fallback={
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">أرقامنا تتحدث عنا</h2>
              <p className="text-xl text-white/90">سنوات من الخبرة والثقة في خدمة عملائنا الكرام</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">2500+</div>
                <div className="text-lg text-white/90">عميل راضي</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">15000+</div>
                <div className="text-lg text-white/90">عملية نقل</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-lg text-white/90">سنة خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-lg text-white/90">مدينة نخدمها</div>
              </div>
            </div>
          </div>
        </section>
      }>
        <StatsSection />
      </Suspense>

      {/* مناطق خدماتنا الشاملة */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 rounded-full px-6 py-2 mb-4">
              <span className="text-primary font-semibold text-sm">🏙️ مناطق خدماتنا</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              نخدم جميع أنحاء المملكة
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              خدمات نقل العفش المتخصصة متوفرة في أهم المدن والأحياء السكنية والتجارية 
              عبر المملكة العربية السعودية مع فريق محترف وخبرة تمتد لأكثر من 15 عامًا
            </p>
          </div>

          {/* إحصائيات المناطق */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                15
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">منطقة في جدة</h3>
              <p className="text-gray-600 text-sm">من الأحياء الراقية إلى المناطق التجارية</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">منطقة في الرياض</h3>
              <p className="text-gray-600 text-sm">العاصمة وأحياؤها المتنوعة</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">منطقة في الدمام</h3>
              <p className="text-gray-600 text-sm">المنطقة الشرقية والمناطق الساحلية</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                50+
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">مدينة أخرى</h3>
              <p className="text-gray-600 text-sm">نصل إلى جميع أنحاء المملكة</p>
            </div>
          </div>

          {/* قائمة المناطق بحسب المدن */}
          <div className="space-y-12">
            {/* جدة */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold ml-6">
                  🏙️
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">مناطق خدماتنا في جدة</h3>
                  <p className="text-gray-600 text-lg">عروس البحر الأحمر - 15 منطقة متميزة</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <Link href="/areas/al-rawdah" passHref>
                  <a className="group bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-500 hover:to-blue-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🏡</div>
                    <div className="font-bold group-hover:text-white">الروضة</div>
                    <div className="text-sm text-gray-600 group-hover:text-blue-100">حي سكني راقي</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-hamra" passHref>
                  <a className="group bg-gradient-to-br from-red-50 to-red-100 hover:from-red-500 hover:to-red-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🏢</div>
                    <div className="font-bold group-hover:text-white">الحمراء</div>
                    <div className="text-sm text-gray-600 group-hover:text-red-100">حي مركزي</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-andalus" passHref>
                  <a className="group bg-gradient-to-br from-green-50 to-green-100 hover:from-green-500 hover:to-green-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🌴</div>
                    <div className="font-bold group-hover:text-white">الأندلس</div>
                    <div className="text-sm text-gray-600 group-hover:text-green-100">حي نابض</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-zahra" passHref>
                  <a className="group bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-500 hover:to-purple-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🌺</div>
                    <div className="font-bold group-hover:text-white">الزهراء</div>
                    <div className="text-sm text-gray-600 group-hover:text-purple-100">حي عائلي</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-salamah" passHref>
                  <a className="group bg-gradient-to-br from-teal-50 to-teal-100 hover:from-teal-500 hover:to-teal-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🏘️</div>
                    <div className="font-bold group-hover:text-white">السلامة</div>
                    <div className="text-sm text-gray-600 group-hover:text-teal-100">حي متطور</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-shati" passHref>
                  <a className="group bg-gradient-to-br from-cyan-50 to-cyan-100 hover:from-cyan-500 hover:to-cyan-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🏖️</div>
                    <div className="font-bold group-hover:text-white">الشاطئ</div>
                    <div className="text-sm text-gray-600 group-hover:text-cyan-100">حي ساحلي</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-safa" passHref>
                  <a className="group bg-gradient-to-br from-indigo-50 to-indigo-100 hover:from-indigo-500 hover:to-indigo-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🏛️</div>
                    <div className="font-bold group-hover:text-white">الصفا</div>
                    <div className="text-sm text-gray-600 group-hover:text-indigo-100">حي راقي</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-khalidiyah" passHref>
                  <a className="group bg-gradient-to-br from-yellow-50 to-yellow-100 hover:from-yellow-500 hover:to-yellow-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🏪</div>
                    <div className="font-bold group-hover:text-white">الخالدية</div>
                    <div className="text-sm text-gray-600 group-hover:text-yellow-100">حي مزدحم</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-rihab" passHref>
                  <a className="group bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-500 hover:to-pink-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🌸</div>
                    <div className="font-bold group-hover:text-white">الرحاب</div>
                    <div className="text-sm text-gray-600 group-hover:text-pink-100">حي حديث</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-nahdah" passHref>
                  <a className="group bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-500 hover:to-orange-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🌅</div>
                    <div className="font-bold group-hover:text-white">النهضة</div>
                    <div className="text-sm text-gray-600 group-hover:text-orange-100">حي متطور</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-worood" passHref>
                  <a className="group bg-gradient-to-br from-rose-50 to-rose-100 hover:from-rose-500 hover:to-rose-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🌹</div>
                    <div className="font-bold group-hover:text-white">الورود</div>
                    <div className="text-sm text-gray-600 group-hover:text-rose-100">حي هادئ</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-marwah" passHref>
                  <a className="group bg-gradient-to-br from-emerald-50 to-emerald-100 hover:from-emerald-500 hover:to-emerald-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">💎</div>
                    <div className="font-bold group-hover:text-white">المروة</div>
                    <div className="text-sm text-gray-600 group-hover:text-emerald-100">حي راقٍ</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-naseem" passHref>
                  <a className="group bg-gradient-to-br from-sky-50 to-sky-100 hover:from-sky-500 hover:to-sky-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🌬️</div>
                    <div className="font-bold group-hover:text-white">النسيم</div>
                    <div className="text-sm text-gray-600 group-hover:text-sky-100">حي حيوي</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-basateen" passHref>
                  <a className="group bg-gradient-to-br from-lime-50 to-lime-100 hover:from-lime-500 hover:to-lime-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🌳</div>
                    <div className="font-bold group-hover:text-white">البساتين</div>
                    <div className="text-sm text-gray-600 group-hover:text-lime-100">حي أخضر</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-faisaliyah" passHref>
                  <a className="group bg-gradient-to-br from-amber-50 to-amber-100 hover:from-amber-500 hover:to-amber-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🏬</div>
                    <div className="font-bold group-hover:text-white">الفيصلية</div>
                    <div className="text-sm text-gray-600 group-hover:text-amber-100">حي تجاري</div>
                  </a>
                </Link>
              </div>
            </div>

            {/* الرياض */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold ml-6">
                  🏛️
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">مناطق خدماتنا في الرياض</h3>
                  <p className="text-gray-600 text-lg">قلب المملكة وعاصمتها - 5 مناطق متميزة</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <Link href="/areas/al-olaya" passHref>
                  <a className="group bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-500 hover:to-blue-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🏢</div>
                    <div className="font-bold group-hover:text-white">العليا</div>
                    <div className="text-sm text-gray-600 group-hover:text-blue-100">حي تجاري راقي</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-malaz" passHref>
                  <a className="group bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-500 hover:to-purple-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🏛️</div>
                    <div className="font-bold group-hover:text-white">الملز</div>
                    <div className="text-sm text-gray-600 group-hover:text-purple-100">حي تاريخي</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-narjis" passHref>
                  <a className="group bg-gradient-to-br from-yellow-50 to-yellow-100 hover:from-yellow-500 hover:to-yellow-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🌼</div>
                    <div className="font-bold group-hover:text-white">النرجس</div>
                    <div className="text-sm text-gray-600 group-hover:text-yellow-100">حي سكني حديث</div>
                  </a>
                </Link>
                
                <Link href="/areas/hittin" passHref>
                  <a className="group bg-gradient-to-br from-green-50 to-green-100 hover:from-green-500 hover:to-green-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🏡</div>
                    <div className="font-bold group-hover:text-white">حطين</div>
                    <div className="text-sm text-gray-600 group-hover:text-green-100">حي راقي</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-yasmin" passHref>
                  <a className="group bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-500 hover:to-pink-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🌸</div>
                    <div className="font-bold group-hover:text-white">الياسمين</div>
                    <div className="text-sm text-gray-600 group-hover:text-pink-100">حي مخطط</div>
                  </a>
                </Link>
              </div>
            </div>

            {/* الدمام */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold ml-6">
                  🌊
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">مناطق خدماتنا في الدمام</h3>
                  <p className="text-gray-600 text-lg">لؤلؤة الشرق - 4 مناطق ساحلية متميزة</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/areas/al-faisaliyah-dammam" passHref>
                  <a className="group bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-500 hover:to-purple-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🏘️</div>
                    <div className="font-bold group-hover:text-white">الفيصلية</div>
                    <div className="text-sm text-gray-600 group-hover:text-purple-100">حي سكني متكامل</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-shatea" passHref>
                  <a className="group bg-gradient-to-br from-cyan-50 to-cyan-100 hover:from-cyan-500 hover:to-cyan-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🌊</div>
                    <div className="font-bold group-hover:text-white">الشاطئ</div>
                    <div className="text-sm text-gray-600 group-hover:text-cyan-100">حي ساحلي فاخر</div>
                  </a>
                </Link>
                
                <Link href="/areas/al-aziziyah-dammam" passHref>
                  <a className="group bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-500 hover:to-orange-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🏪</div>
                    <div className="font-bold group-hover:text-white">العزيزية</div>
                    <div className="text-sm text-gray-600 group-hover:text-orange-100">حي تجاري نشط</div>
                  </a>
                </Link>
                
                <Link href="/areas/uhud" passHref>
                  <a className="group bg-gradient-to-br from-teal-50 to-teal-100 hover:from-teal-500 hover:to-teal-600 rounded-xl p-4 text-center transition-all duration-300 hover:text-white transform hover:-translate-y-1">
                    <div className="text-2xl mb-2">🏡</div>
                    <div className="font-bold group-hover:text-white">أحد</div>
                    <div className="text-sm text-gray-600 group-hover:text-teal-100">حي سكني هادئ</div>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* دعوة للعمل */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">لا تجد منطقتك؟</h3>
              <p className="text-xl mb-6 opacity-90">
                نصل إلى جميع أنحاء المملكة العربية السعودية. تواصل معنا للاستفسار عن خدماتنا في منطقتك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/areas" passHref>
                  <a className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                    🗺️ عرض جميع المناطق
                  </a>
                </Link>
                <Link href="/contact" passHref>
                  <a className="bg-white/20 hover:bg-white/30 text-white border border-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                    📞 استفسر عن منطقتك
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">خدماتنا المتخصصة</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              نقدم مجموعة شاملة من الخدمات المصممة خصيصًا لتلبية احتياجاتك في نقل العفش والأثاث
              مع ضمان أعلى معايير الجودة والأمان
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                <OptimizedImage 
                    src={service.image} 
                    alt={service.title} 
                    width={400}
                    height={300}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-2xl">
                    {service.icon}
              </div>
            </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
              </p>
                  <Link href={service.link} passHref>
                    <a className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors">
                      اقرأ المزيد
                      <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                </a>
              </Link>
            </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" passHref>
              <a className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                🚛 جميع خدماتنا
              </a>
            </Link>
          </div>
        </div>
      </section>
      
      {/* عملية النقل خطوة بخطوة */}
      <ProcessSection />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">لماذا تختارنا؟</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              نتميز بخدمات نقل عفش احترافية تجمع بين الخبرة العريقة والتقنيات الحديثة
              لضمان تجربة نقل مثالية لكل عميل
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature) => (
              <div key={feature.id} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center">
                <div className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center text-3xl text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
              </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {featuredPosts && featuredPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">آخر مقالات المدونة</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                اكتشف أحدث النصائح والإرشادات من خبرائنا في مجال نقل العفش والأثاث
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 6).map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/blog" passHref>
                <a className="bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  📚 جميع المقالات
                </a>
              </Link>
          </div>
        </div>
      </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">هل أنت مستعد للانتقال؟</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            احصل على استشارة مجانية وعرض سعر مخصص لاحتياجاتك في النقل. 
            فريقنا المختص جاهز لمساعدتك في كل خطوة
            </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" passHref>
              <a className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                📞 احصل على عرض سعر مجاني
              </a>
            </Link>
            <Link href="/testimonials" passHref>
              <a className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                💬 آراء عملائنا
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
    const allPosts = getAllPosts()
  const featuredPosts = allPosts.filter(post => post.featured).slice(0, 6)
    
    return {
      props: {
      featuredPosts
      },
  }
} 