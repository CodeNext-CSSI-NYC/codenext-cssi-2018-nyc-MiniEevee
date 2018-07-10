// Julia Yu

let readline = require("readline-sync");
let money = parseInt(readline.question("Please enter an amount of money in cents: "));
let quarters = parseInt(Math.floor(money/ 25));
let dimes = parseInt(Math.floor(money - 25 * quarters/ 10));
let nickels = parseInt(Math.floor(money - (25 * quarters + 10 * dimes)/ 5));
let pennies = parseInt(Math.floor(money - (25 * quarters + 10 * dimes + 5 * nickels)/ 1));

if(money - 25 * quarters <= 0){
  dimes = 0;
  nickels = 0;
  pennies = 0;
}
else{
  if(money - 25 * quarters >= 0){
    
  }
}

console.log(money + " cents makes: ");
console.log(quarters + " quarter(s)");
console.log(dimes + " dime(s)");
console.log(nickels + " nickel(s)");
console.log(pennies + " penny(ies)");
