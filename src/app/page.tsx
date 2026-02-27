'use client';

import React, { useCallback, useRef, Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import {
  Wand2,
  Send,
  Gift,
  Pin,
  TrendingUp,
  Sparkles,
  ChevronRight,
  History,
  Heart,
  Star,
  ExternalLink,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { GalaxyLogo } from '@/components/galaxy-logo';
import Link from 'next/link';
import { SettingsPage } from '@/components/settings-page';
import { cn } from '@/lib/utils';
import { AuthScreen } from '@/components/auth-gate';
import { useLanguage } from '@/lib/language';
import { useUserPreferences } from '@/context/user-preferences-context';
import { useUser } from '@/firebase/auth/use-user';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  popularTools,
  quickToolCategories,
} from '@/lib/home-page-data';
import type { Tool } from '@/lib/types';

const ToolsTabContent = dynamic(() => import('@/components/tools-tab-content'), {
    ssr: false,
    loading: () => <ToolsLoadingSkeleton />
});

const ToolsLoadingSkeleton = () => (
    <div className="p-0 space-y-4 max-w-7xl mx-auto">
        <div className="flex gap-2 items-center px-4">
            <div className="h-12 flex-grow bg-white/5 rounded-full animate-pulse" />
            <div className="h-12 w-12 bg-white/5 rounded-full animate-pulse" />
        </div>
        <div className="grid grid-cols-3 gap-2 px-0">
            {[...Array(9)].map((_, i) => (
                <div key={i} className="h-32 bg-white/5 animate-pulse" />
            ))}
        </div>
    </div>
);

function HomePageContent() {
  const [activeSavedTab, setActiveSavedTab] = useState('recent');
  const { t } = useLanguage();
  const { theme, pinnedTools, handlePinToggle, addRecentTool, recentTools, heartedTools, starredTools, handleHeartToggle, handleStarToggle } = useUserPreferences();
  const autoplayPlugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const isMidnight = theme === 'midnight-glass';

  const carouselSlides = [
    { 
      title: "Manga Reader",
      image: "https://i.postimg.cc/DyfNCzpV/Screenshot_2025-12-16-12-47-43-00-965bbf4d18d205f782c6b8409c5773a4.jpg",
      dataAiHint: "manga comic",
      link: "https://filmm.me/pzcMMikJ"
    },
    { 
      title: "Ai for Students",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmcsZW58MHx8fHwxNzcwMzQwNTAwfDA&ixlib.rb-4.1.0&q=80&w=1080",
      dataAiHint: "student studying",
      link: "/student-tools"
    },
    { 
      title: "Boost Productivity",
      image: "https://picsum.photos/seed/slide3/800/600",
      dataAiHint: "data chart",
      link: "/productivity"
    },
  ];

  const sortedQuickToolCategories = React.useMemo(() => {
    return [...quickToolCategories].sort((a, b) => {
      const aIsPinned = pinnedTools?.has(a.name);
      const bIsPinned = pinnedTools?.has(b.name);
      if (aIsPinned && !bIsPinned) return -1;
      if (!aIsPinned && bIsPinned) return 1;
      return 0;
    });
  }, [pinnedTools]);

  const handleToolClick = useCallback((tool: Tool) => {
    addRecentTool(tool);
  }, [addRecentTool]);

  return (
    <div className="space-y-8 pb-10 animate-fade-in-up max-w-7xl mx-auto w-full">
        <div className="my-4 max-w-2xl mx-auto px-2">
            <label className={cn(
                "block text-center text-xs font-bold uppercase tracking-widest mb-3",
                isMidnight ? "text-white/60" : "text-muted-foreground"
            )}>{isMidnight ? "✨ Search the Galaxy" : "Ask what Ai you want"}</label>
            <a href="https://deepai.org/chat#f28b909a-7a91-457c-b0c9-a8c93c94f5f0">
                <div className="relative group">
                    <div className={cn(
                        "rounded-full h-14 text-base pl-6 pr-14 border shadow-lg flex items-center transition-all",
                        isMidnight ? "glass-input-effect text-white/60" : "bg-background border-primary/20 text-muted-foreground"
                    )}>
                        Chat with Deep AI
                    </div>
                    <div className={cn(
                        "absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 flex items-center justify-center pointer-events-none transition-transform group-hover:scale-110",
                        isMidnight ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]" : "bg-primary text-primary-foreground"
                    )}>
                        <Send className="w-5 h-5 ml-0.5"/>
                    </div>
                </div>
            </a>
        </div>
        
        <div className="my-0 px-4 w-full" onTouchStart={(e) => e.stopPropagation()}>
            <Carousel opts={{ loop: true }} plugins={[autoplayPlugin.current]} className="w-full">
                <CarouselContent className="-ml-0">
                    {carouselSlides.map((slide, index) => (
                        <CarouselItem key={index} className="pl-0 md:basis-1/2 lg:basis-1/3">
                            <Link href={slide.link} target={slide.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                                <div className={cn(
                                    "relative aspect-[16/9] w-full overflow-hidden shadow-xl hover:scale-[1.02] transition-transform rounded-2xl",
                                    isMidnight ? "glass-card-effect" : "border-none"
                                )}>
                                    <Image src={slide.image} alt={slide.title} fill className="object-cover" data-ai-hint={slide.title} unoptimized />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-6 z-10">
                                        <h3 className="font-black text-2xl text-white tracking-tight">{slide.title}</h3>
                                    </div>
                                </div>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>

        <section className="px-0">
            <div className="flex justify-between items-center mb-4 px-4">
                <h4 className={cn("font-black text-xl tracking-tight uppercase", isMidnight && "text-white")}>{t('home.popularTools.title')}</h4>
                <Link href="/popular-tools">
                    <Button variant="link" className={cn("p-0 h-auto font-bold text-xs uppercase tracking-widest", isMidnight ? "text-white/60" : "text-primary")}>{t('home.seeAll')}</Button>
                </Link>
            </div>
            <div className="flex overflow-x-auto no-scrollbar pb-2 horizontal-scroll-container gap-2 px-4" onTouchStart={(e) => e.stopPropagation()}>
                {popularTools.map(tool => (
                    <a href={tool.url} target="_blank" rel="noopener noreferrer" key={tool.name} className="flex flex-col items-center shrink-0 w-24 text-center group" onClick={() => handleToolClick(tool)}>
                        <div className={cn(
                            "w-16 h-16 flex items-center justify-center p-3 shadow-md overflow-hidden hover:scale-110 transition-transform duration-300 rounded-2xl",
                            isMidnight ? "glass-card-effect" : "bg-secondary text-primary border border-border/50"
                        )}>
                            <Image src={tool.image} alt={tool.name} width={48} height={48} className="w-full h-full object-contain relative z-10" unoptimized />
                        </div>
                        <p className={cn("text-[10px] font-black uppercase tracking-tighter text-center mt-3 truncate w-full group-hover:text-primary transition-colors", isMidnight ? "text-white/80" : "text-muted-foreground")}>{tool.name}</p>
                    </a>
                ))}
            </div>
        </section>

        <section className="px-0">
            <h4 className={cn("font-black text-xl tracking-tight uppercase mb-6 px-4", isMidnight && "text-white")}>{t('home.quickTools.title')}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                {sortedQuickToolCategories.map((category) => {
                    const isPinned = pinnedTools?.has(category.name);
                    return (
                        <Link href={category.url} key={category.name} className="block group">
                            <div className={cn(
                                "p-1.5 transition-all duration-300 rounded-2xl",
                                theme === 'cute-mint-glass' ? "bg-primary/20" : "bg-primary/5"
                            )}>
                                <Card className={cn(
                                    "relative overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-[1.02] border-none aspect-[3/1] rounded-2xl",
                                    isMidnight ? "glass-card-effect" : ""
                                )}>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className={cn(
                                            "absolute top-3 right-3 z-20 w-10 h-10 rounded-full text-white bg-black/20 backdrop-blur-sm transition-all hover:bg-black/40",
                                            isPinned ? (isMidnight ? 'text-white' : 'text-primary') : 'opacity-0 group-hover:opacity-100'
                                        )}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handlePinToggle(category.name);
                                        }}
                                    >
                                        <Pin className={cn("w-5 h-5", isPinned && "fill-current")} />
                                    </Button>
                                    <Image src={category.image} alt={category.name} fill className="object-cover" data-ai-hint={category.name} unoptimized />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-5 z-10">
                                        <h5 className="text-white font-black text-xl tracking-tight uppercase">{t(`home.quickTools.categories.${category.translationKey}`)}</h5>
                                    </div>
                                </Card>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>

        <section className="mt-10 mb-16 max-w-4xl mx-auto px-0 w-full">
            <div className="flex justify-center items-center gap-8 my-6 px-4">
                <div className="flex flex-col items-center gap-2">
                    <button onClick={() => setActiveSavedTab('heart')} className={cn("flex flex-col items-center gap-2 transition-all", activeSavedTab === 'heart' ? "scale-110" : "opacity-40")}>
                        <div className={cn(
                            "w-20 h-16 md:w-24 md:h-20 flex items-center justify-center shadow-lg transition-all rounded-2xl",
                            isMidnight ? "glass-card-effect" : "bg-pink-100/50 text-pink-500 soft-shadow"
                        )}><Heart className={cn("w-7 h-7 md:w-9 md:h-9 relative z-10", activeSavedTab === 'heart' && "fill-current", isMidnight && activeSavedTab === 'heart' && "text-pink-500")} /></div>
                        <span className={cn("text-xs font-black uppercase tracking-widest", isMidnight && "text-white")}>Hearted</span>
                    </button>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <button onClick={() => setActiveSavedTab('recent')} className={cn("flex flex-col items-center gap-2 transition-all", activeSavedTab === 'recent' ? "scale-110" : "opacity-40")}>
                        <div className={cn(
                            "w-24 h-20 md:w-28 md:h-24 flex items-center justify-center shadow-lg transition-all rounded-2xl",
                            isMidnight ? "glass-card-effect" : "bg-blue-100/50 text-blue-500 soft-shadow"
                        )}><History className={cn("w-9 h-9 md:w-11 md:h-11 relative z-10", isMidnight && activeSavedTab === 'recent' && "text-blue-400")}/></div>
                        <span className={cn("text-xs font-black uppercase tracking-widest", isMidnight && "text-white")}>Recent</span>
                    </button>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <button onClick={() => setActiveSavedTab('star')} className={cn("flex flex-col items-center gap-2 transition-all", activeSavedTab === 'star' ? "scale-110" : "opacity-40")}>
                        <div className={cn(
                            "w-20 h-16 md:w-24 md:h-20 flex items-center justify-center shadow-lg transition-all rounded-2xl",
                            isMidnight ? "glass-card-effect" : "bg-yellow-100/50 text-yellow-500 soft-shadow"
                        )}><Star className={cn("w-7 h-7 md:w-9 md:h-9 relative z-10", activeSavedTab === 'star' && "fill-current", isMidnight && activeSavedTab === 'star' && "text-yellow-400")} /></div>
                        <span className={cn("text-xs font-black uppercase tracking-widest", isMidnight && "text-white")}>Starred</span>
                    </button>
                </div>
            </div>
            
            <div className="horizontal-scroll-container px-0" onTouchStart={(e) => e.stopPropagation()}>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-0">
                    {(activeSavedTab === 'recent' ? recentTools : activeSavedTab === 'heart' ? heartedTools : starredTools).length > 0 ? (
                        (activeSavedTab === 'recent' ? recentTools : activeSavedTab === 'heart' ? heartedTools : starredTools).map((tool, index) => (
                            <a href={tool.url} target="_blank" rel="noopener noreferrer" key={`${tool.name}-${index}`}>
                                <Card className={cn(
                                    "p-4 flex items-center gap-4 border-none transition-all hover:bg-white/5 rounded-2xl",
                                    isMidnight ? "glass-card-effect" : "bg-card soft-shadow"
                                )}>
                                    {tool.image && <div className="w-14 h-14 relative shrink-0 z-10"><Image src={tool.image} alt={tool.name} fill className="object-contain" data-ai-hint={tool.name} unoptimized /></div>}
                                    <div className="flex-grow z-10">
                                        <h5 className={cn("font-bold text-base", isMidnight && "text-white")}>{tool.name}</h5>
                                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">{tool.category}</p>
                                    </div>
                                    <ChevronRight className={cn("relative z-10", isMidnight ? "text-white/30" : "text-muted-foreground")} />
                                </Card>
                            </a>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10 text-muted-foreground opacity-40">
                            {activeSavedTab === 'recent' ? <History className="mx-auto w-10 h-10 mb-4" /> : activeSavedTab === 'heart' ? <Heart className="mx-auto w-10 h-10 mb-4" /> : <Star className="mx-auto w-10 h-10 mb-4" />}
                            <p className="text-sm font-black uppercase tracking-widest">{activeSavedTab === 'recent' ? t('home.recents.empty') : `No ${activeSavedTab}ed tools yet`}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    </div>
  );
}

function GalaxyAppMain() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t } = useLanguage();
  const activeTab = searchParams.get('tab') || 'home';
  const { user } = useUser();
  const { theme, addRecentTool } = useUserPreferences();
  const isMidnight = theme === 'midnight-glass';
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Tabs value={activeTab} className="h-full flex flex-col">
        <header className={cn(
            "px-4 pt-6 flex-shrink-0 sticky top-0 z-50 transition-all",
            isMidnight ? "bg-black/80 backdrop-blur-3xl border-b border-white/10" : "bg-background/80 backdrop-blur-md border-b border-white/10"
        )}>
            <div className="max-w-7xl mx-auto flex justify-between items-center py-2">
                <div className="flex items-center gap-3">
                    <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-shadow",
                        isMidnight ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]" : "bg-primary/10"
                    )}>
                        <GalaxyLogo className="w-6 h-6" />
                    </div>
                    <span className={cn("text-xl font-bold tracking-tight", isMidnight ? "text-white" : "text-foreground")}>Ai Atlas</span>
                </div>
                <div className='flex items-start gap-3'>
                    <Link href="/ultra-free" className="flex flex-col items-center gap-1 group">
                        <Button variant="ghost" size="icon" className={cn(
                            "rounded-full w-10 h-10 transition-all group-hover:scale-110",
                            isMidnight ? "bg-white/10 text-white border border-white/20" : "bg-secondary"
                        )}>
                            <Sparkles className="w-5 h-5" />
                        </Button>
                        <span className={cn("text-[9px] font-black uppercase tracking-tighter text-center leading-none", isMidnight ? "text-white/60" : "text-primary/80")}>Ultra</span>
                    </Link>
                    <Link href="/max-free" className="flex flex-col items-center gap-1 group">
                        <Button variant="ghost" size="icon" className={cn(
                            "rounded-full w-10 h-10 transition-all group-hover:scale-110",
                            isMidnight ? "bg-white/10 text-white border border-white/20" : "bg-secondary"
                        )}>
                            <Gift className="w-5 h-5" />
                        </Button>
                        <span className={cn("text-[9px] font-black uppercase tracking-tighter text-center leading-none", isMidnight ? "text-white/60" : "text-primary/80")}>Max</span>
                    </Link>
                    <Link href="/mode" className="flex flex-col items-center gap-1 group">
                        <Button variant="ghost" size="icon" className={cn(
                            "rounded-full w-10 h-10 transition-all group-hover:scale-110",
                            isMidnight ? "bg-white/10 text-white border border-white/20" : "bg-secondary"
                        )}>
                            <Wand2 className="w-5 h-5" />
                        </Button>
                        <span className={cn("text-[9px] font-black uppercase tracking-tighter text-center leading-none", isMidnight ? "text-white/60" : "text-primary/80")}>Modes</span>
                    </Link>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto">
                <TabsList className="grid w-full grid-cols-4 bg-transparent p-0 mt-4 border-b">
                    {['home', 'tools', 'trending', 'settings'].map((tabId) => (
                        <TabsTrigger 
                            key={tabId}
                            value={tabId} 
                            onClick={() => router.push(`/?tab=${tabId}`)} 
                            className={cn(
                                "data-[state=active]:text-primary text-xs font-black uppercase tracking-widest border-b-4 border-transparent rounded-none pb-3 bg-transparent shadow-none transition-all tab-glow-indicator",
                                isMidnight && "text-white/40 data-[state=active]:text-white data-[state=active]:border-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                            )}
                        >
                            {t(`tabs.${tabId}`)}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </div>
        </header>
        
        <div className="flex-1 overflow-y-auto no-scrollbar">
            <TabsContent value="home" className="px-0 mt-0">
                <HomePageContent />
            </TabsContent>
            
            <TabsContent value="tools" className="mt-0 h-full">
                <ToolsTabContent onShare={(e, tool) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (navigator.share) {
                        navigator.share({ title: tool.name, url: tool.url });
                    }
                }} onClick={addRecentTool} />
            </TabsContent>
            
            <TabsContent value="trending" className="px-6 mt-4">
                <div className="max-w-7xl mx-auto space-y-6">
                    <Link href="https://explodingtopics.com/blog/most-popular-ai-tools" target="_blank" className="block group">
                        <Card className={cn(
                            "border-none rounded-2xl shadow-lg overflow-hidden hover:scale-[1.01] transition-all duration-500",
                            isMidnight ? "glass-card-effect" : "bg-card"
                        )}>
                            <div className="relative aspect-video md:aspect-[21/9]">
                                <Image src={"https://picsum.photos/seed/trending-ai/1200/600"} alt="Trending" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            </div>
                            <div className="p-8 relative z-10">
                                <h3 className={cn("font-black text-3xl tracking-tight uppercase", isMidnight && "text-white")}>Trending Ai Tools</h3>
                                <p className="text-muted-foreground text-lg mt-2 font-medium">Discover the fastest-growing Ai tools globally.</p>
                            </div>
                        </Card>
                    </Link>
                </div>
            </TabsContent>
            
            <TabsContent value="settings" className={cn("mt-0 min-h-full", isMidnight ? "bg-black" : "bg-secondary/30")}>
                <div className="max-w-4xl mx-auto py-8">
                    {user ? <SettingsPage /> : <AuthScreen onUser={() => {}} />}
                </div>
            </TabsContent>
        </div>
    </Tabs>
  );
}

export default function GalaxyApp() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-background"><Loader2 className="animate-spin text-primary w-10 h-10" /></div>}>
      <GalaxyAppMain />
    </Suspense>
  );
}
