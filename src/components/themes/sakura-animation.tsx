'use client';

import React, { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

export function SakuraAnimation() {
  const [petals, setPetals] = useState<{ id: number; left: number; delay: number; duration: number; size: number; rotation: number }[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 20 + Math.random() * 20,
      size: 10 + Math.random() * 15,
      rotation: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-[-100px] animate-leaf-fall text-primary/30 blur-[0.5px]"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <div style={{ transform: `rotate(${petal.rotation}deg)` }}>
            <Leaf size={petal.size} strokeWidth={1} fill="currentColor" className="rotate-45" />
          </div>
        </div>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(244,114,182,0.05)_0%,transparent_50%)]" />
    </div>
  );
}
