'use client';

import React, { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

/**
 * MintyAnimation Component
 * Renders subtle falling leaves for the Minty Marshmallow theme.
 */
export function MintyAnimation() {
  const [leaves, setLeaves] = useState<{ id: number; left: number; delay: number; duration: number; size: number; rotation: number }[]>([]);

  useEffect(() => {
    // Reduced from 15 to 6 for a more subtle effect
    const newLeaves = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15, // Longer delay range
      duration: 12 + Math.random() * 15, // Slower fall
      size: 14 + Math.random() * 20,
      rotation: Math.random() * 360,
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {/* Falling Leaves */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute top-[-100px] animate-leaf-fall text-primary/15 blur-[0.5px]"
          style={{
            left: `${leaf.left}%`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
          }}
        >
          <div style={{ transform: `rotate(${leaf.rotation}deg)` }}>
            <Leaf size={leaf.size} strokeWidth={1.2} />
          </div>
        </div>
      ))}

      {/* Soft floating particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.03)_0%,transparent_70%)]" />
    </div>
  );
}
