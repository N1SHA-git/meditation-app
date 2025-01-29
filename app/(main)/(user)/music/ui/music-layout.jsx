export function MusicLayout({ calmAlbums, ambientAlbums, feelGoodAlbums }) {
  const albums = [
    { tag: "Calm", name: calmAlbums },
    { tag: "Ambient", name: ambientAlbums },
    { tag: "Feel Good", name: feelGoodAlbums },
  ];
  return (
    <section className="w-9/12 mx-auto">
      <h1 className="sr-only">Music</h1>
      {albums.map((album, index) => (
        <div key={index}>
          <div className="my-16">
            <h2 className="text-3xl font-Alegrya mb-6">{album.tag}</h2>
            {album.name}
          </div>
          <div className="w-full h-px bg-white/20 last:mb-16"></div>
        </div>
      ))}
    </section>
  );
}
