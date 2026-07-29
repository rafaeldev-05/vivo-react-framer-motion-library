"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { Camera, Gamepad2, Smartphone, Star } from "lucide-react";
import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { landingImages } from "@/data/images";

const filters = [
  { label: "Destaques", icon: Star },
  { label: "Mais procurados", icon: Smartphone },
  { label: "Para fotografar", icon: Camera },
  { label: "Para jogar", icon: Gamepad2 },
];

export function SmartphonesSection() {
  const [active, setActive] = useState("Destaques");
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 95, damping: 24, mass: .25 });
  const imageY = useTransform(smoothProgress, [0, 1], [55, -55]);
  const rotate = useTransform(smoothProgress, [0, 1], [-1.4, 1.4]);
  const scale = useTransform(smoothProgress, [0, .55, 1], [.92, 1, .97]);
  const opacity = useTransform(smoothProgress, [0, .18, .82, 1], [.45, 1, 1, .65]);

  return (
    <section id="celulares" ref={sectionRef} className="overflow-hidden bg-white py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionHeading title="Seu próximo smartphone está aqui." description="Modelos para trabalhar, criar, jogar e aproveitar tudo o que uma conexão rápida oferece." />
            <div role="group" aria-label="Categorias de smartphones" className="mt-8 grid grid-cols-2 gap-3">
              {filters.map(({ label, icon: Icon }) => (
                <motion.button layout key={label} type="button" aria-pressed={active === label} onClick={() => setActive(label)} whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { scale: .98 }} className={`relative flex min-h-14 items-center gap-3 overflow-hidden rounded-2xl border px-4 text-left text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 ${active === label ? "border-[#8227c4] text-[#651b9c]" : "border-purple-950/10 bg-white text-[#62566b] hover:border-purple-400"}`}>
                  {active === label && <motion.span layoutId="active-phone-filter" className="absolute inset-0 -z-10 bg-[#f3e9fb]" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
                  <Icon aria-hidden="true" className="size-4" /> {label}
                </motion.button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.p key={active} initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }} transition={{ duration: .24 }} className="mt-5 text-sm text-[#817587]">Explore a categoria <strong className="text-[#6d1fa6]">{active.toLowerCase()}</strong> em uma experiência de loja completa.</motion.p>
            </AnimatePresence>
          </div>
          <motion.div style={reduceMotion ? undefined : { y: imageY, rotate, scale, opacity }} initial={reduceMotion ? { opacity: 0 } : undefined} whileInView={reduceMotion ? { opacity: 1 } : undefined} viewport={{ once: true, amount: .25 }} className="relative min-h-[310px] sm:min-h-[450px]">
            <motion.div style={reduceMotion ? undefined : { y: imageY }} className="absolute inset-[15%] rounded-full bg-gradient-to-r from-violet-400/30 via-blue-300/25 to-fuchsia-300/35 blur-[70px]" />
            <Image src={landingImages.floatingPhones} alt="Seleção de smartphones em destaque" fill sizes="(max-width: 1024px) 92vw, 56vw" className="relative object-contain drop-shadow-[0_35px_45px_rgba(67,24,97,.2)]" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
