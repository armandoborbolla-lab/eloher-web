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
  const hL = "M 0 0 C -5 -8, -7 -22, 0 -38 C 7 -22, 5 -8, 0 0 Z";
  const hM = "M 0 0 C -4 -7, -6 -18, 0 -32 C 6 -18, 4 -7, 0 0 Z";
  const hS = "M 0 0 C -3 -5, -5 -14, 0 -25 C 5 -14, 3 -5, 0 0 Z";
  const hXS = "M 0 0 C -2.5 -4, -4 -10, 0 -18 C 4 -10, 2.5 -4, 0 0 Z";
  return (
    <svg width="34" height="34" viewBox="70 100 330 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 368 201 A 152 152 0 1 1 317 141" stroke="#D4A65F" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 243 212 C 276 182, 310 157, 342 138" stroke="#A5AD98" strokeWidth="6" strokeLinecap="round"/>
      <path d={hL} transform="translate(263 195) rotate(-62)" fill="#A5AD98"/>
      <path d={hL} transform="translate(263 195) rotate(25)" fill="#A5AD98"/>
      <path d={hM} transform="translate(283 178) rotate(-62)" fill="#A5AD98"/>
      <path d={hM} transform="translate(283 178) rotate(25)" fill="#A5AD98"/>
      <path d={hS} transform="translate(303 164) rotate(-60)" fill="#A5AD98"/>
      <path d={hS} transform="translate(303 164) rotate(28)" fill="#A5AD98"/>
      <path d={hXS} transform="translate(323 150) rotate(-58)" fill="#A5AD98"/>
      <path d={hXS} transform="translate(323 150) rotate(30)" fill="#A5AD98"/>
      <ellipse cx="218" cy="336" rx="78" ry="42" fill="#B8AA90"/>
      <ellipse cx="218" cy="328" rx="74" ry="30" fill="#D4C8B0"/>
      <ellipse cx="215" cy="320" rx="62" ry="17" fill="#E8DDD0"/>
      <ellipse cx="218" cy="278" rx="54" ry="30" fill="#B8AA90"/>
      <ellipse cx="218" cy="271" rx="50" ry="21" fill="#D4C8B0"/>
      <ellipse cx="215" cy="264" rx="40" ry="13" fill="#E8DDD0"/>
      <ellipse cx="217" cy="228" rx="32" ry="18" fill="#B8AA90"/>
      <ellipse cx="217" cy="222" rx="29" ry="13" fill="#D4C8B0"/>
      <ellipse cx="215" cy="217" rx="22" ry="8" fill="#E8DDD0"/>
      <path d="M 140 382 C 188 360, 255 360, 303 382" stroke="#A5AD98" strokeWidth="9" strokeLinecap="round"/>
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
