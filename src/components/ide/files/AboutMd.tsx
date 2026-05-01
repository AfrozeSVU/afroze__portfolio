import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { aboutMd } from "@/data/portfolio";

export function AboutMd() {
  return (
    <div className="p-6 md:p-10 max-w-3xl fade-in">
      <div className="prose prose-invert font-sans-prose
        prose-headings:font-mono prose-headings:gradient-text
        prose-strong:text-foreground prose-strong:font-semibold
        prose-p:text-foreground/90 prose-p:leading-relaxed
        prose-a:text-primary">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {aboutMd}
        </ReactMarkdown>
      </div>
    </div>
  );
}
