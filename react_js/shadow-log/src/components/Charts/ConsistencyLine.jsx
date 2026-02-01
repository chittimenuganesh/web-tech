import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import "../../stylings/consistencyLine.css";

function ConsistencyLine({ logs }) {
  return (
    <div className="consistency-card">
      <h3 className="consistency-title">Consistency Over Time</h3>

      {/* Chart */}
      <div className="consistency-chart">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={logs}>
            <CartesianGrid stroke="#e5e5eb" strokeDasharray="3 3" />
            <XAxis dataKey="date" stroke="#555" />
            <YAxis stroke="#555" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f4f4f6",
                borderRadius: "8px",
                border: "none",
                color: "#000",
              }}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#4f9eff"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend (below chart) */}
      <div className="consistency-legend">
        <div className="consistency-legend-item">
          <span className="legend-dot blue"></span>
          Consistency Score
        </div>
      </div>
    </div>
  );
}

export default ConsistencyLine;
