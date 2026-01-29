'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ClubHeader } from '@/components/club-header';

export default function SubmitToolPage() {
    const { toast } = useToast();
    const [toolName, setToolName] = useState('');
    const [toolUrl, setToolUrl] = useState('');
    const [toolDescription, setToolDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // In a real app, you'd handle the form submission here,
        // like sending the data to your backend or a Genkit flow.
        
        console.log({ toolName, toolUrl, toolDescription });

        setTimeout(() => {
            toast({
                title: 'Tool Submitted!',
                description: 'Thanks for your contribution. We will review it shortly.',
            });
            setToolName('');
            setToolUrl('');
            setToolDescription('');
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
            </div>
            <div className="relative z-10 w-full max-w-2xl p-6">
                <ClubHeader title="Submit a Tool" showBackButton />
                <form onSubmit={handleSubmit}>
                    <Card className="mt-6 bg-card/80 backdrop-blur-sm soft-shadow">
                        <CardHeader>
                            <CardTitle>Share an AI Tool</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="toolName">Tool Name</Label>
                                <Input 
                                    id="toolName" 
                                    placeholder="e.g., Awesome AI Tool" 
                                    value={toolName}
                                    onChange={(e) => setToolName(e.target.value)}
                                    required 
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="toolUrl">Tool URL</Label>
                                <Input 
                                    id="toolUrl" 
                                    type="url" 
                                    placeholder="https://example.com" 
                                    value={toolUrl}
                                    onChange={(e) => setToolUrl(e.target.value)}
                                    required 
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="toolDescription">Why is it great? (Optional)</Label>
                                <Textarea 
                                    id="toolDescription" 
                                    placeholder="e.g., It helps me automate my daily tasks!" 
                                    value={toolDescription}
                                    onChange={(e) => setToolDescription(e.target.value)}
                                />
                            </div>
                        </CardContent>
                    </Card>
                    <div className="flex justify-end mt-8">
                        <Button type="submit" disabled={isSubmitting || !toolName || !toolUrl}>
                            {isSubmitting ? 'Submitting...' : 'Submit for Review'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
