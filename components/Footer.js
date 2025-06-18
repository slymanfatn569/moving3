import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">عن فخر الخليج</h3>
            <p className="mb-4">
              مزود رائد لخدمات نقل العفش والأثاث في جميع أنحاء المملكة العربية السعودية، نقدم خدمات احترافية للأفراد والشركات والمؤسسات بأعلى معايير الجودة.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              <li><Link href="/services/corporate" passHref><a className="!text-white hover:!text-accent transition-colors">نقل المكاتب والشركات</a></Link></li>
              <li><Link href="/services/cleaning" passHref><a className="!text-white hover:!text-accent transition-colors">خدمات التنظيف المتخصصة</a></Link></li>
              <li><Link href="/services/storage" passHref><a className="!text-white hover:!text-accent transition-colors">خدمات التخزين</a></Link></li>
              <li><Link href="/services/assembly" passHref><a className="!text-white hover:!text-accent transition-colors">فك وتركيب الأثاث</a></Link></li>
              <li><Link href="/services" passHref><a className="!text-white hover:!text-accent transition-colors">جميع الخدمات</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="/" passHref><a className="!text-white hover:!text-accent transition-colors">الرئيسية</a></Link></li>
              <li><Link href="/services" passHref><a className="!text-white hover:!text-accent transition-colors">خدماتنا</a></Link></li>
              <li><Link href="/areas" passHref><a className="!text-white hover:!text-accent transition-colors">مناطق الخدمة</a></Link></li>
              <li><Link href="/blog" passHref><a className="!text-white hover:!text-accent transition-colors">المدونة</a></Link></li>
              <li><Link href="/contact" passHref><a className="!text-white hover:!text-accent transition-colors">اتصل بنا</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">معلومات الاتصال</h3>
            <address className="not-italic">
              <p className="mb-2">البريد الإلكتروني: info@fakhrkhaleej.com</p>
              <p className="mb-2">الهاتف: 789 456 123 966+</p>
              <p className="mb-2">العنوان: طريق الملك فهد، الرياض، المملكة العربية السعودية</p>
            </address>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="فيسبوك">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,8.31h-3.69V6.47a1.08,1.08,0,0,1,1.1-1.23h2.56V1.09L15.25,1C11.6,1,10.1,3.3,10.1,6.18V8.31H7v4.15h3.1V22h5v-9.54h3.36Z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="تويتر">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="لينكدإن">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98,3.5C4.98,4.881,3.87,6,2.5,6S0.02,4.881,0.02,3.5C0.02,2.12,1.13,1,2.5,1S4.98,2.12,4.98,3.5z M5,8H0v16h5V8z M12.982,8H8.014v16h4.969v-8.399c0-4.67,6.029-5.052,6.029,0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} فخر الخليج. جميع الحقوق محفوظة.</p>
          <div className="mt-4 flex justify-center space-x-4 space-x-reverse">
            <Link href="/terms" passHref>
              <a className="text-white hover:text-accent transition-colors text-sm">الشروط والأحكام</a>
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/privacy" passHref>
              <a className="text-white hover:text-accent transition-colors text-sm">سياسة الخصوصية</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 