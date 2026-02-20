
'use client';

import React, { useCallback, useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Star, Share2, Gift, CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useUserPreferences } from '@/context/user-preferences-context';
import { type Tool, ultraFreeToolData } from '@/lib/ultra-free-tools-data';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";


export default function UltraFreePage() {
    const { toast } = useToast();
    const [isClient, setIsClient] = useState(false);
    const autoplayPlugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleShareTool = useCallback(async (e: React.MouseEvent, tool: Tool) => {
        e.preventDefault();
        e.stopPropagation();
    
        const shareData = {
          title: tool.name,
          text: `Check out this AI tool: ${tool.name}`,
          url: tool.url,
        };
    
        if (navigator.share) {
          try {
            await navigator.share(shareData);
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

    const ToolCard = ({ tool }: { tool: Tool }) => {
        const { starredTools, handleStarToggle } = useUserPreferences();
        const isStarred = isClient && starredTools.some(t => t.name === tool.name);

        const handleStarClick = (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            handleStarToggle(tool);
        };

        return (
             <Link href={tool.url} key={tool.name} target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="bg-card/60 backdrop-blur-lg border border-white/10 soft-shadow transition-all duration-300 hover:border-primary/30 hover:scale-[1.02] overflow-hidden rounded-none">
                    <CardContent className='p-4 text-center flex flex-col items-center justify-center gap-2'>
                        <div className='relative w-14 h-14'>
                            <Image
                                src={tool.image}
                                alt={tool.name}
                                fill
                                className="object-contain rounded-md"
                                data-ai-hint={tool.name}
                            />
                            <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <CardTitle className="text-sm font-bold text-foreground">{tool.name}</CardTitle>
                        <div className="flex items-center justify-center gap-2 mt-1">
                            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-foreground/80 bg-white/10 hover:bg-white/20" onClick={(e) => handleShareTool(e, tool)}>
                                <Share2 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-foreground/80 bg-white/10 hover:bg-white/50" onClick={handleStarClick}>
                                <Star className={cn('w-4 h-4 transition-all', isStarred ? 'fill-yellow-300 text-yellow-300' : 'text-foreground/60')}/>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        );
    }

    const TopToolCard = ({ tool }: { tool: Tool }) => (
      <Link href={tool.url} key={tool.name} target="_blank" rel="noopener noreferrer" className="block group h-full">
          <Card className="bg-primary text-primary-foreground rounded-none soft-shadow transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full p-6 flex flex-col">
              <div className="flex items-start gap-4">
                  <div className='relative w-12 h-12 shrink-0 bg-white/20 p-2 rounded-md flex items-center justify-center'>
                      <Image
                          src={tool.image}
                          alt={tool.name}
                          width={32}
                          height={32}
                          className="object-contain"
                          data-ai-hint={tool.name}
                      />
                  </div>
                  <div className="flex-grow">
                      <CardTitle className="text-lg font-bold">{tool.name}</CardTitle>
                      <p className="text-sm text-primary-foreground/80 mt-1 line-clamp-2">{tool.description}</p>
                  </div>
              </div>
              {tool.features && (
                  <ul className="mt-4 space-y-2 text-sm text-primary-foreground/90 pl-2">
                      {tool.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 opacity-80 mt-1 shrink-0" />
                              <span>{feature}</span>
                          </li>
                      ))}
                  </ul>
              )}
          </Card>
      </Link>
    );
    
    const { topTools, otherTools } = useMemo(() => {
        const topToolsCategory = ultraFreeToolData.find(cat => cat.title === "Top Free AI Tools");
        const topTools = topToolsCategory ? topToolsCategory.tools : [];
    
        const otherToolsData = ultraFreeToolData
            .filter(cat => cat.title !== "Top Free AI Tools")
            .flatMap(category => category.tools);
            
        return { topTools, otherTools: otherToolsData };
    }, []);


  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-sm pt-6 px-4">
        <header className="flex items-center justify-between gap-4">
            <div className='flex items-center gap-4'>
                <Link href="/" passHref>
                    <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
                    <ArrowLeft />
                    </Button>
                </Link>
                <div className='flex items-center gap-2'>
                    <Gift className="w-6 h-6 text-foreground" />
                    <h1 className="text-2xl font-bold text-foreground">
                        Ultra Tools
                    </h1>
                </div>
            </div>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 flex flex-col min-h-0 mt-6">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4 space-y-8">
             <Carousel
                opts={{ loop: true }}
                plugins={[autoplayPlugin.current]}
                className="w-full"
                onMouseEnter={autoplayPlugin.current.stop}
                onMouseLeave={autoplayPlugin.current.reset}
            >
                <CarouselContent className="-ml-4">
                    {topTools.map((tool, index) => (
                         <CarouselItem key={index} className="pl-4">
                            <TopToolCard tool={tool} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            
            <h2 className="font-semibold text-2xl text-center text-foreground/80 tracking-wider pt-4">
                Allrounder AI Tools
            </h2>
            
            <div className="grid grid-cols-2 gap-4 pb-8">
              {otherTools.map((tool) => (
                <ToolCard tool={tool} key={tool.name} />
              ))}
            </div>

            <footer className="text-center py-8 mt-8 border-t-2 border-primary/10">
                <p className="text-sm text-muted-foreground tracking-widest uppercase">AI ATLAS 2099</p>
                <p className="text-xs text-muted-foreground/70 mt-1">Discovering the Future of Intelligence</p>
            </footer>

        </div>
      </main>
    </div>
  );
}
