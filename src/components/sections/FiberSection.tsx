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
  const copyRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLElement[]>([]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const section = sectionRef.current;
      const copy = copyRef.current;
      const image = imageRef.current;
      const progress = progressRef.current;
      const cards = cardRefs.current;

      if (!section || !copy || !image || !progress || cards.length === 0) return;

      const media = gsap.matchMedia();

      media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.set(image, { scale: 1, y: 0 });
        gsap.set(progress, { scaleX: 0, transformOrigin: "left center" });
        gsap.set(copy, { opacity: 0.78, y: 18 });
        gsap.set(cards, { opacity: 0, y: 48 });

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.max(window.innerHeight * 1.2, 900)}`,
            scrub: 1,
            pin: section,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to(image, { scale: 1.08, y: -14, duration: 1 }, 0)
          .to(progress, { scaleX: 1, duration: 1 }, 0)
          .to(copy, { opacity: 1, y: 0, duration: 0.35, ease: "power1.out" }, 0.05);

        [0.2, 0.35, 0.5, 0.65].forEach((position, index) => {
          timeline.to(cards[index], { opacity: 1, y: 0, duration: 0.22, ease: "power2.out" }, position);
        });
      });

      media.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.set(image, { scale: 1, y: 0 });
        gsap.set(progress, { scaleX: 0, transformOrigin: "left center" });
        gsap.set(cards, { opacity: 0, y: 40 });

        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
            invalidateOnRefresh: true,
          },
        })
          .to(image, { scale: 1.04, duration: 1.1, ease: "power2.out" }, 0)
          .to(progress, { scaleX: 1, duration: 0.9, ease: "power2.out" }, 0.05)
          .to(cards, { opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: "power3.out" }, 0.15);
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(image, { clearProps: "transform" });
        gsap.set(copy, { clearProps: "opacity,transform" });
        gsap.set(cards, { opacity: 1, y: 0 });
        gsap.set(progress, { scaleX: 1, transformOrigin: "left center" });
      });

      return () => media.revert();
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section id="fibra" ref={sectionRef} className="relative isolate overflow-hidden bg-[#160923] py-24 text-white sm:py-32">
      <div className="absolute right-0 top-0 -z-10 size-[500px] rounded-full bg-violet-600/20 blur-[120px]" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div ref={copyRef} className="fiber-copy">
            <SectionHeading eyebrow="Vivo Fibra" title="Uma casa inteira conectada." description="Internet para trabalhar, estudar, jogar, assistir e compartilhar com estabilidade em todos os ambientes." light />
            <a href="#cta-final" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-white px-6 text-sm font-bold text-[#4c147f] transition hover:-translate-y-0.5">Conheça a Vivo Fibra</a>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/35">
            <div className="relative aspect-[1.35] overflow-hidden">
              <Image ref={imageRef} src={landingImages.fiberRoom} alt="Sala conectada com internet fibra" fill sizes="(max-width: 1024px) 92vw, 48vw" loading="eager" className="fiber-image object-cover" onLoad={() => ScrollTrigger.refresh()} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160923]/55 to-transparent" />
            </div>
            <div ref={progressRef} className="fiber-progress absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400" />
          </div>
        </div>
        <div className="fiber-grid mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fiberBenefits.map(({ title, description, icon: Icon }, index) => (
            <article ref={(element) => { if (element) cardRefs.current[index] = element; }} key={title} className="fiber-card rounded-3xl border border-white/10 bg-white/[.065] p-6">
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
