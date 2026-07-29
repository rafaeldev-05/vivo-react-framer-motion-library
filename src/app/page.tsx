import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BenefitsStrip } from "@/components/sections/BenefitsStrip";
import { DigitalBenefitsSection } from "@/components/sections/DigitalBenefitsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FiberSection } from "@/components/sections/FiberSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MobilePlansSection } from "@/components/sections/MobilePlansSection";
import { SmartphonesSection } from "@/components/sections/SmartphonesSection";
import { VivoTotalSection } from "@/components/sections/VivoTotalSection";

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-full bg-white px-5 py-3 font-bold text-[#4c147f] shadow-xl transition focus:translate-y-0">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <HeroSection />
        <BenefitsStrip />
        <MobilePlansSection />
        <SmartphonesSection />
        <FiberSection />
        <VivoTotalSection />
        <DigitalBenefitsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
