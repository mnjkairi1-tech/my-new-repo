'use client';

import React, { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

/**
 * MintyAnimation Component
 * Renders soft falling leaves and a cute bird for the Minty Marshmallow theme.
 */
export function MintyAnimation() {
  const [leaves, setLeaves] = useState<{ id: number; left: number; delay: number; duration: number; size: number; rotation: number }[]>([]);
  
  // Bird State
  const [birdPos, setBirdPos] = useState({ x: 10, y: 10 });
  const [isFlying, setIsFlying] = useState(false);
  const [targetIndex, setBirdTargetIndex] = useState(0);
  const [facingLeft, setFacingLeft] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // Specified spots based on your red marks
  const spots = [
    { x: 15, y: 8 },   // Near Home Tab
    { x: 50, y: 15 },  // Near Search Label
    { x: 85, y: 35 },  // Near Featured Card Edge
    { x: 20, y: 65 },  // Near Quick Tools Label
    { x: 75, y: 85 },  // Near Bottom Nav Profile
    { x: 45, y: 50 },  // Center Area
  ];

  useEffect(() => {
    // Generate random properties for leaves
    const newLeaves = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 12,
      size: 14 + Math.random() * 24,
      rotation: Math.random() * 360,
    }));
    setLeaves(newLeaves);

    // Bird Movement Loop
    const moveInterval = setInterval(() => {
      setIsFlying(true);
      const nextIndex = (targetIndex + 1) % spots.length;
      setBirdTargetIndex(nextIndex);
      
      const target = spots[nextIndex];
      setFacingLeft(target.x < birdPos.x);
      
      setTimeout(() => {
        setBirdPos(target);
        setIsFlying(false);
        // Random chirp
        if (Math.random() > 0.6) {
          setMessage("Chirp! ✨");
          setTimeout(() => setMessage(null), 3000);
        }
      }, 3000); // 3 seconds to "fly" across
    }, 12000);

    return () => clearInterval(moveInterval);
  }, [targetIndex, birdPos.x]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {/* Falling Leaves */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute top-[-100px] animate-leaf-fall text-primary/20 blur-[0.5px]"
          style={{
            left: `${leaf.left}%`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
          }}
        >
          <div style={{ transform: `rotate(${leaf.rotation}deg)` }}>
            <Leaf size={leaf.size} strokeWidth={1.5} />
          </div>
        </div>
      ))}

      {/* Cute Bird Agent */}
      <div 
        className="absolute transition-all duration-[3000ms] ease-in-out"
        style={{ 
          left: `${birdPos.x}%`, 
          top: `${birdPos.y}%`,
          transform: facingLeft ? 'scaleX(-1)' : 'scaleX(1)'
        }}
      >
        <div className={cn("relative group", isFlying ? "animate-wing-flap" : "animate-float-slow")}>
          {/* Bird Body */}
          <div className="w-10 h-10 bg-pink-300 rounded-full shadow-lg relative border-2 border-white">
            {/* Eye */}
            <div className="absolute top-3 right-2 w-1.5 h-1.5 bg-black rounded-full" />
            {/* Beak */}
            <div className="absolute top-4 -right-1 w-2 h-2 bg-orange-400 rotate-45" />
            {/* Wing */}
            <div className="absolute top-4 left-1 w-5 h-3 bg-pink-400 rounded-full" />
          </div>
          
          {/* Bubble Message */}
          {message && (
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-primary text-[10px] font-bold px-2 py-1 rounded-full shadow-md border border-primary/20 whitespace-nowrap" style={{ transform: facingLeft ? 'scaleX(-1)' : 'none' }}>
              {message}
            </div>
          )}
        </div>
      </div>

      {/* Soft floating particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
    </div>
  );
}
