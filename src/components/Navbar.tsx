"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/servicios", label: "Servicios" },
  { href: "/#por-que", label: "Por qué Eloher" },
  { href: "/#espacio", label: "El Espacio" },
  { href: "/#opiniones", label: "Opiniones" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome;

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-olive/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/isotipo.png" alt="EloHer" width={52} height={52} className="object-contain" />
          <div className="flex flex-col leading-none">
            <Image src="/logo-eloher.png" alt="eloher" width={110} height={36} className="object-contain" />
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
