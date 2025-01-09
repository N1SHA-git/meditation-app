import { useEffect, useState } from "react";
import axios from "axios";

export function useVideo() {
  const [videos, setVideos] = useState([]);
  const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  useEffect(() => {
    let isMounted = true;

    const fetchSearchResults = async () => {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&channelId=UCN4vyryy6O4GlIXcXTIuZQQ&q=meditation&maxResults=9&key=${GOOGLE_API_KEY}`;
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
          setVideos(videos);
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

  return videos;
}
