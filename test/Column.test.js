import Column from "../src/Column.js";

/**
 * @jest-environment jsdom
 */


test('Column constructor', () => {
    let fakeBoard = document.createElement('div');
    fakeBoard.id='board'
    fakeBoard.dataset.MaxPlayer = 2
    let column =  new Column(1,875,750,125,fakeBoard);
    expect(column.id).toBe(1);
    expect(column.height).toBe(750);
    expect(column.blockSize).toBe(125);
  });