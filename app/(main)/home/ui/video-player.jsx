export function VideoPlayer({ videoId, onClick }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg"
      onClick={onClick}
    >
      <div
        className="relative w-11/12 max-w-4xl bg-black rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Остановка всплытия клика
      >
        <iframe
          className="w-full h-[31.5rem]"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
