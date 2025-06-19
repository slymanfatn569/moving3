import React from 'react';

const StaticImage = ({
  src,
  alt = 'صورة',
  className = '',
  width,
  height,
  style = {},
  loading = 'lazy',
  onError,
  ...rest
}) => {
  // إضافة basePath للصور في الإنتاج
  const basePath = process.env.NODE_ENV === 'production' ? '/moving3' : '';
  
  // معالجة مسار الصورة
  const imageSrc = src.startsWith('/') ? `${basePath}${src}` : src;
  const placeholderSrc = `${basePath}/images/placeholder.jpg`;

  // إعداد المعالجة للصورة البديلة في حالة الخطأ
  const handleError = (e) => {
    e.target.src = placeholderSrc;
    if (onError) onError(e);
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      style={style}
      loading={loading}
      onError={handleError}
      {...rest}
    />
  );
};

export default StaticImage; 