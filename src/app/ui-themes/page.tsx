'use client';

import React, { useState, useEffect } from 'react';
import {
  Palette, Sun, Moon, Compass, Mountain, 
  Snowflake, Leaf, Sparkles, Zap, GlassWater, Sunset, Heart, Cloud, Flower, Waves, Star, Utensils, Zap as LemonIcon, Cherry, Rocket
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
    { name: 'midnight-glass', label: 'Midnight Glass', icon: GlassWater, color: 'bg-zinc-900 text-white border-white/20' },
    { name: 'desert-sand', label: 'Desert Sand', icon: Compass, color: 'bg-orange-50 text-orange-800' },
    { name: 'emerald-night', label: 'Emerald Night', icon: Mountain, color: 'bg-green-950 text-emerald-400' },
    { name: 'cosmic-neon', label: 'Cosmic Neon', icon: Sparkles, color: 'bg-[#05050a] text-[#8E54E9] border-[#00F5FF]/20' },
    { name: 'neon-volt', label: 'Neon Volt', icon: Zap, color: 'bg-[#0D0D0D] text-[#A3FF47] border-[#A3FF47]/20' },
    { name: 'minimal-snow', label: 'Arctic Snow', icon: Snowflake, color: 'bg-zinc-100 text-black border-black/40' },
    { name: 'minimal-rose', label: 'Minimal Rose', icon: Flower, color: 'bg-rose-50 text-rose-600 border-rose-200' },
    { name: 'minimal-sky', label: 'Minimal Sky', icon: Waves, color: 'bg-sky-50 text-sky-600 border-sky-200' },
    { name: 'cute-mint-glass', label: 'Minty Marshmallow', icon: Leaf, color: 'bg-emerald-50 text-emerald-500' },
    { name: 'cute-berry-glass', label: 'Berry Marshmallow', icon: Heart, color: 'bg-rose-50 text-rose-500' },
    { name: 'cute-cloud-glass', label: 'Cloud Marshmallow', icon: Cloud, color: 'bg-sky-50 text-sky-500' },
    { name: 'cute-lavender-glass', label: 'Lavender Haze', icon: Star, color: 'bg-purple-50 text-purple-500' },
    { name: 'cute-peach-glass', label: 'Peach Sorbet', icon: Utensils, color: 'bg-orange-50 text-orange-400' },
    { name: 'cute-lemon-glass', label: 'Lemon Fizz', icon: LemonIcon, color: 'bg-yellow-50 text-yellow-500' },
    { name: 'cute-sakura-glass', label: 'Sakura Blossom', icon: Cherry, color: 'bg-pink-50 text-pink-400' },
    { name: 'cute-galaxy-glass', label: 'Galaxy Bliss', icon: Rocket, color: 'bg-indigo-50 text-indigo-500' },
    { name: 'velvet-sunset', label: 'Velvet Sunset', icon: Sunset, color: 'bg-red-900 text-orange-400' },
  ];

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-2xl p-6 pb-24">
        <ClubHeader title="UI Themes" showBackButton />
        <p className="text-muted-foreground mt-2 text-sm">Choose a theme that fits your mood. Each theme is now 100% unique.</p>
        
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
