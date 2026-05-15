import { Minus, Plus } from "lucide-react";
import {
  FEATURED_RECIPE,
  STOCK_ITEMS,
  STOCK_SUB_TABS,
  STOCK_UNIT_FILTERS,
} from "./stock-data";

export function StockManagerView() {
  return (
    <div className="space-y-3 p-4 sm:p-5">
      <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 sm:p-4">
        <h4 className="text-xs font-semibold text-white sm:text-sm">Gestor de stock</h4>
        <p className="mt-1 text-[10px] leading-snug text-white/40">
          Administre ingredientes, umbrales y recetas para descontar stock al vender.
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {STOCK_SUB_TABS.map((tab, i) => (
            <span
              key={tab}
              className={`rounded-lg px-2.5 py-1 text-[10px] font-medium ${
                i === 0
                  ? "bg-accent text-[#020817]"
                  : "border border-white/[0.08] text-white/45"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-3">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-wide text-white/35">
              Agregar ingrediente al stock
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_72px_88px_auto] sm:items-end">
              <div>
                <p className="mb-1 text-[9px] uppercase text-white/30">Ingrediente</p>
                <div className="rounded-lg border border-white/10 bg-black/20 px-2.5 py-2 text-[10px] text-white/25">
                  Nombre
                </div>
              </div>
              <div>
                <p className="mb-1 text-[9px] uppercase text-white/30">Stock</p>
                <div className="rounded-lg border border-white/10 bg-black/20 px-2.5 py-2 text-[10px] text-white/25">
                  0
                </div>
              </div>
              <div>
                <p className="mb-1 text-[9px] uppercase text-white/30">Unidad</p>
                <div className="rounded-lg border border-white/10 bg-black/20 px-2.5 py-2 text-[10px] text-white/45">
                  UNIDAD
                </div>
              </div>
              <span className="rounded-lg bg-accent px-3 py-2.5 text-center text-[10px] font-bold text-[#020817]">
                Agregar
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
            <p className="mb-2 text-[11px] font-semibold text-white">Stock actual</p>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {STOCK_UNIT_FILTERS.map((unit, i) => (
                <span
                  key={unit}
                  className={`rounded-md px-2 py-0.5 text-[9px] font-medium ${
                    i === 2
                      ? "border border-accent/40 bg-accent/10 text-accent"
                      : "border border-white/10 text-white/40"
                  }`}
                >
                  {unit}
                </span>
              ))}
            </div>
            <ul className="space-y-2">
              {STOCK_ITEMS.map((item) => (
                <li
                  key={item.name}
                  className="rounded-xl border border-white/[0.08] bg-black/20 p-2.5"
                >
                  <p className="text-[10px] font-bold tracking-wide text-white">{item.name}</p>
                  <p className="mt-1 text-[10px] text-white/45">
                    Stock actual:{" "}
                    <span className="text-white/70">
                      {item.current} {item.unit}
                    </span>
                  </p>
                  <p className="text-[10px] text-white/35">
                    Umbral: ≤ {item.threshold} {item.unit}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-white/40">
                      <Minus className="h-3 w-3" />
                    </span>
                    <span className="min-w-[2rem] rounded-md border border-white/10 bg-black/30 px-2 py-1 text-center text-[10px] font-medium text-white">
                      {item.inputValue}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-[#020817]">
                      <Plus className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    <span className="rounded-md border border-white/10 px-2 py-1 text-[9px] text-white/50">
                      {item.unit}
                    </span>
                    <span className="rounded-md border border-sky-500/30 bg-sky-500/10 px-2 py-1 text-[9px] text-sky-300">
                      Guardar
                    </span>
                    <span className="rounded-md border border-white/10 px-2 py-1 text-[9px] text-white/45">
                      Editar
                    </span>
                    <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-[9px] text-amber-200">
                      Umbral
                    </span>
                    <span className="rounded-md border border-red-500/25 bg-red-500/10 px-2 py-1 text-[9px] text-red-300/90">
                      Eliminar
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
          <h4 className="text-[11px] font-semibold text-white">Usar recetas</h4>
          <p className="mt-1 text-[10px] leading-snug text-white/40">
            Descontá ingredientes del stock al preparar un plato con receta vinculada.
          </p>
          <div className="mt-3 rounded-lg border border-white/[0.08] bg-black/20 px-3 py-2 text-[10px] text-white/25">
            Buscar receta por nombre, preparación o ingrediente…
          </div>
          <article className="mt-3 rounded-xl border border-white/[0.08] bg-black/25 p-3">
            <div className="mb-2 flex items-start justify-between gap-2">
              <p className="text-[11px] font-semibold leading-snug text-white">
                {FEATURED_RECIPE.name}
              </p>
              <span className="shrink-0 rounded-md border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 text-[9px] text-sky-300">
                Editar
              </span>
            </div>
            <ul className="space-y-0.5 text-[10px] text-white/45">
              {FEATURED_RECIPE.ingredients.map((ing) => (
                <li key={ing}>· {ing}</li>
              ))}
            </ul>
            <div className="mt-3 flex items-center gap-2">
              <span className="flex items-center gap-1 rounded-lg border border-white/10 bg-black/30 px-1">
                <span className="flex h-6 w-6 items-center justify-center text-white/40">−</span>
                <span className="min-w-[1.25rem] text-center text-[11px] font-semibold text-white">
                  {FEATURED_RECIPE.qty}
                </span>
                <span className="flex h-6 w-6 items-center justify-center text-accent">+</span>
              </span>
              <span className="flex-1 rounded-lg bg-accent py-2 text-center text-[10px] font-bold text-[#020817]">
                Utilizar receta
              </span>
            </div>
          </article>
        </aside>
      </div>
    </div>
  );
}
