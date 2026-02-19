'use client';

import { BottomNavBar } from '@/components/bottom-nav-bar';
import { useSwipeable, type SwipeEventData } from 'react-swipeable';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useMemo } from 'react';

function AppShellContent({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const navItems = useMemo(() => [
        { id: 'home', route: '/?tab=home' },
        { id: 'tools', route: '/?tab=tools' },
        { id: 'community', route: '/community' },
        { id: 'profile', route: '/community/my-profile' },
    ], []);

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

        return ''; // No active tab on sub-pages
    };

    const isSwipeablePage = () => {
        // Only allow swiping on the exact top-level pages
        const swipeablePaths = ['/', '/community', '/community/my-profile'];
        return swipeablePaths.includes(pathname);
    };

    const activeTabId = getActiveTab();
    const currentIndex = useMemo(() => navItems.findIndex(item => item.id === activeTabId), [navItems, activeTabId]);

    // Prefetch next and previous routes to make swiping faster
    useEffect(() => {
        if (currentIndex !== -1) {
            if (currentIndex > 0) {
                router.prefetch(navItems[currentIndex - 1].route);
            }
            if (currentIndex < navItems.length - 1) {
                router.prefetch(navItems[currentIndex + 1].route);
            }
        }
    }, [currentIndex, router, navItems]);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: (eventData: SwipeEventData) => {
            const target = eventData.event.target as HTMLElement;
            if (target.closest('.horizontal-scroll-container, [aria-roledescription="carousel"]')) {
                return;
            }
            if (isSwipeablePage() && currentIndex !== -1 && currentIndex < navItems.length - 1) {
                router.push(navItems[currentIndex + 1].route);
            }
        },
        onSwipedRight: (eventData: SwipeEventData) => {
            const target = eventData.event.target as HTMLElement;
             if (target.closest('.horizontal-scroll-container, [aria-roledescription="carousel"]')) {
                return;
            }
            if (isSwipeablePage() && currentIndex > 0) {
                router.push(navItems[currentIndex - 1].route);
            }
        },
        trackMouse: true,
    });
    
    const swipeWrapperProps = isSwipeablePage() ? swipeHandlers : {};

    return (
        <div className="relative flex flex-col min-h-screen">
            <main className="flex-grow pb-32 md:pb-0" {...swipeWrapperProps}>{children}</main>
            <BottomNavBar activeTab={activeTabId} />
        </div>
    );
}

export function AppShell({ children }: { children: React.ReactNode }) {
    // Removed the isUserLoading check here so the Shell (and Nav Bar) shows up instantly.
    // Auth state is handled inside specific components that need it.
    return (
      <Suspense fallback={<div className="relative flex flex-col min-h-screen">{children}</div>}>
          <AppShellContent>{children}</AppShellContent>
      </Suspense>
    );
}
