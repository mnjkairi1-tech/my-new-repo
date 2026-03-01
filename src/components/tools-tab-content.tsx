'use client';

import React, { useMemo, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/language';
import type { Tool } from '@/lib/types';
import { useUserPreferences } from '@/context/user-preferences-context';
import { cn } from '@/lib/utils';
import { Share2, Star, Search, Filter, Scale, Check, Loader2, Info, SearchCode, StarHalf, UserPlus, ArrowRight, Link2, Heart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { allToolsServer } from '@/lib/all-tools-server';
import { useToast } from '@/hooks/use-toast';
import { validateAndGetToolInfo } from '@/ai/flows/validate-tool-url';

const ToolCard = React.memo(({ tool, onShare, onClick, t }: { tool: Tool, onShare: (e: React.MouseEvent, tool: Tool) => void, onClick: (tool: Tool) => void, t: (key: string) => string }) => {
    const { theme, starredTools, handleStarToggle, comparisonList, selectForCompare } = useUserPreferences();
    const isStarred = starredTools.some(t => t.name === tool.name);
    const isSelectedForCompare = comparisonList.some(t => t.name === tool.name);
    const isMidnight = theme === 'midnight-glass';

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
      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="block group h-full" onClick={() => onClick(tool)}>
        <Card className={cn(
            "border border-border/50 rounded-none transition-all duration-300 hover:scale-[1.02] hover:shadow-lg overflow-hidden h-full flex flex-col aspect-[4/5] p-4 justify-between",
            isMidnight ? "glass-card-effect" : "bg-card backdrop-blur-xl soft-shadow"
        )}>
            <div className='text-center flex flex-col items-center justify-center gap-2 flex-grow relative z-10'>
                <div className={cn(
                    'relative w-16 h-16 md:w-20 md:h-20 mb-2 transition-transform duration-500 group-hover:scale-110',
                    isMidnight && "drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                )}>
                    <Image
                        src={tool.image}
                        alt={tool.name}
                        fill
                        className="object-contain"
                        data-ai-hint={tool.dataAiHint}
                        unoptimized
                    />
                </div>
                <h5 className={cn(
                    "font-bold text-xs md:text-base leading-tight line-clamp-2 px-1",
                    isMidnight ? "text-white tracking-wide" : "text-foreground"
                )}>{tool.name}</h5>
            </div>
            <div className="flex items-center justify-center gap-2 md:gap-3 pt-3 relative z-10 border-t border-border/20">
                <Button variant="ghost" size="icon" className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full transition-colors",
                    isMidnight ? "bg-white/10 hover:bg-white/20 text-white" : "bg-secondary/50 hover:bg-secondary"
                )} onClick={(e) => onShare(e, tool)}>
                    <Share2 className="w-4 h-4 md:w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full transition-colors",
                    isMidnight ? "bg-white/10 hover:bg-white/20 text-white" : "bg-secondary/50 hover:bg-secondary"
                )} onClick={handleStarClick}>
                    <Star className={cn('w-4 h-4 md:w-5 h-5 transition-all', isStarred ? 'fill-yellow-400 text-yellow-400' : (isMidnight ? 'text-white/60' : 'text-foreground/60'))}/>
                </Button>
                <Button variant="ghost" size="icon" className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full transition-colors",
                    isSelectedForCompare ? "bg-primary/20" : (isMidnight ? "bg-white/10 hover:bg-white/20 text-white" : "bg-secondary/50 hover:bg-secondary")
                )} onClick={handleCompareClick}>
                    {isSelectedForCompare ? <Check className="w-4 h-4 md:w-5 h-5 text-primary" /> : <Scale className="w-4 h-4 md:w-5 h-5" />}
                </Button>
            </div>
        </Card>
      </a>
    );
});
ToolCard.displayName = 'ToolCard';

