import { MENU_PRODUCTS } from "./data";

function formatPrice(value: number) {
  return value.toLocaleString("es-AR");
}

export function MenuManagerView() {
  return (
    <div className="space-y-3 p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h4 className="text-xs font-semibold text-white sm:text-sm">Productos del menú</h4>
          <p className="mt-0.5 text-[10px] text-white/40">
            Administre precios, disponibilidad y alta de productos
          </p>
        </div>
        <span className="rounded-lg bg-accent px-3 py-1.5 text-[10px] font-semibold text-[#020817] shadow-[0_0_20px_rgba(20,241,178,0.25)]">
          Añadir Producto
        </span>
      </div>

      <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-[10px] text-white/30">
        Buscar por nombre, categoría, descripción o precio…
      </div>

      <ul className="space-y-2">
        {MENU_PRODUCTS.map((product) => (
          <li
            key={product.name}
            className="rounded-xl border border-white/[0.08] bg-[#0a1020]/80 p-3"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-semibold text-white sm:text-xs">
                  {product.name}
                </p>
                <p className="mt-0.5 text-[9px] font-medium tracking-wide text-white/35">
                  {product.category}
                </p>
                <p className="mt-1 text-[10px] text-white/30">{product.description}</p>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 sm:shrink-0">
                <span className="rounded-md border border-sky-500/40 bg-sky-500/10 px-2 py-1 text-[9px] font-medium text-sky-300">
                  Editar
                </span>
                <span className="min-w-[3.5rem] rounded-md border border-white/10 bg-black/40 px-2 py-1 text-center text-[10px] font-medium text-white">
                  {formatPrice(product.price)}
                </span>
                <span className="rounded-md bg-emerald-500/15 px-2 py-1 text-[9px] font-medium text-emerald-400">
                  Disponible
                </span>
                <span className="rounded-md border border-red-500/30 bg-red-500/10 px-2 py-1 text-[9px] font-medium text-red-400/90">
                  Eliminar
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
