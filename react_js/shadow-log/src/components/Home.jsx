import { useShadowLog } from "../context/ShadowLogContext";
import EmotionSelector from "../sub_components/EmotionSelector";
import TaskEntry from "../sub_components/TaskEntry";
import ExecutionReview from '../sub_components/ExectionReview'
import "../stylings/home.css";

function Home() {
  const {
    step,
    setStep,
    mood,
    task,
    review,
    resetDay,
  } = useShadowLog();

  return (
    <div className="home-container">
      {/* INFO*/}
      {step === "idle" && (
        <div className="home-hero">
          <h1>ShadowLog</h1>
          <p>
            Track your mood, focus on what matters,
            and reflect honestly.
          </p>

          <button
            className="btn-start"
            onClick={() => setStep("emotion")}
          >
            Get Started
          </button>
        </div>
      )}

      {/* EMOTION */}
      {(step === "emotion" || mood) && (
        <EmotionSelector />
      )}

      {/* TASK */}
      {(step === "task" || task) && (
        <TaskEntry />
      )}

      {/* REVIEW */}
      {(step === "review" || review) && (
        <ExecutionReview />
      )}

      {/* DONE ACTIONS */}
      {step === "done" && (
        <div className="day-actions">
          <button
            className="btn-secondary"
            onClick={resetDay}
          >
            Log Another Day
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
