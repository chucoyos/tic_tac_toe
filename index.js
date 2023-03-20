const gameController = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];
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
    console.log(e.target.dataset.taken);
    if(e.target.dataset.taken === 'true') {
      alert('Cell is already taken');
    } else {
      e.target.textContent = currentPlayer.getSymbol();
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
    e.target.dataset.taken = 'true';
  }

  cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
  });
})();



