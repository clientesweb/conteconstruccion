"use client"

import Image from "next/image"

export default function OffersBannerSection() {
  return (
    <section className="relative w-full overflow-hidden mt-6 sm:mt-8 md:mt-10">
      {/* Banner Container - Responsive aspect ratios */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[24/9] xl:aspect-[28/9]">
        <Image
          src="/images/banner-oferta-del-mes.webp"
          alt="Ofertas del mes: Pagos contra entrega, financiación + entrega 25 días, ¡ventajas reales! Te bonificamos todo. Aprovechá nuestras promociones y tené tu vivienda en 25 días. Contamos con créditos financistas bancarios, recibimos vehículos, tarjetas de crédito."
          fill
          className="object-contain w-full h-full bg-gray-50"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          quality={95}
        />
        <h2 className="sr-only">Ofertas del Mes</h2>
      </div>
    </section>
  )
}
