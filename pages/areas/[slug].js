import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Head from 'next/head'
import ImageLoader from '../../components/ImageLoader'

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
export const areas = [
  {
    slug: 'al-rawdah',
    name: 'الروضة',
    arabicName: 'الروضة',
    description: 'حي سكني راقي في شمال جدة يتميز بمجمعاته الفاخرة وقربه من البحر الأحمر.',
    image: '/images/professional_movers_company.jpeg',
    coordinates: {
      lat: '21.5858',
      lng: '39.1700'
    },
    landmarks: [
      'كورنيش جدة',
      'مجمع الروضة التجاري',
      'حديقة الروضة العامة'
    ],
    residentialTypes: [
      'فلل فاخرة',
      'شقق عائلية',
      'مجمعات سكنية'
    ],
    commercialAreas: [
      'برج الروضة التجاري',
      'مركز الروضة للأعمال',
      'سوق الروضة المركزي'
    ]
  },
  {
    slug: 'al-hamra',
    name: 'الحمراء',
    arabicName: 'الحمراء',
    description: 'حي مركزي في جدة يضم مزيجًا من العقارات السكنية والتجارية مع بنية تحتية ممتازة.',
    image: '/images/full_service_moving_company.jpeg',
    coordinates: {
      lat: '21.5434',
      lng: '39.1728'
    },
    landmarks: [
      'مستشفى الحمراء العام',
      'متنزه الأمير فيصل',
      'شارع التحلية'
    ],
    residentialTypes: [
      'مجمعات سكنية متوسطة',
      'شقق عائلية',
      'فلل سكنية'
    ],
    commercialAreas: [
      'مركز الحمراء التجاري',
      'برج الأعمال المركزي',
      'سوق الحمراء الشعبي'
    ]
  },
  {
    slug: 'al-andalus',
    name: 'الأندلس',
    arabicName: 'الأندلس',
    description: 'حي نابض بالحياة في شرق جدة يجمع بين وسائل الراحة الحديثة والسحر السعودي التقليدي.',
    image: '/images/commercial_moving_service.jpeg',
    coordinates: {
      lat: '21.5289',
      lng: '39.2030'
    },
    landmarks: [
      'مول الأندلس',
      'جامعة الملك عبدالعزيز',
      'منتزه الأندلس'
    ],
    residentialTypes: [
      'شقق عائلية',
      'مجمعات سكنية حديثة',
      'فلل صغيرة'
    ],
    commercialAreas: [
      'مركز الأندلس التجاري',
      'سوق الأندلس الشرقي',
      'مجمع المكاتب الحديثة'
    ]
  },
  {
    slug: 'al-zahra',
    name: 'الزهراء',
    arabicName: 'الزهراء',
    description: 'حي متنامٍ شعبي بين العائلات، يضم حدائق ومدارس ومراكز تسوق مناسبة.',
    image: '/images/furniture_shipping_service.jpeg',
    coordinates: {
      lat: '21.5500',
      lng: '39.1900'
    },
    landmarks: [
      'حديقة الزهراء المركزية',
      'مدرسة الزهراء الأهلية',
      'مستوصف الزهراء العام'
    ],
    residentialTypes: [
      'شقق عائلية ميسرة',
      'مجمعات سكنية للعائلات',
      'فلل صغيرة'
    ],
    commercialAreas: [
      'مركز الزهراء للتسوق',
      'سوق الزهراء الشعبي',
      'مجمع المحلات التجارية'
    ]
  },
  {
    slug: 'al-salamah',
    name: 'السلامة',
    arabicName: 'السلامة',
    description: 'حي راسخ يضم مزيجًا من المناطق السكنية والتجارية، معروف بسهولة الوصول إليه.',
    image: '/images/experienced_movers_team.jpeg',
    coordinates: {
      lat: '21.5600',
      lng: '39.1800'
    },
    landmarks: [
      'مركز السلامة الطبي',
      'حديقة السلامة العامة',
      'مول السلامة'
    ],
    residentialTypes: [
      'شقق سكنية متنوعة',
      'مجمعات سكنية عائلية',
      'فلل متوسطة'
    ],
    commercialAreas: [
      'برج السلامة التجاري',
      'مجمع مكاتب السلامة',
      'سوق السلامة المركزي'
    ]
  },
  {
    slug: 'al-shati',
    name: 'الشاطئ',
    arabicName: 'الشاطئ',
    description: 'حي ساحلي يتميز بشواطئه الجميلة والمنتجعات الفاخرة والمجتمعات السكنية الراقية.',
    image: '/images/city_al_shatea_jeddah.jpeg',
    coordinates: {
      lat: '21.5700',
      lng: '39.1100'
    },
    landmarks: [
      'شاطئ أوبروي',
      'منتزه الشاطئ البحري',
      'مارينا جدة'
    ],
    residentialTypes: [
      'فلل فاخرة مطلة على البحر',
      'شقق فاخرة',
      'منتجعات سكنية'
    ],
    commercialAreas: [
      'مركز الشاطئ التجاري الفاخر',
      'فنادق الواجهة البحرية',
      'مطاعم الواجهة البحرية'
    ]
  },
  {
    slug: 'al-safa',
    name: 'الصفا',
    arabicName: 'الصفا',
    description: 'حي سكني راقي يوفر بيئة هادئة ومريحة للعائلات مع قربه من المراكز التجارية الرئيسية.',
    image: '/images/moving_company_professional.jpeg',
    coordinates: {
      lat: '21.5750',
      lng: '39.1950'
    },
    landmarks: [
      'مول الصفا',
      'حديقة الصفا العامة',
      'نادي الصفا الرياضي'
    ],
    residentialTypes: [
      'فلل عائلية',
      'شقق فاخرة',
      'مجمعات سكنية مغلقة'
    ],
    commercialAreas: [
      'مركز الصفا التجاري',
      'برج الصفا للأعمال',
      'بوليفارد الصفا'
    ]
  },
  {
    slug: 'al-khalidiyah',
    name: 'الخالدية',
    arabicName: 'الخالدية',
    description: 'حي مزدحم في وسط جدة يضم العديد من المؤسسات التجارية والسكنية والمباني الحكومية.',
    image: '/images/home_furniture_mover.jpeg',
    coordinates: {
      lat: '21.5840',
      lng: '39.1730'
    },
    landmarks: [
      'جامع الخالدية',
      'سوق الخالدية الشعبي',
      'مجمع المكاتب الحكومية'
    ],
    residentialTypes: [
      'عمارات سكنية',
      'شقق متنوعة',
      'فلل قديمة'
    ],
    commercialAreas: [
      'سوق الخالدية المركزي',
      'شارع الخالدية التجاري',
      'مجمع المحلات والمكاتب'
    ]
  },
  {
    slug: 'al-rihab',
    name: 'الرحاب',
    arabicName: 'الرحاب',
    description: 'حي سكني حديث يوفر أسلوب حياة مريح وهادئ مع سهولة الوصول إلى المرافق الأساسية.',
    image: '/images/expert_furniture_movers.jpeg',
    coordinates: {
      lat: '21.5920',
      lng: '39.2050'
    },
    landmarks: [
      'مركز الرحاب الترفيهي',
      'حديقة الرحاب النموذجية',
      'مسجد الرحاب الكبير'
    ],
    residentialTypes: [
      'مجمعات سكنية حديثة',
      'شقق عائلية',
      'فلل متوسطة'
    ],
    commercialAreas: [
      'مركز الرحاب للتسوق',
      'مجمع العيادات الطبية',
      'شارع المطاعم والمقاهي'
    ]
  },
  {
    slug: 'al-nahdah',
    name: 'النهضة',
    arabicName: 'النهضة',
    description: 'حي متطور في شرق جدة يتميز بمشاريع التطوير الجديدة والمساكن الحديثة والمرافق التعليمية.',
    image: '/images/furniture_wrapping_service.jpeg',
    coordinates: {
      lat: '21.5670',
      lng: '39.2120'
    },
    landmarks: [
      'مجمع مدارس النهضة',
      'حديقة النهضة العامة',
      'مركز النهضة الرياضي'
    ],
    residentialTypes: [
      'شقق عصرية',
      'فلل حديثة',
      'مجمعات سكنية مخططة'
    ],
    commercialAreas: [
      'مول النهضة الجديد',
      'مجمع المكاتب المهنية',
      'سوق النهضة المحلي'
    ]
  },
  {
    slug: 'al-worood',
    name: 'الورود',
    arabicName: 'الورود',
    description: 'حي سكني هادئ يتميز بشوارعه النظيفة والمساحات الخضراء، مثالي للعائلات الباحثة عن الهدوء.',
    image: '/images/packing_unpacking_service.jpeg',
    coordinates: {
      lat: '21.5750',
      lng: '39.1850'
    },
    landmarks: [
      'منتزه الورود',
      'مدرسة الورود الدولية',
      'مركز الورود الصحي'
    ],
    residentialTypes: [
      'فلل عائلية',
      'شقق فاخرة',
      'مجمعات سكنية هادئة'
    ],
    commercialAreas: [
      'مركز الورود التجاري',
      'بوليفارد الورود',
      'مجمع العيادات التخصصية'
    ]
  },
  {
    slug: 'al-marwah',
    name: 'المروة',
    arabicName: 'المروة',
    description: 'حي راقٍ في شمال جدة يضم فلل فاخرة ومجمعات سكنية مميزة مع قربه من المرافق الرئيسية.',
    image: '/images/office_moving_company.jpeg',
    coordinates: {
      lat: '21.5900',
      lng: '39.1780'
    },
    landmarks: [
      'مجمع المروة التجاري',
      'حديقة المروة المركزية',
      'نادي المروة الرياضي'
    ],
    residentialTypes: [
      'فلل فاخرة',
      'قصور سكنية',
      'مجمعات خاصة'
    ],
    commercialAreas: [
      'برج المروة للأعمال',
      'مول المروة الفاخر',
      'مجمع المكاتب التنفيذية'
    ]
  },
  {
    slug: 'al-naseem',
    name: 'النسيم',
    arabicName: 'النسيم',
    description: 'حي حيوي في شرق جدة يضم مزيجًا من المساكن العائلية والأنشطة التجارية المتنوعة.',
    image: '/images/packing_materials.jpeg',
    coordinates: {
      lat: '21.5600',
      lng: '39.2100'
    },
    landmarks: [
      'مول النسيم',
      'متنزه النسيم الترفيهي',
      'مستشفى النسيم التخصصي'
    ],
    residentialTypes: [
      'شقق عائلية',
      'فلل متوسطة',
      'مجمعات سكنية متنوعة'
    ],
    commercialAreas: [
      'سوق النسيم المركزي',
      'شارع التسوق الرئيسي',
      'مجمع المطاعم والمقاهي'
    ]
  },
  {
    slug: 'al-basateen',
    name: 'البساتين',
    arabicName: 'البساتين',
    description: 'حي هادئ ومنظم يتميز بالمساحات الخضراء ويوفر بيئة سكنية مريحة للعائلات.',
    image: '/images/packing_moving_service.jpeg',
    coordinates: {
      lat: '21.5400',
      lng: '39.1880'
    },
    landmarks: [
      'حدائق البساتين الطبيعية',
      'مدرسة البساتين النموذجية',
      'مركز البساتين الترفيهي'
    ],
    residentialTypes: [
      'فلل مع حدائق',
      'شقق عائلية واسعة',
      'مجمعات صديقة للبيئة'
    ],
    commercialAreas: [
      'مركز البساتين التجاري',
      'سوق المزارعين المحلي',
      'مجمع المطاعم العائلية'
    ]
  },
  {
    slug: 'al-faisaliyah',
    name: 'الفيصلية',
    arabicName: 'الفيصلية',
    description: 'حي تجاري نشط في وسط جدة يضم العديد من الشركات والمكاتب والمحلات التجارية.',
    image: '/images/moving_and_storage_service.jpeg',
    coordinates: {
      lat: '21.5520',
      lng: '39.1760'
    },
    landmarks: [
      'برج الفيصلية',
      'مجمع الأعمال المركزي',
      'ساحة الفيصلية العامة'
    ],
    residentialTypes: [
      'شقق سكنية فوق المحلات',
      'وحدات سكنية صغيرة',
      'شقق تنفيذية'
    ],
    commercialAreas: [
      'سوق الفيصلية التجاري',
      'شارع المكاتب الرئيسي',
      'مجمع الأعمال والمتاجر'
    ]
  },
  // الرياض
  {
    slug: 'al-olaya',
    name: 'العليا',
    arabicName: 'العليا',
    description: 'حي تجاري وسكني راقي في وسط الرياض، يضم أبراج تجارية شاهقة ومراكز تسوق فاخرة.',
    image: '/images/office_moving_company.jpeg',
    city: 'الرياض',
    coordinates: {
      lat: '24.6911',
      lng: '46.6858'
    },
    landmarks: [
      'برج المملكة',
      'مركز المملكة التجاري',
      'شارع التحلية'
    ],
    residentialTypes: [
      'شقق فاخرة',
      'أجنحة فندقية',
      'مجمعات سكنية راقية'
    ],
    commercialAreas: [
      'أبراج المكاتب العالية',
      'مراكز التسوق الفاخرة',
      'المقرات الرئيسية للشركات'
    ]
  },
  {
    slug: 'al-malaz',
    name: 'الملز',
    arabicName: 'الملز',
    description: 'حي تاريخي وسط الرياض يجمع بين الأصالة والمعاصرة، يضم العديد من المرافق الحكومية والتعليمية.',
    image: '/images/furniture_shipping_service.jpeg',
    city: 'الرياض',
    coordinates: {
      lat: '24.6850',
      lng: '46.7350'
    },
    landmarks: [
      'استاد الملك فهد الدولي',
      'جامعة الملك سعود',
      'حديقة الملز العامة'
    ],
    residentialTypes: [
      'مساكن تقليدية مطورة',
      'شقق سكنية',
      'فلل عائلية'
    ],
    commercialAreas: [
      'شارع الملز التجاري',
      'المكاتب الحكومية',
      'المراكز التعليمية'
    ]
  },
  {
    slug: 'al-narjis',
    name: 'النرجس',
    arabicName: 'النرجس',
    description: 'حي سكني حديث في شمال الرياض يتميز بتخطيطه المنظم وشوارعه الواسعة ومساكنه العصرية.',
    image: '/images/professional_movers_company.jpeg',
    city: 'الرياض',
    coordinates: {
      lat: '24.8200',
      lng: '46.6400'
    },
    landmarks: [
      'حديقة النرجس المركزية',
      'مسجد النرجس الكبير',
      'مركز النرجس الصحي'
    ],
    residentialTypes: [
      'فلل حديثة',
      'مجمعات سكنية مغلقة',
      'منازل مستقلة'
    ],
    commercialAreas: [
      'مركز النرجس التجاري',
      'بلازا النرجس',
      'مجمع العيادات الطبية'
    ]
  },
  {
    slug: 'hittin',
    name: 'حطين',
    arabicName: 'حطين',
    description: 'حي سكني راقي في شمال الرياض يضم فلل فاخرة ومجمعات سكنية مغلقة ومرافق حديثة.',
    image: '/images/full_service_moving_company.jpeg',
    city: 'الرياض',
    coordinates: {
      lat: '24.7900',
      lng: '46.6300'
    },
    landmarks: [
      'منتزه حطين',
      'نادي حطين الرياضي',
      'مدارس حطين الدولية'
    ],
    residentialTypes: [
      'فلل فاخرة',
      'قصور سكنية',
      'مجمعات خاصة'
    ],
    commercialAreas: [
      'مول حطين',
      'مجمع المطاعم الفاخرة',
      'مراكز الأعمال المتطورة'
    ]
  },
  {
    slug: 'al-yasmin',
    name: 'الياسمين',
    arabicName: 'الياسمين',
    description: 'حي سكني مخطط بعناية في شمال الرياض، يتميز بمساحاته الخضراء ومرافقه الترفيهية.',
    image: '/images/commercial_moving_service.jpeg',
    city: 'الرياض',
    coordinates: {
      lat: '24.8140',
      lng: '46.6180'
    },
    landmarks: [
      'حديقة الياسمين المركزية',
      'مدارس الياسمين الأهلية',
      'مجمع الياسمين الرياضي'
    ],
    residentialTypes: [
      'فلل راقية',
      'مجمعات سكنية عائلية',
      'شقق دوبلكس'
    ],
    commercialAreas: [
      'بوليفارد الياسمين',
      'مركز الياسمين للتسوق',
      'مجمع المكاتب الحديثة'
    ]
  },
  // الدمام
  {
    slug: 'al-faisaliyah-dammam',
    name: 'الفيصلية - الدمام',
    arabicName: 'الفيصلية',
    description: 'حي سكني متكامل في الدمام يضم مجموعة متنوعة من المساكن والمرافق الخدمية والترفيهية.',
    image: '/images/experienced_movers_team.jpeg',
    city: 'الدمام',
    coordinates: {
      lat: '26.4226',
      lng: '50.1030'
    },
    landmarks: [
      'مجمع الفيصلية التجاري',
      'حديقة الفيصلية العامة',
      'مستشفى الفيصلية'
    ],
    residentialTypes: [
      'فلل متوسطة',
      'شقق عائلية',
      'مجمعات سكنية'
    ],
    commercialAreas: [
      'سوق الفيصلية المركزي',
      'شارع التجارة الرئيسي',
      'مجمع المحلات والمكاتب'
    ]
  },
  {
    slug: 'al-shatea',
    name: 'الشاطئ - الدمام',
    arabicName: 'الشاطئ',
    description: 'حي ساحلي جميل في الدمام يطل على الخليج العربي ويضم مجموعة من الفلل والشقق الفاخرة.',
    image: '/images/city_al_shatea_dammam.jpeg',
    city: 'الدمام',
    coordinates: {
      lat: '26.4500',
      lng: '50.0700'
    },
    landmarks: [
      'كورنيش الدمام',
      'منتزه الشاطئ البحري',
      'مارينا الدمام'
    ],
    residentialTypes: [
      'فلل مطلة على البحر',
      'شقق فاخرة',
      'شاليهات ساحلية'
    ],
    commercialAreas: [
      'مطاعم الواجهة البحرية',
      'المقاهي الساحلية',
      'مراكز الترفيه البحرية'
    ]
  },
  {
    slug: 'al-aziziyah-dammam',
    name: 'العزيزية - الدمام',
    arabicName: 'العزيزية',
    description: 'حي تجاري وسكني نشط في الدمام يضم العديد من الأنشطة التجارية والمجمعات السكنية.',
    image: '/images/moving_company_professional.jpeg',
    city: 'الدمام',
    coordinates: {
      lat: '26.3900',
      lng: '50.1100'
    },
    landmarks: [
      'مول العزيزية',
      'حديقة العزيزية العامة',
      'مركز العزيزية الطبي'
    ],
    residentialTypes: [
      'شقق سكنية',
      'فلل متوسطة',
      'عمارات سكنية'
    ],
    commercialAreas: [
      'سوق العزيزية المركزي',
      'شارع التسوق الرئيسي',
      'مجمع المكاتب التجارية'
    ]
  },
  {
    slug: 'uhud',
    name: 'أحد',
    arabicName: 'أحد',
    description: 'حي سكني هادئ في الدمام يتميز بتخطيطه المنظم وشوارعه الواسعة ومرافقه الخدمية المتكاملة.',
    image: '/images/furniture_wrapping_service.jpeg',
    city: 'الدمام',
    coordinates: {
      lat: '26.4100',
      lng: '50.0900'
    },
    landmarks: [
      'مسجد أحد الكبير',
      'حديقة أحد النموذجية',
      'مركز أحد التجاري'
    ],
    residentialTypes: [
      'فلل عائلية',
      'مجمعات سكنية',
      'شقق واسعة'
    ],
    commercialAreas: [
      'سوق أحد المركزي',
      'مركز الخدمات التجارية',
      'مجمع المطاعم العائلية'
    ]
  }
];

