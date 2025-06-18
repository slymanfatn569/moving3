import React from 'react';
import Link from 'next/link';
import StaticImage from './StaticImage';

// Determine basePath for images
const getBasePath = () => {
  // For GitHub Pages we need to prepend the basePath
  if (typeof window !== 'undefined') {
    // Check if we're on GitHub Pages
    if (window.location.hostname.includes('github.io')) {
      return '/moving3';
    }
  }
  return '';
};

export default function BlogCard({ post }) {
  // Check if post exists
  if (!post || !post.slug) {
    return null;
  }

  const basePath = getBasePath();
  const coverImage = post.coverImage ? 
    (post.coverImage.startsWith('/') ? `${basePath}${post.coverImage}` : `${basePath}/${post.coverImage}`) 
    : `${basePath}/images/placeholder.jpg`;
  
  const authorAvatar = post.author && post.author.avatar ? 
    (post.author.avatar.startsWith('/') ? `${basePath}${post.author.avatar}` : `${basePath}/${post.author.avatar}`) 
    : `${basePath}/images/placeholder-avatar.jpg`;

  const placeholderImage = `${basePath}/images/placeholder.jpg`;
  const placeholderAvatar = `${basePath}/images/placeholder-avatar.jpg`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link href={`/blog/${post.slug}`} passHref>
        <a className="block">
          <div className="relative h-48 sm:h-56">
            <StaticImage 
              src={coverImage} 
              alt={post.title || 'مقال المدونة'} 
              width={600}
              height={400}
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
              onError={(e) => {
                e.target.src = placeholderImage;
              }}
            />
            {post.featured && (
              <span className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                مميز
              </span>
            )}
          </div>
          <div className="p-4">
            <div className="flex mb-3">
              <span className="text-xs bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full">
                {post.category || 'عام'}
              </span>
              <span className="mr-3 text-xs text-gray-500">
                {post.date || ''}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title || 'عنوان المقال'}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt || ''}</p>
            {post.author && (
              <div className="flex items-center">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <StaticImage 
                    src={authorAvatar} 
                    alt={post.author.name || 'اسم الكاتب'}
                    width={40}
                    height={40}
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.src = placeholderAvatar;
                    }}
                  />
                </div>
                <div className="mr-3">
                  <p className="text-sm font-medium">{post.author.name || ''}</p>
                  <p className="text-xs text-gray-500">{post.author.title || ''}</p>
                </div>
              </div>
            )}
          </div>
        </a>
      </Link>
    </div>
  );
} 