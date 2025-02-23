"use client";
import { useAudioPlayer } from "./context/audio-player-context";

export function LayoutWrapper({ children }) {
  const { currentTrack } = useAudioPlayer();

  return <div className={currentTrack ? "pb-10" : ""}>{children}</div>;
}
