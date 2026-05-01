import { useEffect, useState } from "react";

const sampleLines = [
  "[INFO] Loading dataset: respiratory_v2.parquet (24,520 samples)",
  "[INFO] Stratified split → train: 19,616 · val: 2,452 · test: 2,452",
  "[INFO] Model: ResNet-18 (ImageNet weights, 5 classes)",
  "[INFO] Optimizer: AdamW lr=3e-4 weight_decay=1e-4",
  "[ epoch 01 ] loss=1.487  acc=0.512  val_acc=0.604",
  "[ epoch 02 ] loss=0.921  acc=0.704  val_acc=0.748",
  "[ epoch 03 ] loss=0.612  acc=0.812  val_acc=0.831",
  "[ epoch 04 ] loss=0.418  acc=0.879  val_acc=0.886",
  "[ epoch 05 ] loss=0.301  acc=0.913  val_acc=0.910",
  "[ epoch 06 ] loss=0.224  acc=0.938  val_acc=0.927",
  "[ epoch 07 ] loss=0.176  acc=0.951  val_acc=0.939",
  "[ epoch 08 ] loss=0.142  acc=0.961  val_acc=0.945  ← best",
  "[INFO] Saved checkpoint → s3://digibiomics-models/resnet18-best.pt",
  "[INFO] Eval on holdout: macro_F1=0.945 · AUC-ROC=0.971",
  "[INFO] Deploying → AWS SageMaker endpoint: lungsense-prod",
  "[OK]   Endpoint healthy · p50=82ms · p95=147ms",
  "[INFO] Live cases processed today: 12 · success rate: 100%",
];

export function MLLogs() {
  const [lines, setLines] = useState<string[]>([]);
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setLines((prev) => {
        const next = [...prev, sampleLines[i % sampleLines.length]];
        return next.length > 50 ? next.slice(-50) : next;
      });
      i++;
    }, 900);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="text-[11px] leading-5 text-muted-foreground p-2 font-mono scrollbar-thin overflow-auto h-full">
      {lines.map((l, idx) => (
        <div
          key={idx}
          className={
            l.includes("[OK]")
              ? "text-[hsl(var(--syntax-number))]"
              : l.includes("best")
              ? "text-[hsl(var(--syntax-fn))]"
              : "text-muted-foreground"
          }
        >
          {l}
        </div>
      ))}
      <div className="text-primary caret">▍</div>
    </div>
  );
}
