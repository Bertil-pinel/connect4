import Board from "../src/Board.js";
import Player from "../src/Player.js";

/**
 * @jest-environment jsdom
 */


test('Board constructor', () => {
  let fakeContent = document.createElement('div');
  
  let fakeInfo = document.createElement('div');
  let player = new Player(1,'yellow', fakeInfo);

  let board = new Board(8,7,125,fakeContent,player);
  
  expect(board.width).toBe(8);
  expect(board.blockSize).toBe(125);
});

test('Board clear function', () => {
  let fakeContent = document.createElement('div');
  
  let fakeInfo = document.createElement('div');
  let player = new Player(1,'yellow', fakeInfo);

  let board = new Board(8,7,125,fakeContent,player);
  board.clear()
  expect(document.getElementById('board')).toBe(null);
});