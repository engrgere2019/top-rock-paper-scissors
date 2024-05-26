/* ------- Rock Paper Scissors ------- */

// Create a function to get computer choice
    // - give the function a name
    function getComputerChoice() {
        randInt = Math.floor(Math.random() * 3) + 1;
        if(randInt === 1) {
            return "rock";
        }
        if(randInt === 2) {
            return "paper";
        }
        if(randInt === 3) {
            return "scissors";
        }
    }
// console.log(getComputerChoice());

// Create a function to get player choice
function getHumanChoice() {
    let humanChoice = prompt("Enter any word from: rock, paper and scissors: ").toLowerCase();
    while(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors"){
        humanChoice = prompt("Enter any word from: rock, paper and scissors: ").toLowerCase(); 
    }
    return(humanChoice);
}
// console.log(getPlayerChoice());

// Create a function to play a round
function playRound(playerSelection, computerSelection) {
    if((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock") ) {
        return "You lost! Play another round.";
    } else if((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors") ) {
        return "You won! Play another round.";
    } else {
        return "Tie! Play another round."
    }
}

const playerSelection = getHumanChoice();
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection));