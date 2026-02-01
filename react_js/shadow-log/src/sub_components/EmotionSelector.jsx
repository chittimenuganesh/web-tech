import { useState } from "react";
import { useShadowLog } from "../context/ShadowLogContext";
import Intensity from "../sub_components/Intensity";
import "../stylings/emotionSelector.css";

function EmotionSelector() {
  // GLOBAL STATE
  const { mood, setMood, setStep } = useShadowLog();

  // LOCAL UI STATE
  const [selectedMood, setSelectedMood] = useState(mood?.name || "");
  const [intensity, setIntensity] = useState(mood?.intensity ?? null);
  const [submitted, setSubmitted] = useState(!!mood);

  // Available moods
  const moods = [
    "Calm",
    "Focused",
    "Motivated",
    "Anxious",
    "Irritated",
    "Drained",
    "Neutral",
  ];

  // NEXT STEP
  const handleNext = () => {
    if (!selectedMood || intensity === null) return;

    const data = {
      name: selectedMood,
      intensity,
    };

    // SAVE TO GLOBAL STATE
    setMood(data);

    // LOCK UI INTO SUMMARY MODE
    setSubmitted(true);

    // MOVE FLOW FORWARD
    setStep("task");
  };

  return (
    <div className="box">
      {!submitted ? (
        <>
          <p className="title">CHOOSE MOOD :</p>

          {/* MOOD BUTTONS */}
          <div className="mood-container">
            {moods.map((moodItem) => (
              <button
                key={moodItem}
                type="button"
                className={`mood-card ${
                  selectedMood === moodItem ? "activated" : ""
                }`}
                onClick={() => setSelectedMood(moodItem)}
              >
                {moodItem}
              </button>
            ))}
          </div>

          {/* INTENSITY */}
          {selectedMood && (
            <Intensity
              value={intensity}
              onChange={setIntensity}
            />
          )}

          {/* NEXT */}
          <button
            className="btn-next"
            type="button"
            onClick={handleNext}
            disabled={!selectedMood || intensity === null}
          >
            Next
          </button>
        </>
      ) : (
        /* SUMMARY VIEW */
        <div className="summary">
          <div className="summary-item">
            <p className="label">Mood:</p>
            <p className="value">{mood.name}</p>
          </div>

          <div className="summary-item">
            <p className="label">Intensity:</p>
            <p className="value">{mood.intensity}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmotionSelector;
