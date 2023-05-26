/* 
- Make a function getComputerChoice() which randomly selects
 between rock paper and scissor and returns the selected.

- Make a function getPlayerChoice() which prompts the player
 to select between the 3 options.

 - Make a function playRound() that compares the two choices
  and checks if player lost or won.
  (e.g. "You Lose! Paper beats Rock." || "You Won! Scissors beats Paper." )

- Make a game() class that loops 5 times until the game is over.
 Declare the winner at the end. (Optional: Make a button to
 restart the game.)

*/


function getComputerChoice() {
    const RPS = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * RPS.length);
    return RPS[randomChoice];
}

function getPlayerChoice() {
    return prompt("Type Rock, Paper, or Scissors");
}

function playRound() {
    let computerSelected;
    let playerSelected;

    console.log(`You Chose: ${playerSelected = getPlayerChoice()}`);
    console.log(`Computer Chose: ${computerSelected = getComputerChoice()}`);

    switch (true) {
        
        case (playerSelected.toLowerCase() === computerSelected.toLowerCase()) : {
            return 0;
           }

        case (playerSelected.toLowerCase()   === "rock"
           && computerSelected.toLowerCase() === "scissors") : {
            return 1;
           }
        
        case (playerSelected.toLowerCase()     === "scissors"
           && computerSelected.toLowerCase()   === "paper") : {
            return 1;
           }

        case (playerSelected.toLowerCase()     === "paper"
           && computerSelected.toLowerCase()   === "rock") : {
            return 1;
           }
        
        case (playerSelected.toLowerCase()     === "scissors"
           && computerSelected.toLowerCase()   === "rock") : {
            return 2;
           }

        case (playerSelected.toLowerCase()     === "paper"
           && computerSelected.toLowerCase()   === "scissors") : {
            return 2;
           }

        case (playerSelected.toLowerCase()     === "rock"
           && computerSelected.toLowerCase()   === "paper") : {
            return 2;
           }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while(playerScore < 5 && computerScore < 5) {
        let winOrLose = playRound();
        if      (winOrLose == 1) playerScore++;
        else if (winOrLose == 2) computerScore++;

        console.log(playerScore);
        console.log(computerScore);
    }

    if(playerScore == 5) console.log("Victory!");
    else console.log("Loser!");
}

game();