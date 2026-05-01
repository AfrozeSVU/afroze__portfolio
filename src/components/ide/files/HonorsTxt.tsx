import { honorsTxt } from "@/data/portfolio";
import { TypingStream } from "../TypingStream";

export function HonorsTxt() {
  return (
    <div className="p-6 md:p-10 fade-in">
      <pre className="font-mono text-sm text-foreground/90 whitespace-pre-wrap leading-7">
        <TypingStream text={honorsTxt} speed={6} />
      </pre>
    </div>
  );
}
