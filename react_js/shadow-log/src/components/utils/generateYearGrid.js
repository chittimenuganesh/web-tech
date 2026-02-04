export default function generateYearGrid(logs) {
  const logMap = {};
  logs.forEach((log) => {
    logMap[log.date] = log;
  });

  const days = [];
  const today = new Date();

  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];

    days.push({
      date: dateStr,
      log: logMap[dateStr] || null,
    });
  }

  return days;
}
