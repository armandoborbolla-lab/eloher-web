"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/servicios", label: "Servicios" },
  { href: "/#por-que", label: "Por qué Eloher" },
  { href: "/#espacio", label: "El Espacio" },
  { href: "/#opiniones", label: "Opiniones" },
];

/* Isotipo oficial EloHer */
function LotusNav() {
  return (
    <svg width="30" height="35" viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 56 50 A 32 32 0 1 0 56 106" stroke="#D4AF7A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M 45 70 C 54 57, 65 40, 72 22" stroke="#A7B499" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <ellipse cx="50" cy="62" rx="6" ry="2.2" transform="rotate(-55 50 62)" fill="#A7B499"/>
      <ellipse cx="57" cy="60" rx="6" ry="2.2" transform="rotate(-20 57 60)" fill="#A7B499"/>
      <ellipse cx="60" cy="47" rx="5.5" ry="2" transform="rotate(-50 60 47)" fill="#A7B499"/>
      <ellipse cx="67" cy="45" rx="5.5" ry="2" transform="rotate(-15 67 45)" fill="#A7B499"/>
      <ellipse cx="68" cy="33" rx="5" ry="1.9" transform="rotate(-48 68 33)" fill="#A7B499"/>
      <ellipse cx="74" cy="31" rx="5" ry="1.9" transform="rotate(-12 74 31)" fill="#A7B499"/>
      <ellipse cx="40" cy="95" rx="22" ry="8" fill="#c4b28c"/>
      <ellipse cx="40" cy="93.5" rx="21" ry="6" fill="#ddd0b0"/>
      <ellipse cx="40" cy="82" rx="16" ry="6.5" fill="#c4b28c"/>
      <ellipse cx="40" cy="80.5" rx="15" ry="5" fill="#ddd0b0"/>
      <ellipse cx="39" cy="71" rx="11" ry="5" fill="#c4b28c"/>
      <ellipse cx="39" cy="69.5" rx="10" ry="3.8" fill="#ddd0b0"/>
      <path d="M 14 103 Q 27 99.5, 40 103 Q 53 106.5, 66 103" stroke="#D4AF7A" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
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
              eloher
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
