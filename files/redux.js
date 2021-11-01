import {createStore} from 'redux';

function counterReducer(state = {value: 0}, action) {
    switch (action.type) {
        case 'counter/incremented':
            return {value: state.value + 1};
        case 'counter/decremented':
            return {value: state.value - 1};
        default:
            return state;
    }
}

export function getStore() {
    let store = createStore(counterReducer);
    store.subscribe(() => console.log(store.getState()));

    return store;
}

export function execAction(store, action) {
    store.dispatch({type: action});
}




