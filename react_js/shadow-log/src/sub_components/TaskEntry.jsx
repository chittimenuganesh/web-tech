import { useState } from "react";
import { useShadowLog } from "../context/ShadowLogContext";
import "../stylings/taskEntry.css";

function TaskEntry() {
  // GLOBAL STATE
  const { task, setTask, setStep } = useShadowLog();

  // LOCAL UI STATE
  const [mainTask, setMainTask] = useState(task?.main || "");
  const [subTask, setSubTask] = useState(task?.sub || "");
  const [submitted, setSubmitted] = useState(!!task);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mainTask || !subTask) return;

    // SAVE TO GLOBAL STATE
    setTask({
      main: mainTask,
      sub: subTask,
    });

    // LOCK UI
    setSubmitted(true);

    // MOVE FLOW FORWARD
    setStep("review");
  };

  return (
    <div className="entry-container">
      {!submitted ? (
        <form className="entry-form" onSubmit={handleSubmit}>
          <p className="title">ENTER TASK</p>

          <div className="inputs-wrapper">
            <input
              type="text"
              placeholder="Main Task"
              value={mainTask}
              onChange={(e) => setMainTask(e.target.value)}
              className="entry-input"
            />

            <textarea
              placeholder="Sub Task"
              value={subTask}
              onChange={(e) => setSubTask(e.target.value)}
              className="entry-input"
              rows={6}
            />
          </div>

          <div className="button-wrapper">
            <button className="btn-next" type="submit">
              Next
            </button>
          </div>
        </form>
      ) : (
        /* SUMMARY VIEW */
        <div className="summary">
          <div className="summary-item">
            <p className="label">Main Task:</p>
            <p className="value">{task.main}</p>
          </div>

          <div className="summary-item">
            <p className="label">Sub Task:</p>
            <p className="value">{task.sub}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskEntry;
