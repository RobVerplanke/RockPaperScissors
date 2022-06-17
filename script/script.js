
// Randomly return either ‘rock’, ‘paper’ or ‘scissors’.
function computerPlay(){
    const options = ["rock", "paper", "scissors"];
    let computerSelection = Math.floor(Math.random() * 3);
    return options[computerSelection];
}

// Play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors")|| 
        (playerSelection == "rock" && computerSelection == "paper")
        console.log("Verloren");
    else if (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "rock" && computerSelection == "scissors")
        console.log("Gewonnen");
    else 
        console.log("Gelijkspel");
    
}

}
console.log(computerPlay());
const playerSelection = "paper";
const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));