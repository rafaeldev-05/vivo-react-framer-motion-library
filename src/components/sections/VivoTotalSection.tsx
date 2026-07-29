"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { totalItems } from "@/data/landing";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { landingImages } from "@/data/images";

export function VivoTotalSection() {
  const reduceMotion = useReducedMotion();
  const visualRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: visualRef, offset: ["start end", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const visualY = useTransform(smoothProgress, [0, 1], [30, -30]);
  return (
    <section id="total" className="overflow-hidden bg-[#f8f4fb] py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div ref={visualRef} style={reduceMotion ? undefined : { y: visualY }} initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: .9, x: -46, rotate: -2 }} whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .85, ease: [0.22, 1, .36, 1] }} className="relative min-h-[320px] sm:min-h-[460px]">
            <motion.div animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], x: [0, 12, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-[10%] rounded-full bg-gradient-to-br from-violet-300/35 via-blue-200/25 to-fuchsia-300/40 blur-[70px]" />
            <Image src={landingImages.vivoTotalDevices} alt="Ecossistema de celular, fibra e entretenimento integrado" fill sizes="(max-width: 1024px) 92vw, 48vw" className="relative object-contain drop-shadow-[0_35px_50px_rgba(59,18,91,.18)]" />
          </motion.div>
          <div>
            <SectionHeading eyebrow="Vivo Total" title="Celular, fibra e entretenimento juntos." description="Uma experiência integrada para conectar seus dispositivos, sua casa e todos os seus momentos." />
            <StaggerContainer className="mt-8 grid grid-cols-2 gap-3">
              {totalItems.map(({ title, description, icon: Icon }) => (
                <StaggerItem key={title} className="group rounded-2xl border border-purple-950/8 bg-white p-4 shadow-sm">
                  <motion.span whileHover={reduceMotion ? undefined : { y: -3, rotate: -5 }} className="inline-flex"><Icon className="size-5 text-[#8b2bd5]" aria-hidden="true" /></motion.span>
                  <h3 className="mt-3 text-sm font-bold text-[#302239]">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#7b6e81]">{description}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <motion.div whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { scale: .98 }} className="inline-block"><Button href="#cta-final" arrow className="mt-8">Monte sua experiência</Button></motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
