
import type {NextConfig} from 'next';
import withPWA from '@ducanh2912/next-pwa';

const pwaConfig = {
  dest: 'public',
  register: false,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
};

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
        pathname: "/**",
      },
    ],
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
