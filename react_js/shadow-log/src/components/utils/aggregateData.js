// --------------------
// Aggregate completion status for Pie chart
// --------------------
export function aggregateCompletion(logs) {
  const firstByDate = {};
  logs.forEach(log => {
    if (!firstByDate[log.date]) {
      firstByDate[log.date] = log; // keep first submission per date
    }
  });

  const counts = { Done: 0, Partial: 0, Skipped: 0 };
  Object.values(firstByDate).forEach(log => {
    const status = log.review?.completion;
    if (status) counts[status]++;
  });

  return Object.entries(counts).map(([name, value]) => ({ name, value }));
}

// --------------------
// Aggregate time spent for Bar chart
// --------------------
export function aggregateTime(logs) {
  const firstByDate = {};
  logs.forEach(log => {
    if (!firstByDate[log.date]) {
      firstByDate[log.date] = log; // first submission only
    }
  });

  return Object.values(firstByDate)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(log => ({
      date: log.date,
      time: log.review?.timeSpent || 0,
    }));
}

// --------------------
// Aggregate consistency for Line chart
// --------------------
export function aggregateConsistency(logs) {
  const firstByDate = {};
  logs.forEach(log => {
    if (!firstByDate[log.date]) {
      firstByDate[log.date] = log; // first submission only
    }
  });

  return Object.values(firstByDate)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(log => ({ date: log.date, count: 1 }));
}