export default function AreaPage({ area }) {
  if (!area) {
    return <div>لم يتم العثور على المنطقة</div>;
  }

  // تحديد المدينة للعرض، إذا لم تكن محددة فالافتراضي هو جدة
  const city = area.city || 'جدة';

  return (
    <Layout
      title={`خدمات نقل العفش في ${area.arabicName} | فخر الخليج`}
      description={area.description}
      keywords={`نقل عفش ${area.arabicName}، نقل أثاث في ${area.arabicName}، شركة نقل عفش في ${area.arabicName}، خدمات نقل في ${area.arabicName}، أفضل شركة نقل في ${area.arabicName}`}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": `خدمات نقل العفش من فخر الخليج في ${area.arabicName}`,
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": area.coordinates.lat,
                  "longitude": area.coordinates.lng
                },
                "geoRadius": "5000"
              },
              "provider": {
                "@type": "Organization",
                "name": "فخر الخليج لنقل العفش",
                "url": "https://fakhrkhaleej.com"
              },
              "areaServed": {
                "@type": "City",
                "name": `${area.arabicName}، ${city}، المملكة العربية السعودية`
              }
            })
          }}
        />
      </Head>

      {/* قسم الترحيب */}
      <div className="relative h-[300px] w-full mb-8 rounded-lg overflow-hidden">
        <ImageLoader
          src={getAreaImage(area)}
          alt={`خدمات نقل العفش في ${area.arabicName}`}
          width={1200}
          height={600}
          className="w-full h-full brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            {`خدمات نقل العفش في ${area.arabicName}`}
          </h1>
          <p className="text-xl max-w-3xl text-center">
            حلول نقل احترافية ومتكاملة تناسب جميع احتياجات سكان {area.arabicName}
          </p>
        </div>
      </div>

      {/* وصف المنطقة */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">نبذة عن حي {area.arabicName}</h2>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{city}</span>
        </div>
        <p className="text-gray-700 mb-4">
          {area.description}
        </p>
        <p className="text-gray-700">
          في فخر الخليج، نقدم خدمات نقل عفش متخصصة في جميع أنحاء {area.arabicName}، 
          مع حلول مخصصة للمنازل والفلل والشقق والمكاتب التجارية والمؤسسات في المنطقة.
          نحن نفخر بخدمة سكان {area.arabicName} لأكثر من 15 عامًا بأعلى معايير الجودة والاحترافية.
        </p>
      </div>

      {/* خدماتنا في المنطقة */}
      <h2 className="text-3xl font-bold mb-6">خدماتنا في {area.arabicName} - {city}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* نقل المنازل */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-primary">نقل الأثاث المنزلي</h3>
          <p className="text-gray-700 mb-4">
            نقدم خدمات نقل متكاملة للوحدات السكنية في {area.arabicName} بما في ذلك:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {area.residentialTypes.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
          <p className="text-gray-700 mb-4">
            خدماتنا تشمل الفك والتغليف والنقل وإعادة التركيب مع ضمان سلامة جميع المنقولات.
          </p>
          <Link href="/services/corporate" passHref>
            <a className="text-primary font-medium">
              <span>تعرف على المزيد ←</span>
            </a>
          </Link>
        </div>

        {/* نقل المكاتب */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-primary">نقل المكاتب والشركات</h3>
          <p className="text-gray-700 mb-4">
            نخدم المؤسسات التجارية المرموقة في {area.arabicName} بما في ذلك:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {area.commercialAreas.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
          <p className="text-gray-700 mb-4">
            نقدم حلولًا متخصصة لنقل المكاتب مع الحفاظ على استمرارية الأعمال وتقليل فترة التوقف.
          </p>
          <Link href="/services/corporate" passHref>
            <a className="text-primary font-medium">
              <span>تعرف على المزيد ←</span>
            </a>
          </Link>
        </div>

        {/* خدمات إضافية */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-primary">خدمات متخصصة</h3>
          <p className="text-gray-700 mb-4">
            نوفر خدمات إضافية لسكان {area.arabicName} تشمل:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>خدمات التغليف المتخصصة للقطع الثمينة</li>
            <li>خدمات التخزين الآمن قصير وطويل المدى</li>
            <li>فك وتركيب الأثاث بأيدي محترفين</li>
            <li>نقل القطع الثقيلة والمعدات الخاصة</li>
          </ul>
          <p className="text-gray-700 mb-4">
            نقدم حلولًا شاملة لتلبية جميع احتياجات النقل الخاصة بك في {area.arabicName}.
          </p>
          <Link href="/services" passHref>
            <a className="text-primary font-medium">
              <span>تعرف على المزيد ←</span>
            </a>
          </Link>
        </div>
      </div>

      {/* المعالم المميزة */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4">معالم بارزة في {area.arabicName}</h2>
        <p className="text-gray-700 mb-4">
          يتميز حي {area.arabicName} في {city} بالعديد من المعالم المميزة، ونحن نفخر بتقديم خدماتنا في جميع أنحاء الحي، بما في ذلك بالقرب من:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {area.landmarks.map((landmark, index) => (
            <div className="bg-gray-50 p-4 rounded-lg" key={index}>
              <p className="text-center">{landmark}</p>
            </div>
          ))}
        </div>
      </div>

      {/* خدمات نقل بين المناطق */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4">خدمات نقل العفش من وإلى {area.arabicName}</h2>
        <p className="text-gray-700 mb-4">
          بالإضافة إلى خدمات النقل الداخلية في {area.arabicName}، نوفر خدمات نقل العفش من {area.arabicName} إلى جميع مناطق المملكة:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-primary bg-opacity-10 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold">نقل من {area.arabicName} إلى جدة</h3>
              {city !== 'جدة' && <span className="text-primary text-sm">متوفر</span>}
              {city === 'جدة' && <span className="text-primary text-sm">نقل داخلي</span>}
            </div>
            <p className="text-sm text-gray-700">خدمة نقل آمنة وسريعة من {area.arabicName} إلى جميع أحياء جدة</p>
          </div>
          <div className="bg-primary bg-opacity-10 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold">نقل من {area.arabicName} إلى الرياض</h3>
              {city !== 'الرياض' && <span className="text-primary text-sm">متوفر</span>}
              {city === 'الرياض' && <span className="text-primary text-sm">نقل داخلي</span>}
            </div>
            <p className="text-sm text-gray-700">خدمة نقل للمسافات البعيدة بين {area.arabicName} والرياض</p>
          </div>
          <div className="bg-primary bg-opacity-10 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold">نقل من {area.arabicName} إلى الدمام</h3>
              {city !== 'الدمام' && <span className="text-primary text-sm">متوفر</span>}
              {city === 'الدمام' && <span className="text-primary text-sm">نقل داخلي</span>}
            </div>
            <p className="text-sm text-gray-700">خدمة نقل متكاملة بين {area.arabicName} والمنطقة الشرقية</p>
          </div>
        </div>
      </div>

      {/* قسم دعوة للتواصل */}
      <div className="bg-primary text-white p-8 rounded-lg text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">تحتاج إلى خدمات نقل في {area.arabicName}؟</h2>
        <p className="text-xl mb-6 max-w-3xl mx-auto">
          تواصل مع فريقنا للحصول على استشارة مجانية واكتشف كيف يمكن لخدمات نقل العفش الاحترافية أن تسهل عملية انتقالك في {area.arabicName}.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" passHref>
            <a className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
              تواصل معنا
            </a>
          </Link>
          <Link href="/services" passHref>
            <a className="bg-opacity-20 bg-white hover:bg-opacity-30 text-white border border-white font-bold py-3 px-8 rounded-lg transition-colors">
              عرض جميع الخدمات
            </a>
          </Link>
        </div>
      </div>

      {/* تجارب العملاء */}
      <h2 className="text-3xl font-bold mb-6">ماذا يقول عملاؤنا في {area.arabicName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-start mb-4">
            <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
              م
            </div>
            <div>
              <h4 className="font-bold">محمد العبدالله</h4>
              <p className="text-gray-600 text-sm">منطقة {area.arabicName} - {city}</p>
            </div>
          </div>
          <p className="text-gray-700">
            "تعاملت مع شركة فخر الخليج لنقل أثاث منزلي في حي {area.arabicName}. كانت التجربة رائعة من البداية للنهاية. الفريق محترف والتزموا بالموعد المحدد تمامًا. أنصح بهم بشدة!"
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-start mb-4">
            <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
              س
            </div>
            <div>
              <h4 className="font-bold">سارة الأحمدي</h4>
              <p className="text-gray-600 text-sm">منطقة {area.arabicName} - {city}</p>
            </div>
          </div>
          <p className="text-gray-700">
            "انتقلت مؤخرًا إلى شقة جديدة في {area.arabicName} واستعنت بخدمات فخر الخليج. كانت عملية التغليف والنقل سلسة للغاية. الفريق محترف وحريص على التفاصيل. سأتعامل معهم مرة أخرى بالتأكيد."
          </p>
        </div>
      </div>

      {/* خريطة الحي */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-6">موقع {area.arabicName} على الخريطة</h2>
        <div className="relative h-80 w-full rounded-lg overflow-hidden mb-4">
          <iframe
            src={area.city === 'الرياض' 
              ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462679.59991286066!2d46.54245149794064!3d24.774265354539064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1648032851754!5m2!1sen!2sus" 
              : area.city === 'الدمام' 
                ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230481.9155345798!2d49.89390516863648!3d26.44361621860218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e361d32276b3403%3A0xefd901ec7a5e5676!2sDammam%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1648032851754!5m2!1sen!2sus"
                : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232525.28156281294!2d39.056684825550286!3d21.53309022822193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1648032851754!5m2!1sen!2sus"}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title={`خريطة ${area.arabicName}`}
            className="rounded-lg"
          ></iframe>
          <div className="absolute bottom-4 left-4">
            <a 
              href={`https://maps.google.com/?q=${area.coordinates?.lat || '21.543333'},${area.coordinates?.lng || '39.172779'}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition-colors shadow-lg"
            >
              فتح في خرائط جوجل
            </a>
          </div>
        </div>
        <p className="text-gray-600">
          يقع حي {area.arabicName} في موقع متميز{area.city ? ` في ${area.city}` : ''}, مما يجعله وجهة مثالية للسكن والعمل، ويوفر لقاطنيه سهولة الوصول إلى كافة مرافق المدينة الرئيسية.
        </p>
      </div>

      {/* الأسئلة الشائعة */}
      <div className="bg-gray-50 p-8 rounded-lg mt-12 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">الأسئلة الشائعة حول خدماتنا في {area.arabicName}</h2>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">كم تكلفة نقل الأثاث داخل حي {area.arabicName}؟</h3>
            <p className="text-gray-700">
              تختلف تكلفة نقل الأثاث حسب حجم المنزل وكمية الأثاث والخدمات الإضافية المطلوبة. نقدم معاينة مجانية وتسعيرة دقيقة دون أي التزام.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">ما هي ساعات العمل في منطقة {area.arabicName}؟</h3>
            <p className="text-gray-700">
              نعمل يوميًا من 8 صباحًا حتى 8 مساءً، ويمكن ترتيب مواعيد خارج هذه الأوقات حسب الطلب والتوفر.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">هل تقدمون خدمات تخزين مؤقت في {area.arabicName}؟</h3>
            <p className="text-gray-700">
              نعم، نوفر خدمات تخزين آمنة ومكيفة قصيرة وطويلة المدى للعملاء في {area.arabicName} وجميع أنحاء {city}.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">كم من الوقت يستغرق نقل الأثاث من {area.arabicName} إلى منطقة أخرى في {city}؟</h3>
            <p className="text-gray-700">
              تعتمد مدة النقل على المسافة وحجم الأثاث، ولكن معظم عمليات النقل داخل {city} تكتمل في يوم واحد. نقدم لك جدولًا زمنيًا دقيقًا قبل بدء الخدمة.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = areas.map((area) => ({
    params: { slug: area.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const area = areas.find((area) => area.slug === params.slug);

  return {
    props: {
      area,
    },
  };
} 