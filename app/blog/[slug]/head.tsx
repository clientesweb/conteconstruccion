import { blogPosts } from "@/data/blog-posts"

export default function Head({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return (
      <>
        <title>Artículo no encontrado | CONTE CONSTRUCCIÓN</title>
        <meta name="description" content="El artículo que buscas no existe o ha sido removido." />
      </>
    )
  }

  return (
    <>
      <title>{`${post.title} | CONTE CONSTRUCCIÓN`}</title>
      <meta name="description" content={post.excerpt} />
      <meta property="og:title" content={`${post.title} | CONTE CONSTRUCCIÓN`} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:image" content={post.coverImage} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${post.title} | CONTE CONSTRUCCIÓN`} />
      <meta name="twitter:description" content={post.excerpt} />
      <meta name="twitter:image" content={post.coverImage} />
    </>
  )
}
