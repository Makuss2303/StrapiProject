/** @type {import('next').NextConfig} */
const globImporter = require('node-sass-glob-importer');
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    importer: globImporter(),
  },
  images: {
    domains: ['dev-strapi.wds.com.vn'],
  },
}

module.exports = nextConfig
