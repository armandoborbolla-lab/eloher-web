import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog de Bienestar",
  description:
    "Consejos, guías y artículos sobre faciales, masajes, drenaje linfático y bienestar integral. Todo lo que necesitas saber antes de tu próxima visita a EloHer Spa Monterrey.",
  keywords: [
    "blog spa Monterrey",
    "consejos faciales piel",
    "beneficios drenaje linfático",
    "cuidado de la piel Monterrey",
    "bienestar spa Monterrey",
  ],
  alternates: { canonical: "https://eloher.com.mx/blog" },
  openGraph: {
    title: "Blog de Bienestar — EloHer Spa Monterrey",
    description:
      "Consejos y guías sobre faciales, masajes y bienestar integral desde nuestro spa boutique en Monterrey.",
    url: "https://eloher.com.mx/blog",
  },
};

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 px-6 text-center bg-beige">
        <p className="text-xs tracking-[0.5em] uppercase text-gold mb-4">
          Conocimiento & Bienestar
        </p>
        <h1
          className="text-5xl md:text-7xl text-olive mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
        >
          Blog
        </h1>
        <div className="w-16 h-px bg-gold mx-auto mb-6" />
        <p className="text-taupe text-base max-w-lg mx-auto">
          Artículos sobre tratamientos, cuidado de la piel y bienestar para que
          llegues a EloHer sabiendo exactamente lo que tu cuerpo necesita.
        </p>
      </section>

      {/* Posts grid */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-gold text-white text-[9px] tracking-[0.25em] uppercase px-3 py-1">
                  {post.category}
                </span>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-taupe">{formatDate(post.date)}</span>
                  <span className="text-taupe/40">·</span>
                  <span className="text-xs text-taupe">{post.readTime} lectura</span>
                </div>
                <h2
                  className="text-xl text-olive mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 500 }}
                >
                  {post.title}
                </h2>
                <p className="text-sm text-[#555] leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="self-start text-xs tracking-[0.2em] uppercase text-sage hover:text-olive transition-colors duration-200 border-b border-sage hover:border-olive pb-0.5"
                >
                  Leer artículo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
