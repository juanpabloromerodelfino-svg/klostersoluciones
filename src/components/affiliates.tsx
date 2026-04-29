import { AFFILIATE_PRODUCTS } from '@/lib/config'

export function Affiliates() {
  return (
    <section id="insumos" className="bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Insumos Recomendados
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-green-900 sm:text-4xl">
            Las herramientas que usamos y recomendamos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brown-600">
            Despues de anos probando distintas marcas y modelos, estos son los
            productos que realmente funcionan. Si queres cuidar tu jardin entre
            visitas, estos son nuestros recomendados.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {AFFILIATE_PRODUCTS.map((product, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-green-50 p-6">
                <div className="text-center">
                  <div className="text-5xl">🛠️</div>
                  <p className="mt-2 text-xs text-brown-500">
                    Imagen del producto
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-green-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-brown-600">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-600"
                >
                  Ver en MercadoLibre
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-brown-500">
          Los links de esta seccion pueden contener enlaces de afiliados. Si
          compras a traves de ellos, nos ayudas a seguir mejorando sin costo
          extra para vos.
        </p>
      </div>
    </section>
  )
}
