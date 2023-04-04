/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/monkey-business',
  images: {
    domains: ['ipfs.io'],
  },
}

module.exports = nextConfig
