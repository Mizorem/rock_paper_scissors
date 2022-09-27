//start with 0 score//
let playerScore = 0;
let computerScore = 0;

//computer returning choice//
function getComputerChoice() {
    let choice = [
        'rock',
        'paper',
        'scissors'];

    let choicers = choice[Math.floor(Math.random()*choice.length)];
    return choicers;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You chose paper and I chose scissors :) , You Lose!" ;
        computerScore+=1;
    } else if (playerSelection == "paper" && computerSelection =="rock") {
        return "You chose paper and I chose rock ): , You Win!";
        playerScore+=1;
    } else if (playerSelection == "rock" && computerSelection =="scissors") {
        return "You chose rock and I chose scissors ): , You Win!";
        playerScore+=1;
    } else if (playerSelection == "rock" && computerSelection =="paper") {
        return "You chose rock and I chose paper :), You Lose!";
        computerScore+=1;
    } else if (playerSelection == "scissors" && computerSelection =="rock") {
        return "You chose scissors and I chose rock :) , You Lose!";
        computerScore+=1;
    } else if (playerSelection == "scissors" && computerSelection =="paper") {
        return "You chose scissors and I chose paper ): , You Win!";
        playerScore+=1;
    } else {
        return "It's a Draw?";
    }
    };

for (let i=0; i<5; i++) {
const playerSelection = prompt("Rock, Paper, or Scissors?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
};

//5 rounds//

    for(let i=0; i<5; i++) { {
        if (playerScore > computerScore) {
            console.log("You are a victor!");
        } else if (playerscore=computerScore) { console.log("We tied!")
        } else {console.log("You are a loser!")}
    }
};