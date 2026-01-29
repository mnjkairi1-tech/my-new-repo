
'use client';

import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { type SuggestAiToolOutput } from '@/ai/flows/suggest-ai-tool';
import { Loader2, Sparkles, ExternalLink, Share2, Star } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { useUserPreferences } from '@/context/user-preferences-context';
import { cn } from '@/lib/utils';
import { allTools } from '@/lib/tools-data';

interface AIResponseSheetProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  isLoading: boolean;
  suggestions: SuggestAiToolOutput | null;
}

const SuggestionCard = ({ suggestion }: { suggestion: SuggestAiToolOutput['suggestions'][0] }) => {
    const { toast } = useToast();
    const { starredTools, handleStarToggle } = useUserPreferences();
    
    // Find the full tool details to get the image
    const fullTool = allTools.find(t => t.name === suggestion.toolName);
    const isStarred = fullTool ? starredTools.has(fullTool.name) : false;

    const handleShare = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (navigator.share) {
            try {
            await navigator.share({ title: suggestion.toolName, url: suggestion.url });
            } catch (err) {
            console.error("Error sharing:", err);
            }
        } else {
            navigator.clipboard.writeText(suggestion.url);
            toast({
            title: "Link Copied!",
            description: `${suggestion.toolName}'s URL has been copied to your clipboard.`,
            });
        }
    };
    
    const handleStar = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (fullTool) {
            handleStarToggle(fullTool.name);
        } else {
            toast({
                variant: 'destructive',
                title: 'Tool not in library',
                description: 'This tool cannot be starred as it is not in our main library.',
            });
        }
    };

    return (
        <Link href={suggestion.url} target="_blank" rel="noopener noreferrer" className="block group">
            <div className="bg-card/50 p-4 rounded-2xl soft-shadow transition-all hover:bg-accent/50 hover:scale-[1.02]">
                <div className="flex justify-between items-start gap-4">
                    <div className="flex-grow">
                        <h3 className="font-bold text-lg text-foreground">{suggestion.toolName}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{suggestion.reason}</p>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0">
                         <Button variant="ghost" size="icon" className="w-9 h-9 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={handleShare}>
                            <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="w-9 h-9 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={handleStar}>
                            <Star className={cn('w-4 h-4 transition-all', isStarred ? 'fill-yellow-300 text-yellow-300' : 'text-foreground/60')}/>
                        </Button>
                    </div>
                </div>
                 <div className="flex items-center gap-2 mt-3 text-xs text-primary font-medium">
                    <ExternalLink className="w-3 h-3"/>
                    <span>{suggestion.url.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0]}</span>
                </div>
            </div>
        </Link>
    );
};

export function AIResponseSheet({ isOpen, onOpenChange, isLoading, suggestions }: AIResponseSheetProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[80vh] rounded-t-3xl flex flex-col bg-background/80 backdrop-blur-xl border-t-2 border-white/50 soft-shadow">
        <SheetHeader className="text-center">
          <SheetTitle className="flex items-center justify-center gap-2 text-2xl">
            <Sparkles className="w-6 h-6 text-primary" />
            AI Suggestions
          </SheetTitle>
          <SheetDescription>
            Here are some tools based on your search.
          </SheetDescription>
        </SheetHeader>
        <div className="flex-grow overflow-hidden relative mt-4">
            {isLoading && (
                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm z-10">
                    <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
                    <p className="text-muted-foreground">Finding the best tools for you...</p>
                </div>
            )}
            <ScrollArea className="h-full -mx-6 px-6">
                <div className="space-y-4 pb-6">
                {suggestions?.suggestions && suggestions.suggestions.length > 0 ? (
                    suggestions.suggestions.map((suggestion, index) => (
                        <SuggestionCard key={index} suggestion={suggestion} />
                    ))
                ) : (
                    !isLoading && <p className="text-center text-muted-foreground py-10">No suggestions found. Try a different search.</p>
                )}
                </div>
            </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
}

    
