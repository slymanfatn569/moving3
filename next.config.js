/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  
  // Image optimization settings
  images: {
    unoptimized: true,
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://slymanfatn569.github.io/moving3',
  },
  
  // Base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/moving3' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/moving3' : '',
  
  // Trailing slash
  trailingSlash: true,
}

module.exports = nextConfig
 
