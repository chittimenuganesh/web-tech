export function mapLogsToDates(dates, logs) {
  const logMap = {};
  logs.forEach(log => {
    logMap[log.date] = log;
  });

  return dates.map(date => {
    const key = date.toISOString().slice(0, 10);
    return {
      date: key,
      log: logMap[key] || null
    };
  });
}
