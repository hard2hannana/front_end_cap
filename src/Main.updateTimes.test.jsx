// src/Main.updateTimes.test.jsx
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

// 1) Stub the global API that updateTimes will call
vi.stubGlobal(
  "fetchAPI",
  vi.fn(() => ["20:00", "20:30"])
);

// 2) Mock BookingDetails so we can trigger updateTimes from the child
vi.mock("./BookingDetails.jsx", () => {
  const React = require("react");
  function BookingDetails({ availableTimes, updateTimes }) {
    const { useEffect } = React;

    // Call the prop once after mount, simulating a user picking a date
    useEffect(() => {
      updateTimes("2025-08-17"); // "YYYY-MM-DD"
    }, [updateTimes]);

    // Expose the current availableTimes so we can assert after the dispatch
    return <div data-testid="times">{availableTimes.join(",")}</div>;
  }
  return { default: BookingDetails };
});

// 3) Import the component-under-test AFTER the mocks
// if Main.jsx is in src/components/
import Main from "./components/Main.jsx";


test("updateTimes dispatches SET_TIMES with results from fetchAPI", async () => {
  <MemoryRouter>
    <Main />
  </MemoryRouter>;

  // waits until the reducer has updated state and re-rendered
  await waitFor(() => {
    expect(screen.getByTestId("times")).toHaveTextContent("20:00,20:30");
  });

  // Assert the API was called once with a Date object
  expect(fetchAPI).toHaveBeenCalledTimes(1);
  expect(fetchAPI.mock.calls[0][0]).toBeInstanceOf(Date);
});

// Optional: clean up the globals (Vitest resets between files if configured)
afterAll(() => {
  // @ts-ignore
  delete globalThis.fetchAPI;
});
