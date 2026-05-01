import { CodeBlock } from "../CodeBlock";
import { educationYaml } from "@/data/portfolio";

export function EducationYaml() {
  return (
    <div className="fade-in">
      <CodeBlock code={educationYaml} language="yaml" />
    </div>
  );
}
