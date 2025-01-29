"use client";
import { useState, useEffect } from "react";

export function useMusic() {
  const [
    { calmAlbumsData, ambientAlbumsData, feelGoodAlbumsData },
    setMusicState,
  ] = useState(() => ({
    calmAlbumsData: [],
    ambientAlbumsData: [],
    feelGoodAlbumsData: [],
  }));

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const [calmResponse, ambientResponse, feelGoodResponse] =
          await Promise.all([
            fetch("/api/jamendo?limit=10&tags=calm"),
            fetch("/api/jamendo?limit=10&tags=ambient"),
            fetch("/api/jamendo?limit=10&tags=feelGood"),
          ]);

        const calmData = await calmResponse.json();
        const ambientData = await ambientResponse.json();
        const feelGoodData = await feelGoodResponse.json();

        setMusicState((prevState) => ({
          ...prevState,
          calmAlbumsData: calmData.results || [],
          ambientAlbumsData: ambientData.results || [],
          feelGoodAlbumsData: feelGoodData.results || [],
        }));
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, []);

  return {
    calmAlbumsData,
    ambientAlbumsData,
    feelGoodAlbumsData,
  };
}
