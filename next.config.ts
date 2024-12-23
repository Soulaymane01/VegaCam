/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production';


const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: isProd ? '/VegaCam' : '',
  assetPrefix: isProd ? '/VegaCam/' : '',
  env: {
    NEXT_PUBLIC_ASSET_PREFIX: isProd ? '/VegaCam' : '',
  },
  images : {
    unoptimized:true,
  },
}
 
module.exports = nextConfig