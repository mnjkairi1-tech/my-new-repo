'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Users, ShieldCheck, ArrowDown, MoreVertical, Search, ArrowLeft, ExternalLink, Loader2, ChevronRight, MessageSquare, BadgeCheck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useUser, useFirestore, useMemoFirebase, useCollection, useDoc } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRouter, useParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { allToolsServer } from '@/lib/all-tools-server';
import { collection, doc, query, orderBy, limit, serverTimestamp, increment } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { addDocumentNonBlocking, setDocumentNonBlocking, updateDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text?: string;
  imageUrl?: string;
  userId: string;
  userName: string;
  createdAt: any;
}

interface Group {
    id: string;
    name: string;
    description: string;
    memberCount: number;
    avatar: string;
    isPublic: boolean;
}

interface GroupMember {
    userId: string;
    joinedAt: Date;
    role: 'member' | 'admin' | 'owner';
}

interface GroupTool {
    id?: string;
    toolName: string;
    toolUrl: string;
    toolDescription?: string;
    toolImage?: string;
    addedBy: string;
    addedAt: any;
    upvotes: number;
}

const ToolCard = ({ tool }: { tool: GroupTool }) => {
    const fullTool = useMemo(() => allToolsServer.find(t => t.name === tool.toolName), [tool.toolName]);
    const imageUrl = tool.toolImage || fullTool?.image;
    
    return (
        <a href={tool.toolUrl} target="_blank" rel="noopener noreferrer">
            <Card className="p-2 w-28 h-28 flex flex-col items-center justify-center gap-2 shrink-0 group hover:bg-accent transition-colors rounded-2xl border-white/20 shadow-sm relative overflow-hidden">
                <div className='w-12 h-12 bg-secondary rounded-xl flex items-center justify-center overflow-hidden'>
                    {imageUrl ? (
                        <Image src={imageUrl} alt={tool.toolName} width={32} height={32} className="object-contain" unoptimized />
                    ) : (
                        <Users className="w-6 h-6 text-primary"/>
                    )}
                </div>
                <p className="text-[10px] font-bold text-center line-clamp-2 px-1">{tool.toolName}</p>
                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </div>
            </Card>
        </a>
    );
};

// Component to render user name with optional blue tick
const UserNameWithTick = ({ userId, userName, className, showName = true }: { userId: string, userName: string, className?: string, showName?: boolean }) => {
    const firestore = useFirestore();
    const userProfileRef = useMemoFirebase(() => firestore ? doc(firestore, 'user_profiles', userId) : null, [firestore, userId]);
    const { data: profile } = useDoc(userProfileRef);
    // Subscribed users (standard or pro) get the tick
    const hasSubscription = profile?.plan === 'standard' || profile?.plan === 'pro';

    return (
        <div className={cn("flex items-center gap-1", className)}>
            {showName && <span className="font-bold truncate">{userName}</span>}
            {hasSubscription && <BadgeCheck className="w-3.5 h-3.5 text-blue-400 fill-blue-400/20" />}
        </div>
    );
};

