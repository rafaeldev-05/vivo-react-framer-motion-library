"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { fadeLeft, fadeRight, fadeUp, scaleIn, smoothEase } from "./variants";

export function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.2,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  direction?: "up" | "left" | "right" | "scale";
}) {
  const reduceMotion = useReducedMotion();
  const variants = direction === "left" ? fadeLeft : direction === "right" ? fadeRight : direction === "scale" ? scaleIn : fadeUp;
  return (
    <motion.div
      className={cn(className)}
      variants={reduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ duration: reduceMotion ? 0.15 : 0.7, delay: reduceMotion ? 0 : delay, ease: smoothEase }}
    >
      {children}
    </motion.div>
  );
}
