const withNextra = require('nextra')({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js"
})

const nextConfig = {
  ...withNextra(),
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
