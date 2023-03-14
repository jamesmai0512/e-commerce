/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    enableUndici: true,
  },

  images: {
    domains: ['loremflickr.com', 'raw.githubusercontent.com'],
  },

  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
