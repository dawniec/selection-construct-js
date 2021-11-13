const prompt = require("prompt-sync")();

//The program accepts 3 test scores out of 100, calculates the average and displays Pass or Fail.

console.log("\n")

const test1 = parseFloat(prompt("Please enter the score for test 1, out of 100: "));

const test2 = parseFloat(prompt("Please enter the score for test 2, out of 100: "));

const test3 = parseFloat(prompt("Please enter the score for test 3, out of 100: "));

totalMarks= test1 + test2 + test3;

AvgMark = totalMarks / 3;

if (AvgMark >= 50)
{
    
    console.log("PASS :)");
    console.log("\n");
}

else
{
    
    console.log("FAIL :(");
    console.log("\n");
}
