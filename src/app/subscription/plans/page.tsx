
'use client';

import React from 'react';
import { ClubHeader } from '@/components/club-header';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function SubscriptionPlansPage() {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      period: '',
      description: 'Perfect for exploring our AI tool catalog.',
      buttonText: 'Current Plan',
      buttonVariant: 'outline' as const,
    },
    {
      name: 'Standard',
      price: '₹29',
      period: '/month',
      description: 'Unlock more features and community benefits.',
      buttonText: 'Get Started',
      buttonVariant: 'default' as const,
      popular: true,
    },
    {
      name: 'Pro',
      price: '₹49',
      period: '/month',
      description: 'The complete experience for power users.',
      buttonText: 'Go Pro',
      buttonVariant: 'default' as const,
    },
  ];

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative animate-fade-in-up">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-4xl p-6">
        <ClubHeader title="Subscription Plans" showBackButton />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative bg-card/80 backdrop-blur-sm soft-shadow flex flex-col rounded-3xl border-2 ${plan.popular ? 'border-primary' : 'border-transparent'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow text-center text-muted-foreground px-6">
                <p>{plan.description}</p>
                <div className="mt-6 space-y-3 opacity-20">
                    <div className="h-4 bg-secondary rounded-full w-3/4 mx-auto"></div>
                    <div className="h-4 bg-secondary rounded-full w-1/2 mx-auto"></div>
                    <div className="h-4 bg-secondary rounded-full w-2/3 mx-auto"></div>
                </div>
              </CardContent>
              <CardFooter className="pb-8 px-6">
                <Button variant={plan.buttonVariant} className="w-full h-12 rounded-2xl font-bold" disabled={plan.name === 'Basic'}>
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
