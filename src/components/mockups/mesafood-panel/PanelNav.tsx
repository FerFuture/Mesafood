import type { PanelTab } from "./data";
import { PANEL_TABS } from "./data";

type PanelNavProps = {
  active: PanelTab;
};

export function PanelNav({ active }: PanelNavProps) {
  return (
    <nav
      className="panel-scroll-x flex min-w-0 snap-x snap-mandatory gap-1.5 border-b border-white/[0.06] px-3 py-2.5 sm:px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Secciones del panel"
    >
      {PANEL_TABS.map((tab) => {
        const isActive = tab.id === active;
        return (
          <span
            key={tab.id}
            className={`shrink-0 snap-start rounded-lg px-2 py-1.5 text-[10px] font-medium transition-colors sm:px-2.5 sm:text-[11px] ${
              isActive
                ? "bg-accent text-[#020817] shadow-[0_0_16px_rgba(20,241,178,0.35)]"
                : "border border-white/[0.08] bg-white/[0.03] text-white/45"
            }`}
          >
            <span className="sm:hidden">{tab.labelSm ?? tab.label}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </span>
        );
      })}
    </nav>
  );
}
