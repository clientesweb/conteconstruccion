import Image from "next/image"

export default function AboutSection() {
  const features = [
    "Más de 15 años de experiencia en el sector",
    "Especialistas en Sistema Tradicional Minimalista Moderno",
    "Equipo de profesionales altamente calificados",
    "Materiales de primera calidad y garantía 100%",
    "Soluciones personalizadas adaptadas a cada cliente",
    "Compromiso con la eficiencia energética y la sostenibilidad",
  ]

  return (
    <section id="nosotros" className="relative overflow-hidden bg-navy-900 py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="order-2 flex flex-col justify-center lg:order-1 px-2 sm:px-0">
            <div className="mb-3 sm:mb-4 inline-block rounded-full bg-orange-500/20 px-3 sm:px-4 py-1 backdrop-blur-sm">
              <p className="font-adrianna text-xs sm:text-sm font-medium uppercase tracking-wider text-white">
                Sobre Nosotros
              </p>
            </div>
            <h2 className="font-akony mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              CONSTRUYENDO EL FUTURO CON{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-orange-500">INNOVACIÓN</span>
                <span className="absolute bottom-1 sm:bottom-2 md:bottom-3 left-0 z-0 h-2 sm:h-3 md:h-4 w-full bg-orange-500/30"></span>
              </span>
            </h2>
            <p className="font-adrianna mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
              En Conte Construcción mantenemos la línea de nuestro sistema tradicional, el cual innovamos a comienzos
              del 2010, junto a mi padre Conte José Alberto en nuestra empresa familiar, Viviendas Tucassa, la cual nos
              llevó a ser líderes en entregas, con referencias comprobables en todo el país, teniendo a la actualidad
              una reputación online de 5 estrellas.
            </p>
            <p className="font-adrianna mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
              C.C llegó a este mercado de la mano de Conte Fernando, director y asesor técnico, que junto a nuestras
              cuadrillas de profesionales, asesoran y supervisan cada una de las viviendas a construir, brindando una
              calidad sobresaliente y superior, respecto a otras empresas.
            </p>
            <p className="font-adrianna mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
              Construir el futuro de nuestros clientes con innovación, brindando confianza, comodidad y facilidad en los
              pagos.
            </p>
            <div className="mb-8">
              <p className="font-akony text-xl font-bold text-orange-500 mb-2">
                SISTEMA TRADICIONAL MINIMALISTA MODERNO
              </p>
              <p className="font-adrianna text-lg text-gray-300">
                Consulta presupuesto para conocer todas nuestras opciones constructivas
              </p>
            </div>
            <ul className="mb-6 sm:mb-8 grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2">
              {features.map((feature, index) => (
                <li key={index} className="font-adrianna flex items-start gap-2 text-sm sm:text-base text-gray-300">
                  <i className="fa-solid fa-badge-check mt-0.5 sm:mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-orange-500"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-orange-500">
                  <span className="font-akony text-base sm:text-lg font-bold text-white">15+</span>
                </div>
                <div>
                  <p className="font-adrianna text-xs sm:text-sm text-gray-400">Años de</p>
                  <p className="font-adrianna text-sm sm:text-base font-medium text-white">Experiencia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-orange-500">
                  <span className="font-akony text-base sm:text-lg font-bold text-white">200+</span>
                </div>
                <div>
                  <p className="font-adrianna text-xs sm:text-sm text-gray-400">Proyectos</p>
                  <p className="font-adrianna text-sm sm:text-base font-medium text-white">Completados</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 px-2 sm:px-0">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-full w-full overflow-hidden rounded-xl">
              <Image
                src="/images/about-house-new.jpeg"
                alt="CONTE CONSTRUCCIÓN - Casa moderna con Sistema Tradicional Minimalista"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>

              {/* Experience Badge */}
              <div className="absolute -right-3 sm:-right-4 md:-right-6 -top-3 sm:-top-4 md:-top-6 flex h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 items-center justify-center rounded-full bg-orange-500 p-3 sm:p-4 text-center shadow-lg">
                <div>
                  <p className="font-akony text-lg sm:text-xl md:text-2xl font-bold text-white">15+</p>
                  <p className="font-adrianna text-xs sm:text-xs md:text-xs font-medium text-white leading-tight">
                    AÑOS DE EXPERIENCIA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
