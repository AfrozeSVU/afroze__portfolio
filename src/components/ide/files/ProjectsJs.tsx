import { projectsData } from "@/data/portfolio";

// Split summary string into bullet points on sentence boundaries
function toBullets(summary: string): string[] {
  return summary
    .split(/(?<=\.)\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function ProjectsJs() {
  return (
    <div className="p-6 md:p-10 fade-in">
      <h2 className="font-mono text-2xl mb-1 gradient-text">projects.js</h2>
      <p className="text-base text-muted-foreground mb-10 font-mono">
        {"// built to solve real problems — every line of code ships with intent and impact"}
      </p>

      <div className="flex flex-col gap-6">
        {projectsData.map((p, i) => (
          <article key={i} className="rounded-lg p-[1px] gradient-border transition-transform hover:-translate-y-1">
            <div className="bg-card rounded-lg p-6">
              {/* header */}
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="font-mono font-bold text-lg text-foreground leading-snug">{p.name}</h3>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer"
                    className="shrink-0 text-sm font-mono text-primary hover:underline mt-0.5">
                    ↗
                  </a>
                )}
              </div>
              <p className="text-sm text-muted-foreground font-mono mb-4 hidden">{p.period}</p>

              {/* bullet points */}
              <ul className="flex flex-col gap-2 mb-5">
                {toBullets(p.summary).map((point, j) => (
                  <li key={j} className="flex gap-2 text-base text-foreground/80 font-sans-prose leading-7">
                    <span className="text-primary shrink-0 mt-1">→</span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* tech chips — blue */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs font-mono px-2 py-0.5 rounded-md bg-primary/10 border border-primary/30 text-primary">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
