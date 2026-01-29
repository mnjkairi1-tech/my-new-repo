'use client';

import React, { ReactNode, Suspense, useEffect } from 'react';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/lib/language';
import { UserPreferencesProvider } from '@/context/user-preferences-context';
import { ThemeProvider } from '@/context/theme-provider';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { AppShell } from './app-shell';

function GlobalProviders({ children }: { children: ReactNode }) {
  return (
    <FirebaseClientProvider>
      <UserPreferencesProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </UserPreferencesProvider>
    </FirebaseClientProvider>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    if (
      process.env.NODE_ENV === 'production' &&
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      // Don't register service worker in WebViews to avoid crashes
      !/wv/.test(navigator.userAgent.toLowerCase())
    ) {
      navigator.serviceWorker.register('/sw.js');
    }
  }, []);

  return (
    <html lang="en" className="font-size-medium" suppressHydrationWarning>
      <head>
        <title>AI Atlas</title>
        <meta name="description" content="Your Cute Guide to Creative AI Tools" />
        <meta name="application-name" content="AI Atlas" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AI Atlas" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#8A2BE2" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>
           <GlobalProviders>
              <Suspense fallback={<main className="flex-grow">{children}</main>}>
                <AppShell>
                  {children}
                </AppShell>
              </Suspense>
            </GlobalProviders>
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
