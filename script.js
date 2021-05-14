const gameStatusMessage = document.getElementById('game-status');

let gameActive = true;

let currentPlayer = "X";

let gameBoard = ["","","","","","","","",""];

const winningMessage = () => `${currentPlayer} wins!`
const tieMessage = "It's a tie!";
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

gameStatusMessage.innerText = currentPlayerTurn();

function handleClick() {

}

function handlePlay() {

}

function changePlayer() {

}

function restartGame() {

}