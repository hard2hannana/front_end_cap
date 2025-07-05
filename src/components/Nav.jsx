import React, { useState } from "react";
import logo from "../assets/Logo.svg";


export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <button class="hamburger" id="hamburger" onClick={toggleMenu}>&#9776;</button>
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#about">Menu</a>
          </li>
          <li>
            <a href="#about">Reservations</a>
          </li>
          <li>
            <a href="#about">Order Online</a>
          </li>
          <li>
            <a href="#about">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
