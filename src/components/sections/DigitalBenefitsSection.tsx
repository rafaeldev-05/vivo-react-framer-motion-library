"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { digitalBenefits } from "@/data/landing";

export function DigitalBenefitsSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="beneficios" className="bg-white py-24 sm:py-32">
      <Container>
        <Reveal><SectionHeading eyebrow="Muito além da conexão" title="Benefícios para a sua vida digital." description="Soluções que ajudam a proteger, simplificar e aproveitar melhor cada momento conectado." align="center" /></Reveal>
        <StaggerContainer className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {digitalBenefits.map(({ title, description, icon: Icon }) => (
            <StaggerItem key={title}>
              <motion.article whileHover={reduceMotion ? undefined : { y: -6, boxShadow: "0 20px 55px rgba(75,21,122,.12)", borderColor: "rgb(196 181 253)" }} className="group h-full rounded-[26px] border border-purple-950/8 bg-[#fcfaff] p-7">
                <motion.span whileHover={reduceMotion ? undefined : { y: -3, rotate: -4 }} className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-[#eee2fa] to-[#fae5f3] text-[#7c25bc]"><Icon className="size-5" aria-hidden="true" /></motion.span>
                <h3 className="mt-6 text-lg font-bold text-[#2c1c36]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#74697b]">{description}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
