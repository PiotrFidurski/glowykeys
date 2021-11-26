/** @type {import('next').NextConfig} */
const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
  env: {
    BASE_URL: process.env.NODE_ENV === 'production' ? 'https://glowykeys.vercel.app' : 'http://localhost:3000',
  },
  images: {
    domains: ['cdn.shopify.com', 'spcgear.com'],
  },
});
