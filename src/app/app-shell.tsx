'use client';

import { useUser } from '@/firebase';
import { BottomNavBar } from '@/components/bottom-nav-bar';
import { useSwipeable } from 'react-swipeable';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useMemo, useState } from 'react';

/**
 * Handles the navigation state and bottom bar logic.
 * Wrapped in Suspense because it uses useSearchParams.
 */
function AppShellNav() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const getActiveTab = () => {
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
    };

    const activeTabId = getActiveTab();

    return <BottomNavBar activeTab={activeTabId} />;
}

function AppShellContent({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const navItems = useMemo(() => [
        { id: 'home', route: '/?tab=home' },
        { id: 'tools', route: '/?tab=tools' },
        { id: 'community', route: '/community' },
        { id: 'profile', route: '/community/my-profile' },
    ], []);

    const isSwipeablePage = () => {
        const swipeablePaths = ['/', '/community', '/community/my-profile'];
        return swipeablePaths.includes(pathname);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            const currentIndex = navItems.findIndex(item => item.route.split('?')[0] === pathname);
            if (isSwipeablePage() && currentIndex !== -1 && currentIndex < navItems.length - 1) {
                router.push(navItems[currentIndex + 1].route);
            }
        },
        onSwipedRight: () => {
            const currentIndex = navItems.findIndex(item => item.route.split('?')[0] === pathname);
            if (isSwipeablePage() && currentIndex > 0) {
                router.push(navItems[currentIndex - 1].route);
            }
        },
        trackMouse: true,
    });
    
    // Defer swipe handlers until after hydration to prevent HTML mismatch
    const swipeWrapperProps = (mounted && isSwipeablePage()) ? swipeHandlers : {};

    return (
        <div className="relative flex flex-col min-h-screen bg-background font-body w-full max-w-md mx-auto overflow-hidden">
            <main className="flex-grow pb-24 md:pb-0 h-full" {...swipeWrapperProps}>
                {children}
            </main>
            <Suspense fallback={<div className="fixed bottom-4 left-4 right-4 h-20 bg-card/80 rounded-full animate-pulse" />}>
                <AppShellNav />
            </Suspense>
        </div>
    );
}

export function AppShell({ children }: { children: React.ReactNode }) {
    return (
        <AppShellContent>{children}</AppShellContent>
    );
}
