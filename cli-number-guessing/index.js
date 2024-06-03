#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// 1) Computer will generate a random number -Done
// 2) User input for guessing number -Done
// 3) Compare user input weith computer generated number and show result -Done
var randomNumber = Math.floor(Math.random() * 10 + 1);
var answers = await inquirer_1.default.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1 - 10: ",
    },
]);
//conditional statement:
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
