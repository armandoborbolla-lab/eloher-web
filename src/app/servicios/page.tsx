import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Menú de tratamientos EloHer: faciales, masajes, tratamientos corporales y más. Precios y duración de cada servicio.",
};

/* ── Datos reales del menú EloHer ── */
const categories = [
  {
    id: "faciales",
    label: "Faciales",
    title: "Faciales",
    intro:
      "Tratamientos especializados para cada tipo de piel. Desde limpieza profunda hasta técnicas de última generación para una piel luminosa, firme e hidratada.",
    services: [
      {
        name: "Détox Facial",
        desc: "Elimina impurezas, piel más clara y saludable.",
        duration: "50 min",
        price: "$420",
        tag: null,
      },
      {
        name: "Hidratación Profunda",
        desc: "Reduce la apariencia de líneas finas, aumenta la hidratación y suavidad del rostro.",
        duration: "70 min",
        price: "$490",
        tag: null,
      },
      {
        name: "Vitamínico",
        desc: "Revitaliza tu piel proporcionando una dosis concentrada de nutrientes, brindando un extra de hidratación y luminosidad.",
        duration: "30 min",
        price: "$350",
        tag: null,
      },
      {
        name: "Beauty Lift",
        desc: "Combina el exclusivo masaje japonés Kobido con radiofrecuencia para mejorar la firmeza, estimular la producción de colágeno y redefinir el contorno facial.",
        duration: "80 min",
        price: "$650",
        tag: "Premium",
      },
    ],
  },
  {
    id: "masajes",
    label: "Masajes",
    title: "Masajes",
    intro:
      "Cada masaje está cuidadosamente diseñado para liberar tensiones, mejorar la circulación y llevarte a un estado de relajación profunda.",
    services: [
      {
        name: "Masaje Aromaterapéutico",
        desc: "Combina técnicas de masaje con los beneficios de la aromaterapia, creando una sinfonía de relajación y equilibrio.",
        duration: "50 min",
        price: "$450",
        tag: "Presión media",
      },
      {
        name: "Masaje Aroma Profundo",
        desc: "Diseñado para liberar tensiones acumuladas con técnica de presión profunda.",
        duration: "50 min",
        price: "$500",
        tag: "Presión profunda",
      },
      {
        name: "Drenaje Linfático",
        desc: "Promueve una sensación de ligereza en todo el cuerpo, favoreciendo la eliminación de toxinas.",
        duration: "60 min",
        price: "$480",
        tag: "Presión suave",
      },
      {
        name: "Masaje de Espalda",
        desc: "Sesión enfocada en la zona de espalda para aliviar contracturas y tensión acumulada.",
        duration: "25 min",
        price: "$200",
        tag: null,
      },
    ],
  },
  {
    id: "corporales",
    label: "Tratamientos Corporales",
    title: "Tratamientos Corporales",
    intro:
      "Protocolos de aparatología y modelación corporal diseñados para resultados visibles y duraderos. Reafirma, reduce y redefine tu figura.",
    services: [
      {
        name: "Contorno Facial Perfecto",
        desc: "Enfocado en mejorar la silueta de tu rostro, logrando un contorno facial armonioso que resalta tu belleza única.",
        duration: "5 sesiones",
        price: "$1,250",
        tag: "Paquete",
      },
      {
        name: "Reductivo Abdomen y Laterales",
        desc: "Reduce medidas, reafirma y tonifica tu silueta con tecnología de aparatología avanzada.",
        duration: "6 sesiones",
        price: "$2,100",
        tag: "Paquete",
      },
      {
        name: "Sesión de Aparatología",
        desc: "Sesión individual de aparatología para trabajar la zona que más necesites.",
        duration: "1 sesión",
        price: "$450",
        tag: null,
      },
    ],
  },
];

