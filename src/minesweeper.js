class Board {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfRows * numberOfColumns;
        this._playerBoard = generatePlayerBoard(numOfRows, numOfColumns);
        this._bombBoard = generateBombBoard(numOfRows, numOfColumns, numOfBombs);
    }

    get playerBoard() {
        return this._playerBoard;
    }

    flipTile = (rowIndex, columnIndex) => {
        if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
            console.log("This tile has already been flipped!");
            return
        } else if (this._bombBoard[rowIndex][columnIndex] == 'B') {
            this._playerBoard[rowIndex][columnIndex] = 'B';
        } else {
            this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        }
        this._numberOfTiles --;
    }
    
}



const generatePlayerBoard = (numOfRows, numOfColumns) => {
    let board = [];

    for (let i = 0; i < numOfRows; i++) {
        let row = [];
        for (let j = 0; j < numOfColumns; j++) {
            row.push(' ');
        };
        board.push(row);
    };
    return (board);
};

const generateBombBoard = (numOfRows, numOfColumns, numOfBombs) => {
    let board = [];
    for (let i = 0; i < numOfRows; i++) {
        let row = [];
        for (let j = 0; j < numOfColumns; j++) {
            row.push(null);
        };
        board.push(row);
    };
    
    let nubmerOfBombsPlaced = 0;
    while (nubmerOfBombsPlaced < numOfBombs) {
        let randomRowIndex = Math.floor(Math.random() * numOfRows);
        let randomColIndex = Math.floor(Math.random() * numOfColumns);

        if (board[randomRowIndex][randomColIndex] !== 'B') {
            board[randomRowIndex][randomColIndex] = 'B';
            nubmerOfBombsPlaced++;
        };

        board[randomRowIndex][randomColIndex] = 'B';
        nubmerOfBombsPlaced++;
    
    };
    return (board);
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
    const neighborOffsets =[
        [-1,-1],
        [-1,0],
        [-1,1],
        [0,1],
        [1,1],
        [1,0],
        [1,-1],
        [0,-1]
    ];
    const numberOfRows = bombBoard.length;
    const numberOfColumns = bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffsets.forEach(offset => {
        const neighborRowIndex = rowIndex + offset[0];
        const neighborColumnIndex = columnIndex + offset[1];
        if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 &&neighborColumnIndex < numberOfColumns) {
            if (bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
                numberOfBombs++;
            };
        };
    });
    return numberOfBombs;
};



const printBoard = (board) => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log("Player Board: ");
printBoard(playerBoard);
console.log("Bomb Board: ");
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 1, 1);
console.log('Updated Player Board: ');
printBoard(playerBoard);