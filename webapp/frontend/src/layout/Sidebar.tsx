import { NavLink } from "react-router-dom";
import { LayoutDashboard, Target, GitPullRequest, Settings } from "lucide-react";
import { useAppState } from "../state/AppState";

const NAV_ITEMS = [
  { to: "/dashboard", label: "儀表板", icon: LayoutDashboard },
  { to: "/bounties", label: "懸賞", icon: Target },
  { to: "/runs", label: "執行紀錄", icon: GitPullRequest },
  { to: "/settings", label: "設定", icon: Settings },
];

export function Sidebar() {
  const { agentState } = useAppState();
  const isRunning = agentState === "RUNNING";

  return (
    <aside className="flex h-full w-60 shrink-0 flex-col border-r border-border bg-panel">
      <div className="flex items-center gap-2 px-5 py-5">
        <img src="/logo.webp" alt="Bounty Bot" className="h-8 w-8 rounded-lg" />
        <span className="text-sm font-semibold text-ink">Bounty Bot</span>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                isActive
                  ? "bg-primary/15 text-primary"
                  : "text-muted hover:bg-white/5 hover:text-ink"
              }`
            }
          >
            <Icon size={17} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-border px-5 py-4">
        <div className="flex items-center gap-2 text-xs text-muted">
          <span
            className={`h-2 w-2 rounded-full ${isRunning ? "bg-action" : "bg-muted"}`}
          />
          Agent {isRunning ? "運行中" : "已停止"}
        </div>
      </div>
    </aside>
  );
}
