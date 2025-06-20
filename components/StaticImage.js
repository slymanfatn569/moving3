import React, { useState } from 'react';

const StaticImage = ({
  src,
  alt = 'صورة',
  className = '',
  width,
  height,
  style = {},
  loading = 'lazy',
  onLoad,
  onError,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  
  // إضافة basePath للصور في الإنتاج
  const basePath = process.env.NODE_ENV === 'production' ? '/moving3' : '';
  
  // معالجة مسار الصورة
  const imageSrc = src?.startsWith('/') ? `${basePath}${src}` : src;
  const placeholderSrc = `${basePath}/images/placeholder.jpg`;

  // إعداد المعالجة للصورة البديلة في حالة الخطأ
  const handleError = (e) => {
    if (!hasError) {
      setHasError(true);
      e.target.src = placeholderSrc;
    }
    if (onError) onError(e);
  };

  const handleLoad = (e) => {
    if (onLoad) onLoad(e);
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      style={{
        maxWidth: '100%',
        height: 'auto',
        ...style
      }}
      loading={loading}
      onLoad={handleLoad}
      onError={handleError}
      {...rest}
    />
  );
};

export default StaticImage; 