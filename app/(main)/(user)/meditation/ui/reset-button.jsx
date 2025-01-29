import { X } from "lucide-react";

export function ResetButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="animate-fade-in flex items-center justify-center w-14 h-14 bg-red-500 hover:bg-red-700 rounded-full shadow-lg transition-all duration-300"
    >
      <X className="w-8 h-8 text-white" />
    </button>
  );
}
