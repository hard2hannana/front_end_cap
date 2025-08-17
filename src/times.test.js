// src/times.test.js
import { describe, it, expect } from "vitest";
import { initializeTimes, updateTimes } from "./times";

describe("initializeTimes", () => {
  it("returns the expected default times", () => {
    expect(initializeTimes()).toEqual([
      "17:00","17:30","18:00","18:30","19:00","19:30","20:00",
    ]);
  });
});

describe("updateTimes", () => {
  it("echoes the current state for now", () => {
    const state = ["17:00","17:30","18:00"];
    expect(updateTimes("2025-08-15", state)).toBe(state);
  });
});
