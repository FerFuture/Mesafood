import { PanelScrollArea } from "../../ui/PanelScrollArea";
import { PanelHeader } from "./PanelHeader";
import { PanelNav } from "./PanelNav";
import { StockManagerView } from "./StockManagerView";

export function InventoryPanelPreview() {
  return (
    <div
      className="relative w-full min-w-0 max-w-2xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#020817] shadow-[0_32px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)_inset,0_0_80px_rgba(20,241,178,0.06)] max-sm:rounded-xl"
      role="img"
      aria-label="Vista previa del gestor de stock Mesafood"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden
      />

      <PanelHeader />
      <PanelNav active="stock" />

      <PanelScrollArea className="max-h-[min(560px,72vh)]">
        <StockManagerView />
      </PanelScrollArea>
    </div>
  );
}
