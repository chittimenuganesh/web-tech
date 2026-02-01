export function filterByRange(logs, range = "week") {
  const today = new Date();

  return logs.filter((log) => {
    const logDate = new Date(log.date);
    const diff = (today - logDate) / (1000 * 60 * 60 * 24); // difference in days
    if (range === "week") return diff < 7;
    if (range === "month") return diff < 30;
    return true; // fallback, all logs
  });
}
