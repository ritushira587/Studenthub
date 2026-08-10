import { NavLink } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {

  return (
    <nav className="navbar">

      {/* Logo */}

      <NavLink
        to="/"
        className="navbar-logo"
      >
        <span className="logo-icon">
          🎓
        </span>

        <span>
          Student<span>Hub</span>
        </span>
      </NavLink>

      {/* Navigation Links */}

      <div className="nav-links">

        <NavLink
          to="/"
          className="nav-item"
        >
          Home
        </NavLink>

        <NavLink
          to="/students"
          className="nav-item"
        >
          Students
        </NavLink>

        <NavLink
          to="/add"
          className="nav-item"
        >
          Add Student
        </NavLink>

        <NavLink
          to="/dashboard"
          className="nav-item"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/about"
          className="nav-item"
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className="nav-item"
        >
          Contact
        </NavLink>

      </div>

      {/* Login Button */}

      <NavLink
        to="/login"
        className="login-nav-btn"
      >
        Login
      </NavLink>

    </nav>
  );
}

export default Navbar;