"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export function useVideo() {
  const [
    { isModalOpen, selectedVideo, videos, isSortOpen, selectedSort },
    setVideoState,
  ] = useState(() => {
    const savedSelectedSort = localStorage.getItem("selectedSort");
    return {
      isModalOpen: false,
      selectedVideo: null,
      videos: [],
      isSortOpen: false,
      selectedSort: savedSelectedSort ? JSON.parse(savedSelectedSort) : "Views",
    };
  });
  const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const videoCount = 9;

  useEffect(() => {
    let isMounted = true;

    const fetchSearchResults = async () => {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&channelId=UCN4vyryy6O4GlIXcXTIuZQQ&q=meditation&order=viewCount&maxResults=${videoCount}&key=${GOOGLE_API_KEY}`;
      const response = await axios.get(url);
      return (
        response.data.items?.map((item) => item.id?.videoId).filter(Boolean) ||
        []
      );
    };

    const fetchVideoDetails = async (videoIds) => {
      const videoDetailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds.join(
        ",",
      )}&key=${GOOGLE_API_KEY}`;
      const response = await axios.get(videoDetailsUrl);
      return response.data.items || [];
    };

    const fetchVideos = async () => {
      try {
        const videoIds = await fetchSearchResults();
        const videos = await fetchVideoDetails(videoIds);
        if (isMounted) {
          setVideoState((lastVideoState) => ({
            ...lastVideoState,
            videos: videos,
          }));
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();

    return () => {
      isMounted = false;
    };
  }, [GOOGLE_API_KEY]);

  const handleModalClick = (id) => {
    setVideoState((lastVideoState) => ({
      ...lastVideoState,
      isModalOpen: !lastVideoState.isModalOpen,
      selectedVideo: id,
    }));
  };

  function toggleSort() {
    setVideoState((lastVideoState) => {
      return {
        ...lastVideoState,
        isSortOpen: !lastVideoState.isSortOpen,
      };
    });
  }

  function selectSort(sort) {
    setVideoState((lastVideoState) => ({
      ...lastVideoState,
      selectedSort: sort,
      isSortOpen: false,
    }));
  }

  useEffect(() => {
    localStorage.setItem("selectedSort", JSON.stringify(selectedSort));
  }, [selectedSort]);

  return {
    videos,
    isModalOpen,
    selectedVideo,
    handleModalClick,
    isSortOpen,
    selectedSort,
    toggleSort,
    selectSort,
  };
}
