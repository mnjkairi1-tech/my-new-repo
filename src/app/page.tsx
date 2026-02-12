

'use client';

import React, { useCallback, useMemo, useState, useRef, useEffect, Suspense, lazy } from 'react';
import Image from 'next/image';
import {
  Clapperboard,
  Heart,
  ImageIcon,
  Mic,
  Bot,
  Wand2,
  Search,
  LayoutGrid,
  Video,
  Type,
  Star,
  TrendingUp,
  Sparkles,
  ChevronRight,
  History,
  Voicemail,
  Text,
  UserSquare,
  Share2,
  BookOpen,
  BrainCircuit,
  Presentation,
  Feather,
  GraduationCap,
  Scissors,
  Youtube,
  Paintbrush,
  ExternalLink,
  X,
  MessageSquare,
  ImageDown,
  Send,
  Home,
  Settings,
  Users,
  UserCircle,
  Gift,
  Pin,
  Loader2,
  Scale,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { GalaxyLogo } from '@/components/galaxy-logo';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { SettingsPage } from '@/components/settings-page';
import { cn } from '@/lib/utils';
import { AuthScreen } from '@/components/auth-gate';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/lib/language';
import { Input } from '@/components/ui/input';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  popularTools,
  quickToolCategories,
} from '@/lib/home-page-data';
import type { Tool } from '@/lib/types';
import { ToolIcon } from '@/lib/tool-icons';
import { useUserPreferences } from '@/context/user-preferences-context';
import { useUser } from '@/firebase/auth/use-user';
import useCustomBack from '@/hooks/use-back-button-handler';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ToolsTabContent = lazy(() => import('@/components/tools-tab-content'));

const ToolsLoadingSkeleton = () => (
    <div className="p-4 space-y-4">
        <div className="flex gap-2 items-center">
            <Skeleton className="h-12 flex-grow rounded-full" />
            <Skeleton className="h-12 w-12 rounded-full" />
        </div>
        <div className="grid grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-48 rounded-lg" />
            ))}
        </div>
    </div>
);

function HomePageContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  useCustomBack();

  const [activeTab, setActiveTab] = React.useState('home');
  const { user } = useUser();

  const [toolClicks, setToolClicks] = React.useState<Record<string, number>>({});
  const { toast } = useToast();
  const { heartedTools, starredTools, handleHeartToggle, handleStarToggle, pinnedTools, handlePinToggle, recentTools, addRecentTool, comparisonList, clearComparison } = useUserPreferences();
  const [activeSavedTab, setActiveSavedTab] = useState('recent');
  const autoplayPlugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  
  const ChatInputTrigger = () => (
    <div className="my-4">
      <label className="block text-center text-muted-foreground text-sm mb-2">Ask what AI you want</label>
      <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">
        <div 
          className="relative cursor-pointer"
        >
          <Input
              readOnly
              placeholder="Chat with AI Atlas..."
              className="bg-background rounded-full h-14 text-base pl-5 pr-14 border-2 border-primary/20 shadow-lg cursor-pointer"
          />
          <div
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 bg-primary text-primary-foreground glow-shadow flex items-center justify-center"
          >
              <Send className="w-5 h-5"/>
          </div>
        </div>
      </a>
    </div>
  );
  
  useEffect(() => {
    const tab = searchParams.get('tab') || 'home';
    setActiveTab(tab);
  }, [searchParams]);

  const handleShareTool = useCallback(async (e: React.MouseEvent, tool: Tool) => {
    e.preventDefault();
    e.stopPropagation();

    if (typeof window !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: tool.name,
          text: `Check out this AI tool: ${tool.name}`,
          url: tool.url,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(tool.url);
      toast({
        title: "Link Copied!",
        description: `${tool.name}'s URL has been copied to your clipboard.`,
      });
    }
  }, [toast]);

  const handleToolClick = useCallback(async (tool: Tool) => {
    addRecentTool(tool);

    setToolClicks(prev => ({
      ...prev,
      [tool.name]: (prev[tool.name] || 0) + 1,
    }));
  }, [addRecentTool]);

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
    { 
      title: "Explore AI Tools",
      image: "https://picsum.photos/seed/slide1/800/600",
      dataAiHint: "abstract shapes",
      link: "/?tab=tools"
    },
    { 
      title: "Create Content",
      image: "https://picsum.photos/seed/slide2/800/600",
      dataAiHint: "digital art",
      link: "/content-creation"
    },
    { 
      title: "Join the Community",
      image: "https://picsum.photos/seed/slide5/800/600",
      dataAiHint: "people talking",
      link: "/community"
    },
  ];

  const sortedQuickToolCategories = useMemo(() => {
    return [...quickToolCategories].sort((a, b) => {
      const aIsPinned = pinnedTools.has(a.name);
      const bIsPinned = pinnedTools.has(b.name);
      if (aIsPinned && !bIsPinned) return -1;
      if (!aIsPinned && bIsPinned) return 1;
      return 0;
    });
  }, [pinnedTools]);

  const renderHomeScreen = () => (
    <>
      <ChatInputTrigger />
      
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[autoplayPlugin.current]}
        className="my-4"
        onMouseEnter={autoplayPlugin.current.stop}
        onMouseLeave={autoplayPlugin.current.reset}
      >
        <CarouselContent>
          {carouselSlides.map((slide, index) => (
             <CarouselItem key={index}>
              <Link href={slide.link} target={slide.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden soft-shadow">
                  <Image src={slide.image} alt={slide.title || 'Carousel image'} fill style={{objectFit: "cover"}} data-ai-hint={slide.dataAiHint} />
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

      <section>
          <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-xl">{t('home.popularTools.title')}</h4>
              <Link href="/popular-tools" passHref>
                <Button variant="link" className="text-primary p-0 h-auto font-semibold">{t('home.seeAll')}</Button>
              </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-6 px-6 horizontal-scroll-container">
              {popularTools.map(tool => (
                  <a href={tool.url} target="_blank" rel="noopener noreferrer" key={tool.name} className="flex flex-col items-center shrink-0 w-24 text-center cursor-pointer" onClick={() => handleToolClick(tool)}>
                      <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center p-2 text-primary soft-shadow overflow-hidden">
                          <Image src={tool.image} alt={tool.name} width={48} height={48} className="w-full h-full object-contain" />
                      </div>
                      <p className="text-sm font-medium text-center mt-2 text-muted-foreground">{tool.name}</p>
                  </a>
              ))}
          </div>
      </section>

      <section className="mt-8">
        <h4 className="font-semibold text-xl mb-4">{t('home.quickTools.title')}</h4>
        <div className="space-y-4">
          {sortedQuickToolCategories.map((category) => {
            const isPinned = pinnedTools.has(category.name);
            return (
            <Link href={category.url} key={category.name} className="block group">
              <Card className="relative overflow-hidden rounded-2xl soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
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
                <Image
                  src={category.image}
                  alt={category.name}
                  width="600"
                  height="200"
                  className="w-full h-auto aspect-[3/1] object-cover"
                  data-ai-hint={category.dataAiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h5 className="text-white font-bold text-xl">{t(`home.quickTools.categories.${category.translationKey}`)}</h5>
                </div>
              </Card>
            </Link>
          )})}
        </div>
      </section>
      
      <section className="mt-6 mb-16">
        <div className="flex justify-center items-center gap-8 my-4">
            <div className="flex flex-col items-center gap-2">
                <Button variant={activeSavedTab === 'heart' ? 'secondary' : 'ghost'} size="icon" onClick={() => setActiveSavedTab('heart')} className="w-20 h-16 rounded-2xl bg-pink-100/50 text-pink-500 shadow-lg soft-shadow"><Heart className="w-7 h-7"/></Button>
                <span className="text-sm font-medium text-muted-foreground">Hearted</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button variant={activeSavedTab === 'recent' ? 'secondary' : 'ghost'} size="icon" onClick={() => setActiveSavedTab('recent')} className="w-24 h-20 rounded-2xl bg-blue-100/50 text-blue-500 shadow-lg soft-shadow"><History className="w-9 h-9"/></Button>
                <span className="text-sm font-medium text-muted-foreground">Recent</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button variant={activeSavedTab === 'star' ? 'secondary' : 'ghost'} size="icon" onClick={() => setActiveSavedTab('star')} className="w-20 h-16 rounded-2xl bg-yellow-100/50 text-yellow-500 shadow-lg soft-shadow"><Star className="w-7 h-7"/></Button>
                <span className="text-sm font-medium text-muted-foreground">Starred</span>
            </div>
        </div>
        
        {activeSavedTab === 'recent' && (
             <div className="mt-4">
                {recentTools.length > 0 ? (
                    <div className="space-y-3">
                    {recentTools.map((tool, index) => (
                        <a href={tool.url} target="_blank" rel="noopener noreferrer" key={`${tool.name}-${index}`}>
                            <Card className="p-3 flex items-center gap-4 bg-card border-none rounded-2xl soft-shadow hover:bg-accent/50 transition-colors">
                                {tool.image && <Image src={tool.image} alt={tool.name} width="56" height="56" className="rounded-2xl" data-ai-hint={tool.dataAiHint} />}
                                <div className="flex-grow">
                                    <h5 className="font-semibold text-base">{tool.name}</h5>
                                    <p className="text-sm text-muted-foreground">{tool.category}</p>
                                </div>
                                <Button variant="ghost" size="icon" className="text-muted-foreground rounded-full w-10 h-10">
                                    <ChevronRight />
                                </Button>
                            </Card>
                        </a>
                    ))}
                    </div>
                ) : (
                    <div className="text-center py-10 text-muted-foreground">
                        <History className="mx-auto w-10 h-10" />
                        <p className="mt-4 text-base">{t('home.recents.empty')}</p>
                        <p className="text-sm">{t('home.recents.emptyDescription')}</p>
                    </div>
                )}
            </div>
        )}
        
        {activeSavedTab === 'heart' && (
            <div className="mt-4">
            {heartedTools.length > 0 ? (
                <div className="space-y-3">
                {heartedTools.map((tool, index) => (
                     <a href={tool.url} target="_blank" rel="noopener noreferrer" key={`${tool.name}-${index}`}>
                        <Card className="p-3 flex items-center gap-4 bg-card border-none rounded-2xl soft-shadow hover:bg-accent/50 transition-colors">
                            {tool.image && <Image src={tool.image} alt={tool.name} width="56" height="56" className="rounded-2xl" data-ai-hint={tool.dataAiHint} />}
                            <div className="flex-grow">
                                <h5 className="font-semibold text-base">{tool.name}</h5>
                                <p className="text-sm text-muted-foreground">{tool.category}</p>
                            </div>
                            <Button variant="ghost" size="icon" className="text-red-500 rounded-full w-10 h-10" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleHeartToggle(tool as Tool); }}>
                                <Heart className="fill-current"/>
                            </Button>
                        </Card>
                    </a>
                ))}
                </div>
            ) : (
                <div className="text-center py-10 text-muted-foreground">
                    <Heart className="mx-auto w-10 h-10" />
                    <p className="mt-4 text-base">No hearted tools yet.</p>
                    <p className="text-sm">Tools you heart will appear here.</p>
                </div>
            )}
            </div>
        )}

        {activeSavedTab === 'star' && (
             <div className="mt-4">
                {starredTools.length > 0 ? (
                    <div className="space-y-3">
                    {starredTools.map((tool, index) => (
                        <a href={tool.url} target="_blank" rel="noopener noreferrer" key={`${tool.name}-${index}`}>
                            <Card className="p-3 flex items-center gap-4 bg-card border-none rounded-2xl soft-shadow hover:bg-accent/50 transition-colors">
                                {tool.image && <Image src={tool.image} alt={tool.name} width="56" height="56" className="rounded-2xl" data-ai-hint={tool.dataAiHint} />}
                                <div className="flex-grow">
                                    <h5 className="font-semibold text-base">{tool.name}</h5>
                                    <p className="text-sm text-muted-foreground">{tool.category}</p>
                                </div>
                                <Button variant="ghost" size="icon" className="text-yellow-400 rounded-full w-10 h-10" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleStarToggle(tool as Tool); }}>
                                    <Star className="fill-current"/>
                                </Button>
                            </Card>
                        </a>
                    ))}
                    </div>
                ) : (
                    <div className="text-center py-10 text-muted-foreground">
                        <Star className="mx-auto w-10 h-10" />
                        <p className="mt-4 text-base">No starred tools yet.</p>
                        <p className="text-sm">Tools you star will appear here.</p>
                    </div>
                )}
            </div>
        )}
      </section>
    </>
  )
  
  return (
    <div className="bg-background font-body w-full max-w-md mx-auto flex flex-col h-screen">
        <header className="px-6 pt-6 flex-shrink-0">
            <div className="flex justify-between items-start py-2">
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <GalaxyLogo className="w-8 h-8" />
                    <span className="text-2xl font-bold text-foreground">AI Atlas</span>
                </div>
            </div>
            
              <div className='flex items-center gap-2'>
                  <div className="flex flex-col items-center gap-1">
                  <Link href="/ultra-free" passHref>
                      <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-secondary">
                      <Gift className="w-5 h-5 text-primary"/>
                      </Button>
                  </Link>
                  <span className="text-xs font-medium text-muted-foreground">Ultra Free</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                  <Link href="/mode" passHref>
                      <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-secondary">
                      <Wand2 className="w-5 h-5 text-primary"/>
                      </Button>
                  </Link>
                  <span className="text-xs font-medium text-muted-foreground">Modes</span>
                  </div>
              </div>
            
            </div>
            <nav className="mt-4">
            <Tabs value={activeTab} onValueChange={(value) => router.push(`/?tab=${value}`)} className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-transparent p-0">
                <TabsTrigger value="home" className="data-[state=active]:border-primary data-[state=active]:text-primary text-lg font-semibold border-b-4 border-transparent rounded-none pb-3 transition-all duration-300">{t('tabs.home')}</TabsTrigger>
                <TabsTrigger value="tools" className="data-[state=active]:border-primary data-[state=active]:text-primary text-lg font-semibold border-b-4 border-transparent rounded-none pb-3 transition-all duration-300">{t('tabs.tools')}</TabsTrigger>
                <TabsTrigger value="trending" className="data-[state=active]:border-primary data-[state=active]:text-primary text-lg font-semibold border-b-4 border-transparent rounded-none pb-3 transition-all duration-300">{t('tabs.trending')}</TabsTrigger>
                <TabsTrigger value="settings" className="data-[state=active]:border-primary data-[state=active]:text-primary text-lg font-semibold border-b-4 border-transparent rounded-none pb-3 transition-all duration-300">{t('tabs.settings')}</TabsTrigger>
                </TabsList>
            </Tabs>
            </nav>
        </header>
        
        <main className="flex-grow overflow-y-auto mt-0 min-h-0">
          <Tabs value={activeTab} className="flex-grow flex flex-col mt-0 min-h-0 h-full">
              <TabsContent value="home" className="flex-grow overflow-y-auto no-scrollbar px-6 mt-0">
                 {renderHomeScreen()}
              </TabsContent>

              <TabsContent value="tools" className="flex-grow overflow-hidden flex flex-col mt-4">
                  <Suspense fallback={<ToolsLoadingSkeleton />}>
                    <ToolsTabContent onShare={handleShareTool} onClick={handleToolClick} />
                  </Suspense>
              </TabsContent>
              
              <TabsContent value="trending" className="flex-grow overflow-y-auto no-scrollbar mt-4 px-6">
                  <div className="space-y-4">
                      <Link href="https://explodingtopics.com/blog/most-popular-ai-tools" target="_blank" rel="noopener noreferrer" className="block group">
                          <Card className="bg-card border-none rounded-2xl soft-shadow overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
                              <div className="relative">
                                  <Image 
                                      src={"https://picsum.photos/seed/trending-ai/600/300"}
                                      alt="Trending AI Tools"
                                      width="600"
                                      height="200"
                                      className="w-full h-auto aspect-[16/9] object-cover"
                                      data-ai-hint="data chart"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                  <div className="absolute top-4 right-4 bg-primary/80 text-primary-foreground rounded-full p-2 backdrop-blur-sm">
                                      <ExternalLink className="w-5 h-5"/>
                                  </div>
                              </div>
                              <div className="p-4">
                                  <h3 className="font-bold text-lg text-foreground">Trending AI Tools</h3>
                                  <p className="text-muted-foreground text-sm mt-1">Discover the fastest-growing AI tools of the past months. Provided by Exploding Topics.</p>
                              </div>
                          </Card>
                      </Link>
                      <Link href="https://www.producthunt.com/" target="_blank" rel="noopener noreferrer" className="block group">
                          <Card className="bg-card border-none rounded-2xl soft-shadow overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
                              <div className="relative">
                                  <Image 
                                      src={"https://picsum.photos/seed/new-ai/600/300"}
                                      alt="New AI Tools"
                                      width="600"
                                      height="200"
                                      className="w-full h-auto aspect-[16/9] object-cover"
                                      data-ai-hint="rocket launch"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                  <div className="absolute top-4 right-4 bg-primary/80 text-primary-foreground rounded-full p-2 backdrop-blur-sm">
                                      <ExternalLink className="w-5 h-5"/>
                                  </div>
                              </div>
                              <div className="p-4">
                                  <h3 className="font-bold text-lg text-foreground">New AI Tools</h3>
                                  <p className="text-muted-foreground text-sm mt-1">Find the latest and greatest AI tools fresh from the launchpad. Provided by Product Hunt.</p>
                              </div>
                          </Card>
                      </Link>
                  </div>
              </TabsContent>

              <TabsContent value="settings" className="flex-grow overflow-y-auto no-scrollbar mt-0 bg-secondary/30">
                  {user ? <SettingsPage /> : <AuthScreen onUser={() => {}} />}
              </TabsContent>
          </Tabs>
        </main>
        
        {activeTab === 'tools' && comparisonList.length > 0 && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up w-[90%] max-w-sm">
            <Card className="p-2 rounded-full flex items-center gap-2 soft-shadow bg-card/90 backdrop-blur-xl">
              {comparisonList.length === 2 ? (
                <Link href="/compare-tools" className="flex-grow">
                  <Button size="lg" className="w-full rounded-full glow-shadow font-bold text-base">
                    <Scale className="mr-2 h-5 w-5" />
                    Compare ({comparisonList.length})
                  </Button>
                </Link>
              ) : (
                <div className='flex-grow flex items-center gap-2 px-2 overflow-hidden min-w-0'>
                  <span className='font-semibold truncate'>{comparisonList[0].name}</span>
                  <span className='text-muted-foreground text-sm truncate'>selected</span>
                </div>
              )}
              <Button variant="ghost" size="icon" className="rounded-full flex-shrink-0" onClick={clearComparison}>
                <X className="w-5 h-5"/>
              </Button>
            </Card>
          </div>
        )}
    </div>
  );
}

export default function GalaxyApp() {
  return (
      <HomePageContent />
  );
}
    

    




