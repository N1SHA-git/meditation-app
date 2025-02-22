export function computeTimeOfTracks(seconds) {
  seconds = Math.round(seconds);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");
  return minutesString + ":" + secondsString;
}
