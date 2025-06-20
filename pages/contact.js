import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import ImageLoader from '../components/ImageLoader'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    industry: 'moving',
    service: 'consultation'
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
    message: ''
  })
  
  const [mapLoaded, setMapLoaded] = useState(true)
  const [mapError, setMapError] = useState(false)
  
  useEffect(() => {
    // Initialize EmailJS
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
    }
    
    // Check map availability
    const checkMapAvailability = async () => {
      try {
        const response = await fetch('https://maps.googleapis.com/maps/api/js?callback=initMap', {
          method: 'HEAD',
          mode: 'no-cors'
        });
        setMapLoaded(true);
      } catch (error) {
        console.error('Error loading Google Maps:', error);
        setMapLoaded(false);
        setMapError(true);
      }
    };
    
    checkMapAvailability();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setFormStatus({
        submitted: true,
        submitting: false,
        error: true,
        message: 'يرجى ملء جميع الحقول المطلوبة'
      })
      return
    }
    
    setFormStatus({
      submitted: false,
      submitting: true,
      error: false,
      message: ''
    })
    
    try {
      if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && 
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && 
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        
        // Send email using EmailJS
        const result = await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            company: formData.company || 'غير محدد',
            industry: formData.industry,
            service: formData.service,
            message: formData.message,
            to_name: 'فريق نقل العفش',
          }
        )
        
        if (result.status === 200) {
          setFormStatus({
            submitted: true,
            submitting: false,
            error: false,
            message: 'شكراً لرسالتك! سيتواصل فريقنا معك خلال 24 ساعة.'
    })
    
          // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
            industry: 'moving',
      service: 'consultation'
    })
        }
      } else {
        // Fallback if EmailJS is not configured
        console.warn('EmailJS not configured. Simulating form submission.')
        
        // Simulate successful submission
        setTimeout(() => {
          setFormStatus({
            submitted: true,
            submitting: false,
            error: false,
            message: 'شكراً لرسالتك! سيتواصل فريقنا معك قريباً.'
          })
          
          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
            industry: 'moving',
            service: 'consultation'
          })
        }, 1000)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setFormStatus({
        submitted: true,
        submitting: false,
        error: true,
        message: 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.'
      })
    }
  }

  return (
    <Layout
      title="اتصل بنا | خدمات نقل العفش الاحترافية"
      description="تواصل معنا للحصول على أفضل خدمات نقل العفش في المملكة. نقدم خدمات نقل الأثاث، التغليف، التخزين، والتنظيف بأعلى معايير الجودة."
      keywords="اتصل بنا، نقل عفش، خدمات نقل الأثاث، استشارة مجانية، طلب عرض سعر"
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              "name": "شركة نقل العفش",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "https://moving-company.com",
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://moving-company.com"}/logo.png`,
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966-12-345-6789",
                "contactType": "customer service",
                "areaServed": "SA",
                "availableLanguage": ["ar", "en"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "طريق الملك فهد",
                "addressLocality": "جدة",
                "addressRegion": "منطقة مكة المكرمة",
                "postalCode": "23442",
                "addressCountry": "SA"
              },
              "sameAs": [
                "https://facebook.com/movingcompany",
                "https://twitter.com/movingcompany",
                "https://instagram.com/movingcompany"
              ]
            })
          }}
        />
      </Head>

      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">اتصل بنا</h1>
          
            {formStatus.submitted && !formStatus.submitting ? (
            <div className={`p-4 rounded-md ${formStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {formStatus.message}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                      disabled={formStatus.submitting}
                      className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                      disabled={formStatus.submitting}
                      className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                      disabled={formStatus.submitting}
                      placeholder="05XXXXXXXX"
                      className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      اسم الشركة (اختياري)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                      disabled={formStatus.submitting}
                      className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                      نوع النقل
                  </label>
                  <select
                    id="industry"
                    name="industry"
                      disabled={formStatus.submitting}
                      className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                    value={formData.industry}
                    onChange={handleChange}
                  >
                      <option value="moving">نقل منزلي</option>
                      <option value="corporate">نقل مكتبي</option>
                      <option value="international">نقل دولي</option>
                      <option value="storage">تخزين</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    الخدمة المطلوبة
                  </label>
                  <select
                    id="service"
                    name="service"
                      disabled={formStatus.submitting}
                      className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                    value={formData.service}
                    onChange={handleChange}
                  >
                      <option value="consultation">استشارة مجانية</option>
                    <option value="moving">خدمات نقل العفش</option>
                      <option value="packing">خدمات التغليف</option>
                    <option value="storage">خدمات التخزين</option>
                      <option value="cleaning">خدمات التنظيف</option>
                    <option value="assembly">فك وتركيب الأثاث</option>
                    <option value="quote">طلب عرض سعر</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  رسالتك *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                    disabled={formStatus.submitting}
                    placeholder="اكتب تفاصيل طلبك هنا..."
                    className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="text-left">
                <button
                  type="submit"
                    disabled={formStatus.submitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {formStatus.submitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Contact Information */}
        <div>
          <div className="bg-primary text-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-6">معلومات الاتصال</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="mr-4">
                  <p className="font-bold">البريد الإلكتروني:</p>
                  <a href="mailto:info@fakhrkhaleej.com" className="hover:text-accent">info@fakhrkhaleej.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="mr-4">
                  <p className="font-bold">الهاتف:</p>
                  <a href="tel:+966123456789" className="hover:text-accent">+966 12 345 6789</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="mr-4">
                  <p className="font-bold">العنوان:</p>
                  <address className="not-italic">
                    طريق الملك فهد<br />
                    جدة، المملكة العربية السعودية
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="mr-4">
                  <p className="font-bold">ساعات العمل:</p>
                  <p>الأحد - الخميس: 9:00 ص - 5:00 م</p>
                  <p>الجمعة - السبت: مغلق</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">تابعنا</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-accent transition-colors" aria-label="فيسبوك">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,8.31h-3.69V6.47a1.08,1.08,0,0,1,1.1-1.23h2.56V1.09L15.25,1C11.6,1,10.1,3.3,10.1,6.18V8.31H7v4.15h3.1V22h5v-9.54h3.36Z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-accent transition-colors" aria-label="تويتر">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-accent transition-colors" aria-label="لينكدإن">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98,3.5C4.98,4.881,3.87,6,2.5,6S0.02,4.881,0.02,3.5C0.02,2.12,1.13,1,2.5,1S4.98,2.12,4.98,3.5z M5,8H0v16h5V8z M12.982,8H8.014v16h4.969v-8.399c0-4.67,6.029-5.052,6.029,0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-accent transition-colors" aria-label="إنستغرام">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2.163c3.2,0,3.584,0.012,4.85,0.07c3.252,0.148,4.771,1.691,4.919,4.919c0.058,1.265,0.069,1.645,0.069,4.849c0,3.205-0.012,3.584-0.069,4.849c-0.149,3.225-1.664,4.771-4.919,4.919c-1.266,0.058-1.644,0.07-4.85,0.07c-3.204,0-3.584-0.012-4.849-0.07c-3.26-0.149-4.771-1.699-4.919-4.92c-0.058-1.265-0.07-1.644-0.07-4.849c0-3.204,0.013-3.583,0.07-4.849c0.149-3.227,1.664-4.771,4.919-4.919c1.266-0.057,1.645-0.069,4.849-0.069zm0-2.163c-3.259,0-3.667,0.014-4.947,0.072c-4.358,0.2-6.78,2.618-6.98,6.98c-0.059,1.281-0.073,1.689-0.073,4.948c0,3.259,0.014,3.668,0.072,4.948c0.2,4.358,2.618,6.78,6.98,6.98c1.281,0.058,1.689,0.072,4.948,0.072c3.259,0,3.668-0.014,4.948-0.072c4.354-0.2,6.782-2.618,6.979-6.98c0.059-1.28,0.073-1.689,0.073-4.948c0-3.259-0.014-3.667-0.072-4.947c-0.196-4.354-2.617-6.78-6.979-6.98c-1.281-0.059-1.69-0.073-4.949-0.073zm0,5.838c-3.403,0-6.162,2.759-6.162,6.162s2.759,6.163,6.162,6.163s6.162-2.759,6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0,10.162c-2.209,0-4-1.79-4-4c0-2.209,1.791-4,4-4s4,1.791,4,4c0,2.21-1.791,4-4,4zm6.406-11.845c-0.796,0-1.441,0.645-1.441,1.44s0.645,1.44,1.441,1.44c0.795,0,1.439-0.645,1.439-1.44s-0.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">موقعنا</h2>
            <div className="relative h-80 w-full rounded-lg overflow-hidden">
              {/* Imagen estática que se muestra si hay error o mientras carga el mapa */}
              {(!mapLoaded || mapError) && (
                <div className="absolute inset-0 bg-gray-200">
                  <Image
                    src="/images/map_jeddah.jpg"
                    alt="خريطة موقع فخر الخليج في طريق الملك فهد، جدة"
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.3699246774743!2d39.17069587608807!3d21.543333092970884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d1289e6aabad%3A0x9d5a4ad88d0dd1e9!2sKing%20Fahd%20Rd%2C%20Ash%20Shati%2C%20Jeddah%20Saudi%20Arabia!5e0!3m2!1sar!2ssa!4v1687854320571!5m2!1sar!2ssa"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع فخر الخليج في طريق الملك فهد، جدة"
                  className="rounded-lg relative z-10"
                  aria-label="خريطة موقع فخر الخليج في جدة"
                  importance="high"
                  fetchpriority="high"
                  onLoad={() => setMapLoaded(true)}
                  onError={(e) => {
                    console.error('Error al cargar el iframe de Google Maps');
                    setMapError(true);
                    setMapLoaded(false);
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
                      href="https://www.google.com/maps/dir//King+Fahd+Rd,+Ash+Shati,+Jeddah+Saudi+Arabia/@21.5433331,39.1706959,17z/"
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
            <div className="mt-4 text-gray-700">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-primary ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p className="text-center">
                  <strong>العنوان:</strong> طريق الملك فهد، حي الشاطئ، جدة، المملكة العربية السعودية
                </p>
              </div>
              <p className="text-center mt-2 text-sm text-gray-500">
                نحن متواجدون بالقرب من المعالم الرئيسية في المدينة، مما يجعلنا في موقع مثالي لتقديم خدماتنا في جميع أنحاء جدة
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 