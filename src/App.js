// PINEL-GUINARD Bertil
import Player from './Player.js';
import Board from './Board.js';

const canvasWidth = 875;
const canvasHeight = 750 ;
const blockSize = 125; // en pixels
const widthInBlocks = 7;
const heightInBlocks = 6;
const contentHTML = document.getElementById('content');
const infoHTML = document.getElementById('info');

var player1;
var player2;
var board;

// canvas.width = canvasWidth;
// canvas.height = canvasHeight;
const body = document.querySelector('body');

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

function init() // Puts the game in its initial state
{
    
    player1 = new Player(1,'Balloon',infoHTML)
    player2 = new Player(2,'Frisbee', infoHTML)

    board = new Board(widthInBlocks,heightInBlocks,blockSize,contentHTML,choose([player1,player2]));

    
    body.addEventListener('keydown', restart); // Creates the event listener that listen for direction key
}

function restart(e) { // When space is pressed, the game launches
    if(e.key == ' '){
        board.clear();
        player1.clear();
        player2.clear();
        init();
    }
}


init(); //start of the game, 1st initialization of my game
