
import Image from "next/image";

export function Tracks({ tracksList, trackImageSrc, artistName, playButton, playTrack }) {
  return (
    <div className="p-7 w-[85%] mx-auto">
      <ul>
        {tracksList.map((track, index) => (
          <li
            key={track.id}
            onClick={() => playTrack(track)}
            className="w-full flex justify-between items-center gap-4 cursor-pointer
            border-b border-white/20 p-3 hover:bg-white/5 transition-colors group"
          >
            <div className="relative flex items-center gap-4">
              <div className="relative w-[30px] h-[30px]">
                <Image
                  width="30"
                  height="30"
                  src={trackImageSrc}
                  alt={track.name}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center 
                justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {playButton}
                </div>
              </div>

              <span className="text-[#999]">{index + 1}</span>
              <span>
                {artistName} - {track.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
