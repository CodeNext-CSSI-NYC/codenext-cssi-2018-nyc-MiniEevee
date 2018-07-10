let readline = require("readline-sync");
let radius = readline.question("What is the radius? ");
let height = readline.question("What is the height? ");
let volume = readline.question("Do you want to know the volume? ");
let surfaceArea = readline.question("Do you want to know the surface area? ");

console.log("Volume of a cylinder with a radius of " + radius + " and a height of " + height + " is " + ((Math.PI) * (radius ** 2) * height));

console.log("Surface area of a cylinder with a radius of " + radius + " and a height of " + height + " is " + (2 * Math.PI * radius * height) + (2 * Math.PI * (radius ** 2)));
