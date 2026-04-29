import { TESTIMONIALS } from '@/lib/config'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < count ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-green-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-green-400">
            Testimonios
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-green-200">
            La confianza se construye con trabajo bien hecho. Estas son las
            opiniones de quienes ya eligieron Kloster.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm"
            >
              <Stars count={t.rating} />
              <p className="mt-4 text-base leading-relaxed text-green-100">
                &ldquo;{t.text}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                  {t.name[0]}
                </div>
                <span className="text-sm font-medium text-green-300">
                  {t.name}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
