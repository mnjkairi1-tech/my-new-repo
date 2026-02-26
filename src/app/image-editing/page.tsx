'use client';

import React, { useCallback, useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Star, Share2, Filter, Image as ImageIcon, X, Plus, Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useUserPreferences } from '@/context/user-preferences-context';
import { type Tool, imageEditingToolData } from '@/lib/image-editing-tool-data';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { doc, serverTimestamp, collection, query, where } from 'firebase/firestore';
import { validateAndGetToolInfo } from '@/ai/flows/validate-tool-url';
import { setDocumentNonBlocking, addDocumentNonBlocking } from '@/firebase/non-blocking-updates';

export default function ImageEditingToolsPage() {
    const { toast } = useToast();
    const { user } = useUser();
    const firestore = useFirestore();
    const { theme } = useUserPreferences();
    const [priceFilter, setPriceFilter] = useState('All');
    const [open, setOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('');
    const [newToolUrl, setNewNewToolUrl] = useState('');
    const [isAdding, setIsAdding] = useState(false);

    const isOwner = user?.email === 'mnjkairi1@gmail.com';
    const isMidnight = theme === 'midnight-glass';

    useEffect(() => {
        setIsClient(true);
    }, []);

    const hiddenToolsQuery = useMemoFirebase(() => firestore ? collection(firestore, 'hidden_tools') : null, [firestore]);
    const { data: hiddenTools } = useCollection(hiddenToolsQuery);
    
    const addedToolsQuery = useMemoFirebase(() => firestore ? collection(firestore, 'ai_tools') : null, [firestore]);
    const { data: addedTools } = useCollection(addedToolsQuery);

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

    const handleDeleteTool = (tool: Tool) => {
        if (!firestore) return;
        const hiddenRef = doc(firestore, 'hidden_tools', tool.name.replace(/\s+/g, '_').toLowerCase());
        setDocumentNonBlocking(hiddenRef, { name: tool.name, hiddenAt: serverTimestamp() }, { merge: true });
        toast({ title: "Tool Removed", description: `${tool.name} is now hidden for everyone.` });
    };

    const handleAddTool = async () => {
        if (!newToolUrl.trim() || !firestore) return;
        setIsAdding(true);
        try {
            let url = newToolUrl.trim();
            if (!url.startsWith('http')) url = 'https://' + url;
            
            const info = await validateAndGetToolInfo({ url });
            const toolData = {
                name: info.toolName || new URL(url).hostname,
                description: info.toolDescription || 'AI Tool',
                url: url,
                image: `https://www.google.com/s2/favicons?sz=128&domain=${new URL(url).hostname}`,
                dataAiHint: (info.toolName || 'ai tool').toLowerCase(),
                pricing: 'Freemium' as const,
                categoryTitle: activeCategory,
                isActive: true,
                createdAt: serverTimestamp()
            };

            await addDocumentNonBlocking(collection(firestore, 'ai_tools'), toolData);
            toast({ title: "Tool Added!", description: `${toolData.name} added to ${activeCategory}.` });
            setIsAddDialogOpen(false);
            setNewNewToolUrl('');
        } catch (e) {
            toast({ variant: 'destructive', title: "Error", description: "Could not add tool. Please check the URL." });
        } finally {
            setIsAdding(false);
        }
    };

    const ToolCard = ({ tool }: { tool: Tool }) => {
        const { starredTools, handleStarToggle } = useUserPreferences();
        const isStarred = isClient && starredTools.some(t => t.name === tool.name);

        const handleStarClick = (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            handleStarToggle(tool);
        };

        return (
            <div className="relative group h-full">
                {isOwner && (
                    <button 
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleDeleteTool(tool); }}
                        className="absolute -top-2 -right-2 z-30 bg-red-500 text-white rounded-full p-1.5 shadow-lg border-2 border-white hover:scale-110 transition-transform"
                    >
                        <X className="w-3.5 h-3.5" />
                    </button>
                )}
                <Link href={tool.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <Card 
                        className={cn(
                            "border-none transition-all duration-300 hover:scale-[1.02] hover:shadow-lg overflow-hidden h-full flex flex-col",
                            isMidnight ? "glass-card-effect" : "bg-white/80 soft-shadow rounded-3xl"
                        )}
                    >
                        <div className="relative">
                            <div className="aspect-[4/3] relative flex items-center justify-center p-4">
                                <Image
                                src={tool.image}
                                alt={tool.name || 'Tool Image'}
                                width={80}
                                height={80}
                                className="object-contain z-10"
                                data-ai-hint={tool.dataAiHint}
                                unoptimized
                                />
                            </div>
                            <div className="absolute top-1 right-1 bg-primary/80 text-primary-foreground rounded-full p-1 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                <ExternalLink className="w-3 h-3"/>
                            </div>
                        </div>
                        <CardContent className='p-2 flex flex-col flex-grow items-center text-center relative z-10'>
                            <CardTitle className={cn(
                                "text-xs font-bold leading-tight line-clamp-2 flex-grow",
                                isMidnight ? "text-white" : "text-foreground"
                            )}>{tool.name}</CardTitle>
                            <div className="flex items-center justify-center gap-2 mt-2 w-full">
                                <Button variant="ghost" size="icon" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20" onClick={(e) => handleShareTool(e, tool)}>
                                    <Share2 className="w-3.5 h-3.5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20" onClick={handleStarClick}>
                                    <Star className={cn('w-4 h-4 transition-all', isClient && isStarred ? 'fill-yellow-300 text-yellow-300' : 'text-white/60')}/>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        );
    }

    const filteredToolData = useMemo(() => {
        const hiddenNames = new Set(hiddenTools?.map(t => t.name) || []);
        
        return imageEditingToolData.map(category => {
            const staticTools = category.tools.filter(tool => !hiddenNames.has(tool.name));
            const dynTools = addedTools?.filter(t => t.categoryTitle === category.title) || [];
            
            let combined = [...staticTools, ...dynTools];
            if (priceFilter === 'Free') {
                combined = combined.filter(tool => tool.pricing === 'Free' || tool.pricing === 'Freemium');
            }
            return { ...category, tools: combined };
        });
    }, [priceFilter, hiddenTools, addedTools]);
    
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-6 px-4 md:px-8">
        <header className="flex items-center justify-between gap-4">
            <div className='flex items-center gap-4'>
                <Link href="/" passHref>
                    <Button variant="ghost" size="icon" className={cn(
                        "w-12 h-12 rounded-full backdrop-blur-sm",
                        isMidnight ? "bg-white/10 border-white/20 text-white" : "bg-white/50"
                    )}>
                    <ArrowLeft />
                    </Button>
                </Link>
                <div className='flex items-center gap-2'>
                    <ImageIcon className={cn("w-6 h-6", isMidnight ? "text-white" : "text-foreground")} />
                    <h1 className={cn("text-2xl md:text-3xl font-black tracking-tight", isMidnight ? "text-white" : "text-foreground")}>
                        Image Editing Tools
                    </h1>
                </div>
            </div>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col min-h-0 mt-6 px-4 md:px-8">
        <div className="flex-grow overflow-y-auto no-scrollbar space-y-12 py-4 pb-24">
            {filteredToolData.map((category, index) => {
              if (category.tools.length === 0 && !isOwner) return null;

              return (
              <section key={index} className="space-y-4">
                  <div className="flex justify-between items-center px-2">
                      <h2 className={cn("font-bold text-xl md:text-2xl flex items-center gap-2", isMidnight ? "text-white" : "text-foreground")}>
                          {category.title}
                          {isOwner && (
                              <button 
                                onClick={() => { setActiveCategory(category.title); setIsAddDialogOpen(true); }}
                                className="bg-green-500 text-white rounded-full p-1 shadow-md hover:scale-110 transition-transform"
                              >
                                  <Plus className="w-4 h-4" />
                              </button>
                          )}
                      </h2>
                       {index === 0 && isClient && (
                          <DropdownMenu open={open} onOpenChange={setOpen}>
                              <DropdownMenuTrigger asChild>
                                  <Button variant="outline" size="sm" className={cn(
                                      "rounded-full h-10 px-6 font-bold shadow-md",
                                      isMidnight ? "bg-white/10 border-white/20 text-white" : "bg-white/50"
                                  )}>
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
                  <div className="flex md:grid overflow-x-auto no-scrollbar md:overflow-visible gap-6 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 horizontal-scroll-container">
                      {category.tools.map((tool) => (
                        <div key={tool.name} className="w-28 md:w-full shrink-0 md:shrink">
                            <ToolCard tool={tool} />
                        </div>
                      ))}
                  </div>
              </section>
            )})}
        </div>
      </main>

      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogContent className="max-w-sm rounded-3xl">
              <DialogHeader>
                  <DialogTitle>Add Tool to {activeCategory}</DialogTitle>
              </DialogHeader>
              <div className="py-4 space-y-4">
                  <Input 
                    placeholder="Paste tool website URL..." 
                    value={newToolUrl}
                    onChange={(e) => setNewNewToolUrl(e.target.value)}
                    className="rounded-xl h-12"
                  />
                  <p className="text-[10px] text-muted-foreground px-1">AI will automatically fetch name and icon.</p>
              </div>
              <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddDialogOpen(false)} className="rounded-xl">Cancel</Button>
                  <Button onClick={handleAddTool} disabled={isAdding} className="rounded-xl">
                      {isAdding ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : "Add Tool"}
                  </Button>
              </DialogFooter>
          </DialogContent>
      </Dialog>
    </div>
  );
}