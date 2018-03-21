//Formatting the empty array for the game board
const printBoard = board => {
    console.log('Current Board: ');
    console.log(board[0].join(' | '));
    console.log(board[1].join(' | '));
    console.log(board[2].join(' | '));
    
};

//Empty Array that sets up the game board
const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

//displays the properly formatted game board
printBoard(board);

board[0][1] = 1;
board[2][2] = 'B';

printBoard(board);