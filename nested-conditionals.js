// 1. Ask the user to type in fruit or veggie.
// If they say fruit, ask them to choose a or b.
// If they say a, print out apple. If they say b, print out banana.
// If they said veggie at the beginning, ask them to choose m or p.
// If they say m, print out mushroom. If they say p, print out pepper.

// let readline = require("readline-sync");
// let choice1 = readline.question("Fruit or Veggie? ").toUpperCase();
// if(choice1 == "FRUIT"){
//   let choice1a = readline.question("A or B? ").toUpperCase();
//   if(choice1a == "A"){
//     console.log("Apple");
//   }
//   else{
//     console.log("Banana");
//   }
// }
// else{
//   let choice1b = readline.question("M or P? ").toUpperCase();
//   if(choice1b == "M"){
//     console.log("Mushroom");
//   }
//   else{
//     console.log("Pepper");
//   }
// }

// 2. Ask the user to choose square or rectangle.
// Also ask them to choose area or perimeter.
// Tell them the formula depending on what they chose.
// For example, if they said square and perimeter, you could print: 4 * s

// let readline = require("readline-sync");
// let shape = readline.question("Square or Rectangle? ").toUpperCase();
// let parameters = readline.question("Area or Perimeter? ").toUpperCase();
// if(shape == "SQUARE"){
//   if(parameters == "AREA"){
//     console.log("Area = side * side");
//   }
//   if(parameters == "PERIMETER"){
//     console.log("Perimeter = side * 4");
//   }
// }
// else{
//   if(shape == "RECTANGLE"){
//     if(parameters == "AREA"){
//       console.log("Area = length * width");
//     }
//     if(parameters == "PERIMETER"){
//       console.log("Perimeter = (side1 * 2) + (side2 * 2)");
//     }
//   }
// }

// BONUS CHALLENGE
// 3. Pretend you are running a fast food shop.
// Start out with the line let totalCost = 0;
// Ask the user if they want a value meal, or if they will order individual items.
// If they want a value meal, ask if they want the burger ($7) or the chicken ($6).
// Add the amount to totalCost, then tell them how much they owe.
// If they want individual items, ask them (one item at a time)
//     if they want burger ($4), fries ($2), drink ($1), dessert ($2).
// Each time they say yes, add the right amount to the totalCost.
// At the end, tell them how much they owe.

let totalCost = parseInt(0);
let readline = require("readline-sync");
let choice1 = readline.question("Would you like to buy a value meal, or individual items? ").toUpperCase();
if(choice1 == "VALUE MEAL"){
  let choice1a = readline.question("Would you like a burger ($7) or chicken ($6)? ").toUpperCase();
  if(choice1a == "BURGER"){
    totalCost = totalCost + 7;
    console.log("You owe $7");
  }
  else{
    totalCost = totalCost + 6;
    console.log("You owe $6");
  }
}
else{
  if(choice1 == "INDIVIDUAL ITEMS"){
    let choice2a = readline.question("Would you like a burger ($4)? ").toUpperCase();
    if(choice2a == "YES"){
      totalCost = totalCost + 4;
    }
    else{
      totalCost = totalCost + 0;
    }
    let choice2b = readline.question("Would you like some fries ($2)? ").toUpperCase();
    if(choice2b == "YES"){
      totalCost = totalCost + 2;
    }
    else{
      totalCost = totalCost + 0;
    }
    let choice2c = readline.question("Would you like a drink ($1)? ").toUpperCase();
    if(choice2c == "YES"){
      totalCost = totalCost + 1;
    }
    else{
      totalCost = totalCost + 0;
    }
    let choice2d = readline.question("Would you like desert ($2)? ").toUpperCase();
    if(choice2d == "YES"){
      totalCost = totalCost + 2;
    }
    else{
      totalCost = totalCost + 0;
    }
  }
  console.log("You owe $" + totalCost);
}
