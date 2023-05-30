/* Functions and variables for automatic image shuffling */
const cmpImgContainer = document.querySelector('.cmp-selection-container');
const cmpImages = Array.from(cmpImgContainer.getElementsByTagName('img'));
let currentIndex = 0;
let shufflingInterval;
startShuffling();

function startShuffling() {
    shufflingInterval = setInterval(changeImage, 300);
}
  
function changeImage() {
    cmpImages.forEach((img, index) => {
        if (index === currentIndex) {
            img.classList.remove('hidden');
        } else {
            img.classList.add('hidden');
        }
    });
    currentIndex = (currentIndex + 1) % cmpImages.length;
}

function stopShuffling() {
    clearInterval(shufflingInterval);
    setTimeout(startShuffling, 800);
};

/* Function for getting and displaying a random choice by the program*/
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * cmpImages.length);
    const randomImage = cmpImages[randomIndex];
    displayComputerChoice(randomIndex);
    const computerChoice = randomImage.classList.toString().split(' ');
    return computerChoice[0];
}

function displayComputerChoice(randomIndex) {
    cmpImages.forEach((img, index) => {
        if (randomIndex === index) {
            img.classList.remove('hidden');
        } else {
            img.classList.add('hidden');
        }
    });
}

/* Functions and Variables for player and their selection*/

const userSelection = document.querySelectorAll('.user-selection-container img');

userSelection.forEach(image => {
    image.addEventListener('click', playerClicked);
});

function playerClicked(e) { 
        stopShuffling();
        stopPlayerClicking();
        const roundResult = playRound(e.target.className);
        updateScore(roundResult);
        gameEnd();
}

function stopPlayerClicking() {
    userSelection.forEach(image => {
        image.removeEventListener('click', playerClicked);
        image.style.pointerEvents = 'none'
    });
    setTimeout(() => {
        userSelection.forEach(image => {
          image.addEventListener('click', playerClicked);
          image.style.pointerEvents = 'auto'
        });
    }, 1000);
}

const tryAgainBtn = document.querySelector('.try-again button');

tryAgainBtn.addEventListener('click', () => {
    playerScore.textContent = 0;
    cmpScore.textContent = 0;
    gamePanel.classList.toggle('hidden');
    tryAgainPanel.classList.toggle('hidden');
});

const roundResultDisplay = document.querySelector('.roundResultDisplay');
const playerScore = document.querySelector('.player-score');
const cmpScore = document.querySelector('.cmp-score');

function updateScore(roundResult) {
    if      (roundResult == 'draw')roundResultDisplay.textContent = 'Round Draw';
    else if (roundResult == 'win' ) {
        roundResultDisplay.textContent = 'Round Win';
        playerScore.textContent = +(playerScore.textContent)+ 1;
    }
    else if (roundResult == 'lost') {
        roundResultDisplay.textContent= 'Round Lost';
        cmpScore.textContent = +(cmpScore.textContent)+ 1;
    }
        
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    switch (true) {
        
        case (playerChoice === computerChoice) : {
            return 'draw';
           }

        case (playerChoice   === "rock"
           && computerChoice === "scissors") : {
            return 'win';
           }
        
        case (playerChoice     === "scissors"
           && computerChoice   === "paper") : {
            return 'win';
           }

        case (playerChoice     === "paper"
           && computerChoice   === "rock") : {
            return 'win';
           }
        
        case (playerChoice     === "scissors"
           && computerChoice   === "rock") : {
            return 'lost';
           }

        case (playerChoice     === "paper"
           && computerChoice   === "scissors") : {
            return 'lost';
           }

        case (playerChoice     === "rock"
           && computerChoice   === "paper") : {
            return 'lost';
           }
    }
}

const gamePanel = document.querySelector('.game-panel');
const tryAgainPanel = document.querySelector('.try-again');
const tryAgainPanelText = document.querySelector('.try-again p');

function gameEnd() {
    if(playerScore.textContent == '5') {
        console.log(playerScore);
        tryAgainPanelText.textContent = 'Victory!!!'
        gamePanel.classList.toggle('hidden');
        tryAgainPanel.classList.toggle('hidden');
    }
    else if (cmpScore.textContent == '5') {
        console.log(cmpScore);
        tryAgainPanelText.textContent = 'Lost Against a Dumb Program. Ha Ha Ha!'
        gamePanel.classList.toggle('hidden');
        tryAgainPanel.classList.toggle('hidden');
    }
}
