import React, { useState, useEffect } from 'react';
import StaticImage from './StaticImage';

// تأثير التمويه للصور أثناء التحميل
const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="20%" />
      <stop stop-color="#edeef1" offset="50%" />
      <stop stop-color="#f6f7f8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) => typeof window === 'undefined'
  ? Buffer.from(str).toString('base64')
  : window.btoa(str);

// محددات الصورة الاحتياطية
const fallbacks = {
  extensions: ['jpg', 'jpeg', 'png', 'webp', 'svg'],
  prefixes: ['', '/images/', '/public/images/']
};

// الحصول على مسار الأساس للموقع
const getBasePath = () => {
  // عند العمل على GitHub Pages نحتاج لإضافة مسار الأساس
  if (typeof window !== 'undefined') {
    // التحقق مما إذا كان الموقع يعمل على GitHub Pages
    if (window.location.hostname.includes('github.io')) {
      return '/moving3';
    }
    // التحقق من وجود env.js
    if (window.ENV && window.ENV.BASE_PATH) {
      return window.ENV.BASE_PATH;
    }
  }
  return '';
};

// التحقق من وجود الصورة ومعالجة الخطأ
const tryImage = async (imagePath) => {
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
};

const ImageLoader = ({ 
  src, 
  alt, 
  width = 700, 
  height = 475, 
  className = '',
  priority = false,
  objectFit = 'cover',
  onLoad,
  onClick,
  quality = 85,
  ...rest
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const basePath = getBasePath();
  
  // معالجة مسار الصورة
  let imageSrc = src;
  
  // إضافة المسار الأساسي عند الضرورة
  if (src && !src.startsWith('http') && !src.startsWith('data:')) {
    imageSrc = src.startsWith('/') ? `${basePath}${src}` : `${basePath}/${src}`;
  }
  
  // معالجة خطأ الصورة
  const handleError = () => {
    setError(true);
    setLoading(false);
  };
  
  // معالجة تحميل الصورة
  const handleLoad = (e) => {
    setLoading(false);
    if (onLoad) onLoad(e);
  };
  
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ 
        width: width === 'auto' ? 'auto' : typeof width === 'number' ? `${width}px` : width,
        height: height === 'auto' ? 'auto' : typeof height === 'number' ? `${height}px` : height,
      }}
      onClick={onClick}
    >
      {loading && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-100"
          dangerouslySetInnerHTML={{ __html: shimmer(width, height) }}
        />
      )}
      
      <StaticImage
        src={error ? `${basePath}/images/placeholder.jpg` : imageSrc}
        alt={alt || 'صورة'}
        width={width}
        height={height}
        onError={handleError}
        onLoad={handleLoad}
        loading={priority ? 'eager' : 'lazy'}
        style={{ 
          objectFit, 
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
        }}
        {...rest}
      />
    </div>
  );
};

export default ImageLoader; 