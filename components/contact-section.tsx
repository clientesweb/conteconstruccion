"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import Link from "next/link"

// Esquema de validación con Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Ingresa un correo electrónico válido" }),
  phone: z
    .string()
    .min(8, { message: "El número de teléfono debe tener al menos 8 dígitos" })
    .regex(/^[0-9\s+\-$$$$]+$/, { message: "Ingresa un número de teléfono válido" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
  interest: z.enum(["general", "tipologia1", "tipologia2", "tipologia3", "otro"], {
    required_error: "Selecciona un interés",
  }),
  contactPreference: z.enum(["whatsapp", "email", "phone"], {
    required_error: "Selecciona una preferencia de contacto",
  }),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar los términos y condiciones" }),
  }),
})

type FormData = z.infer<typeof formSchema>

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      interest: "general",
      contactPreference: "whatsapp",
      termsAccepted: false,
    },
  })

  const onSubmit = async (data: FormData) => {
    try {
      setFormStatus("submitting")

      // Formatear el mensaje para WhatsApp
      const message = `
*Nuevo contacto desde el sitio web*
----------------------------------
*Nombre:* ${data.name}
*Email:* ${data.email}
*Teléfono:* ${data.phone}
*Interés:* ${getInterestText(data.interest)}
*Preferencia de contacto:* ${getContactPreferenceText(data.contactPreference)}
*Mensaje:*
${data.message}
----------------------------------
      `.trim()

      // Codificar el mensaje para URL
      const encodedMessage = encodeURIComponent(message)

      // Crear el enlace de WhatsApp
      const whatsappLink = `https://wa.me/5493516669950?text=${encodedMessage}` // Actualizado número de WhatsApp al nuevo 3516669950

      // Abrir WhatsApp en una nueva pestaña
      window.open(whatsappLink, "_blank")

      // Mostrar éxito y resetear el formulario
      setFormStatus("success")
      setTimeout(() => {
        reset()
        setFormStatus("idle")
      }, 3000)
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setFormStatus("error")
      setErrorMessage("Ocurrió un error al enviar el formulario. Por favor, intenta nuevamente.")
      setTimeout(() => {
        setFormStatus("idle")
        setErrorMessage(null)
      }, 3000)
    }
  }

  const getInterestText = (interest: string): string => {
    const interestMap: Record<string, string> = {
      general: "Información general",
      tipologia1: "Tipología 1",
      tipologia2: "Tipología 2",
      tipologia3: "Tipología 3",
      otro: "Otro",
    }
    return interestMap[interest] || interest
  }

  const getContactPreferenceText = (preference: string): string => {
    const preferenceMap: Record<string, string> = {
      whatsapp: "WhatsApp",
      email: "Correo electrónico",
      phone: "Llamada telefónica",
    }
    return preferenceMap[preference] || preference
  }

  return (
    <section id="contacto" className="relative overflow-hidden bg-navy-900 py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mb-12 sm:mb-16 text-center px-2 sm:px-0">
          <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-orange-500/20">
            <i className="fa-solid fa-envelope-open-text text-orange-500 text-lg sm:text-xl"></i>
          </div>
          <h2 className="font-akony mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            CONTACTANOS
          </h2>
          <div className="mx-auto h-1 w-16 sm:w-20 bg-orange-500"></div>
          <p className="font-adrianna mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base lg:text-lg text-gray-300 px-4 sm:px-0">
            Estamos listos para ayudarte a hacer realidad tu proyecto. Contáctanos para obtener más información o
            solicitar un presupuesto.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 lg:grid-cols-2 px-2 sm:px-0">
          <div className="rounded-2xl bg-white p-4 sm:p-6 md:p-8 shadow-xl">
            <h3 className="font-akony mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-gray-900">Envíanos un mensaje</h3>

            {/* Estado del formulario */}
            {formStatus === "success" && (
              <div className="mb-6 flex items-center gap-2 rounded-lg bg-green-50 p-4 text-green-700" role="alert">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                <p>¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.</p>
              </div>
            )}

            {formStatus === "error" && (
              <div className="mb-6 flex items-center gap-2 rounded-lg bg-red-50 p-4 text-red-700" role="alert">
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <p>{errorMessage || "Ocurrió un error al enviar el formulario. Por favor, intenta nuevamente."}</p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-adrianna text-sm font-medium text-gray-900">
                    Nombre{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                    <span className="sr-only">(requerido)</span>
                  </label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    className={`font-adrianna border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-sm sm:text-base ${
                      errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                    }`}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name")}
                    disabled={isSubmitting}
                    required
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-red-500" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-adrianna text-sm font-medium text-gray-900">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className={`font-adrianna border-gray-300 focus:border-orange-500 focus:ring-orange-500 ${
                      errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                    }`}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email")}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-red-500" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="font-adrianna text-sm font-medium text-gray-900">
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Tu número de teléfono"
                  className={`font-adrianna border-gray-300 focus:border-orange-500 focus:ring-orange-500 ${
                    errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                  }`}
                  aria-invalid={errors.phone ? "true" : "false"}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  {...register("phone")}
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-sm text-red-500" role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="font-adrianna text-sm font-medium text-gray-900">
                  ¿En qué estás interesado? <span className="text-red-500">*</span>
                </label>
                <select
                  id="interest"
                  className={`w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 ${
                    errors.interest ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                  }`}
                  aria-invalid={errors.interest ? "true" : "false"}
                  aria-describedby={errors.interest ? "interest-error" : undefined}
                  {...register("interest")}
                  disabled={isSubmitting}
                >
                  <option value="general">Información general</option>
                  <option value="tipologia1">Vivienda 1</option>
                  <option value="tipologia2">Vivienda 2</option>
                  <option value="tipologia3">Vivienda 3</option>
                  <option value="otro">Otro</option>
                </select>
                {errors.interest && (
                  <p id="interest-error" className="text-sm text-red-500" role="alert">
                    {errors.interest.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="font-adrianna text-sm font-medium text-gray-900">
                  ¿Cómo prefieres que te contactemos? <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="whatsapp"
                      className="h-4 w-4 text-orange-500 focus:ring-orange-500"
                      {...register("contactPreference")}
                      disabled={isSubmitting}
                    />
                    <span className="font-adrianna text-gray-700">WhatsApp</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="email"
                      className="h-4 w-4 text-orange-500 focus:ring-orange-500"
                      {...register("contactPreference")}
                      disabled={isSubmitting}
                    />
                    <span className="font-adrianna text-gray-700">Email</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="phone"
                      className="h-4 w-4 text-orange-500 focus:ring-orange-500"
                      {...register("contactPreference")}
                      disabled={isSubmitting}
                    />
                    <span className="font-adrianna text-gray-700">Llamada telefónica</span>
                  </label>
                </div>
                {errors.contactPreference && (
                  <p className="text-sm text-red-500" role="alert">
                    {errors.contactPreference.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-adrianna text-sm font-medium text-gray-900">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="¿En qué podemos ayudarte?"
                  className={`font-adrianna min-h-32 border-gray-300 focus:border-orange-500 focus:ring-orange-500 ${
                    errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                  }`}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  {...register("message")}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p id="message-error" className="text-sm text-red-500" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className={`mt-1 h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 ${
                      errors.termsAccepted ? "border-red-500" : ""
                    }`}
                    {...register("termsAccepted")}
                    disabled={isSubmitting}
                  />
                  <span className="font-adrianna text-sm text-gray-700">
                    Acepto los{" "}
                    <Link href="/terminos-y-condiciones" className="text-orange-500 hover:underline">
                      términos y condiciones
                    </Link>{" "}
                    y la{" "}
                    <Link href="/politica-de-privacidad" className="text-orange-500 hover:underline">
                      política de privacidad
                    </Link>
                    <span className="text-red-500">*</span>
                  </span>
                </label>
                {errors.termsAccepted && (
                  <p className="text-sm text-red-500" role="alert">
                    {errors.termsAccepted.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="group relative w-full overflow-hidden bg-orange-500 text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <i
                        className="fa-solid fa-paper-plane ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      ></i>
                    </>
                  )}
                </span>
                <span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-orange-600 transition-transform duration-300 group-hover:translate-y-0"></span>
              </Button>

              <p className="text-center text-xs text-gray-500">
                Los campos marcados con <span className="text-red-500">*</span> son obligatorios
              </p>
            </form>
          </div>

          <div className="flex flex-col justify-between gap-6 sm:gap-8">
            <div className="rounded-2xl bg-navy-800 p-4 sm:p-6 md:p-8 shadow-xl">
              <h3 className="font-akony mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-white">
                Información de Contacto
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="mr-3 sm:mr-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-orange-500/20">
                    <i className="fa-solid fa-phone-volume text-orange-500 text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <p className="font-adrianna text-xs sm:text-sm text-gray-400">Teléfono</p>
                    <a
                      href="tel:+5493516669950"
                      className="font-adrianna text-base sm:text-lg text-white hover:text-orange-300 transition-colors"
                    >
                      (0351) 6669950
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                    <i className="fa-solid fa-envelope text-orange-500 text-xl"></i>
                  </div>
                  <div>
                    <p className="font-adrianna text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:info@conteconstruccion.com.ar"
                      className="font-adrianna text-lg text-white hover:text-orange-300 transition-colors"
                    >
                      info@conteconstruccion.com.ar
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                    <i className="fa-solid fa-location-dot text-orange-500 text-xl"></i>
                  </div>
                  <div>
                    <p className="font-adrianna text-sm text-gray-400">Dirección</p>
                    <p className="font-adrianna text-lg text-white">
                      Av. Monseñor P. Cabrera 3068 (B° Alto San Martín) Córdoba – Argentina
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                    <i className="fa-brands fa-instagram text-orange-500 text-xl"></i>
                  </div>
                  <div>
                    <p className="font-adrianna text-sm text-gray-400">Instagram</p>
                    <a
                      href="https://instagram.com/conteconstruccion"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-adrianna text-lg text-white hover:text-orange-300 transition-colors"
                    >
                      @conteconstruccion
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                    <i className="fa-brands fa-whatsapp text-orange-500 text-xl"></i>
                  </div>
                  <div>
                    <p className="font-adrianna text-sm text-gray-400">WhatsApp</p>
                    <a
                      href="https://wa.me/5493516669950" // Actualizado enlace de WhatsApp al nuevo número
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-adrianna text-lg text-white hover:text-orange-300 transition-colors"
                    >
                      351 666 9950 {/* Actualizado número de WhatsApp mostrado al nuevo formato */}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                    <i className="fa-solid fa-user text-orange-500 text-xl"></i>
                  </div>
                  <div>
                    <p className="font-adrianna text-sm text-gray-400">Contacto</p>
                    <p className="font-adrianna text-lg text-white">Fernando Conte</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-orange-500 p-8 text-white shadow-xl">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-400/30"></div>
              <div className="relative z-10">
                <h3 className="font-akony mb-4 text-2xl font-bold">¿Listo para comenzar?</h3>
                <p className="font-adrianna mb-6">
                  Solicita un presupuesto personalizado para tu proyecto y comienza a hacer realidad tu sueño.
                </p>
                <Button
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-500"
                  onClick={() => {
                    const contactForm = document.getElementById("contacto")
                    contactForm?.scrollIntoView({ behavior: "smooth" })
                    const nameInput = document.getElementById("name")
                    setTimeout(() => nameInput?.focus(), 800)
                  }}
                >
                  Solicitar Presupuesto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
