// // In these exercises, you will write functions, and then write tests that will call your functions.
//
// // Example - Absolute value function
// function absValue(num) {
//   if (num < 0) {
//     return num * -1;
//   } else {
//     return num;
//   }
// }
// //
// // // Example - Tests of the absolute value function
// // // If any of these are false, something went wrong
// console.log(absValue(7) == 7);
// console.log(absValue(0) == 0);
// console.log(absValue(-3) == 3);
// console.log(absValue(-2.44) == 2.44);
// console.log();
//
//
// // 1a. Write an isVowel function that takes one parameter, a letter, and
// // returns true if it is a vowel and false if not.
//
// function isVowel(letter) {
//   if(letter == !("a" || "e" || "i" || "o" || "u" || "y")) {
//     return(false);
//   }
//   else{
//     return(true);
//   }
// }
//
// // 1b. Tests for isVowel. Two examples have been provided. Add at least 3 more.
// console.log(isVowel("a") == true);
// console.log(isVowel("b") == false);
// console.log(isVowel("c") == false);
// console.log(isVowel("d") == true);
// console.log(isVowel("e") == false);


// 2a. Write a convertTemp function that takes two parameters:
// The first is a temperature, and the second is either "toC" or "toF", which tells
// you whether to covert Fahrenheit to Celsius, or Celsius to Fahrenheit.
// The function should return the converted temperature.

// function convertTemp(temperature, convert) {
//   if(convert == "toC") {
//     return((temperature - 32) / 1.8);
//   }
//   else if(convert == "toF") {
//     return((temperature * 1.8) + 32);
//   }
// }
//
// // 2b. Tests for convertTemp. Two examples have been provided. Add at least 3 more.
// console.log(convertTemp(95, "toC") == 35);
// console.log(convertTemp(95, "toF") == 203);
// console.log(convertTemp(80, "toF") == 176);
// console.log(convertTemp(86, "toC") == 30);
// console.log(convertTemp(158, "toC") == 70);

// 3a. Write an isDivisible function that takes two parameters:
// The original number, and the number we want to know if it's divisible by.
// The function should return true or false.

function isDivisible(original, divisor) {
  if(original % divisor == 0) {
    return(true);
  }
  else if(original % divisor >= 1) {
    return(false);
  }
}

// 3b. Tests for isDivisible. Two examples have been provided. Add at least 3 more.
console.log(isDivisible(15, 3) == true);
console.log(isDivisible(17, 2) == false);
console.log(isDivisible(8, 4) == false);
console.log(isDivisible(100, 3) == true);
console.log(isDivisible(10, 5) == true);
