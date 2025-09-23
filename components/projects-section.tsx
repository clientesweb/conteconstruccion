import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProjectsSection() {
  const tipologias = [
    {
      id: "tipologia-1",
      title: "Vivienda Modena 1",
      description: "Vivienda ideal para parejas que inician su camino independiente",
      shortDescription: "Vivienda de 1 dormitorio, con cocina comedor, baño y ante baño. Ideal para parejas.",
      image: "/images/vivienda-1-render.jpeg",
      metros: 30,
      dormitorios: 1,
      banos: 1,
      precio: "$9.240.000",
      precioOferta: "¡Oferta del mes!",
      amenities: ["Cocina comedor", "Baño completo", "Ante baño", "Aberturas línea Modena"],
    },
    {
      id: "tipologia-2",
      title: "Vivienda Modena 2",
      description: "Vivienda con 2 dormitorios y galería",
      shortDescription: "Vivienda con 2 dormitorios, baño, cocina, comedor y galería de 20m².",
      image: "/images/vivienda-2-main.png",
      metros: 60,
      dormitorios: 2,
      banos: 1,
      precio: "$14.175.000",
      precioOferta: "¡Oferta del mes!",
      amenities: ["Galería 20m²", "Cocina independiente", "Comedor amplio", "Aberturas línea Modena"],
    },
    {
      id: "tipologia-3",
      title: "Vivienda Modena 3",
      description: "Vivienda con 2 dormitorios, baño, cocina, estar y comedor",
      shortDescription: "Amplia vivienda con espacios cómodamente distribuidos y galería de 16m².",
      image: "/images/vivienda-3-render.jpeg",
      metros: 64,
      dormitorios: 2,
      banos: 1,
      precio: "$15.840.000",
      precioOferta: "OFERTA ESPECIAL $15.048.000",
      precioOriginal: "$15.840.000", // Added original price for crossed out display
      precioEspecial: "$15.048.000", // Added special price
      amenities: ["Galería 16m²", "Estar amplio", "Cocina independiente", "Comedor espacioso"],
    },
    {
      id: "tipologia-4",
      title: "Vivienda Modena 4",
      description: "Vivienda con 2 dormitorios, baño, ante baño, lavadero, cocina, estar, comedor y galería",
      shortDescription: "Distribución completa con lavadero independiente y galería amplia de 20m².",
      image: "/images/vivienda-4-render.jpeg",
      metros: 71,
      dormitorios: 2,
      banos: 1,
      precio: "$16.768.500",
      precioOferta: "¡Oferta del mes!",
      amenities: ["Galería 20m²", "Lavadero independiente", "Ante baño", "Estar independiente"],
    },
  ]

  // Mostrar solo las primeras 3 tipologías en la página principal
  const tipologiasMostradas = tipologias.slice(0, 3)

  return (
    <section id="tipologias" className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container px-2 sm:px-4 md:px-6">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="font-akony mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            VIVIENDAS
          </h2>
          <div className="mx-auto h-1 w-16 sm:w-20 bg-orange-500"></div>
          <p className="font-adrianna mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base lg:text-lg text-gray-600 px-4 sm:px-0">
            Conoce nuestras viviendas, donde combinamos tecnología, eficiencia y diseño para crear el hogar de tus
            sueños.
          </p>
        </div>

        {/* Tipologías Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {tipologiasMostradas.map((tipologia, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden">
                <Image
                  src={tipologia.image || "/placeholder.svg"}
                  alt={`Imagen de ${tipologia.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-10">
                  <span className="font-adrianna inline-block rounded-full bg-orange-500 px-2 sm:px-3 py-1 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {tipologia.metros} m²
                  </span>
                </div>
                {/* Badge de Oferta del Mes */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                  <div className="relative">
                    <div className="animate-pulse rounded-full bg-red-500 px-2 sm:px-3 py-1 shadow-lg">
                      <span className="font-adrianna text-xs font-bold text-white">
                        {tipologia.id === "tipologia-3" ? "¡OFERTA ESPECIAL!" : "¡OFERTA DEL MES!"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="mb-1 flex items-start justify-between gap-2">
                  <h3 className="font-akony text-lg sm:text-xl font-bold text-gray-900 flex-1">{tipologia.title}</h3>
                  <div className="text-right flex-shrink-0">
                    {tipologia.id === "tipologia-3" ? (
                      <div>
                        <div className="font-adrianna text-sm font-bold text-red-500 uppercase tracking-wide mb-1">
                          ¡OFERTA ESPECIAL!
                        </div>
                        <div className="font-adrianna text-xs text-gray-500 line-through">
                          {tipologia.precioOriginal || tipologia.precio}
                        </div>
                        <div className="font-adrianna text-lg sm:text-xl font-bold text-red-500">
                          {tipologia.precioEspecial || "$15.048.000"}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="font-adrianna text-xs font-bold text-red-500 uppercase tracking-wide">
                          {tipologia.precioOferta}
                        </div>
                        <div className="font-adrianna text-base sm:text-lg font-bold text-orange-500">
                          {tipologia.precio}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <p className="font-adrianna mb-3 sm:mb-4 text-sm sm:text-base text-gray-600 line-clamp-2">
                  {tipologia.shortDescription}
                </p>

                {/* Características principales */}
                <div className="mb-3 sm:mb-4 grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <i className="fa-solid fa-bed h-4 w-4 sm:h-5 sm:w-5 text-orange-500" aria-hidden="true"></i>
                    <span className="font-adrianna text-xs sm:text-sm text-gray-700">
                      {tipologia.dormitorios} Dormitorios
                    </span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <i className="fa-solid fa-bath h-4 w-4 sm:h-5 sm:w-5 text-orange-500" aria-hidden="true"></i>
                    <span className="font-adrianna text-xs sm:text-sm text-gray-700">{tipologia.banos} Baños</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 col-span-2">
                    <i
                      className="fa-solid fa-vector-square h-4 w-4 sm:h-5 sm:w-5 text-orange-500"
                      aria-hidden="true"
                    ></i>
                    <span className="font-adrianna text-xs sm:text-sm text-gray-700">{tipologia.metros} m²</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-4">
                  <h4 className="font-akony mb-2 text-xs sm:text-sm font-bold text-gray-900">Amenities:</h4>
                  <ul className="font-adrianna grid grid-cols-1 gap-y-1 text-xs sm:text-sm text-gray-600">
                    {tipologia.amenities.slice(0, 3).map((amenity, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true"></div>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  variant="ghost"
                  className="font-adrianna group/btn flex items-center gap-2 p-0 text-orange-500 hover:bg-transparent hover:text-orange-600 touch-target text-sm sm:text-base"
                >
                  <Link href={`/tipologias/${tipologia.id}`}>
                    <span>Ver Detalles</span>
                    <i
                      className="fa-solid fa-circle-arrow-right h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            className="font-adrianna group relative overflow-hidden bg-orange-500 text-white hover:bg-orange-500"
          >
            <Link href="/tipologias">
              <span className="relative z-10 flex items-center justify-center">
                Ver Todas las Viviendas
                <i
                  className="fa-solid fa-circle-chevron-right ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                ></i>
              </span>
              <span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-orange-600 transition-transform duration-300 group-hover:translate-y-0"></span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
