const gameStatusMessage = document.getElementById('game-status');

let gameActive = true;

let currentPlayer = "X";

let gameBoard = ["","","","","","","","",""];

const winningMessage = () => `${currentPlayer} wins!`
const tieMessage = "It's a tie!";
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

gameStatusMessage.innerText = currentPlayerTurn();

function handleClick(e) {
  const clickedSquare = e.target;
  const clickedSquareNumber = parseInt(clickedSquare.getAttribute('data-key'));

  if (gameBoard[clickedSquareNumber] !== "" || !gameActive) {
      return;
  }

  handlePlay(clickedSquare, clickedSquareNumber);
  checkGameStatus();
}

function handlePlay(clickEvent, squareIndex) {

}

function changePlayer() {

}

function restartGame() {

}

function checkGameStatus() {
    
}

document.querySelectorAll('.board-square').forEach(square => square.addEventListener('click', handleClick));
document.getElementById('restart-game').addEventListener('click', restartGame);