const gameController = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];
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

  const player1Cells = [];
  const player2Cells = [];
  const checkWin = () => {
    winningCombos.forEach(combo => {
      if(combo.every(cell => player1Cells.includes(cell.toString()))) {
        alert('Player 1 wins!');
        resetGame();
      } else if(combo.every(cell => player2Cells.includes(cell.toString()))) {
        alert('Player 2 wins!');
        resetGame();
      } else if(player1Cells.length + player2Cells.length === 9) {
        alert('Draw!');
        resetGame();
      }
    });
  };
  const resetGame = () => {
    player1Cells.length = 0;
    player2Cells.length = 0;
    cells.forEach(cell => {
      cell.textContent = '';
      cell.dataset.taken = 'false';
    });
  };
   
  const player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    return { getName, getSymbol };
  };
  const player1 = player('Player 1', 'X');
  const player2 = player('Player 2', 'O');
  let currentPlayer = player1;
  const cells = document.querySelectorAll('.cell');
  
  const handleClick = (e) => {
    if(e.target.dataset.taken === 'true') {
      alert('Cell is already taken');
    } else {
      e.target.textContent = currentPlayer.getSymbol();
      if(currentPlayer === player1) {
        player1Cells.push(e.target.dataset.index);
      } else {
        player2Cells.push(e.target.dataset.index);
      }
      currentPlayer = currentPlayer === player1 ? player2 : player1;
      checkWin();
    }
    e.target.dataset.taken = 'true';
  }

  cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
  });
})();



