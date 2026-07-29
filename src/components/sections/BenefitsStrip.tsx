"use client";

import { motion, useReducedMotion } from "motion/react";
import { quickBenefits } from "@/data/landing";
import { Container } from "@/components/ui/Container";

export function BenefitsStrip() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="beneficios-rapidos" aria-label="Benefícios da conexão" className="relative z-10 bg-white py-7 shadow-[0_-12px_40px_rgba(33,14,55,.08)]">
      <Container>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.14 } } }} className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-0">
          {quickBenefits.map(({ label, icon: Icon }, index) => (
            <motion.div key={label} variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : 26 }, visible: { opacity: 1, y: 0, transition: { duration: .65 } } }} whileHover={reduceMotion ? undefined : { y: -4 }} className={`flex items-center gap-3 lg:justify-center ${index > 0 ? "lg:border-l lg:border-purple-950/10" : ""}`}>
              <motion.span whileHover={reduceMotion ? undefined : { scale: 1.1, rotate: -4 }} className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#f5edff] text-[#7020b4]"><Icon aria-hidden="true" className="size-5" /></motion.span>
              <span className="text-sm font-bold text-[#34283f]">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
