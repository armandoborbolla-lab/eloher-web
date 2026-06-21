import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EloHer Beauty & Wellness Spa",
};

/* Isotipo loto oficial EloHer */
function LotusIcon({ size = 64 }: { size?: number }) {
  const s = size / 32;
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 1 L16.6 3 L18 2 L16.8 3.8 L18.5 4.5 L16.6 4.5 L17 6.5 L16 5 L15 6.5 L15.4 4.5 L13.5 4.5 L15.2 3.8 L14 2 L15.4 3Z" fill="#D4AF7A"/>
      <path d="M16 9 C16 9 12 13 12 17.5 C12 20.5 13.8 22.5 16 23.5 C18.2 22.5 20 20.5 20 17.5 C20 13 16 9 16 9Z" stroke="#D4AF7A" strokeWidth="0.8" fill="none"/>
      <path d="M16 9 C16 9 9 12 9 18 C9 21 11.5 23 14 23.5" stroke="#D4AF7A" strokeWidth="0.8" fill="none"/>
      <path d="M16 9 C16 9 23 12 23 18 C23 21 20.5 23 18 23.5" stroke="#D4AF7A" strokeWidth="0.8" fill="none"/>
      <path d="M16 11 C16 11 5 14 5 21 C5 24.5 9 27 13 24" stroke="#D4AF7A" strokeWidth="0.8" fill="none"/>
      <path d="M16 11 C16 11 27 14 27 21 C27 24.5 23 27 19 24" stroke="#D4AF7A" strokeWidth="0.8" fill="none"/>
      <path d="M8 26 Q16 30 24 26" stroke="#D4AF7A" strokeWidth="0.8" fill="none"/>
      <circle cx="16" cy="17.5" r="1" fill="#D4AF7A" opacity="0.7"/>
    </svg>
  );
}

const featuredServices = [
  {
    name: "Cuidado Facial",
    description: "Tratamientos personalizados que realzan tu belleza natural con técnicas y productos premium.",
    href: "/servicios#faciales",
  },
  {
    name: "Masajes & Bienestar",
    description: "Desde masaje sueco hasta rituales con piedras calientes. Libera tensiones y recupera tu energía.",
    href: "/servicios#masajes",
  },
  {
    name: "Rituales Corporales",
    description: "Exfoliaciones, envolturas y aromaterapia para una piel renovada y una mente en paz.",
    href: "/servicios#corporales",
  },
  {
    name: "Manos y Pies",
    description: "Manicure y pedicure spa con hidratación profunda. Resultados que se ven y se sienten.",
    href: "/servicios#manos-pies",
  },
];

