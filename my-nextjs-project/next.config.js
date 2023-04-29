/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/city-sentiment' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/city-sentiment/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;