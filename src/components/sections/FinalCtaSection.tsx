"use client";

import { motion, useReducedMotion } from "motion/react";
import { Headphones, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCtaSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="cta-final" className="bg-white py-16 sm:py-24">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[34px] bg-[linear-gradient(120deg,#421175_0%,#7724b5_48%,#d61a8c_100%)] px-6 py-16 text-center text-white shadow-[0_30px_90px_rgba(81,19,125,.25)] sm:px-12 sm:py-20">
          <motion.div animate={reduceMotion ? undefined : { x: [0, 18, 0], y: [0, -12, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-20 -top-24 -z-10 size-72 rounded-full bg-fuchsia-300/20 blur-3xl" />
          <motion.div animate={reduceMotion ? undefined : { x: [0, -16, 0], y: [0, 15, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-28 -right-16 -z-10 size-80 rounded-full bg-blue-300/20 blur-3xl" />
          <Sparkles className="mx-auto size-6 text-fuchsia-200" aria-hidden="true" />
          <h2 className="mx-auto mt-5 max-w-3xl text-balance text-3xl font-bold tracking-[-.045em] sm:text-5xl">Pronto para viver mais conectado?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">Encontre uma opção para o seu momento e aproveite tudo o que a tecnologia pode oferecer.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="#planos" variant="light" arrow>Ver planos</Button>
            <Button href="#faq" variant="secondary"><Headphones className="size-4" aria-hidden="true" /> Falar com atendimento</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
