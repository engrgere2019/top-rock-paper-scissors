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
function playRound(humanSelection, computerSelection) {
    if((humanSelection === "rock" && computerSelection === "paper") || (humanSelection === "paper" && computerSelection === "scissors") || (humanSelection === "scissors" && computerSelection === "rock") ) {
        return "You lost! Play another round.";
    } else if((humanSelection === "paper" && computerSelection === "rock") || (humanSelection === "scissors" && computerSelection === "paper") || (humanSelection === "rock" && computerSelection === "scissors") ) {
        return "You won! Play another round.";
    } else {
        return "Tie! Play another round."
    }
}

// const playerSelection = getHumanChoice();
// const computerSelection = getComputerChoice()
// console.log(playRound(playerSelection, computerSelection));