export default function ClubDetailsPageClient() {
  const params = useParams();
  const clubId = params.clubId as string;
  const router = useRouter();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();

  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const [isJoining, setIsJoining] = useState(false);

  // Firestore references
  const groupRef = useMemoFirebase(() => firestore && clubId ? doc(firestore, 'groups', clubId) : null, [firestore, clubId]);
  const memberRef = useMemoFirebase(() => firestore && user && clubId ? doc(firestore, 'groups', clubId, 'members', user.uid) : null, [firestore, clubId, user]);
  
  // Data fetching hooks
  const { data: clubData, isLoading: groupLoading } = useDoc<Group>(groupRef);
  const { data: memberData, isLoading: memberLoading } = useDoc<GroupMember>(memberRef);
  
  const isMember = !!memberData;

  const messagesQuery = useMemoFirebase(() => {
    if (!firestore || !clubId || !user) return null;
    return query(collection(firestore, 'groups', clubId, 'messages'), orderBy('createdAt', 'asc'), limit(50));
  }, [firestore, clubId, user]);

  const toolsQuery = useMemoFirebase(() => {
      if (!firestore || !clubId || !user) return null;
      return query(collection(firestore, 'groups', clubId, 'tools'), orderBy('addedAt', 'desc'), limit(10));
  }, [firestore, clubId, user]);

  const { data: messages, isLoading: messagesLoading } = useCollection<Message>(messagesQuery);
  const { data: groupTools, isLoading: toolsLoading } = useCollection<GroupTool>(toolsQuery);
  

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newMessage.trim() || !clubId || !firestore) return;

    const messagesCollection = collection(firestore, 'groups', clubId, 'messages');
    
    const newMessageObj = {
      text: newMessage,
      userId: user.uid,
      userName: user.displayName || 'Anonymous',
      createdAt: serverTimestamp(),
    };

    addDocumentNonBlocking(messagesCollection, newMessageObj);
    setNewMessage('');
  };
  
  useEffect(() => {
    const chatEl = chatContainerRef.current;
    if (chatEl) {
        const handleScroll = () => {
            if (!chatEl) return;
            const isScrolledToBottom = chatEl.scrollHeight - chatEl.scrollTop <= chatEl.clientHeight + 100;
            setShowScrollToBottom(!isScrolledToBottom);
        };
        chatEl.addEventListener('scroll', handleScroll);
        return () => chatEl.removeEventListener('scroll', handleScroll);
    }
  }, [messages]);
  
  const scrollToBottom = () => {
    chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: 'smooth' });
  }

  useEffect(() => {
    if (chatContainerRef.current && !messagesLoading) {
      setTimeout(() => {
        if(chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }, 100);
    }
  }, [messages, messagesLoading]);


  const handleJoinClub = async () => {
    if (!user || !firestore || !groupRef || !memberRef || !clubId) return;
    
    setIsJoining(true);

    const memberData = {
      userId: user.uid,
      joinedAt: serverTimestamp(),
      role: 'member',
      displayName: user.displayName || 'Anonymous',
      photoURL: user.photoURL || '',
    };

    setDocumentNonBlocking(memberRef, memberData, { merge: false });
    updateDocumentNonBlocking(groupRef, { memberCount: increment(1) });
    
    const userGroupMembershipRef = doc(firestore, 'users', user.uid, 'groupMemberships', clubId);
    setDocumentNonBlocking(userGroupMembershipRef, { groupId: clubId }, { merge: false });

    toast({
      title: "Welcome!",
      description: `You've successfully joined ${clubData?.name}.`,
    });
    
    setIsJoining(false);
  }

  const ChatSkeleton = () => (
    <div className="px-4 space-y-4 flex-grow">
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`flex items-start gap-3 ${i % 2 ? 'flex-row-reverse' : ''}`}>
          <Skeleton className="w-10 h-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      ))}
    </div>
  );

  const handleBack = () => {
    router.push('/community');
  };

  const renderContent = () => {
    if(groupLoading || isUserLoading) {
        return (
            <div className="text-center text-muted-foreground p-8 flex flex-col items-center gap-4">
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-4 w-64" />
                <Skeleton className="h-10 w-32" />
            </div>
        )
    }

    if (!user) {
        return (
            <div className="text-center text-muted-foreground p-8 flex flex-col items-center gap-4">
                <p className='text-lg font-medium'>Please sign in to view the club.</p>
                <Link href="/?tab=settings" className='mt-4'>
                    <Button className="rounded-full">Sign In</Button>
                </Link>
            </div>
        )
    }

    return (
         <div className="p-4 space-y-1 flex-grow">
            {messagesLoading ? <ChatSkeleton /> : (
                 messages?.map((msg) => (
                  <div key={msg.id} className={`flex items-end gap-2 mb-2 ${msg.userId === user?.uid ? 'justify-end' : 'justify-start'}`}>
                    <div className={`p-3 rounded-2xl max-w-[70%] shadow-sm ${msg.userId === user?.uid ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-card text-foreground rounded-bl-none'}`}>
                        {msg.userId !== user?.uid ? (
                            <UserNameWithTick userId={msg.userId} userName={msg.userName} className="text-xs mb-1 text-primary" />
                        ) : (
                            <UserNameWithTick userId={msg.userId} userName="You" className="text-xs mb-1 text-primary-foreground/80" showName={false} />
                        )}
                        
                        {msg.text && <p className="text-sm leading-relaxed">{msg.text}</p>}
                        
                        <p className="text-[9px] opacity-60 mt-1 text-right font-medium">
                          {msg.createdAt?.toDate ? format(msg.createdAt.toDate(), 'p') : '...'}
                        </p>
                    </div>
                  </div>
                ))
            )}
            {messages?.length === 0 && !messagesLoading && (
                <div className="text-center text-muted-foreground py-10">
                    <MessageSquare className="mx-auto w-10 h-10 opacity-20" />
                    <p className="mt-4 text-base font-medium">No messages yet.</p>
                    <p className="text-sm opacity-60">Be the first to say something!</p>
                </div>
            )}
        </div>
    )
  }

  if (!clubId) {
    return (
        <div className="min-h-screen flex flex-col bg-background font-body items-center justify-center">
            <Loader2 className="animate-spin text-primary w-8 h-8" />
        </div>
    );
  }

  return (
    <div className="h-[100dvh] bg-background font-body w-full max-w-lg mx-auto flex flex-col overflow-hidden">
          <header className="flex-shrink-0 bg-card/80 backdrop-blur-3xl z-10 border-b border-white/20">
            <div className="flex justify-between items-center p-2">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full" onClick={handleBack}>
                        <ArrowLeft className="w-6 h-6" />
                    </Button>
                    <Link href={`/community/${clubId}/info`} className="flex items-center gap-3">
                        <Avatar className='h-10 w-10 border-2 border-white/50 shadow-sm'>
                            <AvatarImage src={clubData?.avatar} alt={clubData?.name} />
                            <AvatarFallback>{clubData?.name?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="font-bold text-base line-clamp-1">{clubData?.name || <Skeleton className="h-5 w-32" />}</h1>
                            <div className='text-[10px] font-bold text-muted-foreground uppercase tracking-wider'>{groupLoading ? <Skeleton className="h-3 w-20" /> : `${clubData?.memberCount || '...'} members`}</div>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center">
                    <Button variant="ghost" size="icon" className="rounded-full w-10 h-10"><Search className="w-5 h-5"/></Button>
                    <Button variant="ghost" size="icon" className="rounded-full w-10 h-10"><MoreVertical className="w-5 h-5"/></Button>
                </div>
            </div>

            {user && (
                <div className="px-4 pb-4">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Shared Tools</h3>
                        <Link href={`/community/${clubId}/tools`}>
                            <Button variant="link" size="sm" className="h-auto p-0 text-primary font-bold text-xs flex items-center gap-1">
                                See all
                                <ChevronRight className="w-3 h-3" />
                            </Button>
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 horizontal-scroll-container">
                            {toolsLoading ? (
                                [...Array(3)].map((_, i) => <Skeleton key={i} className="w-28 h-28 rounded-2xl" />)
                            ) : groupTools && groupTools.length > 0 ? (
                                groupTools.map((tool) => (
                                    <ToolCard key={tool.id} tool={tool} />
                                ))
                            ) : (
                            <div className="text-center text-muted-foreground w-full py-4 text-xs italic">No tools shared yet.</div>
                            )}
                        </div>
                    </div>
                </div>
            )}

          </header>
          
          <main 
            className='flex-1 min-h-0 overflow-y-auto no-scrollbar relative bg-secondary/10' 
            ref={chatContainerRef}
          >
            {renderContent()}
            {showScrollToBottom && (
              <div className="absolute bottom-4 right-6 z-20">
                <Button size="icon" className="rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-110" onClick={scrollToBottom}>
                  <ArrowDown className="w-5 h-5"/>
                </Button>
              </div>
            )}
          </main>
          
          <div className="p-4 bg-card/80 backdrop-blur-3xl border-t border-white/20 flex-shrink-0">
            {isUserLoading || memberLoading ? (
                <Skeleton className="h-12 w-full rounded-full" />
            ) : !user ? (
                <Link href="/?tab=settings">
                    <Button className="w-full h-12 text-base rounded-full font-bold">Sign In to Chat</Button>
                </Link>
            ) : isMember ? (
                <form onSubmit={handleSendMessage} className="relative flex items-center gap-2">
                    <Input 
                        placeholder="Type a message..." 
                        className="rounded-full h-12 pr-12 bg-secondary/50 border-none shadow-inner focus-visible:ring-primary/30" 
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <Button type="submit" size="icon" className="rounded-full w-12 h-12 shadow-md hover:scale-105 transition-transform" disabled={!newMessage.trim()}>
                        <Send className="w-5 h-5 ml-0.5"/>
                    </Button>
                </form>
            ) : (
                <Button onClick={handleJoinClub} disabled={isJoining} className="w-full h-12 text-base rounded-full font-bold shadow-lg shadow-primary/20">
                  {isJoining ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Joining...</> : 'Join Club to Chat'}
                </Button>
            )}
          </div>
    </div>
  );
}
