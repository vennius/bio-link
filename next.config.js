/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos", "media.discordapp.net"]
  },
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig
