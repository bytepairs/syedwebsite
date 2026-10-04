import React from 'react';

/**
 * Reusable SectionBackground component.
 * Features extremely subtle architectural grid and fine technical lines with ultra-low opacity.
 * Never reduces content readability.
 */
export default function SectionBackground({ pattern = 'grid', className = '' }) {
  if (pattern === 'grid') {
    return (
      <div 
        aria-hidden="true" 
        className={`absolute inset-0 bg-grid-light opacity-60 pointer-events-none ${className}`}
      />
    );
  }

  if (pattern === 'radial') {
    return (
      <div 
        aria-hidden="true" 
        className={`absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.06),rgba(255,255,255,0))] pointer-events-none ${className}`}
      />
    );
  }

  return null;
}
