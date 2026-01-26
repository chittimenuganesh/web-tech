import { useState } from "react";
import EmotionSelector from "./components/EmotionSelector";
import TaskEntry from "./components/TaskEntry";
import ExecutionReview from "./components/ExectionReview";

function App() {
  const [showTask, setShowTask] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const [moodData, setMoodData] = useState(null);
  const [taskData, setTaskData] = useState(null);

  return (
    <div className="app-container">
      <EmotionSelector
        onNext={(data) => {
          setMoodData(data);
          setShowTask(true);
        }}
      />

      {showTask && (
        <TaskEntry
          onSaveTask={(data) => setTaskData(data)}
          onNext={() => setShowReview(true)}
        />
      )}

      {showReview && moodData && taskData && (
        <ExecutionReview mood={moodData} task={taskData} />
      )}
    </div>
  );
}

export default App;
