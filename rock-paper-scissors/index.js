function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];

    const result = choices[Math.floor(Math.random() * choices.length)];
    console.log(result);
    return result;
}

function getHumanChoice(){
    const humanChoice = prompt("Rock, paper or scissors?");
    console.log(humanChoice);
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper!");
        humanScore++;
    } else {
        console.log("It's a draw!");
    }
}

function playGame(){
    
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

playGame();