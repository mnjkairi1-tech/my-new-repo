'use client';

import React, { useEffect, useState } from 'react';

/**
 * PandaAnimation Component
 * Renders cute floating panda footprints and soft grey bubbles for the Panda Bliss theme.
 */
export function PandaAnimation() {
  const [bubbles, setBubbles] = useState<{ id: number; left: number; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 15,
      size: 10 + Math.random() * 40,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {/* Panda Paws / Footprints (SVG path) */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bottom-[-100px] animate-float-up text-primary/10"
          style={{
            left: `${bubble.left}%`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        >
          <svg
            width={bubble.size}
            height={bubble.size}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="14" r="6" />
            <circle cx="6" cy="7" r="3" />
            <circle cx="18" cy="7" r="3" />
            <circle cx="12" cy="5" r="2" />
          </svg>
        </div>
      ))}

      {/* Soft Ambient Contrast Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_70%)]" />
    </div>
  );
}
