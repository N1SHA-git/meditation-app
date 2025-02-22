"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useMusic } from "@/app/hooks/use-music";
import { AlbumLayout } from "./ui/album-layout";
import { computeTimeSinceUpdate } from "./model/compute-time-since-update";
import ProtectedRoute from "@/app/shared/protectedRoute";
import { ToggleButton } from "@/app/shared/uikit/toggle-button";
import { Tracks } from "./ui/tracks";
import { useAudioPlayer } from "@/app/context/audio-player-context";
import { RoundAndWavesurfer } from "./ui/round-and-wavesurfer";
import WavesurferPlayer from "@wavesurfer/react";
import { computeTimeOfTracks } from "./model/compute-time-of-track";
import { Slide, ToastContainer, toast } from "react-toastify";
import { useCallback } from "react";

const ctx = document.createElement("canvas").getContext("2d");
const gradient = ctx.createLinearGradient(0, 0, 0, 150);
gradient.addColorStop(1, "#c9c9c9");
gradient.addColorStop(0, "#55a28e");
gradient.addColorStop(0.7, "#69c8af");

const handleCopyClick = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    toast.success("Link has been copied to the clipboard!");
  } catch (err) {
    console.error("Error to copy URL of track: ", err);
    toast.error("Link hasn't been copied!");
  }
};

export default function AlbumPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag") || "tag";
  const { albumData, albumTracks, albumDuration, firstTrack } = useMusic(id);
  const {
    playTrack,
    isStarted,
    isPlaying,
    currentTrack,
    audioRef,
    currentTime,
    fullTime,
  } = useAudioPlayer();

  const handleStartClick = useCallback(() => {
    if (currentTrack && currentTrack?.album_id === id) playTrack(currentTrack);
    else {
      firstTrack && playTrack(firstTrack, albumTracks);
    }
  }, [albumTracks, currentTrack, id, firstTrack, playTrack]);

  return (
    <ProtectedRoute>
      <AlbumLayout
        artistName={albumData?.artist_name}
        playButton={
          <ToggleButton
            isPaused={!isPlaying || !isStarted}
            handleStartClick={handleStartClick}
            handlePauseClick={isPlaying && (() => playTrack(currentTrack))}
          />
        }
        albumName={albumData?.name}
        roundAndWavesurfer={
          <RoundAndWavesurfer
            tracksCount={albumTracks?.length}
            albumDuration={albumDuration}
            isStarted={isStarted}
            isPlaying={isPlaying}
            currentTime={computeTimeOfTracks(currentTime)}
            fullTime={computeTimeOfTracks(fullTime)}
            wavesurfer={
              <WavesurferPlayer
                height={100}
                waveColor="#c9c9c9"
                progressColor={gradient}
                barWidth={2}
                responsive
                dragToSeek
                cursorWidth={0}
                media={audioRef.current}
                url={audioRef.current.src}
                backend="MediaElement"
              />
            }
          />
        }
        timeSinceUpdate={computeTimeSinceUpdate(albumData?.releasedate)}
        albumImageSrc={albumData?.image ?? null}
        tag={"# " + tag}
        tracks={
          <Tracks
            tracksList={albumTracks}
            trackImageSrc={albumData?.image ?? null}
            artistName={albumData?.artist_name}
            playTrack={playTrack}
            currentTrackId={currentTrack?.id}
            isPlaying={isPlaying}
            onCopyLinkClick={handleCopyClick}
          />
        }
        toastContainer={
          <ToastContainer
            toastClassName="text-sm"
            autoClose={2000}
            hideProgressBar
            newestOnTop
            closeOnClick
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="dark"
            transition={Slide}
          />
        }
      />
    </ProtectedRoute>
  );
}
