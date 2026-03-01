'use client';

import React from 'react';
import { ClubHeader } from '@/components/club-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function QuickAccessPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-2xl p-6">
        <ClubHeader title="Quick Access" showBackButton />
        <div className="flex justify-center items-center h-[60vh]">
            <Card className="mt-6 bg-card/80 backdrop-blur-sm soft-shadow w-full max-w-md text-center">
                <CardHeader>
                    <CardTitle className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center">
                            <Zap className="w-10 h-10 text-primary" />
                        </div>
                        <span>Quick Access Hub</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Yahan aapke fast shortcuts honge. <br />
                        Bataiye, aap yahan kya-kya shortcuts chahte hain? ⚡️
                    </p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
