import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sage-dark text-sage-pale">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <span
            className="text-2xl tracking-widest uppercase text-white"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Eloher
          </span>
          <span className="text-xs tracking-[0.3em] uppercase text-gold">
            Spa &amp; Bienestar
          </span>
          <p className="text-sm text-sage-light mt-2 leading-relaxed max-w-xs">
            Un refugio de paz y renovación, donde cada visita es una experiencia
            transformadora para cuerpo y mente.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <h3
            className="text-xs tracking-[0.25em] uppercase text-gold mb-2"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Navegación
          </h3>
          {[
            { href: "/", label: "Inicio" },
            { href: "/servicios", label: "Servicios" },
            { href: "/contacto", label: "Contacto" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-sage-light hover:text-white transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h3
            className="text-xs tracking-[0.25em] uppercase text-gold mb-2"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Contáctanos
          </h3>
          <p className="text-sm text-sage-light leading-relaxed">
            📍 Tu dirección, Ciudad, México
          </p>
          <a
            href="tel:+521234567890"
            className="text-sm text-sage-light hover:text-white transition-colors"
          >
            📞 (123) 456-7890
          </a>
          <a
            href="mailto:hola@eloher.com.mx"
            className="text-sm text-sage-light hover:text-white transition-colors"
          >
            ✉️ hola@eloher.com.mx
          </a>
          <div className="mt-2 text-sm text-sage-light">
            <p className="font-semibold text-white mb-1">Horarios:</p>
            <p>Lun – Sáb: 9:00 am – 7:00 pm</p>
            <p>Domingo: 10:00 am – 5:00 pm</p>
          </div>
        </div>
      </div>

      <div className="border-t border-sage-mid">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-sage-light">
          <p>© {new Date().getFullYear()} Spa Eloher. Todos los derechos reservados.</p>
          <p>
            Diseñado con amor en México 🌿
          </p>
        </div>
      </div>
    </footer>
  );
}
