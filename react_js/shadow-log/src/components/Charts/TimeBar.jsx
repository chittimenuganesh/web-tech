import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "../../stylings/timeBar.css";

function TimeBar({ logs }) {
  return (
    <div className="timebar-card">
      <h3 className="timebar-title">Time Spent on Tasks</h3>

      {/* Chart */}
      <div className="timebar-chart">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={logs}>
            <CartesianGrid stroke="#e5e5eb" strokeDasharray="3 3" />
            <XAxis dataKey="task" stroke="#555" />
            <YAxis stroke="#555" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f4f4f6",
                border: "none",
                borderRadius: "8px",
                color: "#000",
              }}
            />
            <Bar dataKey="hours" fill="#ffb84f" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend below */}
      <div className="timebar-legend">
        <div className="timebar-legend-item">
          <span className="legend-dot orange"></span>
          Hours Spent
        </div>
      </div>
    </div>
  );
}

export default TimeBar;
