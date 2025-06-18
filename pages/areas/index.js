import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Head from 'next/head'
import ImageLoader from '../../components/ImageLoader'
import Image from 'next/image'

// Fonction pour gérer les images de secours ou manquantes
const getAreaImage = (area) => {
  // Vérifier si l'image spécifiée existe
  if (!area.image) {
    // Image par défaut si aucune image n'est spécifiée
    return '/images/professional_movers_company.jpeg';
  }
  
  // Utiliser une image spécifique à la ville si disponible
  if (area.city === 'الرياض') {
    return area.image || '/images/office_moving_company.jpeg';
  } else if (area.city === 'الدمام') {
    return area.image || '/images/experienced_movers_team.jpeg';
  }
  
  // Image par défaut pour Jeddah ou si aucune ville n'est spécifiée
  return area.image || '/images/professional_movers_company.jpeg';
}

// بيانات المناطق التي نخدمها
const areas = [
  {
    slug: 'al-rawdah',
    name: 'الروضة',
    arabicName: 'الروضة',
    description: 'حي سكني راقي في شمال جدة يتميز بمجمعاته الفاخرة وقربه من البحر الأحمر.',
    image: '/images/professional_movers_company.jpeg',
  },
  {
    slug: 'al-hamra',
    name: 'الحمراء',
    arabicName: 'الحمراء',
    description: 'حي مركزي في جدة يضم مزيجًا من العقارات السكنية والتجارية مع بنية تحتية ممتازة.',
    image: '/images/full_service_moving_company.jpeg',
  },
  {
    slug: 'al-andalus',
    name: 'الأندلس',
    arabicName: 'الأندلس',
    description: 'حي نابض بالحياة في شرق جدة يجمع بين وسائل الراحة الحديثة والسحر السعودي التقليدي.',
    image: '/images/commercial_moving_service.jpeg',
  },
  {
    slug: 'al-zahra',
    name: 'الزهراء',
    arabicName: 'الزهراء',
    description: 'حي متنامٍ شعبي بين العائلات، يضم حدائق ومدارس ومراكز تسوق مناسبة.',
    image: '/images/furniture_shipping_service.jpeg',
  },
  {
    slug: 'al-salamah',
    name: 'السلامة',
    arabicName: 'السلامة',
    description: 'حي راسخ يضم مزيجًا من المناطق السكنية والتجارية، معروف بسهولة الوصول إليه.',
    image: '/images/experienced_movers_team.jpeg',
  },
  {
    slug: 'al-shati',
    name: 'الشاطئ',
    arabicName: 'الشاطئ',
    description: 'حي ساحلي يتميز بشواطئه الجميلة والمنتجعات الفاخرة والمجتمعات السكنية الراقية.',
    image: '/images/city_al_shatea_jeddah.jpeg',
  },
  {
    slug: 'al-safa',
    name: 'الصفا',
    arabicName: 'الصفا',
    description: 'حي سكني راقي يوفر بيئة هادئة ومريحة للعائلات مع قربه من المراكز التجارية الرئيسية.',
    image: '/images/moving_company_professional.jpeg',
  },
  {
    slug: 'al-khalidiyah',
    name: 'الخالدية',
    arabicName: 'الخالدية',
    description: 'حي مزدحم في وسط جدة يضم العديد من المؤسسات التجارية والسكنية والمباني الحكومية.',
    image: '/images/home_furniture_mover.jpeg',
  },
  {
    slug: 'al-rihab',
    name: 'الرحاب',
    arabicName: 'الرحاب',
    description: 'حي سكني حديث يوفر أسلوب حياة مريح وهادئ مع سهولة الوصول إلى المرافق الأساسية.',
    image: '/images/expert_furniture_movers.jpeg',
  },
  {
    slug: 'al-nahdah',
    name: 'النهضة',
    arabicName: 'النهضة',
    description: 'حي متطور في شرق جدة يتميز بمشاريع التطوير الجديدة والمساكن الحديثة والمرافق التعليمية.',
    image: '/images/furniture_wrapping_service.jpeg',
  },
  {
    slug: 'al-worood',
    name: 'الورود',
    arabicName: 'الورود',
    description: 'حي سكني هادئ يتميز بشوارعه النظيفة والمساحات الخضراء، مثالي للعائلات الباحثة عن الهدوء.',
    image: '/images/packing_unpacking_service.jpeg',
  },
  {
    slug: 'al-marwah',
    name: 'المروة',
    arabicName: 'المروة',
    description: 'حي راقٍ في شمال جدة يضم فلل فاخرة ومجمعات سكنية مميزة مع قربه من المرافق الرئيسية.',
    image: '/images/office_moving_company.jpeg',
  },
  {
    slug: 'al-naseem',
    name: 'النسيم',
    arabicName: 'النسيم',
    description: 'حي حيوي في شرق جدة يضم مزيجًا من المساكن العائلية والأنشطة التجارية المتنوعة.',
    image: '/images/packing_materials.jpeg',
  },
  {
    slug: 'al-basateen',
    name: 'البساتين',
    arabicName: 'البساتين',
    description: 'حي هادئ ومنظم يتميز بالمساحات الخضراء ويوفر بيئة سكنية مريحة للعائلات.',
    image: '/images/packing_moving_service.jpeg',
  },
  {
    slug: 'al-faisaliyah',
    name: 'الفيصلية',
    arabicName: 'الفيصلية',
    description: 'حي تجاري نشط في وسط جدة يضم العديد من الشركات والمكاتب والمحلات التجارية.',
    image: '/images/moving_and_storage_service.jpeg',
  },
  // الرياض
  {
    slug: 'al-olaya',
    name: 'العليا',
    arabicName: 'العليا',
    description: 'حي تجاري وسكني راقي في وسط الرياض، يضم أبراج تجارية شاهقة ومراكز تسوق فاخرة.',
    image: '/images/office_moving_company.jpeg',
    city: 'الرياض'
  },
  {
    slug: 'al-malaz',
    name: 'الملز',
    arabicName: 'الملز',
    description: 'حي تاريخي وسط الرياض يجمع بين الأصالة والمعاصرة، يضم العديد من المرافق الحكومية والتعليمية.',
    image: '/images/furniture_shipping_service.jpeg',
    city: 'الرياض'
  },
  {
    slug: 'al-narjis',
    name: 'النرجس',
    arabicName: 'النرجس',
    description: 'حي سكني حديث في شمال الرياض يتميز بتخطيطه المنظم وشوارعه الواسعة ومساكنه العصرية.',
    image: '/images/professional_movers_company.jpeg',
    city: 'الرياض'
  },
  {
    slug: 'hittin',
    name: 'حطين',
    arabicName: 'حطين',
    description: 'حي سكني راقي في شمال الرياض يضم فلل فاخرة ومجمعات سكنية مغلقة ومرافق حديثة.',
    image: '/images/full_service_moving_company.jpeg',
    city: 'الرياض'
  },
  {
    slug: 'al-yasmin',
    name: 'الياسمين',
    arabicName: 'الياسمين',
    description: 'حي سكني مخطط بعناية في شمال الرياض، يتميز بمساحاته الخضراء ومرافقه الترفيهية.',
    image: '/images/commercial_moving_service.jpeg',
    city: 'الرياض'
  },
  // الدمام
  {
    slug: 'al-faisaliyah-dammam',
    name: 'الفيصلية - الدمام',
    arabicName: 'الفيصلية',
    description: 'حي سكني متكامل في الدمام يضم مجموعة متنوعة من المساكن والمرافق الخدمية والترفيهية.',
    image: '/images/experienced_movers_team.jpeg',
    city: 'الدمام'
  },
  {
    slug: 'al-shatea',
    name: 'الشاطئ - الدمام',
    arabicName: 'الشاطئ',
    description: 'حي ساحلي جميل في الدمام يطل على الخليج العربي ويضم مجموعة من الفلل والشقق الفاخرة.',
    image: '/images/city_al_shatea_dammam.jpeg',
    city: 'الدمام'
  },
  {
    slug: 'al-aziziyah-dammam',
    name: 'العزيزية - الدمام',
    arabicName: 'العزيزية',
    description: 'حي تجاري وسكني نشط في الدمام يضم العديد من الأنشطة التجارية والمجمعات السكنية.',
    image: '/images/moving_company_professional.jpeg',
    city: 'الدمام'
  },
  {
    slug: 'uhud',
    name: 'أحد',
    arabicName: 'أحد',
    description: 'حي سكني هادئ في الدمام يتميز بتخطيطه المنظم وشوارعه الواسعة ومرافقه الخدمية المتكاملة.',
    image: '/images/furniture_wrapping_service.jpeg',
    city: 'الدمام'
  }
];

