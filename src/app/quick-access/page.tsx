'use client';

import React from 'react';
import { ClubHeader } from '@/components/club-header';
import { QuickAccessView } from '@/components/quick-access-view';
import { useUserPreferences } from '@/context/user-preferences-context';
import { cn } from '@/lib/utils';

export default function QuickAccessPage() {
  const { theme } = useUserPreferences();
  const isMidnight = theme === 'midnight-glass';

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative overflow-x-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-4xl p-6">
        <ClubHeader title="Quick Access" showBackButton />
        
        <main className="mt-4">
            <QuickAccessView />
        </main>
      </div>
    </div>
  );
}