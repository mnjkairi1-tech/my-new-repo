'use client';

import { BottomNavBar } from '@/components/bottom-nav-bar';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useMemo, Suspense } from 'react';
import { useUserPreferences } from '@/context/user-preferences-context';
import { MintyAnimation } from '@/components/themes/minty-animation';

function AppShellContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { theme } = useUserPreferences();

    const activeTabId = useMemo(() => {
        const tab = searchParams.get('tab');
        
        if (pathname === '/') {
            if (tab === 'tools') return 'tools';
            if (tab === 'trending') return 'trending';
            if (tab === 'settings') return 'settings';
            return 'home';
        }
        if (pathname === '/community/my-profile') return 'profile';
        if (pathname.startsWith('/community')) return 'community';

        return '';
    }, [pathname, searchParams]);

    return (
        <div className="relative flex flex-col min-h-screen bg-background font-body w-full max-w-md md:max-w-none md:max-w-screen-2xl mx-auto overflow-x-hidden transition-all duration-500 ease-in-out">
            {/* Live Animation for Minty Marshmallow theme */}
            {theme === 'cute-mint-glass' && <MintyAnimation />}
            
            <main className="relative z-10 flex-grow pb-24 md:pb-32 h-full px-0 md:px-6 lg:px-12">
                {children}
            </main>
            <BottomNavBar activeTab={activeTabId} />
        </div>
    );
}

export function AppShell({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>}>
            <AppShellContent>{children}</AppShellContent>
        </Suspense>
    );
}
