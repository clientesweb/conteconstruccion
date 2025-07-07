import dynamic from "next/dynamic"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import CTAButton from "@/components/cta-button"
import SEOOptimization from "@/components/seo-optimization"
import Script from "next/script"

// Lazy load componentes no críticos para mejorar el rendimiento inicial
const ProjectsSection = dynamic(() => import("@/components/projects-section"), {
  loading: () => (
    <div className="h-96 flex items-center justify-center">
      <div className="animate-pulse h-8 w-64 bg-gray-200 rounded"></div>
    </div>
  ),
})

const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"), {
  loading: () => (
    <div className="h-96 flex items-center justify-center">
      <div className="animate-pulse h-8 w-64 bg-gray-200 rounded"></div>
    </div>
  ),
})

const ContactSection = dynamic(() => import("@/components/contact-section"), {
  loading: () => (
    <div className="h-96 flex items-center justify-center">
      <div className="animate-pulse h-8 w-64 bg-gray-200 rounded"></div>
    </div>
  ),
})

const ResponsiveBanner = dynamic(() => import("@/components/responsive-banner"), {
  loading: () => <div className="h-64 bg-gray-100"></div>,
})

const BlogSection = dynamic(() => import("@/components/blog-section"), {
  loading: () => (
    <div className="h-96 flex items-center justify-center">
      <div className="animate-pulse h-8 w-64 bg-gray-200 rounded"></div>
    </div>
  ),
})

const OffersSection = dynamic(() => import("@/components/offers-section"), {
  loading: () => <div className="h-64 bg-orange-50"></div>,
})

export default function LandingPage() {
  return (
    <>
      <SEOOptimization />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <OffersSection />
          <ProjectsSection />
          <ResponsiveBanner />
          <TestimonialsSection />
          <AboutSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
        <CTAButton />
      </div>

      {/* AOS Animation Library */}
      <Script src="https://unpkg.com/aos@next/dist/aos.js" strategy="afterInteractive" />
      <Script id="aos-init" strategy="afterInteractive">
        {`
          document.addEventListener('DOMContentLoaded', function() {
            AOS.init({
              duration: 800,
              easing: 'ease-out',
              once: true,
              disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            });
          });
        `}
      </Script>
    </>
  )
}
