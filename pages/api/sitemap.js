import { getAllPosts } from '../../lib/blog';
import { areas } from '../../pages/areas/[slug]';

/**
 * نقطة نهاية API لتوليد خريطة الموقع
 * 
 * هذه النقطة النهاية تقوم بتوليد خريطة الموقع ديناميكيًا وتقديمها بتنسيق XML
 * مع تحديث التواريخ تلقائيًا
 */
export default async function handler(req, res) {
  try {
    // ضبط رؤوس HTTP
    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
    
    // استخدام متغيرات البيئة للحصول على عنوان الموقع
    const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fakhrkhaleej.com';
    
    // الحصول على بيانات المدونة والمناطق
    const allPosts = getAllPosts();
    
    // توليد خريطة الموقع
    const sitemap = generateSiteMap(BASE_URL, allPosts, areas);
    
    // إرسال الاستجابة
    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap API:', error);
    
    // إرسال خريطة موقع فارغة في حالة الخطأ
    res.status(500).send('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');
  }
}

/**
 * توليد محتوى خريطة الموقع
 */
function generateSiteMap(baseUrl, posts, areasData) {
  const today = new Date().toISOString();
  
  // تعريف الخدمات الرئيسية
  const mainServices = [
    { slug: 'corporate', title: 'خدمات نقل الشركات' },
    { slug: 'cleaning', title: 'خدمات التنظيف المتخصصة' },
    { slug: 'storage', title: 'خدمات التخزين' },
    { slug: 'assembly', title: 'خدمات فك وتركيب الأثاث' }
  ];
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- الصفحة الرئيسية -->
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}" />
  </url>
  
  <!-- صفحة الخدمات -->
  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/services" />
  </url>
  
  <!-- صفحات الخدمات الفردية -->
  ${mainServices.map(service => `
  <url>
    <loc>${baseUrl}/services/${service.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/services/${service.slug}" />
  </url>
  `).join('')}
  
  <!-- صفحة المناطق -->
  <url>
    <loc>${baseUrl}/areas</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/areas" />
  </url>
  
  <!-- صفحات المناطق الفردية -->
  ${areasData
    .map(area => `
  <url>
    <loc>${baseUrl}/areas/${area.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/areas/${area.slug}" />
  </url>
  `)
    .join('')}
  
  <!-- صفحة الاتصال -->
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/contact" />
  </url>
  
  <!-- صفحة المدونة -->
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/blog" />
  </url>
  
  <!-- صفحات المدونة الفردية -->
  ${posts
    .map(({ id, date, title }) => {
      const postDate = new Date(date).toISOString();
      return `
  <url>
    <loc>${baseUrl}/blog/${id}</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/blog/${id}" />
  </url>
  `;
    })
    .join('')}
</urlset>`;
} 