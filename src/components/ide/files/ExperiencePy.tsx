import { experienceData } from "@/data/portfolio";

const techTags: Record<string, string[]> = {
  "DigiBiomics":              ["PyTorch", "FastAPI", "AWS SageMaker", "PostgreSQL", "S3", "Python"],
  "BigDoor IT Solutions":     ["Express.js", "TypeScript", "Prisma", "AWS S3", "IAM", "Swagger"],
  "Infosys Springboard":      ["React.js", "Spring Boot", "MongoDB", "Tailwind CSS", "Alpha Vantage API"],
  "GirlScript Summer of Code":["React.js", "Node.js", "MongoDB", "Express.js", "GitHub"],
  "Tekie's Zen LLC":          ["React", "Tailwind CSS", "JavaScript", "Figma"],
};

// SVG dot-grid pattern per card — subtle, unique per index
const svgPatterns = [
  // circuit-ish lines
  `<svg width="220" height="160" viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.15"/>
    <circle cx="60" cy="20" r="3" fill="currentColor" opacity="0.15"/>
    <circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.15"/>
    <line x1="20" y1="20" x2="60" y2="20" stroke="currentColor" stroke-width="1" opacity="0.1"/>
    <line x1="60" y1="20" x2="60" y2="60" stroke="currentColor" stroke-width="1" opacity="0.1"/>
    <circle cx="60" cy="60" r="3" fill="currentColor" opacity="0.15"/>
    <line x1="60" y1="60" x2="100" y2="60" stroke="currentColor" stroke-width="1" opacity="0.1"/>
    <circle cx="100" cy="60" r="5" fill="currentColor" opacity="0.12"/>
    <line x1="100" y1="60" x2="140" y2="60" stroke="currentColor" stroke-width="1" opacity="0.1"/>
    <circle cx="140" cy="60" r="3" fill="currentColor" opacity="0.15"/>
    <line x1="140" y1="60" x2="140" y2="100" stroke="currentColor" stroke-width="1" opacity="0.1"/>
    <circle cx="140" cy="100" r="3" fill="currentColor" opacity="0.15"/>
    <line x1="140" y1="100" x2="180" y2="100" stroke="currentColor" stroke-width="1" opacity="0.1"/>
    <circle cx="180" cy="100" r="5" fill="currentColor" opacity="0.12"/>
    <line x1="100" y1="20" x2="100" y2="60" stroke="currentColor" stroke-width="1" opacity="0.1"/>
    <circle cx="200" cy="20" r="2" fill="currentColor" opacity="0.1"/>
    <circle cx="200" cy="140" r="2" fill="currentColor" opacity="0.1"/>
  </svg>`,
  // dot grid
  `<svg width="220" height="160" viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${Array.from({ length: 6 }, (_, row) =>
      Array.from({ length: 8 }, (_, col) =>
        `<circle cx="${col * 28 + 14}" cy="${row * 28 + 14}" r="1.5" fill="currentColor" opacity="0.12"/>`
      ).join("")
    ).join("")}
  </svg>`,
  // diagonal lines
  `<svg width="220" height="160" viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="40" x2="40" y2="0" stroke="currentColor" stroke-width="1" opacity="0.08"/>
    <line x1="0" y1="80" x2="80" y2="0" stroke="currentColor" stroke-width="1" opacity="0.08"/>
    <line x1="0" y1="120" x2="120" y2="0" stroke="currentColor" stroke-width="1" opacity="0.08"/>
    <line x1="0" y1="160" x2="160" y2="0" stroke="currentColor" stroke-width="1" opacity="0.08"/>
    <line x1="40" y1="160" x2="200" y2="0" stroke="currentColor" stroke-width="1" opacity="0.08"/>
    <line x1="80" y1="160" x2="220" y2="20" stroke="currentColor" stroke-width="1" opacity="0.08"/>
    <circle cx="40" cy="80" r="4" fill="currentColor" opacity="0.1"/>
    <circle cx="120" cy="40" r="4" fill="currentColor" opacity="0.1"/>
    <circle cx="160" cy="120" r="4" fill="currentColor" opacity="0.1"/>
  </svg>`,
  // concentric arcs
  `<svg width="220" height="160" viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="220" cy="0" r="60" stroke="currentColor" stroke-width="1" opacity="0.08" fill="none"/>
    <circle cx="220" cy="0" r="100" stroke="currentColor" stroke-width="1" opacity="0.06" fill="none"/>
    <circle cx="220" cy="0" r="140" stroke="currentColor" stroke-width="1" opacity="0.04" fill="none"/>
    <circle cx="0" cy="160" r="50" stroke="currentColor" stroke-width="1" opacity="0.06" fill="none"/>
    <circle cx="0" cy="160" r="90" stroke="currentColor" stroke-width="1" opacity="0.04" fill="none"/>
  </svg>`,
  // hex-ish nodes
  `<svg width="220" height="160" viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="80" r="4" fill="currentColor" opacity="0.12"/>
    <circle cx="90" cy="40" r="4" fill="currentColor" opacity="0.12"/>
    <circle cx="90" cy="120" r="4" fill="currentColor" opacity="0.12"/>
    <circle cx="150" cy="80" r="4" fill="currentColor" opacity="0.12"/>
    <circle cx="210" cy="40" r="4" fill="currentColor" opacity="0.12"/>
    <circle cx="210" cy="120" r="4" fill="currentColor" opacity="0.12"/>
    <line x1="30" y1="80" x2="90" y2="40" stroke="currentColor" stroke-width="1" opacity="0.1"/>
    <line x1="30" y1="80" x2="90" y2="120" stroke="currentColor" stroke-width="1" opacity="0.1"/>
    <line x1="90" y1="40" x2="150" y2="80" stroke="currentColor" stroke-width="1" opacity="0.1"/>
    <line x1="90" y1="120" x2="150" y2="80" stroke="currentColor" stroke-width="1" opacity="0.1"/>
    <line x1="150" y1="80" x2="210" y2="40" stroke="currentColor" stroke-width="1" opacity="0.1"/>
    <line x1="150" y1="80" x2="210" y2="120" stroke="currentColor" stroke-width="1" opacity="0.1"/>
  </svg>`,
];

