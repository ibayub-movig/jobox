/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 1000,
  images: {
    domains: ['v0.blob.com'],
  },
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
    optimizeCss: true,
    serverActions: true,
  },
}

module.exports = nextConfig

