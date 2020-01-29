# Minesweeper Terminal Application
In this porjcet I built a terminal based Minesweeper game using vanilla JS (ES6). This project was a part of a continuing education course I took on creating Front-End Web Applications. This was an introductory projcet to get familiary with some of the newer ES6 syntax.

# How to launch the application

To play Minesweeper, we will create instances of MineSweeperGame in command line.

- In the command line, navigate to the lib directory and run `node`
- Run `.load game.js` to load the contents of this file.
- Then create a Game instance and run commands like so:
- let game = new Game(3, 3, 3);
- game.playMove(0, 1);
- game.playMove(1, 2);
- When done run `.exit`
