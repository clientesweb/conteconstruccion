"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link" // Import Link
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleCanPlayThrough = () => setIsLoading(false)
      video.addEventListener("canplaythrough", handleCanPlayThrough)
      return () => video.removeEventListener("canplaythrough", handleCanPlayThrough)
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
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
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">¡Conoce la tipología Modena 1!</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre los detalles de nuestra innovadora tipología Modena 1.
          </p>
          <div className="mt-6">
            <Link href="/tipologias-1" passHref>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                Ver Modena 1
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl aspect-video bg-gray-200 flex items-center justify-center">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            </div>
          )}
          <video
            ref={videoRef}
            src="/banner-principal.mp4"
            loop
            playsInline
            preload="metadata"
            className={`w-full h-full object-cover ${isLoading ? "hidden" : "block"}`}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onLoadedData={() => setIsLoading(false)}
            onError={() => console.error("Error loading video")}
          >
            Tu navegador no soporta el elemento de video.
          </video>

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
        </div>
      </div>
    </section>
  )
}
