import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable GlassCard Component (Directive #29)
 * Used selectively for:
 * - hero floating cards
 * - selected feature cards
 * - technology visual overlays
 * - process highlights
 * - CTA panels
 * - small visual UI layers
 */
export default function GlassCard({
  children,
  className = '',
  interactive = false,
  elevation = 'subtle', // 'subtle' | 'elevated' | 'flat'
  rounded = 'rounded-2xl',
  as = 'div',
  ...props
}) {
  const elevationStyles = {
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
      className={`${rounded} ${elevationStyles[elevation] || elevationStyles.subtle} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
}
