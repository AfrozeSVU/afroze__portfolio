import { useNavigate } from "react-router-dom";
import { profile, featuredWork } from "@/data/portfolio";
import afroze from "@/assets/afroze.png";
import { ArrowRight, Github, Linkedin, Mail, Twitter, FileDown, Sparkles } from "lucide-react";

const Splash = () => {
  const navigate = useNavigate();

  const handleLaunch = () => {
    document.body.style.transition = "opacity 280ms ease, transform 280ms ease";
    document.body.style.opacity = "0";
    document.body.style.transform = "scale(0.98)";
    setTimeout(() => {
      navigate("/ide");
      requestAnimationFrame(() => {
        document.body.style.opacity = "1";
        document.body.style.transform = "scale(1)";
      });
    }, 280);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full opacity-20 blur-3xl gradient-bg animate-gradient" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[50vw] h-[50vw] rounded-full opacity-15 blur-3xl gradient-bg animate-gradient" />
      </div>

      {/* Top bar */}
      <header className="px-6 md:px-10 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="font-mono">~/portfolio</span>
        </div>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Github className="w-4 h-4" /></a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
          <a href={profile.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></a>
          <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors"><Mail className="w-4 h-4" /></a>
          <a href={profile.socials.resume} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border hover:border-primary text-xs transition-colors">
            <FileDown className="w-3.5 h-3.5" /> Resume
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="px-6 md:px-10 pt-8 md:pt-16 pb-20">
        <section className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="gradient-ring glow shrink-0 mx-auto md:mx-0">
            <img
              src={afroze}
              alt="Afroze Mohammad"
              className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover bg-background"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="font-mono text-sm text-primary mb-3">// hello.world()</p>
            <h1 className="font-mono text-4xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="gradient-text">{profile.name}</span>
            </h1>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl font-sans-prose">
              {profile.headline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              <button
                onClick={handleLaunch}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-md gradient-bg text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(200_95%_60%/0.6)] transition-shadow"
              >
                ▶ Launch IDE View
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={profile.socials.resume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border hover:border-primary text-foreground transition-colors"
              >
                <FileDown className="w-4 h-4" /> Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Featured work */}
        <section className="mt-20 md:mt-28 max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-mono text-xl md:text-2xl">
              <span className="text-muted-foreground">{"// "}</span>
              <span className="gradient-text">featured work</span>
            </h2>
            <span className="text-xs text-muted-foreground font-mono hidden md:inline">
              const portfolio = [...]
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {featuredWork.map((w) => (
              <article
                key={w.title}
                className="group relative rounded-lg p-[1px] gradient-border transition-transform hover:-translate-y-1"
              >
                <div className="bg-card rounded-lg p-6 h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-mono text-lg font-semibold">{w.title}</h3>
                  </div>
                  <p className="text-xs text-primary font-mono mb-4">{w.tag}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed font-sans-prose">
                    {w.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {w.chips.map((c) => (
                      <span
                        key={c}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-muted border border-border text-muted-foreground"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground font-mono mt-12">
            Click <span className="text-primary">▶ Launch IDE View</span> for the full story —
            experience, projects, skills, and more.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Splash;
