'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Star, Share2, Filter, Scissors
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useUserPreferences } from '@/context/user-preferences-context';
import { type Tool, type ToolCategory, videoEditingToolData } from '@/lib/video-editing-tools-data';


export default function VideoEditingToolsPage() {
    const { toast } = useToast();
    const [priceFilter, setPriceFilter] = useState('All');
    const [open, setOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

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
            <Link href={tool.url} key={tool.name} target="_blank" rel="noopener noreferrer" className="block group h-full">
            <Card 
                className="bg-white/80 border-none soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg overflow-hidden h-full flex flex-col rounded-3xl"
            >
                <div className="relative">
                    <div className="aspect-[4/3] relative bg-secondary/30 flex items-center justify-center p-4">
                        <Image
                        src={tool.image}
                        alt={tool.name}
                        width={120}
                        height={90}
                        className="object-contain"
                        data-ai-hint={tool.dataAiHint}
                        unoptimized
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    <div className="absolute top-1 right-1 bg-primary/80 text-primary-foreground rounded-full p-1 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-3 h-3"/>
                    </div>
                </div>
                <CardContent className='p-2 flex flex-col flex-grow'>
                    <CardTitle className="text-xs font-bold text-foreground leading-tight line-clamp-2 flex-grow text-center">{tool.name}</CardTitle>
                    <div className="flex items-center justify-center gap-1 mt-1">
                        <Button variant="ghost" size="icon" className="w-6 h-6 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={(e) => handleShareTool(e, tool)}>
                            <Share2 className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="w-6 h-6 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={handleStarClick}>
                            <Star className={cn('w-3.5 h-3.5 transition-all', isClient && isStarred ? 'fill-yellow-300 text-yellow-300' : 'text-foreground/60')}/>
                        </Button>
                    </div>
                </CardContent>
            </Card>
            </Link>
        );
    }
    
    const filteredToolData = useMemo(() => {
        if (priceFilter === 'All') {
            return videoEditingToolData;
        }
        return videoEditingToolData.map(category => ({
            ...category,
            tools: category.tools.filter(tool => tool.pricing === 'Free' || tool.pricing === 'Freemium')
        })).filter(category => category.tools.length > 0);
    }, [priceFilter]);


  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-6 px-4 md:px-8">
        <header className="flex items-center justify-between gap-4">
            <div className='flex items-center gap-4'>
                <Link href="/" passHref>
                    <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
                    <ArrowLeft />
                    </Button>
                </Link>
                <div className='flex items-center gap-2'>
                    <Scissors className="w-6 h-6 text-foreground" />
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                        Video Editing Tools
                    </h1>
                </div>
            </div>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col min-h-0 mt-6 px-4 md:px-8">
        <div className="flex-grow overflow-y-auto no-scrollbar space-y-12 py-4 pb-24">
            {filteredToolData.map((category, index) => {
              if (category.tools.length === 0) return null;

              return (
              <section key={index} className="space-y-4">
                  <div className="flex justify-between items-center px-2">
                      <h2 className="font-bold text-xl md:text-2xl flex items-center gap-2">
                          {category.icon}
                          {category.title}
                      </h2>
                      {index === 0 && isClient && (
                          <DropdownMenu open={open} onOpenChange={setOpen}>
                              <DropdownMenuTrigger asChild>
                                  <Button variant="outline" size="sm" className="bg-white/50 rounded-full h-10 px-6 font-bold shadow-md">
                                      <Filter className="w-4 h-4 mr-2" />
                                      Filter
                                  </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="w-56">
                                  <DropdownMenuLabel>Filter by Price</DropdownMenuLabel>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuRadioGroup value={priceFilter} onValueChange={setPriceFilter}>
                                      <DropdownMenuRadioItem value="All">All (Free & Paid)</DropdownMenuRadioItem>
                                      <DropdownMenuRadioItem value="Free">Free Only</DropdownMenuRadioItem>
                                  </DropdownMenuRadioGroup>
                              </DropdownMenuContent>
                          </DropdownMenu>
                      )}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                      {category.tools.map((tool) => (
                        <ToolCard tool={tool} key={tool.name} />
                      ))}
                  </div>
              </section>
            )})}
        </div>
      </main>
    </div>
  );
}
