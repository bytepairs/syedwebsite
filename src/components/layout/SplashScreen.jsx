import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Premium, light-theme architectural brand splash introduction.
 * Features 5-stage architectural sequence, spring-based emblem reveal,
 * traveling architectural accent line, and smooth exit fade into homepage.
 * Strictly respects prefers-reduced-motion and session storage bypass.
 */
export default function SplashScreen({ onFinish }) {
  const [stage, setStage] = useState(1);
  const [isExiting, setIsExiting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) {
      setReducedMotion(true);
      onFinish();
      return;
    }

    // Check session storage to avoid repeating on every page refresh if already seen
    try {
      if (sessionStorage.getItem('meeqat_splash_viewed')) {
        onFinish();
        return;
      }
    } catch (e) {
      // Fall through if storage is disabled
    }

    // 5-Stage Orchestrated Sequence (~2.3s total)
    // Stage 1 (0.0s - 0.4s): subtle architectural grid
    // Stage 2 (0.4s - 0.9s): emblem opacity + scale (0.94 -> 1)
    // Stage 3 (0.9s - 1.4s): wordmark horizontal reveal
    // Stage 4 (1.4s - 1.9s): traveling architectural line
    // Stage 5 (1.9s - 2.4s): smooth fade & scale out into homepage

    const t2 = setTimeout(() => setStage(2), 400);
    const t3 = setTimeout(() => setStage(3), 900);
    const t4 = setTimeout(() => setStage(4), 1400);
    const t5 = setTimeout(() => {
      setStage(5);
      setIsExiting(true);
    }, 1900);
    const tEnd = setTimeout(() => {
      try {
        sessionStorage.setItem('meeqat_splash_viewed', 'true');
      } catch (e) {}
      onFinish();
    }, 2400);

    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(tEnd);
    };
  }, [onFinish]);

  if (reducedMotion) return null;

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F5EFE1] select-none overflow-hidden"
        >
          {/* Stage 1: Subtle architectural background grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: stage >= 1 ? 0.4 : 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute inset-0 bg-grid-light pointer-events-none"
          />

          <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
            {/* Stage 2: Meeqat Emblem Container with spring easing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={stage >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
              transition={{ type: 'spring', damping: 20, stiffness: 180 }}
              className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 mb-6"
            >
              {/* Outer architectural framing box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={stage >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute inset-0 rounded-3xl border border-[#DFD3BD] shadow-md bg-white/95"
              />

              {/* Meeqat Emblem */}
              <img
                src="/assets/meeqat-emblem.png"
                alt="Meeqat Technologies"
                className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 object-contain"
                width={96}
                height={96}
              />
            </motion.div>

            {/* Stage 3: Wordmark horizontal reveal */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={stage >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5 mb-2.5"
            >
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display">
                MEEQAT
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold tracking-wider text-blue-600 font-display">
                TECHNOLOGIES
              </span>
            </motion.div>

            {/* Stage 4: Thin traveling architectural accent line */}
            <div className="relative w-56 h-0.5 bg-[#DFD3BD]/60 rounded-full overflow-hidden my-2">
              <motion.div
                initial={{ x: '-100%' }}
                animate={stage >= 4 ? { x: '100%' } : { x: '-100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="w-20 h-full bg-gradient-to-r from-transparent via-blue-600 to-transparent"
              />
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={stage >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-xs sm:text-sm text-slate-600 font-medium tracking-wide"
            >
              Enterprise IT, Cloud & Digital Systems
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
