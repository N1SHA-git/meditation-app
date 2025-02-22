"use client";
import clsx from "clsx";
import { ChevronFirst, ChevronLast, Pause, Play, Repeat2 } from "lucide-react";

export function PlayControls({
  isPlaying,
  onPlayPrevTrack,
  onPlayNextTrack,
  onPlayPauseTrack,
  onLoopChange,
  isLoop,
}) {
  const getPLayIcon = () => {
    if (isPlaying) return <Pause fill="#ffffff" strokeWidth={0} size={20} />;

    return <Play fill="#ffffff" strokeWidth={0} size={20} />;
  };
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onPlayPrevTrack}
        className="flex justify-center items-center h-12 w-6"
      >
        <p className="sr-only">play previous track</p>
        <ChevronFirst size={22} />
      </button>

      <button
        onClick={onPlayPauseTrack}
        className="flex justify-center items-center h-12 w-6"
        title={isPlaying ? "Pause current" : "Play current"}
      >
        {getPLayIcon()}
      </button>

      <button
        onClick={onPlayNextTrack}
        className="flex justify-center items-center h-12 w-6"
      >
        <p className="sr-only">play next track</p>
        <ChevronLast size={22} />
      </button>

      <button
        onClick={onLoopChange}
        className={clsx("flex justify-center items-center h-12 w-6 ", isLoop && "text-[#69c8af]")}
        title="Repeat"
      >
        <p className="sr-only">{isLoop ? "Turn loop off" : "Turn loop on"}</p>
        <Repeat2 size={22} />
      </button>
    </div>
  );
}
