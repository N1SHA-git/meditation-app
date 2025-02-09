export function getTimeSinceUpdate(dateString) {
  const inputDate = new Date(dateString);
  if (isNaN(inputDate)) return ;
  const currentDate = new Date();

  const yearsDiff = currentDate.getFullYear() - inputDate.getFullYear();
  const monthsDiff = currentDate.getMonth() - inputDate.getMonth();
  const daysDiff = currentDate.getDay() - inputDate.getDay();

  let result = "Updated ";

  if (yearsDiff > 0) {
    result += `${yearsDiff} year${yearsDiff > 1 ? "s" : ""}`;
  } else {
    monthsDiff > 0
      ? (result += ` ${monthsDiff} month${monthsDiff > 1 ? "s" : ""}`)
      : (result += ` ${daysDiff} day${daysDiff > 1 ? "s" : ""}`);
  }

  return result + " ago";
}
