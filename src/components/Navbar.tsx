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
    <svg width="34" height="34" viewBox="75 100 315 305" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 360 175 A 152 152 0 1 1 311 130" stroke="#D4A65F" strokeWidth="7" strokeLinecap="round"/>
      <path d="M 245 215 C 278 185, 315 155, 335 132" stroke="#A5AD98" strokeWidth="7" strokeLinecap="round"/>
      <ellipse cx="250" cy="183" rx="7" ry="38" transform="rotate(-70 250 183)" fill="#A5AD98"/>
      <ellipse cx="277" cy="186" rx="7" ry="38" transform="rotate(-18 277 186)" fill="#A5AD98"/>
      <ellipse cx="275" cy="160" rx="6.5" ry="34" transform="rotate(-68 275 160)" fill="#A5AD98"/>
      <ellipse cx="303" cy="162" rx="6.5" ry="34" transform="rotate(-16 303 162)" fill="#A5AD98"/>
      <ellipse cx="298" cy="140" rx="6" ry="29" transform="rotate(-65 298 140)" fill="#A5AD98"/>
      <ellipse cx="324" cy="143" rx="6" ry="29" transform="rotate(-14 324 143)" fill="#A5AD98"/>
      <ellipse cx="322" cy="128" rx="5" ry="23" transform="rotate(-60 322 128)" fill="#A5AD98"/>
      <ellipse cx="220" cy="230" rx="30" ry="18" fill="#E8DDD0"/>
      <ellipse cx="220" cy="273" rx="52" ry="28" fill="#D8CCBE"/>
      <ellipse cx="220" cy="332" rx="78" ry="40" fill="#B7B49F"/>
      <path d="M 142 375 C 192 355, 258 355, 308 375" stroke="#A5AD98" strokeWidth="9" strokeLinecap="round"/>
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