export function ExperiencePy() {
  return (
    <div className="p-6 md:p-10 fade-in">
      <h2 className="font-mono text-2xl mb-1 gradient-text">experience.py</h2>
      <p className="text-base text-muted-foreground mb-10 font-mono">
        {"# every role shaped how I think, build, and ship"}
      </p>

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />

        <div className="flex flex-col gap-8">
          {experienceData.map((exp, i) => {
            const tags = techTags[exp.company] ?? [];
            return (
              <div key={i} className="pl-10 relative">
                {/* timeline dot */}
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full gradient-text flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary-foreground gradient-text" />
                </div>

                

                <div className="rounded-lg p-[1px] gradient-border overflow-hidden">
                  <div className="bg-card rounded-lg overflow-hidden">

                    {/* SVG background strip */}
                    <div
                      className="absolute right-0 top-0 text-primary pointer-events-none select-none"
                      dangerouslySetInnerHTML={{ __html: svgPatterns[i % svgPatterns.length] }}
                    />

                    <div className="relative p-5">
                      {/* header row */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-mono font-bold text-lg text-foreground">{exp.role}</h3>
                          <p className="text-base text-primary font-mono mt-0.5">{exp.company}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-sm font-mono gradient-text">{exp.period}</p>
                          <p className="text-sm font-mono gradient-text">{exp.location}</p>
                        </div>
                      </div>

                      {/* highlights */}
                      <ul className="flex flex-col gap-2.5 mb-4">
                        {exp.highlights.map((h, j) => (
                          <li key={j} className="flex gap-2 text-base text-foreground/80 font-sans-prose leading-7">
                            <span className="text-primary mt-1 shrink-0">→</span>
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* tech chips */}
                      {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                          {tags.map((t) => (
                            <span key={t} className="text-xs font-mono px-2 py-0.5 rounded-md bg-primary/10 border border-primary/30 text-primary">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
