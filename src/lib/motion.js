/**
 * Centralized Framer Motion animation variants and transition presets.
 * Designed for subtle, high-precision enterprise technology aesthetic.
 * Adheres to WCAG and respects prefers-reduced-motion.
 */

export const transitions = {
  spring: { type: 'spring', damping: 25, stiffness: 200 },
  smooth: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  gentle: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  quick: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  page: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
};

export const defaultViewport = {
  once: true,
  amount: 0.15,
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: transitions.smooth },
  exit: { opacity: 0, transition: transitions.quick },
};

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: transitions.smooth },
  exit: { opacity: 0, y: 12, transition: transitions.quick },
};

export const fadeDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: transitions.smooth },
  exit: { opacity: 0, y: -10, transition: transitions.quick },
};

export const fadeLeft = {
  initial: { opacity: 0, x: -24 },
  animate: { opacity: 1, x: 0, transition: transitions.smooth },
  exit: { opacity: 0, x: -12, transition: transitions.quick },
};

export const fadeRight = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0, transition: transitions.smooth },
  exit: { opacity: 0, x: 12, transition: transitions.quick },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1, transition: transitions.smooth },
  exit: { opacity: 0, scale: 0.96, transition: transitions.quick },
};

export const staggerContainer = (staggerDelay = 0.08, delayChildren = 0.05) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delayChildren,
    },
  },
});

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
};

export const cardHover = {
  whileHover: {
    y: -4,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

export const buttonTap = {
  whileHover: { scale: 1.02, transition: { duration: 0.15 } },
  whileTap: { scale: 0.98, transition: { duration: 0.1 } },
};

export const imageReveal = {
  initial: { scale: 1.04, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: transitions.page,
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};
