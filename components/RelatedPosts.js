import React from 'react'
import Link from 'next/link'
import StaticImage from './StaticImage'

const RelatedPosts = ({ posts, getImagePath }) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          مقالات ذات صلة
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          اكتشف المزيد من المقالات المفيدة حول نقل العفش والأثاث
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, 6).map((relatedPost, index) => (
          <article key={relatedPost.id} className="group relative">
            <Link href={`/blog/${relatedPost.slug}`} passHref>
              <a className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <StaticImage 
                    src={getImagePath(relatedPost.coverImage)} 
                    alt={relatedPost.title}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Reading Time Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {relatedPost.readingTime || '5'} دقائق
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {relatedPost.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {relatedPost.date}
                    </span>
                    {relatedPost.featured && (
                      <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                        ⭐ مميز
                      </span>
                    )}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {relatedPost.excerpt}
                  </p>
                  
                  {/* Tags */}
                  {relatedPost.tags && relatedPost.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {relatedPost.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Read More */}
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-medium group-hover:text-primary-dark transition-colors">
                      اقرأ المزيد
                    </span>
                    <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </div>
              </a>
            </Link>
          </article>
        ))}
      </div>
      
      {/* See More Button */}
      <div className="text-center mt-12">
        <Link href="/blog" passHref>
          <a className="inline-flex items-center bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
            </svg>
            عرض جميع المقالات
          </a>
        </Link>
      </div>
    </div>
  );
};

export default RelatedPosts; 