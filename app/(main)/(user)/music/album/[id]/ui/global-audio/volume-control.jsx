"use client";

import { useAudioPlayer } from "@/app/context/audio-player-context";
import { Volume1, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export function VolumeControl() {
  const [showSlider, setShowSlider] = useState(false);
  const [{ volume, prevVolume }, setVolume] = useState(() => ({
    volume: 100,
    prevVolume: 100,
  }));

  const { audioRef } = useAudioPlayer();

  const handleVolumeChange = (e) => {
    if (!audioRef.current) return;
    const newVolume = Number(e.target.value);
    setVolume((prev) => ({
      ...prev,
      volume: newVolume,
      prevVolume: newVolume,
    }));
    audioRef.current.volume = newVolume / 100;
  };

  const toggleMute = () => {
    if (volume > 0) {
      setVolume((prev) => ({
        ...prev,
        volume: 0,
        prevVolume: prev.volume,
      }));
      audioRef.current.volume = 0;
    } else {
      const restored = prevVolume === 0 ? 10 : prevVolume;
      setVolume((prev) => ({
        ...prev,
        volume: restored,
      }));
      audioRef.current.volume = restored / 100;
    }
  };

  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX size={20} />;
    if (volume < 50) return <Volume1 size={20} />;
    return <Volume2 size={20} />;
  };

  const sliderStyle = {
    background: `linear-gradient(to right, #69c8af 0%, #69c8af ${volume}%, #4b5563 ${volume}%, #4b5563 100%)`,
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMute}
        onMouseEnter={() => setShowSlider(true)}
        onMouseLeave={() => setShowSlider(false)}
        className="flex justify-center items-center h-12 w-6"
      >
        {getVolumeIcon()}
      </button>

      {showSlider && (
        <div
          onMouseEnter={() => setShowSlider(true)}
          onMouseLeave={() => setShowSlider(false)}
          className="absolute left-1/2 -top-full transform -rotate-90 -translate-y-3/4 -translate-x-1/2"
        >
          <div
            className={`overflow-hidden bg-[#404040] border 
            border-white/20 p-3 flex flex-col items-center justify-center animate-uncollapse`}
          >
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              style={sliderStyle}
              className="w-24 h-[2px] appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:w-[6px] [&::-webkit-slider-thumb]:h-[6px]
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-[#69c8af]"
            />
          </div>
          <div
            className="absolute top-1/2 bg-[#404040] w-3 h-3 transform -translate-y-1/2 
          -translate-x-1/2 rotate-45 border-b border-l border-white/20"
          ></div>
        </div>
      )}
    </div>
  );
}
