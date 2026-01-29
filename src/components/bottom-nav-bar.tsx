'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Home, LayoutGrid, Users, UserCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function BottomNavBar({ activeTab }: { activeTab: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavBarHidden, setIsNavBarHidden] = useState(false);

  useEffect(() => {
    const hiddenPaths = [
      /^\/community\/(?!my-profile)[^/]+$/, // Matches /community/[clubId] but NOT /community/my-profile
      /^\/community\/create$/,
      /^\/community\/.*\/info$/, // Matches /community/[clubId]/info
    ];
    const shouldHide = hiddenPaths.some(p => p.test(pathname));
    setIsNavBarHidden(shouldHide);
  }, [pathname]);
  
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    router.push(path);
  };

  const NavItem = ({ href, path, icon: Icon, label, currentActiveTab }: { href: string, path: string, icon: React.ElementType, label: string, currentActiveTab: string }) => {
    const isActive = currentActiveTab === path;

    return (
        <Link href={href} onClick={(e) => handleNavigation(e, href)} className="flex flex-col items-center justify-center h-full rounded-none flex-1 group">
            <div className={cn("p-3 rounded-full transition-all duration-300", isActive ? 'bg-primary/10' : 'group-hover:bg-primary/5')}>
                <Icon className={cn("w-6 h-6 transition-colors", isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary')} />
            </div>
            <span className={cn("text-xs font-medium transition-colors", isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary')}>{label}</span>
        </Link>
    );
  };

  if (isNavBarHidden) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 w-full max-w-md mx-auto z-50 md:hidden">
        <div className="absolute inset-x-0 bottom-0 h-full bg-card/80 backdrop-blur-xl border-t border-border/50 shadow-t-lg">
          <div className="flex justify-around items-center h-full">
            <NavItem href="/?tab=home" path="home" icon={Home} label="Home" currentActiveTab={activeTab} />
            <NavItem href="/?tab=tools" path="tools" icon={LayoutGrid} label="Tools" currentActiveTab={activeTab} />
            <NavItem href="/community" path="community" icon={Users} label="Community" currentActiveTab={activeTab} />
            <NavItem href="/community/my-profile" path="profile" icon={UserCircle} label="Profile" currentActiveTab={activeTab} />
          </div>
        </div>
    </div>
  );
}