export default function ToolsTabContent({ onShare, onClick }: { onShare: (e: React.MouseEvent, tool: Tool) => void, onClick: (tool: Tool) => void }) {
    const { t } = useLanguage();
    const { toast } = useToast();
    const { theme, comparisonList, handleHeartToggle } = useUserPreferences();
    const isMidnight = theme === 'midnight-glass';
    const router = useRouter();
    
    const [searchTerm, setSearchTerm] = useState('');
    const [priceFilter, setPriceFilter] = useState('All');
    const [visibleCount, setVisibleCount] = useState(20);
    const [isMounted, setIsMounted] = useState(false);
    
    const [loadMoreClicks, setLoadMoreClicks] = useState(0);
    const [isAlertOpen, setIsAlertOpen] = useState(false);

    // Manual Tool Addition States
    const [customUrl, setCustomUrl] = useState('');
    const [isAddingManually, setIsAddingManually] = useState(false);

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
        if (loadMoreClicks < 2) {
            setLoadMoreClicks(prev => prev + 1);
            setVisibleCount(prevCount => prevCount + 20);
        } else {
            setIsAlertOpen(true);
        }
    };

    const handleAddCustomTool = async () => {
        let urlToValidate = customUrl.trim();
        if (!urlToValidate) {
            toast({ variant: 'destructive', title: 'Empty Link', description: 'Please enter a URL first.' });
            return;
        }

        if (!urlToValidate.includes('://')) {
            urlToValidate = 'https://' + urlToValidate;
        }

        setIsAddingManually(true);
        try {
            const url = new URL(urlToValidate);
            const validationResult = await validateAndGetToolInfo({ url: urlToValidate });

            if (validationResult.isSafe) {
                const faviconUrl = `https://www.google.com/s2/favicons?sz=128&domain=${url.hostname}`;
                const newTool: Tool = {
                    name: validationResult.toolName || url.hostname,
                    url: urlToValidate,
                    description: validationResult.toolDescription || 'User-added link.',
                    image: faviconUrl,
                    dataAiHint: (validationResult.toolName || url.hostname).toLowerCase().split(' ').slice(0, 2).join(' '),
                    pricing: 'Freemium', 
                    category: 'Custom',
                };
                
                handleHeartToggle(newTool);
                
                toast({
                    title: 'Link Added!',
                    description: `${newTool.name} has been added to your favorites.`,
                });
                setCustomUrl('');
                setSearchTerm('');
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Security Alert',
                    description: validationResult.reason || 'This URL is potentially unsafe.',
                });
            }
        } catch (error: any) {
             toast({
                variant: 'destructive',
                title: 'Invalid URL',
                description: 'Please enter a valid web address (e.g., example.com).',
            });
        } finally {
            setIsAddingManually(false);
        }
    };

    if (!isMounted) {
        return (
            <div className="flex-grow flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full max-w-7xl mx-auto relative">
            <div className="px-0 pb-4">
                <div className="flex gap-4 items-center max-w-2xl mx-auto px-4">
                    <div className="relative flex-grow">
                        <Search className={cn("absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5", isMidnight ? "text-white/50" : "text-muted-foreground")} />
                        <Input 
                            placeholder="Search tools..."
                            className={cn(
                                "pl-12 rounded-full h-12 shadow-md transition-all",
                                isMidnight ? "glass-input-effect border-white/20 text-white placeholder:text-white/40 focus:bg-white/15" : "bg-card border-border"
                            )}
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setVisibleCount(20);
                            }}
                        />
                    </div>
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className={cn(
                                "w-12 h-12 rounded-full shadow-md",
                                isMidnight ? "bg-white/10 border-white/20 text-white" : "bg-card"
                            )}>
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
                <div className={cn(
                    "text-center mt-4 text-[10px] font-black uppercase tracking-[0.2em]",
                    isMidnight ? "text-white/40" : "text-muted-foreground"
                )}>
                    {`1 Million + Tools Discovered`}
                </div>
            </div>
            <div className="flex-1 overflow-y-auto px-4 no-scrollbar pt-2 pb-32">
                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
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

                {/* Manual Link Input Prompt when no local results */}
                {filteredTools.length === 0 && searchTerm.trim() !== "" && (
                    <div className="text-center py-16 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-md mx-auto">
                        <div className="w-20 h-20 bg-primary/10 rounded-[2.5rem] flex items-center justify-center mx-auto mb-6">
                            <Link2 className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-tight mb-4">Tool Not Found</h3>
                        <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                            Put the website / tool link here to add in your device
                        </p>
                        
                        <div className="space-y-4">
                            <Input 
                                placeholder="Paste tool link here..."
                                value={customUrl}
                                onChange={(e) => setCustomUrl(e.target.value)}
                                className={cn(
                                    "h-14 rounded-2xl text-center shadow-lg",
                                    isMidnight ? "glass-input-effect" : "bg-card"
                                )}
                            />
                            <Button 
                                onClick={handleAddCustomTool} 
                                disabled={isAddingManually || !customUrl.trim()}
                                className="w-full h-14 rounded-full font-black text-base shadow-xl shadow-primary/20 group transition-all"
                            >
                                {isAddingManually ? (
                                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...</>
                                ) : (
                                    <><Heart className="mr-2 h-5 w-5 fill-current" /> Add to Device</>
                                )}
                            </Button>
                        </div>
                    </div>
                )}

                {visibleCount < filteredTools.length && (
                    <div className="text-center mt-12 mb-8 px-4">
                        <Button onClick={handleLoadMore} size="lg" className={cn(
                            "w-full max-w-sm rounded-none h-14 text-lg font-bold shadow-xl transition-all",
                            isMidnight ? "bg-white text-black hover:bg-white/90" : "shadow-primary/20"
                        )}>Load More Tools</Button>
                    </div>
                )}
            </div>

            {/* Comparison Floating Action Button */}
            {comparisonList.length === 2 && (
                <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[60] w-full max-w-xs px-4 animate-in fade-in slide-in-from-bottom-10 duration-500">
                    <Button 
                        onClick={() => router.push('/compare-tools')}
                        className="w-full h-14 rounded-full font-black text-lg bg-primary text-primary-foreground shadow-2xl border-4 border-background hover:scale-105 active:scale-95 transition-all group"
                    >
                        <Scale className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                        Compare Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            )}

            <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
                <AlertDialogContent className={cn(
                    "rounded-none border-none max-w-[90%] md:max-w-md",
                    isMidnight ? "glass-card-effect" : "bg-card backdrop-blur-3xl"
                )}>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="flex items-center gap-2 text-xl font-black uppercase tracking-tight">
                            <Info className="w-6 h-6 text-primary" />
                            Smart Tips
                        </AlertDialogTitle>
                        <div className="space-y-6 pt-4">
                            <div className="flex items-start gap-4 p-4 rounded-none bg-primary/5 border border-primary/10">
                                <SearchCode className="w-6 h-6 text-primary shrink-0" />
                                <div className="text-left">
                                    <div className="font-bold text-foreground">1) Use Search</div>
                                    <div className="text-xs text-muted-foreground">Instead of scrolling, type the tool name or category to find it instantly.</div>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4 p-4 rounded-none bg-yellow-400/5 border border-yellow-400/10">
                                <StarHalf className="w-6 h-6 text-yellow-400 shrink-0" />
                                <div className="text-left">
                                    <div className="font-bold text-foreground">2) Star Tools</div>
                                    <div className="text-xs text-muted-foreground">Click the star button on any tool to save it to your dashboard for quick access.</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-none bg-blue-400/5 border border-blue-400/10">
                                <UserPlus className="w-6 h-6 text-blue-400 shrink-0" />
                                <div className="text-left">
                                    <div className="font-bold text-foreground">3) Add Custom Links</div>
                                    <div className="text-xs text-muted-foreground">Go to your Profile page to add your own favorite AI website links.</div>
                                </div>
                            </div>
                        </div>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="mt-6 px-4 pb-4">
                        <AlertDialogAction className="w-full h-12 rounded-none font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                            Got it, thanks!
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}