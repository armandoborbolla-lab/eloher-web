import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#2e3928" }} className="text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <Image src="/logo-horizontal.png" alt="EloHer" width={160} height={52} className="object-contain" />
          <div className="h-px w-10 bg-gold/30 my-1" />
          <p className="text-sm leading-relaxed text-white/55 max-w-xs">
            Un refugio de paz y renovación donde cada visita transforma tu cuerpo, mente y espíritu.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <h3
            className="text-[9px] tracking-[0.35em] uppercase text-gold mb-2"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Navegación
          </h3>
          {[
            { href: "/", label: "Inicio" },
            { href: "/servicios", label: "Servicios" },
            { href: "/#por-que", label: "Por qué Eloher" },
            { href: "/contacto", label: "Contacto" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-white/55 hover:text-white transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h3
            className="text-[9px] tracking-[0.35em] uppercase text-gold mb-2"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Contáctanos
          </h3>
          <a
            href="https://maps.google.com/?q=25.754442629859884,-100.40324033567093"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/55 hover:text-white transition-colors leading-relaxed"
          >
            📍 Real de Cumbres 458, Real Cumbres<br />
            Monterrey, N.L. — 2° Piso
          </a>
          <a
            href="https://wa.me/521234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/55 hover:text-white transition-colors"
          >
            💬 WhatsApp: (123) 456-7890
          </a>
          <a
            href="mailto:hola@eloher.com.mx"
            className="text-sm text-white/55 hover:text-white transition-colors"
          >
            ✉️ hola@eloher.com.mx
          </a>
          <a
            href="https://www.instagram.com/eloher.spa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
            @eloher.spa
          </a>
          <div className="mt-2">
            <p
              className="text-[9px] tracking-[0.3em] uppercase text-gold mb-2"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Horarios
            </p>
            <p className="text-sm text-white/55">Lun – Vie: 8:30 am – 7:00 pm</p>
            <p className="text-sm text-white/55">Sábado: 10:00 am – 6:00 pm</p>
            <p className="text-sm text-white/55">Domingo: Bajo reservación</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} EloHer Beauty & Wellness Spa. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/35">eloher.com.mx</p>
        </div>
      </div>
    </footer>
  );
}
