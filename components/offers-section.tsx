"use client"

import Image from "next/image"

export default function OffersBannerSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Banner Container - Aspect ratio for 1920x720 is 8/3 */}
      <div className="relative w-full aspect-[8/3]">
        <Image
          src="/images/banner-oferta-del-mes.webp"
          alt="Ofertas del mes: Pagos contra entrega, financiación + entrega 25 días, ¡ventajas reales! Te bonificamos todo. Aprovechá nuestras promociones y tené tu vivienda en 25 días. Contamos con créditos financistas bancarios, recibimos vehículos, tarjetas de crédito."
          fill
          className="object-cover w-full h-full" // object-cover ensures the image covers the entire container
          priority
          sizes="100vw"
          quality={100}
        />
        <h2 className="sr-only">Ofertas del Mes</h2>
      </div>
    </section>
  )
}
