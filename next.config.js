const withLinaria = require("next-linaria");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  swcMinify: true,
};

module.exports = withLinaria(nextConfig);
