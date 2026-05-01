import { profile } from "@/data/portfolio";
import { Mail, Linkedin, Github, Twitter, FileDown } from "lucide-react";
import { CodeBlock } from "../CodeBlock";

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Contact — Afroze Mohammad</title>
  </head>
  <body>
    <h1>Let's build something useful together.</h1>
    <p>I'm always open to interesting roles in healthcare AI,
       MedTech, and cloud-backed ML systems.</p>

    <ul class="links">
      <li><a href="mailto:${profile.email}">Email</a></li>
      <li><a href="${profile.socials.linkedin}">LinkedIn</a></li>
      <li><a href="${profile.socials.github}">GitHub</a></li>
      <li><a href="${profile.socials.twitter}">Twitter / X</a></li>
      <li><a href="${profile.socials.leetcode}">LeetCode</a></li>
      <li><a href="${profile.socials.kaggle}">Kaggle</a></li>
      <li><a href="${profile.socials.resume}">Resume.pdf</a></li>
    </ul>
  </body>
</html>`;

const buttons = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.socials.github, icon: Github },
  { label: "Twitter / X", href: profile.socials.twitter, icon: Twitter },
  { label: "LeetCode", href: profile.socials.leetcode, icon: () => <span className="font-bold text-xs">LC</span> },
  { label: "Kaggle", href: profile.socials.kaggle, icon: () => <span className="font-bold text-xs">K</span> },
  { label: "Download Resume", href: profile.socials.resume, icon: FileDown, primary: true },
];

export function ContactHtml() {
  return (
    <div className="fade-in">
      <CodeBlock code={html} language="html" />
      <div className="px-6 md:px-10 pb-10">
        <p className="text-sm text-muted-foreground mb-4">{"// Or just click below ↓"}</p>
        <div className="flex flex-wrap gap-3">
          {buttons.map(({ label, href, icon: Icon, primary }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={
                primary
                  ? "inline-flex items-center gap-2 px-4 py-2 rounded-md gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                  : "inline-flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/70 border border-border text-foreground transition-colors"
              }
            >
              <Icon className="w-4 h-4" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
