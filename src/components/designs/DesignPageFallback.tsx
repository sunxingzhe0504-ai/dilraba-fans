/** Lightweight skeleton shown while lazy-loaded page designs load. */
export function DesignPageFallback() {
  return (
    <div className="section-padding container-wide animate-pulse pt-16" aria-hidden>
      <div className="h-4 w-24 rounded bg-border" />
      <div className="mt-6 h-10 w-2/3 max-w-md rounded bg-border" />
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full max-w-xl rounded bg-border/70" />
        <div className="h-3 w-5/6 max-w-lg rounded bg-border/70" />
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-[2/3] rounded-2xl bg-border/60" />
        ))}
      </div>
    </div>
  );
}
