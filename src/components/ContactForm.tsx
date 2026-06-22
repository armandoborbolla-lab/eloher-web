"use client";

import { useState } from "react";

const services = [
  "Masaje Sueco Relajante",
  "Masaje de Tejido Profundo",
  "Masaje con Piedras Calientes",
  "Masaje Aromaterapia",
  "Facial Hidratante",
  "Facial Anti-Edad",
  "Ritual Corporal",
  "Manicure Spa",
  "Pedicure Spa",
  "Depilación",
  "Otro / No sé",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "5697779e-0c7a-4da7-bb95-f86c80927bc6",
          subject: `Nueva solicitud — ${form.servicio || "EloHer Spa"}`,
          from_name: "EloHer Spa Website",
          name: form.nombre,
          email: form.email,
          phone: form.telefono,
          service: form.servicio,
          message: form.mensaje || "Sin mensaje adicional.",
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="bg-sage-pale border border-sage p-8 text-center">
        <span className="block text-4xl mb-4">🌿</span>
        <h3
          className="text-2xl text-sage-dark mb-2"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          ¡Gracias, {form.nombre}!
        </h3>
        <p className="text-[#555] text-sm leading-relaxed">
          Hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto
          para confirmar tu cita.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setForm({ nombre: "", email: "", telefono: "", servicio: "", mensaje: "" });
          }}
          className="mt-6 text-xs tracking-widest uppercase text-sage hover:text-sage-dark transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#555] mb-2">
            Nombre *
          </label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
            className="w-full border border-[#ddd] bg-white px-4 py-3 text-sm text-[#2a2a2a] placeholder:text-[#aaa] focus:outline-none focus:border-sage transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#555] mb-2">
            Correo *
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="tu@correo.com"
            className="w-full border border-[#ddd] bg-white px-4 py-3 text-sm text-[#2a2a2a] placeholder:text-[#aaa] focus:outline-none focus:border-sage transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#555] mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="(123) 456-7890"
            className="w-full border border-[#ddd] bg-white px-4 py-3 text-sm text-[#2a2a2a] placeholder:text-[#aaa] focus:outline-none focus:border-sage transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#555] mb-2">
            Servicio de interés
          </label>
          <select
            name="servicio"
            value={form.servicio}
            onChange={handleChange}
            className="w-full border border-[#ddd] bg-white px-4 py-3 text-sm text-[#2a2a2a] focus:outline-none focus:border-sage transition-colors appearance-none"
          >
            <option value="">Selecciona uno…</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-widest uppercase text-[#555] mb-2">
          Mensaje
        </label>
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          rows={4}
          placeholder="Cuéntanos más sobre lo que buscas…"
          className="w-full border border-[#ddd] bg-white px-4 py-3 text-sm text-[#2a2a2a] placeholder:text-[#aaa] focus:outline-none focus:border-sage transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="px-8 py-4 bg-sage text-white text-sm tracking-widest uppercase hover:bg-sage-dark transition-colors duration-300 disabled:opacity-60"
      >
        {sending ? "Enviando…" : "Enviar Mensaje"}
      </button>

      {error && (
        <p className="text-sm text-red-500 text-center">
          Hubo un problema al enviar. Intenta de nuevo o escríbenos por WhatsApp.
        </p>
      )}

      <p className="text-xs text-[#999] leading-relaxed">
        También puedes escribirnos directamente por{" "}
        <a
          href="https://wa.me/521234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sage underline"
        >
          WhatsApp
        </a>{" "}
        para una respuesta más rápida.
      </p>
    </form>
  );
}
