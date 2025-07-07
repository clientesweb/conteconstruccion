"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Clock, Gift, CreditCard, Car } from "lucide-react"
import { cn } from "@/lib/utils"

export default function OffersSection() {
  const [days, setDays] = useState(25)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Simular un contador regresivo para crear urgencia
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1)
          setSeconds(59)
        } else {
          if (hours > 0) {
            setHours(hours - 1)
            setMinutes(59)
            setSeconds(59)
          } else {
            if (days > 0) {
              setDays(days - 1)
              setHours(23)
              setMinutes(59)
              setSeconds(59)
            }
          }
        }
      }
    }, 1000)

    // Animación de entrada
    const animationTimeout = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => {
      clearInterval(timer)
      clearTimeout(animationTimeout)
    }
  }, [days, hours, minutes, seconds])

  return (
    <section className="relative bg-gradient-to-r from-orange-600 to-orange-500 py-8 md:py-10">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-orange-300"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-700 to-red-600"></div>

      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='1' fillRule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div
          className={cn(
            "transform transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          {/* Encabezado con efecto de destello */}
          <div className="text-center mb-6">
            <h2 className="font-akony text-3xl md:text-4xl font-bold text-white inline-block relative">
              OFERTAS DEL MES
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-yellow-300 rounded-full animate-ping"></span>
            </h2>
            <div className="h-1 w-20 bg-white/50 mx-auto mt-2"></div>
          </div>

          {/* Contenido principal */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Columna izquierda: Oferta principal */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-300 rounded-full p-3 text-orange-600">
                  <Gift className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-akony text-xl md:text-2xl font-bold text-white mb-2">
                    Dentro del valor de la casa,
                    <span className="block text-yellow-300 underline decoration-2 underline-offset-4 mt-1">
                      ¡TE BONIFICAMOS TODO!
                    </span>
                  </h3>
                  <p className="font-adrianna text-white/90 mb-4">
                    Aprovechá nuestras promociones y tené tu vivienda en 25 dias. Contamos con créditos financistas
                    bancarios, recibimos vehículos, tarjetas de crédito.
                  </p>

                  {/* Iconos de beneficios */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
                      <Clock className="h-4 w-4 text-yellow-300" />
                      <span className="font-adrianna text-sm text-white">Entrega en 25 días</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
                      <CreditCard className="h-4 w-4 text-yellow-300" />
                      <span className="font-adrianna text-sm text-white">Todas las tarjetas</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
                      <Car className="h-4 w-4 text-yellow-300" />
                      <span className="font-adrianna text-sm text-white">Recibimos vehículos</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="font-adrianna group relative overflow-hidden bg-yellow-300 text-orange-600 hover:bg-yellow-300 shadow-lg"
                  >
                    <Link href="/#contacto">
                      <span className="relative z-10 flex items-center justify-center font-bold">
                        ¡Contactanos ahora!
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0"></span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Columna derecha: Contador y CTA */}
            <div className="text-center">
              <h3 className="font-adrianna text-lg text-white/90 mb-3">La oferta termina en:</h3>

              {/* Contador regresivo */}
              <div className="flex justify-center gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 w-16 border border-white/20">
                  <div className="font-akony text-2xl font-bold text-white">{days}</div>
                  <div className="font-adrianna text-xs text-white/70">Días</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 w-16 border border-white/20">
                  <div className="font-akony text-2xl font-bold text-white">{hours}</div>
                  <div className="font-adrianna text-xs text-white/70">Horas</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 w-16 border border-white/20">
                  <div className="font-akony text-2xl font-bold text-white">{minutes}</div>
                  <div className="font-adrianna text-xs text-white/70">Min</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 w-16 border border-white/20">
                  <div className="font-akony text-2xl font-bold text-white">{seconds}</div>
                  <div className="font-adrianna text-xs text-white/70">Seg</div>
                </div>
              </div>

              {/* Sello de oferta */}
              <div className="inline-block relative">
                <div className="absolute -top-4 -right-2 sm:-right-3 md:-right-4 bg-yellow-300 text-orange-600 rounded-full h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 flex items-center justify-center transform rotate-12 animate-pulse z-10 shadow-lg">
                  <div className="font-akony text-sm font-bold text-center leading-tight">
                    OFERTA
                    <br />
                    LIMITADA
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-left relative">
                  <div className="pr-12 sm:pr-14 md:pr-16">
                    {" "}
                    {/* Añadir padding a la derecha para evitar que el texto se superponga con el sello */}
                    <p className="font-adrianna text-white mb-4">
                      No pierdas esta oportunidad única. Nuestras promociones son por tiempo limitado y con cupos
                      reducidos.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="font-adrianna border-2 border-white bg-transparent text-white hover:bg-white/20 hover:text-white w-full"
                    >
                      <Link href="/#tipologias">Ver Viviendas Disponibles</Link>
                    </Button>
                  </div>{" "}
                  {/* Cierre del div con padding */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
