'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/language';
import type { Tool } from '@/lib/types';
import { useUserPreferences } from '@/context/user-preferences-context';
import { cn } from '@/lib/utils';
import { Share2, Star, Search, Filter, Scale, Check, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { allToolsServer } from '@/lib/all-tools-server';

const ToolCard = React.memo(({ tool, onShare, onClick, t }: { tool: Tool, onShare: (e: React.MouseEvent, tool: Tool) => void, onClick: (tool: Tool) => void, t: (key: string) => string }) => {
    const { starredTools, handleStarToggle, comparisonList, selectForCompare } = useUserPreferences();
    const isStarred = starredTools.some(t => t.name === tool.name);
    const isSelectedForCompare = comparisonList.some(t => t.name === tool.name);

    const handleStarClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        handleStarToggle(tool);
    }
    
    const handleCompareClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        selectForCompare(tool);
    };
  
    return (
      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="block group" onClick={() => onClick(tool)}>
        <Card className="bg-card/80 backdrop-blur-lg border-white/20 rounded-2xl soft-shadow transition-all duration-300 hover:scale-[1.02] overflow-hidden aspect-square flex flex-col p-4 justify-between">
            <div className='text-center flex flex-col items-center justify-center gap-2 flex-grow'>
                <div className='relative w-14 h-14 md:w-20 md:h-20'>
                    <Image
                        src={tool.image}
                        alt={tool.name}
                        fill
                        className="object-contain rounded-none"
                        data-ai-hint={tool.dataAiHint}
                        unoptimized
                    />
                    <div className="absolute -inset-1 bg-primary/20 rounded-none blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h5 className="font-bold text-foreground text-sm md:text-base leading-tight line-clamp-2 mt-2">{tool.name}</h5>
            </div>
            <div className="flex items-center justify-center gap-2 pt-2">
                <Button variant="ghost" size="icon" className="w-8 h-8 md:w-10 md:h-10 rounded-full text-foreground/80 bg-white/10 hover:bg-white/20" onClick={(e) => onShare(e, tool)}>
                    <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8 md:w-10 md:h-10 rounded-full text-foreground/80 bg-white/10 hover:bg-white/50" onClick={handleStarClick}>
                    <Star className={cn('w-4 h-4 md:w-5 md:h-5 transition-all', isStarred ? 'fill-yellow-300 text-yellow-300' : 'text-foreground/60')}/>
                </Button>
                <Button variant="ghost" size="icon" className={cn("w-8 h-8 md:w-10 md:h-10 rounded-full text-foreground/80 bg-white/10 hover:bg-white/50", isSelectedForCompare && "bg-primary/20")} onClick={handleCompareClick}>
                    {isSelectedForCompare ? <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" /> : <Scale className="w-4 h-4 md:w-5 md:h-5" />}
                </Button>
            </div>
        </Card>
      </a>
    );
});
ToolCard.displayName = 'ToolCard';

export default function ToolsTabContent({ onShare, onClick }: { onShare: (e: React.MouseEvent, tool: Tool) => void, onClick: (tool: Tool) => void }) {
    const { t } = useLanguage();
    
    const [searchTerm, setSearchTerm] = useState('');
    const [priceFilter, setPriceFilter] = useState('All');
    const [visibleCount, setVisibleCount] = useState(20);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    const filteredTools = useMemo(() => {
        if (!isMounted) return [];
        let tools: Tool[] = allToolsServer;
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        if (lowerCaseSearchTerm) {
            tools = tools.filter(tool =>
                tool.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                (tool.description && tool.description.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (tool.category && tool.category.toLowerCase().includes(lowerCaseSearchTerm))
            );
        }

        if (priceFilter === 'Free') {
            tools = tools.filter(tool => tool.pricing === 'Free' || tool.pricing === 'Freemium');
        }
        
        return tools;
    }, [searchTerm, priceFilter, isMounted]);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 20);
    };

    if (!isMounted) {
        return (
            <div className="flex-grow flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full max-w-7xl mx-auto">
            <div className="px-4 pb-4">
                <div className="flex gap-4 items-center max-w-2xl mx-auto">
                    <div className="relative flex-grow">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input 
                            placeholder="Search tools..."
                            className="pl-12 bg-card rounded-full h-12 border-border shadow-md"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setVisibleCount(20);
                            }}
                        />
                    </div>
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="w-12 h-12 rounded-full bg-card shadow-md">
                                <Filter className="w-5 h-5"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Sort by Price</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={priceFilter} onValueChange={(value) => {
                                setPriceFilter(value);
                                setVisibleCount(20);
                            }}>
                                <DropdownMenuRadioItem value="All">All</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Free">Free & Freemium</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="text-center mt-4 text-sm font-bold text-muted-foreground uppercase tracking-widest">
                    {`${filteredTools.length} Tools Discovered`}
                </div>
            </div>
            <div className="flex-1 overflow-y-auto px-4 no-scrollbar pt-2 pb-20">
                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                    {filteredTools.slice(0, visibleCount).map(tool => (
                        <ToolCard
                            key={tool.name}
                            tool={tool}
                            onShare={onShare}
                            onClick={onClick}
                            t={t}
                        />
                    ))}
                </div>
                {visibleCount < filteredTools.length && (
                    <div className="text-center mt-12 mb-8">
                        <Button onClick={handleLoadMore} size="lg" className="rounded-full px-8 h-14 text-lg font-bold shadow-xl">Load More Tools</Button>
                    </div>
                )}
            </div>
        </div>
    );
}
