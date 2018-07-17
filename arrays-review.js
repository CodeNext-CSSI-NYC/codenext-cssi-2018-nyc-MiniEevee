// // 1. Do each step below on a separate line
// // Create an array with exactly five numbers.
// let array = [1, 2, 3, 4, 5];
// // Store the second value from the array in a variable named secondValue.
// let secondValue = array[2];
// // Print out the third value from the array.
// console.log(array[3]);
// // Change the fourth value in the array to 0.
// array.splice(3, 1, 0);
// // Remove the last value from the array and store it in the variable lastVal.
// let lastVal = array.pop(4);
// // Print out lastVal to make sure it has the value you expected.
// console.log(lastVal);
// // Add 524 to the end of the array.
// array.splice(4, 0, 524);
// // Add 76 to the end of the array.
// array.splice(5, 0, 76);
// // Print out the second-to-last value in the array (which should be 524) by
// // placing a number inside square brackets (e.g. arr[3], though 3 is wrong).
// console.log(array[4]);
// // Print out the second-to-last value in the array again, but this time,
// // use the length property and subtraction (e.g. arr[arr.length + 3], though +3 is wrong).
// console.log(array[array.length - 2]);
// console.log(array);
//
// // 2a. Create an array with five items.
// let array2 = ["Pikachu", "Eevee", "Piplup", "Charmander", "Litten"];
// // Without using a for loop, print out each item in the array, one at a time.
// console.log(array2[0]);
// console.log(array2[1]);
// console.log(array2[2]);
// console.log(array2[3]);
// console.log(array2[4]);
// // Do NOT just print out the whole array with a command like console.log(arr).
// // Make sure you actually print out each item in the array one at a time.
// // What if there were 100 items in the array? 1000?
// for (let i = 0; i < array2.length; i++) {
//   let print1 = array2[i];
//   console.log(print1);
// }
//
//
//
// // 2b. Create an empty array.
// let array3 = [];
// // Add a few items to the array one at a time using push.
// array3.push("Espeon");
// array3.push("Glaceon");
// array3.push("Leafeon");
// What if you needed to add 100 items to the array, or 1000?
// Hopefully these examples illustrate how helpful for loops can be.
// for (let a = 0; a < array3.length; a++) {
//   let plus = array3[a];
//   array3.push(plus);
// }


// // 3. Make a new empty array.
// let array4 = [];
// // Set up a for loop that will run ten times. Think carefully to make sure it will run ten times.
// for (let i = 0; i < 11; i++) {
//   array4.push("29");
//   array4.push("29");
// }
// console.log(array4);
// Inside the for loop, add your favorite number to the array two times.
// You will need to do this on two separate lines.
// How many numbers should be in your array when the for loop is done?
// Print out the array and the array's length at the end and make sure you are right.



// // 4. Make an array that contains four foods.
// let array5 = ["cheese", "pizza", "chicken", "pepper"];
// // Set up a for loop that will iterate (go through) the array.
// for (let i = 0; i < array5.length; i++) {
//   let item = array5[i];
//   let item2 = array5[i].toUpperCase();
//   console.log(item);
//   console.log(item2);
// }
// Do NOT use the number 4 (or 3) in your for loop.
// Instead, use the length of the array in the condition portion (the 2nd part) of the for loop.
// Inside the for loop, get the item that is at the current index and store it in a variable.
// On the next line, print out the variable.
// On the line after that, print out the variable but use toUpperCase() on it.
// When it is done running, you should see something like:
// apple
// APPLE
// orange
// ORANGE
// pear
// PEAR
// plum
// PLUM



// // 5. Make an array that contains five cities.
// let array6 = ["New York", "St. Paul", "San Fransisco", "New England", "Honalulu"];
// // Set up a for loop that will iterate (go through) the array.
// for (let i = 0; i < array6.length; i++) {
//   let city = array6[i];
//   console.log(i + ": " + city);
// }
// Do NOT use the number 5 (or 4) in your for loop.
// Instead, use the length of the array in the condition portion (the 2nd part) of the for loop.
// (Yes, this is the same as last time. This is super important.)
// Inside the for loop, store the name of the city in a variable called city.
// Then print out the index from the for loop, then a colon, followed by the city.
// When it is done running, you should see something like:
// 0: New York
// 1: Boston
// 2: Seattle
// 3: LA
// 4: San Diego



