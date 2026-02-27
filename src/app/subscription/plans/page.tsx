'use client';

import React, { useState } from 'react';
import { ClubHeader } from '@/components/club-header';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown, CreditCard, Smartphone, Wallet, Banknote, ShieldCheck, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

type PlanType = 'basic' | 'standard' | 'pro';

interface PaymentMethod {
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
    color: string;
}

export default function SubscriptionPlansPage() {
  const [activePlan, setActivePlan] = useState<PlanType>('basic');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

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

  const paymentMethods: PaymentMethod[] = [
    { 
        id: 'razorpay', 
        name: 'Razorpay', 
        description: 'UPI, Cards, & Netbanking', 
        icon: <CreditCard className="w-6 h-6" />, 
        color: 'bg-blue-600' 
    },
    { 
        id: 'stripe', 
        name: 'Stripe', 
        description: 'Global Credit/Debit Cards', 
        icon: <div className="font-black text-xs">S</div>, 
        color: 'bg-[#635BFF]' 
    },
    { 
        id: 'paypal', 
        name: 'PayPal', 
        description: 'Fast, secure international payments', 
        icon: <Wallet className="w-6 h-6" />, 
        color: 'bg-[#003087]' 
    },
    { 
        id: 'googleplay', 
        name: 'Google Play', 
        description: 'Direct billing via Play Store', 
        icon: <Smartphone className="w-6 h-6" />, 
        color: 'bg-green-500' 
    },
    { 
        id: 'cashfree', 
        name: 'Cashfree', 
        description: 'Next-gen payment gateway', 
        icon: <Banknote className="w-6 h-6" />, 
        color: 'bg-[#1D3557]' 
    },
  ];

  const currentPlan = plans[activePlan];

  const handleOpenPayment = () => {
    if (activePlan === 'basic') return;
    setIsPaymentModalOpen(true);
  };

  const handleSelectPayment = (method: PaymentMethod) => {
    setIsProcessing(true);
    toast({
      title: `${method.name} Selected`,
      description: `Opening secure gateway for your ${currentPlan.name} plan...`,
    });

    setTimeout(() => {
      setIsProcessing(false);
      setIsPaymentModalOpen(false);
      // Redirect to support contact with payment intent details
      router.push(`/support/contact?plan=${activePlan}&method=${method.id}`);
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

      {/* Cute Stylish Payment selection Modal */}
      <Dialog open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
          <DialogContent className="max-w-sm rounded-[2rem] border-none bg-background p-0 overflow-hidden shadow-2xl">
              <div className="bg-primary p-8 text-center text-white relative">
                  <div className="absolute top-4 right-4">
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full" onClick={() => setIsPaymentModalOpen(false)}>
                          <Zap className="w-5 h-5 fill-current" />
                      </Button>
                  </div>
                  <ShieldCheck className="w-16 h-16 mx-auto mb-4 opacity-90" />
                  <DialogHeader>
                      <DialogTitle className="text-2xl font-black text-white">Select Payment</DialogTitle>
                      <DialogDescription className="text-white/80 font-medium">
                          Choose your preferred method to activate <strong>{currentPlan.name}</strong>
                      </DialogDescription>
                  </DialogHeader>
              </div>
              
              <div className="p-6 space-y-3 bg-card rounded-t-[2rem] -mt-6 relative z-10">
                  {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        disabled={isProcessing}
                        onClick={() => handleSelectPayment(method)}
                        className="w-full flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 hover:bg-primary/10 transition-all group border border-transparent hover:border-primary/20 active:scale-[0.98]"
                      >
                          <div className={cn(
                              "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-12",
                              method.color
                          )}>
                              {method.icon}
                          </div>
                          <div className="text-left flex-grow">
                              <p className="font-bold text-base text-foreground">{method.name}</p>
                              <p className="text-xs text-muted-foreground font-medium">{method.description}</p>
                          </div>
                          {isProcessing ? (
                              <Loader2 className="w-5 h-5 animate-spin text-primary opacity-40" />
                          ) : (
                              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                  <Check className="w-4 h-4 text-primary" />
                              </div>
                          )}
                      </button>
                  ))}
                  
                  <div className="pt-4 text-center">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Secure 256-bit SSL Encryption</p>
                  </div>
              </div>
          </DialogContent>
      </Dialog>
    </div>
  );
}
