let readline = require("readline-sync");
let num = readline.question("Please enter an integer: ").toUpperCase();
if(Math.sqrt(num) == Math.round(Math.sqrt(num))){
  console.log("This is a perfect square");
}
else{
  console.log("This is not a perfect square");
}
