import StaticImage from './StaticImage';

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

export default function OptimizedImage({ src, alt, width, height, className, style, priority, loading, objectFit }) {
  // Determine the full path to the image
  const basePath = getBasePath();
  const imgSrc = src.startsWith('/') ? `${basePath}${src}` : `${basePath}/${src}`;
  
  return (
    <StaticImage 
      src={imgSrc}
      alt={alt || 'صورة'}
      width={width}
      height={height}
      className={className}
      style={{ objectFit: objectFit || 'cover', ...style }}
      loading={priority ? 'eager' : loading || 'lazy'}
    />
  );
} 