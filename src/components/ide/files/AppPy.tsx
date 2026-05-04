import { profile, featuredWork } from "@/data/portfolio";
import afroze from "@/assets/afroze.png";
import { Github, Linkedin, Mail, FileDown, Sparkles, Code2, ExternalLink } from "lucide-react";

const highlights = [
  { label: "AWS", color: "text-[hsl(var(--syntax-fn))] border-[hsl(var(--syntax-fn)/0.4)] bg-[hsl(var(--syntax-fn)/0.08)]" },
  { label: "Python", color: "text-sky-400 border-sky-400/40 bg-sky-400/08" },
  { label: "Java", color: "text-orange-400 border-orange-400/40 bg-orange-400/08" },
  { label: "SQL", color: "text-emerald-400 border-emerald-400/40 bg-emerald-400/08" },
  { label: "React.js", color: "text-cyan-400 border-cyan-400/40 bg-cyan-400/08" },
  { label: "FastAPI", color: "text-[hsl(var(--syntax-comment))] border-[hsl(var(--syntax-comment)/0.4)] bg-[hsl(var(--syntax-comment)/0.08)]" },
  { label: "Machine Learning", color: "text-violet-400 border-violet-400/40 bg-violet-400/08" },
  { label: "Deep Learning", color: "text-pink-400 border-pink-400/40 bg-pink-400/08" },
  { label: "PyTorch", color: "text-red-400 border-red-400/40 bg-red-400/08" },
  { label: "NumPy", color: "text-sky-300 border-sky-300/40 bg-sky-300/08" },
  { label: "Pandas", color: "text-[hsl(var(--syntax-keyword))] border-[hsl(var(--syntax-keyword)/0.4)] bg-[hsl(var(--syntax-keyword)/0.08)]" },
  { label: "Matplotlib", color: "text-amber-400 border-amber-400/40 bg-amber-400/08" },
  { label: "Seaborn", color: "text-teal-400 border-teal-400/40 bg-teal-400/08" },
  { label: "Scikit-learn", color: "text-[hsl(var(--syntax-type))] border-[hsl(var(--syntax-type)/0.4)] bg-[hsl(var(--syntax-type)/0.08)]" },
];

const socials = [
  { label: "GitHub",     href: profile.socials.github,     icon: Github,      primary: false },
  { label: "LinkedIn",   href: profile.socials.linkedin,   icon: Linkedin,    primary: false },
  { label: "Email",      href: `mailto:${profile.socials.email}`, icon: Mail, primary: false },
  { label: "LeetCode",   href: profile.socials.leetcode,   icon: Code2,       primary: false },
  { label: "Codeforces", href: profile.socials.Codeforces, icon: ExternalLink,primary: false },
  { label: "Resume",     href: profile.socials.resume,     icon: FileDown,    primary: true  },
];

export function AppPy() {
  return (
    <div className="min-h-full bg-background relative overflow-hidden fade-in">
      {/* Ambient blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full opacity-20 blur-3xl gradient-bg animate-gradient" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[50vw] h-[50vw] rounded-full opacity-15 blur-3xl gradient-bg animate-gradient" />
      </div>

      <div className="px-6 md:px-12 pt-10 pb-16 max-w-5xl mx-auto">

        {/* Hero */}
        <section className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
          <div className="gradient-ring glow shrink-0 mx-auto md:mx-0">
            <img
              src={afroze}
              alt="Afroze Mohammad"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover bg-background"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="font-mono text-sm text-primary mb-3 flex items-center gap-2 justify-center md:justify-start">
              <Sparkles className="w-3.5 h-3.5" /> // helloworld()
            </p>
            <h1 className="font-mono text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="gradient-text">{profile.name}</span>
            </h1>
            <p className="text-base text-foreground/80 leading-relaxed max-w-xl font-sans-prose">
              {profile.headline}
            </p>
            <p className="mt-2 text-sm font-mono text-primary flex items-center gap-2 justify-center md:justify-start">
              Worked with a Canadian MedTech · Open to International Opportunities
            </p>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
              {socials.map(({ label, href, icon: Icon, primary }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={
                    primary
                      ? "inline-flex items-center gap-2 px-4 py-2 rounded-md gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm"
                      : "inline-flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/70 border border-border transition-colors text-sm"
                  }
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Skills highlight card */}
        <section className="mt-12">
          <div className="rounded-lg p-[1px] gradient-border">
            <div className="bg-card rounded-lg px-6 py-5">
              <p className="text-xs font-mono text-muted-foreground mb-4">
                <span className="text-primary">const</span> skills <span className="text-muted-foreground">=</span> <span className="text-primary">[</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {highlights.map(({ label, color }) => (
                  <span
                    key={label}
                    className={`text-sm font-mono font-medium px-3 py-1 rounded-md border ${color}`}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <p className="text-xs font-mono text-primary mt-4">]</p>
            </div>
          </div>
        </section>

        {/* Featured work */}
        <section className="mt-12">
          <h2 className="font-mono text-xl mb-6">
            <span className="text-muted-foreground">{"// "}</span>
            <span className="gradient-text">featured work</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {featuredWork.map((w) => (
              <article
                key={w.title}
                className="group rounded-lg p-[1px] gradient-border transition-transform hover:-translate-y-1"
              >
                <div className="bg-card rounded-lg p-6 h-full">
                  <h3 className="font-mono text-base font-semibold mb-1">{w.title}</h3>
                  <p className="text-xs text-primary font-mono mb-3">{w.tag}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed font-sans-prose">{w.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {w.chips.map((c) => (
                      // <span key={c} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-muted border border-border text-muted-foreground">
                      <span key={c} className="text-xs font-mono px-2 py-0.5 rounded-md bg-primary/10 border border-primary/30 text-primary">  
                      {c}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground font-mono mt-10">
            <span className="text-primary">↑</span> explore the files in the sidebar for the full story
          </p>
        </section>

      </div>
    </div>
  );
}
