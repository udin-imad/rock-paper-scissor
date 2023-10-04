function getComputerChoice() {
    const array = ['ROCK', 'PAPER', 'SCISSOR'];
    const random = Math.floor(Math.random() * array.length)
    return array[random];
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSOR'
        || playerSelection.toUpperCase() === 'SCISSOR' && computerSelection === 'PAPER'
        || playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK') {

            return(`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection}`);

        } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'PAPER'
        || playerSelection.toUpperCase() === 'SCISSOR' && computerSelection === 'ROCK'
        || playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'SCISSOR') {

            return(`You Lose! ${computerSelection} beats ${playerSelection.toUpperCase()}`);

        } else {
            return('TIED');
        }
};


