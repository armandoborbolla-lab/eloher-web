import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Descubre todos los tratamientos de Spa Eloher: masajes, faciales, rituales corporales, manos y pies, depilación y más.",
};

const categories = [
  {
    id: "masajes",
    label: "Masajes",
    title: "Masajes Terapéuticos",
    intro:
      "Nuestros masajes combinan técnicas ancestrales y modernas para aliviar tensiones, mejorar la circulación y promover un descanso profundo.",
    services: [
      {
        name: "Masaje Sueco Relajante",
        desc: "Técnica clásica con movimientos suaves y fluidos que relajan los músculos y calman la mente.",
        duration: "60 / 90 min",
      },
      {
        name: "Masaje de Tejido Profundo",
        desc: "Trabaja las capas musculares más profundas para liberar tensiones crónicas y nudos musculares.",
        duration: "60 / 90 min",
      },
      {
        name: "Masaje con Piedras Calientes",
        desc: "Piedras volcánicas calientes que dilatan músculos y mejoran la circulación mientras te envuelven en calor.",
        duration: "90 min",
      },
      {
        name: "Masaje Aromaterapia",
        desc: "Aceites esenciales puros seleccionados según tu estado de ánimo para una experiencia multisensorial.",
        duration: "60 / 90 min",
      },
    ],
  },
  {
    id: "faciales",
    label: "Faciales",
    title: "Faciales de Lujo",
    intro:
      "Protocolos personalizados con activos de alta eficacia para devolver la luminosidad, hidratación y juventud a tu piel.",
    services: [
      {
        name: "Facial Hidratante Profundo",
        desc: "Ácido hialurónico y extractos botánicos para nutrir la piel deshidratada en profundidad.",
        duration: "60 min",
      },
      {
        name: "Facial Anti-Edad",
        desc: "Péptidos bioactivos y retinol que estimulan el colágeno para reducir líneas de expresión.",
        duration: "75 min",
      },
      {
        name: "Facial Purificante",
        desc: "Limpieza profunda con exfoliación enzimática y arcillas para pieles mixtas o con impurezas.",
        duration: "60 min",
      },
      {
        name: "Facial Luminosidad",
        desc: "Vitamina C y ácidos AHA para unificar el tono y aportar un brillo natural y saludable.",
        duration: "60 min",
      },
    ],
  },
  {
    id: "corporales",
    label: "Corporales",
    title: "Rituales Corporales",
    intro:
      "Tratamientos de cuerpo completo que combinan exfoliación, nutrición y envolturas para una piel suave, luminosa y renovada.",
    services: [
      {
        name: "Exfoliación Corporal",
        desc: "Sales del Himalaya y aceites esenciales que eliminan células muertas y revelan una piel radiante.",
        duration: "45 min",
      },
      {
        name: "Envoltura Purificante de Arcilla",
        desc: "Arcilla volcánica que desintoxica la piel y activa el metabolismo celular para un cuerpo renovado.",
        duration: "60 min",
      },
      {
        name: "Ritual de Chocolate",
        desc: "Antioxidantes del cacao que nutren e iluminan mientras enuelven tu piel en un aroma irresistible.",
        duration: "90 min",
      },
      {
        name: "Hidratación Profunda Corporal",
        desc: "Manteca de karité y aloe vera aplicados con técnicas de masaje para nutrir la piel intensa y duraderamente.",
        duration: "60 min",
      },
    ],
  },
  {
    id: "manos-pies",
    label: "Manos y Pies",
    title: "Manos y Pies",
    intro:
      "Tratamientos completos para el cuidado de manos y pies que combinan estética, hidratación y relajación.",
    services: [
      {
        name: "Manicure Spa",
        desc: "Limado, cutículas, exfoliación, masaje y esmaltado para unas manos perfectas.",
        duration: "45 min",
      },
      {
        name: "Pedicure Spa",
        desc: "Baño de pies, exfoliación, hidratación, masaje relajante y esmaltado.",
        duration: "60 min",
      },
      {
        name: "Ritual de Manos",
        desc: "Exfoliación, envoltura nutritiva y masaje profundo para manos suaves y rejuvenecidas.",
        duration: "45 min",
      },
      {
        name: "Manicure + Pedicure Eloher",
        desc: "El duo completo de nuestro servicio signature para manos y pies impecables.",
        duration: "90 min",
      },
    ],
  },
  {
    id: "depilacion",
    label: "Depilación",
    title: "Depilación",
    intro:
      "Servicios de depilación precisos y cuidadosos con ceras de alta calidad para una piel lisa y sin irritaciones.",
    services: [
      {
        name: "Depilación Brasileña",
        desc: "Cera especial de baja temperatura para una depilación completa y duradera de la zona íntima.",
        duration: "30 min",
      },
      {
        name: "Depilación de Piernas",
        desc: "Cera de calidad para una depilación precisa de piernas completas o medias piernas.",
        duration: "30 / 45 min",
      },
      {
        name: "Depilación de Axilas",
        desc: "Cera suave y precisa para una zona sensible, con calming post-depilación.",
        duration: "15 min",
      },
      {
        name: "Depilación Facial",
        desc: "Labio superior, cejas o bigote con técnica de hilo o cera para resultados precisos.",
        duration: "15 min",
      },
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* ── Header ── */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #2d4a38 0%, #4f8260 100%)" }}
      >
        <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">
          Menú de tratamientos
        </p>
        <h1
          className="text-5xl md:text-7xl text-white mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
        >
          Nuestros Servicios
        </h1>
        <div className="w-16 h-px bg-gold mx-auto mb-6" />
        <p className="text-sage-pale text-base max-w-xl mx-auto">
          Cada tratamiento en Spa Eloher está diseñado para ser una experiencia
          única. Elige el que más te llame y déjate cuidar.
        </p>

        {/* Quick nav */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="px-4 py-2 border border-sage-pale text-sage-pale text-xs tracking-widest uppercase hover:bg-white hover:text-sage-dark transition-colors duration-200"
            >
              {cat.label}
            </a>
          ))}
        </div>
      </section>

      {/* ── Categories ── */}
      <div className="bg-cream">
        {categories.map((cat, idx) => (
          <section
            key={cat.id}
            id={cat.id}
            className={`py-24 px-6 ${idx % 2 === 1 ? "bg-[#f0ebe2]" : "bg-cream"}`}
          >
            <div className="max-w-6xl mx-auto">
              {/* Category header */}
              <div className="mb-12 max-w-2xl">
                <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">
                  {cat.label}
                </p>
                <h2
                  className="text-4xl md:text-5xl text-sage-dark mb-4"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {cat.title}
                </h2>
                <div className="w-10 h-px bg-gold mb-5" />
                <p className="text-base text-[#555] leading-relaxed">{cat.intro}</p>
              </div>

              {/* Services grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.services.map((svc) => (
                  <div
                    key={svc.name}
                    className="bg-white p-6 border-l-2 border-sage-pale hover:border-sage transition-colors duration-300"
                  >
                    <h3
                      className="text-xl text-sage-dark mb-2"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {svc.name}
                    </h3>
                    <p className="text-sm text-[#666] leading-relaxed mb-4">{svc.desc}</p>
                    <p className="text-xs tracking-widest uppercase text-gold">
                      ⏱ {svc.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── CTA ── */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #2d4a38 0%, #4f8260 100%)" }}
      >
        <h2
          className="text-4xl md:text-5xl text-white mb-6"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
        >
          ¿No sabes cuál elegir?
        </h2>
        <p className="text-sage-pale mb-10 max-w-md mx-auto">
          Nuestro equipo te ayudará a encontrar el tratamiento perfecto según
          tus necesidades. ¡Escríbenos!
        </p>
        <Link
          href="/contacto"
          className="inline-block px-10 py-4 bg-gold text-white text-sm tracking-widest uppercase hover:bg-[#b8934f] transition-colors duration-300"
        >
          Contáctanos
        </Link>
      </section>
    </>
  );
}
