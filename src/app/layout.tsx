import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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

const OG_IMAGE = "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&fit=crop";
const SITE_URL = "https://eloher.com.mx";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EloHer Beauty & Wellness Spa — Monterrey",
    template: "%s | EloHer Spa Monterrey",
  },
  description:
    "Spa boutique en Monterrey, Real Cumbres. Faciales, masajes, tratamientos corporales y más. Reserva tu cita hoy — eloher.com.mx.",
  keywords: [
    "spa Monterrey",
    "spa Real Cumbres Monterrey",
    "masajes Monterrey",
    "facial Monterrey",
    "tratamientos corporales Monterrey",
    "spa relajación Monterrey",
    "beauty wellness spa",
    "EloHer spa",
    "spa cerca de mí Monterrey",
    "drenaje linfático Monterrey",
    "masaje aromaterapéutico Monterrey",
  ],
  authors: [{ name: "EloHer Beauty & Wellness Spa" }],
  creator: "EloHer Beauty & Wellness Spa",
  publisher: "EloHer Beauty & Wellness Spa",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "EloHer Beauty & Wellness Spa — Monterrey",
    description: "Spa boutique en Real Cumbres, Monterrey. Faciales, masajes y tratamientos corporales. Reserva tu cita.",
    url: SITE_URL,
    siteName: "EloHer Spa",
    locale: "es_MX",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 800, alt: "EloHer Beauty & Wellness Spa Monterrey" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EloHer Beauty & Wellness Spa — Monterrey",
    description: "Spa boutique en Real Cumbres, Monterrey. Faciales, masajes y tratamientos corporales.",
    images: [OG_IMAGE],
  },
  alternates: { canonical: SITE_URL },
  verification: { google: "PeMN-NhMm4CTNSdHTx1iu3gtHwn4xVC-GqLa48SvTFQ" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "EloHer Beauty & Wellness Spa",
  url: "https://eloher.com.mx",
  logo: "https://eloher.com.mx/logo-horizontal.png",
  image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&fit=crop",
  description: "Spa boutique en Real Cumbres, Monterrey. Faciales, masajes, tratamientos corporales y bienestar integral.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Real de Cumbres 458, 2° Piso",
    addressLocality: "Monterrey",
    addressRegion: "Nuevo León",
    postalCode: "64346",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.7234,
    longitude: -100.3694,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:30", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:00", closes: "18:00" },
  ],
  email: "hola@eloher.com.mx",
  priceRange: "$$",
  areaServed: { "@type": "City", name: "Monterrey" },
  hasMap: "https://maps.google.com/?q=Real+de+Cumbres+458,+Real+Cumbres,+64346+Monterrey,+N.L.",
  sameAs: ["https://eloher.com.mx", "https://www.instagram.com/eloher.spa"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
