/**
 * نقطة نهاية API لتوليد ملف robots.txt
 * 
 * هذه النقطة النهاية تقوم بتوليد ملف robots.txt ديناميكيًا وفقًا لبيئة التشغيل
 * وتسمح بإضافة قواعد مختلفة لكل بيئة
 */
export default function handler(req, res) {
  try {
    // ضبط رؤوس HTTP
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
    
    // استخدام متغيرات البيئة للحصول على عنوان الموقع
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fakhrkhaleej.com';
    
    // التحقق من بيئة التشغيل
    const isProd = process.env.NODE_ENV === 'production';
    
    // توليد محتوى ملف robots.txt
    const robotsTxt = generateRobotsTxt(siteUrl, isProd);
    
    // إرسال الاستجابة
    res.status(200).send(robotsTxt);
  } catch (error) {
    console.error('Error generating robots.txt API:', error);
    
    // إرسال ملف robots.txt بسيط في حالة الخطأ
    res.status(500).send('User-agent: *\nDisallow: /');
  }
}

/**
 * توليد محتوى ملف robots.txt
 */
function generateRobotsTxt(siteUrl, isProd) {
  const today = new Date().toISOString().split('T')[0];
  
  // المحتوى الأساسي
  let content = `# robots.txt لموقع فخر الخليج
# تاريخ التحديث: ${today}

`;

  // القواعد بناءً على بيئة التشغيل
  if (isProd) {
    // قواعد بيئة الإنتاج
    content += `# السماح لجميع روبوتات محركات البحث بزيارة جميع صفحات الموقع
User-agent: *
Allow: /

# تحديد أقصى معدل لزحف روبوتات جوجل لتحسين الأداء
User-agent: Googlebot
Crawl-delay: 1

# تحديد أقصى معدل لزحف روبوتات بينج لتحسين الأداء
User-agent: bingbot
Crawl-delay: 1

# منع الوصول إلى الصفحات الإدارية أو الخاصة
Disallow: /admin/
Disallow: /private/
Disallow: /temp/
Disallow: /dev/
Disallow: /api/
Disallow: /_next/static/

# السماح بفهرسة صفحات المدونة والخدمات والمناطق
Allow: /blog/
Allow: /services/
Allow: /areas/

# مسار خريطة الموقع XML
Sitemap: ${siteUrl}/sitemap.xml`;
  } else {
    // قواعد بيئة التطوير
    content += `# منع جميع روبوتات محركات البحث في بيئة التطوير
User-agent: *
Disallow: /

# مسار خريطة الموقع XML
Sitemap: ${siteUrl}/sitemap.xml`;
  }
  
  return content;
} 