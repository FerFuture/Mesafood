import { PanelScrollArea } from "../../ui/PanelScrollArea";
import { Minus, Plus } from "lucide-react";
import {
  WAITER_MENU,
  WAITER_ORDER_ITEM_COUNT,
  WAITER_ORDER_TOTAL,
  WAITER_TABLE_NUMBER,
  formatWaiterPrice,
} from "./data";

function QuantityControl({ qty }: { qty: number }) {
  return (
    <div className="flex items-center gap-1">
      <span
        className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white/50"
        aria-hidden
      >
        <Minus className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
      <span className="min-w-[1.25rem] text-center text-xs font-semibold text-white">{qty}</span>
      <span
        className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-[#020817] shadow-[0_0_12px_rgba(20,241,178,0.35)]"
        aria-hidden
      >
        <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    </div>
  );
}

export function WaiterPanelPreview() {
  return (
    <div
      className="relative flex w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#020817] shadow-[0_32px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)_inset,0_0_80px_rgba(20,241,178,0.06)]"
      role="img"
      aria-label="Vista previa del panel de mozo Mesafood"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden
      />

      <header className="flex items-start justify-between gap-3 border-b border-white/[0.06] px-4 py-3.5 sm:px-5">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">Mozo</h3>
          <p className="mt-0.5 text-[11px] text-white/40">
            mozo · <span className="text-white/55">Restaurante demo</span>
          </p>
        </div>
        <span className="shrink-0 rounded-lg border border-white/15 bg-transparent px-3 py-1.5 text-[11px] text-white/70">
          Salir
        </span>
      </header>

      <div className="grid grid-cols-2 gap-2 border-b border-white/[0.06] p-3 sm:px-4">
        <span className="rounded-xl bg-[#0d3d32] px-3 py-2.5 text-center text-[11px] font-semibold text-white ring-1 ring-accent/20">
          Nuevo pedido
        </span>
        <span className="rounded-xl px-3 py-2.5 text-center text-[11px] font-medium text-white/40">
          Pedidos realizados
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <div className="space-y-3 px-4 py-3 sm:px-5">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-white/35">Mesa</p>
            <div className="mt-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <p className="text-2xl font-bold text-white">{WAITER_TABLE_NUMBER}</p>
            </div>
            <p className="mt-1.5 text-[10px] leading-snug text-white/30">
              Obligatorio para enviar el pedido a cocina.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-2.5 text-[11px] text-white/25">
            Buscar por nombre, categoría, descripción o precio…
          </div>
        </div>

        <div className="relative min-h-[200px] flex-1 overflow-hidden">
          <PanelScrollArea className="max-h-[min(280px,42vh)] space-y-4 px-4 pb-6 sm:max-h-[320px] sm:px-5">
            {WAITER_MENU.map((group) => (
              <section key={group.category}>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-white/35">
                  {group.category}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-2.5"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[11px] font-medium text-white sm:text-xs">
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-[10px] text-white/40">
                          {formatWaiterPrice(item.price)}
                        </p>
                      </div>
                      <QuantityControl qty={item.qty} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </PanelScrollArea>
        </div>

        <footer className="border-t border-white/[0.08] bg-[#020817] px-4 py-3 sm:px-5">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[10px] text-white/40">Total</p>
              <p className="text-xl font-bold text-accent sm:text-2xl">
                {formatWaiterPrice(WAITER_ORDER_TOTAL)}
              </p>
              <p className="mt-0.5 text-[10px] text-white/35">{WAITER_ORDER_ITEM_COUNT} ítem(s)</p>
            </div>
            <span className="shrink-0 rounded-xl bg-accent px-4 py-3 text-center text-[11px] font-bold text-[#020817] shadow-[0_0_24px_rgba(20,241,178,0.35)] sm:px-5 sm:text-xs">
              Enviar a cocina
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
