import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPost, getAllSlugs } from "@/lib/posts";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://eloher.com.mx/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | EloHer Spa Monterrey`,
      description: post.excerpt,
      url: `https://eloher.com.mx/blog/${post.slug}`,
      images: [{ url: post.image, width: 1200, height: 800, alt: post.imageAlt }],
    },
  };
}

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Organization", name: "EloHer Beauty & Wellness Spa" },
    publisher: {
      "@type": "Organization",
      name: "EloHer Beauty & Wellness Spa",
      logo: {
        "@type": "ImageObject",
        url: "https://eloher.com.mx/logo-horizontal.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back link */}
      <div className="bg-cream border-b border-sage/20 px-6 py-3">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-xs tracking-[0.2em] uppercase text-taupe hover:text-olive transition-colors"
          >
            ← Volver al Blog
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-64 md:h-[420px] w-full">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Post header */}
      <div className="bg-beige px-6 py-12 text-center">
        <span className="inline-block bg-gold text-white text-[9px] tracking-[0.25em] uppercase px-3 py-1 mb-5">
          {post.category}
        </span>
        <h1
          className="text-3xl md:text-5xl text-olive max-w-2xl mx-auto leading-tight mb-5"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
        >
          {post.title}
        </h1>
        <div className="flex items-center gap-3 justify-center text-taupe text-xs tracking-wider">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime} de lectura</span>
        </div>
      </div>

      {/* Article content */}
      <article className="py-16 px-6 bg-cream">
        <div
          className="max-w-2xl mx-auto blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* CTA */}
      <section className="py-16 px-6 bg-beige text-center">
        <p className="text-xs tracking-[0.5em] uppercase text-gold mb-3">
          EloHer Spa · Monterrey
        </p>
        <h2
          className="text-3xl md:text-4xl text-olive mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
        >
          ¿Lista para tu próxima sesión?
        </h2>
        <p className="text-sm text-taupe mb-8 max-w-md mx-auto">
          Real de Cumbres 458, 2° Piso, Monterrey. Escríbenos y agenda en menos de 24 horas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacto"
            className="px-8 py-4 bg-olive text-white text-xs tracking-[0.2em] uppercase hover:bg-olive-mid transition-colors duration-300"
          >
            Agendar cita
          </Link>
          <a
            href="https://wa.me/521234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-olive text-olive text-xs tracking-[0.2em] uppercase hover:bg-olive hover:text-white transition-colors duration-300"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
