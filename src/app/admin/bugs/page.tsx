'use client';

import React, { useState } from 'react';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, doc, deleteDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { ClubHeader } from '@/components/club-header';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Bug, User, Clock, Loader2, Trash2, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { addDocumentNonBlocking, deleteDocumentNonBlocking } from '@/firebase/non-blocking-updates';

interface BugReport {
    id: string;
    userId: string;
    userName: string;
    title: string;
    description: string;
    status: string;
    createdAt: any;
}

export default function AdminBugsPage() {
    const { user, isUserLoading } = useUser();
    const firestore = useFirestore();
    const router = useRouter();
    const { toast } = useToast();
    const [isDeleting, setIsDeleting] = useState<string | null>(null);
    const [isAcknowledging, setIsAcknowledging] = useState<string | null>(null);

    React.useEffect(() => {
        if (!isUserLoading && (!user || user.email !== 'mnjkairi1@gmail.com')) {
            router.push('/');
        }
    }, [user, isUserLoading, router]);

    const bugsQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'bugReports'), orderBy('createdAt', 'desc'));
    }, [firestore]);

    const { data: bugs, isLoading: bugsLoading } = useCollection<BugReport>(bugsQuery);

    const handleDelete = (bugId: string) => {
        if (!firestore) return;
        setIsDeleting(bugId);
        
        const docRef = doc(firestore, 'bugReports', bugId);
        deleteDocumentNonBlocking(docRef);
        
        toast({ title: "Deleted", description: "Bug report removed successfully." });
        setIsDeleting(null);
    };

    const handleAcknowledge = (bug: BugReport) => {
        if (!firestore) return;
        setIsAcknowledging(bug.id);
        
        const notificationsCol = collection(firestore, 'notifications');
        addDocumentNonBlocking(notificationsCol, {
            userId: bug.userId,
            title: "Bug Report Update",
            message: `We've acknowledged your bug report: "${bug.title}". Our team is fixing it!`,
            createdAt: serverTimestamp(),
            read: false,
            type: 'bug'
        });
        
        toast({ title: "Acknowledged", description: "User has been notified." });
        setIsAcknowledging(null);
    };

    if (isUserLoading) return null;

    return (
        <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
            </div>
            <div className="relative z-10 w-full max-w-lg p-6">
                <ClubHeader title="Bug Reports" showBackButton />

                <div className="mt-8 space-y-4">
                    {bugsLoading ? (
                        <div className="flex justify-center p-12"><Loader2 className="animate-spin text-primary w-8 h-8" /></div>
                    ) : bugs?.length === 0 ? (
                        <p className="text-center text-muted-foreground p-12">No bug reports yet.</p>
                    ) : (
                        bugs?.map((bug) => (
                            <Dialog key={bug.id}>
                                <DialogTrigger asChild>
                                    <Card 
                                        className="bg-card/80 backdrop-blur-xl border-none shadow-md hover:bg-accent/50 transition-colors cursor-pointer rounded-2xl border-l-4 border-l-destructive"
                                    >
                                        <CardContent className="p-4 flex items-center gap-4">
                                            <Avatar className="h-12 w-12 border-2 border-white shadow-sm text-sm">
                                                <AvatarFallback className="bg-destructive/10 text-destructive uppercase">{bug.userName?.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-grow overflow-hidden">
                                                <h3 className="font-bold truncate">{bug.title}</h3>
                                                <p className="text-xs text-muted-foreground truncate">By: {bug.userName}</p>
                                                <p className="text-[9px] text-muted-foreground font-mono truncate">UID: {bug.userId}</p>
                                            </div>
                                            <div className="text-[10px] text-muted-foreground whitespace-nowrap">
                                                {bug.createdAt?.toDate ? format(bug.createdAt.toDate(), 'MMM d') : 'Recent'}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </DialogTrigger>
                                <DialogContent className="max-w-sm rounded-3xl">
                                    <DialogHeader>
                                        <DialogTitle className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Bug className="w-5 h-5 text-destructive" />
                                                Bug Detail
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button 
                                                    variant="ghost" 
                                                    size="icon" 
                                                    className="text-green-500 hover:bg-green-50"
                                                    onClick={() => handleAcknowledge(bug)}
                                                    disabled={isAcknowledging === bug.id}
                                                >
                                                    {isAcknowledging === bug.id ? <Loader2 className="animate-spin w-4 h-4"/> : <CheckCircle className="w-5 h-5" />}
                                                </Button>
                                                <Button 
                                                    variant="ghost" 
                                                    size="icon" 
                                                    className="text-destructive hover:bg-destructive/10"
                                                    onClick={() => handleDelete(bug.id)}
                                                    disabled={isDeleting === bug.id}
                                                >
                                                    {isDeleting === bug.id ? <Loader2 className="animate-spin w-4 h-4"/> : <Trash2 className="w-5 h-5" />}
                                                </Button>
                                            </div>
                                        </DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4 py-4">
                                        <div className="bg-destructive/5 p-3 rounded-2xl border border-destructive/10">
                                            <p className="text-xs font-bold uppercase tracking-widest text-destructive mb-1">Issue Title</p>
                                            <p className="font-bold">{bug.title}</p>
                                        </div>
                                        <div className="flex items-center gap-3 bg-secondary/30 p-3 rounded-2xl">
                                            <User className="w-4 h-4 text-primary" />
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Reporter</p>
                                                <p className="text-sm font-semibold">{bug.userName}</p>
                                            </div>
                                        </div>
                                        <div className="bg-secondary/10 p-4 rounded-2xl border border-white/20">
                                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Description</p>
                                            <p className="text-sm leading-relaxed">{bug.description}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                                            <Clock className="w-3 h-3" />
                                            <span>Submitted: {bug.createdAt?.toDate ? format(bug.createdAt.toDate(), 'PPPP p') : 'Just now'}</span>
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button className="w-full rounded-xl" variant="outline" onClick={() => (document.querySelector('[data-state="open"]') as any)?.click()}>Close</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}