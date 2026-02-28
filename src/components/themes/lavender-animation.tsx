'use client';

import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

export function LavenderAnimation() {
  const [stars, setStars] = useState<{ id: number; left: number; delay: number; duration: number; size: number; rotation: number }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 10,
      size: 12 + Math.random() * 15,
      rotation: Math.random() * 360,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute top-[-100px] animate-leaf-fall text-primary/20 blur-[0.5px]"
          style={{
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        >
          <div style={{ transform: `rotate(${star.rotation}deg)` }}>
            <Star size={star.size} strokeWidth={1.5} fill="currentColor" />
          </div>
        </div>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.05)_0%,transparent_70%)]" />
    </div>
  );
}
