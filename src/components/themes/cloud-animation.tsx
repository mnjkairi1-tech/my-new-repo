'use client';

import React, { useEffect, useState } from 'react';
import { Cloud } from 'lucide-react';

/**
 * CloudAnimation Component
 * Renders soft falling clouds for the Cloud Marshmallow theme.
 */
export function CloudAnimation() {
  const [clouds, setClouds] = useState<{ id: number; left: number; delay: number; duration: number; size: number; rotation: number }[]>([]);

  useEffect(() => {
    // Generate random properties for clouds
    const newClouds = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 15,
      size: 20 + Math.random() * 30,
      rotation: Math.random() * 20 - 10,
    }));
    setClouds(newClouds);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {/* Falling Clouds */}
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute top-[-100px] animate-leaf-fall text-primary/20 blur-[0.5px]"
          style={{
            left: `${cloud.left}%`,
            animationDelay: `${cloud.delay}s`,
            animationDuration: `${cloud.duration}s`,
          }}
        >
          <div style={{ transform: `rotate(${cloud.rotation}deg)` }}>
            <Cloud size={cloud.size} strokeWidth={1.5} fill="currentColor" />
          </div>
        </div>
      ))}

      {/* Soft floating particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.05)_0%,transparent_70%)]" />
    </div>
  );
}
