export const runtime = 'edge';
'use client';

import React, { useState, useEffect, useRef, useMemo, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Users, ShieldCheck, ArrowDown, MoreVertical, Phone, Search, ArrowLeft, ExternalLink, Loader2, ImageIcon, ChevronRight, MessageSquare } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { useUser, useFirestore, useMemoFirebase, useFirebaseApp } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRouter, useParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { allTools } from '@/lib/tools-data';
import { ToolIcon } from '@/lib/tool-icons';
import { collection, doc, query, orderBy, limit, addDoc, serverTimestamp, setDoc, updateDoc, increment } from 'firebase/firestore';
import { useCollection, useDoc } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { addDocumentNonBlocking, setDocumentNonBlocking, updateDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Image from 'next/image';

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
    addedBy: string;
    addedAt: Date;
    upvotes: number;
}

const ToolCard = ({ tool }: { tool: GroupTool }) => {
    const fullTool = useMemo(() => allTools.find(t => t.name === tool.toolName), [tool.toolName]);
    
    return (
        <a href={tool.toolUrl} target="_blank" rel="noopener noreferrer">
            <Card className="p-2 w-28 h-28 flex flex-col items-center justify-center gap-2 shrink-0 group hover:bg-accent transition-colors">
                <div className='w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center'>
                    {fullTool?.icon ? <ToolIcon name={fullTool.icon} className="w-6 h-6 text-primary" /> : <Users className="w-6 h-6 text-primary"/>}
                </div>
                <p className="text-xs font-semibold text-center line-clamp-2">{tool.toolName}</p>
                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </div>
            </Card>
        </a>
    );
};


