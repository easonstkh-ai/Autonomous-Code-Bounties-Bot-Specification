import type { ReactNode } from "react";

type Tone = "success" | "info" | "danger" | "neutral";

const TONE_CLASSES: Record<Tone, string> = {
  success: "bg-action/15 text-action border-action/30",
  info: "bg-primary/15 text-primary border-primary/30",
  danger: "bg-danger/15 text-danger border-danger/30",
  neutral: "bg-white/5 text-muted border-border",
};

export function Badge({ tone = "neutral", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${TONE_CLASSES[tone]}`}>
      {children}
    </span>
  );
}
