// Julia Yu

let readline = require("readline-sync");
let money = parseInt(readline.question("Please enter an amount of money in cents: "));
console.log(money + " cents makes: ");
const quarters = Math.floor(money / 25);
console.log(quarters + " quarter(s)");
const dimes = Math.floor((money - (25 * quarters)) / 10);
console.log(dimes + " dime(s)");
const nickels = Math.floor((money - ((25 * quarters) + (10 * dimes))) / 5);
console.log(nickels + " nickel(s)");
const pennies = Math.floor((money - ((25 * quarters) + (10 * dimes) + (5 * nickels))) / 1);
console.log(pennies + " penny(ies)");

// if(money - 25 * quarters <= 0){
//   dimes = 0;
//   nickels = 0;
//   pennies = 0;
// }
// else{
//   if(money - 25 * quarters > 0){
//     if(money - 10 * dimes <= 0){
//       nickels = 0;
//       pennies = 0;
//     }
//     else{
//       if(money - 10 * dimes > 0){
//         if(money - 5 * nickels <= 0){
//           pennies = 0;
//         }
//         else{
//           if(money - 5 * nickels > 0){
//             if(money - 1 * pennies > 0){
//               pennies = money;
//             }
//           }
//         }
//       }
//     }
//   }
// }