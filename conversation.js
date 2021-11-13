const prompt = require("prompt-sync")();


//This program provides different responses based on the users input

const name = prompt("Please enter your name: ");

console.log(`Welcome to our show, ${name}`);

const age = prompt("How old are you? ");

if (age < 22){
    console.log ("Sorry, you have not satisfied the age requirements.")
}

else{

    youngerAge = age - 5;

    console.log(`Hmmmm, you don't look a day over, ${youngerAge}`)
}

if (age > 22)
{
    const carsOwned = parseInt(prompt(`Tell me, ${name} how many cars do you own? `));

    if (carsOwned === 0){

        console.log(`Come on now ${name} you are ${youngerAge} and do not own a car!`)
    }

    else{
        const carinfo = prompt(`${name}, what is the brand and model of your car? `);
        console.log(`The ${carinfo} is a great choice for a car.`);
        console.log(`${name}, have a great day. Good bye!!`);
    }    
}




