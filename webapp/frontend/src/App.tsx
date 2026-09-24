import type { ReactElement } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppStateProvider, useAppState } from "./state/AppState";
import { AppLayout } from "./layout/AppLayout";
import { Onboarding } from "./pages/Onboarding";
import { Dashboard } from "./pages/Dashboard";
import { Bounties } from "./pages/Bounties";
import { Runs } from "./pages/Runs";
import { Settings } from "./pages/Settings";

function RequireOnboarding({ children }: { children: ReactElement }) {
  const { onboarded } = useAppState();
  if (!onboarded) return <Navigate to="/onboarding" replace />;
  return children;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/onboarding" element={<Onboarding />} />
      <Route
        element={
          <RequireOnboarding>
            <AppLayout />
          </RequireOnboarding>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bounties" element={<Bounties />} />
        <Route path="/runs" element={<Runs />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppStateProvider>
        <AppRoutes />
      </AppStateProvider>
    </BrowserRouter>
  );
}

export default App;
