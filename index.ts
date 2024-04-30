#!/usr/bin/env node
import inquirer from "inquirer";

console.log("\n\Welcome to alish - CLI NUMBER GUESSING GAME\n");
const randomnumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt((
    {
        name : "UserGuessedNumber",
        type :"input",
        message:"Enter your guess number(number limit from 1 to 5)!",
    }
));
 if (answer.UserGuessedNumber === randomnumber){
    console.log("congratulation!you guess a correct number.");
 }
 else{console.log("Sorry, you guess a wrong number.");
}