import React from 'react';

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
  // إضافة basePath للصور في الإنتاج
  const basePath = process.env.NODE_ENV === 'production' ? '/moving3' : '';
  
  // معالجة مسار الصورة
  const imageSrc = src?.startsWith('/') ? `${basePath}${src}` : src;

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      onLoad={onLoad}
      onError={onError}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        objectFit,
        display: 'block',
        ...style
      }}
      {...rest}
    />
  );
};

export default OptimizedImage; 