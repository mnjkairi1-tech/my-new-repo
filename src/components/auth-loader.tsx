'use client';

import React from 'react';
import { GalaxyLogo } from './galaxy-logo';

export function AuthLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 font-body overflow-hidden">
        <div className="relative flex items-center justify-center w-64 h-64">
            
            {/* Animated Orbs */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-primary/30 rounded-full animate-float blur-sm"></div>
            <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-accent/30 rounded-full animate-float blur-md" style={{animationDelay: '-1s', animationDuration: '8s'}}></div>
            <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-secondary/30 rounded-full animate-float blur-lg" style={{animationDelay: '-2s', animationDuration: '7s'}}></div>

            {/* Central Logo */}
            <GalaxyLogo className="w-32 h-32 text-primary animate-pulse" />
        </div>

        <div className='flex items-center gap-3 text-muted-foreground mt-8'>
            <span className="text-lg font-medium animate-pulse">Loading Universe...</span>
        </div>
    </div>
  );
}
