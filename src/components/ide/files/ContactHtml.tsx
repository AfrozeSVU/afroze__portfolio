import { profile } from "@/data/portfolio";
import { Mail, Linkedin, Github, FileDown, Send } from "lucide-react";
import img89 from "@/assets/89.jpg";

export function ContactHtml() {
  return (
    <div className="fade-in min-h-full relative overflow-hidden">

      {/* ambient blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full opacity-15 blur-3xl gradient-bg animate-gradient" />
        <div className="absolute bottom-[-20%] right-[-5%] w-[40vw] h-[40vw] rounded-full opacity-10 blur-3xl gradient-bg animate-gradient" />
      </div>

      <div className="px-6 md:px-12 py-12 max-w-3xl mx-auto flex flex-col items-center text-center gap-10">

{/* photo */}
        <div className="glow rounded-2xl overflow-hidden gradient-border shrink-0 w-full max-w-lg">
          <img
            src={img89}
            alt="Afroze Mohammad"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* hook */}
        <div className="flex flex-col gap-4">
          <h2 className="font-mono text-xl md:text-2xl font-bold gradient-text whitespace-nowrap">
            Would love to bring this energy to your team.
          </h2>
          <p className="text-base md:text-lg text-foreground/80 font-sans-prose leading-8 max-w-2xl">
            A rare combination of{" "}
            <span className="text-[hsl(var(--syntax-fn))] font-semibold font-mono">battle-tested production experience</span>{" "}
            and{" "}
            <span className="text-[hsl(var(--syntax-keyword))] font-semibold font-mono">competitive excellence</span>.
            Unlike a typical graduate, I have already navigated the complexities of two startups, won two hackathons — one at national level — and contributed to open-source communities.
            I don't just build models in notebooks; I{" "}
            <span className="text-[hsl(var(--syntax-fn))] font-semibold font-mono">architect, deploy, and maintain</span>{" "}
            systems that live in the real world while thriving in high-stakes, collaborative team environments.
          </p>
        </div>

        {/* open to */}
        <div className="rounded-lg p-[1px] gradient-border w-full">
          <div className="bg-card rounded-lg px-6 py-5">
            <p className="font-mono text-sm text-[hsl(var(--syntax-comment))] mb-3">{"# open_to = ["}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Software Engineering", "Machine Learning", "Backend Development in AI", "Cloud & AWS", "Product", "International & Remote"].map((t) => (
                <span key={t} className="text-sm font-mono px-3 py-1 rounded-md bg-primary/10 border border-primary/30 text-primary">
                  {t}
                </span>
              ))}
            </div>
            <p className="font-mono text-sm text-[hsl(var(--syntax-comment))] mt-3">{"]"}</p>
          </div>
        </div>

        {/* reach out */}
        <div className="flex flex-col items-center gap-3 w-full">
          <p className="font-mono text-sm text-muted-foreground">{"// reach out directly"}</p>

          {/* email CTA */}
          <a
            href={`mailto:${profile.socials.email}`}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-md gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-base w-full max-w-sm justify-center"
          >
            <Mail className="w-5 h-5" />
            {profile.socials.email}
          </a>

          {/* secondary links */}
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/70 border border-border transition-colors text-base">
              <Linkedin className="w-4 h-4 text-sky-400" /> LinkedIn
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/70 border border-border transition-colors text-base">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href={profile.socials.resume} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/70 border border-border transition-colors text-base">
              <FileDown className="w-4 h-4 text-emerald-400" /> Resume
            </a>
          </div>
        </div>

        {/* closing */}
        <p className="font-mono text-sm text-muted-foreground pb-4">
          <span className="text-primary">→</span> always open to a good conversation
        </p>

        {/* contact form */}
        <div className="w-full max-w-lg">
          <div className="rounded-lg p-[1px] gradient-border">
            <div className="bg-card rounded-lg p-6 flex flex-col gap-4">
              <p className="font-mono text-sm text-[hsl(var(--syntax-comment))]">{"# send_message()"}</p>
              <p className="text-base text-foreground/70 font-sans-prose">
                Open to ML engineering roles, freelance projects, and collaborations.
                Drop me a message — I typically respond within <span className="text-primary font-semibold">24 hours</span>.
              </p>
              <form
                action="https://formspree.io/f/xzdodyze"
                method="POST"
                className="flex flex-col gap-3"
              >
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-mono text-muted-foreground">name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-md bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-base font-sans-prose"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-mono text-muted-foreground">email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-md bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-base font-sans-prose"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-mono text-muted-foreground">message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="What's on your mind?"
                    className="w-full px-4 py-2.5 rounded-md bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-base font-sans-prose resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-base mt-1"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
