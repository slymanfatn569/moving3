import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

// Datos de testimonios de clientes
const testimonials = [
  {
    id: 1,
    name: 'أحمد الزهراني',
    company: 'مستشفى الملك فهد بجدة',
    position: 'مدير الخدمات اللوجستية',
    avatar: '/images/testimonial_avatar1.png',
    content: 'تعاملنا مع شركة فخر الخليج للانتقال من مستشفانا القديم إلى المبنى الجديد. كان فريقهم محترفًا للغاية وقام بإدارة العملية بكفاءة عالية. لقد قاموا بنقل جميع الأثاث الطبي والمعدات الحساسة بعناية فائقة ودون أي أضرار. سنستمر بالتأكيد في التعامل معهم في المستقبل.',
    rating: 5
  },
  {
    id: 2,
    name: 'منى القحطاني',
    company: 'فندق الريتز كارلتون',
    position: 'مديرة العمليات',
    avatar: '/images/testimonial_avatar2.png',
    content: 'التزام فخر الخليج بالجودة وخدمة العملاء استثنائي. ساعدونا في الانتقال إلى فرعنا الجديد في وقت قياسي، مع الحفاظ على معايير الجودة العالية. كان فريقهم مهنيًا ومتعاونًا، وقدموا حلولاً مبتكرة للتحديات التي واجهناها أثناء عملية النقل.',
    rating: 5
  },
  {
    id: 3,
    name: 'خالد العتيبي',
    company: 'الخطوط الجوية السعودية',
    position: 'مدير المرافق',
    avatar: '/images/testimonial_avatar3.png',
    content: 'نحن سعداء للغاية بخدمات النقل التي قدمتها فخر الخليج. لقد قاموا بنقل مكاتبنا الرئيسية في جدة بكفاءة ودقة ملحوظة. كان التخطيط والتنفيذ ممتازين، وساعدنا ذلك على الاستمرار في عملياتنا دون انقطاع كبير. فريق محترف يستحق الثقة.',
    rating: 4
  },
  {
    id: 4,
    name: 'سارة المالكي',
    company: 'وزارة الصحة',
    position: 'مستشارة إدارية',
    avatar: '/images/testimonial_avatar4.png',
    content: 'أوصي بشدة بخدمات فخر الخليج لنقل العفش. لقد ساعدونا في نقل عدة مكاتب حكومية، وكانت تجربتنا معهم إيجابية للغاية. يمتلك الفريق خبرة واسعة في التعامل مع المستندات والأثاث الحكومي، ويلتزمون بجميع اللوائح والمعايير الأمنية.',
    rating: 5
  },
  {
    id: 5,
    name: 'فهد النعيمي',
    company: 'شركة الأمن المتقدم',
    position: 'المدير التنفيذي',
    avatar: '/images/testimonial_avatar5.png',
    content: 'خدمة استثنائية من فريق محترف. قام فخر الخليج بنقل مقر شركتنا الرئيسي بأمان تام، مع التركيز الخاص على المعدات الإلكترونية الحساسة وأنظمة الأمان. الالتزام بالمواعيد والدقة في التنفيذ جعلتنا نختارهم مرارًا وتكرارًا.',
    rating: 5
  },
  {
    id: 6,
    name: 'نورة الشمري',
    company: 'سلسلة مطاعم النخبة',
    position: 'مديرة العلامة التجارية',
    avatar: '/images/testimonial_avatar6.png',
    content: 'مع افتتاح فروع جديدة لمطاعمنا، كنا بحاجة إلى شريك موثوق به لنقل المعدات والأثاث. قدمت فخر الخليج خدمة لا مثيل لها، حيث تعاملوا مع معدات المطبخ الثقيلة والحساسة بمهارة عالية. سنواصل التعاون معهم في مشاريعنا المستقبلية.',
    rating: 4
  }
];

const TestimonialsPage = () => {
  // Función para renderizar estrellas según la calificación
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <Layout 
      title="آراء عملائنا | فخر الخليج - خدمات نقل العفش المهنية"
      description="تعرف على تجارب عملائنا مع خدمات نقل العفش المتميزة من فخر الخليج. قصص نجاح وتقييمات ملهمة من عملاء راضين في جميع أنحاء المملكة العربية السعودية."
      keywords="آراء العملاء، تقييمات نقل العفش، تجارب عملاء نقل الأثاث، فخر الخليج، جدة، الرياض، المملكة العربية السعودية"
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "فخر الخليج",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": "156"
              },
              "review": testimonials.map(t => ({
                "@type": "Review",
                "author": t.name,
                "reviewBody": t.content,
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": t.rating,
                  "bestRating": "5",
                  "worstRating": "1"
                }
              }))
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">آراء عملائنا</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            نفتخر بأن نشارك معكم تجارب عملائنا مع خدمات نقل العفش التي نقدمها في جميع أنحاء المملكة العربية السعودية
          </p>
          <div className="flex justify-center mt-8">
            <div className="flex items-center">
              <div className="flex mr-2">
                {renderStars(5)}
              </div>
              <span className="text-lg font-bold">4.8/5</span>
              <span className="mx-2 text-lg opacity-90">-</span>
              <span className="text-lg opacity-90">أكثر من 150 تقييم</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 relative w-16 h-16 rounded-full overflow-hidden">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.position}</p>
                    <p className="text-primary-dark font-bold">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="text-gray-700 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">انضم إلى قائمة عملائنا السعداء</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            نحن ملتزمون بتقديم خدمات نقل عفش تتجاوز توقعاتكم. اتصل بنا اليوم لتجربة خدمة استثنائية.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="btn btn-primary text-lg px-8 py-3"
            >
              احصل على عرض سعر مجاني
            </a>
            <a 
              href="/services" 
              className="btn btn-outline text-lg px-8 py-3"
            >
              استكشف خدماتنا
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">الأسئلة الشائعة حول خدماتنا</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">ما الذي يميز خدمات فخر الخليج عن الشركات الأخرى؟</h3>
              <p className="text-gray-700">
                نتميز بفريق محترف مدرب على أعلى مستوى، ونستخدم أحدث التقنيات ومواد التغليف، ونقدم خدمة شاملة من التفكيك إلى التركيب، مع ضمان سلامة الأثاث والالتزام بالمواعيد.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">هل تقدمون خدمات النقل الدولي؟</h3>
              <p className="text-gray-700">
                نعم، نقدم خدمات نقل دولية متكاملة مع التعامل مع جميع الإجراءات الجمركية والشحن البحري والجوي، ونضمن وصول أثاثك بأمان إلى وجهتك في أي مكان في العالم.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">هل تقدمون خدمات التخزين؟</h3>
              <p className="text-gray-700">
                نعم، نوفر مستودعات آمنة ومكيفة لتخزين الأثاث والمقتنيات لفترات قصيرة أو طويلة، مع ضمان حمايتها من الرطوبة والحشرات والغبار.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">كيف يمكنني الحصول على تقدير لتكلفة النقل؟</h3>
              <p className="text-gray-700">
                يمكنك التواصل معنا عبر صفحة الاتصال أو الاتصال المباشر، وسيقوم أحد خبرائنا بتحديد موعد لمعاينة الأثاث وتقديم عرض سعر دقيق ومفصل دون أي التزام.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TestimonialsPage; 