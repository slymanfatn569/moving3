import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import StaticImage from '../components/StaticImage';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Determine basePath for images
const getBasePath = () => {
  // For GitHub Pages we need to prepend the basePath
  if (typeof window !== 'undefined') {
    // Check if we're on GitHub Pages
    if (window.location.hostname.includes('github.io')) {
      return '/moving3';
    }
  }
  return '';
};

export default function TermsPage() {
  const router = useRouter();
  const basePath = getBasePath();
  
  return (
    <Layout
      title="الشروط والأحكام | فخر الخليج"
      description="الشروط والأحكام والقواعد والإرشادات الخاصة بخدمات فخر الخليج لنقل العفش"
      keywords="شروط، أحكام، نقل عفش، فخر الخليج، سياسة"
      ogImage={`${basePath}/images/service_hero_banner.jpeg`}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "الشروط والأحكام",
              "description": "الشروط والأحكام لخدمات فخر الخليج لنقل العفش والأثاث",
              "publisher": {
                "@type": "Organization",
                "name": "فخر الخليج",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://slymanfatn569.github.io/moving3/icon-192x192.png"
                }
              }
            })
          }}
        />
      </Head>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-100 rounded-lg p-8 mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">الشروط والأحكام</h1>
            <p className="text-gray-600">
              نرجو قراءة الشروط والأحكام التالية بعناية قبل استخدام خدماتنا
            </p>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <StaticImage
              src="/images/icons/legal-document.svg"
              alt="وثيقة قانونية"
              width={128}
              height={128}
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. مقدمة</h2>
            <p>
              مرحبًا بك في فخر الخليج لخدمات نقل العفش والأثاث. تنطبق هذه الشروط والأحكام على جميع الخدمات التي نقدمها، وباستخدامك لخدماتنا فأنت توافق على الالتزام بهذه الشروط والأحكام. يرجى قراءتها بعناية قبل حجز أي من خدماتنا.
            </p>
            <p>
              تحتفظ شركة فخر الخليج بالحق في تعديل هذه الشروط والأحكام في أي وقت دون إشعار مسبق. ومن مسؤوليتك مراجعة هذه الشروط والأحكام بشكل دوري للاطلاع على أي تغييرات.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. الخدمات</h2>
            <p>
              تقدم شركة فخر الخليج خدمات نقل العفش والأثاث للأفراد والشركات في جميع أنحاء المملكة العربية السعودية. تشمل خدماتنا، على سبيل المثال لا الحصر:
            </p>
            <ul>
              <li>نقل الأثاث المنزلي والمكتبي</li>
              <li>فك وتركيب الأثاث</li>
              <li>خدمات التغليف والتعبئة</li>
              <li>خدمات التخزين الآمن</li>
              <li>نقل المقتنيات الثمينة والحساسة</li>
            </ul>
            <p>
              نحن نسعى جاهدين لتقديم خدمات عالية الجودة تلبي احتياجات عملائنا وتفوق توقعاتهم. ومع ذلك، نحن لا نضمن توفر جميع الخدمات في جميع المناطق أو في جميع الأوقات.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. الحجز والدفع</h2>
            <p>
              يمكن حجز خدماتنا عبر الهاتف أو البريد الإلكتروني أو من خلال موقعنا الإلكتروني. عند حجز أي من خدماتنا، سيتم تزويدك بتقدير للتكلفة بناءً على المعلومات التي تقدمها.
            </p>
            <p>
              قد نطلب دفعة مقدمة قبل تقديم الخدمة، ويجب دفع الرصيد المتبقي عند الانتهاء من الخدمة ما لم يتم الاتفاق على خلاف ذلك. نقبل الدفع نقدًا أو عن طريق التحويل المصرفي أو بطاقات الائتمان/الخصم.
            </p>
            <p>
              في حالة إلغاء الحجز، قد تنطبق رسوم الإلغاء وفقًا لسياسة الإلغاء المعمول بها في وقت الحجز.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. مسؤولياتنا</h2>
            <p>
              نحن نلتزم بتقديم خدماتنا بطريقة احترافية وآمنة وفعالة. نحن نتخذ جميع الاحتياطات المعقولة لضمان سلامة أثاثك ومقتنياتك أثناء النقل والتخزين.
            </p>
            <p>
              نحن نوفر تأمينًا أساسيًا على جميع عمليات النقل، ولكن قد تكون هناك حدود للتغطية. نوصي بمراجعة تفاصيل التأمين وشراء تأمين إضافي إذا كان ذلك ضروريًا.
            </p>
            <p>
              في حالة وقوع أضرار أثناء تقديم خدماتنا، سنبذل قصارى جهدنا لإصلاح الضرر أو تقديم تعويض مناسب وفقًا لشروط التأمين الخاص بنا.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. مسؤوليات العميل</h2>
            <p>
              كعميل، أنت مسؤول عن تقديم معلومات دقيقة وكاملة عن الأثاث والمقتنيات التي سيتم نقلها أو تخزينها، بما في ذلك أي عناصر ذات قيمة خاصة أو تتطلب معاملة خاصة.
            </p>
            <p>
              أنت مسؤول أيضًا عن ضمان وصولنا إلى المواقع المعنية في الأوقات المحددة وتوفير إمكانية الوصول المناسبة للمباني والمصاعد وأماكن وقوف السيارات وما إلى ذلك.
            </p>
            <p>
              يجب عليك إبلاغنا بأي ظروف خاصة قد تؤثر على تقديم خدماتنا، مثل القيود المفروضة على الوصول أو المخاطر المحتملة.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. حدود المسؤولية</h2>
            <p>
              بينما نبذل قصارى جهدنا لضمان سلامة ممتلكاتك، فإننا لا نتحمل المسؤولية عن أي أضرار ناتجة عن عيوب موجودة مسبقًا في الأثاث أو المقتنيات، أو عن أي خسائر أو أضرار خارجة عن سيطرتنا المعقولة.
            </p>
            <p>
              نحن لا نتحمل المسؤولية عن أي أضرار غير مباشرة أو تبعية أو خاصة أو عرضية ناتجة عن استخدام خدماتنا.
            </p>
            <p>
              في جميع الحالات، تقتصر مسؤوليتنا القصوى على المبلغ المدفوع لنا مقابل الخدمات المعنية.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. سياسة الخصوصية</h2>
            <p>
              نحن نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية. نقوم بجمع واستخدام معلوماتك الشخصية وفقًا لسياسة الخصوصية الخاصة بنا.
            </p>
            <p>
              يمكنك الاطلاع على سياسة الخصوصية الكاملة الخاصة بنا <Link href="/privacy"><a className="text-primary hover:underline">هنا</a></Link>.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. القانون الحاكم</h2>
            <p>
              تخضع هذه الشروط والأحكام وتفسر وفقًا لقوانين المملكة العربية السعودية، وتختص المحاكم السعودية بالنظر في أي نزاعات تنشأ عن أو فيما يتعلق بهذه الشروط والأحكام أو خدماتنا.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. الاتصال بنا</h2>
            <p>
              إذا كان لديك أي أسئلة أو استفسارات حول هذه الشروط والأحكام أو خدماتنا، يرجى الاتصال بنا على:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p><strong>فخر الخليج لخدمات نقل العفش والأثاث</strong></p>
              <p>العنوان: الرياض، المملكة العربية السعودية</p>
              <p>الهاتف: +966XXXXXXXXX</p>
              <p>البريد الإلكتروني: info@fakhrkhaleej.com</p>
            </div>
          </section>
        </div>
        
        <div className="mt-12 mb-8">
          <div className="bg-primary-50 border border-primary-100 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="text-primary mr-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">ملاحظة مهمة</h3>
            </div>
            <p>
              باستخدامك لخدماتنا، فإنك تقر بأنك قد قرأت وفهمت هذه الشروط والأحكام وتوافق على الالتزام بها. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام خدماتنا.
            </p>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-16">
          <Link href="/" passHref>
            <a className="text-primary hover:underline inline-flex items-center">
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              العودة للرئيسية
            </a>
          </Link>
          <Link href="/privacy" passHref>
            <a className="text-primary hover:underline inline-flex items-center">
              سياسة الخصوصية
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
} 