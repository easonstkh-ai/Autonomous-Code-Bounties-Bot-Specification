import type { ReactNode } from "react";

export function StatCard({
  label,
  value,
  tone = "default",
  icon,
}: {
  label: string;
  value: ReactNode;
  tone?: "default" | "action";
  icon?: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-panel p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted">{label}</span>
        {icon && <span className="text-muted">{icon}</span>}
      </div>
      <p className={`mt-2 text-2xl font-semibold ${tone === "action" ? "text-action" : "text-ink"}`}>{value}</p>
    </div>
  );
}
