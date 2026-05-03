import afroze from "@/assets/9.jpeg";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpeg";
import img5 from "@/assets/5.jpg";

const K = ({ children }: { children: string }) => (
  <span className="text-[hsl(var(--syntax-keyword))] font-semibold font-mono">{children}</span>
);
const S = ({ children }: { children: string }) => (
  <span className="text-[hsl(var(--syntax-string))] font-medium">{children}</span>
);
const Fn = ({ children }: { children: string }) => (
  <span className="text-[hsl(var(--syntax-fn))] font-semibold font-mono">{children}</span>
);
const Num = ({ children }: { children: string }) => (
  <span className="text-[hsl(var(--syntax-number))] font-semibold font-mono">{children}</span>
);
const Cm = ({ children }: { children: string }) => (
  <span className="text-[hsl(var(--syntax-comment))]">{children}</span>
);

const credentials = [
  { emoji: "🎓", label: "Amazon Future Engineer Scholar", sub: "Foundation for Excellence · 2023" },
  { emoji: "🌸", label: "AnitaB.org Scholar '25",         sub: "Advancing scholar of International Community of women in tech" },
  { emoji: "☕", label: "CodessCafe Mentee",               sub: "Women in Software · 2024" },
  { emoji: "🏆", label: "EvoLumin — National Hackathon Winner",       sub: "AgroNexus · 500+ teams" },
  { emoji: "🎤", label: "TEDxSVU Main Organizer",          sub: "Flagship campus event" },
  { emoji: "💻", label: "GirlScript Summer of Code 2024 (Extended)", sub: "Active open-source contributor across multiple repositories." },
];

const stats = [
  { value: "3",    label: "Startups\nInterned" },
  { value: "✦",    label: "Backend Dev\n@ Lungsense.ai" },
  { value: "2",    label: "Hackathons\nWon" },
  { value: "500+", label: "Teams\nBeaten" },
  { value: "3",    label: "Deep Learning\nModels" },
  { value: "8.9",  label: "CGPA" },
];

