
'use client';

import React, { useState } from 'react';
import { ClubHeader } from '@/components/club-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Bug, Send, Loader2 } from 'lucide-react';
import { useFirestore, useUser } from '@/firebase';
import { collection, serverTimestamp } from 'firebase/firestore';
import { addDocumentNonBlocking } from '@/firebase/non-blocking-updates';

export default function ReportBugPage() {
    const { toast } = useToast();
    const { user } = useUser();
    const firestore = useFirestore();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !description || !firestore || !user) return;

        setIsSubmitting(true);
        
        const bugsCollection = collection(firestore, 'bugReports');
        const data = {
            userId: user.uid,
            userName: user.displayName || user.email?.split('@')[0] || 'Anonymous',
            title: title,
            description: description,
            status: 'new',
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        };

        addDocumentNonBlocking(bugsCollection, data);

        setTimeout(() => {
            toast({
                title: 'Message Sent!',
                description: "We've received your bug report. We'll look into it!",
            });
            setTitle('');
            setDescription('');
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
            </div>
            <div className="relative z-10 w-full max-w-lg p-6">
                <div className="mb-6">
                    <ClubHeader title="Report a Bug" showBackButton />
                </div>
                
                <form onSubmit={handleSendMessage}>
                    <Card className="bg-card/80 backdrop-blur-xl border-none soft-shadow rounded-[2rem] overflow-hidden">
                        <CardHeader className="text-center pb-2">
                            <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Bug className="w-8 h-8 text-destructive" />
                            </div>
                            <CardTitle className="text-2xl font-bold">Message the Devs</CardTitle>
                            <p className="text-sm text-muted-foreground">Found a glitch? Describe it to us below.</p>
                        </CardHeader>
                        <CardContent className="p-6 space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="title" className="font-bold ml-1">What's the issue?</Label>
                                <Input 
                                    id="title" 
                                    placeholder="Quick title of the problem" 
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="h-12 bg-background/50 rounded-xl border-none shadow-inner"
                                    required 
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description" className="font-bold ml-1">Message Detail</Label>
                                <Textarea 
                                    id="description" 
                                    placeholder="Tell us what happened and how we can fix it..." 
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="min-h-[180px] bg-background/50 rounded-xl border-none shadow-inner resize-none"
                                    required 
                                />
                            </div>
                            <Button 
                                type="submit" 
                                disabled={isSubmitting} 
                                className="w-full h-14 rounded-2xl font-black text-lg bg-destructive text-white shadow-lg shadow-destructive/20 mt-4 hover:bg-destructive/90 transition-all active:scale-95"
                            >
                                {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : <><Send className="mr-2 h-5 w-5" /> Send Message</>}
                            </Button>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </div>
    );
}
