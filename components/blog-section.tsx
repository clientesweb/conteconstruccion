import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/data/blog-posts"

export default function BlogSection() {
  // Mostrar solo el último artículo del blog
  const latestPost = blogPosts[0]

  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
            <i className="fa-solid fa-newspaper text-orange-500 text-xl"></i>
          </div>
          <h2 className="font-akony mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            NUESTRO BLOG
          </h2>
          <div className="mx-auto h-1 w-20 bg-orange-500"></div>
          <p className="font-adrianna mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Artículos, consejos y novedades sobre Sistema Tradicional Minimalista y tendencias en construcción
            sustentable.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <article className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-full min-h-[300px] w-full overflow-hidden">
                <Image
                  src={latestPost.coverImage || "/placeholder.svg"}
                  alt={latestPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-adrianna rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                    {latestPost.category}
                  </span>
                  <span className="font-adrianna text-sm text-gray-500">{latestPost.date}</span>
                </div>
                <h3 className="font-akony mb-4 text-2xl font-bold text-gray-900">{latestPost.title}</h3>
                <p className="font-adrianna mb-6 text-gray-600">{latestPost.excerpt}</p>
                <div className="mt-auto flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="font-adrianna group/btn relative overflow-hidden bg-orange-500 text-white hover:bg-orange-500"
                  >
                    <Link href={`/blog/${latestPost.slug}`}>
                      <span className="relative z-10 flex items-center justify-center">
                        Leer Artículo Completo
                        <i className="fa-solid fa-arrow-right ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"></i>
                      </span>
                      <span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-orange-600 transition-transform duration-300 group-hover/btn:translate-y-0"></span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="font-adrianna border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    <Link href="/blog">Ver Todos los Artículos</Link>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
