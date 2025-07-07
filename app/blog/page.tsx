import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/data/blog-posts"
import { Search, Calendar, Clock, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import CTAButton from "@/components/cta-button"

// Actualizar los metadatos para incluir la nueva URL
export const metadata = {
  title: "Blog | CONTE CONSTRUCCIÓN",
  description:
    "Artículos sobre construcción con Sistema Tradicional Minimalista y tendencias en construcción sustentable.",
  alternates: {
    canonical: "https://www.conteconstruccion.com/blog",
  },
  openGraph: {
    title: "Blog | CONTE CONSTRUCCIÓN",
    description:
      "Artículos sobre construcción con Sistema Tradicional Minimalista y tendencias en construcción sustentable.",
    url: "https://www.conteconstruccion.com/blog",
    images: [{ url: "https://www.conteconstruccion.com/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | CONTE CONSTRUCCIÓN",
    description:
      "Artículos sobre construcción con Sistema Tradicional Minimalista y tendencias en construcción sustentable.",
    images: ["https://www.conteconstruccion.com/og-image.jpg"],
  },
}

export default function BlogPage() {
  // Categorías disponibles
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-navy-900 py-16 md:py-24">
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="/images/blog/wood-frame-sketches.jpeg"
              alt="Planos de construcción Wood Frame"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/70"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-akony mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                BLOG DE CONSTRUCCIÓN
              </h1>
              <p className="font-adrianna text-lg text-gray-300">
                Artículos, consejos y novedades sobre construcción con Sistema Tradicional Minimalista y tendencias en
                construcción sustentable.
              </p>

              {/* Barra de búsqueda */}
              <div className="mt-8 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    className="font-adrianna block w-full rounded-full border-0 bg-white/10 py-3 pl-10 pr-4 text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Buscar artículos..."
                    aria-label="Buscar artículos"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filtros de categoría */}
        <section className="border-b border-gray-200 bg-white py-4 shadow-sm">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Button
                variant="ghost"
                className={cn("font-adrianna rounded-full", "bg-orange-50 text-orange-700 hover:bg-orange-100")}
              >
                Todos
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  className="font-adrianna rounded-full hover:bg-orange-50 hover:text-orange-700"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            {/* Artículo destacado */}
            {blogPosts.length > 0 && (
              <div className="mb-16">
                <h2 className="font-akony mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">Artículo Destacado</h2>
                <article className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="relative h-full min-h-[300px] w-full overflow-hidden">
                      <Image
                        src={blogPosts[0].coverImage || "/placeholder.svg"}
                        alt={blogPosts[0].title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </div>
                    <div className="flex flex-col justify-center p-6 md:p-8">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="font-adrianna rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                          {blogPosts[0].category}
                        </span>
                        <span className="font-adrianna flex items-center text-sm text-gray-500">
                          <Calendar className="mr-1 h-4 w-4" />
                          {blogPosts[0].date}
                        </span>
                        <span className="font-adrianna flex items-center text-sm text-gray-500">
                          <Clock className="mr-1 h-4 w-4" />5 min de lectura
                        </span>
                      </div>
                      <h3 className="font-akony mb-4 text-2xl font-bold text-gray-900">{blogPosts[0].title}</h3>
                      <p className="font-adrianna mb-6 text-gray-600">{blogPosts[0].excerpt}</p>
                      <div className="mt-auto flex flex-wrap gap-4">
                        <Button
                          asChild
                          className="font-adrianna group/btn relative overflow-hidden bg-orange-500 text-white hover:bg-orange-500"
                        >
                          <Link href={`/blog/${blogPosts[0].slug}`}>
                            <span className="relative z-10 flex items-center justify-center">
                              Leer Artículo Completo
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </span>
                            <span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-orange-600 transition-transform duration-300 group-hover/btn:translate-y-0"></span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            )}

            <h2 className="font-akony mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">Todos los Artículos</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="font-adrianna rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                        {post.category}
                      </span>
                      <span className="font-adrianna flex items-center text-xs text-gray-500">
                        <Calendar className="mr-1 h-3 w-3" />
                        {post.date}
                      </span>
                    </div>
                    <h2 className="font-akony mb-3 text-xl font-bold text-gray-900">{post.title}</h2>
                    <p className="font-adrianna mb-6 flex-1 text-gray-600">{post.excerpt}</p>
                    <Button
                      asChild
                      variant="ghost"
                      className="font-adrianna group/btn flex w-fit items-center gap-2 p-0 text-orange-500 hover:bg-transparent hover:text-orange-600"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        <span>Leer más</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-16 rounded-xl bg-gray-50 p-8 md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-akony mb-4 text-2xl font-bold text-gray-900">Suscríbete a nuestro newsletter</h2>
                <p className="font-adrianna mb-6 text-gray-600">
                  Recibe las últimas novedades, artículos y consejos sobre construcción sustentable directamente en tu
                  correo.
                </p>
                <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    required
                    aria-label="Tu correo electrónico"
                  />
                  <Button className="font-adrianna bg-orange-500 text-white hover:bg-orange-600">Suscribirme</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-orange-500 py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-akony mb-6 text-3xl font-bold tracking-tight text-white">
                ¿LISTO PARA HACER REALIDAD TU SUEÑO?
              </h2>
              <p className="font-adrianna mb-8 text-lg text-white/90">
                Contáctanos hoy mismo para obtener más información sobre nuestras tipologías o solicitar un presupuesto
                personalizado.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  className="font-adrianna border-2 border-white bg-white text-orange-500 hover:bg-white/90 hover:text-orange-600"
                >
                  <Link href="/#contacto">Solicitar Presupuesto</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="font-adrianna border-2 border-white bg-transparent text-white hover:bg-white/20 hover:text-white"
                >
                  <Link href="/#tipologias">Ver Tipologías</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CTAButton />
    </>
  )
}
