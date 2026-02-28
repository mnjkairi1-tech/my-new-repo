'use client';

import React, { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

/**
 * MintyAnimation Component
 * Renders an illustrative tree and subtle falling leaves for the Minty Marshmallow theme.
 */
export function MintyAnimation() {
  const [leaves, setLeaves] = useState<{ id: number; left: number; top: number; delay: number; duration: number; size: number; rotation: number; fromTree?: boolean }[]>([]);

  useEffect(() => {
    // 1. Global random falling leaves for overall atmosphere
    const randomLeaves = Array.from({ length: 3 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: -50,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 15,
      size: 14 + Math.random() * 10,
      rotation: Math.random() * 360,
    }));

    // 2. Leaves that specifically fall from the illustrative tree branches
    const treeLeaves = Array.from({ length: 4 }).map((_, i) => {
      // Branch positions on our new illustrative tree (roughly on the right side)
      const branchPos = [
        { l: 82, t: 25 },
        { l: 75, t: 15 },
        { l: 88, t: 45 },
        { l: 68, t: 35 }
      ][i % 4];
      
      return {
        id: i + 100,
        left: branchPos.l,
        top: branchPos.t,
        delay: Math.random() * 20,
        duration: 18 + Math.random() * 12,
        size: 12 + Math.random() * 8,
        rotation: Math.random() * 360,
        fromTree: true
      };
    });

    setLeaves([...randomLeaves, ...treeLeaves]);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {/* Illustrative Nature Tree (Background Layer) */}
      <svg 
        className="absolute right-[-20px] top-0 h-full w-auto opacity-[0.1] dark:opacity-[0.2]" 
        viewBox="0 0 300 800" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Trunk */}
        <path 
          d="M280 800C270 700 260 500 270 300C275 150 250 50 220 0" 
          stroke="currentColor" 
          strokeWidth="12" 
          strokeLinecap="round"
          className="text-primary/40"
        />
        
        {/* Large Branches */}
        <path d="M268 450C220 430 150 440 100 410" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-primary/30" />
        <path d="M272 280C210 250 140 260 80 220" stroke="currentColor" strokeWidth="5" strokeLinecap="round" className="text-primary/30" />
        <path d="M265 150C220 120 180 130 140 90" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-primary/30" />
        
        {/* Small Twigs & Detail */}
        <path d="M110 415C90 400 70 410 55 395" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary/20" />
        <path d="M90 225C70 210 50 220 35 205" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary/20" />
        <path d="M150 100C130 80 110 90 95 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary/20" />
        
        {/* Decorative Buds/Nodes */}
        <circle cx="55" cy="395" r="4" fill="currentColor" className="text-primary/40" />
        <circle cx="35" cy="205" r="4" fill="currentColor" className="text-primary/40" />
        <circle cx="95" cy="75" r="4" fill="currentColor" className="text-primary/40" />
        <circle cx="180" cy="320" r="3" fill="currentColor" className="text-primary/30" />
        <circle cx="120" cy="180" r="3" fill="currentColor" className="text-primary/30" />
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

      {/* Soft Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(16,185,129,0.05)_0%,transparent_60%)]" />
    </div>
  );
}
