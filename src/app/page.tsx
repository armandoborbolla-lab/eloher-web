import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spa Eloher | Beauty & Wellness Spa",
};

const featuredServices = [
  {
    icon: "✦",
    name: "Masajes Terapéuticos",
    description:
      "Desde el clásico masaje sueco hasta técnicas de tejido profundo y piedras calientes. Cada sesión personalizada para ti.",
    href: "/servicios#masajes",
  },
  {
    icon: "✦",
    name: "Faciales de Lujo",
    description:
      "Tratamientos faciales con ingredientes de primera calidad que hidratan, rejuvenecen y devuelven el brillo natural.",
    href: "/servicios#faciales",
  },
  {
    icon: "✦",
    name: "Rituales Corporales",
    description:
      "Envolturas, exfoliaciones y aromaterapia que nutren tu piel y calman tu mente en una experiencia integral.",
    href: "/servicios#corporales",
  },
];

const reasons = [
  { title: "Ambiente Exclusivo", desc: "Espacios diseñados para despertar tus sentidos y llevarte a un estado de calma profunda." },
  { title: "Expertos Certificados", desc: "Terapeutas certificados en técnicas nacionales e internacionales." },
  { title: "Productos Premium", desc: "Cosméticos de alta gama, naturales y libres de parabenos." },
  { title: "Experiencia Personalizada", desc: "Cada tratamiento se adapta a tus necesidades y preferencias." },
];

