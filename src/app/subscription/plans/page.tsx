
'use client';

import React, { useState } from 'react';
import { ClubHeader } from '@/components/club-header';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown, CreditCard, Smartphone, Wallet, Banknote, ShieldCheck, Loader2, Copy, QrCode, ClipboardCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useFirestore, useUser } from '@/firebase';
import { collection, serverTimestamp, doc, setDoc } from 'firebase/firestore';
import { addDocumentNonBlocking, setDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

type PlanType = 'basic' | 'standard' | 'pro';

export default function SubscriptionPlansPage() {
  const [activePlan, setActivePlan] = useState<PlanType>('basic');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [utrNumber, setUtrNumber] = useState('');
  
  const router = useRouter();
  const { toast } = useToast();
  const { user } = useUser();
  const firestore = useFirestore();

  const plans = {
    basic: {
      name: 'Basic',
      price: 'Free',
      period: '',
      description: 'Perfect for exploring our Ai tool catalog.',
      buttonText: 'Current Plan',
      buttonVariant: 'outline' as const,
      icon: <Zap className="w-10 h-10 text-blue-400" />,
      features: [
        'Get access to 1 million tools',
        'Community Access',
        '5 UI Themes',
        'Compare Tools',
        'Tools addition in groups',
        '20 Favourite Tools',
        'Free Popular Tools',
        'Quick Tools access',
        'Recent usage tool'
      ]
    },
    standard: {
      name: 'Standard',
      price: '₹29',
      period: '/month',
      description: 'Unlock more features and community benefits.',
      buttonText: 'Get Started',
      buttonVariant: 'default' as const,
      popular: true,
      icon: <Star className="w-10 h-10 text-yellow-400" />,
      features: [
        'Get access to 1 million + tools',
        'Community Access',
        '35 UI Themes',
        'Compare Tools',
        'Tools addition in groups',
        '50 Favourite Tools',
        'Free Popular Tools',
        'Quick Tools access',
        'Recent usage tool',
        'Max free tools',
        'Get tools which is free for some time'
      ]
    },
    pro: {
      name: 'Pro',
      price: '₹49',
      period: '/month',
      description: 'The complete experience for power users.',
      buttonText: 'Go Pro',
      buttonVariant: 'default' as const,
      icon: <Crown className="w-10 h-10 text-primary" />,
      features: [
        'Get access to 1 million + tools',
        'Community Access',
        'all UI Themes',
        'Compare Tools',
        'Tools addition in groups',
        'unlimited Favourite Tools',
        'Free Popular Tools',
        'Quick Tools access',
        'Recent usage tool',
        'Max free tools',
        'Get tools which is free for some time',
        'mod apps',
        'ultra free tools',
        'get daily new tools add automatically',
        'get community primum blue ticks',
        'get new features early'
      ]
    },
  };

  const currentPlan = plans[activePlan];

  const handleOpenPayment = () => {
    if (activePlan === 'basic') return;
    setIsPaymentModalOpen(true);
    setUtrNumber('');
  };

  const handlePaymentConfirmed = async () => {
    if (!utrNumber.trim() || utrNumber.length < 6) {
        toast({ variant: 'destructive', title: "Error", description: "Please enter a valid Transaction ID (UTR)." });
        return;
    }

    if (!firestore || !user) return;

    setIsVerifying(true);
    
    setTimeout(async () => {
        // 1. Send request to Owner Portal
        const paymentRef = collection(firestore, 'paymentRequests');
        await addDocumentNonBlocking(paymentRef, {
            userId: user.uid,
            userName: user.displayName || user.email || 'Anonymous',
            email: user.email || 'N/A',
            planRequested: activePlan,
            utr: utrNumber,
            status: 'pending',
            createdAt: serverTimestamp(),
        });

        // 2. Add to User's local billing history
        const userBillingRef = doc(firestore, 'users', user.uid, 'billing_history', utrNumber);
        setDocumentNonBlocking(userBillingRef, {
            plan: activePlan,
            amount: currentPlan.price,
            utr: utrNumber,
            status: 'verifying',
            createdAt: serverTimestamp(),
        }, { merge: true });

        toast({
          title: "Payment Submitted!",
          description: "Details sent to owner. Activation of plan will be 24 hours we will verify manually.",
        });

        setIsVerifying(false);
        setIsPaymentModalOpen(false);
        router.push('/');
    }, 2000);
  };

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative animate-fade-in-up">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-lg p-6">
        <div className="mb-6">
            <ClubHeader title="Subscription Plans" showBackButton />
        </div>
        
        <div className="mt-4 flex bg-white/40 backdrop-blur-md p-1.5 rounded-2xl shadow-inner border border-white/20">
            {(['basic', 'standard', 'pro'] as PlanType[]).map((p) => (
                <button
                    key={p}
                    onClick={() => setActivePlan(p)}
                    className={cn(
                        "flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 capitalize",
                        activePlan === p 
                            ? "bg-white text-primary shadow-md scale-100" 
                            : "text-muted-foreground hover:bg-white/20 scale-95"
                    )}
                >
                    {p}
                </button>
            ))}
        </div>

        <div className="mt-8 flex justify-center">
            <Card 
              className={cn(
                "relative bg-card/90 backdrop-blur-xl soft-shadow flex flex-col rounded-[2.5rem] border-2 transition-all duration-500 w-full max-w-sm",
                currentPlan.popular ? 'border-primary shadow-primary/10' : 'border-transparent'
              )}
            >
              {currentPlan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-black tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  POPULAR
                </div>
              )}
              
              <CardHeader className="text-center pt-10 pb-6">
                <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center shadow-inner">
                        {currentPlan.icon}
                    </div>
                </div>
                <CardTitle className="text-3xl font-black tracking-tight">{currentPlan.name}</CardTitle>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-black">{currentPlan.price}</span>
                  <span className="text-muted-foreground font-semibold">{currentPlan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="flex-grow px-8">
                <p className="text-center text-muted-foreground font-medium mb-8 leading-relaxed">
                    {currentPlan.description}
                </p>
                <div className="space-y-4">
                    {currentPlan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                <Check className="w-3.5 h-3.5 text-green-600" />
                            </div>
                            <span className="text-sm font-semibold text-foreground/80">{feature}</span>
                        </div>
                    ))}
                </div>
              </CardContent>

              <CardFooter className="pb-10 pt-6 px-8">
                <Button 
                    variant={currentPlan.buttonVariant} 
                    className={cn(
                        "w-full h-14 rounded-2xl font-black text-lg shadow-xl transition-transform active:scale-95",
                        activePlan === 'basic' ? "bg-secondary text-primary hover:bg-secondary/80" : "bg-primary text-white shadow-primary/20 hover:bg-primary/90"
                    )}
                    disabled={activePlan === 'basic'}
                    onClick={handleOpenPayment}
                >
                  {currentPlan.buttonText}
                </Button>
              </CardFooter>
            </Card>
        </div>
      </div>

      <Dialog open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
          <DialogContent className="max-w-sm rounded-[2.5rem] border-none bg-background p-0 overflow-hidden shadow-2xl">
                <DialogHeader className="sr-only">
                    <DialogTitle>Complete Payment</DialogTitle>
                    <DialogDescription>Please scan the QR code and enter the UTR number to activate your plan.</DialogDescription>
                </DialogHeader>
                <div className="p-0 flex flex-col items-center">
                    <div className="bg-primary w-full p-8 text-center text-white relative">
                        <QrCode className="w-16 h-16 mx-auto mb-2 opacity-90" />
                        <h2 className="text-2xl font-black">Scan & Pay</h2>
                        <p className="text-white/80 text-xs font-bold uppercase tracking-wider">Manual Verification Mode</p>
                    </div>
                    
                    <div className="p-8 space-y-6 bg-card w-full rounded-t-[2.5rem] -mt-6 relative z-10 flex flex-col items-center">
                        <div className="bg-white p-4 rounded-3xl shadow-xl border-4 border-secondary">
                            <div className="relative w-48 h-48 bg-muted flex items-center justify-center rounded-xl overflow-hidden">
                                <Image 
                                    src="https://i.ibb.co/fGv70L71/Whats-App-Image-2026-02-28-at-07-47-16.jpg" 
                                    alt="Payment QR" 
                                    width={200}
                                    height={200}
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                        </div>

                        <div className="w-full space-y-4">
                            <div className="text-center p-3 bg-blue-50 border border-blue-100 rounded-xl">
                                <p className="text-[11px] font-bold text-blue-600 leading-tight">
                                    "activation of plan will be 24 hours we will verify manually"
                                </p>
                            </div>
                            
                            <div className="space-y-2">
                                <p className="text-xs font-bold text-foreground/70 ml-1 flex items-center gap-2">
                                    <ClipboardCheck className="w-4 h-4 text-primary" />
                                    Transaction ID / UTR Number
                                </p>
                                <Input 
                                    placeholder="Enter 12-digit UTR Number" 
                                    value={utrNumber}
                                    onChange={(e) => setUtrNumber(e.target.value)}
                                    className="h-12 rounded-xl border-2 border-secondary focus:border-primary/30"
                                />
                            </div>
                        </div>

                        <div className="pt-2 w-full">
                            <Button 
                                className="w-full h-14 rounded-2xl font-black text-lg bg-green-500 hover:bg-green-600 shadow-lg shadow-green-200"
                                onClick={handlePaymentConfirmed}
                                disabled={isVerifying}
                            >
                                {isVerifying ? (
                                    <><Loader2 className="animate-spin mr-2" /> Submitting...</>
                                ) : (
                                    "I have done payment ✅"
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
          </DialogContent>
      </Dialog>
    </div>
  );
}
