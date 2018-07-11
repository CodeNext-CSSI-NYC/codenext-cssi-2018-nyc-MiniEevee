let readline = require("readline-sync");
let guess = readline.question("Heads or Tails? ");
let result = Math.random();

if(result < 0.5){
  result = "heads"
}
else{
  result = "tails"
}

if((guess == "heads" && result == "heads") || (guess == "tails" && result == "tails")){
  console.log("You are right");
}
else{
  console.log("You are wrong");
}
