import React from "react";
import logo from "../assets/Logo.svg";


export default function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
      </div>
      <ul className="nav-right">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
