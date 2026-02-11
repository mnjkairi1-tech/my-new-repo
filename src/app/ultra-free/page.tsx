
'use client';

import React, { useCallback, useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Star, Share2, Gift
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
    const autoplayPlugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

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
                <Card className="bg-card/60 backdrop-blur-lg border border-white/10 rounded-3xl soft-shadow transition-all duration-300 hover:border-primary/30 hover:scale-[1.02] overflow-hidden h-full">
                    <CardContent className='p-4 text-center flex flex-col h-full'>
                        <div className='relative w-16 h-16 mx-auto mb-4'>
                            <Image
                                src={tool.image}
                                alt={tool.name}
                                fill
                                className="object-contain rounded-2xl"
                                data-ai-hint={tool.dataAiHint}
                            />
                            <div className="absolute -inset-1 bg-primary/20 rounded-3xl blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <CardTitle className="text-base font-bold text-foreground flex-grow">{tool.name}</CardTitle>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2 flex-grow">{tool.description}</p>
                        <div className="flex items-center justify-center gap-2 mt-4">
                            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-foreground/80 bg-white/10 hover:bg-white/20" onClick={(e) => handleShareTool(e, tool)}>
                                <Share2 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-foreground/80 bg-white/10 hover:bg-white/20" onClick={handleStarClick}>
                                <Star className={cn('w-4 h-4 transition-all', isStarred ? 'fill-yellow-300 text-yellow-300' : 'text-foreground/60')}/>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        );
    }
    
    const { topTools, otherTools } = useMemo(() => {
        const topToolsCategory = ultraFreeToolData.find(cat => cat.title === "Top Free AI Tools");
        const carouselSlides = topToolsCategory ? topToolsCategory.tools.map(tool => ({
            title: tool.name,
            image: tool.image,
            dataAiHint: tool.dataAiHint,
            link: tool.url
        })) : [];
    
        const allOtherTools = ultraFreeToolData
            .filter(cat => cat.title !== "Top Free AI Tools")
            .flatMap(category => category.tools);
            
        return { topTools: carouselSlides, otherTools: allOtherTools };
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
                        Ultra Free Tools
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
                <CarouselContent className="-ml-2">
                    {topTools.map((slide, index) => (
                         <CarouselItem key={index} className="pl-2">
                            <Link href={slide.link} target="_blank" rel="noopener noreferrer">
                                <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden soft-shadow">
                                <Image src={slide.image} alt={slide.title} fill style={{objectFit: "cover"}} data-ai-hint={slide.dataAiHint} />
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
            
            <h2 className="font-semibold text-2xl text-center text-foreground/80 tracking-wider pt-4">
                Explore More Tools
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

