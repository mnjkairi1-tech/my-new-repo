import React, { ReactNode } from 'react';
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
