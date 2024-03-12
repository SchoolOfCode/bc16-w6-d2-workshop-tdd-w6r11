import { calculateScrabbleScore } from "./scrabble-score";

import { test, expect } from "vitest";

test("test run A letter and return the score of 1", () => {
  expect(calculateScrabbleScore("A")).toBe(1);
});

const letterScore = [
  ["A", 1],
  ["B", 3],
  ["C", 3],
  ["D", 2],
  ["E", 1],
  ["F", 4],
  ["G", 2],
  ["H", 4],
  ["I", 1],
  ["J", 8],
  ["K", 5],
  ["L", 1],
  ["M", 3],
  ["N", 1],
  ["O", 1],
  ["P", 3],
  ["Q", 10],
  ["R", 1],
  ["S", 1],
  ["T", 1],
  ["U", 1],
  ["V", 4],
  ["W", 4],
  ["X", 8],
  ["Y", 4],
  ["Z", 10],
];

test.each(letterScore)("%s should have a score of %i", (word, expectScore) => {
  expect(calculateScrabbleScore(word)).toBe(expectScore);
});
