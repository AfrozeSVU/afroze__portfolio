 import { profile } from "@/data/portfolio";
import { Mail, Linkedin, Github, FileDown, Send } from "lucide-react";
import img89 from "@/assets/89.jpg";

export function ContactHtml() {
  return (
    <div className="fade-in min-h-full relative overflow-hidden">

      {/* ambient blobs - reduced size for mobile */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-5%] left-[-10%] w-[70vw] md:w-[50vw] h-[70vw] md:h-[50vw] rounded-full opacity-15 blur-3xl gradient-bg animate-gradient" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] rounded-full opacity-10 blur-3xl gradient-bg animate-gradient" />
      </div>

      <div className="px-4 md:px-12 py-8 md:py-12 max-w-3xl mx-auto flex flex-col items-center text-center gap-8 md:gap-10">

        {/* photo - adjusted max-width for mobile */}
        <div className="glow rounded-2xl overflow-hidden gradient-border shrink-0 w-full max-w-[280px] md:max-w-lg">
          <img
            src={img89}
            alt="Afroze Mohammad"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* hook - removed whitespace-nowrap for mobile */}
        <div className="flex flex-col gap-4">
          <h2 className="font-mono text-xl md:text-2xl font-bold gradient-text">
            Would love to bring this energy to your team.
          </h2>
          <p className="text-sm md:text-lg text-foreground/80 font-sans-prose leading-7 md:leading-8 max-w-2xl">
            A rare combination of{" "}
            <span className="text-[hsl(var(--syntax-fn))] font-semibold font-mono">battle-tested production experience</span>{" "}
            and{" "}
            <span className="text-[hsl(var(--syntax-keyword))] font-semibold font-mono">competitive excellence</span>.
            Unlike a typical graduate, I have already navigated the complexities of two startups and won national-level hackathons.
            I don't just build models; I{" "}
            <span className="text-[hsl(var(--syntax-fn))] font-semibold font-mono text-xs md:text-sm">architect, deploy, and maintain</span>{" "}
            systems that live in the real world.
          </p>
        </div>

        {/* open to - better padding for mobile tags */}
        <div className="rounded-lg p-[1px] gradient-border w-full">
          <div className="bg-card rounded-lg px-4 md:px-6 py-4 md:py-5">
            <p className="font-mono text-[10px] md:text-sm text-[hsl(var(--syntax-comment))] mb-3">{"# open_to = ["}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Software Engineering", "Machine Learning", "Backend", "AWS", "Remote"].map((t) => (
                <span key={t} className="text-[10px] md:text-sm font-mono px-2 md:px-3 py-1 rounded-md bg-primary/10 border border-primary/30 text-primary whitespace-nowrap">
                  {t}
                </span>
              ))}
            </div>
            <p className="font-mono text-[10px] md:text-sm text-[hsl(var(--syntax-comment))] mt-3">{"]"}</p>
          </div>
        </div>

        {/* reach out */}
        <div className="flex flex-col items-center gap-3 w-full">
          <p className="font-mono text-xs text-muted-foreground">{"// reach out directly"}</p>

          {/* email CTA - font size shrink for long emails on mobile */}
          <a
            href={`mailto:${profile.socials.email}`}
            className="inline-flex items-center gap-3 px-4 md:px-6 py-3 rounded-md gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm md:text-base w-full max-w-sm justify-center break-all"
          >
            <Mail className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
            {profile.socials.email}
          </a>

          {/* secondary links - grid on mobile, row on desktop */}
          <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-2 justify-center mt-2 w-full max-w-sm sm:max-w-none">
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/70 border border-border transition-colors text-sm md:text-base">
              <Linkedin className="w-4 h-4 text-sky-400" /> LinkedIn
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/70 border border-border transition-colors text-sm md:text-base">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href={profile.socials.resume} target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/70 border border-border transition-colors text-sm md:text-base">
              <FileDown className="w-4 h-4 text-emerald-400" /> Resume
            </a>
          </div>
        </div>

        {/* contact form - adjusted padding and text */}
        <div className="w-full max-w-lg mb-10">
          <div className="rounded-lg p-[1px] gradient-border">
            <div className="bg-card rounded-lg p-4 md:p-6 flex flex-col gap-4">
              <p className="font-mono text-xs text-[hsl(var(--syntax-comment))]">{"# send_message()"}</p>
              <p className="text-sm md:text-base text-foreground/70 font-sans-prose text-left">
                Drop me a message — I typically respond within <span className="text-primary font-semibold">24 hours</span>.
              </p>
              <form
                action="https://formspree.io/f/xzdodyze"
                method="POST"
                className="flex flex-col gap-3"
              >
                <div className="flex flex-col gap-1 text-left">
                  <label className="text-[10px] font-mono text-muted-foreground">name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-3 py-2 rounded-md bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm font-sans-prose"
                  />
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <label className="text-[10px] font-mono text-muted-foreground">email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 rounded-md bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm font-sans-prose"
                  />
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <label className="text-[10px] font-mono text-muted-foreground">message</label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    placeholder="What's on your mind?"
                    className="w-full px-3 py-2 rounded-md bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm font-sans-prose resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm mt-1"
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