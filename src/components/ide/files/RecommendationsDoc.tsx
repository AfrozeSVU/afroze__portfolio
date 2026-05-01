import { useState } from "react";
import { recommendations } from "@/data/portfolio";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function RecommendationsDoc() {
  const [idx, setIdx] = useState(0);
  const r = recommendations[idx];
  const next = () => setIdx((i) => (i + 1) % recommendations.length);
  const prev = () => setIdx((i) => (i - 1 + recommendations.length) % recommendations.length);

  return (
    <div className="p-6 md:p-10 fade-in max-w-3xl">
      <h2 className="font-mono text-2xl mb-1 gradient-text">recommendations.doc</h2>
      <p className="text-sm text-muted-foreground mb-8">/* What people I've worked with say. */</p>

      <div className="gradient-border p-[1px] rounded-lg">
        <div className="bg-card rounded-lg p-6 md:p-8">
          <Quote className="w-8 h-8 text-primary/60 mb-4" />
          <p className="font-sans-prose text-foreground/90 leading-relaxed text-base whitespace-pre-line">
            {r.text}
          </p>
          <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
            <div>
              <div className="font-semibold text-foreground">{r.name}</div>
              <div className="text-sm text-muted-foreground">{r.role}</div>
            </div>
            <div className="text-xs text-muted-foreground font-mono">
              {idx + 1} / {recommendations.length}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <button
          onClick={prev}
          aria-label="Previous recommendation"
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/70 border border-border transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Prev
        </button>
        <div className="flex gap-1.5">
          {recommendations.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Recommendation ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-8 gradient-bg" : "w-1.5 bg-muted"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next recommendation"
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/70 border border-border transition-colors"
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
