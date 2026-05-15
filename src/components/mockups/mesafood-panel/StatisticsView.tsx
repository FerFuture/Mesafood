import {
  DAILY_STATS,
  PAYMENT_METHODS,
  SALES_WEEK,
  TOP_PRODUCTS,
} from "./data";

const maxSales = Math.max(...SALES_WEEK.map((d) => d.amount), 1);
const maxQty = Math.max(...TOP_PRODUCTS.map((p) => p.qty), 1);

type StatisticsViewProps = {
  compact?: boolean;
};

export function StatisticsView({ compact = false }: StatisticsViewProps) {
  return (
    <div className="space-y-3 p-4 sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h4 className="text-xs font-semibold text-white sm:text-sm">Resumen del día</h4>
          <p className="mt-0.5 text-[9px] text-white/35">Comparado con los últimos 30 días</p>
        </div>
        <span className="shrink-0 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-white/45">
          Refrescar
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
        {DAILY_STATS.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-xl border bg-white/[0.02] p-2.5 ${
              "danger" in stat && stat.danger
                ? "border-red-500/25"
                : "warn" in stat && stat.warn
                  ? "border-amber-500/25"
                  : "highlight" in stat && stat.highlight
                    ? "border-accent/30"
                    : "border-white/[0.08]"
            }`}
          >
            <p className="text-[8px] font-medium uppercase tracking-wide text-white/35">
              {stat.label}
            </p>
            <p
              className={`mt-1 text-xs font-bold ${
                "highlight" in stat && stat.highlight ? "text-accent" : "text-white"
              }`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
          <div className="mb-3">
            <p className="text-[11px] font-semibold text-white">Ventas últimos 7 días</p>
            <p className="text-sm font-bold text-accent">$ 14.000,00</p>
          </div>
          <div className="flex h-20 items-end justify-between gap-1">
            {SALES_WEEK.map((day) => {
              const height = day.amount > 0 ? (day.amount / maxSales) * 100 : 4;
              return (
                <div key={day.day} className="flex flex-1 flex-col items-center gap-1">
                  <div className="relative flex h-14 w-full items-end justify-center">
                    {day.amount > 0 && (
                      <span className="absolute -top-4 text-[7px] font-medium text-accent">
                        $ {(day.amount / 1000).toFixed(0)}k
                      </span>
                    )}
                    <div
                      className={`w-full max-w-[18px] rounded-t ${
                        day.amount > 0
                          ? "bg-gradient-to-t from-accent/80 to-accent shadow-[0_0_12px_rgba(20,241,178,0.4)]"
                          : "bg-white/[0.06]"
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  </div>
                  <span className="text-[8px] text-white/35">{day.day}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
          <p className="text-[11px] font-semibold text-white">Productos más vendidos</p>
          <p className="mb-3 text-[9px] text-white/35">
            Top 5 de los últimos 30 días (excluye cancelados)
          </p>
          <ul className="space-y-2">
            {TOP_PRODUCTS.map((product) => (
              <li key={product.name} className="space-y-1">
                <div className="flex items-center justify-between gap-2 text-[10px]">
                  <span className="truncate text-white/70">{product.name}</span>
                  <span className="shrink-0 font-semibold text-accent">{product.qty}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent/90 to-emerald-400/80"
                    style={{ width: `${(product.qty / maxQty) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {!compact && (
      <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
        <p className="mb-2 text-[11px] font-semibold text-white">Cobros por método de pago</p>
        <p className="mb-3 text-[9px] text-white/35">Últimos 30 días</p>
        <div className="-mx-1 overflow-x-auto rounded-lg border border-white/[0.06] sm:mx-0">
          <table className="w-full min-w-[280px] text-left text-[9px] sm:text-[10px]">
            <thead>
              <tr className="border-b border-white/[0.06] bg-white/[0.03] text-white/40">
                <th className="whitespace-nowrap px-2 py-2 font-medium sm:px-2.5">Método</th>
                <th className="whitespace-nowrap px-2 py-2 font-medium sm:px-2.5">Pedidos</th>
                <th className="whitespace-nowrap px-2 py-2 font-medium sm:px-2.5">Recaudado</th>
                <th className="whitespace-nowrap px-2 py-2 font-medium sm:px-2.5">%</th>
              </tr>
            </thead>
            <tbody>
              {PAYMENT_METHODS.map((row) => (
                <tr key={row.method} className="border-t border-white/[0.04] text-white/65">
                  <td className="max-w-[120px] truncate px-2 py-2 sm:max-w-none sm:px-2.5">
                    {row.method}
                  </td>
                  <td className="px-2 py-2 sm:px-2.5">{row.orders}</td>
                  <td className="whitespace-nowrap px-2 py-2 text-accent sm:px-2.5">{row.collected}</td>
                  <td className="px-2 py-2 sm:px-2.5">{row.share}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      )}
    </div>
  );
}
