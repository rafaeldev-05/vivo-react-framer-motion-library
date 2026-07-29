"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type { PointerEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Tilt3DProps {
  children: ReactNode;
  maxRotateX?: number;
  maxRotateY?: number;
  depth?: number;
  perspective?: number;
  disabled?: boolean;
  className?: string;
  innerClassName?: string;
  reflection?: boolean;
}

export function Tilt3D({
  children,
  maxRotateX = 7,
  maxRotateY = 9,
  depth = 70,
  perspective = 1200,
  disabled = false,
  className,
  innerClassName,
  reflection = true,
}: Tilt3DProps) {
  const reduceMotion = useReducedMotion();
  const [supportsTilt, setSupportsTilt] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const reflectionOpacity = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 150, damping: 22, mass: 0.45 });
  const smoothY = useSpring(pointerY, { stiffness: 150, damping: 22, mass: 0.45 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [maxRotateX, -maxRotateX]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-maxRotateY, maxRotateY]);
  const x = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const y = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);
  const scale = useTransform(
    [smoothX, smoothY],
    ([latestX, latestY]: number[]) => 1 + Math.min(Math.abs(latestX) + Math.abs(latestY), 1) * 0.012,
  );
  const reflectionX = useTransform(smoothX, [-0.5, 0.5], [25, 75]);
  const reflectionY = useTransform(smoothY, [-0.5, 0.5], [25, 75]);
  const reflectionBackground = useMotionTemplate`radial-gradient(circle at ${reflectionX}% ${reflectionY}%, rgba(255,255,255,.24), rgba(255,255,255,.07) 22%, transparent 55%)`;
  const isDisabled = disabled || reduceMotion || !supportsTilt;

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    const update = () => setSupportsTilt(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (isDisabled) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function resetTilt() {
    pointerX.set(0);
    pointerY.set(0);
    reflectionOpacity.set(0);
  }

  return (
    <div
      className={cn("relative", className)}
      style={{ perspective: `${perspective}px`, transformOrigin: "center" }}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => !isDisabled && reflectionOpacity.set(1)}
      onPointerLeave={resetTilt}
    >
      <motion.div
        className={cn("relative size-full", innerClassName)}
        style={
          isDisabled
            ? { transformStyle: "preserve-3d" }
            : { rotateX, rotateY, x, y, scale, transformStyle: "preserve-3d", willChange: "transform" }
        }
      >
        <div className="relative size-full" style={{ transform: `translateZ(${isDisabled ? 0 : depth}px)`, transformStyle: "preserve-3d" }}>
          {children}
        </div>
        {reflection && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[8%] z-20 rounded-[inherit]"
            style={{ background: reflectionBackground, opacity: isDisabled ? 0 : reflectionOpacity, transform: `translateZ(${depth + 4}px)` }}
          />
        )}
      </motion.div>
    </div>
  );
}
