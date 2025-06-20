import React from 'react';
import Link from 'next/link';
import OptimizedImage from './OptimizedImage';

// Helper function to get category icon
const getCategoryIcon = (category) => {
  const icons = {
    'نصائح النقل': '💡',
    'دليل التغليف': '📦',
    'العناية بالأثاث': '🛋️',
    'رعاية الأثاث': '🛋️',
    'تقدير التكلفة': '💰',
    'أخبار الشركة': '📢',
    'قصص نجاح': '⭐',
    'نقل المكاتب': '🏢',
    'نقل المنازل': '🏠',
    'تخزين': '🏪',
    'خدمات متخصصة': '🔧'
  };
  return icons[category] || '📝';
};

export default function BlogCard({ post, featured = false }) {
  // Check if post exists
  if (!post || !post.slug) {
    return null;
  }

  const categoryIcon = getCategoryIcon(post.category);

  return (
    <div className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${featured ? 'transform hover:-translate-y-2' : 'transform hover:-translate-y-1'}`}>
      <Link href={`/blog/${post.slug}`} passHref>
        <a className="block">
          <div className="relative h-56 overflow-hidden">
            <OptimizedImage 
              src={post.coverImage || '/images/placeholder.jpg'} 
              alt={post.title || 'مقال المدونة'} 
              width={600}
              height={400}
              objectFit="cover"
              className="w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Category badge */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center bg-white/95 backdrop-blur-sm text-gray-800 text-sm font-bold px-3 py-2 rounded-full shadow-lg">
                <span className="mr-1">{categoryIcon}</span>
                {post.category || 'عام'}
              </span>
            </div>

            {/* Featured badge */}
            {(post.featured || featured) && (
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center bg-accent text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg animate-pulse">
                  <span className="mr-1">⭐</span>
                  مميز
                </span>
              </div>
            )}

            {/* Reading time on hover */}
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-flex items-center bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                <span className="mr-1">⏱️</span>
                {post.readingTime || '5'} دقائق قراءة
              </span>
            </div>
          </div>

          <div className="p-6">
            {/* Date and stats */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500 flex items-center">
                <span className="mr-1">📅</span>
                {post.date || new Date().toLocaleDateString('ar-SA')}
              </span>
              {post.views && (
                <span className="text-sm text-gray-500 flex items-center">
                  <span className="mr-1">👁️</span>
                  {post.views} مشاهدة
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {post.title || 'عنوان المقال'}
            </h3>
            
            <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
              {post.excerpt || 'مقتطف من المقال...'}
            </p>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author info */}
            {post.author && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-gray-200 group-hover:ring-primary transition-colors duration-300">
                    <OptimizedImage 
                      src={post.author.avatar || '/images/placeholder-avatar.jpg'} 
                      alt={post.author.name || 'اسم الكاتب'}
                      width={40}
                      height={40}
                      objectFit="cover"
                    />
                  </div>
                  <div className="mr-3">
                    <p className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors duration-300">
                      {post.author.name || 'كاتب المقال'}
                    </p>
                    <p className="text-xs text-gray-500">
                      {post.author.title || 'كاتب'}
                    </p>
                  </div>
                </div>

                {/* Read more arrow */}
                <div className="text-primary group-hover:translate-x-1 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </div>
            )}

            {/* Like/Share buttons on hover */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="flex items-center text-gray-500 hover:text-red-500 transition-colors duration-300">
                <span className="mr-1">❤️</span>
                <span className="text-sm">{post.likes || 0}</span>
              </button>
              <button className="flex items-center text-gray-500 hover:text-blue-500 transition-colors duration-300">
                <span className="mr-1">💬</span>
                <span className="text-sm">{post.comments || 0}</span>
              </button>
              <button className="flex items-center text-gray-500 hover:text-green-500 transition-colors duration-300">
                <span className="mr-1">📤</span>
                <span className="text-sm">مشاركة</span>
              </button>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
} 