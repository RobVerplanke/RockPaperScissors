const container = document.querySelector('#container-div');

const gameContainer = document.createElement('div');
const gameText = document.createElement('div');
const gameButtons = document.createElement('div');
const scoreBoard = document.createElement('div');

gameContainer.classList.add('game-container');
gameText.classList.add('game-text');
gameButtons.classList.add('game-buttons');
scoreBoard.classList.add('game-scoreboard');

gameContainer.textContent = "gameContainer";
gameText.textContent = "gameText";
gameButtons.textContent = "gameButtons";
scoreBoard.textContent = "scoreBoard";


gameContainer.appendChild(gameText);
gameContainer.appendChild(gameButtons);
container.appendChild(gameContainer);
container.appendChild(scoreBoard);

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
        playerSelectionValid == "SCHAAR" && computerSelection == "STEEN")
    {
        computerScore += 1;
        console.log(`Computer wint: ${playerSelectionValid} - ${computerSelection} | Tussenstand: ${playerScore} - ${computerScore}`)
    }
    else if (
        playerSelectionValid == "STEEN" && computerSelection == "SCHAAR" || 
        playerSelectionValid == "PAPIER" && computerSelection == "STEEN" || 
        playerSelectionValid == "SCHAAR" && computerSelection == "PAPIER")
    {
        playerScore += 1;
        console.log(`Speler wint: ${playerSelectionValid} - ${computerSelection} | Tussenstand: ${playerScore} - ${computerScore}`)
    }
    else if (playerSelectionValid === computerSelection)
    {
        console.log(`Gelijk: ${playerSelectionValid} - ${computerSelection} | Tussenstand: ${playerScore} - ${computerScore}`)
    }
    else 
    {
        console.log(`Geen geldige invoer: '${playerSelection}'!`);
    }
}



// Play a 5 round game that keeps score and reports a winner or loser at the end.
// function game(){
//     playerScore = 0;
//     computerScore = 0;
    
//     for(let i = 0; i < 5; i++){
//         let playerSelection = prompt("Papier, steen of schaar?: ")
//         playRound(playerSelection, computerPlay());
//     }

//     if (playerScore > computerScore){
//         console.log(`Westrijd gewonnen met eindstand: ${playerScore} - ${computerScore}`);
//     }
//     else if (playerScore < computerScore){
//         console.log(`Westrijd verloren met eindstand: ${playerScore} - ${computerScore}`);
//     }
//     else {
//         console.log(`Gelijkspel met eindstand: ${playerScore} - ${computerScore}`);
//     }

// }