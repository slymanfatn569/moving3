// Environment variables for client-side usage
window.ENV = {
  SITE_URL: 'https://slymanfatn569.github.io/moving3',
  DOMAIN: 'slymanfatn569.github.io/moving3',
  SITE_NAME: 'فخر الخليج',
  DEFAULT_LOCALE: 'ar',
  NODE_ENV: 'production',
  IS_NETLIFY: false,
  IS_GITHUB_PAGES: true,
  BASE_PATH: '/moving3',
  // List of alternative image paths to try when an image is not found
  IMAGE_FALLBACKS: {
    // Maps common image formats to try
    extensions: ['jpg', 'jpeg', 'png', 'webp'],
    // Maps common naming conventions
    patterns: ['contact-banner', 'contact_banner', 'contactBanner'],
    // Include root directories to search in
    directories: ['', 'images/', 'public/images/', '/moving3/images/']
  }
};
 