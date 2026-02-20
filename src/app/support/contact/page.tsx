
'use client';

import React, { useState } from 'react';
import { ClubHeader } from '@/components/club-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send, Loader2 } from 'lucide-react';

export default function ContactSupportPage() {
    const { toast } = useToast();
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !subject || !message) return;

        setIsSubmitting(true);
        
        // Simulating API call
        setTimeout(() => {
            toast({
                title: 'Message Sent!',
                description: "We've received your inquiry and will get back to you soon.",
            });
            setEmail('');
            setSubject('');
            setMessage('');
            setIsSubmitting(false);
        }, 1500);
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
                
                <form onSubmit={handleSubmit}>
                    <Card className="bg-card/80 backdrop-blur-xl border-none soft-shadow rounded-[2rem] overflow-hidden">
                        <CardHeader className="text-center pb-2">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="text-2xl font-bold">Get in Touch</CardTitle>
                            <p className="text-sm text-muted-foreground">How can we help you today?</p>
                        </CardHeader>
                        <CardContent className="p-6 space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="font-bold ml-1">Your Email</Label>
                                <Input 
                                    id="email" 
                                    type="email" 
                                    placeholder="you@example.com" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="h-12 bg-background/50 rounded-xl border-none shadow-inner"
                                    required 
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subject" className="font-bold ml-1">Subject</Label>
                                <Input 
                                    id="subject" 
                                    placeholder="e.g., Question about my plan" 
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
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
                                    className="min-h-[150px] bg-background/50 rounded-xl border-none shadow-inner resize-none"
                                    required 
                                />
                            </div>
                            <Button 
                                type="submit" 
                                disabled={isSubmitting} 
                                className="w-full h-14 rounded-2xl font-black text-lg shadow-lg shadow-primary/20 mt-4"
                            >
                                {isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</> : <><Send className="mr-2 h-5 w-5" /> Send Message</>}
                            </Button>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </div>
    );
}
