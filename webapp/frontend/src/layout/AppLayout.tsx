import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { useAppState } from "../state/AppState";

export function AppLayout() {
  const { backendOnline } = useAppState();

  return (
    <div className="flex h-screen bg-bg text-ink">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl px-8 py-8">
          {!backendOnline && (
            <div className="mb-6 rounded-xl border border-danger/30 bg-danger/10 p-3 text-sm text-danger">
              無法連線到後端伺服器，請確認已執行 <code>uvicorn webapp.backend.app:app --port 8000</code>。
            </div>
          )}
          <Outlet />
        </div>
      </main>
    </div>
  );
}
