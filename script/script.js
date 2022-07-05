const container = document.querySelector('#container-div');

const gameContainer = document.createElement('div');
const gameText = document.createElement('div');
const gameButtons = document.createElement('div');
const scoreBoard = document.createElement('div');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');

let playerScore = 0;
let computerScore = 0;

gameContainer.classList.add('game-container');
gameText.classList.add('game-text');
gameButtons.classList.add('game-buttons');
scoreBoard.classList.add('game-scoreboard');
btn1.innerHTML = "Papier";
btn2.innerHTML = "Steen";
btn3.innerHTML = "Schaar";

btn1.addEventListener('click', () => playRound("PAPIER", computerPlay()));
btn2.addEventListener('click', () => playRound("STEEN", computerPlay()));
btn3.addEventListener('click', () => playRound("SCHAAR", computerPlay()));

gameButtons.appendChild(btn1);
gameButtons.appendChild(btn2);
gameButtons.appendChild(btn3);
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
        gameText.innerHTML = `Speler: ${playerSelectionValid}` + "<br>" + `Computer: ${computerSelection}` + "<br><br>" + `Computer wint ronde`;
        scoreBoard.innerHTML = `Tussenstand: ${playerScore} - ${computerScore}` + "<br>";
    }
    else if (
        playerSelectionValid == "STEEN" && computerSelection == "SCHAAR" || 
        playerSelectionValid == "PAPIER" && computerSelection == "STEEN" || 
        playerSelectionValid == "SCHAAR" && computerSelection == "PAPIER")
    {
        playerScore += 1;
        gameText.innerHTML = `Speler: ${playerSelectionValid}` + "<br>" + `Computer: ${computerSelection}` + "<br><br>" + `Speler wint ronde`;
        scoreBoard.innerHTML = `Tussenstand: ${playerScore} - ${computerScore}` + "<br>";
    }
    else if (playerSelectionValid === computerSelection)
    {
        gameText.innerHTML = `Speler: ${playerSelectionValid}` + "<br>" + `Computer: ${computerSelection}` + "<br><br>" + `Gelijkspel`;
        scoreBoard.innerHTML = `Tussenstand: ${playerScore} - ${computerScore}` + "<br>";
    }

    if (computerScore == 5){
        scoreBoard.innerHTML = "Computer wint wedstrijd! <br>";
        playerScore = 0;
        computerScore = 0;
    }
    else if (playerScore == 5){
        scoreBoard.innerHTML = "Speler wint wedstrijd! <br>";
        playerScore = 0;
        computerScore = 0;
    }
}