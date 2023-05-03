/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  test: /\.node$/,
  use: "node-loader"
}

module.exports = nextConfig
