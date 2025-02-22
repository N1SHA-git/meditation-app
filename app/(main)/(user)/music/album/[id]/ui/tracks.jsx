import Image from "next/image";
import { ToggleButton } from "@/app/shared/uikit/toggle-button";
import clsx from "clsx";
import { DownloadIcon, Link2 } from "lucide-react";

export function Tracks({
  tracksList,
  trackImageSrc,
  artistName,
  playTrack,
  currentTrackId,
  isPlaying,
  onCopyLinkClick,
}) {
  return (
    <div className="p-7 w-[85%] mx-auto">
      <ul>
        {tracksList.map((track, index) => {
          const isTrackPaused = !(currentTrackId === track.id && isPlaying);

          return (
            <li
              key={track.id}
              onClick={() => playTrack(track, tracksList)}
              className={clsx(
                !isTrackPaused && "bg-white/5",
                `w-full flex justify-between items-center gap-4 
                cursor-pointer border-b border-white/20 p-3 
                hover:bg-white/5 group`,
              )}
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
                  <div
                    className={clsx(
                      !isTrackPaused && "opacity-100",
                      `absolute inset-0 flex items-center 
                      justify-center opacity-0 group-hover:opacity-100`,
                    )}
                  >
                    <ToggleButton isPaused={isTrackPaused} size="sm" />
                  </div>
                </div>

                <span className="text-[#999]">{index + 1}</span>
                <span className={clsx(!isTrackPaused && "text-[#63f4cd]")}>
                  {artistName} - {track.name}
                </span>
              </div>

              <ul className="flex items-center justify-center gap-4">
                <li>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCopyLinkClick();
                    }}
                    title="Copy Link"
                    className="flex items-center justify-center hover:text-[#63f4cd] transition-colors duration-100 w-8 h-9"
                  >
                    <Link2 />
                  </button>
                </li>
                <li>
                  <a
                    href={track.audiodownload}
                    download
                    title="Download"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center hover:text-[#63f4cd] transition-colors duration-100 w-8 h-9"
                  >
                    <DownloadIcon />
                  </a>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
