
import React from 'react';

export function GalaxyLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--secondary-foreground))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="none" stroke="url(#grad1)" strokeWidth="5" />
      <circle cx="50" cy="50" r="10" fill="url(#grad1)" />
      <path d="M50 5 Q50 5, 85 15" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" />
      <path d="M50 95 Q50 95, 15 85" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" />
      <path d="M5 50 Q5 50, 15 15" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" />
      <path d="M95 50 Q95 50, 85 85" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" />
    </svg>
  );
}

    