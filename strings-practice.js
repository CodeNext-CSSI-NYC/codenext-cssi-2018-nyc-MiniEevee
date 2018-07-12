// Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

// // Examples:
// console.log(makeAbba("Hi", "Bye"), "→ HiByeByeHi");
// console.log(makeAbba("Yo", "Alice"), "→ YoAliceAliceYo");
// console.log(makeAbba("What", "Up"), "→ WhatUpUpWhat");

function makeAbba(a, b) {
  return(a + b + b + a);
}

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

// Examples:
// comboString("Hello", "hi");
// comboString("hi", "Hello");
// comboString("aaa", "b");
// → "hiHellohi"
// → "hiHellohi"
// → "baaab"
function comboString(a, b) {
  if(a.length > b.length){
    console.log(b + a + b);
  }
  else if(a.length < b.length) {
    console.log(a + b + a);
  }
}

// Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign". If the string's length is less than 2, then simply return the string itself.
//
// Examples:
console.log(lastTwo("coding"));
console.log(lastTwo("ab"));
console.log(lastTwo("a"));
// → "codign"
// → "ba"
// → "a"

function lastTwo(str) {
  if(str.length < 2) {
    return(str);
  }
  else{
    return(str.substring(0, str.length - 2) + str.substring(str.length - 1) + str.substring(str.length - 2, str.length - 1));
  }
}
