import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../stylings/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">ShadowLog</div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/analytics" onClick={() => setIsOpen(false)}>
            Analytics
          </Link>
        </li>
        <li>
          <Link to="/settings" onClick={() => setIsOpen(false)}>
            Settings
          </Link>
        </li>
      </ul>

      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
