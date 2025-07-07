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
    sitemap: "https://www.conteconstruccion.com.ar/sitemap.xml",
    host: "https://www.conteconstruccion.com.ar",
  }
}
