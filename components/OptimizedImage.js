import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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

const OptimizedImage = ({
  src,
  alt = 'صورة',
  className = '',
  width,
  height,
  objectFit = 'cover',
  priority = false,
  onLoad,
  onError,
  ...rest
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  // إضافة basePath للصور في الإنتاج
  const basePath = process.env.NODE_ENV === 'production' ? '/moving3' : '';
  
  useEffect(() => {
    if (src) {
      const finalSrc = src.startsWith('/') ? `${basePath}${src}` : src;
      setImageSrc(finalSrc);
      setImageLoaded(false);
      setImageError(false);
    }
  }, [src, basePath]);

  const handleLoad = (e) => {
    setImageLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setImageError(true);
    setImageLoaded(true);
    // Use placeholder image
    const placeholderSrc = `${basePath}/images/placeholder.jpg`;
    e.target.src = placeholderSrc;
    if (onError) onError(e);
  };

  // Create blur data URL
  const blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

  if (imageError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500">صورة غير متوفرة</span>
      </div>
    );
  }

  return (
    <div 
      className={`relative overflow-hidden bg-gray-100 ${className}`}
      style={{ width, height }}
    >
      {/* Loading state */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}

      {/* Image */}
      <img
        src={imageSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        style={{
          width: '100%',
          height: '100%',
          objectFit,
          transition: 'transform 0.3s ease-in-out',
        }}
        {...rest}
      />
    </div>
  );
};

export default OptimizedImage; 