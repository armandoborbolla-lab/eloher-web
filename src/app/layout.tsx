import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* Script elegante para el logotipo "EloHer" */
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

/* Serif elegante para títulos de sección */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

/* Sans-serif para cuerpo y navegación */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EloHer Beauty & Wellness Spa",
    template: "%s | EloHer Spa",
  },
  description:
    "EloHer Beauty & Wellness Spa — Belleza que se siente. Confianza que se nota. Masajes, faciales, tratamientos corporales y más en eloher.com.mx.",
  openGraph: {
    title: "EloHer Beauty & Wellness Spa",
    description: "Belleza que se siente. Confianza que se nota.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${greatVibes.variable} ${cormorant.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-warm-white text-[#2a2a2a]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
