import { useState } from "react";
import Intensity from "../sub_components/Intensity";
import "../stylings/emotionSelector.css";

function EmotionSelector({ onNext }) {
  // List of available moods
  const moods = [
    "Calm",
    "Focused",
    "Motivated",
    "Anxious",
    "Irritated",
    "Drained",
    "Neutral",
  ];

  // Currently selected mood (string)
  const [selectedMood, setSelectedMood] = useState("");

  // Mood intensity (number or null)
  const [intensity, setIntensity] = useState(null);

  // Stores submitted mood data to show summary view
  const [submittedData, setSubmittedData] = useState(null);

  // Runs when "Next" button is clicked
  const handleNext = () => {
    // Prevent moving forward if data is incomplete
    if (!selectedMood || intensity === null) return;

    // Object that will be sent to App component
    const data = {
      name: selectedMood,
      intensity: intensity,
    };

    // Store data locally to show summary UI
    setSubmittedData({
      mood: selectedMood,
      intensity: intensity,
    });

    // Send mood data to parent (App)
    onNext?.(data);
  };

  return (
    <div className="box">
      {/* If mood not yet submitted → show selection UI */}
      {!submittedData ? (
        <>
          <p className="title">CHOOSE MOOD :</p>

          {/* Mood selection buttons */}
          <div className="mood-container">
            {moods.map((mood) => (
              <button
                key={mood}
                type="button"
                className={`mood-card ${
                  selectedMood === mood ? "activated" : ""
                }`}
                onClick={() => setSelectedMood(mood)} // store selected mood
              >
                {mood}
              </button>
            ))}
          </div>

          {/* Show intensity slider only after mood is chosen */}
          {selectedMood && (
            <Intensity
              value={intensity}          // current intensity value
              onChange={setIntensity}    // update intensity
            />
          )}

          {/* Next button */}
          <button
            className="btn-next"
            type="button"
            onClick={handleNext}
            disabled={!selectedMood || intensity === null} // safety
          >
            Next
          </button>
        </>
      ) : (
        /* Summary view after submission */
        <div className="summary">
          <div className="summary-item">
            <p className="label">Mood:</p>
            <p className="value">{submittedData.mood}</p>
          </div>
          <div className="summary-item">
            <p className="label">Intensity:</p>
            <p className="value">{submittedData.intensity}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmotionSelector;
