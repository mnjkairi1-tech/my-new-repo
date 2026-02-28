'use client';

import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export function GalaxyAnimation() {
  const [stars, setStars] = useState<{ id: number; left: number; top: number; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 5,
      size: 10 + Math.random() * 20,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-pulse text-primary/20"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        >
          <Sparkles size={star.size} fill="currentColor" strokeWidth={1} />
        </div>
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(168,85,247,0.03),rgba(59,130,246,0.03))]" />
    </div>
  );
}
