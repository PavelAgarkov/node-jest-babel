import {execAction, getStore} from "../../files/redux";

test('redux store', () => {
    let store = getStore();
    execAction(store, 'counter/incremented');
    execAction(store, 'counter/incremented');
    execAction(store, 'counter/decremented');
});