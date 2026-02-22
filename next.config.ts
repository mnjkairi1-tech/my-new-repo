
import type {NextConfig} from 'next';
import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swmin: true,
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching: [
    {
      // Cache all page navigations
      urlPattern: ({ request }) => request.mode === "navigate",
      handler: "NetworkFirst",
      options: {
        cacheName: "pages-cache",
        networkTimeoutSeconds: 10,
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
    {
      // Broad rule for all images (Remote and Next.js optimized)
      // This covers unsplash, picsum, google favicons, ui-avatars, etc.
      urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif|webp|avif).*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "images-cache",
        expiration: {
          maxEntries: 5000,
          maxAgeSeconds: 60 * 24 * 60 * 60, // 60 days
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    {
      // Explicitly catch Google Favicon service and other external APIs that return images
      urlPattern: /^https:\/\/(?:www\.google\.com\/s2\/favicons|ui-avatars\.com\/api|images\.unsplash\.com|picsum\.photos|i\.postimg\.cc).*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "external-assets-cache",
        expiration: {
          maxEntries: 5000,
          maxAgeSeconds: 60 * 24 * 60 * 60,
        },
        cacheableResponse: {
          statuses: [0, 200],
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
        cacheName: "static-assets-cache",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
  ],
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
