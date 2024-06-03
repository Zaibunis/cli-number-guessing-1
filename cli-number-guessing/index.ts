#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number -Done

// 2) User input for guessing number -Done

// 3) Compare user input weith computer generated number and show result -Done

const randomNumber = Math.floor(Math.random() *10 + 1);

const answers = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "Please guess a number between 1 - 10: ",
  },
]);

//conditional statement:
if (answers.userGuessNumber === randomNumber) {
  console.log("Congratulations! you guessed right number.");
} else {
  console.log("You guessed wrong number");
}


 
