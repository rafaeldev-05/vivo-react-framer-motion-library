import {
  BadgeCheck,
  BookOpenCheck,
  Bot,
  Gamepad2,
  Gauge,
  Gift,
  Headphones,
  HeartHandshake,
  HouseWifi,
  Layers3,
  MessageCircleMore,
  MonitorPlay,
  RadioTower,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Wifi,
  Zap,
} from "lucide-react";
import type { FaqItem, IconItem, Plan } from "@/types/landing";

export const navLinks = [
  { label: "Para você", href: "#inicio" },
  { label: "Planos", href: "#planos" },
  { label: "Celulares", href: "#celulares" },
  { label: "Vivo Fibra", href: "#fibra" },
  { label: "Vivo Total", href: "#total" },
  { label: "Benefícios", href: "#beneficios" },
];

export const quickBenefits = [
  { label: "5G de alta velocidade", icon: RadioTower },
  { label: "Internet fibra", icon: Wifi },
  { label: "Apps e entretenimento", icon: MonitorPlay },
  { label: "Atendimento digital", icon: MessageCircleMore },
];

export const plans: Plan[] = [
  {
    name: "Vivo Controle",
    description: "Previsibilidade para usar sua internet e seus apps todos os dias.",
    features: ["Internet para a rotina", "Apps selecionados", "Conta sob controle"],
  },
  {
    name: "Vivo Pós",
    description: "Mais liberdade e possibilidades para uma vida sempre conectada.",
    features: ["Mais dados para navegar", "Benefícios digitais", "Experiência completa"],
    highlighted: true,
  },
  {
    name: "Vivo Easy",
    description: "Uma experiência digital flexível, do seu jeito e no seu tempo.",
    features: ["Gestão pelo app", "Flexibilidade de uso", "Praticidade digital"],
  },
];

export const fiberBenefits: IconItem[] = [
  { title: "Alta velocidade", description: "Resposta rápida para tudo fluir.", icon: Gauge },
  { title: "Casa conectada", description: "Wi-Fi para vários dispositivos.", icon: HouseWifi },
  { title: "Diversão estável", description: "Streaming e jogos sem perder o ritmo.", icon: Gamepad2 },
  { title: "Instalação simples", description: "Uma jornada clara desde o início.", icon: BadgeCheck },
];

export const totalItems: IconItem[] = [
  { title: "Plano móvel", description: "Conexão para acompanhar você.", icon: Smartphone },
  { title: "Internet fibra", description: "Toda a casa em alta velocidade.", icon: Wifi },
  { title: "Streaming", description: "Conteúdo para todos os momentos.", icon: MonitorPlay },
  { title: "Tudo integrado", description: "Mais facilidade em uma experiência.", icon: Layers3 },
];

export const digitalBenefits: IconItem[] = [
  { title: "Segurança digital", description: "Mais proteção para navegar, comprar e compartilhar.", icon: ShieldCheck },
  { title: "Entretenimento", description: "Filmes, séries, música e jogos mais perto de você.", icon: Headphones },
  { title: "Produtividade", description: "Ferramentas para trabalhar e estudar de onde estiver.", icon: BookOpenCheck },
  { title: "Autoatendimento", description: "Resolva o que precisar de forma simples e digital.", icon: Bot },
  { title: "Vantagens exclusivas", description: "Experiências e benefícios pensados para sua rotina.", icon: Gift },
  { title: "Conexão em família", description: "Soluções para todos aproveitarem juntos.", icon: Users },
];

export const mobileHighlights = [
  { label: "Conexão rápida", icon: Zap },
  { label: "Cobertura ampliada", icon: RadioTower },
  { label: "Apps para aproveitar", icon: Sparkles },
];

export const faqs: FaqItem[] = [
  {
    question: "Como escolher o plano ideal?",
    answer: "Considere quanto você navega, quais apps fazem parte da sua rotina e quantas pessoas ou dispositivos usarão a conexão. Esta página é conceitual; consulte os canais oficiais para conhecer ofertas disponíveis.",
  },
  {
    question: "Qual é a diferença entre plano Controle e Pós?",
    answer: "Em geral, são modalidades com formas diferentes de organizar franquias, benefícios e cobrança. As características podem variar; compare sempre as condições atualizadas antes de contratar.",
  },
  {
    question: "Como verificar a disponibilidade da fibra?",
    answer: "A disponibilidade depende do endereço. Em uma jornada real, você informaria seu CEP e número nos canais oficiais para consultar cobertura e opções.",
  },
  {
    question: "Posso combinar celular e internet residencial?",
    answer: "Existem experiências que integram serviços móveis, fibra e entretenimento. A composição e elegibilidade dependem das opções disponíveis para cada cliente e região.",
  },
  {
    question: "Como funciona a ativação do 5G?",
    answer: "O acesso depende de cobertura, aparelho compatível, chip e plano elegível. Verifique as orientações oficiais específicas para o seu dispositivo e localidade.",
  },
  {
    question: "Onde acompanho meu consumo?",
    answer: "Normalmente, o acompanhamento é feito pelos canais digitais de autoatendimento. Esta demonstração não se conecta a dados ou contas reais.",
  },
];

export const footerGroups = [
  { title: "Institucional", links: ["Sobre a Vivo", "Sustentabilidade", "Carreiras", "Privacidade"] },
  { title: "Produtos", links: ["Planos móveis", "Vivo Fibra", "Celulares", "Vivo Total"] },
  { title: "Atendimento", links: ["Ajuda", "Meu Vivo", "Encontre uma loja", "Acessibilidade"] },
];

export const socialLinks = [
  { label: "Instagram", icon: HeartHandshake },
  { label: "Comunidade", icon: Users },
  { label: "Novidades", icon: Rocket },
  { label: "Atendimento", icon: Headphones },
];
