import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import CTAButton from "@/components/cta-button"

export const metadata = {
  title: "Términos y Condiciones | CONTE CONSTRUCCIÓN",
  description: "Términos y condiciones de uso del sitio web y servicios de CONTE CONSTRUCCIÓN.",
  alternates: {
    canonical: "https://www.conteconstruccion.com/terminos-y-condiciones",
  },
  openGraph: {
    title: "Términos y Condiciones | CONTE CONSTRUCCIÓN",
    description: "Términos y condiciones de uso del sitio web y servicios de CONTE CONSTRUCCIÓN.",
    url: "https://www.conteconstruccion.com/terminos-y-condiciones",
    images: [{ url: "https://www.conteconstruccion.com/og-image.jpg" }],
  },
}

export default function TerminosYCondicionesPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="bg-gray-50 py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h1 className="font-akony mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Términos y Condiciones
              </h1>
              <p className="font-adrianna mb-8 text-gray-600">
                Última actualización: {new Date().toLocaleDateString("es-AR")}
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-akony text-2xl font-bold text-gray-900">1. Introducción</h2>
              <p className="font-adrianna text-gray-700">
                Estos Términos y Condiciones regulan el uso del sitio web de CONTE CONSTRUCCIÓN (en adelante,
                "nosotros", "nuestro" o "la Empresa") y los servicios ofrecidos a través del mismo. Al acceder y
                utilizar nuestro sitio web, usted acepta estos términos en su totalidad. Si no está de acuerdo con estos
                términos, no debe utilizar nuestro sitio web.
              </p>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">2. Uso del Sitio Web</h2>
              <p className="font-adrianna text-gray-700">
                2.1. El contenido de las páginas de este sitio web es para su información general y uso personal
                únicamente. Está sujeto a cambios sin previo aviso.
              </p>
              <p className="font-adrianna text-gray-700">
                2.2. Este sitio web utiliza cookies para monitorear las preferencias de navegación. Si permite el uso de
                cookies, aceptamos el procesamiento de los datos recopilados de acuerdo con nuestra Política de
                Privacidad.
              </p>
              <p className="font-adrianna text-gray-700">
                2.3. Ni nosotros ni terceros proporcionamos ninguna garantía o seguridad con respecto a la precisión,
                puntualidad, rendimiento, integridad o idoneidad de la información y los materiales encontrados u
                ofrecidos en este sitio web para cualquier propósito particular.
              </p>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">3. Servicios y Productos</h2>
              <p className="font-adrianna text-gray-700">
                3.1. CONTE CONSTRUCCIÓN se especializa en la construcción de viviendas utilizando el sistema Wood Frame
                con tecnología EIFS. Las imágenes, descripciones y especificaciones de nuestras tipologías son meramente
                ilustrativas.
              </p>
              <p className="font-adrianna text-gray-700">
                3.2. Los precios indicados en el sitio web son referenciales y pueden estar sujetos a cambios sin previo
                aviso. Para obtener un presupuesto definitivo, es necesario contactar directamente con la empresa.
              </p>
              <p className="font-adrianna text-gray-700">
                3.3. La disponibilidad de los servicios y productos está sujeta a confirmación por parte de la empresa.
              </p>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">4. Formulario de Contacto</h2>
              <p className="font-adrianna text-gray-700">
                4.1. Al utilizar nuestro formulario de contacto, usted acepta proporcionar información precisa y
                completa.
              </p>
              <p className="font-adrianna text-gray-700">
                4.2. La información proporcionada a través del formulario de contacto será utilizada únicamente para
                responder a su consulta y/o proporcionar información sobre nuestros servicios.
              </p>
              <p className="font-adrianna text-gray-700">
                4.3. Al enviar el formulario, usted consiente que podamos contactarlo a través de los medios
                proporcionados (teléfono, email o WhatsApp).
              </p>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">5. Propiedad Intelectual</h2>
              <p className="font-adrianna text-gray-700">
                5.1. Todo el contenido de este sitio web, incluyendo pero no limitado a textos, gráficos, logotipos,
                iconos, imágenes, clips de audio, descargas digitales y software, es propiedad de CONTE CONSTRUCCIÓN o
                de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual argentinas e
                internacionales.
              </p>
              <p className="font-adrianna text-gray-700">
                5.2. La reproducción, distribución, modificación, exhibición pública o cualquier otro uso del contenido
                de este sitio web sin el consentimiento previo por escrito de CONTE CONSTRUCCIÓN está estrictamente
                prohibido.
              </p>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">6. Limitación de Responsabilidad</h2>
              <p className="font-adrianna text-gray-700">
                6.1. En ningún caso CONTE CONSTRUCCIÓN será responsable por daños directos, indirectos, incidentales,
                especiales o consecuentes que resulten del uso o la imposibilidad de uso de este sitio web o de los
                servicios ofrecidos a través del mismo.
              </p>
              <p className="font-adrianna text-gray-700">
                6.2. CONTE CONSTRUCCIÓN no garantiza que el sitio web esté libre de virus u otros componentes dañinos.
              </p>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">7. Enlaces a Terceros</h2>
              <p className="font-adrianna text-gray-700">
                7.1. Este sitio web puede contener enlaces a sitios web de terceros. Estos enlaces son proporcionados
                únicamente para su conveniencia.
              </p>
              <p className="font-adrianna text-gray-700">
                7.2. CONTE CONSTRUCCIÓN no tiene control sobre el contenido de los sitios web de terceros y no asume
                ninguna responsabilidad por el contenido, las políticas de privacidad o las prácticas de los sitios web
                de terceros.
              </p>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">8. Modificaciones</h2>
              <p className="font-adrianna text-gray-700">
                8.1. CONTE CONSTRUCCIÓN se reserva el derecho de modificar estos Términos y Condiciones en cualquier
                momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
              </p>
              <p className="font-adrianna text-gray-700">
                8.2. Es responsabilidad del usuario revisar periódicamente estos Términos y Condiciones para estar al
                tanto de las modificaciones.
              </p>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">9. Ley Aplicable y Jurisdicción</h2>
              <p className="font-adrianna text-gray-700">
                9.1. Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de la República
                Argentina.
              </p>
              <p className="font-adrianna text-gray-700">
                9.2. Cualquier disputa que surja en relación con estos Términos y Condiciones estará sujeta a la
                jurisdicción exclusiva de los tribunales de la ciudad de Córdoba, Argentina.
              </p>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">10. Contacto</h2>
              <p className="font-adrianna text-gray-700">
                Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos a través de:
              </p>
              <ul className="font-adrianna list-disc pl-6 text-gray-700">
                <li>Email: info@conteconstruccion.com.ar</li>
                <li>Teléfono: 351 666 9950</li>
                <li>Dirección: Córdoba, Argentina</li>
              </ul>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild className="font-adrianna bg-orange-500 text-white hover:bg-orange-600">
                <Link href="/">Volver al Inicio</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CTAButton />
    </>
  )
}
