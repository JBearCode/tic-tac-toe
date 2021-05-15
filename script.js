
// Game Module containing all code except for two event listeners at bottom
// All variables and functions private except for the 2 called by event listeners
let gameModule = (function() {
    'use strict';
    // all module code here
    // variables
    const gameStatusMessage = document.getElementById('game-status');
    let gameActive = true;
    let currentPlayer = "X";
    let gameBoard = ["","","","","","","","",""]; 
    
    const winningMessage = () => `${currentPlayer} wins!`
    const tieMessage = "It's a tie";
    const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
    gameStatusMessage.innerText = currentPlayerTurn();

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

    // main public function for gameplay
    function handleClick(e) {
        const clickedSquare = e.target;
        const clickedSquareNumber = parseInt(clickedSquare.getAttribute('data-key'));
      
        if (gameBoard[clickedSquareNumber] !== "" || !gameActive) {
            return;
        }
      
        handlePlay(clickedSquare, clickedSquareNumber);
        handleResult();
    }
    // private function if player chooses valid square
    function handlePlay(clickedElement, squareIndex) {
        gameBoard[squareIndex] = currentPlayer;
        clickedElement.innerText = currentPlayer;
        if (currentPlayer === "X") {
          clickedElement.style.color = '#219EBC';
        } else {
          clickedElement.style.color = '#FB8500';
        }
    }
    // private function to check if game is finished and transition player turns
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
            changeMessageColor('004466')
            gameActive = false;
            return;
        }
        let tieGame = !gameBoard.includes("");
        if (tieGame) {
            gameStatusMessage.innerText = tieMessage;
            changeMessageColor('004466')
            gameActive = false;
            return;
        }
        changePlayer();
    }
    // update message color to correspond with upcoming player turn
    function changeMessageColor(color) {
        gameStatusMessage.style.color = "#" + color;
    }
    // change to next player's turn after move
    function changePlayer() {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        gameStatusMessage.innerText = currentPlayerTurn();
        if (currentPlayer === "X") {
            changeMessageColor('219EBC')
        } else {
            changeMessageColor('FB8500')
        }
      }
    
    function restartGame() {
        gameBoard = ["","","","","","","","",""];
        document.querySelectorAll('.board-square').forEach(square => square.innerText = "");
        gameActive = true;
        currentPlayer = "X";
        gameStatusMessage.innerText = currentPlayerTurn();
      }

    // list public functions and variables  
    return { handleClick, restartGame };
})();

//
document.querySelectorAll('.board-square').forEach(square => square.addEventListener('click', gameModule.handleClick));
document.getElementById('restart-game').addEventListener('click', gameModule.restartGame);