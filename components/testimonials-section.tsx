"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { Play, Pause, Volume2, VolumeX, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleCanPlayThrough = () => setIsLoading(false)
      const handleError = () => {
        setIsLoading(false)
        setHasError(true)
        console.error("Error loading video: /banner-principal.mp4")
      }

      video.addEventListener("canplaythrough", handleCanPlayThrough)
      video.addEventListener("error", handleError)

      return () => {
        video.removeEventListener("canplaythrough", handleCanPlayThrough)
        video.removeEventListener("error", handleError)
      }
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (video && !hasError) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play().catch(() => {
          setHasError(true)
        })
        setHasPlayed(true)
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (video) {
      video.muted = !video.muted
      setIsMuted(video.muted)
    }
  }

  return (
    <section id="video-section" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            ¡CONOCE <span className="text-orange-500">MODENA 1</span>!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre los detalles de nuestra innovadora tipología Modena 1.
          </p>
          <div className="mt-6">
            <Link href="https://www.conteconstruccion.com.ar/tipologias/tipologia-1" passHref>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                Ver Modena 1
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl aspect-video bg-gray-200 flex items-center justify-center">
          {isLoading && !hasPlayed && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            </div>
          )}

          {hasError && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gray-100">
              <Image
                src="/images/vivienda-1-render.jpeg"
                alt="Modena 1 House"
                fill
                style={{ objectFit: "cover" }}
                className="absolute inset-0 opacity-50"
                priority
              />
              <div className="relative z-30 bg-white/90 rounded-lg p-6 text-center max-w-md mx-4">
                <AlertCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Video no disponible</h3>
                <p className="text-gray-600 mb-4">
                  No se pudo cargar el video. Puedes ver más detalles de Modena 1 en nuestra página de tipologías.
                </p>
                <Link href="https://www.conteconstruccion.com.ar/tipologias/tipologia-1">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">Ver Modena 1</Button>
                </Link>
              </div>
            </div>
          )}

          {!isPlaying && !hasPlayed && !hasError && (
            <div className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer" onClick={togglePlay}>
              <Image
                src="/images/vivienda-1-render.jpeg"
                alt="Modena 1 House"
                fill
                style={{ objectFit: "cover" }}
                className="absolute inset-0"
                priority
              />
              <div className="relative z-30 bg-white/70 rounded-full p-4">
                <Play className="h-16 w-16 text-orange-500" />
              </div>
            </div>
          )}

          {!hasError && (
            <video
              ref={videoRef}
              src="/banner-principal.mp4"
              loop
              playsInline
              preload="metadata"
              className={`w-full h-full object-cover ${!hasPlayed || isLoading ? "hidden" : "block"}`}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onLoadedData={() => setIsLoading(false)}
              onError={() => {
                console.error("Error loading video: /banner-principal.mp4")
                setHasError(true)
                setIsLoading(false)
              }}
              poster="/images/vivienda-1-render.jpeg"
            >
              Tu navegador no soporta el elemento de video.
            </video>
          )}

          {hasPlayed && !hasError && (
            <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
              <Button
                onClick={togglePlay}
                className="bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
                aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </Button>
              <Button
                onClick={toggleMute}
                className="bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
                aria-label={isMuted ? "Activar sonido" : "Silenciar sonido"}
              >
                {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
