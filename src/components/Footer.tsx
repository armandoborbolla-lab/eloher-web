import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#3a4238" }} className="text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <span
            className="text-3xl text-white italic"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
          >
            EloHer
          </span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
            Beauty &amp; Wellness Spa
          </span>
          <p className="text-sm mt-2 leading-relaxed max-w-xs text-white/60">
            Un refugio de paz y renovación donde cada visita es una experiencia
            transformadora para cuerpo y mente.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
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
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
            Contáctanos
          </h3>
          <p className="text-sm text-white/60 leading-relaxed">
            📍 Tu dirección, Ciudad, México
          </p>
          <a
            href="https://wa.me/521234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            💬 WhatsApp: (123) 456-7890
          </a>
          <a
            href="mailto:hola@eloher.com.mx"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            ✉️ hola@eloher.com.mx
          </a>
          <div className="mt-2 text-sm">
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-2">Horarios</p>
            <p className="text-white/60">Lun – Sáb: 9:00 am – 7:00 pm</p>
            <p className="text-white/60">Domingo: 10:00 am – 5:00 pm</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} EloHer Beauty & Wellness Spa. Todos los derechos reservados.</p>
          <p>Diseñado con amor en México 🌿</p>
        </div>
      </div>
    </footer>
  );
}
