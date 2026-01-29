
'use client';

import React, { useMemo, useCallback, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/lib/language';
import { allTools as allToolsData } from '@/lib/tools-data';
import type { Tool } from '@/lib/types';
import { useUserPreferences } from '@/context/user-preferences-context';
import { cn } from '@/lib/utils';
import { Share2, Heart, TrendingUp, Search, Filter, Scale, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const ToolCard = React.memo(({ tool, onShare, onClick, t }: { tool: Tool, onShare: (e: React.MouseEvent, tool: Tool) => void, onClick: (tool: Tool) => void, t: (key: string) => string }) => {
    const { heartedTools, handleHeartToggle, comparisonList, selectForCompare } = useUserPreferences();
    const isHearted = heartedTools.some(t => t.name === tool.name);
    const isSelectedForCompare = comparisonList.some(t => t.name === tool.name);

    const handleCardClick = useCallback((e: React.MouseEvent) => {
        onClick(tool);
    }, [tool, onClick]);

    const handleHeartClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        handleHeartToggle(tool);
    }
    
    const handleCompareClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        selectForCompare(tool);
    };
  
    return (
      <a href={tool.url} target="_blank" rel="noopener noreferrer" onClick={handleCardClick}>
        <Card className="relative overflow-hidden group cursor-pointer bg-card border-border rounded-3xl h-full soft-shadow transition-transform hover:scale-105 duration-300">
          {tool.image && <Image src={tool.image} alt={tool.name} width={300} height={200} className="w-full aspect-[4/3] object-cover" data-ai-hint={tool.dataAiHint} />}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          {tool.isTrending && (
            <Badge className="absolute top-2 left-2 bg-purple-500/80 text-white backdrop-blur-sm text-xs rounded-full border-none shadow-lg">
              <TrendingUp className="w-3 h-3 mr-1"/>
              {t('tools.trendingBadge')}
            </Badge>
          )}
           <Button variant="ghost" size="icon" className={cn("absolute top-2 right-2 w-8 h-8 rounded-full text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm", isSelectedForCompare && "bg-primary/80")} onClick={handleCompareClick}>
                {isSelectedForCompare ? <Check /> : <Scale />}
            </Button>
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <div className="flex justify-between items-end">
              <h5 className="font-semibold text-white text-base leading-tight line-clamp-2">{tool.name}</h5>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm" onClick={(e) => onShare(e, tool)}>
                  <Share2 />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm" onClick={handleHeartClick}>
                    <Heart className={cn('w-5 h-5 transition-all', isHearted ? 'fill-red-500 text-red-500' : 'text-white')} />
                </Button>
              </div>
            </div>
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

    const filteredTools = useMemo(() => {
        let tools = allToolsData;

        // Search filter
        if (searchTerm) {
            tools = tools.filter(tool => 
                tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tool.category?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Price filter
        if (priceFilter === 'Free') {
            tools = tools.filter(tool => tool.pricing === 'Free' || tool.pricing === 'Freemium');
        }

        return tools;
    }, [searchTerm, priceFilter]);

    return (
        <>
            <div className="px-4 pb-2">
                <div className="flex gap-2 items-center">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input 
                            placeholder="Search tools..."
                            className="pl-10 bg-card rounded-full h-12 border-border soft-shadow"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="w-12 h-12 rounded-full bg-card soft-shadow">
                                <Filter className="w-5 h-5"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Sort by Price</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={priceFilter} onValueChange={setPriceFilter}>
                                <DropdownMenuRadioItem value="All">All</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Free">Free & Freemium</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="text-center mt-2 text-sm font-semibold text-muted-foreground">
                    {filteredTools.length} Tools
                </div>
            </div>
            <div className="flex-grow overflow-y-auto px-4 no-scrollbar pt-2 pb-4">
                 <div className="grid grid-cols-2 gap-4">
                    {filteredTools.map(tool => (
                        <ToolCard
                            key={tool.name}
                            tool={tool}
                            onShare={onShare}
                            onClick={onClick}
                            t={t}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
