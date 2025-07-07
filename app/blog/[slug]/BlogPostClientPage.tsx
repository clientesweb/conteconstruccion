"use client"

import { cn } from "@/lib/utils"

import { useState, useEffect, useRef } from "react"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { notFound, useRouter } from "next/navigation"
import { blogPosts } from "@/data/blog-posts"
import { ArrowLeft, ArrowRight, Copy, Check, Facebook, Twitter } from "lucide-react"
import Footer from "@/components/footer"
import CTAButton from "@/components/cta-button"

export default function BlogPostClientPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)
  const router = useRouter()
  const [isLinkCopied, setIsLinkCopied] = useState(false)
  const [estimatedReadTime, setEstimatedReadTime] = useState("5 min")
  const [activeHeading, setActiveHeading] = useState("")
  const contentRef = useRef<HTMLDivElement>(null)
  const headingRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  // Encontrar el índice del post actual para navegación
  const currentIndex = blogPosts.findIndex((p) => p.slug === params.slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  useEffect(() => {
    if (!post) return

    // Calcular tiempo de lectura estimado
    const wordCount = post.content.reduce((count, section) => {
      if (section.type === "paragraph" || section.type === "heading" || section.type === "subheading") {
        return count + section.content.split(/\s+/).length
      } else if (section.type === "list") {
        return count + section.items.join(" ").split(/\s+/).length
      }
      return count
    }, 0)

    // Promedio de 200 palabras por minuto
    const readingTime = Math.max(1, Math.ceil(wordCount / 200))
    setEstimatedReadTime(`${readingTime} min`)

    // Inicializar refs para los encabezados
    const headings: { [key: string]: HTMLElement | null } = {}
    if (contentRef.current) {
      contentRef.current.querySelectorAll("h2, h3").forEach((heading) => {
        const id = heading.textContent?.toLowerCase().replace(/\s+/g, "-") || ""
        headings[id] = heading as HTMLElement

        // Añadir IDs a los encabezados para navegación
        if (heading.id !== id) {
          heading.id = id
        }
      })
    }
    headingRefs.current = headings

    // Configurar observador de intersección para detectar encabezados visibles
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -80% 0px" },
    )

    Object.values(headingRefs.current).forEach((heading) => {
      if (heading) observer.observe(heading)
    })

    return () => {
      Object.values(headingRefs.current).forEach((heading) => {
        if (heading) observer.unobserve(heading)
      })
    }
  }, [post])

  if (!post) {
    notFound()
  }

  // Obtener posts relacionados (excluyendo el actual)
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)

  // Función para compartir
  const handleShare = async (platform?: string) => {
    const url = window.location.href
    const title = post.title

    try {
      if (platform === "facebook") {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
      } else if (platform === "twitter") {
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
          "_blank",
        )
      } else if (platform === "whatsapp") {
        window.open(`https://wa.me/?text=${encodeURIComponent(title + " " + url)}`, "_blank")
      } else if (platform === "copy" || !platform) {
        await navigator.clipboard.writeText(url)
        setIsLinkCopied(true)
        setTimeout(() => setIsLinkCopied(false), 2000)
      } else if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: url,
        })
      }
    } catch (error) {
      console.error("Error al compartir:", error)
    }
  }

  // Extraer encabezados para la tabla de contenidos
  const tableOfContents = post.content
    .filter((section) => section.type === "heading" || section.type === "subheading")
    .map((section) => ({
      title: section.content,
      id: section.content.toLowerCase().replace(/\s+/g, "-"),
      isSubheading: section.type === "subheading",
    }))

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-navy-900 py-16 md:py-24">
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
              aria-hidden="true"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/70"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/blog"
                className="font-adrianna mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label="Volver al Blog"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Volver al Blog</span>
              </Link>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="font-adrianna rounded-full bg-orange-500/20 px-3 py-1 text-sm font-medium text-orange-300 backdrop-blur-sm">
                  {post.category}
                </span>
                <span className="font-adrianna text-sm text-gray-300">{post.date}</span>
                <span className="font-adrianna text-sm text-gray-300">•</span>
                <span className="font-adrianna text-sm text-gray-300">{estimatedReadTime} de lectura</span>
              </div>
              <h1 className="font-akony mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                {post.title}
              </h1>
              <p className="font-adrianna text-lg text-gray-300">{post.excerpt}</p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_280px]">
              <div>
                <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl">
                  <Image
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                  />
                </div>

                {/* Botones de compartir para móvil */}
                <div className="mb-8 flex items-center justify-between rounded-lg bg-gray-50 p-4 lg:hidden">
                  <span className="font-adrianna text-sm font-medium text-gray-700">Compartir:</span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => handleShare("facebook")}
                      aria-label="Compartir en Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => handleShare("twitter")}
                      aria-label="Compartir en Twitter"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => handleShare("whatsapp")}
                      aria-label="Compartir en WhatsApp"
                    >
                      <i className="fa-brands fa-whatsapp text-sm"></i>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => handleShare("copy")}
                      aria-label="Copiar enlace"
                    >
                      {isLinkCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none" ref={contentRef}>
                  {post.content.map((section, index) => (
                    <div key={index}>
                      {section.type === "paragraph" && <p className="font-adrianna text-gray-700">{section.content}</p>}
                      {section.type === "heading" && (
                        <h2
                          id={section.content.toLowerCase().replace(/\s+/g, "-")}
                          className="font-akony mt-8 scroll-mt-24 text-2xl font-bold text-gray-900"
                        >
                          {section.content}
                        </h2>
                      )}
                      {section.type === "subheading" && (
                        <h3
                          id={section.content.toLowerCase().replace(/\s+/g, "-")}
                          className="font-akony mt-6 scroll-mt-24 text-xl font-bold text-gray-900"
                        >
                          {section.content}
                        </h3>
                      )}
                      {section.type === "list" && (
                        <ul className="font-adrianna list-disc pl-6 text-gray-700">
                          {section.items.map((item, i) => (
                            <li key={i} className="mb-2">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.type === "image" && (
                        <figure className="my-8">
                          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                            <Image
                              src={section.src || "/placeholder.svg"}
                              alt={section.alt || ""}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                            />
                          </div>
                          {section.caption && (
                            <figcaption className="font-adrianna mt-2 text-center text-sm text-gray-500">
                              {section.caption}
                            </figcaption>
                          )}
                        </figure>
                      )}
                      {section.type === "quote" && (
                        <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700">
                          {section.content}
                          {section.author && <cite className="mt-2 block text-sm">— {section.author}</cite>}
                        </blockquote>
                      )}
                    </div>
                  ))}
                </div>

                {/* Author Info */}
                <div className="mt-12 flex items-center gap-4 rounded-xl bg-gray-50 p-6">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={post.authorLogo || "/images/logo.png"}
                      alt="CONTE CONSTRUCCIÓN"
                      fill
                      className="object-contain"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h3 className="font-akony text-lg font-bold text-gray-900">{post.author}</h3>
                    <p className="font-adrianna text-gray-600">
                      Especialistas en viviendas Wood Frame con tecnología EIFS, combinando eficiencia, durabilidad y
                      diseño moderno.
                    </p>
                  </div>
                </div>

                {/* Navegación entre posts */}
                <nav className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:justify-between">
                  {prevPost ? (
                    <Link
                      href={`/blog/${prevPost.slug}`}
                      className="group flex items-center gap-2 rounded-lg border border-gray-200 p-4 transition-colors hover:border-orange-200 hover:bg-orange-50"
                    >
                      <ArrowLeft className="h-5 w-5 text-gray-400 transition-transform group-hover:text-orange-500 group-hover:-translate-x-1" />
                      <div>
                        <span className="font-adrianna block text-xs text-gray-500">Artículo anterior</span>
                        <span className="font-akony text-sm font-bold text-gray-900 group-hover:text-orange-500">
                          {prevPost.title}
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <div></div>
                  )}

                  {nextPost && (
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="group flex items-center justify-end gap-2 rounded-lg border border-gray-200 p-4 text-right transition-colors hover:border-orange-200 hover:bg-orange-50"
                    >
                      <div>
                        <span className="font-adrianna block text-xs text-gray-500">Siguiente artículo</span>
                        <span className="font-akony text-sm font-bold text-gray-900 group-hover:text-orange-500">
                          {nextPost.title}
                        </span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:text-orange-500 group-hover:translate-x-1" />
                    </Link>
                  )}
                </nav>
              </div>

              {/* Sidebar */}
              <div className="hidden lg:block">
                {/* Botones de compartir */}
                <div className="sticky top-24 space-y-8">
                  <div className="rounded-lg border border-gray-200 p-6">
                    <h4 className="font-akony mb-4 text-lg font-bold text-gray-900">Compartir</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => handleShare("facebook")}
                      >
                        <i className="fa-brands fa-facebook-f text-sm"></i>
                        <span className="font-adrianna">Facebook</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => handleShare("twitter")}
                      >
                        <i className="fa-brands fa-x-twitter text-sm"></i>
                        <span className="font-adrianna">Twitter</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => handleShare("whatsapp")}
                      >
                        <i className="fa-brands fa-whatsapp text-sm"></i>
                        <span className="font-adrianna">WhatsApp</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => handleShare("copy")}
                      >
                        {isLinkCopied ? (
                          <>
                            <Check className="h-4 w-4" />
                            <span className="font-adrianna">¡Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            <span className="font-adrianna">Copiar enlace</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Tabla de contenidos */}
                  {tableOfContents.length > 0 && (
                    <div className="rounded-lg border border-gray-200 p-6">
                      <h4 className="font-akony mb-4 text-lg font-bold text-gray-900">Contenido</h4>
                      <nav className="space-y-2">
                        {tableOfContents.map((item, index) => (
                          <a
                            key={index}
                            href={`#${item.id}`}
                            className={cn(
                              "font-adrianna block transition-colors hover:text-orange-500",
                              item.isSubheading ? "ml-4 text-sm text-gray-600" : "text-gray-900",
                              activeHeading === item.id ? "text-orange-500 font-medium" : "",
                            )}
                            onClick={(e) => {
                              e.preventDefault()
                              const element = document.getElementById(item.id)
                              if (element) {
                                const yOffset = -100 // Ajuste para el header fijo
                                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                                window.scrollTo({ top: y, behavior: "smooth" })
                              }
                            }}
                          >
                            {item.title}
                          </a>
                        ))}
                      </nav>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="rounded-lg bg-orange-50 p-6">
                    <h4 className="font-akony mb-2 text-lg font-bold text-gray-900">
                      ¿Interesado en nuestros servicios?
                    </h4>
                    <p className="font-adrianna mb-4 text-sm text-gray-600">
                      Contáctanos hoy mismo para obtener más información sobre nuestras tipologías o solicitar un
                      presupuesto personalizado.
                    </p>
                    <Button asChild className="font-adrianna w-full bg-orange-500 text-white hover:bg-orange-600">
                      <Link href="/#contacto">Solicitar Presupuesto</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="container px-4 md:px-6">
              <h2 className="font-akony mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
                Artículos Relacionados
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={post.coverImage || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="font-adrianna rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                          {post.category}
                        </span>
                        <span className="font-adrianna text-xs text-gray-500">{post.date}</span>
                      </div>
                      <h3 className="font-akony mb-3 text-lg font-bold text-gray-900">{post.title}</h3>
                      <p className="font-adrianna mb-4 flex-1 text-sm text-gray-600">{post.excerpt}</p>
                      <Button
                        asChild
                        variant="ghost"
                        className="font-adrianna group/btn flex w-fit items-center gap-2 p-0 text-orange-500 hover:bg-transparent hover:text-orange-600"
                      >
                        <Link href={`/blog/${post.slug}`}>
                          <span>Leer más</span>
                          <i className="fa-solid fa-circle-arrow-right transition-transform duration-300 group-hover/btn:translate-x-1"></i>
                        </Link>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

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
