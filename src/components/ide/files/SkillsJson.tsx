import { skillsCategories } from "@/data/portfolio";

export function SkillsJson() {
  return (
    <div className="p-6 md:p-10 fade-in">
      <h2 className="font-mono text-2xl mb-1 gradient-text">skills.json</h2>
      <p className="text-base text-muted-foreground mb-8 font-mono">
        {"// tools I reach for, grouped by where they live in the stack"}
      </p>

      <div className="grid gap-8">
        {skillsCategories.map((cat) => (
          <div key={cat.category}>
            <p className="text-sm font-mono text-primary mb-3 uppercase tracking-wider">{cat.category}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {cat.items.map((s) => (
                <div
                  key={s.name}
                  className="group flex items-center gap-3 p-3 rounded-md bg-muted/40 hover:bg-muted border border-border hover:border-primary/40 transition-colors"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${s.slug}/ffffff`}
                    alt={s.name}
                    className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <span className="text-base">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
