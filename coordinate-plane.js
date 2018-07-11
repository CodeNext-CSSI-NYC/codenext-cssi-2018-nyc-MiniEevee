let readline = require("readline-sync");
let x1 = parseInt(readline.question("Enter X-Coordinate 1: "));
let y1 = parseInt(readline.question("Enter Y-Coordinate 1: "));
let x2 = parseInt(readline.question("Enter X-Coordinate 2: "));
let y2 = parseInt(readline.question("Enter Y-Coordinate 2: "));
let length = readline.question("Do you want to the length? ").toUpperCase();
let midpoint = readline.question("Do you want to know the midpoint? ").toUpperCase();

if(length == "YES"){
  console.log("The length is: " + Math.sqrt(((x2 - x1)**2) + ((y2 - y1) ** 2)));
}
else{
  console.log("Okay");
  }

if(midpoint == "YES"){
  console.log("The midpoint is: " + "(" + ((x1 + x2) / 2) + ", " + ((y1 + y2) / 2) + ")");
}
else{
  console.log("Okay");
}
