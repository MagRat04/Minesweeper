export class Board {
    constructor(numOfRows, numOfColumns, numOfBombs) {
        this._numberOfBombs = numOfBombs;
        this._numberOfTiles = numOfRows * numOfColumns;
        this._playerBoard = Board.generatePlayerBoard(numOfRows, numOfColumns);
        this._bombBoard = Board.generateBombBoard(numOfRows, numOfColumns, numOfBombs);
    }

    get playerBoard() {
        return this._playerBoard;
    }

    flipTile(rowIndex, columnIndex) {
        if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
            console.log("This tile has already been flipped!");
            return
        } else if (this._bombBoard[rowIndex][columnIndex] == 'B') {
            this._playerBoard[rowIndex][columnIndex] = 'B';
        } else {
            this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        }
        this._numberOfTiles--;
    }

    getNumberOfNeighborBombs(rowIndex, columnIndex) {
        const neighborOffsets = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, 1],
            [1, 1],
            [1, 0],
            [1, -1],
            [0, -1]
        ];
        const numberOfRows = this._bombBoard.length;
        const numberOfColumns = this._bombBoard[0].length;
        let numberOfBombs = 0;

        neighborOffsets.forEach(offset => {
            const neighborRowIndex = rowIndex + offset[0];
            const neighborColumnIndex = columnIndex + offset[1];
            if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
                if (this._bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
                    numberOfBombs++;
                };
            };
        });
        return numberOfBombs;
    };

    hasSafeTiles() {
        return this._numberOfTiles !== this._numberOfBombs;
    };

    print() {
        console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
    };

    static generatePlayerBoard(numOfRows, numOfColumns) {
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

    static generateBombBoard(numOfRows, numOfColumns, numOfBombs) {
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
};