'use client';

import React, { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

/**
 * MintyAnimation Component
 * Renders an artistic tree sketch and subtle falling leaves for the Minty Marshmallow theme.
 */
export function MintyAnimation() {
  const [leaves, setLeaves] = useState<{ id: number; left: number; top: number; delay: number; duration: number; size: number; rotation: number; fromTree?: boolean }[]>([]);

  useEffect(() => {
    // 1. Global random falling leaves (kept as requested)
    const randomLeaves = Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: -100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 15,
      size: 14 + Math.random() * 10,
      rotation: Math.random() * 360,
    }));

    // 2. Leaves that specifically fall from the tree branches
    const treeLeaves = Array.from({ length: 4 }).map((_, i) => {
      // Branches are roughly in the top right area
      const branchPos = [
        { l: 85, t: 15 },
        { l: 70, t: 5 },
        { l: 90, t: 40 },
        { l: 60, t: 10 }
      ][i % 4];
      
      return {
        id: i + 100,
        left: branchPos.l,
        top: branchPos.t,
        delay: Math.random() * 15,
        duration: 18 + Math.random() * 10,
        size: 12 + Math.random() * 8,
        rotation: Math.random() * 360,
        fromTree: true
      };
    });

    setLeaves([...randomLeaves, ...treeLeaves]);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {/* The Artistic Tree Sketch (Background Layer) */}
      <svg 
        className="absolute right-0 top-0 w-full h-full opacity-[0.08] dark:opacity-[0.15]" 
        viewBox="0 0 400 800" 
        preserveAspectRatio="xMaxYMin meet"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Trunk/Branch coming from top right */}
        <path 
          d="M400 0 Q350 100 380 250 T350 450 T390 700" 
          stroke="black" 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
        {/* Top Horizontal branch */}
        <path 
          d="M380 50 Q200 40 50 80" 
          stroke="black" 
          strokeWidth="3" 
          strokeLinecap="round" 
        />
        <path 
          d="M370 120 Q250 130 150 180" 
          stroke="black" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
        />
        {/* Small detail branches */}
        <path d="M100 70 Q80 50 60 60" stroke="black" strokeWidth="1.5" />
        <path d="M200 45 Q180 20 160 35" stroke="black" strokeWidth="1.5" />
        <path d="M365 300 Q320 320 300 380" stroke="black" strokeWidth="2" />
        <path d="M385 550 Q340 580 320 650" stroke="black" strokeWidth="2" />
        
        {/* Little decorative nodes (like fruit or buds) */}
        <circle cx="60" cy="60" r="3" fill="currentColor" className="text-primary/40" />
        <circle cx="160" cy="35" r="3" fill="currentColor" className="text-primary/40" />
        <circle cx="300" cy="380" r="4" fill="currentColor" className="text-primary/40" />
      </svg>

      {/* Falling Leaves */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute animate-leaf-fall text-primary/20 blur-[0.2px]"
          style={{
            left: `${leaf.left}%`,
            top: `${leaf.top}%`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
          }}
        >
          <div style={{ transform: `rotate(${leaf.rotation}deg)` }}>
            <Leaf size={leaf.size} strokeWidth={1.2} fill="currentColor" />
          </div>
        </div>
      ))}

      {/* Ambient glow for the theme */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.04)_0%,transparent_60%)]" />
    </div>
  );
}
