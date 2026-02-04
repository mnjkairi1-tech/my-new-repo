
import type {NextConfig} from 'next';
import withPWA from '@ducanh2912/next-pwa';

const pwaConfig = {
  dest: 'public',
  register: false,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
};

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'picsum.photos',
        },
        {
            protocol: 'https',
            hostname: 'images.unsplash.com',
        },
        {
            protocol: 'https',
            hostname: 'i.postimg.cc',
        },
        {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
        }
    ]
  },
   webpack: (config, { isServer }) => {
    // See https://webpack.js.org/configuration/experiments/
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
      ...config.experiments,
    };

    return config;
  },
};

const withPWAConfig = withPWA(pwaConfig);

export default withPWAConfig(nextConfig);
