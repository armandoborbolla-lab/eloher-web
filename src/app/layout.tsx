import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Spa Eloher | Bienestar y Relajación",
    template: "%s | Spa Eloher",
  },
  description:
    "Spa Eloher — un refugio de paz y bienestar. Masajes, faciales, tratamientos corporales y más. Reserva tu experiencia en eloher.com.mx.",
  openGraph: {
    title: "Spa Eloher",
    description: "Tu refugio de bienestar y relajación.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${lato.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-[#2a2a2a]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
