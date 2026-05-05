/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/tunjiangquan',
  assetPrefix: '/tunjiangquan/',
};

module.exports = nextConfig;
