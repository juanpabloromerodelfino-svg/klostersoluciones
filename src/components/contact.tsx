'use client'

import { SITE } from '@/lib/config'

export function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const phone = data.get('phone') as string
    const service = data.get('service') as string
    const message = data.get('message') as string

    const lines = [`Hola! Soy ${name}.`]
    if (service) lines.push(`Me interesa: ${service}.`)
    if (message) lines.push(message)
    if (phone) lines.push(`Mi telefono: ${phone}`)

    const text = lines.join('\n')
    window.open(
      `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`,
      '_blank',
    )
  }

  return (
    <section id="contacto" className="border-t border-neutral-100 bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-sm font-medium text-green-700">Contacto</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Pedi tu presupuesto
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              Escribinos por WhatsApp o completa el formulario.
              Respondemos en menos de 24 horas. Sin cargo.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4 transition-colors hover:border-green-200 hover:bg-green-50/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                  <svg className="h-5 w-5 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm font-medium text-neutral-900">WhatsApp</span>
                  <span className="text-xs text-neutral-500">Te respondemos al toque</span>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100">
                  <svg className="h-5 w-5 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm font-medium text-neutral-900">Zona de cobertura</span>
                  <span className="text-xs text-neutral-500">Toda Bahia Blanca y alrededores</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8">
            <h3 className="text-base font-semibold text-neutral-900">
              Envianos tu consulta
            </h3>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-green-500 focus:bg-white focus:ring-1 focus:ring-green-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
                  Telefono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1.5 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-green-500 focus:bg-white focus:ring-1 focus:ring-green-500"
                  placeholder="Tu numero"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-neutral-700">
                  Servicio
                </label>
                <select
                  id="service"
                  name="service"
                  className="mt-1.5 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-green-500 focus:bg-white focus:ring-1 focus:ring-green-500"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Corte de Cesped">Corte de Cesped</option>
                  <option value="Mantenimiento de Jardines">Mantenimiento de Jardines</option>
                  <option value="Poda de Arboles">Poda de Arboles</option>
                  <option value="Desmalezado y Limpieza">Desmalezado y Limpieza</option>
                  <option value="Sistemas de Riego">Sistemas de Riego</option>
                  <option value="Diseno de Jardines">Diseno de Jardines</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="mt-1.5 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-green-500 focus:bg-white focus:ring-1 focus:ring-green-500"
                  placeholder="Contanos que necesitas..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-green-700 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-600"
              >
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
