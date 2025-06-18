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
        src={src}
        alt={alt || 'صورة'}
        width={width}
        height={height}
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