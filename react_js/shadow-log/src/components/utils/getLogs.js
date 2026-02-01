export function getLogs() {
  const logs = JSON.parse(localStorage.getItem("dailyLogs")) || [];
  return logs;
}