export default function AreasIndexPage() {
  // تعيين الحالة الأولية للخريطة - ابدأ بعرض الخريطة الثابتة أولاً
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  
  useEffect(() => {
    // Verificar si se pueden cargar recursos de Google Maps
    const checkMapAvailability = async () => {
      try {
        // استخدام تنسيق مختلف للفحص بدون التسبب في تحديث مستمر
        const testImage = new Image();
        testImage.src = "https://maps.googleapis.com/maps/api/staticmap?center=0,0&zoom=1&size=1x1&key=test";
        
        testImage.onload = () => setMapLoaded(true);
        testImage.onerror = () => {
          console.error('Error loading Google Maps resources');
          setMapLoaded(false);
          setMapError(true);
        };
      } catch (error) {
        console.error('Error al cargar Google Maps:', error);
        setMapLoaded(false);
        setMapError(true);
      }
    };
    
    // تشغيل الفحص مرة واحدة فقط
    checkMapAvailability();

    // إعادة قيمة دالة تنظيف لمنع تسرب الذاكرة
    return () => {
      // تنظيف أي موارد إذا لزم الأمر
    };
  }, []); // المصفوفة الفارغة تضمن تنفيذ الدالة مرة واحدة فقط

  return (
    <Layout
      title="مناطق خدماتنا | فخر الخليج لنقل العفش"
      description="استكشف المناطق والأحياء في جميع أنحاء جدة والرياض والدمام حيث توفر فخر الخليج خدمات نقل العفش والأثاث المنزلي والمكتبي بكفاءة واحترافية."
      keywords="نقل عفش في جدة، نقل أثاث في الرياض، شركة نقل عفش في المملكة، نقل أثاث في الروضة، نقل عفش في الحمراء، أحياء جدة"
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": areas.map((area, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Service",
                  "name": `خدمات نقل العفش من فخر الخليج في ${area.arabicName}`,
                  "url": `https://fakhrkhaleej.com/areas/${area.slug}`
                }
              }))
            })
          }}
        />
      </Head>

      {/* قسم الترحيب */}
      <div className="relative h-[300px] w-full mb-8 rounded-lg overflow-hidden shadow-lg">
        <ImageLoader
          src="/images/professional_movers_company.jpeg"
          alt="مناطق خدمة فخر الخليج"
          width={1200}
          height={600}
          priority={true}
          className="w-full h-full brightness-[0.85] transform scale-[1.02] transition-transform duration-[2000ms]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 bg-gradient-to-t from-black/40 to-transparent">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center drop-shadow-lg">
            مناطق خدماتنا
          </h1>
          <p className="text-xl max-w-3xl text-center drop-shadow">
            خدمات نقل العفش الاحترافية في جميع أحياء المملكة الرئيسية
          </p>
        </div>
      </div>

      {/* المقدمة */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">خدمة نقل الأثاث في جميع أنحاء المملكة</h2>
        <p className="text-gray-700 mb-4">
          توفر فخر الخليج خدمات نقل متخصصة للعفش والأثاث المنزلي والمكتبي في مختلف الأحياء والمناطق.
          فريقنا المتنقل وأسطول الشاحنات المجهزة يضمن حصول العملاء في كل حي على خدمة نقل عفش متميزة بأعلى مستويات الجودة والأمان.
        </p>
        <p className="text-gray-700">
          استكشف مناطق خدماتنا أدناه لمعرفة المزيد عن خدمات نقل العفش المخصصة في منطقتك.
        </p>
      </div>

      {/* شبكة المناطق */}
      <h2 className="text-3xl font-bold mb-6 text-center">مناطق خدماتنا في المملكة</h2>
      
      {/* مناطق جدة */}
      <h3 className="text-2xl font-bold mb-4 pr-2 border-r-4 border-primary">جدة</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {areas.filter(area => !area.city || area.city === 'جدة').map((area) => (
          <Link href={`/areas/${area.slug}`} key={area.slug} passHref>
            <a className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <ImageLoader 
                  src={getAreaImage(area)} 
                  alt={`خدمات نقل العفش في ${area.arabicName}`}
                  width={800}
                  height={400}
                  className="w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{area.arabicName}</h3>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">متوفر ✓</span>
                </div>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <span className="text-primary font-medium">عرض خدماتنا في هذه المنطقة ←</span>
              </div>
            </a>
          </Link>
        ))}
      </div>

      {/* مناطق الرياض */}
      <h3 className="text-2xl font-bold mb-4 pr-2 border-r-4 border-primary">الرياض</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {areas.filter(area => area.city === 'الرياض').map((area) => (
          <Link href={`/areas/${area.slug}`} key={area.slug} passHref>
            <a className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <ImageLoader 
                  src={getAreaImage(area)} 
                  alt={`خدمات نقل العفش في ${area.arabicName} بالرياض`}
                  width={800}
                  height={400}
                  className="w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{area.arabicName} <span className="text-sm text-gray-500">(الرياض)</span></h3>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">متوفر ✓</span>
                </div>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <span className="text-primary font-medium">عرض خدماتنا في هذه المنطقة ←</span>
              </div>
            </a>
          </Link>
        ))}
      </div>

      {/* مناطق الدمام */}
      <h3 className="text-2xl font-bold mb-4 pr-2 border-r-4 border-primary">الدمام</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {areas.filter(area => area.city === 'الدمام').map((area) => (
          <Link href={`/areas/${area.slug}`} key={area.slug} passHref>
            <a className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <ImageLoader 
                  src={getAreaImage(area)} 
                  alt={`خدمات نقل العفش في ${area.arabicName} بالدمام`}
                  width={800}
                  height={400}
                  className="w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{area.arabicName} <span className="text-sm text-gray-500">(الدمام)</span></h3>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">متوفر ✓</span>
                </div>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <span className="text-primary font-medium">عرض خدماتنا في هذه المنطقة ←</span>
              </div>
            </a>
          </Link>
        ))}
      </div>

      {/* قسم دعوة للتواصل */}
      <div className="bg-primary text-white p-8 rounded-lg text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">لم تجد منطقتك مدرجة؟</h2>
        <p className="text-xl mb-6 max-w-3xl mx-auto">
          نحن نخدم العملاء في جميع أنحاء المملكة العربية السعودية. اتصل بنا لمناقشة كيف يمكننا تقديم حلول نقل العفش الخاصة بك، بغض النظر عن الموقع.
        </p>
        <Link href="/contact" passHref>
          <a className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
            تواصل مع فريقنا
          </a>
        </Link>
      </div>

      {/* قسم الخريطة */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">مناطق تغطية خدماتنا</h2>
        <div className="relative h-[400px] rounded-lg mb-4 overflow-hidden">
          {/* Imagen estática que se muestra si hay error o mientras carga el mapa */}
          {(!mapLoaded || mapError) && (
            <div className="absolute inset-0 bg-gray-200">
              <Image
                src="/images/map_jeddah.jpg"
                alt="خريطة مناطق خدمات فخر الخليج في جدة والمملكة"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
            </div>
          )}
          
          {/* Iframe de Google Maps que intenta cargarse */}
          {mapLoaded && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475198.7737491321!2d38.841999606431345!3d21.448403025468442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah!5e0!3m2!1sen!2ssa!4v1715376507148!5m2!1sar!2ssa"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="خريطة مناطق خدمات فخر الخليج في جدة والمملكة"
              className="rounded-lg relative z-10"
              aria-label="خريطة مناطق خدمات فخر الخليج في جدة والمملكة"
              importance="high"
              fetchpriority="high"
              onError={(e) => {
                console.error('Error al cargar el iframe de Google Maps');
                setMapError(true);
              }}
            ></iframe>
          )}
          <div className="absolute bottom-4 left-4 flex flex-col gap-2">
            <a 
              href="https://maps.google.com/?q=21.543333,39.172779" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition-colors shadow-lg flex items-center"
            >
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              فتح في خرائط جوجل
            </a>
            
            {mapError && (
              <>
                <a 
                  href="https://www.google.com/maps/dir//Jeddah+Saudi+Arabia/@21.5433331,39.1706959,17z/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-colors shadow-lg flex items-center mt-2 border border-primary"
                >
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                  </svg>
                  الحصول على الاتجاهات
                </a>
              </>
            )}
          </div>
          
          <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md">
            <span className="font-bold text-primary">فخر الخليج</span>
          </div>
        </div>
        <p className="text-gray-700">
          توفر فخر الخليج خدمات نقل العفش للمنازل والشركات في جميع أنحاء المملكة العربية السعودية.
          يمكن لفريقنا المتنقل زيارة موقعك لمناقشة متطلبات النقل وتقديم تقييم مجاني وجدولة عملية النقل.
        </p>
      </div>
    </Layout>
  );
} 