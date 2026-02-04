import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Analytics from "./components/Analytics";
import EmotionSelector from "./sub_components/EmotionSelector";
import TaskEntry from "./sub_components/TaskEntry";
import ExecutionReview from "./sub_components/ExectionReview";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />

          {/* Optional: keep your flow routes if needed */}
          <Route path="/emotion" element={<EmotionSelector />} />
          <Route path="/task" element={<TaskEntry />} />
          <Route path="/review" element={<ExecutionReview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
