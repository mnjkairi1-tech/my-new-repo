
'use client';

import React, { ReactNode } from 'react';
import { FirebaseProvider } from '@/firebase/provider';

// This is a client-only component that wraps the main FirebaseProvider.
// It ensures that Firebase is initialized only on the client-side,
// preventing server-side execution issues in Next.js.
export function FirebaseClientProvider({ children }: { children: ReactNode }) {
  return <FirebaseProvider>{children}</FirebaseProvider>;
}
