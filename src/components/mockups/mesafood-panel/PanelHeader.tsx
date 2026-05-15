export function PanelHeader() {
  return (
    <header className="flex flex-wrap items-start justify-between gap-3 border-b border-white/[0.06] px-4 py-3 sm:px-5">
      <div>
        <h3 className="text-sm font-bold tracking-tight text-white sm:text-base">
          Mesafood <span className="font-normal text-white/50">· Panel</span>
        </h3>
        <p className="mt-0.5 text-[10px] text-white/45 sm:text-[11px]">
          Gestión de pedidos y menú en tiempo real
        </p>
        <p className="mt-1 text-[10px] text-white/35">
          Restaurante activo:{" "}
          <span className="text-white/55">Restaurante demo</span>
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Realtime activo
        </span>
        <span className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-white/50">
          Salir
        </span>
      </div>
    </header>
  );
}
