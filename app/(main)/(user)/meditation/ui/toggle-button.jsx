import { Play, Pause } from "lucide-react";

export function ToggleButton({ isPaused, handleStartClick, handlePauseClick }) {
  const handleClick = isPaused ? handleStartClick : handlePauseClick;

  return (
    <button
      onClick={handleClick}
      className="animate-fade-in flex items-center justify-center w-14 h-14 bg-[#69c8af] hover:bg-[#55a28e] rounded-full shadow-lg transition-all duration-300"
    >
      {isPaused ? (
        <Play className="w-8 h-8 text-white" />
      ) : (
        <Pause className="w-8 h-8 text-white" />
      )}
    </button>
  );
}
