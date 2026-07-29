import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Vivo Conecta | Tecnologia para todos os momentos",
  description: "Uma experiência conceitual sobre conexão móvel, 5G, internet fibra e entretenimento.",
  openGraph: {
    title: "Vivo Conecta",
    description: "Celular, 5G, fibra e entretenimento em uma experiência integrada.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#351066",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={manrope.variable}><body>{children}</body></html>;
}
