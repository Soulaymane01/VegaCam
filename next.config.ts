/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/VegaCam',
  assetPrefix: '/VegaCam/',
  images : {
    unoptimized:true,
  },
}
 
module.exports = nextConfig