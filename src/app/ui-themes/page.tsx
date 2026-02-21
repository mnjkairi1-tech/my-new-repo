'use client';

import React, { useState, useEffect } from 'react';
import {
  Palette,
  Sun,
  Moon,
  Crown,
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
    { name: 'default', label: 'Default', icon: Sun },
    { name: 'dark', label: 'Dark', icon: Moon },
    { name: 'premium-dark', label: 'Premium Glass', icon: Crown },
    { name: 'neoglass', label: 'Neo Glass', icon: Palette },
    { name: 'black-vision', label: 'Black Vision', icon: Palette },
    { name: 'cyberwave', label: 'Cyberwave', icon: Palette },
    { name: 'minimal-white', label: 'Minimal White', icon: Palette },
    { name: 'claymorphic', label: 'Claymorphic', icon: Palette },
    { name: 'winter-glassmorphism', label: 'Winter Glass', icon: Palette },
  ];

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-2xl p-6">
        <ClubHeader title="UI Themes" showBackButton />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          {themes.map((t) => (
            <Card
              key={t.name}
              onClick={() => setTheme(t.name)}
              className={cn(
                'cursor-pointer transition-all duration-300 bg-card/80 backdrop-blur-sm',
                isClient && theme === t.name ? 'border-primary border-2 glow-shadow shadow-[0_0_15px_rgba(var(--primary),0.3)]' : 'soft-shadow'
              )}
            >
              <CardContent className="p-4 flex flex-col items-center justify-center gap-3 aspect-square">
                <div
                  className={cn(
                    'w-16 h-16 rounded-2xl flex items-center justify-center',
                    isClient && theme === t.name ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                  )}
                >
                  <t.icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-semibold text-center text-foreground">{t.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}