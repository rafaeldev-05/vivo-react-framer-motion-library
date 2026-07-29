"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { ChevronDown, RadioTower } from "lucide-react";
import type { MouseEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FloatingElement } from "@/components/motion/FloatingElement";
import { smoothEase } from "@/components/motion/variants";
import { landingImages } from "@/data/images";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(pointerY, { stiffness: 60, damping: 20 });
  const phoneX = useTransform(smoothX, [-0.5, 0.5], [-9, 9]);
  const phoneY = useTransform(smoothY, [-0.5, 0.5], [-7, 7]);
  const lightX = useTransform(smoothX, [-0.5, 0.5], [18, -18]);

  function handlePointerMove(event: MouseEvent<HTMLElement>) {
    if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  return (
    <section id="inicio" onMouseMove={handlePointerMove} className="relative isolate min-h-[780px] overflow-hidden bg-[#351066] pt-[76px] text-white lg:min-h-[820px]">
      <Image src={landingImages.heroBackground} alt="" fill priority sizes="100vw" className="absolute inset-0 -z-30 object-cover object-center opacity-70" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(38,7,76,.96)_0%,rgba(48,10,91,.8)_43%,rgba(65,8,103,.18)_75%)]" />
      <div className="absolute -left-32 top-24 -z-10 size-[420px] rounded-full bg-fuchsia-500/20 blur-[100px]" />
      <motion.div className="absolute inset-0 -z-10" style={reduceMotion ? undefined : { x: lightX }} aria-hidden="true">
        <motion.div
          className="absolute inset-0"
          animate={reduceMotion ? undefined : { y: [0, -10, 0], scale: [1, 1.025, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src={landingImages.heroLights} alt="" fill priority sizes="100vw" className="object-cover object-center" />
        </motion.div>
        <motion.div animate={reduceMotion ? undefined : { x: [-16, 20, -16], y: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute right-[5%] top-[20%] h-40 w-[55%] rounded-full bg-gradient-to-r from-violet-400/0 via-fuchsia-400/25 to-blue-400/0 blur-3xl" />
        <motion.div animate={reduceMotion ? undefined : { x: [12, -14, 12], scale: [1, 1.08, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[16%] right-[8%] h-24 w-[45%] rounded-full bg-pink-400/20 blur-3xl" />
      </motion.div>
      {[["18%", "22%"], ["46%", "82%"], ["72%", "12%"], ["84%", "72%"]].map(([top, left], index) => (
        <motion.span key={top} aria-hidden="true" className="absolute -z-10 size-1.5 rounded-full bg-white/70 shadow-[0_0_14px_4px_rgba(236,160,255,.45)]" style={{ top, left }} animate={reduceMotion ? undefined : { y: [0, index % 2 ? 10 : -12, 0], opacity: [.35, .9, .35] }} transition={{ duration: 3.4 + index * .55, repeat: Infinity, ease: "easeInOut" }} />
      ))}
      <Container className="grid min-h-[700px] items-center gap-4 py-14 lg:grid-cols-[.95fr_1.05fr] lg:py-0">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.11 } } }} className="relative z-10 text-center lg:text-left">
          <motion.div variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.55 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] backdrop-blur-sm">
            <RadioTower aria-hidden="true" className="size-4 text-fuchsia-300" /> Conecte-se ao que importa
          </motion.div>
          <motion.h1 variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : .12 } } }} className="text-balance text-4xl font-bold leading-[1.02] tracking-[-.055em] sm:text-6xl lg:text-[4.8rem]">
            <motion.span className="block" variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : 30 }, visible: { opacity: 1, y: 0, transition: { duration: .72, ease: smoothEase } } }}>Tudo o que conecta você,</motion.span>
            <motion.span className="block bg-gradient-to-r from-white via-fuchsia-100 to-pink-300 bg-clip-text text-transparent" variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : 30 }, visible: { opacity: 1, y: 0, transition: { duration: .72, ease: smoothEase } } }}>em um só lugar.</motion.span>
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg lg:mx-0">
            Celular, 5G, internet fibra e entretenimento para deixar sua rotina mais simples, rápida e conectada.
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button href="#planos" arrow>Conheça os planos</Button>
            <Button href="#total" variant="secondary">Ver ofertas</Button>
          </motion.div>
          <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="mt-7 text-sm text-white/55">
            5G, fibra e serviços digitais para todos os momentos.
          </motion.p>
        </motion.div>
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.86, x: 70, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
          transition={{ duration: reduceMotion ? 0.2 : .95, delay: reduceMotion ? 0 : 0.3, ease: smoothEase }}
          style={reduceMotion ? undefined : { x: phoneX, y: phoneY }}
          className="relative mx-auto h-[365px] w-full max-w-[480px] sm:h-[450px] lg:h-[650px] lg:max-w-[590px]"
        >
          <div className="absolute left-1/2 top-1/2 size-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400/25 blur-[70px]" />
          <FloatingElement distance={14} className="relative size-full">
            <Image src={landingImages.heroPhone} alt="Smartphone exibindo uma experiência digital conectada" fill priority sizes="(max-width: 768px) 90vw, 45vw" className="object-contain drop-shadow-[0_35px_60px_rgba(17,0,35,.55)]" />
          </FloatingElement>
        </motion.div>
      </Container>
      <a href="#beneficios-rapidos" aria-label="Ir para os benefícios" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-[.2em] text-white/55 sm:flex">
        Explore <motion.span animate={reduceMotion ? undefined : { y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}><ChevronDown className="size-4" /></motion.span>
      </a>
    </section>
  );
}
