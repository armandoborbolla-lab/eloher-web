import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "EloHer Beauty & Wellness Spa",
};


/* ── Íconos para los pilares ── */
function PillarIcon({ type }: { type: "heart" | "shield" | "leaf" | "sparkle" }) {
  const base = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "#D4A65F",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (type === "heart") return (
    <svg {...base}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
  if (type === "shield") return (
    <svg {...base}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9,12 11,14 15,10"/>
    </svg>
  );
  if (type === "leaf") return (
    <svg {...base}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  );
  return (
    <svg {...base}>
      <path d="M12 2l2.309 7.691L22 12l-7.691 2.309L12 22l-2.309-7.691L2 12l7.691-2.309z"/>
    </svg>
  );
}

/* ── Datos ── */
const featuredServices = [
  {
    num: "01",
    name: "Faciales & Skincare",
    description: "Limpiezas profundas, hidratación y tratamientos personalizados para una piel luminosa y saludable.",
    href: "/servicios#faciales",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=900&h=600&fit=crop",
    tags: ["Limpieza facial", "Hidratación", "Antiedad"],
  },
  {
    num: "02",
    name: "Masajes & Relajación",
    description: "Terapias para liberar tensión, reconectar cuerpo y mente, y devolverte la calma profunda.",
    href: "/servicios#masajes",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=900&h=600&fit=crop",
    tags: ["Relajante", "Descontracturante", "Aromaterapia"],
  },
  {
    num: "03",
    name: "Tratamientos Corporales",
    description: "Exfoliaciones, envolturas y rituales que cuidan tu piel de pies a cabeza con resultados visibles.",
    href: "/servicios#corporales",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=900&h=600&fit=crop",
    tags: ["Exfoliación", "Envolturas", "Reafirmante"],
  },
];

const testimonials = [
  {
    quote: "Salí completamente renovada. El trato fue cálido desde que entré y el facial dejó mi piel increíble. Ya soy clienta fija.",
    name: "Mariana G.",
    tag: "Cliente frecuente",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=120&h=120&fit=crop&crop=face",
  },
  {
    quote: "El masaje fue exactamente lo que necesitaba. Un espacio precioso, tranquilo y muy profesional. Lo recomiendo totalmente.",
    name: "Paola R.",
    tag: "Primera visita",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=120&h=120&fit=crop&crop=face",
  },
  {
    quote: "Los resultados se notan. Llevo varios tratamientos y mi piel nunca había estado mejor. Atención de primera, cada detalle cuidado.",
    name: "Andrea L.",
    tag: "Cliente frecuente",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=120&h=120&fit=crop&crop=face",
  },
];

const faqs = [
  {
    q: "¿Necesito reservar con anticipación?",
    a: "Sí, te recomendamos agendar tu cita con al menos 24 horas de anticipación para garantizarte el horario y el tratamiento que deseas. Puedes hacerlo fácilmente por WhatsApp o a través de nuestro formulario — respondemos rápido y con mucho gusto te orientamos.",
  },
  {
    q: "¿Cuánto dura una sesión de facial o masaje?",
    a: "Depende del tratamiento: los faciales tienen una duración de 60 a 90 minutos y los masajes de 45 a 75 minutos. Los tratamientos corporales pueden extenderse hasta 90 minutos. Al agendar tu cita te confirmamos el tiempo exacto para que puedas organizarte con calma.",
  },
  {
    q: "¿Aceptan tarjetas de crédito o débito?",
    a: "Sí, aceptamos tarjeta de crédito y débito, efectivo y transferencia bancaria — sin comisiones adicionales. También podemos enviarte una liga de pago por WhatsApp antes de tu visita para que llegues sin pendientes y disfrutes desde el primer minuto.",
  },
  {
    q: "¿Tienen estacionamiento?",
    a: "Sí, contamos con estacionamiento disponible. Nos encontramos en el 2° piso de Real de Cumbres 458, Real Cumbres, Monterrey — fácil de llegar y con acceso muy cómodo.",
  },
  {
    q: "¿Venden gift cards o paquetes de regalo?",
    a: "¡Claro que sí! Tenemos gift cards para sesiones individuales y también para nuestros paquetes con duración de hasta 6 meses, como el Contorno Facial Perfecto o el Reductivo Corporal — ideales para regalar en cumpleaños, Día de las Madres o aniversarios. Escríbenos por WhatsApp y diseñamos juntas el regalo ideal.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const pillars: { title: string; desc: string; icon: "heart" | "shield" | "leaf" | "sparkle" }[] = [
  { title: "Cálida y Cercana", desc: "Te recibimos como en casa, con atención personalizada desde el primer momento.", icon: "heart" },
  { title: "Profesional y Confiable", desc: "Terapeutas certificadas con años de experiencia en bienestar y belleza.", icon: "shield" },
  { title: "Natural y Consciente", desc: "Productos premium sin parabenos, formulados con activos naturales.", icon: "leaf" },
  { title: "Elegante y Femenina", desc: "Un espacio diseñado pensando en ti, en cada detalle.", icon: "sparkle" },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20"
      >
        {/* Foto de fondo */}
        <Image
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=85&w=1920&fit=crop"
          alt="EloHer Spa"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay olive — 65% para que la foto respire */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(36,46,30,0.72) 0%, rgba(50,60,38,0.60) 60%, rgba(40,50,32,0.68) 100%)" }}
        />
        {/* Toque dorado muy sutil en el centro */}
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(ellipse at 50% 40%, rgba(212,175,122,0.07) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto pt-20">
          <div className="flex justify-center mb-6">
            <Image src="/logo-principal.png" alt="EloHer Beauty & Wellness Spa" width={340} height={220} className="object-contain" />
          </div>
          <p
            className="text-xl md:text-2xl text-white/85 italic mb-12"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
          >
            Confianza, belleza y equilibrio en tu piel.
          </p>
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
          <div className="mt-16 flex flex-col items-center gap-2 opacity-50">
            <p className="text-[9px] tracking-[0.5em] uppercase text-white" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
              Descubre
            </p>
            <div className="w-px h-8 bg-white/50" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-warm-white to-transparent" />
      </section>

      {/* ═══ FILOSOFÍA ═══ */}
      <section className="py-24 px-6 bg-warm-white">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.45em] uppercase text-gold mb-4" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
              Nuestra Filosofía
            </p>
            <h2 className="text-4xl md:text-5xl text-olive mb-5" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}>
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
        </FadeIn>
      </section>

      {/* ═══ SERVICIOS ═══ */}
      <section className="py-24 px-6 bg-beige" id="servicios">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-[10px] tracking-[0.45em] uppercase text-gold mb-4" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                Lo que ofrecemos
              </p>
              <h2 className="text-4xl md:text-5xl text-olive" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}>
                Nuestros Tratamientos
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {featuredServices.map((svc, i) => (
              <FadeIn key={svc.name} delay={i * 150}>
                <Link
                  href={svc.href}
                  className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
                >
                  {/* Foto */}
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={svc.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Badge número */}
                    <div
                      className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(46,57,40,0.85)" }}
                    >
                      <span className="text-[11px] text-white tracking-wider" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                        {svc.num}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="bg-warm-white p-6">
                    <h3
                      className="text-2xl text-olive mb-3"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 500 }}
                    >
                      {svc.name}
                    </h3>
                    <p className="text-sm text-taupe leading-relaxed mb-4" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                      {svc.description}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-beige rounded-full text-[9px] tracking-[0.15em] uppercase text-taupe"
                          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* CTA */}
                    <span
                      className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-olive font-medium group-hover:text-gold transition-colors duration-300"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                    >
                      Agenda este <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={480}>
            <div className="text-center mt-12">
              <Link
                href="/servicios"
                className="inline-block px-8 py-3.5 bg-olive text-white text-[10px] tracking-[0.2em] uppercase rounded-full hover:bg-olive-mid transition-colors duration-300"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Ver todos los servicios
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ QUOTE ═══ */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2e3928 0%, #3D4A35 100%)" }}
        id="por-que"
      >
        <span
          className="absolute -top-4 left-6 text-[180px] leading-none text-white/5 select-none pointer-events-none"
          style={{ fontFamily: "Georgia, serif" }}
        >
          &ldquo;
        </span>
        <span
          className="absolute -bottom-10 right-6 text-[180px] leading-none text-white/5 select-none pointer-events-none"
          style={{ fontFamily: "Georgia, serif" }}
        >
          &rdquo;
        </span>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Image src="/isotipo.png" alt="EloHer" width={90} height={90} className="object-contain" />
            </div>
            <blockquote
              className="text-3xl md:text-4xl text-white italic leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
            >
              "Confianza, belleza y equilibrio en tu piel."
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
        </FadeIn>
      </section>

      {/* ═══ EL ESPACIO ═══ */}
      <section className="py-24 px-6 bg-warm-white" id="espacio">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center gap-4 justify-center mb-4">
                <div className="h-px w-10 bg-gold/40" />
                <p className="text-[10px] tracking-[0.45em] uppercase text-gold" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                  Conoce nuestro espacio
                </p>
                <div className="h-px w-10 bg-gold/40" />
              </div>
              <h2 className="text-4xl md:text-5xl text-olive mb-4" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}>
                Un rincón pensado para ti
              </h2>
              <p className="text-sm text-taupe max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                Cada detalle fue diseñado para que, desde el momento en que entras,
                sientas que el mundo exterior queda atrás.
              </p>
            </div>
          </FadeIn>

          {/* Galería */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 h-[420px] md:h-[500px]">
            {/* Izquierda — alta */}
            <FadeIn className="row-span-2" delay={0}>
              <div className="relative h-full rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&fit=crop"
                  alt="Masaje EloHer"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="33vw"
                />
              </div>
            </FadeIn>
            {/* Centro arriba */}
            <FadeIn delay={100}>
              <div className="relative h-full rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&fit=crop"
                  alt="Facial EloHer"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="33vw"
                />
              </div>
            </FadeIn>
            {/* Derecha — alta */}
            <FadeIn className="row-span-2" delay={200}>
              <div className="relative h-full rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800&fit=crop"
                  alt="Espacio EloHer"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="33vw"
                />
              </div>
            </FadeIn>
            {/* Centro abajo */}
            <FadeIn delay={150}>
              <div className="relative h-full rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&fit=crop"
                  alt="Bienestar EloHer"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="33vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ PILARES ═══ */}
      <section className="py-24 px-6 bg-beige" id="por-que">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex items-center gap-4 justify-center mb-4">
                <div className="h-px w-10 bg-gold/40" />
                <p className="text-[10px] tracking-[0.45em] uppercase text-gold" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                  La experiencia EloHer
                </p>
                <div className="h-px w-10 bg-gold/40" />
              </div>
              <h2 className="text-4xl md:text-5xl text-olive" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}>
                ¿Por qué elegirnos?
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 100}>
                <div className="text-center">
                  {/* Ícono único por pilar */}
                  <div className="flex justify-center mb-5">
                    <div className="w-16 h-16 rounded-full bg-beige flex items-center justify-center">
                      <PillarIcon type={p.icon} />
                    </div>
                  </div>
                  <h3
                    className="text-lg text-olive mb-2"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 500 }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm text-taupe leading-relaxed" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                    {p.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIOS ═══ */}
      <section className="py-24 px-6 bg-beige" id="opiniones">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="flex items-center gap-4 justify-center mb-4">
                <div className="h-px w-10 bg-gold/40" />
                <p
                  className="text-[10px] tracking-[0.45em] uppercase text-gold"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  Lo que dicen de nosotras
                </p>
                <div className="h-px w-10 bg-gold/40" />
              </div>
              <h2
                className="text-4xl md:text-5xl text-olive"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
              >
                Clientas que se sienten en casa
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 130}>
                <div className="bg-warm-white rounded-2xl p-7 flex flex-col gap-5 shadow-sm">
                  {/* Comilla decorativa */}
                  <span
                    className="text-4xl text-gold/40 leading-none"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    &ldquo;
                  </span>
                  {/* Testimonio */}
                  <p
                    className="text-base text-taupe leading-relaxed italic flex-1"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
                  >
                    {t.quote}
                  </p>
                  {/* Estrellas */}
                  <div className="flex gap-1 text-gold text-sm">
                    {"★★★★★".split("").map((s, j) => (
                      <span key={j}>{s}</span>
                    ))}
                  </div>
                  {/* Autor */}
                  <div className="flex items-center gap-3 pt-2 border-t border-beige">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={44}
                      height={44}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p
                        className="text-sm font-medium text-olive"
                        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                      >
                        {t.name}
                      </p>
                      <p
                        className="text-[10px] tracking-[0.1em] text-gold"
                        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                      >
                        {t.tag}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PREGUNTAS FRECUENTES ═══ */}
      <section className="py-24 px-6 bg-warm-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="flex items-center gap-4 justify-center mb-4">
                <div className="h-px w-10 bg-gold/40" />
                <p className="text-[10px] tracking-[0.45em] uppercase text-gold" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                  Resolvemos tus dudas
                </p>
                <div className="h-px w-10 bg-gold/40" />
              </div>
              <h2 className="text-4xl md:text-5xl text-olive" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}>
                Preguntas Frecuentes
              </h2>
            </div>
          </FadeIn>

          <div className="flex flex-col divide-y divide-sage/20">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 80}>
                <details className="group py-1">
                  <summary className="flex justify-between items-center gap-4 cursor-pointer py-5 list-none">
                    <span
                      className="text-base text-olive group-open:text-sage transition-colors duration-200"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.15rem" }}
                    >
                      {faq.q}
                    </span>
                    <span className="text-gold text-xl flex-shrink-0 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p
                    className="text-sm text-taupe leading-relaxed pb-5 pr-8"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {faq.a}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(160deg, #2e3928 0%, #3D4A35 100%)" }}
      >
        <FadeIn>
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold mb-4" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            Comienza hoy
          </p>
          <h2 className="text-4xl md:text-5xl text-white italic mb-6" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}>
            Regálate un momento de bienestar
          </h2>
          <p className="text-white/65 text-sm mb-10 max-w-md mx-auto" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
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
        </FadeIn>
      </section>
    </>
  );
}
