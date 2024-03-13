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

const words = [
  ["planet", 8],
  ["quartz", 24],
  ["bright", 12],
  ["jockey", 22],
  ["zephyr", 23],
  ["widget", 11],
  ["crux", 13],
  ["glyph", 14],
  ["voyage", 13],
  ["knight", 14],
  ["jungle", 14],
  ["flint", 8],
  ["magnet", 9],
  ["quiver", 18],
  ["hazard", 19],
  ["syntax", 16],
  ["vortex", 16],
  ["whisky", 19],
  ["bounce", 10],
  ["zodiac", 18],
];

test.each(words)("%s should have a score of %i", (word, expectedScore) => {
  expect(calculateScrabbleScore(word)).toBe(expectedScore);
});


test("Function should throw error if not A-Z", () => {
  // Define a function that will execute the target code
  const executeWithInvalidInput = () => calculateScrabbleScore("%$TH1SW0RD");
  
  // Expect that executing the function with invalid input throws an error
  expect(executeWithInvalidInput).toThrowError("Invalid character found");
});


test("Seven letter word should return +50 bonus points", () => {
  const expectedScore = 11
  expect(calculateScrabbleScore("Supreme")).toBe(expectedScore + 50)
})