/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = '/tunjiangquan';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? repo : '',
  assetPrefix: isProd ? `${repo}/` : '',
};

module.exports = nextConfig;
