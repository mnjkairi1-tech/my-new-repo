'use client';

import React, { useEffect, useState } from 'react';

export function LemonAnimation() {
  const [bubbles, setBubbles] = useState<{ id: number; left: number; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 12,
      size: 10 + Math.random() * 30,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bottom-[-100px] animate-float-up bg-primary/10 rounded-full border border-primary/20 blur-[1px]"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(234,179,8,0.05)_0%,transparent_70%)]" />
    </div>
  );
}
