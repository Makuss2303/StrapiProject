/** @type {import('next').NextConfig} */
const globImporter = require('node-sass-glob-importer');
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    importer: globImporter(),
  },
  images: {
    domains: ['127.0.0.1', 'dev-strapi.wds.com.vn'],
  },
}

module.exports = nextConfig
