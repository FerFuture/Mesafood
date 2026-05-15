import type { ReactNode } from "react";

interface MockupFrameProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export function MockupFrame({ children, className = "", title = "Mesafood" }: MockupFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border bg-bg-secondary shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(20,241,178,0.08)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-bg-card/80 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-danger/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
        <span className="ml-3 flex items-center gap-2 text-xs text-text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          En vivo · {title}
        </span>
      </div>
      {children}
    </div>
  );
}
