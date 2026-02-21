
'use client';

import React, { useState } from 'react';
import { ClubHeader } from '@/components/club-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MessageCircle, Send, Loader2 } from 'lucide-react';
import { useFirestore, useUser } from '@/firebase';
import { collection, serverTimestamp } from 'firebase/firestore';
import { addDocumentNonBlocking } from '@/firebase/non-blocking-updates';

export default function ContactSupportPage() {
    const { toast } = useToast();
    const { user } = useUser();
    const firestore = useFirestore();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !message || !firestore || !user) return;

        setIsSubmitting(true);
        
        const supportCollection = collection(firestore, 'supportRequests');
        const data = {
            userId: user.uid,
            userName: user.displayName || user.email?.split('@')[0] || 'Anonymous',
            email: email,
            message: message,
            status: 'new',
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        };

        addDocumentNonBlocking(supportCollection, data);

        setTimeout(() => {
            toast({
                title: 'Message Sent!',
                description: "Thanks for reaching out! We'll get back to you soon.",
            });
            setEmail('');
            setMessage('');
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
                    <ClubHeader title="Contact Support" showBackButton />
                </div>
                
                <form onSubmit={handleSendMessage}>
                    <Card className="bg-card/80 backdrop-blur-xl border-none soft-shadow rounded-[2rem] overflow-hidden">
                        <CardHeader className="text-center pb-2">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <MessageCircle className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="text-2xl font-bold">Chat with Support</CardTitle>
                            <p className="text-sm text-muted-foreground">Send us a quick message below.</p>
                        </CardHeader>
                        <CardContent className="p-6 space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="font-bold ml-1">Your Email</Label>
                                <Input 
                                    id="email" 
                                    type="email" 
                                    placeholder="Where can we reply to you?" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="h-12 bg-background/50 rounded-xl border-none shadow-inner"
                                    required 
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message" className="font-bold ml-1">Message</Label>
                                <Textarea 
                                    id="message" 
                                    placeholder="Write your message here..." 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="min-h-[200px] bg-background/50 rounded-xl border-none shadow-inner resize-none"
                                    required 
                                />
                            </div>
                            <Button 
                                type="submit" 
                                disabled={isSubmitting} 
                                className="w-full h-14 rounded-2xl font-black text-lg shadow-lg shadow-primary/20 mt-4 transition-all active:scale-95"
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
