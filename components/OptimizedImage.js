import React, { useState } from 'react';

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
  style = {},
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // إضافة basePath للصور في الإنتاج
  const basePath = process.env.NODE_ENV === 'production' ? '/moving3' : '';
  
  // معالجة مسار الصورة
  let imageSrc = src;
  if (src && src.startsWith('/')) {
    imageSrc = `${basePath}${src}`;
  }

  // مسار الصورة البديلة
  const placeholderSrc = `${basePath}/images/placeholder.jpg`;

  const handleLoad = (e) => {
    setIsLoading(false);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setHasError(true);
    setIsLoading(false);
    // استخدام الصورة البديلة
    if (e.target.src !== placeholderSrc) {
      e.target.src = placeholderSrc;
      setHasError(false); // إعطاء فرصة أخيرة للصورة البديلة
    }
    if (onError) onError(e);
  };

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="text-sm">صورة غير متوفرة</div>
          </div>
        </div>
      )}

      {/* Image */}
      <img
        src={imageSrc || placeholderSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          objectFit,
          display: hasError ? 'none' : 'block',
          ...style
        }}
        {...rest}
      />
    </div>
  );
};

export default OptimizedImage; 