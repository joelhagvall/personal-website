// Centralized animation configurations for Framer Motion

// Basic fade animations
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

// Stagger animations for lists
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Transition presets
export const TRANSITIONS = {
  default: { duration: 0.5 },
  fast: { duration: 0.3 },
  slow: { duration: 0.7 },
  spring: { type: "spring", stiffness: 300, damping: 30 },
  bounce: { type: "spring", stiffness: 400, damping: 10 },
} as const;

// Delay helper - creates transition with delay
export const withDelay = (delay: number, duration = 0.5) => ({
  duration,
  delay,
});

// Drag configuration for carousels
export const DRAG_CONFIG = {
  carousel: {
    dragConstraints: { left: -100, right: 100 },
    dragElastic: 0.2,
    dragTransition: { bounceStiffness: 600, bounceDamping: 20 },
  },
} as const;

// Card stack positions for media carousels
export const CARD_STACK_POSITIONS = [
  { x: 0, y: 0, zIndex: 5, rotateZ: -5 },
  { x: -40, y: 20, zIndex: 4, rotateZ: -3 },
  { x: -80, y: 40, zIndex: 3, rotateZ: -1 },
] as const;

// Hover animations
export const cardHover = {
  scale: 1.02,
  transition: { duration: 0.2 },
};

export const mediaCardHover = {
  x: 0,
  y: -20,
  zIndex: 10,
  rotateZ: 0,
  scale: 1.05,
  transition: { duration: 0.3 },
};

export const mediaCardTap = {
  cursor: "grabbing" as const,
  zIndex: 20,
  scale: 1.05,
  rotateZ: 0,
};
