'use client';

import React, { useState, useEffect } from 'react';
import {
  Palette, Sun, Moon, Cloud, Ghost, Compass, Mountain, Flower2, 
  Terminal, Snowflake, Trees, Wind, Droplets, Gem, Trophy, Leaf, Maximize, Sunset
} from 'lucide-react';
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
    { name: 'nordic-lite', label: 'Nordic Lite', icon: Cloud, color: 'bg-blue-50 text-blue-600' },
    { name: 'oled-stealth', label: 'OLED Stealth', icon: Ghost, color: 'bg-black text-white' },
    { name: 'desert-sand', label: 'Desert Sand', icon: Compass, color: 'bg-orange-50 text-orange-800' },
    { name: 'emerald-night', label: 'Emerald Night', icon: Mountain, color: 'bg-green-950 text-emerald-400' },
    { name: 'lavender-mist', label: 'Lavender Mist', icon: Flower2, color: 'bg-purple-50 text-purple-600' },
    
    /* MINIMAL THEMES */
    { name: 'minimal-obsidian', label: 'Obsidian', icon: Terminal, color: 'bg-zinc-900 text-zinc-100' },
    { name: 'minimal-snow', label: 'Arctic Snow', icon: Snowflake, color: 'bg-black text-white border-white/20' },
    { name: 'minimal-forest', label: 'Deep Forest', icon: Trees, color: 'bg-emerald-950 text-emerald-400' },
    { name: 'minimal-sand', label: 'Warm Sand', icon: Wind, color: 'bg-amber-50 text-amber-900' },
    { name: 'minimal-ocean', label: 'Midnight Sea', icon: Droplets, color: 'bg-blue-950 text-cyan-400' },

    /* PREMIUM & GAMING */
    { name: 'premium-glass', label: 'Premium Glass', icon: Gem, color: 'bg-zinc-900 text-amber-400 border-amber-500/30' },
    { name: 'esports-pro', label: 'Esports Elite', icon: Trophy, color: 'bg-blue-950 text-cyan-400 border-cyan-500/50' },
    
    /* CUTE THEME */
    { name: 'cute-mint-glass', label: 'Minty Marshmallow', icon: Leaf, color: 'bg-emerald-50 text-emerald-500' },

    /* NEW MONO THEME BASED ON IMAGE */
    { name: 'mono-clean', label: 'Mono Clean', icon: Maximize, color: 'bg-white text-black border-black/10' },

    /* VELVET SUNSET THEME BASED ON IMAGE */
    { name: 'velvet-sunset', label: 'Velvet Sunset', icon: Sunset, color: 'bg-[#1F1F1F] text-[#FF5F6D]' },
  ];

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-2xl p-6 pb-24">
        <ClubHeader title="UI Themes" showBackButton />
        <p className="text-muted-foreground mt-2 text-sm">Choose a theme that fits your mood. Each theme is now unique.</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
          {themes.map((t) => (
            <Card
              key={t.name}
              onClick={() => setTheme(t.name)}
              className={cn(
                'cursor-pointer transition-all duration-300 bg-card/80 backdrop-blur-sm border-2 overflow-hidden rounded-[var(--radius)] shadow-sm',
                isClient && theme === t.name ? 'border-primary ring-4 ring-primary/10 shadow-2xl scale-105' : 'border-transparent hover:border-primary/20'
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
                <span className="text-xs font-black text-center text-foreground px-2 uppercase tracking-tighter">{t.label}</span>
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
