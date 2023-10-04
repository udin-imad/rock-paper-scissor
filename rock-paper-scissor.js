function getComputerChoice() {
    const array = ['Rock', 'Paper', 'Scissor'];
    const random = Math.floor(Math.random() * array.length)
    return array[random];
};