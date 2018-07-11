let firstNum = Math.random() * 6;
let secondNum = Math.random() * 6;

console.log("The first number is: " + firstNum);
let readline = require("readline-sync");
let guess = readline.question("Do you think the next number will be higher, lower or the same as the first number? ").toUpperCase();
console.log("The second number is: " + secondNum);

if((firstNum > secondNum && guess == "LOWER") || (firstNum < secondNum && guess == "HIGHER") || (firstNum == secondNum && guess == "SAME")){
  console.log("You were right");
}
else{
  if(((firstNum > secondNum) && (guess == "HIGHER" || guess == "SAME")) || ((firstNum < secondNum) && (guess == "LOWER" || guess == "SAME")) || ((firstNum == secondNum) && (guess == "HIGHER" || guess == "LOWER"))){
    console.log("You were wrong");
  }
}
