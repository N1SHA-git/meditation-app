"use client";
import { useAudioPlayer } from "@/app/context/AudioPlayerContext";

export default function GlobalAudioPlayer() {
  const { currentTrack, isPlaying, playTrack } = useAudioPlayer();

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-between items-center mt-10">
      <div>
        <h3>{currentTrack.name}</h3>
        <p className="text-sm">{currentTrack.artist_name}</p>
      </div>
      <button
        onClick={() => playTrack(currentTrack)}
        className="bg-blue-500 px-4 py-2 rounded"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
