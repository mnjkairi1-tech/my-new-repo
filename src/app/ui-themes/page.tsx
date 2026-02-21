'use client';

import React, { useState, useEffect } from 'react';
import {
  Palette,
  Sun,
  Moon,
  Crown,
  Zap,
  Snowflake,
  Type,
  Ghost,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/context/theme-provider';
import { ClubHeader } from '@/components/club-header';
import { cn } from '@/lib/utils';

export default function UiThemesPage() {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const themes = [
    { name: 'default', label: 'Default Light', icon: Sun, color: 'bg-orange-100 text-orange-600' },
    { name: 'dark', label: 'Classic Dark', icon: Moon, color: 'bg-slate-800 text-slate-100' },
    { name: 'premium-dark', label: 'Premium Glass', icon: Crown, color: 'bg-zinc-900 text-yellow-500' },
    { name: 'neoglass', label: 'Neo Glass', icon: Palette, color: 'bg-blue-900 text-cyan-400' },
    { name: 'black-vision', label: 'Black Vision', icon: Shield, color: 'bg-black text-white' },
    { name: 'cyberwave', label: 'Cyberwave', icon: Zap, color: 'bg-purple-900 text-pink-500' },
    { name: 'minimal-white', label: 'Minimal White', icon: Type, color: 'bg-white text-black' },
    { name: 'claymorphic', label: 'Claymorphic', icon: Palette, color: 'bg-blue-50 text-blue-500' },
    { name: 'winter-glassmorphism', label: 'Winter Glass', icon: Snowflake, color: 'bg-cyan-50 text-cyan-600' },
  ];

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-2xl p-6">
        <ClubHeader title="UI Themes" showBackButton />
        <p className="text-muted-foreground mt-2 text-sm">Choose a theme that fits your mood.</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-8">
          {themes.map((t) => (
            <Card
              key={t.name}
              onClick={() => setTheme(t.name)}
              className={cn(
                'cursor-pointer transition-all duration-300 bg-card/80 backdrop-blur-sm border-2 overflow-hidden rounded-[2rem]',
                isClient && theme === t.name ? 'border-primary ring-4 ring-primary/10 shadow-2xl scale-105' : 'border-transparent hover:border-primary/20 soft-shadow'
              )}
            >
              <CardContent className="p-0 flex flex-col items-center justify-center aspect-[4/5]">
                <div
                  className={cn(
                    'w-16 h-16 rounded-3xl flex items-center justify-center mb-4 shadow-inner',
                    t.color
                  )}
                >
                  <t.icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-black text-center text-foreground px-2 uppercase tracking-tighter">{t.label}</span>
                {isClient && theme === t.name && (
                    <div className="mt-2 text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">ACTIVE</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
