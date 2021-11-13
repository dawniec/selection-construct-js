const prompt = require ("prompt-sync")();

//This program prompts the user for a number and then displays if the number is positive or negative.


const number = parseInt(prompt("Please enter a number: "));

if (number %2 === 0)
{
    console.log("The number you entered is even!!");
}

else
{
    console.log("The number you entered is odd!!");
}
