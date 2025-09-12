import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/private/", "/admin/"],
      },
    ],
    sitemap: "https://conteconstruccion.com.ar/sitemap.xml", // actualizada URL del sitemap para coincidir con el dominio correcto
    host: "https://conteconstruccion.com.ar", // actualizada URL del host para coincidir con el dominio correcto
  }
}
