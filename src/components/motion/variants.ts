import type { Variants } from "motion/react";

export const smoothEase = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: smoothEase } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -42 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: smoothEase } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 42 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: smoothEase } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: smoothEase } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.08, staggerChildren: 0.13 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: smoothEase } },
};
