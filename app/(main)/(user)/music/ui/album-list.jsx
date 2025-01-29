import Image from "next/image";

export function AlbumList({ albums }) {
  return (
    <ul className="flex">
      {albums.map((album) => (
        <li key={album.id}>
          <div>
            <Image
              src={album.image}
              width="300"
              height="300"
              alt={album.name}
              className="w-full aspect-square"
              priority
            />
            <h3>{album.name}</h3>
            <p className="text-gray-600">{album.artist_name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
