'use client';

import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

/**
 * BerryAnimation Component
 * Renders soft falling hearts for the Berry Marshmallow theme.
 */
export function BerryAnimation() {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; duration: number; size: number; rotation: number }[]>([]);

  useEffect(() => {
    // Generate random properties for hearts
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 12,
      size: 14 + Math.random() * 24,
      rotation: Math.random() * 360,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {/* Falling Hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute top-[-100px] animate-leaf-fall text-primary/20 blur-[0.5px]"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <div style={{ transform: `rotate(${heart.rotation}deg)` }}>
            <Heart size={heart.size} strokeWidth={1.5} fill="currentColor" />
          </div>
        </div>
      ))}

      {/* Soft floating particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.05)_0%,transparent_70%)]" />
    </div>
  );
}