export function AboutMd() {
  return (
    <article className="fade-in text-base font-sans-prose leading-relaxed text-foreground/90">

      {/* ── file header comment ─────────────────────────────────────── */}
      <div className="px-6 md:px-10 pt-8 pb-4 border-b border-border">
        <p className="font-mono text-base text-[hsl(var(--syntax-comment))]">{`"""`}</p>
        <p className="font-mono text-base text-[hsl(var(--syntax-comment))]">about_me.md — Afroze Mohammad</p>
        <p className="font-mono text-base text-[hsl(var(--syntax-comment))]">AI/ML Engineer · Cloud · Builder</p>
        <p className="font-mono text-base text-[hsl(var(--syntax-comment))] mb-1">{`"""`}</p>
      </div>

      {/* ── hero: photo + intro ─────────────────────────────────────── */}
      <section className="px-6 md:px-10 pt-8 pb-6 grid md:grid-cols-[180px_1fr] gap-8 items-start">
        <div className="mx-auto md:mx-0 shrink-0">
          <div className="gradient-ring glow">
            <img src={afroze} alt="Afroze Mohammad" className="w-40 h-40 rounded-full object-cover bg-background" />
          </div>
          <div className="mt-4 flex flex-col gap-1.5">
            <span className="text-xs font-mono px-2 py-1 rounded bg-muted border border-border text-center text-muted-foreground">
              <span className="text-[hsl(var(--syntax-keyword))]">class</span> Afroze
            </span>
            <span className="text-xs font-mono px-2 py-1 rounded bg-muted border border-border text-center text-muted-foreground">
              <span className="text-[hsl(var(--syntax-fn))]">role</span> = <span className="text-[hsl(var(--syntax-string))]">"AI/ML Eng"</span>
            </span>
            <span className="text-xs font-mono px-2 py-1 rounded bg-muted border border-border text-center text-muted-foreground">
              <span className="text-[hsl(var(--syntax-fn))]">cgpa</span> = <span className="text-[hsl(var(--syntax-number))]">8.9</span>
            </span>
          </div>
        </div>

        <div>
          <p className="font-mono text-base text-primary mb-2">// hello.world()</p>
          <h2 className="font-mono text-2xl md:text-3xl font-bold gradient-text mb-4">Hi, I'm Afroze 👋</h2>
          <p className="leading-8 text-foreground/85">
            I didn't always know I wanted to work in <K>AI</K>. My journey started with a simple question:{" "}
            <S>"How can I build something that actually helps people?"</S>
          </p>
          <p className="mt-3 leading-8 text-foreground/85">
            That question led me from winning hackathons, interning at startups, to deploying{" "}
            <K>production AI systems</K> in real-world <Fn>healthcare</Fn> environments.
          </p>
          <p className="mt-3 leading-8 text-foreground/85">
            Today I'm an <K>AI/ML Engineer</K> at <Fn>DigiBiomics</Fn> — a <S>Canadian MedTech company</S> — where I contributed to <Fn>lungsense.ai</Fn>, a live production platform actively used by a rural hospital and internally tested by a Canadian institution. I build backend systems and AI pipelines for respiratory diagnostics using <K>FastAPI</K>, <K>AWS</K>, and <K>PyTorch</K>, collaborating fully remotely across time zones.
          </p>
        </div>
      </section>

      {/* ── stats bar ───────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-5 border-y border-border bg-[hsl(var(--sidebar-bg))]">
        <p className="font-mono text-base text-muted-foreground mb-3">
          <Cm>{"# metrics that matter"}</Cm>
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-2 py-3 rounded-md bg-muted/50 border border-border">
              <div className="font-mono text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1 whitespace-pre-line leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── story block ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-8 flex flex-col gap-8 border-b border-border">
        <div>
          <p className="font-mono text-base text-[hsl(var(--syntax-comment))] mb-4">{"# def journey():"}</p>
          <p className="leading-8 text-foreground/85">
            I'm a recent <K>Computer Science</K> graduate from{" "}
            <Fn>Sri Venkateswara University</Fn> (<Num>8.9 CGPA</Num>) and a{" "}
            <S>Foundation for Excellence Amazon Future Engineer Scholar</S>,{" "}
            <S>AnitaB.org Scholar '25</S>, and <S>CodessCafe Mentee</S>.
          </p>
          <p className="mt-4 leading-8 text-foreground/85">
            As a <K>woman in tech</K>, I've learned that representation isn't just about being in the room —
            it's about <Fn>building the table</Fn>.
          </p>
          <p className="mt-4 leading-8 text-foreground/85">
            My journey has been anything but linear. I won a national hackathon beating{" "}
            <Num>500+</Num> teams with <Fn>AgroNexus</Fn>, led <K>TEDxSVU</K> as main organizer,
            and interned at <Fn>BigDoor IT Solutions</Fn> building an LMS backend.
          </p>
        </div>

        {/* horizontal auto-scroll strip */}
        <div className="relative overflow-hidden rounded-lg">
          <div className="flex gap-3 pb-1 animate-photo-scroll pointer-events-none">
            {[img2, img1, img3, img4, img5, img2, img1, img3, img4, img5].map((src, i) => (
              <div key={i} className="shrink-0 w-72 h-80 rounded-lg overflow-hidden gradient-border">
                <img src={src} alt={`photo-${i}`} className="w-full h-full object-cover opacity-90" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── what I build ────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-8 border-b border-border">
        <p className="font-mono text-base text-[hsl(var(--syntax-comment))] mb-4">{"# what I build"}</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: "🧠",
              title: "AI / ML Systems",
              body: (<>Deep learning pipelines with <K>PyTorch</K>, <K>ResNet-18</K>, <K>CNN-BiLSTM</K>. Trained on <Num>24,520</Num> samples — <Num>94.5%</Num> accuracy.</>),
            },
            {
              icon: "⚡",
              title: "Production Backends",
              body: (<><K>FastAPI</K> + <K>SQLAlchemy</K> with <Num>52</Num> REST endpoints, <K>PostgreSQL</K>, rate limiting, serving live hospital data <Num>10+</Num> cases/day.</>),
            },
            {
              icon: "☁️",
              title: "Cloud Infrastructure",
              body: (<><K>AWS SageMaker</K>, <K>S3</K> presigned URLs, <K>IAM</K> roles, <K>EC2</K>. Reduced server load by <Num>100%</Num> via smart storage migration.</>),
            },
          ].map((card) => (
            <div key={card.title} className="rounded-lg p-[1px] gradient-border">
              <div className="bg-card rounded-lg p-5 h-full">
                <div className="text-2xl mb-2">{card.icon}</div>
                <h3 className="font-mono font-semibold text-foreground mb-2 text-base">{card.title}</h3>
                <p className="text-base text-foreground/80 leading-7">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── credentials ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-8 border-b border-border">
        <p className="font-mono text-base text-[hsl(var(--syntax-comment))] mb-4">{"# credentials = ["}</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {credentials.map((c) => (
            <div key={c.label} className="flex items-start gap-3 px-4 py-3 rounded-md bg-muted/40 border border-border hover:border-primary/40 transition-colors">
              <span className="text-2xl shrink-0 mt-0.5">{c.emoji}</span>
              <div>
                <p className="text-base font-semibold text-foreground leading-snug">{c.label}</p>
                <p className="text-sm text-muted-foreground font-mono mt-0.5">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="font-mono text-base text-[hsl(var(--syntax-comment))] mt-3">{"# ]"}</p>
      </section>

      {/* ── education ────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-8 border-b border-border">
        <p className="font-mono text-base text-[hsl(var(--syntax-comment))] mb-4">{"# education"}</p>
        <div className="rounded-lg p-[1px] gradient-border">
          <div className="bg-card rounded-lg p-6 flex flex-col gap-3">
            <div>
              <h3 className="font-mono font-bold text-lg text-foreground">B.Tech, Computer Science &amp; Engineering</h3>
              <p className="text-base text-primary font-mono mt-0.5">Sri Venkateswara University</p>
            </div>
            <div className="flex flex-wrap gap-5 text-base font-mono text-muted-foreground mt-1">
              <span>📅 2022 – 2026</span>
              <span>📍 Tirupati, India</span>
              <span className="text-[hsl(var(--syntax-number))] font-semibold">⭐ CGPA 8.9</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── closing ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-8">
        <div className="rounded-lg p-[1px] gradient-border">
          <div className="bg-card rounded-lg px-6 py-5">
            <p className="font-mono text-base text-[hsl(var(--syntax-comment))] mb-3">{"# return self.mission"}</p>
            <p className="leading-8 text-foreground/85">
              Projects like <Fn>AgroNexus</Fn>, <Fn>PortfolioGen</Fn>, and a{" "}
              <K>stock-investment platform</K> have helped me practice building complete applications
              and understanding the full <K>software development lifecycle</K>.
            </p>
            <p className="mt-3 leading-8 text-foreground/85">
              I'm always looking for opportunities where <K>AI</K> meets <Fn>real-world impact</Fn> —
              building things that are <S>reliable</S>, <S>scalable</S>, and <S>meaningful</S>.
              Having worked with a <K>Canadian MedTech team</K> remotely, I'm fully comfortable collaborating across time zones and am <Fn>open to international opportunities</Fn>.
            </p>
            <p className="mt-4 font-mono text-base text-primary">{"→ explore the sidebar files for the full story"}</p>
          </div>
        </div>
      </section>

    </article>
  );
}
