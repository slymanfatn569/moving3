# التوثيق التقني - مشروع نقل العفش

## المكونات الرئيسية (Components)

### 1. Header Component (`components/Header.js`)
**الوظيفة:** رأس الموقع والقائمة الرئيسية
```javascript
// المتغيرات الرئيسية:
- navigation: قائمة روابط التنقل
- mobileMenuOpen: حالة القائمة على الأجهزة المحمولة
```

**الميزات:**
- قائمة تنقل متجاوبة
- دعم القوائم المنسدلة للخدمات والمناطق
- تكامل مع Next.js Link للتنقل السريع

### 2. Layout Component (`components/Layout.js`)
**الوظيفة:** التخطيط الرئيسي لجميع الصفحات
```javascript
// البنية:
- Header
- Main Content (children)
- Footer
```

**يتضمن:**
- إدارة Meta tags لكل صفحة
- تطبيق التنسيقات العامة
- إدارة حالة التطبيق

### 3. BlogCard Component (`components/BlogCard.js`)
**الوظيفة:** عرض بطاقات المقالات
```javascript
// Props:
- title: عنوان المقال
- excerpt: مقتطف من المقال
- slug: رابط المقال
- coverImage: صورة الغلاف
- author: معلومات الكاتب
- date: تاريخ النشر
```

## الصفحات الرئيسية

### 1. الصفحة الرئيسية (`pages/index.js`)
**المكونات:**
```javascript
// أقسام الصفحة:
1. Hero Section - القسم الرئيسي
2. Services Section - عرض الخدمات
3. Features Section - المميزات
4. Testimonials Section - آراء العملاء
5. CTA Section - دعوة للعمل
```

**البيانات المستخدمة:**
- خدمات من `lib/data.js`
- آراء العملاء من البيانات المحلية
- صور محسنة من `public/images/`

### 2. صفحة الاتصال (`pages/contact.js`)
**النموذج:**
```javascript
// الحقول:
- name: الاسم
- email: البريد الإلكتروني
- phone: رقم الهاتف
- service: نوع الخدمة
- message: الرسالة

// التكامل:
- EmailJS للإرسال
- التحقق من صحة البيانات
- رسائل النجاح/الخطأ
```

### 3. صفحات الخدمات (`pages/services/[service].js`)
**البنية:**
```javascript
// كل صفحة خدمة تحتوي على:
1. Hero Banner
2. وصف تفصيلي للخدمة
3. قائمة المميزات
4. الأسعار (إن وجدت)
5. CTA للتواصل
```

## API Routes

### 1. Sitemap API (`pages/api/sitemap.js`)
**الوظيفة:** توليد خريطة الموقع ديناميكيًا
```javascript
// يولد XML يحتوي على:
- جميع الصفحات الثابتة
- صفحات المدونة الديناميكية
- صفحات الخدمات
- صفحات المناطق
```

### 2. Robots API (`pages/api/robots.js`)
**الوظيفة:** توليد ملف robots.txt
```javascript
// يحدد:
- User-agent rules
- Sitemap location
- Crawl permissions
```

## البيانات والمحتوى

### 1. بيانات المدونة (`lib/blog.js`)
**البنية:**
```javascript
export const blogPosts = [
  {
    id: string,
    title: string,
    slug: string,
    excerpt: string,
    content: string,
    coverImage: string,
    author: {
      name: string,
      avatar: string,
      bio: string
    },
    date: string,
    readTime: number,
    category: string,
    tags: string[]
  }
]
```

### 2. بيانات عامة (`lib/data.js`)
**يحتوي على:**
```javascript
// Services data
// Areas data
// Company information
// Contact details
```

## التكوينات

### 1. Next.js Config (`next.config.js`)
```javascript
module.exports = {
  // تحسين الصور
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  
  // تحسين الأداء
  swcMinify: true,
  
  // إعدادات البناء
  output: 'export',
  
  // Base path للـ GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/moving3' : ''
}
```

### 2. Tailwind Config (`tailwind.config.js`)
```javascript
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        // ألوان مخصصة للعلامة التجارية
      },
      fontFamily: {
        // خطوط مخصصة
      }
    }
  }
}
```

## التعامل مع الصور

### 1. ImageLoader (`components/ImageLoader.js`)
**الوظيفة:** تحميل الصور بكفاءة
```javascript
// يتعامل مع:
- Lazy loading
- Error handling
- Placeholder images
- Optimization
```

### 2. OptimizedImage (`components/OptimizedImage.js`)
**الوظيفة:** عرض صور محسنة
```javascript
// يستخدم:
- Next.js Image component
- Responsive sizing
- Format optimization
```

## نصائح للتطوير

### 1. إضافة صفحة جديدة:
```javascript
// 1. أنشئ ملف في pages/
// 2. استخدم Layout component
// 3. أضف Meta tags
// 4. أضف الرابط في Header

// مثال:
import Layout from '../components/Layout'

export default function NewPage() {
  return (
    <Layout title="عنوان الصفحة" description="وصف الصفحة">
      {/* محتوى الصفحة */}
    </Layout>
  )
}
```

### 2. إضافة مقال جديد:
```javascript
// 1. أضف المقال في lib/blog.js
// 2. أضف الصور في public/images/
// 3. استخدم تنسيق Markdown للمحتوى
```

### 3. تعديل التصميم:
```javascript
// 1. استخدم Tailwind classes
// 2. عدل styles/globals.css للتنسيقات العامة
// 3. حافظ على التوافق مع الأجهزة المختلفة
```

## الأداء والتحسين

### 1. تحسين الصور:
- استخدم صيغ WebP/AVIF عند الإمكان
- حدد أبعاد الصور لتجنب Layout Shift
- استخدم lazy loading للصور خارج الشاشة

### 2. تحسين JavaScript:
- استخدم dynamic imports للمكونات الثقيلة
- قلل من حجم الحزم بإزالة الاعتماديات غير المستخدمة
- استخدم React.memo للمكونات المعقدة

### 3. SEO:
- استخدم عناوين وصفية لكل صفحة
- أضف Open Graph tags
- حافظ على بنية URL نظيفة

## الأمان

### 1. حماية البيانات:
- تحقق من المدخلات في النماذج
- استخدم HTTPS في الإنتاج
- احم المتغيرات البيئية الحساسة

### 2. أفضل الممارسات:
- حدث الاعتماديات بانتظام
- استخدم Content Security Policy
- راجع الكود للثغرات الأمنية

---

آخر تحديث: ${new Date().toLocaleDateString('ar-SA')} 