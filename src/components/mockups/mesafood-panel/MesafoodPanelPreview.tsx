import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PanelScrollArea } from "../../ui/PanelScrollArea";
import { useEffect, useState } from "react";
import type { PanelTab } from "./data";
import { MenuManagerView } from "./MenuManagerView";
import { PanelHeader } from "./PanelHeader";
import { PanelNav } from "./PanelNav";
import { StatisticsView } from "./StatisticsView";

const ROTATE_MS = 6000;

export function MesafoodPanelPreview() {
  const reduced = useReducedMotion();
  const [tab, setTab] = useState<PanelTab>("menu");

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setTab((t) => (t === "menu" ? "stats" : "menu"));
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <div
      className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#020817] shadow-[0_32px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)_inset,0_0_80px_rgba(20,241,178,0.06)]"
      role="img"
      aria-label="Vista previa del panel administrativo Mesafood"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden
      />

      <PanelHeader />
      <PanelNav active={tab} />

      <PanelScrollArea className="max-h-[min(480px,65vh)] sm:max-h-[min(520px,70vh)]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={tab}
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {tab === "menu" ? <MenuManagerView /> : <StatisticsView compact />}
          </motion.div>
        </AnimatePresence>
      </PanelScrollArea>

      <div className="flex items-center justify-center gap-2 border-t border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
        {(["menu", "stats"] as const).map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            aria-label={id === "menu" ? "Ver gestor de menú" : "Ver estadísticas"}
            aria-pressed={tab === id}
            className={`h-1.5 rounded-full transition-all ${
              tab === id ? "w-5 bg-accent" : "w-1.5 bg-white/20 hover:bg-white/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
