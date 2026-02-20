
'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useFirestore, useDoc, useCollection, useUser, useMemoFirebase } from '@/firebase';
import { doc, collection, query, orderBy, Timestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search, ExternalLink, Loader2, LayoutGrid, Share2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { allToolsServer } from '@/lib/all-tools-server';
import { useToast } from '@/hooks/use-toast';

interface Group {
    id: string;
    name: string;
    avatar: string;
}

interface GroupTool {
    id: string;
    toolName: string;
    toolUrl: string;
    toolDescription?: string;
    toolImage?: string;
    addedBy: string;
    addedAt: Timestamp;
    upvotes: number;
}

const ToolGridCard = ({ tool }: { tool: GroupTool }) => {
    const { toast } = useToast();
    const fullTool = useMemo(() => allToolsServer.find(t => t.name === tool.toolName), [tool.toolName]);
    const imageUrl = tool.toolImage || fullTool?.image;

    const handleShare = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (navigator.share) {
            navigator.share({ title: tool.toolName, url: tool.toolUrl });
        } else {
            navigator.clipboard.writeText(tool.toolUrl);
            toast({ title: "Link Copied!" });
        }
    };

    return (
        <a href={tool.toolUrl} target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="bg-card border-none soft-shadow rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform h-full flex flex-col">
                <div className="relative aspect-video bg-secondary/30 flex items-center justify-center p-4">
                    {imageUrl ? (
                        <Image src={imageUrl} alt={tool.toolName} width={64} height={64} className="object-contain" unoptimized />
                    ) : (
                        <LayoutGrid className="w-10 h-10 text-primary opacity-20" />
                    )}
                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="secondary" size="icon" className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm" onClick={handleShare}>
                            <Share2 className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
                <CardContent className="p-3 flex-grow flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-sm line-clamp-1">{tool.toolName}</h3>
                        <p className="text-[10px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                            {tool.toolDescription || fullTool?.description || 'AI tool shared with the community.'}
                        </p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                        <span className="text-[9px] font-bold text-primary uppercase tracking-tighter">Shared {tool.addedAt?.toDate ? formatDistanceToNow(tool.addedAt.toDate()) : 'Recently'} ago</span>
                        <ExternalLink className="w-3 h-3 text-muted-foreground opacity-50" />
                    </div>
                </CardContent>
            </Card>
        </a>
    );
};

// Helper for relative time
function formatDistanceToNow(date: Date) {
    const diff = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (diff < 60) return `${diff}s`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
    return `${Math.floor(diff / 86400)}d`;
}

export default function GroupToolsPageClient({ clubId }: { clubId: string }) {
    const router = useRouter();
    const firestore = useFirestore();
    const [searchTerm, setSearchTerm] = useState('');

    const groupRef = useMemoFirebase(() => firestore ? doc(firestore, 'groups', clubId) : null, [firestore, clubId]);
    const { data: groupData, isLoading: groupLoading } = useDoc<Group>(groupRef);

    const toolsQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'groups', clubId, 'tools'), orderBy('addedAt', 'desc'));
    }, [firestore, clubId]);
    const { data: groupTools, isLoading: toolsLoading } = useCollection<GroupTool>(toolsQuery);

    const filteredTools = useMemo(() => {
        if (!groupTools) return [];
        const lowerTerm = searchTerm.toLowerCase();
        return groupTools.filter(t => 
            t.toolName.toLowerCase().includes(lowerTerm) || 
            t.toolDescription?.toLowerCase().includes(lowerTerm)
        );
    }, [groupTools, searchTerm]);

    const handleBack = () => router.back();

    return (
        <div className="min-h-screen bg-background font-body flex flex-col animate-fade-in-up">
            <header className="p-4 bg-card/80 backdrop-blur-3xl border-b border-white/20 sticky top-0 z-20">
                <div className="flex items-center gap-3 mb-4">
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full" onClick={handleBack}>
                        <ArrowLeft className="w-6 h-6" />
                    </Button>
                    <div>
                        <h1 className="font-bold text-xl line-clamp-1">{groupData?.name || 'Club'} Tools</h1>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Discover resources shared by members</p>
                    </div>
                </div>
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input 
                        placeholder="Search shared tools..." 
                        className="pl-12 rounded-full h-12 bg-secondary/50 border-none shadow-inner"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </header>

            <main className="flex-grow p-4 bg-secondary/10">
                {toolsLoading ? (
                    <div className="grid grid-cols-2 gap-4">
                        {[...Array(6)].map((_, i) => <Skeleton key={i} className="aspect-[4/5] rounded-2xl" />)}
                    </div>
                ) : filteredTools.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-20">
                        {filteredTools.map(tool => <ToolGridCard key={tool.id} tool={tool} />)}
                    </div>
                ) : (
                    <div className="text-center py-20 opacity-40 flex flex-col items-center gap-4">
                        <LayoutGrid className="w-16 h-16" />
                        <p className="font-bold">No tools found matching "{searchTerm}"</p>
                    </div>
                )}
            </main>
        </div>
    );
}
