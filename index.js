const board = [
  ['X', 'X', 'O'],
  ['O', 'O', 'X'],
  ['O', 'X', 'O']
]
const humanPlayer = {
  name: 'Human Player',
  symbol: 'X'
}
const computerPlayer = {
  name: 'Computer Player',
  symbol: 'O'
}

function evaluate() {
  // check rows
  for(let row = 0; row < 3; row++) {
     if(board[row][0] === board[row][1] && board[row][1] === board[row][2]){
      if(board[row][0] === humanPlayer.symbol){
        console.log('Human Player wins')
        return - 10
      } else {
        console.log('Computer Player wins')
        return + 10
      }
     }
  }
  //check for columns
  for(let col = 0; col < 3; col++){
    if(board[0][col] === board[1][col] && board[1][col] === board[2][col]){
      if(board[0][col] === humanPlayer.symbol){
        console.log('Human Player wins')
        return - 10
      } else {
        console.log('Computer Player wins')
        return + 10
      }
    }
  }
  // check for diagonals
  for(let col = 0; col < 3; col++){//TODO
    if(board[0][col] === board[1][col + 1] && board[1][col + 1] === board[2][col + 2]){
      if(board[0][col] === humanPlayer.symbol){
        console.log(humanPlayer.name + ' wins')
        return - 10
      } else {
        if(board[0][col] === computerPlayer.symbol){
          console.log(computerPlayer.name + ' wins')
          return + 10
        }
      }
    } else if(board[0][2] === board[1][1] && board[1][1] === board[2][0]){
      if(board[0[2]] === humanPlayer.symbol){
        console.log(humanPlayer.name + ' wins')
        return - 10
      } else {
        console.log(computerPlayer.name + ' wins')
        return + 10
      }
    }
  }
}

evaluate()


