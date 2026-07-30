const os = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Memory optimizations for low-RAM build environments
  productionBrowserSourceMaps: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // Reduce CPU concurrency to save memory
    cpus: Math.max(1, (os.cpus()?.length ?? 4) - 1),
  },
  webpack: (config, { dev }) => {
    // Disable webpack filesystem cache to reduce memory
    if (!dev) {
      config.cache = false;
    }
    return config;
  },
}

module.exports = nextConfig
