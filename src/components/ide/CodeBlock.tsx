import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  code: string;
  language: "python" | "javascript" | "json" | "yaml" | "html" | "markdown" | "text";
}

export function CodeBlock({ code, language }: Props) {
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      showLineNumbers
      customStyle={{
        margin: 0,
        padding: "1rem",
        background: "transparent",
        fontSize: "13px",
        fontFamily: "'JetBrains Mono', monospace",
      }}
      lineNumberStyle={{
        minWidth: "2.5em",
        color: "hsl(var(--muted-foreground))",
        opacity: 0.5,
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
}
