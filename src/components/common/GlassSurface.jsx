import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable GlassSurface Component
 * Adheres to Directive #09: selective, premium light-theme glass effect.
 * Features:
 * - Translucent white background (bg-white/80)
 * - Subtle backdrop blur (backdrop-blur-md)
 * - Thin architectural border (border-white/80 or border-slate-200/80)
 * - Soft shadow (shadow-subtle or shadow-elevated)
 * - Optional Framer Motion hover micro-interaction
 */
export default function GlassSurface({
  children,
  className = '',
  interactive = false,
  elevation = 'subtle', // 'subtle' | 'elevated' | 'flat'
  rounded = 'rounded-2xl',
  as = 'div',
  ...props
}) {
  const elevationClasses = {
    subtle: 'shadow-subtle border border-slate-200/80 bg-white/85 backdrop-blur-md',
    elevated: 'shadow-elevated border border-slate-200/90 bg-white/90 backdrop-blur-lg',
    flat: 'border border-slate-200/60 bg-white/70 backdrop-blur-sm'
  };

  const Component = interactive ? motion.div : as;

  const motionProps = interactive
    ? {
        whileHover: { y: -3, transition: { duration: 0.2, ease: 'easeOut' } },
        whileTap: { scale: 0.99 }
      }
    : {};

  return (
    <Component
      className={`${rounded} ${elevationClasses[elevation] || elevationClasses.subtle} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
}
