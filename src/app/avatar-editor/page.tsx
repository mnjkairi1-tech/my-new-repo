
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ClubHeader } from '@/components/club-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Construction } from 'lucide-react';

export default function AvatarEditorPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-2xl p-6">
        <ClubHeader title="Avatar Editor" showBackButton />
        <div className="flex justify-center items-center h-[60vh]">
            <Card className="mt-6 bg-card/80 backdrop-blur-sm soft-shadow w-full max-w-md text-center">
                <CardHeader>
                    <CardTitle className="flex flex-col items-center gap-4">
                        <Construction className="w-12 h-12 text-primary" />
                        <span>Feature Under Development</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-muted-foreground">
                        This avatar editor is coming soon!
                    </p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
