'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Home, LayoutGrid, Users, UserCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useUserPreferences } from '@/context/user-preferences-context';

export function BottomNavBar({ activeTab }: { activeTab: string }) {
  const pathname = usePathname();
  const { theme } = useUserPreferences();
  const isMidnight = theme === 'midnight-glass';
  const [isNavBarHidden, setIsNavBarHidden] = useState(false);

  useEffect(() => {
    const hiddenPaths = [
      /^\/community\/(?!my-profile)[^/]+$/, 
      /^\/community\/create$/,
      /^\/community\/.*\/info$/, 
    ];
    const shouldHide = hiddenPaths.some(p => p.test(pathname));
    setIsNavBarHidden(shouldHide);
  }, [pathname]);

  const NavItem = ({ href, path, icon: Icon, label, currentActiveTab }: { href: string, path: string, icon: React.ElementType, label: string, currentActiveTab: string }) => {
    const isActive = currentActiveTab === path;

    return (
        <Link href={href} className="flex flex-col items-center justify-center h-full flex-1 group">
            <div className={cn(
                "p-2 rounded-full transition-all duration-300", 
                isActive ? (isMidnight ? 'bg-white/20 scale-110' : 'bg-primary/15 scale-110') : 'group-hover:bg-primary/5'
            )}>
                <Icon className={cn(
                    "w-5 h-5 transition-colors", 
                    isActive ? (isMidnight ? 'text-white' : 'text-primary') : 'text-muted-foreground group-hover:text-primary'
                )} />
            </div>
            <span className={cn(
                "text-[9px] uppercase tracking-tighter font-bold mt-0.5 transition-colors", 
                isActive ? (isMidnight ? 'text-white' : 'text-primary') : 'text-muted-foreground group-hover:text-primary'
            )}>{label}</span>
        </Link>
    );
  };

  if (isNavBarHidden) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 h-16 w-[90%] max-w-sm z-50">
        <div className={cn(
            "h-full rounded-full overflow-hidden border shadow-2xl",
            isMidnight ? "bottom-nav-glass" : "bg-card/90 backdrop-blur-xl border-white/20"
        )}>
          <div className="flex justify-around items-center h-full px-4">
            <NavItem href="/?tab=home" path="home" icon={Home} label="Home" currentActiveTab={activeTab} />
            <NavItem href="/?tab=tools" path="tools" icon={LayoutGrid} label="Tools" currentActiveTab={activeTab} />
            <NavItem href="/community" path="community" icon={Users} label="Social" currentActiveTab={activeTab} />
            <NavItem href="/community/my-profile" path="profile" icon={UserCircle} label="Me" currentActiveTab={activeTab} />
          </div>
        </div>
    </div>
  );
}