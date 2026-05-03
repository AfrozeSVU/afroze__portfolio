import { useEffect, useRef, useState } from "react";
import { recommendations } from "@/data/portfolio";
import { Quote, AlignVerticalJustifyStart, AlignHorizontalJustifyStart } from "lucide-react";

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

const colors = [
  "from-sky-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-pink-500 to-rose-600",
  "from-cyan-500 to-sky-600",
];

export function RecommendationsDoc() {
  const [mode, setMode] = useState<"vertical" | "horizontal">("vertical");
  const scrollRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);
  const posRef = useRef(0);

  useEffect(() => {
    if (mode !== "vertical") return;
    const el = scrollRef.current;
    if (!el) return;
    posRef.current = el.scrollTop;

    const tick = () => {
      posRef.current += 0.6;
      if (posRef.current >= el.scrollHeight / 2) posRef.current = 0;
      el.scrollTop = posRef.current;
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [mode]);

  const items = mode === "vertical"
    ? [...recommendations, ...recommendations]
    : recommendations;

  return (
    <div className="p-6 md:p-10 fade-in flex flex-col h-full">
      {/* header */}
      <div className="flex items-start justify-between mb-1">
        <h2 className="font-mono text-2xl gradient-text">recommendations.doc</h2>
        {/* toggle */}
        <div className="flex items-center gap-1 bg-muted border border-border rounded-md p-1 shrink-0">
          <button
            onClick={() => setMode("vertical")}
            title="Auto scroll"
            className={`p-1.5 rounded transition-colors ${mode === "vertical" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            <AlignVerticalJustifyStart className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMode("horizontal")}
            title="Manual scroll"
            className={`p-1.5 rounded transition-colors ${mode === "horizontal" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            <AlignHorizontalJustifyStart className="w-4 h-4" />
          </button>
        </div>
      </div>
      <p className="text-base text-muted-foreground mb-8 font-mono">
        {"/* voices of people I've built with */"}
      </p>

      {/* vertical auto-scroll */}
      {mode === "vertical" && (
        <div
          ref={scrollRef}
          className="flex-1 overflow-hidden"
          style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)" }}
        >
          <div className="flex flex-col gap-5 pb-4">
            {items.map((r, i) => (
              <Card key={i} r={r} i={i} />
            ))}
          </div>
        </div>
      )}

      {/* horizontal manual scroll */}
      {mode === "horizontal" && (
        <div className="flex-1 overflow-x-auto scrollbar-thin">
          <div className="flex gap-5 pb-4 items-stretch" style={{ width: "max-content", minHeight: "100%" }}>
            {items.map((r, i) => (
              <div key={i} className="w-[440px] shrink-0">
                <Card r={r} i={i} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Card({ r, i }: { r: typeof recommendations[0]; i: number }) {
  return (
    <div className="rounded-lg p-[1px] gradient-border h-full">
      <div className="bg-card rounded-lg p-6 h-full flex flex-col justify-between">
        {/* person info — top */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center shrink-0`}>
            <span className="text-sm font-bold text-white font-mono">{initials(r.name)}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground text-base leading-tight">{r.name}</p>
            <p className="text-sm text-muted-foreground font-mono mt-0.5">
              {r.role}<span className="text-primary"> · {r.company}</span>
            </p>
          </div>
        </div>
        {/* quote */}
        <Quote className="w-6 h-6 text-primary/50 mb-3 shrink-0" />
        <p className="font-sans-prose text-foreground/85 leading-8 text-base flex-1">
          {r.text}
        </p>
      </div>
    </div>
  );
}
