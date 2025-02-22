"use client";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useAudioPlayer } from "@/app/context/audio-player-context";
import { computeTimeOfTracks } from "../../model/compute-time-of-track";
import { useState } from "react";

export function ProgressBar() {
  const [isHover, setIsHover] = useState(false);

  const { currentTime, fullTime, audioRef } = useAudioPlayer();
  const progress = fullTime ? (currentTime / fullTime) * 100 : 0;

  const handleSeek = (value) => {
    audioRef.current.currentTime = (value / 100) * fullTime;
  };
  const normalizeCurrentTime = computeTimeOfTracks(currentTime);
  const normalizeFullTime = computeTimeOfTracks(fullTime);

  return (
    <div className="flex items-center justify-between gap-3 px-5 w-full text-base">
      <p className="text-[#7ce7cb] min-w-[40px] text-right">
        {normalizeCurrentTime}
      </p>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="w-full"
      >
        <Slider
          min={0}
          max={100}
          step={0.1}
          value={progress}
          onChange={handleSeek}
          className="cursor-pointer hover:opacity-100"
          styles={{
            track: { backgroundColor: "#69c8af", borderRadius: 0, height: 1 },
            handle: {
              background: "#69c8af",
              border: 0,
              width: 8,
              height: 8,
              opacity: isHover ? 1 : 0,
              cursor: "pointer",
              boxShadow: "none",
              marginTop: -3.5,
            },
            rail: { backgroundColor: "#999999", borderRadius: 0, height: 1 },
          }}
        />
      </div>
      <p className="min-w-[40px] text-left">{normalizeFullTime}</p>
    </div>
  );
}
