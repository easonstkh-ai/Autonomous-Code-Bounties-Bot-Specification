import { Check, Minus, X } from "lucide-react";
import type { StageStatus } from "../types";

export function StageIcon({ status }: { status: StageStatus }) {
  if (status === "done") {
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-action text-[#04160e]">
        <Check size={14} strokeWidth={3} />
      </span>
    );
  }
  if (status === "running") {
    return (
      <span className="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary">
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
      </span>
    );
  }
  if (status === "failed") {
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-danger text-white">
        <X size={14} strokeWidth={3} />
      </span>
    );
  }
  if (status === "skipped") {
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-border text-muted">
        <Minus size={14} strokeWidth={3} />
      </span>
    );
  }
  return <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-border" />;
}
