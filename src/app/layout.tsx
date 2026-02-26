'use client';

import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/lib/language';
import { UserPreferencesProvider } from '@/context/user-preferences-context';
import { ThemeProvider } from '@/context/theme-provider';
import { FirebaseClientProvider } from '@/firebase/client-provider';

// Disabling SSR for AppShell is the definitive fix for hydration errors
// when using client-heavy features like Firebase, swipe gestures, and themes.
const AppShell = dynamic(() => import('./app-shell').then(mod => mod.AppShell), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )
});

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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Ai Atlas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Your Cute Guide to Creative AI Tools" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>
           <GlobalProviders>
              <AppShell>
                {children}
              </AppShell>
            </GlobalProviders>
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
