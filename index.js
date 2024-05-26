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
// console.log(gethumanChoice());

// Declaring Players score variables

let humanScore = 0;
let computerScore = 0;

// Create a function to play a round
function playRound(humanSelection, computerSelection) {
    if((humanSelection === "rock" && computerSelection === "paper") || (humanSelection === "paper" && computerSelection === "scissors") || (humanSelection === "scissors" && computerSelection === "rock") ) {
        computerScore += 1;
        return `You lost! Play another round. || Scores: Computer: ${computerScore} - Human: ${humanScore}`;
    } else if((humanSelection === "paper" && computerSelection === "rock") || (humanSelection === "scissors" && computerSelection === "paper") || (humanSelection === "rock" && computerSelection === "scissors") ) {
        humanScore += 1;
        return `You won! Play another round. || Scores: Computer: ${computerScore} - Human: ${humanScore}`;
    } else {
        return `Tie! Play another round. || Scores: Computer: ${computerScore} - Human: ${humanScore}`;
    }
}

// const playerSelection = getHumanChoice();
// const computerSelection = getComputerChoice()
// console.log(playRound(playerSelection, computerSelection));

// Creating a function to play the game 5 times.

const playGame = () => {

}

