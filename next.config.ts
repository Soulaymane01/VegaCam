/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production';


const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? '' : '',
  env: {
    NEXT_PUBLIC_ASSET_PREFIX: isProd ? '' : '',
  },
  images : {
    unoptimized:true,
  },
}
 
module.exports = nextConfig