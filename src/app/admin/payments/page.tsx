
'use client';

import React, { useState } from 'react';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, doc, deleteDoc } from 'firebase/firestore';
import { ClubHeader } from '@/components/club-header';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { CreditCard, User, Clock, Loader2, CheckCircle, Trash2, Clipboard } from 'lucide-react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { updateDocumentNonBlocking } from '@/firebase/non-blocking-updates';

interface PaymentRequest {
    id: string;
    userId: string;
    userName: string;
    email: string;
    planRequested: string;
    utr: string;
    status: string;
    createdAt: any;
}

export default function AdminPaymentsPage() {
    const { user, isUserLoading } = useUser();
    const firestore = useFirestore();
    const router = useRouter();
    const { toast } = useToast();
    const [isActivating, setIsActivating] = useState<string | null>(null);

    React.useEffect(() => {
        if (!isUserLoading && (!user || user.email !== 'mnjkairi1@gmail.com')) {
            router.push('/');
        }
    }, [user, isUserLoading, router]);

    const paymentsQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'paymentRequests'), orderBy('createdAt', 'desc'));
    }, [firestore]);

    const { data: payments, isLoading: paymentsLoading } = useCollection<PaymentRequest>(paymentsQuery);

    const handleActivatePlan = async (payment: PaymentRequest) => {
        if (!firestore) return;
        setIsActivating(payment.id);
        
        try {
            // Update User Profile Plan
            const userRef = doc(firestore, 'user_profiles', payment.userId);
            updateDocumentNonBlocking(userRef, { 
                plan: payment.planRequested,
                updatedAt: new Date()
            });

            // Update Billing in User History
            const billingRef = doc(firestore, 'users', payment.userId, 'billing_history', payment.id);
            updateDocumentNonBlocking(billingRef, { status: 'active' });

            // Delete the request
            await deleteDoc(doc(firestore, 'paymentRequests', payment.id));
            
            toast({ title: "Activated!", description: `${payment.userName}'s ${payment.planRequested} plan is now active.` });
        } catch (error) {
            toast({ variant: 'destructive', title: "Error", description: "Could not activate plan." });
        } finally {
            setIsActivating(null);
        }
    };

    const copyUid = (uid: string) => {
        navigator.clipboard.writeText(uid);
        toast({ title: "Copied UID" });
    };

    if (isUserLoading) return null;

    return (
        <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
            </div>
            <div className="relative z-10 w-full max-w-lg p-6">
                <ClubHeader title="Verify Payments" showBackButton />

                <div className="mt-8 space-y-4 pb-20">
                    {paymentsLoading ? (
                        <div className="flex justify-center p-12"><Loader2 className="animate-spin text-primary w-8 h-8" /></div>
                    ) : payments?.length === 0 ? (
                        <p className="text-center text-muted-foreground p-12">No pending payments.</p>
                    ) : (
                        payments?.map((payment) => (
                            <Card key={payment.id} className="bg-card/80 backdrop-blur-xl border-none shadow-md rounded-2xl overflow-hidden">
                                <CardContent className="p-5 space-y-4">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                                            <AvatarFallback className="bg-primary/10 text-primary uppercase font-bold">{payment.userName?.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-grow">
                                            <h3 className="font-bold text-lg">{payment.userName}</h3>
                                            <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                                                <span>UID: {payment.userId.substring(0, 10)}...</span>
                                                <button onClick={() => copyUid(payment.userId)}><Clipboard className="w-3 h-3"/></button>
                                            </div>
                                        </div>
                                        <div className="px-3 py-1 bg-green-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">
                                            {payment.planRequested}
                                        </div>
                                    </div>

                                    <div className="bg-secondary/20 p-3 rounded-xl border border-white/20">
                                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-wider mb-1">UTR Number (Transaction ID)</p>
                                        <p className="font-mono text-base font-bold text-primary">{payment.utr}</p>
                                    </div>

                                    <div className="flex items-center justify-between pt-2">
                                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold">
                                            <Clock className="w-3 h-3" />
                                            {payment.createdAt?.toDate ? format(payment.createdAt.toDate(), 'MMM d, p') : 'Just now'}
                                        </div>
                                        <div className="flex gap-2">
                                            <Button 
                                                onClick={() => handleActivatePlan(payment)}
                                                disabled={isActivating === payment.id}
                                                className="bg-green-500 hover:bg-green-600 rounded-xl h-10 px-6 font-bold"
                                            >
                                                {isActivating === payment.id ? <Loader2 className="animate-spin w-4 h-4"/> : <><CheckCircle className="w-4 h-4 mr-2" /> Done</>}
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
