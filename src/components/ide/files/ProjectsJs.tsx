import { CodeBlock } from "../CodeBlock";
import { projectsJs } from "@/data/portfolio";

export function ProjectsJs() {
  return (
    <div className="fade-in">
      <CodeBlock code={projectsJs} language="javascript" />
    </div>
  );
}
