import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "../../stylings/completionPie.css";

function CompletionPie({ data }) {
  const COLORS = ["#4fe27f", "#ffb84f", "#ff6b6b"]; 
  // completed, partial, skipped

  return (
    <div className="pie-card">
      <h3 className="pie-title">Task Completion</h3>

      <div className="pie-content">
        {/* Chart */}
        <div className="pie-chart">
          <PieChart width={260} height={260}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              innerRadius={45}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#f4f4f6",
                border: "none",
                borderRadius: "8px",
                color: "#000",
              }}
            />
          </PieChart>
        </div>

        {/* Legend */}
        <div className="pie-legend">
          <div className="pie-legend-item">
            <span className="dot green"></span>
            Completed
          </div>
          <div className="pie-legend-item">
            <span className="dot orange"></span>
            Partial
          </div>
          <div className="pie-legend-item">
            <span className="dot red"></span>
            Skipped
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletionPie;
