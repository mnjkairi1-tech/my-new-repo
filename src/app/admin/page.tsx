
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ClubHeader } from '@/components/club-header';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Bug, CreditCard, LayoutDashboard } from 'lucide-react';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
    const { user, isUserLoading } = useUser();
    const router = useRouter();

    React.useEffect(() => {
        if (!isUserLoading && (!user || user.email !== 'mnjkairi1@gmail.com')) {
            router.push('/');
        }
    }, [user, isUserLoading, router]);

    if (isUserLoading) return null;

    return (
        <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
            </div>
            <div className="relative z-10 w-full max-w-lg p-6">
                <ClubHeader title="Admin Dashboard" showBackButton />
                
                <div className="grid grid-cols-2 gap-6 mt-12">
                    <Link href="/admin/payments" passHref>
                        <Card className="aspect-square bg-card/80 backdrop-blur-xl border-none shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer group border-l-4 border-l-green-500">
                            <CardContent className="p-0 flex flex-col items-center gap-4">
                                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                                    <CreditCard className="w-8 h-8 text-green-600" />
                                </div>
                                <span className="font-bold text-lg">Payments</span>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/admin/support" passHref>
                        <Card className="aspect-square bg-card/80 backdrop-blur-xl border-none shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer group">
                            <CardContent className="p-0 flex flex-col items-center gap-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <MessageCircle className="w-8 h-8 text-primary" />
                                </div>
                                <span className="font-bold text-lg">Support</span>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/admin/bugs" passHref>
                        <Card className="aspect-square bg-card/80 backdrop-blur-xl border-none shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer group">
                            <CardContent className="p-0 flex flex-col items-center gap-4">
                                <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                                    <Bug className="w-8 h-8 text-destructive" />
                                </div>
                                <span className="font-bold text-lg">Bugs</span>
                            </CardContent>
                        </Link>
                </div>
            </div>
        </div>
    );
}
