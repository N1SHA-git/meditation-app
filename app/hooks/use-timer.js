"use client";
import { useState, useEffect } from "react";

export function useTimer() {
  const [
    { isStarted, isPaused, defaultTimer, lastUpdate, remainingTime },
    setTimerState,
  ] = useState(() => ({
    isStarted: false,
    isPaused: true,
    defaultTimer: 2700000, // 45 минут
    remainingTime: 2700000,
    lastUpdate: null,
  }));

  const handleStartTimer = () => {
    setTimerState((prevState) => ({
      ...prevState,
      isStarted: true,
      isPaused: false,
      lastUpdate: Date.now(),
    }));
  };

  const handlePauseTimer = () => {
    setTimerState((prevState) => ({
      ...prevState,
      isPaused: true,
      remainingTime:
        prevState.remainingTime - (Date.now() - prevState.lastUpdate),
      lastUpdate: null,
    }));
  };

  const handleRestartTimer = () => {
    setTimerState((prevState) => ({
      ...prevState,
      isPaused: true,
      remainingTime: prevState.defaultTimer,
      lastUpdate: null,
    }));
  };

  const handleResetTimer = () => {
    setTimerState((prevState) => ({
      ...prevState,
      isStarted: false,
      isPaused: true,
      remainingTime: prevState.defaultTimer,
      lastUpdate: null,
    }));
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setTimerState((prevState) => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - prevState.lastUpdate;

        if (prevState.remainingTime - elapsedTime <= 0) {
          clearInterval(interval);
          return {
            ...prevState,
            isPaused: true,
            remainingTime: 0,
            lastUpdate: null,
          };
        }

        return {
          ...prevState,
          remainingTime: prevState.remainingTime - elapsedTime,
          lastUpdate: currentTime,
        };
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isPaused]);

  return {
    isStarted,
    isPaused,
    defaultTimer,
    remainingTime,
    handleStartTimer,
    handlePauseTimer,
    handleResetTimer,
    handleRestartTimer,
  };
}
