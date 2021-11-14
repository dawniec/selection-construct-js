const prompt = require("prompt-sync")();

//This program read two numbers, compute and display the two numbers, the integer code and the computed results


console.log("\n")

const num1 = parseInt(prompt("Please enter the first number:  "));

const num2 = parseInt(prompt("Please enter the second number: "));

const integerCode = parseInt(prompt("Enter '1' to find the sum; Enter '2' to find the difference; Enter '3' to find the product; Enter '4' to find the quotient:  "));

 switch(integerCode)
{
    case 1:
        const sum = num1 + num2;
        console.log(`You chose ${integerCode}`);
        console.log(`The sum of ${num1} and ${num2} is ${sum}`);
    break;

    case 2:
        const difference = num1 - num2;
        console.log(`You chose ${integerCode}`);
        console.log(`The difference of ${num1} and ${num2} is ${difference}`);
    break;

    case 3:
        const product = num1 * num2;
        console.log(`You chose ${integerCode}`);
        console.log(`The product of ${num1} and ${num2} is ${product}`);
    break;

    case 4:
        const quotient = num1 / num2;
        console.log(`You chose ${integerCode}`);
        console.log(`The division of ${num1} and ${num2} is ${quotient}`);
    break;

    default:
        console.log("Sorry, you must enter either 1, 2, 3 or 4!!!");
    break;
}
