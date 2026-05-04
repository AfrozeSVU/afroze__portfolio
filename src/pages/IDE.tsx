import { useState } from "react";
import { FileText, FileCode, Braces, Settings2, MessageSquare, Globe,
  ChevronRight, Folder, FolderOpen, Circle, Terminal, Menu, X,
} from "lucide-react";
import { AppPy } from "@/components/ide/files/AppPy";
import { AboutMd } from "@/components/ide/files/AboutMd";
import { ExperiencePy } from "@/components/ide/files/ExperiencePy";
import { ProjectsJs } from "@/components/ide/files/ProjectsJs";
import { SkillsJson } from "@/components/ide/files/SkillsJson";
import { RecommendationsDoc } from "@/components/ide/files/RecommendationsDoc";
import { ContactHtml } from "@/components/ide/files/ContactHtml";

type FileKey =
  | "app.py"
  | "about_me.md"
  | "experience.py"
  | "projects.js"
  | "skills.json"
  | "recommendations.doc"
  | "contact.html";

const files: { name: FileKey; icon: typeof FileText; color: string }[] = [
  { name: "app.py",              icon: Terminal,      color: "text-primary" },
  { name: "about_me.md",         icon: FileText,      color: "text-sky-400" },
  { name: "experience.py",       icon: FileCode,      color: "text-yellow-400" },
  { name: "projects.js",         icon: Braces,        color: "text-amber-400" },
  { name: "skills.json",         icon: Settings2,     color: "text-orange-400" },
  { name: "recommendations.doc", icon: MessageSquare, color: "text-violet-400" },
  { name: "contact.html",        icon: Globe,         color: "text-cyan-400" },
];

const renderers: Record<FileKey, React.ComponentType> = {
  "app.py": AppPy,
  "about_me.md": AboutMd,
  "experience.py": ExperiencePy,
  "projects.js": ProjectsJs,
  "skills.json": SkillsJson,
  "recommendations.doc": RecommendationsDoc,
  "contact.html": ContactHtml,
};

const IDE = () => {
  const [active, setActive] = useState<FileKey>("app.py");
  const [folderOpen, setFolderOpen] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const Renderer = renderers[active];
  const activeFile = files.find((x) => x.name === active)!;

  const handleFileSelect = (name: FileKey) => {
    setActive(name);
    setSidebarOpen(false);
  };

  const SidebarContent = () => (
    <>
      <div className="px-3 py-2 text-[10px] uppercase tracking-widest text-muted-foreground font-mono border-b border-border flex items-center justify-between">
        <span>Explorer</span>
        {/* close button — mobile only */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-auto scrollbar-thin py-2">
        <button
          onClick={() => setFolderOpen((o) => !o)}
          className="w-full px-3 py-1 flex items-center gap-1 text-xs text-foreground/80 hover:bg-muted/50 transition-colors"
        >
          <ChevronRight className={`w-3 h-3 transition-transform ${folderOpen ? "rotate-90" : ""}`} />
          {folderOpen
            ? <FolderOpen className="w-3.5 h-3.5 text-sky-400" />
            : <Folder className="w-3.5 h-3.5 text-sky-400" />}
          <span className="font-mono text-sm">afroze-mohammad</span>
        </button>

        {folderOpen && (
          <ul className="mt-1">
            {files.map(({ name, icon: Icon, color }) => {
              const isActive = active === name;
              return (
                <li key={name}>
                  <button
                    onClick={() => handleFileSelect(name)}
                    className={`w-full pl-7 pr-3 py-2 flex items-center gap-2 text-sm font-mono text-left transition-colors ${
                      isActive
                        ? "bg-primary/10 text-foreground border-l-2 border-primary -ml-[2px]"
                        : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${color}`} />
                    <span className="gradient-text font-semibold">{name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="border-t border-border px-3 py-2 text-[10px] text-muted-foreground font-mono">
        7 files · 0 problems
      </div>
    </>
  );

  return (
    <div className="h-screen w-screen flex flex-col bg-background text-foreground overflow-hidden">

      {/* Title bar */}
      <header className="h-10 bg-[hsl(var(--titlebar))] border-b border-border flex items-center px-3 shrink-0 gap-3">
        {/* hamburger — mobile only */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors shrink-0"
          aria-label="Open file explorer"
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="flex gap-1.5 shrink-0 hidden md:flex">
          <Circle className="w-3 h-3 fill-red-500 text-red-500" />
          <Circle className="w-3 h-3 fill-yellow-500 text-yellow-500" />
          <Circle className="w-3 h-3 fill-green-500 text-green-500" />
        </div>

        <div className="flex-1 text-center text-xs text-muted-foreground font-mono truncate">
          <span className="hidden sm:inline">afroze-portfolio — </span>
          <span className="gradient-text font-semibold">{active}</span>
          <span className="hidden sm:inline"> — VS Code</span>
        </div>
      </header>

      {/* Main grid */}
      <div className="flex-1 flex min-h-0 relative">

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-20 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar — desktop: always visible, mobile: slide-in drawer */}
        <aside className={`
          bg-[hsl(var(--sidebar-bg))] border-r border-border flex flex-col shrink-0
          md:relative md:translate-x-0 md:w-64
          fixed top-0 left-0 h-full z-30 w-72 transition-transform duration-200
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}>
          <SidebarContent />
        </aside>

        

        {/* Editor area */}
        <main className="flex-1 flex flex-col min-w-0 bg-[hsl(var(--editor))]">
          {/* Tab bar */}
          <div className="h-9 bg-[hsl(var(--titlebar))] border-b border-border flex items-center shrink-0">
            <div className="px-3 h-full flex items-center gap-2 bg-[hsl(var(--editor))] border-r border-border text-xs font-mono max-w-[60%] truncate">
              <activeFile.icon className={`w-3.5 h-3.5 shrink-0 ${activeFile.color}`} />
              <span className="truncate">{active}</span>
              <span className="ml-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" title="unsaved" />
            </div>
            <div className="px-3 text-xs text-muted-foreground font-mono hidden sm:flex items-center gap-1 truncate">
              afroze-mohammad <ChevronRight className="inline w-3 h-3 shrink-0" /> {active}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-h-0 p-1.5 md:p-4">
            <div className="h-full gradient-border  rounded-lg overflow-hidden">
              <div className="h-full bg-[hsl(var(--editor))]  rounded-lg overflow-auto scrollbar-thin">
                <Renderer key={active} />
              </div>
            </div>
          </div>

          {/* Status bar */}
          <footer className="h-6 bg-[hsl(var(--statusbar))] flex items-center px-3 text-[11px] font-mono text-white/90 shrink-0">
            <span>⎇ main</span>
            <span className="mx-2 opacity-60 hidden sm:inline">·</span>
            <span className="hidden sm:inline">UTF-8</span>
            <span className="mx-2 opacity-60 hidden sm:inline">·</span>
            <span className="hidden sm:inline">JetBrains Mono</span>
            <span className="ml-auto truncate max-w-[50%]">{active}</span>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default IDE;
