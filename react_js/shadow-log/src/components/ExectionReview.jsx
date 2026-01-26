import { useState } from "react";
import "../stylings/executionReview.css";

function ExecutionReview({ mood, task }) {
  // Possible completion states
  const completions = ["Done", "Partial", "Skipped"];

  // Reasons shown only for Partial / Skipped
  const reasons = [
    "Low Energy",
    "Distractions",
    "Overestimated",
    "External Interruption",
    "Lost Interest"
  ];

  // Local state for review section
  const [completion, setCompletion] = useState(null); // Done / Partial / Skipped
  const [timeSpent, setTimeSpent] = useState("");     // minutes
  const [reason, setReason] = useState(null);          // reason text

  const handleSubmit = () => {
    console.log("INSIDE HANDLE SUBMIT");

    // Debug: check what data we actually have
    console.log({
      completion,
      mood,
      task
    });

    // Safety check — stop if anything important is missing
    if (!completion || !mood || !task) return;

    // Get today's date (yyyy-mm-dd)
    const today = new Date().toISOString().split("T")[0];

    // Build the final daily entry object
    const dailyEntry = {
      date: today,
      mood: {
        name: mood.name,
        intensity: mood.intensity
      },
      task: {
        main: task.main,
        sub: task.sub
      },
      review: {
        completion,
        timeSpent: completion === "Skipped" ? 0 : Number(timeSpent),
        reason: completion === "Done" ? null : reason
      }
    };

    console.log("Daily Entry:", dailyEntry);

    // Read existing logs from localStorage
    const existing = JSON.parse(localStorage.getItem("dailyLogs")) || [];

    // Remove today's old entry if it exists
    const filtered = existing.filter(item => item.date !== today);

    // Add today's new entry
    const updated = [...filtered, dailyEntry];

    // Save back to localStorage
    localStorage.setItem("dailyLogs", JSON.stringify(updated));

    console.log("All Logs:", updated);

    // Reset local review state
    setCompletion(null);
    setTimeSpent("");
    setReason(null);
  };

  return (
    <div className="review-box">
      <p className="review-title">Daily Review</p>

      {/* TASK STATUS */}
      <p className="section-title">Task Status</p>
      <div className="button-group">
        {completions.map(item => (
          <button
            key={item}
            className={`review-btn ${completion === item ? "activated" : ""}`}
            onClick={() => {
              setCompletion(item);   // store Done / Partial / Skipped
              setReason(null);       // reset reason when status changes
              if (item === "Skipped") setTimeSpent("");
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* TIME INPUT — only for Done or Partial */}
      {(completion === "Done" || completion === "Partial") && (
        <div className="time-input">
          <label>Time spent (minutes)</label>
          <input
            type="number"
            min="0"
            value={timeSpent}
            onChange={(e) => setTimeSpent(e.target.value)}
          />
        </div>
      )}

      {/* REASON — only for Partial or Skipped */}
      {(completion === "Partial" || completion === "Skipped") && (
        <>
          <p className="section-title">Reason</p>
          <div className="button-group">
            {reasons.map(item => (
              <button
                key={item}
                className={`review-btn ${reason === item ? "activated" : ""}`}
                onClick={() => setReason(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </>
      )}

      {/* SUBMIT BUTTON */}
      <button
        className="submit-btn"
        onClick={() => {
          console.log("btn clicked");
          handleSubmit();
        }}
      >
        Submit Review
      </button>
    </div>
  );
}

export default ExecutionReview;
