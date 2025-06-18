import React from 'react';

// تحديد مسار الأساس للصور
const getBasePath = () => {
  // للعمل على GitHub Pages نحتاج لإضافة مسار الأساس
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
  // تحديد المسار النهائي للصورة
  let imageSrc = src;
  
  // إضافة مسار الأساس إذا لم يكن مضافًا بالفعل
  if (src && !src.startsWith('http') && !src.startsWith('data:')) {
    const basePath = getBasePath();
    imageSrc = src.startsWith('/') ? `${basePath}${src}` : `${basePath}/${src}`;
  }

  // إعداد المعالجة للصورة البديلة في حالة الخطأ
  const handleError = (e) => {
    const basePath = getBasePath();
    e.target.src = `${basePath}/images/placeholder.jpg`;
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
    />
  );
};

export default StaticImage; 