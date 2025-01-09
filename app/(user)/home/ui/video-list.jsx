export function VideoList({ videoCollection }) {
  return (
    <ul className="grid grid-cols-3 place-items-center gap-10">
      {videoCollection.map((video, index) => (
        <li key={index}>{video}</li>
      ))}
    </ul>
  );
}
