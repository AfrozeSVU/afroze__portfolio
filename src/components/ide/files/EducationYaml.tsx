import { educationData } from "@/data/portfolio";

export function EducationYaml() {
  return (
    <div className="p-6 md:p-10 fade-in max-w-3xl">
      <h2 className="font-mono text-2xl mb-1 gradient-text">education.yaml</h2>
      <p className="text-base text-muted-foreground mb-8 font-mono">
        {"# academic background, scholarships & certifications"}
      </p>

      <div className="flex flex-col gap-6">
        {/* Degree */}
        <div className="rounded-lg p-[1px] gradient-border">
          <div className="bg-card rounded-lg p-5">
            <p className="text-sm font-mono text-muted-foreground mb-1">education</p>
            <h3 className="font-mono font-semibold text-foreground text-base">{educationData.degree}</h3>
            <p className="text-base text-primary font-mono">{educationData.institution}</p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm font-mono text-muted-foreground">
              <span>📅 {educationData.period}</span>
              <span>📍 {educationData.location}</span>
              <span className="text-[hsl(var(--syntax-number))]">⭐ CGPA {educationData.cgpa}</span>
            </div>
          </div>
        </div>

        {/* Scholarships */}
        <div>
          <p className="text-sm font-mono text-muted-foreground mb-3">scholarships_and_programs:</p>
          <div className="flex flex-col gap-3">
            {educationData.scholarships.map((s, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-md bg-muted/40 border border-border">
                <span className="text-primary font-mono text-sm">🎓</span>
                <div>
                  <p className="text-base text-foreground font-sans-prose">{s.name}</p>
                  <p className="text-sm text-muted-foreground font-mono">{s.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <p className="text-sm font-mono text-muted-foreground mb-3">certifications:</p>
          <div className="flex flex-wrap gap-2">
            {educationData.certifications.map((c, i) => (
              <span key={i} className="text-base font-sans-prose px-3 py-1.5 rounded-md bg-muted border border-border text-foreground/80">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
