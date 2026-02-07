import React, { useEffect, useState } from "react";
import { getLogs } from "./utils/getLogs";
import generateMonthHeatmapGrid from "./utils/generateMonthHeatmapGrid";
import getIntensity from "./utils/getIntensity";
import "../stylings/analytics.css";

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

export default function Analytics() {
  const [logs, setLogs] = useState([]);
  const [tooltip, setTooltip] = useState(null);

  const year = new Date().getFullYear();

  useEffect(() => {
    setLogs(getLogs());
  }, []);

  return (
    <div className="analytics-page">
      <h1 className="year-title">{year}</h1>

      <div className="months-grid">
        {MONTHS.map((month, index) => {
          const days = generateMonthHeatmapGrid(logs, year, index);

          return (
            <div key={month} className="month-card">
              <div className="month-name">{month}</div>

              <div className="month-calendar">
                {days.map((day, i) =>
                  day.empty ? (
                    <div key={i} className="heat-box empty" />
                  ) : (
                    <div
                      key={day.fullDate}
                      className={`heat-box ${getIntensity(day.log)}`}
                      onMouseEnter={(e) => {
                        if (!day.log) return;
                        setTooltip({
                          x: e.clientX,
                          y: e.clientY,
                          day,
                        });
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    />
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>

      {tooltip && (
        <div
          className="tooltip"
          style={{ top: tooltip.y + 12, left: tooltip.x + 12 }}
        >
          <strong>{tooltip.day.fullDate}</strong>
          <div>{tooltip.day.log?.task?.title}</div>
          <div>
            {tooltip.day.log?.review?.timeSpent} min ·{" "}
            {tooltip.day.log?.review?.completion}
          </div>
        </div>
      )}
    </div>
  );
}
