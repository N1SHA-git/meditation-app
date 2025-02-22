import clsx from "clsx";

export function RoundAndWavesurfer({
  tracksCount,
  albumDuration,
  isStarted,
  isPlaying,
  wavesurfer,
  currentTime,
  fullTime,
}) {
  return (
    <div className="relative h-full w-full">
      <div
        className={`absolute inset-0 top-full -translate-y-full bg-[#2b3632] rounded-full w-[110px] aspect-square 
                flex flex-col items-center text-sm leading-none ${
                  isStarted ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
      >
        <p className="text-5xl leading-tight">{tracksCount}</p>
        TRACKS
        <p className="text-xl font-normal text-white/60 leading-none">
          {albumDuration}
        </p>
      </div>

      <div
        className={clsx(
          `w-[50rem] h-[100px] absolute inset-0 top-full -translate-y-full 
          hover:opacity-100 transition-opacity duration-300 !cursor-pointer`,
          isStarted
            ? isPlaying
              ? "opacity-100"
              : "opacity-70"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div className="absolute top-1/2 left-0 text-xs bg-[#1c2321] transform -translate-y-1/2 px-px z-10 text-[#69c8af]">
          {currentTime}
        </div>
        {wavesurfer}
        <div className="absolute top-1/2 left-full text-xs bg-[#1c2321] transform -translate-y-1/2 -translate-x-1/2 px-px z-10 text-[#69c8af]">
          {fullTime}
        </div>
      </div>
    </div>
  );
}
