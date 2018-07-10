// pythagorean theorem: a^2 + b^2 = c^2

let readline = require("readline-sync");
let number1 = readline.question("Please enter A: ");
let number2 = readline.question("Please enter B: ");
let number3 = readline.question("Please enter C: ");

if((number1 ** 2) + (number2 ** 2) == (number3 ** 2)){
  console.log("The numbers," + number1 + ", " + number2 + ", and " + number3 + " are a pythagorean triple");
}
else{
  console.log("The numbers," + number1 + ", " + number2 + ", and " + number3 + " are not a pythagorean triple");
}
