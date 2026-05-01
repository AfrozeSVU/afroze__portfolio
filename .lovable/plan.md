## Developer Portfolio — Afroze Mohammad

A two-stage dev/IDE-themed portfolio: a cinematic splash with hero + featured work, then a "Launch IDE View" button that transitions into a VS Code–style dual-pane experience with streaming file content.

---

### Stage 1 — Splash / Landing (`/`)

- **Hero**
  - Professional photo (uploaded `picofme.png`) with a subtle gradient ring.
  - Name: **Afroze Mohammad**
  - Headline: *"Machine Learning Engineer | Healthcare AI & Cloud Architect | Building Production-Grade MedTech Solutions."*
  - Subtle animated gradient backdrop, JetBrains Mono throughout.
- **Featured Work strip** (below hero)
  - Two highlighted cards: **Lungsense.ai @ DigiBiomics** and **AgroNexus (National Hackathon Winner)**.
  - Short impact bullets per card (live hospital data, 10+ cases/day; beat 500+ teams).
- **Primary CTA**: `▶ Launch IDE View` button — animated transition (fade + scale) into Stage 2.
- **Secondary**: small social row (LinkedIn, GitHub, Twitter/X, LeetCode, Kaggle, Email, Resume PDF) — placeholders editable later.

### Stage 2 — IDE Mode (`/ide`)

VS Code–inspired dual pane. Dark theme `#1e1e1e`, Gemini-style gradient border around the main content window.

```text
┌──────────────────────────────────────────────────────────┐
│  ● ● ●   afroze-portfolio — VS Code                      │
├────────────┬─────────────────────────────────────────────┤
│ [Explorer] │  about_me.md                                │
│ [ML-Logs]  │  ───────────────────────────────────────    │
│            │                                             │
│ 📄 about_me.md           │  # Hi, I'm Afroze...          │
│ 🐍 experience.py         │  (typing animation streams    │
│ 📜 projects.js           │   content character-by-char,  │
│ ⚙️ skills.json           │   markdown rendered live)     │
│ 📋 education.yaml        │                               │
│ 🏆 honors_awards.txt     │                               │
│ 📝 recommendations.doc   │                               │
│ 📧 contact.html          │                               │
└────────────┴─────────────────────────────────────────────┘
   status bar: ⎇ main • UTF-8 • Ln 1, Col 1 • JetBrains Mono
```

- **Left sidebar**
  - Two top tabs: **Explorer** and **ML-Logs** (ML-Logs shows a fake training log feed: epoch/accuracy/loss lines slowly streaming — pure flair).
  - File tree with the 8 files listed above, each with a matching icon.
  - Highlight active file; small unsaved-dot indicator on the active tab.
- **Main content pane**
  - Single open file at a time (per "keep it simple" choice).
  - Content streams in with a typing animation; a small "▍" caret blinks until done.
  - Per-file rendering rules:
    - `about_me.md` → markdown render (headings, bold, lists)
    - `experience.py` → Python syntax highlighting
    - `projects.js` → JavaScript syntax highlighting
    - `skills.json` → JSON view, plus a categorized **skills grid** with official SVG icons (via Simple Icons CDN) for Languages / Frontend / Backend / Databases / AI-ML / Cloud / Tools
    - `education.yaml` → YAML highlighting (Sri Venkateswara University, 8.9 CGPA, scholarships)
    - `honors_awards.txt` → plain text list (FFE Amazon Future Engineer, AnitaB.org Scholar '25, CodessCafe Mentee, AgroNexus winner, TEDxSVU lead, etc.)
    - `recommendations.doc` → testimonials slider styled as chat bubbles / code comments (Chandra Teja, Trived, Tejasri, Swanith, Pooja, Asif)
    - `contact.html` → HTML-highlighted snippet + interactive buttons (Email, LinkedIn, GitHub, Twitter/X, LeetCode, Kaggle, Download Resume)
- **Window chrome**: traffic lights, breadcrumb path, bottom status bar.
- **Always-visible "Back to Splash"** link in the top-right of the IDE chrome.

### Stage 3 — Branding & UX

- **Typography**: JetBrains Mono (Google Fonts) globally; Inter as fallback for long prose.
- **Color tokens** (added to `index.css` + `tailwind.config.ts` as HSL semantic tokens):
  - `--background` `#1e1e1e`, `--sidebar` `#252526`, `--editor` `#1e1e1e`, `--muted` `#2d2d30`, `--border` `#3c3c3c`
  - `--foreground` near-white, `--syntax-keyword`, `--syntax-string`, `--syntax-comment`, `--syntax-fn`, `--syntax-number` (VS Code Dark+ palette)
  - **Gradient accent** (the "surprise me" pick): `linear-gradient(135deg, hsl(265 90% 65%) 0%, hsl(200 95% 60%) 50%, hsl(160 80% 55%) 100%)` — violet → azure → mint. Used for the chat-window border, primary CTA, hero ring, and active-file underline.
- **Motion**: splash → IDE transition (300ms fade+scale), file switch fade-in, typing animation ~15ms/char with skip-on-click.
- **Accessibility**: respect `prefers-reduced-motion` (instantly render text instead of typing); semantic landmarks; alt text on photo; AA contrast.
- **SEO**: title `Afroze Mohammad — ML Engineer & Cloud Architect`, meta description, single H1, Person JSON-LD.
- **Responsive**: on < md, sidebar collapses into a top dropdown ("file picker"); IDE chrome simplifies; hero stacks vertically.

### Technical notes

- **Stack**: existing React + Vite + Tailwind + shadcn. No backend needed.
- **Routes**: `/` (Splash), `/ide` (IDE view), keep `*` NotFound. React Router transition via simple navigation; cross-fade overlay for the cinematic feel.
- **New files**:
  - `src/pages/Splash.tsx` (replaces current Index content)
  - `src/pages/IDE.tsx`
  - `src/components/ide/IDEChrome.tsx`, `Sidebar.tsx`, `FileTree.tsx`, `StatusBar.tsx`, `Editor.tsx`, `TypingStream.tsx`, `MLLogs.tsx`
  - `src/components/ide/files/` — one renderer per file type (`AboutMd`, `ExperiencePy`, `ProjectsJs`, `SkillsJson`, `EducationYaml`, `HonorsTxt`, `RecommendationsDoc`, `ContactHtml`)
  - `src/data/portfolio.ts` — all your content centralized so edits are easy
  - `src/data/skills.ts` — skills with Simple Icons slugs
  - `src/components/Hero.tsx`, `FeaturedWork.tsx`, `SocialRow.tsx`
  - `src/assets/afroze.jpg` (copied from your upload)
- **Libraries** (small, justified):
  - `react-markdown` + `remark-gfm` for the markdown file
  - `react-syntax-highlighter` (Prism, VS Code Dark+ theme) for code files
  - Simple Icons via `simple-icons` package OR CDN `https://cdn.simpleicons.org/<slug>` for skills SVGs
- **Resume PDF**: I'll wire the button to `/resume.pdf` in `public/` — drop your PDF there later (button shows a tiny tooltip if missing).
- **No backend / no Cloud**: everything is static content; no DB needed.

### What's intentionally not in v1 (per your "keep it simple" choice)

- No multi-tab editor, no command palette, no terminal panel. Easy to add later if you change your mind.

### Open items you can edit after generation

- Real social URLs, email, resume PDF.
- Any wording tweaks in `src/data/portfolio.ts` (single source of truth).
- Swap/refine the hero photo crop if desired.
