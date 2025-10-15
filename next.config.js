/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/academic-website',
  trailingSlash: true,
  distDir: 'dist',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
