const redux = require('redux');

const counterReducer = (state = { sum: 5 }, action) => {
    return {
        sum: state.sum + 1
    }
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latetsState = store.getState();
    console.log(latetsState);
}

store.subscribe(counterSubscriber)

store.dispatch({ type: 'increment' })