const { config } = require('process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

config.module.rules.push({
  test: /\.node$/,
  use: "node-loader"
})