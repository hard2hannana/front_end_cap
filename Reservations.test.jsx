import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Reservations from "./src/components/Reservations.jsx";
import { BrowserRouter } from "react-router-dom";

test('renders the "Find a table" heading', () => {
  render(
  
  <BrowserRouter>
    <Reservations />
  </BrowserRouter>

);
  // robust, case-insensitive, and enforces it's an <h3>
  const h3 = screen.getByRole("heading", { level: 3, name: /find a table/i });
  expect(h3).toBeInTheDocument();
})
