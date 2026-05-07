import type { TargetAndTransition, Transition } from 'motion/react';

export const pageEnter = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55 },
};

export const sectionReveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const easeOut = [0.22, 1, 0.36, 1] as const;

export const heroTextReveal = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: easeOut },
};

export const heroCtaReveal = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.75, delay: 0.18, ease: easeOut },
};

export const splitMediaReveal = {
  initial: { opacity: 0, scale: 1.06 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.95, ease: easeOut },
};

export const splitCopyReveal = {
  initial: { opacity: 0, x: 36 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.8, ease: easeOut },
};

export const statReveal = {
  initial: { opacity: 0, y: 20, scale: 0.96 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: easeOut },
};

export const cardFloatReveal = {
  initial: { opacity: 0, y: 28, scale: 0.97 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: easeOut },
};

export const productStageReveal = {
  initial: { opacity: 0, y: 34, scale: 0.94 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.8, ease: easeOut },
};

export const proofStripReveal = {
  initial: { opacity: 0, x: 24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: easeOut },
};

export const ctaGlowReveal = {
  initial: { opacity: 0, scale: 0.985 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.85, ease: easeOut },
};

type MotionLoop = {
  animate: TargetAndTransition;
  transition: Transition;
};

export const heroBackgroundLoop: MotionLoop = {
  animate: {
    scale: [1.02, 1.05, 1.03],
    x: [0, -10, 6, 0],
  },
  transition: {
    duration: 22,
    repeat: Infinity,
    repeatType: 'mirror',
    ease: 'easeInOut',
  },
};

export const heroParticleLoops: MotionLoop[] = [
  {
    animate: { x: [0, -18, 6, 0], y: [0, -26, 10, 0], opacity: [0.18, 0.44, 0.22, 0.18], scale: [1, 1.3, 0.94, 1] },
    transition: { duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
  },
  {
    animate: { x: [0, 12, -8, 0], y: [0, -18, 12, 0], opacity: [0.12, 0.34, 0.16, 0.12], scale: [1, 1.18, 0.92, 1] },
    transition: { duration: 12, delay: 0.7, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
  },
  {
    animate: { x: [0, -10, 14, 0], y: [0, -22, 8, 0], opacity: [0.14, 0.38, 0.18, 0.14], scale: [1, 1.22, 0.9, 1] },
    transition: { duration: 9, delay: 1.1, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
  },
  {
    animate: { x: [0, 16, -12, 0], y: [0, -28, 14, 0], opacity: [0.16, 0.42, 0.2, 0.16], scale: [1, 1.28, 0.88, 1] },
    transition: { duration: 11, delay: 0.3, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
  },
  {
    animate: { x: [0, -14, 10, 0], y: [0, -20, 6, 0], opacity: [0.1, 0.3, 0.14, 0.1], scale: [1, 1.16, 0.94, 1] },
    transition: { duration: 13, delay: 1.6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
  },
  {
    animate: { x: [0, 8, -6, 0], y: [0, -16, 10, 0], opacity: [0.08, 0.24, 0.12, 0.08], scale: [1, 1.14, 0.96, 1] },
    transition: { duration: 14, delay: 0.9, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
  },
];

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};
