const letterScores = [
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


  // asign all the letters and scores to the letterScore variable - done
  // asign score variable to 0 - done
  // loop it through the array - done
  // find the letter and the score - done
  // reasign the score variable - done
  // return the score updated - done
  
export function calculateScrabbleScore(word) {
  let score = 0;
  if (word.length >= 7) {
    score += 50;
  }
  
  for (let letter of word.toUpperCase()) {
    const letterScore = letterScores.find(([item]) => item === letter);

    if (letterScore === undefined) {
      throw new Error("Invalid character found");
    }
    score += letterScore[1];
  }
  return score;
}