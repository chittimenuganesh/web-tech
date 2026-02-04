export function getLogs() {
  const raw = localStorage.getItem("dailyLogs");
  const logs = raw ? JSON.parse(raw) : [];

  // logs.forEach(log => {
  //   console.log(
  //     "date:",
  //     log.date,
  //     "| timeSpent:",
  //     log.review?.timeSpent,
  //     "| type:",
  //     typeof log.review?.timeSpent
  //   );
  // });

  return logs;
}
