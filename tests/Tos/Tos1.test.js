import Tos from '../../src/to.js';

let tos = new Tos('123', 'sert');

test('adds 1 + 2 to equal 3', () => {
    expect(tos.sum(5, 2)).toBe(7);
});