import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import StaticImage from '../components/StaticImage';

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

export default function PrivacyPage() {
  const basePath = getBasePath();
  
  return (
    <Layout
      title="سياسة الخصوصية | فخر الخليج"
      description="سياسة الخصوصية وكيفية جمع واستخدام البيانات الشخصية في فخر الخليج"
      keywords="خصوصية، سياسة الخصوصية، حماية البيانات، فخر الخليج"
      ogImage={`${basePath}/images/service_hero_banner.jpeg`}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "سياسة الخصوصية",
              "description": "سياسة الخصوصية وكيفية جمع واستخدام البيانات الشخصية في فخر الخليج",
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">سياسة الخصوصية</h1>
            <p className="text-gray-600">
              نلتزم بحماية خصوصيتك والحفاظ على سرية بياناتك الشخصية
            </p>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <StaticImage
              src="/images/icons/privacy-shield.svg"
              alt="حماية الخصوصية"
              width={128}
              height={128}
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. مقدمة</h2>
            <p>
              في فخر الخليج، نحن نقدر ثقتك ونلتزم بحماية خصوصيتك. تصف سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا للمعلومات الشخصية التي تقدمها عند استخدام خدماتنا.
            </p>
            <p>
              نحن نلتزم بالقوانين واللوائح المعمول بها في المملكة العربية السعودية المتعلقة بحماية البيانات الشخصية والخصوصية، ونعمل باستمرار على مراجعة وتحديث ممارساتنا لضمان أعلى مستويات الحماية.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. المعلومات التي نجمعها</h2>
            <p>
              قد نجمع أنواعًا مختلفة من المعلومات الشخصية عند استخدامك لخدماتنا، بما في ذلك:
            </p>
            <ul>
              <li>المعلومات الشخصية: مثل الاسم والعنوان ورقم الهاتف والبريد الإلكتروني.</li>
              <li>معلومات الدفع: مثل تفاصيل بطاقة الائتمان أو معلومات الحساب المصرفي (نحن لا نخزن هذه المعلومات بشكل دائم).</li>
              <li>معلومات الخدمة: مثل تفاصيل النقل والتخزين وتفضيلات الخدمة.</li>
              <li>معلومات الاستخدام: مثل كيفية استخدامك لموقعنا الإلكتروني وتفاعلك مع خدماتنا.</li>
              <li>المعلومات التقنية: مثل عنوان IP ونوع المتصفح ونظام التشغيل.</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. كيفية استخدامنا للمعلومات</h2>
            <p>
              نستخدم المعلومات التي نجمعها للأغراض التالية:
            </p>
            <ul>
              <li>تقديم وإدارة خدماتنا، بما في ذلك جدولة عمليات النقل والتسليم.</li>
              <li>معالجة المدفوعات والفواتير.</li>
              <li>التواصل معك بشأن خدماتنا وتقديم الدعم للعملاء.</li>
              <li>تحسين وتطوير خدماتنا وموقعنا الإلكتروني.</li>
              <li>إرسال معلومات تسويقية ذات صلة (إذا اخترت الاشتراك).</li>
              <li>الامتثال للالتزامات القانونية والتنظيمية.</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. مشاركة المعلومات</h2>
            <p>
              نحن نحترم خصوصيتك ولا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة لأغراض تسويقية. قد نشارك معلوماتك في الحالات التالية:
            </p>
            <ul>
              <li>مع مقدمي الخدمات الذين يساعدوننا في تقديم خدماتنا (مثل شركات الشحن ومعالجي المدفوعات).</li>
              <li>عند الحاجة للامتثال للقانون أو أمر محكمة أو إجراء قانوني.</li>
              <li>لحماية حقوقنا القانونية أو منع الاحتيال أو حماية سلامة الآخرين.</li>
              <li>في حالة الاندماج أو الاستحواذ أو بيع أصول الشركة (مع إخطار مسبق).</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. أمان البيانات</h2>
            <p>
              نحن نتخذ تدابير أمنية معقولة لحماية معلوماتك الشخصية من الوصول غير المصرح به والكشف والتعديل والتدمير. تشمل هذه التدابير:
            </p>
            <ul>
              <li>استخدام تقنيات التشفير لحماية البيانات الحساسة.</li>
              <li>تقييد الوصول إلى المعلومات الشخصية للموظفين المصرح لهم فقط.</li>
              <li>تنفيذ ضوابط أمنية فعلية ومنطقية لحماية أنظمتنا.</li>
              <li>مراجعة وتحديث ممارسات الأمان بانتظام.</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. الاحتفاظ بالبيانات</h2>
            <p>
              نحتفظ بمعلوماتك الشخصية طالما كان ذلك ضروريًا لتقديم خدماتنا وللأغراض المنصوص عليها في سياسة الخصوصية هذه. بعد انتهاء الغرض من جمع المعلومات، سنحذفها أو نجعلها غير شخصية، ما لم يكن هناك التزام قانوني بالاحتفاظ بها لفترة أطول.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. حقوقك</h2>
            <p>
              وفقًا للقوانين المعمول بها، قد يكون لديك حقوق معينة فيما يتعلق بمعلوماتك الشخصية، بما في ذلك:
            </p>
            <ul>
              <li>الوصول إلى المعلومات الشخصية التي نحتفظ بها عنك.</li>
              <li>تصحيح المعلومات غير الدقيقة أو غير المكتملة.</li>
              <li>حذف معلوماتك الشخصية في ظروف معينة.</li>
              <li>تقييد معالجة معلوماتك الشخصية.</li>
              <li>الاعتراض على معالجة معلوماتك الشخصية.</li>
              <li>إلغاء الاشتراك من الاتصالات التسويقية.</li>
            </ul>
            <p>
              لممارسة أي من هذه الحقوق، يرجى الاتصال بنا باستخدام المعلومات المقدمة في نهاية هذه السياسة.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. ملفات تعريف الارتباط وتقنيات التتبع</h2>
            <p>
              نستخدم ملفات تعريف الارتباط وتقنيات مماثلة لتحسين تجربتك على موقعنا وتحليل كيفية استخدام موقعنا الإلكتروني. يمكنك ضبط إعدادات المتصفح لرفض ملفات تعريف الارتباط، ولكن قد يؤثر ذلك على وظائف معينة من موقعنا.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. خصوصية الأطفال</h2>
            <p>
              خدماتنا غير موجهة للأطفال دون سن 18 عامًا. نحن لا نجمع عن علم معلومات شخصية من الأطفال دون سن 18 عامًا. إذا اكتشفنا أننا قد جمعنا معلومات شخصية من طفل دون سن 18 عامًا، فسنتخذ خطوات لحذف هذه المعلومات.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">10. تغييرات على سياسة الخصوصية</h2>
            <p>
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في ممارساتنا أو لأسباب تشغيلية أو قانونية أو تنظيمية. سنقوم بإخطارك بأي تغييرات جوهرية من خلال نشر الإصدار المحدث على موقعنا الإلكتروني أو عن طريق وسائل اتصال أخرى مناسبة.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">11. الاتصال بنا</h2>
            <p>
              إذا كان لديك أي أسئلة أو استفسارات أو طلبات تتعلق بسياسة الخصوصية هذه أو معالجتنا لمعلوماتك الشخصية، يرجى الاتصال بنا على:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p><strong>فخر الخليج لخدمات نقل العفش والأثاث</strong></p>
              <p>العنوان: الرياض، المملكة العربية السعودية</p>
              <p>الهاتف: +966XXXXXXXXX</p>
              <p>البريد الإلكتروني: privacy@fakhrkhaleej.com</p>
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
              باستخدامك لخدماتنا، فإنك توافق على جمع واستخدام معلوماتك وفقًا لسياسة الخصوصية هذه. إذا كنت لا توافق على سياسة الخصوصية هذه، يرجى الامتناع عن استخدام خدماتنا.
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
          <Link href="/terms" passHref>
            <a className="text-primary hover:underline inline-flex items-center">
              الشروط والأحكام
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