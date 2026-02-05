
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
        },
        {
            protocol: 'https',
            hostname: 'www.quora.com',
        },
        {
            protocol: 'https',
            hostname: 'www.perplexity.ai',
        },
        {
            protocol: 'https',
            hostname: 'huggingface.co',
        },
        {
            protocol: 'https',
            hostname: 'you.com',
        },
        {
            protocol: 'https',
            hostname: 'character.ai',
        },
        {
            protocol: 'https',
            hostname: 'pi.ai',
        },
        {
            protocol: 'https',
            hostname: 'www.jasper.ai',
        },
        {
            protocol: 'https',
            hostname: 'mycroft.ai',
        },
        {
            protocol: 'https',
            hostname: 'www.soundhound.com',
        },
        {
            protocol: 'https',
            hostname: 'www.databotapp.com',
        },
        {
            protocol: 'https',
            hostname: 'www.google.com',
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
