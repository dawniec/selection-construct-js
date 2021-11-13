const prompt = require("prompt-sync")();



const number=parseInt(prompt("Please enter a number: "))

if (number <= -1)
{
    console.log("The number is negative")
}

else
{
    console.log("The number is positive")
}
