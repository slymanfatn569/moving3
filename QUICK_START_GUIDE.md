# دليل البدء السريع - مشروع نقل العفش

## 🚀 البدء السريع

### المتطلبات الأساسية
- Node.js (الإصدار 14.x أو أحدث)
- npm أو yarn
- محرر أكواد (يُنصح بـ VS Code)
- Git

### الخطوات الأولى

#### 1. استنساخ المشروع
```bash
git clone [repository-url]
cd 3
```

#### 2. تثبيت التبعيات
```bash
npm install
# أو
yarn install
```

#### 3. إعداد المتغيرات البيئية
إنشاء ملف `.env.local` في المجلد الرئيسي:
```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=نقل عفش

# Environment
NODE_ENV=development
```

#### 4. تشغيل المشروع محليًا
```bash
npm run dev
# أو
yarn dev
```

افتح المتصفح على: [http://localhost:3000](http://localhost:3000)

## 📁 هيكل المشروع

```
3/
├── components/     # مكونات React
├── pages/         # صفحات Next.js
├── public/        # الملفات الثابتة
├── lib/           # المكتبات والبيانات
├── styles/        # ملفات CSS
└── types/         # TypeScript types
```

## 🛠️ الأوامر المهمة

### التطوير
```bash
# تشغيل خادم التطوير
npm run dev

# بناء للإنتاج
npm run build

# تشغيل الإنتاج محليًا
npm start

# فحص الكود
npm run lint

# تحليل حجم الحزم
npm run analyze
```

### النشر
```bash
# النشر على GitHub Pages
npm run deploy

# بناء ونشر كامل
npm run prod:full
```

## 📝 كيفية إضافة...

### صفحة جديدة
1. أنشئ ملف في `pages/` (مثل: `pages/about.js`)
2. استخدم Layout component:
```javascript
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout title="من نحن" description="معلومات عن الشركة">
      <div className="container mx-auto px-4 py-8">
        <h1>من نحن</h1>
        {/* محتوى الصفحة */}
      </div>
    </Layout>
  )
}
```

### مقال جديد للمدونة
1. افتح `lib/blog.js`
2. أضف كائن جديد في مصفوفة `blogPosts`:
```javascript
{
  id: 'unique-id',
  title: 'عنوان المقال',
  slug: 'article-slug',
  excerpt: 'مقتطف من المقال...',
  content: `محتوى المقال بصيغة Markdown`,
  coverImage: '/images/article-cover.jpg',
  author: {
    name: 'اسم الكاتب',
    avatar: '/images/author-avatar.jpg',
    bio: 'نبذة عن الكاتب'
  },
  date: '2024-01-01',
  readTime: 5,
  category: 'نصائح',
  tags: ['نقل', 'عفش']
}
```

### خدمة جديدة
1. أنشئ ملف في `pages/services/` (مثل: `pages/services/international.js`)
2. اتبع نفس بنية الخدمات الأخرى
3. أضف الرابط في Header component

### مكون جديد
1. أنشئ ملف في `components/` (مثل: `components/Feature.js`)
2. اكتب المكون:
```javascript
export default function Feature({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
```

## 🎨 التصميم والتنسيق

### استخدام TailwindCSS
```jsx
// Classes للتخطيط
<div className="container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* المحتوى */}
  </div>
</div>

// Classes للتنسيق
<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
  زر
</button>

// Classes للتجاوب
<div className="text-sm md:text-base lg:text-lg">
  نص متجاوب
</div>
```

### إضافة أنماط مخصصة
في `styles/globals.css`:
```css
@layer components {
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded;
  }
}
```

## 🐛 حل المشاكل الشائعة

### مشكلة في تحميل الصور
- تأكد من وضع الصور في `public/images/`
- استخدم المسار `/images/filename.jpg` (بدون `public`)

### خطأ في البناء
```bash
# امسح ملفات البناء السابقة
rm -rf .next
rm -rf out
npm run build
```

### مشكلة في EmailJS
- تحقق من المتغيرات البيئية
- تأكد من تفعيل الخدمة في حساب EmailJS

## 📚 موارد مفيدة

### الوثائق الرسمية
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

### أدوات مساعدة
- [React Developer Tools](https://react.dev/learn/react-developer-tools)
- [TailwindCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [ES7+ React snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## 🤝 المساهمة في المشروع

### قبل البدء
1. اقرأ ملفات التوثيق
2. افهم بنية المشروع
3. اتبع معايير الكود المستخدمة

### خطوات المساهمة
1. أنشئ فرع جديد: `git checkout -b feature/your-feature`
2. اكتب التغييرات
3. اختبر التغييرات محليًا
4. ارفع التغييرات: `git commit -m "وصف التغيير"`
5. ادفع الفرع: `git push origin feature/your-feature`

## 📞 الدعم والمساعدة

إذا واجهت أي مشكلة:
1. راجع هذا الدليل
2. اقرأ ملفات التوثيق الأخرى
3. ابحث في Issues على GitHub
4. اطرح سؤالك في قسم Discussions

---

آخر تحديث: ${new Date().toLocaleDateString('ar-SA')}
تم إعداد هذا الدليل لتسهيل البدء السريع في المشروع 