import { Outlet, Link } from "react-router-dom";
import './App.css'

function LiftingStateUp() {
  return (
    <>
      <h2>Lifting State Up</h2>

      <nav className="nav">
        <Link to="TodoForm">Form</Link>
        <Link to="TodoList">List</Link>
      </nav>

      <Outlet />
    </>
  );
}

export default LiftingStateUp;
