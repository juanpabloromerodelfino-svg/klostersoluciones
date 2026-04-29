import { SERVICES, SITE } from '@/lib/config'

export function Services() {
  return (
    <section id="servicios" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Nuestros Servicios
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-green-900 sm:text-4xl">
            Cuidamos tu jardin como si fuera nuestro
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brown-600">
            Ofrecemos soluciones completas de jardineria y paisajismo en{' '}
            {SITE.city}. Desde el corte semanal hasta el diseno integral de tu
            espacio verde.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group rounded-2xl border border-green-100 bg-green-50/50 p-8 transition-all hover:border-green-300 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="font-heading text-xl font-bold text-green-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brown-600">
                {service.description}
              </p>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hola! Me interesa el servicio de ${service.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-green-700 transition-colors group-hover:text-green-600"
              >
                Consultar
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              {/* Hidden SEO text */}
              <p className="sr-only">{service.seoText}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
