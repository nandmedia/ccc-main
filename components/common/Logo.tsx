"use client";

import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = '', size = 32 }: LogoProps) {
  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Light theme logo */}
      <svg 
        viewBox="0 0 375 375" 
        width={size} 
        height={size}
        className="block dark:hidden"
      >
        <path
          d="M187.5 50 L50 125 L50 275 L187.5 350 L325 275 L325 125 L187.5 50"
          fill="#ff6b21"
        />
        <path
          d="M187.5 125 L125 162.5 L125 237.5 L187.5 275 L250 237.5 L250 162.5 L187.5 125"
          fill="white"
        />
        <path
          d="M50 275 L75 262.5 L75 137.5 L50 125 Z M325 275 L300 262.5 L300 137.5 L325 125 Z"
          fill="#ffd700"
          opacity="0.3"
        />
      </svg>

      {/* Dark theme logo */}
      <svg 
        viewBox="0 0 375 375" 
        width={size} 
        height={size}
        className="hidden dark:block"
      >
        <path
          d="M187.5 50 L50 125 L50 275 L187.5 350 L325 275 L325 125 L187.5 50"
          fill="#ff6b21"
        />
        <path
          d="M187.5 125 L125 162.5 L125 237.5 L187.5 275 L250 237.5 L250 162.5 L187.5 125"
          fill="black"
        />
        <path
          d="M50 275 L75 262.5 L75 137.5 L50 125 Z M325 275 L300 262.5 L300 137.5 L325 125 Z"
          fill="#ffd700"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}