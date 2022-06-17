
// Randomly return either ‘rock’, ‘paper’ or ‘scissors’.
function computerPlay(){
    const options = ["STEEN", "PAPIER", "SCHAAR"];
    let computerSelection = Math.floor(Math.random() * 3);
    return options[computerSelection];
}

// Play a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection){
    playerSelectionValid = playerSelection.toUpperCase();
    if (
        playerSelectionValid == "STEEN" && computerSelection == "PAPIER" || 
        playerSelectionValid == "PAPIER" && computerSelection == "SCHAAR" || 
        playerSelectionValid == "STEEN" && computerSelection == "PAPIER")
    {
        return `Verloren! ${computerSelection} verslaat ${playerSelectionValid}.`;
    }
    else if (
        playerSelectionValid == "STEEN" && computerSelection == "SCHAAR" || 
        playerSelectionValid == "PAPIER" && computerSelection == "STEEN" || 
        playerSelectionValid == "SCHAAR" && computerSelection == "PAPIER")
    {
        return `Gewonnen! ${playerSelectionValid} verslaat ${computerSelection}.`;
    }
    else if (playerSelectionValid === computerSelection)
    {
        return `Gelijkspel! Beide kozen voor ${playerSelectionValid}.`;
    }
    else 
    {
        return "Geen geldige invoer!";
    }
}

const playerSelection = prompt("Papier, steen of schaar?: ")
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));