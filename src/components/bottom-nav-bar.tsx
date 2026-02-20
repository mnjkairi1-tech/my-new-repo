'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Home, LayoutGrid, Users, UserCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function BottomNavBar({ activeTab }: { activeTab: string }) {
  const pathname = usePathname();
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
                "p-2.5 rounded-full transition-all duration-300", 
                isActive ? 'bg-primary/10 scale-110' : 'group-hover:bg-primary/5'
            )}>
                <Icon className={cn("w-6 h-6 transition-colors", isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary')} />
            </div>
            <span className={cn(
                "text-[10px] uppercase tracking-wider font-bold mt-1 transition-colors", 
                isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
            )}>{label}</span>
        </Link>
    );
  };

  if (isNavBarHidden) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-6 right-6 h-16 w-auto max-w-[calc(100%-3rem)] mx-auto z-50 md:hidden">
        <div className="h-full bg-card/90 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl overflow-hidden">
          <div className="flex justify-around items-center h-full px-2">
            <NavItem href="/?tab=home" path="home" icon={Home} label="Home" currentActiveTab={activeTab} />
            <NavItem href="/?tab=tools" path="tools" icon={LayoutGrid} label="Tools" currentActiveTab={activeTab} />
            <NavItem href="/community" path="community" icon={Users} label="Community" currentActiveTab={activeTab} />
            <NavItem href="/community/my-profile" path="profile" icon={UserCircle} label="Profile" currentActiveTab={activeTab} />
          </div>
        </div>
    </div>
  );
}
