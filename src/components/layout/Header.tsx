"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/landing";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${scrolled || open ? "border-black/5 text-[#32104f]" : "border-transparent text-white"}`}
      animate={{ backgroundColor: scrolled || open ? "rgba(255,255,255,.92)" : "rgba(255,255,255,0)", boxShadow: scrolled || open ? "0 8px 35px rgba(49,16,79,.08)" : "0 0 0 rgba(0,0,0,0)" }}
      transition={{ duration: reduceMotion ? 0.1 : 0.35 }}
    >
      <Container className="flex h-[76px] items-center justify-between">
        <a href="#inicio" className="relative z-10 text-3xl font-black tracking-[-.08em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-400" aria-label="Vivo, início">
          vivo<span className="text-[#ff35a8]">.</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[13px] font-semibold opacity-80 transition hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-400">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#planos" className="hidden min-h-11 items-center rounded-full bg-[#ff35a8] px-5 text-sm font-bold text-white shadow-lg shadow-fuchsia-950/15 transition hover:-translate-y-0.5 hover:bg-[#ed178f] lg:inline-flex">
          Confira os planos
        </a>
        <button
          type="button"
          className="relative z-10 grid size-11 place-items-center rounded-full border border-current/15 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Navegação mobile"
            className="absolute inset-x-0 top-full border-t border-black/5 bg-white px-5 pb-7 pt-3 text-[#32104f] shadow-2xl lg:hidden"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -14, scale: .98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: .985 }}
            transition={{ duration: reduceMotion ? 0.1 : 0.25 }}
          >
            <Container className="flex flex-col px-0">
              {navLinks.map((link, index) => (
                <motion.a key={link.href} href={link.href} onClick={() => setOpen(false)} initial={reduceMotion ? undefined : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : .05 + index * .045 }} className="border-b border-purple-950/8 py-4 text-base font-semibold">
                  {link.label}
                </motion.a>
              ))}
              <a href="#planos" onClick={() => setOpen(false)} className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-[#ff35a8] px-5 font-bold text-white">
                Confira os planos
              </a>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
