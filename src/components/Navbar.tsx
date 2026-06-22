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
    <svg width="34" height="34" viewBox="80 100 360 330" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M125 335 A170 170 0 0 1 375 125" stroke="#D4A65F" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse cx="230" cy="205" rx="32" ry="20" fill="#E8DDD0"/>
      <ellipse cx="230" cy="265" rx="58" ry="32" fill="#D8CCBE"/>
      <ellipse cx="230" cy="340" rx="86" ry="44" fill="#B7B49F"/>
      <path d="M330 170 C355 230 352 305 310 375" stroke="#A5AD98" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse cx="342" cy="195" rx="18" ry="45" transform="rotate(-30 342 195)" fill="#A5AD98"/>
      <ellipse cx="370" cy="250" rx="18" ry="45" transform="rotate(25 370 250)" fill="#A5AD98"/>
      <ellipse cx="350" cy="315" rx="18" ry="45" transform="rotate(-28 350 315)" fill="#A5AD98"/>
      <ellipse cx="305" cy="360" rx="18" ry="42" transform="rotate(35 305 360)" fill="#A5AD98"/>
      <path d="M140 390 C205 365 270 365 340 390" stroke="#A5AD98" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
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
