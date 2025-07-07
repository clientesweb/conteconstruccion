import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = [
    {
      url: "https://www.conteconstruccion.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.conteconstruccion.com/tipologias",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.conteconstruccion.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.conteconstruccion.com/metodo-constructivo",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.conteconstruccion.com/#nosotros",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.conteconstruccion.com/#servicios",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.conteconstruccion.com/#contacto",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.conteconstruccion.com/terminos-y-condiciones",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.conteconstruccion.com/politica-de-privacidad",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  // Agregar tipologías dinámicamente
  const tipologiasUrls = ["tipologia-1", "tipologia-2", "tipologia-3", "tipologia-4"].map((id) => ({
    url: `https://www.conteconstruccion.com/tipologias/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Agregar blog posts dinámicamente
  const blogUrls = [
    "wood-frame-construccion-sustentable",
    "ventajas-sistema-tradicional-minimalista",
    "eficiencia-energetica-viviendas",
  ].map((slug) => ({
    url: `https://www.conteconstruccion.com/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticUrls, ...tipologiasUrls, ...blogUrls]
}
