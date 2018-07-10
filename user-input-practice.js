// Julia Yu

// Remember that you can comment parts of your code in and out!
// Try this as you move from question to question below.

// 1. Ask the user to enter a number, and print out "The square root of ___ is ___ ", but with the blanks filled in correctly. (Not sure how to get the square root of a number in JavaScript? Google it!)
let readline = require("readline-sync");
let enterNumber = readline.question("Please enter a Number: ");
console.log("The square root of " + enterNumber + " is " + Math.sqrt(enterNumber));

// 2. Ask the user to enter their name, and print out "Your name has ___ letters", but with the blank filled in. Not sure how to get the number of letters in a string in JavaScript? Google it!
let readline2 = require("readline-sync");
let enterName = readline2.question("What is your name? ");
console.log("Your name has " + enterName.length + " letters");

// 3. Ask the user to enter any word, and print out "The word ____ starts with the letter ___", but with the blanks filled in. Not sure how to get the first letter of a string in JavaScript? ...
let readline3 = require("readline-sync");
let enterWord = readline3.question("Please enter a word: ");
console.log("The word " + enterWord + " starts with the letter " + enterWord.charAt(0));

// 4. Ask the user to enter two numbers, and print out "The average of ___ and ___ is ____", but with the blanks filled in.
let readline4 = require("readline-sync");
let enterNumber1 = parseInt(readline4.question("Please enter the first number: "));
let enterNumber2 = parseInt(readline4.question("Please enter the second number: "));
console.log("The average of " + enterNumber1 + " and " + enterNumber2 + " is " + (enterNumber1 + enterNumber2) / 2);
