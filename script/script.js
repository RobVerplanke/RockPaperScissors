
// Randomly return either ‘rock’, ‘paper’ or ‘scissors’.
function computerPlay(){
    const options = ["steen", "papier", "schaar"];
    let computerSelection = Math.floor(Math.random() * 3);
    return options[computerSelection];
}

// Play a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection){
    if (
        playerSelection == "steen" && computerSelection == "papier" || 
        playerSelection == "papier" && computerSelection == "schaar" || 
        playerSelection == "steen" && computerSelection == "papier")
    {
        console.log(`Verloren! ${computerSelection} verslaat ${playerSelection}.`);
    }
    else if (
        playerSelection == "steen" && computerSelection == "schaar" || 
        playerSelection == "papier" && computerSelection == "steen" || 
        playerSelection == "schaar" && computerSelection == "papier")
    {
        console.log(`Gewonnen! ${playerSelection} verslaat ${computerSelection}.`);
    }
    else{
        console.log(`Gelijkspel! Beide ${playerSelection}`);
    }
}

const playerSelection = "papier";
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
//console.log(playRound(playerSelection, computerSelection));