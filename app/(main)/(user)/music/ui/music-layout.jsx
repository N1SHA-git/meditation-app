export function MusicLayout({ calmAlbums, ambientAlbums, feelGoodAlbums }) {
  const albumsContent = [
    { tag: "Calm", name: calmAlbums },
    { tag: "Ambient", name: ambientAlbums },
    { tag: "Feel Good", name: feelGoodAlbums },
  ];
  return (
    <section className="w-3/4 mx-auto">
      <h1 className="sr-only">Music</h1>
      {albumsContent.map((album) => (
        <div key={album.tag} className="my-16 border-b border-white/20 pb-8 last:mb-20">
          <h2 className="text-3xl font-Alegrya mb-8">{album.tag}</h2>
          {album.name}
        </div>
      ))}
    </section>
  );
}
