/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optionally disable webpack persistent cache in dev when env is set.
  webpack: (config, { dev }) => {
    if (dev && process.env.NEXT_DISABLE_WEBPACK_CACHE) {
      // Next uses webpack persistent caching; turning it off can resolve
      // rare Windows cache corruption that breaks HMR/static CSS in dev.
      config.cache = false
    }
    return config
  },
}

module.exports = nextConfig
