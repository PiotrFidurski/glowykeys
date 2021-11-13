/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    BASE_URL: process.env.NODE_ENV === 'production' ? 'https://glowykeys.vercel.app' : 'http://localhost:3000',
  },
  images: {
    domains: ['cdn.shopify.com'],
  },
};
