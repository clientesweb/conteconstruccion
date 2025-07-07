import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Check, ArrowLeft } from "lucide-react"
import CTAButton from "@/components/cta-button"

export const metadata = {
  title: "Método Constructivo | CONTE CONSTRUCCIÓN",
  description:
    "Conoce el método constructivo de nuestras viviendas Wood Frame y Sistema Tradicional Minimalista. Detalles técnicos y características de construcción.",
  alternates: {
    canonical: "https://www.conteconstruccion.com/metodo-constructivo",
  },
  openGraph: {
    title: "Método Constructivo | CONTE CONSTRUCCIÓN",
    description:
      "Conoce el método constructivo de nuestras viviendas Wood Frame y Sistema Tradicional Minimalista. Detalles técnicos y características de construcción.",
    url: "https://www.conteconstruccion.com/metodo-constructivo",
    images: [{ url: "https://www.conteconstruccion.com/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Método Constructivo | CONTE CONSTRUCCIÓN",
    description:
      "Conoce el método constructivo de nuestras viviendas Wood Frame y Sistema Tradicional Minimalista. Detalles técnicos y características de construcción.",
    images: ["https://www.conteconstruccion.com/og-image.jpg"],
  },
}

export default function MetodoConstructivoPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-navy-900 py-16 md:py-24">
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="/images/vivienda-1-render.jpeg"
              alt="Método constructivo CONTE CONSTRUCCIÓN"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/70"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/tipologias"
                className="font-adrianna mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Volver a Tipologías</span>
              </Link>
              <h1 className="font-akony mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                MÉTODO CONSTRUCTIVO
              </h1>
              <p className="font-adrianna text-lg text-gray-300">
                Conoce en detalle cómo construimos nuestras viviendas, los materiales que utilizamos y las
                características técnicas que las hacen únicas.
              </p>
            </div>
          </div>
        </section>

        {/* Contenido Principal */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 rounded-xl bg-orange-50 p-6 shadow-sm">
                <h2 className="font-akony mb-4 text-2xl font-bold text-orange-500">
                  LA FABRICACIÓN DE NUESTRAS CASAS SE REALIZA SEGÚN LAS SIGUIENTES CARACTERÍSTICAS TÉCNICAS:
                </h2>
                <p className="font-adrianna text-gray-700">
                  Nuestro sistema constructivo combina eficiencia, durabilidad y diseño moderno para ofrecerte una
                  vivienda de calidad superior en tiempo récord.
                </p>
              </div>

              <div className="space-y-12">
                {/* Base de la vivienda */}
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <i className="fa-solid fa-layer-group text-orange-500 text-xl"></i>
                    </div>
                    <h3 className="font-akony text-xl font-bold text-gray-900">Base de la vivienda</h3>
                  </div>
                  <p className="font-adrianna mb-4 text-gray-700">
                    Nuestras viviendas o cabañas van montadas sobre una plataforma de hormigon de 8 a 10 cm de espesor,
                    a ésta la debera realizar el cliente con el plano y las indicaciones tecnicas que nosotros le
                    proveemos.
                  </p>
                  <div className="rounded-lg bg-orange-100 p-4">
                    <p className="font-adrianna font-bold text-orange-700">¡PEDI NUESTROS PRESUPUESTOS!</p>
                  </div>
                </div>

                {/* Paneles preensamblados */}
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <i className="fa-solid fa-puzzle-piece text-orange-500 text-xl"></i>
                    </div>
                    <h3 className="font-akony text-xl font-bold text-gray-900">Paneles preensamblados</h3>
                  </div>
                  <p className="font-adrianna text-gray-700">
                    Los paneles son del tipo portante y los fabricamos con tirantería de madera de 25 mm x 50 mm, (esto
                    para viviendas de planta baja solamente), con una separación de 40 cm entre sí. Su parte exterior se
                    reviste con placas cementicias (Fibrocemento) de 6 mm. Paredes internas de Durlock de 9 mm en cocina
                    comedor y baño; en los dormitorios se revestirá con placas de yeso marca Durlock.
                  </p>
                </div>

                {/* Puertas */}
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <i className="fa-solid fa-door-open text-orange-500 text-xl"></i>
                    </div>
                    <h3 className="font-akony text-xl font-bold text-gray-900">Puertas</h3>
                  </div>
                  <p className="font-adrianna text-gray-700">
                    La exterior al frente, LINEA MODENA PREMIUM de chapa de hierro doble inyectadas en poliuretano con
                    barral y cerradura de seguridad. La puerta de acceso a la parte trasera de la casa (si corresponde
                    que la lleve) es del mismo tipo también. Las puertas interiores son de tipo placas con marcos de
                    madera. Si el cliente desea otro modelo de puertas sera esto como opcional.
                  </p>
                </div>

                {/* Ventanas */}
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <i className="fa-solid fa-window-maximize text-orange-500 text-xl"></i>
                    </div>
                    <h3 className="font-akony text-xl font-bold text-gray-900">Ventanas</h3>
                  </div>
                  <p className="font-adrianna text-gray-700">
                    Las mismas son LINEA MODENA, de aluminio corrediza de 1,20 x 1,50 con vidrios y rejas de hierro
                    maciso. En baño se colocara ventiluz tipo balancín de aluminio de 0,26 x 0,40 mts. Si el cliente
                    desea otro modelo sera como opcional al igual que el resto de las aberturas.
                  </p>
                </div>

                {/* Baño */}
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <i className="fa-solid fa-bath text-orange-500 text-xl"></i>
                    </div>
                    <h3 className="font-akony text-xl font-bold text-gray-900">Baño</h3>
                  </div>
                  <p className="font-adrianna text-gray-700">
                    Se fabrica igual que las otras dependencias, solo que aquí se forraran las paredes interiores en el
                    mismo Fibrocemento, especial para lugares con humedad o traslado de aguas.
                  </p>
                </div>

                {/* Instalaciones */}
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <i className="fa-solid fa-faucet text-orange-500 text-xl"></i>
                    </div>
                    <h3 className="font-akony text-xl font-bold text-gray-900">Instalaciones</h3>
                  </div>
                  <ul className="font-adrianna space-y-4 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                      <span>
                        <strong>Agua:</strong> las instalaciones para agua fría y caliente serán embutidas y se
                        realizarán con caños de termofusión de primera calidad, todo en ½
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                      <span>
                        <strong>Luz:</strong> se entregan todas las cañerías instaladas y con las bocas en pared y
                        techo, sin cableado ni artefactos.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Terminaciones */}
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <i className="fa-solid fa-paint-roller text-orange-500 text-xl"></i>
                    </div>
                    <h3 className="font-akony text-xl font-bold text-gray-900">Terminaciones</h3>
                  </div>
                  <p className="font-adrianna text-gray-700">
                    Se entrega con todos los contramarcos en aberturas y con terminación en ángulo en esquinas de techo,
                    la casa se entrega totalmente cerrada con vidrios colocados, todo le queda listo para pintar.
                  </p>
                </div>

                {/* Aislación */}
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <i className="fa-solid fa-temperature-low text-orange-500 text-xl"></i>
                    </div>
                    <h3 className="font-akony text-xl font-bold text-gray-900">Aislación</h3>
                  </div>
                  <p className="font-adrianna text-gray-700">
                    Todos los paneles llevan un aislamiento termoacústico PREMIUM, lana de vidrio doble aluminio en
                    paredes externas y en el cielorraso Wichi, membrana fuerte y flexible, compuesta por 3 capas de
                    polipropileno, que ofrece alta impermeabilidad y respirabilidad.
                  </p>
                </div>

                {/* Cielorraso */}
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <i className="fa-solid fa-home text-orange-500 text-xl"></i>
                    </div>
                    <h3 className="font-akony text-xl font-bold text-gray-900">Cielorraso</h3>
                  </div>
                  <p className="font-adrianna text-gray-700">
                    Construido con estructura interna en madera dura de 1" x 2 " y forrados con madera machihembrada de
                    ½ x 4 " todos en madera de pino de 1º calidad.
                  </p>
                </div>

                {/* Cabreadas de techo */}
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <i className="fa-solid fa-house-chimney text-orange-500 text-xl"></i>
                    </div>
                    <h3 className="font-akony text-xl font-bold text-gray-900">Cabreadas de techo</h3>
                  </div>
                  <p className="font-adrianna text-gray-700">
                    Las fabricamos con tirantes de madera de 1 x 2 pulgadas. Las exteriores son forradas con placas
                    cementicias Fibrocemento de 6 mm de espesor. Las cabreadas interiores se instalan a 1,20 m de
                    distancia entre sí y son la sustentación para el cielorraso y techo.
                  </p>
                </div>

                {/* Techos */}
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <i className="fa-solid fa-roof text-orange-500 text-xl"></i>
                    </div>
                    <h3 className="font-akony text-xl font-bold text-gray-900">Techos</h3>
                  </div>
                  <p className="font-adrianna text-gray-700">
                    Su estructura es de madera de 1″ x 2 ½ » pulgadas en paneles desarmables, modo minimalista, la
                    cubierta es de chapa de hierro aluminizado, la misma es de calibre 25 (antigranizo), chapa
                    trapezoidal o acanalada aluminizada.
                  </p>
                </div>

                {/* Altura */}
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <i className="fa-solid fa-ruler-vertical text-orange-500 text-xl"></i>
                    </div>
                    <h3 className="font-akony text-xl font-bold text-gray-900">Altura</h3>
                  </div>
                  <p className="font-adrianna text-gray-700">
                    La altura que tendrá vivienda entre el nivel del piso terminado y el cielorraso será de 2,40 mts.
                  </p>
                </div>

                {/* Trabajos a realizar por el cliente */}
                <div className="rounded-xl bg-orange-50 p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500">
                      <i className="fa-solid fa-hammer text-white text-xl"></i>
                    </div>
                    <h3 className="font-akony text-xl font-bold text-orange-500">
                      UNA VEZ INSTALADA LA VIVIENDA O CABAÑA EL CLIENTE DEBERA REALIZARLE LO SIGUIENTE:
                    </h3>
                  </div>
                  <p className="font-adrianna mb-6 text-gray-700">
                    Instalar el tangue de agua, los caños de cloacas, de baño y cocina, realizar el contrapiso, colocar
                    cerámicos e instalar el juego de baño, colocar, mesada de la cocina, bajo mesada y alacena, instalar
                    el cableado de luz y las llaves térmicas, llaves de luz, tomacorrientes, pintar el interior y el
                    exterior.
                  </p>
                  <div className="rounded-lg bg-orange-100 p-6">
                    <p className="font-adrianna font-bold text-orange-700 mb-2">
                      Recuerde que en todos los casos para cualquier tipo de viviendas o cabañas le bonificamos ¡TODO!
                      el juego de baño completo con su grifería, la pintura látex para todo el interior de la vivienda,
                      el barniz para cieloraso y puertas placas, Kit electrico, cerámicos, tanque de agua, etc, etc.
                    </p>
                  </div>
                </div>
              </div>

              {/* Información de contacto */}
              <div className="mt-12 rounded-xl bg-navy-900 p-8 text-white shadow-xl">
                <h3 className="font-akony mb-6 text-2xl font-bold">Oficinas comerciales:</h3>
                <ul className="font-adrianna space-y-4">
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-location-dot mt-1 text-orange-500"></i>
                    <span>Av. Monseñor P. Cabrera 3068 (B° Alto San Martín) Córdoba – Argentina</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-phone mt-1 text-orange-500"></i>
                    <span>Tel. (0351) 156669950</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-user mt-1 text-orange-500"></i>
                    <span>Fernando Conte</span>
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button className="font-adrianna group relative overflow-hidden bg-orange-500 text-white hover:bg-orange-500">
                    <span className="relative z-10 flex items-center justify-center">Solicitar Presupuesto</span>
                    <span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-orange-600 transition-transform duration-300 group-hover:translate-y-0"></span>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="font-adrianna border-2 border-white bg-transparent text-white hover:bg-white/20 hover:text-white"
                  >
                    <Link href="/tipologias">Ver Tipologías</Link>
                  </Button>
                </div>
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
