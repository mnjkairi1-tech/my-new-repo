'use client';

import React, { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

/**
 * MintyAnimation Component
 * Renders soft falling leaves for the Minty Marshmallow theme.
 * Removed the bird agent as per user request.
 */
export function MintyAnimation() {
  const [leaves, setLeaves] = useState<{ id: number; left: number; delay: number; duration: number; size: number; rotation: number }[]>([]);

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
  }, []);

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

      {/* Soft floating particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
    </div>
  );
}
