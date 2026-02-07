export default function generateMonthGrid(logs, year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startOffset = firstDay.getDay(); // Sun = 0
  const totalDays = lastDay.getDate();

  const grid = [];

  // Empty slots before month starts
  for (let i = 0; i < startOffset; i++) {
    grid.push({ empty: true });
  }

  // Actual days
  for (let d = 1; d <= totalDays; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const log = logs.find(l => l.date === dateStr);

    grid.push({
      day: d,
      fullDate: dateStr,
      log
    });
  }

  return grid;
}
