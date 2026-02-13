
import type {NextConfig} from 'next';
import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  runtimeCaching: [
    {
      // Match all navigation requests
      urlPattern: ({ request }) => request.mode === "navigate",
      handler: "NetworkFirst",
      options: {
        cacheName: "pages",
        networkTimeoutSeconds: 10,
        expiration: {
          maxEntries: 64,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
    {
      // Cache static assets (CSS, JS, fonts etc.)
      urlPattern: ({ request }) =>
        request.destination === "style" ||
        request.destination === "script" ||
        request.destination === "worker" ||
        request.destination === "font",
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-assets",
        expiration: {
          maxEntries: 64,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
    {
      // Cache images
      urlPattern: ({ request }) => request.destination === "image",
      handler: "CacheFirst",
      options: {
        cacheName: "images",
        expiration: {
          maxEntries: 250,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
  ],
  disable: process.env.NODE_ENV === 'development',
  workboxOptions: {
    disableDevLogs: true,
  },
});

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
            hostname: '**',
        },
    ],
  },
};

export default withPWA(nextConfig);
