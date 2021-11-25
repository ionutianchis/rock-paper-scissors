let gameCount = 0
let playerScore = 0;
let computerScore = 0;
let playerSelection;
const header_text = document.getElementById('header-container')

function computerPlay() {
    let cChoice = ["rock", "paper", "scissors"]
    return cChoice[Math.floor(Math.random()* 3)];
};


function playRound(playerSelection, computerSelection) {
    if ( playerSelection == "rock" && computerSelection == "scissors") {
        roundRes.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        gameCount++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        roundRes.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        gameCount++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundRes.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        gameCount++;
    } else if (playerSelection == computerSelection) {
        roundRes.textContent = "It's a tie!"
    } else {
        roundRes.textContent = `You lost! ${playerSelection} is beaten by ${computerSelection}`
        gameCount++;
        computerScore++;
    };
};

function game() {
        header_text.textContent = ""
        score.textContent = `${playerScore} - ${computerScore}`;
        if (playerScore > computerScore && gameCount == 5) {
            finalResult.textContent = "Game over. You win ! Refresh to play again."
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        } else if (playerScore < computerScore && gameCount == 5) {
            finalResult.textContent = "Game over. You lost ! Refresh to play again."
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        };
    
};


const score = document.getElementById("score")
const roundRes = document.getElementById("roundRes")
const finalResult = document.getElementById("finalResult")
const rockButton = document.getElementById("rock")
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const git_btn = document.getElementById('git_btn')

rockButton.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    game();
});


paperButton.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    game();
});


scissorsButton.addEventListener('click', () => {
    playerSelection = 'scissors';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    game();
});


git_btn.addEventListener('click', () => {
	window.open('https://github.com/Jonthejon10')
})