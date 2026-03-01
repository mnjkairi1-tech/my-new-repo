'use client';

import React from 'react';

/**
 * CrystalBlurAnimation Component
 * Renders large, soft, floating blobs in the background to create a colorful depth effect
 * that interacts beautifully with backdrop-blur filters.
 */
export function CrystalBlurAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#f8fafc]">
      {/* Dynamic Blobs for Portrait Blur effect */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-200/30 blur-[80px] animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-pink-200/30 blur-[100px] animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[55%] h-[55%] rounded-full bg-purple-200/30 blur-[90px] animate-blob [animation-delay:8s]" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full bg-emerald-100/20 blur-[120px] animate-blob [animation-delay:12s]" />
      
      {/* Ambient noise texture for extra "crystal" feel */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter name='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </div>
  );
}
