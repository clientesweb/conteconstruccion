"use client"

import Image from "next/image"

export default function OffersBannerSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full">
        <Image
          src="/images/banner-oferta-del-mes.webp"
          alt="Ofertas del mes: Pagos contra entrega, financiación + entrega 25 días, ¡ventajas reales! Te bonificamos todo. Aprovechá nuestras promociones y tené tu vivienda en 25 días. Contamos con créditos financistas bancarios, recibimos vehículos, tarjetas de crédito."
          width={1200}
          height={400}
          className="w-full h-auto object-contain"
          priority
          sizes="100vw"
          quality={95}
        />
        <h2 className="sr-only">Ofertas del Mes</h2>
      </div>
    </section>
  )
}
