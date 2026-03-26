import React from 'react';

/**
 * BrushStroke component to add artistic underlines to headings.
 * It uses currentColor so it responds to Tailwind text colors (like text-brand-500).
 */
export default function BrushStroke({ variant = 1, className = "" }) {
  return (
    <svg 
      className={`absolute w-[105%] left-1/2 -translate-x-1/2 h-auto pointer-events-none ${className}`} 
      viewBox="0 0 300 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {variant === 1 && (
        <path 
          d="M5,20 Q150,-5 295,15 Q150,5 5,20 Z" 
          opacity="0.85" 
        />
      )}
      {variant === 2 && (
        <path 
          d="M10,18 C100,-2 200,28 290,12 C200,18 100,8 10,18 Z" 
          opacity="0.8" 
        />
      )}
      {variant === 3 && (
        <path 
          d="M15,22 Q150,2 285,18 Q150,10 15,22 Z" 
          opacity="0.75" 
        />
      )}
    </svg>
  );
}
