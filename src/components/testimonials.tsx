import { TESTIMONIALS } from '@/lib/config'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? 'text-green-600' : 'text-neutral-200'}`}
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
    <section id="testimonios" className="border-t border-neutral-100 bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-green-700">Testimonios</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-500">
            La confianza se construye con trabajo bien hecho.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-xl border border-neutral-200 bg-white p-6"
            >
              <Stars count={t.rating} />
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                &ldquo;{t.text}&rdquo;
              </p>
              <footer className="mt-5 flex items-center gap-3 border-t border-neutral-100 pt-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-xs font-semibold text-green-700">
                  {t.name[0]}
                </div>
                <span className="text-sm font-medium text-neutral-700">
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
