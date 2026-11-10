import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { siteUrl } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Adão Elias — Consultor de TI, Suporte e Infraestrutura",
    template: "%s | Adão Elias",
  },
  description:
    "Currículo profissional de Adão José de Oliveira Elias: mais de 30 anos em TI, suporte e infraestrutura, 20 anos em coordenação pedagógica e experiência como instrutor de informática.",
  keywords: [
    "Adão Elias",
    "consultor de TI",
    "suporte e infraestrutura",
    "instrutor de informática",
    "coordenador pedagógico",
    "manutenção de computadores",
    "redes",
    "São Gonçalo",
    "Rio de Janeiro",
  ],
  authors: [{ name: "Adão José de Oliveira Elias" }],
  creator: "Adão José de Oliveira Elias",
  category: "technology",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: "/",
    siteName: "Adão Elias",
    title: "Adão Elias — Consultor de TI, Suporte e Infraestrutura",
    description:
      "Mais de 30 anos em TI, suporte e infraestrutura, coordenação pedagógica e formação de equipes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adão Elias — Consultor de TI, Suporte e Infraestrutura",
    description:
      "Mais de 30 anos em TI, suporte e infraestrutura, coordenação pedagógica e formação de equipes.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f4c5c",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
