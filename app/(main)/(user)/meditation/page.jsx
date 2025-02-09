"use client";
import ProtectedRoute from "@/app/shared/protectedRoute";
import { MeditationLayout } from "./ui/meditation-layout";
import { MeditationIcon } from "@/public/icons/meditation-icon";
import { UiButton } from "@/app/shared/uikit/ui-button";
import { Timer } from "./ui/timer";
import { useTimer } from "@/app/hooks/use-timer";
import { ToggleButton } from "../../../shared/uikit/toggle-button";
import { ResetButton } from "./ui/reset-button";
import { RestartButton } from "./ui/restart-button";

export default function MeditationPage() {
  const {
    isStarted,
    isPaused,
    remainingTime,
    timerStartAt,
    handleStartTimer,
    handlePauseTimer,
    handleResetTimer,
    handleRestartTimer,
  } = useTimer();
  return (
    <ProtectedRoute>
      <MeditationLayout
        image={<MeditationIcon />}
        timer={
          <Timer
            isStarted={isStarted}
            timer={remainingTime}
            timerStartAt={timerStartAt}
            startButton={
              <UiButton
                className="px-16 animate-fade-in"
                onClick={handleStartTimer}
              >
                Start now
              </UiButton>
            }
            toggleButton={
              <ToggleButton
                className="animate-fade-in"
                isPaused={isPaused}
                handleStartClick={handleStartTimer}
                handlePauseClick={handlePauseTimer}
              />
            }
            resetButton={<ResetButton onClick={handleResetTimer} />}
            restartButton={<RestartButton onClick={handleRestartTimer} />}
          />
        }
      />
    </ProtectedRoute>
  );
}
