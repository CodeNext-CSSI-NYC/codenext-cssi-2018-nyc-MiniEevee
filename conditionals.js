// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.

// 1. Ask the user for a number and print whether it is positive or negative or zero.

// let readline = require("readline-sync");
// let number = readline.question("Enter any number: ");
// if(number > 0){
//   console.log(number + " is positive.");
// }
// else{
//   if(number < 0){
//   console.log(number + " is negative.");
//   }
//   else{
//     if(number == 0){
//       console.log("The number is 0");
//     }
//   }
// }

// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.

// let readline = require("readline-sync");
// let num1 = readline.question("Enter the first number: ");
// let num2 = readline.question("Enter the second number: ");
// let num3 = readline.question("Enter the third number: ");
//
// if(num1 > num2 && num1 > num3){
//   console.log(num1);
// }
// else{
//   if(num2 > num1 && num2 > num3){
//     console.log(num2);
//   }
//   else{
//     if(num3 > num1 && num3 > num1){
//       console.log(num3);
//     }
//   }
// }

// 3. Ask the user for a number and print whether it is odd or even

// let readline = require("readline-sync");
// let num = readline.question("Enter a number: ");
// if(num % 2 == 0){
//   console.log(num + " is even");
// }
// else{
//   console.log(num + " is odd");
// }

// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant

// let readline = require("readline-sync");
// let letter = readline.question("Enter a letter: ");
// if(letter == "a"|"e"|"i"|"o"|"u"|"y"){
//   console.log(letter + " is a vowel");
// }
// else{
//   console.log(letter + " is a consonant");
// }

// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)

// let readline = require("readline-sync");
// let year = readline.question("Enter a year: ");
// if(year % 4 == 0){
//   console.log(year + " is a leap year");
// }
// else{
//   if(year % 4 == 1){
//     console.log(year + " is not a leap year");
//   }
// }

// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.

// let readline = require("readline-sync");
// let citizen = readline.question("Have you been a citizen for 9 years? ");
// let age = readline.question("What is your age? ");
// let live = readline.question("Do you live in NYS? ");
// if(citizen == "yes" && age > 30 && live == "yes"){
//   console.log("You can run for senate in NY");
// }
// else{
//   console.log("You cannot run for senate in NY");
// }

// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.

let readline = require("readline-sync");
let number = readline.question("Enter a whole number 1-7 inclusive. ");
switch(number){
  case "1":
  console.log("It is Monday");
  break;
  case "2":
  console.log("It is Tuesday");
  break;
  case "3":
  console.log("It is Wednesday");
  break;
  case "4":
  console.log("It is Thursday");
  break;
  case "5":
  console.log("It is Friday");
  break;
  case "6":
  console.log("It is Saturday");
  break;
  case "7":
  console.log("It is Sunday");
  break;
  default:
  console.log("A number 1-7 inclusive was not entered");
}
