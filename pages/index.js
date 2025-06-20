import React, { useState, useEffect } from 'react'
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
  const [counters, setCounters] = useState({
    clients: 0,
    moves: 0,
    experience: 0,
    cities: 0
  });

  useEffect(() => {
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

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">أرقامنا تتحدث عنا</h2>
          <p className="text-xl text-white/90">سنوات من الخبرة والثقة في خدمة عملائنا الكرام</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">{counters.clients.toLocaleString()}+</div>
            <div className="text-lg text-white/90">عميل راضي</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">{counters.moves.toLocaleString()}+</div>
            <div className="text-lg text-white/90">عملية نقل</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">{counters.experience}+</div>
            <div className="text-lg text-white/90">سنة خبرة</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">{counters.cities}+</div>
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
  
  // Auto-play slider effect
  useEffect(() => {
    let currentSlide = 0;
    const totalSlides = 11;
    const slideWidth = 280; // عرض البطاقة + المسافة
    
    const moveSlider = () => {
      const slider = document.getElementById('areasSlider');
      const dots = document.querySelectorAll('[id^="dot-"]');
      
      if (slider && dots.length > 0) {
        currentSlide = (currentSlide + 1) % totalSlides;
        const translateX = -(currentSlide * slideWidth);
        slider.style.transform = `translateX(${translateX}px)`;
        
        // تحديث النقاط
        dots.forEach((dot, index) => {
          if (index === currentSlide) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-primary');
          } else {
            dot.classList.remove('bg-primary');
            dot.classList.add('bg-gray-300');
          }
        });
      }
    };
    
    // بدء السلايدر التلقائي
    const intervalId = setInterval(moveSlider, 3000);
    
    // تنظيف الـ interval عند إلغاء التحميل
    return () => clearInterval(intervalId);
  }, []);
  
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
      <StatsSection />

      {/* سلايدر مناطق الخدمة التلقائي */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">مناطق خدماتنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نخدم أهم المدن والأحياء في المملكة العربية السعودية
            </p>
          </div>

          {/* السلايدر التلقائي */}
          <div className="relative overflow-hidden">
            <div 
              id="areasSlider" 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ width: 'calc(280px * 22)' }}
            >
              {/* جدة */}
              <Link href="/areas/al-rawdah" passHref>
                <a className="group flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center border border-gray-100 w-64 mx-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    🏡
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors mb-2">الروضة - جدة</h4>
                  <p className="text-sm text-gray-600">حي سكني راقي</p>
                </a>
              </Link>

              <Link href="/areas/al-hamra" passHref>
                <a className="group flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center border border-gray-100 w-64 mx-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    🏢
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors mb-2">الحمراء - جدة</h4>
                  <p className="text-sm text-gray-600">حي مركزي متكامل</p>
                </a>
              </Link>

              <Link href="/areas/al-andalus" passHref>
                <a className="group flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center border border-gray-100 w-64 mx-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    🌴
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors mb-2">الأندلس - جدة</h4>
                  <p className="text-sm text-gray-600">حي نابض بالحياة</p>
                </a>
              </Link>

              <Link href="/areas/al-zahra" passHref>
                <a className="group flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center border border-gray-100 w-64 mx-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    🌺
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors mb-2">الزهراء - جدة</h4>
                  <p className="text-sm text-gray-600">حي عائلي مميز</p>
                </a>
              </Link>

              <Link href="/areas/al-salamah" passHref>
                <a className="group flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center border border-gray-100 w-64 mx-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    🏘️
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors mb-2">السلامة - جدة</h4>
                  <p className="text-sm text-gray-600">حي راسخ ومتطور</p>
                </a>
              </Link>

              <Link href="/areas/al-shati" passHref>
                <a className="group flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center border border-gray-100 w-64 mx-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    🏖️
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors mb-2">الشاطئ - جدة</h4>
                  <p className="text-sm text-gray-600">حي ساحلي فاخر</p>
                </a>
              </Link>

              {/* الرياض */}
              <Link href="/areas/al-olaya" passHref>
                <a className="group flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center border border-gray-100 w-64 mx-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    🏢
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">العليا - الرياض</h4>
                  <p className="text-sm text-gray-600">حي تجاري راقي</p>
                </a>
              </Link>

              <Link href="/areas/al-malaz" passHref>
                <a className="group flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center border border-gray-100 w-64 mx-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    🏛️
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">الملز - الرياض</h4>
                  <p className="text-sm text-gray-600">حي تاريخي مركزي</p>
                </a>
              </Link>

              <Link href="/areas/al-narjis" passHref>
                <a className="group flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center border border-gray-100 w-64 mx-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    🌼
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">النرجس - الرياض</h4>
                  <p className="text-sm text-gray-600">حي سكني حديث</p>
                </a>
              </Link>

              {/* الدمام */}
              <Link href="/areas/al-faisaliyah-dammam" passHref>
                <a className="group flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center border border-gray-100 w-64 mx-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    🏘️
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors mb-2">الفيصلية - الدمام</h4>
                  <p className="text-sm text-gray-600">حي سكني متكامل</p>
                </a>
              </Link>

              <Link href="/areas/al-shatea" passHref>
                <a className="group flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center border border-gray-100 w-64 mx-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    🌊
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors mb-2">الشاطئ - الدمام</h4>
                  <p className="text-sm text-gray-600">حي ساحلي فاخر</p>
                </a>
              </Link>

              {/* تكرار البطاقات للحلقة اللانهائية */}
              <Link href="/areas/al-rawdah" passHref>
                <a className="group flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center border border-gray-100 w-64 mx-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    🏡
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors mb-2">الروضة - جدة</h4>
                  <p className="text-sm text-gray-600">حي سكني راقي</p>
                </a>
              </Link>

              <Link href="/areas/al-hamra" passHref>
                <a className="group flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center border border-gray-100 w-64 mx-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    🏢
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors mb-2">الحمراء - جدة</h4>
                  <p className="text-sm text-gray-600">حي مركزي متكامل</p>
                </a>
              </Link>

              <Link href="/areas/al-andalus" passHref>
                <a className="group flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center border border-gray-100 w-64 mx-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    🌴
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors mb-2">الأندلس - جدة</h4>
                  <p className="text-sm text-gray-600">حي نابض بالحياة</p>
                </a>
              </Link>

              <Link href="/areas/al-zahra" passHref>
                <a className="group flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center border border-gray-100 w-64 mx-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    🌺
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors mb-2">الزهراء - جدة</h4>
                  <p className="text-sm text-gray-600">حي عائلي مميز</p>
                </a>
              </Link>

              <Link href="/areas/al-salamah" passHref>
                <a className="group flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center border border-gray-100 w-64 mx-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    🏘️
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors mb-2">السلامة - جدة</h4>
                  <p className="text-sm text-gray-600">حي راسخ ومتطور</p>
                </a>
              </Link>

              <Link href="/areas/al-shati" passHref>
                <a className="group flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center border border-gray-100 w-64 mx-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    🏖️
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors mb-2">الشاطئ - جدة</h4>
                  <p className="text-sm text-gray-600">حي ساحلي فاخر</p>
                </a>
              </Link>

              <Link href="/areas/al-olaya" passHref>
                <a className="group flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center border border-gray-100 w-64 mx-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    🏢
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">العليا - الرياض</h4>
                  <p className="text-sm text-gray-600">حي تجاري راقي</p>
                </a>
              </Link>
            </div>
          </div>

          {/* نقاط المؤشر */}
          <div className="flex justify-center mt-8 space-x-2" id="sliderDots">
            {[...Array(11)].map((_, index) => (
              <div 
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === 0 ? 'bg-primary' : 'bg-gray-300'}`}
                id={`dot-${index}`}
              ></div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/areas" passHref>
              <a className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span className="ml-2">🗺️</span>
                عرض جميع المناطق
              </a>
            </Link>
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