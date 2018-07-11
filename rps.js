let readline = require("readline-sync");
let choice = readline.question("Rock, paper or scissors? ");
const compNum = Math.random() * 3;
let compChoice;

 if(compNum > 0 && compNum < 1){
   compChoice = "rock";
 }
 else{
   if(compNum > 1 && compNum < 2){
     compChoice = "scissors";
   }
   else{
     if(compNum > 2 && compNum < 3){
       compChoice = "paper";
     }
   }
 }
console.log("The computer chose " + compChoice);

if((choice == "rock" && compChoice == "paper") || (choice == "paper" && compChoice == "scissors") || (choice == "scissors" && compChoice == "rock")){
   console.log("Player lost , computer won");
}
else{
  if((choice == "paper" && compChoice == "rock") || (choice == "scissors" && compChoice == "paper") || (choice == "rock" && compChoice == "scissors")){
    console.log("Player won, computer lost");
  }
  else{
    if(choice == compChoice){
      console.log("It is a tie");
    }
  }
}
