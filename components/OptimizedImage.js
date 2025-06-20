import React, { useState, useCallback } from 'react';

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
  const [retryCount, setRetryCount] = useState(0);

  // إضافة basePath للصور في الإنتاج
  const basePath = process.env.NODE_ENV === 'production' ? '/moving3' : '';
  
  // معالجة مسار الصورة
  let imageSrc = src;
  if (src && src.startsWith('/')) {
    imageSrc = `${basePath}${src}`;
  }

  // مسار الصورة البديلة
  const placeholderSrc = `${basePath}/images/placeholder.jpg`;

  const handleLoad = useCallback((e) => {
    setIsLoading(false);
    setHasError(false);
    if (onLoad) onLoad(e);
  }, [onLoad]);

  const handleError = useCallback((e) => {
    setIsLoading(false);
    
    // تجنب الحلقة اللانهائية للأخطاء
    if (retryCount < 1 && e.target.src !== placeholderSrc) {
      setRetryCount(prev => prev + 1);
      e.target.src = placeholderSrc;
    } else {
      setHasError(true);
    }
    
    if (onError) onError(e);
  }, [onError, retryCount, placeholderSrc]);

  // إذا لم يكن هناك src، استخدم placeholder مباشرة
  const finalSrc = src ? imageSrc : placeholderSrc;

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Loading indicator */}
      {isLoading && !hasError && (
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
      {!hasError && (
        <img
          src={finalSrc}
          alt={alt || 'صورة'}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: '100%',
            height: '100%',
            objectFit,
            ...style
          }}
          {...rest}
        />
      )}
    </div>
  );
};

export default OptimizedImage; 