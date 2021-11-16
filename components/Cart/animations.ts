export const menuAnimations = {
  initial: {
    opacity: 0,
    x: 1000,
    scale: 0.3,
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: { opacity: 0, x: 200, scale: 0.5 },
};

export const backgroundAnimations = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: { opacity: 0 },
};
