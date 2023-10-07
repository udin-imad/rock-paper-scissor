const player = document.querySelector('#player-score');
const computer = document.querySelector('#computer-score');
const result = document.querySelector('#result');
const winner = document.querySelector('#winner');
const reset = document.querySelector('#reset');
const buttons = document.querySelectorAll('.button button');

let playerScore = 0;
let computerScore = 0;
let gameRound = 5;

player.textContent = playerScore;
computer.textContent = computerScore;

function getComputerChoice() {
    const array = ['ROCK', 'PAPER', 'SCISSOR'];
    const random = Math.floor(Math.random() * array.length)
    return array[random];
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSOR'
        || playerSelection === 'SCISSOR' && computerSelection === 'PAPER'
        || playerSelection === 'PAPER' && computerSelection === 'ROCK') {
            playerScore++
            return (`Computer choose ${computerSelection}\nYou Win! ${playerSelection} beats ${computerSelection}`);

        } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER'
        || playerSelection === 'SCISSOR' && computerSelection === 'ROCK'
        || playerSelection === 'PAPER' && computerSelection === 'SCISSOR') {
            computerScore++
            return (`Computer choose ${computerSelection}\nYou Lose! ${computerSelection} beats ${playerSelection}`);

        } else {
            return (`Computer choose ${computerSelection} you choose ${playerSelection} TIED`);
        }
};

function score() {
    if (gameRound <= 0 && playerScore > computerScore) {
        winner.textContent = 'YOU WIN!!!';
    } else if (gameRound <= 0 && computerScore > playerScore) {
        winner.textContent = 'YOU LOSE!!!';
    } else if (gameRound <= 0 && computerScore === playerScore) {
        winner.textContent = 'TIED';
    };
};

function game() {
    result.textContent = playRound(playerSelection, getComputerChoice());
    player.textContent = playerScore;
    computer.textContent = computerScore; 
};

function round() {
    gameRound--;
    score();
    if ( gameRound >= 0 ) {
        console.log(gameRound);
        return game();
    }   else {
        return;
    }
}

buttons.forEach((btn) => {
    playerSelection = btn.id;
    btn.addEventListener('click', round);
});