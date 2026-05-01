import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText, FileCode, Braces, Settings2, GraduationCap, Award, MessageSquare, Globe,
  ChevronRight, Folder, FolderOpen, ArrowLeft, Circle,
} from "lucide-react";
import { MLLogs } from "@/components/ide/MLLogs";
import { AboutMd } from "@/components/ide/files/AboutMd";
import { ExperiencePy } from "@/components/ide/files/ExperiencePy";
import { ProjectsJs } from "@/components/ide/files/ProjectsJs";
import { SkillsJson } from "@/components/ide/files/SkillsJson";
import { EducationYaml } from "@/components/ide/files/EducationYaml";
import { HonorsTxt } from "@/components/ide/files/HonorsTxt";
import { RecommendationsDoc } from "@/components/ide/files/RecommendationsDoc";
import { ContactHtml } from "@/components/ide/files/ContactHtml";

type FileKey =
  | "about_me.md"
  | "experience.py"
  | "projects.js"
  | "skills.json"
  | "education.yaml"
  | "honors_awards.txt"
  | "recommendations.doc"
  | "contact.html";

const files: { name: FileKey; icon: typeof FileText; color: string }[] = [
  { name: "about_me.md",        icon: FileText,    color: "text-sky-400" },
  { name: "experience.py",      icon: FileCode,    color: "text-yellow-400" },
  { name: "projects.js",        icon: Braces,      color: "text-amber-400" },
  { name: "skills.json",        icon: Settings2,   color: "text-orange-400" },
  { name: "education.yaml",     icon: GraduationCap, color: "text-emerald-400" },
  { name: "honors_awards.txt",  icon: Award,       color: "text-pink-400" },
  { name: "recommendations.doc",icon: MessageSquare, color: "text-violet-400" },
  { name: "contact.html",       icon: Globe,       color: "text-cyan-400" },
];

const renderers: Record<FileKey, React.ComponentType> = {
  "about_me.md": AboutMd,
  "experience.py": ExperiencePy,
  "projects.js": ProjectsJs,
  "skills.json": SkillsJson,
  "education.yaml": EducationYaml,
  "honors_awards.txt": HonorsTxt,
  "recommendations.doc": RecommendationsDoc,
  "contact.html": ContactHtml,
};

const IDE = () => {
  const [active, setActive] = useState<FileKey>("about_me.md");
  const [tab, setTab] = useState<"explorer" | "logs">("explorer");
  const [folderOpen, setFolderOpen] = useState(true);
  const Renderer = renderers[active];

  return (
    <div className="h-screen w-screen flex flex-col bg-background text-foreground overflow-hidden">
      {/* Title bar */}
      <header className="h-9 bg-[hsl(var(--titlebar))] border-b border-border flex items-center px-3 shrink-0">
        <div className="flex gap-1.5 mr-4">
          <Circle className="w-3 h-3 fill-red-500 text-red-500" />
          <Circle className="w-3 h-3 fill-yellow-500 text-yellow-500" />
          <Circle className="w-3 h-3 fill-green-500 text-green-500" />
        </div>
        <div className="flex-1 text-center text-xs text-muted-foreground font-mono">
          afroze-portfolio — <span className="text-foreground">{active}</span> — VS Code
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-3 h-3" /> Splash
        </Link>
      </header>

      {/* Main grid: sidebar + editor */}
      <div className="flex-1 flex min-h-0">
        {/* Sidebar */}
        <aside className="w-64 md:w-72 bg-[hsl(var(--sidebar-bg))] border-r border-border flex flex-col shrink-0">
          {/* Tabs */}
          <div className="flex border-b border-border text-xs font-mono">
            {(["explorer", "logs"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 px-3 py-2 uppercase tracking-wider transition-colors relative ${
                  tab === t ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t === "explorer" ? "Explorer" : "ML-Logs"}
                {tab === t && <span className="absolute left-0 right-0 bottom-0 h-[2px] gradient-bg" />}
              </button>
            ))}
          </div>

          {tab === "explorer" ? (
            <div className="flex-1 overflow-auto scrollbar-thin py-2">
              <button
                onClick={() => setFolderOpen((o) => !o)}
                className="w-full px-3 py-1 flex items-center gap-1 text-xs text-foreground/80 hover:bg-muted/50 transition-colors"
              >
                <ChevronRight className={`w-3 h-3 transition-transform ${folderOpen ? "rotate-90" : ""}`} />
                {folderOpen ? <FolderOpen className="w-3.5 h-3.5 text-sky-400" /> : <Folder className="w-3.5 h-3.5 text-sky-400" />}
                <span className="font-mono">afroze-mohammad</span>
              </button>
              {folderOpen && (
                <ul className="mt-1">
                  {files.map(({ name, icon: Icon, color }) => {
                    const isActive = active === name;
                    return (
                      <li key={name}>
                        <button
                          onClick={() => setActive(name)}
                          className={`w-full pl-7 pr-3 py-1.5 flex items-center gap-2 text-xs font-mono text-left transition-colors ${
                            isActive
                              ? "bg-primary/10 text-foreground border-l-2 border-primary -ml-[2px]"
                              : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                          }`}
                        >
                          <Icon className={`w-3.5 h-3.5 ${color}`} />
                          <span>{name}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ) : (
            <div className="flex-1 min-h-0">
              <MLLogs />
            </div>
          )}

          {/* Sidebar footer */}
          <div className="border-t border-border px-3 py-2 text-[10px] text-muted-foreground font-mono">
            8 files · 0 problems
          </div>
        </aside>

        {/* Editor area */}
        <main className="flex-1 flex flex-col min-w-0 bg-[hsl(var(--editor))]">
          {/* Editor tab bar */}
          <div className="h-9 bg-[hsl(var(--titlebar))] border-b border-border flex items-center shrink-0">
            <div className="px-4 h-full flex items-center gap-2 bg-[hsl(var(--editor))] border-r border-border text-xs font-mono">
              {(() => {
                const f = files.find((x) => x.name === active)!;
                const Icon = f.icon;
                return <Icon className={`w-3.5 h-3.5 ${f.color}`} />;
              })()}
              {active}
              <span className="ml-2 w-1.5 h-1.5 rounded-full bg-primary" title="unsaved" />
            </div>
            <div className="px-3 text-xs text-muted-foreground font-mono">
              afroze-mohammad <ChevronRight className="inline w-3 h-3" /> {active}
            </div>
          </div>

          {/* Gradient-bordered content window */}
          <div className="flex-1 min-h-0 p-2 md:p-4">
            <div className="h-full gradient-border rounded-lg overflow-hidden">
              <div className="h-full bg-[hsl(var(--editor))] rounded-lg overflow-auto scrollbar-thin">
                <Renderer key={active} />
              </div>
            </div>
          </div>

          {/* Status bar */}
          <footer className="h-6 bg-[hsl(var(--statusbar))] flex items-center px-3 text-[11px] font-mono text-white/90 shrink-0">
            <span className="flex items-center gap-1">⎇ main</span>
            <span className="mx-3 opacity-60">·</span>
            <span>UTF-8</span>
            <span className="mx-3 opacity-60">·</span>
            <span>Ln 1, Col 1</span>
            <span className="mx-3 opacity-60">·</span>
            <span>JetBrains Mono</span>
            <span className="ml-auto">{active}</span>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default IDE;
