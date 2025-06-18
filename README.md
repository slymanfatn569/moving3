# Fakhr Khaleej Professional Blog

A professional, SEO-optimized blog implementation for Fakhr Khaleej, a leading provider of professional uniforms and services across Saudi Arabia. This project follows the SEO roadmap requirements provided and implements key blog features with modern web technologies.

## Built With

- **Next.js** - React framework for server-rendered applications
- **TypeScript** - For type-safe code
- **TailwindCSS** - Utility-first CSS framework
- **React Markdown** - For rendering markdown content

## Key Features

- **SEO Optimization** 
  - Semantic HTML structure
  - Schema.org markup for blog posts
  - Optimized meta tags
  - Proper heading hierarchy
  - Mobile-first responsive design

- **Dynamic Blog Content**
  - Markdown-based content rendering
  - Author profiles
  - Categories and tags
  - Reading time estimation

- **Performance**
  - Image optimization with Next.js Image component
  - Lazy loading of images
  - Core Web Vitals optimization

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/fakhrkhaleej/blog.git
cd blog
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Project Structure

- **/pages** - Next.js pages and API routes
- **/components** - Reusable React components
- **/public** - Static assets including images
- **/lib** - Utility functions, data, and types
- **/styles** - Global CSS and Tailwind configuration

## Content Management

Blog posts are currently stored as data in the `lib/blog.ts` file. Each post includes:

- Title and meta information
- Cover image
- Author details
- Content in Markdown format
- Categories and tags

## Deployment

The site is configured for deployment on Vercel, but can be adapted for other hosting platforms.

## SEO Compliance

This implementation follows the SEO roadmap requirements:

- Content structure with semantic HTML
- Strategic keyword implementation
- Rich content with proper formatting
- Schema.org structured data
- Optimized images with descriptive alt text
- Internal linking strategy
- Mobile-first responsive design
- Accessibility compliance

## License

This project is proprietary and confidential. All rights reserved.

## إعداد بيئة المشروع

### المتغيرات البيئية

قبل رفع الموقع على Netlify، يجب تعيين المتغيرات البيئية التالية في إعدادات Netlify:

1. استخدم ملف `netlify.env` كمرجع للمتغيرات المطلوبة.

2. في لوحة تحكم Netlify، قم بإضافة المتغيرات البيئية:
   - انتقل إلى: `Site settings > Build & deploy > Environment variables`
   - أضف كل متغير من ملف `netlify.env` في واجهة Netlify

3. المتغيرات الأساسية المطلوبة:
   ```
   NEXT_PUBLIC_SITE_URL=https://fakhrkhaleej.netlify.app
   NEXT_PUBLIC_DOMAIN=fakhrkhaleej.netlify.app
   NEXT_PUBLIC_SITE_NAME=فخر الخليج
   NEXT_PUBLIC_DEFAULT_LOCALE=ar
   NODE_ENV=production
   NETLIFY=true
   ```

4. بعد الحصول على الدومين النهائي، قم بتحديث المتغيرات:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-actual-domain.com
   NEXT_PUBLIC_DOMAIN=your-actual-domain.com
   ```

5. يمكنك أيضًا تعديل ملف `public/config/env.js` ليعكس نفس القيم.

## تشغيل المشروع محليًا

```bash
# تثبيت التبعيات
npm install

# تشغيل خادم التطوير
npm run dev
```

## بناء المشروع للإنتاج

```bash
# بناء المشروع
npm run build

# تشغيل الإصدار المبني
npm start
```

## Available Scripts

### Development

```bash
# Run the development server
npm run dev
```

### Production Builds

```bash
# Standard build
npm run build

# Clean build (removes previous build artifacts first)
npm run build:clean

# Full production deployment (clean install, lint, clean build, and start)
npm run prod:full
```

### Analysis & Optimization

```bash
# Analyze bundle sizes
npm run analyze
```

### Other Commands

```bash
# Start the production server
npm run start

# Run linting
npm run lint

# Simple build and start
npm run deploy
```

## Build Optimizations

The project includes several optimizations:

- Bundle analyzer for identifying large dependencies
- Clean builds to prevent stale artifacts
- Compression enabled for better performance
- Cache control headers for static assets
- Error handling for image loading 