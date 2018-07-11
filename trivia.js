let readline = require("readline-sync");
let trivia1 = readline.question("How many Pokémon are there in the National Pokédex? ").toUpperCase();
// 807
let trivia2 = readline.question("What does Mario jump on at the end of a level? ").toUpperCase();
// A flagpole
let trivia3 = readline.question("What does NES stand for? ").toUpperCase();
// Nintendo Entertainment System
let trivia4 = readline.question("True or false. In the original Arcade version of Donkey Kong, Mario was a plumber. ").toUpperCase();
// False. He was a carpenter
let trivia5 = readline.question("In which Persona game did the MC sacrifice themselves to save the world? ").toUpperCase();
// Persona 3
let trivia6 = readline.question("What is the main color that is used in Persona 5? ").toUpperCase();
// red
let trivia7 = readline.question("What is the smartest Pokémon? ").toUpperCase();
// Alakazam. It has an IQ of 5,000
let trivia8 = readline.question("What does the word 'Atari mean'? ").toUpperCase();
// Success
let trivia9 = readline.question("What is the name of the next Super Smash Bros game? ").toUpperCase();
// Super Smash Bros Ultimate
let trivia10 = readline.question("Which planet size is approximately the same as Minecraft? ").toUpperCase();
// Neptune
let score = 0;
let questionsAnswered = 0;

if(trivia1 == "807"){
  console.log("Question 1: correct");
  score++;
  questionsAnswered++;
}
else{
  console.log("Question 1: incorrect");
  questionsAnswered++;
}

if(trivia2 == "A FLAGPOLE"){
  console.log("Question 2: correct");
  score++;
  questionsAnswered++;
}
else{
  console.log("Question 2: incorrect");
  questionsAnswered++;
}

if(trivia3 == "NINTENDO ENTERTAINMENT SYSTEM"){
  console.log("Question 3: correct");
  score++;
  questionsAnswered++;
}
else{
  console.log("Question 3: incorrect");
  questionsAnswered++;
}

if(trivia4 == "FALSE"){
  console.log("Question 4: correct");
  score++;
  questionsAnswered++;
}
else{
  console.log("Question 4: incorrect");
  questionsAnswered++;
}

if(trivia5 == "PERSONA 3"){
  console.log("Question 5: correct");
  score++;
  questionsAnswered++;
}
else{
  console.log("Question 5: incorrect");
  questionsAnswered++;
}

if(trivia6 == "RED"){
  console.log("Question 6: correct");
  score++;
  questionsAnswered++;
}
else{
  console.log("Question 6: incorrect");
  questionsAnswered++;
}

if(trivia7 == "ALAKAZAM"){
  console.log("Question 7: correct");
  score++;
  questionsAnswered++;
}
else{
  console.log("Question 7: incorrect");
  questionsAnswered++;
}

if(trivia8 == "SUCCESS"){
  console.log("Question 8: correct");
  score++;
  questionsAnswered++;
}
else{
  console.log("Question 8: incorrect");
  questionsAnswered++;
}

if(trivia9 == "SUPER SMASH BROS ULTIMATE"){
  console.log("Question 9: correct");
  score++;
  questionsAnswered++;
}
else{
  console.log("Question 9: incorrect");
  questionsAnswered++;
}

if(trivia10 == "NEPTUNE"){
  console.log("Question 10: correct");
  score++;
  questionsAnswered++;
}
else{
  console.log("Question 10: incorrect");
  questionsAnswered++;
}

if(questionsAnswered == 10){
  console.log("You answered " + score + " correctly out of a possible 10");
}
