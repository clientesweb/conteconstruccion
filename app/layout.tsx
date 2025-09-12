import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import HeaderAnnouncement from "@/components/header-announcement"

// Metadatos para SEO
export const metadata: Metadata = {
  title: "CONTE CONSTRUCCIÓN - Viviendas Sistema Tradicional Minimalista Moderno",
  description:
    "Especialistas en viviendas con Sistema Tradicional Minimalista Moderno, combinando eficiencia, durabilidad y diseño contemporáneo",
  keywords: [
    "Sistema Tradicional Minimalista",
    "construcción",
    "viviendas",
    "casas",
    "eficiencia energética",
    "construcción sustentable",
    "Córdoba",
    "Argentina",
  ],
  authors: [{ name: "CONTE CONSTRUCCIÓN" }],
  creator: "CONTE CONSTRUCCIÓN",
  publisher: "CONTE CONSTRUCCIÓN",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://conteconstruccion.com.ar"),
  alternates: {
    canonical: "/",
  },
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
    url: "https://conteconstruccion.com.ar",
    title: "CONTE CONSTRUCCIÓN - Viviendas Sistema Tradicional Minimalista Moderno",
    description:
      "Especialistas en viviendas con Sistema Tradicional Minimalista Moderno, combinando eficiencia, durabilidad y diseño contemporáneo.",
    siteName: "CONTE CONSTRUCCIÓN",
    images: [
      {
        url: "/og-image-conte-construccion.jpg",
        width: 1200,
        height: 630,
        alt: "CONTE CONSTRUCCIÓN - Construimos Tu Hogar Ideal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CONTE CONSTRUCCIÓN - Viviendas Sistema Tradicional Minimalista Moderno",
    description:
      "Especialistas en viviendas con Sistema Tradicional Minimalista Moderno, combinando eficiencia, durabilidad y diseño contemporáneo.",
    images: ["/og-image-conte.jpg"],
    creator: "@conteconstruccion",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.png",
      },
    ],
  },
  manifest: "/manifest.json",
  category: "construction",
    generator: 'v0.app'
}

// Configuración de viewport y theme-color
export const viewport: Viewport = {
  themeColor: "#FF5000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Precargar fuentes críticas */}
        <link rel="preload" href="/fonts/Akony-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Adrianna-Extended.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Font display swap para evitar FOIT */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @font-face {
              font-family: 'Akony';
              src: url('/fonts/Akony-Bold.woff2') format('woff2');
              font-weight: bold;
              font-style: normal;
              font-display: swap;
            }
            
            @font-face {
              font-family: 'Adrianna';
              src: url('/fonts/Adrianna-Extended.woff2') format('woff2');
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }
          `,
          }}
        />

        {/* Preconectar a dominios externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />

        {/* Font Awesome con estrategia optimizada */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="min-h-screen bg-white font-adrianna text-gray-900 antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <HeaderAnnouncement />
          {children}
        </ThemeProvider>

        {/* Service Worker */}
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('Service Worker registration successful with scope: ', registration.scope);
                  },
                  function(err) {
                    console.log('Service Worker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CONTE CONSTRUCCIÓN",
              url: "https://conteconstruccion.com.ar",
              logo: "https://conteconstruccion.com.ar/favicon.png",
              sameAs: ["https://instagram.com/conteconstruccion", "https://facebook.com/conteconstruccion"],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+5493516669950",
                contactType: "customer service",
                areaServed: "AR",
                availableLanguage: "Spanish",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Monseñor P. Cabrera 3068 (B° Alto San Martín)",
                addressLocality: "Córdoba",
                addressRegion: "Córdoba",
                addressCountry: "AR",
              },
              description:
                "Especialistas en viviendas con Sistema Tradicional Minimalista Moderno, combinando eficiencia, durabilidad y diseño contemporáneo.",
            }),
          }}
        />
      </body>
    </html>
  )
}
