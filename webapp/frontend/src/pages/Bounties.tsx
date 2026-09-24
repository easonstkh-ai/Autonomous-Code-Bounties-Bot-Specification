import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BountyCard } from "../components/BountyCard";
import { useAppState } from "../state/AppState";
import type { Bounty } from "../types";

export function Bounties() {
  const { bounties, agentState, startRunFromBounty } = useAppState();
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSolve = async (bounty: Bounty) => {
    setError(null);
    try {
      await startRunFromBounty(bounty);
      navigate("/runs");
    } catch (e) {
      setError(e instanceof Error ? e.message : "建立執行紀錄失敗，請稍後再試。");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-ink">懸賞</h1>
        <p className="text-sm text-muted">符合篩選條件的公開 Issue，選一個交給 Agent 處理。</p>
      </div>

      {error && (
        <div className="rounded-xl border border-danger/30 bg-danger/10 p-4 text-sm text-danger">{error}</div>
      )}

      {bounties.length === 0 ? (
        <div className="rounded-xl border border-border bg-panel p-10 text-center text-sm text-muted">
          {agentState === "RUNNING"
            ? "目前沒有符合篩選條件的懸賞，Agent 仍在持續搜尋中。"
            : "目前沒有懸賞資料，請先到儀表板啟動 Agent。"}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bounties.map((bounty) => (
            <BountyCard key={bounty.id} bounty={bounty} onSolve={handleSolve} />
          ))}
        </div>
      )}
    </div>
  );
}
