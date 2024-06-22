/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
  experimental: {
    forceSwcTransforms: true,
  },
  compiler: {
    removeConsole: {
      exclude: ['error', 'log'],
    },
  },
};

export default nextConfig;
