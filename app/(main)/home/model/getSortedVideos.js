export function getSortedVideos(videos, selectedSort) {
  switch (selectedSort) {
    case "Likes":
      return [...videos].sort((a, b) => b.likes - a.likes);
    case "Views":
      return [...videos].sort((a, b) => b.views - a.views);
    case "Date":
      return [...videos].sort((a, b) => new Date(b.date) - new Date(a.date));
    default:
      return [...videos];
  }
}