export default function ClubDetailsPage() {
  const params = useParams();
  const clubId = params.clubId as string;
  const router = useRouter();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const firebaseApp = useFirebaseApp();


  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

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

  const handleImageUpload = async (file: File) => {
    if (!user || !clubId || !firebaseApp) return;

    setIsUploading(true);
    toast({ title: "Uploading image..." });

    try {
        const storage = getStorage(firebaseApp);
        const filePath = `chat-images/${clubId}/${user.uid}-${Date.now()}-${file.name}`;
        const storageRef = ref(storage, filePath);
        
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);

        const messagesCollection = collection(firestore, 'groups', clubId, 'messages');
        const newMessageObj = {
            imageUrl: downloadURL,
            userId: user.uid,
            userName: user.displayName || 'Anonymous',
            createdAt: serverTimestamp(),
        };

        addDocumentNonBlocking(messagesCollection, newMessageObj);
        toast({ title: "Image sent!", });

    } catch (error) {
        console.error("Error uploading image:", error);
        toast({ title: "Image upload failed", description: "Please try again.", variant: 'destructive' });
    } finally {
        setIsUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          const file = e.dataTransfer.files[0];
          if (file.type.startsWith('image/')) {
              handleImageUpload(file);
          } else {
              toast({ title: "Only image files are allowed.", variant: 'destructive' });
          }
          e.dataTransfer.clearData();
      }
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
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
        // Initial check
        handleScroll();
        return () => chatEl.removeEventListener('scroll', handleScroll);
    }
  }, [messages]); // Re-evaluate when messages change
  
  const scrollToBottom = () => {
    chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: 'smooth' });
  }

  useEffect(() => {
    if (chatContainerRef.current && !messagesLoading) {
      // Unconditionally scroll to bottom once messages are loaded
      setTimeout(() => {
        if(chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }, 100);
    }
  }, [messages, messagesLoading]);


  const handleJoinClub = async () => {
    if (!user || !firestore || !groupRef || !memberRef) return;
    
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
    
    toast({
      title: "Welcome!",
      description: `You've successfully joined ${clubData?.name}.`,
    });
    
    // UI will update reactively via useDoc hook. No need to await.
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
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/community');
    }
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
                    <Button>Sign In</Button>
                </Link>
            </div>
        )
    }

    return (
         <div className="p-4 space-y-1 flex-grow">
            {messagesLoading ? <ChatSkeleton /> : (
                 messages?.map((msg) => (
                  <div key={msg.id} className={`flex items-end gap-2 ${msg.userId === user?.uid ? 'justify-end' : 'justify-start'}`}>
                    <div className={`p-3 rounded-2xl max-w-[70%] relative ${msg.userId === user?.uid ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-secondary rounded-bl-none'}`}>
                        {msg.userId !== user?.uid && <p className="font-semibold text-sm mb-1 text-primary">{msg.userName}</p>}
                        
                        {msg.imageUrl ? (
                            <a href={msg.imageUrl} target="_blank" rel="noopener noreferrer">
                                 <Image src={msg.imageUrl} alt="Sent image" width={200} height={200} className="rounded-lg mt-2 max-w-full h-auto cursor-pointer" />
                            </a>
                        ) : (
                            <p className="break-words">{msg.text}</p>
                        )}
                        
                        <p className="text-xs opacity-70 mt-1 text-right">
                          {msg.createdAt?.toDate ? format(msg.createdAt.toDate(), 'p') : '...'}
                        </p>
                    </div>
                  </div>
                ))
            )}
            {messages?.length === 0 && !messagesLoading && (
                <div className="text-center text-muted-foreground py-10">
                    <MessageSquare className="mx-auto w-10 h-10" />
                    <p className="mt-4 text-base">No messages yet.</p>
                    <p className="text-sm">Be the first to say something!</p>
                </div>
            )}
        </div>
    )
  }

  if (!clubId) {
    return (
        <div className="min-h-screen flex flex-col bg-background font-body items-center justify-center">
            <p>Loading club...</p>
        </div>
    );
  }

  return (
    <div className="h-[100dvh] bg-background font-body w-full max-w-lg mx-auto flex flex-col">
          <header className="flex-shrink-0 bg-card/80 backdrop-blur-3xl z-10">
            <div className="flex justify-between items-center p-2 border-b">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full" onClick={handleBack}>
                        <ArrowLeft />
                    </Button>
                    <Link href={`/community/${clubId}/info`} className="flex items-center gap-3">
                        <Avatar className='h-10 w-10'>
                            <AvatarImage src={clubData?.avatar} alt={clubData?.name} />
                            <AvatarFallback>{clubData?.name?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="font-semibold text-lg line-clamp-1">{clubData?.name || <Skeleton className="h-5 w-32" />}</h1>
                            <div className='text-sm text-muted-foreground'>{groupLoading ? <Skeleton className="h-4 w-24" /> : `${clubData?.memberCount || '...'} members`}</div>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center">
                    <Button variant="ghost" size="icon" className="rounded-full"><Search /></Button>
                    <Button variant="ghost" size="icon" className="rounded-full"><MoreVertical /></Button>
                </div>
            </div>

            {user && (
                <div className="p-4 border-b">
                    <div className="relative">
                        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 horizontal-scroll-container">
                            {toolsLoading ? (
                                [...Array(3)].map((_, i) => <Skeleton key={i} className="w-28 h-28 rounded-xl" />)
                            ) : groupTools && groupTools.length > 0 ? (
                                groupTools.map((tool) => (
                                    <ToolCard key={tool.id} tool={tool} />
                                ))
                            ) : (
                            <div className="text-center text-muted-foreground w-full py-4">No tools added yet.</div>
                            )}
                        </div>
                        {groupTools && groupTools.length > 3 && (
                            <div className="absolute top-0 right-0 h-full flex items-center bg-gradient-to-l from-card to-transparent pr-2 pointer-events-none">
                                <ChevronRight className="w-6 h-6 text-muted-foreground animate-bounce-horizontal" />
                            </div>
                        )}
                    </div>
                </div>
            )}

          </header>
          
          <main 
            className='flex-1 min-h-0 overflow-y-auto no-scrollbar relative' 
            ref={chatContainerRef}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
          >
             {isDragging && (
                <div className="absolute inset-0 bg-primary/20 border-4 border-dashed border-primary rounded-lg flex items-center justify-center z-30 pointer-events-none">
                    <p className="text-primary font-bold text-lg">Drop image to send</p>
                </div>
            )}
            {renderContent()}
            {showScrollToBottom && (
              <div className="absolute bottom-4 right-6 z-20">
                <Button size="icon" className="rounded-full shadow-lg" onClick={scrollToBottom}>
                  <ArrowDown className="w-5 h-5"/>
                </Button>
              </div>
            )}
          </main>
          
            
          {/* Chat Input */}
          <div className="p-4 bg-background/50 border-t flex-shrink-0">
            {isUserLoading || memberLoading ? (
                <Skeleton className="h-12 w-full rounded-full" />
            ) : !user ? (
                <Link href="/?tab=settings">
                    <Button className="w-full h-12 text-base">Sign In to Chat</Button>
                </Link>
            ) : isMember ? (
                <form onSubmit={handleSendMessage} className="relative">
                    <Input 
                        placeholder="Type a message..." 
                        className="rounded-full h-12 pr-24 bg-background" 
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        disabled={isUploading}
                    />
                    <input
                        type="file"
                        id="image-upload"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                handleImageUpload(e.target.files[0]);
                            }
                        }}
                        disabled={isUploading}
                    />
                     <label htmlFor="image-upload" className="absolute right-12 top-1/2 -translate-y-1/2 cursor-pointer">
                        <Button asChild type="button" size="icon" className="rounded-full w-9 h-9 bg-transparent text-muted-foreground hover:bg-secondary" disabled={isUploading}>
                             <span>
                                {isUploading ? <Loader2 className="w-5 h-5 animate-spin"/> : <ImageIcon className="w-5 h-5"/>}
                            </span>
                        </Button>
                    </label>
                    <Button type="submit" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-9 h-9" disabled={!newMessage.trim() || isUploading}>
                        <Send className="w-5 h-5"/>
                    </Button>
                </form>
            ) : (
                <Button onClick={handleJoinClub} disabled={isJoining} className="w-full h-12 text-base">
                  {isJoining ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Joining...</> : 'Join Club to Chat'}
                </Button>
            )}
          </div>
    </div>
  );
}