// // 6. Make an array that contains six numbers.
// let array7 = [1, 2, 3, 4, 5, 6];
// // Also make a new, separate empty array called squares.
// let squares = [];
// // Set up a for loop that will iterate (go through) the array.
// for (let i = 0; i < array7.length; i++) {
//   let num = array7[i];
//   squares.push(num ** 2);
// }
// console.log(squares);
// Do NOT use the number 6 (or 5) in your for loop.
// Instead, use the length of the array in the condition portion (the 2nd part) of the for loop.
// (Yes, this is the same as the last 2 times. This is super important.)
// Inside the for loop, store the number from the array with numbers in a variable called num.
// Add the square of the number to the end of your new array.
// At the end, print out the new array.
// Assuming your original array was [2,6,4,3,1,7] ...
// When it is done running, you should see something like [4, 36, 16, 9, 1, 49]



// 7. Make an array that contains six numbers. Feel free to use the same one.
// let numArray = [1, 2, 3, 4, 5, 6];
// let reverse = [];
// for (i = numArray.length - 1; i >= 0; i--) {
//   let num = numArray[i];
//   reverse.push(num);
// }
// console.log(reverse);
// Also make a new, separate empty array called reverse.
// Set up a for loop that will iterate (go through) the array, but BACKWARDS.
// This means, rather than i = 0; i < arr.length; i++
// You will instead do: i = arr.length - 1; i >= 0; i--
// Make sure that you 110% understand that previous line, because it is very important. Ask questions.
// Inside the for loop, store the number from the array with numbers in a variable called num.
// Add the number to the end of your new array (reverse).
// Note that, since we are looping backwards, we will be adding the numbers from the end first.
// At the end, print out both the original and new array.
// Assuming your original array was [2,6,4,3,1,7] ...
// When it is done running, you should see [7, 1, 3, 4, 6, 2] (it was reversed!)



// 8. Make a new empty array.
// let readline = require("readline-sync");
// let array = [];
// let letters = readline.question("How many letters? ");
// for (i = 0; i < letters; i++) {
//   let letter = readline.question("Enter a letter: ");
//   array.push(letter);
// }
// let str = array.join("");
// console.log(str);
// Ask the user how many letters they would like to type in.
// Use a for loop to loop that many times.
// Each time through the loop, ask the user to enter a letter. Add that letter to the array.
// At the very end use let str = arr.join("") to turn your array into a string.
// Print out the str
// For example, if they type in 4, and then type in c, a, k, e when asked
// Then at the end it should just say "cake"



// 9. Make a new empty array.
// let array = [];
// var randomInt = require("random-int");
// for (let i = 0; i <= 9; i++) {
//   array.push(randomInt(0, 20));
// }
// // console.log(array);
// for (let a = 0; a < array.length; a++) {
//   let numberPrint = array[a];
//   console.log(numberPrint);
// }
// Write a for loop that run ten times. Each time, it should add one random number to your array.
// When that is done, create another for loop that goes throught this array and,
// one at a time, prints out each item, so that you can see which items were added.
// Do NOT just print the whole array at once. Get them one at a time and print them.



// 10. We will make a deck of cards -- sort of.
// Create an empty array called deck.
// Make a for loop that goes from 1 to 13.
// Inside that for loop make another for loop that goes from 1 to 4.
// Do NOT use i for both for loops! You can use j if you want.
// Inside the inner for loop:
// Create an empty string
// If the outer loop variable is 2-10 add that number to the empty string.
// However, if it's 1, add A, if it's 11 add J, if it's 12 and Q, if it's 13 and K.
// This is the value of the card (2-10, Ace, Jack, Queen, King)
// Then, using the inner loop, add the suit.
// If it's 1 add "clubs", for 2 add "diamonds", for 3 add "spades", for 4 add "hearts"
// Then, add this string onto the array.
// After both loops are done, print out both the length of the array (should be 52)
// as well as the array itself, which should look like a deck of cards
// Something like: ["Aclubs", "Adiamonds", "Aspades", "Ahearts", "2Clubs", "2Diamonds", ...]

let deck = [];
let str = "";
for (let i = 1; i < 13; i++) {
  if (i >= 2 || i <= 10) {
    str = str + i;
  } else if (i == 1) {
    str = str + "A";
  } else if (i == 11) {
    str = str + "J";
  } else if (i == 12) {
    str = str + "Q";
  } else if (i == 13) {
    str = str + "K";
  }
  for (let j = 1; j < 4; j++) {
    if (j == 1) {
      str = str + "clubs";
    } else if (j == 2) {
      str = str + "diamonds";
    } else if (j == 3) {
      str = str + "spades";
    } else if (j == 4) {
      str = str + "hearts";
    }
    deck.push(str);
  }
}
console.log(deck.length);
// console.log(deck);