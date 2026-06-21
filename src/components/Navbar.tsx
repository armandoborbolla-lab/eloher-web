"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/servicios", label: "Servicios" },
  { href: "/#por-que", label: "Por qué Eloher" },
  { href: "/#espacio", label: "El Espacio" },
  { href: "/#opiniones", label: "Opiniones" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-sage-hero/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          {/* Icono loto SVG inline */}
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
            <path d="M20 8 C20 8, 14 14, 14 20 C14 24 16.5 27 20 28 C23.5 27 26 24 26 20 C26 14 20 8 20 8Z" stroke="#c9a96e" strokeWidth="1" fill="none"/>
            <path d="M20 8 C20 8, 8 12, 8 22 C8 27 13 30 20 28" stroke="#c9a96e" strokeWidth="1" fill="none"/>
            <path d="M20 8 C20 8, 32 12, 32 22 C32 27 27 30 20 28" stroke="#c9a96e" strokeWidth="1" fill="none"/>
            <path d="M20 28 L20 36" stroke="#c9a96e" strokeWidth="1"/>
            <path d="M14 34 Q20 32 26 34" stroke="#c9a96e" strokeWidth="1" fill="none"/>
            <circle cx="20" cy="6" r="1.5" fill="#c9a96e"/>
          </svg>
          <span
            className="text-2xl md:text-3xl text-white"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400, fontStyle: "italic", letterSpacing: "0.02em" }}
          >
            EloHer
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[11px] tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors duration-200 font-light"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="ml-2 px-5 py-2.5 bg-gold text-white text-[11px] tracking-[0.15em] uppercase rounded-full hover:bg-gold-dark transition-colors duration-200"
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
        <div className="md:hidden bg-sage-dark px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="mt-2 text-center px-5 py-3 bg-gold text-white text-sm tracking-[0.15em] uppercase rounded-full"
            onClick={() => setOpen(false)}
          >
            Reservar
          </Link>
        </div>
      )}
    </header>
  );
}
