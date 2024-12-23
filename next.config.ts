/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '/VegaCam',
  output: 'export',
  distDir: 'dist',
  images : {
    unoptimized:true,
  },
}
 
module.exports = nextConfig