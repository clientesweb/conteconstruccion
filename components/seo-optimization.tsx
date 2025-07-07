import Script from "next/script"

export default function SEOOptimization() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `}
      </Script>

      {/* Structured Data - Local Business */}
      <Script
        id="structured-data-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: "CONTE CONSTRUCCIÓN",
            image: "https://www.conteconstruccion.com/og-image.jpg",
            url: "https://www.conteconstruccion.com",
            telephone: "+5493516669950",
            address: {
              "@type": "PostalAddress",
              streetAddress: "",
              addressLocality: "Córdoba",
              addressRegion: "Córdoba",
              postalCode: "",
              addressCountry: "AR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -31.4201,
              longitude: -64.1888,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
            sameAs: ["https://instagram.com/conteconstruccion", "https://facebook.com/conteconstruccion"],
          }),
        }}
      />

      {/* Structured Data - FAQ */}
      <Script
        id="structured-data-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué es la tecnología Wood Frame?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Wood Frame es un sistema constructivo basado en estructuras de madera que ofrece excelente aislamiento térmico y acústico, rapidez de construcción y versatilidad de diseño.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué ventajas tiene el Sistema Tradicional Minimalista Moderno?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nuestro Sistema Tradicional Minimalista Moderno ofrece construcción rápida, excelente relación calidad-precio, diseño contemporáneo y gran versatilidad arquitectónica.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto tiempo toma construir una casa con Wood Frame?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El tiempo de construcción con Wood Frame es significativamente menor que con métodos tradicionales. Una vivienda típica puede completarse en 3-4 meses, dependiendo del tamaño y complejidad.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
