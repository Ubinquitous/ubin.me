/** @type {import('next').NextConfig} */

const removeImports = require('next-remove-imports')({});

const nextConfig = removeImports({
  reactStrictMode: false,
  images: {
    domains: ['img.shields.io']
  }
});

module.exports = nextConfig;
