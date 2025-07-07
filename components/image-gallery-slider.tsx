"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ImageGallerySliderProps {
  images: string[]
  title: string
}

export default function ImageGallerySlider({ images, title }: ImageGallerySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const mainImageRef = useRef<HTMLDivElement>(null)
  const fullscreenRef = useRef<HTMLDivElement>(null)

  // Check if mobile on mount
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
    // Reset body scroll when exiting fullscreen
    if (isFullscreen) {
      document.body.style.overflow = ""
    } else {
      document.body.style.overflow = "hidden"
    }
  }

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide()
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFullscreen) return

      if (e.key === "ArrowRight") {
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "Escape") {
        toggleFullscreen()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isFullscreen])

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Main Image */}
        <div
          ref={mainImageRef}
          className="relative overflow-hidden rounded-lg"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`${title} - Imagen ${currentIndex + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              className="object-cover"
              priority={currentIndex === 0}
              loading={currentIndex === 0 ? "eager" : "lazy"}
              fetchPriority={currentIndex === 0 ? "high" : "auto"}
            />
          </div>

          {/* Navigation buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50"
            onClick={prevSlide}
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50"
            onClick={nextSlide}
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50"
            onClick={toggleFullscreen}
            aria-label="Ver en pantalla completa"
          >
            <Maximize2 className="h-5 w-5" />
          </Button>

          {/* Image counter */}
          <div className="absolute bottom-2 right-2 rounded-full bg-black/50 px-3 py-1 text-sm text-white backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "relative h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 overflow-hidden rounded-md transition-all",
                currentIndex === index
                  ? "ring-2 ring-orange-500 ring-offset-2"
                  : "ring-1 ring-gray-200 hover:ring-orange-300",
              )}
              aria-label={`Ir a imagen ${index + 1}`}
              aria-current={currentIndex === index}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Miniatura ${index + 1}`}
                fill
                sizes="(max-width: 640px) 64px, 80px"
                className="object-cover"
                loading="lazy"
              />
              {currentIndex === index && <div className="absolute inset-0 bg-orange-500/10 backdrop-blur-[1px]"></div>}
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen modal */}
      {isFullscreen && (
        <div
          ref={fullscreenRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          onClick={toggleFullscreen}
        >
          <div
            className="relative h-full w-full"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="min-w-full h-full flex items-center justify-center">
                  <div className="relative h-full w-full">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${title} - Imagen ${index + 1}`}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Fullscreen navigation */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50"
              onClick={(e) => {
                e.stopPropagation()
                prevSlide()
              }}
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50"
              onClick={(e) => {
                e.stopPropagation()
                nextSlide()
              }}
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50"
              onClick={toggleFullscreen}
              aria-label="Cerrar pantalla completa"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Fullscreen thumbnails */}
            <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
              <div className="flex gap-3 overflow-x-auto rounded-full bg-black/30 p-3 backdrop-blur-sm">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      goToSlide(index)
                    }}
                    className={cn(
                      "relative h-16 w-16 overflow-hidden rounded-md transition-all",
                      currentIndex === index
                        ? "ring-2 ring-white ring-offset-1 ring-offset-black"
                        : "opacity-70 hover:opacity-100",
                    )}
                    aria-label={`Ir a imagen ${index + 1}`}
                    aria-current={currentIndex === index}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Miniatura ${index + 1}`}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-white/80">
              <span>
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
