import Tos from '../../src/to.js';
import {getStore, execAction} from "../../redux";

let tos = new Tos('123', 'sert');

test('adds 1 + 2 to equal 3', () => {
    expect(tos.sum(5, 2)).toBe(7);
});

test('redux store', () => {
    let store = getStore();
    execAction(store, 'counter/incremented');
    execAction(store, 'counter/incremented');
    execAction(store, 'counter/decremented');
});
