import { describe, it, expect } from "vitest";
import { initializeTimes, updateTimes } from "./components/Main.jsx";

describe("initializeTimes", () => {
  it("returns the expected default times", () => {
    expect(initializeTimes()).toEqual([
      "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00",
    ]);
  });
});

describe("updateTimes", () => {
  it("returns the same array it was given (echoes state for now)", () => {
    const selectedDate = "2025-08-15";
    const currentTimes = ["17:00", "17:30", "18:00"];
    const result = updateTimes(selectedDate, currentTimes);

    // Same values…
    expect(result).toEqual(currentTimes);
    // …and ideally the same reference (since we're not changing anything yet)
    expect(result).toBe(currentTimes);
  });
});
