import React from "react";
import image1 from "../assets/restauranfood.jpg";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist.
            </p>
            <button>
              Reserve a table
            </button>
        </div>
        <div className="header-image">
        
        </div>
      </div>
    </header>
  );
}
