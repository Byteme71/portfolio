import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Home
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/main"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/main" className="nav-link">
            About
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/contact"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
