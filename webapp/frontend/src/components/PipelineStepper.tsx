import { StageIcon } from "./StageIcon";
import type { StageStatus } from "../types";

export interface StepperStage {
  label: string;
  status: StageStatus;
}

export function PipelineStepper({ stages }: { stages: StepperStage[] }) {
  return (
    <div className="flex items-center">
      {stages.map((stage, i) => (
        <div key={stage.label} className="flex items-center">
          <div className="flex flex-col items-center gap-1.5">
            <StageIcon status={stage.status} />
            <span
              className={`text-xs whitespace-nowrap ${
                stage.status === "waiting" ? "text-muted" : "text-ink"
              }`}
            >
              {stage.label}
            </span>
          </div>
          {i < stages.length - 1 && (
            <div
              className={`mx-2 h-px w-8 sm:w-14 ${
                stage.status === "done" ? "bg-action" : "bg-border"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
