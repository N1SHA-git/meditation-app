"use client";
import { useParams } from "next/navigation";
import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";

const AudioPlayerContext = createContext();

export function AudioPlayerProvider({ children }) {
  const audioRef = useRef(new Audio());
  if (!audioRef.current) audioRef.current = new Audio();
  const { id } = useParams();

  const [
    {
      isPlaying,
      isStarted,
      currentTrack,
      currentTime,
      fullTime,
      trackList,
      isLoop,
    },
    setAudioPlayer,
  ] = useState({
    isPlaying: false,
    isStarted: false,
    currentTrack: null,
    currentTime: 0,
    fullTime: 0,
    trackList: null,
    isLoop: false,
  });

  useEffect(() => {
    if (currentTrack?.album_id === id || !id) {
      setAudioPlayer((prev) => ({ ...prev, isStarted: true }));
    } else
      setAudioPlayer((prev) => ({
        ...prev,
        isStarted: false,
      }));
  }, [id, currentTrack]);

  const playTrack = useCallback(
    (track, newTrackList = []) => {
      if (currentTrack?.id === track.id) {
        if (isPlaying) {
          audioRef.current.pause();
          setAudioPlayer((prev) => ({ ...prev, isPlaying: false }));
        } else {
          audioRef.current.play();
          setAudioPlayer((prev) => ({ ...prev, isPlaying: true }));
        }
        return;
      }
      setAudioPlayer((prev) => ({
        ...prev,
        fullTime: 0,
        trackList: newTrackList ?? prev.trackList,
      }));
      audioRef.current.src = track.audio;
      audioRef.current.load();

      audioRef.current.addEventListener("canplay", function handleCanPlay() {
        audioRef.current.play();
        setAudioPlayer((prev) => {
          const isNewAlbum =
            prev.trackList?.[0]?.album_id !== newTrackList?.[0]?.album_id;
          return {
            ...prev,
            isPlaying: true,
            isStarted: !isNewAlbum,
            currentTrack: track,
            fullTime: audioRef.current.duration,
          };
        });
        audioRef.current.removeEventListener("canplay", handleCanPlay);
      });
    },
    [currentTrack, isPlaying, setAudioPlayer, audioRef],
  );

  const playNextTrack = useCallback(
    (shouldLoop = true) => {
      setAudioPlayer((prev) => {
        if (!prev.trackList || prev.trackList.length === 0) return prev;

        const currentIndex = prev.trackList.findIndex(
          (t) => t.id === prev.currentTrack?.id,
        );
        const nextTrack = prev.trackList[currentIndex + 1] || null;

        if (nextTrack) {
          playTrack(nextTrack, prev.trackList);
        } else if (shouldLoop) {
          playTrack(prev.trackList[0], prev.trackList);
        } else {
          return { ...prev, isPlaying: false };
        }

        return prev;
      });
    },
    [playTrack],
  );

  const playPrevTrack = useCallback(() => {
    setAudioPlayer((prev) => {
      if (!prev.trackList || prev.trackList.length === 0) return prev;

      const currentIndex = prev.trackList.findIndex(
        (t) => t.id === prev.currentTrack?.id,
      );
      const prevTrack =
        prev.trackList[currentIndex - 1] ||
        prev.trackList[prev.trackList.length - 1];

      if (prevTrack) {
        playTrack(prevTrack, prev.trackList);
      }

      return prev;
    });
  }, [playTrack]);

  const handleLoopChange = () => {
    setAudioPlayer((prev) => ({ ...prev, isLoop: !prev.isLoop }));
  };

  useEffect(() => {
    const handleTrackEnd = () => playNextTrack(isLoop);

    audioRef.current.addEventListener("ended", handleTrackEnd);
    return () => {
      audioRef.current.removeEventListener("ended", handleTrackEnd);
    };
  }, [playNextTrack, isLoop]);

  useEffect(() => {
    const updateTime = () => {
      setAudioPlayer((prev) => ({
        ...prev,
        currentTime: audioRef.current.currentTime,
      }));
    };

    audioRef.current.addEventListener("timeupdate", updateTime);
    return () => {
      audioRef.current.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  return (
    <AudioPlayerContext.Provider
      value={{
        playTrack,
        isPlaying,
        isStarted,
        currentTrack,
        currentTime,
        fullTime,
        audioRef,
        playPrevTrack,
        playNextTrack,
        handleLoopChange,
        isLoop,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  return useContext(AudioPlayerContext);
}
