import { useState } from "react";
import "../stylings/taskEntry.css";

function TaskEntry({ onNext, onSaveTask }) {
  // Stores main task text
  const [task, setTask] = useState("");

  // Stores sub-task / description text
  const [subTask, setSubTask] = useState("");

  // Controls whether form or summary is shown
  const [submitted, setSubmitted] = useState(false);

  // Runs when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    // Stop if inputs are empty
    if (!task || !subTask) return;

    // Send task data to parent component (App)
    if (onSaveTask) {
      onSaveTask({
        main: task,
        sub: subTask,
      });
    }

    // Lock the form and show summary
    setSubmitted(true);

    // Move to next step (ExecutionReview)
    onNext?.();
  };

  return (
    <div className="entry-container">
      {/* If not submitted → show input form */}
      {!submitted ? (
        <form className="entry-form" onSubmit={handleSubmit}>
          <p className="title">ENTER TASK</p>

          {/* Task inputs wrapper */}
          <div className="inputs-wrapper">
            {/* Main task input */}
            <input
              type="text"
              placeholder="Main Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="entry-input"
            />

            {/* Sub task / description input */}
            <textarea
              placeholder="Sub Task"
              value={subTask}
              onChange={(e) => setSubTask(e.target.value)}
              className="entry-input"
              rows={6}
            />
          </div>

          {/* Button aligned using CSS */}
          <div className="button-wrapper">
            <button className="btn-next" type="submit">
              Next
            </button>
          </div>
        </form>
      ) : (
        /* After submission → show summary */
        <div className="summary">
          <div className="summary-item">
            <p className="label">Main Task:</p>
            <p className="value">{task}</p>
          </div>

          <div className="summary-item">
            <p className="label">Sub Task:</p>
            <p className="value">{subTask}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskEntry;
