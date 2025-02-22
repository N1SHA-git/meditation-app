"use client";
import { useAudioPlayer } from "@/app/context/audio-player-context";
import { PlayControls } from "./play-controls";
import { ProgressBar } from "./progress-bar";
import { VolumeControl } from "./volume-control";
import { AudioInfo } from "./audio-info";

export default function GlobalAudioPlayer() {
  const {
    currentTrack,
    isPlaying,
    playTrack,
    playNextTrack,
    playPrevTrack,
    handleLoopChange,
    isLoop,
  } = useAudioPlayer();

  if (!currentTrack) return null;

  return (
    <div
      className="fixed bottom-0 left-0 w-full bg-[#343434] flex px-40 
    items-center justify-between gap-5 border-t border-white/20 z-50"
    >
      <PlayControls
        isPlaying={isPlaying}
        onPlayNextTrack={playNextTrack}
        onPlayPrevTrack={playPrevTrack}
        onPlayPauseTrack={() => playTrack(currentTrack)}
        onLoopChange={handleLoopChange}
        isLoop={isLoop}
      />
      <ProgressBar />
      <VolumeControl />
      <AudioInfo />
    </div>
  );
}
