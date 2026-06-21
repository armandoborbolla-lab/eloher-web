"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/servicios", label: "Servicios" },
  { href: "/#por-que", label: "Por qué Eloher" },
  { href: "/#espacio", label: "El Espacio" },
  { href: "/#opiniones", label: "Opiniones" },
];

/* Isotipo loto EloHer */
function LotusNav() {
  return (
    <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Destello superior */}
      <path d="M16 1 L16.6 3 L18 2 L16.8 3.8 L18.5 4.5 L16.6 4.5 L17 6.5 L16 5 L15 6.5 L15.4 4.5 L13.5 4.5 L15.2 3.8 L14 2 L15.4 3Z" fill="#D4AF7A" opacity="0.9"/>
      {/* Pétalo central */}
      <path d="M16 9 C16 9 12 13 12 17.5 C12 20.5 13.8 22.5 16 23.5 C18.2 22.5 20 20.5 20 17.5 C20 13 16 9 16 9Z" stroke="#D4AF7A" strokeWidth="0.8" fill="none"/>
      {/* Pétalos laterales internos */}
      <path d="M16 9 C16 9 9 12 9 18 C9 21 11.5 23 14 23.5" stroke="#D4AF7A" strokeWidth="0.8" fill="none"/>
      <path d="M16 9 C16 9 23 12 23 18 C23 21 20.5 23 18 23.5" stroke="#D4AF7A" strokeWidth="0.8" fill="none"/>
      {/* Pétalos externos */}
      <path d="M16 11 C16 11 5 14 5 21 C5 24.5 9 27 13 24" stroke="#D4AF7A" strokeWidth="0.8" fill="none"/>
      <path d="M16 11 C16 11 27 14 27 21 C27 24.5 23 27 19 24" stroke="#D4AF7A" strokeWidth="0.8" fill="none"/>
      {/* Base curva */}
      <path d="M8 26 Q16 30 24 26" stroke="#D4AF7A" strokeWidth="0.8" fill="none"/>
      {/* Punto esencia */}
      <circle cx="16" cy="17.5" r="1" fill="#D4AF7A" opacity="0.6"/>
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-olive/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LotusNav />
          <div className="flex flex-col leading-none">
            <span
              className="text-2xl md:text-3xl text-white leading-none"
              style={{ fontFamily: "var(--font-great-vibes), cursive" }}
            >
              EloHer
            </span>
            <span
              className="text-[8px] tracking-[0.3em] uppercase text-gold mt-0.5"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 300 }}
            >
              Beauty &amp; Wellness Spa
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[10px] tracking-[0.2em] uppercase text-white/75 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 400 }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="ml-2 px-5 py-2.5 bg-gold text-olive text-[10px] tracking-[0.15em] uppercase rounded-full hover:bg-gold-dark hover:text-white transition-colors duration-200 font-medium"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Reservar
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-olive-mid px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm tracking-[0.2em] uppercase text-white/75 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="mt-2 text-center px-5 py-3 bg-gold text-olive text-sm tracking-[0.15em] uppercase rounded-full font-medium"
            onClick={() => setOpen(false)}
          >
            Reservar
          </Link>
        </div>
      )}
    </header>
  );
}
