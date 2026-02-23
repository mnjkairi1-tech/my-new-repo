'use client';

import React, { useCallback, useRef, Suspense, lazy, useState } from 'react';
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
import { Skeleton } from '@/components/ui/skeleton';
import { useLanguage } from '@/lib/language';
import { Input } from '@/components/ui/input';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  popularTools,
  quickToolCategories,
} from '@/lib/home-page-data';
import type { Tool } from '@/lib/types';
import { useUserPreferences } from '@/context/user-preferences-context';
import { useUser } from '@/firebase/auth/use-user';
import useCustomBack from '@/hooks/use-back-button-handler';

const ToolsTabContent = lazy(() => import('@/components/tools-tab-content'));

const ToolsLoadingSkeleton = () => (
    <div className="p-4 space-y-4 max-w-7xl mx-auto">
        <div className="flex gap-2 items-center">
            <Skeleton className="h-12 flex-grow rounded-none" />
            <Skeleton className="h-12 w-12 rounded-none" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[...Array(10)].map((_, i) => (
                <Skeleton key={i} className="h-48 rounded-2xl" />
            ))}
        </div>
    </div>
);

function HomePageContent() {
  const { t } = useLanguage();
  const { pinnedTools, handlePinToggle, addRecentTool, recentTools, heartedTools, starredTools, handleHeartToggle, handleStarToggle } = useUserPreferences();
  const [activeSavedTab, setActiveSavedTab] = useState('recent');
  const autoplayPlugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  const carouselSlides = [
    { 
      title: "Manga Reader",
      image: "https://i.postimg.cc/DyfNCzpV/Screenshot_2025-12-16-12-47-43-00-965bbf4d18d205f782c6b8409c5773a4.jpg",
      dataAiHint: "manga comic",
      link: "https://filmm.me/pzcMMikJ"
    },
    { 
      title: "AI for Students",
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
    <div className="space-y-8 pb-10 animate-fade-in-up max-w-7xl mx-auto">
        <div className="my-4 max-w-2xl mx-auto px-4">
            <label className="block text-center text-muted-foreground text-sm mb-2">Ask what AI you want</label>
            <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">
                <div className="relative cursor-pointer">
                    <Input
                        readOnly
                        placeholder="Chat with AI Atlas..."
                        className="bg-background rounded-full h-14 text-base pl-6 pr-14 border-2 border-primary/20 shadow-lg cursor-pointer"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center pointer-events-none">
                        <Send className="w-5 h-5 ml-0.5"/>
                    </div>
                </div>
            </a>
        </div>
        
        <div className="my-4 px-4">
            <Carousel opts={{ loop: true }} plugins={[autoplayPlugin.current]}>
                <CarouselContent>
                    {carouselSlides.map((slide, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <Link href={slide.link} target={slide.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                                <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform">
                                    <Image src={slide.image} alt={slide.title} fill className="object-cover" data-ai-hint={slide.title} unoptimized />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-4">
                                        <h3 className="font-bold text-2xl text-white">{slide.title}</h3>
                                    </div>
                                </div>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>

        <section className="px-4">
            <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-xl">{t('home.popularTools.title')}</h4>
                <Link href="/popular-tools">
                    <Button variant="link" className="text-primary p-0 h-auto font-semibold">{t('home.seeAll')}</Button>
                </Link>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 horizontal-scroll-container">
                {popularTools.map(tool => (
                    <a href={tool.url} target="_blank" rel="noopener noreferrer" key={tool.name} className="flex flex-col items-center shrink-0 w-24 md:w-32 text-center" onClick={() => handleToolClick(tool)}>
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-secondary flex items-center justify-center p-2 text-primary shadow-md overflow-hidden hover:scale-110 transition-transform">
                            <Image src={tool.image} alt={tool.name} width={48} height={48} className="w-full h-full object-contain" unoptimized />
                        </div>
                        <p className="text-xs font-medium text-center mt-2 text-muted-foreground truncate w-full">{tool.name}</p>
                    </a>
                ))}
            </div>
        </section>

        <section className="px-4">
            <h4 className="font-semibold text-xl mb-4">{t('home.quickTools.title')}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedQuickToolCategories.map((category) => {
                    const isPinned = pinnedTools?.has(category.name);
                    return (
                        <Link href={category.url} key={category.name} className="block group">
                            <Card className="relative overflow-hidden rounded-3xl shadow-lg transition-all duration-300 group-hover:scale-[1.02] border-none aspect-[3/1]">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className={cn(
                                        "absolute top-2 right-2 z-10 w-10 h-10 rounded-full text-white bg-black/20 backdrop-blur-sm transition-all hover:bg-black/40",
                                        isPinned ? 'text-primary' : 'opacity-0 group-hover:opacity-100'
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h5 className="text-white font-bold text-xl">{t(`home.quickTools.categories.${category.translationKey}`)}</h5>
                                </div>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </section>

        <section className="mt-6 mb-16 max-w-4xl mx-auto px-4">
            <div className="flex justify-center items-center gap-8 my-4">
                <div className="flex flex-col items-center gap-2">
                    <button onClick={() => setActiveSavedTab('heart')} className={cn("flex flex-col items-center gap-2 transition-all", activeSavedTab === 'heart' ? "scale-110" : "opacity-60")}>
                        <div className="w-20 h-16 md:w-24 md:h-20 flex items-center justify-center rounded-2xl bg-pink-100/50 text-pink-500 shadow-lg soft-shadow"><Heart className={cn("w-7 h-7 md:w-9 md:h-9", activeSavedTab === 'heart' && "fill-current")} /></div>
                        <span className="text-sm font-bold">Hearted</span>
                    </button>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <button onClick={() => setActiveSavedTab('recent')} className={cn("flex flex-col items-center gap-2 transition-all", activeSavedTab === 'recent' ? "scale-110" : "opacity-60")}>
                        <div className="w-24 h-20 md:w-28 md:h-24 flex items-center justify-center rounded-2xl bg-blue-100/50 text-blue-500 shadow-lg soft-shadow"><History className="w-9 h-9 md:w-11 md:h-11"/></div>
                        <span className="text-sm font-bold">Recent</span>
                    </button>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <button onClick={() => setActiveSavedTab('star')} className={cn("flex flex-col items-center gap-2 transition-all", activeSavedTab === 'star' ? "scale-110" : "opacity-60")}>
                        <div className="w-20 h-16 md:w-24 md:h-20 flex items-center justify-center rounded-2xl bg-yellow-100/50 text-yellow-500 shadow-lg soft-shadow"><Star className={cn("w-7 h-7 md:w-9 md:h-9", activeSavedTab === 'star' && "fill-current")} /></div>
                        <span className="text-sm font-bold">Starred</span>
                    </button>
                </div>
            </div>
            
            <div className="horizontal-scroll-container">
                {activeSavedTab === 'recent' && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {recentTools.length > 0 ? (
                            recentTools.map((tool, index) => (
                                <a href={tool.url} target="_blank" rel="noopener noreferrer" key={`${tool.name}-${index}`}>
                                    <Card className="p-3 flex items-center gap-4 bg-card border-none rounded-2xl soft-shadow hover:bg-accent/50 transition-colors">
                                        {tool.image && <div className="w-14 h-14 relative shrink-0"><Image src={tool.image} alt={tool.name} fill className="object-contain" data-ai-hint={tool.name} unoptimized /></div>}
                                        <div className="flex-grow">
                                            <h5 className="font-semibold text-base">{tool.name}</h5>
                                            <p className="text-sm text-muted-foreground">{tool.category}</p>
                                        </div>
                                        <ChevronRight className="text-muted-foreground" />
                                    </Card>
                                </a>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-10 text-muted-foreground">
                                <History className="mx-auto w-10 h-10 opacity-20" />
                                <p className="mt-4 text-base">{t('home.recents.empty')}</p>
                                <p className="text-sm">{t('home.recents.emptyDescription')}</p>
                            </div>
                        )}
                    </div>
                )}
                
                {activeSavedTab === 'heart' && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {heartedTools.length > 0 ? (
                        heartedTools.map((tool, index) => (
                            <a href={tool.url} target="_blank" rel="noopener noreferrer" key={`${tool.name}-${index}`}>
                                <Card className="p-3 flex items-center gap-4 bg-card border-none rounded-2xl soft-shadow hover:bg-accent/50 transition-colors">
                                    {tool.image && <div className="w-14 h-14 relative shrink-0"><Image src={tool.image} alt={tool.name} fill className="object-contain" data-ai-hint={tool.name} unoptimized /></div>}
                                    <div className="flex-grow">
                                        <h5 className="font-semibold text-base">{tool.name}</h5>
                                        <p className="text-sm text-muted-foreground">{tool.category}</p>
                                    </div>
                                    <Button variant="ghost" size="icon" className="text-red-500 hover:bg-red-50" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleHeartToggle(tool as Tool); }}>
                                        <Heart className="fill-current"/>
                                    </Button>
                                </Card>
                            </a>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10 text-muted-foreground">
                            <Heart className="mx-auto w-10 h-10 opacity-20" />
                            <p className="mt-4 text-base">No hearted tools yet.</p>
                            <p className="text-sm">Tools you heart will appear here.</p>
                        </div>
                    )}
                    </div>
                )}

                {activeSavedTab === 'star' && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {starredTools.length > 0 ? (
                            starredTools.map((tool, index) => (
                                <a href={tool.url} target="_blank" rel="noopener noreferrer" key={`${tool.name}-${index}`}>
                                    <Card className="p-3 flex items-center gap-4 bg-card border-none rounded-2xl soft-shadow hover:bg-accent/50 transition-colors">
                                        {tool.image && <div className="w-14 h-14 relative shrink-0"><Image src={tool.image} alt={tool.name} fill className="object-contain" data-ai-hint={tool.name} unoptimized /></div>}
                                        <div className="flex-grow">
                                            <h5 className="font-semibold text-base">{tool.name}</h5>
                                            <p className="text-sm text-muted-foreground">{tool.category}</p>
                                        </div>
                                        <Button variant="ghost" size="icon" className="text-yellow-400 hover:bg-yellow-50" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleStarToggle(tool as Tool); }}>
                                            <Star className="fill-current"/>
                                        </Button>
                                    </Card>
                                </a>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-10 text-muted-foreground">
                                <Star className="mx-auto w-10 h-10 opacity-20" />
                                <p className="mt-4 text-base">No starred tools yet.</p>
                                <p className="text-sm">Tools you star will appear here.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    </div>
  );
}

function GalaxyAppMain() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get('tab') || 'home';
  const { user } = useUser();
  const { t } = useLanguage();
  const { addRecentTool } = useUserPreferences();
  
  useCustomBack();

  return (
    <Tabs value={activeTab} className="h-full flex flex-col">
        <header className="px-6 pt-6 flex-shrink-0 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-2">
                <div className="flex items-center gap-2">
                    <GalaxyLogo className="w-8 h-8" />
                    <span className="text-2xl font-bold text-foreground">AI Atlas</span>
                </div>
                <div className='flex items-start gap-3'>
                    <Link href="/ultra-free" className="flex flex-col items-center gap-1 group">
                        <Button variant="ghost" size="icon" className="rounded-full bg-secondary w-10 h-10 transition-transform group-hover:scale-110">
                            <Sparkles className="w-5 h-5 text-primary" />
                        </Button>
                        <span className="text-[10px] font-black text-primary/80 uppercase tracking-tighter text-center leading-none">Ultra</span>
                    </Link>
                    <Link href="/max-free" className="flex flex-col items-center gap-1 group">
                        <Button variant="ghost" size="icon" className="rounded-full bg-secondary w-10 h-10 transition-transform group-hover:scale-110">
                            <Gift className="w-5 h-5 text-primary" />
                        </Button>
                        <span className="text-[10px] font-black text-primary/80 uppercase tracking-tighter text-center leading-none">Max</span>
                    </Link>
                    <Link href="/mode" className="flex flex-col items-center gap-1 group">
                        <Button variant="ghost" size="icon" className="rounded-full bg-secondary w-10 h-10 transition-transform group-hover:scale-110">
                            <Wand2 className="w-5 h-5 text-primary" />
                        </Button>
                        <span className="text-[10px] font-black text-primary/80 uppercase tracking-tighter text-center leading-none">Modes</span>
                    </Link>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto">
                <TabsList className="grid w-full grid-cols-4 bg-transparent p-0 mt-4 border-b">
                    <TabsTrigger value="home" onClick={() => router.push('/?tab=home')} className="data-[state=active]:border-primary data-[state=active]:text-primary text-sm font-semibold border-b-4 border-transparent rounded-none pb-2 bg-transparent shadow-none transition-all">{t('tabs.home')}</TabsTrigger>
                    <TabsTrigger value="tools" onClick={() => router.push('/?tab=tools')} className="data-[state=active]:border-primary data-[state=active]:text-primary text-sm font-semibold border-b-4 border-transparent rounded-none pb-2 bg-transparent shadow-none transition-all">{t('tabs.tools')}</TabsTrigger>
                    <TabsTrigger value="trending" onClick={() => router.push('/?tab=trending')} className="data-[state=active]:border-primary data-[state=active]:text-primary text-sm font-semibold border-b-4 border-transparent rounded-none pb-2 bg-transparent shadow-none transition-all">{t('tabs.trending')}</TabsTrigger>
                    <TabsTrigger value="settings" onClick={() => router.push('/?tab=settings')} className="data-[state=active]:border-primary data-[state=active]:text-primary text-sm font-semibold border-b-4 border-transparent rounded-none pb-2 bg-transparent shadow-none transition-all">{t('tabs.settings')}</TabsTrigger>
                </TabsList>
            </div>
        </header>
        
        <div className="flex-1 overflow-y-auto no-scrollbar">
            <TabsContent value="home" className="px-6 mt-0">
                <HomePageContent />
            </TabsContent>
            
            <TabsContent value="tools" className="mt-0 h-full">
                <Suspense fallback={<ToolsLoadingSkeleton />}>
                    <ToolsTabContent onShare={(e, tool) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (navigator.share) {
                            navigator.share({ title: tool.name, url: tool.url });
                        }
                    }} onClick={addRecentTool} />
                </Suspense>
            </TabsContent>
            
            <TabsContent value="trending" className="px-6 mt-4">
                <div className="max-w-7xl mx-auto space-y-6">
                    <Link href="https://explodingtopics.com/blog/most-popular-ai-tools" target="_blank" className="block group">
                        <Card className="bg-card border-none rounded-3xl shadow-lg overflow-hidden hover:scale-[1.01] transition-transform">
                            <div className="relative aspect-video md:aspect-[21/9]">
                                <Image src={"https://picsum.photos/seed/trending-ai/1200/600"} alt="Trending" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-2xl">Trending AI Tools</h3>
                                <p className="text-muted-foreground text-base mt-2">Discover the fastest-growing AI tools globally.</p>
                            </div>
                        </Card>
                    </Link>
                </div>
            </TabsContent>
            
            <TabsContent value="settings" className="bg-secondary/30 mt-0 min-h-full">
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
