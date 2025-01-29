import { RotateCcw } from "lucide-react";

export function RestartButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="animate-fade-in flex items-center justify-center w-14 h-14 bg-slate-400 hover:bg-slate-500 rounded-full shadow-lg transition-all duration-300"
    >
      <RotateCcw className="w-8 h-8 text-white" />
    </button>
  );
}
