'use client';

import { BottomNavBar } from '@/components/bottom-nav-bar';
import { usePathname, useSearchParams } from 'next/navigation';
import { useMemo, Suspense } from 'react';
import { useUserPreferences } from '@/context/user-preferences-context';
import { MintyAnimation } from '@/components/themes/minty-animation';
import { cn } from '@/lib/utils';

function AppShellContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { theme } = useUserPreferences();
    const isMidnight = theme === 'midnight-glass';

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
        <div className="relative flex flex-col min-h-screen bg-background font-body w-full max-w-7xl mx-auto overflow-x-hidden transition-all duration-500 ease-in-out">
            {/* Ambient Lighting System for Midnight Glass */}
            {isMidnight && (
                <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                    {/* Top Center White Glow */}
                    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[60%] rounded-full bg-[rgba(255,255,255,0.12)] blur-[80px]" />
                    {/* Bottom Blue Aura */}
                    <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[140%] h-[70%] rounded-full bg-[rgba(0,80,255,0.18)] blur-[100px]" />
                    {/* Side Haze */}
                    <div className="absolute top-1/2 -left-[20%] w-[50%] h-[50%] rounded-full bg-[rgba(255,255,255,0.05)] blur-[80px]" />
                    <div className="absolute top-1/2 -right-[20%] w-[50%] h-[50%] rounded-full bg-[rgba(255,255,255,0.05)] blur-[80px]" />
                </div>
            )}

            {/* Live Animation for Minty Marshmallow theme */}
            {theme === 'cute-mint-glass' && <MintyAnimation />}
            
            <main className="relative z-10 flex-grow pb-24 md:pb-0 h-full px-0 md:px-6 lg:px-12">
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