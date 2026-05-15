export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const float = {
  animate: {
    y: [-12, 12, -12],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export const viewportOnce = { once: true, margin: "-80px" as const };
