"use client";
import { useState, useEffect } from "react";

export function useMusic(albumId = null) {
  const [
    {
      calmAlbumsData,
      ambientAlbumsData,
      feelGoodAlbumsData,
      albumData,
      albumTracks,
      albumDuration,
    },
    setMusicState,
  ] = useState(() => ({
    calmAlbumsData: [],
    ambientAlbumsData: [],
    feelGoodAlbumsData: [],
    albumData: [],
    albumTracks: [],
    albumDuration: "00:00",
  }));

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const [calmResponse, ambientResponse, feelGoodResponse] =
          await Promise.all([
            fetch("/api/jamendo?tag=calm"),
            fetch("/api/jamendo?tag=ambient"),
            fetch("/api/jamendo?tag=chill"),
          ]);

        const calmData = await calmResponse.json();
        const ambientData = await ambientResponse.json();
        const feelGoodData = await feelGoodResponse.json();

        setMusicState((prevState) => ({
          ...prevState,
          calmAlbumsData: calmData?.results?.map((album) => ({ ...album, tag: "Calm" })) || [],
          ambientAlbumsData: ambientData?.results?.map((album) => ({ ...album, tag: "Ambient" })) || [],
          feelGoodAlbumsData: feelGoodData?.results?.map((album) => ({ ...album, tag: "FeelGood" })) || [],
        }));
        
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, []);

  function getAlbumDuration(tracks) {
    if (!Array.isArray(tracks) || tracks.length === 0) return "00:00";

    const totalSeconds = tracks.reduce(
      (sum, track) => sum + (Number(track.duration) || 0),
      0,
    );
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return hours > 0
      ? `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
      : `${minutes}:${String(seconds).padStart(2, "0")}`;
  }

  useEffect(() => {
    if (!albumId) return;

    const fetchAlbumTracks = async () => {
      try {
        const response = await fetch(`/api/jamendo?albumId=${albumId}`);
        const data = await response.json();
        setMusicState((prevState) => ({
          ...prevState,
          albumData: data.results[0],
          albumTracks: data.results[0]?.tracks || [],
          albumDuration: getAlbumDuration(data.results[0]?.tracks),
        }));
      } catch (error) {
        console.error("Error fetching album tracks:", error);
      }
    };

    fetchAlbumTracks();
  }, [albumId]);

  return {
    calmAlbumsData,
    ambientAlbumsData,
    feelGoodAlbumsData,
    albumData,
    albumTracks,
    albumDuration,
  };
}