/* Isotipo pequeño para decoración */
function LotusSmall() {
  return (
    <svg width="20" height="23" viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 56 50 A 32 32 0 1 0 56 106" stroke="#D4AF7A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M 45 70 C 54 57, 65 40, 72 22" stroke="#A7B499" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <ellipse cx="50" cy="62" rx="6" ry="2.2" transform="rotate(-55 50 62)" fill="#A7B499"/>
      <ellipse cx="57" cy="60" rx="6" ry="2.2" transform="rotate(-20 57 60)" fill="#A7B499"/>
      <ellipse cx="60" cy="47" rx="5.5" ry="2" transform="rotate(-50 60 47)" fill="#A7B499"/>
      <ellipse cx="67" cy="45" rx="5.5" ry="2" transform="rotate(-15 67 45)" fill="#A7B499"/>
      <ellipse cx="40" cy="95" rx="22" ry="8" fill="#c4b28c"/>
      <ellipse cx="40" cy="93.5" rx="21" ry="6" fill="#ddd0b0"/>
      <ellipse cx="40" cy="82" rx="16" ry="6.5" fill="#c4b28c"/>
      <ellipse cx="40" cy="80.5" rx="15" ry="5" fill="#ddd0b0"/>
      <ellipse cx="39" cy="71" rx="11" ry="5" fill="#c4b28c"/>
      <ellipse cx="39" cy="69.5" rx="10" ry="3.8" fill="#ddd0b0"/>
      <path d="M 14 103 Q 27 99.5, 40 103 Q 53 106.5, 66 103" stroke="#D4AF7A" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export default function ServiciosPage() {
  return (
    <>
      {/* ── Header ── */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(160deg, #2e3928 0%, #3D4A35 100%)" }}
      >
        <p
          className="text-[10px] tracking-[0.5em] uppercase text-gold mb-4"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Menú de tratamientos
        </p>
        <h1
          className="text-5xl md:text-7xl text-white mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
        >
          Nuestros Servicios
        </h1>
        <div className="flex items-center gap-3 justify-center mb-6">
          <div className="h-px w-10 bg-gold/40" />
          <div className="w-1 h-1 rounded-full bg-gold" />
          <div className="h-px w-10 bg-gold/40" />
        </div>
        <p
          className="text-white/65 text-sm max-w-xl mx-auto mb-10"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Cada tratamiento en EloHer está diseñado para ser una experiencia única.
          Elige el que más te llame y déjate cuidar.
        </p>

        {/* Quick nav */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="px-5 py-2 border border-white/30 text-white/70 text-[10px] tracking-[0.2em] uppercase rounded-full hover:bg-white/10 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              {cat.label}
            </a>
          ))}
        </div>
      </section>

      {/* ── Categorías ── */}
      <div>
        {categories.map((cat, idx) => (
          <section
            key={cat.id}
            id={cat.id}
            className={`py-20 px-6 ${idx % 2 === 0 ? "bg-warm-white" : "bg-beige"}`}
          >
            <div className="max-w-5xl mx-auto">
              {/* Encabezado de categoría */}
              <div className="mb-12 text-center md:text-left">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                  <LotusSmall />
                  <p
                    className="text-[10px] tracking-[0.4em] uppercase text-gold"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {cat.label}
                  </p>
                </div>
                <h2
                  className="text-4xl md:text-5xl text-olive mb-4"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}
                >
                  {cat.title}
                </h2>
                <div className="h-px w-12 bg-gold mb-5 mx-auto md:mx-0" />
                <p
                  className="text-sm text-taupe leading-relaxed max-w-xl"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {cat.intro}
                </p>
              </div>

              {/* Grid de servicios */}
              <div className={`grid gap-5 ${cat.services.length === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}`}>
                {cat.services.map((svc) => (
                  <div
                    key={svc.name}
                    className="bg-white p-6 flex flex-col gap-3 border-t-2 border-sage/30 hover:border-gold transition-colors duration-300 hover:shadow-sm relative"
                  >
                    {/* Badge */}
                    {svc.tag && (
                      <span
                        className="absolute top-4 right-4 px-2.5 py-1 bg-beige text-[9px] tracking-[0.15em] uppercase text-taupe rounded-full"
                        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                      >
                        {svc.tag}
                      </span>
                    )}

                    <h3
                      className="text-xl text-olive pr-16"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 500 }}
                    >
                      {svc.name}
                    </h3>

                    <p
                      className="text-sm text-taupe leading-relaxed flex-1"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                    >
                      {svc.desc}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-beige mt-auto">
                      <span
                        className="text-[10px] tracking-[0.1em] text-sage uppercase"
                        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                      >
                        ⏱ {svc.duration}
                      </span>
                      <span
                        className="text-lg font-semibold text-olive"
                        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                      >
                        {svc.price}
                      </span>
                    </div>
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
        style={{ background: "linear-gradient(160deg, #2e3928 0%, #3D4A35 100%)" }}
      >
        <h2
          className="text-4xl md:text-5xl text-white italic mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
        >
          ¿No sabes cuál elegir?
        </h2>
        <p
          className="text-white/60 text-sm mb-10 max-w-md mx-auto"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Contáctanos y te ayudamos a encontrar el tratamiento perfecto para ti.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/521234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-olive font-medium text-[11px] tracking-[0.2em] uppercase rounded-full hover:bg-gold-dark hover:text-white transition-colors duration-300"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            💬 Escribir por WhatsApp
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
