"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-cream border-b border-sage-pale sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span
            className="text-2xl md:text-3xl font-heading font-semibold text-sage-dark tracking-widest uppercase"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Eloher
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-light">
            Spa &amp; Bienestar
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm tracking-widest uppercase text-[#2a2a2a] hover:text-sage transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="ml-4 px-5 py-2 bg-sage text-white text-sm tracking-widest uppercase hover:bg-sage-dark transition-colors duration-200"
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
          <span
            className={`block w-6 h-0.5 bg-sage-dark transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-sage-dark transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-sage-dark transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-sage-pale px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-base tracking-widest uppercase text-[#2a2a2a] hover:text-sage transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="mt-2 text-center px-5 py-3 bg-sage text-white text-sm tracking-widest uppercase"
            onClick={() => setOpen(false)}
          >
            Reservar
          </Link>
        </div>
      )}
    </header>
  );
}
