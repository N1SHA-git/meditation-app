import { useAudioPlayer } from "@/app/context/audio-player-context";
import { useMusic } from "@/app/hooks/use-music";
import Image from "next/image";

export function AudioInfo() {
  const { currentTrack } = useAudioPlayer();
  const albumId = currentTrack?.album_id;
  const { albumData } = useMusic(albumId);
  return (
    <div className="flex gap-4 items-center">
      {albumData?.image ? (
        <Image
          src={albumData.image}
          width={30}
          height={30}
          alt={currentTrack?.name ?? "Track Image"}
          priority
          className="max-w-none"
        />
      ) : (
        <div className="w-[30px] aspect-square bg-white/70" />
      )}
      <div className="flex flex-col justify-between gap-1 max-w-48">
        <p className="text-white/50 text-sm leading-none truncate">
          {albumData?.artist_name}
        </p>
        <p className="text-white/70 text-base leading-none truncate">
          {currentTrack?.name}
        </p>
      </div>
    </div>
  );
}
