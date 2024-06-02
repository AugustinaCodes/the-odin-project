// writing code for the computer choice, so it randomly returns one of the following string values "rock", "paper", "scissors".

function getComputerChoice(){
    // first we need to put the choices in a variable, to store them somewhere. So put these strings in an array
    const choices = ["rock", "paper", "scissors"];

    // Math.random returns a random number that's >= 0 and <1. If we want to get a number between 0 and 10, we need to multiply the answe by 10, eg Math.Random() * 10
    // I'd also need to use Math.floor as it rounds a number down to an integer
    // So I put choices[code]. The code inside calculates a number randomly, so the result displays always a random string from an array. 

    const result = choices[Math.floor(Math.random() * choices.length)];

    return result;
}

console.log(getComputerChoice());