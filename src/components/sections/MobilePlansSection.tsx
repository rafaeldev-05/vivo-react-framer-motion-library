"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { mobileHighlights, plans } from "@/data/landing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { landingImages } from "@/data/images";

export function MobilePlansSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="planos" className="overflow-hidden bg-[#fbf9fd] py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left">
            <SectionHeading eyebrow="Vivo 5G" title="Mais velocidade para acompanhar o seu ritmo." description="Navegue, compartilhe, trabalhe e assista de onde estiver com uma conexão preparada para todos os seus momentos." />
            <StaggerContainer className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {mobileHighlights.map(({ label, icon: Icon }) => (
                <StaggerItem key={label} className="flex items-center gap-3 rounded-2xl border border-purple-950/8 bg-white p-3 text-sm font-semibold text-[#44364e]">
                  <Icon className="size-5 text-[#8b2bd5]" aria-hidden="true" /> {label}
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Reveal>
          <Reveal direction="right" delay={0.12} className="relative min-h-[300px] sm:min-h-[400px]">
            <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-violet-300/40 to-fuchsia-300/35 blur-3xl" />
            <Image src={landingImages.mobilePerson} alt="Pessoa usando smartphone conectado ao 5G" fill sizes="(max-width: 1024px) 90vw, 48vw" className="relative object-contain" />
          </Reveal>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : .13 } } }} className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : 28 }, visible: { opacity: 1, y: 0, transition: { duration: .68 } } }}
              whileHover={reduceMotion ? undefined : plan.highlighted ? { y: -7, rotateX: 1.5, rotateY: -1.5, boxShadow: "0 30px 80px rgba(76,20,127,.34)" } : { y: -6 }}
              style={plan.highlighted && !reduceMotion ? { transformPerspective: 1100, transformStyle: "preserve-3d" } : undefined}
              className={`relative flex min-h-[360px] flex-col overflow-hidden rounded-[28px] border p-7 transition-colors duration-300 ${plan.highlighted ? "border-[#8f33d8] bg-[#4c147f] text-white shadow-[0_25px_70px_rgba(76,20,127,.25)]" : "border-purple-950/10 bg-white text-[#271834] hover:border-[#aa58e5]"}`}
            >
              {plan.highlighted && <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(255,255,255,.14),transparent_35%)]" />}
              {plan.highlighted && <span className="absolute right-5 top-5 rounded-full bg-[#ff35a8] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider">Mais escolhido</span>}
              <p className={`text-xs font-extrabold uppercase tracking-[.2em] ${plan.highlighted ? "text-fuchsia-200" : "text-[#8b2bd5]"}`}>Plano móvel</p>
              <h3 className="mt-5 text-2xl font-bold">{plan.name}</h3>
              <p className={`mt-3 text-sm leading-6 ${plan.highlighted ? "text-white/68" : "text-[#74697b]"}`}>{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => <li key={feature} className="flex items-center gap-3 text-sm font-semibold"><span className={`grid size-6 place-items-center rounded-full ${plan.highlighted ? "bg-white/12" : "bg-[#f3e9fb] text-[#7924ba]"}`}><Check className="size-3.5" /></span>{feature}</li>)}
              </ul>
              <motion.a href="#cta-final" whileHover={reduceMotion ? undefined : { scale: 1.025 }} whileTap={reduceMotion ? undefined : { scale: .97 }} className={`mt-auto flex min-h-12 items-center justify-between rounded-full px-5 text-sm font-bold transition ${plan.highlighted ? "bg-white text-[#4c147f] hover:bg-fuchsia-50" : "bg-[#f2e8fa] text-[#6d1fa6] hover:bg-[#ead8f8]"}`}>
                Quero conhecer <ArrowRight className="size-4" aria-hidden="true" />
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
        <p className="mt-6 text-center text-xs text-[#8a808e]">Planos e benefícios apresentados apenas para fins demonstrativos.</p>
      </Container>
    </section>
  );
}
