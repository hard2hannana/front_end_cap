import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container container-nav">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
        <button className="hamburger" id="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              end
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              end
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reservations"
              end
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orderOnline"
              end
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Order online
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              end
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
