'use client';

import React, { useMemo, useCallback, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Star, Share2, Filter, Search, Scale, Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useUserPreferences } from '@/context/user-preferences-context';
import { allTools } from '@/lib/tools-data';
import type { Tool } from '@/lib/types';


export default function AllToolsPage() {
    const { toast } = useToast();
    const [priceFilter, setPriceFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [open, setOpen] = useState(false);
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
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
        const { starredTools, handleStarToggle, comparisonList, selectForCompare } = useUserPreferences();
        const isStarred = isClient && starredTools.some(t => t.name === tool.name);
        const isSelectedForCompare = isClient && comparisonList.some(t => t.name === tool.name);

        const handleStarClick = (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            handleStarToggle(tool);
        };

        const handleCompareClick = (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            selectForCompare(tool);
        };

        return (
            <Link href={tool.url} key={tool.name} target="_blank" rel="noopener noreferrer" className="block group">
            <Card 
                className="bg-white/80 border-none soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg overflow-hidden h-full flex flex-col rounded-3xl"
            >
                <div className="relative">
                    <div className="aspect-[3/2] relative bg-secondary/30 flex items-center justify-center p-6">
                        <Image
                        src={tool.image}
                        alt={tool.name || 'Tool Image'}
                        width={80}
                        height={80}
                        className="object-contain"
                        data-ai-hint={tool.dataAiHint}
                        unoptimized
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    <div className="absolute top-2 right-2 bg-primary/80 text-primary-foreground rounded-full p-1.5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-4 h-4"/>
                    </div>
                     <div className="absolute bottom-2 left-2 bg-background/80 text-foreground text-[10px] font-black uppercase tracking-tighter px-3 py-1 rounded-full">{tool.category}</div>
                </div>
                <CardContent className='p-4 flex flex-col flex-grow'>
                  <CardTitle className="text-base font-bold text-foreground leading-tight line-clamp-1 flex-grow">{tool.name}</CardTitle>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">{tool.description}</p>
                  <div className="flex items-center justify-end gap-2 mt-4">
                      <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-foreground/80 bg-secondary/50 hover:bg-secondary" onClick={(e) => handleShareTool(e, tool)}>
                          <Share2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-foreground/80 bg-secondary/50 hover:bg-secondary" onClick={handleStarClick}>
                          <Star className={cn('w-4 h-4 transition-all', isClient && isStarred ? 'fill-yellow-300 text-yellow-300' : 'text-foreground/60')}/>
                      </Button>
                      <Button variant="ghost" size="icon" className={cn("w-8 h-8 rounded-full text-foreground/80 bg-secondary/50 hover:bg-secondary", isSelectedForCompare && "bg-primary/20")} onClick={handleCompareClick}>
                        {isSelectedForCompare ? <Check className="w-4 h-4 text-primary" /> : <Scale className="w-4 h-4" />}
                      </Button>
                  </div>
                </CardContent>
            </Card>
            </Link>
        );
    }
    
    const filteredTools = useMemo(() => {
        let tools = allTools;

        if (priceFilter !== 'All') {
             tools = tools.filter(tool => tool.pricing === 'Free' || tool.pricing === 'Freemium');
        }
        
        if (searchTerm) {
            tools = tools.filter(tool => 
                tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (tool.description && tool.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (tool.category && tool.category.toLowerCase().includes(searchTerm.toLowerCase()))
            )
        }

        return tools;
    }, [priceFilter, searchTerm]);


  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative animate-fade-in-up">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl pt-6 px-4">
        <header className="flex items-center justify-between gap-4 mb-6">
            <div className='flex items-center gap-4'>
                <Link href="/" passHref>
                    <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
                    <ArrowLeft />
                    </Button>
                </Link>
                <div className='flex items-center gap-2'>
                    <h1 className="text-3xl font-black text-foreground tracking-tight">
                        Global Catalog
                    </h1>
                </div>
            </div>
        </header>

         <div className="flex gap-4 items-center my-6 max-w-3xl mx-auto">
            <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input 
                    type="search"
                    placeholder="Search over 1 million AI tools..."
                    className="pl-12 w-full h-14 bg-background/80 backdrop-blur-sm rounded-full border-2 border-white/20 shadow-xl focus:border-primary/30 transition-all text-base outline-none pr-6"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            {isClient && (
                 <DropdownMenu open={open} onOpenChange={setOpen}>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" className="w-14 h-14 rounded-full bg-white/50 border-white/20 shadow-xl">
                            <Filter className="w-6 h-6" />
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
      </div>

      <main className="relative z-10 w-full max-w-7xl flex-1 flex flex-col min-h-0 mt-2 px-4">
        <div className="flex-grow overflow-y-auto no-scrollbar pb-24">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {filteredTools.map((tool) => (
                    <ToolCard tool={tool} key={tool.name} />
                ))}
            </div>
        </div>
      </main>
    </div>
  );
}
