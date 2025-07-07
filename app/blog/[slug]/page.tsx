import { blogPosts } from "@/data/blog-posts"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogPostClientPage from "./BlogPostClientPage"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Artículo no encontrado | CONTE CONSTRUCCIÓN",
      description: "El artículo que buscas no existe o ha sido removido.",
    }
  }

  return {
    title: `${post.title} | Blog CONTE CONSTRUCCIÓN`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }, { url: "/og-image.jpg" }],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClientPage params={params} />
}
