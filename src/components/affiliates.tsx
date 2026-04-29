import { AFFILIATE_PRODUCTS } from '@/lib/config'

export function Affiliates() {
  return (
    <section id="insumos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-green-700">Recomendados</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Lo que usamos y recomendamos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-500">
            Despues de anos probando, estos son los productos que realmente
            funcionan.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AFFILIATE_PRODUCTS.map((product, i) => (
            <div
              key={i}
              className="rounded-xl border border-neutral-200 bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 text-2xl">
                🛠️
              </div>
              <h3 className="mt-4 text-sm font-semibold text-neutral-900">
                {product.name}
              </h3>
              <p className="mt-1.5 text-sm text-neutral-500">
                {product.description}
              </p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-green-700 hover:text-green-600"
              >
                Ver producto
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-neutral-400">
          Algunos links pueden contener enlaces de afiliados. Si compras a
          traves de ellos, nos ayudas a seguir mejorando sin costo extra para
          vos.
        </p>
      </div>
    </section>
  )
}
