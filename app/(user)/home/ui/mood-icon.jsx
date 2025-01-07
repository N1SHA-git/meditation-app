export function MoodIcon({ moodIcon, moodName }) {
  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <button className="flex items-center justify-center transition-all bg-[#69c8af] hover:bg-[#55a28e] hover:scale-105 shadow-xl w-20 h-20 rounded-3xl">
        {moodIcon}
      </button>
      <p className="text-2xl font-bold text-center">{moodName}</p>
    </div>
  );
}
