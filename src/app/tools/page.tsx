
'use client';

import React, { useMemo, useCallback, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Star, Share2, Filter, Search
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
        const { starredTools, handleStarToggle } = useUserPreferences();
        const isStarred = isClient && starredTools.some(t => t.name === tool.name);

        const handleStarClick = (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            handleStarToggle(tool);
        };

        return (
            <Link href={tool.url} key={tool.name} target="_blank" rel="noopener noreferrer" className="block group">
            <Card 
                className="bg-white/80 border-none rounded-lg soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg overflow-hidden h-full flex flex-col"
            >
                <div className="relative">
                    <Image
                    src={tool.image}
                    alt={tool.name || 'Tool Image'}
                    width={180}
                    height={120}
                    className="w-full h-auto aspect-[3/2] object-cover"
                    data-ai-hint={tool.dataAiHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-1 right-1 bg-primary/80 text-primary-foreground rounded-full p-1 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-3 h-3"/>
                    </div>
                     <div className="absolute bottom-1 left-1 bg-background/80 text-foreground text-xs font-bold px-2 py-1 rounded-full">{tool.category}</div>
                </div>
                <CardContent className='p-3 flex flex-col flex-grow'>
                  <CardTitle className="text-sm font-bold text-foreground leading-tight line-clamp-2 flex-grow">{tool.name}</CardTitle>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{tool.description}</p>
                  <div className="flex items-center justify-end gap-1 mt-2">
                      <Button variant="ghost" size="icon" className="w-7 h-7 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={(e) => handleShareTool(e, tool)}>
                          <Share2 className="w-3.5 h-3.5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-7 h-7 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={handleStarClick}>
                          <Star className={cn('w-4 h-4 transition-all', isClient && isStarred ? 'fill-yellow-300 text-yellow-300' : 'text-foreground/60')}/>
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
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-4xl pt-6 px-4">
        <header className="flex items-center justify-between gap-4">
            <div className='flex items-center gap-4'>
                <Link href="/" passHref>
                    <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
                    <ArrowLeft />
                    </Button>
                </Link>
                <div className='flex items-center gap-2'>
                    <h1 className="text-2xl font-bold text-foreground">
                        All Tools
                    </h1>
                </div>
            </div>
        </header>

         <div className="flex gap-2 items-center my-4">
            <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input 
                    type="search"
                    placeholder="Search all tools..."
                    className="pl-10 w-full h-12 bg-background/80 rounded-full border-border soft-shadow pr-4"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            {isClient && (
                 <DropdownMenu open={open} onOpenChange={setOpen}>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" className="w-12 h-12 rounded-full bg-white/50">
                            <Filter className="w-5 h-5" />
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

      <main className="relative z-10 w-full max-w-4xl flex-1 flex flex-col min-h-0 mt-2">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredTools.map((tool) => (
                    <ToolCard tool={tool} key={tool.name} />
                ))}
            </div>
        </div>
      </main>
    </div>
  );
}

