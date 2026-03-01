'use client';

import React, { useMemo, useCallback, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Star, Share2, Filter, Search, Scale, Check, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useUserPreferences } from '@/context/user-preferences-context';
import { allTools } from '@/lib/tools-data';
import type { Tool } from '@/lib/types';
import { useRouter } from 'next/navigation';


export default function AllToolsPage() {
    const { toast } = useToast();
    const { theme, comparisonList } = useUserPreferences();
    const isMidnight = theme === 'midnight-glass';
    const [priceFilter, setPriceFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [open, setOpen] = useState(false);
    const [isClient, setIsClient] = React.useState(false);
    const router = useRouter();

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
                className={cn(
                    "border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg overflow-hidden h-full flex flex-col",
                    isMidnight ? "glass-card-effect" : "bg-card backdrop-blur-xl border-border/50 soft-shadow rounded-[var(--radius)]"
                )}
            >
                <div className="relative">
                    <div className={cn(
                        "aspect-square relative flex items-center justify-center p-8",
                        !isMidnight && "bg-secondary/20"
                    )}>
                        <Image
                        src={tool.image}
                        alt={tool.name || 'Tool Image'}
                        width={100}
                        height={100}
                        className="object-contain relative z-10"
                        data-ai-hint={tool.dataAiHint}
                        unoptimized
                        />
                    </div>
                    <div className="absolute top-2 right-2 bg-primary/80 text-primary-foreground rounded-full p-1.5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-20">
                        <ExternalLink className="w-4 h-4"/>
                    </div>
                </div>
                <CardContent className='p-4 flex flex-col items-center text-center flex-grow relative z-10'>
                  <CardTitle className="text-base font-bold text-foreground leading-tight line-clamp-1 mb-4">{tool.name}</CardTitle>
                  
                  <div className="flex items-center justify-center gap-3 w-full mt-auto">
                      <Button variant="ghost" size="icon" className={cn(
                          "w-9 h-9 rounded-full transition-colors",
                          isMidnight ? "bg-white/10 hover:bg-white/20 text-white" : "bg-secondary/50 hover:bg-secondary"
                      )} onClick={(e) => handleShareTool(e, tool)}>
                          <Share2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className={cn(
                          "w-9 h-9 rounded-full transition-colors",
                          isMidnight ? "bg-white/10 hover:bg-white/20 text-white" : "bg-secondary/50 hover:bg-secondary"
                      )} onClick={handleStarClick}>
                          <Star className={cn('w-4.5 h-4.5 transition-all', isClient && isStarred ? 'fill-yellow-400 text-yellow-400' : (isMidnight ? 'text-white/60' : 'text-foreground/60'))}/>
                      </Button>
                      <Button variant="ghost" size="icon" className={cn(
                          "w-9 h-9 rounded-full transition-colors",
                          isSelectedForCompare ? "bg-primary/20" : (isMidnight ? "bg-white/10 hover:bg-white/20 text-white" : "bg-secondary/50 hover:bg-secondary")
                      )} onClick={handleCompareClick}>
                        {isSelectedForCompare ? <Check className="w-4.5 h-4.5 text-primary" /> : <Scale className="w-4.5 h-4.5" />}
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
      <div className="relative z-10 w-full max-w-7xl pt-6 px-4">
        <header className="flex items-center justify-between gap-4 mb-6">
            <div className='flex items-center gap-4'>
                <Link href="/" passHref>
                    <Button variant="ghost" size="icon" className={cn(
                        "w-12 h-12 rounded-full backdrop-blur-sm",
                        isMidnight ? "bg-white/10 text-white border border-white/20" : "bg-white/50"
                    )}>
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

         <div className="flex gap-4 items-center my-6 max-w-3xl mx-auto px-4">
            <div className="relative flex-grow">
                <Search className={cn("absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5", isMidnight ? "text-white/50" : "text-muted-foreground")} />
                <input 
                    type="search"
                    placeholder="Search over 1 million AI tools..."
                    className={cn(
                        "pl-12 w-full h-14 border shadow-xl transition-all text-base outline-none pr-6",
                        isMidnight ? "glass-input-effect text-white placeholder:text-white/40" : "bg-card backdrop-blur-sm rounded-full border-border focus:border-primary/30"
                    )}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            {isClient && (
                 <DropdownMenu open={open} onOpenChange={setOpen}>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" className={cn(
                            "w-14 h-14 rounded-full shadow-xl",
                            isMidnight ? "bg-white/10 border-white/20 text-white" : "bg-card border-border"
                        )}>
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
        <div className="flex-grow overflow-y-auto no-scrollbar pb-32">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {filteredTools.map((tool) => (
                    <ToolCard tool={tool} key={tool.name} />
                ))}
            </div>
        </div>
      </main>

      {/* Floating Compare Button for Mobile/Global */}
      {comparisonList.length === 2 && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[60] w-full max-w-xs px-4 animate-in fade-in slide-in-from-bottom-10">
              <Button 
                  onClick={() => router.push('/compare-tools')}
                  className="w-full h-14 rounded-full font-black text-lg bg-primary text-primary-foreground shadow-2xl border-4 border-background group"
              >
                  <Scale className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Compare Tools
                  <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
          </div>
      )}
    </div>
  );
}
