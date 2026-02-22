'use client';

import { BottomNavBar } from '@/components/bottom-nav-bar';
import { useSwipeable } from 'react-swipeable';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useMemo, Suspense, useEffect } from 'react';
import { useUserPreferences } from '@/context/user-preferences-context';
import { MintyAnimation } from '@/components/themes/minty-animation';

function AppShellContent({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { theme } = useUserPreferences();

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

    const currentIndex = useMemo(() => navItems.findIndex(item => item.id === activeTabId), [navItems, activeTabId]);

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

    const isSwipeablePage = () => {
        const swipeablePaths = ['/', '/community', '/community/my-profile'];
        return swipeablePaths.includes(pathname);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            if (isSwipeablePage() && currentIndex !== -1 && currentIndex < navItems.length - 1) {
                router.push(navItems[currentIndex + 1].route);
            }
        },
        onSwipedRight: () => {
            if (isSwipeablePage() && currentIndex > 0) {
                router.push(navItems[currentIndex - 1].route);
            }
        },
        trackMouse: true,
        preventScrollOnSwipe: true,
        // Prevent swiping when interacting with carousels or horizontal scroll areas
        noSwipingSelector: '.no-scrollbar, .horizontal-scroll-container, [role="region"], .embla',
        delta: 40, // Increase threshold to avoid accidental tab switches
    });

    return (
        <div className="relative flex flex-col min-h-screen bg-background font-body w-full max-w-md mx-auto overflow-x-hidden">
            {/* Live Animation for Minty Marshmallow theme */}
            {theme === 'cute-mint-glass' && <MintyAnimation />}
            
            <main 
                className="relative z-10 flex-grow pb-24 h-full" 
                {...(isSwipeablePage() ? swipeHandlers : {})}
            >
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
