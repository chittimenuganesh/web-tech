import { useState } from "react";
import "./show.css";
import threeDot from "./assets/three_dot_black.png";

function Show({ tasks, deleteTask, editTask, completeTask, togglePriority }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [menuIndex, setMenuIndex] = useState(null);

  const editTaskHandle = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].text);
    setMenuIndex(null);
  };

  const saveEdit = () => {
    editTask(editIndex, editText);
    setEditIndex(null);
    setEditText("");
  };

  return (
    <>
      {menuIndex !== null && (
        <div className="backdrop" onClick={() => setMenuIndex(null)} />
      )}

      <ul className="list">
        {tasks.map((task, index) => (
          <li className="row" key={index}>
            <svg
              onClick={() => togglePriority(index)}
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill={task.priority ? "gold" : "none"}
              stroke="gold"
              strokeWidth="2"
              style={{ cursor: "pointer" }}
            >
              <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9" />
            </svg>

            {editIndex === index ? (
              <input
                className="card task-input"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <div
                className={`card task-text ${
                  task.completed ? "completed" : ""
                }`}
              >
                <span style={{ color: task.priority ? "red" : "inherit" }}>
                  {task.text}
                </span>
              </div>
            )}

            <div className="actions">
              {editIndex === index ? (
                <>
                  <button onClick={saveEdit}>Save</button>
                  <button onClick={() => setEditIndex(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <img
                    src={threeDot}
                    alt="menu"
                    className="menu-icon"
                    onClick={() =>
                      setMenuIndex(menuIndex === index ? null : index)
                    }
                  />
                  {menuIndex === index && (
                    <div className="menu">
                      <button onClick={() => editTaskHandle(index)}>
                        Edit
                      </button>
                      <button onClick={() => deleteTask(index)}>
                        Delete
                      </button>
                      <button onClick={() => completeTask(index)}>
                        Complete
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Show;
