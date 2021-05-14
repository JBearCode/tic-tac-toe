const gameStatusMessage = document.getElementById('game-status');

let gameActive = true;

let currentPlayer = "X";

let gameBoard = ["","","","","","","","",""];

const winningMessage = () => `${currentPlayer} wins!`
const tieMessage = "It's a tie";
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

gameStatusMessage.innerText = currentPlayerTurn();

function handleClick(e) {
  const clickedSquare = e.target;
  const clickedSquareNumber = parseInt(clickedSquare.getAttribute('data-key'));

  if (gameBoard[clickedSquareNumber] !== "" || !gameActive) {
      return;
  }

  handlePlay(clickedSquare, clickedSquareNumber);
  handleResult();
}

function handlePlay(clickedElement, squareIndex) {
  gameBoard[squareIndex] = currentPlayer;
  clickedElement.innerText = currentPlayer;
}

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleResult() {
  let gameWon = false;
  for (let i = 0; i <= 7; i++) {
    let a = gameBoard[winningCombos[i][0]];
    let b = gameBoard[winningCombos[i][1]];
    let c = gameBoard[winningCombos[i][2]];
    
    if (!a || !b || !c) {
      continue;
    }
    if (a === b && b === c) {
      gameWon = true;
      break;
      }
  }
  if (gameWon) {
      gameStatusMessage.innerText = winningMessage();
      gameActive = false;
      return
  }
  let tieGame = !gameBoard.includes("");
  if (tieGame) {
      gameStatusMessage.innerText = tieMessage;
      gameActive = false;
      return;
  }
  changePlayer();
}

function changePlayer() {
  currentPlayer = currentPlayer=== "X" ? "O" : "X";
  gameStatusMessage.innerText = currentPlayerTurn();
  console.log('changePlayer() ran');
}

function restartGame() {
  gameBoard = ["","","","","","","","",""];
  document.querySelectorAll('.board-square').forEach(square => square.innerText = "");
  gameActive = true;
  currentPlayer = "X";
  gameStatusMessage.innerText = currentPlayerTurn();
}

document.querySelectorAll('.board-square').forEach(square => square.addEventListener('click', handleClick));
document.getElementById('restart-game').addEventListener('click', restartGame);