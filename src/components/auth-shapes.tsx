'use client';

import React from 'react';
import { cn } from '@/lib/utils';

// This is now a deprecated component and AuthCartoon should be used instead.
// We will keep it for now but it can be removed in the future.
const Shape = ({
  className,
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div
    className={cn('absolute flex items-center justify-center', className)}
    style={style}
  >
    {children}
  </div>
);

const Face = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <div className="flex gap-4">
      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
    </div>
    <div className="w-6 h-3 border-b-2 border-white rounded-b-full mt-2"></div>
  </div>
);

export const AuthShapes = () => {
  return (
    <div className="relative w-96 h-96">
      <Shape
        className="w-32 h-32 bg-orange-400 rounded-full shadow-lg"
        style={{ top: '10%', left: '20%', animation: 'float 6s ease-in-out infinite' }}
      >
        <Face />
      </Shape>
      
      <Shape
        className="w-24 h-36 bg-red-500 rounded-2xl shadow-lg"
        style={{ top: '25%', left: '65%', animation: 'float 8s ease-in-out infinite' }}
      >
        <Face />
      </Shape>

      <Shape
        className="w-40 h-40"
        style={{ top: '55%', left: '5%', animation: 'float 7s ease-in-out infinite' }}
      >
        <div className="w-0 h-0 border-l-[80px] border-l-transparent border-b-[140px] border-b-green-400 border-r-[80px] border-r-transparent shadow-lg"></div>
        <div className="absolute w-full top-12">
            <Face />
        </div>
      </Shape>
       
      <Shape
        className="w-28 h-28 bg-blue-500 rounded-lg shadow-lg"
        style={{ bottom: '10%', left: '50%', animation: 'float 5s ease-in-out infinite' }}
      >
        <Face />
      </Shape>
       
      <Shape
        className="w-28 h-28 bg-yellow-400 shadow-lg clip-star"
        style={{ top: '65%', left: '70%', animation: 'spin-slow 12s linear infinite' }}
      >
        <div className="absolute w-full -mt-2">
            <Face />
        </div>
      </Shape>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .clip-star {
            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }
      `}</style>
    </div>
  );
};
