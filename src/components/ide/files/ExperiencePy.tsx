import { CodeBlock } from "../CodeBlock";
import { experiencePy } from "@/data/portfolio";

export function ExperiencePy() {
  return (
    <div className="fade-in">
      <CodeBlock code={experiencePy} language="python" />
    </div>
  );
}
