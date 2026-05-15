import { PanelScrollArea } from "../../ui/PanelScrollArea";
import { KITCHEN_ORDERS } from "./data";

function OrderCard({
  id,
  datetime,
  status,
  typeLabel,
  typeVariant,
  table,
  items,
  footer,
}: (typeof KITCHEN_ORDERS)[number]) {
  return (
    <article className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3.5 sm:p-4">
      <div className="flex items-start justify-between gap-2">
        <p className="min-w-0 break-words text-[10px] text-white/40 sm:text-[11px]">
          <span className="font-medium text-white/55">#{id}</span>
          <span className="mx-1.5 text-white/20">·</span>
          {datetime}
        </p>
        <span className="shrink-0 rounded-full bg-sky-500/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-sky-300 ring-1 ring-sky-500/30">
          {status}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span
          className={`text-[11px] font-medium sm:text-xs ${
            typeVariant === "delivery" ? "text-sky-300" : "text-white/85"
          }`}
        >
          {typeLabel}
        </span>
        {table && (
          <span className="rounded-md bg-violet-500/20 px-2 py-0.5 text-[10px] font-medium text-violet-200 ring-1 ring-violet-500/25">
            Mesa {table}
          </span>
        )}
      </div>

      <ul className="mt-3 space-y-1">
        {items.map((item) => (
          <li key={item} className="text-[12px] font-medium text-accent sm:text-sm">
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-3 rounded-lg border border-white/[0.06] bg-black/30 px-3 py-2 text-[10px] text-white/40">
        {footer}
      </div>
    </article>
  );
}

export function KitchenPanelPreview() {
  return (
    <div
      className="relative flex w-full min-w-0 max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#020817] shadow-[0_32px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)_inset,0_0_80px_rgba(20,241,178,0.06)] max-sm:rounded-xl"
      role="img"
      aria-label="Vista previa del panel de cocina Mesafood"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden
      />

      <header className="flex items-start justify-between gap-3 border-b border-white/[0.06] px-3 py-3 sm:px-5 sm:py-3.5">
        <div className="min-w-0">
          <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">Cocina</h3>
          <p className="mt-0.5 text-[11px] text-white/40">Restaurante demo</p>
        </div>
        <span className="shrink-0 rounded-lg border border-white/15 bg-transparent px-3 py-1.5 text-[11px] text-white/70">
          Salir
        </span>
      </header>

      <PanelScrollArea className="max-h-[min(420px,55vh)] space-y-3 p-4 pb-6 sm:max-h-[460px] sm:p-5">
        {KITCHEN_ORDERS.map((order) => (
          <OrderCard key={order.id} {...order} />
        ))}
      </PanelScrollArea>
    </div>
  );
}
