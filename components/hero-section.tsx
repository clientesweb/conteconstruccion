"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Detectar si es dispositivo móvil para ajustes responsivos
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Manejar la carga y reproducción del video
  useEffect(() => {
    const videoElement = videoRef.current

    if (videoElement) {
      const handleVideoLoaded = () => {
        setIsVideoLoaded(true)
      }

      videoElement.addEventListener("loadeddata", handleVideoLoaded)

      // Si el video ya está cargado
      if (videoElement.readyState >= 3) {
        setIsVideoLoaded(true)
      }

      // Reproducir el video en loop
      videoElement.loop = true

      return () => {
        videoElement.removeEventListener("loadeddata", handleVideoLoaded)
      }
    }
  }, [])

  // Ventajas específicas del cliente
  const advantages = [
    "Pagos contra entrega",
    "Financiación + entrega en 25 días",
    "Recibimos tu vehículo y todas las tarjetas",
    "Ventajas reales. ¡Contáctanos hoy!",
  ]

  // Auto-slider para las ventajas
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % advantages.length)
    }, 4000) // Cambia cada 4 segundos

    return () => clearInterval(interval)
  }, [advantages.length])

  return (
    <section
      id="inicio"
      className="relative h-screen w-full overflow-hidden min-h-[600px] sm:min-h-[700px] md:min-h-screen"
    >
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0">
        <div
          className={cn(
            "absolute inset-0 bg-navy-900 transition-opacity duration-1000",
            isVideoLoaded ? "opacity-0" : "opacity-100",
          )}
        />

        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className={cn(
            "h-full w-full object-cover transition-opacity duration-1000",
            isVideoLoaded ? "opacity-100" : "opacity-0",
          )}
        >
          <source src="https://www.kuden.com.ar/video/conte-hero-final.mp4" type="video/mp4" />
          <track kind="captions" srcLang="es" label="Español" />
          Tu navegador no soporta videos HTML5.
        </video>

        {/* Overlay con gradiente más sutil para mayor iluminación */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent"></div>
      </div>

      {/* Contenido principal - Slider horizontal en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Slider horizontal automático */}
        <div className="relative overflow-hidden bg-gradient-to-r from-black/40 via-black/30 to-black/40 backdrop-blur-md border-t border-white/10">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {advantages.map((advantage, index) => {
              // Verificar si es el último elemento (CTA)
              const isLastItem = index === advantages.length - 1
              const parts = isLastItem ? advantage.split("¡") : [advantage]

              return (
                <div
                  key={index}
                  className="min-w-full flex items-center justify-center py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6"
                  role="listitem"
                >
                  <div className="flex items-center max-w-6xl w-full">
                    <div
                      className="mr-2 sm:mr-4 flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-orange-500/30 backdrop-blur-sm border-2 border-orange-400/50"
                      aria-hidden="true"
                    >
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 md:h-7 md:w-7 lg:h-8 lg:w-8 text-orange-400" />
                    </div>
                    <span className="font-akony text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-white drop-shadow-lg text-center md:text-left leading-tight">
                      {isLastItem ? (
                        <>
                          {parts[0]}
                          <Link
                            href="/#contacto"
                            className="text-orange-400 hover:text-orange-300 transition-colors duration-300 hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-navy-900"
                          >
                            ¡{parts[1]}
                          </Link>
                        </>
                      ) : (
                        advantage
                      )}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Indicadores del slider */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {advantages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentSlide === index ? "bg-orange-400 w-6" : "bg-white/40 hover:bg-white/60",
                )}
                aria-label={`Ir a ventaja ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Flecha de desplazamiento - ahora más arriba del slider */}
        <div className="absolute -top-12 sm:-top-14 md:-top-16 left-1/2 -translate-x-1/2 transform opacity-0 animate-[fadeIn_0.8s_2s_forwards]">
          <Link
            href="/#nosotros"
            className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full border-2 border-white/40 bg-black/20 backdrop-blur-sm text-white transition-all duration-300 hover:border-orange-400 hover:text-orange-400 hover:bg-orange-500/20"
            aria-label="Desplazarse a la sección Nosotros"
          >
            <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6" />
          </Link>
        </div>
      </div>

      {/* Indicador de desplazamiento */}
      <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 right-4 sm:right-6 md:right-8 hidden sm:block opacity-0 animate-[fadeIn_0.8s_1.4s_forwards]">
        <div className="font-adrianna flex flex-col items-center text-xs sm:text-sm text-white/80 backdrop-blur-sm bg-black/20 rounded-full p-2 sm:p-3">
          <span className="mb-1 sm:mb-2 rotate-90 transform font-bold tracking-wider">SCROLL</span>
          <div className="h-6 sm:h-8 w-px bg-white/50"></div>
        </div>
      </div>
    </section>
  )
}
