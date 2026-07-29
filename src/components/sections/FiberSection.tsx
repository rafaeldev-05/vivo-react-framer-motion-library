"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fiberBenefits } from "@/data/landing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { landingImages } from "@/data/images";

gsap.registerPlugin(ScrollTrigger);

export function FiberSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(".fiber-image", { scale: 1.08 }, { scale: 1, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top 80%", end: "bottom 30%", scrub: .8 } });
        gsap.from(".fiber-copy > *", { opacity: 0, y: 30, stagger: .1, duration: .7, ease: "power3.out", scrollTrigger: { trigger: ".fiber-copy", start: "top 76%" } });
        gsap.from(".fiber-card", { opacity: 0, y: 24, stagger: .1, duration: .65, ease: "power3.out", scrollTrigger: { trigger: ".fiber-grid", start: "top 84%" } });
        gsap.fromTo(".fiber-progress", { scaleX: 0 }, { scaleX: 1, transformOrigin: "left", ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top 75%", end: "bottom 35%", scrub: true } });
      });
    }, sectionRef);
    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section id="fibra" ref={sectionRef} className="relative isolate overflow-hidden bg-[#160923] py-24 text-white sm:py-32">
      <div className="absolute right-0 top-0 -z-10 size-[500px] rounded-full bg-violet-600/20 blur-[120px]" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="fiber-copy">
            <SectionHeading eyebrow="Vivo Fibra" title="Uma casa inteira conectada." description="Internet para trabalhar, estudar, jogar, assistir e compartilhar com estabilidade em todos os ambientes." light />
            <a href="#cta-final" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-white px-6 text-sm font-bold text-[#4c147f] transition hover:-translate-y-0.5">Conheça a Vivo Fibra</a>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/35">
            <div className="relative aspect-[1.35] overflow-hidden">
              <Image src={landingImages.fiberRoom} alt="Sala conectada com internet fibra" fill sizes="(max-width: 1024px) 92vw, 48vw" className="fiber-image object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160923]/55 to-transparent" />
            </div>
            <div className="fiber-progress absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400" />
          </div>
        </div>
        <div className="fiber-grid mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fiberBenefits.map(({ title, description, icon: Icon }) => (
            <article key={title} className="fiber-card rounded-3xl border border-white/10 bg-white/[.065] p-6">
              <span className="grid size-11 place-items-center rounded-2xl bg-white/10 text-fuchsia-300"><Icon className="size-5" aria-hidden="true" /></span>
              <h3 className="mt-5 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
