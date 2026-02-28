'use client';

import React, { useEffect, useState } from 'react';
import { Flower } from 'lucide-react';

export function PeachAnimation() {
  const [petals, setPetals] = useState<{ id: number; left: number; delay: number; duration: number; size: number; rotation: number }[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 15,
      size: 16 + Math.random() * 20,
      rotation: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-[-100px] animate-leaf-fall text-primary/15 blur-[0.2px]"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <div style={{ transform: `rotate(${petal.rotation}deg)` }}>
            <Flower size={petal.size} strokeWidth={1} fill="currentColor" />
          </div>
        </div>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.05)_0%,transparent_60%)]" />
    </div>
  );
}
