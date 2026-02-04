export default function getIntensity(log) {
  if (!log || !log.review) return "level-0";

  const mins = Number(log.review.timeSpent || 0);

  if (mins >= 60) return "level-4";
  if (mins >= 30) return "level-3";
  if (mins >= 10) return "level-2";
  if (mins > 0) return "level-1";

  return "level-0";
}
