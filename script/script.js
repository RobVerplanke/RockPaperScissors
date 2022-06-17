
// Randomly return either ‘rock’, ‘paper’ or ‘scissors’.
function computerPlay(){
    const options = ["steen", "papier", "schaar"];
    let computerSelection = Math.floor(Math.random() * 3);
    return options[computerSelection];
}

// Play a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection){
    if (
        playerSelection == "STEEN" && computerSelection == "PAPIER" || 
        playerSelection == "PAPIER" && computerSelection == "SCHAAR" || 
        playerSelection == "STEEN" && computerSelection == "PAPIER")
    {
        console.log(`Verloren! ${computerSelection} verslaat ${playerSelection}.`);
    }
    else if (
        playerSelection == "STEEN" && computerSelection == "SCHAAR" || 
        playerSelection == "PAPIER" && computerSelection == "STEEN" || 
        playerSelection == "SCHAAR" && computerSelection == "PAPIER")
    {
        console.log(`Gewonnen! ${playerSelection} verslaat ${computerSelection}.`);
    }
    else if (playerSelection === computerSelection)
    {
        console.log(`Gelijkspel! Beide kozen voor ${playerSelection}`);
    }
    else 
    {
        console.log("Geen geldige invoer!");
    }
}

const playerSelection = prompt("Papier, steen of schaar?: ")
const computerSelection = computerPlay();
playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase());
//console.log(playRound(playerSelection, computerSelection));