import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = [
    {
      url: "https://www.conteconstruccion.com.ar",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.conteconstruccion.com.ar/tipologias",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.conteconstruccion.com.ar/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.conteconstruccion.com.ar/metodo-constructivo",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.conteconstruccion.com.ar/#nosotros",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.conteconstruccion.com.ar/#servicios",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.conteconstruccion.com.ar/#contacto",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.conteconstruccion.com.ar/terminos-y-condiciones",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.conteconstruccion.com.ar/politica-de-privacidad",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  // Agregar tipologías dinámicamente
  const tipologiasUrls = ["tipologia-1", "tipologia-2", "tipologia-3", "tipologia-4"].map((id) => ({
    url: `https://www.conteconstruccion.com.ar/tipologias/${id}`,
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
    url: `https://www.conteconstruccion.com.ar/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticUrls, ...tipologiasUrls, ...blogUrls]
}
