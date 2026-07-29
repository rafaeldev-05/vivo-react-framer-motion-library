"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function FloatingElement({ children, className, distance = 14 }: { children: ReactNode; className?: string; distance?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      animate={reduceMotion ? undefined : { y: [0, -distance, 0] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
