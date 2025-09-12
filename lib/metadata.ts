import type { Metadata } from "next"

const baseUrl = "https://conteconstruccion.com.ar"

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "CONTE CONSTRUCCIÓN",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@conteconstruccion",
  },
}

export function generatePageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  images = ["/og-image-conte-construccion.jpg"],
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
  images?: string[]
}): Metadata {
  const fullTitle = `${title} | CONTE CONSTRUCCIÓN`
  const url = `${baseUrl}${path}`

  return {
    ...defaultMetadata,
    title: fullTitle,
    description,
    keywords: [
      "CONTE CONSTRUCCIÓN",
      "construcción",
      "viviendas",
      "Córdoba",
      "Argentina",
      "Sistema Tradicional Minimalista",
      ...keywords,
    ],
    alternates: {
      canonical: path,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: fullTitle,
      description,
      url,
      images: images.map((image) => ({
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      })),
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: fullTitle,
      description,
      images,
    },
  }
}

// Metadata específica para páginas principales
export const pageMetadata = {
  home: generatePageMetadata({
    title: "Viviendas Sistema Tradicional Minimalista Moderno",
    description:
      "Especialistas en viviendas con Sistema Tradicional Minimalista Moderno, combinando eficiencia, durabilidad y diseño contemporáneo en Córdoba, Argentina.",
    keywords: ["casas modernas", "construcción sustentable", "eficiencia energética", "diseño minimalista"],
  }),

  nosotros: generatePageMetadata({
    title: "Nosotros - Empresa Constructora",
    description:
      "Conoce a CONTE CONSTRUCCIÓN, empresa líder en construcción de viviendas con Sistema Tradicional Minimalista en Córdoba. Más de 10 años de experiencia.",
    path: "/nosotros",
    keywords: ["empresa constructora", "experiencia", "equipo profesional", "trayectoria"],
  }),

  metodoConstructivo: generatePageMetadata({
    title: "Método Constructivo - Sistema Tradicional Minimalista",
    description:
      "Descubre nuestro innovador método constructivo Sistema Tradicional Minimalista: eficiente, sustentable y de alta calidad para tu hogar ideal.",
    path: "/metodo-constructivo",
    keywords: ["método constructivo", "sistema tradicional", "construcción eficiente", "tecnología constructiva"],
  }),

  tipologias: generatePageMetadata({
    title: "Tipologías de Viviendas - Modelos Disponibles",
    description:
      "Explora nuestras tipologías de viviendas: diseños modernos, funcionales y adaptables a tus necesidades. Encuentra tu hogar ideal.",
    path: "/tipologias",
    keywords: ["tipologías", "modelos de casas", "diseños de viviendas", "planos de casas"],
  }),

  blog: generatePageMetadata({
    title: "Blog - Construcción y Arquitectura",
    description:
      "Lee nuestro blog sobre construcción, arquitectura sustentable, tendencias en viviendas y consejos para tu proyecto constructivo.",
    path: "/blog",
    keywords: ["blog construcción", "arquitectura", "tendencias", "consejos construcción"],
  }),

  contacto: generatePageMetadata({
    title: "Contacto - Solicita tu Presupuesto",
    description:
      "Contáctanos para solicitar un presupuesto personalizado para tu proyecto. Estamos en Córdoba, Argentina. Tel: (0351) 6669950",
    path: "/contacto",
    keywords: ["contacto", "presupuesto", "consulta", "teléfono", "WhatsApp"],
  }),
}
