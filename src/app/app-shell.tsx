'use client';

import { BottomNavBar } from '@/components/bottom-nav-bar';
import { useSwipeable } from 'react-swipeable';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useMemo, useEffect, useState, Suspense } from 'react';

/**
 * AppShell manages the core application structure and global UI elements like 
 * the bottom navigation and swipe gestures.
 */
function AppShellContent({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
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

    const isSwipeablePage = () => {
        const swipeablePaths = ['/', '/community', '/community/my-profile'];
        return swipeablePaths.includes(pathname);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            const currentIndex = navItems.findIndex(item => item.id === activeTabId);
            if (isSwipeablePage() && currentIndex !== -1 && currentIndex < navItems.length - 1) {
                router.push(navItems[currentIndex + 1].route);
            }
        },
        onSwipedRight: () => {
            const currentIndex = navItems.findIndex(item => item.id === activeTabId);
            if (isSwipeablePage() && currentIndex > 0) {
                router.push(navItems[currentIndex - 1].route);
            }
        },
        trackMouse: true,
        preventScrollOnSwipe: true,
    });

    return (
        <div className="relative flex flex-col min-h-screen bg-background font-body w-full max-w-md mx-auto">
            <main 
                className="flex-grow pb-24 md:pb-0 h-full overflow-x-hidden" 
                {...(mounted && isSwipeablePage() ? swipeHandlers : {})}
            >
                {children}
            </main>
            <BottomNavBar activeTab={activeTabId} />
        </div>
    );
}

export function AppShell({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <AppShellContent>{children}</AppShellContent>
        </Suspense>
    );
}
