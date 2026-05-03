import { honorsData } from "@/data/portfolio";

export function HonorsTxt() {
  return (
    <div className="p-6 md:p-10 fade-in max-w-3xl">
      <h2 className="font-mono text-2xl mb-1 gradient-text">honors_awards.txt</h2>
      <p className="text-base text-muted-foreground mb-8 font-mono">
        {"# recognition, wins & milestones"}
      </p>

      <div className="flex flex-col gap-4">
        {honorsData.map((h, i) => (
          <div key={i} className="flex items-start gap-4 px-5 py-4 rounded-lg bg-muted/40 border border-border hover:border-primary/40 transition-colors">
            <span className="text-2xl shrink-0">{h.emoji}</span>
            <div>
              <p className="font-mono font-semibold text-foreground text-base">{h.title}</p>
              <p className="text-base text-foreground/70 font-sans-prose mt-1">{h.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
