// MAKE SURE YOU CHOOSE GOOD, RELEVANT NAMES FOR YOUR FUNCTIONS AND PARAMETERS

// 1a. Write (declare) a function that prints out "meow"
// function meow() {
  // console.log("meow");
// }

// 1b. Call it three times in a row. Run your code to make sure it works.

// meow();
// meow();
// meow();

// 2a. Write (declare) a function that takes one parameter and prints out the square of that number
// function squareNumber(x) {
//   console.log(Math.pow(x, 2));
// }
//
// // 2b. Call it three times with three different parameters. Run your code to make sure it works.
//
// squareNumber(5);
// squareNumber(8);
// squareNumber(3);

// 3a. Write (declare) a function that takes two parameters and prints out
// "_____ is greater than ____" with the blanks filled in correctly with the two inputs.
//
// function moreThan(x, y) {
//   if(x > y){
//   console.log(x + " is greater than " + y);
//   }
//   else if(x < y) {
//     console.log(y + " is greater than " + x);
//   }
//   else if(x == y) {
//     console.log(x + " and " + y + " are equal");
//   }
// }
//
// // 3b. Call it three times with three different parameters
// // Make sure to try cases where the first one is bigger, the second one is bigger, and when they are equal.
// // Run your code to make sure it works.
//
// moreThan(6, 1);
// moreThan(4, 10);
// moreThan(5, 5);

// 4a. Write (declare) a function that takes one parameter called name and
// returns (not prints out, just returns) the string "Hello ____", with the name in the blank.

// function greetings(name) {
//   return("Hello " + name);
// }
//
// // 4b. Call the function and store the result in a variable. Then, print out that variable.
// // Repeat this three times with different names.
//
// let name1 = greetings("Ruby");
// console.log(name1);
// let name2 = greetings("Sapphire");
// console.log(name2);
// let name3 = greetings("Emerald");
// console.log(name3);

// 5a. Write (declare) a function that takes two parameters and
// returns (not prints out, just returns) the average of the parameters.

function average(x, y) {
  return((x + y) / 2);
}

// 5b. Call the function and store the result in a variable. Then, print out that variable
// in a sentence like "The average is _____".
// Repeat this three times with different numbers. What happens if you pass in
// something that isn't a number, like true or "apple"?

let num1 = average(5, 5);
console.log("The average is " + num1);
let num2 = average(2, 4);
console.log("The average is " + num2);
let num3 = average(8, 22);
console.log("The average is " + num3);
