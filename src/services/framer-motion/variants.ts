import { Variants } from 'framer-motion';

export const ScaleVariants: Variants = {
  init: {
    opacity: 0,
    scale: 0.75,
  },

  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },

  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const HeightVariants: Variants = {
  hide: {
    opacity: 0,
    y: 10,
  },

  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: 'easeInOut',
    },
  }),
};
