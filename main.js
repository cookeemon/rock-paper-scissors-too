const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const winner = document.querySelector('.winner');
console.log(playerScore);

buttons.forEach((button) => {
    button.addEventListener('click', playRound);
    
});

function getComputerChoice() {
    const RPS = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * RPS.length);
    return RPS[randomChoice];
}

function getPlayerChoice(e) {
    if(e.target.className == 'rockBtn') return 'rock';
    if(e.target.className == 'paperBtn') return 'paper';
    if(e.target.className == 'scissorsBtn') return 'scissors';
}

const updatePlayerScore = () => {
    let currScore = parseInt(playerScore.textContent);
    currScore += 1;
    playerScore.textContent = currScore;
    updateWinner();
}

const updateComputerScore = () => {
    let currScore = parseInt(computerScore.textContent);
    currScore += 1;
    computerScore.textContent = currScore;
    updateWinner();
}

const updateWinner = () => {
    if (+(playerScore.textContent) == 5) {
        winner.textContent = 'You Win!' 
        resetGame();
        }

    if (+(computerScore.textContent) == 5) {
        winner.textContent = 'You Lose!'
        resetGame();
    }
}

const resetGame = () => {
    playerScore.textContent   = 0;
    computerScore.textContent = 0;
    winner.textContent        = 'None';
}

function playRound(e) {
    let computerSelected = getComputerChoice();
    let playerSelected   = getPlayerChoice(e);

    console.log(`You Chose: ${playerSelected}`);
    console.log(`Computer Chose: ${computerSelected}`);

    switch (true) {
        
        case (playerSelected.toLowerCase() === computerSelected.toLowerCase()) : {
            break;
           }

        case (playerSelected.toLowerCase()   === "rock"
           && computerSelected.toLowerCase() === "scissors") : {
            updatePlayerScore();
            break;
           }
        
        case (playerSelected.toLowerCase()     === "scissors"
           && computerSelected.toLowerCase()   === "paper") : {
            updatePlayerScore();
            break;
           }

        case (playerSelected.toLowerCase()     === "paper"
           && computerSelected.toLowerCase()   === "rock") : {
            updatePlayerScore();
            break;
           }
        
        case (playerSelected.toLowerCase()     === "scissors"
           && computerSelected.toLowerCase()   === "rock") : {
            updateComputerScore();
            break;
           }

        case (playerSelected.toLowerCase()     === "paper"
           && computerSelected.toLowerCase()   === "scissors") : {
            updateComputerScore();
            break;
           }

        case (playerSelected.toLowerCase()     === "rock"
           && computerSelected.toLowerCase()   === "paper") : {
            updateComputerScore();
            break;
           }
    }
}