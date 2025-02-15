"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useMusic } from "@/app/hooks/use-music";
import { AlbumLayout } from "./ui/album-layout";
import { getTimeSinceUpdate } from "./model/get-time-since-update";
import ProtectedRoute from "@/app/shared/protectedRoute";
import { ToggleButton } from "@/app/shared/uikit/toggle-button";
import { Tracks } from "./ui/tracks";
import { useAudioPlayer } from "@/app/context/AudioPlayerContext";

export default function AlbumPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");
  const { albumData, albumTracks, albumDuration } = useMusic(id);

  const { playTrack, isPlaying, currentTrack } = useAudioPlayer();
  return (
    <ProtectedRoute>
      <AlbumLayout
        artistName={albumData?.artist_name}
        playButton={<ToggleButton isPaused={!isPlaying} />}
        albumName={albumData?.name}
        tracksCount={albumTracks?.length}
        albumDuration={albumDuration}
        timeSinceUpdate={getTimeSinceUpdate(albumData?.releasedate)}
        albumImageSrc={albumData?.image ?? null}
        tag={"# " + (tag ?? "tag")}
        tracks={
          <Tracks
            tracksList={albumTracks}
            trackImageSrc={albumData?.image ?? null}
            artistName={albumData?.artist_name}
            playButton={<ToggleButton size="sm" isPaused />}
            playTrack={playTrack}
          />
        }
      />
    </ProtectedRoute>
  );
}
