import { useEffect, useRef, useState } from "react";

interface TypingStreamProps {
  text: string;
  speed?: number; // ms per char
  onDone?: () => void;
  className?: string;
  /** When true, render full text immediately. */
  instant?: boolean;
}

/**
 * Streams text character-by-character. Click to skip.
 * Respects prefers-reduced-motion.
 */
export function TypingStream({ text, speed = 12, onDone, className, instant }: TypingStreamProps) {
  const [shown, setShown] = useState(0);
  const skipRef = useRef(false);

  useEffect(() => {
    skipRef.current = false;
    setShown(0);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || instant) {
      setShown(text.length);
      onDone?.();
      return;
    }
    let i = 0;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      if (skipRef.current) {
        setShown(text.length);
        onDone?.();
        return;
      }
      i = Math.min(i + 2, text.length); // 2 chars per tick for snappier feel
      setShown(i);
      if (i < text.length) {
        setTimeout(tick, speed);
      } else {
        onDone?.();
      }
    };
    const t = setTimeout(tick, speed);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const done = shown >= text.length;

  return (
    <div
      className={className}
      onClick={() => {
        skipRef.current = true;
      }}
      role="presentation"
    >
      <span style={{ whiteSpace: "pre-wrap" }}>{text.slice(0, shown)}</span>
      {!done && <span className="caret text-primary">▍</span>}
    </div>
  );
}
