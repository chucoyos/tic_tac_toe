# tic_tac_toe
The Odin Project Tic Tac Toe game

1 store the gameboard as an array inside of a Gameboard object.

1.1 Your main goal here is to have as little global code as possible. Try tucking everything away inside of a module or factory. Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.

2 write a JavaScript function that will render the contents of the gameboard array to the webpage (for now you can just manually fill in the array with "X"s and "O"s).

3 build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker.

4 build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.

5 clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that congratulates the winning player!

> Optional - If you’re feeling ambitious create an AI so that a player can play against the computer!
Start by just getting the computer to make a random legal move.
Once you’ve gotten that, work on making the computer smart. It is possible to create an unbeatable AI using the minimax algorithm (read about it here, some googling will help you out with this one)
If you get this running definitely come show it off in the chatroom. It’s quite an accomplishment!