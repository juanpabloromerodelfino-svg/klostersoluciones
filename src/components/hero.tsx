import { SITE } from '@/lib/config'

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-green-900 pt-20">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-green-900/60 to-green-900/90" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:py-40">
        {/* Logo grande */}
        <img
          src="/images/logo.png"
          alt="Kloster Paisajista & Jardineria"
          className="mb-8 h-40 w-40 rounded-full border-4 border-cream-100/30 object-cover shadow-2xl sm:h-52 sm:w-52"
        />

        <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Tu jardin en las mejores manos
        </h1>

        <p className="mt-4 text-lg text-green-200 sm:text-xl">
          {SITE.tagline}
        </p>

        <p className="mt-6 max-w-2xl text-base text-cream-200/80 sm:text-lg">
          Servicio profesional de jardineria en {SITE.city}. Corte de cesped,
          mantenimiento, podas, diseno de jardines y mas. Nos abrís la puerta de
          tu casa y cumplimos.
        </p>

        {/* Video placeholder */}
        <div className="mt-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-black/30 shadow-2xl">
          <div className="flex aspect-video items-center justify-center border-2 border-dashed border-green-400/30 p-8">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <svg
                  className="h-8 w-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm text-green-200">
                Video de presentacion — proximamente
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-green-500 hover:shadow-xl"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pedir Presupuesto Gratis
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 rounded-full border-2 border-cream-100/30 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10"
          >
            Ver Servicios
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-green-300">
          <span className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            +5 anos de experiencia
          </span>
          <span className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Presupuesto sin cargo
          </span>
          <span className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Toda Bahia Blanca
          </span>
        </div>
      </div>
    </section>
  )
}
