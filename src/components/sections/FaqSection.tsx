"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/landing";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();
  return (
    <section id="faq" className="bg-[#f8f4fb] py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="Dúvidas frequentes" title="Informação clara para escolher melhor." description="Respostas gerais para ajudar você a explorar as possibilidades." />
          <p className="mt-6 text-sm leading-6 text-[#817587]">Para detalhes comerciais e técnicos, consulte sempre os canais oficiais.</p>
        </div>
        <div className="divide-y divide-purple-950/10 border-y border-purple-950/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            return (
              <div key={faq.question}>
                <h3>
                  <button type="button" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={answerId} className="flex min-h-[76px] w-full items-center justify-between gap-5 py-4 text-left font-bold text-[#302239] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500">
                    {faq.question}
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-[#7e25bd]"><Plus className="size-4" aria-hidden="true" /></motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={answerId} role="region" initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0, y: -6 }} animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1, y: 0 }} exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0, y: -4 }} transition={{ duration: reduceMotion ? .1 : .32 }} className="overflow-hidden">
                      <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-[#74697b]">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
