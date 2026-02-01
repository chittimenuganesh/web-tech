import { useState } from "react";
import { useShadowLog } from "../context/ShadowLogContext";
import "../stylings/executionReview.css";

function ExecutionReview() {
  // GLOBAL STATE
  const { mood, task, review, setReview, setStep } = useShadowLog();

  // LOCAL UI STATE
  const [completion, setCompletion] = useState(review?.completion || null);
  const [timeSpent, setTimeSpent] = useState(review?.timeSpent || "");
  const [reason, setReason] = useState(review?.reason || null);
  const [submitted, setSubmitted] = useState(!!review);

  const completions = ["Done", "Partial", "Skipped"];
  const reasons = [
    "Low Energy",
    "Distractions",
    "Overestimated",
    "External Interruption",
    "Lost Interest",
  ];

  const handleSubmit = () => {
    if (!completion || !mood || !task) return;

    const today = new Date().toISOString().split("T")[0];

    const reviewData = {
      completion,
      timeSpent: completion === "Skipped" ? 0 : Number(timeSpent),
      reason: completion === "Done" ? null : reason,
    };

    // SAVE REVIEW GLOBALLY
    setReview(reviewData);

    // BUILD FINAL DAILY ENTRY
    const dailyEntry = {
      date: today,
      mood,
      task,
      review: reviewData,
    };

    // SAVE TO LOCAL STORAGE
    const existing =
      JSON.parse(localStorage.getItem("dailyLogs")) || [];

    const filtered = existing.filter(
      (item) => item.date !== today
    );

    localStorage.setItem(
      "dailyLogs",
      JSON.stringify([...filtered, dailyEntry])
    );

    setSubmitted(true);
    setStep("done");
  };

  return (
    <div className="review-box">
      {!submitted ? (
        <>
          <p className="review-title">Daily Review</p>

          {/* STATUS */}
          <p className="section-title">Task Status</p>
          <div className="button-group">
            {completions.map((item) => (
              <button
                key={item}
                className={`review-btn ${
                  completion === item ? "activated" : ""
                }`}
                onClick={() => {
                  setCompletion(item);
                  setReason(null);
                  if (item === "Skipped") setTimeSpent("");
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* TIME */}
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

          {/* REASON */}
          {(completion === "Partial" || completion === "Skipped") && (
            <>
              <p className="section-title">Reason</p>
              <div className="button-group">
                {reasons.map((item) => (
                  <button
                    key={item}
                    className={`review-btn ${
                      reason === item ? "activated" : ""
                    }`}
                    onClick={() => setReason(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </>
          )}

          <button className="submit-btn" onClick={handleSubmit}>
            Submit Review
          </button>
        </>
      ) : (
        /* SUMMARY VIEW — ONLY REVIEW DATA */
        <div className="summary">

          <div className="summary-item">
            <p className="label">Status</p>
            <p className="value">{review.completion}</p>
          </div>

          {review.timeSpent > 0 && (
            <div className="summary-item">
              <p className="label">Time Spent</p>
              <p className="value">{review.timeSpent} mins</p>
            </div>
          )}

          {review.reason && (
            <div className="summary-item">
              <p className="label">Reason</p>
              <p className="value">{review.reason}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ExecutionReview;
