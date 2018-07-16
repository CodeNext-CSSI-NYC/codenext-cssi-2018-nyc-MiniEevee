// This game has already been discussed in the notes on the site.
// Do not look back at those notes, that would ruin the learning.
// If you have not yet done so, run npm install random-int in terminal.
// Google "npm random-int" to see how it works.
// We will make a guessing game as follows:
// Set a random number from 1 to 100 to be the answer.
// Ask the user to guess a number.
// If they're wrong, you should ask them to guess again.
// Each time they guess, you should be telling them if their guess was too high or too low.
// Also, you should be tracking how many times they have guessed.
// Then, at the end, when you tell them that they guessed correctly,
// you should mention how many guesses it took them.

let randomInt = require("random-int");
let readline = require("readline-sync");

let number = randomInt(1, 100);
let guessCount = 1;
let guess = parseInt(readline.question("Guess a number ranging from 1 to 100 inclusive: "));

while (guess != number) {
  if (guess > number) {
    console.log("Your guess is higher than the number");
  } else if (guess < number) {
    console.log("Your guess is lower than the number");
  }
  guessCount += 1;
  guess = parseInt(readline.question("Guess again: "));
}
if (guess == number) {
  console.log("That is the correct number.");
  console.log("It took you " + guessCount + " guess(es) to get the number");
}