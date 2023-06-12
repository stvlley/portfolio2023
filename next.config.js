/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['portfolio2023images.nyc3.cdn.digitaloceanspaces.com', "cdn-images-1.medium.com", "medium.com"],
  },
}

module.exports = nextConfig
