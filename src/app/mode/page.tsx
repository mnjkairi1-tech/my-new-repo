'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Users, Palette, X, PlusCircle, Scale, ShieldAlert, Zap } from 'lucide-react';
import { useUserPreferences } from '@/context/user-preferences-context';
import { useUser } from '@/firebase';

export default function ModePage() {
  const { clearComparison } = useUserPreferences();
  const { user } = useUser();
  
  const isOwner = user?.email === 'mnjkairi1@gmail.com';

  const modes = [
    { href: '/community', icon: <Users className="h-10 w-10 text-primary" />, label: 'Community' },
    { href: '/ui-themes', icon: <Palette className="h-10 w-10 text-primary" />, label: 'UI Themes' },
    { href: '/?tab=tools', icon: <Scale className="h-10 w-10 text-primary" />, label: 'Compare', onClick: clearComparison },
    { href: '/quick-access', icon: <Zap className="h-10 w-10 text-primary" />, label: 'Quick Access' },
  ];

  // Add Admin mode only for the specific owner
  if (isOwner) {
    modes.push({
        href: '/admin', 
        icon: <ShieldAlert className="h-10 w-10 text-destructive" />,
        label: 'Admin'
    });
  }

  return (
    <div className="min-h-screen w-full bg-background p-4 relative flex flex-col">
       <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 flex justify-end p-4 flex-shrink-0">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
            <X className="h-6 w-6 text-foreground" />
          </Button>
        </Link>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-start pt-12 w-full max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-center text-foreground mb-12">Select a Mode</h1>
        <div className="grid grid-cols-3 gap-4 w-full">
          {modes.map((mode) => (
            <div key={mode.label} className="flex flex-col items-center gap-2">
                <Link href={mode.href} passHref onClick={() => mode.onClick && mode.onClick()}>
                    <Button variant="secondary" size="icon" className="w-16 h-16 rounded-full shadow-lg soft-shadow">
                        {mode.icon}
                    </Button>
                </Link>
                <span className="text-sm font-medium text-foreground text-center">{mode.label}</span>
            </div>
          ))}
        </div>
        <div className="w-full mt-12 pt-8 border-t border-border/50">
            <Link href="/submit-tool" passHref>
                <Button variant="outline" className="w-full h-14 text-lg rounded-2xl bg-card/80">
                    <PlusCircle className="mr-2 h-6 w-6"/>
                    Submit a Tool
                </Button>
            </Link>
        </div>
      </div>
    </div>
  );
}
