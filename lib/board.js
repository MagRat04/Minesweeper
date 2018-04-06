'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = exports.Board = function () {
    function Board(numOfRows, numOfColumns, numOfBombs) {
        _classCallCheck(this, Board);

        this._numberOfBombs = numOfBombs;
        this._numberOfTiles = numOfRows * numOfColumns;
        this._playerBoard = Board.generatePlayerBoard(numOfRows, numOfColumns);
        this._bombBoard = Board.generateBombBoard(numOfRows, numOfColumns, numOfBombs);
    }

    _createClass(Board, [{
        key: 'flipTile',
        value: function flipTile(rowIndex, columnIndex) {
            if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
                console.log("This tile has already been flipped!");
                return;
            } else if (this._bombBoard[rowIndex][columnIndex] == 'B') {
                this._playerBoard[rowIndex][columnIndex] = 'B';
            } else {
                this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
            }
            this._numberOfTiles--;
        }
    }, {
        key: 'getNumberOfNeighborBombs',
        value: function getNumberOfNeighborBombs(rowIndex, columnIndex) {
            var _this = this;

            var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
            var numberOfRows = this._bombBoard.length;
            var numberOfColumns = this._bombBoard[0].length;
            var numberOfBombs = 0;

            neighborOffsets.forEach(function (offset) {
                var neighborRowIndex = rowIndex + offset[0];
                var neighborColumnIndex = columnIndex + offset[1];
                if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
                    if (_this._bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
                        numberOfBombs++;
                    };
                };
            });
            return numberOfBombs;
        }
    }, {
        key: 'hasSafeTiles',
        value: function hasSafeTiles() {
            return this._numberOfTiles !== this._numberOfBombs;
        }
    }, {
        key: 'print',
        value: function print() {
            console.log(this._playerBoard.map(function (row) {
                return row.join(' | ');
            }).join('\n'));
        }
    }, {
        key: 'playerBoard',
        get: function get() {
            return this._playerBoard;
        }
    }], [{
        key: 'generatePlayerBoard',
        value: function generatePlayerBoard(numOfRows, numOfColumns) {
            var board = [];

            for (var i = 0; i < numOfRows; i++) {
                var row = [];
                for (var j = 0; j < numOfColumns; j++) {
                    row.push(' ');
                };
                board.push(row);
            };
            return board;
        }
    }, {
        key: 'generateBombBoard',
        value: function generateBombBoard(numOfRows, numOfColumns, numOfBombs) {
            var board = [];
            for (var i = 0; i < numOfRows; i++) {
                var row = [];
                for (var j = 0; j < numOfColumns; j++) {
                    row.push(null);
                };
                board.push(row);
            };

            var nubmerOfBombsPlaced = 0;
            while (nubmerOfBombsPlaced < numOfBombs) {
                var randomRowIndex = Math.floor(Math.random() * numOfRows);
                var randomColIndex = Math.floor(Math.random() * numOfColumns);

                if (board[randomRowIndex][randomColIndex] !== 'B') {
                    board[randomRowIndex][randomColIndex] = 'B';
                    nubmerOfBombsPlaced++;
                };

                board[randomRowIndex][randomColIndex] = 'B';
                nubmerOfBombsPlaced++;
            };
            return board;
        }
    }]);

    return Board;
}();

;