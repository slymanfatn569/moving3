import { AUTHORS } from './data';
import fs from 'fs';
import path from 'path';

// Function to parse simple frontmatter
function parseFrontmatter(fileContent) {
  const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontmatter = {};
  let content = fileContent;

  if (match) {
    const frontmatterBlock = match[1];
    content = fileContent.replace(match[0], '').trim();
    frontmatterBlock.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        const value = valueParts.join(':').trim().replace(/^['"]|['"]$/g, '');
        frontmatter[key.trim()] = value;
      }
    });
  }

  return { frontmatter, content };
}


// Array de artículos del blog
export const BLOG_POSTS = [
  {
    id: '1',
    slug: 'how-to-choose-reliable-moving-company-jeddah',
    title: 'كيف تختار شركة نقل عفش موثوقة في جدة',
    excerpt: 'دليل شامل يساعدك على اختيار أفضل شركة نقل عفش في جدة مع النصائح والمعايير التي يجب مراعاتها لضمان نقل آمن وموثوق لأثاثك.',
    content: `
    <h2>كيف تختار شركة نقل عفش موثوقة في جدة: دليلك الكامل</h2>
    
    <p>الانتقال إلى منزل جديد في جدة يمكن أن يكون تجربة مثيرة، ولكنه يأتي مع تحدي كبير: اختيار شركة نقل عفش موثوقة تضمن سلامة ممتلكاتك. مع وجود العديد من الخيارات، قد يكون من الصعب التمييز بين الشركات المحترفة وغيرها. هذا الدليل الشامل والموسع سيمنحك الأدوات والمعايير اللازمة لاتخاذ قرار مستنير.</p>
    
    <h3>1. البحث العميق والتقييمات الموثوقة</h3>
    <p>لا تكتفِ بالبحث السطحي. تعمق في البحث عن سمعة الشركة. اقرأ التقييمات على منصات متعددة للحصول على صورة كاملة. ابحث عن:</p>
    <ul>
      <li><strong>موقع الشركة الرسمي:</strong> هل يبدو احترافيًا؟ هل يعرض معلومات واضحة عن الخدمات والتراخيص؟</li>
      <li><strong>منصات التواصل الاجتماعي:</strong> تحقق من تفاعل العملاء مع منشورات الشركة والردود على التعليقات.</li>
      <li><strong>مواقع التقييمات المستقلة:</strong> مواقع مثل Google Maps و Yelp توفر تقييمات غير متحيزة.</li>
      <li><strong>منتديات الإنترنت المحلية:</strong> ابحث في المنتديات التي يشارك فيها سكان جدة للحصول على توصيات حقيقية.</li>
      <li><strong>الأصدقاء والعائلة:</strong> اسأل عن تجاربهم الشخصية، فهذه غالبًا ما تكون المصدر الأكثر موثوقية.</li>
    </ul>
    
    <h3>2. التحقق من الترخيص والتأمين</h3>
    <p>هذه الخطوة غير قابلة للتفاوض. الشركة المحترفة يجب أن تكون مسجلة ومرخصة من الجهات الحكومية السعودية. اطلب رؤية نسخة من الترخيص. بالإضافة إلى ذلك، تحقق من وجود تأمين شامل يغطي أي أضرار قد تحدث لممتلكاتك أثناء النقل. هذا يوفر لك حماية قانونية ومالية.</p>
    
    <h3>3. الخبرة والتخصص: ليس كل النقل متشابهًا</h3>
    <p>الخبرة تلعب دورًا حاسمًا. شركة تعمل منذ سنوات في جدة ستكون على دراية أفضل بالطرق والتحديات اللوجستية للمدينة. اسأل عن:</p>
    <ul>
      <li><strong>عدد سنوات الخبرة:</strong> كم سنة وهم يعملون في هذا المجال؟</li>
      <li><strong>التخصص:</strong> هل لديهم خبرة في نقل أنواع معينة من الأثاث مثل الأثاث الفاخر، التحف، أو البيانو؟</li>
      <li><strong>تدريب الموظفين:</strong> هل يتم تدريب العمال على تقنيات الرفع والتغليف الآمنة؟</li>
    </ul>
    
    <h3>4. الخدمات المقدمة: باقة متكاملة لراحتك</h3>
    <p>الشركات الرائدة تقدم مجموعة متكاملة من الخدمات لتسهيل عملية الانتقال. تأكد من أن الشركة التي تختارها تقدم ما تحتاجه:</p>
    <ul>
      <li><strong>التغليف والتعبئة:</strong> هل يقدمون خدمة تغليف كاملة أم جزئية؟</li>
      <li><strong>فك وتركيب الأثاث:</strong> خدمة ضرورية للأسرة والخزائن الكبيرة.</li>
      <li><strong>مواد التغليف:</strong> هل يوفرون مواد تغليف عالية الجودة؟</li>
      <li><strong>خدمات التخزين:</strong> حلول تخزين آمنة إذا كنت بحاجة لتخزين أثاثك مؤقتًا.</li>
      <li><strong>النقل المتخصص:</strong> للقطع الثمينة التي تتطلب عناية خاصة.</li>
    </ul>
    
    <h3>5. المعدات والأسطول: أدوات النجاح</h3>
    <p>جودة المعدات تعكس احترافية الشركة. تحقق من أن لديهم:</p>
    <ul>
      <li><strong>شاحنات مجهزة:</strong> سيارات نقل مغلقة ومبطنة لحماية الأثاث من الصدمات والطقس.</li>
      <li><strong>معدات الرفع:</strong> رافعات وأحزمة للمساعدة في نقل القطع الثقيلة بأمان.</li>
      <li><strong>أدوات الفك والتركيب:</strong> مجموعة كاملة من الأدوات اللازمة للتعامل مع جميع أنواع الأثاث.</li>
    </ul>
    
    <h3>6. الأسعار والشفافية: لا مفاجآت غير سارة</h3>
    <p>احصل على عروض أسعار مكتوبة ومفصلة من ثلاث شركات على الأقل. يجب أن يتضمن عرض السعر تفاصيل كاملة عن التكاليف، بما في ذلك أي رسوم إضافية محتملة. كن حذرًا من الأسعار المنخفضة جدًا، فقد تكون علامة على خدمة رديئة أو تكاليف خفية.</p>
    
    <h3>7. العقد والاتفاقية: كل شيء مكتوب</h3>
    <p>لا تعتمد على الاتفاقات الشفهية. اطلب عقدًا مكتوبًا يوضح جميع تفاصيل الخدمة، بما في ذلك:</p>
    <ul>
      <li><strong>قائمة الجرد:</strong> قائمة بجميع الأغراض التي سيتم نقلها.</li>
      <li><strong>التكلفة الإجمالية:</strong> وتفصيلها.</li>
      <li><strong>مواعيد النقل:</strong> تاريخ ووقت التحميل والتسليم.</li>
      <li><strong>تفاصيل التأمين:</strong> ما يغطيه التأمين وكيفية المطالبة به.</li>
      <li><strong>سياسة الإلغاء:</strong> الشروط في حال احتجت لتغيير الموعد.</li>
    </ul>
    
    <h3>8. خدمة العملاء: شريكك في الانتقال</h3>
    <p>منذ أول اتصال، يمكنك تقييم مستوى خدمة العملاء. هل هم متعاونون؟ هل يجيبون على أسئلتك بوضوح واحترافية؟ شركة ذات خدمة عملاء ممتازة ستكون شريكًا موثوقًا به خلال عملية النقل المجهدة.</p>
    
    <h2>الخلاصة: استثمار في راحة البال</h2>
    <p>اختيار شركة نقل العفش المناسبة في جدة هو استثمار في سلامة ممتلكاتك وراحة بالك. من خلال اتباع هذه الخطوات وإجراء بحث شامل، يمكنك العثور على شركة محترفة وموثوقة تجعل من تجربة انتقالك تجربة سلسة وناجحة. لا تتردد في طرح الأسئلة وطلب كل شيء كتابيًا لضمان حقوقك.</p>
    `,
    coverImage: '/images/reliable_moving_service.jpeg',
    date: '١٥ يناير ٢٠٢٥',
    author: AUTHORS[0], // Fahad AlHarbi
    category: 'نصائح عامة',
    tags: ['نقل عفش', 'جدة', 'اختيار شركة', 'نصائح'],
    readingTime: 6,
    featured: true
  },
  {
    id: '2',
    slug: 'comprehensive-guide-furniture-moving-jeddah',
    title: 'الدليل الشامل لنقل العفش في جدة: كل ما تحتاج معرفته',
    excerpt: 'دليل متكامل يغطي جميع جوانب عملية نقل العفش في جدة، من التخطيط والتغليف إلى النقل والتركيب، مع نصائح لتجنب المشكلات الشائعة.',
    content: `
    <h2>الدليل الشامل لنقل العفش في جدة: من التخطيط إلى الاستقرار</h2>
    
    <p>الانتقال إلى منزل جديد هو بداية فصل جديد، ولكن عملية النقل نفسها يمكن أن تكون معقدة ومليئة بالتحديات، خاصة في مدينة حيوية مثل جدة. لتجنب الفوضى والأضرار المحتملة، قمنا بتجميع هذا الدليل الشامل الذي يغطي كل جانب من جوانب عملية النقل، بدءًا من الأخطاء الشائعة التي يجب تجنبها وصولًا إلى نصائح الخبراء لضمان انتقال سلس وناجح.</p>
    
    <h3>الأخطاء العشرة الشائعة في نقل العفش وكيفية تجنبها</h3>
    
    <h4>1. عدم التخطيط المسبق: أساس الفوضى</h4>
    <p><strong>الخطأ:</strong> الانتظار حتى اللحظة الأخيرة لبدء التخطيط، مما يؤدي إلى قرارات متسرعة ونسيان تفاصيل هامة.</p>
    <p><strong>الحل الاحترافي:</strong> ابدأ التخطيط قبل 4-6 أسابيع على الأقل. قم بإنشاء "ملف نقل" يحتوي على قائمة مهام مفصلة، جدول زمني، ميزانية تقديرية، وعروض أسعار من شركات النقل. قسّم المهام أسبوعيًا لتجنب الشعور بالإرهاق.</p>
    
    <h4>2. التقليل من حجم الممتلكات: "لدينا القليل من الأغراض"</h4>
    <p><strong>الخطأ:</strong> الاعتقاد بأن لديك أغراضًا أقل مما هي عليه في الواقع، مما يؤدي إلى نقص في مواد التغليف أو حجز شاحنة صغيرة جدًا.</p>
    <p><strong>الحل الاحترافي:</strong> قم بجولة في كل غرفة وافتح كل خزانة ودرج. استخدم قاعدة "المس، قرر" لكل غرض: هل سأنقله، أبيعه، أتبرع به، أم أتخلص منه؟ هذا لا يقلل فقط من حجم المنقولات، بل يوفر أيضًا في تكلفة النقل.</p>
    
    <h4>3. اختيار شركة نقل على أساس السعر فقط</h4>
    <p><strong>الخطأ:</strong> اختيار أرخص عرض سعر دون التحقق من سمعة الشركة أو خدماتها.</p>
    <p><strong>الحل الاحترافي:</strong> السعر مهم، لكن الموثوقية أهم. ابحث عن شركة مرخصة ومؤمنة، واقرأ تقييمات العملاء، واطلب توصيات. (راجع دليلنا المفصل حول <a href="/blog/how-to-choose-reliable-moving-company-jeddah">كيفية اختيار شركة نقل موثوقة</a>).</p>
    
    <h4>4. التغليف غير الاحترافي: وصفة للتلف</h4>
    <p><strong>الخطأ:</strong> استخدام صناديق قديمة أو مواد تغليف غير كافية، ووضع الأغراض بشكل عشوائي.</p>
    <p><strong>الحل الاحترافي:</strong> استثمر في مواد تغليف جيدة. استخدم صناديق مزدوجة الجدار للأغراض الثقيلة، ولفائف الفقاعات للزجاجيات، وورق تغليف نظيف للأطباق. لا تترك فراغات في الصناديق؛ املأها بورق أو ملابس ناعمة لمنع الحركة.</p>
    `,
    coverImage: '/images/expert_furniture_movers.jpeg',
    date: '٢٢ يناير ٢٠٢٥',
    author: AUTHORS[2], // Yazeed AlOtaibi
    category: 'نصائح عامة',
    tags: ['أخطاء شائعة', 'نقل عفش', 'نصائح', 'تغليف'],
    readingTime: 7,
    featured: false
  },
  // Posts from markdown files will be added here dynamically
];

