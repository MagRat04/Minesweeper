const generatePlayerBoard = (numOfRows, numOfColumns) => {
    let board = [];

    for (let i = 0; i < numOfRows; i++) {
        let row = [];
        for (let j = 0; j < numOfColumns; j++) {
            row.push(' ');
        }
        board.push(row);
    }
    return (board);
};

const generateBombBoard = (numOfRows, numOfColumns, numOfBombs) => {
    let board = [];
    for (let i = 0; i < numOfRows; i++) {
        let row = [];
        for (let j = 0; j < numOfColumns; j++) {
            row.push(null);
        }
        board.push(row);
    }
    
    let nubmerOfBombsPlaced = 0;
    while (nubmerOfBombsPlaced < numOfBombs) {
        let randomRowIndex = Math.floor(Math.random() * numOfRows);
        let randomColIndex = Math.floor(Math.random() * numOfColumns);
        board[randomRowIndex][randomColIndex] = 'B';
        nubmerOfBombsPlaced++;
        //Has the potential to place bombs on top of already existing bombs

    }
    return (board);
}

const printBoard = (board) => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
}

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log("Player Board: ");
printBoard(playerBoard);
console.log("Bomb Board: ");
printBoard(bombBoard);
