import React, { useState, useEffect } from "react";
import CompletionPie from "./Charts/CompletionPie";
import TimeBar from "./Charts/TimeBar";
import ConsistencyLine from "./Charts/ConsistencyLine";
import { getLogs } from "./utils/getLogs"
import { filterByRange } from "./utils/filterByRange";
import {
  aggregateCompletion,
  aggregateTime,
  aggregateConsistency,
} from "./utils/aggregateData";
import "../stylings/dashboard.css"

function Dashboard() {
  const [logs, setLogs] = useState([]);
  const [range, setRange] = useState("week"); // "week" or "month"
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [completionData, setCompletionData] = useState([]);
  const [timeData, setTimeData] = useState([]);
  const [consistencyData, setConsistencyData] = useState([]);

  //  Load logs from localStorage
  useEffect(() => {
    const storedLogs = getLogs();
    setLogs(storedLogs);
  }, []);

  // Filter by week/month
  useEffect(() => {
    const filtered = filterByRange(logs, range);
    setFilteredLogs(filtered);
  }, [logs, range]);

  //Aggregate data for charts
  useEffect(() => {
    setCompletionData(aggregateCompletion(filteredLogs));
    setTimeData(aggregateTime(filteredLogs));
    setConsistencyData(aggregateConsistency(filteredLogs));
  }, [filteredLogs]);

return (
  <div className="dashboard-container">

    {/* Range Selector */}
    <div className="range-selector">
      <label htmlFor="range">View:</label>
      <select
        id="range"
        value={range}
        onChange={(e) => setRange(e.target.value)}
      >
        <option value="week">This Week</option>
        <option value="month">This Month</option>
      </select>
    </div>

    {/* Charts */}
    <div className="charts-wrapper">
      <CompletionPie data={completionData} />
      <TimeBar data={timeData} />
      <ConsistencyLine logs={filteredLogs} />
    </div>

  </div>
);

}

export default Dashboard;
