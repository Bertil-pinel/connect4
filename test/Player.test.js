import Player from "../src/Player.js";

/**
 * @jest-environment jsdom
 */


test('player constructor', () => {
    let fakeInfo = document.createElement('div');
    let player = new Player(1,'yellow', fakeInfo);
    expect(player.number).toBe(1);
    expect(player.color).toBe('yellow');
  });

test('player clear function', () => {
    let fakeInfo = document.createElement('div');
    let player = new Player(1,'yellow', fakeInfo);
    player.clear()
    expect(document.getElementById('player'+1)).toBe(null);
  });