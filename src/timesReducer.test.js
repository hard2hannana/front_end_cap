// src/components/timesReducer.test.js
import { describe, it, expect } from "vitest";
import { initializeTimes } from "./components/timesReducer.jsx";
import { updateTimes} from "./components/Main.jsx";

describe("initializeTimes", () => {
  it("returns the expected default times", () => {
    expect(initializeTimes()).toEqual([
  
    ]);
  });
});

describe("updateTimes", () => {
  it("returns the same array it was given for now", () => {
    const state = ["17:00","17:30","18:00"];
    const result = updateTimes("2025-08-17", state);
    expect(result).toBe(state);       // same reference, same values
  });
});
