const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  size: 2 + (i % 3),
  delay: (i % 5) * 0.4,
}));

export function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-accent/20 animate-pulse"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${3 + (p.id % 4)}s`,
          }}
        />
      ))}
    </div>
  );
}
