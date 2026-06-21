import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spa Eloher | Bienestar y Relajación",
};

const featuredServices = [
  {
    icon: "✦",
    name: "Masajes Terapéuticos",
    description:
      "Desde el clásico masaje sueco hasta técnicas de tejido profundo y piedras calientes. Cada sesión es personalizada para liberarte de la tensión.",
    href: "/servicios#masajes",
  },
  {
    icon: "✦",
    name: "Faciales de Lujo",
    description:
      "Tratamientos faciales con ingredientes de primera calidad que hidratan, rejuvenecen y devuelven el brillo natural a tu piel.",
    href: "/servicios#faciales",
  },
  {
    icon: "✦",
    name: "Rituales Corporales",
    description:
      "Envolturas, exfoliaciones y rituales de aromaterapia que nutren tu piel y calman tu mente en una experiencia integral.",
    href: "/servicios#corporales",
  },
];

const reasons = [
  {
    title: "Ambiente Exclusivo",
    desc: "Espacios diseñados para despertar tus sentidos y llevarte a un estado de calma profunda.",
  },
  {
    title: "Expertos Certificados",
    desc: "Nuestros terapeutas están certificados en técnicas nacionales e internacionales.",
  },
  {
    title: "Productos Premium",
    desc: "Utilizamos únicamente cosméticos de alta gama, naturales y libres de parabenos.",
  },
  {
    title: "Experiencia Personalizada",
    desc: "Cada tratamiento se adapta a tus necesidades específicas y preferencias.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #2d4a38 0%, #4f8260 50%, #3d6b4f 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, #c9a96e 0%, transparent 50%), radial-gradient(circle at 80% 20%, #a8c5b5 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.5em] uppercase text-gold mb-6 font-light">
            Bienvenido a
          </p>
          <h1
            className="text-6xl md:text-8xl text-white mb-6 leading-none"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            Spa Eloher
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-lg md:text-xl text-sage-pale font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Tu refugio de paz y renovación. Tratamientos exclusivos diseñados
            para reconectar cuerpo, mente y espíritu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/servicios"
              className="px-8 py-4 bg-white text-sage-dark text-sm tracking-widest uppercase hover:bg-cream transition-colors duration-300 font-medium"
            >
              Nuestros Servicios
            </Link>
            <Link
              href="/contacto"
              className="px-8 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-sage-dark transition-colors duration-300"
            >
              Reservar Cita
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* ── Filosofía ── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">
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
            En Spa Eloher creemos que el bienestar es un viaje, no un destino.
            Cada tratamiento está diseñado con intención, usando técnicas
            ancestrales y productos naturales de alta calidad para ofrecerte una
            experiencia que va más allá de la relajación.
          </p>
        </div>
      </section>

      {/* ── Ornament ── */}
      <div className="flex items-center gap-4 max-w-xs mx-auto px-6">
        <div className="flex-1 h-px bg-sage-pale" />
        <span className="text-gold text-xl">✦</span>
        <div className="flex-1 h-px bg-sage-pale" />
      </div>

      {/* ── Servicios destacados ── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">
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
                className="bg-white p-8 group hover:shadow-lg transition-shadow duration-300 border-t-2 border-sage-pale hover:border-sage"
              >
                <span className="block text-sage text-2xl mb-4 group-hover:text-gold transition-colors duration-300">
                  {service.icon}
                </span>
                <h3
                  className="text-2xl text-sage-dark mb-3"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {service.name}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="text-xs tracking-widest uppercase text-sage hover:text-sage-dark transition-colors duration-200 font-medium"
                >
                  Ver más →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/servicios"
              className="inline-block px-8 py-4 bg-sage text-white text-sm tracking-widest uppercase hover:bg-sage-dark transition-colors duration-300"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* ── Cita ── */}
      <section
        className="py-24 px-6"
        style={{ background: "linear-gradient(135deg, #f8f5f0 0%, #d4e6dc 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-4xl text-gold mb-8 block">❝</span>
          <blockquote
            className="text-3xl md:text-4xl text-sage-dark italic leading-relaxed mb-6"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 300,
            }}
          >
            El lujo verdadero es tiempo para ti misma, en un espacio que cuida
            cada detalle.
          </blockquote>
          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <cite className="text-xs tracking-[0.3em] uppercase text-gold not-italic">
            Spa Eloher
          </cite>
        </div>
      </section>

      {/* ── Por qué elegirnos ── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">
              La experiencia Eloher
            </p>
            <h2
              className="text-4xl md:text-5xl text-sage-dark"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              ¿Por qué elegirnos?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-10 h-10 rounded-full bg-sage-pale flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 rounded-full bg-sage" />
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

      {/* ── CTA Banner ── */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #2d4a38 0%, #4f8260 100%)" }}
      >
        <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">
          Comienza hoy
        </p>
        <h2
          className="text-4xl md:text-5xl text-white mb-6"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
        >
          Regálate un momento de bienestar
        </h2>
        <p className="text-sage-pale text-base mb-10 max-w-xl mx-auto">
          Contáctanos y agenda tu sesión. Nuestro equipo estará encantado de
          ayudarte a elegir el tratamiento perfecto para ti.
        </p>
        <Link
          href="/contacto"
          className="inline-block px-10 py-4 bg-gold text-white text-sm tracking-widest uppercase hover:bg-[#b8934f] transition-colors duration-300"
        >
          Agenda tu Cita
        </Link>
      </section>
    </>
  );
}
