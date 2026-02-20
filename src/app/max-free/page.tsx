
'use client';

import React, { useCallback, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Share2, Zap, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useUserPreferences } from '@/context/user-preferences-context';
import Image from 'next/image';

export default function MaxFreePage() {
    const { toast } = useToast();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const tools = [
        { name: 'Phind', description: 'AI search engine for developers.', url: 'https://www.phind.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=phind.com', dataAiHint: 'developer search', pricing: 'Free' },
        { name: 'Bing Image Creator', description: 'Create AI images with DALL·E 3 for free.', url: 'https://www.bing.com/images/create', image: 'https://www.google.com/s2/favicons?sz=128&domain=bing.com', dataAiHint: 'free image', pricing: 'Free' },
        { name: 'Google Lens', description: 'Search what you see.', url: 'https://lens.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'visual search', pricing: 'Free' },
        { name: 'TinyPNG', description: 'Smart PNG and JPEG compression.', url: 'https://tinypng.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tinypng.com', dataAiHint: 'image compression', pricing: 'Free' },
        { name: 'Socratic by Google', description: 'Learning app to help with homework.', url: 'https://socratic.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=socratic.org', dataAiHint: 'homework help', pricing: 'Free' },
        { name: 'ChatGPT Free', description: 'Free access to conversational AI.', url: 'https://chat.openai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=openai.com', dataAiHint: 'free chatgpt', pricing: 'Free' },
    ];

    const handleShareTool = useCallback(async (e: React.MouseEvent, tool: any) => {
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

    const ToolCard = ({ tool }: { tool: any }) => {
        const { starredTools, handleStarToggle } = useUserPreferences();
        const isStarred = isClient && starredTools.some(t => t.name === tool.name);

        return (
             <Link href={tool.url} key={tool.name} target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="bg-card/60 backdrop-blur-lg border border-white/10 soft-shadow transition-all duration-300 hover:border-primary/30 hover:scale-[1.02] overflow-hidden rounded-2xl">
                    <CardContent className='p-4 text-center flex flex-col items-center justify-center gap-2'>
                        <div className='relative w-14 h-14'>
                            <Image
                                src={tool.image}
                                alt={tool.name}
                                fill
                                className="object-contain rounded-md"
                                unoptimized
                            />
                        </div>
                        <CardTitle className="text-sm font-bold text-foreground">{tool.name}</CardTitle>
                        <div className="flex items-center justify-center gap-2 mt-1">
                            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-foreground/80 bg-white/10 hover:bg-white/20" onClick={(e) => handleShareTool(e, tool)}>
                                <Share2 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-foreground/80 bg-white/10 hover:bg-white/50" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleStarToggle(tool); }}>
                                <Star className={cn('w-4 h-4 transition-all', isStarred ? 'fill-yellow-300 text-yellow-300' : 'text-foreground/60')}/>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        );
    }

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
                    <Zap className="w-6 h-6 text-foreground" />
                    <h1 className="text-2xl font-bold text-foreground">
                        Max Tools
                    </h1>
                </div>
            </div>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 flex flex-col min-h-0 mt-6">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4 space-y-8">
            <div className="grid grid-cols-2 gap-4 pb-8">
              {tools.map((tool) => (
                <ToolCard tool={tool} key={tool.name} />
              ))}
            </div>
        </div>
      </main>
    </div>
  );
}
