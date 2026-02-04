import React, { useEffect, useState } from "react";
import { getLogs } from './utils/getLogs'
import generateYearGrid from "./utils/generateYearGrid";
import getIntensity from "./utils/getIntensity";
import "../stylings/analytics.css";

function Analytics() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs(getLogs());
  }, []);

  const days = generateYearGrid(logs);

  return (
    <div className="analytics-page">
      <h2 className="analytics-title">Activity Overview</h2>

      <div className="heatmap-grid">
        {days.map((day) => (
          <div
            key={day.date}
            className={`heat-box ${getIntensity(day.log)}`}
            title={
              day.log
                ? `${day.log.review.timeSpent} min · ${day.log.review.completion}`
                : "No activity"
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Analytics;
