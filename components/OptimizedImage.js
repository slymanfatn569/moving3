import React, { useState, useEffect } from 'react';

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

  // إضافة basePath للصور في الإنتاج
  const basePath = process.env.NODE_ENV === 'production' ? '/moving3' : '';
  
  // معالجة مسار الصورة
  const imageSrc = src?.startsWith('/') ? `${basePath}${src}` : src;
  const placeholderSrc = `${basePath}/images/placeholder.jpg`;

  const handleLoad = (e) => {
    setImageLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setImageError(true);
    setImageLoaded(true);
    // Use placeholder image
    e.target.src = placeholderSrc;
    if (onError) onError(e);
  };

  return (
    <div 
      className={`relative overflow-hidden bg-gray-100 ${className}`}
      style={{ width, height }}
    >
      {/* Loading state */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 bg-gray-300 rounded animate-pulse"></div>
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
          display: imageLoaded ? 'block' : 'none'
        }}
        {...rest}
      />
    </div>
  );
};

export default OptimizedImage; 