import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para agendar tu cita en Spa Eloher. Responderemos en menos de 24 horas.",
};

const info = [
  {
    icon: "📍",
    label: "Dirección",
    value: "Tu calle y número, Colonia, Ciudad, México",
    href: null,
  },
  {
    icon: "📞",
    label: "Teléfono / WhatsApp",
    value: "(123) 456-7890",
    href: "https://wa.me/521234567890",
  },
  {
    icon: "✉️",
    label: "Correo",
    value: "hola@eloher.com.mx",
    href: "mailto:hola@eloher.com.mx",
  },
];

const hours = [
  { day: "Lunes – Viernes", time: "9:00 am – 7:00 pm" },
  { day: "Sábado", time: "9:00 am – 6:00 pm" },
  { day: "Domingo", time: "10:00 am – 4:00 pm" },
];

export default function ContactoPage() {
  return (
    <>
      {/* ── Header ── */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #2d4a38 0%, #4f8260 100%)" }}
      >
        <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">
          Estamos aquí para ti
        </p>
        <h1
          className="text-5xl md:text-7xl text-white mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
        >
          Contáctanos
        </h1>
        <div className="w-16 h-px bg-gold mx-auto mb-6" />
        <p className="text-sage-pale text-base max-w-lg mx-auto">
          Escríbenos para agendar tu cita o resolver cualquier duda. Respondemos
          en menos de 24 horas.
        </p>
      </section>

      {/* ── Content ── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form column */}
          <div>
            <h2
              className="text-3xl text-sage-dark mb-8"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Agenda tu cita
            </h2>
            <ContactForm />
          </div>

          {/* Info column */}
          <div className="flex flex-col gap-10">
            {/* Contact info */}
            <div>
              <h2
                className="text-3xl text-sage-dark mb-8"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Información de contacto
              </h2>
              <div className="flex flex-col gap-5">
                {info.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-xs tracking-widest uppercase text-gold mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#2a2a2a] hover:text-sage transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#2a2a2a]">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3
                className="text-2xl text-sage-dark mb-5"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Horarios
              </h3>
              <div className="flex flex-col gap-3">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center border-b border-sage-pale pb-3 last:border-0"
                  >
                    <span className="text-sm text-[#555]">{h.day}</span>
                    <span className="text-sm font-medium text-sage-dark">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="h-48 flex items-center justify-center border border-sage-pale bg-sage-pale/30"
              aria-label="Mapa de ubicación próximamente"
            >
              <div className="text-center text-[#999]">
                <span className="block text-3xl mb-2">📍</span>
                <p className="text-xs tracking-widest uppercase">
                  Mapa próximamente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
