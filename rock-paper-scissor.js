function getComputerChoice() {
    const array = ['ROCK', 'PAPER', 'SCISSOR'];
    const random = Math.floor(Math.random() * array.length)
    return array[random];
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSOR'
        || playerSelection.toUpperCase() === 'SCISSOR' && computerSelection === 'PAPER'
        || playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK') {

            return(`Computer choose ${computerSelection}\nYou Win! ${playerSelection.toUpperCase()} beats ${computerSelection}`);

        } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'PAPER'
        || playerSelection.toUpperCase() === 'SCISSOR' && computerSelection === 'ROCK'
        || playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'SCISSOR') {

            return(`Computer choose ${computerSelection}\nYou Lose! ${computerSelection} beats ${playerSelection.toUpperCase()}`);

        } else {
            return('TIED');
        }
};

const playerSelection = prompt('Input your choices between\nROCK, PAPER or SCISSOR to play', '');
const result = playRound(playerSelection, getComputerChoice());
console.log(result);

