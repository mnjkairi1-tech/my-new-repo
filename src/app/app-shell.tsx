'use client';

import { BottomNavBar } from '@/components/bottom-nav-bar';
import { usePathname, useSearchParams } from 'next/navigation';
import { useMemo, useState, useEffect, Suspense } from 'react';
import { useUserPreferences } from '@/context/user-preferences-context';
import { MintyAnimation } from '@/components/themes/minty-animation';
import { BerryAnimation } from '@/components/themes/berry-animation';
import { CloudAnimation } from '@/components/themes/cloud-animation';
import { LavenderAnimation } from '@/components/themes/lavender-animation';
import { PeachAnimation } from '@/components/themes/peach-animation';
import { LemonAnimation } from '@/components/themes/lemon-animation';
import { SakuraAnimation } from '@/components/themes/sakura-animation';
import { GalaxyAnimation } from '@/components/themes/galaxy-animation';
import { cn } from '@/lib/utils';

function AppShellContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { theme } = useUserPreferences();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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

    if (!mounted) return <div className="min-h-screen bg-[#050810]" />;

    return (
        <div className="relative flex flex-col min-h-screen bg-background font-body w-full max-w-7xl mx-auto overflow-x-hidden transition-all duration-500 ease-in-out">
            {/* Ambient Lighting System for Midnight Glass */}
            {isMidnight && (
                <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                    <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[140%] h-[60%] rounded-full bg-[rgba(255,255,255,0.12)] blur-[80px]" />
                    <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[160%] h-[70%] rounded-full bg-[rgba(0,80,255,0.18)] blur-[100px]" />
                    <div className="absolute top-1/2 -left-[30%] w-[60%] h-[60%] rounded-full bg-[rgba(255,255,255,0.05)] blur-[80px]" />
                    <div className="absolute top-1/2 -right-[30%] w-[60%] h-[60%] rounded-full bg-[rgba(255,255,255,0.05)] blur-[80px]" />
                </div>
            )}

            {/* Live Animations for Ultra Cute themes */}
            {theme === 'cute-mint-glass' && <MintyAnimation />}
            {theme === 'cute-berry-glass' && <BerryAnimation />}
            {theme === 'cute-cloud-glass' && <CloudAnimation />}
            {theme === 'cute-lavender-glass' && <LavenderAnimation />}
            {theme === 'cute-peach-glass' && <PeachAnimation />}
            {theme === 'cute-lemon-glass' && <LemonAnimation />}
            {theme === 'cute-sakura-glass' && <SakuraAnimation />}
            {theme === 'cute-galaxy-glass' && <GalaxyAnimation />}
            
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
