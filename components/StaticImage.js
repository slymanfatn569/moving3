import React from 'react';

const StaticImage = ({
  src,
  alt = 'صورة',
  className = '',
  width,
  height,
  style = {},
  loading = 'lazy',
  onError
}) => {
  // The basePath from next.config.js will be automatically applied by Next.js
  // to root-relative paths like "/images/foo.jpg".

  // إعداد المعالجة للصورة البديلة في حالة الخطأ
  const handleError = (e) => {
    // The placeholder path should also be root-relative.
    e.target.src = `/images/placeholder.jpg`;
    if (onError) onError(e);
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      style={style}
      loading={loading}
      onError={handleError}
    />
  );
};

export default StaticImage; 