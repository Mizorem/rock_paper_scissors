

//computer returning choice//
function getComputerChoice() {
    let choice = [
        'rock',
        'paper',
        'scissors'];

    let choicers = choice[Math.floor(Math.random()*choice.length)];
    return choicers;
}

//start with 0 score//
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You chose paper and I chose scissors :) , You Lose!" ;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection =="rock") {
        playerScore++;
        return "You chose paper and I chose rock ): , You Win!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection =="scissors") {
        playerScore++;
        return "You chose rock and I chose scissors ): , You Win!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection =="paper") {
        computerScore++;
        return "You chose rock and I chose paper :), You Lose!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection =="rock") {
        computerScore++;
        return "You chose scissors and I chose rock :) , You Lose!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection =="paper") {
        playerScore++;
        return "You chose scissors and I chose paper ): , You Win!";
    } else if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a Draw?"
    } else {
        return "Hey, you have to choose between rock, paper, scissors >:("
    }
    };


//5 rounds//
function game() {

    for(let i=0; i<5; i++)  {
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = getComputerChoice();
        const rounds = playRound(playerSelection, computerSelection);
        console.log(rounds);
    }
    if (playerScore > computerScore) {
            console.log("You are a victor!");
        } else if (playerScore===computerScore) { 
            console.log("We tied!")
        } else {
            console.log("You are a loser!")
        }
};
console.log(game());