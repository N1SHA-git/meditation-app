"use client";
import clsx from "clsx";
import { Play, Pause } from "lucide-react";

export function ToggleButton({
  className,
  isPaused,
  handleStartClick,
  handlePauseClick,
  size = "md",
}) {
  const handleClick = isPaused ? handleStartClick : handlePauseClick;

  return (
    <button
      onClick={handleClick}
      className={clsx(
        className,
        ` flex items-center justify-center 
       bg-[#69c8af] hover:bg-[#55a28e] rounded-full 
        shadow-lg transition-all duration-300`,
        { md: "p-4", sm: "p-1" }[size],
      )}
    >
      {isPaused ? (
        <Play
          fill="#ffffff"
          className={clsx("text-white", { md: "w-8 h-8", sm: "w-3 h-3" }[size])}
        />
      ) : (
        <Pause
          fill="#ffffff"
          className={clsx("text-white", { md: "w-8 h-8", sm: "w-3 h-3" }[size])}
        />
      )}
    </button>
  );
}
