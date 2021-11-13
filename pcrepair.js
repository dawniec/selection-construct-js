const prompt = require ("prompt-sync")();

//This program prompts the user to enter the number of hours and  cost of parts to repair a device. The minimum cost for 
//any job is $150. The receipt must be printed.

const minCharge = 150;

const labourCharge = 100;

const numOfHours = parseFloat(prompt("Please enter the number of hours to repair the device: "));

const costOfParts = parseFloat(prompt("Please enter the cost to repair the device: "));

const totalCharge = costOfParts + labourCharge;

if ( totalCharge < minCharge){

    console.log(`The charge for this job is: $${minCharge}`);
}

else{
    console.log(`The total charge for this job is: $${totalCharge}`);
}

totalCharge < minCharge ? console.log(`The charge for this job is: $${minCharge}`) : console.log(`The total charge for this job is: $${totalCharge}`);

