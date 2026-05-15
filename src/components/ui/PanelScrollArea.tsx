import { ChevronsDown } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type PanelScrollAreaProps = {
  children: ReactNode;
  className?: string;
  hint?: boolean;
};

export function PanelScrollArea({
  children,
  className = "",
  hint = true,
}: PanelScrollAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({
    progress: 0,
    canScrollUp: false,
    canScrollDown: false,
    thumbPercent: 100,
  });

  const updateScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    const maxScroll = scrollHeight - clientHeight;

    if (maxScroll <= 0) {
      setState({
        progress: 0,
        canScrollUp: false,
        canScrollDown: false,
        thumbPercent: 100,
      });
      return;
    }

    const thumbPercent = Math.min(100, Math.max(14, (clientHeight / scrollHeight) * 100));

    setState({
      progress: scrollTop / maxScroll,
      canScrollUp: scrollTop > 6,
      canScrollDown: scrollTop < maxScroll - 6,
      thumbPercent,
    });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScroll();
    const observer = new ResizeObserver(updateScroll);
    observer.observe(el);

    return () => observer.disconnect();
  }, [updateScroll]);

  const thumbTravel = 100 - state.thumbPercent;

  return (
    <div className="relative min-h-0">
      {state.canScrollUp && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-[#020817] to-transparent"
          aria-hidden
        />
      )}

      <div
        className="pointer-events-none absolute right-2 top-3 bottom-3 z-20 hidden w-1 rounded-full bg-white/[0.05] sm:block"
        aria-hidden
      >
        <div
          className="absolute left-0 w-full rounded-full bg-gradient-to-b from-accent via-accent/80 to-accent/30 shadow-[0_0_12px_rgba(20,241,178,0.45)] transition-[top,height] duration-200 ease-out"
          style={{
            height: `${state.thumbPercent}%`,
            top: `${state.progress * thumbTravel}%`,
          }}
        />
      </div>

      <div
        ref={scrollRef}
        onScroll={updateScroll}
        className={`panel-scroll-accent pr-3 sm:pr-4 ${className}`}
      >
        {children}
      </div>

      {state.canScrollDown && (
        <>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-[#020817] via-[#020817]/85 to-transparent"
            aria-hidden
          />
          {hint && (
            <div
              className="pointer-events-none absolute bottom-2.5 left-1/2 z-20 -translate-x-1/2"
              aria-hidden
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-accent/10 shadow-[0_0_20px_rgba(20,241,178,0.2)] backdrop-blur-sm">
                <ChevronsDown
                  className="panel-scroll-hint-icon h-4 w-4 text-accent"
                  strokeWidth={2.5}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
