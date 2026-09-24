import { RunCard } from "../components/RunCard";
import { useAppState } from "../state/AppState";

export function Runs() {
  const { runs, retryRun } = useAppState();

  const handleRetry = (runId: string) => {
    retryRun(runId).catch(() => {
      // The run card already reflects failure state via polling; a toast
      // isn't needed for a background retry that itself just failed to start.
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-ink">執行紀錄</h1>
        <p className="text-sm text-muted">追蹤每個懸賞從 Issue 到 Pull Request 的過程。</p>
      </div>

      {runs.length === 0 ? (
        <div className="rounded-xl border border-border bg-panel p-10 text-center text-sm text-muted">
          還沒有任何執行紀錄，先到懸賞頁面點擊「解決」吧。
        </div>
      ) : (
        <div className="space-y-4">
          {runs.map((run) => (
            <RunCard key={run.id} run={run} onRetry={handleRetry} />
          ))}
        </div>
      )}
    </div>
  );
}
