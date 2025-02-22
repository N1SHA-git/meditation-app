import Image from "next/image";
export function AlbumLayout({
  playButton,
  toastContainer,
  artistName,
  albumName,
  timeSinceUpdate,
  roundAndWavesurfer,
  tag,
  albumImageSrc,
  tracks,
}) {
  return (
    <>
      <div className="bg-gradient-to-r from-[#526D64] to-[#2b3632] flex justify-between p-7 w-[85%] mx-auto mt-2">
        <div className="flex flex-col justify-between">
          <div className="flex gap-2 items-center">
            {playButton}
            <div className="flex flex-col flex-none items-start gap-2">
              <p className="bg-[#2b3632] px-2 py-1 flex-none max-w-[530px]">
                {albumName}
              </p>
              <p className="bg-[#2b3632] px-2 max-w-[530px]">{artistName}</p>
            </div>
          </div>
          {roundAndWavesurfer}
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-end gap-4">
            <p>{timeSinceUpdate}</p>
            <p className="bg-slate-400 rounded-xl px-2">{tag}</p>
          </div>
          {albumImageSrc ? (
            <Image
              src={albumImageSrc}
              alt="album image"
              width={340}
              height={340}
              priority
            />
          ) : (
            <div className="w-[340px] aspect-square bg-white/70"></div>
          )}
        </div>
      </div>
      {tracks}
      {toastContainer}
    </>
  );
}
