
'use client';

import React, { useCallback, useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { 
    ArrowLeft, ExternalLink, Star, Share2, Briefcase, Filter, Megaphone, Handshake, UserPlus, Zap, Wallet, ListChecks, MessageSquare, BarChart3, ShoppingCart, Layout, Shield, Cpu, Truck, Building, Box, Users, Code, BrainCircuit, FileText, CheckSquare, Settings, Heart, BookOpen, Search, Recycle, Bot, LineChart, ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useUserPreferences } from '@/context/user-preferences-context';
import { Skeleton } from '@/components/ui/skeleton';
import { businessToolData } from '@/lib/data/business-tools-data';
import { getCloudinaryUrl } from '@/lib/cloudinary';

type Tool = {
    name: string;
    description: string;
    url: string;
    image: string;
    dataAiHint: string;
    pricing: 'Free' | 'Paid' | 'Freemium';
};

type ToolCategory = {
    title: string;
    icon: string;
    tools: Tool[];
};

const iconMap: { [key: string]: React.ReactNode } = {
    Megaphone: <Megaphone className="w-5 h-5 text-primary"/>,
    Handshake: <Handshake className="w-5 h-5 text-primary"/>,
    UserPlus: <UserPlus className="w-5 h-5 text-primary"/>,
    Zap: <Zap className="w-5 h-5 text-primary"/>,
    Wallet: <Wallet className="w-5 h-5 text-primary"/>,
    ListChecks: <ListChecks className="w-5 h-5 text-primary"/>,
    MessageSquare: <MessageSquare className="w-5 h-5 text-primary"/>,
    BarChart3: <BarChart3 className="w-5 h-5 text-primary"/>,
    ShoppingCart: <ShoppingCart className="w-5 h-5 text-primary"/>,
    Layout: <Layout className="w-5 h-5 text-primary"/>,
    Shield: <Shield className="w-5 h-5 text-primary"/>,
    Cpu: <Cpu className="w-5 h-5 text-primary"/>,
    Truck: <Truck className="w-5 h-5 text-primary"/>,
    Building: <Building className="w-5 h-5 text-primary"/>,
    Box: <Box className="w-5 h-5 text-primary"/>,
    Users: <Users className="w-5 h-5 text-primary"/>,
    Code: <Code className="w-5 h-5 text-primary"/>,
    BrainCircuit: <BrainCircuit className="w-5 h-5 text-primary"/>,
    FileText: <FileText className="w-5 h-5 text-primary"/>,
    CheckSquare: <CheckSquare className="w-5 h-5 text-primary"/>,
    Settings: <Settings className="w-5 h-5 text-primary"/>,
    Heart: <Heart className="w-5 h-5 text-primary"/>,
    Star: <Star className="w-5 h-5 text-primary"/>,
    BookOpen: <BookOpen className="w-5 h-5 text-primary"/>,
    Search: <Search className="w-5 h-5 text-primary"/>,
    Recycle: <Recycle className="w-5 h-5 text-primary"/>,
    Briefcase: <Briefcase className="w-5 h-5 text-primary"/>,
    Bot: <Bot className="w-5 h-5 text-primary"/>,
    LineChart: <LineChart className="w-5 h-5 text-primary"/>,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-primary"/>,
};


export default function BusinessToolsPage() {
    const { toast } = useToast();
    const [priceFilter, setPriceFilter] = useState('All');
    const [open, setOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const toolData: ToolCategory[] = businessToolData;
    const isLoading = false; // Data is now imported statically

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
            <Link href={tool.url} key={tool.name} target="_blank" rel="noopener noreferrer" className="block group w-24 shrink-0">
            <Card 
                className="bg-white/80 border-none rounded-3xl soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg overflow-hidden h-full flex flex-col"
            >
                <div className="relative">
                    <img
                    src={getCloudinaryUrl(tool.image)}
                    alt={tool.name || 'Tool Image'}
                    width={120}
                    height={90}
                    className="w-full h-auto aspect-[4/3] object-cover"
                    data-ai-hint={tool.dataAiHint}
                    loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-1 right-1 bg-primary/80 text-primary-foreground rounded-full p-1 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-3 h-3"/>
                    </div>
                </div>
                <CardContent className='p-2 flex flex-col flex-grow'>
                  <CardTitle className="text-xs font-bold text-foreground leading-tight line-clamp-2 flex-grow">{tool.name}</CardTitle>
                  <div className="flex items-center justify-end gap-1 mt-1">
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
        if (!toolData) return [];
        if (priceFilter === 'All') {
            return toolData;
        }
        return toolData.map(category => ({
            ...category,
            tools: category.tools.filter(tool => tool.pricing === 'Free' || tool.pricing === 'Freemium')
        })).filter(category => category.tools.length > 0);
    }, [priceFilter, toolData]);


    const PageSkeleton = () => (
        <div className="p-4 space-y-8">
            {[...Array(3)].map((_, i) => (
                <div key={i}>
                    <Skeleton className="h-8 w-1/2 mb-3" />
                    <div className="flex gap-4">
                        {[...Array(4)].map((_, j) => (
                            <Skeleton key={j} className="h-32 w-24 rounded-3xl" />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );

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
                    <Briefcase className="w-6 h-6 text-foreground" />
                    <h1 className="text-2xl font-bold text-foreground">
                        Business Tools
                    </h1>
                </div>
            </div>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 flex flex-col min-h-0 mt-6">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4 space-y-8">
            {isLoading ? <PageSkeleton /> : filteredToolData.map((category, index) => {
              if (category.tools.length === 0) return null;

              return (
              <section key={index}>
                  <div className="flex justify-between items-center mb-3 px-2">
                      <h2 className="font-semibold text-xl flex items-center gap-2">
                          {iconMap[category.icon] || <Briefcase className="w-5 h-5 text-primary"/>}
                          {category.title}
                      </h2>
                      {index === 0 && isClient && (
                          <DropdownMenu open={open} onOpenChange={setOpen}>
                              <DropdownMenuTrigger asChild>
                                  <Button variant="outline" size="sm" className="bg-white/50">
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
                  <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 horizontal-scroll-container">
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