// Dynamically add posts from the /lib/posts directory
const postsDirectory = path.join(process.cwd(), 'lib/posts');
try {
  const filenames = fs.readdirSync(postsDirectory);

  filenames.forEach(filename => {
    if (path.extname(filename) === '.md') {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { frontmatter, content } = parseFrontmatter(fileContents);
      const author = AUTHORS.find(a => a.id === frontmatter.authorId);

      if (frontmatter.title && author) {
        BLOG_POSTS.push({
          id: (BLOG_POSTS.length + 1).toString(),
          slug: path.basename(filename, '.md'),
          title: frontmatter.title,
          excerpt: frontmatter.excerpt,
          content: content,
          coverImage: frontmatter.coverImage,
          date: frontmatter.date,
          author: author,
          category: frontmatter.category,
          tags: frontmatter.tags ? frontmatter.tags.split(',').map(t => t.trim()) : [],
          readingTime: parseInt(frontmatter.readingTime, 10) || 10,
          featured: frontmatter.featured === 'true'
        });
      }
    }
  });
} catch (error) {
  console.error("Could not read posts directory:", error);
}

// Funciones de utilidad para el blog
export function getAllPosts() {
  // Sort posts by date in descending order
  return BLOG_POSTS.sort((post1, post2) => (new Date(post2.date) > new Date(post1.date) ? 1 : -1));
}

export function getPostBySlug(slug) {
  return BLOG_POSTS.find(post => post.slug === slug);
}

export function getPostsByAuthor(authorId) {
  return BLOG_POSTS.filter(post => post.author.id === authorId);
}

export function getPostsByCategory(category) {
  return BLOG_POSTS.filter(post => post.category === category);
}

export function getAllCategories() {
  const categories = new Set();
  BLOG_POSTS.forEach(post => {
    categories.add(post.category);
  });
  return Array.from(categories);
} 