const prompt = require ("prompt-sync")();

console.log("\n");

const num1 = parseInt(prompt("Please enter the first number: "));

const num2 = parseInt(prompt("Please enter the second number: "));

if (num2 !== 0)
{
    const quotient= num1 / num2;

    console.log(`The quotient of ${num1} and ${num2} is: ${quotient}`)
}

else
{
    console.log("STOP!! Please ensure that the second number is not equal to 0");
}