const pillars = [
  { title: "Cálida y Cercana", desc: "Te recibimos como en casa, con atención personalizada desde el primer momento." },
  { title: "Profesional y Confiable", desc: "Terapeutas certificadas con años de experiencia en bienestar y belleza." },
  { title: "Natural y Consciente", desc: "Productos premium sin parabenos, formulados con activos naturales." },
  { title: "Elegante y Femenina", desc: "Un espacio diseñado pensando en ti, en cada detalle." },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20"
        style={{ background: "linear-gradient(160deg, #2e3928 0%, #3D4A35 50%, #4e5f44 100%)" }}
      >
        {/* Textura radial sutil */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 40%, rgba(212,175,122,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto pt-20">
          {/* Isotipo */}
          <div className="flex justify-center mb-4">
            <LotusIcon size={72} />
          </div>

          {/* Logotipo script */}
          <h1
            className="text-8xl md:text-[7rem] text-white leading-none mb-2"
            style={{ fontFamily: "var(--font-great-vibes), cursive" }}
          >
            EloHer
          </h1>

          {/* Subtítulo marca */}
          <p
            className="text-[11px] tracking-[0.55em] uppercase text-gold mb-2"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 300 }}
          >
            Beauty &amp; Wellness Spa
          </p>

          {/* Separador dorado */}
          <div className="flex items-center gap-3 justify-center my-5">
            <div className="h-px w-10 bg-gold/50" />
            <div className="w-1 h-1 rounded-full bg-gold" />
            <div className="h-px w-10 bg-gold/50" />
          </div>

          {/* Tagline */}
          <p
            className="text-xl md:text-2xl text-white/85 italic mb-12"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            Belleza que se siente. Confianza que se nota.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/521234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-olive font-medium text-[11px] tracking-[0.2em] uppercase rounded-full hover:bg-gold-dark hover:text-white transition-colors duration-300"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              💬 Reserva por WhatsApp
            </a>
            <Link
              href="/servicios"
              className="px-8 py-3.5 border border-white/50 text-white text-[11px] tracking-[0.2em] uppercase rounded-full hover:bg-white/10 transition-colors duration-300"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Ver Servicios
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="mt-16 flex flex-col items-center gap-2 opacity-50">
            <p
              className="text-[9px] tracking-[0.5em] uppercase text-white"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Descubre
            </p>
            <div className="w-px h-8 bg-white/50" />
          </div>
        </div>

        {/* Fade inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-warm-white to-transparent" />
      </section>

      {/* ═══ FILOSOFÍA ═══ */}
      <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-[10px] tracking-[0.45em] uppercase text-gold mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Nuestra Filosofía
          </p>
          <h2
            className="text-4xl md:text-5xl text-olive mb-5"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
          >
            El arte de cuidarte
          </h2>
          <div className="flex items-center gap-3 justify-center mb-7">
            <div className="h-px w-8 bg-gold/50" />
            <div className="w-1 h-1 rounded-full bg-gold" />
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <p className="text-base text-taupe leading-relaxed">
            En EloHer creemos que la belleza y el bienestar van de la mano.
            Cada visita es un ritual diseñado con intención, usando técnicas
            cuidadosamente seleccionadas y productos de alta calidad para
            ofrecerte una experiencia que va más allá de lo estético.
          </p>
        </div>
      </section>

      {/* ═══ SERVICIOS ═══ */}
      <section className="py-24 px-6 bg-beige" id="servicios">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-[10px] tracking-[0.45em] uppercase text-gold mb-4"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Lo que ofrecemos
            </p>
            <h2
              className="text-4xl md:text-5xl text-olive"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              Nuestros Tratamientos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((svc) => (
              <Link
                key={svc.name}
                href={svc.href}
                className="group bg-warm-white p-7 flex flex-col gap-4 border-b-2 border-sage/30 hover:border-gold transition-all duration-300 hover:shadow-md"
              >
                <div className="flex justify-start">
                  <LotusIcon size={36} />
                </div>
                <h3
                  className="text-xl text-olive"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 500 }}
                >
                  {svc.name}
                </h3>
                <p className="text-sm text-taupe leading-relaxed flex-1">{svc.description}</p>
                <span
                  className="text-[10px] tracking-widest uppercase text-gold group-hover:text-olive transition-colors"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  Ver más →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/servicios"
              className="inline-block px-8 py-3.5 bg-olive text-white text-[10px] tracking-[0.2em] uppercase rounded-full hover:bg-olive-mid transition-colors duration-300"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ QUOTE ═══ */}
      <section
        className="py-24 px-6"
        style={{ background: "linear-gradient(135deg, #2e3928 0%, #3D4A35 100%)" }}
        id="por-que"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <LotusIcon size={44} />
          </div>
          <blockquote
            className="text-3xl md:text-4xl text-white italic leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            "Belleza que se siente. Confianza que se nota."
          </blockquote>
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-px w-8 bg-gold/50" />
            <div className="w-1 h-1 rounded-full bg-gold" />
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <cite
            className="text-[10px] tracking-[0.4em] uppercase text-gold not-italic"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            EloHer Beauty &amp; Wellness Spa
          </cite>
        </div>
      </section>

      {/* ═══ PILARES ═══ */}
      <section className="py-24 px-6 bg-warm-white" id="espacio">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-[10px] tracking-[0.45em] uppercase text-gold mb-4"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              La experiencia EloHer
            </p>
            <h2
              className="text-4xl md:text-5xl text-olive"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
            >
              ¿Por qué elegirnos?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="text-center px-4">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-beige flex items-center justify-center">
                    <LotusIcon size={30} />
                  </div>
                </div>
                <h3
                  className="text-lg text-olive mb-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 500 }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-taupe leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(160deg, #2e3928 0%, #3D4A35 100%)" }}
      >
        <p
          className="text-[10px] tracking-[0.5em] uppercase text-gold mb-4"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Comienza hoy
        </p>
        <h2
          className="text-4xl md:text-5xl text-white italic mb-6"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
        >
          Regálate un momento de bienestar
        </h2>
        <p className="text-white/65 text-sm mb-10 max-w-md mx-auto">
          Agenda tu cita por WhatsApp o escríbenos. Estamos listas para recibirte.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/521234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-olive font-medium text-[11px] tracking-[0.2em] uppercase rounded-full hover:bg-gold-dark hover:text-white transition-colors duration-300"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            💬 Reservar por WhatsApp
          </a>
          <Link
            href="/contacto"
            className="px-8 py-3.5 border border-white/40 text-white text-[11px] tracking-[0.2em] uppercase rounded-full hover:bg-white/10 transition-colors duration-300"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Enviar Mensaje
          </Link>
        </div>
      </section>
    </>
  );
}
