export function Timer({
  timer,
  isStarted,
  restartButton,
  startButton,
  toggleButton,
  resetButton,
}) {
  const seconds = Math.ceil(timer / 1000);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <span className="text-5xl text-center">
        {minutesString} : {secondsString}
      </span>
      {isStarted ? (
        <div className="flex justify-between items-center gap-5">
          {restartButton} {toggleButton} {resetButton}
        </div>
      ) : (
        startButton
      )}
    </div>
  );
}
