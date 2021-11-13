const prompt = require("prompt-sync")();

console.log("\n");

const Age = parseInt(prompt("Please enter your age: "));

//if else statement

//if (Age <= 18)
//{
 //   console.log("You are too young to go beyond this point");
//}

//else {
 //   console.log("You have been granted access");
//}

//ternary operator
Age <= 18 ? console.log("You are too young to go beyond this point") : console.log("You have been granted access!");