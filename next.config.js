/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['builtin.com', 'plus.unsplash.com', 'images.unsplash.com', 'media.istockphoto.com'],
  },
}

module.exports = nextConfig;
