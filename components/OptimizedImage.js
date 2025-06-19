import Image from 'next/image'
import { useState } from 'react'

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

export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false,
  quality = 75,
  placeholder = 'blur',
  blurDataURL,
  ...props 
}) {
  const [isLoading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  
  // Fix image path for production
  const getImageSrc = () => {
    if (!src) return '/images/placeholder.jpg'
    
    // If it's already a full URL, return as is
    if (src.startsWith('http://') || src.startsWith('https://')) {
      return src
    }
    
    // Handle base path in production
    const basePath = process.env.NODE_ENV === 'production' ? '/moving3' : ''
    
    // Ensure src starts with /
    const imagePath = src.startsWith('/') ? src : `/${src}`
    
    return `${basePath}${imagePath}`
  }
  
  const handleLoadingComplete = () => {
    setLoading(false)
  }
  
  const handleError = () => {
    setHasError(true)
    setLoading(false)
  }
  
  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-400">فشل تحميل الصورة</span>
      </div>
    )
  }
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={getImageSrc()}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        placeholder={blurDataURL ? placeholder : 'empty'}
        blurDataURL={blurDataURL}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
        onLoadingComplete={handleLoadingComplete}
        onError={handleError}
        {...props}
      />
    </div>
  )
} 