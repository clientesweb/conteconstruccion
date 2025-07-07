import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import CTAButton from "@/components/cta-button"

export const metadata = {
  title: "Política de Privacidad | CONTE CONSTRUCCIÓN",
  description: "Política de privacidad y tratamiento de datos personales de CONTE CONSTRUCCIÓN.",
  alternates: {
    canonical: "https://www.conteconstruccion.com/politica-de-privacidad",
  },
  openGraph: {
    title: "Política de Privacidad | CONTE CONSTRUCCIÓN",
    description: "Política de privacidad y tratamiento de datos personales de CONTE CONSTRUCCIÓN.",
    url: "https://www.conteconstruccion.com/politica-de-privacidad",
    images: [{ url: "https://www.conteconstruccion.com/og-image.jpg" }],
  },
}

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="bg-gray-50 py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h1 className="font-akony mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Política de Privacidad
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
                En CONTE CONSTRUCCIÓN (en adelante, "nosotros", "nuestro" o "la Empresa") nos comprometemos a proteger
                su privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos
                su información personal cuando utiliza nuestro sitio web y nuestros servicios.
              </p>
              <p className="font-adrianna text-gray-700">
                Al utilizar nuestro sitio web y proporcionar su información personal, usted acepta las prácticas
                descritas en esta Política de Privacidad.
              </p>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">2. Información que Recopilamos</h2>
              <p className="font-adrianna text-gray-700">
                Podemos recopilar los siguientes tipos de información personal:
              </p>
              <ul className="font-adrianna list-disc pl-6 text-gray-700">
                <li>
                  <strong>Información de contacto:</strong> Nombre, dirección de correo electrónico, número de teléfono,
                  dirección postal.
                </li>
                <li>
                  <strong>Información de la consulta:</strong> Detalles sobre su interés en nuestros servicios,
                  preferencias y requisitos específicos.
                </li>
                <li>
                  <strong>Información técnica:</strong> Dirección IP, tipo de navegador, proveedor de servicios de
                  Internet, páginas de referencia/salida, sistema operativo, fecha/hora y datos de clickstream.
                </li>
                <li>
                  <strong>Cookies y tecnologías similares:</strong> Utilizamos cookies y tecnologías similares para
                  mejorar su experiencia en nuestro sitio web, analizar tendencias, administrar el sitio y recopilar
                  información demográfica sobre nuestra base de usuarios.
                </li>
              </ul>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">3. Cómo Utilizamos su Información</h2>
              <p className="font-adrianna text-gray-700">
                Utilizamos la información que recopilamos para los siguientes propósitos:
              </p>
              <ul className="font-adrianna list-disc pl-6 text-gray-700">
                <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
                <li>Responder a sus consultas y solicitudes.</li>
                <li>
                  Enviarle información sobre nuestros servicios, promociones y novedades (solo si ha dado su
                  consentimiento).
                </li>
                <li>Personalizar su experiencia en nuestro sitio web.</li>
                <li>Analizar y mejorar la eficacia de nuestro sitio web y nuestras estrategias de marketing.</li>
                <li>Cumplir con nuestras obligaciones legales y proteger nuestros derechos.</li>
              </ul>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">4. Formulario de Contacto</h2>
              <p className="font-adrianna text-gray-700">
                Cuando utiliza nuestro formulario de contacto, recopilamos la información que proporciona
                voluntariamente, como su nombre, dirección de correo electrónico, número de teléfono y el contenido de
                su mensaje.
              </p>
              <p className="font-adrianna text-gray-700">Esta información se utiliza exclusivamente para:</p>
              <ul className="font-adrianna list-disc pl-6 text-gray-700">
                <li>Responder a su consulta o solicitud.</li>
                <li>Proporcionar información sobre nuestros servicios.</li>
                <li>
                  Contactarlo a través del medio que haya seleccionado como preferencia (WhatsApp, correo electrónico o
                  llamada telefónica).
                </li>
              </ul>
              <p className="font-adrianna text-gray-700">
                Al enviar el formulario de contacto, usted consiente el procesamiento de sus datos personales para estos
                fines.
              </p>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">5. Compartir Información</h2>
              <p className="font-adrianna text-gray-700">
                No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes
                circunstancias:
              </p>
              <ul className="font-adrianna list-disc pl-6 text-gray-700">
                <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio y nuestro sitio web.</li>
                <li>
                  Cuando sea necesario para cumplir con la ley, proteger nuestros derechos o la seguridad de nuestros
                  usuarios.
                </li>
                <li>
                  En caso de una fusión, adquisición o venta de activos, su información personal podría ser transferida.
                  Le notificaremos antes de que su información personal sea transferida y quede sujeta a una política de
                  privacidad diferente.
                </li>
              </ul>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">6. Seguridad de los Datos</h2>
              <p className="font-adrianna text-gray-700">
                Implementamos medidas de seguridad técnicas, administrativas y físicas diseñadas para proteger la
                información personal que recopilamos. Sin embargo, ningún sistema de seguridad es impenetrable y no
                podemos garantizar la seguridad absoluta de su información.
              </p>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">7. Sus Derechos</h2>
              <p className="font-adrianna text-gray-700">
                Usted tiene ciertos derechos con respecto a su información personal, que incluyen:
              </p>
              <ul className="font-adrianna list-disc pl-6 text-gray-700">
                <li>Acceder a la información personal que tenemos sobre usted.</li>
                <li>Corregir información inexacta o incompleta.</li>
                <li>Solicitar la eliminación de su información personal.</li>
                <li>Oponerse al procesamiento de su información personal.</li>
                <li>
                  Retirar su consentimiento en cualquier momento (esto no afectará la legalidad del procesamiento basado
                  en el consentimiento antes de su retiro).
                </li>
              </ul>
              <p className="font-adrianna text-gray-700">
                Para ejercer estos derechos, contáctenos utilizando la información proporcionada al final de esta
                Política de Privacidad.
              </p>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">8. Retención de Datos</h2>
              <p className="font-adrianna text-gray-700">
                Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos
                para los que la recopilamos, incluido el cumplimiento de requisitos legales, contables o de informes.
              </p>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">9. Enlaces a Sitios Web de Terceros</h2>
              <p className="font-adrianna text-gray-700">
                Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las
                prácticas de privacidad o el contenido de estos sitios. Le recomendamos revisar las políticas de
                privacidad de cualquier sitio web que visite.
              </p>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">
                10. Cambios a esta Política de Privacidad
              </h2>
              <p className="font-adrianna text-gray-700">
                Podemos actualizar esta Política de Privacidad periódicamente. La versión más reciente estará siempre
                disponible en nuestro sitio web, con la fecha de la última actualización. Le recomendamos revisar esta
                Política de Privacidad regularmente para estar informado sobre cómo protegemos su información.
              </p>

              <h2 className="font-akony mt-8 text-2xl font-bold text-gray-900">11. Contacto</h2>
              <p className="font-adrianna text-gray-700">
                Si tiene alguna pregunta sobre esta Política de Privacidad o sobre cómo manejamos su información
                personal, puede contactarnos a través de:
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
