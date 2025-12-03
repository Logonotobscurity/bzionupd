/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        '@': require('path').resolve(__dirname, 'src'),
      };
      return config;
    },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
   ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/suppliers',
        destination: '/companies',
        permanent: true,
      },
      {
        source: '/brand',
        destination: '/products/brands',
        permanent: true,
      },
      {
        source: '/brands',
        destination: '/products/brands',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.bzion.com',
        pathname: '/**',
      },
      {
           protocol: 'https',
           hostname: 'www.legal500.com',
           pathname: '/**',
      },
      {
           protocol: 'https',
           hostname: 'encrypted-tbn0.gstatic.com',
           pathname: '/**',
      },
      {
           protocol: 'https',
           hostname: 'www.bofikng.com',
           pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
