"use client";

import { useMusic } from "@/app/hooks/use-music";
import { MusicLayout } from "./ui/music-layout";
import { AlbumList } from "./ui/album-list";
import ProtectedRoute from "@/app/shared/protectedRoute";

export default function MusicPage() {
  const { calmAlbumsData, ambientAlbumsData, feelGoodAlbumsData } = useMusic();
  const isLoading =
    !calmAlbumsData?.length ||
    !ambientAlbumsData?.length ||
    !feelGoodAlbumsData?.length;

  return (
    <ProtectedRoute>
      <MusicLayout
        calmAlbums={<AlbumList albums={calmAlbumsData || []} />}
        ambientAlbums={<AlbumList albums={ambientAlbumsData || []} />}
        feelGoodAlbums={<AlbumList albums={feelGoodAlbumsData || []} />}
      />
    </ProtectedRoute>
  );
}
