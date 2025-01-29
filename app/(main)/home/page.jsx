"use client";

import { UiButton } from "@/app/shared/uikit/ui-button";
import { HomePageLayout } from "./ui/home-page-layout";
import { CalmIcon } from "@/public/icons/calm-icon";
import { RelaxIcon } from "@/public/icons/relax-icon";
import { AnxiousIcon } from "@/public/icons/anxious-icon";
import { FocusIcon } from "@/public/icons/focus-icon";
import { HappinessIcon } from "@/public/icons/happiness-icon";
import { WildIcon } from "@/public/icons/wild-icon";
import { MoodIcon } from "./ui/mood-icon";
import { Header } from "../header/header";
import { VideoList } from "./ui/video-list";
import { VideoCard } from "./ui/video-card";
import { useVideo } from "@/app/hooks/use-video";
import { VideoPlayer } from "./ui/video-player";
import Link from "next/link";
import ProtectedRoute from "@/app/shared/protectedRoute";
import { Filter } from "./ui/filter";
import { getSortedVideos } from "@/app/(main)/home/model/getSortedVideos";

// Массив с данными для иконок
const moodIcons = [
  { icon: <CalmIcon />, name: "Calm" },
  { icon: <RelaxIcon />, name: "Relax" },
  { icon: <FocusIcon />, name: "Focus" },
  { icon: <AnxiousIcon />, name: "Anxious" },
  { icon: <HappinessIcon />, name: "Happy" },
  { icon: <WildIcon />, name: "Wild" },
];
export default function HomePage() {
  const {
    videos,
    isModalOpen,
    selectedVideo,
    handleModalClick,
    isSortOpen,
    selectedSort,
    toggleSort,
    selectSort,
  } = useVideo();
  
  const videoData = videos.map((video) => ({
    id: video.id,
    youtubeThumbnail: video.snippet.thumbnails?.high?.url,
    title: video.snippet.title,
    views: video.statistics.viewCount,
    likes: video.statistics.likeCount,
    date: video.snippet.publishedAt,
  }));
  const sortedVideoData = getSortedVideos(videoData, selectedSort);

  return (
    <ProtectedRoute>
      <HomePageLayout
        header={<Header />}
        button={
          <Link href="/meditation">
            <UiButton className="py-3 px-10 rounded-3xl">
              Start meditation
            </UiButton>
          </Link>
        }
        moodIcons={moodIcons.map(({ icon, name }) => (
          <MoodIcon key={name} moodIcon={icon} moodName={name} />
        ))}
        filter={
          <Filter
            isOpen={isSortOpen}
            selectOption={selectSort}
            selectedOption={selectedSort}
            toggleSelect={toggleSort}
          />
        }
        videoList={
          <VideoList
            videoCollection={sortedVideoData.map(
              ({ id, youtubeThumbnail, title }) => (
                <VideoCard
                  key={id}
                  youtubeThumbnail={youtubeThumbnail}
                  title={title}
                  onClick={() => handleModalClick(id)}
                />
              ),
            )}
          />
        }
        isModalOpen={isModalOpen}
        videoPlayer={
          <VideoPlayer videoId={selectedVideo} onClick={handleModalClick} />
        }
      />
    </ProtectedRoute>
  );
}
