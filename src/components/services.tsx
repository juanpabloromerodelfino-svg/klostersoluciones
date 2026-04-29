import { SERVICES, SITE } from '@/lib/config'

export function Services() {
  return (
    <section id="servicios" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-green-700">Servicios</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Todo lo que tu jardín necesita
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-500">
            Soluciones completas de jardinería y paisajismo en Bahía Blanca.
            Desde el corte semanal hasta el diseño integral de tu espacio verde.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <a
              key={service.id}
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`¡Hola! Me interesa el servicio de ${service.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-neutral-200 p-6 transition-all hover:border-green-200 hover:bg-green-50/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-xl group-hover:bg-green-100">
                {service.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-neutral-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-700 opacity-0 transition-opacity group-hover:opacity-100">
                Consultar
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <p className="sr-only">{service.seoText}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
