"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BedDouble,
  Bath,
  Grid2X2,
  Check,
  Share2,
  Heart,
  ArrowRight,
  CheckCircle2,
  FileText,
  Home,
  Info,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { tipologiasData } from "@/data/tipologias"
import CTAButton from "@/components/cta-button"

export default function TipologiaDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [tipologia, setTipologia] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showShareTooltip, setShowShareTooltip] = useState(false)
  const [isLinkCopied, setIsLinkCopied] = useState(false)

  useEffect(() => {
    // Encontrar la tipología por ID
    const foundTipologia = tipologiasData.find((t) => t.id === params.id)

    if (foundTipologia) {
      setTipologia(foundTipologia)
    } else {
      // Redirigir a 404 si no se encuentra
      router.push("/tipologias/not-found")
    }

    setIsLoading(false)
  }, [params.id, router])

  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${tipologia.title} - ${tipologia.subtitle} | CONTE CONSTRUCCIÓN`,
          text: tipologia.fullDescription,
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing", error))
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard.writeText(window.location.href)
      setIsLinkCopied(true)
      setShowShareTooltip(true)

      setTimeout(() => {
        setShowShareTooltip(false)
        setTimeout(() => setIsLinkCopied(false), 300)
      }, 2000)
    }
  }

  const handleDownloadPlano = () => {
    // Crear un enlace para descargar el PDF
    if (tipologia.planos && tipologia.planos.pdf) {
      const link = document.createElement("a")
      link.href = tipologia.planos.pdf
      link.download = `Plano-${tipologia.title.replace(/\s+/g, "-")}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else if (tipologia.planos && tipologia.planos.planta) {
      const link = document.createElement("a")
      link.href = tipologia.planos.planta
      link.download = `Plano-${tipologia.title.replace(/\s+/g, "-")}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="min-h-[60vh] flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-48 bg-gray-200 rounded"></div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (!tipologia) {
    return null // El router ya se encargará de redirigir
  }

  return (
    <>
      <Header />
      <main>
        {/* Navigation Bar */}
        <section className="bg-white border-b border-gray-200 pt-20 pb-4">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                href="/tipologias"
                className="font-adrianna flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition-colors"
              >
                <i className="fa-solid fa-arrow-left text-xs"></i>
                <span>Volver a Tipologías</span>
              </Link>

              <div className="flex flex-wrap gap-3">
                <Button className="font-adrianna group relative overflow-hidden bg-orange-500 text-white hover:bg-orange-600 px-6 py-2">
                  <span className="relative z-10 flex items-center justify-center">Solicitar Presupuesto</span>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="font-adrianna border-2 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 flex items-center gap-2 px-4 py-2"
                >
                  <Link href="/metodo-constructivo">
                    <Info className="h-4 w-4" />
                    <span>Ver Método Constructivo</span>
                  </Link>
                </Button>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                    aria-label="Guardar en favoritos"
                  >
                    <Heart className="h-5 w-5" aria-hidden="true" />
                  </Button>
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                      onClick={handleShareClick}
                      aria-label="Compartir"
                    >
                      {isLinkCopied ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <Share2 className="h-5 w-5" aria-hidden="true" />
                      )}
                    </Button>
                    {showShareTooltip && (
                      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-800 px-3 py-1 text-sm text-white">
                        ¡Enlace copiado!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Render Section */}
        <section className="py-8">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
                <div className="relative h-96 md:h-[500px] lg:h-[600px]">
                  <Image
                    src={tipologia.image || "/placeholder.svg"}
                    alt={`Vista exterior de ${tipologia.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 90vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floor Plan Section */}
        <section className="py-8">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
                <div className="relative h-96 md:h-[500px] lg:h-[600px]">
                  <Image
                    src={tipologia.planos?.planta || "/placeholder.svg"}
                    alt={`Plano de ${tipologia.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 90vw"
                    className="object-contain bg-white p-4"
                  />
                </div>
                <div className="p-4 bg-white flex justify-between items-center">
                  <div>
                    <h3 className="font-akony text-lg font-bold text-gray-900">Plano de Planta</h3>
                    <p className="font-adrianna text-gray-600">Distribución de espacios</p>
                  </div>
                  <Button
                    variant="outline"
                    className="font-adrianna flex items-center gap-2 bg-transparent"
                    onClick={handleDownloadPlano}
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    <span>Descargar</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Price and Info Section */}
        <section className="py-8 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Title and Specs */}
                <div>
                  <h1 className="font-akony mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                    {tipologia.title}
                  </h1>
                  <h2 className="font-adrianna mb-6 text-xl text-orange-500 md:text-2xl">{tipologia.subtitle}</h2>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex justify-center mb-2">
                        <i className="fa-solid fa-bed text-orange-500 text-2xl"></i>
                      </div>
                      <p className="font-adrianna text-sm text-gray-500">Dormitorios</p>
                      <p className="font-adrianna text-xl text-gray-900 font-bold">{tipologia.dormitorios}</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex justify-center mb-2">
                        <i className="fa-solid fa-bath text-orange-500 text-2xl"></i>
                      </div>
                      <p className="font-adrianna text-sm text-gray-500">Baños</p>
                      <p className="font-adrianna text-xl text-gray-900 font-bold">{tipologia.banos}</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex justify-center mb-2">
                        <i className="fa-solid fa-vector-square text-orange-500 text-2xl"></i>
                      </div>
                      <p className="font-adrianna text-sm text-gray-500">Superficie</p>
                      <p className="font-adrianna text-xl text-gray-900 font-bold">{tipologia.metros} m²</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex justify-center mb-2">
                        <i className="fa-solid fa-ruler text-orange-500 text-2xl"></i>
                      </div>
                      <p className="font-adrianna text-sm text-gray-500">Entrega</p>
                      <p className="font-adrianna text-xl text-gray-900 font-bold">{tipologia.plazoEntrega}</p>
                    </div>
                  </div>
                </div>

                {/* Price Section */}
                <div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
                    <div className="text-center">
                      <div className="font-akony text-5xl md:text-6xl font-bold text-orange-600 mb-4">
                        {tipologia.precio}
                      </div>
                      <p className="font-adrianna text-lg text-gray-600 mb-6">Incluye instalación completa</p>
                      <div className="space-y-3 text-left mb-6">
                        {/* Sección eliminada según solicitud del cliente */}
                      </div>
                      <Button
                        className="font-adrianna w-full bg-orange-500 text-white hover:bg-orange-600 py-3 text-lg"
                        onClick={() => {
                          const message = `Hola, estoy interesado en la ${tipologia.title} y quisiera consultar sobre el presupuesto llave en mano.`
                          window.open(`https://wa.me/5493516669950?text=${encodeURIComponent(message)}`, "_blank")
                        }}
                      >
                        Solicitar Presupuesto
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Características Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-akony mb-6 text-2xl font-bold text-orange-500">Características</h3>
                      <div className="bg-white p-6 rounded-lg border">
                        <p className="font-adrianna text-gray-700 text-lg leading-relaxed mb-6">
                          Revestimiento exterior en placas de fibrocemento marca Eternit de 6mm. En el interior,
                          revestimiento en placas de yeso tipo Durlock de 9mm/12mm en habitaciones y fibrocemento en la
                          cocina y el baño. Con aislación térmica y termoacústica PREMIUM en paredes y techo. Ventanas
                          LÍNEA MODENA de aluminio con rejas, puertas placa internas, puerta de frente de chapa doble.
                          La chapa del techo es aluminizada calibre 25 (antigranizo) trapezoidal o sinusoidal.
                        </p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {tipologia.amenities.map((amenity: string, index: number) => (
                            <div key={index} className="flex items-start gap-3">
                              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" aria-hidden="true" />
                              <span className="font-adrianna text-gray-700">{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {tipologia.dimensiones && (
                      <div>
                        <h3 className="font-akony mb-6 text-2xl font-bold text-gray-900">Dimensiones</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {Object.entries(tipologia.dimensiones).map(([key, value]) => (
                            <div key={key} className="bg-gray-50 p-4 rounded-lg border">
                              <p className="font-adrianna text-sm text-gray-500 capitalize mb-1">
                                {key.replace(/([A-Z])/g, " $1").replace(/^\w/, (c) => c.toUpperCase())}
                              </p>
                              <p className="font-adrianna font-bold text-lg">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {(tipologia.id === "tipologia-1" ||
                      tipologia.id === "tipologia-2" ||
                      tipologia.id === "tipologia-3" ||
                      tipologia.id === "tipologia-4") &&
                      tipologia.bonificaciones && (
                        <div>
                          <h3 className="font-akony mb-6 text-2xl font-bold text-orange-500">
                            De regalo con tu vivienda, 100% bonificado:
                          </h3>
                          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                            <ul className="font-adrianna space-y-3 mb-6">
                              {tipologia.bonificaciones.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" aria-hidden="true" />
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="p-4 bg-white rounded-lg border border-orange-200">
                              <p className="font-adrianna text-gray-700">
                                Al valor de la vivienda tenés que sumar el costo del flete, que varía dependiendo de la
                                ciudad o localidad en la que se instale tu casa.{" "}
                                <button
                                  onClick={() => {
                                    const message = `Hola, estoy interesado en la ${tipologia.title} y quisiera consultar sobre el costo del flete para mi ubicación.`
                                    window.open(
                                      `https://wa.me/5493516669950?text=${encodeURIComponent(message)}`,
                                      "_blank",
                                    )
                                  }}
                                  className="text-orange-500 font-bold hover:underline"
                                >
                                  ¡Consultanos!
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Viviendas Entregadas Section */}
        <section className="py-16 bg-gray-50" aria-labelledby="viviendas-entregadas-heading">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Home className="h-6 w-6 text-orange-500" aria-hidden="true" />
              </div>
              <h2
                id="viviendas-entregadas-heading"
                className="font-akony mb-4 text-3xl font-bold text-gray-900 sm:text-4xl"
              >
                Viviendas Entregadas
              </h2>
              <div className="mx-auto h-1 w-20 bg-orange-500"></div>
              <p className="font-adrianna mx-auto mt-6 max-w-2xl text-gray-600 text-lg">
                Conocé algunas de las viviendas que ya hemos entregado a nuestros clientes satisfechos.
              </p>
            </div>

            {/* Galería de Viviendas Entregadas */}
            <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  src: "/images/viviendas-entregadas/casa-ladrillo-galeria.jpeg",
                  alt: "Casa de ladrillo con galería cubierta",
                },
                { src: "/images/viviendas-entregadas/casa-rosa-galeria.jpeg", alt: "Casa rosa con galería y jardín" },
                {
                  src: "/images/viviendas-entregadas/casa-ladrillo-cesped.jpeg",
                  alt: "Casa de ladrillo con amplio jardín",
                },
                {
                  src: "/images/viviendas-entregadas/casa-moderna-naranja.jpeg",
                  alt: "Casa moderna con detalles naranjas",
                },
                {
                  src: "/images/viviendas-entregadas/casa-blanca-piedra.jpeg",
                  alt: "Casa blanca con zócalo de piedra",
                },
                { src: "/images/viviendas-entregadas/casa-galeria-rejas.jpeg", alt: "Casa con galería cerrada" },
                { src: "/images/viviendas-entregadas/casa-verde-nieve.jpeg", alt: "Casa verde en paisaje nevado" },
                {
                  src: "/images/viviendas-entregadas/casa-beige-amarilla.jpeg",
                  alt: "Casa beige con detalles amarillos",
                },
                {
                  src: "/images/viviendas-entregadas/casa-blanca-piedra-2.jpeg",
                  alt: "Casa blanca con galería amplia",
                },
              ].map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Video del Interior */}
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 text-center">
                <h3 className="font-akony mb-2 text-2xl font-bold text-gray-900">Recorrido Interior</h3>
                <p className="font-adrianna text-gray-600 text-lg">Conocé cómo se ven nuestras viviendas por dentro</p>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
                <div className="relative aspect-video">
                  <video controls className="h-full w-full object-cover" poster="/images/hero.jpg">
                    <source src="https://www.kuden.com.ar/video/video-interior.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              </div>
            </div>

            {/* CTA WhatsApp */}
            <div className="mt-12 text-center">
              <Button
                onClick={() => {
                  const message = `Hola, estoy interesado en la ${tipologia.title} y quisiera consultar sobre el presupuesto llave en mano.`
                  window.open(`https://wa.me/5493516669950?text=${encodeURIComponent(message)}`, "_blank")
                }}
                className="font-adrianna group relative overflow-hidden bg-green-500 px-8 py-4 text-lg text-white hover:bg-green-600"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  ¡Consulta presupuesto llave en mano!
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16" aria-labelledby="faq-heading">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <svg
                  className="h-6 w-6 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 id="faq-heading" className="font-akony mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Preguntas Frecuentes
              </h2>
              <div className="mx-auto h-1 w-20 bg-orange-500"></div>
              <p className="font-adrianna mx-auto mt-6 max-w-2xl text-gray-600 text-lg">
                Respuestas a las dudas más comunes sobre esta tipología.
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="space-y-4">
                {tipologia.faq.map((item: any, index: number) => (
                  <div key={index} className="rounded-lg border border-gray-200 bg-white shadow-sm">
                    <details className="group">
                      <summary className="flex cursor-pointer items-center justify-between p-6">
                        <h3 className="font-akony text-lg font-bold text-gray-900">{item.pregunta}</h3>
                        <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 group-open:rotate-180">
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="border-t border-gray-200 px-6 pb-6 pt-3">
                        <p className="font-adrianna text-gray-700">{item.respuesta}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-orange-500 py-16" aria-labelledby="cta-heading">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 id="cta-heading" className="font-akony mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                ¿LISTO PARA HACER REALIDAD TU SUEÑO?
              </h2>
              <p className="font-adrianna mb-8 text-xl text-white/90">
                Contáctanos hoy mismo para obtener más información sobre esta tipología o solicitar un presupuesto
                personalizado.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="font-adrianna border-2 border-white bg-white text-orange-500 hover:bg-white/90 hover:text-orange-600 px-8 py-3 text-lg">
                  Solicitar Presupuesto
                </Button>
                <Button
                  variant="outline"
                  className="font-adrianna border-2 border-white bg-transparent text-white hover:bg-white/20 hover:text-white px-8 py-3 text-lg"
                >
                  Agendar Visita Virtual
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tipologías */}
        <section className="py-16" aria-labelledby="related-heading">
          <div className="container px-4 md:px-6">
            <div className="mb-12 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Home className="h-6 w-6 text-orange-500" aria-hidden="true" />
              </div>
              <div>
                <h2 id="related-heading" className="font-akony text-3xl font-bold text-gray-900 sm:text-4xl">
                  Otras Tipologías que podrían interesarte
                </h2>
                <p className="font-adrianna text-gray-600 text-lg">Explora más opciones para tu hogar</p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {tipologiasData
                .filter((t) => t.id !== tipologia.id)
                .slice(0, 3)
                .map((tip, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={tip.image || "/placeholder.svg"}
                        alt={`Imagen de ${tip.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="font-adrianna inline-block rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                          {tip.metros} m²
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-1 flex items-center justify-between">
                        <h3 className="font-akony text-xl font-bold text-gray-900">{tip.title}</h3>
                        <span className="font-adrianna text-sm font-bold text-orange-500">{tip.precio}</span>
                      </div>
                      <p className="font-adrianna mb-4 text-gray-600">{tip.description}</p>

                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <BedDouble className="h-4 w-4 text-orange-500" aria-hidden="true" />
                          <span className="font-adrianna text-sm text-gray-700">{tip.dormitorios}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath className="h-4 w-4 text-orange-500" aria-hidden="true" />
                          <span className="font-adrianna text-sm text-gray-700">{tip.banos}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Grid2X2 className="h-4 w-4 text-orange-500" aria-hidden="true" />
                          <span className="font-adrianna text-sm text-gray-700">{tip.metros} m²</span>
                        </div>
                      </div>

                      <Button
                        asChild
                        variant="ghost"
                        className="font-adrianna group/btn flex items-center gap-2 p-0 text-orange-500 hover:bg-transparent hover:text-orange-600"
                      >
                        <Link href={`/tipologias/${tip.id}`}>
                          <span>Ver Detalles</span>
                          <ArrowRight
                            className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                            aria-hidden="true"
                          />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CTAButton />
    </>
  )
}