/* Icono loto SVG reutilizable */
function LotusIcon({ size = 56, color = "#c9a96e" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8 C20 8, 14 14, 14 20 C14 24 16.5 27 20 28 C23.5 27 26 24 26 20 C26 14 20 8 20 8Z" stroke={color} strokeWidth="1" fill="none"/>
      <path d="M20 8 C20 8, 8 12, 8 22 C8 27 13 30 20 28" stroke={color} strokeWidth="1" fill="none"/>
      <path d="M20 8 C20 8, 32 12, 32 22 C32 27 27 30 20 28" stroke={color} strokeWidth="1" fill="none"/>
      <path d="M20 28 L20 36" stroke={color} strokeWidth="1"/>
      <path d="M14 34 Q20 32 26 34" stroke={color} strokeWidth="1" fill="none"/>
      <circle cx="20" cy="6" r="1.5" fill={color}/>
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20"
        style={{
          background: "linear-gradient(160deg, #4a5445 0%, #6b7864 40%, #717d69 100%)",
        }}
      >
        {/* Textura sutil */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 70%, #c9a96e 0%, transparent 60%), radial-gradient(circle at 70% 30%, #ffffff 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto pt-20">
          {/* Icono */}
          <div className="flex justify-center mb-6">
            <LotusIcon size={64} color="#c9a96e" />
          </div>

          {/* Nombre en script */}
          <h1
            className="text-7xl md:text-9xl text-white mb-3 leading-none"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 400,
              fontStyle: "italic",
              letterSpacing: "-0.01em",
            }}
          >
            EloHer
          </h1>

          {/* Subtítulo marca */}
          <p className="text-[11px] tracking-[0.5em] uppercase text-gold mb-8 font-light">
            Beauty &amp; Wellness Spa
          </p>

          {/* Tagline */}
          <p
            className="text-xl md:text-2xl text-white/90 italic mb-12 font-light"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Belleza que se siente. Confianza que se nota.
          </p>

          {/* CTAs pill */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/521234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-white text-[11px] tracking-[0.2em] uppercase rounded-full hover:bg-gold-dark transition-colors duration-300"
            >
              <span>💬</span> Reserva por WhatsApp
            </a>
            <Link
              href="/servicios"
              className="px-8 py-3.5 border border-white/60 text-white text-[11px] tracking-[0.2em] uppercase rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              Ver Servicios
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="mt-16 flex flex-col items-center gap-2 opacity-60">
            <p className="text-[10px] tracking-[0.4em] uppercase text-white">Descubre</p>
            <div className="w-px h-8 bg-white/60" />
          </div>
        </div>

        {/* Fade a cream */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* ── Filosofía ── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
            Nuestra Filosofía
          </p>
          <h2
            className="text-4xl md:text-5xl text-sage-dark mb-6"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            El arte de cuidarte
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="text-base md:text-lg text-[#555] leading-relaxed max-w-2xl mx-auto">
            En Eloher creemos que la belleza y el bienestar van de la mano.
            Cada visita es un ritual diseñado con intención, usando técnicas
            cuidadosamente seleccionadas y productos de alta calidad para
            ofrecerte una experiencia transformadora.
          </p>
        </div>
      </section>

      {/* ── Ornamento ── */}
      <div className="flex items-center gap-4 max-w-xs mx-auto px-6">
        <div className="flex-1 h-px bg-sage-pale" />
        <LotusIcon size={24} color="#c9a96e" />
        <div className="flex-1 h-px bg-sage-pale" />
      </div>

      {/* ── Servicios destacados ── */}
      <section className="py-24 px-6 bg-cream" id="servicios">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
              Lo que ofrecemos
            </p>
            <h2
              className="text-4xl md:text-5xl text-sage-dark"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Nuestros Tratamientos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.name}
                className="bg-white p-8 group hover:shadow-lg transition-all duration-300 border-t-2 border-sage-pale hover:border-gold"
              >
                <span className="block text-gold text-2xl mb-4">{service.icon}</span>
                <h3
                  className="text-2xl text-sage-dark mb-3"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {service.name}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed mb-6">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-[10px] tracking-widest uppercase text-sage hover:text-sage-dark transition-colors font-medium"
                >
                  Ver más →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/servicios"
              className="inline-block px-8 py-3.5 bg-sage text-white text-[11px] tracking-[0.2em] uppercase rounded-full hover:bg-sage-dark transition-colors duration-300"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* ── Cita ── */}
      <section
        className="py-24 px-6"
        style={{ background: "linear-gradient(135deg, #4a5445 0%, #6b7864 100%)" }}
        id="por-que"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <LotusIcon size={36} color="#c9a96e" />
          </div>
          <blockquote
            className="text-3xl md:text-4xl text-white italic leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            El lujo verdadero es tiempo para ti misma, en un espacio que cuida
            cada detalle.
          </blockquote>
          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <cite className="text-[10px] tracking-[0.4em] uppercase text-gold not-italic">
            Eloher Beauty &amp; Wellness Spa
          </cite>
        </div>
      </section>

      {/* ── Por qué elegirnos ── */}
      <section className="py-24 px-6 bg-cream" id="espacio">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
              La experiencia Eloher
            </p>
            <h2
              className="text-4xl md:text-5xl text-sage-dark"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              ¿Por qué elegirnos?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <LotusIcon size={32} color="#c9a96e" />
                </div>
                <h3
                  className="text-xl text-sage-dark mb-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(160deg, #4a5445 0%, #717d69 100%)" }}
      >
        <p className="text-[10px] tracking-[0.5em] uppercase text-gold mb-4">
          Comienza hoy
        </p>
        <h2
          className="text-4xl md:text-5xl text-white mb-6 italic"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
        >
          Regálate un momento de bienestar
        </h2>
        <p className="text-white/70 text-base mb-10 max-w-md mx-auto">
          Agenda tu cita por WhatsApp o contáctanos. Estamos listas para recibirte.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/521234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-white text-[11px] tracking-[0.2em] uppercase rounded-full hover:bg-gold-dark transition-colors duration-300"
          >
            💬 Reservar por WhatsApp
          </a>
          <Link
            href="/contacto"
            className="px-8 py-3.5 border border-white/50 text-white text-[11px] tracking-[0.2em] uppercase rounded-full hover:bg-white/10 transition-colors duration-300"
          >
            Enviar Mensaje
          </Link>
        </div>
      </section>
    </>
  );
}
