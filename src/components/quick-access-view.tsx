'use client';

import React, { useState } from 'react';
import { Heart, History, Star, ChevronRight, LayoutGrid, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useUserPreferences } from '@/context/user-preferences-context';
import { useLanguage } from '@/lib/language';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import type { Tool } from '@/lib/types';

export function QuickAccessView() {
    const { t } = useLanguage();
    const { 
        theme, 
        recentTools, 
        heartedTools, 
        starredTools, 
        handleHeartToggle, 
        handleStarToggle,
        isQuickAccessDefault,
        setIsQuickAccessDefault
    } = useUserPreferences();
    
    const [activeTab, setActiveTab] = useState('recent');
    const isMidnight = theme === 'midnight-glass';

    const toolsToShow = activeTab === 'recent' ? recentTools : activeTab === 'heart' ? heartedTools : starredTools;

    return (
        <div className="flex flex-col w-full max-w-4xl mx-auto px-4 py-6 space-y-8 animate-fade-in-up">
            {/* Header with Default Toggle */}
            <div className="flex justify-between items-center bg-card/40 backdrop-blur-xl p-4 rounded-[2rem] border border-white/20 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h2 className="font-black text-lg tracking-tight">Quick Hub</h2>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Your favorites at a glance</p>
                    </div>
                </div>
                <Button 
                    variant={isQuickAccessDefault ? "default" : "outline"}
                    size="sm"
                    onClick={() => setIsQuickAccessDefault(!isQuickAccessDefault)}
                    className={cn(
                        "rounded-full h-10 px-4 font-black text-[10px] uppercase tracking-tighter transition-all",
                        isQuickAccessDefault ? "bg-primary shadow-lg shadow-primary/20 scale-105" : "bg-white/20 border-white/20"
                    )}
                >
                    {isQuickAccessDefault ? "Default: ON ✨" : "Set as Default"}
                </Button>
            </div>

            {/* Main Action Buttons */}
            <div className="flex justify-center items-center gap-6 md:gap-12">
                <button 
                    onClick={() => setActiveTab('heart')} 
                    className={cn("flex flex-col items-center gap-3 transition-all transform active:scale-95", activeTab === 'heart' ? "scale-110" : "opacity-40 grayscale-[0.5]")}
                >
                    <div className={cn(
                        "w-20 h-16 md:w-24 md:h-20 flex items-center justify-center shadow-lg rounded-[1.5rem] transition-all",
                        isMidnight ? "glass-card-effect" : "bg-pink-100 text-pink-500"
                    )}>
                        <Heart className={cn("w-8 h-8 md:w-10 md:h-10", activeTab === 'heart' && "fill-current")} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Hearted</span>
                </button>

                <button 
                    onClick={() => setActiveTab('recent')} 
                    className={cn("flex flex-col items-center gap-3 transition-all transform active:scale-95", activeTab === 'recent' ? "scale-110" : "opacity-40 grayscale-[0.5]")}
                >
                    <div className={cn(
                        "w-24 h-20 md:w-28 md:h-24 flex items-center justify-center shadow-xl rounded-[2rem] border-2 border-white/50 transition-all",
                        isMidnight ? "glass-card-effect" : "bg-blue-100 text-blue-500"
                    )}>
                        <History className="w-10 h-10 md:w-12 md:h-12" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Recent</span>
                </button>

                <button 
                    onClick={() => setActiveTab('star')} 
                    className={cn("flex flex-col items-center gap-3 transition-all transform active:scale-95", activeTab === 'star' ? "scale-110" : "opacity-40 grayscale-[0.5]")}
                >
                    <div className={cn(
                        "w-20 h-16 md:w-24 md:h-20 flex items-center justify-center shadow-lg rounded-[1.5rem] transition-all",
                        isMidnight ? "glass-card-effect" : "bg-yellow-100 text-yellow-500"
                    )}>
                        <Star className={cn("w-8 h-8 md:w-10 md:h-10", activeTab === 'star' && "fill-current")} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Starred</span>
                </button>
            </div>

            {/* Tools List */}
            <div className="space-y-4 pb-20">
                {toolsToShow.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {toolsToShow.map((tool, index) => (
                            <a href={tool.url} target="_blank" rel="noopener noreferrer" key={`${tool.name}-${index}`} className="group">
                                <Card className={cn(
                                    "p-4 flex items-center gap-4 border-none transition-all hover:translate-x-1 rounded-2xl",
                                    isMidnight ? "glass-card-effect" : "bg-card soft-shadow"
                                )}>
                                    <div className="w-14 h-14 relative shrink-0 z-10 bg-secondary/30 rounded-xl p-2 overflow-hidden">
                                        {tool.image ? (
                                            <Image src={tool.image} alt={tool.name} fill className="object-contain" unoptimized />
                                        ) : (
                                            <LayoutGrid className="w-full h-full text-primary/40" />
                                        )}
                                    </div>
                                    <div className="flex-grow z-10">
                                        <h5 className="font-bold text-base leading-tight">{tool.name}</h5>
                                        <p className="text-[9px] text-muted-foreground uppercase font-black tracking-widest mt-1">{tool.category || 'General'}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                        </div>
                                    </div>
                                </Card>
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-card/20 backdrop-blur-sm rounded-[3rem] border-2 border-dashed border-white/20">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <LayoutGrid className="w-8 h-8 text-muted-foreground opacity-40" />
                        </div>
                        <p className="text-sm font-black uppercase tracking-widest text-muted-foreground opacity-60">
                            {activeTab === 'recent' ? "No recent tools yet" : `No ${activeTab}ed tools found`}
                        </p>
                        <p className="text-[10px] font-bold text-muted-foreground/40 mt-2 uppercase tracking-tight">Explore the catalog to add some!</p>
                    </div>
                )}
            </div>
        </div>
    );
}