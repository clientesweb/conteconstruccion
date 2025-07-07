import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { tipologiasData } from "@/data/tipologias"
import OffersSection from "@/components/offers-section"
import CTAButton from "@/components/cta-button"

export const metadata = {
  title: "Tipologías de Viviendas | CONTE CONSTRUCCIÓN",
  description:
    "Descubre nuestras tipologías de viviendas con Sistema Tradicional Minimalista Moderno. Diseños modernos, eficientes y personalizables para todos los estilos de vida.",
  alternates: {
    canonical: "https://www.conteconstruccion.com/tipologias",
  },
  openGraph: {
    title: "Tipologías de Viviendas | CONTE CONSTRUCCIÓN",
    description:
      "Descubre nuestras tipologías de viviendas con Sistema Tradicional Minimalista Moderno. Diseños modernos, eficientes y personalizables para todos los estilos de vida.",
    url: "https://www.conteconstruccion.com/tipologias",
    images: [{ url: "https://www.conteconstruccion.com/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tipologías de Viviendas | CONTE CONSTRUCCIÓN",
    description:
      "Descubre nuestras tipologías de viviendas con Sistema Tradicional Minimalista Moderno. Diseños modernos, eficientes y personalizables para todos los estilos de vida.",
    images: ["https://www.conteconstruccion.com/og-image.jpg"],
  },
}

export default function TipologiasPage() {
  const beneficios = [
    {
      icon: <i className="fa-solid fa-ruler text-2xl"></i>,
      title: "Construcción Rápida",
      description: "Reducimos hasta un 50% el tiempo de construcción comparado con métodos tradicionales.",
    },
    {
      icon: <i className="fa-solid fa-leaf text-2xl"></i>,
      title: "Sustentabilidad",
      description: "Materiales eco-amigables y procesos que reducen el impacto ambiental.",
    },
    {
      icon: <i className="fa-solid fa-bolt text-2xl"></i>,
      title: "Eficiencia Energética",
      description: "Aislamiento térmico superior que reduce el consumo energético hasta un 60%.",
    },
    {
      icon: <i className="fa-solid fa-lightbulb text-2xl"></i>,
      title: "Personalización",
      description: "Adaptamos cada diseño a tus necesidades específicas y preferencias estéticas.",
    },
    {
      icon: <i className="fa-solid fa-shield text-2xl"></i>,
      title: "Durabilidad",
      description: "Estructuras resistentes diseñadas para durar generaciones con mínimo mantenimiento.",
    },
    {
      icon: <i className="fa-solid fa-house text-2xl"></i>,
      title: "Diseño Moderno",
      description: "Estética contemporánea que combina funcionalidad y belleza en cada detalle.",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-navy-900 py-24 md:py-32" aria-labelledby="hero-heading">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-tipologias.png"
              alt="CONTE CONSTRUCCIÓN - Tipologías de Viviendas"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-navy-900/40"></div>
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div
                className="mb-6 inline-block rounded-full bg-orange-500/20 px-4 py-1 backdrop-blur-sm"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                <p className="font-adrianna text-sm font-medium uppercase tracking-wider text-white md:text-base">
                  Diseños para todos los estilos de vida
                </p>
              </div>
              <h1
                id="hero-heading"
                className="font-akony mb-6 text-4xl font-bold tracking-tight text-white text-shadow sm:text-5xl md:text-6xl"
              >
                NUESTRAS{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-orange-500">TIPOLOGÍAS</span>
                  <span className="absolute bottom-2 left-0 z-0 h-3 w-full bg-orange-500/30 md:bottom-3 md:h-4"></span>
                </span>
              </h1>
              <p className="font-adrianna mb-8 text-lg text-gray-300 md:text-xl">
                Descubre nuestras viviendas con Sistema Tradicional Minimalista Moderno. Diseñadas para combinar
                eficiencia, durabilidad y estética contemporánea, cada tipología está pensada para adaptarse
                perfectamente a diferentes estilos de vida y necesidades.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="font-adrianna group relative overflow-hidden bg-orange-500 text-white hover:bg-orange-500">
                  <span className="relative z-10 flex items-center justify-center">Solicitar Presupuesto</span>
                  <span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-orange-600 transition-transform duration-300 group-hover:translate-y-0"></span>
                </Button>
                <Button
                  variant="outline"
                  className="font-adrianna border-2 border-white bg-transparent text-white hover:bg-white/20 hover:text-white"
                >
                  Contactar Asesor
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative Elements - Consistente con la página de inicio */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-900 to-transparent"></div>
          <div className="absolute bottom-4 left-1/2 h-12 w-12 -translate-x-1/2 transform">
            <div className="h-full w-full animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full text-white opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* OffersSection */}
        <OffersSection />

        {/* Tipologías Grid Section */}
        <section className="py-16 md:py-24" aria-labelledby="tipologias-heading">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Image src="/images/logo.png" alt="CONTE CONSTRUCCIÓN" width={24} height={24} className="h-6 w-auto" />
              </div>
              <h2
                id="tipologias-heading"
                className="font-akony mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                EXPLORA NUESTRAS TIPOLOGÍAS
              </h2>
              <div className="mx-auto h-1 w-20 bg-orange-500"></div>
              <p className="font-adrianna mx-auto mt-6 max-w-3xl text-lg text-gray-600">
                Cada tipología está diseñada pensando en diferentes necesidades y estilos de vida. Encuentra la que
                mejor se adapta a ti.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {tipologiasData.map((tipologia, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={tipologia.image || "/placeholder.svg"}
                      alt={`Imagen de ${tipologia.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="font-adrianna inline-block rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                        {tipologia.metros} m²
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-1 flex items-start justify-between gap-2">
                      <h3 className="font-akony text-xl font-bold text-gray-900">{tipologia.title}</h3>
                      <div className="text-right flex-shrink-0">
                        <div className="font-adrianna text-xs font-bold text-red-500 uppercase tracking-wide">
                          {tipologia.precioOferta}
                        </div>
                        <div className="font-adrianna text-xl sm:text-2xl font-bold text-orange-500">
                          {tipologia.precio}
                        </div>
                      </div>
                    </div>
                    <p className="font-adrianna mb-4 text-gray-600">{tipologia.fullDescription}</p>

                    {/* Características principales */}
                    <div className="mb-4 grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <i className="fa-solid fa-bed text-orange-500"></i>
                        <span className="font-adrianna text-sm text-gray-700">
                          {tipologia.dormitorios} {tipologia.dormitorios === 1 ? "Dormitorio" : "Dormitorios"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="fa-solid fa-bath text-orange-500"></i>
                        <span className="font-adrianna text-sm text-gray-700">
                          {tipologia.banos} {tipologia.banos === 1 ? "Baño" : "Baños"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="fa-solid fa-vector-square text-orange-500"></i>
                        <span className="font-adrianna text-sm text-gray-700">{tipologia.metros} m²</span>
                      </div>
                      {tipologia.id === "tipologia-1" && (
                        <div className="flex items-center gap-2">
                          <i className="fa-solid fa-clock text-orange-500"></i>
                          <span className="font-adrianna text-sm text-gray-700">Entrega en 25 días</span>
                        </div>
                      )}
                    </div>

                    {/* Destacados */}
                    <div className="mb-4">
                      <h4 className="font-akony mb-2 text-sm font-bold text-gray-900">Destacados:</h4>
                      <div className="font-adrianna flex flex-wrap gap-2">
                        {tipologia.destacados.map((destacado, i) => (
                          <span
                            key={i}
                            className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-700"
                          >
                            {destacado}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      asChild
                      variant="ghost"
                      className="font-adrianna group/btn flex items-center gap-2 p-0 text-orange-500 hover:bg-transparent hover:text-orange-600"
                    >
                      <Link href={`/tipologias/${tipologia.id}`}>
                        <span>Ver Detalles Completos</span>
                        <i className="fa-solid fa-circle-arrow-right transition-transform duration-300 group-hover/btn:translate-x-1"></i>
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-orange-500 py-16 md:py-24" aria-labelledby="cta-heading">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="cta-heading" className="font-akony mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                ¿LISTO PARA HACER REALIDAD TU SUEÑO?
              </h2>
              <p className="font-adrianna mb-8 text-lg text-white/90">
                Contáctanos hoy mismo para obtener más información sobre nuestras tipologías o solicitar un presupuesto
                personalizado.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="font-adrianna border-2 border-white bg-white text-orange-500 hover:bg-white/90 hover:text-orange-600">
                  Solicitar Presupuesto
                </Button>
                <Button
                  variant="outline"
                  className="font-adrianna border-2 border-white bg-transparent text-white hover:bg-white/20 hover:text-white"
                >
                  Contactar Asesor
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CTAButton />
    </>
  )
}
